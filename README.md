# Basic Info Site

This project is part of the Node.js course in The Odin Project. Its primary goal is to learn about Node.js by building a simple HTTP server that serves static HTML files. An Express version is also available to demonstrate a more structured approach to routing and serving files.

## How It Works

- **HTTP Server (index.js):**  
  Uses Node.js core modules (`http`, `url`, and `fs`) to serve HTML files based on the request URL.

- **Express Server (app.js):**  
  Uses Express along with Node's `path` module to simplify routing and file serving. Each route serves a specific HTML file from the root directory.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your computer.

### Installation and Running

1. **Clone the repository:**

   ```sh
   git clone https://github.com/kyusuku/basic-info-site.git
   cd basic-info-site
   ```

2. **Choose a version to run:**

   **Using the Node.js built-in server:**

   ```sh
   node index.js
   ```

   Open [http://localhost:8080](http://localhost:8080) in your web browser.

   **Using the Express server:**

   ```sh
   node app.js
   ```

   Open [http://localhost:3000](http://localhost:3000) in your web browser.

## File Structure

```
/odin-projects/basic-info-site
├── index.js         # Original server using Node.js modules
├── app.js           # Express version of the server
├── index.html       # Home page
├── about.html       # About page
├── contact-me.html  # Contact page
├── 404.html         # 404 error page
└── README.md        # Project documentation
```

## What I Learned

- Creating and managing an HTTP server with Node.js and Express.
- Parsing request URLs and basic routing.
- Serving static files using the Node.js `fs` module and Express's `sendFile` method.
- Implementing simple error handling.

## Acknowledgments

- **The Odin Project:** For providing excellent educational resources and guidance on this journey.
- **Node.js Documentation:** For comprehensive insights into the Node.js API.
- **Express:** For simplifying server creation and routing.
