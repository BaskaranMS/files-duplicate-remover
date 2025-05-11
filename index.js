#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const https = require("https");
const http = require("http");
const { execFile } = require("child_process");
const { parse } = require("url");

const exeName = "files-duplicate-remover.exe";
const downloadUrl =
  "https://github.com/BaskaranMS/files-duplicate-remover/releases/download/FileDuplicateRemover/main.exe";
const targetPath = path.join(__dirname, exeName);

function downloadFile(url, dest, cb) {
  const parsedUrl = parse(url);
  const protocol = parsedUrl.protocol === "https:" ? https : http;

  protocol
    .get(url, (res) => {
      // 🔁 Handle redirects
      if (
        res.statusCode >= 300 &&
        res.statusCode < 400 &&
        res.headers.location
      ) {
        return downloadFile(res.headers.location, dest, cb);
      }

      if (res.statusCode !== 200) {
        return cb(new Error(`Download failed: ${res.statusCode}`));
      }

      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on("finish", () => file.close(cb));
    })
    .on("error", cb);
}

function runApp() {
  execFile(targetPath, [], (err, stdout, stderr) => {
    if (err) return console.error("Error:", err.message);
    if (stdout) console.log(stdout);
    if (stderr) console.error(stderr);
  });
}

if (!fs.existsSync(targetPath)) {
  console.log("Downloading files-duplicate-remover...");
  downloadFile(downloadUrl, targetPath, (err) => {
    if (err) return console.error("Failed:", err.message);
    fs.chmodSync(targetPath, 0o755);
    runApp();
  });
} else {
  runApp();
}
