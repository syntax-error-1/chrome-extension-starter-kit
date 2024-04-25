# Chrome Extension Starter Kit with React, Webpack, and Tailwind CSS

Starter template for creating Chrome extensions with React, Webpack, and Tailwind CSS, featuring pre-configured settings for faster development.

## Getting Started

Follow these steps to set up the development environment for your new extension.

### Prerequisites

- Node.js (recommended: Node v12 or higher)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/syntax-error-1/react-webpack-extension-starter.git


2. **Navigate to the cloned directory:**
   ```bash
    cd react-webpack-extension-starter

3. **Install the dependencies:**
   ```bash
    npm install


### Development
To start the development server:
   ```bash
    npm run dev
 ```

This command will bundle your extension using Webpack in development mode and watch for any changes you make.

### Building

To build the extension for production:
   ```bash
    npm run build
```

This command will prepare your extension for deployment by bundling it in production mode.

### Loading the Extension into the Browser

1. Open your browser and navigate to the extensions page (usually found at `chrome://extensions`).
2. Enable "Developer mode" at the top right corner.
3. Click "Load unpacked extension" and select the `dist` folder in your project directory. This folder contains the build output from Webpack.

### Important Files to Edit

- `popup.jsx`: This is the React component for the popup UI of your extension.
- `manifest.json`: Contains metadata and configuration settings for your extension.

 
