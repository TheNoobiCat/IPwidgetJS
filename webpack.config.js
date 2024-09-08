import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: 'html-loader',
            },
            {
                test: /\.css$/, // Matches all .css files
                use: [
                  'style-loader', // Injects CSS into the DOM
                  'css-loader',   // Translates CSS into CommonJS modules
                ],
              },
        ],
        
    },
    // Other configurations...
};
