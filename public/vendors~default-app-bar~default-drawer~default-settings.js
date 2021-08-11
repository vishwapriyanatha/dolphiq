(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~default-app-bar~default-drawer~default-settings"],{

/***/ "./node_modules/vue-class-component/dist/vue-class-component.esm.js":
/*!**************************************************************************!*\
  !*** ./node_modules/vue-class-component/dist/vue-class-component.esm.js ***!
  \**************************************************************************/
/*! exports provided: default, createDecorator, mixins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDecorator", function() { return createDecorator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixins", function() { return mixins; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/**
  * vue-class-component v7.2.6
  * (c) 2015-present Evan You
  * @license MIT
  */


function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

// The rational behind the verbose Reflect-feature check below is the fact that there are polyfills
// which add an implementation for Reflect.defineMetadata but not for Reflect.getOwnMetadataKeys.
// Without this check consumers will encounter hard to track down runtime errors.
function reflectionIsSupported() {
  return typeof Reflect !== 'undefined' && Reflect.defineMetadata && Reflect.getOwnMetadataKeys;
}
function copyReflectionMetadata(to, from) {
  forwardMetadata(to, from);
  Object.getOwnPropertyNames(from.prototype).forEach(function (key) {
    forwardMetadata(to.prototype, from.prototype, key);
  });
  Object.getOwnPropertyNames(from).forEach(function (key) {
    forwardMetadata(to, from, key);
  });
}

function forwardMetadata(to, from, propertyKey) {
  var metaKeys = propertyKey ? Reflect.getOwnMetadataKeys(from, propertyKey) : Reflect.getOwnMetadataKeys(from);
  metaKeys.forEach(function (metaKey) {
    var metadata = propertyKey ? Reflect.getOwnMetadata(metaKey, from, propertyKey) : Reflect.getOwnMetadata(metaKey, from);

    if (propertyKey) {
      Reflect.defineMetadata(metaKey, metadata, to, propertyKey);
    } else {
      Reflect.defineMetadata(metaKey, metadata, to);
    }
  });
}

var fakeArray = {
  __proto__: []
};
var hasProto = fakeArray instanceof Array;
function createDecorator(factory) {
  return function (target, key, index) {
    var Ctor = typeof target === 'function' ? target : target.constructor;

    if (!Ctor.__decorators__) {
      Ctor.__decorators__ = [];
    }

    if (typeof index !== 'number') {
      index = undefined;
    }

    Ctor.__decorators__.push(function (options) {
      return factory(options, key, index);
    });
  };
}
function mixins() {
  for (var _len = arguments.length, Ctors = new Array(_len), _key = 0; _key < _len; _key++) {
    Ctors[_key] = arguments[_key];
  }

  return vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
    mixins: Ctors
  });
}
function isPrimitive(value) {
  var type = _typeof(value);

  return value == null || type !== 'object' && type !== 'function';
}
function warn(message) {
  if (typeof console !== 'undefined') {
    console.warn('[vue-class-component] ' + message);
  }
}

function collectDataFromConstructor(vm, Component) {
  // override _init to prevent to init as Vue instance
  var originalInit = Component.prototype._init;

  Component.prototype._init = function () {
    var _this = this;

    // proxy to actual vm
    var keys = Object.getOwnPropertyNames(vm); // 2.2.0 compat (props are no longer exposed as self properties)

    if (vm.$options.props) {
      for (var key in vm.$options.props) {
        if (!vm.hasOwnProperty(key)) {
          keys.push(key);
        }
      }
    }

    keys.forEach(function (key) {
      Object.defineProperty(_this, key, {
        get: function get() {
          return vm[key];
        },
        set: function set(value) {
          vm[key] = value;
        },
        configurable: true
      });
    });
  }; // should be acquired class property values


  var data = new Component(); // restore original _init to avoid memory leak (#209)

  Component.prototype._init = originalInit; // create plain data object

  var plainData = {};
  Object.keys(data).forEach(function (key) {
    if (data[key] !== undefined) {
      plainData[key] = data[key];
    }
  });

  if (true) {
    if (!(Component.prototype instanceof vue__WEBPACK_IMPORTED_MODULE_0___default.a) && Object.keys(plainData).length > 0) {
      warn('Component class must inherit Vue or its descendant class ' + 'when class property is used.');
    }
  }

  return plainData;
}

var $internalHooks = ['data', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeDestroy', 'destroyed', 'beforeUpdate', 'updated', 'activated', 'deactivated', 'render', 'errorCaptured', 'serverPrefetch' // 2.6
];
function componentFactory(Component) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  options.name = options.name || Component._componentTag || Component.name; // prototype props.

  var proto = Component.prototype;
  Object.getOwnPropertyNames(proto).forEach(function (key) {
    if (key === 'constructor') {
      return;
    } // hooks


    if ($internalHooks.indexOf(key) > -1) {
      options[key] = proto[key];
      return;
    }

    var descriptor = Object.getOwnPropertyDescriptor(proto, key);

    if (descriptor.value !== void 0) {
      // methods
      if (typeof descriptor.value === 'function') {
        (options.methods || (options.methods = {}))[key] = descriptor.value;
      } else {
        // typescript decorated data
        (options.mixins || (options.mixins = [])).push({
          data: function data() {
            return _defineProperty({}, key, descriptor.value);
          }
        });
      }
    } else if (descriptor.get || descriptor.set) {
      // computed properties
      (options.computed || (options.computed = {}))[key] = {
        get: descriptor.get,
        set: descriptor.set
      };
    }
  });
  (options.mixins || (options.mixins = [])).push({
    data: function data() {
      return collectDataFromConstructor(this, Component);
    }
  }); // decorate options

  var decorators = Component.__decorators__;

  if (decorators) {
    decorators.forEach(function (fn) {
      return fn(options);
    });
    delete Component.__decorators__;
  } // find super


  var superProto = Object.getPrototypeOf(Component.prototype);
  var Super = superProto instanceof vue__WEBPACK_IMPORTED_MODULE_0___default.a ? superProto.constructor : vue__WEBPACK_IMPORTED_MODULE_0___default.a;
  var Extended = Super.extend(options);
  forwardStaticMembers(Extended, Component, Super);

  if (reflectionIsSupported()) {
    copyReflectionMetadata(Extended, Component);
  }

  return Extended;
}
var reservedPropertyNames = [// Unique id
'cid', // Super Vue constructor
'super', // Component options that will be used by the component
'options', 'superOptions', 'extendOptions', 'sealedOptions', // Private assets
'component', 'directive', 'filter'];
var shouldIgnore = {
  prototype: true,
  arguments: true,
  callee: true,
  caller: true
};

function forwardStaticMembers(Extended, Original, Super) {
  // We have to use getOwnPropertyNames since Babel registers methods as non-enumerable
  Object.getOwnPropertyNames(Original).forEach(function (key) {
    // Skip the properties that should not be overwritten
    if (shouldIgnore[key]) {
      return;
    } // Some browsers does not allow reconfigure built-in properties


    var extendedDescriptor = Object.getOwnPropertyDescriptor(Extended, key);

    if (extendedDescriptor && !extendedDescriptor.configurable) {
      return;
    }

    var descriptor = Object.getOwnPropertyDescriptor(Original, key); // If the user agent does not support `__proto__` or its family (IE <= 10),
    // the sub class properties may be inherited properties from the super class in TypeScript.
    // We need to exclude such properties to prevent to overwrite
    // the component options object which stored on the extended constructor (See #192).
    // If the value is a referenced value (object or function),
    // we can check equality of them and exclude it if they have the same reference.
    // If it is a primitive value, it will be forwarded for safety.

    if (!hasProto) {
      // Only `cid` is explicitly exluded from property forwarding
      // because we cannot detect whether it is a inherited property or not
      // on the no `__proto__` environment even though the property is reserved.
      if (key === 'cid') {
        return;
      }

      var superDescriptor = Object.getOwnPropertyDescriptor(Super, key);

      if (!isPrimitive(descriptor.value) && superDescriptor && superDescriptor.value === descriptor.value) {
        return;
      }
    } // Warn if the users manually declare reserved properties


    if ( true && reservedPropertyNames.indexOf(key) >= 0) {
      warn("Static property name '".concat(key, "' declared on class '").concat(Original.name, "' ") + 'conflicts with reserved property name of Vue internal. ' + 'It may cause unexpected behavior of the component. Consider renaming the property.');
    }

    Object.defineProperty(Extended, key, descriptor);
  });
}

function Component(options) {
  if (typeof options === 'function') {
    return componentFactory(options);
  }

  return function (Component) {
    return componentFactory(Component, options);
  };
}

Component.registerHooks = function registerHooks(keys) {
  $internalHooks.push.apply($internalHooks, _toConsumableArray(keys));
};

/* harmony default export */ __webpack_exports__["default"] = (Component);



/***/ }),

/***/ "./node_modules/vuex-pathify/dist/vuex-pathify.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/vuex-pathify/dist/vuex-pathify.esm.js ***!
  \************************************************************/
/*! exports provided: default, make, Payload, get, sync, call, Get, Sync, Call, commit, dispatch, registerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "make", function() { return store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Payload", function() { return Payload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sync", function() { return sync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "call", function() { return call; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Get", function() { return Get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sync", function() { return Sync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Call", function() { return Call; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commit", function() { return commit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatch", function() { return dispatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerModule", function() { return registerModule; });
/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-class-component */ "./node_modules/vue-class-component/dist/vue-class-component.esm.js");
/**
 * Bundle of: vuex-pathify
 * Generated: 2021-08-03
 * Version: 1.5.0
 */



var vuex = {
  /**
   * THIS OBJECT IS REPLACED AT RUNTIME WITH THE ACTUAL VUEX STORE
   */
  store: {
    state: null,

    commit: function commit () {
      if (true) {
        console.error('[Vuex Pathify] Plugin not initialized!');
      }
    },

    dispatch: function dispatch () {
      if (true) {
        console.error('[Vuex Pathify] Plugin not initialized!');
      }
    }
  }
};

function commit () {
  var ref;

  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];
  (ref = vuex.store).commit.apply(ref, args);
}

function dispatch () {
  var ref;

  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];
  return (ref = vuex.store).dispatch.apply(ref, args)
}

/**
 * Tests whether a passed value is an Object
 *
 * @param   {*}       value   The value to be assessed
 * @returns {boolean}         Whether the value is a true Object
 */

/**
 * Tests whether a passed value is an Object or Array
 *
 * @param   {*}       value   The value to be assessed
 * @returns {boolean}         Whether the value is an Object or Array
 */
function isObject (value) {
  return !!value && typeof value === 'object'
}

/**
 * Tests whether a string is numeric
 *
 * @param   {string|number}   value   The value to be assessed
 * @returns {boolean}
 */
function isNumeric (value) {
  return typeof value === 'number' || /^\d+$/.test(value)
}

/**
 * Tests whether a passed value is an Object and has the specified key
 *
 * @param   {Object}   obj    The source object
 * @param   {string}   key    The key to check that exists
 * @returns {boolean}         Whether the predicate is satisfied
 */
function hasKey (obj, key) {
  return isObject(obj) && key in obj
}

/**
 * Gets an array of keys from a value
 *
 * The function handles various types:
 *
 * - string - match all words
 * - object - return keys
 * - array  - return a string array of its values
 *
 * @param   {*}       value   The value to get keys from
 * @returns {Array}
 */
function getKeys (value) {
  return !value
    ? []
    : Array.isArray(value)
      ? value.map(function (key) { return String(key); })
      : typeof value === 'object'
        ? Object.keys(value)
        : typeof value === 'string'
          ? value.match(/[-$\w]+/g) || []
          : []
}

/**
 * Gets a value from an object, based on a path to the property
 *
 * @param   {Object}                obj     The Object to get the value from
 * @param   {string|Array|Object}  [path]   The optional path to a sub-property
 * @returns {*}
 */
function getValue (obj, path) {
  var value = obj;
  var keys = getKeys(path);

  keys.every(function (key) {
    var valid = isObject(value) && value.hasOwnProperty(key);
    value = valid ? value[key] : void 0;
    return valid
  });
  return value
}

/**
 * Sets a value on an object, based on a path to the property
 *
 * @param   {Object}                obj       The Object to set the value on
 * @param   {string|Array|Object}   path      The path to a sub-property
 * @param   {*}                     value     The value to set
 * @param   {boolean}              [create]   Optional flag to create sub-properties; defaults to false
 * @returns {Boolean}                         True or false, depending if value was set
 */
function setValue (obj, path, value, create) {
  if ( create === void 0 ) create = false;

  var keys = getKeys(path);
  return keys.reduce(function (obj, key, index) {
    // early return if no object
    if (!obj) {
      return false
    }

    // convert key to index if obj is an array and key is numeric
    if (Array.isArray(obj) && isNumeric(key)) {
      key = parseInt(key);
    }

    // if we're at the end of the path, set the value
    if (index === keys.length - 1) {
      obj[key] = value;
      return true
    }

    // if the target property doesn't exist...
    else if (!isObject(obj[key]) || !(key in obj)) {
      // ...create one, or cancel
      if (create) {
        // create object or array, depending on next key
        obj[key] = isNumeric(keys[index + 1])
          ? []
          : {};
      }
      else {
        return false
      }
    }

    // if we get here, return the target property
    return obj[key]
  }, obj)
}

/**
 * Checks an object has a property, based on a path to the property
 *
 * @param   {Object}                obj     The Object to check the value on
 * @param   {string|Array|Object}   path    The path to a sub-property
 * @returns {boolean}                       Boolean true or false
 */
function hasValue (obj, path) {
  var keys = getKeys(path);
  if (isObject(obj)) {
    while (keys.length) {
      var key = keys.shift();
      if (hasKey(obj, key)) {
        obj = obj[key];
      }
      else {
        return false
      }
    }
    return true
  }
  return false
}

function clone (obj) {
  return JSON.parse(JSON.stringify(obj))
}

var options = {
  mapping: 'standard',  // map states to store members using the "standard" scheme
  strict: true,         // throw an error if the store member cannot be found
  cache: true,          // cache generated functions for faster re-use
  deep: 1,              // allow sub-property access, but not creation
};

var formatters = {
  camel: function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    return args.shift() + args
      .map(function (text) { return text.replace(/\w/, function (c) { return c.toUpperCase(); }); })
      .join('')
  },

  snake: function () {
    var ref;

    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];
    return (ref = this)
      .camel.apply(ref, args)
      .replace(/([a-z])([A-Z])/g, function (match, a, b) { return a + '_' + b; })
      .toLowerCase()
  },

  const: function () {
    var ref;

    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];
    return (ref = this)
      .snake.apply(ref, args)
      .toUpperCase()
  }
};

/**
 * Map of store members
 */
var members = {
  state: 'state',
  getters: 'getters',
  actions: '_actions',
  mutations: '_mutations',
};

/**
 * Map of default resolver functions
 */
var resolvers = {

  /**
   * Standard name mapping function
   *
   * Adheres to seemingly the most common Vuex naming pattern
   *
   * @param   {string}  type          The member type, i.e state, getters, mutations, or actions
   * @param   {string}  name          The name of the property being targeted, i.e. value
   * @param   {object}  formatters    A formatters object with common format functions, camel, snake, const
   * @returns {string}
   */
  standard: function standard (type, name, formatters$$1) {
    switch (type) {
      case 'mutations':
        return formatters$$1.const('set', name) // SET_BAR
      case 'actions':
        return formatters$$1.camel('set', name) // setBar
    }
    return name // bar
  },

  /**
   * Simple name mapping function
   */
  simple: function simple (type, name, formatters$$1) {
    if (type === 'actions') {
      return formatters$$1.camel('set', name) // setBar
    }
    return name // bar
  },

};

/**
 * Configured resolver
 */
var resolver;

/**
 * Internal function to resolve member name using configured mapping function
 *
 * @param   {string}  type  The member type, i.e. actions
 * @param   {string}  name  The supplied path member id, i.e. value
 * @returns {string}        The resolved member name, i.e. SET_VALUE
 */
function resolveName (type, name) {
  // bypass resolver
  if (name.match(/!$/)) {
    return name.substr(0, name.length - 1)
  }

  // configured resolver
  var fn = resolver;

  // unconfigured resolver! (runs once)
  if (!fn) {
    if (typeof options.mapping === 'function') {
      fn = options.mapping;
    }
    else {
      fn = resolvers[options.mapping];
      if (!fn) {
        throw new Error(("[Vuex Pathify] Unknown mapping '" + (options.mapping) + "' in options\n    - Choose one of '" + (Object.keys(resolvers).join("', '")) + "'\n    - Or, supply a custom function\n"))
      }
    }

    resolver = fn;
  }

  // resolve!
  return resolver(type, name, formatters)
}

/**
 * Creates a resolver object that caches properties and can resolve store member properties
 *
 * @param   {object}  store     The Vuex store instance
 * @param   {string}  path      A pathify path to the store target, i.e. 'foo/bar@a.b.c'
 * @returns {object}
 */
function resolve (store, path) {
  // state
  var absPath = path.replace(/[/@!]+/g, '.');

  // paths
  var ref = path.split('@');
  var statePath = ref[0];
  var objPath = ref[1];

  // parent
  var modPath, trgName;
  if (statePath.indexOf('/') > -1) {
    var keys = statePath.split('/');
    trgName = keys.pop();
    modPath = keys.join('/');
  }
  else {
    trgName = statePath;
  }

  // throw error if module does not exist
  if (modPath && !store._modulesNamespaceMap[modPath + '/']) {
    throw new Error(("[Vuex Pathify] Unknown module '" + modPath + "' via path '" + path + "'"))
  }

  // resolve targets
  return {
    absPath: absPath,
    module: modPath,
    target: statePath,
    name: trgName.replace('!', ''),
    isDynamic: path.indexOf(':') > -1,

    /**
     * Returns properties about the targeted member
     *
     * @param   {string}  type  The member type, i.e state, getters, mutations, or actions
     * @returns {{exists: boolean, member: object, type: string, path: string}}
     */
    get: function (type) {
      // targeted member, i.e. store._getters
      var member = store[members[type]];

      // resolved target name, i.e. SET_VALUE
      var resName = resolveName(type, trgName);

      // target path, i.e. store._getters['module/SET_VALUE']
      var trgPath = modPath
        ? modPath + '/' + resName
        : resName;

      // return values
      return {
        exists: type === 'state'
          ? hasValue(member, trgPath)
          : trgPath in member,
        member: member,
        trgPath: trgPath,
        trgName: resName,
        objPath: objPath,
      }
    }
  }
}

/**
 * Error generation function for accessors
 */
function getError (path, resolver, aName, a, bName, b) {
  var error = "[Vuex Pathify] Unable to map path '" + path + "':";
  if (path.indexOf('!') > -1) {
    error += "\n    - Did not find " + aName + " or " + bName + " named '" + (resolver.name) + "' on " + (resolver.module ? ("module '" + (resolver.module) + "'") : 'root store');
  }
  else {
    var aText = a
      ? (aName + " '" + (a.trgName) + "' or ")
      : '';
    var bText = bName + " '" + (b.trgName) + "'";
    error += "\n    - Did not find " + aText + bText + " on " + (resolver.module ? ("module '" + (resolver.module) + "'") : 'store') + "\n    - Use direct syntax '" + (resolver.target.replace(/(@|$)/, '!$1')) + "' (if member exists) to target directly";
  }
  return error
}

/**
 * Handles passing and setting of sub-property values
 */
var Payload = function Payload (expr, path, value) {
  this.expr = expr;
  this.path = path;
  this.value = value;
};

/**
 * Set sub-property on target
 * @param target
 */
Payload.prototype.update = function update (target) {
  if (!options.deep) {
    console.error(("[Vuex Pathify] Unable to access sub-property for path '" + (this.expr) + "':\n    - Set option 'deep' to 1 to allow it"));
    return target
  }

  var success = setValue(target, this.path, this.value, options.deep > 1);

  // unable to set sub-property
  if (!success && "development" !== 'production') {
    console.error(("[Vuex Pathify] Unable to create sub-property for path '" + (this.expr) + "':\n    - Set option 'deep' to 2 to allow it"));
    return target
  }

  // set sub-property
  return Array.isArray(target)
    ? [].concat(target)
    : Object.assign({}, target)
};

/**
 * Test if value is a serialized Payload
 *
 * @see https://github.com/davestewart/vuex-pathify/pull/125
 */
Payload.isSerialized = function (value) {
  return isObject(value) && 'expr' in value && 'path' in value && 'value' in value
};

/**
 * Creates a setter function for the store, automatically targeting actions or mutations
 *
 * Also supports setting of sub-properties as part of the path
 *
 * @see documentation for more detail
 *
 * @param   {Object}  store   The store object
 * @param   {string}  path    The path to the target node
 * @returns {*|Promise}       The return value from the commit() or dispatch()
 */
function makeSetter (store, path) {
  var resolver = resolve(store, path);

  var action = resolver.get('actions');
  if (action.exists) {
    return function (value) {
      var payload = action.objPath
        ? new Payload(path, action.objPath, value)
        : value;
      return store.dispatch(action.trgPath, payload)
    }
  }

  var mutation = resolver.get('mutations');
  if (mutation.exists || resolver.isDynamic) {
    return function (value) {
      // rebuild mutation if using dynamic path
      if (resolver.isDynamic) {
        var interpolated = interpolate(path, this);
        mutation = resolve(store, interpolated).get('mutations');
      }
      var payload = mutation.objPath
        ? new Payload(path, mutation.objPath, value)
        : value;
      return store.commit(mutation.trgPath, payload)
    }
  }

  if (true) {
    console.error(getError(path, resolver, 'action', action, 'mutation', mutation));
  }

  return function (value) {}
}

/**
 * Creates a getter function for the store, automatically targeting getters or state
 *
 * Also supports returning of sub-properties as part of the path
 *
 * @see documentation for more detail
 *
 * @param   {Object}    store       The store object
 * @param   {string}    path        The path to the target node
 * @param   {boolean}  [stateOnly]  An optional flag to get from state only (used when syncing)
 * @returns {*|Function}            The state value or getter function
 */
function makeGetter (store, path, stateOnly) {
  var resolver = resolve(store, path);

  // for sync, we don't want to read only from state
  var getter;
  if (!stateOnly) {
    getter = resolver.get('getters');
    if (getter.exists) {
      return function () {
        var value = getter.member[getter.trgPath];
        return getter.objPath
          ? getValueIfEnabled(path, value, getter.objPath)
          : value
      }
    }
  }

  var state = resolver.get('state');
  if (state.exists || resolver.isDynamic) {
    return function () {
      var absPath = resolver.isDynamic
        ? interpolate(resolver.absPath, this)
        : resolver.absPath;
      return getValueIfEnabled(path, store.state, absPath)
    }
  }

  if (true) {
    console.error(getError(path, resolver, 'getter', getter, 'state', state));
  }

  return function () {}
}

/**
 * Utility function to get value from store, but only if options allow
 *
 * @param   {string}  expr    The full path expression
 * @param   {object}  source  The source object to get property from
 * @param   {string}  path    The full dot-path on the source object
 * @returns {*}
 */
function getValueIfEnabled (expr, source, path) {
  if (!options.deep && expr.indexOf('@') > -1) {
    console.error(("[Vuex Pathify] Unable to access sub-property for path '" + expr + "':\n    - Set option 'deep' to 1 to allow it"));
    return
  }
  return getValue(source, path)
}

/**
 * Utility function to interpolate a string with properties
 * @param   {string}  path    The path containing interpolation :tokens
 * @param   {object}  scope   The scope containing properties to be used
 * @return  {string}
 */
function interpolate (path, scope) {
  return path.replace(/:(\w+)/g, function replace (all, token) {
    if (!(token in scope)) {
      console.error(("Error resolving dynamic store path: The property \"" + token + "\" does not exist on the scope"), scope);
    }
    return scope[token]
  })
}

function accessorize (store) {

  /**
   * Set a property on the store, automatically using actions or mutations
   *
   * @param   {string}        path    The path to the store member
   * @param   {*}             value   The value to set
   * @returns {Promise|*}             Any return value from the action / commit
   */
  store.set = function (path, value) {
    var setter = makeSetter(store, path);
    if (typeof setter !== 'undefined') {
      return setter(value)
    }
  };

  /**
   * Get a property from the store, automatically using getters or state
   *
   * @param   {string}        path    The path to the store member
   * @param   {*}             args    Optional getter function parameters
   * @returns {*|undefined}           The state value / getter value / getter function / or undefined
   */
  store.get = function (path) {
    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

    var getter = makeGetter(store, path);
    if (typeof getter !== 'undefined') {
      var value = getter();
      return typeof value === 'function'
        ? value.apply(void 0, args)
        : value
    }
  };

  /**
   * Get a copy of a property from the store, automatically using actions or mutations
   *
   * @param   {string}        path    The path to the store member
   * @param   {*}             args    Optional getter function parameters
   * @returns {*|undefined}           The value, or undefined
   */
  store.copy = function (path) {
    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

    var value = store.get.apply(store, [ path ].concat( args ));
    return isObject(value)
      ? clone(value)
      : value
  };
}

function resolve$1 (type) {
  return resolveName(type, 'value')
}

function debug () {
  console.log(("\n  [Vuex Pathify] Options:\n\n  Mapping (" + (typeof options.mapping === 'function' ? 'custom' : options.mapping) + ")\n-------------------------------\n  path       : value\n  state      : " + (resolve$1('state')) + "\n  getters    : " + (resolve$1('getters')) + "\n  actions    : " + (resolve$1('actions')) + "\n  mutations  : " + (resolve$1('mutations')) + "\n\n  Settings\n-------------------------------\n  strict     : " + (options.strict) + "\n  cache      : " + (options.cache) + "\n  deep       : " + (options.deep) + "\n\n"));
}

// plugin

/**
 * Store plugin which updates the store object with set() and get() methods
 *
 * @param {Object} store  The store object
 */
function plugin (store) {

  // cache store instance
  vuex.store = store;

  // add pathify accessors
  accessorize(store);
}

var pathify = {
  options: options,
  plugin: plugin,
  debug: debug,
};

/**
 * Utility function to grab keys for state
 *
 * @param   {Object|Function|Array|String}   state   State object, state function, array or string of key names
 * @returns {Array}
 */
function getStateKeys (state) {
  return getKeys(typeof state === 'function' ? state() : state)
}

/**
 * Helper function to mass-create default getter functions for an existing state object
 *
 * Note that you don't need to create top-level getter functions if using $store.get(...)
 *
 * @param   {Object|Function|Array|String}   state   State object, state function, array or string of key names
 */
function makeGetters (state) {
  return getStateKeys(state)
    .reduce(function (obj, key) {
      var getter = resolveName('getters', key);
      obj[getter] = function (state) {
        return state[key]
      };
      return obj
    }, {})
}

/**
 * Helper function to mass-create default mutation functions for an existing state object
 *
 * @param   {Object|Function|Array|String}   state   State object, state function, array or string of key names
 */
function makeMutations (state) {
  return getStateKeys(state)
    .reduce(function (obj, key) {
      var mutation = resolveName('mutations', key);
      obj[mutation] = function (state, value) {
        if (Payload.isSerialized(value)) {
          value = new Payload(value.expr, value.path, value.value);
        }
        state[key] = value instanceof Payload
          ? value.update(state[key])
          : value;
      };
      return obj
    }, {})
}

/**
 * Helper function to mass-create default actions functions for an existing state object
 *
 * @param   {Object|Function|Array|String}   state   State object, state function, array or string of key names
 */
function makeActions (state) {
  return getStateKeys(state)
    .reduce(function (obj, key) {
      var action = resolveName('actions', key);
      var mutation = resolveName('mutations', key);
      obj[action] = function (ref, value) {
        var commit = ref.commit;

        commit(mutation, value);
      };
      return obj
    }, {})
}

var store = {
  getters: makeGetters,
  mutations: makeMutations,
  actions: makeActions,
};

// -------------------------------------------------------------------------------------------------------------------
// external
// -------------------------------------------------------------------------------------------------------------------

/**
 * Utility function to expand wildcard path for get()
 *
 * @param   {string}        path        wildcard path
 * @param   {object}        state       state hash
 * @param   {object}        getters     getters hash
 * @returns {array|string}
 */
function expandGet (path, state, getters) {
  if (!init(path, state)) {
    return ''
  }
  return resolveStates(path, state).concat( resolveHandlers(path, getters) )
}

/**
 * Utility function to expand wildcard path for sync()
 *
 * @param   {string}        path        wildcard path
 * @param   {object}        state       state hash
 * @returns {array|string}
 */
function expandSync (path, state) {
  if (!init(path, state)) {
    return ''
  }
  return resolveStates(path, state)
}

/**
 * Utility function to expand wildcard path for actions()
 *
 * @param   {string}        path        wildcard path
 * @param   {object}        actions     actions hash
 * @returns {array|string}
 */
function expandCall (path, actions) {
  if (!init(path, actions)) {
    return ''
  }
  return resolveHandlers(path, actions)
}

// -------------------------------------------------------------------------------------------------------------------
// internal
// -------------------------------------------------------------------------------------------------------------------

/**
 * Helper function to resolve state properties from a wildcard path
 *
 * Note: this function traverses into the state object and any properties / sub-properties
 *
 * @param   {string}    path    A path with a wildcard at the end
 * @param   {object}    state   A state object on which to look up the sub-properties
 * @returns {string[]}          An array of paths
 */
function resolveStates (path, state) {
  // grab segments
  var last = path.match(/([^/@\.]+)$/)[1];
  var main = path.substring(0, path.length - last.length);
  var keys = main.replace(/\W+$/, '').split(/[/@.]/);

  // find state parent
  var obj = main
    ? getValue(state, keys)
    : state;
  if (!obj) {
    console.error(("[Vuex Pathify] Unable to expand wildcard path '" + path + "':\n    - It looks like '" + (main.replace(/\W+$/, '')) + "' does not resolve to an existing state property"));
    return []
  }

  // filter children
  var rx = new RegExp('^' + last.replace(/\*/g, '\\w+') + '$');
  return Object
    .keys(obj)
    .filter(function (key) { return rx.test(key); })
    .map(function (key) { return main + key; })
}

/**
 * Helper function to resolve getters, actions or mutations from a wildcard path
 *
 * Note: this function filters the top-level flat hash of members
 *
 * @param   {string}    path      A path with a wildcard at the end
 * @param   {object}    hash      A hash on which to filter by key => wildcard
 * @returns {string[]}            An array of paths
 */
function resolveHandlers (path, hash) {
  var rx = new RegExp('^' + path.replace(/\*/g, '\\w+') + '$');
  return Object.keys(hash).filter(function (key) { return rx.test(key); })
}

// -------------------------------------------------------------------------------------------------------------------
// utility
// -------------------------------------------------------------------------------------------------------------------

/**
 * Pre-flight check for wildcard paths
 *
 * @param   {string}  path
 * @param   {object}  state
 * @returns {boolean}
 */
function init (path, state) {
  // only wildcards in final path segment are supported
  if (path.indexOf('*') > -1 && /\*.*[/@.]/.test(path)) {
    console.error(("[Vuex Pathify] Invalid wildcard placement for path '" + path + "':\n    - Wildcards may only be used in the last segment of a path"));
    return false
  }

  // edge case where store sometimes doesn't exist
  if (!state) {
    console.error(("[Vuex Pathify] Unable to expand wildcard path '" + path + "':\n    - The usual reason for this is that the router was set up before the store\n    - Make sure the store is imported before the router, then reload"));
    return false
  }

  return true
}

/**
 * Helper function to convert Pathify path syntax paths to objects
 *
 * Handles:
 *
 * - string path
 * - object and array formats
 * - path + object/array format
 * - wildcards in path
 *
 * Returns a single string, or hash of key => paths
 *
 * @param   {string|object|array}  [path]       An optional path prefix
 * @param   {object}                props       An optional hash or array of paths / segments
 * @param   {function}              fnResolver  A function to resolve wildcards
 * @returns {object|string}
 */
function makePaths (path, props, fnResolver) {
  // handle wildcards
  if (typeof path === 'string' && path.indexOf('*') > -1) {
    return makePathsHash(fnResolver(path))
  }

  // handle array as path
  if (Array.isArray(path)) {
    return makePathsHash(path)
  }

  // handle object as path
  if (isObject(path)) {
    props = path;
    path = '';
  }

  // if props is an array
  if (Array.isArray(props)) {
    var paths = props
      .map(function (prop) {
        return makePath(path, prop)
      });
    return makePathsHash(paths)
  }

  // if props is an object
  if (isObject(props)) {
    return Object
      .keys(props)
      .reduce(function (paths, key) {
        paths[key] = makePath(path, props[key]);
        return paths
      }, {})
  }

  // if path is a single string without wildcards
  return path
}

/**
 * Helper function to concatenate two path components into a valid path
 *
 * Handles one or no "/" "@" or '.' characters in either string
 *
 * @param   {string}  path
 * @param   {string}  target
 * @returns {string}
 */
function makePath (path, target) {
  if ( target === void 0 ) target = '';

  path = path.replace(/\/+$/, '');
  var value = path.indexOf('@') > -1
    ? path + '.' + target
    : path + '/' + target;
  return value
    .replace(/^\/|[.@/]+$/, '')
    .replace(/\/@/, '@')
    .replace(/@\./, '@')
}

/**
 * Helper function to convert an array of paths to a hash
 *
 * Uses the last path segment as the key
 *
 * @param   {string[]}  paths   An array of paths to convert to a hash
 * @returns {object}            A hash of paths
 */
function makePathsHash (paths) {
  return paths.reduce(function (paths, path) {
    var key = path.match(/\w+$/);
    paths[key] = path;
    return paths
  }, {})
}

// -------------------------------------------------------------------------------------------------------------------
// entry
// -------------------------------------------------------------------------------------------------------------------

function get (path, props) {
  return make(path, props, getOne, function (path) {
    return expandGet(path, vuex.store.state, vuex.store.getters)
  })
}

function sync (path, props) {
  return make(path, props, syncOne, function (path) {
    return expandSync(path, vuex.store.state)
  })
}

function call (path, props) {
  return make(path, props, callOne, function (path) {
    return expandCall(path, vuex.store._actions)
  })
}

// -------------------------------------------------------------------------------------------------------------------
// utility
// -------------------------------------------------------------------------------------------------------------------

/**
 * Creates multiple 2-way vue:vuex computed properties
 *
 * The function has multiple usages:
 *
 *  1. multiple properties from multiple modules
 *
 *     - @usage                                 ...sync({foo: 'module1/foo', bar: 'module2/bar'})
 *
 *     - @param   {Object}          props       a hash of key:path state/getter or commit/action references
 *
 *  2. multiple properties from a single module (object shorthand)
 *
 *     - @usage                                 ...sync('module', {foo: 'foo', bar: 'bar'})
 *
 *     - @param   {string}          path        a path to a module
 *     - @param   {Object}          props       a hash of key:prop state/getter or commit/action references
 *
 *  3. multiple properties from a single module (array shorthand)
 *
 *     - @usage                                 ...sync('module', ['foo', 'bar'])
 *
 *     - @param   {string}          path        a path to a module
 *     - @param   {Array}           props       an Array of state/getter or commit/action references
 *
 * Where different getter / setters need to be specified, pass getter and setter in
 * the same string, separating with a | character:
 *
 *     - @usage                                 ...sync('module', ['foo|updateFoo'])
 *
 * @param   {string|Object}         path        a path to a module, or a hash of state/getter or commit/action references
 * @param   {Object|Array}          props       a hash of state/getter or commit/action references
 * @param   {Function}              fnHandler   a callback function to create the handler
 * @param   {Function}              fnResolver
 * @returns {{set, get}}                        a hash of Objects
 */
function make (path, props, fnHandler, fnResolver) {
  // expand path / props
  var data = makePaths(path, props, fnResolver);

  // handle single paths
  if (typeof data === 'string') {
    return fnHandler(data)
  }

  // handle multiple properties
  Object
    .keys(data)
    .forEach(function (key) {
      data[key] = fnHandler(data[key]);
    });
  return data
}

// -------------------------------------------------------------------------------------------------------------------
// one
// -------------------------------------------------------------------------------------------------------------------

/**
 * Creates a single 2-way vue:vuex computed property
 *
 * @param   {string}      path      a path to a state/getter reference. Path can contain an optional commit / action reference, separated by a |, i.e. foo/bar|updateBar
 * @returns {Object}                a single get/set Object
 */
function syncOne (path) {
  var ref = path.split('|');
  var getter = ref[0];
  var setter = ref[1];
  if (setter) {
    setter = getter.replace(/\w+!?$/, setter.replace('!', '') + '!');
  }
  return getter && setter
    ? { get: getOne(getter, true), set: setOne(setter) }
    : { get: getOne(getter, true), set: setOne(getter) }
}

/**
 * Creates a single 1-way vue:vuex computed getter
 *
 * @param   {string}      path          A path to a state/getter reference
 * @param   {boolean}    [stateOnly]    An optional flag to get from state only (used when syncing)
 * @returns {Object}                    A single getter function
 */
function getOne (path, stateOnly) {
  var getter, store;
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    if (!this.$store) {
      throw new Error('[Vuex Pathify] Unexpected condition: this.$store is undefined.\n\nThis is a known edge case with some setups and will cause future lookups to fail')
    }
    if (!getter || store !== this.$store) {
      store = this.$store;
      getter = makeGetter(store, path, stateOnly);
    }
    return getter.call.apply(getter, [ this ].concat( args ))
  }
}

/**
 * Creates a single 1-way vue:vuex setter
 *
 * @param   {string}      path      a path to an action/commit reference
 * @returns {Function}              a single setter function
 */
function setOne (path) {
  var setter, store;
  return function (value) {
    var this$1 = this;

    if (!setter || store !== this.$store) {
      store = this.$store;
      setter = makeSetter(store, path);
    }
    this.$nextTick(function () { return this$1.$emit('sync', path, value); });
    return setter.call(this, value)
  }
}

/**
 * Creates a single action dispatcher
 *
 * @param   {string}      path      a path to an action/commit reference
 * @returns {Function}              a single setter function
 */
function callOne (path) {
  return function (value) {
    return this.$store.dispatch(path, value)
  }
}

/**
 * @module
 * @description Decorators for Vuex Pathify component helpers
 *
 * For example:
 * ```js
 * @Component
 * class MyComponent extends Vue {
 *   @Get('name')
 *   @Set('name')
 *   @Call('setName')
 * }
 * ```
 */

/**
 * Decorator for `get` component helper.
 * @param   {string}          path    The path to store property
 * @returns {VueDecorator}            Vue decorator to be used in Vue class component.
 */
function Get (path) {
  if (typeof path !== 'string' || arguments.length > 1) { throw new Error('Property decorators can only be used for single property access') }
  return Object(vue_class_component__WEBPACK_IMPORTED_MODULE_0__["createDecorator"])(function (options, key) {
    if (!options.computed) { options.computed = {}; }
    options.computed[key] = get(path);
  })
}

/**
 * Decorator for `sync` component helper.
 * @param   {string}          path    The path to store property
 * @returns {VueDecorator}            Vue decorator to be used in Vue class component.
 */
function Sync (path) {
  if (typeof path !== 'string' || arguments.length > 1) { throw new Error('Property decorators can only be used for single property access') }
  return Object(vue_class_component__WEBPACK_IMPORTED_MODULE_0__["createDecorator"])(function (options, key) {
    if (!options.computed) { options.computed = {}; }
    options.computed[key] = sync(path);
  })
}

/**
 * Decorator for `call` component helper.
 * @param   {string}          path    The path to store property
 * @returns {VueDecorator}            Vue decorator to be used in Vue class component.
 */
function Call (path) {
  if (typeof path !== 'string' || arguments.length > 1) { throw new Error('Property decorators can only be used for single property access') }
  return Object(vue_class_component__WEBPACK_IMPORTED_MODULE_0__["createDecorator"])(function (options, key) {
    if (!options.methods) { options.methods = {}; }
    options.methods[key] = call(path);
  })
}

/**
 * Helper function to generate a mixin that registers module and computed properties on component creation
 *
 * @param   {string|Array}  path        The path to register the Vuex module on
 * @param   {object}        module      The module definition to register when the
 * @param   {function}      callback    A callback returning store members to be added to the component definition
 * @param   {object}       [options]    Optional Vuex module registration options
 * @returns {object}                    The mixin
 */
function registerModule (path, module, callback, options) {
  return {
    beforeCreate: function beforeCreate () {
      this.$store.registerModule(path, module, options);
      var members = callback();
      this.$options.computed = Object.assign(this.$options.computed || {}, members.computed || {});
      this.$options.methods = Object.assign(this.$options.methods || {}, members.methods || {});
    },

    destroyed: function destroyed () {
      this.$store.unregisterModule(path);
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (pathify);



/***/ })

}]);