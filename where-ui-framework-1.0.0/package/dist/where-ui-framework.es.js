import te from "react";
var O = { exports: {} }, T = {};
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
  if (k) return T;
  k = 1;
  var u = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(a, n, s) {
    var E = null;
    if (s !== void 0 && (E = "" + s), n.key !== void 0 && (E = "" + n.key), "key" in n) {
      s = {};
      for (var _ in n)
        _ !== "key" && (s[_] = n[_]);
    } else s = n;
    return n = s.ref, {
      $$typeof: u,
      type: a,
      key: E,
      ref: n !== void 0 ? n : null,
      props: s
    };
  }
  return T.Fragment = t, T.jsx = r, T.jsxs = r, T;
}
var f = {};
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
function ae() {
  return x || (x = 1, process.env.NODE_ENV !== "production" && (function() {
    function u(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Q ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case h:
          return "Fragment";
        case $:
          return "Profiler";
        case V:
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
          case Y:
            return "Portal";
          case H:
            return e.displayName || "Context";
          case B:
            return (e._context.displayName || "Context") + ".Consumer";
          case J:
            var o = e.render;
            return e = e.displayName, e || (e = o.displayName || o.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case K:
            return o = e.displayName || null, o !== null ? o : u(e.type) || "Memo";
          case R:
            o = e._payload, e = e._init;
            try {
              return u(e(o));
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
        var o = !1;
      } catch {
        o = !0;
      }
      if (o) {
        o = console;
        var i = o.error, l = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i.call(
          o,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          l
        ), t(e);
      }
    }
    function a(e) {
      if (e === h) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === R)
        return "<...>";
      try {
        var o = u(e);
        return o ? "<" + o + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function n() {
      var e = S.A;
      return e === null ? null : e.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function E(e) {
      if (D.call(e, "key")) {
        var o = Object.getOwnPropertyDescriptor(e, "key").get;
        if (o && o.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function _(e, o) {
      function i() {
        I || (I = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          o
        ));
      }
      i.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: i,
        configurable: !0
      });
    }
    function M() {
      var e = u(this.type);
      return N[e] || (N[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function F(e, o, i, l, A, v) {
      var c = i.ref;
      return e = {
        $$typeof: P,
        type: e,
        key: o,
        props: i,
        _owner: l
      }, (c !== void 0 ? c : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: M
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
        value: A
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: v
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function L(e, o, i, l, A, v) {
      var c = o.children;
      if (c !== void 0)
        if (l)
          if (Z(c)) {
            for (l = 0; l < c.length; l++)
              b(c[l]);
            Object.freeze && Object.freeze(c);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else b(c);
      if (D.call(o, "key")) {
        c = u(e);
        var d = Object.keys(o).filter(function(ee) {
          return ee !== "key";
        });
        l = 0 < d.length ? "{key: someKey, " + d.join(": ..., ") + ": ...}" : "{key: someKey}", j[c + l] || (d = 0 < d.length ? "{" + d.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          l,
          c,
          d,
          c
        ), j[c + l] = !0);
      }
      if (c = null, i !== void 0 && (r(i), c = "" + i), E(o) && (r(o.key), c = "" + o.key), "key" in o) {
        i = {};
        for (var C in o)
          C !== "key" && (i[C] = o[C]);
      } else i = o;
      return c && _(
        i,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), F(
        e,
        c,
        i,
        n(),
        A,
        v
      );
    }
    function b(e) {
      G(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === R && (e._payload.status === "fulfilled" ? G(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function G(e) {
      return typeof e == "object" && e !== null && e.$$typeof === P;
    }
    var g = te, P = Symbol.for("react.transitional.element"), Y = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), V = Symbol.for("react.strict_mode"), $ = Symbol.for("react.profiler"), B = Symbol.for("react.consumer"), H = Symbol.for("react.context"), J = Symbol.for("react.forward_ref"), q = Symbol.for("react.suspense"), z = Symbol.for("react.suspense_list"), K = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), X = Symbol.for("react.activity"), Q = Symbol.for("react.client.reference"), S = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, D = Object.prototype.hasOwnProperty, Z = Array.isArray, m = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var I, N = {}, y = g.react_stack_bottom_frame.bind(
      g,
      s
    )(), w = m(a(s)), j = {};
    f.Fragment = h, f.jsx = function(e, o, i) {
      var l = 1e4 > S.recentlyCreatedOwnerStacks++;
      return L(
        e,
        o,
        i,
        !1,
        l ? Error("react-stack-top-frame") : y,
        l ? m(a(e)) : w
      );
    }, f.jsxs = function(e, o, i) {
      var l = 1e4 > S.recentlyCreatedOwnerStacks++;
      return L(
        e,
        o,
        i,
        !0,
        l ? Error("react-stack-top-frame") : y,
        l ? m(a(e)) : w
      );
    };
  })()), f;
}
var U;
function oe() {
  return U || (U = 1, process.env.NODE_ENV === "production" ? O.exports = re() : O.exports = ae()), O.exports;
}
var p = oe();
function le({ children: u, onClick: t }) {
  return /* @__PURE__ */ p.jsx("button", { onClick: t, children: u });
}
function ce({ children: u, onClick: t }) {
  return /* @__PURE__ */ p.jsx("span", { onClick: t, children: /* @__PURE__ */ p.jsx("b", { children: u }) });
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
    let a = this.buildUrl(t);
    const n = this.getRequestHeaders();
    r && (a = a + "/" + r);
    try {
      const s = await fetch(a, {
        method: "GET",
        // Or 'POST', 'PUT', 'DELETE', etc.
        headers: n
      });
      if (!s.ok)
        throw new Error(`HTTP error! status: ${s.status}`);
      return await s.json();
    } catch (s) {
      console.error("Error fetching data:", s);
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
    let a = this.buildUrl(t);
    const n = this.getRequestHeaders();
    try {
      const s = await fetch(a, {
        method: "POST",
        headers: n,
        body: JSON.stringify(r)
      });
    } catch (s) {
      console.error("Error fetching data:", s);
    }
  }
  async postDataWithFiles(t, r, a, n) {
    this.buildUrl(t);
    try {
      const E = new FormData();
      for (var s = 0; s < r.length; s++)
        E.append("file" + s, r[s]);
      return E.append(a, JSON.stringify(n)), await this.post(t, E);
    } catch {
      return null;
    }
  }
  setControllerPath(t, r, a) {
    this.controllerPath = t, this.isRelativePath = r, this.authToken = a;
  }
  buildUrl(t) {
    return `${this.controllerPath}/${t}`;
  }
}
class ne {
  constructor() {
    this.dict = new Object();
  }
  builtFromArray(t, r) {
    for (let a = 0; a < t.length; a++)
      this.add(t[a], r[a]);
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
class W {
  constructor() {
    this.dict = new ne();
  }
  add(t, r) {
    if (this.dict.hasKey(t)) {
      this.dict.get(t).push(r);
      return;
    }
    let a = [];
    a.push(r), this.dict.add(t, a);
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
    this.EventStore = new W(), this.UnRegisteredEventStore = new W();
  }
  registerForEvent(t, r) {
    this.EventStore.add(t, { eventName: t, callback: r, tag: "", disabled: !1 });
    let a = this.UnRegisteredEventStore.get(t);
    a && (r(a.eventData), this.UnRegisteredEventStore.remove(t));
  }
  registerForEventWithTag(t, r, a) {
    this.EventStore.add(t, { eventName: t, callback: r, tag: a, disabled: !1 });
    let n = this.UnRegisteredEventStore.get(t);
    n && (r(n.eventData), this.UnRegisteredEventStore.remove(t));
  }
  raiseEvent(t, r) {
    let a = this.EventStore.get(t);
    if (!a) {
      if (!r)
        return;
      r.shouldCallAfterClientRegister && this.UnRegisteredEventStore.add(t, { eventData: r });
      return;
    }
    for (let n = 0; n < a.length; n++)
      a[n].disabled || a[n].callback(r, a[n]);
  }
  unregisterEvent(t, r) {
    let a = this.EventStore.get(t);
    if (a)
      for (let n = 0; n < a.length; n++)
        a[n].tag === r && (a[n].disabled = !0);
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
const _e = {
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
export {
  le as Button,
  ce as SmartText,
  de as TestSys,
  W as WhereCollection,
  ne as WhereDictionary,
  _e as WhereEventNames,
  ue as WhereService,
  Ee as WhereSystem
};
