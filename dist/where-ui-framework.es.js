import te from "react";
var A = { exports: {} }, _ = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var k;
function re() {
  if (k) return _;
  k = 1;
  var s = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(o, n, l) {
    var E = null;
    if (l !== void 0 && (E = "" + l), n.key !== void 0 && (E = "" + n.key), "key" in n) {
      l = {};
      for (var f in n)
        f !== "key" && (l[f] = n[f]);
    } else l = n;
    return n = l.ref, {
      $$typeof: s,
      type: o,
      key: E,
      ref: n !== void 0 ? n : null,
      props: l
    };
  }
  return _.Fragment = t, _.jsx = r, _.jsxs = r, _;
}
var T = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var x;
function oe() {
  return x || (x = 1, process.env.NODE_ENV !== "production" && (function() {
    function s(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Q ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case R:
          return "Fragment";
        case $:
          return "Profiler";
        case Y:
          return "StrictMode";
        case q:
          return "Suspense";
        case z:
          return "SuspenseList";
        case X:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case V:
            return "Portal";
          case H:
            return e.displayName || "Context";
          case B:
            return (e._context.displayName || "Context") + ".Consumer";
          case J:
            var a = e.render;
            return e = e.displayName, e || (e = a.displayName || a.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case K:
            return a = e.displayName || null, a !== null ? a : s(e.type) || "Memo";
          case S:
            a = e._payload, e = e._init;
            try {
              return s(e(a));
            } catch {
            }
        }
      return null;
    }
    function t(e) {
      return "" + e;
    }
    function r(e) {
      try {
        t(e);
        var a = !1;
      } catch {
        a = !0;
      }
      if (a) {
        a = console;
        var i = a.error, c = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i.call(
          a,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          c
        ), t(e);
      }
    }
    function o(e) {
      if (e === R) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === S)
        return "<...>";
      try {
        var a = s(e);
        return a ? "<" + a + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function n() {
      var e = m.A;
      return e === null ? null : e.getOwner();
    }
    function l() {
      return Error("react-stack-top-frame");
    }
    function E(e) {
      if (P.call(e, "key")) {
        var a = Object.getOwnPropertyDescriptor(e, "key").get;
        if (a && a.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function f(e, a) {
      function i() {
        D || (D = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          a
        ));
      }
      i.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: i,
        configurable: !0
      });
    }
    function F() {
      var e = s(this.type);
      return I[e] || (I[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function W(e, a, i, c, h, p) {
      var u = i.ref;
      return e = {
        $$typeof: w,
        type: e,
        key: a,
        props: i,
        _owner: c
      }, (u !== void 0 ? u : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: F
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: h
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: p
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function L(e, a, i, c, h, p) {
      var u = a.children;
      if (u !== void 0)
        if (c)
          if (Z(u)) {
            for (c = 0; c < u.length; c++)
              b(u[c]);
            Object.freeze && Object.freeze(u);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else b(u);
      if (P.call(a, "key")) {
        u = s(e);
        var d = Object.keys(a).filter(function(ee) {
          return ee !== "key";
        });
        c = 0 < d.length ? "{key: someKey, " + d.join(": ..., ") + ": ...}" : "{key: someKey}", j[u + c] || (d = 0 < d.length ? "{" + d.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          c,
          u,
          d,
          u
        ), j[u + c] = !0);
      }
      if (u = null, i !== void 0 && (r(i), u = "" + i), E(a) && (r(a.key), u = "" + a.key), "key" in a) {
        i = {};
        for (var C in a)
          C !== "key" && (i[C] = a[C]);
      } else i = a;
      return u && f(
        i,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), W(
        e,
        u,
        i,
        n(),
        h,
        p
      );
    }
    function b(e) {
      G(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === S && (e._payload.status === "fulfilled" ? G(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function G(e) {
      return typeof e == "object" && e !== null && e.$$typeof === w;
    }
    var g = te, w = Symbol.for("react.transitional.element"), V = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), Y = Symbol.for("react.strict_mode"), $ = Symbol.for("react.profiler"), B = Symbol.for("react.consumer"), H = Symbol.for("react.context"), J = Symbol.for("react.forward_ref"), q = Symbol.for("react.suspense"), z = Symbol.for("react.suspense_list"), K = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), X = Symbol.for("react.activity"), Q = Symbol.for("react.client.reference"), m = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, P = Object.prototype.hasOwnProperty, Z = Array.isArray, v = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var D, I = {}, N = g.react_stack_bottom_frame.bind(
      g,
      l
    )(), y = v(o(l)), j = {};
    T.Fragment = R, T.jsx = function(e, a, i) {
      var c = 1e4 > m.recentlyCreatedOwnerStacks++;
      return L(
        e,
        a,
        i,
        !1,
        c ? Error("react-stack-top-frame") : N,
        c ? v(o(e)) : y
      );
    }, T.jsxs = function(e, a, i) {
      var c = 1e4 > m.recentlyCreatedOwnerStacks++;
      return L(
        e,
        a,
        i,
        !0,
        c ? Error("react-stack-top-frame") : N,
        c ? v(o(e)) : y
      );
    };
  })()), T;
}
var U;
function ne() {
  return U || (U = 1, process.env.NODE_ENV === "production" ? A.exports = re() : A.exports = oe()), A.exports;
}
var O = ne();
function ie({ children: s, onClick: t }) {
  return /* @__PURE__ */ O.jsx("button", { onClick: t, children: s });
}
function ce({ children: s, onClick: t }) {
  return /* @__PURE__ */ O.jsx("span", { onClick: t, children: /* @__PURE__ */ O.jsx("b", { children: s }) });
}
class ue {
  constructor() {
    this.controllerPath = "", this.isRelativePath = "", this.authToken = "";
  }
  /**
   * 
   * @param {string} Name of the method to be added to the controller 
   * @param {json} params any of the parameters
   * @returns promise
   */
  async get(t, r) {
    let o = this.buildUrl(t);
    const n = this.getRequestHeaders();
    r && (o = o + "/" + r);
    try {
      const l = await fetch(o, {
        method: "GET",
        // Or 'POST', 'PUT', 'DELETE', etc.
        headers: n
      });
      if (!l.ok)
        throw new Error(`HTTP error! status: ${l.status}`);
      return await l.json();
    } catch (l) {
      console.error("Error fetching data:", l);
    }
  }
  getRequestHeaders() {
    const t = {
      "Content-Type": "application/json"
    };
    return this.authToken && (t.Authorization = "Bearer " + this.authToken), t;
  }
  async getblob(t, r) {
  }
  /**
   * 
   * @param {string} Name of the method 
   * @param {object} data to be passed
   * @returns promise
   */
  async post(t, r) {
    let o = this.buildUrl(t);
    const n = this.getRequestHeaders();
    try {
      const l = await fetch(o, {
        method: "POST",
        headers: n,
        body: JSON.stringify(r)
      });
    } catch (l) {
      console.error("Error fetching data:", l);
    }
  }
  async postDataWithFiles(t, r, o, n) {
    this.buildUrl(t);
    try {
      const E = new FormData();
      for (var l = 0; l < r.length; l++)
        E.append("file" + l, r[l]);
      return E.append(o, JSON.stringify(n)), await this.post(t, E);
    } catch {
      return null;
    }
  }
  setControllerPath(t, r, o) {
    this.controllerPath = t, this.isRelativePath = r, this.authToken = o;
  }
  buildUrl(t) {
    return `${this.controllerPath}/${t}`;
  }
}
class ae {
  constructor() {
    this.dict = new Object();
  }
  builtFromArray(t, r) {
    for (let o = 0; o < t.length; o++)
      this.add(t[o], r[o]);
  }
  /**
   * Adds any object to the dictionary. If Object already exists this mehtod sets the new object to exisitng key
   * @param {string} key 
   * @param {object} value 
   */
  add(t, r) {
    this.dict[t] = r;
  }
  /**
   * this method same as as add except that method do not add or set the new object if the key already exists
   * @param {string} key 
   * @param {object} value 
   * @returns 
   */
  addExclusive(t, r) {
    this.get(t) || this.add(t, r);
  }
  get(t) {
    return this.dict[t];
  }
  hasKey(t) {
    return !!this.dict[t];
  }
  getKeys() {
    return Object.keys(this.dict);
  }
  getValuesAsArray() {
    return Object.values(this.dict);
  }
  destroy(t) {
    this.hasKey(t) && (this.dict[t] = null);
  }
  setOrAdd(t, r) {
    this.hasKey(t) ? this.dict[t] = r : this.add(t, r);
  }
}
class M {
  constructor() {
    this.dict = new ae();
  }
  add(t, r) {
    if (this.dict.hasKey(t)) {
      this.dict.get(t).push(r);
      return;
    }
    let o = [];
    o.push(r), this.dict.add(t, o);
  }
  get(t) {
    return this.dict.get(t);
  }
  getKeys() {
    return this.dict.getKeys();
  }
  remove(t) {
    this.dict.destroy(t);
  }
}
class se {
  constructor() {
    this.EventStore = new M(), this.UnRegisteredEventStore = new M();
  }
  registerForEvent(t, r) {
    this.EventStore.add(t, { eventName: t, callback: r, tag: "", disabled: !1 });
    let o = this.UnRegisteredEventStore.get(t);
    o && (r(o.eventData), this.UnRegisteredEventStore.remove(t));
  }
  registerForEventWithTag(t, r, o) {
    this.EventStore.add(t, { eventName: t, callback: r, tag: o, disabled: !1 });
    let n = this.UnRegisteredEventStore.get(t);
    n && (r(n.eventData), this.UnRegisteredEventStore.remove(t));
  }
  raiseEvent(t, r) {
    let o = this.EventStore.get(t);
    if (!o) {
      if (!r)
        return;
      r.shouldCallAfterClientRegister && this.UnRegisteredEventStore.add(t, { eventData: r });
      return;
    }
    for (let n = 0; n < o.length; n++)
      o[n].disabled || o[n].callback(r, o[n]);
  }
  unregisterEvent(t, r) {
    let o = this.EventStore.get(t);
    if (o)
      for (let n = 0; n < o.length; n++)
        o[n].tag === r && (o[n].disabled = !0);
  }
}
class Ee {
  constructor() {
    this.EventSystem = new se(), this.services = {}, this.AppConfig = {};
  }
  initApp(t) {
  }
  afterInitConfig() {
  }
  updateServices() {
  }
}
class de {
  constructor() {
  }
}
const fe = {
  // Catalogue Events
  TOGGLE_ADD_CATALOGUE: "toggleAddCatalogue",
  TOGGLE_VIEW_CATALOGUE_LIST: "toggleViewCatalogueList",
  CLOSE_CATALOGUE_PAGE: "closeCataloguePage",
  SHOW_CATALOGUE_LIST: "showCatalogueList",
  UPDATE_CATALOGUE_NAMES: "updateCatalogueNames",
  // Service Events
  TOGGLE_ADD_SERVICE: "toggleAddService",
  CLOSE_SERVICE_PAGE: "closeServicePage",
  ADD_SERVICE_PAGE: "addServicePage",
  // Data Set Events
  DATA_SET_DETAILS: "dataSetDetails",
  DATA_SET_CLOSE_DETAILS: "dataSetCloseDetails",
  // General UI Events
  LOAD_CONTENT_PAGE: "loadContentPage",
  SHOW_CONFIRM_DIALOG: "showConfirmDialog",
  TOGGLE_CONFIRM_DIALOG: "toggleConfirmDialog",
  CHANGE_VIEWER: "changeViewer",
  SPLIT_DIRECTION_CHANGED: "splitDirectionChanged",
  PROFILE_SHOW: "showProfile",
  // Map Events
  MAP_CLICK: "mapClick",
  MAP_POINTER_MOVE: "mapPointerMove",
  MAP_VIEW_CHANGED: "mapViewChanged",
  MAP_STATE_CHANGED: "mapStateChanged",
  // Layer Events
  TOGGLE_LAYER_TREE_VIEW: "toggleLayerTreeView",
  ADDED_NEW_LAYER: "addedNewLayer",
  // Info and Results Events
  TOGGLE_INFO_RESULTS: "toggleInfoResults",
  INFO_RESULTS: "infoResults",
  SHOW_RESULTS_GRID: "showResultsGrid",
  HIDE_RESULTS_GRID: "hideResultsGrid",
  // Toolbar Events
  TOGGLE_DRAW_TOOLBAR: "toggleDrawToolbar",
  TOGGLE_EXPORT_TOOLBAR: "toggleExportToolbar",
  TOGGLE_IMPORT_TOOLBAR: "toggleImportToolbar",
  TOGGLE_MEASURE_TOOLBAR: "toggleMeasureToolbar",
  TOGGLE_MEASURE_3D_TOOLBAR: "toggleMeasure3dToolbar",
  TOGGLE_CAD_TOOLBAR: "toggleCadToolbar",
  TOGGLE_QUERY_BUILDER: "toggleQueryBuilder",
  TOGGLE_DETECTION_TOOLBAR: "toggleDetectionToolbar",
  // Dialog Events
  TOGGLE_SIDEBAR_DIALOG: "toggleSidebarDialog",
  OPEN_BIM_DIALOG: "openBimDialog",
  // AI Projects Events
  TOGGLE_CREATE_AI_PROJECTS: "toggleCreateAiProjects",
  TOGGLE_AI_PROJECTS_GALLERY: "toggleAiProjectsGallery",
  TOGGLE_AI_PROJECTS_DETAILS: "toggleAiProjectsDetails",
  CLONE_PROJECT: "cloneProject",
  // Model Events
  TOGGLE_ADD_MODEL: "toggleAddModel",
  // Transaction Events
  TOGGLE_CREATE_TRANSACTION: "toggleCreateTransaction",
  TOGGLE_EDIT_TRANSACTION: "toggleEditTransaction",
  TOGGLE_TRANSACTION_DETAILS: "toggleTransactionDetails",
  // Annotation Events
  TOGGLE_ANNOTATION_PAGE: "toggleAnnotationpage",
  TOGGLE_ANNOTATION_DETAILS: "toggleAnnotationDetails",
  DISABLE_ANNOTATION_DRAWING: "disableAnnotationDrawing",
  FEATURE_CLASSES_SAVED: "featureClassesSaved",
  FEATURE_CLASS_UPDATED: "featureClassUpdated",
  FEATURE_CLASS_DELETED: "featureClassDeleted",
  SET_SELECTED_CLASS: "setSelectedClass",
  // Training Events
  TOGGLE_TRAINING: "toggleTraining",
  TOGGLE_PREPARE_TRAINING: "togglePrepareTraining",
  TOGGLE_AI_CLONED_PROJECT: "toggleAIClonedProject"
};
function _e({ children: s, onClick: t }) {
  return /* @__PURE__ */ O.jsx("div", { children: "s" });
}
const Te = {
  downloadImageFile: function(s, t) {
    this.downloadFile(s, t, "text/json");
  },
  downloadJsonFile: function(s, t) {
    this.downloadFile(s, t, "text/json");
  },
  downloadFile: function(s, t, r) {
    var o = new Blob([s], { type: r }), n = document.createEvent("MouseEvents"), l = document.createElement("a");
    l.download = t, l.href = window.URL.createObjectURL(o), l.dataset.downloadurl = [r, l.download, l.href].join(":"), n.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), l.dispatchEvent(n);
  },
  downloadUrl: function(s) {
    let t = document.createEvent("MouseEvents"), r = document.createElement("a");
    r.download = s, r.href = s, r.dataset.downloadurl = s, t.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), r.dispatchEvent(t);
  },
  createAndExecuteMailTo(s) {
    let t = document.createEvent("MouseEvents"), r = document.createElement("a");
    r.href = s, t.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), r.dispatchEvent(t);
  },
  getQueryStringValueFromCurentDocuemnt(s) {
    let t = window.location.search;
    if (t.length == 0)
      return "";
    t[0] == "?" && (t = t.substring(1));
    let r = t.split("&");
    s = s.toLowerCase();
    for (let o = 0; o < r.length; o++) {
      let n = r[o].split("=");
      if (n[0].toLowerCase() === s)
        return n.length > 1 ? n[1] : "";
    }
    return "";
  }
};
export {
  ie as Button,
  _e as MessageBox,
  ce as SmartText,
  de as TestSys,
  M as WhereCollection,
  ae as WhereDictionary,
  Te as WhereDom,
  fe as WhereEventNames,
  ue as WhereService,
  Ee as WhereSystem
};
