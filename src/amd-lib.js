(function (root, factory) {
  define(['underscore', 'jquery', 'exports'], function (_, $, exports) {
    root.MyLib = factory(root, exports, _, $);
  });
})(this, function (root, lib, _, $) {
  lib.Model = function () {};
  return lib;
});
