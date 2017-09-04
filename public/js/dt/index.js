webpackJsonp([0],{

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(58)
}
var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(60),
  /* template */
  __webpack_require__(61),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-3ea6858a",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "G:\\LpgProject\\resources\\assets\\dt\\page\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3ea6858a", Component.options)
  } else {
    hotAPI.reload("data-v-3ea6858a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(59);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(11)("32dcc614", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3ea6858a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3ea6858a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "\n.layout[data-v-3ea6858a]{\n    background: #f5f7f9;\n    position: relative;\n    overflow: hidden;\n}\n.layout-breadcrumb[data-v-3ea6858a]{\n    padding: 10px 15px 0;\n}\n.layout-content[data-v-3ea6858a]{\n    min-height: 200px;\n    margin: 15px;\n    overflow: hidden;\n    background: #fff;\n    border-radius: 4px;\n}\n.layout-content-main[data-v-3ea6858a]{\n    padding: 10px;\n}\n.layout-copy[data-v-3ea6858a]{\n    text-align: center;\n    padding: 10px 0 20px;\n    color: #9ea7b4;\n}\n.layout-menu-left[data-v-3ea6858a]{\n    background: #464c5b;\n}\n.layout-header[data-v-3ea6858a]{\n    height: 60px;\n    background: #fff;\n    box-shadow: 0 1px 1px rgba(0,0,0,.1);\n}\n.layout-logo-left[data-v-3ea6858a]{\n    width: 90%;\n    height: 30px;\n    background: #5b6270;\n    border-radius: 3px;\n    margin: 15px auto;\n}\n.layout-ceiling-main a[data-v-3ea6858a]{\n    font-size: 14px;\n    display: block;\n    float: left;\n    color: #9ba7b5;\n    height: 60px;\n    line-height: 60px;\n}\n.layout-hide-text .layout-text[data-v-3ea6858a]{\n    display: none;\n}\n.ivu-col[data-v-3ea6858a]{\n    transition: width .2s ease-in-out;\n}\n.layout-ceiling[data-v-3ea6858a]{\n    float: right;\n    overflow: hidden;\n    margin-right: 15px;\n}\n.layout-ceiling-main span[data-v-3ea6858a]{\n    margin: 0 10px;\n    height: 60px;\n    line-height: 58px;\n    display: block;\n    float: left;\n}\n", ""]);

// exports


/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            spanLeft: 3,
            spanRight: 21
        };
    },

    computed: {
        iconSize: function iconSize() {
            return this.spanLeft === 3 ? 14 : 24;
        }
    },
    methods: {
        toggleClick: function toggleClick() {
            if (this.spanLeft === 3) {
                this.spanLeft = 2;
                this.spanRight = 22;
            } else {
                this.spanLeft = 3;
                this.spanRight = 21;
            }
        }
    }
});

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "layout",
    class: {
      'layout-hide-text': _vm.spanLeft < 3
    }
  }, [_c('Row', {
    attrs: {
      "type": "flex"
    }
  }, [_c('Col', {
    staticClass: "layout-menu-left",
    attrs: {
      "span": _vm.spanLeft
    }
  }, [_c('Menu', {
    attrs: {
      "active-name": "1",
      "theme": "dark",
      "width": "auto"
    }
  }, [_c('div', {
    staticClass: "layout-logo-left"
  }), _vm._v(" "), _c('Submenu', {
    attrs: {
      "name": "1"
    }
  }, [_c('template', {
    slot: "title"
  }, [_c('Icon', {
    attrs: {
      "type": "ios-navigate",
      "size": _vm.iconSize
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "layout-text"
  }, [_vm._v("导航一")])], 1), _vm._v(" "), _c('MenuItem', {
    attrs: {
      "name": "1-1"
    }
  }, [_c('Icon', {
    attrs: {
      "type": "ios-navigate",
      "size": _vm.iconSize
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "layout-text"
  }, [_vm._v("选项 1")])], 1)], 2), _vm._v(" "), _c('MenuItem', {
    attrs: {
      "name": "2"
    }
  }, [_c('Icon', {
    attrs: {
      "type": "ios-keypad",
      "size": _vm.iconSize
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "layout-text"
  }, [_vm._v("选项 2")])], 1), _vm._v(" "), _c('MenuItem', {
    attrs: {
      "name": "3"
    }
  }, [_c('Icon', {
    attrs: {
      "type": "ios-analytics",
      "size": _vm.iconSize
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "layout-text"
  }, [_vm._v("选项 3")])], 1)], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": _vm.spanRight
    }
  }, [_c('div', {
    staticClass: "layout-header"
  }, [_c('Button', {
    attrs: {
      "type": "text"
    },
    on: {
      "click": _vm.toggleClick
    }
  }, [_c('Icon', {
    attrs: {
      "type": "navicon",
      "size": "32"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "layout-ceiling"
  }, [_c('div', {
    staticClass: "layout-ceiling-main"
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("注册登录")]), _vm._v(" "), _c('span', [_vm._v("|")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("帮助中心")]), _vm._v(" "), _c('span', [_vm._v("|")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("安全中心")]), _vm._v(" "), _c('span', [_vm._v("|")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("服务大厅")])])])], 1), _vm._v(" "), _c('div', {
    staticClass: "layout-breadcrumb"
  }, [_c('Breadcrumb', [_c('BreadcrumbItem', {
    attrs: {
      "href": "/index"
    }
  }, [_vm._v("首页")]), _vm._v(" "), _c('BreadcrumbItem', {
    attrs: {
      "href": "/index/aaa"
    }
  }, [_vm._v("应用中心")]), _vm._v(" "), _c('BreadcrumbItem', [_vm._v("某应用")])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "layout-content"
  }, [_c('div', {
    staticClass: "layout-content-main"
  }, [_vm._v("内容区域")])]), _vm._v(" "), _c('div', {
    staticClass: "layout-copy"
  }, [_vm._v("\n            2011-2016 © TalkingData\n        ")])])], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3ea6858a", module.exports)
  }
}

/***/ })

});