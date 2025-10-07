import te from "react";
var p = { exports: {} }, E = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $;
function re() {
  if ($) return E;
  $ = 1;
  var c = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(n, a, o) {
    var f = null;
    if (o !== void 0 && (f = "" + o), a.key !== void 0 && (f = "" + a.key), "key" in a) {
      o = {};
      for (var h in a)
        h !== "key" && (o[h] = a[h]);
    } else o = a;
    return a = o.ref, {
      $$typeof: c,
      type: n,
      key: f,
      ref: a !== void 0 ? a : null,
      props: o
    };
  }
  return E.Fragment = t, E.jsx = r, E.jsxs = r, E;
}
var v = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var F;
function ne() {
  return F || (F = 1, process.env.NODE_ENV !== "production" && (function() {
    function c(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Z ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case R:
          return "Fragment";
        case J:
          return "Profiler";
        case M:
          return "StrictMode";
        case H:
          return "Suspense";
        case K:
          return "SuspenseList";
        case B:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case L:
            return "Portal";
          case z:
            return e.displayName || "Context";
          case V:
            return (e._context.displayName || "Context") + ".Consumer";
          case G:
            var s = e.render;
            return e = e.displayName, e || (e = s.displayName || s.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case X:
            return s = e.displayName || null, s !== null ? s : c(e.type) || "Memo";
          case g:
            s = e._payload, e = e._init;
            try {
              return c(e(s));
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
        var s = !1;
      } catch {
        s = !0;
      }
      if (s) {
        s = console;
        var i = s.error, l = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i.call(
          s,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          l
        ), t(e);
      }
    }
    function n(e) {
      if (e === R) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === g)
        return "<...>";
      try {
        var s = c(e);
        return s ? "<" + s + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var e = _.A;
      return e === null ? null : e.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function f(e) {
      if (j.call(e, "key")) {
        var s = Object.getOwnPropertyDescriptor(e, "key").get;
        if (s && s.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function h(e, s) {
      function i() {
        x || (x = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          s
        ));
      }
      i.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: i,
        configurable: !0
      });
    }
    function I() {
      var e = c(this.type);
      return C[e] || (C[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function q(e, s, i, l, b, S) {
      var u = i.ref;
      return e = {
        $$typeof: k,
        type: e,
        key: s,
        props: i,
        _owner: l
      }, (u !== void 0 ? u : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: I
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
        value: b
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: S
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function w(e, s, i, l, b, S) {
      var u = s.children;
      if (u !== void 0)
        if (l)
          if (Q(u)) {
            for (l = 0; l < u.length; l++)
              A(u[l]);
            Object.freeze && Object.freeze(u);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else A(u);
      if (j.call(s, "key")) {
        u = c(e);
        var d = Object.keys(s).filter(function(ee) {
          return ee !== "key";
        });
        l = 0 < d.length ? "{key: someKey, " + d.join(": ..., ") + ": ...}" : "{key: someKey}", Y[u + l] || (d = 0 < d.length ? "{" + d.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          l,
          u,
          d,
          u
        ), Y[u + l] = !0);
      }
      if (u = null, i !== void 0 && (r(i), u = "" + i), f(s) && (r(s.key), u = "" + s.key), "key" in s) {
        i = {};
        for (var y in s)
          y !== "key" && (i[y] = s[y]);
      } else i = s;
      return u && h(
        i,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), q(
        e,
        u,
        i,
        a(),
        b,
        S
      );
    }
    function A(e) {
      P(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === g && (e._payload.status === "fulfilled" ? P(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function P(e) {
      return typeof e == "object" && e !== null && e.$$typeof === k;
    }
    var m = te, k = Symbol.for("react.transitional.element"), L = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), M = Symbol.for("react.strict_mode"), J = Symbol.for("react.profiler"), V = Symbol.for("react.consumer"), z = Symbol.for("react.context"), G = Symbol.for("react.forward_ref"), H = Symbol.for("react.suspense"), K = Symbol.for("react.suspense_list"), X = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), B = Symbol.for("react.activity"), Z = Symbol.for("react.client.reference"), _ = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, j = Object.prototype.hasOwnProperty, Q = Array.isArray, T = console.createTask ? console.createTask : function() {
      return null;
    };
    m = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var x, C = {}, N = m.react_stack_bottom_frame.bind(
      m,
      o
    )(), U = T(n(o)), Y = {};
    v.Fragment = R, v.jsx = function(e, s, i) {
      var l = 1e4 > _.recentlyCreatedOwnerStacks++;
      return w(
        e,
        s,
        i,
        !1,
        l ? Error("react-stack-top-frame") : N,
        l ? T(n(e)) : U
      );
    }, v.jsxs = function(e, s, i) {
      var l = 1e4 > _.recentlyCreatedOwnerStacks++;
      return w(
        e,
        s,
        i,
        !0,
        l ? Error("react-stack-top-frame") : N,
        l ? T(n(e)) : U
      );
    };
  })()), v;
}
var W;
function se() {
  return W || (W = 1, process.env.NODE_ENV === "production" ? p.exports = re() : p.exports = ne()), p.exports;
}
var O = se();
function le({ children: c, onClick: t }) {
  return /* @__PURE__ */ O.jsx("button", { onClick: t, children: c });
}
function ue({ children: c, onClick: t }) {
  return /* @__PURE__ */ O.jsx("span", { onClick: t, children: /* @__PURE__ */ O.jsx("b", { children: c }) });
}
class ce {
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
    let n = this.buildUrl(t);
    const a = this.getRequestHeaders();
    r && (n = n + "/" + r);
    try {
      const o = await fetch(n, {
        method: "GET",
        // Or 'POST', 'PUT', 'DELETE', etc.
        headers: a
      });
      if (!o.ok)
        throw new Error(`HTTP error! status: ${o.status}`);
      return await o.json();
    } catch (o) {
      console.error("Error fetching data:", o);
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
    let n = this.buildUrl(t);
    const a = this.getRequestHeaders();
    try {
      const o = await fetch(n, {
        method: "POST",
        headers: a,
        body: JSON.stringify(r)
      });
    } catch (o) {
      console.error("Error fetching data:", o);
    }
  }
  async postDataWithFiles(t, r, n, a) {
    this.buildUrl(t);
    try {
      const f = new FormData();
      for (var o = 0; o < r.length; o++)
        f.append("file" + o, r[o]);
      return f.append(n, JSON.stringify(a)), await this.post(t, f);
    } catch {
      return null;
    }
  }
  setControllerPath(t, r, n) {
    this.controllerPath = t, this.isRelativePath = r, this.authToken = n;
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
    for (let n = 0; n < t.length; n++)
      this.add(t[n], r[n]);
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
class D {
  constructor() {
    this.dict = new ae();
  }
  add(t, r) {
    if (this.dict.hasKey(t)) {
      this.dict.get(t).push(r);
      return;
    }
    let n = [];
    n.push(r), this.dict.add(t, n);
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
class oe {
  constructor() {
    this.EventStore = new D(), this.UnRegisteredEventStore = new D();
  }
  registerForEvent(t, r) {
    this.EventStore.add(t, { eventName: t, callback: r, tag: "", disabled: !1 });
    let n = this.UnRegisteredEventStore.get(t);
    n && (r(n.eventData), this.UnRegisteredEventStore.remove(t));
  }
  registerForEventWithTag(t, r, n) {
    this.EventStore.add(t, { eventName: t, callback: r, tag: n, disabled: !1 });
    let a = this.UnRegisteredEventStore.get(t);
    a && (r(a.eventData), this.UnRegisteredEventStore.remove(t));
  }
  raiseEvent(t, r) {
    let n = this.EventStore.get(t);
    if (!n) {
      if (!r)
        return;
      r.shouldCallAfterClientRegister && this.UnRegisteredEventStore.add(t, { eventData: r });
      return;
    }
    for (let a = 0; a < n.length; a++)
      n[a].disabled || n[a].callback(r, n[a]);
  }
  unregisterEvent(t, r) {
    let n = this.EventStore.get(t);
    if (n)
      for (let a = 0; a < n.length; a++)
        n[a].tag === r && (n[a].disabled = !0);
  }
}
class fe {
  constructor() {
    this.EventSystem = new oe(), this.services = {}, this.AppConfig = {};
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
export {
  le as Button,
  ue as SmartText,
  de as TestSys,
  D as WhereCollection,
  ae as WhereDictionary,
  ce as WhereService,
  fe as WhereSystem
};
