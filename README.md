# Rspack: AMD dependency `'exports'` compiles to `__webpack_exports__`

Minimal reproduction. With `amd: {}`, a module that does `define([..., 'exports'], fn)` gets
`__webpack_exports__` instead of the module's `exports`.

```sh
npm i
npm run build
npm run run:all
```

Expected output (webpack 5.111.1 behaviour):

```
== webpack
RESULT: keys = [ 'Model', 'MyLib' ] | typeof Model = function
== webpack-split
RESULT: keys = [ 'Model', 'MyLib' ] | typeof Model = function
```

Actual with @rspack/core 2.2.9:

```
== rspack
RESULT: keys = [ 'MyLib' ] | typeof Model = undefined
== rspack-split
ReferenceError: __webpack_exports__ is not defined
```

Generated code: `grep -n "__rspack_amd_deps =" dist/rspack/main.js`
