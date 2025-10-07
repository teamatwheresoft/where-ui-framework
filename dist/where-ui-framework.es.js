import re from "react";
var R = { exports: {} }, E = {};
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
function te() {
  if ($) return E;
  $ = 1;
  var c = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function t(n, a, o) {
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
  return E.Fragment = r, E.jsx = t, E.jsxs = t, E;
}
var m = {};
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
        case _:
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
          case p:
            s = e._payload, e = e._init;
            try {
              return c(e(s));
            } catch {
            }
        }
      return null;
    }
    function r(e) {
      return "" + e;
    }
    function t(e) {
      try {
        r(e);
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
        ), r(e);
      }
    }
    function n(e) {
      if (e === _) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === p)
        return "<...>";
      try {
        var s = c(e);
        return s ? "<" + s + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var e = g.A;
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
              P(u[l]);
            Object.freeze && Object.freeze(u);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else P(u);
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
      if (u = null, i !== void 0 && (t(i), u = "" + i), f(s) && (t(s.key), u = "" + s.key), "key" in s) {
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
    function P(e) {
      A(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === p && (e._payload.status === "fulfilled" ? A(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function A(e) {
      return typeof e == "object" && e !== null && e.$$typeof === k;
    }
    var v = re, k = Symbol.for("react.transitional.element"), L = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), M = Symbol.for("react.strict_mode"), J = Symbol.for("react.profiler"), V = Symbol.for("react.consumer"), z = Symbol.for("react.context"), G = Symbol.for("react.forward_ref"), H = Symbol.for("react.suspense"), K = Symbol.for("react.suspense_list"), X = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), B = Symbol.for("react.activity"), Z = Symbol.for("react.client.reference"), g = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, j = Object.prototype.hasOwnProperty, Q = Array.isArray, T = console.createTask ? console.createTask : function() {
      return null;
    };
    v = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var x, C = {}, N = v.react_stack_bottom_frame.bind(
      v,
      o
    )(), U = T(n(o)), Y = {};
    m.Fragment = _, m.jsx = function(e, s, i) {
      var l = 1e4 > g.recentlyCreatedOwnerStacks++;
      return w(
        e,
        s,
        i,
        !1,
        l ? Error("react-stack-top-frame") : N,
        l ? T(n(e)) : U
      );
    }, m.jsxs = function(e, s, i) {
      var l = 1e4 > g.recentlyCreatedOwnerStacks++;
      return w(
        e,
        s,
        i,
        !0,
        l ? Error("react-stack-top-frame") : N,
        l ? T(n(e)) : U
      );
    };
  })()), m;
}
var W;
function se() {
  return W || (W = 1, process.env.NODE_ENV === "production" ? R.exports = te() : R.exports = ne()), R.exports;
}
var O = se();
function le({ children: c, onClick: r }) {
  return /* @__PURE__ */ O.jsx("button", { onClick: r, children: c });
}
function ue({ children: c, onClick: r }) {
  return /* @__PURE__ */ O.jsx("span", { onClick: r, children: /* @__PURE__ */ O.jsx("b", { children: c }) });
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
  async get(r, t) {
    let n = this.buildUrl(r);
    const a = this.getRequestHeaders();
    t && (n = n + "/" + t);
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
    const r = {
      "Content-Type": "application/json"
    };
    return this.authToken && (r.Authorization = "Bearer " + this.authToken), r;
  }
  async getblob(r, t) {
  }
  /**
   * 
   * @param {string} Name of the method 
   * @param {object} data to be passed
   * @returns promise
   */
  async post(r, t) {
    let n = this.buildUrl(r);
    const a = this.getRequestHeaders();
    try {
      const o = await fetch(n, {
        method: "POST",
        headers: a,
        body: JSON.stringify(t)
      });
    } catch (o) {
      console.error("Error fetching data:", o);
    }
  }
  async postDataWithFiles(r, t, n, a) {
    this.buildUrl(r);
    try {
      const f = new FormData();
      for (var o = 0; o < t.length; o++)
        f.append("file" + o, t[o]);
      return f.append(n, JSON.stringify(a)), await this.post(r, f);
    } catch {
      return null;
    }
  }
  setControllerPath(r, t, n) {
    this.controllerPath = r, this.isRelativePath = t, this.authToken = n;
  }
  buildUrl(r) {
    return `${this.controllerPath}/${r}`;
  }
}
class ae {
  constructor() {
    this.dict = new Object();
  }
  builtFromArray(r, t) {
    for (let n = 0; n < r.length; n++)
      this.add(r[n], t[n]);
  }
  /**
   * Adds any object to the dictionary. If Object already exists this mehtod sets the new object to exisitng key
   * @param {string} key 
   * @param {object} value 
   */
  add(r, t) {
    this.dict[r] = t;
  }
  /**
   * this method same as as add except that method do not add or set the new object if the key already exists
   * @param {string} key 
   * @param {object} value 
   * @returns 
   */
  addExclusive(r, t) {
    this.get(r) || this.add(r, t);
  }
  get(r) {
    return this.dict[r];
  }
  hasKey(r) {
    return !!this.dict[r];
  }
  getKeys() {
    return Object.keys(this.dict);
  }
  getValuesAsArray() {
    return Object.values(this.dict);
  }
  destroy(r) {
    this.hasKey(r) && (this.dict[r] = null);
  }
  setOrAdd(r, t) {
    this.hasKey(r) ? this.dict[r] = t : this.add(r, t);
  }
}
class D {
  constructor() {
    this.dict = new ae();
  }
  add(r, t) {
    if (this.dict.hasKey(r)) {
      this.dict.get(r).push(t);
      return;
    }
    let n = [];
    n.push(t), this.dict.add(r, n);
  }
  get(r) {
    return this.dict.get(r);
  }
  getKeys() {
    return this.dict.getKeys();
  }
  remove(r) {
    this.dict.destroy(r);
  }
}
class oe {
  constructor() {
    this.EventStore = new D(), this.UnRegisteredEventStore = new D();
  }
  registerForEvent(r, t) {
    this.EventStore.add(r, { eventName: r, callback: t, tag: "", disabled: !1 });
    let n = this.UnRegisteredEventStore.get(r);
    n && (t(n.eventData), this.UnRegisteredEventStore.remove(r));
  }
  registerForEventWithTag(r, t, n) {
    this.EventStore.add(r, { eventName: r, callback: t, tag: n, disabled: !1 });
    let a = this.UnRegisteredEventStore.get(r);
    a && (t(a.eventData), this.UnRegisteredEventStore.remove(r));
  }
  raiseEvent(r, t) {
    let n = this.EventStore.get(r);
    if (!n) {
      if (!t)
        return;
      t.shouldCallAfterClientRegister && this.UnRegisteredEventStore.add(r, { eventData: t });
      return;
    }
    for (let a = 0; a < n.length; a++)
      n[a].disabled || n[a].callback(t, n[a]);
  }
  unregisterEvent(r, t) {
    let n = this.EventStore.get(r);
    if (n)
      for (let a = 0; a < n.length; a++)
        n[a].tag === t && (n[a].disabled = !0);
  }
}
class fe {
  constructor() {
    this.EventSystem = new oe();
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
