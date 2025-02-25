import {
  Injectable,
  NgModule,
  Pipe
} from "./chunk-IJ2OTCV2.js";
import "./chunk-2CVCC5YH.js";

// node_modules/ng2-search-filter/ng2-search-filter.es5.js
var Ng2SearchPipe = function() {
  function Ng2SearchPipe2() {
  }
  Ng2SearchPipe2.prototype.transform = function(items, term) {
    if (!term || !items) return items;
    return Ng2SearchPipe2.filter(items, term);
  };
  Ng2SearchPipe2.filter = function(items, term) {
    var toCompare = term.toLowerCase();
    function checkInside(item, term2) {
      for (var property in item) {
        if (item[property] === null || item[property] == void 0) {
          continue;
        }
        if (typeof item[property] === "object") {
          if (checkInside(item[property], term2)) {
            return true;
          }
        }
        if (item[property].toString().toLowerCase().includes(toCompare)) {
          return true;
        }
      }
      return false;
    }
    return items.filter(function(item) {
      return checkInside(item, term);
    });
  };
  return Ng2SearchPipe2;
}();
Ng2SearchPipe.decorators = [{
  type: Pipe,
  args: [{
    name: "filter",
    pure: false
  }]
}, {
  type: Injectable
}];
Ng2SearchPipe.ctorParameters = function() {
  return [];
};
var Ng2SearchPipeModule = /* @__PURE__ */ function() {
  function Ng2SearchPipeModule2() {
  }
  return Ng2SearchPipeModule2;
}();
Ng2SearchPipeModule.decorators = [{
  type: NgModule,
  args: [{
    declarations: [Ng2SearchPipe],
    exports: [Ng2SearchPipe]
  }]
}];
Ng2SearchPipeModule.ctorParameters = function() {
  return [];
};
export {
  Ng2SearchPipe,
  Ng2SearchPipeModule
};
//# sourceMappingURL=ng2-search-filter.js.map
