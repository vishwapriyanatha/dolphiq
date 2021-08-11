(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default-settings"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Layouts/Settings.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Layouts/Settings.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuetify_lib_mixins_proxyable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/mixins/proxyable */ "./node_modules/vuetify/lib/mixins/proxyable/index.js");
/* harmony import */ var vuex_pathify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex-pathify */ "./node_modules/vuex-pathify/dist/vuex-pathify.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
// Mixins
 // Vuex


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'DashboardCoreSettings',
  mixins: [vuetify_lib_mixins_proxyable__WEBPACK_IMPORTED_MODULE_0__["default"]],
  data: function data() {
    return {
      color: '#E91E63',
      colors: ['#9C27b0', '#00CAE3', '#4CAF50', '#ff9800', '#E91E63', '#FF5252'],
      menu: false,
      saveImage: ''
    };
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex_pathify__WEBPACK_IMPORTED_MODULE_1__["sync"])('app', ['drawer', 'drawerImage', 'mini'])), Object(vuex_pathify__WEBPACK_IMPORTED_MODULE_1__["sync"])('user', ['drawer@gradient', 'drawer@image'])), Object(vuex_pathify__WEBPACK_IMPORTED_MODULE_1__["get"])('user', ['images', 'gradients'])),
  watch: {
    color: function color(val) {
      this.$vuetify.theme.themes[this.isDark ? 'dark' : 'light'].primary = val;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Layouts/Settings.vue?vue&type=template&id=02f0c6f4&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Layouts/Settings.vue?vue&type=template&id=02f0c6f4& ***!
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
    "div",
    { attrs: { id: "settings-wrapper" } },
    [
      _c(
        "v-card",
        {
          staticClass: "py-2 px-4",
          staticStyle: {
            position: "fixed",
            top: "115px",
            right: "-35px",
            "border-radius": "8px",
            "z-index": "1"
          },
          attrs: {
            id: "settings",
            color: "rgba(0, 0, 0, .3)",
            dark: "",
            flat: "",
            link: "",
            "min-width": "100"
          }
        },
        [
          _c("v-icon", { attrs: { large: "" } }, [
            _vm._v("\n      mdi-cog\n    ")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-menu",
        {
          attrs: {
            "close-on-content-click": false,
            activator: "#settings",
            bottom: "",
            "content-class": "v-settings",
            left: "",
            "nudge-left": "8",
            "offset-x": "",
            origin: "top right",
            transition: "scale-transition"
          },
          model: {
            value: _vm.menu,
            callback: function($$v) {
              _vm.menu = $$v
            },
            expression: "menu"
          }
        },
        [
          _c(
            "v-card",
            { staticClass: "text-center mb-0", attrs: { width: "300" } },
            [
              _c(
                "v-card-text",
                [
                  _c("strong", { staticClass: "mb-3 d-inline-block" }, [
                    _vm._v("SIDEBAR FILTERS")
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-item-group",
                    {
                      attrs: { mandatory: "" },
                      model: {
                        value: _vm.color,
                        callback: function($$v) {
                          _vm.color = $$v
                        },
                        expression: "color"
                      }
                    },
                    _vm._l(_vm.colors, function(color) {
                      return _c("v-item", {
                        key: color,
                        attrs: { value: color },
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "default",
                              fn: function(ref) {
                                var active = ref.active
                                var toggle = ref.toggle
                                return [
                                  _c("v-avatar", {
                                    staticClass: "v-settings__item mx-1",
                                    class: active && "v-settings__item--active",
                                    attrs: { color: color, size: "25" },
                                    on: { click: toggle }
                                  })
                                ]
                              }
                            }
                          ],
                          null,
                          true
                        )
                      })
                    }),
                    1
                  ),
                  _vm._v(" "),
                  _c("v-divider", { staticClass: "my-4 secondary" }),
                  _vm._v(" "),
                  _c("strong", { staticClass: "mb-3 d-inline-block" }, [
                    _vm._v("SIDEBAR BACKGROUND")
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-item-group",
                    {
                      attrs: { mandatory: "" },
                      model: {
                        value: _vm.gradient,
                        callback: function($$v) {
                          _vm.gradient = $$v
                        },
                        expression: "gradient"
                      }
                    },
                    _vm._l(_vm.gradients, function(scrim, index) {
                      return _c("v-item", {
                        key: scrim,
                        staticClass: "mx-1",
                        attrs: { value: index },
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "default",
                              fn: function(ref) {
                                var active = ref.active
                                var toggle = ref.toggle
                                return [
                                  _c("v-avatar", {
                                    staticClass: "v-settings__item",
                                    class: active && "v-settings__item--active",
                                    attrs: { color: scrim, size: "24" },
                                    on: { click: toggle }
                                  })
                                ]
                              }
                            }
                          ],
                          null,
                          true
                        )
                      })
                    }),
                    1
                  ),
                  _vm._v(" "),
                  _c("v-divider", { staticClass: "my-4 secondary" }),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    { attrs: { align: "center", "no-gutters": "" } },
                    [
                      _c("v-col", { attrs: { cols: "auto" } }, [
                        _vm._v("\n            Dark Mode\n          ")
                      ]),
                      _vm._v(" "),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "auto" } },
                        [
                          _c("v-switch", {
                            staticClass: "ma-0 pa-0",
                            attrs: { color: "secondary", "hide-details": "" },
                            model: {
                              value: _vm.$vuetify.theme.dark,
                              callback: function($$v) {
                                _vm.$set(_vm.$vuetify.theme, "dark", $$v)
                              },
                              expression: "$vuetify.theme.dark"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-divider", { staticClass: "my-4 secondary" }),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    { attrs: { align: "center", "no-gutters": "" } },
                    [
                      _c("v-col", { attrs: { cols: "auto" } }, [
                        _vm._v("\n            Sidebar Mini\n          ")
                      ]),
                      _vm._v(" "),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "auto" } },
                        [
                          _c("v-switch", {
                            staticClass: "ma-0 pa-0",
                            attrs: { color: "secondary", "hide-details": "" },
                            model: {
                              value: _vm.mini,
                              callback: function($$v) {
                                _vm.mini = $$v
                              },
                              expression: "mini"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-divider", { staticClass: "my-4 secondary" }),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    { attrs: { align: "center", "no-gutters": "" } },
                    [
                      _c("v-col", { attrs: { cols: "auto" } }, [
                        _vm._v("\n            Sidebar Image\n          ")
                      ]),
                      _vm._v(" "),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "auto" } },
                        [
                          _c("v-switch", {
                            staticClass: "ma-0 pa-0",
                            attrs: { color: "secondary", "hide-details": "" },
                            model: {
                              value: _vm.drawerImage,
                              callback: function($$v) {
                                _vm.drawerImage = $$v
                              },
                              expression: "drawerImage"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-divider", { staticClass: "my-4 secondary" }),
                  _vm._v(" "),
                  _c("strong", { staticClass: "mb-3 d-inline-block" }, [
                    _vm._v("IMAGES")
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-card",
                    { attrs: { disabled: !_vm.drawerImage, flat: "" } },
                    [
                      _c(
                        "v-item-group",
                        {
                          staticClass: "d-flex justify-space-between mb-3",
                          model: {
                            value: _vm.image,
                            callback: function($$v) {
                              _vm.image = $$v
                            },
                            expression: "image"
                          }
                        },
                        _vm._l(_vm.images, function(img, index) {
                          return _c("v-item", {
                            key: img,
                            staticClass: "mx-1",
                            attrs: { value: index },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "default",
                                  fn: function(ref) {
                                    var active = ref.active
                                    var toggle = ref.toggle
                                    return [
                                      _c(
                                        "v-sheet",
                                        {
                                          staticClass:
                                            "d-inline-block v-settings__item",
                                          class:
                                            active &&
                                            "v-settings__item--active",
                                          on: { click: toggle }
                                        },
                                        [
                                          _c("v-img", {
                                            attrs: {
                                              src: img,
                                              height: "100",
                                              width: "50"
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    ]
                                  }
                                }
                              ],
                              null,
                              true
                            )
                          })
                        }),
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      staticClass: "mb-3",
                      attrs: {
                        block: "",
                        color: "grey darken-1",
                        dark: "",
                        href: "https://vuetifyjs.com/components/api-explorer",
                        rel: "noopener",
                        target: "_blank"
                      }
                    },
                    [_vm._v("\n          Vuetify Documentation\n        ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        block: "",
                        color: "info",
                        href:
                          "https://store.vuetifyjs.com/products/vuetify-material-dashboard-free",
                        rel: "noopener",
                        target: "_blank"
                      }
                    },
                    [_vm._v("\n          Get Free Demo\n        ")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "my-12" }),
                  _vm._v(" "),
                  _c("div", [
                    _c("strong", { staticClass: "mb-3 d-inline-block" }, [
                      _vm._v("THANK YOU FOR SHARING!")
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      staticClass: "ma-1",
                      attrs: { color: "#55acee", dark: "", rounded: "" }
                    },
                    [
                      _c("v-icon", [_vm._v("mdi-twitter")]),
                      _vm._v("\n          - 45\n        ")
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      staticClass: "ma-1",
                      attrs: {
                        color: "#3b5998",
                        dark: "",
                        default: "",
                        rounded: ""
                      }
                    },
                    [
                      _c("v-icon", [_vm._v("mdi-facebook")]),
                      _vm._v("\n          - 50\n        ")
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vuetify/lib/mixins/proxyable/index.js":
/*!************************************************************!*\
  !*** ./node_modules/vuetify/lib/mixins/proxyable/index.js ***!
  \************************************************************/
/*! exports provided: factory, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "factory", function() { return factory; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

function factory(prop = 'value', event = 'change') {
  return vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
    name: 'proxyable',
    model: {
      prop,
      event
    },
    props: {
      [prop]: {
        required: false
      }
    },

    data() {
      return {
        internalLazyValue: this[prop]
      };
    },

    computed: {
      internalValue: {
        get() {
          return this.internalLazyValue;
        },

        set(val) {
          if (val === this.internalLazyValue) return;
          this.internalLazyValue = val;
          this.$emit(event, val);
        }

      }
    },
    watch: {
      [prop](val) {
        this.internalLazyValue = val;
      }

    }
  });
}
/* eslint-disable-next-line @typescript-eslint/no-redeclare */

const Proxyable = factory();
/* harmony default export */ __webpack_exports__["default"] = (Proxyable);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./resources/js/components/Layouts/Settings.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/Layouts/Settings.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Settings_vue_vue_type_template_id_02f0c6f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Settings.vue?vue&type=template&id=02f0c6f4& */ "./resources/js/components/Layouts/Settings.vue?vue&type=template&id=02f0c6f4&");
/* harmony import */ var _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Settings.vue?vue&type=script&lang=js& */ "./resources/js/components/Layouts/Settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Settings_vue_vue_type_template_id_02f0c6f4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Settings_vue_vue_type_template_id_02f0c6f4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Layouts/Settings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Layouts/Settings.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Layouts/Settings.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Layouts/Settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Layouts/Settings.vue?vue&type=template&id=02f0c6f4&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Layouts/Settings.vue?vue&type=template&id=02f0c6f4& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_02f0c6f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=template&id=02f0c6f4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Layouts/Settings.vue?vue&type=template&id=02f0c6f4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_02f0c6f4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_02f0c6f4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);