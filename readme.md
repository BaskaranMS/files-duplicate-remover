# Files Duplicate Remover

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [How It Works](#how-it-works)
6. [Troubleshooting](#troubleshooting)
7. [Contributing](#contributing)
8. [License](#license)

## Overview

Files Duplicate Remover is a powerful GUI application that helps you find and manage duplicate files in your system. It scans directories, identifies duplicate files using MD5 hashing, and provides tools to preview, organize, and remove duplicates.

## Features

- 🕵️‍♂️ **Find duplicates** by content (MD5 hash), not just by filename
- 👁️ **Preview files** before deletion (images, text, PDFs, Word, Excel, PowerPoint)
- 📂 **Multiple actions** for duplicates: move to folder, delete, rename, or save copies
- 🖼️ **Image preview** with zoom and scaling
- 📄 **Text/document preview** for various file types
- ✅ **Batch operations** to handle multiple files at once
- 🚀 **Fast scanning** with progress tracking
- 🛡️ **Safety features** to prevent accidental deletion

## Installation

### Prerequisites

- Node.js (for npm/npx)
- Python 3.6 or later
- Required Python packages (will be installed automatically)

### Installation Methods

#### Method 1: Using npx (recommended - no installation needed)

```
npx files-duplicate-remover
```

#### Method 2: Global installation

```
npm install -g files-duplicate-remover
files-duplicate-remover
```

#### Method 3: Manual Python installation

If you prefer to run directly from Python:

```
pip install -r requirements.txt
python files_duplicate_remover.py
```

## Usage

### Basic Steps

1. **Launch the application** using one of the installation methods above
2. **Select a directory** to scan by clicking "Browse" or entering the path manually
3. **Click "Scan for Duplicates"** to start the scanning process
4. **Review the results** - duplicates are grouped together
5. **Select files** to manage by clicking the checkbox (☐ → ✔)
6. **Choose an action**:
   - Move selected to duplicates folder
   - Delete selected files
   - Save selected files to another location
   - Preview files before taking action

### Detailed Interface Guide

#### 1. Directory Selection

- **Scan Directory**: Choose the folder you want to scan for duplicates
- **Duplicates Folder**: Specify where to move duplicates (default: "duplicates" in the scan directory)

#### 2. File Operations

- **Preview (👁️)**: Click to preview the file in the right panel
- **Edit (✏️)**: Click to rename the file
- **Open (📂)**: Click to open the file location in your file explorer
- **Delete (❌)**: Click to delete the individual file

#### 3. Batch Actions

- **Select All/Deselect All**: Quickly select or deselect all files
- **Move Selected**: Move all selected files to the duplicates folder
- **Delete Selected**: Permanently delete all selected files (with confirmation)
- **Save Selected As**: Copy selected files to a new location

#### 4. File Preview

The preview panel shows different tabs based on file type:

- **Info**: Basic file information (size, dates, type)
- **Image**: For image files (JPEG, PNG, etc.)
- **Text**: For text-based files (TXT, code, etc.)
- **Data**: For structured data (CSV, Excel)
- **PDF**: For PDF documents

## How It Works

1. **Scanning Process**:

   - The application recursively scans all files in the selected directory
   - Calculates MD5 hashes of file contents to identify true duplicates
   - Skips system/hidden files and the duplicates folder itself
   - Shows progress during scanning

2. **Duplicate Identification**:

   - Files with identical MD5 hashes are grouped together
   - File size and type information is displayed for verification

3. **Safety Features**:
   - Files are never deleted without confirmation
   - Original files are moved rather than deleted by default
   - Preview functionality helps verify files before action

## Troubleshooting

### Common Issues

**1. Application won't start:**

- Ensure you have Python 3.6+ installed
- Check that all required packages are installed (`pip install -r requirements.txt`)
- On Windows, try running as administrator if you encounter permission issues

**2. Scanning is slow:**

- The speed depends on the number and size of files
- For large directories, be patient - the MD5 calculation takes time for large files
- Exclude unnecessary directories if possible

**3. Preview not working for some files:**

- Some file types require additional system libraries
- Office files (Word, Excel, PPT) need Microsoft Office or LibreOffice installed
- PDF preview requires Ghostscript on some systems

**4. Permission errors:**

- The application needs read access to scan files and write access to move/delete
- On Linux/macOS, run with `sudo` if needed (but be careful with deletions)
- On Windows, ensure you have proper permissions for the directories

### Advanced Options

You can modify these Python constants at the top of the script if needed:

```
sys.setrecursionlimit(10000)  # Increase if you get recursion errors
DEFAULT_DUPLICATE_FOLDER = "duplicates"  # Change default duplicates folder name
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Note:** Always back up important files before performing bulk delete operations. The developers are not responsible for data loss.
