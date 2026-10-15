// Usage: node run.js dist/rspack  (loads every chunk in order, like a browser <script> list)
const fs = require('fs'), path = require('path');
const dir = path.resolve(process.argv[2]);
global.self = global;
const order = ['runtime.js', 'v.js', 'main.js'];
const files = fs.existsSync(path.join(dir, 'runtime.js')) ? order : ['main.js'];
for (const f of files) require(path.join(dir, f));
