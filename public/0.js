(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Layouts/ListItem.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Layouts/ListItem.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  name: 'DefaultListItem',
  props: {
    item: {
      type: Object,
      "default": function _default() {
        return {};
      }
    }
  },
  computed: {
    title: function title() {
      var matches = this.item.title.match(/\b(\w)/g);
      return matches.join('');
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Layouts/ListItem.vue?vue&type=template&id=69e024a2&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Layouts/ListItem.vue?vue&type=template&id=69e024a2& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-list-item",
    _vm._g(
      _vm._b(
        {
          staticClass: "py-1",
          attrs: {
            href: _vm.item.href,
            rel: _vm.item.href ? "nofollow" : undefined,
            target: _vm.item.href ? "_blank" : undefined,
            to: _vm.item.to,
            "active-class": "primary white--text",
            link: ""
          }
        },
        "v-list-item",
        _vm.$attrs,
        false
      ),
      _vm.$listeners
    ),
    [
      !_vm.item.icon
        ? _c(
            "v-list-item-icon",
            {
              staticClass:
                "text-caption text-uppercase justify-center ml-1 my-2 align-self-center"
            },
            [_vm._v("\n    " + _vm._s(_vm.title) + "\n  ")]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.item.avatar
        ? _c(
            "v-list-item-avatar",
            [_c("v-img", { attrs: { src: _vm.item.avatar } })],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.item.icon
        ? _c(
            "v-list-item-icon",
            { staticClass: "my-2 align-self-center" },
            [
              _c("v-icon", { domProps: { textContent: _vm._s(_vm.item.icon) } })
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.item.title
        ? _c(
            "v-list-item-content",
            [
              _c("v-list-item-title", {
                domProps: { textContent: _vm._s(_vm.item.title) }
              })
            ],
            1
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Layouts/ListItem.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/Layouts/ListItem.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListItem_vue_vue_type_template_id_69e024a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListItem.vue?vue&type=template&id=69e024a2& */ "./resources/js/components/Layouts/ListItem.vue?vue&type=template&id=69e024a2&");
/* harmony import */ var _ListItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListItem.vue?vue&type=script&lang=js& */ "./resources/js/components/Layouts/ListItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ListItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListItem_vue_vue_type_template_id_69e024a2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ListItem_vue_vue_type_template_id_69e024a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Layouts/ListItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Layouts/ListItem.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Layouts/ListItem.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Layouts/ListItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Layouts/ListItem.vue?vue&type=template&id=69e024a2&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Layouts/ListItem.vue?vue&type=template&id=69e024a2& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListItem_vue_vue_type_template_id_69e024a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListItem.vue?vue&type=template&id=69e024a2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Layouts/ListItem.vue?vue&type=template&id=69e024a2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListItem_vue_vue_type_template_id_69e024a2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListItem_vue_vue_type_template_id_69e024a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);