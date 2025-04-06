// // copy-static.js
// const fs = require('fs');
// const path = require('path');

// // Create dist directory if it doesn't exist
// if (!fs.existsSync('./dist')) {
//   fs.mkdirSync('./dist');
// }

// // Copy HTML file
// fs.copyFileSync('./src/popup.html', './dist/popup.html');

// // Copy manifest.json
// fs.copyFileSync('./src/manifest.json', './dist/manifest.json');

// // Copy icons (assuming they're in an 'icons' folder)
// if (!fs.existsSync('./dist/icons')) {
//   fs.mkdirSync('./dist/icons');
// }

// // Copy each icon
// ['icon16.png', 'icon48.png', 'icon128.png'].forEach(icon => {
//   try {
//     fs.copyFileSync(`./src/icons/${icon}`, `./dist/icons/${icon}`);
//   } catch (err) {
//     console.warn(`Warning: Could not copy ${icon}`);
//   }
// });

// console.log('Static files copied to dist folder');