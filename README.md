# Basic Info Site

This project is part of the Node.js course in The Odin Project. Its primary goal is to learn about Node.js by building a simple HTTP server that serves static HTML files.

## Overview

In this project, you will learn how to:

- Create an HTTP server using Node.js' built-in modules.
- Parse URLs and route requests accordingly.
- Serve static HTML files using the file system.
- Implement simple error handling for non-existent pages.

## How It Works

- **HTTP Server:** The server is built using the Node.js `http` module.
- **Routing:** The `url` module parses the incoming request URLs to determine which HTML file to serve.
- **File Handling:** The `fs` module is used to read and serve HTML files.
- **Error Handling:** If an HTML file cannot be found, the server returns a 404 error page.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your computer.

### Installation and Running

1. **Clone the repository:**
   ```sh
   git clone https://github.com/kyusuku/basic-info-site
   cd basic-info-site
   ```
2. **Run the server:**
   ```sh
   node index.js
   ```
3. **View in Browser:**
   Open [http://localhost:8080](http://localhost:8080) in your web browser.

## File Structure

```
/odin-projects/basic-info-site
├── index.js         # Main server file
├── index.html       # Home page
├── about.html       # About page
├── contact-me.html  # Contact page
├── 404.html         # 404 error page
└── README.md        # Project documentation
```

## What I Learned

- Creating and managing an HTTP server with Node.js.
- Parsing request URLs and basic routing.
- Serving static files using the Node.js `fs` module.
- Implementing simple error handling.

## Acknowledgments

- **The Odin Project:** For providing excellent educational resources and guidance on this journey.
- **Node.js Documentation:** For comprehensive insights into the Node.js API.
