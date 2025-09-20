const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",                            // Development mode for easier debugging
    entry: "./src/main.js",                        // Main JS entry point
    output: {
        filename: "main.js",                          // Output filename
        path: path.resolve(__dirname, "dist"),        // Output folder
        clean: true,
        publicPath: ""                                // Clean /dist before each build
    },
    devtool: "eval-source-map",                     // Show original source in browser devtools
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist"), // Serve files from /dist
        },
        watchFiles: ["./src/index.html"],          // Watch HTML changes too
        port: 8080,                                   // Dev server port
        open: true,                                   // Auto-open in browser
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",            // Use this HTML as base
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,                          // For .css files
                use: ["style-loader", "css-loader"],      // Load and inject CSS
            },
            {
                test: /\.html$/i,                         // For HTML file references (e.g., <img src>)
                loader: "html-loader",                    // Ensures images are processed
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,       // For image assets
                type: "asset/resource",                   // Handles image file imports in JS
            },
        ],
    },
};
