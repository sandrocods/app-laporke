var xv = (e, t) => () => (t || e((t = {
    exports: {}
}).exports, t), t.exports);
var IC = xv((o1, Xc) => {
    function wv(e, t) {
        for (var n = 0; n < t.length; n++) {
            const r = t[n];
            if (typeof r != "string" && !Array.isArray(r)) {
                for (const i in r)
                    if (i !== "default" && !(i in e)) {
                        const o = Object.getOwnPropertyDescriptor(r, i);
                        o && Object.defineProperty(e, i, o.get ? o : {
                            enumerable: !0,
                            get: () => r[i]
                        })
                    }
            }
        }
        return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }))
    }(function() {
        const t = document.createElement("link").relList;
        if (t && t.supports && t.supports("modulepreload")) return;
        for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
        new MutationObserver(i => {
            for (const o of i)
                if (o.type === "childList")
                    for (const a of o.addedNodes) a.tagName === "LINK" && a.rel === "modulepreload" && r(a)
        }).observe(document, {
            childList: !0,
            subtree: !0
        });

        function n(i) {
            const o = {};
            return i.integrity && (o.integrity = i.integrity), i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? o.credentials = "include" : i.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o
        }

        function r(i) {
            if (i.ep) return;
            i.ep = !0;
            const o = n(i);
            fetch(i.href, o)
        }
    })();

    function _v(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
    }
    var Ih = {
            exports: {}
        },
        Ya = {},
        Dh = {
            exports: {}
        },
        ae = {};
    /**
     * @license React
     * react.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var es = Symbol.for("react.element"),
        kv = Symbol.for("react.portal"),
        Cv = Symbol.for("react.fragment"),
        Sv = Symbol.for("react.strict_mode"),
        Ev = Symbol.for("react.profiler"),
        bv = Symbol.for("react.provider"),
        Nv = Symbol.for("react.context"),
        jv = Symbol.for("react.forward_ref"),
        Tv = Symbol.for("react.suspense"),
        Lv = Symbol.for("react.memo"),
        Av = Symbol.for("react.lazy"),
        Fp = Symbol.iterator;

    function Pv(e) {
        return e === null || typeof e != "object" ? null : (e = Fp && e[Fp] || e["@@iterator"], typeof e == "function" ? e : null)
    }
    var Bh = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        },
        Mh = Object.assign,
        Fh = {};

    function $i(e, t, n) {
        this.props = e, this.context = t, this.refs = Fh, this.updater = n || Bh
    }
    $i.prototype.isReactComponent = {};
    $i.prototype.setState = function(e, t) {
        if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, t, "setState")
    };
    $i.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate")
    };

    function $h() {}
    $h.prototype = $i.prototype;

    function ed(e, t, n) {
        this.props = e, this.context = t, this.refs = Fh, this.updater = n || Bh
    }
    var td = ed.prototype = new $h;
    td.constructor = ed;
    Mh(td, $i.prototype);
    td.isPureReactComponent = !0;
    var $p = Array.isArray,
        zh = Object.prototype.hasOwnProperty,
        nd = {
            current: null
        },
        Hh = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };

    function Wh(e, t, n) {
        var r, i = {},
            o = null,
            a = null;
        if (t != null)
            for (r in t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (o = "" + t.key), t) zh.call(t, r) && !Hh.hasOwnProperty(r) && (i[r] = t[r]);
        var u = arguments.length - 2;
        if (u === 1) i.children = n;
        else if (1 < u) {
            for (var c = Array(u), p = 0; p < u; p++) c[p] = arguments[p + 2];
            i.children = c
        }
        if (e && e.defaultProps)
            for (r in u = e.defaultProps, u) i[r] === void 0 && (i[r] = u[r]);
        return {
            $$typeof: es,
            type: e,
            key: o,
            ref: a,
            props: i,
            _owner: nd.current
        }
    }

    function Ov(e, t) {
        return {
            $$typeof: es,
            type: e.type,
            key: t,
            ref: e.ref,
            props: e.props,
            _owner: e._owner
        }
    }

    function rd(e) {
        return typeof e == "object" && e !== null && e.$$typeof === es
    }

    function Rv(e) {
        var t = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + e.replace(/[=:]/g, function(n) {
            return t[n]
        })
    }
    var zp = /\/+/g;

    function su(e, t) {
        return typeof e == "object" && e !== null && e.key != null ? Rv("" + e.key) : t.toString(36)
    }

    function Ys(e, t, n, r, i) {
        var o = typeof e;
        (o === "undefined" || o === "boolean") && (e = null);
        var a = !1;
        if (e === null) a = !0;
        else switch (o) {
            case "string":
            case "number":
                a = !0;
                break;
            case "object":
                switch (e.$$typeof) {
                    case es:
                    case kv:
                        a = !0
                }
        }
        if (a) return a = e, i = i(a), e = r === "" ? "." + su(a, 0) : r, $p(i) ? (n = "", e != null && (n = e.replace(zp, "$&/") + "/"), Ys(i, t, n, "", function(p) {
            return p
        })) : i != null && (rd(i) && (i = Ov(i, n + (!i.key || a && a.key === i.key ? "" : ("" + i.key).replace(zp, "$&/") + "/") + e)), t.push(i)), 1;
        if (a = 0, r = r === "" ? "." : r + ":", $p(e))
            for (var u = 0; u < e.length; u++) {
                o = e[u];
                var c = r + su(o, u);
                a += Ys(o, t, n, c, i)
            } else if (c = Pv(e), typeof c == "function")
                for (e = c.call(e), u = 0; !(o = e.next()).done;) o = o.value, c = r + su(o, u++), a += Ys(o, t, n, c, i);
            else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
        return a
    }

    function js(e, t, n) {
        if (e == null) return e;
        var r = [],
            i = 0;
        return Ys(e, r, "", "", function(o) {
            return t.call(n, o, i++)
        }), r
    }

    function Iv(e) {
        if (e._status === -1) {
            var t = e._result;
            t = t(), t.then(function(n) {
                (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
            }, function(n) {
                (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
            }), e._status === -1 && (e._status = 0, e._result = t)
        }
        if (e._status === 1) return e._result.default;
        throw e._result
    }
    var ft = {
            current: null
        },
        Js = {
            transition: null
        },
        Dv = {
            ReactCurrentDispatcher: ft,
            ReactCurrentBatchConfig: Js,
            ReactCurrentOwner: nd
        };

    function Uh() {
        throw Error("act(...) is not supported in production builds of React.")
    }
    ae.Children = {
        map: js,
        forEach: function(e, t, n) {
            js(e, function() {
                t.apply(this, arguments)
            }, n)
        },
        count: function(e) {
            var t = 0;
            return js(e, function() {
                t++
            }), t
        },
        toArray: function(e) {
            return js(e, function(t) {
                return t
            }) || []
        },
        only: function(e) {
            if (!rd(e)) throw Error("React.Children.only expected to receive a single React element child.");
            return e
        }
    };
    ae.Component = $i;
    ae.Fragment = Cv;
    ae.Profiler = Ev;
    ae.PureComponent = ed;
    ae.StrictMode = Sv;
    ae.Suspense = Tv;
    ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Dv;
    ae.act = Uh;
    ae.cloneElement = function(e, t, n) {
        if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var r = Mh({}, e.props),
            i = e.key,
            o = e.ref,
            a = e._owner;
        if (t != null) {
            if (t.ref !== void 0 && (o = t.ref, a = nd.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
            for (c in t) zh.call(t, c) && !Hh.hasOwnProperty(c) && (r[c] = t[c] === void 0 && u !== void 0 ? u[c] : t[c])
        }
        var c = arguments.length - 2;
        if (c === 1) r.children = n;
        else if (1 < c) {
            u = Array(c);
            for (var p = 0; p < c; p++) u[p] = arguments[p + 2];
            r.children = u
        }
        return {
            $$typeof: es,
            type: e.type,
            key: i,
            ref: o,
            props: r,
            _owner: a
        }
    };
    ae.createContext = function(e) {
        return e = {
            $$typeof: Nv,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        }, e.Provider = {
            $$typeof: bv,
            _context: e
        }, e.Consumer = e
    };
    ae.createElement = Wh;
    ae.createFactory = function(e) {
        var t = Wh.bind(null, e);
        return t.type = e, t
    };
    ae.createRef = function() {
        return {
            current: null
        }
    };
    ae.forwardRef = function(e) {
        return {
            $$typeof: jv,
            render: e
        }
    };
    ae.isValidElement = rd;
    ae.lazy = function(e) {
        return {
            $$typeof: Av,
            _payload: {
                _status: -1,
                _result: e
            },
            _init: Iv
        }
    };
    ae.memo = function(e, t) {
        return {
            $$typeof: Lv,
            type: e,
            compare: t === void 0 ? null : t
        }
    };
    ae.startTransition = function(e) {
        var t = Js.transition;
        Js.transition = {};
        try {
            e()
        } finally {
            Js.transition = t
        }
    };
    ae.unstable_act = Uh;
    ae.useCallback = function(e, t) {
        return ft.current.useCallback(e, t)
    };
    ae.useContext = function(e) {
        return ft.current.useContext(e)
    };
    ae.useDebugValue = function() {};
    ae.useDeferredValue = function(e) {
        return ft.current.useDeferredValue(e)
    };
    ae.useEffect = function(e, t) {
        return ft.current.useEffect(e, t)
    };
    ae.useId = function() {
        return ft.current.useId()
    };
    ae.useImperativeHandle = function(e, t, n) {
        return ft.current.useImperativeHandle(e, t, n)
    };
    ae.useInsertionEffect = function(e, t) {
        return ft.current.useInsertionEffect(e, t)
    };
    ae.useLayoutEffect = function(e, t) {
        return ft.current.useLayoutEffect(e, t)
    };
    ae.useMemo = function(e, t) {
        return ft.current.useMemo(e, t)
    };
    ae.useReducer = function(e, t, n) {
        return ft.current.useReducer(e, t, n)
    };
    ae.useRef = function(e) {
        return ft.current.useRef(e)
    };
    ae.useState = function(e) {
        return ft.current.useState(e)
    };
    ae.useSyncExternalStore = function(e, t, n) {
        return ft.current.useSyncExternalStore(e, t, n)
    };
    ae.useTransition = function() {
        return ft.current.useTransition()
    };
    ae.version = "18.3.1";
    Dh.exports = ae;
    var P = Dh.exports;
    const ce = _v(P),
        Bv = wv({
            __proto__: null,
            default: ce
        }, [P]);
    /**
     * @license React
     * react-jsx-runtime.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var Mv = P,
        Fv = Symbol.for("react.element"),
        $v = Symbol.for("react.fragment"),
        zv = Object.prototype.hasOwnProperty,
        Hv = Mv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        Wv = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };

    function Vh(e, t, n) {
        var r, i = {},
            o = null,
            a = null;
        n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (a = t.ref);
        for (r in t) zv.call(t, r) && !Wv.hasOwnProperty(r) && (i[r] = t[r]);
        if (e && e.defaultProps)
            for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
        return {
            $$typeof: Fv,
            type: e,
            key: o,
            ref: a,
            props: i,
            _owner: Hv.current
        }
    }
    Ya.Fragment = $v;
    Ya.jsx = Vh;
    Ya.jsxs = Vh;
    Ih.exports = Ya;
    var d = Ih.exports,
        Kh = {
            exports: {}
        },
        Ot = {},
        Qh = {
            exports: {}
        },
        Zh = {};
    /**
     * @license React
     * scheduler.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    (function(e) {
        function t(E, U) {
            var Q = E.length;
            E.push(U);
            e: for (; 0 < Q;) {
                var ie = Q - 1 >>> 1,
                    J = E[ie];
                if (0 < i(J, U)) E[ie] = U, E[Q] = J, Q = ie;
                else break e
            }
        }

        function n(E) {
            return E.length === 0 ? null : E[0]
        }

        function r(E) {
            if (E.length === 0) return null;
            var U = E[0],
                Q = E.pop();
            if (Q !== U) {
                E[0] = Q;
                e: for (var ie = 0, J = E.length, ke = J >>> 1; ie < ke;) {
                    var le = 2 * (ie + 1) - 1,
                        Te = E[le],
                        F = le + 1,
                        Fe = E[F];
                    if (0 > i(Te, Q)) F < J && 0 > i(Fe, Te) ? (E[ie] = Fe, E[F] = Q, ie = F) : (E[ie] = Te, E[le] = Q, ie = le);
                    else if (F < J && 0 > i(Fe, Q)) E[ie] = Fe, E[F] = Q, ie = F;
                    else break e
                }
            }
            return U
        }

        function i(E, U) {
            var Q = E.sortIndex - U.sortIndex;
            return Q !== 0 ? Q : E.id - U.id
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
            var o = performance;
            e.unstable_now = function() {
                return o.now()
            }
        } else {
            var a = Date,
                u = a.now();
            e.unstable_now = function() {
                return a.now() - u
            }
        }
        var c = [],
            p = [],
            m = 1,
            g = null,
            w = 3,
            N = !1,
            _ = !1,
            k = !1,
            S = typeof setTimeout == "function" ? setTimeout : null,
            x = typeof clearTimeout == "function" ? clearTimeout : null,
            y = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

        function v(E) {
            for (var U = n(p); U !== null;) {
                if (U.callback === null) r(p);
                else if (U.startTime <= E) r(p), U.sortIndex = U.expirationTime, t(c, U);
                else break;
                U = n(p)
            }
        }

        function j(E) {
            if (k = !1, v(E), !_)
                if (n(c) !== null) _ = !0, It(T);
                else {
                    var U = n(p);
                    U !== null && Me(j, U.startTime - E)
                }
        }

        function T(E, U) {
            _ = !1, k && (k = !1, x(I), I = -1), N = !0;
            var Q = w;
            try {
                for (v(U), g = n(c); g !== null && (!(g.expirationTime > U) || E && !_e());) {
                    var ie = g.callback;
                    if (typeof ie == "function") {
                        g.callback = null, w = g.priorityLevel;
                        var J = ie(g.expirationTime <= U);
                        U = e.unstable_now(), typeof J == "function" ? g.callback = J : g === n(c) && r(c), v(U)
                    } else r(c);
                    g = n(c)
                }
                if (g !== null) var ke = !0;
                else {
                    var le = n(p);
                    le !== null && Me(j, le.startTime - U), ke = !1
                }
                return ke
            } finally {
                g = null, w = Q, N = !1
            }
        }
        var R = !1,
            O = null,
            I = -1,
            V = 5,
            K = -1;

        function _e() {
            return !(e.unstable_now() - K < V)
        }

        function He() {
            if (O !== null) {
                var E = e.unstable_now();
                K = E;
                var U = !0;
                try {
                    U = O(!0, E)
                } finally {
                    U ? Ye() : (R = !1, O = null)
                }
            } else R = !1
        }
        var Ye;
        if (typeof y == "function") Ye = function() {
            y(He)
        };
        else if (typeof MessageChannel < "u") {
            var Xe = new MessageChannel,
                ht = Xe.port2;
            Xe.port1.onmessage = He, Ye = function() {
                ht.postMessage(null)
            }
        } else Ye = function() {
            S(He, 0)
        };

        function It(E) {
            O = E, R || (R = !0, Ye())
        }

        function Me(E, U) {
            I = S(function() {
                E(e.unstable_now())
            }, U)
        }
        e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(E) {
            E.callback = null
        }, e.unstable_continueExecution = function() {
            _ || N || (_ = !0, It(T))
        }, e.unstable_forceFrameRate = function(E) {
            0 > E || 125 < E ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : V = 0 < E ? Math.floor(1e3 / E) : 5
        }, e.unstable_getCurrentPriorityLevel = function() {
            return w
        }, e.unstable_getFirstCallbackNode = function() {
            return n(c)
        }, e.unstable_next = function(E) {
            switch (w) {
                case 1:
                case 2:
                case 3:
                    var U = 3;
                    break;
                default:
                    U = w
            }
            var Q = w;
            w = U;
            try {
                return E()
            } finally {
                w = Q
            }
        }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(E, U) {
            switch (E) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    E = 3
            }
            var Q = w;
            w = E;
            try {
                return U()
            } finally {
                w = Q
            }
        }, e.unstable_scheduleCallback = function(E, U, Q) {
            var ie = e.unstable_now();
            switch (typeof Q == "object" && Q !== null ? (Q = Q.delay, Q = typeof Q == "number" && 0 < Q ? ie + Q : ie) : Q = ie, E) {
                case 1:
                    var J = -1;
                    break;
                case 2:
                    J = 250;
                    break;
                case 5:
                    J = 1073741823;
                    break;
                case 4:
                    J = 1e4;
                    break;
                default:
                    J = 5e3
            }
            return J = Q + J, E = {
                id: m++,
                callback: U,
                priorityLevel: E,
                startTime: Q,
                expirationTime: J,
                sortIndex: -1
            }, Q > ie ? (E.sortIndex = Q, t(p, E), n(c) === null && E === n(p) && (k ? (x(I), I = -1) : k = !0, Me(j, Q - ie))) : (E.sortIndex = J, t(c, E), _ || N || (_ = !0, It(T))), E
        }, e.unstable_shouldYield = _e, e.unstable_wrapCallback = function(E) {
            var U = w;
            return function() {
                var Q = w;
                w = U;
                try {
                    return E.apply(this, arguments)
                } finally {
                    w = Q
                }
            }
        }
    })(Zh);
    Qh.exports = Zh;
    var Uv = Qh.exports;
    /**
     * @license React
     * react-dom.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var Vv = P,
        Pt = Uv;

    function B(e) {
        for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    var Yh = new Set,
        Ao = {};

    function Wr(e, t) {
        ji(e, t), ji(e + "Capture", t)
    }

    function ji(e, t) {
        for (Ao[e] = t, e = 0; e < t.length; e++) Yh.add(t[e])
    }
    var An = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
        Hu = Object.prototype.hasOwnProperty,
        Kv = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        Hp = {},
        Wp = {};

    function Qv(e) {
        return Hu.call(Wp, e) ? !0 : Hu.call(Hp, e) ? !1 : Kv.test(e) ? Wp[e] = !0 : (Hp[e] = !0, !1)
    }

    function Zv(e, t, n, r) {
        if (n !== null && n.type === 0) return !1;
        switch (typeof t) {
            case "function":
            case "symbol":
                return !0;
            case "boolean":
                return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
            default:
                return !1
        }
    }

    function Yv(e, t, n, r) {
        if (t === null || typeof t > "u" || Zv(e, t, n, r)) return !0;
        if (r) return !1;
        if (n !== null) switch (n.type) {
            case 3:
                return !t;
            case 4:
                return t === !1;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t
        }
        return !1
    }

    function pt(e, t, n, r, i, o, a) {
        this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = a
    }
    var Ge = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
        Ge[e] = new pt(e, 0, !1, e, null, !1, !1)
    });
    [
        ["acceptCharset", "accept-charset"],
        ["className", "class"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"]
    ].forEach(function(e) {
        var t = e[0];
        Ge[t] = new pt(t, 1, !1, e[1], null, !1, !1)
    });
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
        Ge[e] = new pt(e, 2, !1, e.toLowerCase(), null, !1, !1)
    });
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
        Ge[e] = new pt(e, 2, !1, e, null, !1, !1)
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
        Ge[e] = new pt(e, 3, !1, e.toLowerCase(), null, !1, !1)
    });
    ["checked", "multiple", "muted", "selected"].forEach(function(e) {
        Ge[e] = new pt(e, 3, !0, e, null, !1, !1)
    });
    ["capture", "download"].forEach(function(e) {
        Ge[e] = new pt(e, 4, !1, e, null, !1, !1)
    });
    ["cols", "rows", "size", "span"].forEach(function(e) {
        Ge[e] = new pt(e, 6, !1, e, null, !1, !1)
    });
    ["rowSpan", "start"].forEach(function(e) {
        Ge[e] = new pt(e, 5, !1, e.toLowerCase(), null, !1, !1)
    });
    var id = /[\-:]([a-z])/g;

    function od(e) {
        return e[1].toUpperCase()
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
        var t = e.replace(id, od);
        Ge[t] = new pt(t, 1, !1, e, null, !1, !1)
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
        var t = e.replace(id, od);
        Ge[t] = new pt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
    });
    ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
        var t = e.replace(id, od);
        Ge[t] = new pt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
    });
    ["tabIndex", "crossOrigin"].forEach(function(e) {
        Ge[e] = new pt(e, 1, !1, e.toLowerCase(), null, !1, !1)
    });
    Ge.xlinkHref = new pt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
    ["src", "href", "action", "formAction"].forEach(function(e) {
        Ge[e] = new pt(e, 1, !1, e.toLowerCase(), null, !0, !0)
    });

    function sd(e, t, n, r) {
        var i = Ge.hasOwnProperty(t) ? Ge[t] : null;
        (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Yv(t, n, i, r) && (n = null), r || i === null ? Qv(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
    }
    var In = Vv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
        Ts = Symbol.for("react.element"),
        ui = Symbol.for("react.portal"),
        ci = Symbol.for("react.fragment"),
        ad = Symbol.for("react.strict_mode"),
        Wu = Symbol.for("react.profiler"),
        Jh = Symbol.for("react.provider"),
        qh = Symbol.for("react.context"),
        ld = Symbol.for("react.forward_ref"),
        Uu = Symbol.for("react.suspense"),
        Vu = Symbol.for("react.suspense_list"),
        ud = Symbol.for("react.memo"),
        Wn = Symbol.for("react.lazy"),
        Gh = Symbol.for("react.offscreen"),
        Up = Symbol.iterator;

    function oo(e) {
        return e === null || typeof e != "object" ? null : (e = Up && e[Up] || e["@@iterator"], typeof e == "function" ? e : null)
    }
    var Pe = Object.assign,
        au;

    function mo(e) {
        if (au === void 0) try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            au = t && t[1] || ""
        }
        return `
` + au + e
    }
    var lu = !1;

    function uu(e, t) {
        if (!e || lu) return "";
        lu = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            if (t)
                if (t = function() {
                        throw Error()
                    }, Object.defineProperty(t.prototype, "props", {
                        set: function() {
                            throw Error()
                        }
                    }), typeof Reflect == "object" && Reflect.construct) {
                    try {
                        Reflect.construct(t, [])
                    } catch (p) {
                        var r = p
                    }
                    Reflect.construct(e, [], t)
                } else {
                    try {
                        t.call()
                    } catch (p) {
                        r = p
                    }
                    e.call(t.prototype)
                }
            else {
                try {
                    throw Error()
                } catch (p) {
                    r = p
                }
                e()
            }
        } catch (p) {
            if (p && r && typeof p.stack == "string") {
                for (var i = p.stack.split(`
`), o = r.stack.split(`
`), a = i.length - 1, u = o.length - 1; 1 <= a && 0 <= u && i[a] !== o[u];) u--;
                for (; 1 <= a && 0 <= u; a--, u--)
                    if (i[a] !== o[u]) {
                        if (a !== 1 || u !== 1)
                            do
                                if (a--, u--, 0 > u || i[a] !== o[u]) {
                                    var c = `
` + i[a].replace(" at new ", " at ");
                                    return e.displayName && c.includes("<anonymous>") && (c = c.replace("<anonymous>", e.displayName)), c
                                } while (1 <= a && 0 <= u);
                        break
                    }
            }
        } finally {
            lu = !1, Error.prepareStackTrace = n
        }
        return (e = e ? e.displayName || e.name : "") ? mo(e) : ""
    }

    function Jv(e) {
        switch (e.tag) {
            case 5:
                return mo(e.type);
            case 16:
                return mo("Lazy");
            case 13:
                return mo("Suspense");
            case 19:
                return mo("SuspenseList");
            case 0:
            case 2:
            case 15:
                return e = uu(e.type, !1), e;
            case 11:
                return e = uu(e.type.render, !1), e;
            case 1:
                return e = uu(e.type, !0), e;
            default:
                return ""
        }
    }

    function Ku(e) {
        if (e == null) return null;
        if (typeof e == "function") return e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch (e) {
            case ci:
                return "Fragment";
            case ui:
                return "Portal";
            case Wu:
                return "Profiler";
            case ad:
                return "StrictMode";
            case Uu:
                return "Suspense";
            case Vu:
                return "SuspenseList"
        }
        if (typeof e == "object") switch (e.$$typeof) {
            case qh:
                return (e.displayName || "Context") + ".Consumer";
            case Jh:
                return (e._context.displayName || "Context") + ".Provider";
            case ld:
                var t = e.render;
                return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case ud:
                return t = e.displayName || null, t !== null ? t : Ku(e.type) || "Memo";
            case Wn:
                t = e._payload, e = e._init;
                try {
                    return Ku(e(t))
                } catch {}
        }
        return null
    }

    function qv(e) {
        var t = e.type;
        switch (e.tag) {
            case 24:
                return "Cache";
            case 9:
                return (t.displayName || "Context") + ".Consumer";
            case 10:
                return (t._context.displayName || "Context") + ".Provider";
            case 18:
                return "DehydratedFragment";
            case 11:
                return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
            case 7:
                return "Fragment";
            case 5:
                return t;
            case 4:
                return "Portal";
            case 3:
                return "Root";
            case 6:
                return "Text";
            case 16:
                return Ku(t);
            case 8:
                return t === ad ? "StrictMode" : "Mode";
            case 22:
                return "Offscreen";
            case 12:
                return "Profiler";
            case 21:
                return "Scope";
            case 13:
                return "Suspense";
            case 19:
                return "SuspenseList";
            case 25:
                return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
                if (typeof t == "function") return t.displayName || t.name || null;
                if (typeof t == "string") return t
        }
        return null
    }

    function sr(e) {
        switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return e;
            case "object":
                return e;
            default:
                return ""
        }
    }

    function Xh(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }

    function Gv(e) {
        var t = Xh(e) ? "checked" : "value",
            n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
            r = "" + e[t];
        if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
            var i = n.get,
                o = n.set;
            return Object.defineProperty(e, t, {
                configurable: !0,
                get: function() {
                    return i.call(this)
                },
                set: function(a) {
                    r = "" + a, o.call(this, a)
                }
            }), Object.defineProperty(e, t, {
                enumerable: n.enumerable
            }), {
                getValue: function() {
                    return r
                },
                setValue: function(a) {
                    r = "" + a
                },
                stopTracking: function() {
                    e._valueTracker = null, delete e[t]
                }
            }
        }
    }

    function Ls(e) {
        e._valueTracker || (e._valueTracker = Gv(e))
    }

    function em(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(),
            r = "";
        return e && (r = Xh(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
    }

    function ga(e) {
        if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
        try {
            return e.activeElement || e.body
        } catch {
            return e.body
        }
    }

    function Qu(e, t) {
        var n = t.checked;
        return Pe({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: n ?? e._wrapperState.initialChecked
        })
    }

    function Vp(e, t) {
        var n = t.defaultValue == null ? "" : t.defaultValue,
            r = t.checked != null ? t.checked : t.defaultChecked;
        n = sr(t.value != null ? t.value : n), e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
        }
    }

    function tm(e, t) {
        t = t.checked, t != null && sd(e, "checked", t, !1)
    }

    function Zu(e, t) {
        tm(e, t);
        var n = sr(t.value),
            r = t.type;
        if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
        else if (r === "submit" || r === "reset") {
            e.removeAttribute("value");
            return
        }
        t.hasOwnProperty("value") ? Yu(e, t.type, n) : t.hasOwnProperty("defaultValue") && Yu(e, t.type, sr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
    }

    function Kp(e, t, n) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
            t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
        }
        n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
    }

    function Yu(e, t, n) {
        (t !== "number" || ga(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
    }
    var go = Array.isArray;

    function ki(e, t, n, r) {
        if (e = e.options, t) {
            t = {};
            for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
            for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0)
        } else {
            for (n = "" + sr(n), t = null, i = 0; i < e.length; i++) {
                if (e[i].value === n) {
                    e[i].selected = !0, r && (e[i].defaultSelected = !0);
                    return
                }
                t !== null || e[i].disabled || (t = e[i])
            }
            t !== null && (t.selected = !0)
        }
    }

    function Ju(e, t) {
        if (t.dangerouslySetInnerHTML != null) throw Error(B(91));
        return Pe({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue
        })
    }

    function Qp(e, t) {
        var n = t.value;
        if (n == null) {
            if (n = t.children, t = t.defaultValue, n != null) {
                if (t != null) throw Error(B(92));
                if (go(n)) {
                    if (1 < n.length) throw Error(B(93));
                    n = n[0]
                }
                t = n
            }
            t == null && (t = ""), n = t
        }
        e._wrapperState = {
            initialValue: sr(n)
        }
    }

    function nm(e, t) {
        var n = sr(t.value),
            r = sr(t.defaultValue);
        n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
    }

    function Zp(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
    }

    function rm(e) {
        switch (e) {
            case "svg":
                return "http://www.w3.org/2000/svg";
            case "math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml"
        }
    }

    function qu(e, t) {
        return e == null || e === "http://www.w3.org/1999/xhtml" ? rm(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
    }
    var As, im = function(e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
            MSApp.execUnsafeLocalFunction(function() {
                return e(t, n, r, i)
            })
        } : e
    }(function(e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
        else {
            for (As = As || document.createElement("div"), As.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = As.firstChild; e.firstChild;) e.removeChild(e.firstChild);
            for (; t.firstChild;) e.appendChild(t.firstChild)
        }
    });

    function Po(e, t) {
        if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && n.nodeType === 3) {
                n.nodeValue = t;
                return
            }
        }
        e.textContent = t
    }
    var wo = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0
        },
        Xv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(wo).forEach(function(e) {
        Xv.forEach(function(t) {
            t = t + e.charAt(0).toUpperCase() + e.substring(1), wo[t] = wo[e]
        })
    });

    function om(e, t, n) {
        return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || wo.hasOwnProperty(e) && wo[e] ? ("" + t).trim() : t + "px"
    }

    function sm(e, t) {
        e = e.style;
        for (var n in t)
            if (t.hasOwnProperty(n)) {
                var r = n.indexOf("--") === 0,
                    i = om(n, t[n], r);
                n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i
            }
    }
    var ex = Pe({
        menuitem: !0
    }, {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    });

    function Gu(e, t) {
        if (t) {
            if (ex[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(B(137, e));
            if (t.dangerouslySetInnerHTML != null) {
                if (t.children != null) throw Error(B(60));
                if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(B(61))
            }
            if (t.style != null && typeof t.style != "object") throw Error(B(62))
        }
    }

    function Xu(e, t) {
        if (e.indexOf("-") === -1) return typeof t.is == "string";
        switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0
        }
    }
    var ec = null;

    function cd(e) {
        return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
    }
    var tc = null,
        Ci = null,
        Si = null;

    function Yp(e) {
        if (e = rs(e)) {
            if (typeof tc != "function") throw Error(B(280));
            var t = e.stateNode;
            t && (t = el(t), tc(e.stateNode, e.type, t))
        }
    }

    function am(e) {
        Ci ? Si ? Si.push(e) : Si = [e] : Ci = e
    }

    function lm() {
        if (Ci) {
            var e = Ci,
                t = Si;
            if (Si = Ci = null, Yp(e), t)
                for (e = 0; e < t.length; e++) Yp(t[e])
        }
    }

    function um(e, t) {
        return e(t)
    }

    function cm() {}
    var cu = !1;

    function dm(e, t, n) {
        if (cu) return e(t, n);
        cu = !0;
        try {
            return um(e, t, n)
        } finally {
            cu = !1, (Ci !== null || Si !== null) && (cm(), lm())
        }
    }

    function Oo(e, t) {
        var n = e.stateNode;
        if (n === null) return null;
        var r = el(n);
        if (r === null) return null;
        n = r[t];
        e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
                break e;
            default:
                e = !1
        }
        if (e) return null;
        if (n && typeof n != "function") throw Error(B(231, t, typeof n));
        return n
    }
    var nc = !1;
    if (An) try {
        var so = {};
        Object.defineProperty(so, "passive", {
            get: function() {
                nc = !0
            }
        }), window.addEventListener("test", so, so), window.removeEventListener("test", so, so)
    } catch {
        nc = !1
    }

    function tx(e, t, n, r, i, o, a, u, c) {
        var p = Array.prototype.slice.call(arguments, 3);
        try {
            t.apply(n, p)
        } catch (m) {
            this.onError(m)
        }
    }
    var _o = !1,
        ya = null,
        va = !1,
        rc = null,
        nx = {
            onError: function(e) {
                _o = !0, ya = e
            }
        };

    function rx(e, t, n, r, i, o, a, u, c) {
        _o = !1, ya = null, tx.apply(nx, arguments)
    }

    function ix(e, t, n, r, i, o, a, u, c) {
        if (rx.apply(this, arguments), _o) {
            if (_o) {
                var p = ya;
                _o = !1, ya = null
            } else throw Error(B(198));
            va || (va = !0, rc = p)
        }
    }

    function Ur(e) {
        var t = e,
            n = e;
        if (e.alternate)
            for (; t.return;) t = t.return;
        else {
            e = t;
            do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
        }
        return t.tag === 3 ? n : null
    }

    function fm(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
        }
        return null
    }

    function Jp(e) {
        if (Ur(e) !== e) throw Error(B(188))
    }

    function ox(e) {
        var t = e.alternate;
        if (!t) {
            if (t = Ur(e), t === null) throw Error(B(188));
            return t !== e ? null : e
        }
        for (var n = e, r = t;;) {
            var i = n.return;
            if (i === null) break;
            var o = i.alternate;
            if (o === null) {
                if (r = i.return, r !== null) {
                    n = r;
                    continue
                }
                break
            }
            if (i.child === o.child) {
                for (o = i.child; o;) {
                    if (o === n) return Jp(i), e;
                    if (o === r) return Jp(i), t;
                    o = o.sibling
                }
                throw Error(B(188))
            }
            if (n.return !== r.return) n = i, r = o;
            else {
                for (var a = !1, u = i.child; u;) {
                    if (u === n) {
                        a = !0, n = i, r = o;
                        break
                    }
                    if (u === r) {
                        a = !0, r = i, n = o;
                        break
                    }
                    u = u.sibling
                }
                if (!a) {
                    for (u = o.child; u;) {
                        if (u === n) {
                            a = !0, n = o, r = i;
                            break
                        }
                        if (u === r) {
                            a = !0, r = o, n = i;
                            break
                        }
                        u = u.sibling
                    }
                    if (!a) throw Error(B(189))
                }
            }
            if (n.alternate !== r) throw Error(B(190))
        }
        if (n.tag !== 3) throw Error(B(188));
        return n.stateNode.current === n ? e : t
    }

    function pm(e) {
        return e = ox(e), e !== null ? hm(e) : null
    }

    function hm(e) {
        if (e.tag === 5 || e.tag === 6) return e;
        for (e = e.child; e !== null;) {
            var t = hm(e);
            if (t !== null) return t;
            e = e.sibling
        }
        return null
    }
    var mm = Pt.unstable_scheduleCallback,
        qp = Pt.unstable_cancelCallback,
        sx = Pt.unstable_shouldYield,
        ax = Pt.unstable_requestPaint,
        De = Pt.unstable_now,
        lx = Pt.unstable_getCurrentPriorityLevel,
        dd = Pt.unstable_ImmediatePriority,
        gm = Pt.unstable_UserBlockingPriority,
        xa = Pt.unstable_NormalPriority,
        ux = Pt.unstable_LowPriority,
        ym = Pt.unstable_IdlePriority,
        Ja = null,
        xn = null;

    function cx(e) {
        if (xn && typeof xn.onCommitFiberRoot == "function") try {
            xn.onCommitFiberRoot(Ja, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
    }
    var tn = Math.clz32 ? Math.clz32 : px,
        dx = Math.log,
        fx = Math.LN2;

    function px(e) {
        return e >>>= 0, e === 0 ? 32 : 31 - (dx(e) / fx | 0) | 0
    }
    var Ps = 64,
        Os = 4194304;

    function yo(e) {
        switch (e & -e) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 4:
                return 4;
            case 8:
                return 8;
            case 16:
                return 16;
            case 32:
                return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return e & 4194240;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                return e & 130023424;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 1073741824;
            default:
                return e
        }
    }

    function wa(e, t) {
        var n = e.pendingLanes;
        if (n === 0) return 0;
        var r = 0,
            i = e.suspendedLanes,
            o = e.pingedLanes,
            a = n & 268435455;
        if (a !== 0) {
            var u = a & ~i;
            u !== 0 ? r = yo(u) : (o &= a, o !== 0 && (r = yo(o)))
        } else a = n & ~i, a !== 0 ? r = yo(a) : o !== 0 && (r = yo(o));
        if (r === 0) return 0;
        if (t !== 0 && t !== r && !(t & i) && (i = r & -r, o = t & -t, i >= o || i === 16 && (o & 4194240) !== 0)) return t;
        if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
            for (e = e.entanglements, t &= r; 0 < t;) n = 31 - tn(t), i = 1 << n, r |= e[n], t &= ~i;
        return r
    }

    function hx(e, t) {
        switch (e) {
            case 1:
            case 2:
            case 4:
                return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return t + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                return -1;
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return -1
        }
    }

    function mx(e, t) {
        for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o;) {
            var a = 31 - tn(o),
                u = 1 << a,
                c = i[a];
            c === -1 ? (!(u & n) || u & r) && (i[a] = hx(u, t)) : c <= t && (e.expiredLanes |= u), o &= ~u
        }
    }

    function ic(e) {
        return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    }

    function vm() {
        var e = Ps;
        return Ps <<= 1, !(Ps & 4194240) && (Ps = 64), e
    }

    function du(e) {
        for (var t = [], n = 0; 31 > n; n++) t.push(e);
        return t
    }

    function ts(e, t, n) {
        e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - tn(t), e[t] = n
    }

    function gx(e, t) {
        var n = e.pendingLanes & ~t;
        e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
        var r = e.eventTimes;
        for (e = e.expirationTimes; 0 < n;) {
            var i = 31 - tn(n),
                o = 1 << i;
            t[i] = 0, r[i] = -1, e[i] = -1, n &= ~o
        }
    }

    function fd(e, t) {
        var n = e.entangledLanes |= t;
        for (e = e.entanglements; n;) {
            var r = 31 - tn(n),
                i = 1 << r;
            i & t | e[r] & t && (e[r] |= t), n &= ~i
        }
    }
    var ye = 0;

    function xm(e) {
        return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
    }
    var wm, pd, _m, km, Cm, oc = !1,
        Rs = [],
        qn = null,
        Gn = null,
        Xn = null,
        Ro = new Map,
        Io = new Map,
        Vn = [],
        yx = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

    function Gp(e, t) {
        switch (e) {
            case "focusin":
            case "focusout":
                qn = null;
                break;
            case "dragenter":
            case "dragleave":
                Gn = null;
                break;
            case "mouseover":
            case "mouseout":
                Xn = null;
                break;
            case "pointerover":
            case "pointerout":
                Ro.delete(t.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                Io.delete(t.pointerId)
        }
    }

    function ao(e, t, n, r, i, o) {
        return e === null || e.nativeEvent !== o ? (e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: r,
            nativeEvent: o,
            targetContainers: [i]
        }, t !== null && (t = rs(t), t !== null && pd(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e)
    }

    function vx(e, t, n, r, i) {
        switch (t) {
            case "focusin":
                return qn = ao(qn, e, t, n, r, i), !0;
            case "dragenter":
                return Gn = ao(Gn, e, t, n, r, i), !0;
            case "mouseover":
                return Xn = ao(Xn, e, t, n, r, i), !0;
            case "pointerover":
                var o = i.pointerId;
                return Ro.set(o, ao(Ro.get(o) || null, e, t, n, r, i)), !0;
            case "gotpointercapture":
                return o = i.pointerId, Io.set(o, ao(Io.get(o) || null, e, t, n, r, i)), !0
        }
        return !1
    }

    function Sm(e) {
        var t = Er(e.target);
        if (t !== null) {
            var n = Ur(t);
            if (n !== null) {
                if (t = n.tag, t === 13) {
                    if (t = fm(n), t !== null) {
                        e.blockedOn = t, Cm(e.priority, function() {
                            _m(n)
                        });
                        return
                    }
                } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                    return
                }
            }
        }
        e.blockedOn = null
    }

    function qs(e) {
        if (e.blockedOn !== null) return !1;
        for (var t = e.targetContainers; 0 < t.length;) {
            var n = sc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (n === null) {
                n = e.nativeEvent;
                var r = new n.constructor(n.type, n);
                ec = r, n.target.dispatchEvent(r), ec = null
            } else return t = rs(n), t !== null && pd(t), e.blockedOn = n, !1;
            t.shift()
        }
        return !0
    }

    function Xp(e, t, n) {
        qs(e) && n.delete(t)
    }

    function xx() {
        oc = !1, qn !== null && qs(qn) && (qn = null), Gn !== null && qs(Gn) && (Gn = null), Xn !== null && qs(Xn) && (Xn = null), Ro.forEach(Xp), Io.forEach(Xp)
    }

    function lo(e, t) {
        e.blockedOn === t && (e.blockedOn = null, oc || (oc = !0, Pt.unstable_scheduleCallback(Pt.unstable_NormalPriority, xx)))
    }

    function Do(e) {
        function t(i) {
            return lo(i, e)
        }
        if (0 < Rs.length) {
            lo(Rs[0], e);
            for (var n = 1; n < Rs.length; n++) {
                var r = Rs[n];
                r.blockedOn === e && (r.blockedOn = null)
            }
        }
        for (qn !== null && lo(qn, e), Gn !== null && lo(Gn, e), Xn !== null && lo(Xn, e), Ro.forEach(t), Io.forEach(t), n = 0; n < Vn.length; n++) r = Vn[n], r.blockedOn === e && (r.blockedOn = null);
        for (; 0 < Vn.length && (n = Vn[0], n.blockedOn === null);) Sm(n), n.blockedOn === null && Vn.shift()
    }
    var Ei = In.ReactCurrentBatchConfig,
        _a = !0;

    function wx(e, t, n, r) {
        var i = ye,
            o = Ei.transition;
        Ei.transition = null;
        try {
            ye = 1, hd(e, t, n, r)
        } finally {
            ye = i, Ei.transition = o
        }
    }

    function _x(e, t, n, r) {
        var i = ye,
            o = Ei.transition;
        Ei.transition = null;
        try {
            ye = 4, hd(e, t, n, r)
        } finally {
            ye = i, Ei.transition = o
        }
    }

    function hd(e, t, n, r) {
        if (_a) {
            var i = sc(e, t, n, r);
            if (i === null) _u(e, t, r, ka, n), Gp(e, r);
            else if (vx(i, e, t, n, r)) r.stopPropagation();
            else if (Gp(e, r), t & 4 && -1 < yx.indexOf(e)) {
                for (; i !== null;) {
                    var o = rs(i);
                    if (o !== null && wm(o), o = sc(e, t, n, r), o === null && _u(e, t, r, ka, n), o === i) break;
                    i = o
                }
                i !== null && r.stopPropagation()
            } else _u(e, t, r, null, n)
        }
    }
    var ka = null;

    function sc(e, t, n, r) {
        if (ka = null, e = cd(r), e = Er(e), e !== null)
            if (t = Ur(e), t === null) e = null;
            else if (n = t.tag, n === 13) {
            if (e = fm(t), e !== null) return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else t !== e && (e = null);
        return ka = e, null
    }

    function Em(e) {
        switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
                return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
                return 4;
            case "message":
                switch (lx()) {
                    case dd:
                        return 1;
                    case gm:
                        return 4;
                    case xa:
                    case ux:
                        return 16;
                    case ym:
                        return 536870912;
                    default:
                        return 16
                }
            default:
                return 16
        }
    }
    var Qn = null,
        md = null,
        Gs = null;

    function bm() {
        if (Gs) return Gs;
        var e, t = md,
            n = t.length,
            r, i = "value" in Qn ? Qn.value : Qn.textContent,
            o = i.length;
        for (e = 0; e < n && t[e] === i[e]; e++);
        var a = n - e;
        for (r = 1; r <= a && t[n - r] === i[o - r]; r++);
        return Gs = i.slice(e, 1 < r ? 1 - r : void 0)
    }

    function Xs(e) {
        var t = e.keyCode;
        return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
    }

    function Is() {
        return !0
    }

    function e0() {
        return !1
    }

    function Rt(e) {
        function t(n, r, i, o, a) {
            this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = o, this.target = a, this.currentTarget = null;
            for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
            return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Is : e0, this.isPropagationStopped = e0, this
        }
        return Pe(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Is)
            },
            stopPropagation: function() {
                var n = this.nativeEvent;
                n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Is)
            },
            persist: function() {},
            isPersistent: Is
        }), t
    }
    var zi = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function(e) {
                return e.timeStamp || Date.now()
            },
            defaultPrevented: 0,
            isTrusted: 0
        },
        gd = Rt(zi),
        ns = Pe({}, zi, {
            view: 0,
            detail: 0
        }),
        kx = Rt(ns),
        fu, pu, uo, qa = Pe({}, ns, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: yd,
            button: 0,
            buttons: 0,
            relatedTarget: function(e) {
                return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
            },
            movementX: function(e) {
                return "movementX" in e ? e.movementX : (e !== uo && (uo && e.type === "mousemove" ? (fu = e.screenX - uo.screenX, pu = e.screenY - uo.screenY) : pu = fu = 0, uo = e), fu)
            },
            movementY: function(e) {
                return "movementY" in e ? e.movementY : pu
            }
        }),
        t0 = Rt(qa),
        Cx = Pe({}, qa, {
            dataTransfer: 0
        }),
        Sx = Rt(Cx),
        Ex = Pe({}, ns, {
            relatedTarget: 0
        }),
        hu = Rt(Ex),
        bx = Pe({}, zi, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        Nx = Rt(bx),
        jx = Pe({}, zi, {
            clipboardData: function(e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData
            }
        }),
        Tx = Rt(jx),
        Lx = Pe({}, zi, {
            data: 0
        }),
        n0 = Rt(Lx),
        Ax = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        },
        Px = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        },
        Ox = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };

    function Rx(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = Ox[e]) ? !!t[e] : !1
    }

    function yd() {
        return Rx
    }
    var Ix = Pe({}, ns, {
            key: function(e) {
                if (e.key) {
                    var t = Ax[e.key] || e.key;
                    if (t !== "Unidentified") return t
                }
                return e.type === "keypress" ? (e = Xs(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Px[e.keyCode] || "Unidentified" : ""
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: yd,
            charCode: function(e) {
                return e.type === "keypress" ? Xs(e) : 0
            },
            keyCode: function(e) {
                return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
            },
            which: function(e) {
                return e.type === "keypress" ? Xs(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
            }
        }),
        Dx = Rt(Ix),
        Bx = Pe({}, qa, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0
        }),
        r0 = Rt(Bx),
        Mx = Pe({}, ns, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: yd
        }),
        Fx = Rt(Mx),
        $x = Pe({}, zi, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        zx = Rt($x),
        Hx = Pe({}, qa, {
            deltaX: function(e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
            },
            deltaY: function(e) {
                return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
            },
            deltaZ: 0,
            deltaMode: 0
        }),
        Wx = Rt(Hx),
        Ux = [9, 13, 27, 32],
        vd = An && "CompositionEvent" in window,
        ko = null;
    An && "documentMode" in document && (ko = document.documentMode);
    var Vx = An && "TextEvent" in window && !ko,
        Nm = An && (!vd || ko && 8 < ko && 11 >= ko),
        i0 = " ",
        o0 = !1;

    function jm(e, t) {
        switch (e) {
            case "keyup":
                return Ux.indexOf(t.keyCode) !== -1;
            case "keydown":
                return t.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1
        }
    }

    function Tm(e) {
        return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
    }
    var di = !1;

    function Kx(e, t) {
        switch (e) {
            case "compositionend":
                return Tm(t);
            case "keypress":
                return t.which !== 32 ? null : (o0 = !0, i0);
            case "textInput":
                return e = t.data, e === i0 && o0 ? null : e;
            default:
                return null
        }
    }

    function Qx(e, t) {
        if (di) return e === "compositionend" || !vd && jm(e, t) ? (e = bm(), Gs = md = Qn = null, di = !1, e) : null;
        switch (e) {
            case "paste":
                return null;
            case "keypress":
                if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                    if (t.char && 1 < t.char.length) return t.char;
                    if (t.which) return String.fromCharCode(t.which)
                }
                return null;
            case "compositionend":
                return Nm && t.locale !== "ko" ? null : t.data;
            default:
                return null
        }
    }
    var Zx = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };

    function s0(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!Zx[e.type] : t === "textarea"
    }

    function Lm(e, t, n, r) {
        am(r), t = Ca(t, "onChange"), 0 < t.length && (n = new gd("onChange", "change", null, n, r), e.push({
            event: n,
            listeners: t
        }))
    }
    var Co = null,
        Bo = null;

    function Yx(e) {
        zm(e, 0)
    }

    function Ga(e) {
        var t = hi(e);
        if (em(t)) return e
    }

    function Jx(e, t) {
        if (e === "change") return t
    }
    var Am = !1;
    if (An) {
        var mu;
        if (An) {
            var gu = "oninput" in document;
            if (!gu) {
                var a0 = document.createElement("div");
                a0.setAttribute("oninput", "return;"), gu = typeof a0.oninput == "function"
            }
            mu = gu
        } else mu = !1;
        Am = mu && (!document.documentMode || 9 < document.documentMode)
    }

    function l0() {
        Co && (Co.detachEvent("onpropertychange", Pm), Bo = Co = null)
    }

    function Pm(e) {
        if (e.propertyName === "value" && Ga(Bo)) {
            var t = [];
            Lm(t, Bo, e, cd(e)), dm(Yx, t)
        }
    }

    function qx(e, t, n) {
        e === "focusin" ? (l0(), Co = t, Bo = n, Co.attachEvent("onpropertychange", Pm)) : e === "focusout" && l0()
    }

    function Gx(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ga(Bo)
    }

    function Xx(e, t) {
        if (e === "click") return Ga(t)
    }

    function ew(e, t) {
        if (e === "input" || e === "change") return Ga(t)
    }

    function tw(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }
    var on = typeof Object.is == "function" ? Object.is : tw;

    function Mo(e, t) {
        if (on(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
        var n = Object.keys(e),
            r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (r = 0; r < n.length; r++) {
            var i = n[r];
            if (!Hu.call(t, i) || !on(e[i], t[i])) return !1
        }
        return !0
    }

    function u0(e) {
        for (; e && e.firstChild;) e = e.firstChild;
        return e
    }

    function c0(e, t) {
        var n = u0(e);
        e = 0;
        for (var r; n;) {
            if (n.nodeType === 3) {
                if (r = e + n.textContent.length, e <= t && r >= t) return {
                    node: n,
                    offset: t - e
                };
                e = r
            }
            e: {
                for (; n;) {
                    if (n.nextSibling) {
                        n = n.nextSibling;
                        break e
                    }
                    n = n.parentNode
                }
                n = void 0
            }
            n = u0(n)
        }
    }

    function Om(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Om(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
    }

    function Rm() {
        for (var e = window, t = ga(); t instanceof e.HTMLIFrameElement;) {
            try {
                var n = typeof t.contentWindow.location.href == "string"
            } catch {
                n = !1
            }
            if (n) e = t.contentWindow;
            else break;
            t = ga(e.document)
        }
        return t
    }

    function xd(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
    }

    function nw(e) {
        var t = Rm(),
            n = e.focusedElem,
            r = e.selectionRange;
        if (t !== n && n && n.ownerDocument && Om(n.ownerDocument.documentElement, n)) {
            if (r !== null && xd(n)) {
                if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
                else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                    e = e.getSelection();
                    var i = n.textContent.length,
                        o = Math.min(r.start, i);
                    r = r.end === void 0 ? o : Math.min(r.end, i), !e.extend && o > r && (i = r, r = o, o = i), i = c0(n, o);
                    var a = c0(n, r);
                    i && a && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== a.node || e.focusOffset !== a.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset), e.addRange(t)))
                }
            }
            for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
            for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
        }
    }
    var rw = An && "documentMode" in document && 11 >= document.documentMode,
        fi = null,
        ac = null,
        So = null,
        lc = !1;

    function d0(e, t, n) {
        var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
        lc || fi == null || fi !== ga(r) || (r = fi, "selectionStart" in r && xd(r) ? r = {
            start: r.selectionStart,
            end: r.selectionEnd
        } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset
        }), So && Mo(So, r) || (So = r, r = Ca(ac, "onSelect"), 0 < r.length && (t = new gd("onSelect", "select", null, t, n), e.push({
            event: t,
            listeners: r
        }), t.target = fi)))
    }

    function Ds(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
    }
    var pi = {
            animationend: Ds("Animation", "AnimationEnd"),
            animationiteration: Ds("Animation", "AnimationIteration"),
            animationstart: Ds("Animation", "AnimationStart"),
            transitionend: Ds("Transition", "TransitionEnd")
        },
        yu = {},
        Im = {};
    An && (Im = document.createElement("div").style, "AnimationEvent" in window || (delete pi.animationend.animation, delete pi.animationiteration.animation, delete pi.animationstart.animation), "TransitionEvent" in window || delete pi.transitionend.transition);

    function Xa(e) {
        if (yu[e]) return yu[e];
        if (!pi[e]) return e;
        var t = pi[e],
            n;
        for (n in t)
            if (t.hasOwnProperty(n) && n in Im) return yu[e] = t[n];
        return e
    }
    var Dm = Xa("animationend"),
        Bm = Xa("animationiteration"),
        Mm = Xa("animationstart"),
        Fm = Xa("transitionend"),
        $m = new Map,
        f0 = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

    function lr(e, t) {
        $m.set(e, t), Wr(t, [e])
    }
    for (var vu = 0; vu < f0.length; vu++) {
        var xu = f0[vu],
            iw = xu.toLowerCase(),
            ow = xu[0].toUpperCase() + xu.slice(1);
        lr(iw, "on" + ow)
    }
    lr(Dm, "onAnimationEnd");
    lr(Bm, "onAnimationIteration");
    lr(Mm, "onAnimationStart");
    lr("dblclick", "onDoubleClick");
    lr("focusin", "onFocus");
    lr("focusout", "onBlur");
    lr(Fm, "onTransitionEnd");
    ji("onMouseEnter", ["mouseout", "mouseover"]);
    ji("onMouseLeave", ["mouseout", "mouseover"]);
    ji("onPointerEnter", ["pointerout", "pointerover"]);
    ji("onPointerLeave", ["pointerout", "pointerover"]);
    Wr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
    Wr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
    Wr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
    Wr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
    Wr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
    Wr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var vo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        sw = new Set("cancel close invalid load scroll toggle".split(" ").concat(vo));

    function p0(e, t, n) {
        var r = e.type || "unknown-event";
        e.currentTarget = n, ix(r, t, void 0, e), e.currentTarget = null
    }

    function zm(e, t) {
        t = (t & 4) !== 0;
        for (var n = 0; n < e.length; n++) {
            var r = e[n],
                i = r.event;
            r = r.listeners;
            e: {
                var o = void 0;
                if (t)
                    for (var a = r.length - 1; 0 <= a; a--) {
                        var u = r[a],
                            c = u.instance,
                            p = u.currentTarget;
                        if (u = u.listener, c !== o && i.isPropagationStopped()) break e;
                        p0(i, u, p), o = c
                    } else
                        for (a = 0; a < r.length; a++) {
                            if (u = r[a], c = u.instance, p = u.currentTarget, u = u.listener, c !== o && i.isPropagationStopped()) break e;
                            p0(i, u, p), o = c
                        }
            }
        }
        if (va) throw e = rc, va = !1, rc = null, e
    }

    function Ee(e, t) {
        var n = t[pc];
        n === void 0 && (n = t[pc] = new Set);
        var r = e + "__bubble";
        n.has(r) || (Hm(t, e, 2, !1), n.add(r))
    }

    function wu(e, t, n) {
        var r = 0;
        t && (r |= 4), Hm(n, e, r, t)
    }
    var Bs = "_reactListening" + Math.random().toString(36).slice(2);

    function Fo(e) {
        if (!e[Bs]) {
            e[Bs] = !0, Yh.forEach(function(n) {
                n !== "selectionchange" && (sw.has(n) || wu(n, !1, e), wu(n, !0, e))
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[Bs] || (t[Bs] = !0, wu("selectionchange", !1, t))
        }
    }

    function Hm(e, t, n, r) {
        switch (Em(t)) {
            case 1:
                var i = wx;
                break;
            case 4:
                i = _x;
                break;
            default:
                i = hd
        }
        n = i.bind(null, t, n, e), i = void 0, !nc || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, {
            capture: !0,
            passive: i
        }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
            passive: i
        }) : e.addEventListener(t, n, !1)
    }

    function _u(e, t, n, r, i) {
        var o = r;
        if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
            if (r === null) return;
            var a = r.tag;
            if (a === 3 || a === 4) {
                var u = r.stateNode.containerInfo;
                if (u === i || u.nodeType === 8 && u.parentNode === i) break;
                if (a === 4)
                    for (a = r.return; a !== null;) {
                        var c = a.tag;
                        if ((c === 3 || c === 4) && (c = a.stateNode.containerInfo, c === i || c.nodeType === 8 && c.parentNode === i)) return;
                        a = a.return
                    }
                for (; u !== null;) {
                    if (a = Er(u), a === null) return;
                    if (c = a.tag, c === 5 || c === 6) {
                        r = o = a;
                        continue e
                    }
                    u = u.parentNode
                }
            }
            r = r.return
        }
        dm(function() {
            var p = o,
                m = cd(n),
                g = [];
            e: {
                var w = $m.get(e);
                if (w !== void 0) {
                    var N = gd,
                        _ = e;
                    switch (e) {
                        case "keypress":
                            if (Xs(n) === 0) break e;
                        case "keydown":
                        case "keyup":
                            N = Dx;
                            break;
                        case "focusin":
                            _ = "focus", N = hu;
                            break;
                        case "focusout":
                            _ = "blur", N = hu;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            N = hu;
                            break;
                        case "click":
                            if (n.button === 2) break e;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            N = t0;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            N = Sx;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            N = Fx;
                            break;
                        case Dm:
                        case Bm:
                        case Mm:
                            N = Nx;
                            break;
                        case Fm:
                            N = zx;
                            break;
                        case "scroll":
                            N = kx;
                            break;
                        case "wheel":
                            N = Wx;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            N = Tx;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            N = r0
                    }
                    var k = (t & 4) !== 0,
                        S = !k && e === "scroll",
                        x = k ? w !== null ? w + "Capture" : null : w;
                    k = [];
                    for (var y = p, v; y !== null;) {
                        v = y;
                        var j = v.stateNode;
                        if (v.tag === 5 && j !== null && (v = j, x !== null && (j = Oo(y, x), j != null && k.push($o(y, j, v)))), S) break;
                        y = y.return
                    }
                    0 < k.length && (w = new N(w, _, null, n, m), g.push({
                        event: w,
                        listeners: k
                    }))
                }
            }
            if (!(t & 7)) {
                e: {
                    if (w = e === "mouseover" || e === "pointerover", N = e === "mouseout" || e === "pointerout", w && n !== ec && (_ = n.relatedTarget || n.fromElement) && (Er(_) || _[Pn])) break e;
                    if ((N || w) && (w = m.window === m ? m : (w = m.ownerDocument) ? w.defaultView || w.parentWindow : window, N ? (_ = n.relatedTarget || n.toElement, N = p, _ = _ ? Er(_) : null, _ !== null && (S = Ur(_), _ !== S || _.tag !== 5 && _.tag !== 6) && (_ = null)) : (N = null, _ = p), N !== _)) {
                        if (k = t0, j = "onMouseLeave", x = "onMouseEnter", y = "mouse", (e === "pointerout" || e === "pointerover") && (k = r0, j = "onPointerLeave", x = "onPointerEnter", y = "pointer"), S = N == null ? w : hi(N), v = _ == null ? w : hi(_), w = new k(j, y + "leave", N, n, m), w.target = S, w.relatedTarget = v, j = null, Er(m) === p && (k = new k(x, y + "enter", _, n, m), k.target = v, k.relatedTarget = S, j = k), S = j, N && _) t: {
                            for (k = N, x = _, y = 0, v = k; v; v = ai(v)) y++;
                            for (v = 0, j = x; j; j = ai(j)) v++;
                            for (; 0 < y - v;) k = ai(k),
                            y--;
                            for (; 0 < v - y;) x = ai(x),
                            v--;
                            for (; y--;) {
                                if (k === x || x !== null && k === x.alternate) break t;
                                k = ai(k), x = ai(x)
                            }
                            k = null
                        }
                        else k = null;
                        N !== null && h0(g, w, N, k, !1), _ !== null && S !== null && h0(g, S, _, k, !0)
                    }
                }
                e: {
                    if (w = p ? hi(p) : window, N = w.nodeName && w.nodeName.toLowerCase(), N === "select" || N === "input" && w.type === "file") var T = Jx;
                    else if (s0(w))
                        if (Am) T = ew;
                        else {
                            T = Gx;
                            var R = qx
                        }
                    else(N = w.nodeName) && N.toLowerCase() === "input" && (w.type === "checkbox" || w.type === "radio") && (T = Xx);
                    if (T && (T = T(e, p))) {
                        Lm(g, T, n, m);
                        break e
                    }
                    R && R(e, w, p),
                    e === "focusout" && (R = w._wrapperState) && R.controlled && w.type === "number" && Yu(w, "number", w.value)
                }
                switch (R = p ? hi(p) : window, e) {
                    case "focusin":
                        (s0(R) || R.contentEditable === "true") && (fi = R, ac = p, So = null);
                        break;
                    case "focusout":
                        So = ac = fi = null;
                        break;
                    case "mousedown":
                        lc = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        lc = !1, d0(g, n, m);
                        break;
                    case "selectionchange":
                        if (rw) break;
                    case "keydown":
                    case "keyup":
                        d0(g, n, m)
                }
                var O;
                if (vd) e: {
                    switch (e) {
                        case "compositionstart":
                            var I = "onCompositionStart";
                            break e;
                        case "compositionend":
                            I = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            I = "onCompositionUpdate";
                            break e
                    }
                    I = void 0
                }
                else di ? jm(e, n) && (I = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (I = "onCompositionStart");I && (Nm && n.locale !== "ko" && (di || I !== "onCompositionStart" ? I === "onCompositionEnd" && di && (O = bm()) : (Qn = m, md = "value" in Qn ? Qn.value : Qn.textContent, di = !0)), R = Ca(p, I), 0 < R.length && (I = new n0(I, e, null, n, m), g.push({
                    event: I,
                    listeners: R
                }), O ? I.data = O : (O = Tm(n), O !== null && (I.data = O)))),
                (O = Vx ? Kx(e, n) : Qx(e, n)) && (p = Ca(p, "onBeforeInput"), 0 < p.length && (m = new n0("onBeforeInput", "beforeinput", null, n, m), g.push({
                    event: m,
                    listeners: p
                }), m.data = O))
            }
            zm(g, t)
        })
    }

    function $o(e, t, n) {
        return {
            instance: e,
            listener: t,
            currentTarget: n
        }
    }

    function Ca(e, t) {
        for (var n = t + "Capture", r = []; e !== null;) {
            var i = e,
                o = i.stateNode;
            i.tag === 5 && o !== null && (i = o, o = Oo(e, n), o != null && r.unshift($o(e, o, i)), o = Oo(e, t), o != null && r.push($o(e, o, i))), e = e.return
        }
        return r
    }

    function ai(e) {
        if (e === null) return null;
        do e = e.return; while (e && e.tag !== 5);
        return e || null
    }

    function h0(e, t, n, r, i) {
        for (var o = t._reactName, a = []; n !== null && n !== r;) {
            var u = n,
                c = u.alternate,
                p = u.stateNode;
            if (c !== null && c === r) break;
            u.tag === 5 && p !== null && (u = p, i ? (c = Oo(n, o), c != null && a.unshift($o(n, c, u))) : i || (c = Oo(n, o), c != null && a.push($o(n, c, u)))), n = n.return
        }
        a.length !== 0 && e.push({
            event: t,
            listeners: a
        })
    }
    var aw = /\r\n?/g,
        lw = /\u0000|\uFFFD/g;

    function m0(e) {
        return (typeof e == "string" ? e : "" + e).replace(aw, `
`).replace(lw, "")
    }

    function Ms(e, t, n) {
        if (t = m0(t), m0(e) !== t && n) throw Error(B(425))
    }

    function Sa() {}
    var uc = null,
        cc = null;

    function dc(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var fc = typeof setTimeout == "function" ? setTimeout : void 0,
        uw = typeof clearTimeout == "function" ? clearTimeout : void 0,
        g0 = typeof Promise == "function" ? Promise : void 0,
        cw = typeof queueMicrotask == "function" ? queueMicrotask : typeof g0 < "u" ? function(e) {
            return g0.resolve(null).then(e).catch(dw)
        } : fc;

    function dw(e) {
        setTimeout(function() {
            throw e
        })
    }

    function ku(e, t) {
        var n = t,
            r = 0;
        do {
            var i = n.nextSibling;
            if (e.removeChild(n), i && i.nodeType === 8)
                if (n = i.data, n === "/$") {
                    if (r === 0) {
                        e.removeChild(i), Do(t);
                        return
                    }
                    r--
                } else n !== "$" && n !== "$?" && n !== "$!" || r++;
            n = i
        } while (n);
        Do(t)
    }

    function er(e) {
        for (; e != null; e = e.nextSibling) {
            var t = e.nodeType;
            if (t === 1 || t === 3) break;
            if (t === 8) {
                if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
                if (t === "/$") return null
            }
        }
        return e
    }

    function y0(e) {
        e = e.previousSibling;
        for (var t = 0; e;) {
            if (e.nodeType === 8) {
                var n = e.data;
                if (n === "$" || n === "$!" || n === "$?") {
                    if (t === 0) return e;
                    t--
                } else n === "/$" && t++
            }
            e = e.previousSibling
        }
        return null
    }
    var Hi = Math.random().toString(36).slice(2),
        vn = "__reactFiber$" + Hi,
        zo = "__reactProps$" + Hi,
        Pn = "__reactContainer$" + Hi,
        pc = "__reactEvents$" + Hi,
        fw = "__reactListeners$" + Hi,
        pw = "__reactHandles$" + Hi;

    function Er(e) {
        var t = e[vn];
        if (t) return t;
        for (var n = e.parentNode; n;) {
            if (t = n[Pn] || n[vn]) {
                if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                    for (e = y0(e); e !== null;) {
                        if (n = e[vn]) return n;
                        e = y0(e)
                    }
                return t
            }
            e = n, n = e.parentNode
        }
        return null
    }

    function rs(e) {
        return e = e[vn] || e[Pn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
    }

    function hi(e) {
        if (e.tag === 5 || e.tag === 6) return e.stateNode;
        throw Error(B(33))
    }

    function el(e) {
        return e[zo] || null
    }
    var hc = [],
        mi = -1;

    function ur(e) {
        return {
            current: e
        }
    }

    function Ne(e) {
        0 > mi || (e.current = hc[mi], hc[mi] = null, mi--)
    }

    function Se(e, t) {
        mi++, hc[mi] = e.current, e.current = t
    }
    var ar = {},
        it = ur(ar),
        vt = ur(!1),
        Br = ar;

    function Ti(e, t) {
        var n = e.type.contextTypes;
        if (!n) return ar;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
        var i = {},
            o;
        for (o in n) i[o] = t[o];
        return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i
    }

    function xt(e) {
        return e = e.childContextTypes, e != null
    }

    function Ea() {
        Ne(vt), Ne(it)
    }

    function v0(e, t, n) {
        if (it.current !== ar) throw Error(B(168));
        Se(it, t), Se(vt, n)
    }

    function Wm(e, t, n) {
        var r = e.stateNode;
        if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
        r = r.getChildContext();
        for (var i in r)
            if (!(i in t)) throw Error(B(108, qv(e) || "Unknown", i));
        return Pe({}, n, r)
    }

    function ba(e) {
        return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || ar, Br = it.current, Se(it, e), Se(vt, vt.current), !0
    }

    function x0(e, t, n) {
        var r = e.stateNode;
        if (!r) throw Error(B(169));
        n ? (e = Wm(e, t, Br), r.__reactInternalMemoizedMergedChildContext = e, Ne(vt), Ne(it), Se(it, e)) : Ne(vt), Se(vt, n)
    }
    var Nn = null,
        tl = !1,
        Cu = !1;

    function Um(e) {
        Nn === null ? Nn = [e] : Nn.push(e)
    }

    function hw(e) {
        tl = !0, Um(e)
    }

    function cr() {
        if (!Cu && Nn !== null) {
            Cu = !0;
            var e = 0,
                t = ye;
            try {
                var n = Nn;
                for (ye = 1; e < n.length; e++) {
                    var r = n[e];
                    do r = r(!0); while (r !== null)
                }
                Nn = null, tl = !1
            } catch (i) {
                throw Nn !== null && (Nn = Nn.slice(e + 1)), mm(dd, cr), i
            } finally {
                ye = t, Cu = !1
            }
        }
        return null
    }
    var gi = [],
        yi = 0,
        Na = null,
        ja = 0,
        zt = [],
        Ht = 0,
        Mr = null,
        jn = 1,
        Tn = "";

    function Cr(e, t) {
        gi[yi++] = ja, gi[yi++] = Na, Na = e, ja = t
    }

    function Vm(e, t, n) {
        zt[Ht++] = jn, zt[Ht++] = Tn, zt[Ht++] = Mr, Mr = e;
        var r = jn;
        e = Tn;
        var i = 32 - tn(r) - 1;
        r &= ~(1 << i), n += 1;
        var o = 32 - tn(t) + i;
        if (30 < o) {
            var a = i - i % 5;
            o = (r & (1 << a) - 1).toString(32), r >>= a, i -= a, jn = 1 << 32 - tn(t) + i | n << i | r, Tn = o + e
        } else jn = 1 << o | n << i | r, Tn = e
    }

    function wd(e) {
        e.return !== null && (Cr(e, 1), Vm(e, 1, 0))
    }

    function _d(e) {
        for (; e === Na;) Na = gi[--yi], gi[yi] = null, ja = gi[--yi], gi[yi] = null;
        for (; e === Mr;) Mr = zt[--Ht], zt[Ht] = null, Tn = zt[--Ht], zt[Ht] = null, jn = zt[--Ht], zt[Ht] = null
    }
    var Lt = null,
        jt = null,
        je = !1,
        en = null;

    function Km(e, t) {
        var n = Wt(5, null, null, 0);
        n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
    }

    function w0(e, t) {
        switch (e.tag) {
            case 5:
                var n = e.type;
                return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Lt = e, jt = er(t.firstChild), !0) : !1;
            case 6:
                return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Lt = e, jt = null, !0) : !1;
            case 13:
                return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Mr !== null ? {
                    id: jn,
                    overflow: Tn
                } : null, e.memoizedState = {
                    dehydrated: t,
                    treeContext: n,
                    retryLane: 1073741824
                }, n = Wt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Lt = e, jt = null, !0) : !1;
            default:
                return !1
        }
    }

    function mc(e) {
        return (e.mode & 1) !== 0 && (e.flags & 128) === 0
    }

    function gc(e) {
        if (je) {
            var t = jt;
            if (t) {
                var n = t;
                if (!w0(e, t)) {
                    if (mc(e)) throw Error(B(418));
                    t = er(n.nextSibling);
                    var r = Lt;
                    t && w0(e, t) ? Km(r, n) : (e.flags = e.flags & -4097 | 2, je = !1, Lt = e)
                }
            } else {
                if (mc(e)) throw Error(B(418));
                e.flags = e.flags & -4097 | 2, je = !1, Lt = e
            }
        }
    }

    function _0(e) {
        for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
        Lt = e
    }

    function Fs(e) {
        if (e !== Lt) return !1;
        if (!je) return _0(e), je = !0, !1;
        var t;
        if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !dc(e.type, e.memoizedProps)), t && (t = jt)) {
            if (mc(e)) throw Qm(), Error(B(418));
            for (; t;) Km(e, t), t = er(t.nextSibling)
        }
        if (_0(e), e.tag === 13) {
            if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(B(317));
            e: {
                for (e = e.nextSibling, t = 0; e;) {
                    if (e.nodeType === 8) {
                        var n = e.data;
                        if (n === "/$") {
                            if (t === 0) {
                                jt = er(e.nextSibling);
                                break e
                            }
                            t--
                        } else n !== "$" && n !== "$!" && n !== "$?" || t++
                    }
                    e = e.nextSibling
                }
                jt = null
            }
        } else jt = Lt ? er(e.stateNode.nextSibling) : null;
        return !0
    }

    function Qm() {
        for (var e = jt; e;) e = er(e.nextSibling)
    }

    function Li() {
        jt = Lt = null, je = !1
    }

    function kd(e) {
        en === null ? en = [e] : en.push(e)
    }
    var mw = In.ReactCurrentBatchConfig;

    function co(e, t, n) {
        if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
            if (n._owner) {
                if (n = n._owner, n) {
                    if (n.tag !== 1) throw Error(B(309));
                    var r = n.stateNode
                }
                if (!r) throw Error(B(147, e));
                var i = r,
                    o = "" + e;
                return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(a) {
                    var u = i.refs;
                    a === null ? delete u[o] : u[o] = a
                }, t._stringRef = o, t)
            }
            if (typeof e != "string") throw Error(B(284));
            if (!n._owner) throw Error(B(290, e))
        }
        return e
    }

    function $s(e, t) {
        throw e = Object.prototype.toString.call(t), Error(B(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
    }

    function k0(e) {
        var t = e._init;
        return t(e._payload)
    }

    function Zm(e) {
        function t(x, y) {
            if (e) {
                var v = x.deletions;
                v === null ? (x.deletions = [y], x.flags |= 16) : v.push(y)
            }
        }

        function n(x, y) {
            if (!e) return null;
            for (; y !== null;) t(x, y), y = y.sibling;
            return null
        }

        function r(x, y) {
            for (x = new Map; y !== null;) y.key !== null ? x.set(y.key, y) : x.set(y.index, y), y = y.sibling;
            return x
        }

        function i(x, y) {
            return x = ir(x, y), x.index = 0, x.sibling = null, x
        }

        function o(x, y, v) {
            return x.index = v, e ? (v = x.alternate, v !== null ? (v = v.index, v < y ? (x.flags |= 2, y) : v) : (x.flags |= 2, y)) : (x.flags |= 1048576, y)
        }

        function a(x) {
            return e && x.alternate === null && (x.flags |= 2), x
        }

        function u(x, y, v, j) {
            return y === null || y.tag !== 6 ? (y = Lu(v, x.mode, j), y.return = x, y) : (y = i(y, v), y.return = x, y)
        }

        function c(x, y, v, j) {
            var T = v.type;
            return T === ci ? m(x, y, v.props.children, j, v.key) : y !== null && (y.elementType === T || typeof T == "object" && T !== null && T.$$typeof === Wn && k0(T) === y.type) ? (j = i(y, v.props), j.ref = co(x, y, v), j.return = x, j) : (j = sa(v.type, v.key, v.props, null, x.mode, j), j.ref = co(x, y, v), j.return = x, j)
        }

        function p(x, y, v, j) {
            return y === null || y.tag !== 4 || y.stateNode.containerInfo !== v.containerInfo || y.stateNode.implementation !== v.implementation ? (y = Au(v, x.mode, j), y.return = x, y) : (y = i(y, v.children || []), y.return = x, y)
        }

        function m(x, y, v, j, T) {
            return y === null || y.tag !== 7 ? (y = Ar(v, x.mode, j, T), y.return = x, y) : (y = i(y, v), y.return = x, y)
        }

        function g(x, y, v) {
            if (typeof y == "string" && y !== "" || typeof y == "number") return y = Lu("" + y, x.mode, v), y.return = x, y;
            if (typeof y == "object" && y !== null) {
                switch (y.$$typeof) {
                    case Ts:
                        return v = sa(y.type, y.key, y.props, null, x.mode, v), v.ref = co(x, null, y), v.return = x, v;
                    case ui:
                        return y = Au(y, x.mode, v), y.return = x, y;
                    case Wn:
                        var j = y._init;
                        return g(x, j(y._payload), v)
                }
                if (go(y) || oo(y)) return y = Ar(y, x.mode, v, null), y.return = x, y;
                $s(x, y)
            }
            return null
        }

        function w(x, y, v, j) {
            var T = y !== null ? y.key : null;
            if (typeof v == "string" && v !== "" || typeof v == "number") return T !== null ? null : u(x, y, "" + v, j);
            if (typeof v == "object" && v !== null) {
                switch (v.$$typeof) {
                    case Ts:
                        return v.key === T ? c(x, y, v, j) : null;
                    case ui:
                        return v.key === T ? p(x, y, v, j) : null;
                    case Wn:
                        return T = v._init, w(x, y, T(v._payload), j)
                }
                if (go(v) || oo(v)) return T !== null ? null : m(x, y, v, j, null);
                $s(x, v)
            }
            return null
        }

        function N(x, y, v, j, T) {
            if (typeof j == "string" && j !== "" || typeof j == "number") return x = x.get(v) || null, u(y, x, "" + j, T);
            if (typeof j == "object" && j !== null) {
                switch (j.$$typeof) {
                    case Ts:
                        return x = x.get(j.key === null ? v : j.key) || null, c(y, x, j, T);
                    case ui:
                        return x = x.get(j.key === null ? v : j.key) || null, p(y, x, j, T);
                    case Wn:
                        var R = j._init;
                        return N(x, y, v, R(j._payload), T)
                }
                if (go(j) || oo(j)) return x = x.get(v) || null, m(y, x, j, T, null);
                $s(y, j)
            }
            return null
        }

        function _(x, y, v, j) {
            for (var T = null, R = null, O = y, I = y = 0, V = null; O !== null && I < v.length; I++) {
                O.index > I ? (V = O, O = null) : V = O.sibling;
                var K = w(x, O, v[I], j);
                if (K === null) {
                    O === null && (O = V);
                    break
                }
                e && O && K.alternate === null && t(x, O), y = o(K, y, I), R === null ? T = K : R.sibling = K, R = K, O = V
            }
            if (I === v.length) return n(x, O), je && Cr(x, I), T;
            if (O === null) {
                for (; I < v.length; I++) O = g(x, v[I], j), O !== null && (y = o(O, y, I), R === null ? T = O : R.sibling = O, R = O);
                return je && Cr(x, I), T
            }
            for (O = r(x, O); I < v.length; I++) V = N(O, x, I, v[I], j), V !== null && (e && V.alternate !== null && O.delete(V.key === null ? I : V.key), y = o(V, y, I), R === null ? T = V : R.sibling = V, R = V);
            return e && O.forEach(function(_e) {
                return t(x, _e)
            }), je && Cr(x, I), T
        }

        function k(x, y, v, j) {
            var T = oo(v);
            if (typeof T != "function") throw Error(B(150));
            if (v = T.call(v), v == null) throw Error(B(151));
            for (var R = T = null, O = y, I = y = 0, V = null, K = v.next(); O !== null && !K.done; I++, K = v.next()) {
                O.index > I ? (V = O, O = null) : V = O.sibling;
                var _e = w(x, O, K.value, j);
                if (_e === null) {
                    O === null && (O = V);
                    break
                }
                e && O && _e.alternate === null && t(x, O), y = o(_e, y, I), R === null ? T = _e : R.sibling = _e, R = _e, O = V
            }
            if (K.done) return n(x, O), je && Cr(x, I), T;
            if (O === null) {
                for (; !K.done; I++, K = v.next()) K = g(x, K.value, j), K !== null && (y = o(K, y, I), R === null ? T = K : R.sibling = K, R = K);
                return je && Cr(x, I), T
            }
            for (O = r(x, O); !K.done; I++, K = v.next()) K = N(O, x, I, K.value, j), K !== null && (e && K.alternate !== null && O.delete(K.key === null ? I : K.key), y = o(K, y, I), R === null ? T = K : R.sibling = K, R = K);
            return e && O.forEach(function(He) {
                return t(x, He)
            }), je && Cr(x, I), T
        }

        function S(x, y, v, j) {
            if (typeof v == "object" && v !== null && v.type === ci && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
                switch (v.$$typeof) {
                    case Ts:
                        e: {
                            for (var T = v.key, R = y; R !== null;) {
                                if (R.key === T) {
                                    if (T = v.type, T === ci) {
                                        if (R.tag === 7) {
                                            n(x, R.sibling), y = i(R, v.props.children), y.return = x, x = y;
                                            break e
                                        }
                                    } else if (R.elementType === T || typeof T == "object" && T !== null && T.$$typeof === Wn && k0(T) === R.type) {
                                        n(x, R.sibling), y = i(R, v.props), y.ref = co(x, R, v), y.return = x, x = y;
                                        break e
                                    }
                                    n(x, R);
                                    break
                                } else t(x, R);
                                R = R.sibling
                            }
                            v.type === ci ? (y = Ar(v.props.children, x.mode, j, v.key), y.return = x, x = y) : (j = sa(v.type, v.key, v.props, null, x.mode, j), j.ref = co(x, y, v), j.return = x, x = j)
                        }
                        return a(x);
                    case ui:
                        e: {
                            for (R = v.key; y !== null;) {
                                if (y.key === R)
                                    if (y.tag === 4 && y.stateNode.containerInfo === v.containerInfo && y.stateNode.implementation === v.implementation) {
                                        n(x, y.sibling), y = i(y, v.children || []), y.return = x, x = y;
                                        break e
                                    } else {
                                        n(x, y);
                                        break
                                    }
                                else t(x, y);
                                y = y.sibling
                            }
                            y = Au(v, x.mode, j),
                            y.return = x,
                            x = y
                        }
                        return a(x);
                    case Wn:
                        return R = v._init, S(x, y, R(v._payload), j)
                }
                if (go(v)) return _(x, y, v, j);
                if (oo(v)) return k(x, y, v, j);
                $s(x, v)
            }
            return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v, y !== null && y.tag === 6 ? (n(x, y.sibling), y = i(y, v), y.return = x, x = y) : (n(x, y), y = Lu(v, x.mode, j), y.return = x, x = y), a(x)) : n(x, y)
        }
        return S
    }
    var Ai = Zm(!0),
        Ym = Zm(!1),
        Ta = ur(null),
        La = null,
        vi = null,
        Cd = null;

    function Sd() {
        Cd = vi = La = null
    }

    function Ed(e) {
        var t = Ta.current;
        Ne(Ta), e._currentValue = t
    }

    function yc(e, t, n) {
        for (; e !== null;) {
            var r = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
            e = e.return
        }
    }

    function bi(e, t) {
        La = e, Cd = vi = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (gt = !0), e.firstContext = null)
    }

    function Vt(e) {
        var t = e._currentValue;
        if (Cd !== e)
            if (e = {
                    context: e,
                    memoizedValue: t,
                    next: null
                }, vi === null) {
                if (La === null) throw Error(B(308));
                vi = e, La.dependencies = {
                    lanes: 0,
                    firstContext: e
                }
            } else vi = vi.next = e;
        return t
    }
    var br = null;

    function bd(e) {
        br === null ? br = [e] : br.push(e)
    }

    function Jm(e, t, n, r) {
        var i = t.interleaved;
        return i === null ? (n.next = n, bd(t)) : (n.next = i.next, i.next = n), t.interleaved = n, On(e, r)
    }

    function On(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
        return n.tag === 3 ? n.stateNode : null
    }
    var Un = !1;

    function Nd(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                interleaved: null,
                lanes: 0
            },
            effects: null
        }
    }

    function qm(e, t) {
        e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects
        })
    }

    function Ln(e, t) {
        return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }

    function tr(e, t, n) {
        var r = e.updateQueue;
        if (r === null) return null;
        if (r = r.shared, de & 2) {
            var i = r.pending;
            return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, On(e, n)
        }
        return i = r.interleaved, i === null ? (t.next = t, bd(r)) : (t.next = i.next, i.next = t), r.interleaved = t, On(e, n)
    }

    function ea(e, t, n) {
        if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
            var r = t.lanes;
            r &= e.pendingLanes, n |= r, t.lanes = n, fd(e, n)
        }
    }

    function C0(e, t) {
        var n = e.updateQueue,
            r = e.alternate;
        if (r !== null && (r = r.updateQueue, n === r)) {
            var i = null,
                o = null;
            if (n = n.firstBaseUpdate, n !== null) {
                do {
                    var a = {
                        eventTime: n.eventTime,
                        lane: n.lane,
                        tag: n.tag,
                        payload: n.payload,
                        callback: n.callback,
                        next: null
                    };
                    o === null ? i = o = a : o = o.next = a, n = n.next
                } while (n !== null);
                o === null ? i = o = t : o = o.next = t
            } else i = o = t;
            n = {
                baseState: r.baseState,
                firstBaseUpdate: i,
                lastBaseUpdate: o,
                shared: r.shared,
                effects: r.effects
            }, e.updateQueue = n;
            return
        }
        e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
    }

    function Aa(e, t, n, r) {
        var i = e.updateQueue;
        Un = !1;
        var o = i.firstBaseUpdate,
            a = i.lastBaseUpdate,
            u = i.shared.pending;
        if (u !== null) {
            i.shared.pending = null;
            var c = u,
                p = c.next;
            c.next = null, a === null ? o = p : a.next = p, a = c;
            var m = e.alternate;
            m !== null && (m = m.updateQueue, u = m.lastBaseUpdate, u !== a && (u === null ? m.firstBaseUpdate = p : u.next = p, m.lastBaseUpdate = c))
        }
        if (o !== null) {
            var g = i.baseState;
            a = 0, m = p = c = null, u = o;
            do {
                var w = u.lane,
                    N = u.eventTime;
                if ((r & w) === w) {
                    m !== null && (m = m.next = {
                        eventTime: N,
                        lane: 0,
                        tag: u.tag,
                        payload: u.payload,
                        callback: u.callback,
                        next: null
                    });
                    e: {
                        var _ = e,
                            k = u;
                        switch (w = t, N = n, k.tag) {
                            case 1:
                                if (_ = k.payload, typeof _ == "function") {
                                    g = _.call(N, g, w);
                                    break e
                                }
                                g = _;
                                break e;
                            case 3:
                                _.flags = _.flags & -65537 | 128;
                            case 0:
                                if (_ = k.payload, w = typeof _ == "function" ? _.call(N, g, w) : _, w == null) break e;
                                g = Pe({}, g, w);
                                break e;
                            case 2:
                                Un = !0
                        }
                    }
                    u.callback !== null && u.lane !== 0 && (e.flags |= 64, w = i.effects, w === null ? i.effects = [u] : w.push(u))
                } else N = {
                    eventTime: N,
                    lane: w,
                    tag: u.tag,
                    payload: u.payload,
                    callback: u.callback,
                    next: null
                }, m === null ? (p = m = N, c = g) : m = m.next = N, a |= w;
                if (u = u.next, u === null) {
                    if (u = i.shared.pending, u === null) break;
                    w = u, u = w.next, w.next = null, i.lastBaseUpdate = w, i.shared.pending = null
                }
            } while (!0);
            if (m === null && (c = g), i.baseState = c, i.firstBaseUpdate = p, i.lastBaseUpdate = m, t = i.shared.interleaved, t !== null) {
                i = t;
                do a |= i.lane, i = i.next; while (i !== t)
            } else o === null && (i.shared.lanes = 0);
            $r |= a, e.lanes = a, e.memoizedState = g
        }
    }

    function S0(e, t, n) {
        if (e = t.effects, t.effects = null, e !== null)
            for (t = 0; t < e.length; t++) {
                var r = e[t],
                    i = r.callback;
                if (i !== null) {
                    if (r.callback = null, r = n, typeof i != "function") throw Error(B(191, i));
                    i.call(r)
                }
            }
    }
    var is = {},
        wn = ur(is),
        Ho = ur(is),
        Wo = ur(is);

    function Nr(e) {
        if (e === is) throw Error(B(174));
        return e
    }

    function jd(e, t) {
        switch (Se(Wo, t), Se(Ho, e), Se(wn, is), e = t.nodeType, e) {
            case 9:
            case 11:
                t = (t = t.documentElement) ? t.namespaceURI : qu(null, "");
                break;
            default:
                e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = qu(t, e)
        }
        Ne(wn), Se(wn, t)
    }

    function Pi() {
        Ne(wn), Ne(Ho), Ne(Wo)
    }

    function Gm(e) {
        Nr(Wo.current);
        var t = Nr(wn.current),
            n = qu(t, e.type);
        t !== n && (Se(Ho, e), Se(wn, n))
    }

    function Td(e) {
        Ho.current === e && (Ne(wn), Ne(Ho))
    }
    var Le = ur(0);

    function Pa(e) {
        for (var t = e; t !== null;) {
            if (t.tag === 13) {
                var n = t.memoizedState;
                if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
            } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
                if (t.flags & 128) return t
            } else if (t.child !== null) {
                t.child.return = t, t = t.child;
                continue
            }
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return null;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
        return null
    }
    var Su = [];

    function Ld() {
        for (var e = 0; e < Su.length; e++) Su[e]._workInProgressVersionPrimary = null;
        Su.length = 0
    }
    var ta = In.ReactCurrentDispatcher,
        Eu = In.ReactCurrentBatchConfig,
        Fr = 0,
        Ae = null,
        We = null,
        Ke = null,
        Oa = !1,
        Eo = !1,
        Uo = 0,
        gw = 0;

    function et() {
        throw Error(B(321))
    }

    function Ad(e, t) {
        if (t === null) return !1;
        for (var n = 0; n < t.length && n < e.length; n++)
            if (!on(e[n], t[n])) return !1;
        return !0
    }

    function Pd(e, t, n, r, i, o) {
        if (Fr = o, Ae = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ta.current = e === null || e.memoizedState === null ? ww : _w, e = n(r, i), Eo) {
            o = 0;
            do {
                if (Eo = !1, Uo = 0, 25 <= o) throw Error(B(301));
                o += 1, Ke = We = null, t.updateQueue = null, ta.current = kw, e = n(r, i)
            } while (Eo)
        }
        if (ta.current = Ra, t = We !== null && We.next !== null, Fr = 0, Ke = We = Ae = null, Oa = !1, t) throw Error(B(300));
        return e
    }

    function Od() {
        var e = Uo !== 0;
        return Uo = 0, e
    }

    function gn() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return Ke === null ? Ae.memoizedState = Ke = e : Ke = Ke.next = e, Ke
    }

    function Kt() {
        if (We === null) {
            var e = Ae.alternate;
            e = e !== null ? e.memoizedState : null
        } else e = We.next;
        var t = Ke === null ? Ae.memoizedState : Ke.next;
        if (t !== null) Ke = t, We = e;
        else {
            if (e === null) throw Error(B(310));
            We = e, e = {
                memoizedState: We.memoizedState,
                baseState: We.baseState,
                baseQueue: We.baseQueue,
                queue: We.queue,
                next: null
            }, Ke === null ? Ae.memoizedState = Ke = e : Ke = Ke.next = e
        }
        return Ke
    }

    function Vo(e, t) {
        return typeof t == "function" ? t(e) : t
    }

    function bu(e) {
        var t = Kt(),
            n = t.queue;
        if (n === null) throw Error(B(311));
        n.lastRenderedReducer = e;
        var r = We,
            i = r.baseQueue,
            o = n.pending;
        if (o !== null) {
            if (i !== null) {
                var a = i.next;
                i.next = o.next, o.next = a
            }
            r.baseQueue = i = o, n.pending = null
        }
        if (i !== null) {
            o = i.next, r = r.baseState;
            var u = a = null,
                c = null,
                p = o;
            do {
                var m = p.lane;
                if ((Fr & m) === m) c !== null && (c = c.next = {
                    lane: 0,
                    action: p.action,
                    hasEagerState: p.hasEagerState,
                    eagerState: p.eagerState,
                    next: null
                }), r = p.hasEagerState ? p.eagerState : e(r, p.action);
                else {
                    var g = {
                        lane: m,
                        action: p.action,
                        hasEagerState: p.hasEagerState,
                        eagerState: p.eagerState,
                        next: null
                    };
                    c === null ? (u = c = g, a = r) : c = c.next = g, Ae.lanes |= m, $r |= m
                }
                p = p.next
            } while (p !== null && p !== o);
            c === null ? a = r : c.next = u, on(r, t.memoizedState) || (gt = !0), t.memoizedState = r, t.baseState = a, t.baseQueue = c, n.lastRenderedState = r
        }
        if (e = n.interleaved, e !== null) {
            i = e;
            do o = i.lane, Ae.lanes |= o, $r |= o, i = i.next; while (i !== e)
        } else i === null && (n.lanes = 0);
        return [t.memoizedState, n.dispatch]
    }

    function Nu(e) {
        var t = Kt(),
            n = t.queue;
        if (n === null) throw Error(B(311));
        n.lastRenderedReducer = e;
        var r = n.dispatch,
            i = n.pending,
            o = t.memoizedState;
        if (i !== null) {
            n.pending = null;
            var a = i = i.next;
            do o = e(o, a.action), a = a.next; while (a !== i);
            on(o, t.memoizedState) || (gt = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o
        }
        return [o, r]
    }

    function Xm() {}

    function e2(e, t) {
        var n = Ae,
            r = Kt(),
            i = t(),
            o = !on(r.memoizedState, i);
        if (o && (r.memoizedState = i, gt = !0), r = r.queue, Rd(r2.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || Ke !== null && Ke.memoizedState.tag & 1) {
            if (n.flags |= 2048, Ko(9, n2.bind(null, n, r, i, t), void 0, null), Ze === null) throw Error(B(349));
            Fr & 30 || t2(n, t, i)
        }
        return i
    }

    function t2(e, t, n) {
        e.flags |= 16384, e = {
            getSnapshot: t,
            value: n
        }, t = Ae.updateQueue, t === null ? (t = {
            lastEffect: null,
            stores: null
        }, Ae.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
    }

    function n2(e, t, n, r) {
        t.value = n, t.getSnapshot = r, i2(t) && o2(e)
    }

    function r2(e, t, n) {
        return n(function() {
            i2(t) && o2(e)
        })
    }

    function i2(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var n = t();
            return !on(e, n)
        } catch {
            return !0
        }
    }

    function o2(e) {
        var t = On(e, 1);
        t !== null && nn(t, e, 1, -1)
    }

    function E0(e) {
        var t = gn();
        return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Vo,
            lastRenderedState: e
        }, t.queue = e, e = e.dispatch = xw.bind(null, Ae, e), [t.memoizedState, e]
    }

    function Ko(e, t, n, r) {
        return e = {
            tag: e,
            create: t,
            destroy: n,
            deps: r,
            next: null
        }, t = Ae.updateQueue, t === null ? (t = {
            lastEffect: null,
            stores: null
        }, Ae.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
    }

    function s2() {
        return Kt().memoizedState
    }

    function na(e, t, n, r) {
        var i = gn();
        Ae.flags |= e, i.memoizedState = Ko(1 | t, n, void 0, r === void 0 ? null : r)
    }

    function nl(e, t, n, r) {
        var i = Kt();
        r = r === void 0 ? null : r;
        var o = void 0;
        if (We !== null) {
            var a = We.memoizedState;
            if (o = a.destroy, r !== null && Ad(r, a.deps)) {
                i.memoizedState = Ko(t, n, o, r);
                return
            }
        }
        Ae.flags |= e, i.memoizedState = Ko(1 | t, n, o, r)
    }

    function b0(e, t) {
        return na(8390656, 8, e, t)
    }

    function Rd(e, t) {
        return nl(2048, 8, e, t)
    }

    function a2(e, t) {
        return nl(4, 2, e, t)
    }

    function l2(e, t) {
        return nl(4, 4, e, t)
    }

    function u2(e, t) {
        if (typeof t == "function") return e = e(), t(e),
            function() {
                t(null)
            };
        if (t != null) return e = e(), t.current = e,
            function() {
                t.current = null
            }
    }

    function c2(e, t, n) {
        return n = n != null ? n.concat([e]) : null, nl(4, 4, u2.bind(null, t, e), n)
    }

    function Id() {}

    function d2(e, t) {
        var n = Kt();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && Ad(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
    }

    function f2(e, t) {
        var n = Kt();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && Ad(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
    }

    function p2(e, t, n) {
        return Fr & 21 ? (on(n, t) || (n = vm(), Ae.lanes |= n, $r |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, gt = !0), e.memoizedState = n)
    }

    function yw(e, t) {
        var n = ye;
        ye = n !== 0 && 4 > n ? n : 4, e(!0);
        var r = Eu.transition;
        Eu.transition = {};
        try {
            e(!1), t()
        } finally {
            ye = n, Eu.transition = r
        }
    }

    function h2() {
        return Kt().memoizedState
    }

    function vw(e, t, n) {
        var r = rr(e);
        if (n = {
                lane: r,
                action: n,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, m2(e)) g2(t, n);
        else if (n = Jm(e, t, n, r), n !== null) {
            var i = dt();
            nn(n, e, r, i), y2(n, t, r)
        }
    }

    function xw(e, t, n) {
        var r = rr(e),
            i = {
                lane: r,
                action: n,
                hasEagerState: !1,
                eagerState: null,
                next: null
            };
        if (m2(e)) g2(t, i);
        else {
            var o = e.alternate;
            if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
                var a = t.lastRenderedState,
                    u = o(a, n);
                if (i.hasEagerState = !0, i.eagerState = u, on(u, a)) {
                    var c = t.interleaved;
                    c === null ? (i.next = i, bd(t)) : (i.next = c.next, c.next = i), t.interleaved = i;
                    return
                }
            } catch {} finally {}
            n = Jm(e, t, i, r), n !== null && (i = dt(), nn(n, e, r, i), y2(n, t, r))
        }
    }

    function m2(e) {
        var t = e.alternate;
        return e === Ae || t !== null && t === Ae
    }

    function g2(e, t) {
        Eo = Oa = !0;
        var n = e.pending;
        n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
    }

    function y2(e, t, n) {
        if (n & 4194240) {
            var r = t.lanes;
            r &= e.pendingLanes, n |= r, t.lanes = n, fd(e, n)
        }
    }
    var Ra = {
            readContext: Vt,
            useCallback: et,
            useContext: et,
            useEffect: et,
            useImperativeHandle: et,
            useInsertionEffect: et,
            useLayoutEffect: et,
            useMemo: et,
            useReducer: et,
            useRef: et,
            useState: et,
            useDebugValue: et,
            useDeferredValue: et,
            useTransition: et,
            useMutableSource: et,
            useSyncExternalStore: et,
            useId: et,
            unstable_isNewReconciler: !1
        },
        ww = {
            readContext: Vt,
            useCallback: function(e, t) {
                return gn().memoizedState = [e, t === void 0 ? null : t], e
            },
            useContext: Vt,
            useEffect: b0,
            useImperativeHandle: function(e, t, n) {
                return n = n != null ? n.concat([e]) : null, na(4194308, 4, u2.bind(null, t, e), n)
            },
            useLayoutEffect: function(e, t) {
                return na(4194308, 4, e, t)
            },
            useInsertionEffect: function(e, t) {
                return na(4, 2, e, t)
            },
            useMemo: function(e, t) {
                var n = gn();
                return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
            },
            useReducer: function(e, t, n) {
                var r = gn();
                return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t
                }, r.queue = e, e = e.dispatch = vw.bind(null, Ae, e), [r.memoizedState, e]
            },
            useRef: function(e) {
                var t = gn();
                return e = {
                    current: e
                }, t.memoizedState = e
            },
            useState: E0,
            useDebugValue: Id,
            useDeferredValue: function(e) {
                return gn().memoizedState = e
            },
            useTransition: function() {
                var e = E0(!1),
                    t = e[0];
                return e = yw.bind(null, e[1]), gn().memoizedState = e, [t, e]
            },
            useMutableSource: function() {},
            useSyncExternalStore: function(e, t, n) {
                var r = Ae,
                    i = gn();
                if (je) {
                    if (n === void 0) throw Error(B(407));
                    n = n()
                } else {
                    if (n = t(), Ze === null) throw Error(B(349));
                    Fr & 30 || t2(r, t, n)
                }
                i.memoizedState = n;
                var o = {
                    value: n,
                    getSnapshot: t
                };
                return i.queue = o, b0(r2.bind(null, r, o, e), [e]), r.flags |= 2048, Ko(9, n2.bind(null, r, o, n, t), void 0, null), n
            },
            useId: function() {
                var e = gn(),
                    t = Ze.identifierPrefix;
                if (je) {
                    var n = Tn,
                        r = jn;
                    n = (r & ~(1 << 32 - tn(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Uo++, 0 < n && (t += "H" + n.toString(32)), t += ":"
                } else n = gw++, t = ":" + t + "r" + n.toString(32) + ":";
                return e.memoizedState = t
            },
            unstable_isNewReconciler: !1
        },
        _w = {
            readContext: Vt,
            useCallback: d2,
            useContext: Vt,
            useEffect: Rd,
            useImperativeHandle: c2,
            useInsertionEffect: a2,
            useLayoutEffect: l2,
            useMemo: f2,
            useReducer: bu,
            useRef: s2,
            useState: function() {
                return bu(Vo)
            },
            useDebugValue: Id,
            useDeferredValue: function(e) {
                var t = Kt();
                return p2(t, We.memoizedState, e)
            },
            useTransition: function() {
                var e = bu(Vo)[0],
                    t = Kt().memoizedState;
                return [e, t]
            },
            useMutableSource: Xm,
            useSyncExternalStore: e2,
            useId: h2,
            unstable_isNewReconciler: !1
        },
        kw = {
            readContext: Vt,
            useCallback: d2,
            useContext: Vt,
            useEffect: Rd,
            useImperativeHandle: c2,
            useInsertionEffect: a2,
            useLayoutEffect: l2,
            useMemo: f2,
            useReducer: Nu,
            useRef: s2,
            useState: function() {
                return Nu(Vo)
            },
            useDebugValue: Id,
            useDeferredValue: function(e) {
                var t = Kt();
                return We === null ? t.memoizedState = e : p2(t, We.memoizedState, e)
            },
            useTransition: function() {
                var e = Nu(Vo)[0],
                    t = Kt().memoizedState;
                return [e, t]
            },
            useMutableSource: Xm,
            useSyncExternalStore: e2,
            useId: h2,
            unstable_isNewReconciler: !1
        };

    function Gt(e, t) {
        if (e && e.defaultProps) {
            t = Pe({}, t), e = e.defaultProps;
            for (var n in e) t[n] === void 0 && (t[n] = e[n]);
            return t
        }
        return t
    }

    function vc(e, t, n, r) {
        t = e.memoizedState, n = n(r, t), n = n == null ? t : Pe({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
    }
    var rl = {
        isMounted: function(e) {
            return (e = e._reactInternals) ? Ur(e) === e : !1
        },
        enqueueSetState: function(e, t, n) {
            e = e._reactInternals;
            var r = dt(),
                i = rr(e),
                o = Ln(r, i);
            o.payload = t, n != null && (o.callback = n), t = tr(e, o, i), t !== null && (nn(t, e, i, r), ea(t, e, i))
        },
        enqueueReplaceState: function(e, t, n) {
            e = e._reactInternals;
            var r = dt(),
                i = rr(e),
                o = Ln(r, i);
            o.tag = 1, o.payload = t, n != null && (o.callback = n), t = tr(e, o, i), t !== null && (nn(t, e, i, r), ea(t, e, i))
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var n = dt(),
                r = rr(e),
                i = Ln(n, r);
            i.tag = 2, t != null && (i.callback = t), t = tr(e, i, r), t !== null && (nn(t, e, r, n), ea(t, e, r))
        }
    };

    function N0(e, t, n, r, i, o, a) {
        return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, a) : t.prototype && t.prototype.isPureReactComponent ? !Mo(n, r) || !Mo(i, o) : !0
    }

    function v2(e, t, n) {
        var r = !1,
            i = ar,
            o = t.contextType;
        return typeof o == "object" && o !== null ? o = Vt(o) : (i = xt(t) ? Br : it.current, r = t.contextTypes, o = (r = r != null) ? Ti(e, i) : ar), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = rl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t
    }

    function j0(e, t, n, r) {
        e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && rl.enqueueReplaceState(t, t.state, null)
    }

    function xc(e, t, n, r) {
        var i = e.stateNode;
        i.props = n, i.state = e.memoizedState, i.refs = {}, Nd(e);
        var o = t.contextType;
        typeof o == "object" && o !== null ? i.context = Vt(o) : (o = xt(t) ? Br : it.current, i.context = Ti(e, o)), i.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (vc(e, t, o, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && rl.enqueueReplaceState(i, i.state, null), Aa(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308)
    }

    function Oi(e, t) {
        try {
            var n = "",
                r = t;
            do n += Jv(r), r = r.return; while (r);
            var i = n
        } catch (o) {
            i = `
Error generating stack: ` + o.message + `
` + o.stack
        }
        return {
            value: e,
            source: t,
            stack: i,
            digest: null
        }
    }

    function ju(e, t, n) {
        return {
            value: e,
            source: null,
            stack: n ?? null,
            digest: t ?? null
        }
    }

    function wc(e, t) {
        try {
            console.error(t.value)
        } catch (n) {
            setTimeout(function() {
                throw n
            })
        }
    }
    var Cw = typeof WeakMap == "function" ? WeakMap : Map;

    function x2(e, t, n) {
        n = Ln(-1, n), n.tag = 3, n.payload = {
            element: null
        };
        var r = t.value;
        return n.callback = function() {
            Da || (Da = !0, Lc = r), wc(e, t)
        }, n
    }

    function w2(e, t, n) {
        n = Ln(-1, n), n.tag = 3;
        var r = e.type.getDerivedStateFromError;
        if (typeof r == "function") {
            var i = t.value;
            n.payload = function() {
                return r(i)
            }, n.callback = function() {
                wc(e, t)
            }
        }
        var o = e.stateNode;
        return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
            wc(e, t), typeof r != "function" && (nr === null ? nr = new Set([this]) : nr.add(this));
            var a = t.stack;
            this.componentDidCatch(t.value, {
                componentStack: a !== null ? a : ""
            })
        }), n
    }

    function T0(e, t, n) {
        var r = e.pingCache;
        if (r === null) {
            r = e.pingCache = new Cw;
            var i = new Set;
            r.set(t, i)
        } else i = r.get(t), i === void 0 && (i = new Set, r.set(t, i));
        i.has(n) || (i.add(n), e = Bw.bind(null, e, t, n), t.then(e, e))
    }

    function L0(e) {
        do {
            var t;
            if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
            e = e.return
        } while (e !== null);
        return null
    }

    function A0(e, t, n, r, i) {
        return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ln(-1, 1), t.tag = 2, tr(n, t, 1))), n.lanes |= 1), e)
    }
    var Sw = In.ReactCurrentOwner,
        gt = !1;

    function ut(e, t, n, r) {
        t.child = e === null ? Ym(t, null, n, r) : Ai(t, e.child, n, r)
    }

    function P0(e, t, n, r, i) {
        n = n.render;
        var o = t.ref;
        return bi(t, i), r = Pd(e, t, n, r, o, i), n = Od(), e !== null && !gt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Rn(e, t, i)) : (je && n && wd(t), t.flags |= 1, ut(e, t, r, i), t.child)
    }

    function O0(e, t, n, r, i) {
        if (e === null) {
            var o = n.type;
            return typeof o == "function" && !Wd(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, _2(e, t, o, r, i)) : (e = sa(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e)
        }
        if (o = e.child, !(e.lanes & i)) {
            var a = o.memoizedProps;
            if (n = n.compare, n = n !== null ? n : Mo, n(a, r) && e.ref === t.ref) return Rn(e, t, i)
        }
        return t.flags |= 1, e = ir(o, r), e.ref = t.ref, e.return = t, t.child = e
    }

    function _2(e, t, n, r, i) {
        if (e !== null) {
            var o = e.memoizedProps;
            if (Mo(o, r) && e.ref === t.ref)
                if (gt = !1, t.pendingProps = r = o, (e.lanes & i) !== 0) e.flags & 131072 && (gt = !0);
                else return t.lanes = e.lanes, Rn(e, t, i)
        }
        return _c(e, t, n, r, i)
    }

    function k2(e, t, n) {
        var r = t.pendingProps,
            i = r.children,
            o = e !== null ? e.memoizedState : null;
        if (r.mode === "hidden")
            if (!(t.mode & 1)) t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, Se(wi, Nt), Nt |= n;
            else {
                if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                }, t.updateQueue = null, Se(wi, Nt), Nt |= e, null;
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                }, r = o !== null ? o.baseLanes : n, Se(wi, Nt), Nt |= r
            }
        else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, Se(wi, Nt), Nt |= r;
        return ut(e, t, i, n), t.child
    }

    function C2(e, t) {
        var n = t.ref;
        (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
    }

    function _c(e, t, n, r, i) {
        var o = xt(n) ? Br : it.current;
        return o = Ti(t, o), bi(t, i), n = Pd(e, t, n, r, o, i), r = Od(), e !== null && !gt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Rn(e, t, i)) : (je && r && wd(t), t.flags |= 1, ut(e, t, n, i), t.child)
    }

    function R0(e, t, n, r, i) {
        if (xt(n)) {
            var o = !0;
            ba(t)
        } else o = !1;
        if (bi(t, i), t.stateNode === null) ra(e, t), v2(t, n, r), xc(t, n, r, i), r = !0;
        else if (e === null) {
            var a = t.stateNode,
                u = t.memoizedProps;
            a.props = u;
            var c = a.context,
                p = n.contextType;
            typeof p == "object" && p !== null ? p = Vt(p) : (p = xt(n) ? Br : it.current, p = Ti(t, p));
            var m = n.getDerivedStateFromProps,
                g = typeof m == "function" || typeof a.getSnapshotBeforeUpdate == "function";
            g || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (u !== r || c !== p) && j0(t, a, r, p), Un = !1;
            var w = t.memoizedState;
            a.state = w, Aa(t, r, a, i), c = t.memoizedState, u !== r || w !== c || vt.current || Un ? (typeof m == "function" && (vc(t, n, m, r), c = t.memoizedState), (u = Un || N0(t, n, u, r, w, c, p)) ? (g || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = c), a.props = r, a.state = c, a.context = p, r = u) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
        } else {
            a = t.stateNode, qm(e, t), u = t.memoizedProps, p = t.type === t.elementType ? u : Gt(t.type, u), a.props = p, g = t.pendingProps, w = a.context, c = n.contextType, typeof c == "object" && c !== null ? c = Vt(c) : (c = xt(n) ? Br : it.current, c = Ti(t, c));
            var N = n.getDerivedStateFromProps;
            (m = typeof N == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (u !== g || w !== c) && j0(t, a, r, c), Un = !1, w = t.memoizedState, a.state = w, Aa(t, r, a, i);
            var _ = t.memoizedState;
            u !== g || w !== _ || vt.current || Un ? (typeof N == "function" && (vc(t, n, N, r), _ = t.memoizedState), (p = Un || N0(t, n, p, r, w, _, c) || !1) ? (m || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, _, c), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, _, c)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || u === e.memoizedProps && w === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && w === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = _), a.props = r, a.state = _, a.context = c, r = p) : (typeof a.componentDidUpdate != "function" || u === e.memoizedProps && w === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && w === e.memoizedState || (t.flags |= 1024), r = !1)
        }
        return kc(e, t, n, r, o, i)
    }

    function kc(e, t, n, r, i, o) {
        C2(e, t);
        var a = (t.flags & 128) !== 0;
        if (!r && !a) return i && x0(t, n, !1), Rn(e, t, o);
        r = t.stateNode, Sw.current = t;
        var u = a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
        return t.flags |= 1, e !== null && a ? (t.child = Ai(t, e.child, null, o), t.child = Ai(t, null, u, o)) : ut(e, t, u, o), t.memoizedState = r.state, i && x0(t, n, !0), t.child
    }

    function S2(e) {
        var t = e.stateNode;
        t.pendingContext ? v0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && v0(e, t.context, !1), jd(e, t.containerInfo)
    }

    function I0(e, t, n, r, i) {
        return Li(), kd(i), t.flags |= 256, ut(e, t, n, r), t.child
    }
    var Cc = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
    };

    function Sc(e) {
        return {
            baseLanes: e,
            cachePool: null,
            transitions: null
        }
    }

    function E2(e, t, n) {
        var r = t.pendingProps,
            i = Le.current,
            o = !1,
            a = (t.flags & 128) !== 0,
            u;
        if ((u = a) || (u = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), u ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), Se(Le, i & 1), e === null) return gc(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (a = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, a = {
            mode: "hidden",
            children: a
        }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = a) : o = sl(a, r, 0, null), e = Ar(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Sc(n), t.memoizedState = Cc, e) : Dd(t, a));
        if (i = e.memoizedState, i !== null && (u = i.dehydrated, u !== null)) return Ew(e, t, a, r, u, i, n);
        if (o) {
            o = r.fallback, a = t.mode, i = e.child, u = i.sibling;
            var c = {
                mode: "hidden",
                children: r.children
            };
            return !(a & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = c, t.deletions = null) : (r = ir(i, c), r.subtreeFlags = i.subtreeFlags & 14680064), u !== null ? o = ir(u, o) : (o = Ar(o, a, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, a = e.child.memoizedState, a = a === null ? Sc(n) : {
                baseLanes: a.baseLanes | n,
                cachePool: null,
                transitions: a.transitions
            }, o.memoizedState = a, o.childLanes = e.childLanes & ~n, t.memoizedState = Cc, r
        }
        return o = e.child, e = o.sibling, r = ir(o, {
            mode: "visible",
            children: r.children
        }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
    }

    function Dd(e, t) {
        return t = sl({
            mode: "visible",
            children: t
        }, e.mode, 0, null), t.return = e, e.child = t
    }

    function zs(e, t, n, r) {
        return r !== null && kd(r), Ai(t, e.child, null, n), e = Dd(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
    }

    function Ew(e, t, n, r, i, o, a) {
        if (n) return t.flags & 256 ? (t.flags &= -257, r = ju(Error(B(422))), zs(e, t, a, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, i = t.mode, r = sl({
            mode: "visible",
            children: r.children
        }, i, 0, null), o = Ar(o, i, a, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && Ai(t, e.child, null, a), t.child.memoizedState = Sc(a), t.memoizedState = Cc, o);
        if (!(t.mode & 1)) return zs(e, t, a, null);
        if (i.data === "$!") {
            if (r = i.nextSibling && i.nextSibling.dataset, r) var u = r.dgst;
            return r = u, o = Error(B(419)), r = ju(o, r, void 0), zs(e, t, a, r)
        }
        if (u = (a & e.childLanes) !== 0, gt || u) {
            if (r = Ze, r !== null) {
                switch (a & -a) {
                    case 4:
                        i = 2;
                        break;
                    case 16:
                        i = 8;
                        break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                        i = 32;
                        break;
                    case 536870912:
                        i = 268435456;
                        break;
                    default:
                        i = 0
                }
                i = i & (r.suspendedLanes | a) ? 0 : i, i !== 0 && i !== o.retryLane && (o.retryLane = i, On(e, i), nn(r, e, i, -1))
            }
            return Hd(), r = ju(Error(B(421))), zs(e, t, a, r)
        }
        return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Mw.bind(null, e), i._reactRetry = t, null) : (e = o.treeContext, jt = er(i.nextSibling), Lt = t, je = !0, en = null, e !== null && (zt[Ht++] = jn, zt[Ht++] = Tn, zt[Ht++] = Mr, jn = e.id, Tn = e.overflow, Mr = t), t = Dd(t, r.children), t.flags |= 4096, t)
    }

    function D0(e, t, n) {
        e.lanes |= t;
        var r = e.alternate;
        r !== null && (r.lanes |= t), yc(e.return, t, n)
    }

    function Tu(e, t, n, r, i) {
        var o = e.memoizedState;
        o === null ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: i
        } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i)
    }

    function b2(e, t, n) {
        var r = t.pendingProps,
            i = r.revealOrder,
            o = r.tail;
        if (ut(e, t, r.children, n), r = Le.current, r & 2) r = r & 1 | 2, t.flags |= 128;
        else {
            if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
                if (e.tag === 13) e.memoizedState !== null && D0(e, n, t);
                else if (e.tag === 19) D0(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e, e = e.child;
                    continue
                }
                if (e === t) break e;
                for (; e.sibling === null;) {
                    if (e.return === null || e.return === t) break e;
                    e = e.return
                }
                e.sibling.return = e.return, e = e.sibling
            }
            r &= 1
        }
        if (Se(Le, r), !(t.mode & 1)) t.memoizedState = null;
        else switch (i) {
            case "forwards":
                for (n = t.child, i = null; n !== null;) e = n.alternate, e !== null && Pa(e) === null && (i = n), n = n.sibling;
                n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Tu(t, !1, i, n, o);
                break;
            case "backwards":
                for (n = null, i = t.child, t.child = null; i !== null;) {
                    if (e = i.alternate, e !== null && Pa(e) === null) {
                        t.child = i;
                        break
                    }
                    e = i.sibling, i.sibling = n, n = i, i = e
                }
                Tu(t, !0, n, null, o);
                break;
            case "together":
                Tu(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null
        }
        return t.child
    }

    function ra(e, t) {
        !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
    }

    function Rn(e, t, n) {
        if (e !== null && (t.dependencies = e.dependencies), $r |= t.lanes, !(n & t.childLanes)) return null;
        if (e !== null && t.child !== e.child) throw Error(B(153));
        if (t.child !== null) {
            for (e = t.child, n = ir(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = ir(e, e.pendingProps), n.return = t;
            n.sibling = null
        }
        return t.child
    }

    function bw(e, t, n) {
        switch (t.tag) {
            case 3:
                S2(t), Li();
                break;
            case 5:
                Gm(t);
                break;
            case 1:
                xt(t.type) && ba(t);
                break;
            case 4:
                jd(t, t.stateNode.containerInfo);
                break;
            case 10:
                var r = t.type._context,
                    i = t.memoizedProps.value;
                Se(Ta, r._currentValue), r._currentValue = i;
                break;
            case 13:
                if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (Se(Le, Le.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? E2(e, t, n) : (Se(Le, Le.current & 1), e = Rn(e, t, n), e !== null ? e.sibling : null);
                Se(Le, Le.current & 1);
                break;
            case 19:
                if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                    if (r) return b2(e, t, n);
                    t.flags |= 128
                }
                if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), Se(Le, Le.current), r) break;
                return null;
            case 22:
            case 23:
                return t.lanes = 0, k2(e, t, n)
        }
        return Rn(e, t, n)
    }
    var N2, Ec, j2, T2;
    N2 = function(e, t) {
        for (var n = t.child; n !== null;) {
            if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
            else if (n.tag !== 4 && n.child !== null) {
                n.child.return = n, n = n.child;
                continue
            }
            if (n === t) break;
            for (; n.sibling === null;) {
                if (n.return === null || n.return === t) return;
                n = n.return
            }
            n.sibling.return = n.return, n = n.sibling
        }
    };
    Ec = function() {};
    j2 = function(e, t, n, r) {
        var i = e.memoizedProps;
        if (i !== r) {
            e = t.stateNode, Nr(wn.current);
            var o = null;
            switch (n) {
                case "input":
                    i = Qu(e, i), r = Qu(e, r), o = [];
                    break;
                case "select":
                    i = Pe({}, i, {
                        value: void 0
                    }), r = Pe({}, r, {
                        value: void 0
                    }), o = [];
                    break;
                case "textarea":
                    i = Ju(e, i), r = Ju(e, r), o = [];
                    break;
                default:
                    typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Sa)
            }
            Gu(n, r);
            var a;
            n = null;
            for (p in i)
                if (!r.hasOwnProperty(p) && i.hasOwnProperty(p) && i[p] != null)
                    if (p === "style") {
                        var u = i[p];
                        for (a in u) u.hasOwnProperty(a) && (n || (n = {}), n[a] = "")
                    } else p !== "dangerouslySetInnerHTML" && p !== "children" && p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (Ao.hasOwnProperty(p) ? o || (o = []) : (o = o || []).push(p, null));
            for (p in r) {
                var c = r[p];
                if (u = i != null ? i[p] : void 0, r.hasOwnProperty(p) && c !== u && (c != null || u != null))
                    if (p === "style")
                        if (u) {
                            for (a in u) !u.hasOwnProperty(a) || c && c.hasOwnProperty(a) || (n || (n = {}), n[a] = "");
                            for (a in c) c.hasOwnProperty(a) && u[a] !== c[a] && (n || (n = {}), n[a] = c[a])
                        } else n || (o || (o = []), o.push(p, n)), n = c;
                else p === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, u = u ? u.__html : void 0, c != null && u !== c && (o = o || []).push(p, c)) : p === "children" ? typeof c != "string" && typeof c != "number" || (o = o || []).push(p, "" + c) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && (Ao.hasOwnProperty(p) ? (c != null && p === "onScroll" && Ee("scroll", e), o || u === c || (o = [])) : (o = o || []).push(p, c))
            }
            n && (o = o || []).push("style", n);
            var p = o;
            (t.updateQueue = p) && (t.flags |= 4)
        }
    };
    T2 = function(e, t, n, r) {
        n !== r && (t.flags |= 4)
    };

    function fo(e, t) {
        if (!je) switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
                n === null ? e.tail = null : n.sibling = null;
                break;
            case "collapsed":
                n = e.tail;
                for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
                r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
    }

    function tt(e) {
        var t = e.alternate !== null && e.alternate.child === e.child,
            n = 0,
            r = 0;
        if (t)
            for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
        else
            for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
        return e.subtreeFlags |= r, e.childLanes = n, t
    }

    function Nw(e, t, n) {
        var r = t.pendingProps;
        switch (_d(t), t.tag) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return tt(t), null;
            case 1:
                return xt(t.type) && Ea(), tt(t), null;
            case 3:
                return r = t.stateNode, Pi(), Ne(vt), Ne(it), Ld(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Fs(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, en !== null && (Oc(en), en = null))), Ec(e, t), tt(t), null;
            case 5:
                Td(t);
                var i = Nr(Wo.current);
                if (n = t.type, e !== null && t.stateNode != null) j2(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
                else {
                    if (!r) {
                        if (t.stateNode === null) throw Error(B(166));
                        return tt(t), null
                    }
                    if (e = Nr(wn.current), Fs(t)) {
                        r = t.stateNode, n = t.type;
                        var o = t.memoizedProps;
                        switch (r[vn] = t, r[zo] = o, e = (t.mode & 1) !== 0, n) {
                            case "dialog":
                                Ee("cancel", r), Ee("close", r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                Ee("load", r);
                                break;
                            case "video":
                            case "audio":
                                for (i = 0; i < vo.length; i++) Ee(vo[i], r);
                                break;
                            case "source":
                                Ee("error", r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                Ee("error", r), Ee("load", r);
                                break;
                            case "details":
                                Ee("toggle", r);
                                break;
                            case "input":
                                Vp(r, o), Ee("invalid", r);
                                break;
                            case "select":
                                r._wrapperState = {
                                    wasMultiple: !!o.multiple
                                }, Ee("invalid", r);
                                break;
                            case "textarea":
                                Qp(r, o), Ee("invalid", r)
                        }
                        Gu(n, o), i = null;
                        for (var a in o)
                            if (o.hasOwnProperty(a)) {
                                var u = o[a];
                                a === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && Ms(r.textContent, u, e), i = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && Ms(r.textContent, u, e), i = ["children", "" + u]) : Ao.hasOwnProperty(a) && u != null && a === "onScroll" && Ee("scroll", r)
                            } switch (n) {
                            case "input":
                                Ls(r), Kp(r, o, !0);
                                break;
                            case "textarea":
                                Ls(r), Zp(r);
                                break;
                            case "select":
                            case "option":
                                break;
                            default:
                                typeof o.onClick == "function" && (r.onclick = Sa)
                        }
                        r = i, t.updateQueue = r, r !== null && (t.flags |= 4)
                    } else {
                        a = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = rm(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = a.createElement(n, {
                            is: r.is
                        }) : (e = a.createElement(n), n === "select" && (a = e, r.multiple ? a.multiple = !0 : r.size && (a.size = r.size))) : e = a.createElementNS(e, n), e[vn] = t, e[zo] = r, N2(e, t, !1, !1), t.stateNode = e;
                        e: {
                            switch (a = Xu(n, r), n) {
                                case "dialog":
                                    Ee("cancel", e), Ee("close", e), i = r;
                                    break;
                                case "iframe":
                                case "object":
                                case "embed":
                                    Ee("load", e), i = r;
                                    break;
                                case "video":
                                case "audio":
                                    for (i = 0; i < vo.length; i++) Ee(vo[i], e);
                                    i = r;
                                    break;
                                case "source":
                                    Ee("error", e), i = r;
                                    break;
                                case "img":
                                case "image":
                                case "link":
                                    Ee("error", e), Ee("load", e), i = r;
                                    break;
                                case "details":
                                    Ee("toggle", e), i = r;
                                    break;
                                case "input":
                                    Vp(e, r), i = Qu(e, r), Ee("invalid", e);
                                    break;
                                case "option":
                                    i = r;
                                    break;
                                case "select":
                                    e._wrapperState = {
                                        wasMultiple: !!r.multiple
                                    }, i = Pe({}, r, {
                                        value: void 0
                                    }), Ee("invalid", e);
                                    break;
                                case "textarea":
                                    Qp(e, r), i = Ju(e, r), Ee("invalid", e);
                                    break;
                                default:
                                    i = r
                            }
                            Gu(n, i),
                            u = i;
                            for (o in u)
                                if (u.hasOwnProperty(o)) {
                                    var c = u[o];
                                    o === "style" ? sm(e, c) : o === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, c != null && im(e, c)) : o === "children" ? typeof c == "string" ? (n !== "textarea" || c !== "") && Po(e, c) : typeof c == "number" && Po(e, "" + c) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Ao.hasOwnProperty(o) ? c != null && o === "onScroll" && Ee("scroll", e) : c != null && sd(e, o, c, a))
                                } switch (n) {
                                case "input":
                                    Ls(e), Kp(e, r, !1);
                                    break;
                                case "textarea":
                                    Ls(e), Zp(e);
                                    break;
                                case "option":
                                    r.value != null && e.setAttribute("value", "" + sr(r.value));
                                    break;
                                case "select":
                                    e.multiple = !!r.multiple, o = r.value, o != null ? ki(e, !!r.multiple, o, !1) : r.defaultValue != null && ki(e, !!r.multiple, r.defaultValue, !0);
                                    break;
                                default:
                                    typeof i.onClick == "function" && (e.onclick = Sa)
                            }
                            switch (n) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    r = !!r.autoFocus;
                                    break e;
                                case "img":
                                    r = !0;
                                    break e;
                                default:
                                    r = !1
                            }
                        }
                        r && (t.flags |= 4)
                    }
                    t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
                }
                return tt(t), null;
            case 6:
                if (e && t.stateNode != null) T2(e, t, e.memoizedProps, r);
                else {
                    if (typeof r != "string" && t.stateNode === null) throw Error(B(166));
                    if (n = Nr(Wo.current), Nr(wn.current), Fs(t)) {
                        if (r = t.stateNode, n = t.memoizedProps, r[vn] = t, (o = r.nodeValue !== n) && (e = Lt, e !== null)) switch (e.tag) {
                            case 3:
                                Ms(r.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !== !0 && Ms(r.nodeValue, n, (e.mode & 1) !== 0)
                        }
                        o && (t.flags |= 4)
                    } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[vn] = t, t.stateNode = r
                }
                return tt(t), null;
            case 13:
                if (Ne(Le), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                    if (je && jt !== null && t.mode & 1 && !(t.flags & 128)) Qm(), Li(), t.flags |= 98560, o = !1;
                    else if (o = Fs(t), r !== null && r.dehydrated !== null) {
                        if (e === null) {
                            if (!o) throw Error(B(318));
                            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(B(317));
                            o[vn] = t
                        } else Li(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                        tt(t), o = !1
                    } else en !== null && (Oc(en), en = null), o = !0;
                    if (!o) return t.flags & 65536 ? t : null
                }
                return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Le.current & 1 ? Ue === 0 && (Ue = 3) : Hd())), t.updateQueue !== null && (t.flags |= 4), tt(t), null);
            case 4:
                return Pi(), Ec(e, t), e === null && Fo(t.stateNode.containerInfo), tt(t), null;
            case 10:
                return Ed(t.type._context), tt(t), null;
            case 17:
                return xt(t.type) && Ea(), tt(t), null;
            case 19:
                if (Ne(Le), o = t.memoizedState, o === null) return tt(t), null;
                if (r = (t.flags & 128) !== 0, a = o.rendering, a === null)
                    if (r) fo(o, !1);
                    else {
                        if (Ue !== 0 || e !== null && e.flags & 128)
                            for (e = t.child; e !== null;) {
                                if (a = Pa(e), a !== null) {
                                    for (t.flags |= 128, fo(o, !1), r = a.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) o = n, e = r, o.flags &= 14680066, a = o.alternate, a === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = a.childLanes, o.lanes = a.lanes, o.child = a.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = a.memoizedProps, o.memoizedState = a.memoizedState, o.updateQueue = a.updateQueue, o.type = a.type, e = a.dependencies, o.dependencies = e === null ? null : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext
                                    }), n = n.sibling;
                                    return Se(Le, Le.current & 1 | 2), t.child
                                }
                                e = e.sibling
                            }
                        o.tail !== null && De() > Ri && (t.flags |= 128, r = !0, fo(o, !1), t.lanes = 4194304)
                    }
                else {
                    if (!r)
                        if (e = Pa(a), e !== null) {
                            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), fo(o, !0), o.tail === null && o.tailMode === "hidden" && !a.alternate && !je) return tt(t), null
                        } else 2 * De() - o.renderingStartTime > Ri && n !== 1073741824 && (t.flags |= 128, r = !0, fo(o, !1), t.lanes = 4194304);
                    o.isBackwards ? (a.sibling = t.child, t.child = a) : (n = o.last, n !== null ? n.sibling = a : t.child = a, o.last = a)
                }
                return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = De(), t.sibling = null, n = Le.current, Se(Le, r ? n & 1 | 2 : n & 1), t) : (tt(t), null);
            case 22:
            case 23:
                return zd(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Nt & 1073741824 && (tt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : tt(t), null;
            case 24:
                return null;
            case 25:
                return null
        }
        throw Error(B(156, t.tag))
    }

    function jw(e, t) {
        switch (_d(t), t.tag) {
            case 1:
                return xt(t.type) && Ea(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 3:
                return Pi(), Ne(vt), Ne(it), Ld(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
            case 5:
                return Td(t), null;
            case 13:
                if (Ne(Le), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                    if (t.alternate === null) throw Error(B(340));
                    Li()
                }
                return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 19:
                return Ne(Le), null;
            case 4:
                return Pi(), null;
            case 10:
                return Ed(t.type._context), null;
            case 22:
            case 23:
                return zd(), null;
            case 24:
                return null;
            default:
                return null
        }
    }
    var Hs = !1,
        nt = !1,
        Tw = typeof WeakSet == "function" ? WeakSet : Set,
        H = null;

    function xi(e, t) {
        var n = e.ref;
        if (n !== null)
            if (typeof n == "function") try {
                n(null)
            } catch (r) {
                Re(e, t, r)
            } else n.current = null
    }

    function bc(e, t, n) {
        try {
            n()
        } catch (r) {
            Re(e, t, r)
        }
    }
    var B0 = !1;

    function Lw(e, t) {
        if (uc = _a, e = Rm(), xd(e)) {
            if ("selectionStart" in e) var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
            else e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var i = r.anchorOffset,
                        o = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType, o.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var a = 0,
                        u = -1,
                        c = -1,
                        p = 0,
                        m = 0,
                        g = e,
                        w = null;
                    t: for (;;) {
                        for (var N; g !== n || i !== 0 && g.nodeType !== 3 || (u = a + i), g !== o || r !== 0 && g.nodeType !== 3 || (c = a + r), g.nodeType === 3 && (a += g.nodeValue.length), (N = g.firstChild) !== null;) w = g, g = N;
                        for (;;) {
                            if (g === e) break t;
                            if (w === n && ++p === i && (u = a), w === o && ++m === r && (c = a), (N = g.nextSibling) !== null) break;
                            g = w, w = g.parentNode
                        }
                        g = N
                    }
                    n = u === -1 || c === -1 ? null : {
                        start: u,
                        end: c
                    }
                } else n = null
            }
            n = n || {
                start: 0,
                end: 0
            }
        } else n = null;
        for (cc = {
                focusedElem: e,
                selectionRange: n
            }, _a = !1, H = t; H !== null;)
            if (t = H, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, H = e;
            else
                for (; H !== null;) {
                    t = H;
                    try {
                        var _ = t.alternate;
                        if (t.flags & 1024) switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (_ !== null) {
                                    var k = _.memoizedProps,
                                        S = _.memoizedState,
                                        x = t.stateNode,
                                        y = x.getSnapshotBeforeUpdate(t.elementType === t.type ? k : Gt(t.type, k), S);
                                    x.__reactInternalSnapshotBeforeUpdate = y
                                }
                                break;
                            case 3:
                                var v = t.stateNode.containerInfo;
                                v.nodeType === 1 ? v.textContent = "" : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(B(163))
                        }
                    } catch (j) {
                        Re(t, t.return, j)
                    }
                    if (e = t.sibling, e !== null) {
                        e.return = t.return, H = e;
                        break
                    }
                    H = t.return
                }
        return _ = B0, B0 = !1, _
    }

    function bo(e, t, n) {
        var r = t.updateQueue;
        if (r = r !== null ? r.lastEffect : null, r !== null) {
            var i = r = r.next;
            do {
                if ((i.tag & e) === e) {
                    var o = i.destroy;
                    i.destroy = void 0, o !== void 0 && bc(t, n, o)
                }
                i = i.next
            } while (i !== r)
        }
    }

    function il(e, t) {
        if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
            var n = t = t.next;
            do {
                if ((n.tag & e) === e) {
                    var r = n.create;
                    n.destroy = r()
                }
                n = n.next
            } while (n !== t)
        }
    }

    function Nc(e) {
        var t = e.ref;
        if (t !== null) {
            var n = e.stateNode;
            switch (e.tag) {
                case 5:
                    e = n;
                    break;
                default:
                    e = n
            }
            typeof t == "function" ? t(e) : t.current = e
        }
    }

    function L2(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null, L2(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[vn], delete t[zo], delete t[pc], delete t[fw], delete t[pw])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
    }

    function A2(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 4
    }

    function M0(e) {
        e: for (;;) {
            for (; e.sibling === null;) {
                if (e.return === null || A2(e.return)) return null;
                e = e.return
            }
            for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
                if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
                e.child.return = e, e = e.child
            }
            if (!(e.flags & 2)) return e.stateNode
        }
    }

    function jc(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Sa));
        else if (r !== 4 && (e = e.child, e !== null))
            for (jc(e, t, n), e = e.sibling; e !== null;) jc(e, t, n), e = e.sibling
    }

    function Tc(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (r !== 4 && (e = e.child, e !== null))
            for (Tc(e, t, n), e = e.sibling; e !== null;) Tc(e, t, n), e = e.sibling
    }
    var Je = null,
        Xt = !1;

    function zn(e, t, n) {
        for (n = n.child; n !== null;) P2(e, t, n), n = n.sibling
    }

    function P2(e, t, n) {
        if (xn && typeof xn.onCommitFiberUnmount == "function") try {
            xn.onCommitFiberUnmount(Ja, n)
        } catch {}
        switch (n.tag) {
            case 5:
                nt || xi(n, t);
            case 6:
                var r = Je,
                    i = Xt;
                Je = null, zn(e, t, n), Je = r, Xt = i, Je !== null && (Xt ? (e = Je, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Je.removeChild(n.stateNode));
                break;
            case 18:
                Je !== null && (Xt ? (e = Je, n = n.stateNode, e.nodeType === 8 ? ku(e.parentNode, n) : e.nodeType === 1 && ku(e, n), Do(e)) : ku(Je, n.stateNode));
                break;
            case 4:
                r = Je, i = Xt, Je = n.stateNode.containerInfo, Xt = !0, zn(e, t, n), Je = r, Xt = i;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                if (!nt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                    i = r = r.next;
                    do {
                        var o = i,
                            a = o.destroy;
                        o = o.tag, a !== void 0 && (o & 2 || o & 4) && bc(n, t, a), i = i.next
                    } while (i !== r)
                }
                zn(e, t, n);
                break;
            case 1:
                if (!nt && (xi(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                    r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
                } catch (u) {
                    Re(n, t, u)
                }
                zn(e, t, n);
                break;
            case 21:
                zn(e, t, n);
                break;
            case 22:
                n.mode & 1 ? (nt = (r = nt) || n.memoizedState !== null, zn(e, t, n), nt = r) : zn(e, t, n);
                break;
            default:
                zn(e, t, n)
        }
    }

    function F0(e) {
        var t = e.updateQueue;
        if (t !== null) {
            e.updateQueue = null;
            var n = e.stateNode;
            n === null && (n = e.stateNode = new Tw), t.forEach(function(r) {
                var i = Fw.bind(null, e, r);
                n.has(r) || (n.add(r), r.then(i, i))
            })
        }
    }

    function qt(e, t) {
        var n = t.deletions;
        if (n !== null)
            for (var r = 0; r < n.length; r++) {
                var i = n[r];
                try {
                    var o = e,
                        a = t,
                        u = a;
                    e: for (; u !== null;) {
                        switch (u.tag) {
                            case 5:
                                Je = u.stateNode, Xt = !1;
                                break e;
                            case 3:
                                Je = u.stateNode.containerInfo, Xt = !0;
                                break e;
                            case 4:
                                Je = u.stateNode.containerInfo, Xt = !0;
                                break e
                        }
                        u = u.return
                    }
                    if (Je === null) throw Error(B(160));
                    P2(o, a, i), Je = null, Xt = !1;
                    var c = i.alternate;
                    c !== null && (c.return = null), i.return = null
                } catch (p) {
                    Re(i, t, p)
                }
            }
        if (t.subtreeFlags & 12854)
            for (t = t.child; t !== null;) O2(t, e), t = t.sibling
    }

    function O2(e, t) {
        var n = e.alternate,
            r = e.flags;
        switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                if (qt(t, e), pn(e), r & 4) {
                    try {
                        bo(3, e, e.return), il(3, e)
                    } catch (k) {
                        Re(e, e.return, k)
                    }
                    try {
                        bo(5, e, e.return)
                    } catch (k) {
                        Re(e, e.return, k)
                    }
                }
                break;
            case 1:
                qt(t, e), pn(e), r & 512 && n !== null && xi(n, n.return);
                break;
            case 5:
                if (qt(t, e), pn(e), r & 512 && n !== null && xi(n, n.return), e.flags & 32) {
                    var i = e.stateNode;
                    try {
                        Po(i, "")
                    } catch (k) {
                        Re(e, e.return, k)
                    }
                }
                if (r & 4 && (i = e.stateNode, i != null)) {
                    var o = e.memoizedProps,
                        a = n !== null ? n.memoizedProps : o,
                        u = e.type,
                        c = e.updateQueue;
                    if (e.updateQueue = null, c !== null) try {
                        u === "input" && o.type === "radio" && o.name != null && tm(i, o), Xu(u, a);
                        var p = Xu(u, o);
                        for (a = 0; a < c.length; a += 2) {
                            var m = c[a],
                                g = c[a + 1];
                            m === "style" ? sm(i, g) : m === "dangerouslySetInnerHTML" ? im(i, g) : m === "children" ? Po(i, g) : sd(i, m, g, p)
                        }
                        switch (u) {
                            case "input":
                                Zu(i, o);
                                break;
                            case "textarea":
                                nm(i, o);
                                break;
                            case "select":
                                var w = i._wrapperState.wasMultiple;
                                i._wrapperState.wasMultiple = !!o.multiple;
                                var N = o.value;
                                N != null ? ki(i, !!o.multiple, N, !1) : w !== !!o.multiple && (o.defaultValue != null ? ki(i, !!o.multiple, o.defaultValue, !0) : ki(i, !!o.multiple, o.multiple ? [] : "", !1))
                        }
                        i[zo] = o
                    } catch (k) {
                        Re(e, e.return, k)
                    }
                }
                break;
            case 6:
                if (qt(t, e), pn(e), r & 4) {
                    if (e.stateNode === null) throw Error(B(162));
                    i = e.stateNode, o = e.memoizedProps;
                    try {
                        i.nodeValue = o
                    } catch (k) {
                        Re(e, e.return, k)
                    }
                }
                break;
            case 3:
                if (qt(t, e), pn(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                    Do(t.containerInfo)
                } catch (k) {
                    Re(e, e.return, k)
                }
                break;
            case 4:
                qt(t, e), pn(e);
                break;
            case 13:
                qt(t, e), pn(e), i = e.child, i.flags & 8192 && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (Fd = De())), r & 4 && F0(e);
                break;
            case 22:
                if (m = n !== null && n.memoizedState !== null, e.mode & 1 ? (nt = (p = nt) || m, qt(t, e), nt = p) : qt(t, e), pn(e), r & 8192) {
                    if (p = e.memoizedState !== null, (e.stateNode.isHidden = p) && !m && e.mode & 1)
                        for (H = e, m = e.child; m !== null;) {
                            for (g = H = m; H !== null;) {
                                switch (w = H, N = w.child, w.tag) {
                                    case 0:
                                    case 11:
                                    case 14:
                                    case 15:
                                        bo(4, w, w.return);
                                        break;
                                    case 1:
                                        xi(w, w.return);
                                        var _ = w.stateNode;
                                        if (typeof _.componentWillUnmount == "function") {
                                            r = w, n = w.return;
                                            try {
                                                t = r, _.props = t.memoizedProps, _.state = t.memoizedState, _.componentWillUnmount()
                                            } catch (k) {
                                                Re(r, n, k)
                                            }
                                        }
                                        break;
                                    case 5:
                                        xi(w, w.return);
                                        break;
                                    case 22:
                                        if (w.memoizedState !== null) {
                                            z0(g);
                                            continue
                                        }
                                }
                                N !== null ? (N.return = w, H = N) : z0(g)
                            }
                            m = m.sibling
                        }
                    e: for (m = null, g = e;;) {
                        if (g.tag === 5) {
                            if (m === null) {
                                m = g;
                                try {
                                    i = g.stateNode, p ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = g.stateNode, c = g.memoizedProps.style, a = c != null && c.hasOwnProperty("display") ? c.display : null, u.style.display = om("display", a))
                                } catch (k) {
                                    Re(e, e.return, k)
                                }
                            }
                        } else if (g.tag === 6) {
                            if (m === null) try {
                                g.stateNode.nodeValue = p ? "" : g.memoizedProps
                            } catch (k) {
                                Re(e, e.return, k)
                            }
                        } else if ((g.tag !== 22 && g.tag !== 23 || g.memoizedState === null || g === e) && g.child !== null) {
                            g.child.return = g, g = g.child;
                            continue
                        }
                        if (g === e) break e;
                        for (; g.sibling === null;) {
                            if (g.return === null || g.return === e) break e;
                            m === g && (m = null), g = g.return
                        }
                        m === g && (m = null), g.sibling.return = g.return, g = g.sibling
                    }
                }
                break;
            case 19:
                qt(t, e), pn(e), r & 4 && F0(e);
                break;
            case 21:
                break;
            default:
                qt(t, e), pn(e)
        }
    }

    function pn(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                e: {
                    for (var n = e.return; n !== null;) {
                        if (A2(n)) {
                            var r = n;
                            break e
                        }
                        n = n.return
                    }
                    throw Error(B(160))
                }
                switch (r.tag) {
                    case 5:
                        var i = r.stateNode;
                        r.flags & 32 && (Po(i, ""), r.flags &= -33);
                        var o = M0(e);
                        Tc(e, o, i);
                        break;
                    case 3:
                    case 4:
                        var a = r.stateNode.containerInfo,
                            u = M0(e);
                        jc(e, u, a);
                        break;
                    default:
                        throw Error(B(161))
                }
            }
            catch (c) {
                Re(e, e.return, c)
            }
            e.flags &= -3
        }
        t & 4096 && (e.flags &= -4097)
    }

    function Aw(e, t, n) {
        H = e, R2(e)
    }

    function R2(e, t, n) {
        for (var r = (e.mode & 1) !== 0; H !== null;) {
            var i = H,
                o = i.child;
            if (i.tag === 22 && r) {
                var a = i.memoizedState !== null || Hs;
                if (!a) {
                    var u = i.alternate,
                        c = u !== null && u.memoizedState !== null || nt;
                    u = Hs;
                    var p = nt;
                    if (Hs = a, (nt = c) && !p)
                        for (H = i; H !== null;) a = H, c = a.child, a.tag === 22 && a.memoizedState !== null ? H0(i) : c !== null ? (c.return = a, H = c) : H0(i);
                    for (; o !== null;) H = o, R2(o), o = o.sibling;
                    H = i, Hs = u, nt = p
                }
                $0(e)
            } else i.subtreeFlags & 8772 && o !== null ? (o.return = i, H = o) : $0(e)
        }
    }

    function $0(e) {
        for (; H !== null;) {
            var t = H;
            if (t.flags & 8772) {
                var n = t.alternate;
                try {
                    if (t.flags & 8772) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            nt || il(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !nt)
                                if (n === null) r.componentDidMount();
                                else {
                                    var i = t.elementType === t.type ? n.memoizedProps : Gt(t.type, n.memoizedProps);
                                    r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                                } var o = t.updateQueue;
                            o !== null && S0(t, o, r);
                            break;
                        case 3:
                            var a = t.updateQueue;
                            if (a !== null) {
                                if (n = null, t.child !== null) switch (t.child.tag) {
                                    case 5:
                                        n = t.child.stateNode;
                                        break;
                                    case 1:
                                        n = t.child.stateNode
                                }
                                S0(t, a, n)
                            }
                            break;
                        case 5:
                            var u = t.stateNode;
                            if (n === null && t.flags & 4) {
                                n = u;
                                var c = t.memoizedProps;
                                switch (t.type) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        c.autoFocus && n.focus();
                                        break;
                                    case "img":
                                        c.src && (n.src = c.src)
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (t.memoizedState === null) {
                                var p = t.alternate;
                                if (p !== null) {
                                    var m = p.memoizedState;
                                    if (m !== null) {
                                        var g = m.dehydrated;
                                        g !== null && Do(g)
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(B(163))
                    }
                    nt || t.flags & 512 && Nc(t)
                } catch (w) {
                    Re(t, t.return, w)
                }
            }
            if (t === e) {
                H = null;
                break
            }
            if (n = t.sibling, n !== null) {
                n.return = t.return, H = n;
                break
            }
            H = t.return
        }
    }

    function z0(e) {
        for (; H !== null;) {
            var t = H;
            if (t === e) {
                H = null;
                break
            }
            var n = t.sibling;
            if (n !== null) {
                n.return = t.return, H = n;
                break
            }
            H = t.return
        }
    }

    function H0(e) {
        for (; H !== null;) {
            var t = H;
            try {
                switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        var n = t.return;
                        try {
                            il(4, t)
                        } catch (c) {
                            Re(t, n, c)
                        }
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (typeof r.componentDidMount == "function") {
                            var i = t.return;
                            try {
                                r.componentDidMount()
                            } catch (c) {
                                Re(t, i, c)
                            }
                        }
                        var o = t.return;
                        try {
                            Nc(t)
                        } catch (c) {
                            Re(t, o, c)
                        }
                        break;
                    case 5:
                        var a = t.return;
                        try {
                            Nc(t)
                        } catch (c) {
                            Re(t, a, c)
                        }
                }
            } catch (c) {
                Re(t, t.return, c)
            }
            if (t === e) {
                H = null;
                break
            }
            var u = t.sibling;
            if (u !== null) {
                u.return = t.return, H = u;
                break
            }
            H = t.return
        }
    }
    var Pw = Math.ceil,
        Ia = In.ReactCurrentDispatcher,
        Bd = In.ReactCurrentOwner,
        Ut = In.ReactCurrentBatchConfig,
        de = 0,
        Ze = null,
        ze = null,
        qe = 0,
        Nt = 0,
        wi = ur(0),
        Ue = 0,
        Qo = null,
        $r = 0,
        ol = 0,
        Md = 0,
        No = null,
        mt = null,
        Fd = 0,
        Ri = 1 / 0,
        En = null,
        Da = !1,
        Lc = null,
        nr = null,
        Ws = !1,
        Zn = null,
        Ba = 0,
        jo = 0,
        Ac = null,
        ia = -1,
        oa = 0;

    function dt() {
        return de & 6 ? De() : ia !== -1 ? ia : ia = De()
    }

    function rr(e) {
        return e.mode & 1 ? de & 2 && qe !== 0 ? qe & -qe : mw.transition !== null ? (oa === 0 && (oa = vm()), oa) : (e = ye, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Em(e.type)), e) : 1
    }

    function nn(e, t, n, r) {
        if (50 < jo) throw jo = 0, Ac = null, Error(B(185));
        ts(e, n, r), (!(de & 2) || e !== Ze) && (e === Ze && (!(de & 2) && (ol |= n), Ue === 4 && Kn(e, qe)), wt(e, r), n === 1 && de === 0 && !(t.mode & 1) && (Ri = De() + 500, tl && cr()))
    }

    function wt(e, t) {
        var n = e.callbackNode;
        mx(e, t);
        var r = wa(e, e === Ze ? qe : 0);
        if (r === 0) n !== null && qp(n), e.callbackNode = null, e.callbackPriority = 0;
        else if (t = r & -r, e.callbackPriority !== t) {
            if (n != null && qp(n), t === 1) e.tag === 0 ? hw(W0.bind(null, e)) : Um(W0.bind(null, e)), cw(function() {
                !(de & 6) && cr()
            }), n = null;
            else {
                switch (xm(r)) {
                    case 1:
                        n = dd;
                        break;
                    case 4:
                        n = gm;
                        break;
                    case 16:
                        n = xa;
                        break;
                    case 536870912:
                        n = ym;
                        break;
                    default:
                        n = xa
                }
                n = H2(n, I2.bind(null, e))
            }
            e.callbackPriority = t, e.callbackNode = n
        }
    }

    function I2(e, t) {
        if (ia = -1, oa = 0, de & 6) throw Error(B(327));
        var n = e.callbackNode;
        if (Ni() && e.callbackNode !== n) return null;
        var r = wa(e, e === Ze ? qe : 0);
        if (r === 0) return null;
        if (r & 30 || r & e.expiredLanes || t) t = Ma(e, r);
        else {
            t = r;
            var i = de;
            de |= 2;
            var o = B2();
            (Ze !== e || qe !== t) && (En = null, Ri = De() + 500, Lr(e, t));
            do try {
                Iw();
                break
            } catch (u) {
                D2(e, u)
            }
            while (!0);
            Sd(), Ia.current = o, de = i, ze !== null ? t = 0 : (Ze = null, qe = 0, t = Ue)
        }
        if (t !== 0) {
            if (t === 2 && (i = ic(e), i !== 0 && (r = i, t = Pc(e, i))), t === 1) throw n = Qo, Lr(e, 0), Kn(e, r), wt(e, De()), n;
            if (t === 6) Kn(e, r);
            else {
                if (i = e.current.alternate, !(r & 30) && !Ow(i) && (t = Ma(e, r), t === 2 && (o = ic(e), o !== 0 && (r = o, t = Pc(e, o))), t === 1)) throw n = Qo, Lr(e, 0), Kn(e, r), wt(e, De()), n;
                switch (e.finishedWork = i, e.finishedLanes = r, t) {
                    case 0:
                    case 1:
                        throw Error(B(345));
                    case 2:
                        Sr(e, mt, En);
                        break;
                    case 3:
                        if (Kn(e, r), (r & 130023424) === r && (t = Fd + 500 - De(), 10 < t)) {
                            if (wa(e, 0) !== 0) break;
                            if (i = e.suspendedLanes, (i & r) !== r) {
                                dt(), e.pingedLanes |= e.suspendedLanes & i;
                                break
                            }
                            e.timeoutHandle = fc(Sr.bind(null, e, mt, En), t);
                            break
                        }
                        Sr(e, mt, En);
                        break;
                    case 4:
                        if (Kn(e, r), (r & 4194240) === r) break;
                        for (t = e.eventTimes, i = -1; 0 < r;) {
                            var a = 31 - tn(r);
                            o = 1 << a, a = t[a], a > i && (i = a), r &= ~o
                        }
                        if (r = i, r = De() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Pw(r / 1960)) - r, 10 < r) {
                            e.timeoutHandle = fc(Sr.bind(null, e, mt, En), r);
                            break
                        }
                        Sr(e, mt, En);
                        break;
                    case 5:
                        Sr(e, mt, En);
                        break;
                    default:
                        throw Error(B(329))
                }
            }
        }
        return wt(e, De()), e.callbackNode === n ? I2.bind(null, e) : null
    }

    function Pc(e, t) {
        var n = No;
        return e.current.memoizedState.isDehydrated && (Lr(e, t).flags |= 256), e = Ma(e, t), e !== 2 && (t = mt, mt = n, t !== null && Oc(t)), e
    }

    function Oc(e) {
        mt === null ? mt = e : mt.push.apply(mt, e)
    }

    function Ow(e) {
        for (var t = e;;) {
            if (t.flags & 16384) {
                var n = t.updateQueue;
                if (n !== null && (n = n.stores, n !== null))
                    for (var r = 0; r < n.length; r++) {
                        var i = n[r],
                            o = i.getSnapshot;
                        i = i.value;
                        try {
                            if (!on(o(), i)) return !1
                        } catch {
                            return !1
                        }
                    }
            }
            if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
            else {
                if (t === e) break;
                for (; t.sibling === null;) {
                    if (t.return === null || t.return === e) return !0;
                    t = t.return
                }
                t.sibling.return = t.return, t = t.sibling
            }
        }
        return !0
    }

    function Kn(e, t) {
        for (t &= ~Md, t &= ~ol, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
            var n = 31 - tn(t),
                r = 1 << n;
            e[n] = -1, t &= ~r
        }
    }

    function W0(e) {
        if (de & 6) throw Error(B(327));
        Ni();
        var t = wa(e, 0);
        if (!(t & 1)) return wt(e, De()), null;
        var n = Ma(e, t);
        if (e.tag !== 0 && n === 2) {
            var r = ic(e);
            r !== 0 && (t = r, n = Pc(e, r))
        }
        if (n === 1) throw n = Qo, Lr(e, 0), Kn(e, t), wt(e, De()), n;
        if (n === 6) throw Error(B(345));
        return e.finishedWork = e.current.alternate, e.finishedLanes = t, Sr(e, mt, En), wt(e, De()), null
    }

    function $d(e, t) {
        var n = de;
        de |= 1;
        try {
            return e(t)
        } finally {
            de = n, de === 0 && (Ri = De() + 500, tl && cr())
        }
    }

    function zr(e) {
        Zn !== null && Zn.tag === 0 && !(de & 6) && Ni();
        var t = de;
        de |= 1;
        var n = Ut.transition,
            r = ye;
        try {
            if (Ut.transition = null, ye = 1, e) return e()
        } finally {
            ye = r, Ut.transition = n, de = t, !(de & 6) && cr()
        }
    }

    function zd() {
        Nt = wi.current, Ne(wi)
    }

    function Lr(e, t) {
        e.finishedWork = null, e.finishedLanes = 0;
        var n = e.timeoutHandle;
        if (n !== -1 && (e.timeoutHandle = -1, uw(n)), ze !== null)
            for (n = ze.return; n !== null;) {
                var r = n;
                switch (_d(r), r.tag) {
                    case 1:
                        r = r.type.childContextTypes, r != null && Ea();
                        break;
                    case 3:
                        Pi(), Ne(vt), Ne(it), Ld();
                        break;
                    case 5:
                        Td(r);
                        break;
                    case 4:
                        Pi();
                        break;
                    case 13:
                        Ne(Le);
                        break;
                    case 19:
                        Ne(Le);
                        break;
                    case 10:
                        Ed(r.type._context);
                        break;
                    case 22:
                    case 23:
                        zd()
                }
                n = n.return
            }
        if (Ze = e, ze = e = ir(e.current, null), qe = Nt = t, Ue = 0, Qo = null, Md = ol = $r = 0, mt = No = null, br !== null) {
            for (t = 0; t < br.length; t++)
                if (n = br[t], r = n.interleaved, r !== null) {
                    n.interleaved = null;
                    var i = r.next,
                        o = n.pending;
                    if (o !== null) {
                        var a = o.next;
                        o.next = i, r.next = a
                    }
                    n.pending = r
                } br = null
        }
        return e
    }

    function D2(e, t) {
        do {
            var n = ze;
            try {
                if (Sd(), ta.current = Ra, Oa) {
                    for (var r = Ae.memoizedState; r !== null;) {
                        var i = r.queue;
                        i !== null && (i.pending = null), r = r.next
                    }
                    Oa = !1
                }
                if (Fr = 0, Ke = We = Ae = null, Eo = !1, Uo = 0, Bd.current = null, n === null || n.return === null) {
                    Ue = 1, Qo = t, ze = null;
                    break
                }
                e: {
                    var o = e,
                        a = n.return,
                        u = n,
                        c = t;
                    if (t = qe, u.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
                        var p = c,
                            m = u,
                            g = m.tag;
                        if (!(m.mode & 1) && (g === 0 || g === 11 || g === 15)) {
                            var w = m.alternate;
                            w ? (m.updateQueue = w.updateQueue, m.memoizedState = w.memoizedState, m.lanes = w.lanes) : (m.updateQueue = null, m.memoizedState = null)
                        }
                        var N = L0(a);
                        if (N !== null) {
                            N.flags &= -257, A0(N, a, u, o, t), N.mode & 1 && T0(o, p, t), t = N, c = p;
                            var _ = t.updateQueue;
                            if (_ === null) {
                                var k = new Set;
                                k.add(c), t.updateQueue = k
                            } else _.add(c);
                            break e
                        } else {
                            if (!(t & 1)) {
                                T0(o, p, t), Hd();
                                break e
                            }
                            c = Error(B(426))
                        }
                    } else if (je && u.mode & 1) {
                        var S = L0(a);
                        if (S !== null) {
                            !(S.flags & 65536) && (S.flags |= 256), A0(S, a, u, o, t), kd(Oi(c, u));
                            break e
                        }
                    }
                    o = c = Oi(c, u),
                    Ue !== 4 && (Ue = 2),
                    No === null ? No = [o] : No.push(o),
                    o = a;do {
                        switch (o.tag) {
                            case 3:
                                o.flags |= 65536, t &= -t, o.lanes |= t;
                                var x = x2(o, c, t);
                                C0(o, x);
                                break e;
                            case 1:
                                u = c;
                                var y = o.type,
                                    v = o.stateNode;
                                if (!(o.flags & 128) && (typeof y.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (nr === null || !nr.has(v)))) {
                                    o.flags |= 65536, t &= -t, o.lanes |= t;
                                    var j = w2(o, u, t);
                                    C0(o, j);
                                    break e
                                }
                        }
                        o = o.return
                    } while (o !== null)
                }
                F2(n)
            } catch (T) {
                t = T, ze === n && n !== null && (ze = n = n.return);
                continue
            }
            break
        } while (!0)
    }

    function B2() {
        var e = Ia.current;
        return Ia.current = Ra, e === null ? Ra : e
    }

    function Hd() {
        (Ue === 0 || Ue === 3 || Ue === 2) && (Ue = 4), Ze === null || !($r & 268435455) && !(ol & 268435455) || Kn(Ze, qe)
    }

    function Ma(e, t) {
        var n = de;
        de |= 2;
        var r = B2();
        (Ze !== e || qe !== t) && (En = null, Lr(e, t));
        do try {
            Rw();
            break
        } catch (i) {
            D2(e, i)
        }
        while (!0);
        if (Sd(), de = n, Ia.current = r, ze !== null) throw Error(B(261));
        return Ze = null, qe = 0, Ue
    }

    function Rw() {
        for (; ze !== null;) M2(ze)
    }

    function Iw() {
        for (; ze !== null && !sx();) M2(ze)
    }

    function M2(e) {
        var t = z2(e.alternate, e, Nt);
        e.memoizedProps = e.pendingProps, t === null ? F2(e) : ze = t, Bd.current = null
    }

    function F2(e) {
        var t = e;
        do {
            var n = t.alternate;
            if (e = t.return, t.flags & 32768) {
                if (n = jw(n, t), n !== null) {
                    n.flags &= 32767, ze = n;
                    return
                }
                if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
                else {
                    Ue = 6, ze = null;
                    return
                }
            } else if (n = Nw(n, t, Nt), n !== null) {
                ze = n;
                return
            }
            if (t = t.sibling, t !== null) {
                ze = t;
                return
            }
            ze = t = e
        } while (t !== null);
        Ue === 0 && (Ue = 5)
    }

    function Sr(e, t, n) {
        var r = ye,
            i = Ut.transition;
        try {
            Ut.transition = null, ye = 1, Dw(e, t, n, r)
        } finally {
            Ut.transition = i, ye = r
        }
        return null
    }

    function Dw(e, t, n, r) {
        do Ni(); while (Zn !== null);
        if (de & 6) throw Error(B(327));
        n = e.finishedWork;
        var i = e.finishedLanes;
        if (n === null) return null;
        if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(B(177));
        e.callbackNode = null, e.callbackPriority = 0;
        var o = n.lanes | n.childLanes;
        if (gx(e, o), e === Ze && (ze = Ze = null, qe = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ws || (Ws = !0, H2(xa, function() {
                return Ni(), null
            })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
            o = Ut.transition, Ut.transition = null;
            var a = ye;
            ye = 1;
            var u = de;
            de |= 4, Bd.current = null, Lw(e, n), O2(n, e), nw(cc), _a = !!uc, cc = uc = null, e.current = n, Aw(n), ax(), de = u, ye = a, Ut.transition = o
        } else e.current = n;
        if (Ws && (Ws = !1, Zn = e, Ba = i), o = e.pendingLanes, o === 0 && (nr = null), cx(n.stateNode), wt(e, De()), t !== null)
            for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, {
                componentStack: i.stack,
                digest: i.digest
            });
        if (Da) throw Da = !1, e = Lc, Lc = null, e;
        return Ba & 1 && e.tag !== 0 && Ni(), o = e.pendingLanes, o & 1 ? e === Ac ? jo++ : (jo = 0, Ac = e) : jo = 0, cr(), null
    }

    function Ni() {
        if (Zn !== null) {
            var e = xm(Ba),
                t = Ut.transition,
                n = ye;
            try {
                if (Ut.transition = null, ye = 16 > e ? 16 : e, Zn === null) var r = !1;
                else {
                    if (e = Zn, Zn = null, Ba = 0, de & 6) throw Error(B(331));
                    var i = de;
                    for (de |= 4, H = e.current; H !== null;) {
                        var o = H,
                            a = o.child;
                        if (H.flags & 16) {
                            var u = o.deletions;
                            if (u !== null) {
                                for (var c = 0; c < u.length; c++) {
                                    var p = u[c];
                                    for (H = p; H !== null;) {
                                        var m = H;
                                        switch (m.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                bo(8, m, o)
                                        }
                                        var g = m.child;
                                        if (g !== null) g.return = m, H = g;
                                        else
                                            for (; H !== null;) {
                                                m = H;
                                                var w = m.sibling,
                                                    N = m.return;
                                                if (L2(m), m === p) {
                                                    H = null;
                                                    break
                                                }
                                                if (w !== null) {
                                                    w.return = N, H = w;
                                                    break
                                                }
                                                H = N
                                            }
                                    }
                                }
                                var _ = o.alternate;
                                if (_ !== null) {
                                    var k = _.child;
                                    if (k !== null) {
                                        _.child = null;
                                        do {
                                            var S = k.sibling;
                                            k.sibling = null, k = S
                                        } while (k !== null)
                                    }
                                }
                                H = o
                            }
                        }
                        if (o.subtreeFlags & 2064 && a !== null) a.return = o, H = a;
                        else e: for (; H !== null;) {
                            if (o = H, o.flags & 2048) switch (o.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    bo(9, o, o.return)
                            }
                            var x = o.sibling;
                            if (x !== null) {
                                x.return = o.return, H = x;
                                break e
                            }
                            H = o.return
                        }
                    }
                    var y = e.current;
                    for (H = y; H !== null;) {
                        a = H;
                        var v = a.child;
                        if (a.subtreeFlags & 2064 && v !== null) v.return = a, H = v;
                        else e: for (a = y; H !== null;) {
                            if (u = H, u.flags & 2048) try {
                                switch (u.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        il(9, u)
                                }
                            } catch (T) {
                                Re(u, u.return, T)
                            }
                            if (u === a) {
                                H = null;
                                break e
                            }
                            var j = u.sibling;
                            if (j !== null) {
                                j.return = u.return, H = j;
                                break e
                            }
                            H = u.return
                        }
                    }
                    if (de = i, cr(), xn && typeof xn.onPostCommitFiberRoot == "function") try {
                        xn.onPostCommitFiberRoot(Ja, e)
                    } catch {}
                    r = !0
                }
                return r
            } finally {
                ye = n, Ut.transition = t
            }
        }
        return !1
    }

    function U0(e, t, n) {
        t = Oi(n, t), t = x2(e, t, 1), e = tr(e, t, 1), t = dt(), e !== null && (ts(e, 1, t), wt(e, t))
    }

    function Re(e, t, n) {
        if (e.tag === 3) U0(e, e, n);
        else
            for (; t !== null;) {
                if (t.tag === 3) {
                    U0(t, e, n);
                    break
                } else if (t.tag === 1) {
                    var r = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (nr === null || !nr.has(r))) {
                        e = Oi(n, e), e = w2(t, e, 1), t = tr(t, e, 1), e = dt(), t !== null && (ts(t, 1, e), wt(t, e));
                        break
                    }
                }
                t = t.return
            }
    }

    function Bw(e, t, n) {
        var r = e.pingCache;
        r !== null && r.delete(t), t = dt(), e.pingedLanes |= e.suspendedLanes & n, Ze === e && (qe & n) === n && (Ue === 4 || Ue === 3 && (qe & 130023424) === qe && 500 > De() - Fd ? Lr(e, 0) : Md |= n), wt(e, t)
    }

    function $2(e, t) {
        t === 0 && (e.mode & 1 ? (t = Os, Os <<= 1, !(Os & 130023424) && (Os = 4194304)) : t = 1);
        var n = dt();
        e = On(e, t), e !== null && (ts(e, t, n), wt(e, n))
    }

    function Mw(e) {
        var t = e.memoizedState,
            n = 0;
        t !== null && (n = t.retryLane), $2(e, n)
    }

    function Fw(e, t) {
        var n = 0;
        switch (e.tag) {
            case 13:
                var r = e.stateNode,
                    i = e.memoizedState;
                i !== null && (n = i.retryLane);
                break;
            case 19:
                r = e.stateNode;
                break;
            default:
                throw Error(B(314))
        }
        r !== null && r.delete(t), $2(e, n)
    }
    var z2;
    z2 = function(e, t, n) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps || vt.current) gt = !0;
            else {
                if (!(e.lanes & n) && !(t.flags & 128)) return gt = !1, bw(e, t, n);
                gt = !!(e.flags & 131072)
            }
        else gt = !1, je && t.flags & 1048576 && Vm(t, ja, t.index);
        switch (t.lanes = 0, t.tag) {
            case 2:
                var r = t.type;
                ra(e, t), e = t.pendingProps;
                var i = Ti(t, it.current);
                bi(t, n), i = Pd(null, t, r, e, i, n);
                var o = Od();
                return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, xt(r) ? (o = !0, ba(t)) : o = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, Nd(t), i.updater = rl, t.stateNode = i, i._reactInternals = t, xc(t, r, e, n), t = kc(null, t, r, !0, o, n)) : (t.tag = 0, je && o && wd(t), ut(null, t, i, n), t = t.child), t;
            case 16:
                r = t.elementType;
                e: {
                    switch (ra(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = zw(r), e = Gt(r, e), i) {
                        case 0:
                            t = _c(null, t, r, e, n);
                            break e;
                        case 1:
                            t = R0(null, t, r, e, n);
                            break e;
                        case 11:
                            t = P0(null, t, r, e, n);
                            break e;
                        case 14:
                            t = O0(null, t, r, Gt(r.type, e), n);
                            break e
                    }
                    throw Error(B(306, r, ""))
                }
                return t;
            case 0:
                return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Gt(r, i), _c(e, t, r, i, n);
            case 1:
                return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Gt(r, i), R0(e, t, r, i, n);
            case 3:
                e: {
                    if (S2(t), e === null) throw Error(B(387));r = t.pendingProps,
                    o = t.memoizedState,
                    i = o.element,
                    qm(e, t),
                    Aa(t, r, null, n);
                    var a = t.memoizedState;
                    if (r = a.element, o.isDehydrated)
                        if (o = {
                                element: r,
                                isDehydrated: !1,
                                cache: a.cache,
                                pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
                                transitions: a.transitions
                            }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
                            i = Oi(Error(B(423)), t), t = I0(e, t, r, n, i);
                            break e
                        } else if (r !== i) {
                        i = Oi(Error(B(424)), t), t = I0(e, t, r, n, i);
                        break e
                    } else
                        for (jt = er(t.stateNode.containerInfo.firstChild), Lt = t, je = !0, en = null, n = Ym(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                    else {
                        if (Li(), r === i) {
                            t = Rn(e, t, n);
                            break e
                        }
                        ut(e, t, r, n)
                    }
                    t = t.child
                }
                return t;
            case 5:
                return Gm(t), e === null && gc(t), r = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, a = i.children, dc(r, i) ? a = null : o !== null && dc(r, o) && (t.flags |= 32), C2(e, t), ut(e, t, a, n), t.child;
            case 6:
                return e === null && gc(t), null;
            case 13:
                return E2(e, t, n);
            case 4:
                return jd(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Ai(t, null, r, n) : ut(e, t, r, n), t.child;
            case 11:
                return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Gt(r, i), P0(e, t, r, i, n);
            case 7:
                return ut(e, t, t.pendingProps, n), t.child;
            case 8:
                return ut(e, t, t.pendingProps.children, n), t.child;
            case 12:
                return ut(e, t, t.pendingProps.children, n), t.child;
            case 10:
                e: {
                    if (r = t.type._context, i = t.pendingProps, o = t.memoizedProps, a = i.value, Se(Ta, r._currentValue), r._currentValue = a, o !== null)
                        if (on(o.value, a)) {
                            if (o.children === i.children && !vt.current) {
                                t = Rn(e, t, n);
                                break e
                            }
                        } else
                            for (o = t.child, o !== null && (o.return = t); o !== null;) {
                                var u = o.dependencies;
                                if (u !== null) {
                                    a = o.child;
                                    for (var c = u.firstContext; c !== null;) {
                                        if (c.context === r) {
                                            if (o.tag === 1) {
                                                c = Ln(-1, n & -n), c.tag = 2;
                                                var p = o.updateQueue;
                                                if (p !== null) {
                                                    p = p.shared;
                                                    var m = p.pending;
                                                    m === null ? c.next = c : (c.next = m.next, m.next = c), p.pending = c
                                                }
                                            }
                                            o.lanes |= n, c = o.alternate, c !== null && (c.lanes |= n), yc(o.return, n, t), u.lanes |= n;
                                            break
                                        }
                                        c = c.next
                                    }
                                } else if (o.tag === 10) a = o.type === t.type ? null : o.child;
                                else if (o.tag === 18) {
                                    if (a = o.return, a === null) throw Error(B(341));
                                    a.lanes |= n, u = a.alternate, u !== null && (u.lanes |= n), yc(a, n, t), a = o.sibling
                                } else a = o.child;
                                if (a !== null) a.return = o;
                                else
                                    for (a = o; a !== null;) {
                                        if (a === t) {
                                            a = null;
                                            break
                                        }
                                        if (o = a.sibling, o !== null) {
                                            o.return = a.return, a = o;
                                            break
                                        }
                                        a = a.return
                                    }
                                o = a
                            }
                    ut(e, t, i.children, n),
                    t = t.child
                }
                return t;
            case 9:
                return i = t.type, r = t.pendingProps.children, bi(t, n), i = Vt(i), r = r(i), t.flags |= 1, ut(e, t, r, n), t.child;
            case 14:
                return r = t.type, i = Gt(r, t.pendingProps), i = Gt(r.type, i), O0(e, t, r, i, n);
            case 15:
                return _2(e, t, t.type, t.pendingProps, n);
            case 17:
                return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Gt(r, i), ra(e, t), t.tag = 1, xt(r) ? (e = !0, ba(t)) : e = !1, bi(t, n), v2(t, r, i), xc(t, r, i, n), kc(null, t, r, !0, e, n);
            case 19:
                return b2(e, t, n);
            case 22:
                return k2(e, t, n)
        }
        throw Error(B(156, t.tag))
    };

    function H2(e, t) {
        return mm(e, t)
    }

    function $w(e, t, n, r) {
        this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
    }

    function Wt(e, t, n, r) {
        return new $w(e, t, n, r)
    }

    function Wd(e) {
        return e = e.prototype, !(!e || !e.isReactComponent)
    }

    function zw(e) {
        if (typeof e == "function") return Wd(e) ? 1 : 0;
        if (e != null) {
            if (e = e.$$typeof, e === ld) return 11;
            if (e === ud) return 14
        }
        return 2
    }

    function ir(e, t) {
        var n = e.alternate;
        return n === null ? (n = Wt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
    }

    function sa(e, t, n, r, i, o) {
        var a = 2;
        if (r = e, typeof e == "function") Wd(e) && (a = 1);
        else if (typeof e == "string") a = 5;
        else e: switch (e) {
            case ci:
                return Ar(n.children, i, o, t);
            case ad:
                a = 8, i |= 8;
                break;
            case Wu:
                return e = Wt(12, n, t, i | 2), e.elementType = Wu, e.lanes = o, e;
            case Uu:
                return e = Wt(13, n, t, i), e.elementType = Uu, e.lanes = o, e;
            case Vu:
                return e = Wt(19, n, t, i), e.elementType = Vu, e.lanes = o, e;
            case Gh:
                return sl(n, i, o, t);
            default:
                if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                    case Jh:
                        a = 10;
                        break e;
                    case qh:
                        a = 9;
                        break e;
                    case ld:
                        a = 11;
                        break e;
                    case ud:
                        a = 14;
                        break e;
                    case Wn:
                        a = 16, r = null;
                        break e
                }
                throw Error(B(130, e == null ? e : typeof e, ""))
        }
        return t = Wt(a, n, t, i), t.elementType = e, t.type = r, t.lanes = o, t
    }

    function Ar(e, t, n, r) {
        return e = Wt(7, e, r, t), e.lanes = n, e
    }

    function sl(e, t, n, r) {
        return e = Wt(22, e, r, t), e.elementType = Gh, e.lanes = n, e.stateNode = {
            isHidden: !1
        }, e
    }

    function Lu(e, t, n) {
        return e = Wt(6, e, null, t), e.lanes = n, e
    }

    function Au(e, t, n) {
        return t = Wt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        }, t
    }

    function Hw(e, t, n, r, i) {
        this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = du(0), this.expirationTimes = du(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = du(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null
    }

    function Ud(e, t, n, r, i, o, a, u, c) {
        return e = new Hw(e, t, n, u, c), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Wt(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        }, Nd(o), e
    }

    function Ww(e, t, n) {
        var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: ui,
            key: r == null ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n
        }
    }

    function W2(e) {
        if (!e) return ar;
        e = e._reactInternals;
        e: {
            if (Ur(e) !== e || e.tag !== 1) throw Error(B(170));
            var t = e;do {
                switch (t.tag) {
                    case 3:
                        t = t.stateNode.context;
                        break e;
                    case 1:
                        if (xt(t.type)) {
                            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                            break e
                        }
                }
                t = t.return
            } while (t !== null);
            throw Error(B(171))
        }
        if (e.tag === 1) {
            var n = e.type;
            if (xt(n)) return Wm(e, n, t)
        }
        return t
    }

    function U2(e, t, n, r, i, o, a, u, c) {
        return e = Ud(n, r, !0, e, i, o, a, u, c), e.context = W2(null), n = e.current, r = dt(), i = rr(n), o = Ln(r, i), o.callback = t ?? null, tr(n, o, i), e.current.lanes = i, ts(e, i, r), wt(e, r), e
    }

    function al(e, t, n, r) {
        var i = t.current,
            o = dt(),
            a = rr(i);
        return n = W2(n), t.context === null ? t.context = n : t.pendingContext = n, t = Ln(o, a), t.payload = {
            element: e
        }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = tr(i, t, a), e !== null && (nn(e, i, a, o), ea(e, i, a)), a
    }

    function Fa(e) {
        if (e = e.current, !e.child) return null;
        switch (e.child.tag) {
            case 5:
                return e.child.stateNode;
            default:
                return e.child.stateNode
        }
    }

    function V0(e, t) {
        if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
            var n = e.retryLane;
            e.retryLane = n !== 0 && n < t ? n : t
        }
    }

    function Vd(e, t) {
        V0(e, t), (e = e.alternate) && V0(e, t)
    }

    function Uw() {
        return null
    }
    var V2 = typeof reportError == "function" ? reportError : function(e) {
        console.error(e)
    };

    function Kd(e) {
        this._internalRoot = e
    }
    ll.prototype.render = Kd.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null) throw Error(B(409));
        al(e, t, null, null)
    };
    ll.prototype.unmount = Kd.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            zr(function() {
                al(null, e, null, null)
            }), t[Pn] = null
        }
    };

    function ll(e) {
        this._internalRoot = e
    }
    ll.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = km();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for (var n = 0; n < Vn.length && t !== 0 && t < Vn[n].priority; n++);
            Vn.splice(n, 0, e), n === 0 && Sm(e)
        }
    };

    function Qd(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
    }

    function ul(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    }

    function K0() {}

    function Vw(e, t, n, r, i) {
        if (i) {
            if (typeof r == "function") {
                var o = r;
                r = function() {
                    var p = Fa(a);
                    o.call(p)
                }
            }
            var a = U2(t, r, e, 0, null, !1, !1, "", K0);
            return e._reactRootContainer = a, e[Pn] = a.current, Fo(e.nodeType === 8 ? e.parentNode : e), zr(), a
        }
        for (; i = e.lastChild;) e.removeChild(i);
        if (typeof r == "function") {
            var u = r;
            r = function() {
                var p = Fa(c);
                u.call(p)
            }
        }
        var c = Ud(e, 0, !1, null, null, !1, !1, "", K0);
        return e._reactRootContainer = c, e[Pn] = c.current, Fo(e.nodeType === 8 ? e.parentNode : e), zr(function() {
            al(t, c, n, r)
        }), c
    }

    function cl(e, t, n, r, i) {
        var o = n._reactRootContainer;
        if (o) {
            var a = o;
            if (typeof i == "function") {
                var u = i;
                i = function() {
                    var c = Fa(a);
                    u.call(c)
                }
            }
            al(t, a, e, i)
        } else a = Vw(n, t, e, i, r);
        return Fa(a)
    }
    wm = function(e) {
        switch (e.tag) {
            case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                    var n = yo(t.pendingLanes);
                    n !== 0 && (fd(t, n | 1), wt(t, De()), !(de & 6) && (Ri = De() + 500, cr()))
                }
                break;
            case 13:
                zr(function() {
                    var r = On(e, 1);
                    if (r !== null) {
                        var i = dt();
                        nn(r, e, 1, i)
                    }
                }), Vd(e, 1)
        }
    };
    pd = function(e) {
        if (e.tag === 13) {
            var t = On(e, 134217728);
            if (t !== null) {
                var n = dt();
                nn(t, e, 134217728, n)
            }
            Vd(e, 134217728)
        }
    };
    _m = function(e) {
        if (e.tag === 13) {
            var t = rr(e),
                n = On(e, t);
            if (n !== null) {
                var r = dt();
                nn(n, e, t, r)
            }
            Vd(e, t)
        }
    };
    km = function() {
        return ye
    };
    Cm = function(e, t) {
        var n = ye;
        try {
            return ye = e, t()
        } finally {
            ye = n
        }
    };
    tc = function(e, t, n) {
        switch (t) {
            case "input":
                if (Zu(e, n), t = n.name, n.type === "radio" && t != null) {
                    for (n = e; n.parentNode;) n = n.parentNode;
                    for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                        var r = n[t];
                        if (r !== e && r.form === e.form) {
                            var i = el(r);
                            if (!i) throw Error(B(90));
                            em(r), Zu(r, i)
                        }
                    }
                }
                break;
            case "textarea":
                nm(e, n);
                break;
            case "select":
                t = n.value, t != null && ki(e, !!n.multiple, t, !1)
        }
    };
    um = $d;
    cm = zr;
    var Kw = {
            usingClientEntryPoint: !1,
            Events: [rs, hi, el, am, lm, $d]
        },
        po = {
            findFiberByHostInstance: Er,
            bundleType: 0,
            version: "18.3.1",
            rendererPackageName: "react-dom"
        },
        Qw = {
            bundleType: po.bundleType,
            version: po.version,
            rendererPackageName: po.rendererPackageName,
            rendererConfig: po.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: In.ReactCurrentDispatcher,
            findHostInstanceByFiber: function(e) {
                return e = pm(e), e === null ? null : e.stateNode
            },
            findFiberByHostInstance: po.findFiberByHostInstance || Uw,
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
        };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Us = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Us.isDisabled && Us.supportsFiber) try {
            Ja = Us.inject(Qw), xn = Us
        } catch {}
    }
    Ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Kw;
    Ot.createPortal = function(e, t) {
        var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!Qd(t)) throw Error(B(200));
        return Ww(e, t, null, n)
    };
    Ot.createRoot = function(e, t) {
        if (!Qd(e)) throw Error(B(299));
        var n = !1,
            r = "",
            i = V2;
        return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = Ud(e, 1, !1, null, null, n, !1, r, i), e[Pn] = t.current, Fo(e.nodeType === 8 ? e.parentNode : e), new Kd(t)
    };
    Ot.findDOMNode = function(e) {
        if (e == null) return null;
        if (e.nodeType === 1) return e;
        var t = e._reactInternals;
        if (t === void 0) throw typeof e.render == "function" ? Error(B(188)) : (e = Object.keys(e).join(","), Error(B(268, e)));
        return e = pm(t), e = e === null ? null : e.stateNode, e
    };
    Ot.flushSync = function(e) {
        return zr(e)
    };
    Ot.hydrate = function(e, t, n) {
        if (!ul(t)) throw Error(B(200));
        return cl(null, e, t, !0, n)
    };
    Ot.hydrateRoot = function(e, t, n) {
        if (!Qd(e)) throw Error(B(405));
        var r = n != null && n.hydratedSources || null,
            i = !1,
            o = "",
            a = V2;
        if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (a = n.onRecoverableError)), t = U2(t, null, e, 1, n ?? null, i, !1, o, a), e[Pn] = t.current, Fo(e), r)
            for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
        return new ll(t)
    };
    Ot.render = function(e, t, n) {
        if (!ul(t)) throw Error(B(200));
        return cl(null, e, t, !1, n)
    };
    Ot.unmountComponentAtNode = function(e) {
        if (!ul(e)) throw Error(B(40));
        return e._reactRootContainer ? (zr(function() {
            cl(null, null, e, !1, function() {
                e._reactRootContainer = null, e[Pn] = null
            })
        }), !0) : !1
    };
    Ot.unstable_batchedUpdates = $d;
    Ot.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
        if (!ul(n)) throw Error(B(200));
        if (e == null || e._reactInternals === void 0) throw Error(B(38));
        return cl(e, t, n, !1, r)
    };
    Ot.version = "18.3.1-next-f1338f8080-20240426";

    function K2() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(K2)
        } catch (e) {
            console.error(e)
        }
    }
    K2(), Kh.exports = Ot;
    var Zw = Kh.exports,
        Q2, Q0 = Zw;
    Q2 = Q0.createRoot, Q0.hydrateRoot;
    /**
     * @remix-run/router v1.21.0
     *
     * Copyright (c) Remix Software Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.md file in the root directory of this source tree.
     *
     * @license MIT
     */
    function Zo() {
        return Zo = Object.assign ? Object.assign.bind() : function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }, Zo.apply(this, arguments)
    }
    var Yn;
    (function(e) {
        e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
    })(Yn || (Yn = {}));
    const Z0 = "popstate";

    function Yw(e) {
        e === void 0 && (e = {});

        function t(r, i) {
            let {
                pathname: o,
                search: a,
                hash: u
            } = r.location;
            return Rc("", {
                pathname: o,
                search: a,
                hash: u
            }, i.state && i.state.usr || null, i.state && i.state.key || "default")
        }

        function n(r, i) {
            return typeof i == "string" ? i : $a(i)
        }
        return qw(t, n, null, e)
    }

    function Be(e, t) {
        if (e === !1 || e === null || typeof e > "u") throw new Error(t)
    }

    function Z2(e, t) {
        if (!e) {
            typeof console < "u" && console.warn(t);
            try {
                throw new Error(t)
            } catch {}
        }
    }

    function Jw() {
        return Math.random().toString(36).substr(2, 8)
    }

    function Y0(e, t) {
        return {
            usr: e.state,
            key: e.key,
            idx: t
        }
    }

    function Rc(e, t, n, r) {
        return n === void 0 && (n = null), Zo({
            pathname: typeof e == "string" ? e : e.pathname,
            search: "",
            hash: ""
        }, typeof t == "string" ? Wi(t) : t, {
            state: n,
            key: t && t.key || r || Jw()
        })
    }

    function $a(e) {
        let {
            pathname: t = "/",
            search: n = "",
            hash: r = ""
        } = e;
        return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t
    }

    function Wi(e) {
        let t = {};
        if (e) {
            let n = e.indexOf("#");
            n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
            let r = e.indexOf("?");
            r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e)
        }
        return t
    }

    function qw(e, t, n, r) {
        r === void 0 && (r = {});
        let {
            window: i = document.defaultView,
            v5Compat: o = !1
        } = r, a = i.history, u = Yn.Pop, c = null, p = m();
        p == null && (p = 0, a.replaceState(Zo({}, a.state, {
            idx: p
        }), ""));

        function m() {
            return (a.state || {
                idx: null
            }).idx
        }

        function g() {
            u = Yn.Pop;
            let S = m(),
                x = S == null ? null : S - p;
            p = S, c && c({
                action: u,
                location: k.location,
                delta: x
            })
        }

        function w(S, x) {
            u = Yn.Push;
            let y = Rc(k.location, S, x);
            p = m() + 1;
            let v = Y0(y, p),
                j = k.createHref(y);
            try {
                a.pushState(v, "", j)
            } catch (T) {
                if (T instanceof DOMException && T.name === "DataCloneError") throw T;
                i.location.assign(j)
            }
            o && c && c({
                action: u,
                location: k.location,
                delta: 1
            })
        }

        function N(S, x) {
            u = Yn.Replace;
            let y = Rc(k.location, S, x);
            p = m();
            let v = Y0(y, p),
                j = k.createHref(y);
            a.replaceState(v, "", j), o && c && c({
                action: u,
                location: k.location,
                delta: 0
            })
        }

        function _(S) {
            let x = i.location.origin !== "null" ? i.location.origin : i.location.href,
                y = typeof S == "string" ? S : $a(S);
            return y = y.replace(/ $/, "%20"), Be(x, "No window.location.(origin|href) available to create URL for href: " + y), new URL(y, x)
        }
        let k = {
            get action() {
                return u
            },
            get location() {
                return e(i, a)
            },
            listen(S) {
                if (c) throw new Error("A history only accepts one active listener");
                return i.addEventListener(Z0, g), c = S, () => {
                    i.removeEventListener(Z0, g), c = null
                }
            },
            createHref(S) {
                return t(i, S)
            },
            createURL: _,
            encodeLocation(S) {
                let x = _(S);
                return {
                    pathname: x.pathname,
                    search: x.search,
                    hash: x.hash
                }
            },
            push: w,
            replace: N,
            go(S) {
                return a.go(S)
            }
        };
        return k
    }
    var J0;
    (function(e) {
        e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
    })(J0 || (J0 = {}));

    function Gw(e, t, n) {
        return n === void 0 && (n = "/"), Xw(e, t, n, !1)
    }

    function Xw(e, t, n, r) {
        let i = typeof t == "string" ? Wi(t) : t,
            o = Zd(i.pathname || "/", n);
        if (o == null) return null;
        let a = Y2(e);
        e3(a);
        let u = null;
        for (let c = 0; u == null && c < a.length; ++c) {
            let p = d3(o);
            u = u3(a[c], p, r)
        }
        return u
    }

    function Y2(e, t, n, r) {
        t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
        let i = (o, a, u) => {
            let c = {
                relativePath: u === void 0 ? o.path || "" : u,
                caseSensitive: o.caseSensitive === !0,
                childrenIndex: a,
                route: o
            };
            c.relativePath.startsWith("/") && (Be(c.relativePath.startsWith(r), 'Absolute route path "' + c.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), c.relativePath = c.relativePath.slice(r.length));
            let p = or([r, c.relativePath]),
                m = n.concat(c);
            o.children && o.children.length > 0 && (Be(o.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + p + '".')), Y2(o.children, t, m, p)), !(o.path == null && !o.index) && t.push({
                path: p,
                score: a3(p, o.index),
                routesMeta: m
            })
        };
        return e.forEach((o, a) => {
            var u;
            if (o.path === "" || !((u = o.path) != null && u.includes("?"))) i(o, a);
            else
                for (let c of J2(o.path)) i(o, a, c)
        }), t
    }

    function J2(e) {
        let t = e.split("/");
        if (t.length === 0) return [];
        let [n, ...r] = t, i = n.endsWith("?"), o = n.replace(/\?$/, "");
        if (r.length === 0) return i ? [o, ""] : [o];
        let a = J2(r.join("/")),
            u = [];
        return u.push(...a.map(c => c === "" ? o : [o, c].join("/"))), i && u.push(...a), u.map(c => e.startsWith("/") && c === "" ? "/" : c)
    }

    function e3(e) {
        e.sort((t, n) => t.score !== n.score ? n.score - t.score : l3(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
    }
    const t3 = /^:[\w-]+$/,
        n3 = 3,
        r3 = 2,
        i3 = 1,
        o3 = 10,
        s3 = -2,
        q0 = e => e === "*";

    function a3(e, t) {
        let n = e.split("/"),
            r = n.length;
        return n.some(q0) && (r += s3), t && (r += r3), n.filter(i => !q0(i)).reduce((i, o) => i + (t3.test(o) ? n3 : o === "" ? i3 : o3), r)
    }

    function l3(e, t) {
        return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i]) ? e[e.length - 1] - t[t.length - 1] : 0
    }

    function u3(e, t, n) {
        let {
            routesMeta: r
        } = e, i = {}, o = "/", a = [];
        for (let u = 0; u < r.length; ++u) {
            let c = r[u],
                p = u === r.length - 1,
                m = o === "/" ? t : t.slice(o.length) || "/",
                g = G0({
                    path: c.relativePath,
                    caseSensitive: c.caseSensitive,
                    end: p
                }, m),
                w = c.route;
            if (!g && p && n && !r[r.length - 1].route.index && (g = G0({
                    path: c.relativePath,
                    caseSensitive: c.caseSensitive,
                    end: !1
                }, m)), !g) return null;
            Object.assign(i, g.params), a.push({
                params: i,
                pathname: or([o, g.pathname]),
                pathnameBase: m3(or([o, g.pathnameBase])),
                route: w
            }), g.pathnameBase !== "/" && (o = or([o, g.pathnameBase]))
        }
        return a
    }

    function G0(e, t) {
        typeof e == "string" && (e = {
            path: e,
            caseSensitive: !1,
            end: !0
        });
        let [n, r] = c3(e.path, e.caseSensitive, e.end), i = t.match(n);
        if (!i) return null;
        let o = i[0],
            a = o.replace(/(.)\/+$/, "$1"),
            u = i.slice(1);
        return {
            params: r.reduce((p, m, g) => {
                let {
                    paramName: w,
                    isOptional: N
                } = m;
                if (w === "*") {
                    let k = u[g] || "";
                    a = o.slice(0, o.length - k.length).replace(/(.)\/+$/, "$1")
                }
                const _ = u[g];
                return N && !_ ? p[w] = void 0 : p[w] = (_ || "").replace(/%2F/g, "/"), p
            }, {}),
            pathname: o,
            pathnameBase: a,
            pattern: e
        }
    }

    function c3(e, t, n) {
        t === void 0 && (t = !1), n === void 0 && (n = !0), Z2(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
        let r = [],
            i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (a, u, c) => (r.push({
                paramName: u,
                isOptional: c != null
            }), c ? "/?([^\\/]+)?" : "/([^\\/]+)"));
        return e.endsWith("*") ? (r.push({
            paramName: "*"
        }), i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"), [new RegExp(i, t ? void 0 : "i"), r]
    }

    function d3(e) {
        try {
            return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
        } catch (t) {
            return Z2(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e
        }
    }

    function Zd(e, t) {
        if (t === "/") return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        let n = t.endsWith("/") ? t.length - 1 : t.length,
            r = e.charAt(n);
        return r && r !== "/" ? null : e.slice(n) || "/"
    }

    function f3(e, t) {
        t === void 0 && (t = "/");
        let {
            pathname: n,
            search: r = "",
            hash: i = ""
        } = typeof e == "string" ? Wi(e) : e;
        return {
            pathname: n ? n.startsWith("/") ? n : p3(n, t) : t,
            search: g3(r),
            hash: y3(i)
        }
    }

    function p3(e, t) {
        let n = t.replace(/\/+$/, "").split("/");
        return e.split("/").forEach(i => {
            i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i)
        }), n.length > 1 ? n.join("/") : "/"
    }

    function Pu(e, t, n, r) {
        return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
    }

    function h3(e) {
        return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0)
    }

    function Yd(e, t) {
        let n = h3(e);
        return t ? n.map((r, i) => i === n.length - 1 ? r.pathname : r.pathnameBase) : n.map(r => r.pathnameBase)
    }

    function Jd(e, t, n, r) {
        r === void 0 && (r = !1);
        let i;
        typeof e == "string" ? i = Wi(e) : (i = Zo({}, e), Be(!i.pathname || !i.pathname.includes("?"), Pu("?", "pathname", "search", i)), Be(!i.pathname || !i.pathname.includes("#"), Pu("#", "pathname", "hash", i)), Be(!i.search || !i.search.includes("#"), Pu("#", "search", "hash", i)));
        let o = e === "" || i.pathname === "",
            a = o ? "/" : i.pathname,
            u;
        if (a == null) u = n;
        else {
            let g = t.length - 1;
            if (!r && a.startsWith("..")) {
                let w = a.split("/");
                for (; w[0] === "..";) w.shift(), g -= 1;
                i.pathname = w.join("/")
            }
            u = g >= 0 ? t[g] : "/"
        }
        let c = f3(i, u),
            p = a && a !== "/" && a.endsWith("/"),
            m = (o || a === ".") && n.endsWith("/");
        return !c.pathname.endsWith("/") && (p || m) && (c.pathname += "/"), c
    }
    const or = e => e.join("/").replace(/\/\/+/g, "/"),
        m3 = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
        g3 = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e,
        y3 = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;

    function v3(e) {
        return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e
    }
    const q2 = ["post", "put", "patch", "delete"];
    new Set(q2);
    const x3 = ["get", ...q2];
    new Set(x3);
    /**
     * React Router v6.28.0
     *
     * Copyright (c) Remix Software Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.md file in the root directory of this source tree.
     *
     * @license MIT
     */
    function Yo() {
        return Yo = Object.assign ? Object.assign.bind() : function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }, Yo.apply(this, arguments)
    }
    const qd = P.createContext(null),
        w3 = P.createContext(null),
        dr = P.createContext(null),
        dl = P.createContext(null),
        Dn = P.createContext({
            outlet: null,
            matches: [],
            isDataRoute: !1
        }),
        G2 = P.createContext(null);

    function _3(e, t) {
        let {
            relative: n
        } = t === void 0 ? {} : t;
        Ui() || Be(!1);
        let {
            basename: r,
            navigator: i
        } = P.useContext(dr), {
            hash: o,
            pathname: a,
            search: u
        } = eg(e, {
            relative: n
        }), c = a;
        return r !== "/" && (c = a === "/" ? r : or([r, a])), i.createHref({
            pathname: c,
            search: u,
            hash: o
        })
    }

    function Ui() {
        return P.useContext(dl) != null
    }

    function Vi() {
        return Ui() || Be(!1), P.useContext(dl).location
    }

    function X2(e) {
        P.useContext(dr).static || P.useLayoutEffect(e)
    }

    function fl() {
        let {
            isDataRoute: e
        } = P.useContext(Dn);
        return e ? D3() : k3()
    }

    function k3() {
        Ui() || Be(!1);
        let e = P.useContext(qd),
            {
                basename: t,
                future: n,
                navigator: r
            } = P.useContext(dr),
            {
                matches: i
            } = P.useContext(Dn),
            {
                pathname: o
            } = Vi(),
            a = JSON.stringify(Yd(i, n.v7_relativeSplatPath)),
            u = P.useRef(!1);
        return X2(() => {
            u.current = !0
        }), P.useCallback(function(p, m) {
            if (m === void 0 && (m = {}), !u.current) return;
            if (typeof p == "number") {
                r.go(p);
                return
            }
            let g = Jd(p, JSON.parse(a), o, m.relative === "path");
            e == null && t !== "/" && (g.pathname = g.pathname === "/" ? t : or([t, g.pathname])), (m.replace ? r.replace : r.push)(g, m.state, m)
        }, [t, r, a, o, e])
    }
    const C3 = P.createContext(null);

    function S3(e) {
        let t = P.useContext(Dn).outlet;
        return t && P.createElement(C3.Provider, {
            value: e
        }, t)
    }

    function eg(e, t) {
        let {
            relative: n
        } = t === void 0 ? {} : t, {
            future: r
        } = P.useContext(dr), {
            matches: i
        } = P.useContext(Dn), {
            pathname: o
        } = Vi(), a = JSON.stringify(Yd(i, r.v7_relativeSplatPath));
        return P.useMemo(() => Jd(e, JSON.parse(a), o, n === "path"), [e, a, o, n])
    }

    function E3(e, t) {
        return b3(e, t)
    }

    function b3(e, t, n, r) {
        Ui() || Be(!1);
        let {
            navigator: i
        } = P.useContext(dr), {
            matches: o
        } = P.useContext(Dn), a = o[o.length - 1], u = a ? a.params : {};
        a && a.pathname;
        let c = a ? a.pathnameBase : "/";
        a && a.route;
        let p = Vi(),
            m;
        if (t) {
            var g;
            let S = typeof t == "string" ? Wi(t) : t;
            c === "/" || (g = S.pathname) != null && g.startsWith(c) || Be(!1), m = S
        } else m = p;
        let w = m.pathname || "/",
            N = w;
        if (c !== "/") {
            let S = c.replace(/^\//, "").split("/");
            N = "/" + w.replace(/^\//, "").split("/").slice(S.length).join("/")
        }
        let _ = Gw(e, {
                pathname: N
            }),
            k = A3(_ && _.map(S => Object.assign({}, S, {
                params: Object.assign({}, u, S.params),
                pathname: or([c, i.encodeLocation ? i.encodeLocation(S.pathname).pathname : S.pathname]),
                pathnameBase: S.pathnameBase === "/" ? c : or([c, i.encodeLocation ? i.encodeLocation(S.pathnameBase).pathname : S.pathnameBase])
            })), o, n, r);
        return t && k ? P.createElement(dl.Provider, {
            value: {
                location: Yo({
                    pathname: "/",
                    search: "",
                    hash: "",
                    state: null,
                    key: "default"
                }, m),
                navigationType: Yn.Pop
            }
        }, k) : k
    }

    function N3() {
        let e = I3(),
            t = v3(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
            n = e instanceof Error ? e.stack : null,
            i = {
                padding: "0.5rem",
                backgroundColor: "rgba(200,200,200, 0.5)"
            };
        return P.createElement(P.Fragment, null, P.createElement("h2", null, "Unexpected Application Error!"), P.createElement("h3", {
            style: {
                fontStyle: "italic"
            }
        }, t), n ? P.createElement("pre", {
            style: i
        }, n) : null, null)
    }
    const j3 = P.createElement(N3, null);
    class T3 extends P.Component {
        constructor(t) {
            super(t), this.state = {
                location: t.location,
                revalidation: t.revalidation,
                error: t.error
            }
        }
        static getDerivedStateFromError(t) {
            return {
                error: t
            }
        }
        static getDerivedStateFromProps(t, n) {
            return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
                error: t.error,
                location: t.location,
                revalidation: t.revalidation
            } : {
                error: t.error !== void 0 ? t.error : n.error,
                location: n.location,
                revalidation: t.revalidation || n.revalidation
            }
        }
        componentDidCatch(t, n) {
            console.error("React Router caught the following error during render", t, n)
        }
        render() {
            return this.state.error !== void 0 ? P.createElement(Dn.Provider, {
                value: this.props.routeContext
            }, P.createElement(G2.Provider, {
                value: this.state.error,
                children: this.props.component
            })) : this.props.children
        }
    }

    function L3(e) {
        let {
            routeContext: t,
            match: n,
            children: r
        } = e, i = P.useContext(qd);
        return i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = n.route.id), P.createElement(Dn.Provider, {
            value: t
        }, r)
    }

    function A3(e, t, n, r) {
        var i;
        if (t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null) {
            var o;
            if (!n) return null;
            if (n.errors) e = n.matches;
            else if ((o = r) != null && o.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0) e = n.matches;
            else return null
        }
        let a = e,
            u = (i = n) == null ? void 0 : i.errors;
        if (u != null) {
            let m = a.findIndex(g => g.route.id && (u == null ? void 0 : u[g.route.id]) !== void 0);
            m >= 0 || Be(!1), a = a.slice(0, Math.min(a.length, m + 1))
        }
        let c = !1,
            p = -1;
        if (n && r && r.v7_partialHydration)
            for (let m = 0; m < a.length; m++) {
                let g = a[m];
                if ((g.route.HydrateFallback || g.route.hydrateFallbackElement) && (p = m), g.route.id) {
                    let {
                        loaderData: w,
                        errors: N
                    } = n, _ = g.route.loader && w[g.route.id] === void 0 && (!N || N[g.route.id] === void 0);
                    if (g.route.lazy || _) {
                        c = !0, p >= 0 ? a = a.slice(0, p + 1) : a = [a[0]];
                        break
                    }
                }
            }
        return a.reduceRight((m, g, w) => {
            let N, _ = !1,
                k = null,
                S = null;
            n && (N = u && g.route.id ? u[g.route.id] : void 0, k = g.route.errorElement || j3, c && (p < 0 && w === 0 ? (_ = !0, S = null) : p === w && (_ = !0, S = g.route.hydrateFallbackElement || null)));
            let x = t.concat(a.slice(0, w + 1)),
                y = () => {
                    let v;
                    return N ? v = k : _ ? v = S : g.route.Component ? v = P.createElement(g.route.Component, null) : g.route.element ? v = g.route.element : v = m, P.createElement(L3, {
                        match: g,
                        routeContext: {
                            outlet: m,
                            matches: x,
                            isDataRoute: n != null
                        },
                        children: v
                    })
                };
            return n && (g.route.ErrorBoundary || g.route.errorElement || w === 0) ? P.createElement(T3, {
                location: n.location,
                revalidation: n.revalidation,
                component: k,
                error: N,
                children: y(),
                routeContext: {
                    outlet: null,
                    matches: x,
                    isDataRoute: !0
                }
            }) : y()
        }, null)
    }
    var tg = function(e) {
            return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e
        }(tg || {}),
        za = function(e) {
            return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e
        }(za || {});

    function P3(e) {
        let t = P.useContext(qd);
        return t || Be(!1), t
    }

    function O3(e) {
        let t = P.useContext(w3);
        return t || Be(!1), t
    }

    function R3(e) {
        let t = P.useContext(Dn);
        return t || Be(!1), t
    }

    function ng(e) {
        let t = R3(),
            n = t.matches[t.matches.length - 1];
        return n.route.id || Be(!1), n.route.id
    }

    function I3() {
        var e;
        let t = P.useContext(G2),
            n = O3(za.UseRouteError),
            r = ng(za.UseRouteError);
        return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
    }

    function D3() {
        let {
            router: e
        } = P3(tg.UseNavigateStable), t = ng(za.UseNavigateStable), n = P.useRef(!1);
        return X2(() => {
            n.current = !0
        }), P.useCallback(function(i, o) {
            o === void 0 && (o = {}), n.current && (typeof i == "number" ? e.navigate(i) : e.navigate(i, Yo({
                fromRouteId: t
            }, o)))
        }, [e, t])
    }
    const X0 = {};

    function B3(e, t) {
        X0[t] || (X0[t] = !0, console.warn(t))
    }
    const eh = (e, t, n) => B3(e, "⚠️ React Router Future Flag Warning: " + t + ". " + ("You can use the `" + e + "` future flag to opt-in early. ") + ("For more information, see " + n + "."));

    function M3(e, t) {
        e != null && e.v7_startTransition || eh("v7_startTransition", "React Router will begin wrapping state updates in `React.startTransition` in v7", "https://reactrouter.com/v6/upgrading/future#v7_starttransition"), !(e != null && e.v7_relativeSplatPath) && !t && eh("v7_relativeSplatPath", "Relative route resolution within Splat routes is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath")
    }

    function F3(e) {
        let {
            to: t,
            replace: n,
            state: r,
            relative: i
        } = e;
        Ui() || Be(!1);
        let {
            future: o,
            static: a
        } = P.useContext(dr), {
            matches: u
        } = P.useContext(Dn), {
            pathname: c
        } = Vi(), p = fl(), m = Jd(t, Yd(u, o.v7_relativeSplatPath), c, i === "path"), g = JSON.stringify(m);
        return P.useEffect(() => p(JSON.parse(g), {
            replace: n,
            state: r,
            relative: i
        }), [p, g, i, n, r]), null
    }

    function Gd(e) {
        return S3(e.context)
    }

    function mn(e) {
        Be(!1)
    }

    function $3(e) {
        let {
            basename: t = "/",
            children: n = null,
            location: r,
            navigationType: i = Yn.Pop,
            navigator: o,
            static: a = !1,
            future: u
        } = e;
        Ui() && Be(!1);
        let c = t.replace(/^\/*/, "/"),
            p = P.useMemo(() => ({
                basename: c,
                navigator: o,
                static: a,
                future: Yo({
                    v7_relativeSplatPath: !1
                }, u)
            }), [c, u, o, a]);
        typeof r == "string" && (r = Wi(r));
        let {
            pathname: m = "/",
            search: g = "",
            hash: w = "",
            state: N = null,
            key: _ = "default"
        } = r, k = P.useMemo(() => {
            let S = Zd(m, c);
            return S == null ? null : {
                location: {
                    pathname: S,
                    search: g,
                    hash: w,
                    state: N,
                    key: _
                },
                navigationType: i
            }
        }, [c, m, g, w, N, _, i]);
        return k == null ? null : P.createElement(dr.Provider, {
            value: p
        }, P.createElement(dl.Provider, {
            children: n,
            value: k
        }))
    }

    function z3(e) {
        let {
            children: t,
            location: n
        } = e;
        return E3(Ic(t), n)
    }
    new Promise(() => {});

    function Ic(e, t) {
        t === void 0 && (t = []);
        let n = [];
        return P.Children.forEach(e, (r, i) => {
            if (!P.isValidElement(r)) return;
            let o = [...t, i];
            if (r.type === P.Fragment) {
                n.push.apply(n, Ic(r.props.children, o));
                return
            }
            r.type !== mn && Be(!1), !r.props.index || !r.props.children || Be(!1);
            let a = {
                id: r.props.id || o.join("-"),
                caseSensitive: r.props.caseSensitive,
                element: r.props.element,
                Component: r.props.Component,
                index: r.props.index,
                path: r.props.path,
                loader: r.props.loader,
                action: r.props.action,
                errorElement: r.props.errorElement,
                ErrorBoundary: r.props.ErrorBoundary,
                hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
                shouldRevalidate: r.props.shouldRevalidate,
                handle: r.props.handle,
                lazy: r.props.lazy
            };
            r.props.children && (a.children = Ic(r.props.children, o)), n.push(a)
        }), n
    }
    /**
     * React Router DOM v6.28.0
     *
     * Copyright (c) Remix Software Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.md file in the root directory of this source tree.
     *
     * @license MIT
     */
    function Dc() {
        return Dc = Object.assign ? Object.assign.bind() : function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }, Dc.apply(this, arguments)
    }

    function H3(e, t) {
        if (e == null) return {};
        var n = {},
            r = Object.keys(e),
            i, o;
        for (o = 0; o < r.length; o++) i = r[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
        return n
    }

    function W3(e) {
        return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
    }

    function U3(e, t) {
        return e.button === 0 && (!t || t === "_self") && !W3(e)
    }
    const V3 = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"],
        K3 = "6";
    try {
        window.__reactRouterVersion = K3
    } catch {}
    const Q3 = "startTransition",
        th = Bv[Q3];

    function Z3(e) {
        let {
            basename: t,
            children: n,
            future: r,
            window: i
        } = e, o = P.useRef();
        o.current == null && (o.current = Yw({
            window: i,
            v5Compat: !0
        }));
        let a = o.current,
            [u, c] = P.useState({
                action: a.action,
                location: a.location
            }),
            {
                v7_startTransition: p
            } = r || {},
            m = P.useCallback(g => {
                p && th ? th(() => c(g)) : c(g)
            }, [c, p]);
        return P.useLayoutEffect(() => a.listen(m), [a, m]), P.useEffect(() => M3(r), [r]), P.createElement($3, {
            basename: t,
            children: n,
            location: u.location,
            navigationType: u.action,
            navigator: a,
            future: r
        })
    }
    const Y3 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
        J3 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        Pr = P.forwardRef(function(t, n) {
            let {
                onClick: r,
                relative: i,
                reloadDocument: o,
                replace: a,
                state: u,
                target: c,
                to: p,
                preventScrollReset: m,
                viewTransition: g
            } = t, w = H3(t, V3), {
                basename: N
            } = P.useContext(dr), _, k = !1;
            if (typeof p == "string" && J3.test(p) && (_ = p, Y3)) try {
                let v = new URL(window.location.href),
                    j = p.startsWith("//") ? new URL(v.protocol + p) : new URL(p),
                    T = Zd(j.pathname, N);
                j.origin === v.origin && T != null ? p = T + j.search + j.hash : k = !0
            } catch {}
            let S = _3(p, {
                    relative: i
                }),
                x = q3(p, {
                    replace: a,
                    state: u,
                    target: c,
                    preventScrollReset: m,
                    relative: i,
                    viewTransition: g
                });

            function y(v) {
                r && r(v), v.defaultPrevented || x(v)
            }
            return P.createElement("a", Dc({}, w, {
                href: _ || S,
                onClick: k || o ? r : y,
                ref: n,
                target: c
            }))
        });
    var nh;
    (function(e) {
        e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState"
    })(nh || (nh = {}));
    var rh;
    (function(e) {
        e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
    })(rh || (rh = {}));

    function q3(e, t) {
        let {
            target: n,
            replace: r,
            state: i,
            preventScrollReset: o,
            relative: a,
            viewTransition: u
        } = t === void 0 ? {} : t, c = fl(), p = Vi(), m = eg(e, {
            relative: a
        });
        return P.useCallback(g => {
            if (U3(g, n)) {
                g.preventDefault();
                let w = r !== void 0 ? r : $a(p) === $a(m);
                c(e, {
                    replace: w,
                    state: i,
                    preventScrollReset: o,
                    relative: a,
                    viewTransition: u
                })
            }
        }, [p, c, m, r, i, n, e, o, a, u])
    }
    const G3 = "data:image/webp;base64,UklGRvYMAABXRUJQVlA4IOoMAAAwuwCdASqwBHQBPjEYi0QiIaEQaDQYIAMEtLd+JYwmfT5MXNfJbvv/+3XrPi18A8/93/0//T/YnbQD1w6f/n/IOh1678/HSH6iM4g9/tGfoO5//oM///Q7adhT2NEeBkFf/a8f+99/zgA2pqJ+SQpktA+9tdmlMQk/vXVaswuC0D7368ceVZ+wZsjNKZdIvJ2fUrP4WBAgQIEB5FNprHl/L/fZcFixYsWLFixYsWLFixYxn3SOVoJR/W2ODug/IONdLTPZxBb/fiUuGX4IUhEGz4BiFP+63AR2gYVMmTJkyZMmTJkyZMmS8KhQriYgxhy+h6ko4XYNe1CCOKGFtJI3XChiVRLLr3V8OWqmFIxLjsUxnyXzJXRG5iJ1NsTBImjMKZMmTJkyZMmTJkyZJB7E6s+Awq3K8mBBu6/Yh40kJGfyDuKm9hyFyFGpC3z6zAjnFJdt9UY2jAEdrBLuPhYsWLFixYsWLFixYsWZtow+KBdYL2TW5XnV5jejc5/MA4YzhRtxPnL1zztxIA8lNZj27d08qI4eJO/giK/w4tmzZs2bNmzZs2bNmzbfI/9rW+oUVPqdRxA8ixoc7r+r0RlxRfTXi39l7C8lJznO0tnHkK1uECBAgQIECBAgQIECBAaehOz4K6L3HcWGHMejV+m4vzQx20B7jpTfbc7kKHRXzF131u3Jr+xYzTLoYGL/OEmzZs2bNmzZs2bNmzbHSjBZVOE4WeNk6FXvr3fXShqF/jkkbsGwAvj7JikK6q5JsnK81uPaLEHPBnGrwgQIECBAgQIECBAgQekpkTsPLcmOZuycrw8MQ4Vo7yZckvUwmffgbtY2TovRX62VB5CtbR4BddtKKtWrVq1atWrVq1atW40Y+UoVdjDr77D3INpTV46mmWmNNf8W8BeHaxBeJsMwJMZj+XwMfah48lJ1EKmTJkyZMmTJkyZMmTiYxy8/c9dYhEyZgqdMgRggBmDyh0cRxMQEcvGcWo2oOV5r6NVMRFwWLFixYsWLFixYsWMZCnRSI7Rz47cse1GDMAEeNvd2jdIKrBhnEL+nzFy15obyXjZU9VoVMmTJkyZMmTJkyZMnExihvE03GAfMO2IjBvDy4yHYOTOTcTDpOc53zFpvnh6sNfq0YipcePHjx48ePHjx48hNFODT2YX0lJ40b7EJoqQozfuV4B8w7au1cbNw/sXcFs45MzaHiwrbFixYsWLFixYsWLFnbBT+5Q7+T722fHrAlTvSmsPJW2o+AfaxpKoE7a1+h5841sfQdTbFixYsWLFixYsWLFjQEQj6WPBcf7crzVYIY7WZGydrl5rZQIO0tfRMs2yANg4YYLI7Qn+VcGxBD29Yy6LCpkyZMmTJkyZMmTJmLpThc73LGm6Vqj3hhZpNh/smaviMdCXNKEzduRnDCHi1MJgo+Ze8RNYX2C2B5LZDbFixYsWLFixYsWLFjSmaElrPS2nWnfOVhYYEiIhzJ1r/xATl2hFjPeVD7JiJnX/e+wFt1Om/36bESiZMmTJkyZMmTJkyZM9u6cdOwhKcA258PSdEiILSg4Mmp+DDrlgsRKd4ssBlHzETo2Im6baidGhqaNmzZs2bNmzZs2bNmzcjEbSZ8abKmw7a0XBW68WIOWYBQJ+kNG+4edyZx7W7PGnknT9wahniBAgQIECBAgQIECA/ylK9VzAjWbEYp03+NXc0ocGwLbunlu1kzzthiTISlDIWV7M92nlgYNpp4tRq86vLisFixYsWLFixYsWLFiwZN2k5C2f0OnahFobzpXddsQOTDDlTqoK66vwNpyfkkAfo74zVykdo52mjQuSNYIusdk63uIECBAgQIECBAgQIEkMWvjACEl7g4O/JA5Gh1KirXLEyQZ0a1Shh6fnXG8mFDlL6GPM+PgisNJsnPXJ8E+SXZtOzXHRIkSJEiRIkSJEiRLUMYCO0gXglbTv5Lj3XpJnthIS0k6jQxtpEaun7207xeooigFiydSGQIECBAgQIECBAgQIEBwAA/v8qyD//mwP+sf+sfLj//9Ch//oUP/9Ch/6E+kNFt+bTzqcFBhHATvPK6/7yxmgVqMm4yWMUrgHJ29Mre6twFRASPfEKI5P/Y7vvQn+ZPyi06RteQFaOqWKixqyWBI+2Fg5eBdDCY2kts6v8iGWwTUv6t/U6Ob9wh+2cTwUPh/RS+FMqf+ghbyybvvpy4Wjj+xtz7Sf8YF55sQ7k3V276K5O66uGt9FA6ycd+jQnwex8U8s1a1HHZX1DU74ARCAAASef6dygSZqf2okIqJm723q5JmpZNMc9WJnkSaxHlHyR6tdVvgOL4EUZD/yVWFBmfdSppl7BLdO6KH94AExm1aLP+UGlG/t1GLQTymjIJajciaF9RuUv9V1jAzSdZs3OFKFuCHgYADCedx+oNiNSzxlvzr7NidcWPX4efcJRvzBaiLvi8VKM4ffT61omGasHepb0sVDK+UZ1plo45uOxc5e1ng7ml5TCbtKtoJ6Zx5I4AAISRSc73TcCEY4LVNzPG1UknBN29HH3AQAAr52GEd9Bru7pnzW9zYVRkEu5KcA0GA1QX7cdPQmSZSDNHgv5JC7dh/1wt0dewZYDPL1I+LTlCSiqA5rRj3qOI8bKsb7IffMQ6tywGIABbYG9Iqf0AOD6ggQaDFkDaL3uUkA7W8DRMMc/ekN0NGfBipQrhM3RYnnEFI9r16bHXv7N6bgaBmVaHC9aj8b5fhTJchGgQABVW8KYvW8Dm7BVs9sCqy6ciVbRPiDmhV3SB8YxtsTaMF9/3rfWG0YWTnGqNeqfsaZd0CjNJslL6lNlZvg0GoXI1qCAGEZT3hKoX1GfEN+4l0Hihyyx53kt6W7sBmHw+dksS4OUf6LeZ7yh+N+p/YJbWiyPhAZ0k2EQuRBAAf1Q3f4nNFtYt2Md0DsoiqRIFhT6L6CL31cuzUAMluU++TJaq7ckKv6Cl/u6PaVOJFD83KRKYwSSL1P8KydZwfwABEZOedTuNbJTtXBDy/JWn/RQj0SeUCB5kSXeVRw/g1gItLQrCshOXqQZaeVsRrkJdyfrUceF9y33BJxOGKdl+yXEAAA6SGCHj1WLrsZXQ3e0joyxVuos1GfDvDDP+4xyZWjmhWMXLdCw0IJzazDgg6x0fVuXjVrEM3RTxW5kkhsvvwABBlUY9dIYhRT3q93YzFZEospdKjhKl/stps7h6oz/VTzSFsajzSvnAkchMjWAB73atVkGlcIABjoRtd7UWtJ/aFDC1gIVkHj9pm1kuDuNBHC3LrIUdNgC8po2MBdQiAACbguiHOiHTXwM713m9uAJrpgkLEnjvtVIPmwQ3WP4Uxay1HaW7mZ6zOrfiBsZwhAACiycI6KHA6dZ4LGJYPCIayAeRmMq5iv3uZF3slH+oEpDpfBB9jdOxhf15ni2K1nNS1xX+u0BBRiooP6AAD77zjQd6DgQfa4Vv7TX6WUhn+iIcUxWv7j8coc1OG1Fd9rZYWJ9oHef25xkH06fD38jxImxPgIz06YDOggABv3FBrXshXkfV20Gy8objY3xGgZWyeFdPC1Wsr/arJx0noSRIfZsBSXW0k3Pp7Q8tmRA4tcYPEaCdBqZJBrllS+iAAYoMfKNSp8vzxPN/V6jr15n3Xh5XQjQoDtiKXnpDprJwSyMJvYq9mmpoiv1+dm9F/jYd4PUpNzmZGso8E4Toowkml+1oSCZEHWjEAATY4+witcVBwgLCpz7J/iSSCImP/A4+Zm+qK8u4V0ezvsKcWprpjOg/rdkn61lvA82Exm2NN7IdWG1sUrxAAFyM7mlFXB5m4CFyLT+zQRDEsFGN2jPqMZSCS/4+3C4NUULn8ifZY4Na/Zyaq41taIhtmb3YrH1cC85YXD3m0Z1+fAvttcvRmbi4SwABE/I+760NIFBkBYcofE7y5OX4LJKgshRQ2bAZB3SZKzcNaIZ5eFW5CpKpRiH6UF0X/TXr64Mmt/B8LmJOcE7RVrZ7ZOH8WsSjKvHIYACWKE7Sabq04V3HlpXAjh/fTp42M7zVc7eGsI7AJB/6D9uJdhZRooKKSSgbcI6zrzcS9Bu5AvZEw+5XmN5/hRe3MPo4QDws/iyJpWeyADHVrx/QC2oKJJnkkgHI4qfsQfVb22ur+AJtZRwUa4mBj+VkNB5jk7msrWjszwphbkyaMZBh9z++tf9p4DoAQuNusT3pgozR3I6zMCxoAAEIcZU8Fit75jN5dwFON3EpiNlv6FL0T+tbJu0P7APn3+3L/0qTrCj6Lz8EreVFK9h0pQ+/uO/eMI/HAoH0EirKukwJ/nCAmrHHTO2YAAXbFPdBozykE3gI89gH/qhnRCmpyXiku55bsoCJrVWN6BlSb8XrHbdhwWfFRWNzMUrb0xrezUgZkFk1//yAvvQbZYAAAAAAAA=",
        X3 = "static/assets/BGHeroSection-ySh9vpo4.webp",
        e4 = "data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='40'%20height='40'%20rx='20'%20fill='%23FFF7CC'/%3e%3cpath%20d='M22.35%2010H17.65C16.61%2010%2015.76%2010.84%2015.76%2011.88V12.82C15.76%2013.86%2016.6%2014.7%2017.64%2014.7H22.35C23.39%2014.7%2024.23%2013.86%2024.23%2012.82V11.88C24.24%2010.84%2023.39%2010%2022.35%2010Z'%20fill='%23FFC100'/%3e%3cpath%20d='M25.24%2012.8205C25.24%2014.4105%2023.94%2015.7105%2022.35%2015.7105H17.65C16.06%2015.7105%2014.76%2014.4105%2014.76%2012.8205C14.76%2012.2605%2014.16%2011.9105%2013.66%2012.1705C12.25%2012.9205%2011.29%2014.4105%2011.29%2016.1205V25.5305C11.29%2027.9905%2013.3%2030.0005%2015.76%2030.0005H24.24C26.7%2030.0005%2028.71%2027.9905%2028.71%2025.5305V16.1205C28.71%2014.4105%2027.75%2012.9205%2026.34%2012.1705C25.84%2011.9105%2025.24%2012.2605%2025.24%2012.8205ZM23.34%2020.7305L19.34%2024.7305C19.19%2024.8805%2019%2024.9505%2018.81%2024.9505C18.62%2024.9505%2018.43%2024.8805%2018.28%2024.7305L16.78%2023.2305C16.49%2022.9405%2016.49%2022.4605%2016.78%2022.1705C17.07%2021.8805%2017.55%2021.8805%2017.84%2022.1705L18.81%2023.1405L22.28%2019.6705C22.57%2019.3805%2023.05%2019.3805%2023.34%2019.6705C23.63%2019.9605%2023.63%2020.4405%2023.34%2020.7305Z'%20fill='%23FFC100'/%3e%3c/svg%3e",
        t4 = "data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='40'%20height='40'%20rx='20'%20fill='%23FFF1CD'/%3e%3cpath%20d='M25.39%2023.67L21.35%2020H18.64L14.6%2023.67C13.47%2024.69%2013.1%2026.26%2013.65%2027.68C14.2%2029.09%2015.54%2030%2017.05%2030H22.94C24.46%2030%2025.79%2029.09%2026.34%2027.68C26.89%2026.26%2026.52%2024.69%2025.39%2023.67ZM21.82%2026.14H18.18C17.8%2026.14%2017.5%2025.83%2017.5%2025.46C17.5%2025.09%2017.81%2024.78%2018.18%2024.78H21.82C22.2%2024.78%2022.5%2025.09%2022.5%2025.46C22.5%2025.83%2022.19%2026.14%2021.82%2026.14Z'%20fill='%23FF8A07'/%3e%3cpath%20d='M26.3499%2012.32C25.7999%2010.91%2024.4599%2010%2022.9499%2010H17.0499C15.5399%2010%2014.1999%2010.91%2013.6499%2012.32C13.1099%2013.74%2013.4799%2015.31%2014.6099%2016.33L18.6499%2020H21.3599L25.3999%2016.33C26.5199%2015.31%2026.8899%2013.74%2026.3499%2012.32ZM21.8199%2015.23H18.1799C17.7999%2015.23%2017.4999%2014.92%2017.4999%2014.55C17.4999%2014.18%2017.8099%2013.87%2018.1799%2013.87H21.8199C22.1999%2013.87%2022.4999%2014.18%2022.4999%2014.55C22.4999%2014.92%2022.1899%2015.23%2021.8199%2015.23Z'%20fill='%23FF8A07'/%3e%3c/svg%3e",
        n4 = "data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='40'%20height='40'%20rx='20'%20fill='%23FCDDCC'/%3e%3cpath%20d='M24.19%2010H15.81C12.17%2010%2010%2012.17%2010%2015.81V24.18C10%2027.83%2012.17%2030%2015.81%2030H24.18C27.82%2030%2029.99%2027.83%2029.99%2024.19V15.81C30%2012.17%2027.83%2010%2024.19%2010ZM18.95%2025.51C18.66%2025.8%2018.11%2026.08%2017.71%2026.14L15.25%2026.49C15.16%2026.5%2015.07%2026.51%2014.98%2026.51C14.57%2026.51%2014.19%2026.37%2013.92%2026.1C13.59%2025.77%2013.45%2025.29%2013.53%2024.76L13.88%2022.3C13.94%2021.89%2014.21%2021.35%2014.51%2021.06L18.97%2016.6C19.05%2016.81%2019.13%2017.02%2019.24%2017.26C19.34%2017.47%2019.45%2017.69%2019.57%2017.89C19.67%2018.06%2019.78%2018.22%2019.87%2018.34C19.98%2018.51%2020.11%2018.67%2020.19%2018.76C20.24%2018.83%2020.28%2018.88%2020.3%2018.9C20.55%2019.2%2020.84%2019.48%2021.09%2019.69C21.16%2019.76%2021.2%2019.8%2021.22%2019.81C21.37%2019.93%2021.52%2020.05%2021.65%2020.14C21.81%2020.26%2021.97%2020.37%2022.14%2020.46C22.34%2020.58%2022.56%2020.69%2022.78%2020.8C23.01%2020.9%2023.22%2020.99%2023.43%2021.06L18.95%2025.51ZM25.37%2019.09L24.45%2020.02C24.39%2020.08%2024.31%2020.11%2024.23%2020.11C24.2%2020.11%2024.16%2020.11%2024.14%2020.1C22.11%2019.52%2020.49%2017.9%2019.91%2015.87C19.88%2015.76%2019.91%2015.64%2019.99%2015.57L20.92%2014.64C22.44%2013.12%2023.89%2013.15%2025.38%2014.64C26.14%2015.4%2026.51%2016.13%2026.51%2016.89C26.5%2017.61%2026.13%2018.33%2025.37%2019.09Z'%20fill='%23C40C0C'/%3e%3c/svg%3e",
        r4 = "data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='40'%20height='40'%20rx='20'%20fill='%23FFECCC'/%3e%3cpath%20d='M26%2011H14C11.79%2011%2010%2012.78%2010%2014.97V25.03C10%2027.22%2011.79%2029%2014%2029H26C28.21%2029%2030%2027.22%2030%2025.03V14.97C30%2012.78%2028.21%2011%2026%2011ZM16.5%2015.17C17.77%2015.17%2018.81%2016.21%2018.81%2017.48C18.81%2018.75%2017.77%2019.79%2016.5%2019.79C15.23%2019.79%2014.19%2018.75%2014.19%2017.48C14.19%2016.21%2015.23%2015.17%2016.5%2015.17ZM20.37%2024.66C20.28%2024.76%2020.14%2024.82%2020%2024.82H13C12.86%2024.82%2012.72%2024.76%2012.63%2024.66C12.54%2024.56%2012.49%2024.42%2012.5%2024.28C12.67%2022.6%2014.01%2021.27%2015.69%2021.11C16.22%2021.06%2016.77%2021.06%2017.3%2021.11C18.98%2021.27%2020.33%2022.6%2020.49%2024.28C20.51%2024.42%2020.46%2024.56%2020.37%2024.66ZM27%2024.75H25C24.59%2024.75%2024.25%2024.41%2024.25%2024C24.25%2023.59%2024.59%2023.25%2025%2023.25H27C27.41%2023.25%2027.75%2023.59%2027.75%2024C27.75%2024.41%2027.41%2024.75%2027%2024.75ZM27%2020.75H23C22.59%2020.75%2022.25%2020.41%2022.25%2020C22.25%2019.59%2022.59%2019.25%2023%2019.25H27C27.41%2019.25%2027.75%2019.59%2027.75%2020C27.75%2020.41%2027.41%2020.75%2027%2020.75ZM27%2016.75H22C21.59%2016.75%2021.25%2016.41%2021.25%2016C21.25%2015.59%2021.59%2015.25%2022%2015.25H27C27.41%2015.25%2027.75%2015.59%2027.75%2016C27.75%2016.41%2027.41%2016.75%2027%2016.75Z'%20fill='%23FF6501'/%3e%3c/svg%3e",
        i4 = "static/assets/ImageAboutLaporke-BTN-_yza.webp",
        rg = "static/assets/ImageBerhasilInput-tW3WXA8z.png",
        o4 = "static/assets/ImageLogin-CUsoSAD0.png",
        s4 = "static/assets/ImagesTidakAdaPencarian-DdjfqaZu.png",
        a4 = "static/assets/ImageTidakAdaLaporan-pQ8oDzRS.png",
        l4 = "data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M10.8034%2018.1829C10.5474%2018.1829%2010.2914%2018.0856%2010.0967%2017.8896C9.70604%2017.4989%209.70604%2016.8669%2010.0967%2016.4763L16.486%2010.0869C16.8767%209.69628%2017.5087%209.69628%2017.8994%2010.0869C18.29%2010.4776%2018.29%2011.1096%2017.8994%2011.5003L11.51%2017.8896C11.3154%2018.0856%2011.0594%2018.1829%2010.8034%2018.1829'%20fill='%23828282'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M17.1954%2018.1867C16.9394%2018.1867%2016.6834%2018.0893%2016.4887%2017.8933L10.094%2011.4973C9.70336%2011.1067%209.70336%2010.4747%2010.094%2010.084C10.486%209.69335%2011.118%209.69335%2011.5074%2010.084L17.902%2016.48C18.2927%2016.8707%2018.2927%2017.5027%2017.902%2017.8933C17.7074%2018.0893%2017.45%2018.1867%2017.1954%2018.1867'%20fill='%23828282'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M8.22002%202.66699C4.84669%202.66699%202.66669%204.97766%202.66669%208.55499V19.4457C2.66669%2023.023%204.84669%2025.3337%208.22002%2025.3337H19.7774C23.152%2025.3337%2025.3334%2023.023%2025.3334%2019.4457V8.55499C25.3334%204.97766%2023.152%202.66699%2019.7787%202.66699H8.22002ZM19.7774%2027.3337H8.22002C3.70135%2027.3337%200.666687%2024.163%200.666687%2019.4457V8.55499C0.666687%203.83766%203.70135%200.666992%208.22002%200.666992H19.7787C24.2974%200.666992%2027.3334%203.83766%2027.3334%208.55499V19.4457C27.3334%2024.163%2024.2974%2027.3337%2019.7774%2027.3337V27.3337Z'%20fill='%23828282'/%3e%3c/svg%3e",
        u4 = "data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M23.2168%2015.75H4.7835C3.0335%2015.75%202.3335%2016.4967%202.3335%2018.3517V23.065C2.3335%2024.92%203.0335%2025.6667%204.7835%2025.6667H23.2168C24.9668%2025.6667%2025.6668%2024.92%2025.6668%2023.065V18.3517C25.6668%2016.4967%2024.9668%2015.75%2023.2168%2015.75Z'%20stroke='%23292D32'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M23.2168%202.33331H4.7835C3.0335%202.33331%202.3335%203.07998%202.3335%204.93498V9.64831C2.3335%2011.5033%203.0335%2012.25%204.7835%2012.25H23.2168C24.9668%2012.25%2025.6668%2011.5033%2025.6668%209.64831V4.93498C25.6668%203.07998%2024.9668%202.33331%2023.2168%202.33331Z'%20stroke='%23292D32'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
        c4 = "data:image/svg+xml,%3csvg%20width='72'%20height='72'%20viewBox='0%200%2072%2072'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M24%2036.6H45'%20stroke='white'%20stroke-width='4'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M24%2048.6H37.14'%20stroke='white'%20stroke-width='4'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M30%2018H42C48%2018%2048%2015%2048%2012C48%206%2045%206%2042%206H30C27%206%2024%206%2024%2012C24%2018%2027%2018%2030%2018Z'%20stroke='white'%20stroke-width='4'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M48%2012.0601C57.99%2012.6001%2063%2016.2901%2063%2030.0001V48.0001C63%2060.0001%2060%2066.0001%2045%2066.0001H27C12%2066.0001%209%2060.0001%209%2048.0001V30.0001C9%2016.3201%2014.01%2012.6001%2024%2012.0601'%20stroke='white'%20stroke-width='4'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
        d4 = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%202V8L14%206'%20stroke='%23B4B4B4'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12%208L10%206'%20stroke='%23B4B4B4'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M7%2012C3%2012%203%2013.79%203%2016V17C3%2019.76%203%2022%208%2022H16C20%2022%2021%2019.76%2021%2017V16C21%2013.79%2021%2012%2017%2012C16%2012%2015.72%2012.21%2015.2%2012.6L14.18%2013.68C13%2014.94%2011%2014.94%209.81%2013.68L8.8%2012.6C8.28%2012.21%208%2012%207%2012Z'%20stroke='%23B4B4B4'%20stroke-width='1.5'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M5%2012V8.00001C5%205.99001%205%204.33001%208%204.04001'%20stroke='%23B4B4B4'%20stroke-width='1.5'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M19%2012V8.00001C19%205.99001%2019%204.33001%2016%204.04001'%20stroke='%23B4B4B4'%20stroke-width='1.5'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
        f4 = "data:image/svg+xml,%3csvg%20width='72'%20height='72'%20viewBox='0%200%2072%2072'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M27%2033V51L33%2045'%20stroke='white'%20stroke-width='4'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M27%2051L21%2045'%20stroke='white'%20stroke-width='4'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M66%2030V45C66%2060%2060%2066%2045%2066H27C12%2066%206%2060%206%2045V27C6%2012%2012%206%2027%206H42'%20stroke='white'%20stroke-width='4'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M66%2030H54C45%2030%2042%2027%2042%2018V6L66%2030Z'%20stroke='white'%20stroke-width='4'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
        p4 = "data:image/svg+xml,%3csvg%20width='72'%20height='72'%20viewBox='0%200%2072%2072'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M27%2051V33L21%2039'%20stroke='white'%20stroke-width='4'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M27%2033L33%2039'%20stroke='white'%20stroke-width='4'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M66%2030V45C66%2060%2060%2066%2045%2066H27C12%2066%206%2060%206%2045V27C6%2012%2012%206%2027%206H42'%20stroke='white'%20stroke-width='4'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M66%2030H54C45%2030%2042%2027%2042%2018V6L66%2030Z'%20stroke='white'%20stroke-width='4'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
        h4 = "data:image/svg+xml,%3csvg%20width='72'%20height='72'%20viewBox='0%200%2072%2072'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M27.9299%2044.1L32.4299%2048.6L44.4299%2036.6'%20stroke='white'%20stroke-width='4'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M30%2018H42C48%2018%2048%2015%2048%2012C48%206%2045%206%2042%206H30C27%206%2024%206%2024%2012C24%2018%2027%2018%2030%2018Z'%20stroke='white'%20stroke-width='4'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M48%2012.0601C57.99%2012.6001%2063%2016.2901%2063%2030.0001V48.0001C63%2060.0001%2060%2066.0001%2045%2066.0001H27C12%2066.0001%209%2060.0001%209%2048.0001V30.0001C9%2016.3201%2014.01%2012.6001%2024%2012.0601'%20stroke='white'%20stroke-width='4'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
        m4 = "static/assets/LogoLaporke-WIb5eWJJ.svg",
        g4 = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.8999%207.56C9.2099%203.96%2011.0599%202.49%2015.1099%202.49H15.2399C19.7099%202.49%2021.4999%204.28%2021.4999%208.75V15.27C21.4999%2019.74%2019.7099%2021.53%2015.2399%2021.53H15.1099C11.0899%2021.53%209.2399%2020.08%208.9099%2016.54'%20stroke='%23C40C0C'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M15.0001%2012H3.62012'%20stroke='%23C40C0C'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M5.85%208.65L2.5%2012L5.85%2015.35'%20stroke='%23C40C0C'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
        Bc = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_529_2548)'%3e%3cpath%20d='M20.9533%208.45C19.9033%203.83%2015.8733%201.75%2012.3333%201.75C12.3333%201.75%2012.3333%201.75%2012.3233%201.75C8.79335%201.75%204.75335%203.82%203.70335%208.44C2.53335%2013.6%205.69335%2017.97%208.55335%2020.72C9.61335%2021.74%2010.9733%2022.25%2012.3333%2022.25C13.6933%2022.25%2015.0533%2021.74%2016.1033%2020.72C18.9633%2017.97%2022.1233%2013.61%2020.9533%208.45ZM12.3333%2013.46C10.5933%2013.46%209.18335%2012.05%209.18335%2010.31C9.18335%208.57%2010.5933%207.16%2012.3333%207.16C14.0733%207.16%2015.4833%208.57%2015.4833%2010.31C15.4833%2012.05%2014.0733%2013.46%2012.3333%2013.46Z'%20fill='black'%20fill-opacity='0.7'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_529_2548'%3e%3crect%20width='24'%20height='24'%20fill='white'%20transform='translate(0.333374)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
        y4 = "data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.0267%203.87988C11.6133%203.87988%208.02666%207.46655%208.02666%2011.8799V15.7332C8.02666%2016.5466%207.67999%2017.7865%207.26666%2018.4799L5.73333%2021.0266C4.78666%2022.5999%205.44%2024.3466%207.17333%2024.9332C12.92%2026.8532%2019.12%2026.8532%2024.8667%2024.9332C26.48%2024.3999%2027.1867%2022.4932%2026.3067%2021.0266L24.7733%2018.4799C24.3733%2017.7865%2024.0267%2016.5466%2024.0267%2015.7332V11.8799C24.0267%207.47988%2020.4267%203.87988%2016.0267%203.87988Z'%20stroke='%23292D32'%20stroke-width='1.5'%20stroke-miterlimit='10'%20stroke-linecap='round'/%3e%3cpath%20d='M18.4934%204.26667C18.0801%204.14667%2017.6534%204.05334%2017.2134%204C15.9334%203.84%2014.7067%203.93334%2013.5601%204.26667C13.9467%203.28%2014.9067%202.58667%2016.0267%202.58667C17.1467%202.58667%2018.1067%203.28%2018.4934%204.26667Z'%20stroke='%23292D32'%20stroke-width='1.5'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M20.0266%2025.4133C20.0266%2027.6133%2018.2266%2029.4133%2016.0266%2029.4133C14.9333%2029.4133%2013.9199%2028.96%2013.1999%2028.24C12.4799%2027.52%2012.0266%2026.5067%2012.0266%2025.4133'%20stroke='%23292D32'%20stroke-width='1.5'%20stroke-miterlimit='10'/%3e%3c/svg%3e",
        v4 = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12.1601%2010.87C12.0601%2010.86%2011.9401%2010.86%2011.8301%2010.87C9.45006%2010.79%207.56006%208.84%207.56006%206.44C7.56006%203.99%209.54006%202%2012.0001%202C14.4501%202%2016.4401%203.99%2016.4401%206.44C16.4301%208.84%2014.5401%2010.79%2012.1601%2010.87Z'%20stroke='%23B4B4B4'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M7.16021%2014.56C4.74021%2016.18%204.74021%2018.82%207.16021%2020.43C9.91021%2022.27%2014.4202%2022.27%2017.1702%2020.43C19.5902%2018.81%2019.5902%2016.17%2017.1702%2014.56C14.4302%2012.73%209.92021%2012.73%207.16021%2014.56Z'%20stroke='%23B4B4B4'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
        x4 = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M17%2010H19C21%2010%2022%209%2022%207V5C22%203%2021%202%2019%202H17C15%202%2014%203%2014%205V7C14%209%2015%2010%2017%2010Z'%20stroke='%23B4B4B4'%20stroke-width='1.5'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M5%2022H7C9%2022%2010%2021%2010%2019V17C10%2015%209%2014%207%2014H5C3%2014%202%2015%202%2017V19C2%2021%203%2022%205%2022Z'%20stroke='%23B4B4B4'%20stroke-width='1.5'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M6%2010C8.20914%2010%2010%208.20914%2010%206C10%203.79086%208.20914%202%206%202C3.79086%202%202%203.79086%202%206C2%208.20914%203.79086%2010%206%2010Z'%20stroke='%23B4B4B4'%20stroke-width='1.5'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M18%2022C20.2091%2022%2022%2020.2091%2022%2018C22%2015.7909%2020.2091%2014%2018%2014C15.7909%2014%2014%2015.7909%2014%2018C14%2020.2091%2015.7909%2022%2018%2022Z'%20stroke='%23B4B4B4'%20stroke-width='1.5'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
        w4 = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11.5%2021C16.7467%2021%2021%2016.7467%2021%2011.5C21%206.25329%2016.7467%202%2011.5%202C6.25329%202%202%206.25329%202%2011.5C2%2016.7467%206.25329%2021%2011.5%2021Z'%20stroke='%23ADADAD'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M22%2022L20%2020'%20stroke='%23ADADAD'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
        _4 = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M8.75002%203.33306C7.31343%203.33306%205.93568%203.90374%204.91986%204.91956C3.90404%205.93538%203.33335%207.31313%203.33335%208.74972C3.33335%2010.1863%203.90404%2011.5641%204.91986%2012.5799C5.93568%2013.5957%207.31343%2014.1664%208.75002%2014.1664C10.1866%2014.1664%2011.5644%2013.5957%2012.5802%2012.5799C13.596%2011.5641%2014.1667%2010.1863%2014.1667%208.74972C14.1667%207.31313%2013.596%205.93538%2012.5802%204.91956C11.5644%203.90374%2010.1866%203.33306%208.75002%203.33306ZM1.66669%208.74972C1.66678%207.62022%201.93699%206.50711%202.45477%205.50327C2.97254%204.49943%203.72287%203.63397%204.64315%202.97909C5.56343%202.32421%206.62698%201.8989%207.74506%201.73865C8.86314%201.5784%2010.0033%201.68785%2011.0705%202.05787C12.1377%202.4279%2013.1009%203.04776%2013.8798%203.86575C14.6587%204.68375%2015.2307%205.67614%2015.548%206.76015C15.8654%207.84416%2015.9189%208.98834%2015.7041%2010.0972C15.4893%2011.2061%2015.0125%2012.2476%2014.3134%2013.1347L17.3567%2016.1781C17.5085%2016.3352%2017.5925%2016.5457%2017.5906%2016.7642C17.5887%2016.9827%2017.501%2017.1917%2017.3465%2017.3462C17.192%2017.5007%2016.983%2017.5884%2016.7645%2017.5903C16.546%2017.5922%2016.3355%2017.5082%2016.1784%2017.3564L13.135%2014.3131C12.0905%2015.1364%2010.8354%2015.649%209.51313%2015.7923C8.1909%2015.9356%206.85504%2015.7037%205.65843%2015.1232C4.46183%2014.5428%203.45282%2013.6371%202.74688%2012.51C2.04094%2011.3828%201.6666%2010.0797%201.66669%208.74972ZM7.91669%205.83306C7.91669%205.61204%208.00448%205.40008%208.16077%205.2438C8.31705%205.08752%208.52901%204.99972%208.75002%204.99972C9.74458%204.99972%2010.6984%205.39481%2011.4017%206.09807C12.1049%206.80133%2012.5%207.75516%2012.5%208.74972C12.5%208.97074%2012.4122%209.1827%2012.2559%209.33898C12.0997%209.49526%2011.8877%209.58306%2011.6667%209.58306C11.4457%209.58306%2011.2337%209.49526%2011.0774%209.33898C10.9212%209.1827%2010.8334%208.97074%2010.8334%208.74972C10.8334%208.19719%2010.6139%207.66728%2010.2232%207.27658C9.83246%206.88588%209.30256%206.66639%208.75002%206.66639C8.52901%206.66639%208.31705%206.57859%208.16077%206.42231C8.00448%206.26603%207.91669%206.05407%207.91669%205.83306Z'%20fill='white'/%3e%3c/svg%3e",
        k4 = "static/assets/LogoTextLaporke-D1oZzDT1.svg",
        C4 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='20'%20height='20'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%23000000'%20strokeWidth='2'%20strokeLinecap='round'%20strokeLinejoin='round'%20className='feather%20feather-eye-off'%20%3e%3cpath%20d='M17.94%2017.94A10.07%2010.07%200%200%201%2012%2020c-7%200-11-8-11-8a18.45%2018.45%200%200%201%205.06-5.94M9.9%204.24A9.12%209.12%200%200%201%2012%204c7%200%2011%208%2011%208a18.5%2018.5%200%200%201-2.16%203.19m-6.72-1.07a3%203%200%201%201-4.24-4.24'%3e%3c/path%3e%3cline%20x1='1'%20y1='1'%20x2='23'%20y2='23'%3e%3c/line%3e%3c/svg%3e",
        S4 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='20'%20height='20'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%23000000'%20strokeWidth='2'%20strokeLinecap='round'%20strokeLinejoin='round'%20className='feather%20feather-eye'%20%3e%3cpath%20d='M1%2012s4-8%2011-8%2011%208%2011%208-4%208-11%208-11-8-11-8z'%3e%3c/path%3e%3ccircle%20cx='12'%20cy='12'%20r='3'%3e%3c/circle%3e%3c/svg%3e",
        oe = {
            BGCTABanner: G3,
            BGHeroSection: X3,
            IconSelesai: e4,
            IconTindakLanjut: t4,
            IconTulisLaporan: n4,
            IconVerifikasiLaporan: r4,
            ImageAboutLaporke: i4,
            ImageBerhasilInput: rg,
            ImageLogin: o4,
            ImagesTidakAdaPencarian: s4,
            ImageTidakAdaLaporan: a4,
            LogoClose: l4,
            LogoHamburger: u4,
            LogoJumlahLaporan: c4,
            LogoLaporan: d4,
            LogoLaporanBelumDiproses: f4,
            LogoLaporanSedangDiproses: p4,
            LogoLaporanSelesai: h4,
            LogoLaporke: m4,
            LogoLogout: g4,
            LogoLokasi: Bc,
            LogoNotification: y4,
            LogoProfile: v4,
            LogoRingkasan: x4,
            LogoSearch: w4,
            LogoSearchButton: _4,
            LogoTextLaporke: k4,
            EyeSlash: C4,
            Eye: S4
        };

    function E4() {
        return d.jsxs(d.Fragment, {
            children: [d.jsx("nav", {
                className: "navbar navbar-expand-sm shadow",
                style: {
                    padding: "17px 0 0 0",
                    marginBottom: "20px"
                },
                children: d.jsxs("div", {
                    className: "container",
                    children: [d.jsxs("a", {
                        href: "/",
                        style: {
                            marginBottom: "17px"
                        },
                        children: [d.jsx("img", {
                            src: oe.LogoLaporke,
                            height: "46",
                            style: {
                                marginRight: "18px"
                            }
                        }), d.jsx("img", {
                            src: oe.LogoTextLaporke,
                            width: "89.37"
                        })]
                    }), d.jsx("button", {
                        className: "navbar-toggler",
                        type: "button",
                        "data-bs-toggle": "collapse",
                        "data-bs-target": "#navbarNavAltMarkup",
                        "aria-controls": "navbarNavAltMarkup",
                        "aria-expanded": "false",
                        "aria-label": "Toggle navigation",
                        style: {
                            marginBottom: "17px"
                        },
                        children: d.jsx("span", {
                            className: "navbar-toggler-icon"
                        })
                    }), d.jsx("div", {
                        className: "collapse navbar-collapse",
                        id: "navbarNavAltMarkup",
                        children: d.jsxs("div", {
                            className: "navbar-nav ms-auto",
                            style: {
                                marginBottom: "17px"
                            },
                            children: [d.jsx(Pr, {
                                className: "text-decoration-none text-black",
                                to: "/",
                                style: {
                                    margin: "11px 60px 11px 0px"
                                },
                                children: "Pengaduan"
                            }), d.jsx(Pr, {
                                className: "text-decoration-none text-black",
                                to: "daftar-aduan",
                                style: {
                                    margin: "11px 0px"
                                },
                                children: "Daftar Aduan"
                            })]
                        })
                    })]
                })
            }), d.jsx(Gd, {})]
        })
    }

    function ig(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }
    const {
        toString: b4
    } = Object.prototype, {
        getPrototypeOf: Xd
    } = Object, pl = (e => t => {
        const n = b4.call(t);
        return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
    })(Object.create(null)), sn = e => (e = e.toLowerCase(), t => pl(t) === e), hl = e => t => typeof t === e, {
        isArray: Ki
    } = Array, Jo = hl("undefined");

    function N4(e) {
        return e !== null && !Jo(e) && e.constructor !== null && !Jo(e.constructor) && At(e.constructor.isBuffer) && e.constructor.isBuffer(e)
    }
    const og = sn("ArrayBuffer");

    function j4(e) {
        let t;
        return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && og(e.buffer), t
    }
    const T4 = hl("string"),
        At = hl("function"),
        sg = hl("number"),
        ml = e => e !== null && typeof e == "object",
        L4 = e => e === !0 || e === !1,
        aa = e => {
            if (pl(e) !== "object") return !1;
            const t = Xd(e);
            return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
        },
        A4 = sn("Date"),
        P4 = sn("File"),
        O4 = sn("Blob"),
        R4 = sn("FileList"),
        I4 = e => ml(e) && At(e.pipe),
        D4 = e => {
            let t;
            return e && (typeof FormData == "function" && e instanceof FormData || At(e.append) && ((t = pl(e)) === "formdata" || t === "object" && At(e.toString) && e.toString() === "[object FormData]"))
        },
        B4 = sn("URLSearchParams"),
        [M4, F4, $4, z4] = ["ReadableStream", "Request", "Response", "Headers"].map(sn),
        H4 = e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");

    function os(e, t, {
        allOwnKeys: n = !1
    } = {}) {
        if (e === null || typeof e > "u") return;
        let r, i;
        if (typeof e != "object" && (e = [e]), Ki(e))
            for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
        else {
            const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
                a = o.length;
            let u;
            for (r = 0; r < a; r++) u = o[r], t.call(null, e[u], u, e)
        }
    }

    function ag(e, t) {
        t = t.toLowerCase();
        const n = Object.keys(e);
        let r = n.length,
            i;
        for (; r-- > 0;)
            if (i = n[r], t === i.toLowerCase()) return i;
        return null
    }
    const jr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global,
        lg = e => !Jo(e) && e !== jr;

    function Mc() {
        const {
            caseless: e
        } = lg(this) && this || {}, t = {}, n = (r, i) => {
            const o = e && ag(t, i) || i;
            aa(t[o]) && aa(r) ? t[o] = Mc(t[o], r) : aa(r) ? t[o] = Mc({}, r) : Ki(r) ? t[o] = r.slice() : t[o] = r
        };
        for (let r = 0, i = arguments.length; r < i; r++) arguments[r] && os(arguments[r], n);
        return t
    }
    const W4 = (e, t, n, {
            allOwnKeys: r
        } = {}) => (os(t, (i, o) => {
            n && At(i) ? e[o] = ig(i, n) : e[o] = i
        }, {
            allOwnKeys: r
        }), e),
        U4 = e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
        V4 = (e, t, n, r) => {
            e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
                value: t.prototype
            }), n && Object.assign(e.prototype, n)
        },
        K4 = (e, t, n, r) => {
            let i, o, a;
            const u = {};
            if (t = t || {}, e == null) return t;
            do {
                for (i = Object.getOwnPropertyNames(e), o = i.length; o-- > 0;) a = i[o], (!r || r(a, e, t)) && !u[a] && (t[a] = e[a], u[a] = !0);
                e = n !== !1 && Xd(e)
            } while (e && (!n || n(e, t)) && e !== Object.prototype);
            return t
        },
        Q4 = (e, t, n) => {
            e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
            const r = e.indexOf(t, n);
            return r !== -1 && r === n
        },
        Z4 = e => {
            if (!e) return null;
            if (Ki(e)) return e;
            let t = e.length;
            if (!sg(t)) return null;
            const n = new Array(t);
            for (; t-- > 0;) n[t] = e[t];
            return n
        },
        Y4 = (e => t => e && t instanceof e)(typeof Uint8Array < "u" && Xd(Uint8Array)),
        J4 = (e, t) => {
            const r = (e && e[Symbol.iterator]).call(e);
            let i;
            for (;
                (i = r.next()) && !i.done;) {
                const o = i.value;
                t.call(e, o[0], o[1])
            }
        },
        q4 = (e, t) => {
            let n;
            const r = [];
            for (;
                (n = e.exec(t)) !== null;) r.push(n);
            return r
        },
        G4 = sn("HTMLFormElement"),
        X4 = e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, i) {
            return r.toUpperCase() + i
        }),
        ih = (({
            hasOwnProperty: e
        }) => (t, n) => e.call(t, n))(Object.prototype),
        e_ = sn("RegExp"),
        ug = (e, t) => {
            const n = Object.getOwnPropertyDescriptors(e),
                r = {};
            os(n, (i, o) => {
                let a;
                (a = t(i, o, e)) !== !1 && (r[o] = a || i)
            }), Object.defineProperties(e, r)
        },
        t_ = e => {
            ug(e, (t, n) => {
                if (At(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1) return !1;
                const r = e[n];
                if (At(r)) {
                    if (t.enumerable = !1, "writable" in t) {
                        t.writable = !1;
                        return
                    }
                    t.set || (t.set = () => {
                        throw Error("Can not rewrite read-only method '" + n + "'")
                    })
                }
            })
        },
        n_ = (e, t) => {
            const n = {},
                r = i => {
                    i.forEach(o => {
                        n[o] = !0
                    })
                };
            return Ki(e) ? r(e) : r(String(e).split(t)), n
        },
        r_ = () => {},
        i_ = (e, t) => e != null && Number.isFinite(e = +e) ? e : t,
        Ou = "abcdefghijklmnopqrstuvwxyz",
        oh = "0123456789",
        cg = {
            DIGIT: oh,
            ALPHA: Ou,
            ALPHA_DIGIT: Ou + Ou.toUpperCase() + oh
        },
        o_ = (e = 16, t = cg.ALPHA_DIGIT) => {
            let n = "";
            const {
                length: r
            } = t;
            for (; e--;) n += t[Math.random() * r | 0];
            return n
        };

    function s_(e) {
        return !!(e && At(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator])
    }
    const a_ = e => {
            const t = new Array(10),
                n = (r, i) => {
                    if (ml(r)) {
                        if (t.indexOf(r) >= 0) return;
                        if (!("toJSON" in r)) {
                            t[i] = r;
                            const o = Ki(r) ? [] : {};
                            return os(r, (a, u) => {
                                const c = n(a, i + 1);
                                !Jo(c) && (o[u] = c)
                            }), t[i] = void 0, o
                        }
                    }
                    return r
                };
            return n(e, 0)
        },
        l_ = sn("AsyncFunction"),
        u_ = e => e && (ml(e) || At(e)) && At(e.then) && At(e.catch),
        dg = ((e, t) => e ? setImmediate : t ? ((n, r) => (jr.addEventListener("message", ({
            source: i,
            data: o
        }) => {
            i === jr && o === n && r.length && r.shift()()
        }, !1), i => {
            r.push(i), jr.postMessage(n, "*")
        }))(`axios@${Math.random()}`, []) : n => setTimeout(n))(typeof setImmediate == "function", At(jr.postMessage)),
        c_ = typeof queueMicrotask < "u" ? queueMicrotask.bind(jr) : typeof process < "u" && process.nextTick || dg,
        A = {
            isArray: Ki,
            isArrayBuffer: og,
            isBuffer: N4,
            isFormData: D4,
            isArrayBufferView: j4,
            isString: T4,
            isNumber: sg,
            isBoolean: L4,
            isObject: ml,
            isPlainObject: aa,
            isReadableStream: M4,
            isRequest: F4,
            isResponse: $4,
            isHeaders: z4,
            isUndefined: Jo,
            isDate: A4,
            isFile: P4,
            isBlob: O4,
            isRegExp: e_,
            isFunction: At,
            isStream: I4,
            isURLSearchParams: B4,
            isTypedArray: Y4,
            isFileList: R4,
            forEach: os,
            merge: Mc,
            extend: W4,
            trim: H4,
            stripBOM: U4,
            inherits: V4,
            toFlatObject: K4,
            kindOf: pl,
            kindOfTest: sn,
            endsWith: Q4,
            toArray: Z4,
            forEachEntry: J4,
            matchAll: q4,
            isHTMLForm: G4,
            hasOwnProperty: ih,
            hasOwnProp: ih,
            reduceDescriptors: ug,
            freezeMethods: t_,
            toObjectSet: n_,
            toCamelCase: X4,
            noop: r_,
            toFiniteNumber: i_,
            findKey: ag,
            global: jr,
            isContextDefined: lg,
            ALPHABET: cg,
            generateString: o_,
            isSpecCompliantForm: s_,
            toJSONObject: a_,
            isAsyncFn: l_,
            isThenable: u_,
            setImmediate: dg,
            asap: c_
        };

    function ee(e, t, n, r, i) {
        Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), i && (this.response = i, this.status = i.status ? i.status : null)
    }
    A.inherits(ee, Error, {
        toJSON: function() {
            return {
                message: this.message,
                name: this.name,
                description: this.description,
                number: this.number,
                fileName: this.fileName,
                lineNumber: this.lineNumber,
                columnNumber: this.columnNumber,
                stack: this.stack,
                config: A.toJSONObject(this.config),
                code: this.code,
                status: this.status
            }
        }
    });
    const fg = ee.prototype,
        pg = {};
    ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => {
        pg[e] = {
            value: e
        }
    });
    Object.defineProperties(ee, pg);
    Object.defineProperty(fg, "isAxiosError", {
        value: !0
    });
    ee.from = (e, t, n, r, i, o) => {
        const a = Object.create(fg);
        return A.toFlatObject(e, a, function(c) {
            return c !== Error.prototype
        }, u => u !== "isAxiosError"), ee.call(a, e.message, t, n, r, i), a.cause = e, a.name = e.name, o && Object.assign(a, o), a
    };
    const d_ = null;

    function Fc(e) {
        return A.isPlainObject(e) || A.isArray(e)
    }

    function hg(e) {
        return A.endsWith(e, "[]") ? e.slice(0, -2) : e
    }

    function sh(e, t, n) {
        return e ? e.concat(t).map(function(i, o) {
            return i = hg(i), !n && o ? "[" + i + "]" : i
        }).join(n ? "." : "") : t
    }

    function f_(e) {
        return A.isArray(e) && !e.some(Fc)
    }
    const p_ = A.toFlatObject(A, {}, null, function(t) {
        return /^is[A-Z]/.test(t)
    });

    function gl(e, t, n) {
        if (!A.isObject(e)) throw new TypeError("target must be an object");
        t = t || new FormData, n = A.toFlatObject(n, {
            metaTokens: !0,
            dots: !1,
            indexes: !1
        }, !1, function(k, S) {
            return !A.isUndefined(S[k])
        });
        const r = n.metaTokens,
            i = n.visitor || m,
            o = n.dots,
            a = n.indexes,
            c = (n.Blob || typeof Blob < "u" && Blob) && A.isSpecCompliantForm(t);
        if (!A.isFunction(i)) throw new TypeError("visitor must be a function");

        function p(_) {
            if (_ === null) return "";
            if (A.isDate(_)) return _.toISOString();
            if (!c && A.isBlob(_)) throw new ee("Blob is not supported. Use a Buffer instead.");
            return A.isArrayBuffer(_) || A.isTypedArray(_) ? c && typeof Blob == "function" ? new Blob([_]) : Buffer.from(_) : _
        }

        function m(_, k, S) {
            let x = _;
            if (_ && !S && typeof _ == "object") {
                if (A.endsWith(k, "{}")) k = r ? k : k.slice(0, -2), _ = JSON.stringify(_);
                else if (A.isArray(_) && f_(_) || (A.isFileList(_) || A.endsWith(k, "[]")) && (x = A.toArray(_))) return k = hg(k), x.forEach(function(v, j) {
                    !(A.isUndefined(v) || v === null) && t.append(a === !0 ? sh([k], j, o) : a === null ? k : k + "[]", p(v))
                }), !1
            }
            return Fc(_) ? !0 : (t.append(sh(S, k, o), p(_)), !1)
        }
        const g = [],
            w = Object.assign(p_, {
                defaultVisitor: m,
                convertValue: p,
                isVisitable: Fc
            });

        function N(_, k) {
            if (!A.isUndefined(_)) {
                if (g.indexOf(_) !== -1) throw Error("Circular reference detected in " + k.join("."));
                g.push(_), A.forEach(_, function(x, y) {
                    (!(A.isUndefined(x) || x === null) && i.call(t, x, A.isString(y) ? y.trim() : y, k, w)) === !0 && N(x, k ? k.concat(y) : [y])
                }), g.pop()
            }
        }
        if (!A.isObject(e)) throw new TypeError("data must be an object");
        return N(e), t
    }

    function ah(e) {
        const t = {
            "!": "%21",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "~": "%7E",
            "%20": "+",
            "%00": "\0"
        };
        return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
            return t[r]
        })
    }

    function ef(e, t) {
        this._pairs = [], e && gl(e, this, t)
    }
    const mg = ef.prototype;
    mg.append = function(t, n) {
        this._pairs.push([t, n])
    };
    mg.toString = function(t) {
        const n = t ? function(r) {
            return t.call(this, r, ah)
        } : ah;
        return this._pairs.map(function(i) {
            return n(i[0]) + "=" + n(i[1])
        }, "").join("&")
    };

    function h_(e) {
        return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
    }

    function gg(e, t, n) {
        if (!t) return e;
        const r = n && n.encode || h_;
        A.isFunction(n) && (n = {
            serialize: n
        });
        const i = n && n.serialize;
        let o;
        if (i ? o = i(t, n) : o = A.isURLSearchParams(t) ? t.toString() : new ef(t, n).toString(r), o) {
            const a = e.indexOf("#");
            a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + o
        }
        return e
    }
    class lh {
        constructor() {
            this.handlers = []
        }
        use(t, n, r) {
            return this.handlers.push({
                fulfilled: t,
                rejected: n,
                synchronous: r ? r.synchronous : !1,
                runWhen: r ? r.runWhen : null
            }), this.handlers.length - 1
        }
        eject(t) {
            this.handlers[t] && (this.handlers[t] = null)
        }
        clear() {
            this.handlers && (this.handlers = [])
        }
        forEach(t) {
            A.forEach(this.handlers, function(r) {
                r !== null && t(r)
            })
        }
    }
    const yg = {
            silentJSONParsing: !0,
            forcedJSONParsing: !0,
            clarifyTimeoutError: !1
        },
        m_ = typeof URLSearchParams < "u" ? URLSearchParams : ef,
        g_ = typeof FormData < "u" ? FormData : null,
        y_ = typeof Blob < "u" ? Blob : null,
        v_ = {
            isBrowser: !0,
            classes: {
                URLSearchParams: m_,
                FormData: g_,
                Blob: y_
            },
            protocols: ["http", "https", "file", "blob", "url", "data"]
        },
        tf = typeof window < "u" && typeof document < "u",
        $c = typeof navigator == "object" && navigator || void 0,
        x_ = tf && (!$c || ["ReactNative", "NativeScript", "NS"].indexOf($c.product) < 0),
        w_ = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function",
        __ = tf && window.location.href || "http://localhost",
        k_ = Object.freeze(Object.defineProperty({
            __proto__: null,
            hasBrowserEnv: tf,
            hasStandardBrowserEnv: x_,
            hasStandardBrowserWebWorkerEnv: w_,
            navigator: $c,
            origin: __
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        rt = {
            ...k_,
            ...v_
        };

    function C_(e, t) {
        return gl(e, new rt.classes.URLSearchParams, Object.assign({
            visitor: function(n, r, i, o) {
                return rt.isNode && A.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments)
            }
        }, t))
    }

    function S_(e) {
        return A.matchAll(/\w+|\[(\w*)]/g, e).map(t => t[0] === "[]" ? "" : t[1] || t[0])
    }

    function E_(e) {
        const t = {},
            n = Object.keys(e);
        let r;
        const i = n.length;
        let o;
        for (r = 0; r < i; r++) o = n[r], t[o] = e[o];
        return t
    }

    function vg(e) {
        function t(n, r, i, o) {
            let a = n[o++];
            if (a === "__proto__") return !0;
            const u = Number.isFinite(+a),
                c = o >= n.length;
            return a = !a && A.isArray(i) ? i.length : a, c ? (A.hasOwnProp(i, a) ? i[a] = [i[a], r] : i[a] = r, !u) : ((!i[a] || !A.isObject(i[a])) && (i[a] = []), t(n, r, i[a], o) && A.isArray(i[a]) && (i[a] = E_(i[a])), !u)
        }
        if (A.isFormData(e) && A.isFunction(e.entries)) {
            const n = {};
            return A.forEachEntry(e, (r, i) => {
                t(S_(r), i, n, 0)
            }), n
        }
        return null
    }

    function b_(e, t, n) {
        if (A.isString(e)) try {
            return (t || JSON.parse)(e), A.trim(e)
        } catch (r) {
            if (r.name !== "SyntaxError") throw r
        }
        return (n || JSON.stringify)(e)
    }
    const ss = {
        transitional: yg,
        adapter: ["xhr", "http", "fetch"],
        transformRequest: [function(t, n) {
            const r = n.getContentType() || "",
                i = r.indexOf("application/json") > -1,
                o = A.isObject(t);
            if (o && A.isHTMLForm(t) && (t = new FormData(t)), A.isFormData(t)) return i ? JSON.stringify(vg(t)) : t;
            if (A.isArrayBuffer(t) || A.isBuffer(t) || A.isStream(t) || A.isFile(t) || A.isBlob(t) || A.isReadableStream(t)) return t;
            if (A.isArrayBufferView(t)) return t.buffer;
            if (A.isURLSearchParams(t)) return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
            let u;
            if (o) {
                if (r.indexOf("application/x-www-form-urlencoded") > -1) return C_(t, this.formSerializer).toString();
                if ((u = A.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
                    const c = this.env && this.env.FormData;
                    return gl(u ? {
                        "files[]": t
                    } : t, c && new c, this.formSerializer)
                }
            }
            return o || i ? (n.setContentType("application/json", !1), b_(t)) : t
        }],
        transformResponse: [function(t) {
            const n = this.transitional || ss.transitional,
                r = n && n.forcedJSONParsing,
                i = this.responseType === "json";
            if (A.isResponse(t) || A.isReadableStream(t)) return t;
            if (t && A.isString(t) && (r && !this.responseType || i)) {
                const a = !(n && n.silentJSONParsing) && i;
                try {
                    return JSON.parse(t)
                } catch (u) {
                    if (a) throw u.name === "SyntaxError" ? ee.from(u, ee.ERR_BAD_RESPONSE, this, null, this.response) : u
                }
            }
            return t
        }],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        env: {
            FormData: rt.classes.FormData,
            Blob: rt.classes.Blob
        },
        validateStatus: function(t) {
            return t >= 200 && t < 300
        },
        headers: {
            common: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": void 0
            }
        }
    };
    A.forEach(["delete", "get", "head", "post", "put", "patch"], e => {
        ss.headers[e] = {}
    });
    const N_ = A.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]),
        j_ = e => {
            const t = {};
            let n, r, i;
            return e && e.split(`
`).forEach(function(a) {
                i = a.indexOf(":"), n = a.substring(0, i).trim().toLowerCase(), r = a.substring(i + 1).trim(), !(!n || t[n] && N_[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r)
            }), t
        },
        uh = Symbol("internals");

    function ho(e) {
        return e && String(e).trim().toLowerCase()
    }

    function la(e) {
        return e === !1 || e == null ? e : A.isArray(e) ? e.map(la) : String(e)
    }

    function T_(e) {
        const t = Object.create(null),
            n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
        let r;
        for (; r = n.exec(e);) t[r[1]] = r[2];
        return t
    }
    const L_ = e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());

    function Ru(e, t, n, r, i) {
        if (A.isFunction(r)) return r.call(this, t, n);
        if (i && (t = n), !!A.isString(t)) {
            if (A.isString(r)) return t.indexOf(r) !== -1;
            if (A.isRegExp(r)) return r.test(t)
        }
    }

    function A_(e) {
        return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r)
    }

    function P_(e, t) {
        const n = A.toCamelCase(" " + t);
        ["get", "set", "has"].forEach(r => {
            Object.defineProperty(e, r + n, {
                value: function(i, o, a) {
                    return this[r].call(this, t, i, o, a)
                },
                configurable: !0
            })
        })
    }
    let _t = class {
        constructor(t) {
            t && this.set(t)
        }
        set(t, n, r) {
            const i = this;

            function o(u, c, p) {
                const m = ho(c);
                if (!m) throw new Error("header name must be a non-empty string");
                const g = A.findKey(i, m);
                (!g || i[g] === void 0 || p === !0 || p === void 0 && i[g] !== !1) && (i[g || c] = la(u))
            }
            const a = (u, c) => A.forEach(u, (p, m) => o(p, m, c));
            if (A.isPlainObject(t) || t instanceof this.constructor) a(t, n);
            else if (A.isString(t) && (t = t.trim()) && !L_(t)) a(j_(t), n);
            else if (A.isHeaders(t))
                for (const [u, c] of t.entries()) o(c, u, r);
            else t != null && o(n, t, r);
            return this
        }
        get(t, n) {
            if (t = ho(t), t) {
                const r = A.findKey(this, t);
                if (r) {
                    const i = this[r];
                    if (!n) return i;
                    if (n === !0) return T_(i);
                    if (A.isFunction(n)) return n.call(this, i, r);
                    if (A.isRegExp(n)) return n.exec(i);
                    throw new TypeError("parser must be boolean|regexp|function")
                }
            }
        }
        has(t, n) {
            if (t = ho(t), t) {
                const r = A.findKey(this, t);
                return !!(r && this[r] !== void 0 && (!n || Ru(this, this[r], r, n)))
            }
            return !1
        }
        delete(t, n) {
            const r = this;
            let i = !1;

            function o(a) {
                if (a = ho(a), a) {
                    const u = A.findKey(r, a);
                    u && (!n || Ru(r, r[u], u, n)) && (delete r[u], i = !0)
                }
            }
            return A.isArray(t) ? t.forEach(o) : o(t), i
        }
        clear(t) {
            const n = Object.keys(this);
            let r = n.length,
                i = !1;
            for (; r--;) {
                const o = n[r];
                (!t || Ru(this, this[o], o, t, !0)) && (delete this[o], i = !0)
            }
            return i
        }
        normalize(t) {
            const n = this,
                r = {};
            return A.forEach(this, (i, o) => {
                const a = A.findKey(r, o);
                if (a) {
                    n[a] = la(i), delete n[o];
                    return
                }
                const u = t ? A_(o) : String(o).trim();
                u !== o && delete n[o], n[u] = la(i), r[u] = !0
            }), this
        }
        concat(...t) {
            return this.constructor.concat(this, ...t)
        }
        toJSON(t) {
            const n = Object.create(null);
            return A.forEach(this, (r, i) => {
                r != null && r !== !1 && (n[i] = t && A.isArray(r) ? r.join(", ") : r)
            }), n
        } [Symbol.iterator]() {
            return Object.entries(this.toJSON())[Symbol.iterator]()
        }
        toString() {
            return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`)
        }
        get[Symbol.toStringTag]() {
            return "AxiosHeaders"
        }
        static from(t) {
            return t instanceof this ? t : new this(t)
        }
        static concat(t, ...n) {
            const r = new this(t);
            return n.forEach(i => r.set(i)), r
        }
        static accessor(t) {
            const r = (this[uh] = this[uh] = {
                    accessors: {}
                }).accessors,
                i = this.prototype;

            function o(a) {
                const u = ho(a);
                r[u] || (P_(i, a), r[u] = !0)
            }
            return A.isArray(t) ? t.forEach(o) : o(t), this
        }
    };
    _t.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
    A.reduceDescriptors(_t.prototype, ({
        value: e
    }, t) => {
        let n = t[0].toUpperCase() + t.slice(1);
        return {
            get: () => e,
            set(r) {
                this[n] = r
            }
        }
    });
    A.freezeMethods(_t);

    function Iu(e, t) {
        const n = this || ss,
            r = t || n,
            i = _t.from(r.headers);
        let o = r.data;
        return A.forEach(e, function(u) {
            o = u.call(n, o, i.normalize(), t ? t.status : void 0)
        }), i.normalize(), o
    }

    function xg(e) {
        return !!(e && e.__CANCEL__)
    }

    function Qi(e, t, n) {
        ee.call(this, e ?? "canceled", ee.ERR_CANCELED, t, n), this.name = "CanceledError"
    }
    A.inherits(Qi, ee, {
        __CANCEL__: !0
    });

    function wg(e, t, n) {
        const r = n.config.validateStatus;
        !n.status || !r || r(n.status) ? e(n) : t(new ee("Request failed with status code " + n.status, [ee.ERR_BAD_REQUEST, ee.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4], n.config, n.request, n))
    }

    function O_(e) {
        const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
        return t && t[1] || ""
    }

    function R_(e, t) {
        e = e || 10;
        const n = new Array(e),
            r = new Array(e);
        let i = 0,
            o = 0,
            a;
        return t = t !== void 0 ? t : 1e3,
            function(c) {
                const p = Date.now(),
                    m = r[o];
                a || (a = p), n[i] = c, r[i] = p;
                let g = o,
                    w = 0;
                for (; g !== i;) w += n[g++], g = g % e;
                if (i = (i + 1) % e, i === o && (o = (o + 1) % e), p - a < t) return;
                const N = m && p - m;
                return N ? Math.round(w * 1e3 / N) : void 0
            }
    }

    function I_(e, t) {
        let n = 0,
            r = 1e3 / t,
            i, o;
        const a = (p, m = Date.now()) => {
            n = m, i = null, o && (clearTimeout(o), o = null), e.apply(null, p)
        };
        return [(...p) => {
            const m = Date.now(),
                g = m - n;
            g >= r ? a(p, m) : (i = p, o || (o = setTimeout(() => {
                o = null, a(i)
            }, r - g)))
        }, () => i && a(i)]
    }
    const Ha = (e, t, n = 3) => {
            let r = 0;
            const i = R_(50, 250);
            return I_(o => {
                const a = o.loaded,
                    u = o.lengthComputable ? o.total : void 0,
                    c = a - r,
                    p = i(c),
                    m = a <= u;
                r = a;
                const g = {
                    loaded: a,
                    total: u,
                    progress: u ? a / u : void 0,
                    bytes: c,
                    rate: p || void 0,
                    estimated: p && u && m ? (u - a) / p : void 0,
                    event: o,
                    lengthComputable: u != null,
                    [t ? "download" : "upload"]: !0
                };
                e(g)
            }, n)
        },
        ch = (e, t) => {
            const n = e != null;
            return [r => t[0]({
                lengthComputable: n,
                total: e,
                loaded: r
            }), t[1]]
        },
        dh = e => (...t) => A.asap(() => e(...t)),
        D_ = rt.hasStandardBrowserEnv ? ((e, t) => n => (n = new URL(n, rt.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(new URL(rt.origin), rt.navigator && /(msie|trident)/i.test(rt.navigator.userAgent)) : () => !0,
        B_ = rt.hasStandardBrowserEnv ? {
            write(e, t, n, r, i, o) {
                const a = [e + "=" + encodeURIComponent(t)];
                A.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()), A.isString(r) && a.push("path=" + r), A.isString(i) && a.push("domain=" + i), o === !0 && a.push("secure"), document.cookie = a.join("; ")
            },
            read(e) {
                const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                return t ? decodeURIComponent(t[3]) : null
            },
            remove(e) {
                this.write(e, "", Date.now() - 864e5)
            }
        } : {
            write() {},
            read() {
                return null
            },
            remove() {}
        };

    function M_(e) {
        return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
    }

    function F_(e, t) {
        return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e
    }

    function _g(e, t) {
        return e && !M_(t) ? F_(e, t) : t
    }
    const fh = e => e instanceof _t ? {
        ...e
    } : e;

    function Hr(e, t) {
        t = t || {};
        const n = {};

        function r(p, m, g, w) {
            return A.isPlainObject(p) && A.isPlainObject(m) ? A.merge.call({
                caseless: w
            }, p, m) : A.isPlainObject(m) ? A.merge({}, m) : A.isArray(m) ? m.slice() : m
        }

        function i(p, m, g, w) {
            if (A.isUndefined(m)) {
                if (!A.isUndefined(p)) return r(void 0, p, g, w)
            } else return r(p, m, g, w)
        }

        function o(p, m) {
            if (!A.isUndefined(m)) return r(void 0, m)
        }

        function a(p, m) {
            if (A.isUndefined(m)) {
                if (!A.isUndefined(p)) return r(void 0, p)
            } else return r(void 0, m)
        }

        function u(p, m, g) {
            if (g in t) return r(p, m);
            if (g in e) return r(void 0, p)
        }
        const c = {
            url: o,
            method: o,
            data: o,
            baseURL: a,
            transformRequest: a,
            transformResponse: a,
            paramsSerializer: a,
            timeout: a,
            timeoutMessage: a,
            withCredentials: a,
            withXSRFToken: a,
            adapter: a,
            responseType: a,
            xsrfCookieName: a,
            xsrfHeaderName: a,
            onUploadProgress: a,
            onDownloadProgress: a,
            decompress: a,
            maxContentLength: a,
            maxBodyLength: a,
            beforeRedirect: a,
            transport: a,
            httpAgent: a,
            httpsAgent: a,
            cancelToken: a,
            socketPath: a,
            responseEncoding: a,
            validateStatus: u,
            headers: (p, m, g) => i(fh(p), fh(m), g, !0)
        };
        return A.forEach(Object.keys(Object.assign({}, e, t)), function(m) {
            const g = c[m] || i,
                w = g(e[m], t[m], m);
            A.isUndefined(w) && g !== u || (n[m] = w)
        }), n
    }
    const kg = e => {
            const t = Hr({}, e);
            let {
                data: n,
                withXSRFToken: r,
                xsrfHeaderName: i,
                xsrfCookieName: o,
                headers: a,
                auth: u
            } = t;
            t.headers = a = _t.from(a), t.url = gg(_g(t.baseURL, t.url), e.params, e.paramsSerializer), u && a.set("Authorization", "Basic " + btoa((u.username || "") + ":" + (u.password ? unescape(encodeURIComponent(u.password)) : "")));
            let c;
            if (A.isFormData(n)) {
                if (rt.hasStandardBrowserEnv || rt.hasStandardBrowserWebWorkerEnv) a.setContentType(void 0);
                else if ((c = a.getContentType()) !== !1) {
                    const [p, ...m] = c ? c.split(";").map(g => g.trim()).filter(Boolean) : [];
                    a.setContentType([p || "multipart/form-data", ...m].join("; "))
                }
            }
            if (rt.hasStandardBrowserEnv && (r && A.isFunction(r) && (r = r(t)), r || r !== !1 && D_(t.url))) {
                const p = i && o && B_.read(o);
                p && a.set(i, p)
            }
            return t
        },
        $_ = typeof XMLHttpRequest < "u",
        z_ = $_ && function(e) {
            return new Promise(function(n, r) {
                const i = kg(e);
                let o = i.data;
                const a = _t.from(i.headers).normalize();
                let {
                    responseType: u,
                    onUploadProgress: c,
                    onDownloadProgress: p
                } = i, m, g, w, N, _;

                function k() {
                    N && N(), _ && _(), i.cancelToken && i.cancelToken.unsubscribe(m), i.signal && i.signal.removeEventListener("abort", m)
                }
                let S = new XMLHttpRequest;
                S.open(i.method.toUpperCase(), i.url, !0), S.timeout = i.timeout;

                function x() {
                    if (!S) return;
                    const v = _t.from("getAllResponseHeaders" in S && S.getAllResponseHeaders()),
                        T = {
                            data: !u || u === "text" || u === "json" ? S.responseText : S.response,
                            status: S.status,
                            statusText: S.statusText,
                            headers: v,
                            config: e,
                            request: S
                        };
                    wg(function(O) {
                        n(O), k()
                    }, function(O) {
                        r(O), k()
                    }, T), S = null
                }
                "onloadend" in S ? S.onloadend = x : S.onreadystatechange = function() {
                    !S || S.readyState !== 4 || S.status === 0 && !(S.responseURL && S.responseURL.indexOf("file:") === 0) || setTimeout(x)
                }, S.onabort = function() {
                    S && (r(new ee("Request aborted", ee.ECONNABORTED, e, S)), S = null)
                }, S.onerror = function() {
                    r(new ee("Network Error", ee.ERR_NETWORK, e, S)), S = null
                }, S.ontimeout = function() {
                    let j = i.timeout ? "timeout of " + i.timeout + "ms exceeded" : "timeout exceeded";
                    const T = i.transitional || yg;
                    i.timeoutErrorMessage && (j = i.timeoutErrorMessage), r(new ee(j, T.clarifyTimeoutError ? ee.ETIMEDOUT : ee.ECONNABORTED, e, S)), S = null
                }, o === void 0 && a.setContentType(null), "setRequestHeader" in S && A.forEach(a.toJSON(), function(j, T) {
                    S.setRequestHeader(T, j)
                }), A.isUndefined(i.withCredentials) || (S.withCredentials = !!i.withCredentials), u && u !== "json" && (S.responseType = i.responseType), p && ([w, _] = Ha(p, !0), S.addEventListener("progress", w)), c && S.upload && ([g, N] = Ha(c), S.upload.addEventListener("progress", g), S.upload.addEventListener("loadend", N)), (i.cancelToken || i.signal) && (m = v => {
                    S && (r(!v || v.type ? new Qi(null, e, S) : v), S.abort(), S = null)
                }, i.cancelToken && i.cancelToken.subscribe(m), i.signal && (i.signal.aborted ? m() : i.signal.addEventListener("abort", m)));
                const y = O_(i.url);
                if (y && rt.protocols.indexOf(y) === -1) {
                    r(new ee("Unsupported protocol " + y + ":", ee.ERR_BAD_REQUEST, e));
                    return
                }
                S.send(o || null)
            })
        },
        H_ = (e, t) => {
            const {
                length: n
            } = e = e ? e.filter(Boolean) : [];
            if (t || n) {
                let r = new AbortController,
                    i;
                const o = function(p) {
                    if (!i) {
                        i = !0, u();
                        const m = p instanceof Error ? p : this.reason;
                        r.abort(m instanceof ee ? m : new Qi(m instanceof Error ? m.message : m))
                    }
                };
                let a = t && setTimeout(() => {
                    a = null, o(new ee(`timeout ${t} of ms exceeded`, ee.ETIMEDOUT))
                }, t);
                const u = () => {
                    e && (a && clearTimeout(a), a = null, e.forEach(p => {
                        p.unsubscribe ? p.unsubscribe(o) : p.removeEventListener("abort", o)
                    }), e = null)
                };
                e.forEach(p => p.addEventListener("abort", o));
                const {
                    signal: c
                } = r;
                return c.unsubscribe = () => A.asap(u), c
            }
        },
        W_ = function*(e, t) {
            let n = e.byteLength;
            if (n < t) {
                yield e;
                return
            }
            let r = 0,
                i;
            for (; r < n;) i = r + t, yield e.slice(r, i), r = i
        },
        U_ = async function*(e, t) {
            for await (const n of V_(e)) yield* W_(n, t)
        }, V_ = async function*(e) {
            if (e[Symbol.asyncIterator]) {
                yield* e;
                return
            }
            const t = e.getReader();
            try {
                for (;;) {
                    const {
                        done: n,
                        value: r
                    } = await t.read();
                    if (n) break;
                    yield r
                }
            } finally {
                await t.cancel()
            }
        }, ph = (e, t, n, r) => {
            const i = U_(e, t);
            let o = 0,
                a, u = c => {
                    a || (a = !0, r && r(c))
                };
            return new ReadableStream({
                async pull(c) {
                    try {
                        const {
                            done: p,
                            value: m
                        } = await i.next();
                        if (p) {
                            u(), c.close();
                            return
                        }
                        let g = m.byteLength;
                        if (n) {
                            let w = o += g;
                            n(w)
                        }
                        c.enqueue(new Uint8Array(m))
                    } catch (p) {
                        throw u(p), p
                    }
                },
                cancel(c) {
                    return u(c), i.return()
                }
            }, {
                highWaterMark: 2
            })
        }, yl = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Cg = yl && typeof ReadableStream == "function", K_ = yl && (typeof TextEncoder == "function" ? (e => t => e.encode(t))(new TextEncoder) : async e => new Uint8Array(await new Response(e).arrayBuffer())), Sg = (e, ...t) => {
            try {
                return !!e(...t)
            } catch {
                return !1
            }
        }, Q_ = Cg && Sg(() => {
            let e = !1;
            const t = new Request(rt.origin, {
                body: new ReadableStream,
                method: "POST",
                get duplex() {
                    return e = !0, "half"
                }
            }).headers.has("Content-Type");
            return e && !t
        }), hh = 64 * 1024, zc = Cg && Sg(() => A.isReadableStream(new Response("").body)), Wa = {
            stream: zc && (e => e.body)
        };
    yl && (e => {
        ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(t => {
            !Wa[t] && (Wa[t] = A.isFunction(e[t]) ? n => n[t]() : (n, r) => {
                throw new ee(`Response type '${t}' is not supported`, ee.ERR_NOT_SUPPORT, r)
            })
        })
    })(new Response);
    const Z_ = async e => {
        if (e == null) return 0;
        if (A.isBlob(e)) return e.size;
        if (A.isSpecCompliantForm(e)) return (await new Request(rt.origin, {
            method: "POST",
            body: e
        }).arrayBuffer()).byteLength;
        if (A.isArrayBufferView(e) || A.isArrayBuffer(e)) return e.byteLength;
        if (A.isURLSearchParams(e) && (e = e + ""), A.isString(e)) return (await K_(e)).byteLength
    }, Y_ = async (e, t) => {
        const n = A.toFiniteNumber(e.getContentLength());
        return n ?? Z_(t)
    }, J_ = yl && (async e => {
        let {
            url: t,
            method: n,
            data: r,
            signal: i,
            cancelToken: o,
            timeout: a,
            onDownloadProgress: u,
            onUploadProgress: c,
            responseType: p,
            headers: m,
            withCredentials: g = "same-origin",
            fetchOptions: w
        } = kg(e);
        p = p ? (p + "").toLowerCase() : "text";
        let N = H_([i, o && o.toAbortSignal()], a),
            _;
        const k = N && N.unsubscribe && (() => {
            N.unsubscribe()
        });
        let S;
        try {
            if (c && Q_ && n !== "get" && n !== "head" && (S = await Y_(m, r)) !== 0) {
                let T = new Request(t, {
                        method: "POST",
                        body: r,
                        duplex: "half"
                    }),
                    R;
                if (A.isFormData(r) && (R = T.headers.get("content-type")) && m.setContentType(R), T.body) {
                    const [O, I] = ch(S, Ha(dh(c)));
                    r = ph(T.body, hh, O, I)
                }
            }
            A.isString(g) || (g = g ? "include" : "omit");
            const x = "credentials" in Request.prototype;
            _ = new Request(t, {
                ...w,
                signal: N,
                method: n.toUpperCase(),
                headers: m.normalize().toJSON(),
                body: r,
                duplex: "half",
                credentials: x ? g : void 0
            });
            let y = await fetch(_);
            const v = zc && (p === "stream" || p === "response");
            if (zc && (u || v && k)) {
                const T = {};
                ["status", "statusText", "headers"].forEach(V => {
                    T[V] = y[V]
                });
                const R = A.toFiniteNumber(y.headers.get("content-length")),
                    [O, I] = u && ch(R, Ha(dh(u), !0)) || [];
                y = new Response(ph(y.body, hh, O, () => {
                    I && I(), k && k()
                }), T)
            }
            p = p || "text";
            let j = await Wa[A.findKey(Wa, p) || "text"](y, e);
            return !v && k && k(), await new Promise((T, R) => {
                wg(T, R, {
                    data: j,
                    headers: _t.from(y.headers),
                    status: y.status,
                    statusText: y.statusText,
                    config: e,
                    request: _
                })
            })
        } catch (x) {
            throw k && k(), x && x.name === "TypeError" && /fetch/i.test(x.message) ? Object.assign(new ee("Network Error", ee.ERR_NETWORK, e, _), {
                cause: x.cause || x
            }) : ee.from(x, x && x.code, e, _)
        }
    }), Hc = {
        http: d_,
        xhr: z_,
        fetch: J_
    };
    A.forEach(Hc, (e, t) => {
        if (e) {
            try {
                Object.defineProperty(e, "name", {
                    value: t
                })
            } catch {}
            Object.defineProperty(e, "adapterName", {
                value: t
            })
        }
    });
    const mh = e => `- ${e}`,
        q_ = e => A.isFunction(e) || e === null || e === !1,
        Eg = {
            getAdapter: e => {
                e = A.isArray(e) ? e : [e];
                const {
                    length: t
                } = e;
                let n, r;
                const i = {};
                for (let o = 0; o < t; o++) {
                    n = e[o];
                    let a;
                    if (r = n, !q_(n) && (r = Hc[(a = String(n)).toLowerCase()], r === void 0)) throw new ee(`Unknown adapter '${a}'`);
                    if (r) break;
                    i[a || "#" + o] = r
                }
                if (!r) {
                    const o = Object.entries(i).map(([u, c]) => `adapter ${u} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build"));
                    let a = t ? o.length > 1 ? `since :
` + o.map(mh).join(`
`) : " " + mh(o[0]) : "as no adapter specified";
                    throw new ee("There is no suitable adapter to dispatch the request " + a, "ERR_NOT_SUPPORT")
                }
                return r
            },
            adapters: Hc
        };

    function Du(e) {
        if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new Qi(null, e)
    }

    function gh(e) {
        return Du(e), e.headers = _t.from(e.headers), e.data = Iu.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Eg.getAdapter(e.adapter || ss.adapter)(e).then(function(r) {
            return Du(e), r.data = Iu.call(e, e.transformResponse, r), r.headers = _t.from(r.headers), r
        }, function(r) {
            return xg(r) || (Du(e), r && r.response && (r.response.data = Iu.call(e, e.transformResponse, r.response), r.response.headers = _t.from(r.response.headers))), Promise.reject(r)
        })
    }
    const bg = "1.7.8",
        vl = {};
    ["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
        vl[e] = function(r) {
            return typeof r === e || "a" + (t < 1 ? "n " : " ") + e
        }
    });
    const yh = {};
    vl.transitional = function(t, n, r) {
        function i(o, a) {
            return "[Axios v" + bg + "] Transitional option '" + o + "'" + a + (r ? ". " + r : "")
        }
        return (o, a, u) => {
            if (t === !1) throw new ee(i(a, " has been removed" + (n ? " in " + n : "")), ee.ERR_DEPRECATED);
            return n && !yh[a] && (yh[a] = !0, console.warn(i(a, " has been deprecated since v" + n + " and will be removed in the near future"))), t ? t(o, a, u) : !0
        }
    };
    vl.spelling = function(t) {
        return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0)
    };

    function G_(e, t, n) {
        if (typeof e != "object") throw new ee("options must be an object", ee.ERR_BAD_OPTION_VALUE);
        const r = Object.keys(e);
        let i = r.length;
        for (; i-- > 0;) {
            const o = r[i],
                a = t[o];
            if (a) {
                const u = e[o],
                    c = u === void 0 || a(u, o, e);
                if (c !== !0) throw new ee("option " + o + " must be " + c, ee.ERR_BAD_OPTION_VALUE);
                continue
            }
            if (n !== !0) throw new ee("Unknown option " + o, ee.ERR_BAD_OPTION)
        }
    }
    const ua = {
            assertOptions: G_,
            validators: vl
        },
        hn = ua.validators;
    let Or = class {
        constructor(t) {
            this.defaults = t, this.interceptors = {
                request: new lh,
                response: new lh
            }
        }
        async request(t, n) {
            try {
                return await this._request(t, n)
            } catch (r) {
                if (r instanceof Error) {
                    let i = {};
                    Error.captureStackTrace ? Error.captureStackTrace(i) : i = new Error;
                    const o = i.stack ? i.stack.replace(/^.+\n/, "") : "";
                    try {
                        r.stack ? o && !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + o) : r.stack = o
                    } catch {}
                }
                throw r
            }
        }
        _request(t, n) {
            typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Hr(this.defaults, n);
            const {
                transitional: r,
                paramsSerializer: i,
                headers: o
            } = n;
            r !== void 0 && ua.assertOptions(r, {
                silentJSONParsing: hn.transitional(hn.boolean),
                forcedJSONParsing: hn.transitional(hn.boolean),
                clarifyTimeoutError: hn.transitional(hn.boolean)
            }, !1), i != null && (A.isFunction(i) ? n.paramsSerializer = {
                serialize: i
            } : ua.assertOptions(i, {
                encode: hn.function,
                serialize: hn.function
            }, !0)), ua.assertOptions(n, {
                baseUrl: hn.spelling("baseURL"),
                withXsrfToken: hn.spelling("withXSRFToken")
            }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
            let a = o && A.merge(o.common, o[n.method]);
            o && A.forEach(["delete", "get", "head", "post", "put", "patch", "common"], _ => {
                delete o[_]
            }), n.headers = _t.concat(a, o);
            const u = [];
            let c = !0;
            this.interceptors.request.forEach(function(k) {
                typeof k.runWhen == "function" && k.runWhen(n) === !1 || (c = c && k.synchronous, u.unshift(k.fulfilled, k.rejected))
            });
            const p = [];
            this.interceptors.response.forEach(function(k) {
                p.push(k.fulfilled, k.rejected)
            });
            let m, g = 0,
                w;
            if (!c) {
                const _ = [gh.bind(this), void 0];
                for (_.unshift.apply(_, u), _.push.apply(_, p), w = _.length, m = Promise.resolve(n); g < w;) m = m.then(_[g++], _[g++]);
                return m
            }
            w = u.length;
            let N = n;
            for (g = 0; g < w;) {
                const _ = u[g++],
                    k = u[g++];
                try {
                    N = _(N)
                } catch (S) {
                    k.call(this, S);
                    break
                }
            }
            try {
                m = gh.call(this, N)
            } catch (_) {
                return Promise.reject(_)
            }
            for (g = 0, w = p.length; g < w;) m = m.then(p[g++], p[g++]);
            return m
        }
        getUri(t) {
            t = Hr(this.defaults, t);
            const n = _g(t.baseURL, t.url);
            return gg(n, t.params, t.paramsSerializer)
        }
    };
    A.forEach(["delete", "get", "head", "options"], function(t) {
        Or.prototype[t] = function(n, r) {
            return this.request(Hr(r || {}, {
                method: t,
                url: n,
                data: (r || {}).data
            }))
        }
    });
    A.forEach(["post", "put", "patch"], function(t) {
        function n(r) {
            return function(o, a, u) {
                return this.request(Hr(u || {}, {
                    method: t,
                    headers: r ? {
                        "Content-Type": "multipart/form-data"
                    } : {},
                    url: o,
                    data: a
                }))
            }
        }
        Or.prototype[t] = n(), Or.prototype[t + "Form"] = n(!0)
    });
    let X_ = class Ng {
        constructor(t) {
            if (typeof t != "function") throw new TypeError("executor must be a function.");
            let n;
            this.promise = new Promise(function(o) {
                n = o
            });
            const r = this;
            this.promise.then(i => {
                if (!r._listeners) return;
                let o = r._listeners.length;
                for (; o-- > 0;) r._listeners[o](i);
                r._listeners = null
            }), this.promise.then = i => {
                let o;
                const a = new Promise(u => {
                    r.subscribe(u), o = u
                }).then(i);
                return a.cancel = function() {
                    r.unsubscribe(o)
                }, a
            }, t(function(o, a, u) {
                r.reason || (r.reason = new Qi(o, a, u), n(r.reason))
            })
        }
        throwIfRequested() {
            if (this.reason) throw this.reason
        }
        subscribe(t) {
            if (this.reason) {
                t(this.reason);
                return
            }
            this._listeners ? this._listeners.push(t) : this._listeners = [t]
        }
        unsubscribe(t) {
            if (!this._listeners) return;
            const n = this._listeners.indexOf(t);
            n !== -1 && this._listeners.splice(n, 1)
        }
        toAbortSignal() {
            const t = new AbortController,
                n = r => {
                    t.abort(r)
                };
            return this.subscribe(n), t.signal.unsubscribe = () => this.unsubscribe(n), t.signal
        }
        static source() {
            let t;
            return {
                token: new Ng(function(i) {
                    t = i
                }),
                cancel: t
            }
        }
    };

    function ek(e) {
        return function(n) {
            return e.apply(null, n)
        }
    }

    function tk(e) {
        return A.isObject(e) && e.isAxiosError === !0
    }
    const Wc = {
        Continue: 100,
        SwitchingProtocols: 101,
        Processing: 102,
        EarlyHints: 103,
        Ok: 200,
        Created: 201,
        Accepted: 202,
        NonAuthoritativeInformation: 203,
        NoContent: 204,
        ResetContent: 205,
        PartialContent: 206,
        MultiStatus: 207,
        AlreadyReported: 208,
        ImUsed: 226,
        MultipleChoices: 300,
        MovedPermanently: 301,
        Found: 302,
        SeeOther: 303,
        NotModified: 304,
        UseProxy: 305,
        Unused: 306,
        TemporaryRedirect: 307,
        PermanentRedirect: 308,
        BadRequest: 400,
        Unauthorized: 401,
        PaymentRequired: 402,
        Forbidden: 403,
        NotFound: 404,
        MethodNotAllowed: 405,
        NotAcceptable: 406,
        ProxyAuthenticationRequired: 407,
        RequestTimeout: 408,
        Conflict: 409,
        Gone: 410,
        LengthRequired: 411,
        PreconditionFailed: 412,
        PayloadTooLarge: 413,
        UriTooLong: 414,
        UnsupportedMediaType: 415,
        RangeNotSatisfiable: 416,
        ExpectationFailed: 417,
        ImATeapot: 418,
        MisdirectedRequest: 421,
        UnprocessableEntity: 422,
        Locked: 423,
        FailedDependency: 424,
        TooEarly: 425,
        UpgradeRequired: 426,
        PreconditionRequired: 428,
        TooManyRequests: 429,
        RequestHeaderFieldsTooLarge: 431,
        UnavailableForLegalReasons: 451,
        InternalServerError: 500,
        NotImplemented: 501,
        BadGateway: 502,
        ServiceUnavailable: 503,
        GatewayTimeout: 504,
        HttpVersionNotSupported: 505,
        VariantAlsoNegotiates: 506,
        InsufficientStorage: 507,
        LoopDetected: 508,
        NotExtended: 510,
        NetworkAuthenticationRequired: 511
    };
    Object.entries(Wc).forEach(([e, t]) => {
        Wc[t] = e
    });

    function jg(e) {
        const t = new Or(e),
            n = ig(Or.prototype.request, t);
        return A.extend(n, Or.prototype, t, {
            allOwnKeys: !0
        }), A.extend(n, t, null, {
            allOwnKeys: !0
        }), n.create = function(i) {
            return jg(Hr(e, i))
        }, n
    }
    const fe = jg(ss);
    fe.Axios = Or;
    fe.CanceledError = Qi;
    fe.CancelToken = X_;
    fe.isCancel = xg;
    fe.VERSION = bg;
    fe.toFormData = gl;
    fe.AxiosError = ee;
    fe.Cancel = fe.CanceledError;
    fe.all = function(t) {
        return Promise.all(t)
    };
    fe.spread = ek;
    fe.isAxiosError = tk;
    fe.mergeConfig = Hr;
    fe.AxiosHeaders = _t;
    fe.formToJSON = e => vg(A.isHTMLForm(e) ? new FormData(e) : e);
    fe.getAdapter = Eg.getAdapter;
    fe.HttpStatusCode = Wc;
    fe.default = fe;
    const {
        Axios: FC,
        AxiosError: $C,
        CanceledError: zC,
        isCancel: HC,
        CancelToken: WC,
        VERSION: UC,
        all: VC,
        Cancel: KC,
        isAxiosError: QC,
        spread: ZC,
        toFormData: YC,
        AxiosHeaders: JC,
        HttpStatusCode: qC,
        formToJSON: GC,
        getAdapter: XC,
        mergeConfig: e6
    } = fe;

    function nk() {
        const [e, t] = P.useState(!1), [n, r] = P.useState(""), [i, o] = P.useState(""), [a, u] = P.useState(""), [c, p] = P.useState(""), [m, g] = P.useState(null), [w, N] = P.useState(!1), _ = v => {
            t(v.target.checked), v.target.checked ? r("Anonim") : r("")
        }, k = v => {
            e || r(v.target.value)
        }, S = v => {
            g(v.target.files[0])
        }, x = () => {
            N(!1), r(""), o(""), u(""), p(""), g(null), t(!1)
        }, y = async v => {
            if (v.preventDefault(), !m) {
                alert("Foto wajib diunggah!");
                return
            }
            try {
                const j = {
                        name: n,
                        title: i,
                        description: c,
                        location: a,
                        photo: m.name
                    },
                    R = (await fe.post("https://laporke-desa-banteran.web.id/laporan/create", j, {
                        headers: {
                            "Content-Type": "application/json"
                        }
                    })).data.id;
                if (!R) {
                    alert("Gagal mendapatkan ID laporan");
                    return
                }
                console.log("Laporan berhasil dibuat dengan ID:", R);
                const O = new FormData;
                O.append("file", m);
                const I = await fe.post(`https://laporke-desa-banteran.web.id/laporan/upload-photo?id=${R}`, O, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                });
                console.log("Foto berhasil diunggah:", I.data), N(!0)
            } catch (j) {
                console.error("Terjadi kesalahan:", j), alert("Gagal mengirim laporan atau foto. Silakan coba lagi.")
            }
        };
        return d.jsxs(d.Fragment, {
            children: [d.jsx("div", {
                className: "card rounded-5 border-0",
                style: {
                    background: `url(${oe.BGHeroSection}) no-repeat center`,
                    backgroundSize: "cover",
                    height: "761px",
                    position: "relative",
                    margin: "0px 20px"
                },
                children: d.jsxs("div", {
                    className: "card-body",
                    style: {
                        padding: "92px 16px 0 16px"
                    },
                    children: [d.jsx("h1", {
                        className: "mx-auto text-center text-white fw-semibold lh-base",
                        style: {
                            maxWidth: "570px",
                            marginBottom: "22px"
                        },
                        children: "Layanan Pengaduan Online Desa Banteran"
                    }), d.jsx("h4", {
                        className: "mx-auto text-center text-white fw-normal lh-base",
                        style: {
                            maxWidth: "922px",
                            marginBottom: "56px"
                        },
                        children: "Laporkan masalah atau sampaikan aspirasi Anda langsung ke desa dengan mudah dan transparan"
                    }), d.jsx("div", {
                        className: "card shadow border-0 rounded-5 mx-auto",
                        style: {
                            maxWidth: "879px"
                        },
                        children: d.jsxs("div", {
                            className: "card-body",
                            style: {
                                padding: "40px"
                            },
                            children: [d.jsx("h3", {
                                className: "fw-semibold",
                                style: {
                                    marginBottom: "36px"
                                },
                                children: "Sampaikan Laporan Anda"
                            }), d.jsxs("form", {
                                action: "",
                                onSubmit: y,
                                children: [d.jsxs("div", {
                                    style: {
                                        marginBottom: "32px"
                                    },
                                    children: [d.jsx("label", {
                                        htmlFor: "imputNamaLengkap",
                                        style: {
                                            marginBottom: "8px"
                                        },
                                        children: "Nama Lengkap"
                                    }), d.jsx("input", {
                                        type: "text",
                                        className: "form-control",
                                        id: "imputNamaLengkap",
                                        placeholder: "Ketik nama lengkap Anda",
                                        value: n,
                                        onChange: k,
                                        style: {
                                            padding: "9.5px 12px",
                                            marginBottom: "10px",
                                            color: e ? "#9D9D9D" : "",
                                            backgroundColor: e ? "#FFFFFF" : ""
                                        },
                                        disabled: e,
                                        required: !0
                                    }), d.jsxs("div", {
                                        className: "form-check mb-0",
                                        children: [d.jsx("input", {
                                            className: "form-check-input",
                                            type: "checkbox",
                                            id: "flexCheckAnonim",
                                            checked: e,
                                            onChange: _
                                        }), d.jsx("label", {
                                            className: "form-check-label",
                                            htmlFor: "flexCheckAnonim",
                                            children: "Anonim"
                                        })]
                                    })]
                                }), d.jsxs("div", {
                                    style: {
                                        marginBottom: "32px"
                                    },
                                    children: [d.jsxs("div", {
                                        children: [d.jsx("label", {
                                            htmlFor: "imputJudulLaporan",
                                            style: {
                                                marginBottom: "8px"
                                            },
                                            children: "Judul Laporan"
                                        }), d.jsx("input", {
                                            type: "text",
                                            className: "form-control",
                                            id: "imputJudulLaporan",
                                            placeholder: "Ketik judul laporan Anda",
                                            value: i,
                                            onChange: v => o(v.target.value),
                                            style: {
                                                padding: "9.5px 12px",
                                                marginBottom: "16px"
                                            },
                                            required: !0
                                        })]
                                    }), d.jsxs("div", {
                                        children: [d.jsx("label", {
                                            htmlFor: "imputLokasiKejadian",
                                            style: {
                                                marginBottom: "8px"
                                            },
                                            children: "Lokasi kejadian"
                                        }), d.jsx("input", {
                                            type: "text",
                                            className: "form-control",
                                            id: "imputLokasiKejadian",
                                            placeholder: "Ketik lokasi kejadian",
                                            value: a,
                                            onChange: v => u(v.target.value),
                                            style: {
                                                padding: "9.5px 12px",
                                                marginBottom: "16px"
                                            },
                                            required: !0
                                        })]
                                    }), d.jsxs("div", {
                                        children: [d.jsx("label", {
                                            htmlFor: "imputIsiLaporan",
                                            style: {
                                                marginBottom: "8px"
                                            },
                                            children: "Isi Laporan"
                                        }), d.jsx("textarea", {
                                            className: "form-control",
                                            id: "imputIsiLaporan",
                                            rows: "4",
                                            placeholder: "Ketik isi laporan Anda...",
                                            value: c,
                                            onChange: v => p(v.target.value),
                                            style: {
                                                padding: "12px"
                                            },
                                            required: !0
                                        })]
                                    })]
                                }), d.jsx("div", {
                                    style: {
                                        marginBottom: "32px"
                                    },
                                    children: d.jsxs("div", {
                                        children: [d.jsx("label", {
                                            htmlFor: "formFile",
                                            style: {
                                                marginBottom: "8px"
                                            },
                                            children: "Tambahkan Gambar"
                                        }), d.jsx("input", {
                                            className: "form-control",
                                            type: "file",
                                            id: "formfile",
                                            accept: "image/*",
                                            onChange: S,
                                            style: {
                                                padding: "9.5px 12px",
                                                marginBottom: "16px"
                                            },
                                            required: !0
                                        })]
                                    })
                                }), d.jsx("button", {
                                    type: "submit",
                                    className: "btn text-white col-12 fw-bold",
                                    style: {
                                        backgroundColor: "#C40C0C",
                                        padding: "9.5px"
                                    },
                                    children: "Lapor!"
                                })]
                            })]
                        })
                    }), d.jsx("div", {
                        style: {
                            margin: "80px -16px 0 -16px"
                        },
                        children: d.jsx("div", {
                            className: "card rounded-1 border-0 rounded-5 mx-auto",
                            style: {
                                backgroundColor: "#F8F8F8",
                                maxWidth: "1400px"
                            },
                            children: d.jsx("div", {
                                className: "card-body mx-auto",
                                style: {
                                    padding: "32px 0px"
                                },
                                children: d.jsxs("div", {
                                    className: "row mx-0 align-items-center",
                                    children: [d.jsx("img", {
                                        className: "col-12 col-lg-6 col-xl-12 mx-auto",
                                        src: oe.ImageAboutLaporke,
                                        style: {
                                            padding: "0px 22px",
                                            maxWidth: "661px",
                                            marginTop: "32px",
                                            marginBottom: "32px"
                                        }
                                    }), d.jsxs("div", {
                                        className: "col-12 col-lg-6 col-xl-12 mx-auto text-center text-lg-start",
                                        style: {
                                            minWidth: "300px",
                                            maxWidth: "671px",
                                            padding: "0px 22px",
                                            marginTop: "32px",
                                            marginBottom: "32px"
                                        },
                                        children: [d.jsxs("h1", {
                                            className: "fw-semibold mb-3",
                                            children: ['Apa itu "', d.jsx("span", {
                                                style: {
                                                    color: "#C40C0C"
                                                },
                                                children: "Laporke!"
                                            }), '"?']
                                        }), d.jsx("p", {
                                            className: "fs-4 mb-0",
                                            children: "Laporke adalah platform pengaduan dan aspirasi resmi Desa Banteran, Banyumas. Kami hadir untuk memudahkan warga dalam menyampaikan laporan langsung ke pemerintah desa."
                                        })]
                                    })]
                                })
                            })
                        })
                    }), d.jsx("div", {
                        style: {
                            margin: "0px -36px",
                            padding: "80px 0px"
                        },
                        children: d.jsxs("div", {
                            className: "mx-auto",
                            style: {
                                minHeight: "362px",
                                maxWidth: "984px"
                            },
                            children: [d.jsxs("h1", {
                                className: "text-center fw-semibold mb-3",
                                style: {
                                    padding: "6px 0px"
                                },
                                children: ["Cara Kerja ", d.jsx("span", {
                                    style: {
                                        color: "#C40C0C"
                                    },
                                    children: "Laporke!"
                                })]
                            }), d.jsx("h4", {
                                className: "fw-normal text-center mx-3",
                                style: {
                                    marginBottom: "26px"
                                },
                                children: "Empat Langkah Mudah untuk Menyampaikan Laporan atau Aspirasi Anda"
                            }), d.jsxs("div", {
                                className: "row mx-0",
                                children: [d.jsx("div", {
                                    className: "col-12 col-sm-6 col-lg-3 px-0",
                                    style: {
                                        marginTop: "26px"
                                    },
                                    children: d.jsxs("div", {
                                        className: "card bg-white rounded-4 border-0 shadow p-3 mx-auto me-sm-3 me-lg-auto",
                                        style: {
                                            height: "198px",
                                            maxWidth: "216px"
                                        },
                                        children: [d.jsx("img", {
                                            src: oe.IconTulisLaporan,
                                            className: "mb-2",
                                            width: 40
                                        }), d.jsx("p", {
                                            className: "mb-1 fw-semibold",
                                            style: {
                                                fontSize: "20px"
                                            },
                                            children: "Tulis Laporan"
                                        }), d.jsx("p", {
                                            className: "mb-0",
                                            style: {
                                                fontSize: "14px"
                                            },
                                            children: "Laporkan keluhan atau aspirasi anda dengan jelas dan lengkap"
                                        })]
                                    })
                                }), d.jsx("div", {
                                    className: "col-12 col-sm-6 col-lg-3 px-0",
                                    style: {
                                        marginTop: "26px"
                                    },
                                    children: d.jsxs("div", {
                                        className: "card bg-white rounded-4 border-0 shadow p-3 mx-auto ms-sm-3 ms-lg-auto",
                                        style: {
                                            height: "198px",
                                            maxWidth: "216px"
                                        },
                                        children: [d.jsx("img", {
                                            src: oe.IconVerifikasiLaporan,
                                            className: "mb-2",
                                            width: 40
                                        }), d.jsx("p", {
                                            className: "mb-1 fw-semibold",
                                            style: {
                                                fontSize: "20px"
                                            },
                                            children: "Verifikasi Laporan"
                                        }), d.jsx("p", {
                                            className: "mb-0",
                                            style: {
                                                fontSize: "14px"
                                            },
                                            children: "Laporan Anda akan diverifikasi dan diteruskan kepada instansi berwenang"
                                        })]
                                    })
                                }), d.jsx("div", {
                                    className: "col-12 col-sm-6 col-lg-3 px-0",
                                    style: {
                                        marginTop: "26px"
                                    },
                                    children: d.jsxs("div", {
                                        className: "card bg-white rounded-4 border-0 shadow p-3 mx-auto me-sm-3 me-lg-auto",
                                        style: {
                                            height: "198px",
                                            maxWidth: "216px"
                                        },
                                        children: [d.jsx("img", {
                                            src: oe.IconTindakLanjut,
                                            className: "mb-2",
                                            width: 40
                                        }), d.jsx("p", {
                                            className: "mb-1 fw-semibold",
                                            style: {
                                                fontSize: "20px"
                                            },
                                            children: "Tindak Lanjut"
                                        }), d.jsx("p", {
                                            className: "mb-0",
                                            style: {
                                                fontSize: "14px"
                                            },
                                            children: "Pemerintah desa akan mengambil tindakan sesuai dengan jenis laporan Anda"
                                        })]
                                    })
                                }), d.jsx("div", {
                                    className: "col-12 col-sm-6 col-lg-3 px-0",
                                    style: {
                                        marginTop: "26px"
                                    },
                                    children: d.jsxs("div", {
                                        className: "card bg-white rounded-4 border-0 shadow p-3 mx-auto ms-sm-3 ms-lg-auto",
                                        style: {
                                            height: "198px",
                                            maxWidth: "216px"
                                        },
                                        children: [d.jsx("img", {
                                            src: oe.IconSelesai,
                                            className: "mb-2",
                                            width: 40
                                        }), d.jsx("p", {
                                            className: "mb-1 fw-semibold",
                                            style: {
                                                fontSize: "20px"
                                            },
                                            children: "Selesai"
                                        }), d.jsx("p", {
                                            className: "mb-0",
                                            style: {
                                                fontSize: "14px"
                                            },
                                            children: "Laporan Anda akan terus ditindaklanjuti hingga terselesaikan"
                                        })]
                                    })
                                })]
                            })]
                        })
                    }), d.jsx("div", {
                        style: {
                            margin: "0px -16px"
                        },
                        children: d.jsx("div", {
                            className: "card mx-auto rounded-5 border-0",
                            style: {
                                maxWidth: "1200px",
                                backgroundImage: `url(${oe.BGCTABanner})`,
                                backgroundSize: "cover",
                                paddingBottom: "86px"
                            },
                            children: d.jsxs("div", {
                                className: "row mx-0 align-items-center",
                                style: {
                                    padding: "0px 30px"
                                },
                                children: [d.jsx("div", {
                                    className: "col-12 col-lg-6 col-xl-12 mx-auto px-0 text-center text-lg-start",
                                    style: {
                                        marginTop: "86px",
                                        maxWidth: "479px"
                                    },
                                    children: d.jsx("h1", {
                                        className: "fw-bold text-white mb-0 lh-base",
                                        style: {
                                            letterSpacing: "2px"
                                        },
                                        children: "Pantau Semua Aduan di Desa Anda"
                                    })
                                }), d.jsxs("div", {
                                    className: "col-12 col-lg-6 col-xl-12 mx-auto px-0 text-center text-lg-start",
                                    style: {
                                        marginTop: "86px",
                                        maxWidth: "461px"
                                    },
                                    children: [d.jsx("h4", {
                                        className: "fw-normal text-white mb-3 lh-base",
                                        children: "Lihat daftar lengkap aduan yang telah dikirimkan warga, beserta status penyelesaiannya. Tetap transparan, mudah diakses, dan informatif!"
                                    }), d.jsx(Pr, {
                                        to: "daftar-aduan",
                                        type: "button",
                                        className: "btn rounded-4 text-white fw-semibold px-4 py-2 border-0",
                                        style: {
                                            backgroundColor: "#FF8A07"
                                        },
                                        children: "Lihat Daftar Aduan"
                                    })]
                                })]
                            })
                        })
                    }), d.jsx("footer", {
                        className: "border-top border-dark-subtle",
                        style: {
                            margin: "80px -36px 0px -36px",
                            padding: "37px 0px"
                        },
                        children: d.jsxs("div", {
                            className: "row mx-auto align-items-center",
                            style: {
                                maxWidth: "1170px"
                            },
                            children: [d.jsx("div", {
                                className: "col-12 px-0 mx-auto ms-sm-4 me-sm-0 ms-xl-0",
                                style: {
                                    maxWidth: "188px",
                                    margin: "37px 0px"
                                },
                                children: d.jsx("img", {
                                    src: oe.LogoLaporke,
                                    style: {
                                        maxWidth: "188px"
                                    }
                                })
                            }), d.jsxs("div", {
                                className: "col-12 col-sm-6 col-md-7 col-lg-5 col-xl-12 px-4 px-sm-0 mx-auto me-sm-4 me-lg-auto",
                                style: {
                                    maxWidth: "545px",
                                    margin: "37px 0px"
                                },
                                children: [d.jsx("h4", {
                                    className: "fw-bold lh-base mb-1",
                                    children: "LAPORKE!"
                                }), d.jsxs("p", {
                                    className: "mb-0",
                                    children: [d.jsx("span", {
                                        className: "fw-semibold",
                                        children: "LAPORKE!"
                                    }), " adalah platform aduan bagi warga desa Banteran, Banyumas. Sampaikan suara Anda untuk perbaikan layanan dan infrastruktur desa dengan proses yang transparan dan akuntabel. Bersama, kita bangun Banteran lebih baik!"]
                                })]
                            }), d.jsxs("div", {
                                className: "col-12 px-0 ms-4 ms-lg-0 me-lg-4 me-xl-0",
                                style: {
                                    maxWidth: "229px",
                                    margin: "37px 0px"
                                },
                                children: [d.jsx("h5", {
                                    className: "lh-base mb-3",
                                    children: "Kontak"
                                }), d.jsx("p", {
                                    style: {
                                        marginBottom: "12px"
                                    },
                                    children: "Purwokerto - Indonesia"
                                }), d.jsx("p", {
                                    style: {
                                        marginBottom: "12px"
                                    },
                                    children: "+0628-2267-9981"
                                }), d.jsx("p", {
                                    className: "mb-0",
                                    children: "desabanyumas@gmail.com"
                                })]
                            })]
                        })
                    })]
                })
            }), w && d.jsx("div", {
                className: "modal fade show",
                style: {
                    display: "block",
                    backdropFilter: "blur(5px)",
                    backgroundColor: "rgba(0, 0, 0, 0.1)"
                },
                children: d.jsx("div", {
                    className: "modal-dialog modal-dialog-centered",
                    style: {
                        maxWidth: "448px"
                    },
                    children: d.jsx("div", {
                        className: "modal-content border-0 rounded-4",
                        style: {
                            maxWidth: "448px"
                        },
                        children: d.jsxs("div", {
                            className: "modal-body p-4 text-center",
                            children: [d.jsx("img", {
                                src: rg,
                                className: "mb-4 w-75",
                                alt: "Berhasil"
                            }), d.jsx("h4", {
                                className: "mb-4",
                                style: {
                                    lineHeight: "31px"
                                },
                                children: "Aduan Berhasil Dikirim!"
                            }), d.jsx("p", {
                                className: "mb-4 fw-medium",
                                style: {
                                    lineHeight: "27px"
                                },
                                children: "Terima kasih telah melaporkan. Aduan Anda akan segera kami verifikasi dan tindak lanjuti."
                            }), d.jsx("button", {
                                type: "button",
                                className: "btn fw-semibold border-0 rounded-4 text-white",
                                onClick: x,
                                style: {
                                    backgroundColor: "#C40C0C",
                                    padding: "8px 24.2px"
                                },
                                children: "Oke"
                            })]
                        })
                    })
                })
            })]
        })
    }

    function Tg(e) {
        var t, n, r = "";
        if (typeof e == "string" || typeof e == "number") r += e;
        else if (typeof e == "object")
            if (Array.isArray(e)) {
                var i = e.length;
                for (t = 0; t < i; t++) e[t] && (n = Tg(e[t])) && (r && (r += " "), r += n)
            } else
                for (n in e) e[n] && (r && (r += " "), r += n);
        return r
    }

    function Jn() {
        for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++)(e = arguments[n]) && (t = Tg(e)) && (r && (r += " "), r += t);
        return r
    }
    const qo = e => typeof e == "number" && !isNaN(e),
        Rr = e => typeof e == "string",
        Tt = e => typeof e == "function",
        ca = e => Rr(e) || Tt(e) ? e : null,
        Uc = e => P.isValidElement(e) || Rr(e) || Tt(e) || qo(e);

    function rk(e, t, n) {
        n === void 0 && (n = 300);
        const {
            scrollHeight: r,
            style: i
        } = e;
        requestAnimationFrame(() => {
            i.minHeight = "initial", i.height = r + "px", i.transition = `all ${n}ms`, requestAnimationFrame(() => {
                i.height = "0", i.padding = "0", i.margin = "0", setTimeout(t, n)
            })
        })
    }

    function xl(e) {
        let {
            enter: t,
            exit: n,
            appendPosition: r = !1,
            collapse: i = !0,
            collapseDuration: o = 300
        } = e;
        return function(a) {
            let {
                children: u,
                position: c,
                preventExitTransition: p,
                done: m,
                nodeRef: g,
                isIn: w,
                playToast: N
            } = a;
            const _ = r ? `${t}--${c}` : t,
                k = r ? `${n}--${c}` : n,
                S = P.useRef(0);
            return P.useLayoutEffect(() => {
                const x = g.current,
                    y = _.split(" "),
                    v = j => {
                        j.target === g.current && (N(), x.removeEventListener("animationend", v), x.removeEventListener("animationcancel", v), S.current === 0 && j.type !== "animationcancel" && x.classList.remove(...y))
                    };
                x.classList.add(...y), x.addEventListener("animationend", v), x.addEventListener("animationcancel", v)
            }, []), P.useEffect(() => {
                const x = g.current,
                    y = () => {
                        x.removeEventListener("animationend", y), i ? rk(x, m, o) : m()
                    };
                w || (p ? y() : (S.current = 1, x.className += ` ${k}`, x.addEventListener("animationend", y)))
            }, [w]), ce.createElement(ce.Fragment, null, u)
        }
    }

    function vh(e, t) {
        return e != null ? {
            content: e.content,
            containerId: e.props.containerId,
            id: e.props.toastId,
            theme: e.props.theme,
            type: e.props.type,
            data: e.props.data || {},
            isLoading: e.props.isLoading,
            icon: e.props.icon,
            status: t
        } : {}
    }
    const ct = new Map;
    let Go = [];
    const Vc = new Set,
        ik = e => Vc.forEach(t => t(e)),
        Lg = () => ct.size > 0;

    function Ag(e, t) {
        var n;
        if (t) return !((n = ct.get(t)) == null || !n.isToastActive(e));
        let r = !1;
        return ct.forEach(i => {
            i.isToastActive(e) && (r = !0)
        }), r
    }

    function Pg(e, t) {
        Uc(e) && (Lg() || Go.push({
            content: e,
            options: t
        }), ct.forEach(n => {
            n.buildToast(e, t)
        }))
    }

    function xh(e, t) {
        ct.forEach(n => {
            t != null && t != null && t.containerId ? (t == null ? void 0 : t.containerId) === n.id && n.toggle(e, t == null ? void 0 : t.id) : n.toggle(e, t == null ? void 0 : t.id)
        })
    }

    function ok(e) {
        const {
            subscribe: t,
            getSnapshot: n,
            setProps: r
        } = P.useRef(function(o) {
            const a = o.containerId || 1;
            return {
                subscribe(u) {
                    const c = function(m, g, w) {
                        let N = 1,
                            _ = 0,
                            k = [],
                            S = [],
                            x = [],
                            y = g;
                        const v = new Map,
                            j = new Set,
                            T = () => {
                                x = Array.from(v.values()), j.forEach(I => I())
                            },
                            R = I => {
                                S = I == null ? [] : S.filter(V => V !== I), T()
                            },
                            O = I => {
                                const {
                                    toastId: V,
                                    onOpen: K,
                                    updateId: _e,
                                    children: He
                                } = I.props, Ye = _e == null;
                                I.staleId && v.delete(I.staleId), v.set(V, I), S = [...S, I.props.toastId].filter(Xe => Xe !== I.staleId), T(), w(vh(I, Ye ? "added" : "updated")), Ye && Tt(K) && K(P.isValidElement(He) && He.props)
                            };
                        return {
                            id: m,
                            props: y,
                            observe: I => (j.add(I), () => j.delete(I)),
                            toggle: (I, V) => {
                                v.forEach(K => {
                                    V != null && V !== K.props.toastId || Tt(K.toggle) && K.toggle(I)
                                })
                            },
                            removeToast: R,
                            toasts: v,
                            clearQueue: () => {
                                _ -= k.length, k = []
                            },
                            buildToast: (I, V) => {
                                if ((J => {
                                        let {
                                            containerId: ke,
                                            toastId: le,
                                            updateId: Te
                                        } = J;
                                        const F = ke ? ke !== m : m !== 1,
                                            Fe = v.has(le) && Te == null;
                                        return F || Fe
                                    })(V)) return;
                                const {
                                    toastId: K,
                                    updateId: _e,
                                    data: He,
                                    staleId: Ye,
                                    delay: Xe
                                } = V, ht = () => {
                                    R(K)
                                }, It = _e == null;
                                It && _++;
                                const Me = {
                                    ...y,
                                    style: y.toastStyle,
                                    key: N++,
                                    ...Object.fromEntries(Object.entries(V).filter(J => {
                                        let [ke, le] = J;
                                        return le != null
                                    })),
                                    toastId: K,
                                    updateId: _e,
                                    data: He,
                                    closeToast: ht,
                                    isIn: !1,
                                    className: ca(V.className || y.toastClassName),
                                    bodyClassName: ca(V.bodyClassName || y.bodyClassName),
                                    progressClassName: ca(V.progressClassName || y.progressClassName),
                                    autoClose: !V.isLoading && (E = V.autoClose, U = y.autoClose, E === !1 || qo(E) && E > 0 ? E : U),
                                    deleteToast() {
                                        const J = v.get(K),
                                            {
                                                onClose: ke,
                                                children: le
                                            } = J.props;
                                        Tt(ke) && ke(P.isValidElement(le) && le.props), w(vh(J, "removed")), v.delete(K), _--, _ < 0 && (_ = 0), k.length > 0 ? O(k.shift()) : T()
                                    }
                                };
                                var E, U;
                                Me.closeButton = y.closeButton, V.closeButton === !1 || Uc(V.closeButton) ? Me.closeButton = V.closeButton : V.closeButton === !0 && (Me.closeButton = !Uc(y.closeButton) || y.closeButton);
                                let Q = I;
                                P.isValidElement(I) && !Rr(I.type) ? Q = P.cloneElement(I, {
                                    closeToast: ht,
                                    toastProps: Me,
                                    data: He
                                }) : Tt(I) && (Q = I({
                                    closeToast: ht,
                                    toastProps: Me,
                                    data: He
                                }));
                                const ie = {
                                    content: Q,
                                    props: Me,
                                    staleId: Ye
                                };
                                y.limit && y.limit > 0 && _ > y.limit && It ? k.push(ie) : qo(Xe) ? setTimeout(() => {
                                    O(ie)
                                }, Xe) : O(ie)
                            },
                            setProps(I) {
                                y = I
                            },
                            setToggle: (I, V) => {
                                v.get(I).toggle = V
                            },
                            isToastActive: I => S.some(V => V === I),
                            getSnapshot: () => x
                        }
                    }(a, o, ik);
                    ct.set(a, c);
                    const p = c.observe(u);
                    return Go.forEach(m => Pg(m.content, m.options)), Go = [], () => {
                        p(), ct.delete(a)
                    }
                },
                setProps(u) {
                    var c;
                    (c = ct.get(a)) == null || c.setProps(u)
                },
                getSnapshot() {
                    var u;
                    return (u = ct.get(a)) == null ? void 0 : u.getSnapshot()
                }
            }
        }(e)).current;
        r(e);
        const i = P.useSyncExternalStore(t, n, n);
        return {
            getToastToRender: function(o) {
                if (!i) return [];
                const a = new Map;
                return e.newestOnTop && i.reverse(), i.forEach(u => {
                    const {
                        position: c
                    } = u.props;
                    a.has(c) || a.set(c, []), a.get(c).push(u)
                }), Array.from(a, u => o(u[0], u[1]))
            },
            isToastActive: Ag,
            count: i == null ? void 0 : i.length
        }
    }

    function sk(e) {
        const [t, n] = P.useState(!1), [r, i] = P.useState(!1), o = P.useRef(null), a = P.useRef({
            start: 0,
            delta: 0,
            removalDistance: 0,
            canCloseOnClick: !0,
            canDrag: !1,
            didMove: !1
        }).current, {
            autoClose: u,
            pauseOnHover: c,
            closeToast: p,
            onClick: m,
            closeOnClick: g
        } = e;
        var w, N;

        function _() {
            n(!0)
        }

        function k() {
            n(!1)
        }

        function S(v) {
            const j = o.current;
            a.canDrag && j && (a.didMove = !0, t && k(), a.delta = e.draggableDirection === "x" ? v.clientX - a.start : v.clientY - a.start, a.start !== v.clientX && (a.canCloseOnClick = !1), j.style.transform = `translate3d(${e.draggableDirection==="x"?`${a.delta}px, var(--y)`:`0, calc(${a.delta}px + var(--y))`},0)`, j.style.opacity = "" + (1 - Math.abs(a.delta / a.removalDistance)))
        }

        function x() {
            document.removeEventListener("pointermove", S), document.removeEventListener("pointerup", x);
            const v = o.current;
            if (a.canDrag && a.didMove && v) {
                if (a.canDrag = !1, Math.abs(a.delta) > a.removalDistance) return i(!0), e.closeToast(), void e.collapseAll();
                v.style.transition = "transform 0.2s, opacity 0.2s", v.style.removeProperty("transform"), v.style.removeProperty("opacity")
            }
        }(N = ct.get((w = {
            id: e.toastId,
            containerId: e.containerId,
            fn: n
        }).containerId || 1)) == null || N.setToggle(w.id, w.fn), P.useEffect(() => {
            if (e.pauseOnFocusLoss) return document.hasFocus() || k(), window.addEventListener("focus", _), window.addEventListener("blur", k), () => {
                window.removeEventListener("focus", _), window.removeEventListener("blur", k)
            }
        }, [e.pauseOnFocusLoss]);
        const y = {
            onPointerDown: function(v) {
                if (e.draggable === !0 || e.draggable === v.pointerType) {
                    a.didMove = !1, document.addEventListener("pointermove", S), document.addEventListener("pointerup", x);
                    const j = o.current;
                    a.canCloseOnClick = !0, a.canDrag = !0, j.style.transition = "none", e.draggableDirection === "x" ? (a.start = v.clientX, a.removalDistance = j.offsetWidth * (e.draggablePercent / 100)) : (a.start = v.clientY, a.removalDistance = j.offsetHeight * (e.draggablePercent === 80 ? 1.5 * e.draggablePercent : e.draggablePercent) / 100)
                }
            },
            onPointerUp: function(v) {
                const {
                    top: j,
                    bottom: T,
                    left: R,
                    right: O
                } = o.current.getBoundingClientRect();
                v.nativeEvent.type !== "touchend" && e.pauseOnHover && v.clientX >= R && v.clientX <= O && v.clientY >= j && v.clientY <= T ? k() : _()
            }
        };
        return u && c && (y.onMouseEnter = k, e.stacked || (y.onMouseLeave = _)), g && (y.onClick = v => {
            m && m(v), a.canCloseOnClick && p()
        }), {
            playToast: _,
            pauseToast: k,
            isRunning: t,
            preventExitTransition: r,
            toastRef: o,
            eventHandlers: y
        }
    }

    function ak(e) {
        let {
            delay: t,
            isRunning: n,
            closeToast: r,
            type: i = "default",
            hide: o,
            className: a,
            style: u,
            controlledProgress: c,
            progress: p,
            rtl: m,
            isIn: g,
            theme: w
        } = e;
        const N = o || c && p === 0,
            _ = {
                ...u,
                animationDuration: `${t}ms`,
                animationPlayState: n ? "running" : "paused"
            };
        c && (_.transform = `scaleX(${p})`);
        const k = Jn("Toastify__progress-bar", c ? "Toastify__progress-bar--controlled" : "Toastify__progress-bar--animated", `Toastify__progress-bar-theme--${w}`, `Toastify__progress-bar--${i}`, {
                "Toastify__progress-bar--rtl": m
            }),
            S = Tt(a) ? a({
                rtl: m,
                type: i,
                defaultClassName: k
            }) : Jn(k, a),
            x = {
                [c && p >= 1 ? "onTransitionEnd" : "onAnimationEnd"]: c && p < 1 ? null : () => {
                    g && r()
                }
            };
        return ce.createElement("div", {
            className: "Toastify__progress-bar--wrp",
            "data-hidden": N
        }, ce.createElement("div", {
            className: `Toastify__progress-bar--bg Toastify__progress-bar-theme--${w} Toastify__progress-bar--${i}`
        }), ce.createElement("div", {
            role: "progressbar",
            "aria-hidden": N ? "true" : "false",
            "aria-label": "notification timer",
            className: S,
            style: _,
            ...x
        }))
    }
    let lk = 1;
    const Og = () => "" + lk++;

    function uk(e) {
        return e && (Rr(e.toastId) || qo(e.toastId)) ? e.toastId : Og()
    }

    function To(e, t) {
        return Pg(e, t), t.toastId
    }

    function Ua(e, t) {
        return {
            ...t,
            type: t && t.type || e,
            toastId: uk(t)
        }
    }

    function Vs(e) {
        return (t, n) => To(t, Ua(e, n))
    }

    function Z(e, t) {
        return To(e, Ua("default", t))
    }
    Z.loading = (e, t) => To(e, Ua("default", {
        isLoading: !0,
        autoClose: !1,
        closeOnClick: !1,
        closeButton: !1,
        draggable: !1,
        ...t
    })), Z.promise = function(e, t, n) {
        let r, {
            pending: i,
            error: o,
            success: a
        } = t;
        i && (r = Rr(i) ? Z.loading(i, n) : Z.loading(i.render, {
            ...n,
            ...i
        }));
        const u = {
                isLoading: null,
                autoClose: null,
                closeOnClick: null,
                closeButton: null,
                draggable: null
            },
            c = (m, g, w) => {
                if (g == null) return void Z.dismiss(r);
                const N = {
                        type: m,
                        ...u,
                        ...n,
                        data: w
                    },
                    _ = Rr(g) ? {
                        render: g
                    } : g;
                return r ? Z.update(r, {
                    ...N,
                    ..._
                }) : Z(_.render, {
                    ...N,
                    ..._
                }), w
            },
            p = Tt(e) ? e() : e;
        return p.then(m => c("success", a, m)).catch(m => c("error", o, m)), p
    }, Z.success = Vs("success"), Z.info = Vs("info"), Z.error = Vs("error"), Z.warning = Vs("warning"), Z.warn = Z.warning, Z.dark = (e, t) => To(e, Ua("default", {
        theme: "dark",
        ...t
    })), Z.dismiss = function(e) {
        (function(t) {
            var n;
            if (Lg()) {
                if (t == null || Rr(n = t) || qo(n)) ct.forEach(r => {
                    r.removeToast(t)
                });
                else if (t && ("containerId" in t || "id" in t)) {
                    const r = ct.get(t.containerId);
                    r ? r.removeToast(t.id) : ct.forEach(i => {
                        i.removeToast(t.id)
                    })
                }
            } else Go = Go.filter(r => t != null && r.options.toastId !== t)
        })(e)
    }, Z.clearWaitingQueue = function(e) {
        e === void 0 && (e = {}), ct.forEach(t => {
            !t.props.limit || e.containerId && t.id !== e.containerId || t.clearQueue()
        })
    }, Z.isActive = Ag, Z.update = function(e, t) {
        t === void 0 && (t = {});
        const n = ((r, i) => {
            var o;
            let {
                containerId: a
            } = i;
            return (o = ct.get(a || 1)) == null ? void 0 : o.toasts.get(r)
        })(e, t);
        if (n) {
            const {
                props: r,
                content: i
            } = n, o = {
                delay: 100,
                ...r,
                ...t,
                toastId: t.toastId || e,
                updateId: Og()
            };
            o.toastId !== e && (o.staleId = e);
            const a = o.render || i;
            delete o.render, To(a, o)
        }
    }, Z.done = e => {
        Z.update(e, {
            progress: 1
        })
    }, Z.onChange = function(e) {
        return Vc.add(e), () => {
            Vc.delete(e)
        }
    }, Z.play = e => xh(!0, e), Z.pause = e => xh(!1, e);
    const ck = typeof window < "u" ? P.useLayoutEffect : P.useEffect,
        Ks = e => {
            let {
                theme: t,
                type: n,
                isLoading: r,
                ...i
            } = e;
            return ce.createElement("svg", {
                viewBox: "0 0 24 24",
                width: "100%",
                height: "100%",
                fill: t === "colored" ? "currentColor" : `var(--toastify-icon-color-${n})`,
                ...i
            })
        },
        Bu = {
            info: function(e) {
                return ce.createElement(Ks, {
                    ...e
                }, ce.createElement("path", {
                    d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"
                }))
            },
            warning: function(e) {
                return ce.createElement(Ks, {
                    ...e
                }, ce.createElement("path", {
                    d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"
                }))
            },
            success: function(e) {
                return ce.createElement(Ks, {
                    ...e
                }, ce.createElement("path", {
                    d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"
                }))
            },
            error: function(e) {
                return ce.createElement(Ks, {
                    ...e
                }, ce.createElement("path", {
                    d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"
                }))
            },
            spinner: function() {
                return ce.createElement("div", {
                    className: "Toastify__spinner"
                })
            }
        },
        dk = e => {
            const {
                isRunning: t,
                preventExitTransition: n,
                toastRef: r,
                eventHandlers: i,
                playToast: o
            } = sk(e), {
                closeButton: a,
                children: u,
                autoClose: c,
                onClick: p,
                type: m,
                hideProgressBar: g,
                closeToast: w,
                transition: N,
                position: _,
                className: k,
                style: S,
                bodyClassName: x,
                bodyStyle: y,
                progressClassName: v,
                progressStyle: j,
                updateId: T,
                role: R,
                progress: O,
                rtl: I,
                toastId: V,
                deleteToast: K,
                isIn: _e,
                isLoading: He,
                closeOnClick: Ye,
                theme: Xe
            } = e, ht = Jn("Toastify__toast", `Toastify__toast-theme--${Xe}`, `Toastify__toast--${m}`, {
                "Toastify__toast--rtl": I
            }, {
                "Toastify__toast--close-on-click": Ye
            }), It = Tt(k) ? k({
                rtl: I,
                position: _,
                type: m,
                defaultClassName: ht
            }) : Jn(ht, k), Me = function(ie) {
                let {
                    theme: J,
                    type: ke,
                    isLoading: le,
                    icon: Te
                } = ie, F = null;
                const Fe = {
                    theme: J,
                    type: ke
                };
                return Te === !1 || (Tt(Te) ? F = Te({
                    ...Fe,
                    isLoading: le
                }) : P.isValidElement(Te) ? F = P.cloneElement(Te, Fe) : le ? F = Bu.spinner() : (an => an in Bu)(ke) && (F = Bu[ke](Fe))), F
            }(e), E = !!O || !c, U = {
                closeToast: w,
                type: m,
                theme: Xe
            };
            let Q = null;
            return a === !1 || (Q = Tt(a) ? a(U) : P.isValidElement(a) ? P.cloneElement(a, U) : function(ie) {
                let {
                    closeToast: J,
                    theme: ke,
                    ariaLabel: le = "close"
                } = ie;
                return ce.createElement("button", {
                    className: `Toastify__close-button Toastify__close-button--${ke}`,
                    type: "button",
                    onClick: Te => {
                        Te.stopPropagation(), J(Te)
                    },
                    "aria-label": le
                }, ce.createElement("svg", {
                    "aria-hidden": "true",
                    viewBox: "0 0 14 16"
                }, ce.createElement("path", {
                    fillRule: "evenodd",
                    d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"
                })))
            }(U)), ce.createElement(N, {
                isIn: _e,
                done: K,
                position: _,
                preventExitTransition: n,
                nodeRef: r,
                playToast: o
            }, ce.createElement("div", {
                id: V,
                onClick: p,
                "data-in": _e,
                className: It,
                ...i,
                style: S,
                ref: r
            }, ce.createElement("div", {
                ..._e && {
                    role: R
                },
                className: Tt(x) ? x({
                    type: m
                }) : Jn("Toastify__toast-body", x),
                style: y
            }, Me != null && ce.createElement("div", {
                className: Jn("Toastify__toast-icon", {
                    "Toastify--animate-icon Toastify__zoom-enter": !He
                })
            }, Me), ce.createElement("div", null, u)), Q, ce.createElement(ak, {
                ...T && !E ? {
                    key: `pb-${T}`
                } : {},
                rtl: I,
                theme: Xe,
                delay: c,
                isRunning: t,
                isIn: _e,
                closeToast: w,
                hide: g,
                type: m,
                style: j,
                className: v,
                controlledProgress: E,
                progress: O || 0
            })))
        },
        wl = function(e, t) {
            return t === void 0 && (t = !1), {
                enter: `Toastify--animate Toastify__${e}-enter`,
                exit: `Toastify--animate Toastify__${e}-exit`,
                appendPosition: t
            }
        },
        fk = xl(wl("bounce", !0));
    xl(wl("slide", !0));
    xl(wl("zoom"));
    xl(wl("flip"));
    const pk = {
        position: "top-right",
        transition: fk,
        autoClose: 5e3,
        closeButton: !0,
        pauseOnHover: !0,
        pauseOnFocusLoss: !0,
        draggable: "touch",
        draggablePercent: 80,
        draggableDirection: "x",
        role: "alert",
        theme: "light"
    };

    function hk(e) {
        let t = {
            ...pk,
            ...e
        };
        const n = e.stacked,
            [r, i] = P.useState(!0),
            o = P.useRef(null),
            {
                getToastToRender: a,
                isToastActive: u,
                count: c
            } = ok(t),
            {
                className: p,
                style: m,
                rtl: g,
                containerId: w
            } = t;

        function N(k) {
            const S = Jn("Toastify__toast-container", `Toastify__toast-container--${k}`, {
                "Toastify__toast-container--rtl": g
            });
            return Tt(p) ? p({
                position: k,
                rtl: g,
                defaultClassName: S
            }) : Jn(S, ca(p))
        }

        function _() {
            n && (i(!0), Z.play())
        }
        return ck(() => {
            if (n) {
                var k;
                const S = o.current.querySelectorAll('[data-in="true"]'),
                    x = 12,
                    y = (k = t.position) == null ? void 0 : k.includes("top");
                let v = 0,
                    j = 0;
                Array.from(S).reverse().forEach((T, R) => {
                    const O = T;
                    O.classList.add("Toastify__toast--stacked"), R > 0 && (O.dataset.collapsed = `${r}`), O.dataset.pos || (O.dataset.pos = y ? "top" : "bot");
                    const I = v * (r ? .2 : 1) + (r ? 0 : x * R);
                    O.style.setProperty("--y", `${y?I:-1*I}px`), O.style.setProperty("--g", `${x}`), O.style.setProperty("--s", "" + (1 - (r ? j : 0))), v += O.offsetHeight, j += .025
                })
            }
        }, [r, c, n]), ce.createElement("div", {
            ref: o,
            className: "Toastify",
            id: w,
            onMouseEnter: () => {
                n && (i(!1), Z.pause())
            },
            onMouseLeave: _
        }, a((k, S) => {
            const x = S.length ? {
                ...m
            } : {
                ...m,
                pointerEvents: "none"
            };
            return ce.createElement("div", {
                className: N(k),
                style: x,
                key: `container-${k}`
            }, S.map(y => {
                let {
                    content: v,
                    props: j
                } = y;
                return ce.createElement(dk, {
                    ...j,
                    stacked: n,
                    collapseAll: _,
                    isIn: u(j.toastId, j.containerId),
                    style: j.style,
                    key: `toast-${j.key}`
                }, v)
            }))
        }))
    }
    var yt = function() {
        return yt = Object.assign || function(t) {
            for (var n, r = 1, i = arguments.length; r < i; r++) {
                n = arguments[r];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
            }
            return t
        }, yt.apply(this, arguments)
    };

    function Va(e, t, n) {
        if (n || arguments.length === 2)
            for (var r = 0, i = t.length, o; r < i; r++)(o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)), o[r] = t[r]);
        return e.concat(o || Array.prototype.slice.call(t))
    }
    var be = "-ms-",
        Lo = "-moz-",
        he = "-webkit-",
        Rg = "comm",
        _l = "rule",
        nf = "decl",
        mk = "@import",
        Ig = "@keyframes",
        gk = "@layer",
        Dg = Math.abs,
        rf = String.fromCharCode,
        Kc = Object.assign;

    function yk(e, t) {
        return Qe(e, 0) ^ 45 ? (((t << 2 ^ Qe(e, 0)) << 2 ^ Qe(e, 1)) << 2 ^ Qe(e, 2)) << 2 ^ Qe(e, 3) : 0
    }

    function Bg(e) {
        return e.trim()
    }

    function bn(e, t) {
        return (e = t.exec(e)) ? e[0] : e
    }

    function re(e, t, n) {
        return e.replace(t, n)
    }

    function da(e, t, n) {
        return e.indexOf(t, n)
    }

    function Qe(e, t) {
        return e.charCodeAt(t) | 0
    }

    function Ii(e, t, n) {
        return e.slice(t, n)
    }

    function yn(e) {
        return e.length
    }

    function Mg(e) {
        return e.length
    }

    function xo(e, t) {
        return t.push(e), e
    }

    function vk(e, t) {
        return e.map(t).join("")
    }

    function wh(e, t) {
        return e.filter(function(n) {
            return !bn(n, t)
        })
    }
    var kl = 1,
        Di = 1,
        Fg = 0,
        Qt = 0,
        $e = 0,
        Zi = "";

    function Cl(e, t, n, r, i, o, a, u) {
        return {
            value: e,
            root: t,
            parent: n,
            type: r,
            props: i,
            children: o,
            line: kl,
            column: Di,
            length: a,
            return: "",
            siblings: u
        }
    }

    function Hn(e, t) {
        return Kc(Cl("", null, null, "", null, null, 0, e.siblings), e, {
            length: -e.length
        }, t)
    }

    function li(e) {
        for (; e.root;) e = Hn(e.root, {
            children: [e]
        });
        xo(e, e.siblings)
    }

    function xk() {
        return $e
    }

    function wk() {
        return $e = Qt > 0 ? Qe(Zi, --Qt) : 0, Di--, $e === 10 && (Di = 1, kl--), $e
    }

    function rn() {
        return $e = Qt < Fg ? Qe(Zi, Qt++) : 0, Di++, $e === 10 && (Di = 1, kl++), $e
    }

    function Ir() {
        return Qe(Zi, Qt)
    }

    function fa() {
        return Qt
    }

    function Sl(e, t) {
        return Ii(Zi, e, t)
    }

    function Qc(e) {
        switch (e) {
            case 0:
            case 9:
            case 10:
            case 13:
            case 32:
                return 5;
            case 33:
            case 43:
            case 44:
            case 47:
            case 62:
            case 64:
            case 126:
            case 59:
            case 123:
            case 125:
                return 4;
            case 58:
                return 3;
            case 34:
            case 39:
            case 40:
            case 91:
                return 2;
            case 41:
            case 93:
                return 1
        }
        return 0
    }

    function _k(e) {
        return kl = Di = 1, Fg = yn(Zi = e), Qt = 0, []
    }

    function kk(e) {
        return Zi = "", e
    }

    function Mu(e) {
        return Bg(Sl(Qt - 1, Zc(e === 91 ? e + 2 : e === 40 ? e + 1 : e)))
    }

    function Ck(e) {
        for (;
            ($e = Ir()) && $e < 33;) rn();
        return Qc(e) > 2 || Qc($e) > 3 ? "" : " "
    }

    function Sk(e, t) {
        for (; --t && rn() && !($e < 48 || $e > 102 || $e > 57 && $e < 65 || $e > 70 && $e < 97););
        return Sl(e, fa() + (t < 6 && Ir() == 32 && rn() == 32))
    }

    function Zc(e) {
        for (; rn();) switch ($e) {
            case e:
                return Qt;
            case 34:
            case 39:
                e !== 34 && e !== 39 && Zc($e);
                break;
            case 40:
                e === 41 && Zc(e);
                break;
            case 92:
                rn();
                break
        }
        return Qt
    }

    function Ek(e, t) {
        for (; rn() && e + $e !== 57;)
            if (e + $e === 84 && Ir() === 47) break;
        return "/*" + Sl(t, Qt - 1) + "*" + rf(e === 47 ? e : rn())
    }

    function bk(e) {
        for (; !Qc(Ir());) rn();
        return Sl(e, Qt)
    }

    function Nk(e) {
        return kk(pa("", null, null, null, [""], e = _k(e), 0, [0], e))
    }

    function pa(e, t, n, r, i, o, a, u, c) {
        for (var p = 0, m = 0, g = a, w = 0, N = 0, _ = 0, k = 1, S = 1, x = 1, y = 0, v = "", j = i, T = o, R = r, O = v; S;) switch (_ = y, y = rn()) {
            case 40:
                if (_ != 108 && Qe(O, g - 1) == 58) {
                    da(O += re(Mu(y), "&", "&\f"), "&\f", Dg(p ? u[p - 1] : 0)) != -1 && (x = -1);
                    break
                }
            case 34:
            case 39:
            case 91:
                O += Mu(y);
                break;
            case 9:
            case 10:
            case 13:
            case 32:
                O += Ck(_);
                break;
            case 92:
                O += Sk(fa() - 1, 7);
                continue;
            case 47:
                switch (Ir()) {
                    case 42:
                    case 47:
                        xo(jk(Ek(rn(), fa()), t, n, c), c);
                        break;
                    default:
                        O += "/"
                }
                break;
            case 123 * k:
                u[p++] = yn(O) * x;
            case 125 * k:
            case 59:
            case 0:
                switch (y) {
                    case 0:
                    case 125:
                        S = 0;
                    case 59 + m:
                        x == -1 && (O = re(O, /\f/g, "")), N > 0 && yn(O) - g && xo(N > 32 ? kh(O + ";", r, n, g - 1, c) : kh(re(O, " ", "") + ";", r, n, g - 2, c), c);
                        break;
                    case 59:
                        O += ";";
                    default:
                        if (xo(R = _h(O, t, n, p, m, i, u, v, j = [], T = [], g, o), o), y === 123)
                            if (m === 0) pa(O, t, R, R, j, o, g, u, T);
                            else switch (w === 99 && Qe(O, 3) === 110 ? 100 : w) {
                                case 100:
                                case 108:
                                case 109:
                                case 115:
                                    pa(e, R, R, r && xo(_h(e, R, R, 0, 0, i, u, v, i, j = [], g, T), T), i, T, g, u, r ? j : T);
                                    break;
                                default:
                                    pa(O, R, R, R, [""], T, 0, u, T)
                            }
                }
                p = m = N = 0, k = x = 1, v = O = "", g = a;
                break;
            case 58:
                g = 1 + yn(O), N = _;
            default:
                if (k < 1) {
                    if (y == 123) --k;
                    else if (y == 125 && k++ == 0 && wk() == 125) continue
                }
                switch (O += rf(y), y * k) {
                    case 38:
                        x = m > 0 ? 1 : (O += "\f", -1);
                        break;
                    case 44:
                        u[p++] = (yn(O) - 1) * x, x = 1;
                        break;
                    case 64:
                        Ir() === 45 && (O += Mu(rn())), w = Ir(), m = g = yn(v = O += bk(fa())), y++;
                        break;
                    case 45:
                        _ === 45 && yn(O) == 2 && (k = 0)
                }
        }
        return o
    }

    function _h(e, t, n, r, i, o, a, u, c, p, m, g) {
        for (var w = i - 1, N = i === 0 ? o : [""], _ = Mg(N), k = 0, S = 0, x = 0; k < r; ++k)
            for (var y = 0, v = Ii(e, w + 1, w = Dg(S = a[k])), j = e; y < _; ++y)(j = Bg(S > 0 ? N[y] + " " + v : re(v, /&\f/g, N[y]))) && (c[x++] = j);
        return Cl(e, t, n, i === 0 ? _l : u, c, p, m, g)
    }

    function jk(e, t, n, r) {
        return Cl(e, t, n, Rg, rf(xk()), Ii(e, 2, -2), 0, r)
    }

    function kh(e, t, n, r, i) {
        return Cl(e, t, n, nf, Ii(e, 0, r), Ii(e, r + 1, -1), r, i)
    }

    function $g(e, t, n) {
        switch (yk(e, t)) {
            case 5103:
                return he + "print-" + e + e;
            case 5737:
            case 4201:
            case 3177:
            case 3433:
            case 1641:
            case 4457:
            case 2921:
            case 5572:
            case 6356:
            case 5844:
            case 3191:
            case 6645:
            case 3005:
            case 6391:
            case 5879:
            case 5623:
            case 6135:
            case 4599:
            case 4855:
            case 4215:
            case 6389:
            case 5109:
            case 5365:
            case 5621:
            case 3829:
                return he + e + e;
            case 4789:
                return Lo + e + e;
            case 5349:
            case 4246:
            case 4810:
            case 6968:
            case 2756:
                return he + e + Lo + e + be + e + e;
            case 5936:
                switch (Qe(e, t + 11)) {
                    case 114:
                        return he + e + be + re(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
                    case 108:
                        return he + e + be + re(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
                    case 45:
                        return he + e + be + re(e, /[svh]\w+-[tblr]{2}/, "lr") + e
                }
            case 6828:
            case 4268:
            case 2903:
                return he + e + be + e + e;
            case 6165:
                return he + e + be + "flex-" + e + e;
            case 5187:
                return he + e + re(e, /(\w+).+(:[^]+)/, he + "box-$1$2" + be + "flex-$1$2") + e;
            case 5443:
                return he + e + be + "flex-item-" + re(e, /flex-|-self/g, "") + (bn(e, /flex-|baseline/) ? "" : be + "grid-row-" + re(e, /flex-|-self/g, "")) + e;
            case 4675:
                return he + e + be + "flex-line-pack" + re(e, /align-content|flex-|-self/g, "") + e;
            case 5548:
                return he + e + be + re(e, "shrink", "negative") + e;
            case 5292:
                return he + e + be + re(e, "basis", "preferred-size") + e;
            case 6060:
                return he + "box-" + re(e, "-grow", "") + he + e + be + re(e, "grow", "positive") + e;
            case 4554:
                return he + re(e, /([^-])(transform)/g, "$1" + he + "$2") + e;
            case 6187:
                return re(re(re(e, /(zoom-|grab)/, he + "$1"), /(image-set)/, he + "$1"), e, "") + e;
            case 5495:
            case 3959:
                return re(e, /(image-set\([^]*)/, he + "$1$`$1");
            case 4968:
                return re(re(e, /(.+:)(flex-)?(.*)/, he + "box-pack:$3" + be + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + he + e + e;
            case 4200:
                if (!bn(e, /flex-|baseline/)) return be + "grid-column-align" + Ii(e, t) + e;
                break;
            case 2592:
            case 3360:
                return be + re(e, "template-", "") + e;
            case 4384:
            case 3616:
                return n && n.some(function(r, i) {
                    return t = i, bn(r.props, /grid-\w+-end/)
                }) ? ~da(e + (n = n[t].value), "span", 0) ? e : be + re(e, "-start", "") + e + be + "grid-row-span:" + (~da(n, "span", 0) ? bn(n, /\d+/) : +bn(n, /\d+/) - +bn(e, /\d+/)) + ";" : be + re(e, "-start", "") + e;
            case 4896:
            case 4128:
                return n && n.some(function(r) {
                    return bn(r.props, /grid-\w+-start/)
                }) ? e : be + re(re(e, "-end", "-span"), "span ", "") + e;
            case 4095:
            case 3583:
            case 4068:
            case 2532:
                return re(e, /(.+)-inline(.+)/, he + "$1$2") + e;
            case 8116:
            case 7059:
            case 5753:
            case 5535:
            case 5445:
            case 5701:
            case 4933:
            case 4677:
            case 5533:
            case 5789:
            case 5021:
            case 4765:
                if (yn(e) - 1 - t > 6) switch (Qe(e, t + 1)) {
                    case 109:
                        if (Qe(e, t + 4) !== 45) break;
                    case 102:
                        return re(e, /(.+:)(.+)-([^]+)/, "$1" + he + "$2-$3$1" + Lo + (Qe(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
                    case 115:
                        return ~da(e, "stretch", 0) ? $g(re(e, "stretch", "fill-available"), t, n) + e : e
                }
                break;
            case 5152:
            case 5920:
                return re(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, i, o, a, u, c, p) {
                    return be + i + ":" + o + p + (a ? be + i + "-span:" + (u ? c : +c - +o) + p : "") + e
                });
            case 4949:
                if (Qe(e, t + 6) === 121) return re(e, ":", ":" + he) + e;
                break;
            case 6444:
                switch (Qe(e, Qe(e, 14) === 45 ? 18 : 11)) {
                    case 120:
                        return re(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + he + (Qe(e, 14) === 45 ? "inline-" : "") + "box$3$1" + he + "$2$3$1" + be + "$2box$3") + e;
                    case 100:
                        return re(e, ":", ":" + be) + e
                }
                break;
            case 5719:
            case 2647:
            case 2135:
            case 3927:
            case 2391:
                return re(e, "scroll-", "scroll-snap-") + e
        }
        return e
    }

    function Ka(e, t) {
        for (var n = "", r = 0; r < e.length; r++) n += t(e[r], r, e, t) || "";
        return n
    }

    function Tk(e, t, n, r) {
        switch (e.type) {
            case gk:
                if (e.children.length) break;
            case mk:
            case nf:
                return e.return = e.return || e.value;
            case Rg:
                return "";
            case Ig:
                return e.return = e.value + "{" + Ka(e.children, r) + "}";
            case _l:
                if (!yn(e.value = e.props.join(","))) return ""
        }
        return yn(n = Ka(e.children, r)) ? e.return = e.value + "{" + n + "}" : ""
    }

    function Lk(e) {
        var t = Mg(e);
        return function(n, r, i, o) {
            for (var a = "", u = 0; u < t; u++) a += e[u](n, r, i, o) || "";
            return a
        }
    }

    function Ak(e) {
        return function(t) {
            t.root || (t = t.return) && e(t)
        }
    }

    function Pk(e, t, n, r) {
        if (e.length > -1 && !e.return) switch (e.type) {
            case nf:
                e.return = $g(e.value, e.length, n);
                return;
            case Ig:
                return Ka([Hn(e, {
                    value: re(e.value, "@", "@" + he)
                })], r);
            case _l:
                if (e.length) return vk(n = e.props, function(i) {
                    switch (bn(i, r = /(::plac\w+|:read-\w+)/)) {
                        case ":read-only":
                        case ":read-write":
                            li(Hn(e, {
                                props: [re(i, /:(read-\w+)/, ":" + Lo + "$1")]
                            })), li(Hn(e, {
                                props: [i]
                            })), Kc(e, {
                                props: wh(n, r)
                            });
                            break;
                        case "::placeholder":
                            li(Hn(e, {
                                props: [re(i, /:(plac\w+)/, ":" + he + "input-$1")]
                            })), li(Hn(e, {
                                props: [re(i, /:(plac\w+)/, ":" + Lo + "$1")]
                            })), li(Hn(e, {
                                props: [re(i, /:(plac\w+)/, be + "input-$1")]
                            })), li(Hn(e, {
                                props: [i]
                            })), Kc(e, {
                                props: wh(n, r)
                            });
                            break
                    }
                    return ""
                })
        }
    }
    var Ok = {
            animationIterationCount: 1,
            aspectRatio: 1,
            borderImageOutset: 1,
            borderImageSlice: 1,
            borderImageWidth: 1,
            boxFlex: 1,
            boxFlexGroup: 1,
            boxOrdinalGroup: 1,
            columnCount: 1,
            columns: 1,
            flex: 1,
            flexGrow: 1,
            flexPositive: 1,
            flexShrink: 1,
            flexNegative: 1,
            flexOrder: 1,
            gridRow: 1,
            gridRowEnd: 1,
            gridRowSpan: 1,
            gridRowStart: 1,
            gridColumn: 1,
            gridColumnEnd: 1,
            gridColumnSpan: 1,
            gridColumnStart: 1,
            msGridRow: 1,
            msGridRowSpan: 1,
            msGridColumn: 1,
            msGridColumnSpan: 1,
            fontWeight: 1,
            lineHeight: 1,
            opacity: 1,
            order: 1,
            orphans: 1,
            tabSize: 1,
            widows: 1,
            zIndex: 1,
            zoom: 1,
            WebkitLineClamp: 1,
            fillOpacity: 1,
            floodOpacity: 1,
            stopOpacity: 1,
            strokeDasharray: 1,
            strokeDashoffset: 1,
            strokeMiterlimit: 1,
            strokeOpacity: 1,
            strokeWidth: 1
        },
        bt = {},
        Bi = typeof process < "u" && bt !== void 0 && (bt.REACT_APP_SC_ATTR || bt.SC_ATTR) || "data-styled",
        zg = "active",
        Hg = "data-styled-version",
        El = "6.1.13",
        of = `/*!sc*/
`,
        Qa = typeof window < "u" && "HTMLElement" in window,
        Rk = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && bt !== void 0 && bt.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && bt.REACT_APP_SC_DISABLE_SPEEDY !== "" ? bt.REACT_APP_SC_DISABLE_SPEEDY !== "false" && bt.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && bt !== void 0 && bt.SC_DISABLE_SPEEDY !== void 0 && bt.SC_DISABLE_SPEEDY !== "" && bt.SC_DISABLE_SPEEDY !== "false" && bt.SC_DISABLE_SPEEDY),
        bl = Object.freeze([]),
        Mi = Object.freeze({});

    function Ik(e, t, n) {
        return n === void 0 && (n = Mi), e.theme !== n.theme && e.theme || t || n.theme
    }
    var Wg = new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]),
        Dk = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
        Bk = /(^-|-$)/g;

    function Ch(e) {
        return e.replace(Dk, "-").replace(Bk, "")
    }
    var Mk = /(a)(d)/gi,
        Qs = 52,
        Sh = function(e) {
            return String.fromCharCode(e + (e > 25 ? 39 : 97))
        };

    function Yc(e) {
        var t, n = "";
        for (t = Math.abs(e); t > Qs; t = t / Qs | 0) n = Sh(t % Qs) + n;
        return (Sh(t % Qs) + n).replace(Mk, "$1-$2")
    }
    var Fu, Ug = 5381,
        _i = function(e, t) {
            for (var n = t.length; n;) e = 33 * e ^ t.charCodeAt(--n);
            return e
        },
        Vg = function(e) {
            return _i(Ug, e)
        };

    function Fk(e) {
        return Yc(Vg(e) >>> 0)
    }

    function $k(e) {
        return e.displayName || e.name || "Component"
    }

    function $u(e) {
        return typeof e == "string" && !0
    }
    var Kg = typeof Symbol == "function" && Symbol.for,
        Qg = Kg ? Symbol.for("react.memo") : 60115,
        zk = Kg ? Symbol.for("react.forward_ref") : 60112,
        Hk = {
            childContextTypes: !0,
            contextType: !0,
            contextTypes: !0,
            defaultProps: !0,
            displayName: !0,
            getDefaultProps: !0,
            getDerivedStateFromError: !0,
            getDerivedStateFromProps: !0,
            mixins: !0,
            propTypes: !0,
            type: !0
        },
        Wk = {
            name: !0,
            length: !0,
            prototype: !0,
            caller: !0,
            callee: !0,
            arguments: !0,
            arity: !0
        },
        Zg = {
            $$typeof: !0,
            compare: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
            type: !0
        },
        Uk = ((Fu = {})[zk] = {
            $$typeof: !0,
            render: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0
        }, Fu[Qg] = Zg, Fu);

    function Eh(e) {
        return ("type" in (t = e) && t.type.$$typeof) === Qg ? Zg : "$$typeof" in e ? Uk[e.$$typeof] : Hk;
        var t
    }
    var Vk = Object.defineProperty,
        Kk = Object.getOwnPropertyNames,
        bh = Object.getOwnPropertySymbols,
        Qk = Object.getOwnPropertyDescriptor,
        Zk = Object.getPrototypeOf,
        Nh = Object.prototype;

    function Yg(e, t, n) {
        if (typeof t != "string") {
            if (Nh) {
                var r = Zk(t);
                r && r !== Nh && Yg(e, r, n)
            }
            var i = Kk(t);
            bh && (i = i.concat(bh(t)));
            for (var o = Eh(e), a = Eh(t), u = 0; u < i.length; ++u) {
                var c = i[u];
                if (!(c in Wk || n && n[c] || a && c in a || o && c in o)) {
                    var p = Qk(t, c);
                    try {
                        Vk(e, c, p)
                    } catch {}
                }
            }
        }
        return e
    }

    function Fi(e) {
        return typeof e == "function"
    }

    function sf(e) {
        return typeof e == "object" && "styledComponentId" in e
    }

    function Tr(e, t) {
        return e && t ? "".concat(e, " ").concat(t) : e || t || ""
    }

    function jh(e, t) {
        if (e.length === 0) return "";
        for (var n = e[0], r = 1; r < e.length; r++) n += e[r];
        return n
    }

    function Xo(e) {
        return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof)
    }

    function Jc(e, t, n) {
        if (n === void 0 && (n = !1), !n && !Xo(e) && !Array.isArray(e)) return t;
        if (Array.isArray(t))
            for (var r = 0; r < t.length; r++) e[r] = Jc(e[r], t[r]);
        else if (Xo(t))
            for (var r in t) e[r] = Jc(e[r], t[r]);
        return e
    }

    function af(e, t) {
        Object.defineProperty(e, "toString", {
            value: t
        })
    }

    function as(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : ""))
    }
    var Yk = function() {
            function e(t) {
                this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t
            }
            return e.prototype.indexOfGroup = function(t) {
                for (var n = 0, r = 0; r < t; r++) n += this.groupSizes[r];
                return n
            }, e.prototype.insertRules = function(t, n) {
                if (t >= this.groupSizes.length) {
                    for (var r = this.groupSizes, i = r.length, o = i; t >= o;)
                        if ((o <<= 1) < 0) throw as(16, "".concat(t));
                    this.groupSizes = new Uint32Array(o), this.groupSizes.set(r), this.length = o;
                    for (var a = i; a < o; a++) this.groupSizes[a] = 0
                }
                for (var u = this.indexOfGroup(t + 1), c = (a = 0, n.length); a < c; a++) this.tag.insertRule(u, n[a]) && (this.groupSizes[t]++, u++)
            }, e.prototype.clearGroup = function(t) {
                if (t < this.length) {
                    var n = this.groupSizes[t],
                        r = this.indexOfGroup(t),
                        i = r + n;
                    this.groupSizes[t] = 0;
                    for (var o = r; o < i; o++) this.tag.deleteRule(r)
                }
            }, e.prototype.getGroup = function(t) {
                var n = "";
                if (t >= this.length || this.groupSizes[t] === 0) return n;
                for (var r = this.groupSizes[t], i = this.indexOfGroup(t), o = i + r, a = i; a < o; a++) n += "".concat(this.tag.getRule(a)).concat(of);
                return n
            }, e
        }(),
        ha = new Map,
        Za = new Map,
        ma = 1,
        Zs = function(e) {
            if (ha.has(e)) return ha.get(e);
            for (; Za.has(ma);) ma++;
            var t = ma++;
            return ha.set(e, t), Za.set(t, e), t
        },
        Jk = function(e, t) {
            ma = t + 1, ha.set(e, t), Za.set(t, e)
        },
        qk = "style[".concat(Bi, "][").concat(Hg, '="').concat(El, '"]'),
        Gk = new RegExp("^".concat(Bi, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),
        Xk = function(e, t, n) {
            for (var r, i = n.split(","), o = 0, a = i.length; o < a; o++)(r = i[o]) && e.registerName(t, r)
        },
        eC = function(e, t) {
            for (var n, r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(of), i = [], o = 0, a = r.length; o < a; o++) {
                var u = r[o].trim();
                if (u) {
                    var c = u.match(Gk);
                    if (c) {
                        var p = 0 | parseInt(c[1], 10),
                            m = c[2];
                        p !== 0 && (Jk(m, p), Xk(e, m, c[3]), e.getTag().insertRules(p, i)), i.length = 0
                    } else i.push(u)
                }
            }
        },
        Th = function(e) {
            for (var t = document.querySelectorAll(qk), n = 0, r = t.length; n < r; n++) {
                var i = t[n];
                i && i.getAttribute(Bi) !== zg && (eC(e, i), i.parentNode && i.parentNode.removeChild(i))
            }
        };

    function tC() {
        return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null
    }
    var Jg = function(e) {
            var t = document.head,
                n = e || t,
                r = document.createElement("style"),
                i = function(u) {
                    var c = Array.from(u.querySelectorAll("style[".concat(Bi, "]")));
                    return c[c.length - 1]
                }(n),
                o = i !== void 0 ? i.nextSibling : null;
            r.setAttribute(Bi, zg), r.setAttribute(Hg, El);
            var a = tC();
            return a && r.setAttribute("nonce", a), n.insertBefore(r, o), r
        },
        nC = function() {
            function e(t) {
                this.element = Jg(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(n) {
                    if (n.sheet) return n.sheet;
                    for (var r = document.styleSheets, i = 0, o = r.length; i < o; i++) {
                        var a = r[i];
                        if (a.ownerNode === n) return a
                    }
                    throw as(17)
                }(this.element), this.length = 0
            }
            return e.prototype.insertRule = function(t, n) {
                try {
                    return this.sheet.insertRule(n, t), this.length++, !0
                } catch {
                    return !1
                }
            }, e.prototype.deleteRule = function(t) {
                this.sheet.deleteRule(t), this.length--
            }, e.prototype.getRule = function(t) {
                var n = this.sheet.cssRules[t];
                return n && n.cssText ? n.cssText : ""
            }, e
        }(),
        rC = function() {
            function e(t) {
                this.element = Jg(t), this.nodes = this.element.childNodes, this.length = 0
            }
            return e.prototype.insertRule = function(t, n) {
                if (t <= this.length && t >= 0) {
                    var r = document.createTextNode(n);
                    return this.element.insertBefore(r, this.nodes[t] || null), this.length++, !0
                }
                return !1
            }, e.prototype.deleteRule = function(t) {
                this.element.removeChild(this.nodes[t]), this.length--
            }, e.prototype.getRule = function(t) {
                return t < this.length ? this.nodes[t].textContent : ""
            }, e
        }(),
        iC = function() {
            function e(t) {
                this.rules = [], this.length = 0
            }
            return e.prototype.insertRule = function(t, n) {
                return t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0)
            }, e.prototype.deleteRule = function(t) {
                this.rules.splice(t, 1), this.length--
            }, e.prototype.getRule = function(t) {
                return t < this.length ? this.rules[t] : ""
            }, e
        }(),
        Lh = Qa,
        oC = {
            isServer: !Qa,
            useCSSOMInjection: !Rk
        },
        qg = function() {
            function e(t, n, r) {
                t === void 0 && (t = Mi), n === void 0 && (n = {});
                var i = this;
                this.options = yt(yt({}, oC), t), this.gs = n, this.names = new Map(r), this.server = !!t.isServer, !this.server && Qa && Lh && (Lh = !1, Th(this)), af(this, function() {
                    return function(o) {
                        for (var a = o.getTag(), u = a.length, c = "", p = function(g) {
                                var w = function(x) {
                                    return Za.get(x)
                                }(g);
                                if (w === void 0) return "continue";
                                var N = o.names.get(w),
                                    _ = a.getGroup(g);
                                if (N === void 0 || !N.size || _.length === 0) return "continue";
                                var k = "".concat(Bi, ".g").concat(g, '[id="').concat(w, '"]'),
                                    S = "";
                                N !== void 0 && N.forEach(function(x) {
                                    x.length > 0 && (S += "".concat(x, ","))
                                }), c += "".concat(_).concat(k, '{content:"').concat(S, '"}').concat(of)
                            }, m = 0; m < u; m++) p(m);
                        return c
                    }(i)
                })
            }
            return e.registerId = function(t) {
                return Zs(t)
            }, e.prototype.rehydrate = function() {
                !this.server && Qa && Th(this)
            }, e.prototype.reconstructWithOptions = function(t, n) {
                return n === void 0 && (n = !0), new e(yt(yt({}, this.options), t), this.gs, n && this.names || void 0)
            }, e.prototype.allocateGSInstance = function(t) {
                return this.gs[t] = (this.gs[t] || 0) + 1
            }, e.prototype.getTag = function() {
                return this.tag || (this.tag = (t = function(n) {
                    var r = n.useCSSOMInjection,
                        i = n.target;
                    return n.isServer ? new iC(i) : r ? new nC(i) : new rC(i)
                }(this.options), new Yk(t)));
                var t
            }, e.prototype.hasNameForId = function(t, n) {
                return this.names.has(t) && this.names.get(t).has(n)
            }, e.prototype.registerName = function(t, n) {
                if (Zs(t), this.names.has(t)) this.names.get(t).add(n);
                else {
                    var r = new Set;
                    r.add(n), this.names.set(t, r)
                }
            }, e.prototype.insertRules = function(t, n, r) {
                this.registerName(t, n), this.getTag().insertRules(Zs(t), r)
            }, e.prototype.clearNames = function(t) {
                this.names.has(t) && this.names.get(t).clear()
            }, e.prototype.clearRules = function(t) {
                this.getTag().clearGroup(Zs(t)), this.clearNames(t)
            }, e.prototype.clearTag = function() {
                this.tag = void 0
            }, e
        }(),
        sC = /&/g,
        aC = /^\s*\/\/.*$/gm;

    function Gg(e, t) {
        return e.map(function(n) {
            return n.type === "rule" && (n.value = "".concat(t, " ").concat(n.value), n.value = n.value.replaceAll(",", ",".concat(t, " ")), n.props = n.props.map(function(r) {
                return "".concat(t, " ").concat(r)
            })), Array.isArray(n.children) && n.type !== "@keyframes" && (n.children = Gg(n.children, t)), n
        })
    }

    function lC(e) {
        var t, n, r, i = Mi,
            o = i.options,
            a = o === void 0 ? Mi : o,
            u = i.plugins,
            c = u === void 0 ? bl : u,
            p = function(w, N, _) {
                return _.startsWith(n) && _.endsWith(n) && _.replaceAll(n, "").length > 0 ? ".".concat(t) : w
            },
            m = c.slice();
        m.push(function(w) {
            w.type === _l && w.value.includes("&") && (w.props[0] = w.props[0].replace(sC, n).replace(r, p))
        }), a.prefix && m.push(Pk), m.push(Tk);
        var g = function(w, N, _, k) {
            N === void 0 && (N = ""), _ === void 0 && (_ = ""), k === void 0 && (k = "&"), t = k, n = N, r = new RegExp("\\".concat(n, "\\b"), "g");
            var S = w.replace(aC, ""),
                x = Nk(_ || N ? "".concat(_, " ").concat(N, " { ").concat(S, " }") : S);
            a.namespace && (x = Gg(x, a.namespace));
            var y = [];
            return Ka(x, Lk(m.concat(Ak(function(v) {
                return y.push(v)
            })))), y
        };
        return g.hash = c.length ? c.reduce(function(w, N) {
            return N.name || as(15), _i(w, N.name)
        }, Ug).toString() : "", g
    }
    var uC = new qg,
        qc = lC(),
        Xg = ce.createContext({
            shouldForwardProp: void 0,
            styleSheet: uC,
            stylis: qc
        });
    Xg.Consumer;
    ce.createContext(void 0);

    function Ah() {
        return P.useContext(Xg)
    }
    var cC = function() {
            function e(t, n) {
                var r = this;
                this.inject = function(i, o) {
                    o === void 0 && (o = qc);
                    var a = r.name + o.hash;
                    i.hasNameForId(r.id, a) || i.insertRules(r.id, a, o(r.rules, a, "@keyframes"))
                }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = n, af(this, function() {
                    throw as(12, String(r.name))
                })
            }
            return e.prototype.getName = function(t) {
                return t === void 0 && (t = qc), this.name + t.hash
            }, e
        }(),
        dC = function(e) {
            return e >= "A" && e <= "Z"
        };

    function Ph(e) {
        for (var t = "", n = 0; n < e.length; n++) {
            var r = e[n];
            if (n === 1 && r === "-" && e[0] === "-") return e;
            dC(r) ? t += "-" + r.toLowerCase() : t += r
        }
        return t.startsWith("ms-") ? "-" + t : t
    }
    var e1 = function(e) {
            return e == null || e === !1 || e === ""
        },
        t1 = function(e) {
            var t, n, r = [];
            for (var i in e) {
                var o = e[i];
                e.hasOwnProperty(i) && !e1(o) && (Array.isArray(o) && o.isCss || Fi(o) ? r.push("".concat(Ph(i), ":"), o, ";") : Xo(o) ? r.push.apply(r, Va(Va(["".concat(i, " {")], t1(o), !1), ["}"], !1)) : r.push("".concat(Ph(i), ": ").concat((t = i, (n = o) == null || typeof n == "boolean" || n === "" ? "" : typeof n != "number" || n === 0 || t in Ok || t.startsWith("--") ? String(n).trim() : "".concat(n, "px")), ";")))
            }
            return r
        };

    function Dr(e, t, n, r) {
        if (e1(e)) return [];
        if (sf(e)) return [".".concat(e.styledComponentId)];
        if (Fi(e)) {
            if (!Fi(o = e) || o.prototype && o.prototype.isReactComponent || !t) return [e];
            var i = e(t);
            return Dr(i, t, n, r)
        }
        var o;
        return e instanceof cC ? n ? (e.inject(n, r), [e.getName(r)]) : [e] : Xo(e) ? t1(e) : Array.isArray(e) ? Array.prototype.concat.apply(bl, e.map(function(a) {
            return Dr(a, t, n, r)
        })) : [e.toString()]
    }

    function fC(e) {
        for (var t = 0; t < e.length; t += 1) {
            var n = e[t];
            if (Fi(n) && !sf(n)) return !1
        }
        return !0
    }
    var pC = Vg(El),
        hC = function() {
            function e(t, n, r) {
                this.rules = t, this.staticRulesId = "", this.isStatic = (r === void 0 || r.isStatic) && fC(t), this.componentId = n, this.baseHash = _i(pC, n), this.baseStyle = r, qg.registerId(n)
            }
            return e.prototype.generateAndInjectStyles = function(t, n, r) {
                var i = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, n, r) : "";
                if (this.isStatic && !r.hash)
                    if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId)) i = Tr(i, this.staticRulesId);
                    else {
                        var o = jh(Dr(this.rules, t, n, r)),
                            a = Yc(_i(this.baseHash, o) >>> 0);
                        if (!n.hasNameForId(this.componentId, a)) {
                            var u = r(o, ".".concat(a), void 0, this.componentId);
                            n.insertRules(this.componentId, a, u)
                        }
                        i = Tr(i, a), this.staticRulesId = a
                    }
                else {
                    for (var c = _i(this.baseHash, r.hash), p = "", m = 0; m < this.rules.length; m++) {
                        var g = this.rules[m];
                        if (typeof g == "string") p += g;
                        else if (g) {
                            var w = jh(Dr(g, t, n, r));
                            c = _i(c, w + m), p += w
                        }
                    }
                    if (p) {
                        var N = Yc(c >>> 0);
                        n.hasNameForId(this.componentId, N) || n.insertRules(this.componentId, N, r(p, ".".concat(N), void 0, this.componentId)), i = Tr(i, N)
                    }
                }
                return i
            }, e
        }(),
        n1 = ce.createContext(void 0);
    n1.Consumer;
    var zu = {};

    function mC(e, t, n) {
        var r = sf(e),
            i = e,
            o = !$u(e),
            a = t.attrs,
            u = a === void 0 ? bl : a,
            c = t.componentId,
            p = c === void 0 ? function(j, T) {
                var R = typeof j != "string" ? "sc" : Ch(j);
                zu[R] = (zu[R] || 0) + 1;
                var O = "".concat(R, "-").concat(Fk(El + R + zu[R]));
                return T ? "".concat(T, "-").concat(O) : O
            }(t.displayName, t.parentComponentId) : c,
            m = t.displayName,
            g = m === void 0 ? function(j) {
                return $u(j) ? "styled.".concat(j) : "Styled(".concat($k(j), ")")
            }(e) : m,
            w = t.displayName && t.componentId ? "".concat(Ch(t.displayName), "-").concat(t.componentId) : t.componentId || p,
            N = r && i.attrs ? i.attrs.concat(u).filter(Boolean) : u,
            _ = t.shouldForwardProp;
        if (r && i.shouldForwardProp) {
            var k = i.shouldForwardProp;
            if (t.shouldForwardProp) {
                var S = t.shouldForwardProp;
                _ = function(j, T) {
                    return k(j, T) && S(j, T)
                }
            } else _ = k
        }
        var x = new hC(n, w, r ? i.componentStyle : void 0);

        function y(j, T) {
            return function(R, O, I) {
                var V = R.attrs,
                    K = R.componentStyle,
                    _e = R.defaultProps,
                    He = R.foldedComponentIds,
                    Ye = R.styledComponentId,
                    Xe = R.target,
                    ht = ce.useContext(n1),
                    It = Ah(),
                    Me = R.shouldForwardProp || It.shouldForwardProp,
                    E = Ik(O, ht, _e) || Mi,
                    U = function(Te, F, Fe) {
                        for (var an, _n = yt(yt({}, F), {
                                className: void 0,
                                theme: Fe
                            }), Yi = 0; Yi < Te.length; Yi += 1) {
                            var ln = Fi(an = Te[Yi]) ? an(_n) : an;
                            for (var Zt in ln) _n[Zt] = Zt === "className" ? Tr(_n[Zt], ln[Zt]) : Zt === "style" ? yt(yt({}, _n[Zt]), ln[Zt]) : ln[Zt]
                        }
                        return F.className && (_n.className = Tr(_n.className, F.className)), _n
                    }(V, O, E),
                    Q = U.as || Xe,
                    ie = {};
                for (var J in U) U[J] === void 0 || J[0] === "$" || J === "as" || J === "theme" && U.theme === E || (J === "forwardedAs" ? ie.as = U.forwardedAs : Me && !Me(J, Q) || (ie[J] = U[J]));
                var ke = function(Te, F) {
                        var Fe = Ah(),
                            an = Te.generateAndInjectStyles(F, Fe.styleSheet, Fe.stylis);
                        return an
                    }(K, U),
                    le = Tr(He, Ye);
                return ke && (le += " " + ke), U.className && (le += " " + U.className), ie[$u(Q) && !Wg.has(Q) ? "class" : "className"] = le, ie.ref = I, P.createElement(Q, ie)
            }(v, j, T)
        }
        y.displayName = g;
        var v = ce.forwardRef(y);
        return v.attrs = N, v.componentStyle = x, v.displayName = g, v.shouldForwardProp = _, v.foldedComponentIds = r ? Tr(i.foldedComponentIds, i.styledComponentId) : "", v.styledComponentId = w, v.target = r ? i.target : e, Object.defineProperty(v, "defaultProps", {
            get: function() {
                return this._foldedDefaultProps
            },
            set: function(j) {
                this._foldedDefaultProps = r ? function(T) {
                    for (var R = [], O = 1; O < arguments.length; O++) R[O - 1] = arguments[O];
                    for (var I = 0, V = R; I < V.length; I++) Jc(T, V[I], !0);
                    return T
                }({}, i.defaultProps, j) : j
            }
        }), af(v, function() {
            return ".".concat(v.styledComponentId)
        }), o && Yg(v, e, {
            attrs: !0,
            componentStyle: !0,
            displayName: !0,
            foldedComponentIds: !0,
            shouldForwardProp: !0,
            styledComponentId: !0,
            target: !0
        }), v
    }

    function Oh(e, t) {
        for (var n = [e[0]], r = 0, i = t.length; r < i; r += 1) n.push(t[r], e[r + 1]);
        return n
    }
    var Rh = function(e) {
        return Object.assign(e, {
            isCss: !0
        })
    };

    function gC(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        if (Fi(e) || Xo(e)) return Rh(Dr(Oh(bl, Va([e], t, !0))));
        var r = e;
        return t.length === 0 && r.length === 1 && typeof r[0] == "string" ? Dr(r) : Rh(Dr(Oh(r, t)))
    }

    function Gc(e, t, n) {
        if (n === void 0 && (n = Mi), !t) throw as(1, t);
        var r = function(i) {
            for (var o = [], a = 1; a < arguments.length; a++) o[a - 1] = arguments[a];
            return e(t, n, gC.apply(void 0, Va([i], o, !1)))
        };
        return r.attrs = function(i) {
            return Gc(e, t, yt(yt({}, n), {
                attrs: Array.prototype.concat(n.attrs, i).filter(Boolean)
            }))
        }, r.withConfig = function(i) {
            return Gc(e, t, yt(yt({}, n), i))
        }, r
    }
    var r1 = function(e) {
            return Gc(mC, e)
        },
        i1 = r1;
    Wg.forEach(function(e) {
        i1[e] = r1(e)
    });
    const lf = fe.create({
        baseURL: "https://laporke-desa-banteran.web.id"
    });
    lf.interceptors.response.use(e => e, e => (e.response && e.response.status === 401 && (Z.error("Sesi Anda telah berakhir. Silakan login kembali."), localStorage.removeItem("token"), window.location.href = "/login"), Promise.reject(e)));
    const yC = async (e, t) => {
        var n, r;
        try {
            const i = await fe.post("https://laporke-desa-banteran.web.id/auth/login", {
                username: e,
                password: t
            });
            return i.data && i.data.access_token ? {
                success: !0,
                data: i.data
            } : {
                success: !1,
                message: "Login gagal, token tidak ditemukan."
            }
        } catch (i) {
            return fe.isAxiosError(i) ? {
                success: !1,
                message: ((r = (n = i.response) == null ? void 0 : n.data) == null ? void 0 : r.message) || "Kesalahan server, silakan coba lagi."
            } : {
                success: !1,
                message: "Terjadi kesalahan jaringan."
            }
        }
    }, vC = async () => {
        var e, t;
        try {
            const n = await lf.post("/auth/logout", null, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            return localStorage.removeItem("token"), n.data
        } catch (n) {
            throw new Error(((t = (e = n.response) == null ? void 0 : e.data) == null ? void 0 : t.message) || "Logout failed")
        }
    }, xC = async () => {
        var e, t;
        try {
            const n = localStorage.getItem("token");
            if (!n) throw new Error("Token tidak ditemukan. Silakan login kembali.");
            return (await fe.get("https://laporke-desa-banteran.web.id/auth/profile", {
                headers: {
                    Authorization: `Bearer ${n}`
                }
            })).data.data
        } catch (n) {
            throw new Error(((t = (e = n.response) == null ? void 0 : e.data) == null ? void 0 : t.message) || "Gagal memuat data profil")
        }
    }, wC = async (e, t) => {
        var n, r;
        try {
            const i = localStorage.getItem("token");
            return (await fe.post("https://laporke-desa-banteran.web.id/auth/change-password", {
                old_password: e,
                new_password: t
            }, {
                headers: {
                    Authorization: `Bearer ${i}`,
                    "Content-Type": "application/json"
                }
            })).data
        } catch (i) {
            throw new Error(((r = (n = i.response) == null ? void 0 : n.data) == null ? void 0 : r.message) || "Gagal mengubah kata sandi")
        }
    }, _C = async () => {
        var e, t;
        try {
            return (await lf.get("/laporan/get-chart")).data.data
        } catch (n) {
            throw new Error(((t = (e = n.response) == null ? void 0 : e.data) == null ? void 0 : t.message) || "Gagal mengambil data chart")
        }
    }, kC = async () => {
        var e, t;
        try {
            return (await fe.get("https://laporke-desa-banteran.web.id/laporan/get-all")).data.data
        } catch (n) {
            throw new Error(((t = (e = n.response) == null ? void 0 : e.data) == null ? void 0 : t.message) || "Gagal memuat data laporan")
        }
    }, CC = async e => {
        try {
            const t = localStorage.getItem("token");
            if (!t) throw new Error("Token tidak ditemukan");
            return (await fe.delete("https://laporke-desa-banteran.web.id/laporan/delete", {
                data: {
                    id: e
                },
                headers: {
                    Authorization: `Bearer ${t}`,
                    "Content-Type": "application/json"
                }
            })).data
        } catch (t) {
            throw console.error("Error deleting laporan:", t), t
        }
    }, SC = async () => {
        try {
            const {
                data: e
            } = await fe.get("https://laporke-desa-banteran.web.id/laporan/get-all");
            return Z.success("Daftar aduan berhasil dimuat!"), e
        } catch (e) {
            throw fe.isAxiosError(e) ? e.response ? Z.error(`Error: ${e.response.data.message||"Gagal memuat daftar aduan"}`) : e.request ? Z.error("Error: Tidak ada respons dari server. Periksa koneksi Anda.") : Z.error(`Error: ${e.message}`) : Z.error(`Error: ${e.message}`), console.error(e), e
        }
    }, EC = async (e, t) => {
        var n;
        try {
            const r = localStorage.getItem("token");
            if (!r) throw Z.error("Error: Token autentikasi tidak ditemukan. Silakan login kembali."), new Error("Token tidak ditemukan");
            const i = await fe.put("https://laporke-desa-banteran.web.id/laporan/update-status", {
                id: e,
                status: t
            }, {
                headers: {
                    Authorization: `Bearer ${r}`,
                    "Content-Type": "application/json"
                }
            });
            return Z.success("Status laporan berhasil diperbarui."), i.data
        } catch (r) {
            if (r.response) {
                const i = r.response.status,
                    o = ((n = r.response.data) == null ? void 0 : n.message) || "Terjadi kesalahan pada server.";
                switch (i) {
                    case 400:
                        Z.error(`Bad Request: ${o}`);
                        break;
                    case 401:
                        Z.error("Unauthorized: Token autentikasi tidak valid atau telah kedaluwarsa. Silakan login kembali.");
                        break;
                    case 403:
                        Z.error("Forbidden: Anda tidak memiliki izin untuk melakukan aksi ini.");
                        break;
                    case 404:
                        Z.error("Not Found: Laporan tidak ditemukan atau endpoint tidak tersedia.");
                        break;
                    case 500:
                        Z.error("Internal Server Error: Terjadi kesalahan pada server. Silakan coba lagi nanti.");
                        break;
                    default:
                        Z.error(`Error ${i}: ${o}`)
                }
            } else r.request ? Z.error("Network Error: Tidak dapat terhubung ke server. Periksa koneksi internet Anda.") : Z.error(`Error: ${r.message||"Terjadi kesalahan yang tidak diketahui."}`);
            throw r
        }
    }, bC = i1.div`
    max-width: 244px;
    height: 203px;

    @media (min-width: 768px) {
        max-width: none;
        width: 244px;
    }
`;

    function NC() {
        const [e, t] = P.useState([]), [n, r] = P.useState(null), [i, o] = P.useState("");
        P.useEffect(() => {
            (async () => {
                try {
                    const p = await SC();
                    t(p.data)
                } catch {
                    Z.error("Gagal memuat daftar aduan")
                }
            })()
        }, []);
        const a = e.filter(c => {
                const p = i.toLowerCase();
                return c.title.toLowerCase().includes(p) || c.status.toLowerCase().includes(p) || c.location.toLowerCase().includes(p)
            }),
            u = c => {
                const p = e.find(m => m.id === c);
                r(p)
            };
        return d.jsxs("div", {
            style: {
                padding: "0px 20px"
            },
            children: [d.jsxs("div", {
                className: "card border-0 rounded-5 text-center text-white",
                style: {
                    background: `url(${oe.BGHeroSection}) no-repeat bottom`,
                    backgroundSize: "cover",
                    padding: "98px 16px 61px 16px",
                    marginBottom: "64px"
                },
                children: [d.jsxs("h1", {
                    className: "fw-semibold mb-3 lh-base",
                    children: ["Daftar Aduan", d.jsx("br", {}), "Warga Desa Banteran"]
                }), d.jsx("h4", {
                    className: "fw-normal mx-auto lh-base",
                    style: {
                        maxWidth: "825px",
                        marginBottom: "56px"
                    },
                    children: "Pantau semua aduan yang telah dikirimkan warga, mulai dari status pengajuan hingga penyelesaian."
                }), d.jsxs("div", {
                    className: "d-flex align-items-center justify-content-center",
                    children: [d.jsx("input", {
                        className: "form-control form-control-sm rounded-3 border-0 w-100 me-4 focus-ring focus-ring-light",
                        type: "text",
                        placeholder: "Cari laporan disini...",
                        style: {
                            maxWidth: "584px",
                            padding: "12px"
                        },
                        value: i,
                        onChange: c => o(c.target.value)
                    }), d.jsx("button", {
                        type: "button",
                        className: "btn border-0 btn-sm rounded-3",
                        style: {
                            backgroundColor: "#FF8A07",
                            padding: "11.43px 12px"
                        },
                        children: d.jsx("img", {
                            src: oe.LogoSearchButton
                        })
                    })]
                })]
            }), e.length === 0 ? d.jsxs("div", {
                className: "row mx-auto mb-5 align-items-center",
                style: {
                    maxWidth: "1091px"
                },
                children: [d.jsx("div", {
                    className: "col-10 col-sm-6 col-md-5 col-lg-auto px-0 mx-auto mx-md-0",
                    children: d.jsx("img", {
                        src: oe.ImageTidakAdaLaporan,
                        className: "w-100"
                    })
                }), d.jsxs("div", {
                    className: "col-12 col-md px-0 mt-4 mt-md-0 mx-auto ms-md-4 ms-xl-auto me-md-0 text-center text-md-start",
                    style: {
                        maxWidth: "570px"
                    },
                    children: [d.jsx("h2", {
                        className: "mb-4 fw-semibold",
                        style: {
                            lineHeight: "42px"
                        },
                        children: "Belum Ada Aduan yang Masuk"
                    }), d.jsx("p", {
                        className: "mb-4",
                        style: {
                            maxWidth: "524px",
                            fontSize: "18px",
                            lineHeight: "31px"
                        },
                        children: "Yuk, jadi yang pertama menyampaikan aspirasi atau laporan Anda untuk desa yang lebih baik!"
                    }), d.jsx(Pr, {
                        to: "/",
                        className: "btn border-0 rounded-4 text-white fw-semibold",
                        style: {
                            padding: "8px 26.35px",
                            backgroundColor: "#C40C0C"
                        },
                        children: "Laporkan Aduan Baru"
                    })]
                })]
            }) : d.jsx(d.Fragment, {
                children: a.length === 0 ? d.jsxs("div", {
                    className: "row mx-auto mb-5 align-items-center",
                    style: {
                        maxWidth: "1009px"
                    },
                    children: [d.jsx("div", {
                        className: "col-10 col-sm-6 col-md-5 col-lg-auto px-0 mx-auto mx-md-0",
                        children: d.jsx("img", {
                            src: oe.ImagesTidakAdaPencarian,
                            className: "w-100"
                        })
                    }), d.jsxs("div", {
                        className: "col-12 col-md px-0 mt-4 mt-md-0 mx-auto ms-md-4 ms-xl-auto me-md-0 text-center text-md-start",
                        style: {
                            maxWidth: "570px"
                        },
                        children: [d.jsx("h2", {
                            className: "mb-4 fw-semibold",
                            style: {
                                lineHeight: "42px"
                            },
                            children: "Aduan Tidak Ditemukan"
                        }), d.jsx("p", {
                            className: "mb-4",
                            style: {
                                maxWidth: "524px",
                                fontSize: "18px",
                                lineHeight: "31px"
                            },
                            children: "Maaf, kami tidak menemukan aduan yang sesuai dengan kata kunci yang Anda gunakan."
                        }), d.jsx("button", {
                            type: "button",
                            className: "btn border-0 rounded-4 text-white fw-semibold",
                            style: {
                                padding: "8px 25.54px",
                                backgroundColor: "#C40C0C"
                            },
                            onClick: () => o(""),
                            children: "Reset Pencarian"
                        })]
                    })]
                }) : a.map(c => d.jsx("div", {
                    className: "card border-0 rounded-4 shadow mx-auto p-4 mb-3",
                    style: {
                        maxWidth: "980.33px"
                    },
                    children: d.jsxs("div", {
                        className: "row mx-0 align-items-center",
                        children: [d.jsx("div", {
                            className: "col-12 mx-auto ms-md-0 me-md-3 px-0",
                            style: {
                                maxWidth: "274.33px",
                                height: "222px"
                            },
                            children: d.jsx("a", {
                                href: `https://laporke-desa-banteran.web.id/static/uploads/${c.photo}`,
                                target: "_blank",
                                children: d.jsx("img", {
                                    src: `https://laporke-desa-banteran.web.id/static/uploads/${c.photo}`,
                                    className: "object-fit-cover w-100 h-100 rounded-4"
                                })
                            })
                        }), d.jsxs("div", {
                            className: "col-12 col-md px-0 mt-3 mt-md-0",
                            children: [d.jsxs("div", {
                                className: "row mx-0",
                                children: [d.jsx("div", {
                                    className: "col-12 col-sm px-0",
                                    children: d.jsx("h4", {
                                        className: "mb-3 lh-base",
                                        children: c.title
                                    })
                                }), d.jsx("div", {
                                    className: "col-auto px-3 py-1 rounded-pill mb-3 mb-sm-auto ms-sm-3",
                                    style: {
                                        backgroundColor: c.status === "pending" ? "#FCDDCC" : c.status === "open" ? "#FFF7CC" : c.status === "closed" ? "rgba(0, 193, 122, 0.1)" : "transparent",
                                        color: c.status === "pending" ? "#C40C0C" : c.status === "open" ? "#DBA000" : c.status === "closed" ? "#00C17A" : "inherit"
                                    },
                                    children: c.status === "pending" ? "Belum diproses" : c.status === "open" ? "Sedang diproses" : c.status === "closed" ? "Telah selesai" : c.status
                                })]
                            }), d.jsxs("div", {
                                className: "row mx-0 mb-3",
                                children: [d.jsx("div", {
                                    className: "col-auto px-0",
                                    children: d.jsx("img", {
                                        src: Bc,
                                        className: "me-1"
                                    })
                                }), d.jsx("div", {
                                    className: "col px-0",
                                    children: d.jsx("p", {
                                        className: "mb-0",
                                        children: c.location
                                    })
                                })]
                            }), d.jsx("button", {
                                type: "button",
                                className: "btn fw-semibold border-0 py-2 px-4 rounded-4",
                                style: {
                                    backgroundColor: "#C40C0C",
                                    color: "white"
                                },
                                "data-bs-toggle": "modal",
                                "data-bs-target": "#ModalDetailAduan",
                                onClick: () => u(c.id),
                                children: "Lihat Detail"
                            })]
                        })]
                    })
                }, c.id))
            }), d.jsx("div", {
                className: "modal fade",
                id: "ModalDetailAduan",
                "data-bs-backdrop": "static",
                style: {
                    backdropFilter: "blur(5px)",
                    backgroundColor: "rgba(0, 0, 0, 0.1)"
                },
                children: d.jsx("div", {
                    className: "modal-dialog modal-dialog-centered",
                    style: {
                        maxWidth: "1052px"
                    },
                    children: d.jsxs("div", {
                        className: "modal-content border-0 rounded-4 p-4",
                        children: [d.jsxs("div", {
                            className: "modal-header border-0 p-0 mb-4",
                            children: [d.jsx("h4", {
                                className: "mb-0",
                                children: "Detail Aduan"
                            }), d.jsx("button", {
                                type: "button",
                                className: "btn ms-auto border-0",
                                "data-bs-dismiss": "modal",
                                style: {
                                    padding: "2px"
                                },
                                children: d.jsx("img", {
                                    src: oe.LogoClose
                                })
                            })]
                        }), d.jsx("div", {
                            className: "modal-body p-0",
                            children: n ? d.jsxs("div", {
                                className: "row mx-0",
                                children: [d.jsxs("div", {
                                    className: "col-12 col-md-auto px-0 me-md-4",
                                    children: [d.jsx("p", {
                                        className: "mb-3",
                                        style: {
                                            color: "#828282",
                                            fontSize: "18px"
                                        },
                                        children: "Gambar Laporan"
                                    }), d.jsx(bC, {
                                        className: "mx-auto mb-3",
                                        children: d.jsx("a", {
                                            href: `https://laporke-desa-banteran.web.id/static/uploads/${n.photo}`,
                                            target: "_blank",
                                            children: d.jsx("img", {
                                                src: `https://laporke-desa-banteran.web.id/static/uploads/${n.photo}`,
                                                className: "object-fit-cover w-100 h-100 rounded-4"
                                            })
                                        })
                                    }), d.jsx("div", {
                                        className: "d-inline-flex px-3 py-1 rounded-pill mb-3",
                                        style: {
                                            backgroundColor: n.status === "pending" ? "#FCDDCC" : n.status === "open" ? "#FFF7CC" : n.status === "closed" ? "rgba(0, 193, 122, 0.1)" : "transparent",
                                            color: n.status === "pending" ? "#C40C0C" : n.status === "open" ? "#DBA000" : n.status === "closed" ? "#00C17A" : "inherit"
                                        },
                                        children: n.status === "pending" ? "Belum diproses" : n.status === "open" ? "Sedang diproses" : n.status === "closed" ? "Telah selesai" : n.status
                                    })]
                                }), d.jsxs("div", {
                                    className: "col-12 col-md px-0",
                                    children: [d.jsxs("div", {
                                        className: "mb-4",
                                        children: [d.jsx("p", {
                                            className: "mb-2",
                                            style: {
                                                color: "#828282",
                                                fontSize: "18px"
                                            },
                                            children: "Judul Laporan"
                                        }), d.jsx("h3", {
                                            className: "mb-0 fw-semibold",
                                            style: {
                                                color: "#C40C0C"
                                            },
                                            children: n.title
                                        })]
                                    }), d.jsxs("div", {
                                        className: "mb-4",
                                        children: [d.jsx("p", {
                                            className: "mb-2",
                                            style: {
                                                color: "#828282",
                                                fontSize: "18px"
                                            },
                                            children: "Isi Laporan"
                                        }), d.jsx("p", {
                                            className: "mb-0",
                                            style: {
                                                fontSize: "14px",
                                                lineHeight: "24px"
                                            },
                                            children: n.description
                                        })]
                                    }), d.jsxs("div", {
                                        className: "row mx-0",
                                        children: [d.jsxs("div", {
                                            className: "col-12 col-md-4 px-0 mb-4",
                                            children: [d.jsx("p", {
                                                className: "mb-2",
                                                style: {
                                                    color: "#828282",
                                                    fontSize: "18px"
                                                },
                                                children: "Pelapor"
                                            }), d.jsx("p", {
                                                className: "mb-0",
                                                children: n.name
                                            })]
                                        }), d.jsxs("div", {
                                            className: "col-12 col-md-8 px-0 ps-md-3 mb-4",
                                            children: [d.jsx("p", {
                                                className: "mb-2",
                                                style: {
                                                    color: "#828282",
                                                    fontSize: "18px"
                                                },
                                                children: "Lokasi"
                                            }), d.jsxs("p", {
                                                className: "mb-0",
                                                children: [d.jsx("img", {
                                                    src: Bc,
                                                    className: "me-1"
                                                }), n.location]
                                            })]
                                        })]
                                    })]
                                })]
                            }) : d.jsx("p", {
                                children: "Loading..."
                            })
                        }), d.jsx("div", {
                            className: "modal-footer border-0 p-0",
                            children: d.jsx("button", {
                                type: "button",
                                className: "btn border-0 m-0 rounded-4 fw-semibold py-2 px-4 text-white",
                                "data-bs-dismiss": "modal",
                                style: {
                                    backgroundColor: "#828282"
                                },
                                children: "Kembali"
                            })
                        })]
                    })
                })
            }), d.jsx("footer", {
                className: "border-top border-dark-subtle",
                style: {
                    margin: "80px -20px 0px -20px",
                    padding: "37px 0px"
                },
                children: d.jsxs("div", {
                    className: "row mx-auto align-items-center",
                    style: {
                        maxWidth: "1170px"
                    },
                    children: [d.jsx("div", {
                        className: "col-12 px-0 mx-auto ms-sm-4 me-sm-0 ms-xl-0",
                        style: {
                            maxWidth: "188px",
                            margin: "37px 0px"
                        },
                        children: d.jsx("img", {
                            src: oe.LogoLaporke,
                            style: {
                                maxWidth: "188px"
                            }
                        })
                    }), d.jsxs("div", {
                        className: "col-12 col-sm-6 col-md-7 col-lg-5 col-xl-12 px-4 px-sm-0 mx-auto me-sm-4 me-lg-auto",
                        style: {
                            maxWidth: "545px",
                            margin: "37px 0px"
                        },
                        children: [d.jsx("h4", {
                            className: "fw-bold lh-base mb-1",
                            children: "LAPORKE!"
                        }), d.jsxs("p", {
                            className: "mb-0",
                            children: [d.jsx("span", {
                                className: "fw-semibold",
                                children: "LAPORKE!"
                            }), " adalah platform aduan bagi warga desa Banteran, Banyumas. Sampaikan suara Anda untuk perbaikan layanan dan infrastruktur desa dengan proses yang transparan dan akuntabel. Bersama, kita bangun Banteran lebih baik!"]
                        })]
                    }), d.jsxs("div", {
                        className: "col-12 px-0 ms-4 ms-lg-0 me-lg-4 me-xl-0",
                        style: {
                            maxWidth: "229px",
                            margin: "37px 0px"
                        },
                        children: [d.jsx("h5", {
                            className: "lh-base mb-3",
                            children: "Kontak"
                        }), d.jsx("p", {
                            style: {
                                marginBottom: "12px"
                            },
                            children: "Purwokerto - Indonesia"
                        }), d.jsx("p", {
                            style: {
                                marginBottom: "12px"
                            },
                            children: "+0628-2267-9981"
                        }), d.jsx("p", {
                            className: "mb-0",
                            children: "desabanyumas@gmail.com"
                        })]
                    })]
                })
            })]
        })
    }

    function jC() {
        const [e, t] = P.useState(!1), n = Vi(), r = fl(), i = () => {
            t(!e)
        }, o = u => {
            switch (u) {
                case "/admin":
                    return "Ringkasan";
                case "/admin/laporan":
                    return "Laporan";
                case "/admin/profil":
                    return "Profile"
            }
        }, a = async () => {
            try {
                await vC(), Z.success("Logout berhasil!"), setTimeout(() => {
                    r("/login")
                }, 0)
            } catch (u) {
                Z.error(u.message)
            }
        };
        return d.jsxs("div", {
            className: "d-flex w-100",
            children: [d.jsx(hk, {}), d.jsxs("div", {
                className: `sidebar-layout-admin ${e?"mini":""}`,
                children: [d.jsxs("div", {
                    className: "d-flex",
                    style: {
                        marginBottom: "84px"
                    },
                    children: [d.jsx("img", {
                        src: oe.LogoLaporke,
                        width: 40
                    }), !e && d.jsx("img", {
                        src: oe.LogoTextLaporke,
                        width: 78.06,
                        className: "ms-3"
                    })]
                }), d.jsxs("ul", {
                    className: "list-unstyled",
                    children: [d.jsx("li", {
                        style: {
                            marginBottom: "44px"
                        },
                        children: d.jsxs(Pr, {
                            to: "/admin",
                            className: `nav-link d-flex ${n.pathname==="/admin"?"active-link":""}`,
                            children: [d.jsx("img", {
                                src: oe.LogoRingkasan,
                                width: 24,
                                className: "icon"
                            }), !e && d.jsx("span", {
                                className: "fw-medium ms-3 text",
                                style: {
                                    color: "#B4B4B4"
                                },
                                children: "Ringkasan"
                            })]
                        })
                    }), d.jsx("li", {
                        style: {
                            marginBottom: "44px"
                        },
                        children: d.jsxs(Pr, {
                            to: "/admin/laporan",
                            className: `nav-link d-flex ${n.pathname==="/admin/laporan"?"active-link":""}`,
                            children: [d.jsx("img", {
                                src: oe.LogoLaporan,
                                width: 24,
                                className: "icon"
                            }), !e && d.jsx("span", {
                                className: "fw-medium ms-3 text",
                                style: {
                                    color: "#B4B4B4"
                                },
                                children: "Laporan"
                            })]
                        })
                    }), d.jsx("li", {
                        style: {
                            marginBottom: "44px"
                        },
                        children: d.jsxs(Pr, {
                            to: "/admin/profil",
                            className: `nav-link d-flex ${n.pathname==="/admin/profil"?"active-link":""}`,
                            children: [d.jsx("img", {
                                src: oe.LogoProfile,
                                width: 24,
                                className: "icon"
                            }), !e && d.jsx("span", {
                                className: "fw-medium ms-3 text",
                                style: {
                                    color: "#B4B4B4"
                                },
                                children: "Profile"
                            })]
                        })
                    })]
                }), d.jsx("div", {
                    className: "mt-auto",
                    children: d.jsxs("button", {
                        className: "nav-link d-flex",
                        onClick: a,
                        children: [d.jsx("img", {
                            src: oe.LogoLogout,
                            width: 24
                        }), !e && d.jsx("span", {
                            className: "fw-medium ms-3 fs-5",
                            style: {
                                color: "#C40C0C"
                            },
                            children: "Keluar"
                        })]
                    })
                })]
            }), d.jsxs("div", {
                className: "d-flex flex-column w-100",
                children: [d.jsxs("div", {
                    style: {
                        display: "flex",
                        alignItems: "center",
                        padding: "36px 52px 36px 40px"
                    },
                    children: [d.jsx("button", {
                        onClick: i,
                        className: "btn border-0 p-0",
                        children: d.jsx("img", {
                            src: oe.LogoHamburger,
                            alt: "Hamburger Menu"
                        })
                    }), d.jsx("span", {
                        className: "fw-medium fs-4",
                        style: {
                            marginLeft: "40px"
                        },
                        children: o(n.pathname)
                    }), d.jsxs("div", {
                        className: "btn-group ms-auto",
                        children: [d.jsxs("button", {
                            type: "button",
                            className: "btn rounded-4 border-0",
                            "data-bs-toggle": "dropdown",
                            "data-bs-offset": "0,24",
                            style: {
                                backgroundColor: "#F1F0F0",
                                padding: "14px"
                            },
                            children: [d.jsx("img", {
                                src: oe.LogoNotification
                            }), d.jsx("span", {
                                className: "position-absolute rounded-circle",
                                style: {
                                    top: "16px",
                                    right: "17px",
                                    padding: "5px",
                                    backgroundColor: "#FF0000"
                                },
                                children: d.jsx("span", {
                                    className: "visually-hidden",
                                    children: "New alerts"
                                })
                            })]
                        }), d.jsxs("ul", {
                            className: "dropdown-menu dropdown-menu-end rounded-4 shadow border-0",
                            style: {
                                width: "270px"
                            },
                            children: [d.jsxs("li", {
                                style: {
                                    padding: "2px 16px 0px 16px"
                                },
                                children: [d.jsx("img", {
                                    className: "me-1",
                                    src: oe.LogoNotification,
                                    width: 20
                                }), d.jsx("span", {
                                    style: {
                                        fontSize: "12px",
                                        fontWeight: "500"
                                    },
                                    children: "Notifikasi"
                                })]
                            }), d.jsx("li", {
                                children: d.jsx("hr", {
                                    className: "dropdown-divider"
                                })
                            }), d.jsx("li", {
                                className: "position-relative",
                                style: {
                                    padding: "4px 16px 4px 16px",
                                    height: "310px",
                                    overflowY: "auto"
                                },
                                children: d.jsx("div", {
                                    className: "position-absolute top-50 start-50 translate-middle",
                                    children: d.jsx("span", {
                                        style: {
                                            fontSize: "12px"
                                        },
                                        children: "Tidak Ada Notifikasi"
                                    })
                                })
                            })]
                        })]
                    })]
                }), d.jsx("div", {
                    className: "overflow-y-auto",
                    style: {
                        maxHeight: "calc(100vh - 132px)"
                    },
                    children: d.jsx("div", {
                        className: "container",
                        style: {
                            padding: "0 52px"
                        },
                        children: d.jsx(Gd, {})
                    })
                })]
            })]
        })
    }

    function TC() {
        const [e, t] = P.useState(null), [n, r] = P.useState(!0), [i, o] = P.useState(null);
        return P.useEffect(() => {
            (async () => {
                try {
                    const u = await _C();
                    t(u)
                } catch (u) {
                    o("Gagal memuat data chart"), Z.error(u.message)
                } finally {
                    r(!1)
                }
            })()
        }, []), n ? d.jsx("p", {
            className: "text-center",
            children: "Loading..."
        }) : i ? d.jsx("p", {
            className: "text-center text-danger",
            children: i
        }) : d.jsxs("div", {
            className: "row mx-0 justify-content-center text-center",
            children: [d.jsx("div", {
                className: "col ps-0 pe-3",
                style: {
                    maxWidth: "260px"
                },
                children: d.jsx("div", {
                    className: "card rounded-4 border-0 text-white",
                    style: {
                        backgroundColor: "#C40C0C"
                    },
                    children: d.jsxs("div", {
                        className: "card-body",
                        style: {
                            padding: "32px"
                        },
                        children: [d.jsx("img", {
                            src: oe.LogoJumlahLaporan,
                            style: {
                                marginBottom: "34px"
                            }
                        }), d.jsx("h2", {
                            children: e.closed + e.open + e.pending
                        }), d.jsx("span", {
                            children: "Jumlah Laporan"
                        })]
                    })
                })
            }), d.jsx("div", {
                className: "col px-3",
                style: {
                    maxWidth: "276px"
                },
                children: d.jsx("div", {
                    className: "card rounded-4 border-0 text-white",
                    style: {
                        backgroundColor: "#FE6400"
                    },
                    children: d.jsxs("div", {
                        className: "card-body",
                        style: {
                            padding: "32px"
                        },
                        children: [d.jsx("img", {
                            src: oe.LogoLaporanBelumDiproses,
                            style: {
                                marginBottom: "34px"
                            }
                        }), d.jsx("h2", {
                            children: e.pending
                        }), d.jsx("span", {
                            children: "Belum Diproses"
                        })]
                    })
                })
            }), d.jsx("div", {
                className: "col px-3",
                style: {
                    maxWidth: "276px"
                },
                children: d.jsx("div", {
                    className: "card rounded-4 border-0 text-white",
                    style: {
                        backgroundColor: "#FF8A07"
                    },
                    children: d.jsxs("div", {
                        className: "card-body",
                        style: {
                            padding: "32px"
                        },
                        children: [d.jsx("img", {
                            src: oe.LogoLaporanSedangDiproses,
                            style: {
                                marginBottom: "34px"
                            }
                        }), d.jsx("h2", {
                            children: e.open
                        }), d.jsx("span", {
                            children: "Sedang Diproses"
                        })]
                    })
                })
            }), d.jsx("div", {
                className: "col ps-3 pe-0",
                style: {
                    maxWidth: "260px"
                },
                children: d.jsx("div", {
                    className: "card rounded-4 border-0 text-white",
                    style: {
                        backgroundColor: "#FFC100"
                    },
                    children: d.jsxs("div", {
                        className: "card-body",
                        style: {
                            padding: "32px"
                        },
                        children: [d.jsx("img", {
                            src: oe.LogoLaporanSelesai,
                            style: {
                                marginBottom: "34px"
                            }
                        }), d.jsx("h2", {
                            children: e.closed
                        }), d.jsx("span", {
                            children: "Laporan Selesai"
                        })]
                    })
                })
            })]
        })
    }

    function LC() {
        const [e, t] = P.useState(""), [n, r] = P.useState([]), [i, o] = P.useState(null), [a, u] = P.useState(!0), [c, p] = P.useState(null), [m, g] = P.useState(null), [w, N] = P.useState(""), _ = async () => {
            try {
                u(!0);
                const T = await kC();
                r(T)
            } catch (T) {
                p("Gagal memuat laporan"), Z.error(T.message)
            } finally {
                u(!1)
            }
        };
        P.useEffect(() => {
            _()
        }, []);
        const k = T => {
                g(T)
            },
            S = async () => {
                if (!m) {
                    Z.error("ID laporan tidak ditemukan");
                    return
                }
                try {
                    const T = await CC(m);
                    T && T.status === !0 ? (Z.success("Laporan berhasil dihapus"), await _(), window.location.reload(), g(null)) : Z.error("Laporan gagal dihapus")
                } catch (T) {
                    console.error("Error deleting laporan:", T), Z.error("Gagal menghapus laporan")
                }
            }, x = n.filter(T => {
                const R = e.toLowerCase();
                return T.title.toLowerCase().includes(R) || T.location.toLowerCase().includes(R)
            }), y = T => {
                const R = n.find(O => O.id === T);
                o(R), N(R.status)
            }, v = T => {
                N(T)
            }, j = async () => {
                if (i && w) {
                    await EC(i.id, w);
                    const T = n.map(I => I.id === i.id ? {
                        ...I,
                        status: w
                    } : I);
                    r(T), o({
                        ...i,
                        status: w
                    });
                    const R = document.getElementById("modalDetail");
                    R.classList.remove("show"), R.setAttribute("aria-hidden", "true"), R.style.display = "none";
                    const O = document.querySelector(".modal-backdrop");
                    O && O.remove(), setTimeout(() => {
                        window.location.reload()
                    }, 5e3)
                }
            };
        return a ? d.jsx("p", {
            children: "Loading..."
        }) : c ? d.jsx("p", {
            children: c
        }) : d.jsxs(d.Fragment, {
            children: [d.jsxs("div", {
                className: "row align-items-center mb-3",
                children: [d.jsx("div", {
                    className: "col",
                    children: d.jsx("span", {
                        className: "fs-5",
                        children: "Laporan Pengaduan"
                    })
                }), d.jsx("div", {
                    className: "col-auto",
                    children: d.jsxs("div", {
                        className: "input-group",
                        style: {
                            width: "400px",
                            height: "48px"
                        },
                        children: [d.jsx("img", {
                            src: oe.LogoSearch,
                            className: "input-group-text bg-white rounded-start-4",
                            style: {
                                paddingRight: "20px",
                                paddingLeft: "16px"
                            }
                        }), d.jsx("input", {
                            type: "text",
                            className: "form-control border-start-0 rounded-end-4 ps-0",
                            placeholder: "Cari apa saja...",
                            value: e,
                            onChange: T => t(T.target.value)
                        })]
                    })
                })]
            }), d.jsx("div", {
                className: "card rounded-4 shadow mb-5 border-0",
                children: d.jsx("div", {
                    className: "card-body",
                    style: {
                        padding: "36px"
                    },
                    children: d.jsxs("table", {
                        className: "table table-borderless align-middle mb-0",
                        children: [d.jsx("thead", {
                            className: "border-bottom",
                            children: d.jsxs("tr", {
                                children: [d.jsx("td", {
                                    className: "fs-5 text-secondary",
                                    style: {
                                        paddingLeft: "32px"
                                    },
                                    children: "Gambar"
                                }), d.jsx("td", {
                                    className: "fs-5 text-secondary",
                                    children: "Judul"
                                }), d.jsx("td", {
                                    className: "fs-5 text-secondary",
                                    children: "Lokasi"
                                }), d.jsx("td", {
                                    className: "fs-5 text-secondary",
                                    children: "Status"
                                }), d.jsx("td", {
                                    className: "fs-5 text-secondary",
                                    style: {
                                        paddingRight: "32px"
                                    },
                                    children: "Aksi"
                                })]
                            })
                        }), d.jsx("tbody", {
                            children: x.length === 0 ? d.jsx("tr", {
                                children: d.jsx("td", {
                                    colSpan: "5",
                                    className: "text-center pt-5 pb-3 text-secondary",
                                    children: "Tidak ada laporan"
                                })
                            }) : x.map(T => d.jsxs("tr", {
                                children: [d.jsx("td", {
                                    style: {
                                        paddingLeft: "32px"
                                    },
                                    children: d.jsx("img", {
                                        className: "rounded-3",
                                        src: `https://laporke-desa-banteran.web.id/static/uploads/${T.photo}`,
                                        style: {
                                            width: "50px",
                                            height: "50px",
                                            objectFit: "cover"
                                        }
                                    })
                                }), d.jsx("td", {
                                    className: "text-truncate",
                                    style: {
                                        maxWidth: "180px"
                                    },
                                    children: T.title
                                }), d.jsx("td", {
                                    className: "text-truncate",
                                    style: {
                                        maxWidth: "180px"
                                    },
                                    children: T.location
                                }), d.jsx("td", {
                                    style: {
                                        color: T.status === "pending" ? "#C40C0C" : T.status === "open" ? "#DBA000" : T.status === "closed" ? "#00C17A" : "inherit"
                                    },
                                    children: T.status === "pending" ? "Belum diproses" : T.status === "open" ? "Sedang diproses" : T.status === "closed" ? "Telah selesai" : T.status
                                }), d.jsxs("td", {
                                    style: {
                                        paddingRight: "32px",
                                        whiteSpace: "nowrap",
                                        width: "1%"
                                    },
                                    children: [d.jsxs("button", {
                                        type: "button",
                                        className: "btn",
                                        style: {
                                            color: "#00C17A",
                                            backgroundColor: "#E6FCF4",
                                            marginRight: "12px"
                                        },
                                        "data-bs-toggle": "modal",
                                        "data-bs-target": "#modalDetail",
                                        onClick: () => y(T.id),
                                        children: [d.jsxs("svg", {
                                            width: "24",
                                            height: "24",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            style: {
                                                marginRight: "10px"
                                            },
                                            children: [d.jsx("path", {
                                                d: "M13 11L21.2 2.80005",
                                                stroke: "#00C17A",
                                                strokeWidth: "1.5",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            }), d.jsx("path", {
                                                d: "M22 6.8V2H17.2",
                                                stroke: "#00C17A",
                                                strokeWidth: "1.5",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            }), d.jsx("path", {
                                                d: "M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13",
                                                stroke: "#00C17A",
                                                strokeWidth: "1.5",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            })]
                                        }), "Lihat"]
                                    }), d.jsxs("button", {
                                        type: "button",
                                        className: "btn",
                                        style: {
                                            color: "#FF0000",
                                            backgroundColor: "#FFE6E6"
                                        },
                                        "data-bs-toggle": "modal",
                                        "data-bs-target": "#modalDelete",
                                        onClick: () => k(T.id),
                                        children: [d.jsxs("svg", {
                                            width: "24",
                                            height: "24",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            style: {
                                                marginRight: "10px"
                                            },
                                            children: [d.jsx("path", {
                                                d: "M21 5.97998C17.67 5.64998 14.32 5.47998 10.98 5.47998C9 5.47998 7.02 5.57998 5.04 5.77998L3 5.97998",
                                                stroke: "#FF0000",
                                                strokeWidth: "1.5",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            }), d.jsx("path", {
                                                d: "M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97",
                                                stroke: "#FF0000",
                                                strokeWidth: "1.5",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            }), d.jsx("path", {
                                                d: "M18.85 9.14001L18.2 19.21C18.09 20.78 18 22 15.21 22H8.79002C6.00002 22 5.91002 20.78 5.80002 19.21L5.15002 9.14001",
                                                stroke: "#FF0000",
                                                strokeWidth: "1.5",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            }), d.jsx("path", {
                                                d: "M10.33 16.5H13.66",
                                                stroke: "#FF0000",
                                                strokeWidth: "1.5",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            }), d.jsx("path", {
                                                d: "M9.5 12.5H14.5",
                                                stroke: "#FF0000",
                                                strokeWidth: "1.5",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            })]
                                        }), "Hapus"]
                                    })]
                                })]
                            }, T.id))
                        })]
                    })
                })
            }), d.jsx("div", {
                className: "modal fade",
                id: "modalDetail",
                tabIndex: "-1",
                "aria-labelledby": "modalDetailLabel",
                "aria-hidden": "true",
                children: d.jsx("div", {
                    className: "modal-dialog modal-lg modal-dialog-centered",
                    children: d.jsx("div", {
                        className: "modal-content",
                        style: {
                            padding: "12px",
                            borderRadius: "20px"
                        },
                        children: i && d.jsxs("div", {
                            children: [d.jsxs("div", {
                                className: "modal-body",
                                style: {
                                    padding: "18px"
                                },
                                children: [d.jsx("div", {
                                    className: "mb-4 text-center",
                                    children: d.jsx("a", {
                                        href: `https://laporke-desa-banteran.web.id/static/uploads/${i.photo}`,
                                        target: "_blank",
                                        children: d.jsx("img", {
                                            src: `https://laporke-desa-banteran.web.id/static/uploads/${i.photo}`,
                                            className: "rounded-4",
                                            style: {
                                                width: "250px",
                                                height: "250px",
                                                objectFit: "cover"
                                            }
                                        })
                                    })
                                }), d.jsxs("div", {
                                    className: "mb-4",
                                    children: [d.jsx("p", {
                                        className: "fw-medium",
                                        style: {
                                            marginBottom: "12px"
                                        },
                                        children: "Nama"
                                    }), d.jsx("p", {
                                        className: "mb-0",
                                        children: i.name
                                    })]
                                }), d.jsxs("div", {
                                    className: "mb-4",
                                    children: [d.jsx("p", {
                                        className: "fw-medium",
                                        style: {
                                            marginBottom: "12px"
                                        },
                                        children: "Lokasi"
                                    }), d.jsx("p", {
                                        className: "mb-0",
                                        children: i.location
                                    })]
                                }), d.jsxs("div", {
                                    className: "mb-4",
                                    children: [d.jsx("p", {
                                        className: "fw-medium",
                                        style: {
                                            marginBottom: "12px"
                                        },
                                        children: "Judul Laporan"
                                    }), d.jsx("p", {
                                        className: "mb-0",
                                        children: i.title
                                    })]
                                }), d.jsxs("div", {
                                    className: "mb-4",
                                    children: [d.jsx("p", {
                                        className: "fw-medium",
                                        style: {
                                            marginBottom: "12px"
                                        },
                                        children: "Isi Laporan"
                                    }), d.jsx("p", {
                                        className: "mb-0",
                                        children: i.description
                                    })]
                                }), d.jsxs("div", {
                                    className: "mb-4",
                                    children: [d.jsx("p", {
                                        className: "fw-medium",
                                        style: {
                                            marginBottom: "12px"
                                        },
                                        children: "Status Laporan"
                                    }), d.jsxs("select", {
                                        className: "form-select",
                                        style: {
                                            borderRadius: "12px",
                                            padding: "11px 16px",
                                            color: w === "pending" ? "#C40C0C" : w === "open" ? "#DBA000" : w === "closed" ? "#00C17A" : "blue"
                                        },
                                        value: w || i.status,
                                        onChange: T => v(T.target.value),
                                        children: [d.jsx("option", {
                                            style: {
                                                color: "#C40C0C"
                                            },
                                            value: "pending",
                                            children: "Belum diproses"
                                        }), d.jsx("option", {
                                            style: {
                                                color: "#DBA000"
                                            },
                                            value: "open",
                                            children: "Sedang diproses"
                                        }), d.jsx("option", {
                                            style: {
                                                color: "#00C17A"
                                            },
                                            value: "closed",
                                            children: "Telah selesai"
                                        })]
                                    })]
                                })]
                            }), d.jsx("div", {
                                className: "modal-footer p-2",
                                children: d.jsx("button", {
                                    type: "button",
                                    className: "btn border-0 mx-0 mb-0 rounded-4 text-white",
                                    style: {
                                        backgroundColor: "#C40C0C",
                                        marginTop: "12px",
                                        padding: "8px 25.2px"
                                    },
                                    onClick: j,
                                    children: "Simpan"
                                })
                            })]
                        })
                    })
                })
            }), d.jsx("div", {
                className: "modal fade",
                id: "modalDelete",
                tabIndex: "-1",
                "aria-labelledby": "modalDeleteLabel",
                "aria-hidden": "true",
                children: d.jsx("div", {
                    className: "modal-dialog modal-dialog-centered",
                    children: d.jsxs("div", {
                        className: "modal-content",
                        children: [d.jsxs("div", {
                            className: "modal-header",
                            children: [d.jsx("h5", {
                                className: "modal-title",
                                id: "modalDeleteLabel",
                                children: "Konfirmasi Hapus"
                            }), d.jsx("button", {
                                type: "button",
                                className: "btn-close",
                                "data-bs-dismiss": "modal",
                                "aria-label": "Close"
                            })]
                        }), d.jsx("div", {
                            className: "modal-body",
                            children: d.jsx("p", {
                                children: "Apakah Anda yakin ingin menghapus laporan ini?"
                            })
                        }), d.jsxs("div", {
                            className: "modal-footer",
                            children: [d.jsx("button", {
                                type: "button",
                                className: "btn btn-secondary",
                                "data-bs-dismiss": "modal",
                                children: "Batal"
                            }), d.jsx("button", {
                                type: "button",
                                className: "btn btn-danger",
                                onClick: S,
                                children: "Hapus"
                            })]
                        })]
                    })
                })
            })]
        })
    }

    function AC() {
        const [e, t] = P.useState(!1), [n, r] = P.useState(!1), [i, o] = P.useState(""), [a, u] = P.useState(""), [c, p] = P.useState(""), [m, g] = P.useState(""), [w, N] = P.useState(!0);
        P.useEffect(() => {
            (async () => {
                try {
                    const S = await xC();
                    p(S.email || ""), g(S.username || "")
                } catch (S) {
                    console.error("Gagal memuat profil:", S.message)
                } finally {
                    N(!1)
                }
            })()
        }, []);
        const _ = async () => {
            try {
                if (!i || !a) {
                    alert("Kata sandi sekarang dan kata sandi baru harus diisi.");
                    return
                }
                const k = await wC(i, a);
                alert(k.message || "Kata sandi berhasil diubah"), o(""), u("")
            } catch (k) {
                alert(k.message || "Gagal mengubah kata sandi")
            }
        };
        return w ? d.jsx("p", {
            children: "Memuat data..."
        }) : d.jsx(d.Fragment, {
            children: d.jsx("div", {
                className: "card rounded-4 shadow mt-4 mb-5 border-0",
                children: d.jsxs("div", {
                    className: "card-body",
                    style: {
                        padding: "36px 52px"
                    },
                    children: [d.jsxs("ul", {
                        className: "nav nav-tabs",
                        children: [d.jsx("li", {
                            children: d.jsx("button", {
                                className: "nav-link text-black active",
                                "data-bs-toggle": "tab",
                                "data-bs-target": "#edit-profil",
                                children: "Profil"
                            })
                        }), d.jsx("li", {
                            children: d.jsx("button", {
                                className: "nav-link text-black",
                                "data-bs-toggle": "tab",
                                "data-bs-target": "#keamanan",
                                children: "Keamanan"
                            })
                        })]
                    }), d.jsxs("div", {
                        className: "tab-content mt-5",
                        children: [d.jsxs("div", {
                            className: "tab-pane show active",
                            id: "edit-profil",
                            children: [d.jsxs("div", {
                                className: "mb-4",
                                children: [d.jsx("label", {
                                    htmlFor: "inputEmail",
                                    className: "text-secondary",
                                    style: {
                                        marginBottom: "8px"
                                    },
                                    children: "Email"
                                }), d.jsx("p", {
                                    className: "mb-0 fw-semibold",
                                    children: c
                                })]
                            }), d.jsxs("div", {
                                children: [d.jsx("label", {
                                    htmlFor: "inputUsername",
                                    className: "text-secondary",
                                    style: {
                                        marginBottom: "8px"
                                    },
                                    children: "Username"
                                }), d.jsx("p", {
                                    className: "mb-0 fw-semibold",
                                    children: m
                                })]
                            })]
                        }), d.jsxs("div", {
                            className: "tab-pane",
                            id: "keamanan",
                            children: [d.jsxs("div", {
                                children: [d.jsxs("div", {
                                    children: [d.jsx("label", {
                                        style: {
                                            marginBottom: "8px"
                                        },
                                        children: "Kata Sandi Sekarang"
                                    }), d.jsxs("div", {
                                        className: "input-group",
                                        children: [d.jsx("input", {
                                            type: e ? "text" : "password",
                                            className: "form-control rounded-start-4 border-end-0",
                                            style: {
                                                padding: "9.5px 12px",
                                                marginBottom: "16px"
                                            },
                                            value: i,
                                            onChange: k => o(k.target.value)
                                        }), d.jsx("button", {
                                            onClick: () => t(!e),
                                            className: "btn rounded-end-4 border border-start-0",
                                            type: "button",
                                            style: {
                                                maxHeight: "45px"
                                            },
                                            children: d.jsx("img", {
                                                src: e ? oe.EyeSlash : oe.Eye,
                                                alt: "Toggle visibility"
                                            })
                                        })]
                                    })]
                                }), d.jsxs("div", {
                                    children: [d.jsx("label", {
                                        style: {
                                            marginBottom: "8px"
                                        },
                                        children: "Kata Sandi Baru"
                                    }), d.jsxs("div", {
                                        className: "input-group",
                                        children: [d.jsx("input", {
                                            type: n ? "text" : "password",
                                            className: "form-control rounded-start-4 border-end-0",
                                            style: {
                                                padding: "9.5px 12px",
                                                marginBottom: "16px"
                                            },
                                            value: a,
                                            onChange: k => u(k.target.value)
                                        }), d.jsx("button", {
                                            onClick: () => r(!n),
                                            className: "btn rounded-end-4 border border-start-0",
                                            type: "button",
                                            style: {
                                                maxHeight: "45px"
                                            },
                                            children: d.jsx("img", {
                                                src: n ? oe.EyeSlash : oe.Eye,
                                                alt: "Toggle visibility"
                                            })
                                        })]
                                    })]
                                })]
                            }), d.jsx("div", {
                                className: "d-flex mt-5 justify-content-end",
                                children: d.jsx("button", {
                                    type: "button",
                                    className: "btn text-white fw-semibold rounded-4",
                                    style: {
                                        backgroundColor: "#C40C0C",
                                        padding: "9.5px 50px"
                                    },
                                    onClick: _,
                                    children: "Simpan"
                                })
                            })]
                        })]
                    })]
                })
            })
        })
    }

    function PC() {
        const [e, t] = P.useState(""), [n, r] = P.useState(""), [i, o] = P.useState(!1), [a, u] = P.useState(!1), c = fl(), p = async m => {
            m.preventDefault(), u(!0);
            const g = await yC(e, n);
            if (u(!1), !g || typeof g != "object") {
                Z.error("Terjadi kesalahan, silakan coba lagi.");
                return
            }
            g.success ? (Z.success("Login berhasil!"), localStorage.setItem("token", g.data.access_token), c("/admin")) : Z.error(g.message)
        };
        return d.jsx("div", {
            className: "container-fluid",
            children: d.jsxs("div", {
                className: "row mx-0 vh-100 align-items-center py-4",
                children: [d.jsxs("div", {
                    className: "col-12 col-lg px-0 text-center mb-5 mb-lg-0",
                    children: [d.jsxs("div", {
                        style: {
                            marginBottom: "80px"
                        },
                        children: [d.jsxs("div", {
                            className: "col-6 mx-auto col-sm-12",
                            children: [d.jsx("img", {
                                src: oe.LogoLaporke,
                                style: {
                                    maxWidth: "70px",
                                    width: "100%"
                                },
                                className: "mb-3 me-sm-3",
                                alt: "logo"
                            }), d.jsx("img", {
                                src: oe.LogoTextLaporke,
                                style: {
                                    maxWidth: "289px",
                                    width: "100%"
                                },
                                className: "mb-3",
                                alt: "logo-text"
                            })]
                        }), d.jsx("p", {
                            className: "mb-0 fw-semibold",
                            children: "Memberdayakan Komunitas, Menyelesaikan Bersama."
                        })]
                    }), d.jsx("div", {
                        children: d.jsxs("form", {
                            onSubmit: p,
                            children: [d.jsx("div", {
                                style: {
                                    marginBottom: "44px"
                                },
                                children: d.jsx("input", {
                                    type: "text",
                                    className: "form-control mx-auto rounded-4",
                                    placeholder: "Username",
                                    style: {
                                        padding: "13px 20px",
                                        maxWidth: "380px"
                                    },
                                    required: !0,
                                    value: e,
                                    onChange: m => t(m.target.value)
                                })
                            }), d.jsx("div", {
                                style: {
                                    marginBottom: "44px"
                                },
                                children: d.jsxs("div", {
                                    className: "input-group mx-auto",
                                    style: {
                                        maxWidth: "380px"
                                    },
                                    children: [d.jsx("input", {
                                        type: i ? "text" : "password",
                                        className: "form-control rounded-start-4 border-end-0",
                                        placeholder: "Kata Sandi",
                                        style: {
                                            padding: "13px 20px"
                                        },
                                        required: !0,
                                        value: n,
                                        onChange: m => r(m.target.value)
                                    }), d.jsx("button", {
                                        onClick: () => o(!i),
                                        className: "btn rounded-end-4 border border-start-0",
                                        type: "button",
                                        children: d.jsx("img", {
                                            src: i ? oe.EyeSlash : oe.Eye,
                                            alt: "toggle-password-visibility"
                                        })
                                    })]
                                })
                            }), d.jsx("div", {
                                children: d.jsx("button", {
                                    type: "submit",
                                    className: "btn fw-medium text-white rounded-4 w-100",
                                    style: {
                                        backgroundColor: "#C40C0C",
                                        padding: "15px",
                                        maxWidth: "380px"
                                    },
                                    disabled: a,
                                    children: a ? "Loading..." : "Masuk"
                                })
                            })]
                        })
                    })]
                }), d.jsx("div", {
                    className: "col-12 col-lg px-0 text-center",
                    children: d.jsx("img", {
                        src: oe.ImageLogin,
                        style: {
                            maxWidth: "400px",
                            width: "100%"
                        },
                        alt: "login-illustration"
                    })
                })]
            })
        })
    }
    const OC = () => localStorage.getItem("token") ? d.jsx(Gd, {}) : d.jsx(F3, {
        to: "/login"
    });

    function RC() {
        return d.jsx(Z3, {
            future: {
                v7_startTransition: !0,
                v7_relativeSplatPath: !0
            },
            children: d.jsxs(z3, {
                children: [d.jsxs(mn, {
                    path: "/",
                    element: d.jsx(E4, {}),
                    children: [d.jsx(mn, {
                        index: !0,
                        element: d.jsx(nk, {})
                    }), d.jsx(mn, {
                        path: "daftar-aduan",
                        element: d.jsx(NC, {})
                    })]
                }), d.jsx(mn, {
                    element: d.jsx(OC, {}),
                    children: d.jsxs(mn, {
                        path: "/admin/",
                        element: d.jsx(jC, {}),
                        exact: !0,
                        children: [d.jsx(mn, {
                            index: !0,
                            element: d.jsx(TC, {})
                        }), d.jsx(mn, {
                            path: "laporan",
                            element: d.jsx(LC, {})
                        }), d.jsx(mn, {
                            path: "profil",
                            element: d.jsx(AC, {})
                        })]
                    })
                }), d.jsx(mn, {
                    path: "/login",
                    element: d.jsx(PC, {})
                })]
            })
        })
    }
    Q2(document.getElementById("root")).render(d.jsx(P.StrictMode, {
        children: d.jsx(RC, {})
    }));
    /*!
     * Bootstrap v5.3.3 (https://getbootstrap.com/)
     * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     */
    (function(e, t) {
        typeof o1 == "object" && typeof Xc < "u" ? Xc.exports = t() : typeof define == "function" && define.amd ? define(t) : (e = typeof globalThis < "u" ? globalThis : e || self).bootstrap = t()
    })(void 0, function() {
        const e = new Map,
            t = {
                set(f, s, l) {
                    e.has(f) || e.set(f, new Map);
                    const h = e.get(f);
                    h.has(s) || h.size === 0 ? h.set(s, l) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(h.keys())[0]}.`)
                },
                get: (f, s) => e.has(f) && e.get(f).get(s) || null,
                remove(f, s) {
                    if (!e.has(f)) return;
                    const l = e.get(f);
                    l.delete(s), l.size === 0 && e.delete(f)
                }
            },
            n = "transitionend",
            r = f => (f && window.CSS && window.CSS.escape && (f = f.replace(/#([^\s"#']+)/g, (s, l) => `#${CSS.escape(l)}`)), f),
            i = f => {
                f.dispatchEvent(new Event(n))
            },
            o = f => !(!f || typeof f != "object") && (f.jquery !== void 0 && (f = f[0]), f.nodeType !== void 0),
            a = f => o(f) ? f.jquery ? f[0] : f : typeof f == "string" && f.length > 0 ? document.querySelector(r(f)) : null,
            u = f => {
                if (!o(f) || f.getClientRects().length === 0) return !1;
                const s = getComputedStyle(f).getPropertyValue("visibility") === "visible",
                    l = f.closest("details:not([open])");
                if (!l) return s;
                if (l !== f) {
                    const h = f.closest("summary");
                    if (h && h.parentNode !== l || h === null) return !1
                }
                return s
            },
            c = f => !f || f.nodeType !== Node.ELEMENT_NODE || !!f.classList.contains("disabled") || (f.disabled !== void 0 ? f.disabled : f.hasAttribute("disabled") && f.getAttribute("disabled") !== "false"),
            p = f => {
                if (!document.documentElement.attachShadow) return null;
                if (typeof f.getRootNode == "function") {
                    const s = f.getRootNode();
                    return s instanceof ShadowRoot ? s : null
                }
                return f instanceof ShadowRoot ? f : f.parentNode ? p(f.parentNode) : null
            },
            m = () => {},
            g = f => {
                f.offsetHeight
            },
            w = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null,
            N = [],
            _ = () => document.documentElement.dir === "rtl",
            k = f => {
                var s;
                s = () => {
                    const l = w();
                    if (l) {
                        const h = f.NAME,
                            C = l.fn[h];
                        l.fn[h] = f.jQueryInterface, l.fn[h].Constructor = f, l.fn[h].noConflict = () => (l.fn[h] = C, f.jQueryInterface)
                    }
                }, document.readyState === "loading" ? (N.length || document.addEventListener("DOMContentLoaded", () => {
                    for (const l of N) l()
                }), N.push(s)) : s()
            },
            S = (f, s = [], l = f) => typeof f == "function" ? f(...s) : l,
            x = (f, s, l = !0) => {
                if (!l) return void S(f);
                const h = (L => {
                    if (!L) return 0;
                    let {
                        transitionDuration: D,
                        transitionDelay: M
                    } = window.getComputedStyle(L);
                    const z = Number.parseFloat(D),
                        W = Number.parseFloat(M);
                    return z || W ? (D = D.split(",")[0], M = M.split(",")[0], 1e3 * (Number.parseFloat(D) + Number.parseFloat(M))) : 0
                })(s) + 5;
                let C = !1;
                const b = ({
                    target: L
                }) => {
                    L === s && (C = !0, s.removeEventListener(n, b), S(f))
                };
                s.addEventListener(n, b), setTimeout(() => {
                    C || i(s)
                }, h)
            },
            y = (f, s, l, h) => {
                const C = f.length;
                let b = f.indexOf(s);
                return b === -1 ? !l && h ? f[C - 1] : f[0] : (b += l ? 1 : -1, h && (b = (b + C) % C), f[Math.max(0, Math.min(b, C - 1))])
            },
            v = /[^.]*(?=\..*)\.|.*/,
            j = /\..*/,
            T = /::\d+$/,
            R = {};
        let O = 1;
        const I = {
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            },
            V = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

        function K(f, s) {
            return s && `${s}::${O++}` || f.uidEvent || O++
        }

        function _e(f) {
            const s = K(f);
            return f.uidEvent = s, R[s] = R[s] || {}, R[s]
        }

        function He(f, s, l = null) {
            return Object.values(f).find(h => h.callable === s && h.delegationSelector === l)
        }

        function Ye(f, s, l) {
            const h = typeof s == "string",
                C = h ? l : s || l;
            let b = Me(f);
            return V.has(b) || (b = f), [h, C, b]
        }

        function Xe(f, s, l, h, C) {
            if (typeof s != "string" || !f) return;
            let [b, L, D] = Ye(s, l, h);
            s in I && (L = (G => function(q) {
                if (!q.relatedTarget || q.relatedTarget !== q.delegateTarget && !q.delegateTarget.contains(q.relatedTarget)) return G.call(this, q)
            })(L));
            const M = _e(f),
                z = M[D] || (M[D] = {}),
                W = He(z, L, b ? l : null);
            if (W) return void(W.oneOff = W.oneOff && C);
            const $ = K(L, s.replace(v, "")),
                te = b ? function(Y, G, q) {
                    return function X(ve) {
                        const Ce = Y.querySelectorAll(G);
                        for (let {
                                target: se
                            } = ve; se && se !== this; se = se.parentNode)
                            for (const pe of Ce)
                                if (pe === se) return U(ve, {
                                    delegateTarget: se
                                }), X.oneOff && E.off(Y, ve.type, G, q), q.apply(se, [ve])
                    }
                }(f, l, L) : function(Y, G) {
                    return function q(X) {
                        return U(X, {
                            delegateTarget: Y
                        }), q.oneOff && E.off(Y, X.type, G), G.apply(Y, [X])
                    }
                }(f, L);
            te.delegationSelector = b ? l : null, te.callable = L, te.oneOff = C, te.uidEvent = $, z[$] = te, f.addEventListener(D, te, b)
        }

        function ht(f, s, l, h, C) {
            const b = He(s[l], h, C);
            b && (f.removeEventListener(l, b, !!C), delete s[l][b.uidEvent])
        }

        function It(f, s, l, h) {
            const C = s[l] || {};
            for (const [b, L] of Object.entries(C)) b.includes(h) && ht(f, s, l, L.callable, L.delegationSelector)
        }

        function Me(f) {
            return f = f.replace(j, ""), I[f] || f
        }
        const E = {
            on(f, s, l, h) {
                Xe(f, s, l, h, !1)
            },
            one(f, s, l, h) {
                Xe(f, s, l, h, !0)
            },
            off(f, s, l, h) {
                if (typeof s != "string" || !f) return;
                const [C, b, L] = Ye(s, l, h), D = L !== s, M = _e(f), z = M[L] || {}, W = s.startsWith(".");
                if (b === void 0) {
                    if (W)
                        for (const $ of Object.keys(M)) It(f, M, $, s.slice(1));
                    for (const [$, te] of Object.entries(z)) {
                        const Y = $.replace(T, "");
                        D && !s.includes(Y) || ht(f, M, L, te.callable, te.delegationSelector)
                    }
                } else {
                    if (!Object.keys(z).length) return;
                    ht(f, M, L, b, C ? l : null)
                }
            },
            trigger(f, s, l) {
                if (typeof s != "string" || !f) return null;
                const h = w();
                let C = null,
                    b = !0,
                    L = !0,
                    D = !1;
                s !== Me(s) && h && (C = h.Event(s, l), h(f).trigger(C), b = !C.isPropagationStopped(), L = !C.isImmediatePropagationStopped(), D = C.isDefaultPrevented());
                const M = U(new Event(s, {
                    bubbles: b,
                    cancelable: !0
                }), l);
                return D && M.preventDefault(), L && f.dispatchEvent(M), M.defaultPrevented && C && C.preventDefault(), M
            }
        };

        function U(f, s = {}) {
            for (const [l, h] of Object.entries(s)) try {
                f[l] = h
            } catch {
                Object.defineProperty(f, l, {
                    configurable: !0,
                    get: () => h
                })
            }
            return f
        }

        function Q(f) {
            if (f === "true") return !0;
            if (f === "false") return !1;
            if (f === Number(f).toString()) return Number(f);
            if (f === "" || f === "null") return null;
            if (typeof f != "string") return f;
            try {
                return JSON.parse(decodeURIComponent(f))
            } catch {
                return f
            }
        }

        function ie(f) {
            return f.replace(/[A-Z]/g, s => `-${s.toLowerCase()}`)
        }
        const J = {
            setDataAttribute(f, s, l) {
                f.setAttribute(`data-bs-${ie(s)}`, l)
            },
            removeDataAttribute(f, s) {
                f.removeAttribute(`data-bs-${ie(s)}`)
            },
            getDataAttributes(f) {
                if (!f) return {};
                const s = {},
                    l = Object.keys(f.dataset).filter(h => h.startsWith("bs") && !h.startsWith("bsConfig"));
                for (const h of l) {
                    let C = h.replace(/^bs/, "");
                    C = C.charAt(0).toLowerCase() + C.slice(1, C.length), s[C] = Q(f.dataset[h])
                }
                return s
            },
            getDataAttribute: (f, s) => Q(f.getAttribute(`data-bs-${ie(s)}`))
        };
        class ke {
            static get Default() {
                return {}
            }
            static get DefaultType() {
                return {}
            }
            static get NAME() {
                throw new Error('You have to implement the static method "NAME", for each component!')
            }
            _getConfig(s) {
                return s = this._mergeConfigObj(s), s = this._configAfterMerge(s), this._typeCheckConfig(s), s
            }
            _configAfterMerge(s) {
                return s
            }
            _mergeConfigObj(s, l) {
                const h = o(l) ? J.getDataAttribute(l, "config") : {};
                return {
                    ...this.constructor.Default,
                    ...typeof h == "object" ? h : {},
                    ...o(l) ? J.getDataAttributes(l) : {},
                    ...typeof s == "object" ? s : {}
                }
            }
            _typeCheckConfig(s, l = this.constructor.DefaultType) {
                for (const [C, b] of Object.entries(l)) {
                    const L = s[C],
                        D = o(L) ? "element" : (h = L) == null ? `${h}` : Object.prototype.toString.call(h).match(/\s([a-z]+)/i)[1].toLowerCase();
                    if (!new RegExp(b).test(D)) throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${C}" provided type "${D}" but expected type "${b}".`)
                }
                var h
            }
        }
        class le extends ke {
            constructor(s, l) {
                super(), (s = a(s)) && (this._element = s, this._config = this._getConfig(l), t.set(this._element, this.constructor.DATA_KEY, this))
            }
            dispose() {
                t.remove(this._element, this.constructor.DATA_KEY), E.off(this._element, this.constructor.EVENT_KEY);
                for (const s of Object.getOwnPropertyNames(this)) this[s] = null
            }
            _queueCallback(s, l, h = !0) {
                x(s, l, h)
            }
            _getConfig(s) {
                return s = this._mergeConfigObj(s, this._element), s = this._configAfterMerge(s), this._typeCheckConfig(s), s
            }
            static getInstance(s) {
                return t.get(a(s), this.DATA_KEY)
            }
            static getOrCreateInstance(s, l = {}) {
                return this.getInstance(s) || new this(s, typeof l == "object" ? l : null)
            }
            static get VERSION() {
                return "5.3.3"
            }
            static get DATA_KEY() {
                return `bs.${this.NAME}`
            }
            static get EVENT_KEY() {
                return `.${this.DATA_KEY}`
            }
            static eventName(s) {
                return `${s}${this.EVENT_KEY}`
            }
        }
        const Te = f => {
                let s = f.getAttribute("data-bs-target");
                if (!s || s === "#") {
                    let l = f.getAttribute("href");
                    if (!l || !l.includes("#") && !l.startsWith(".")) return null;
                    l.includes("#") && !l.startsWith("#") && (l = `#${l.split("#")[1]}`), s = l && l !== "#" ? l.trim() : null
                }
                return s ? s.split(",").map(l => r(l)).join(",") : null
            },
            F = {
                find: (f, s = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(s, f)),
                findOne: (f, s = document.documentElement) => Element.prototype.querySelector.call(s, f),
                children: (f, s) => [].concat(...f.children).filter(l => l.matches(s)),
                parents(f, s) {
                    const l = [];
                    let h = f.parentNode.closest(s);
                    for (; h;) l.push(h), h = h.parentNode.closest(s);
                    return l
                },
                prev(f, s) {
                    let l = f.previousElementSibling;
                    for (; l;) {
                        if (l.matches(s)) return [l];
                        l = l.previousElementSibling
                    }
                    return []
                },
                next(f, s) {
                    let l = f.nextElementSibling;
                    for (; l;) {
                        if (l.matches(s)) return [l];
                        l = l.nextElementSibling
                    }
                    return []
                },
                focusableChildren(f) {
                    const s = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map(l => `${l}:not([tabindex^="-"])`).join(",");
                    return this.find(s, f).filter(l => !c(l) && u(l))
                },
                getSelectorFromElement(f) {
                    const s = Te(f);
                    return s && F.findOne(s) ? s : null
                },
                getElementFromSelector(f) {
                    const s = Te(f);
                    return s ? F.findOne(s) : null
                },
                getMultipleElementsFromSelector(f) {
                    const s = Te(f);
                    return s ? F.find(s) : []
                }
            },
            Fe = (f, s = "hide") => {
                const l = `click.dismiss${f.EVENT_KEY}`,
                    h = f.NAME;
                E.on(document, l, `[data-bs-dismiss="${h}"]`, function(C) {
                    if (["A", "AREA"].includes(this.tagName) && C.preventDefault(), c(this)) return;
                    const b = F.getElementFromSelector(this) || this.closest(`.${h}`);
                    f.getOrCreateInstance(b)[s]()
                })
            },
            an = ".bs.alert",
            _n = `close${an}`,
            Yi = `closed${an}`;
        class ln extends le {
            static get NAME() {
                return "alert"
            }
            close() {
                if (E.trigger(this._element, _n).defaultPrevented) return;
                this._element.classList.remove("show");
                const s = this._element.classList.contains("fade");
                this._queueCallback(() => this._destroyElement(), this._element, s)
            }
            _destroyElement() {
                this._element.remove(), E.trigger(this._element, Yi), this.dispose()
            }
            static jQueryInterface(s) {
                return this.each(function() {
                    const l = ln.getOrCreateInstance(this);
                    if (typeof s == "string") {
                        if (l[s] === void 0 || s.startsWith("_") || s === "constructor") throw new TypeError(`No method named "${s}"`);
                        l[s](this)
                    }
                })
            }
        }
        Fe(ln, "close"), k(ln);
        const Zt = '[data-bs-toggle="button"]';
        class Ji extends le {
            static get NAME() {
                return "button"
            }
            toggle() {
                this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
            }
            static jQueryInterface(s) {
                return this.each(function() {
                    const l = Ji.getOrCreateInstance(this);
                    s === "toggle" && l[s]()
                })
            }
        }
        E.on(document, "click.bs.button.data-api", Zt, f => {
            f.preventDefault();
            const s = f.target.closest(Zt);
            Ji.getOrCreateInstance(s).toggle()
        }), k(Ji);
        const Vr = ".bs.swipe",
            s1 = `touchstart${Vr}`,
            a1 = `touchmove${Vr}`,
            l1 = `touchend${Vr}`,
            u1 = `pointerdown${Vr}`,
            c1 = `pointerup${Vr}`,
            d1 = {
                endCallback: null,
                leftCallback: null,
                rightCallback: null
            },
            f1 = {
                endCallback: "(function|null)",
                leftCallback: "(function|null)",
                rightCallback: "(function|null)"
            };
        class ls extends ke {
            constructor(s, l) {
                super(), this._element = s, s && ls.isSupported() && (this._config = this._getConfig(l), this._deltaX = 0, this._supportPointerEvents = !!window.PointerEvent, this._initEvents())
            }
            static get Default() {
                return d1
            }
            static get DefaultType() {
                return f1
            }
            static get NAME() {
                return "swipe"
            }
            dispose() {
                E.off(this._element, Vr)
            }
            _start(s) {
                this._supportPointerEvents ? this._eventIsPointerPenTouch(s) && (this._deltaX = s.clientX) : this._deltaX = s.touches[0].clientX
            }
            _end(s) {
                this._eventIsPointerPenTouch(s) && (this._deltaX = s.clientX - this._deltaX), this._handleSwipe(), S(this._config.endCallback)
            }
            _move(s) {
                this._deltaX = s.touches && s.touches.length > 1 ? 0 : s.touches[0].clientX - this._deltaX
            }
            _handleSwipe() {
                const s = Math.abs(this._deltaX);
                if (s <= 40) return;
                const l = s / this._deltaX;
                this._deltaX = 0, l && S(l > 0 ? this._config.rightCallback : this._config.leftCallback)
            }
            _initEvents() {
                this._supportPointerEvents ? (E.on(this._element, u1, s => this._start(s)), E.on(this._element, c1, s => this._end(s)), this._element.classList.add("pointer-event")) : (E.on(this._element, s1, s => this._start(s)), E.on(this._element, a1, s => this._move(s)), E.on(this._element, l1, s => this._end(s)))
            }
            _eventIsPointerPenTouch(s) {
                return this._supportPointerEvents && (s.pointerType === "pen" || s.pointerType === "touch")
            }
            static isSupported() {
                return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0
            }
        }
        const Bn = ".bs.carousel",
            uf = ".data-api",
            qi = "next",
            Kr = "prev",
            Qr = "left",
            us = "right",
            p1 = `slide${Bn}`,
            Nl = `slid${Bn}`,
            h1 = `keydown${Bn}`,
            m1 = `mouseenter${Bn}`,
            g1 = `mouseleave${Bn}`,
            y1 = `dragstart${Bn}`,
            v1 = `load${Bn}${uf}`,
            x1 = `click${Bn}${uf}`,
            cf = "carousel",
            cs = "active",
            df = ".active",
            ff = ".carousel-item",
            w1 = df + ff,
            _1 = {
                ArrowLeft: us,
                ArrowRight: Qr
            },
            k1 = {
                interval: 5e3,
                keyboard: !0,
                pause: "hover",
                ride: !1,
                touch: !0,
                wrap: !0
            },
            C1 = {
                interval: "(number|boolean)",
                keyboard: "boolean",
                pause: "(string|boolean)",
                ride: "(boolean|string)",
                touch: "boolean",
                wrap: "boolean"
            };
        class Zr extends le {
            constructor(s, l) {
                super(s, l), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = F.findOne(".carousel-indicators", this._element), this._addEventListeners(), this._config.ride === cf && this.cycle()
            }
            static get Default() {
                return k1
            }
            static get DefaultType() {
                return C1
            }
            static get NAME() {
                return "carousel"
            }
            next() {
                this._slide(qi)
            }
            nextWhenVisible() {
                !document.hidden && u(this._element) && this.next()
            }
            prev() {
                this._slide(Kr)
            }
            pause() {
                this._isSliding && i(this._element), this._clearInterval()
            }
            cycle() {
                this._clearInterval(), this._updateInterval(), this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval)
            }
            _maybeEnableCycle() {
                this._config.ride && (this._isSliding ? E.one(this._element, Nl, () => this.cycle()) : this.cycle())
            }
            to(s) {
                const l = this._getItems();
                if (s > l.length - 1 || s < 0) return;
                if (this._isSliding) return void E.one(this._element, Nl, () => this.to(s));
                const h = this._getItemIndex(this._getActive());
                if (h === s) return;
                const C = s > h ? qi : Kr;
                this._slide(C, l[s])
            }
            dispose() {
                this._swipeHelper && this._swipeHelper.dispose(), super.dispose()
            }
            _configAfterMerge(s) {
                return s.defaultInterval = s.interval, s
            }
            _addEventListeners() {
                this._config.keyboard && E.on(this._element, h1, s => this._keydown(s)), this._config.pause === "hover" && (E.on(this._element, m1, () => this.pause()), E.on(this._element, g1, () => this._maybeEnableCycle())), this._config.touch && ls.isSupported() && this._addTouchEventListeners()
            }
            _addTouchEventListeners() {
                for (const l of F.find(".carousel-item img", this._element)) E.on(l, y1, h => h.preventDefault());
                const s = {
                    leftCallback: () => this._slide(this._directionToOrder(Qr)),
                    rightCallback: () => this._slide(this._directionToOrder(us)),
                    endCallback: () => {
                        this._config.pause === "hover" && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), 500 + this._config.interval))
                    }
                };
                this._swipeHelper = new ls(this._element, s)
            }
            _keydown(s) {
                if (/input|textarea/i.test(s.target.tagName)) return;
                const l = _1[s.key];
                l && (s.preventDefault(), this._slide(this._directionToOrder(l)))
            }
            _getItemIndex(s) {
                return this._getItems().indexOf(s)
            }
            _setActiveIndicatorElement(s) {
                if (!this._indicatorsElement) return;
                const l = F.findOne(df, this._indicatorsElement);
                l.classList.remove(cs), l.removeAttribute("aria-current");
                const h = F.findOne(`[data-bs-slide-to="${s}"]`, this._indicatorsElement);
                h && (h.classList.add(cs), h.setAttribute("aria-current", "true"))
            }
            _updateInterval() {
                const s = this._activeElement || this._getActive();
                if (!s) return;
                const l = Number.parseInt(s.getAttribute("data-bs-interval"), 10);
                this._config.interval = l || this._config.defaultInterval
            }
            _slide(s, l = null) {
                if (this._isSliding) return;
                const h = this._getActive(),
                    C = s === qi,
                    b = l || y(this._getItems(), h, C, this._config.wrap);
                if (b === h) return;
                const L = this._getItemIndex(b),
                    D = $ => E.trigger(this._element, $, {
                        relatedTarget: b,
                        direction: this._orderToDirection(s),
                        from: this._getItemIndex(h),
                        to: L
                    });
                if (D(p1).defaultPrevented || !h || !b) return;
                const M = !!this._interval;
                this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(L), this._activeElement = b;
                const z = C ? "carousel-item-start" : "carousel-item-end",
                    W = C ? "carousel-item-next" : "carousel-item-prev";
                b.classList.add(W), g(b), h.classList.add(z), b.classList.add(z), this._queueCallback(() => {
                    b.classList.remove(z, W), b.classList.add(cs), h.classList.remove(cs, W, z), this._isSliding = !1, D(Nl)
                }, h, this._isAnimated()), M && this.cycle()
            }
            _isAnimated() {
                return this._element.classList.contains("slide")
            }
            _getActive() {
                return F.findOne(w1, this._element)
            }
            _getItems() {
                return F.find(ff, this._element)
            }
            _clearInterval() {
                this._interval && (clearInterval(this._interval), this._interval = null)
            }
            _directionToOrder(s) {
                return _() ? s === Qr ? Kr : qi : s === Qr ? qi : Kr
            }
            _orderToDirection(s) {
                return _() ? s === Kr ? Qr : us : s === Kr ? us : Qr
            }
            static jQueryInterface(s) {
                return this.each(function() {
                    const l = Zr.getOrCreateInstance(this, s);
                    if (typeof s != "number") {
                        if (typeof s == "string") {
                            if (l[s] === void 0 || s.startsWith("_") || s === "constructor") throw new TypeError(`No method named "${s}"`);
                            l[s]()
                        }
                    } else l.to(s)
                })
            }
        }
        E.on(document, x1, "[data-bs-slide], [data-bs-slide-to]", function(f) {
            const s = F.getElementFromSelector(this);
            if (!s || !s.classList.contains(cf)) return;
            f.preventDefault();
            const l = Zr.getOrCreateInstance(s),
                h = this.getAttribute("data-bs-slide-to");
            return h ? (l.to(h), void l._maybeEnableCycle()) : J.getDataAttribute(this, "slide") === "next" ? (l.next(), void l._maybeEnableCycle()) : (l.prev(), void l._maybeEnableCycle())
        }), E.on(window, v1, () => {
            const f = F.find('[data-bs-ride="carousel"]');
            for (const s of f) Zr.getOrCreateInstance(s)
        }), k(Zr);
        const Gi = ".bs.collapse",
            S1 = `show${Gi}`,
            E1 = `shown${Gi}`,
            b1 = `hide${Gi}`,
            N1 = `hidden${Gi}`,
            j1 = `click${Gi}.data-api`,
            jl = "show",
            Yr = "collapse",
            ds = "collapsing",
            T1 = `:scope .${Yr} .${Yr}`,
            Tl = '[data-bs-toggle="collapse"]',
            L1 = {
                parent: null,
                toggle: !0
            },
            A1 = {
                parent: "(null|element)",
                toggle: "boolean"
            };
        class Jr extends le {
            constructor(s, l) {
                super(s, l), this._isTransitioning = !1, this._triggerArray = [];
                const h = F.find(Tl);
                for (const C of h) {
                    const b = F.getSelectorFromElement(C),
                        L = F.find(b).filter(D => D === this._element);
                    b !== null && L.length && this._triggerArray.push(C)
                }
                this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle()
            }
            static get Default() {
                return L1
            }
            static get DefaultType() {
                return A1
            }
            static get NAME() {
                return "collapse"
            }
            toggle() {
                this._isShown() ? this.hide() : this.show()
            }
            show() {
                if (this._isTransitioning || this._isShown()) return;
                let s = [];
                if (this._config.parent && (s = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(C => C !== this._element).map(C => Jr.getOrCreateInstance(C, {
                        toggle: !1
                    }))), s.length && s[0]._isTransitioning || E.trigger(this._element, S1).defaultPrevented) return;
                for (const C of s) C.hide();
                const l = this._getDimension();
                this._element.classList.remove(Yr), this._element.classList.add(ds), this._element.style[l] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
                const h = `scroll${l[0].toUpperCase()+l.slice(1)}`;
                this._queueCallback(() => {
                    this._isTransitioning = !1, this._element.classList.remove(ds), this._element.classList.add(Yr, jl), this._element.style[l] = "", E.trigger(this._element, E1)
                }, this._element, !0), this._element.style[l] = `${this._element[h]}px`
            }
            hide() {
                if (this._isTransitioning || !this._isShown() || E.trigger(this._element, b1).defaultPrevented) return;
                const s = this._getDimension();
                this._element.style[s] = `${this._element.getBoundingClientRect()[s]}px`, g(this._element), this._element.classList.add(ds), this._element.classList.remove(Yr, jl);
                for (const l of this._triggerArray) {
                    const h = F.getElementFromSelector(l);
                    h && !this._isShown(h) && this._addAriaAndCollapsedClass([l], !1)
                }
                this._isTransitioning = !0, this._element.style[s] = "", this._queueCallback(() => {
                    this._isTransitioning = !1, this._element.classList.remove(ds), this._element.classList.add(Yr), E.trigger(this._element, N1)
                }, this._element, !0)
            }
            _isShown(s = this._element) {
                return s.classList.contains(jl)
            }
            _configAfterMerge(s) {
                return s.toggle = !!s.toggle, s.parent = a(s.parent), s
            }
            _getDimension() {
                return this._element.classList.contains("collapse-horizontal") ? "width" : "height"
            }
            _initializeChildren() {
                if (!this._config.parent) return;
                const s = this._getFirstLevelChildren(Tl);
                for (const l of s) {
                    const h = F.getElementFromSelector(l);
                    h && this._addAriaAndCollapsedClass([l], this._isShown(h))
                }
            }
            _getFirstLevelChildren(s) {
                const l = F.find(T1, this._config.parent);
                return F.find(s, this._config.parent).filter(h => !l.includes(h))
            }
            _addAriaAndCollapsedClass(s, l) {
                if (s.length)
                    for (const h of s) h.classList.toggle("collapsed", !l), h.setAttribute("aria-expanded", l)
            }
            static jQueryInterface(s) {
                const l = {};
                return typeof s == "string" && /show|hide/.test(s) && (l.toggle = !1), this.each(function() {
                    const h = Jr.getOrCreateInstance(this, l);
                    if (typeof s == "string") {
                        if (h[s] === void 0) throw new TypeError(`No method named "${s}"`);
                        h[s]()
                    }
                })
            }
        }
        E.on(document, j1, Tl, function(f) {
            (f.target.tagName === "A" || f.delegateTarget && f.delegateTarget.tagName === "A") && f.preventDefault();
            for (const s of F.getMultipleElementsFromSelector(this)) Jr.getOrCreateInstance(s, {
                toggle: !1
            }).toggle()
        }), k(Jr);
        var ot = "top",
            kt = "bottom",
            Ct = "right",
            st = "left",
            fs = "auto",
            qr = [ot, kt, Ct, st],
            fr = "start",
            Gr = "end",
            pf = "clippingParents",
            Ll = "viewport",
            Xr = "popper",
            hf = "reference",
            Al = qr.reduce(function(f, s) {
                return f.concat([s + "-" + fr, s + "-" + Gr])
            }, []),
            Pl = [].concat(qr, [fs]).reduce(function(f, s) {
                return f.concat([s, s + "-" + fr, s + "-" + Gr])
            }, []),
            mf = "beforeRead",
            gf = "read",
            yf = "afterRead",
            vf = "beforeMain",
            xf = "main",
            wf = "afterMain",
            _f = "beforeWrite",
            kf = "write",
            Cf = "afterWrite",
            Sf = [mf, gf, yf, vf, xf, wf, _f, kf, Cf];

        function un(f) {
            return f ? (f.nodeName || "").toLowerCase() : null
        }

        function St(f) {
            if (f == null) return window;
            if (f.toString() !== "[object Window]") {
                var s = f.ownerDocument;
                return s && s.defaultView || window
            }
            return f
        }

        function pr(f) {
            return f instanceof St(f).Element || f instanceof Element
        }

        function Dt(f) {
            return f instanceof St(f).HTMLElement || f instanceof HTMLElement
        }

        function Ol(f) {
            return typeof ShadowRoot < "u" && (f instanceof St(f).ShadowRoot || f instanceof ShadowRoot)
        }
        const Rl = {
            name: "applyStyles",
            enabled: !0,
            phase: "write",
            fn: function(f) {
                var s = f.state;
                Object.keys(s.elements).forEach(function(l) {
                    var h = s.styles[l] || {},
                        C = s.attributes[l] || {},
                        b = s.elements[l];
                    Dt(b) && un(b) && (Object.assign(b.style, h), Object.keys(C).forEach(function(L) {
                        var D = C[L];
                        D === !1 ? b.removeAttribute(L) : b.setAttribute(L, D === !0 ? "" : D)
                    }))
                })
            },
            effect: function(f) {
                var s = f.state,
                    l = {
                        popper: {
                            position: s.options.strategy,
                            left: "0",
                            top: "0",
                            margin: "0"
                        },
                        arrow: {
                            position: "absolute"
                        },
                        reference: {}
                    };
                return Object.assign(s.elements.popper.style, l.popper), s.styles = l, s.elements.arrow && Object.assign(s.elements.arrow.style, l.arrow),
                    function() {
                        Object.keys(s.elements).forEach(function(h) {
                            var C = s.elements[h],
                                b = s.attributes[h] || {},
                                L = Object.keys(s.styles.hasOwnProperty(h) ? s.styles[h] : l[h]).reduce(function(D, M) {
                                    return D[M] = "", D
                                }, {});
                            Dt(C) && un(C) && (Object.assign(C.style, L), Object.keys(b).forEach(function(D) {
                                C.removeAttribute(D)
                            }))
                        })
                    }
            },
            requires: ["computeStyles"]
        };

        function cn(f) {
            return f.split("-")[0]
        }
        var hr = Math.max,
            ps = Math.min,
            ei = Math.round;

        function Il() {
            var f = navigator.userAgentData;
            return f != null && f.brands && Array.isArray(f.brands) ? f.brands.map(function(s) {
                return s.brand + "/" + s.version
            }).join(" ") : navigator.userAgent
        }

        function Ef() {
            return !/^((?!chrome|android).)*safari/i.test(Il())
        }

        function ti(f, s, l) {
            s === void 0 && (s = !1), l === void 0 && (l = !1);
            var h = f.getBoundingClientRect(),
                C = 1,
                b = 1;
            s && Dt(f) && (C = f.offsetWidth > 0 && ei(h.width) / f.offsetWidth || 1, b = f.offsetHeight > 0 && ei(h.height) / f.offsetHeight || 1);
            var L = (pr(f) ? St(f) : window).visualViewport,
                D = !Ef() && l,
                M = (h.left + (D && L ? L.offsetLeft : 0)) / C,
                z = (h.top + (D && L ? L.offsetTop : 0)) / b,
                W = h.width / C,
                $ = h.height / b;
            return {
                width: W,
                height: $,
                top: z,
                right: M + W,
                bottom: z + $,
                left: M,
                x: M,
                y: z
            }
        }

        function Dl(f) {
            var s = ti(f),
                l = f.offsetWidth,
                h = f.offsetHeight;
            return Math.abs(s.width - l) <= 1 && (l = s.width), Math.abs(s.height - h) <= 1 && (h = s.height), {
                x: f.offsetLeft,
                y: f.offsetTop,
                width: l,
                height: h
            }
        }

        function bf(f, s) {
            var l = s.getRootNode && s.getRootNode();
            if (f.contains(s)) return !0;
            if (l && Ol(l)) {
                var h = s;
                do {
                    if (h && f.isSameNode(h)) return !0;
                    h = h.parentNode || h.host
                } while (h)
            }
            return !1
        }

        function kn(f) {
            return St(f).getComputedStyle(f)
        }

        function P1(f) {
            return ["table", "td", "th"].indexOf(un(f)) >= 0
        }

        function Mn(f) {
            return ((pr(f) ? f.ownerDocument : f.document) || window.document).documentElement
        }

        function hs(f) {
            return un(f) === "html" ? f : f.assignedSlot || f.parentNode || (Ol(f) ? f.host : null) || Mn(f)
        }

        function Nf(f) {
            return Dt(f) && kn(f).position !== "fixed" ? f.offsetParent : null
        }

        function Xi(f) {
            for (var s = St(f), l = Nf(f); l && P1(l) && kn(l).position === "static";) l = Nf(l);
            return l && (un(l) === "html" || un(l) === "body" && kn(l).position === "static") ? s : l || function(h) {
                var C = /firefox/i.test(Il());
                if (/Trident/i.test(Il()) && Dt(h) && kn(h).position === "fixed") return null;
                var b = hs(h);
                for (Ol(b) && (b = b.host); Dt(b) && ["html", "body"].indexOf(un(b)) < 0;) {
                    var L = kn(b);
                    if (L.transform !== "none" || L.perspective !== "none" || L.contain === "paint" || ["transform", "perspective"].indexOf(L.willChange) !== -1 || C && L.willChange === "filter" || C && L.filter && L.filter !== "none") return b;
                    b = b.parentNode
                }
                return null
            }(f) || s
        }

        function Bl(f) {
            return ["top", "bottom"].indexOf(f) >= 0 ? "x" : "y"
        }

        function eo(f, s, l) {
            return hr(f, ps(s, l))
        }

        function jf(f) {
            return Object.assign({}, {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }, f)
        }

        function Tf(f, s) {
            return s.reduce(function(l, h) {
                return l[h] = f, l
            }, {})
        }
        const Lf = {
            name: "arrow",
            enabled: !0,
            phase: "main",
            fn: function(f) {
                var s, l = f.state,
                    h = f.name,
                    C = f.options,
                    b = l.elements.arrow,
                    L = l.modifiersData.popperOffsets,
                    D = cn(l.placement),
                    M = Bl(D),
                    z = [st, Ct].indexOf(D) >= 0 ? "height" : "width";
                if (b && L) {
                    var W = function(xe, ge) {
                            return jf(typeof(xe = typeof xe == "function" ? xe(Object.assign({}, ge.rects, {
                                placement: ge.placement
                            })) : xe) != "number" ? xe : Tf(xe, qr))
                        }(C.padding, l),
                        $ = Dl(b),
                        te = M === "y" ? ot : st,
                        Y = M === "y" ? kt : Ct,
                        G = l.rects.reference[z] + l.rects.reference[M] - L[M] - l.rects.popper[z],
                        q = L[M] - l.rects.reference[M],
                        X = Xi(b),
                        ve = X ? M === "y" ? X.clientHeight || 0 : X.clientWidth || 0 : 0,
                        Ce = G / 2 - q / 2,
                        se = W[te],
                        pe = ve - $[z] - W[Y],
                        ne = ve / 2 - $[z] / 2 + Ce,
                        ue = eo(se, ne, pe),
                        me = M;
                    l.modifiersData[h] = ((s = {})[me] = ue, s.centerOffset = ue - ne, s)
                }
            },
            effect: function(f) {
                var s = f.state,
                    l = f.options.element,
                    h = l === void 0 ? "[data-popper-arrow]" : l;
                h != null && (typeof h != "string" || (h = s.elements.popper.querySelector(h))) && bf(s.elements.popper, h) && (s.elements.arrow = h)
            },
            requires: ["popperOffsets"],
            requiresIfExists: ["preventOverflow"]
        };

        function ni(f) {
            return f.split("-")[1]
        }
        var O1 = {
            top: "auto",
            right: "auto",
            bottom: "auto",
            left: "auto"
        };

        function Af(f) {
            var s, l = f.popper,
                h = f.popperRect,
                C = f.placement,
                b = f.variation,
                L = f.offsets,
                D = f.position,
                M = f.gpuAcceleration,
                z = f.adaptive,
                W = f.roundOffsets,
                $ = f.isFixed,
                te = L.x,
                Y = te === void 0 ? 0 : te,
                G = L.y,
                q = G === void 0 ? 0 : G,
                X = typeof W == "function" ? W({
                    x: Y,
                    y: q
                }) : {
                    x: Y,
                    y: q
                };
            Y = X.x, q = X.y;
            var ve = L.hasOwnProperty("x"),
                Ce = L.hasOwnProperty("y"),
                se = st,
                pe = ot,
                ne = window;
            if (z) {
                var ue = Xi(l),
                    me = "clientHeight",
                    xe = "clientWidth";
                ue === St(l) && kn(ue = Mn(l)).position !== "static" && D === "absolute" && (me = "scrollHeight", xe = "scrollWidth"), (C === ot || (C === st || C === Ct) && b === Gr) && (pe = kt, q -= ($ && ue === ne && ne.visualViewport ? ne.visualViewport.height : ue[me]) - h.height, q *= M ? 1 : -1), C !== st && (C !== ot && C !== kt || b !== Gr) || (se = Ct, Y -= ($ && ue === ne && ne.visualViewport ? ne.visualViewport.width : ue[xe]) - h.width, Y *= M ? 1 : -1)
            }
            var ge, Ie = Object.assign({
                    position: D
                }, z && O1),
                Et = W === !0 ? function(Jt, at) {
                    var Mt = Jt.x,
                        Ft = Jt.y,
                        Oe = at.devicePixelRatio || 1;
                    return {
                        x: ei(Mt * Oe) / Oe || 0,
                        y: ei(Ft * Oe) / Oe || 0
                    }
                }({
                    x: Y,
                    y: q
                }, St(l)) : {
                    x: Y,
                    y: q
                };
            return Y = Et.x, q = Et.y, M ? Object.assign({}, Ie, ((ge = {})[pe] = Ce ? "0" : "", ge[se] = ve ? "0" : "", ge.transform = (ne.devicePixelRatio || 1) <= 1 ? "translate(" + Y + "px, " + q + "px)" : "translate3d(" + Y + "px, " + q + "px, 0)", ge)) : Object.assign({}, Ie, ((s = {})[pe] = Ce ? q + "px" : "", s[se] = ve ? Y + "px" : "", s.transform = "", s))
        }
        const Ml = {
            name: "computeStyles",
            enabled: !0,
            phase: "beforeWrite",
            fn: function(f) {
                var s = f.state,
                    l = f.options,
                    h = l.gpuAcceleration,
                    C = h === void 0 || h,
                    b = l.adaptive,
                    L = b === void 0 || b,
                    D = l.roundOffsets,
                    M = D === void 0 || D,
                    z = {
                        placement: cn(s.placement),
                        variation: ni(s.placement),
                        popper: s.elements.popper,
                        popperRect: s.rects.popper,
                        gpuAcceleration: C,
                        isFixed: s.options.strategy === "fixed"
                    };
                s.modifiersData.popperOffsets != null && (s.styles.popper = Object.assign({}, s.styles.popper, Af(Object.assign({}, z, {
                    offsets: s.modifiersData.popperOffsets,
                    position: s.options.strategy,
                    adaptive: L,
                    roundOffsets: M
                })))), s.modifiersData.arrow != null && (s.styles.arrow = Object.assign({}, s.styles.arrow, Af(Object.assign({}, z, {
                    offsets: s.modifiersData.arrow,
                    position: "absolute",
                    adaptive: !1,
                    roundOffsets: M
                })))), s.attributes.popper = Object.assign({}, s.attributes.popper, {
                    "data-popper-placement": s.placement
                })
            },
            data: {}
        };
        var ms = {
            passive: !0
        };
        const Fl = {
            name: "eventListeners",
            enabled: !0,
            phase: "write",
            fn: function() {},
            effect: function(f) {
                var s = f.state,
                    l = f.instance,
                    h = f.options,
                    C = h.scroll,
                    b = C === void 0 || C,
                    L = h.resize,
                    D = L === void 0 || L,
                    M = St(s.elements.popper),
                    z = [].concat(s.scrollParents.reference, s.scrollParents.popper);
                return b && z.forEach(function(W) {
                        W.addEventListener("scroll", l.update, ms)
                    }), D && M.addEventListener("resize", l.update, ms),
                    function() {
                        b && z.forEach(function(W) {
                            W.removeEventListener("scroll", l.update, ms)
                        }), D && M.removeEventListener("resize", l.update, ms)
                    }
            },
            data: {}
        };
        var R1 = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };

        function gs(f) {
            return f.replace(/left|right|bottom|top/g, function(s) {
                return R1[s]
            })
        }
        var I1 = {
            start: "end",
            end: "start"
        };

        function Pf(f) {
            return f.replace(/start|end/g, function(s) {
                return I1[s]
            })
        }

        function $l(f) {
            var s = St(f);
            return {
                scrollLeft: s.pageXOffset,
                scrollTop: s.pageYOffset
            }
        }

        function zl(f) {
            return ti(Mn(f)).left + $l(f).scrollLeft
        }

        function Hl(f) {
            var s = kn(f),
                l = s.overflow,
                h = s.overflowX,
                C = s.overflowY;
            return /auto|scroll|overlay|hidden/.test(l + C + h)
        }

        function Of(f) {
            return ["html", "body", "#document"].indexOf(un(f)) >= 0 ? f.ownerDocument.body : Dt(f) && Hl(f) ? f : Of(hs(f))
        }

        function to(f, s) {
            var l;
            s === void 0 && (s = []);
            var h = Of(f),
                C = h === ((l = f.ownerDocument) == null ? void 0 : l.body),
                b = St(h),
                L = C ? [b].concat(b.visualViewport || [], Hl(h) ? h : []) : h,
                D = s.concat(L);
            return C ? D : D.concat(to(hs(L)))
        }

        function Wl(f) {
            return Object.assign({}, f, {
                left: f.x,
                top: f.y,
                right: f.x + f.width,
                bottom: f.y + f.height
            })
        }

        function Rf(f, s, l) {
            return s === Ll ? Wl(function(h, C) {
                var b = St(h),
                    L = Mn(h),
                    D = b.visualViewport,
                    M = L.clientWidth,
                    z = L.clientHeight,
                    W = 0,
                    $ = 0;
                if (D) {
                    M = D.width, z = D.height;
                    var te = Ef();
                    (te || !te && C === "fixed") && (W = D.offsetLeft, $ = D.offsetTop)
                }
                return {
                    width: M,
                    height: z,
                    x: W + zl(h),
                    y: $
                }
            }(f, l)) : pr(s) ? function(h, C) {
                var b = ti(h, !1, C === "fixed");
                return b.top = b.top + h.clientTop, b.left = b.left + h.clientLeft, b.bottom = b.top + h.clientHeight, b.right = b.left + h.clientWidth, b.width = h.clientWidth, b.height = h.clientHeight, b.x = b.left, b.y = b.top, b
            }(s, l) : Wl(function(h) {
                var C, b = Mn(h),
                    L = $l(h),
                    D = (C = h.ownerDocument) == null ? void 0 : C.body,
                    M = hr(b.scrollWidth, b.clientWidth, D ? D.scrollWidth : 0, D ? D.clientWidth : 0),
                    z = hr(b.scrollHeight, b.clientHeight, D ? D.scrollHeight : 0, D ? D.clientHeight : 0),
                    W = -L.scrollLeft + zl(h),
                    $ = -L.scrollTop;
                return kn(D || b).direction === "rtl" && (W += hr(b.clientWidth, D ? D.clientWidth : 0) - M), {
                    width: M,
                    height: z,
                    x: W,
                    y: $
                }
            }(Mn(f)))
        }

        function If(f) {
            var s, l = f.reference,
                h = f.element,
                C = f.placement,
                b = C ? cn(C) : null,
                L = C ? ni(C) : null,
                D = l.x + l.width / 2 - h.width / 2,
                M = l.y + l.height / 2 - h.height / 2;
            switch (b) {
                case ot:
                    s = {
                        x: D,
                        y: l.y - h.height
                    };
                    break;
                case kt:
                    s = {
                        x: D,
                        y: l.y + l.height
                    };
                    break;
                case Ct:
                    s = {
                        x: l.x + l.width,
                        y: M
                    };
                    break;
                case st:
                    s = {
                        x: l.x - h.width,
                        y: M
                    };
                    break;
                default:
                    s = {
                        x: l.x,
                        y: l.y
                    }
            }
            var z = b ? Bl(b) : null;
            if (z != null) {
                var W = z === "y" ? "height" : "width";
                switch (L) {
                    case fr:
                        s[z] = s[z] - (l[W] / 2 - h[W] / 2);
                        break;
                    case Gr:
                        s[z] = s[z] + (l[W] / 2 - h[W] / 2)
                }
            }
            return s
        }

        function ri(f, s) {
            s === void 0 && (s = {});
            var l = s,
                h = l.placement,
                C = h === void 0 ? f.placement : h,
                b = l.strategy,
                L = b === void 0 ? f.strategy : b,
                D = l.boundary,
                M = D === void 0 ? pf : D,
                z = l.rootBoundary,
                W = z === void 0 ? Ll : z,
                $ = l.elementContext,
                te = $ === void 0 ? Xr : $,
                Y = l.altBoundary,
                G = Y !== void 0 && Y,
                q = l.padding,
                X = q === void 0 ? 0 : q,
                ve = jf(typeof X != "number" ? X : Tf(X, qr)),
                Ce = te === Xr ? hf : Xr,
                se = f.rects.popper,
                pe = f.elements[G ? Ce : te],
                ne = function(at, Mt, Ft, Oe) {
                    var dn = Mt === "clippingParents" ? function(we) {
                            var lt = to(hs(we)),
                                $t = ["absolute", "fixed"].indexOf(kn(we).position) >= 0 && Dt(we) ? Xi(we) : we;
                            return pr($t) ? lt.filter(function($n) {
                                return pr($n) && bf($n, $t) && un($n) !== "body"
                            }) : []
                        }(at) : [].concat(Mt),
                        fn = [].concat(dn, [Ft]),
                        si = fn[0],
                        Ve = fn.reduce(function(we, lt) {
                            var $t = Rf(at, lt, Oe);
                            return we.top = hr($t.top, we.top), we.right = ps($t.right, we.right), we.bottom = ps($t.bottom, we.bottom), we.left = hr($t.left, we.left), we
                        }, Rf(at, si, Oe));
                    return Ve.width = Ve.right - Ve.left, Ve.height = Ve.bottom - Ve.top, Ve.x = Ve.left, Ve.y = Ve.top, Ve
                }(pr(pe) ? pe : pe.contextElement || Mn(f.elements.popper), M, W, L),
                ue = ti(f.elements.reference),
                me = If({
                    reference: ue,
                    element: se,
                    placement: C
                }),
                xe = Wl(Object.assign({}, se, me)),
                ge = te === Xr ? xe : ue,
                Ie = {
                    top: ne.top - ge.top + ve.top,
                    bottom: ge.bottom - ne.bottom + ve.bottom,
                    left: ne.left - ge.left + ve.left,
                    right: ge.right - ne.right + ve.right
                },
                Et = f.modifiersData.offset;
            if (te === Xr && Et) {
                var Jt = Et[C];
                Object.keys(Ie).forEach(function(at) {
                    var Mt = [Ct, kt].indexOf(at) >= 0 ? 1 : -1,
                        Ft = [ot, kt].indexOf(at) >= 0 ? "y" : "x";
                    Ie[at] += Jt[Ft] * Mt
                })
            }
            return Ie
        }

        function D1(f, s) {
            s === void 0 && (s = {});
            var l = s,
                h = l.placement,
                C = l.boundary,
                b = l.rootBoundary,
                L = l.padding,
                D = l.flipVariations,
                M = l.allowedAutoPlacements,
                z = M === void 0 ? Pl : M,
                W = ni(h),
                $ = W ? D ? Al : Al.filter(function(G) {
                    return ni(G) === W
                }) : qr,
                te = $.filter(function(G) {
                    return z.indexOf(G) >= 0
                });
            te.length === 0 && (te = $);
            var Y = te.reduce(function(G, q) {
                return G[q] = ri(f, {
                    placement: q,
                    boundary: C,
                    rootBoundary: b,
                    padding: L
                })[cn(q)], G
            }, {});
            return Object.keys(Y).sort(function(G, q) {
                return Y[G] - Y[q]
            })
        }
        const Df = {
            name: "flip",
            enabled: !0,
            phase: "main",
            fn: function(f) {
                var s = f.state,
                    l = f.options,
                    h = f.name;
                if (!s.modifiersData[h]._skip) {
                    for (var C = l.mainAxis, b = C === void 0 || C, L = l.altAxis, D = L === void 0 || L, M = l.fallbackPlacements, z = l.padding, W = l.boundary, $ = l.rootBoundary, te = l.altBoundary, Y = l.flipVariations, G = Y === void 0 || Y, q = l.allowedAutoPlacements, X = s.options.placement, ve = cn(X), Ce = M || (ve !== X && G ? function(we) {
                            if (cn(we) === fs) return [];
                            var lt = gs(we);
                            return [Pf(we), lt, Pf(lt)]
                        }(X) : [gs(X)]), se = [X].concat(Ce).reduce(function(we, lt) {
                            return we.concat(cn(lt) === fs ? D1(s, {
                                placement: lt,
                                boundary: W,
                                rootBoundary: $,
                                padding: z,
                                flipVariations: G,
                                allowedAutoPlacements: q
                            }) : lt)
                        }, []), pe = s.rects.reference, ne = s.rects.popper, ue = new Map, me = !0, xe = se[0], ge = 0; ge < se.length; ge++) {
                        var Ie = se[ge],
                            Et = cn(Ie),
                            Jt = ni(Ie) === fr,
                            at = [ot, kt].indexOf(Et) >= 0,
                            Mt = at ? "width" : "height",
                            Ft = ri(s, {
                                placement: Ie,
                                boundary: W,
                                rootBoundary: $,
                                altBoundary: te,
                                padding: z
                            }),
                            Oe = at ? Jt ? Ct : st : Jt ? kt : ot;
                        pe[Mt] > ne[Mt] && (Oe = gs(Oe));
                        var dn = gs(Oe),
                            fn = [];
                        if (b && fn.push(Ft[Et] <= 0), D && fn.push(Ft[Oe] <= 0, Ft[dn] <= 0), fn.every(function(we) {
                                return we
                            })) {
                            xe = Ie, me = !1;
                            break
                        }
                        ue.set(Ie, fn)
                    }
                    if (me)
                        for (var si = function(we) {
                                var lt = se.find(function($t) {
                                    var $n = ue.get($t);
                                    if ($n) return $n.slice(0, we).every(function(Es) {
                                        return Es
                                    })
                                });
                                if (lt) return xe = lt, "break"
                            }, Ve = G ? 3 : 1; Ve > 0 && si(Ve) !== "break"; Ve--);
                    s.placement !== xe && (s.modifiersData[h]._skip = !0, s.placement = xe, s.reset = !0)
                }
            },
            requiresIfExists: ["offset"],
            data: {
                _skip: !1
            }
        };

        function Bf(f, s, l) {
            return l === void 0 && (l = {
                x: 0,
                y: 0
            }), {
                top: f.top - s.height - l.y,
                right: f.right - s.width + l.x,
                bottom: f.bottom - s.height + l.y,
                left: f.left - s.width - l.x
            }
        }

        function Mf(f) {
            return [ot, Ct, kt, st].some(function(s) {
                return f[s] >= 0
            })
        }
        const Ff = {
                name: "hide",
                enabled: !0,
                phase: "main",
                requiresIfExists: ["preventOverflow"],
                fn: function(f) {
                    var s = f.state,
                        l = f.name,
                        h = s.rects.reference,
                        C = s.rects.popper,
                        b = s.modifiersData.preventOverflow,
                        L = ri(s, {
                            elementContext: "reference"
                        }),
                        D = ri(s, {
                            altBoundary: !0
                        }),
                        M = Bf(L, h),
                        z = Bf(D, C, b),
                        W = Mf(M),
                        $ = Mf(z);
                    s.modifiersData[l] = {
                        referenceClippingOffsets: M,
                        popperEscapeOffsets: z,
                        isReferenceHidden: W,
                        hasPopperEscaped: $
                    }, s.attributes.popper = Object.assign({}, s.attributes.popper, {
                        "data-popper-reference-hidden": W,
                        "data-popper-escaped": $
                    })
                }
            },
            $f = {
                name: "offset",
                enabled: !0,
                phase: "main",
                requires: ["popperOffsets"],
                fn: function(f) {
                    var s = f.state,
                        l = f.options,
                        h = f.name,
                        C = l.offset,
                        b = C === void 0 ? [0, 0] : C,
                        L = Pl.reduce(function(W, $) {
                            return W[$] = function(te, Y, G) {
                                var q = cn(te),
                                    X = [st, ot].indexOf(q) >= 0 ? -1 : 1,
                                    ve = typeof G == "function" ? G(Object.assign({}, Y, {
                                        placement: te
                                    })) : G,
                                    Ce = ve[0],
                                    se = ve[1];
                                return Ce = Ce || 0, se = (se || 0) * X, [st, Ct].indexOf(q) >= 0 ? {
                                    x: se,
                                    y: Ce
                                } : {
                                    x: Ce,
                                    y: se
                                }
                            }($, s.rects, b), W
                        }, {}),
                        D = L[s.placement],
                        M = D.x,
                        z = D.y;
                    s.modifiersData.popperOffsets != null && (s.modifiersData.popperOffsets.x += M, s.modifiersData.popperOffsets.y += z), s.modifiersData[h] = L
                }
            },
            Ul = {
                name: "popperOffsets",
                enabled: !0,
                phase: "read",
                fn: function(f) {
                    var s = f.state,
                        l = f.name;
                    s.modifiersData[l] = If({
                        reference: s.rects.reference,
                        element: s.rects.popper,
                        placement: s.placement
                    })
                },
                data: {}
            },
            zf = {
                name: "preventOverflow",
                enabled: !0,
                phase: "main",
                fn: function(f) {
                    var s = f.state,
                        l = f.options,
                        h = f.name,
                        C = l.mainAxis,
                        b = C === void 0 || C,
                        L = l.altAxis,
                        D = L !== void 0 && L,
                        M = l.boundary,
                        z = l.rootBoundary,
                        W = l.altBoundary,
                        $ = l.padding,
                        te = l.tether,
                        Y = te === void 0 || te,
                        G = l.tetherOffset,
                        q = G === void 0 ? 0 : G,
                        X = ri(s, {
                            boundary: M,
                            rootBoundary: z,
                            padding: $,
                            altBoundary: W
                        }),
                        ve = cn(s.placement),
                        Ce = ni(s.placement),
                        se = !Ce,
                        pe = Bl(ve),
                        ne = pe === "x" ? "y" : "x",
                        ue = s.modifiersData.popperOffsets,
                        me = s.rects.reference,
                        xe = s.rects.popper,
                        ge = typeof q == "function" ? q(Object.assign({}, s.rects, {
                            placement: s.placement
                        })) : q,
                        Ie = typeof ge == "number" ? {
                            mainAxis: ge,
                            altAxis: ge
                        } : Object.assign({
                            mainAxis: 0,
                            altAxis: 0
                        }, ge),
                        Et = s.modifiersData.offset ? s.modifiersData.offset[s.placement] : null,
                        Jt = {
                            x: 0,
                            y: 0
                        };
                    if (ue) {
                        if (b) {
                            var at, Mt = pe === "y" ? ot : st,
                                Ft = pe === "y" ? kt : Ct,
                                Oe = pe === "y" ? "height" : "width",
                                dn = ue[pe],
                                fn = dn + X[Mt],
                                si = dn - X[Ft],
                                Ve = Y ? -xe[Oe] / 2 : 0,
                                we = Ce === fr ? me[Oe] : xe[Oe],
                                lt = Ce === fr ? -xe[Oe] : -me[Oe],
                                $t = s.elements.arrow,
                                $n = Y && $t ? Dl($t) : {
                                    width: 0,
                                    height: 0
                                },
                                Es = s.modifiersData["arrow#persistent"] ? s.modifiersData["arrow#persistent"].padding : {
                                    top: 0,
                                    right: 0,
                                    bottom: 0,
                                    left: 0
                                },
                                Np = Es[Mt],
                                jp = Es[Ft],
                                bs = eo(0, me[Oe], $n[Oe]),
                                dv = se ? me[Oe] / 2 - Ve - bs - Np - Ie.mainAxis : we - bs - Np - Ie.mainAxis,
                                fv = se ? -me[Oe] / 2 + Ve + bs + jp + Ie.mainAxis : lt + bs + jp + Ie.mainAxis,
                                ru = s.elements.arrow && Xi(s.elements.arrow),
                                pv = ru ? pe === "y" ? ru.clientTop || 0 : ru.clientLeft || 0 : 0,
                                Tp = (at = Et == null ? void 0 : Et[pe]) != null ? at : 0,
                                hv = dn + fv - Tp,
                                Lp = eo(Y ? ps(fn, dn + dv - Tp - pv) : fn, dn, Y ? hr(si, hv) : si);
                            ue[pe] = Lp, Jt[pe] = Lp - dn
                        }
                        if (D) {
                            var Ap, mv = pe === "x" ? ot : st,
                                gv = pe === "x" ? kt : Ct,
                                kr = ue[ne],
                                Ns = ne === "y" ? "height" : "width",
                                Pp = kr + X[mv],
                                Op = kr - X[gv],
                                iu = [ot, st].indexOf(ve) !== -1,
                                Rp = (Ap = Et == null ? void 0 : Et[ne]) != null ? Ap : 0,
                                Ip = iu ? Pp : kr - me[Ns] - xe[Ns] - Rp + Ie.altAxis,
                                Dp = iu ? kr + me[Ns] + xe[Ns] - Rp - Ie.altAxis : Op,
                                Bp = Y && iu ? function(yv, vv, ou) {
                                    var Mp = eo(yv, vv, ou);
                                    return Mp > ou ? ou : Mp
                                }(Ip, kr, Dp) : eo(Y ? Ip : Pp, kr, Y ? Dp : Op);
                            ue[ne] = Bp, Jt[ne] = Bp - kr
                        }
                        s.modifiersData[h] = Jt
                    }
                },
                requiresIfExists: ["offset"]
            };

        function B1(f, s, l) {
            l === void 0 && (l = !1);
            var h, C, b = Dt(s),
                L = Dt(s) && function($) {
                    var te = $.getBoundingClientRect(),
                        Y = ei(te.width) / $.offsetWidth || 1,
                        G = ei(te.height) / $.offsetHeight || 1;
                    return Y !== 1 || G !== 1
                }(s),
                D = Mn(s),
                M = ti(f, L, l),
                z = {
                    scrollLeft: 0,
                    scrollTop: 0
                },
                W = {
                    x: 0,
                    y: 0
                };
            return (b || !b && !l) && ((un(s) !== "body" || Hl(D)) && (z = (h = s) !== St(h) && Dt(h) ? {
                scrollLeft: (C = h).scrollLeft,
                scrollTop: C.scrollTop
            } : $l(h)), Dt(s) ? ((W = ti(s, !0)).x += s.clientLeft, W.y += s.clientTop) : D && (W.x = zl(D))), {
                x: M.left + z.scrollLeft - W.x,
                y: M.top + z.scrollTop - W.y,
                width: M.width,
                height: M.height
            }
        }

        function M1(f) {
            var s = new Map,
                l = new Set,
                h = [];

            function C(b) {
                l.add(b.name), [].concat(b.requires || [], b.requiresIfExists || []).forEach(function(L) {
                    if (!l.has(L)) {
                        var D = s.get(L);
                        D && C(D)
                    }
                }), h.push(b)
            }
            return f.forEach(function(b) {
                s.set(b.name, b)
            }), f.forEach(function(b) {
                l.has(b.name) || C(b)
            }), h
        }
        var Hf = {
            placement: "bottom",
            modifiers: [],
            strategy: "absolute"
        };

        function Wf() {
            for (var f = arguments.length, s = new Array(f), l = 0; l < f; l++) s[l] = arguments[l];
            return !s.some(function(h) {
                return !(h && typeof h.getBoundingClientRect == "function")
            })
        }

        function ys(f) {
            f === void 0 && (f = {});
            var s = f,
                l = s.defaultModifiers,
                h = l === void 0 ? [] : l,
                C = s.defaultOptions,
                b = C === void 0 ? Hf : C;
            return function(L, D, M) {
                M === void 0 && (M = b);
                var z, W, $ = {
                        placement: "bottom",
                        orderedModifiers: [],
                        options: Object.assign({}, Hf, b),
                        modifiersData: {},
                        elements: {
                            reference: L,
                            popper: D
                        },
                        attributes: {},
                        styles: {}
                    },
                    te = [],
                    Y = !1,
                    G = {
                        state: $,
                        setOptions: function(X) {
                            var ve = typeof X == "function" ? X($.options) : X;
                            q(), $.options = Object.assign({}, b, $.options, ve), $.scrollParents = {
                                reference: pr(L) ? to(L) : L.contextElement ? to(L.contextElement) : [],
                                popper: to(D)
                            };
                            var Ce, se, pe = function(ne) {
                                var ue = M1(ne);
                                return Sf.reduce(function(me, xe) {
                                    return me.concat(ue.filter(function(ge) {
                                        return ge.phase === xe
                                    }))
                                }, [])
                            }((Ce = [].concat(h, $.options.modifiers), se = Ce.reduce(function(ne, ue) {
                                var me = ne[ue.name];
                                return ne[ue.name] = me ? Object.assign({}, me, ue, {
                                    options: Object.assign({}, me.options, ue.options),
                                    data: Object.assign({}, me.data, ue.data)
                                }) : ue, ne
                            }, {}), Object.keys(se).map(function(ne) {
                                return se[ne]
                            })));
                            return $.orderedModifiers = pe.filter(function(ne) {
                                return ne.enabled
                            }), $.orderedModifiers.forEach(function(ne) {
                                var ue = ne.name,
                                    me = ne.options,
                                    xe = me === void 0 ? {} : me,
                                    ge = ne.effect;
                                if (typeof ge == "function") {
                                    var Ie = ge({
                                        state: $,
                                        name: ue,
                                        instance: G,
                                        options: xe
                                    });
                                    te.push(Ie || function() {})
                                }
                            }), G.update()
                        },
                        forceUpdate: function() {
                            if (!Y) {
                                var X = $.elements,
                                    ve = X.reference,
                                    Ce = X.popper;
                                if (Wf(ve, Ce)) {
                                    $.rects = {
                                        reference: B1(ve, Xi(Ce), $.options.strategy === "fixed"),
                                        popper: Dl(Ce)
                                    }, $.reset = !1, $.placement = $.options.placement, $.orderedModifiers.forEach(function(ge) {
                                        return $.modifiersData[ge.name] = Object.assign({}, ge.data)
                                    });
                                    for (var se = 0; se < $.orderedModifiers.length; se++)
                                        if ($.reset !== !0) {
                                            var pe = $.orderedModifiers[se],
                                                ne = pe.fn,
                                                ue = pe.options,
                                                me = ue === void 0 ? {} : ue,
                                                xe = pe.name;
                                            typeof ne == "function" && ($ = ne({
                                                state: $,
                                                options: me,
                                                name: xe,
                                                instance: G
                                            }) || $)
                                        } else $.reset = !1, se = -1
                                }
                            }
                        },
                        update: (z = function() {
                            return new Promise(function(X) {
                                G.forceUpdate(), X($)
                            })
                        }, function() {
                            return W || (W = new Promise(function(X) {
                                Promise.resolve().then(function() {
                                    W = void 0, X(z())
                                })
                            })), W
                        }),
                        destroy: function() {
                            q(), Y = !0
                        }
                    };
                if (!Wf(L, D)) return G;

                function q() {
                    te.forEach(function(X) {
                        return X()
                    }), te = []
                }
                return G.setOptions(M).then(function(X) {
                    !Y && M.onFirstUpdate && M.onFirstUpdate(X)
                }), G
            }
        }
        var F1 = ys(),
            $1 = ys({
                defaultModifiers: [Fl, Ul, Ml, Rl]
            }),
            Vl = ys({
                defaultModifiers: [Fl, Ul, Ml, Rl, $f, Df, zf, Lf, Ff]
            });
        const Uf = Object.freeze(Object.defineProperty({
                __proto__: null,
                afterMain: wf,
                afterRead: yf,
                afterWrite: Cf,
                applyStyles: Rl,
                arrow: Lf,
                auto: fs,
                basePlacements: qr,
                beforeMain: vf,
                beforeRead: mf,
                beforeWrite: _f,
                bottom: kt,
                clippingParents: pf,
                computeStyles: Ml,
                createPopper: Vl,
                createPopperBase: F1,
                createPopperLite: $1,
                detectOverflow: ri,
                end: Gr,
                eventListeners: Fl,
                flip: Df,
                hide: Ff,
                left: st,
                main: xf,
                modifierPhases: Sf,
                offset: $f,
                placements: Pl,
                popper: Xr,
                popperGenerator: ys,
                popperOffsets: Ul,
                preventOverflow: zf,
                read: gf,
                reference: hf,
                right: Ct,
                start: fr,
                top: ot,
                variationPlacements: Al,
                viewport: Ll,
                write: kf
            }, Symbol.toStringTag, {
                value: "Module"
            })),
            Vf = "dropdown",
            mr = ".bs.dropdown",
            Kl = ".data-api",
            z1 = "ArrowUp",
            Kf = "ArrowDown",
            H1 = `hide${mr}`,
            W1 = `hidden${mr}`,
            U1 = `show${mr}`,
            V1 = `shown${mr}`,
            Qf = `click${mr}${Kl}`,
            Zf = `keydown${mr}${Kl}`,
            K1 = `keyup${mr}${Kl}`,
            ii = "show",
            gr = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
            Q1 = `${gr}.${ii}`,
            vs = ".dropdown-menu",
            Z1 = _() ? "top-end" : "top-start",
            Y1 = _() ? "top-start" : "top-end",
            J1 = _() ? "bottom-end" : "bottom-start",
            q1 = _() ? "bottom-start" : "bottom-end",
            G1 = _() ? "left-start" : "right-start",
            X1 = _() ? "right-start" : "left-start",
            ey = {
                autoClose: !0,
                boundary: "clippingParents",
                display: "dynamic",
                offset: [0, 2],
                popperConfig: null,
                reference: "toggle"
            },
            ty = {
                autoClose: "(boolean|string)",
                boundary: "(string|element)",
                display: "string",
                offset: "(array|string|function)",
                popperConfig: "(null|object|function)",
                reference: "(string|element|object)"
            };
        class Yt extends le {
            constructor(s, l) {
                super(s, l), this._popper = null, this._parent = this._element.parentNode, this._menu = F.next(this._element, vs)[0] || F.prev(this._element, vs)[0] || F.findOne(vs, this._parent), this._inNavbar = this._detectNavbar()
            }
            static get Default() {
                return ey
            }
            static get DefaultType() {
                return ty
            }
            static get NAME() {
                return Vf
            }
            toggle() {
                return this._isShown() ? this.hide() : this.show()
            }
            show() {
                if (c(this._element) || this._isShown()) return;
                const s = {
                    relatedTarget: this._element
                };
                if (!E.trigger(this._element, U1, s).defaultPrevented) {
                    if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav"))
                        for (const l of [].concat(...document.body.children)) E.on(l, "mouseover", m);
                    this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(ii), this._element.classList.add(ii), E.trigger(this._element, V1, s)
                }
            }
            hide() {
                if (c(this._element) || !this._isShown()) return;
                const s = {
                    relatedTarget: this._element
                };
                this._completeHide(s)
            }
            dispose() {
                this._popper && this._popper.destroy(), super.dispose()
            }
            update() {
                this._inNavbar = this._detectNavbar(), this._popper && this._popper.update()
            }
            _completeHide(s) {
                if (!E.trigger(this._element, H1, s).defaultPrevented) {
                    if ("ontouchstart" in document.documentElement)
                        for (const l of [].concat(...document.body.children)) E.off(l, "mouseover", m);
                    this._popper && this._popper.destroy(), this._menu.classList.remove(ii), this._element.classList.remove(ii), this._element.setAttribute("aria-expanded", "false"), J.removeDataAttribute(this._menu, "popper"), E.trigger(this._element, W1, s)
                }
            }
            _getConfig(s) {
                if (typeof(s = super._getConfig(s)).reference == "object" && !o(s.reference) && typeof s.reference.getBoundingClientRect != "function") throw new TypeError(`${Vf.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
                return s
            }
            _createPopper() {
                if (Uf === void 0) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                let s = this._element;
                this._config.reference === "parent" ? s = this._parent : o(this._config.reference) ? s = a(this._config.reference) : typeof this._config.reference == "object" && (s = this._config.reference);
                const l = this._getPopperConfig();
                this._popper = Vl(s, this._menu, l)
            }
            _isShown() {
                return this._menu.classList.contains(ii)
            }
            _getPlacement() {
                const s = this._parent;
                if (s.classList.contains("dropend")) return G1;
                if (s.classList.contains("dropstart")) return X1;
                if (s.classList.contains("dropup-center")) return "top";
                if (s.classList.contains("dropdown-center")) return "bottom";
                const l = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
                return s.classList.contains("dropup") ? l ? Y1 : Z1 : l ? q1 : J1
            }
            _detectNavbar() {
                return this._element.closest(".navbar") !== null
            }
            _getOffset() {
                const {
                    offset: s
                } = this._config;
                return typeof s == "string" ? s.split(",").map(l => Number.parseInt(l, 10)) : typeof s == "function" ? l => s(l, this._element) : s
            }
            _getPopperConfig() {
                const s = {
                    placement: this._getPlacement(),
                    modifiers: [{
                        name: "preventOverflow",
                        options: {
                            boundary: this._config.boundary
                        }
                    }, {
                        name: "offset",
                        options: {
                            offset: this._getOffset()
                        }
                    }]
                };
                return (this._inNavbar || this._config.display === "static") && (J.setDataAttribute(this._menu, "popper", "static"), s.modifiers = [{
                    name: "applyStyles",
                    enabled: !1
                }]), {
                    ...s,
                    ...S(this._config.popperConfig, [s])
                }
            }
            _selectMenuItem({
                key: s,
                target: l
            }) {
                const h = F.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(C => u(C));
                h.length && y(h, l, s === Kf, !h.includes(l)).focus()
            }
            static jQueryInterface(s) {
                return this.each(function() {
                    const l = Yt.getOrCreateInstance(this, s);
                    if (typeof s == "string") {
                        if (l[s] === void 0) throw new TypeError(`No method named "${s}"`);
                        l[s]()
                    }
                })
            }
            static clearMenus(s) {
                if (s.button === 2 || s.type === "keyup" && s.key !== "Tab") return;
                const l = F.find(Q1);
                for (const h of l) {
                    const C = Yt.getInstance(h);
                    if (!C || C._config.autoClose === !1) continue;
                    const b = s.composedPath(),
                        L = b.includes(C._menu);
                    if (b.includes(C._element) || C._config.autoClose === "inside" && !L || C._config.autoClose === "outside" && L || C._menu.contains(s.target) && (s.type === "keyup" && s.key === "Tab" || /input|select|option|textarea|form/i.test(s.target.tagName))) continue;
                    const D = {
                        relatedTarget: C._element
                    };
                    s.type === "click" && (D.clickEvent = s), C._completeHide(D)
                }
            }
            static dataApiKeydownHandler(s) {
                const l = /input|textarea/i.test(s.target.tagName),
                    h = s.key === "Escape",
                    C = [z1, Kf].includes(s.key);
                if (!C && !h || l && !h) return;
                s.preventDefault();
                const b = this.matches(gr) ? this : F.prev(this, gr)[0] || F.next(this, gr)[0] || F.findOne(gr, s.delegateTarget.parentNode),
                    L = Yt.getOrCreateInstance(b);
                if (C) return s.stopPropagation(), L.show(), void L._selectMenuItem(s);
                L._isShown() && (s.stopPropagation(), L.hide(), b.focus())
            }
        }
        E.on(document, Zf, gr, Yt.dataApiKeydownHandler), E.on(document, Zf, vs, Yt.dataApiKeydownHandler), E.on(document, Qf, Yt.clearMenus), E.on(document, K1, Yt.clearMenus), E.on(document, Qf, gr, function(f) {
            f.preventDefault(), Yt.getOrCreateInstance(this).toggle()
        }), k(Yt);
        const Yf = "backdrop",
            Jf = "show",
            qf = `mousedown.bs.${Yf}`,
            ny = {
                className: "modal-backdrop",
                clickCallback: null,
                isAnimated: !1,
                isVisible: !0,
                rootElement: "body"
            },
            ry = {
                className: "string",
                clickCallback: "(function|null)",
                isAnimated: "boolean",
                isVisible: "boolean",
                rootElement: "(element|string)"
            };
        class Gf extends ke {
            constructor(s) {
                super(), this._config = this._getConfig(s), this._isAppended = !1, this._element = null
            }
            static get Default() {
                return ny
            }
            static get DefaultType() {
                return ry
            }
            static get NAME() {
                return Yf
            }
            show(s) {
                if (!this._config.isVisible) return void S(s);
                this._append();
                const l = this._getElement();
                this._config.isAnimated && g(l), l.classList.add(Jf), this._emulateAnimation(() => {
                    S(s)
                })
            }
            hide(s) {
                this._config.isVisible ? (this._getElement().classList.remove(Jf), this._emulateAnimation(() => {
                    this.dispose(), S(s)
                })) : S(s)
            }
            dispose() {
                this._isAppended && (E.off(this._element, qf), this._element.remove(), this._isAppended = !1)
            }
            _getElement() {
                if (!this._element) {
                    const s = document.createElement("div");
                    s.className = this._config.className, this._config.isAnimated && s.classList.add("fade"), this._element = s
                }
                return this._element
            }
            _configAfterMerge(s) {
                return s.rootElement = a(s.rootElement), s
            }
            _append() {
                if (this._isAppended) return;
                const s = this._getElement();
                this._config.rootElement.append(s), E.on(s, qf, () => {
                    S(this._config.clickCallback)
                }), this._isAppended = !0
            }
            _emulateAnimation(s) {
                x(s, this._getElement(), this._config.isAnimated)
            }
        }
        const xs = ".bs.focustrap",
            iy = `focusin${xs}`,
            oy = `keydown.tab${xs}`,
            Xf = "backward",
            sy = {
                autofocus: !0,
                trapElement: null
            },
            ay = {
                autofocus: "boolean",
                trapElement: "element"
            };
        class ep extends ke {
            constructor(s) {
                super(), this._config = this._getConfig(s), this._isActive = !1, this._lastTabNavDirection = null
            }
            static get Default() {
                return sy
            }
            static get DefaultType() {
                return ay
            }
            static get NAME() {
                return "focustrap"
            }
            activate() {
                this._isActive || (this._config.autofocus && this._config.trapElement.focus(), E.off(document, xs), E.on(document, iy, s => this._handleFocusin(s)), E.on(document, oy, s => this._handleKeydown(s)), this._isActive = !0)
            }
            deactivate() {
                this._isActive && (this._isActive = !1, E.off(document, xs))
            }
            _handleFocusin(s) {
                const {
                    trapElement: l
                } = this._config;
                if (s.target === document || s.target === l || l.contains(s.target)) return;
                const h = F.focusableChildren(l);
                h.length === 0 ? l.focus() : this._lastTabNavDirection === Xf ? h[h.length - 1].focus() : h[0].focus()
            }
            _handleKeydown(s) {
                s.key === "Tab" && (this._lastTabNavDirection = s.shiftKey ? Xf : "forward")
            }
        }
        const tp = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            np = ".sticky-top",
            ws = "padding-right",
            rp = "margin-right";
        class Ql {
            constructor() {
                this._element = document.body
            }
            getWidth() {
                const s = document.documentElement.clientWidth;
                return Math.abs(window.innerWidth - s)
            }
            hide() {
                const s = this.getWidth();
                this._disableOverFlow(), this._setElementAttributes(this._element, ws, l => l + s), this._setElementAttributes(tp, ws, l => l + s), this._setElementAttributes(np, rp, l => l - s)
            }
            reset() {
                this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, ws), this._resetElementAttributes(tp, ws), this._resetElementAttributes(np, rp)
            }
            isOverflowing() {
                return this.getWidth() > 0
            }
            _disableOverFlow() {
                this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden"
            }
            _setElementAttributes(s, l, h) {
                const C = this.getWidth();
                this._applyManipulationCallback(s, b => {
                    if (b !== this._element && window.innerWidth > b.clientWidth + C) return;
                    this._saveInitialAttribute(b, l);
                    const L = window.getComputedStyle(b).getPropertyValue(l);
                    b.style.setProperty(l, `${h(Number.parseFloat(L))}px`)
                })
            }
            _saveInitialAttribute(s, l) {
                const h = s.style.getPropertyValue(l);
                h && J.setDataAttribute(s, l, h)
            }
            _resetElementAttributes(s, l) {
                this._applyManipulationCallback(s, h => {
                    const C = J.getDataAttribute(h, l);
                    C !== null ? (J.removeDataAttribute(h, l), h.style.setProperty(l, C)) : h.style.removeProperty(l)
                })
            }
            _applyManipulationCallback(s, l) {
                if (o(s)) l(s);
                else
                    for (const h of F.find(s, this._element)) l(h)
            }
        }
        const Bt = ".bs.modal",
            ly = `hide${Bt}`,
            uy = `hidePrevented${Bt}`,
            ip = `hidden${Bt}`,
            op = `show${Bt}`,
            cy = `shown${Bt}`,
            dy = `resize${Bt}`,
            fy = `click.dismiss${Bt}`,
            py = `mousedown.dismiss${Bt}`,
            hy = `keydown.dismiss${Bt}`,
            my = `click${Bt}.data-api`,
            sp = "modal-open",
            ap = "show",
            Zl = "modal-static",
            gy = {
                backdrop: !0,
                focus: !0,
                keyboard: !0
            },
            yy = {
                backdrop: "(boolean|string)",
                focus: "boolean",
                keyboard: "boolean"
            };
        class yr extends le {
            constructor(s, l) {
                super(s, l), this._dialog = F.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new Ql, this._addEventListeners()
            }
            static get Default() {
                return gy
            }
            static get DefaultType() {
                return yy
            }
            static get NAME() {
                return "modal"
            }
            toggle(s) {
                return this._isShown ? this.hide() : this.show(s)
            }
            show(s) {
                this._isShown || this._isTransitioning || E.trigger(this._element, op, {
                    relatedTarget: s
                }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(sp), this._adjustDialog(), this._backdrop.show(() => this._showElement(s)))
            }
            hide() {
                this._isShown && !this._isTransitioning && (E.trigger(this._element, ly).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(ap), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated())))
            }
            dispose() {
                E.off(window, Bt), E.off(this._dialog, Bt), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
            }
            handleUpdate() {
                this._adjustDialog()
            }
            _initializeBackDrop() {
                return new Gf({
                    isVisible: !!this._config.backdrop,
                    isAnimated: this._isAnimated()
                })
            }
            _initializeFocusTrap() {
                return new ep({
                    trapElement: this._element
                })
            }
            _showElement(s) {
                document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
                const l = F.findOne(".modal-body", this._dialog);
                l && (l.scrollTop = 0), g(this._element), this._element.classList.add(ap), this._queueCallback(() => {
                    this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, E.trigger(this._element, cy, {
                        relatedTarget: s
                    })
                }, this._dialog, this._isAnimated())
            }
            _addEventListeners() {
                E.on(this._element, hy, s => {
                    s.key === "Escape" && (this._config.keyboard ? this.hide() : this._triggerBackdropTransition())
                }), E.on(window, dy, () => {
                    this._isShown && !this._isTransitioning && this._adjustDialog()
                }), E.on(this._element, py, s => {
                    E.one(this._element, fy, l => {
                        this._element === s.target && this._element === l.target && (this._config.backdrop !== "static" ? this._config.backdrop && this.hide() : this._triggerBackdropTransition())
                    })
                })
            }
            _hideModal() {
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(() => {
                    document.body.classList.remove(sp), this._resetAdjustments(), this._scrollBar.reset(), E.trigger(this._element, ip)
                })
            }
            _isAnimated() {
                return this._element.classList.contains("fade")
            }
            _triggerBackdropTransition() {
                if (E.trigger(this._element, uy).defaultPrevented) return;
                const s = this._element.scrollHeight > document.documentElement.clientHeight,
                    l = this._element.style.overflowY;
                l === "hidden" || this._element.classList.contains(Zl) || (s || (this._element.style.overflowY = "hidden"), this._element.classList.add(Zl), this._queueCallback(() => {
                    this._element.classList.remove(Zl), this._queueCallback(() => {
                        this._element.style.overflowY = l
                    }, this._dialog)
                }, this._dialog), this._element.focus())
            }
            _adjustDialog() {
                const s = this._element.scrollHeight > document.documentElement.clientHeight,
                    l = this._scrollBar.getWidth(),
                    h = l > 0;
                if (h && !s) {
                    const C = _() ? "paddingLeft" : "paddingRight";
                    this._element.style[C] = `${l}px`
                }
                if (!h && s) {
                    const C = _() ? "paddingRight" : "paddingLeft";
                    this._element.style[C] = `${l}px`
                }
            }
            _resetAdjustments() {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }
            static jQueryInterface(s, l) {
                return this.each(function() {
                    const h = yr.getOrCreateInstance(this, s);
                    if (typeof s == "string") {
                        if (h[s] === void 0) throw new TypeError(`No method named "${s}"`);
                        h[s](l)
                    }
                })
            }
        }
        E.on(document, my, '[data-bs-toggle="modal"]', function(f) {
            const s = F.getElementFromSelector(this);
            ["A", "AREA"].includes(this.tagName) && f.preventDefault(), E.one(s, op, h => {
                h.defaultPrevented || E.one(s, ip, () => {
                    u(this) && this.focus()
                })
            });
            const l = F.findOne(".modal.show");
            l && yr.getInstance(l).hide(), yr.getOrCreateInstance(s).toggle(this)
        }), Fe(yr), k(yr);
        const Cn = ".bs.offcanvas",
            lp = ".data-api",
            vy = `load${Cn}${lp}`,
            up = "show",
            cp = "showing",
            dp = "hiding",
            fp = ".offcanvas.show",
            xy = `show${Cn}`,
            wy = `shown${Cn}`,
            _y = `hide${Cn}`,
            pp = `hidePrevented${Cn}`,
            hp = `hidden${Cn}`,
            ky = `resize${Cn}`,
            Cy = `click${Cn}${lp}`,
            Sy = `keydown.dismiss${Cn}`,
            Ey = {
                backdrop: !0,
                keyboard: !0,
                scroll: !1
            },
            by = {
                backdrop: "(boolean|string)",
                keyboard: "boolean",
                scroll: "boolean"
            };
        class Sn extends le {
            constructor(s, l) {
                super(s, l), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners()
            }
            static get Default() {
                return Ey
            }
            static get DefaultType() {
                return by
            }
            static get NAME() {
                return "offcanvas"
            }
            toggle(s) {
                return this._isShown ? this.hide() : this.show(s)
            }
            show(s) {
                this._isShown || E.trigger(this._element, xy, {
                    relatedTarget: s
                }).defaultPrevented || (this._isShown = !0, this._backdrop.show(), this._config.scroll || new Ql().hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(cp), this._queueCallback(() => {
                    this._config.scroll && !this._config.backdrop || this._focustrap.activate(), this._element.classList.add(up), this._element.classList.remove(cp), E.trigger(this._element, wy, {
                        relatedTarget: s
                    })
                }, this._element, !0))
            }
            hide() {
                this._isShown && (E.trigger(this._element, _y).defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(dp), this._backdrop.hide(), this._queueCallback(() => {
                    this._element.classList.remove(up, dp), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new Ql().reset(), E.trigger(this._element, hp)
                }, this._element, !0)))
            }
            dispose() {
                this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
            }
            _initializeBackDrop() {
                const s = !!this._config.backdrop;
                return new Gf({
                    className: "offcanvas-backdrop",
                    isVisible: s,
                    isAnimated: !0,
                    rootElement: this._element.parentNode,
                    clickCallback: s ? () => {
                        this._config.backdrop !== "static" ? this.hide() : E.trigger(this._element, pp)
                    } : null
                })
            }
            _initializeFocusTrap() {
                return new ep({
                    trapElement: this._element
                })
            }
            _addEventListeners() {
                E.on(this._element, Sy, s => {
                    s.key === "Escape" && (this._config.keyboard ? this.hide() : E.trigger(this._element, pp))
                })
            }
            static jQueryInterface(s) {
                return this.each(function() {
                    const l = Sn.getOrCreateInstance(this, s);
                    if (typeof s == "string") {
                        if (l[s] === void 0 || s.startsWith("_") || s === "constructor") throw new TypeError(`No method named "${s}"`);
                        l[s](this)
                    }
                })
            }
        }
        E.on(document, Cy, '[data-bs-toggle="offcanvas"]', function(f) {
            const s = F.getElementFromSelector(this);
            if (["A", "AREA"].includes(this.tagName) && f.preventDefault(), c(this)) return;
            E.one(s, hp, () => {
                u(this) && this.focus()
            });
            const l = F.findOne(fp);
            l && l !== s && Sn.getInstance(l).hide(), Sn.getOrCreateInstance(s).toggle(this)
        }), E.on(window, vy, () => {
            for (const f of F.find(fp)) Sn.getOrCreateInstance(f).show()
        }), E.on(window, ky, () => {
            for (const f of F.find("[aria-modal][class*=show][class*=offcanvas-]")) getComputedStyle(f).position !== "fixed" && Sn.getOrCreateInstance(f).hide()
        }), Fe(Sn), k(Sn);
        const mp = {
                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                dd: [],
                div: [],
                dl: [],
                dt: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "srcset", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: []
            },
            Ny = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
            jy = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
            Ty = (f, s) => {
                const l = f.nodeName.toLowerCase();
                return s.includes(l) ? !Ny.has(l) || !!jy.test(f.nodeValue) : s.filter(h => h instanceof RegExp).some(h => h.test(l))
            },
            Ly = {
                allowList: mp,
                content: {},
                extraClass: "",
                html: !1,
                sanitize: !0,
                sanitizeFn: null,
                template: "<div></div>"
            },
            Ay = {
                allowList: "object",
                content: "object",
                extraClass: "(string|function)",
                html: "boolean",
                sanitize: "boolean",
                sanitizeFn: "(null|function)",
                template: "string"
            },
            Py = {
                entry: "(string|element|function|null)",
                selector: "(string|element)"
            };
        class Oy extends ke {
            constructor(s) {
                super(), this._config = this._getConfig(s)
            }
            static get Default() {
                return Ly
            }
            static get DefaultType() {
                return Ay
            }
            static get NAME() {
                return "TemplateFactory"
            }
            getContent() {
                return Object.values(this._config.content).map(s => this._resolvePossibleFunction(s)).filter(Boolean)
            }
            hasContent() {
                return this.getContent().length > 0
            }
            changeContent(s) {
                return this._checkContent(s), this._config.content = {
                    ...this._config.content,
                    ...s
                }, this
            }
            toHtml() {
                const s = document.createElement("div");
                s.innerHTML = this._maybeSanitize(this._config.template);
                for (const [C, b] of Object.entries(this._config.content)) this._setContent(s, b, C);
                const l = s.children[0],
                    h = this._resolvePossibleFunction(this._config.extraClass);
                return h && l.classList.add(...h.split(" ")), l
            }
            _typeCheckConfig(s) {
                super._typeCheckConfig(s), this._checkContent(s.content)
            }
            _checkContent(s) {
                for (const [l, h] of Object.entries(s)) super._typeCheckConfig({
                    selector: l,
                    entry: h
                }, Py)
            }
            _setContent(s, l, h) {
                const C = F.findOne(h, s);
                C && ((l = this._resolvePossibleFunction(l)) ? o(l) ? this._putElementInTemplate(a(l), C) : this._config.html ? C.innerHTML = this._maybeSanitize(l) : C.textContent = l : C.remove())
            }
            _maybeSanitize(s) {
                return this._config.sanitize ? function(l, h, C) {
                    if (!l.length) return l;
                    if (C && typeof C == "function") return C(l);
                    const b = new window.DOMParser().parseFromString(l, "text/html"),
                        L = [].concat(...b.body.querySelectorAll("*"));
                    for (const D of L) {
                        const M = D.nodeName.toLowerCase();
                        if (!Object.keys(h).includes(M)) {
                            D.remove();
                            continue
                        }
                        const z = [].concat(...D.attributes),
                            W = [].concat(h["*"] || [], h[M] || []);
                        for (const $ of z) Ty($, W) || D.removeAttribute($.nodeName)
                    }
                    return b.body.innerHTML
                }(s, this._config.allowList, this._config.sanitizeFn) : s
            }
            _resolvePossibleFunction(s) {
                return S(s, [this])
            }
            _putElementInTemplate(s, l) {
                if (this._config.html) return l.innerHTML = "", void l.append(s);
                l.textContent = s.textContent
            }
        }
        const Ry = new Set(["sanitize", "allowList", "sanitizeFn"]),
            Yl = "fade",
            _s = "show",
            gp = ".modal",
            yp = "hide.bs.modal",
            no = "hover",
            Jl = "focus",
            Iy = {
                AUTO: "auto",
                TOP: "top",
                RIGHT: _() ? "left" : "right",
                BOTTOM: "bottom",
                LEFT: _() ? "right" : "left"
            },
            Dy = {
                allowList: mp,
                animation: !0,
                boundary: "clippingParents",
                container: !1,
                customClass: "",
                delay: 0,
                fallbackPlacements: ["top", "right", "bottom", "left"],
                html: !1,
                offset: [0, 6],
                placement: "top",
                popperConfig: null,
                sanitize: !0,
                sanitizeFn: null,
                selector: !1,
                template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                title: "",
                trigger: "hover focus"
            },
            By = {
                allowList: "object",
                animation: "boolean",
                boundary: "(string|element)",
                container: "(string|element|boolean)",
                customClass: "(string|function)",
                delay: "(number|object)",
                fallbackPlacements: "array",
                html: "boolean",
                offset: "(array|string|function)",
                placement: "(string|function)",
                popperConfig: "(null|object|function)",
                sanitize: "boolean",
                sanitizeFn: "(null|function)",
                selector: "(string|boolean)",
                template: "string",
                title: "(string|element|function)",
                trigger: "string"
            };
        class vr extends le {
            constructor(s, l) {
                if (Uf === void 0) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
                super(s, l), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle()
            }
            static get Default() {
                return Dy
            }
            static get DefaultType() {
                return By
            }
            static get NAME() {
                return "tooltip"
            }
            enable() {
                this._isEnabled = !0
            }
            disable() {
                this._isEnabled = !1
            }
            toggleEnabled() {
                this._isEnabled = !this._isEnabled
            }
            toggle() {
                this._isEnabled && (this._activeTrigger.click = !this._activeTrigger.click, this._isShown() ? this._leave() : this._enter())
            }
            dispose() {
                clearTimeout(this._timeout), E.off(this._element.closest(gp), yp, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose()
            }
            show() {
                if (this._element.style.display === "none") throw new Error("Please use show on visible elements");
                if (!this._isWithContent() || !this._isEnabled) return;
                const s = E.trigger(this._element, this.constructor.eventName("show")),
                    l = (p(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
                if (s.defaultPrevented || !l) return;
                this._disposePopper();
                const h = this._getTipElement();
                this._element.setAttribute("aria-describedby", h.getAttribute("id"));
                const {
                    container: C
                } = this._config;
                if (this._element.ownerDocument.documentElement.contains(this.tip) || (C.append(h), E.trigger(this._element, this.constructor.eventName("inserted"))), this._popper = this._createPopper(h), h.classList.add(_s), "ontouchstart" in document.documentElement)
                    for (const b of [].concat(...document.body.children)) E.on(b, "mouseover", m);
                this._queueCallback(() => {
                    E.trigger(this._element, this.constructor.eventName("shown")), this._isHovered === !1 && this._leave(), this._isHovered = !1
                }, this.tip, this._isAnimated())
            }
            hide() {
                if (this._isShown() && !E.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) {
                    if (this._getTipElement().classList.remove(_s), "ontouchstart" in document.documentElement)
                        for (const s of [].concat(...document.body.children)) E.off(s, "mouseover", m);
                    this._activeTrigger.click = !1, this._activeTrigger[Jl] = !1, this._activeTrigger[no] = !1, this._isHovered = null, this._queueCallback(() => {
                        this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), E.trigger(this._element, this.constructor.eventName("hidden")))
                    }, this.tip, this._isAnimated())
                }
            }
            update() {
                this._popper && this._popper.update()
            }
            _isWithContent() {
                return !!this._getTitle()
            }
            _getTipElement() {
                return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip
            }
            _createTipElement(s) {
                const l = this._getTemplateFactory(s).toHtml();
                if (!l) return null;
                l.classList.remove(Yl, _s), l.classList.add(`bs-${this.constructor.NAME}-auto`);
                const h = (C => {
                    do C += Math.floor(1e6 * Math.random()); while (document.getElementById(C));
                    return C
                })(this.constructor.NAME).toString();
                return l.setAttribute("id", h), this._isAnimated() && l.classList.add(Yl), l
            }
            setContent(s) {
                this._newContent = s, this._isShown() && (this._disposePopper(), this.show())
            }
            _getTemplateFactory(s) {
                return this._templateFactory ? this._templateFactory.changeContent(s) : this._templateFactory = new Oy({
                    ...this._config,
                    content: s,
                    extraClass: this._resolvePossibleFunction(this._config.customClass)
                }), this._templateFactory
            }
            _getContentForTemplate() {
                return {
                    ".tooltip-inner": this._getTitle()
                }
            }
            _getTitle() {
                return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title")
            }
            _initializeOnDelegatedTarget(s) {
                return this.constructor.getOrCreateInstance(s.delegateTarget, this._getDelegateConfig())
            }
            _isAnimated() {
                return this._config.animation || this.tip && this.tip.classList.contains(Yl)
            }
            _isShown() {
                return this.tip && this.tip.classList.contains(_s)
            }
            _createPopper(s) {
                const l = S(this._config.placement, [this, s, this._element]),
                    h = Iy[l.toUpperCase()];
                return Vl(this._element, s, this._getPopperConfig(h))
            }
            _getOffset() {
                const {
                    offset: s
                } = this._config;
                return typeof s == "string" ? s.split(",").map(l => Number.parseInt(l, 10)) : typeof s == "function" ? l => s(l, this._element) : s
            }
            _resolvePossibleFunction(s) {
                return S(s, [this._element])
            }
            _getPopperConfig(s) {
                const l = {
                    placement: s,
                    modifiers: [{
                        name: "flip",
                        options: {
                            fallbackPlacements: this._config.fallbackPlacements
                        }
                    }, {
                        name: "offset",
                        options: {
                            offset: this._getOffset()
                        }
                    }, {
                        name: "preventOverflow",
                        options: {
                            boundary: this._config.boundary
                        }
                    }, {
                        name: "arrow",
                        options: {
                            element: `.${this.constructor.NAME}-arrow`
                        }
                    }, {
                        name: "preSetPlacement",
                        enabled: !0,
                        phase: "beforeMain",
                        fn: h => {
                            this._getTipElement().setAttribute("data-popper-placement", h.state.placement)
                        }
                    }]
                };
                return {
                    ...l,
                    ...S(this._config.popperConfig, [l])
                }
            }
            _setListeners() {
                const s = this._config.trigger.split(" ");
                for (const l of s)
                    if (l === "click") E.on(this._element, this.constructor.eventName("click"), this._config.selector, h => {
                        this._initializeOnDelegatedTarget(h).toggle()
                    });
                    else if (l !== "manual") {
                    const h = l === no ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"),
                        C = l === no ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
                    E.on(this._element, h, this._config.selector, b => {
                        const L = this._initializeOnDelegatedTarget(b);
                        L._activeTrigger[b.type === "focusin" ? Jl : no] = !0, L._enter()
                    }), E.on(this._element, C, this._config.selector, b => {
                        const L = this._initializeOnDelegatedTarget(b);
                        L._activeTrigger[b.type === "focusout" ? Jl : no] = L._element.contains(b.relatedTarget), L._leave()
                    })
                }
                this._hideModalHandler = () => {
                    this._element && this.hide()
                }, E.on(this._element.closest(gp), yp, this._hideModalHandler)
            }
            _fixTitle() {
                const s = this._element.getAttribute("title");
                s && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", s), this._element.setAttribute("data-bs-original-title", s), this._element.removeAttribute("title"))
            }
            _enter() {
                this._isShown() || this._isHovered ? this._isHovered = !0 : (this._isHovered = !0, this._setTimeout(() => {
                    this._isHovered && this.show()
                }, this._config.delay.show))
            }
            _leave() {
                this._isWithActiveTrigger() || (this._isHovered = !1, this._setTimeout(() => {
                    this._isHovered || this.hide()
                }, this._config.delay.hide))
            }
            _setTimeout(s, l) {
                clearTimeout(this._timeout), this._timeout = setTimeout(s, l)
            }
            _isWithActiveTrigger() {
                return Object.values(this._activeTrigger).includes(!0)
            }
            _getConfig(s) {
                const l = J.getDataAttributes(this._element);
                for (const h of Object.keys(l)) Ry.has(h) && delete l[h];
                return s = {
                    ...l,
                    ...typeof s == "object" && s ? s : {}
                }, s = this._mergeConfigObj(s), s = this._configAfterMerge(s), this._typeCheckConfig(s), s
            }
            _configAfterMerge(s) {
                return s.container = s.container === !1 ? document.body : a(s.container), typeof s.delay == "number" && (s.delay = {
                    show: s.delay,
                    hide: s.delay
                }), typeof s.title == "number" && (s.title = s.title.toString()), typeof s.content == "number" && (s.content = s.content.toString()), s
            }
            _getDelegateConfig() {
                const s = {};
                for (const [l, h] of Object.entries(this._config)) this.constructor.Default[l] !== h && (s[l] = h);
                return s.selector = !1, s.trigger = "manual", s
            }
            _disposePopper() {
                this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null)
            }
            static jQueryInterface(s) {
                return this.each(function() {
                    const l = vr.getOrCreateInstance(this, s);
                    if (typeof s == "string") {
                        if (l[s] === void 0) throw new TypeError(`No method named "${s}"`);
                        l[s]()
                    }
                })
            }
        }
        k(vr);
        const My = {
                ...vr.Default,
                content: "",
                offset: [0, 8],
                placement: "right",
                template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
                trigger: "click"
            },
            Fy = {
                ...vr.DefaultType,
                content: "(null|string|element|function)"
            };
        class ks extends vr {
            static get Default() {
                return My
            }
            static get DefaultType() {
                return Fy
            }
            static get NAME() {
                return "popover"
            }
            _isWithContent() {
                return this._getTitle() || this._getContent()
            }
            _getContentForTemplate() {
                return {
                    ".popover-header": this._getTitle(),
                    ".popover-body": this._getContent()
                }
            }
            _getContent() {
                return this._resolvePossibleFunction(this._config.content)
            }
            static jQueryInterface(s) {
                return this.each(function() {
                    const l = ks.getOrCreateInstance(this, s);
                    if (typeof s == "string") {
                        if (l[s] === void 0) throw new TypeError(`No method named "${s}"`);
                        l[s]()
                    }
                })
            }
        }
        k(ks);
        const ql = ".bs.scrollspy",
            $y = `activate${ql}`,
            vp = `click${ql}`,
            zy = `load${ql}.data-api`,
            oi = "active",
            Gl = "[href]",
            xp = ".nav-link",
            Hy = `${xp}, .nav-item > ${xp}, .list-group-item`,
            Wy = {
                offset: null,
                rootMargin: "0px 0px -25%",
                smoothScroll: !1,
                target: null,
                threshold: [.1, .5, 1]
            },
            Uy = {
                offset: "(number|null)",
                rootMargin: "string",
                smoothScroll: "boolean",
                target: "element",
                threshold: "array"
            };
        class ro extends le {
            constructor(s, l) {
                super(s, l), this._targetLinks = new Map, this._observableSections = new Map, this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = {
                    visibleEntryTop: 0,
                    parentScrollTop: 0
                }, this.refresh()
            }
            static get Default() {
                return Wy
            }
            static get DefaultType() {
                return Uy
            }
            static get NAME() {
                return "scrollspy"
            }
            refresh() {
                this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
                for (const s of this._observableSections.values()) this._observer.observe(s)
            }
            dispose() {
                this._observer.disconnect(), super.dispose()
            }
            _configAfterMerge(s) {
                return s.target = a(s.target) || document.body, s.rootMargin = s.offset ? `${s.offset}px 0px -30%` : s.rootMargin, typeof s.threshold == "string" && (s.threshold = s.threshold.split(",").map(l => Number.parseFloat(l))), s
            }
            _maybeEnableSmoothScroll() {
                this._config.smoothScroll && (E.off(this._config.target, vp), E.on(this._config.target, vp, Gl, s => {
                    const l = this._observableSections.get(s.target.hash);
                    if (l) {
                        s.preventDefault();
                        const h = this._rootElement || window,
                            C = l.offsetTop - this._element.offsetTop;
                        if (h.scrollTo) return void h.scrollTo({
                            top: C,
                            behavior: "smooth"
                        });
                        h.scrollTop = C
                    }
                }))
            }
            _getNewObserver() {
                const s = {
                    root: this._rootElement,
                    threshold: this._config.threshold,
                    rootMargin: this._config.rootMargin
                };
                return new IntersectionObserver(l => this._observerCallback(l), s)
            }
            _observerCallback(s) {
                const l = L => this._targetLinks.get(`#${L.target.id}`),
                    h = L => {
                        this._previousScrollData.visibleEntryTop = L.target.offsetTop, this._process(l(L))
                    },
                    C = (this._rootElement || document.documentElement).scrollTop,
                    b = C >= this._previousScrollData.parentScrollTop;
                this._previousScrollData.parentScrollTop = C;
                for (const L of s) {
                    if (!L.isIntersecting) {
                        this._activeTarget = null, this._clearActiveClass(l(L));
                        continue
                    }
                    const D = L.target.offsetTop >= this._previousScrollData.visibleEntryTop;
                    if (b && D) {
                        if (h(L), !C) return
                    } else b || D || h(L)
                }
            }
            _initializeTargetsAndObservables() {
                this._targetLinks = new Map, this._observableSections = new Map;
                const s = F.find(Gl, this._config.target);
                for (const l of s) {
                    if (!l.hash || c(l)) continue;
                    const h = F.findOne(decodeURI(l.hash), this._element);
                    u(h) && (this._targetLinks.set(decodeURI(l.hash), l), this._observableSections.set(l.hash, h))
                }
            }
            _process(s) {
                this._activeTarget !== s && (this._clearActiveClass(this._config.target), this._activeTarget = s, s.classList.add(oi), this._activateParents(s), E.trigger(this._element, $y, {
                    relatedTarget: s
                }))
            }
            _activateParents(s) {
                if (s.classList.contains("dropdown-item")) F.findOne(".dropdown-toggle", s.closest(".dropdown")).classList.add(oi);
                else
                    for (const l of F.parents(s, ".nav, .list-group"))
                        for (const h of F.prev(l, Hy)) h.classList.add(oi)
            }
            _clearActiveClass(s) {
                s.classList.remove(oi);
                const l = F.find(`${Gl}.${oi}`, s);
                for (const h of l) h.classList.remove(oi)
            }
            static jQueryInterface(s) {
                return this.each(function() {
                    const l = ro.getOrCreateInstance(this, s);
                    if (typeof s == "string") {
                        if (l[s] === void 0 || s.startsWith("_") || s === "constructor") throw new TypeError(`No method named "${s}"`);
                        l[s]()
                    }
                })
            }
        }
        E.on(window, zy, () => {
            for (const f of F.find('[data-bs-spy="scroll"]')) ro.getOrCreateInstance(f)
        }), k(ro);
        const xr = ".bs.tab",
            Vy = `hide${xr}`,
            Ky = `hidden${xr}`,
            Qy = `show${xr}`,
            Zy = `shown${xr}`,
            Yy = `click${xr}`,
            Jy = `keydown${xr}`,
            qy = `load${xr}`,
            Gy = "ArrowLeft",
            wp = "ArrowRight",
            Xy = "ArrowUp",
            _p = "ArrowDown",
            Xl = "Home",
            kp = "End",
            wr = "active",
            Cp = "fade",
            eu = "show",
            Sp = ".dropdown-toggle",
            tu = `:not(${Sp})`,
            Ep = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
            nu = `.nav-link${tu}, .list-group-item${tu}, [role="tab"]${tu}, ${Ep}`,
            ev = `.${wr}[data-bs-toggle="tab"], .${wr}[data-bs-toggle="pill"], .${wr}[data-bs-toggle="list"]`;
        class _r extends le {
            constructor(s) {
                super(s), this._parent = this._element.closest('.list-group, .nav, [role="tablist"]'), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), E.on(this._element, Jy, l => this._keydown(l)))
            }
            static get NAME() {
                return "tab"
            }
            show() {
                const s = this._element;
                if (this._elemIsActive(s)) return;
                const l = this._getActiveElem(),
                    h = l ? E.trigger(l, Vy, {
                        relatedTarget: s
                    }) : null;
                E.trigger(s, Qy, {
                    relatedTarget: l
                }).defaultPrevented || h && h.defaultPrevented || (this._deactivate(l, s), this._activate(s, l))
            }
            _activate(s, l) {
                s && (s.classList.add(wr), this._activate(F.getElementFromSelector(s)), this._queueCallback(() => {
                    s.getAttribute("role") === "tab" ? (s.removeAttribute("tabindex"), s.setAttribute("aria-selected", !0), this._toggleDropDown(s, !0), E.trigger(s, Zy, {
                        relatedTarget: l
                    })) : s.classList.add(eu)
                }, s, s.classList.contains(Cp)))
            }
            _deactivate(s, l) {
                s && (s.classList.remove(wr), s.blur(), this._deactivate(F.getElementFromSelector(s)), this._queueCallback(() => {
                    s.getAttribute("role") === "tab" ? (s.setAttribute("aria-selected", !1), s.setAttribute("tabindex", "-1"), this._toggleDropDown(s, !1), E.trigger(s, Ky, {
                        relatedTarget: l
                    })) : s.classList.remove(eu)
                }, s, s.classList.contains(Cp)))
            }
            _keydown(s) {
                if (![Gy, wp, Xy, _p, Xl, kp].includes(s.key)) return;
                s.stopPropagation(), s.preventDefault();
                const l = this._getChildren().filter(C => !c(C));
                let h;
                if ([Xl, kp].includes(s.key)) h = l[s.key === Xl ? 0 : l.length - 1];
                else {
                    const C = [wp, _p].includes(s.key);
                    h = y(l, s.target, C, !0)
                }
                h && (h.focus({
                    preventScroll: !0
                }), _r.getOrCreateInstance(h).show())
            }
            _getChildren() {
                return F.find(nu, this._parent)
            }
            _getActiveElem() {
                return this._getChildren().find(s => this._elemIsActive(s)) || null
            }
            _setInitialAttributes(s, l) {
                this._setAttributeIfNotExists(s, "role", "tablist");
                for (const h of l) this._setInitialAttributesOnChild(h)
            }
            _setInitialAttributesOnChild(s) {
                s = this._getInnerElement(s);
                const l = this._elemIsActive(s),
                    h = this._getOuterElement(s);
                s.setAttribute("aria-selected", l), h !== s && this._setAttributeIfNotExists(h, "role", "presentation"), l || s.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(s, "role", "tab"), this._setInitialAttributesOnTargetPanel(s)
            }
            _setInitialAttributesOnTargetPanel(s) {
                const l = F.getElementFromSelector(s);
                l && (this._setAttributeIfNotExists(l, "role", "tabpanel"), s.id && this._setAttributeIfNotExists(l, "aria-labelledby", `${s.id}`))
            }
            _toggleDropDown(s, l) {
                const h = this._getOuterElement(s);
                if (!h.classList.contains("dropdown")) return;
                const C = (b, L) => {
                    const D = F.findOne(b, h);
                    D && D.classList.toggle(L, l)
                };
                C(Sp, wr), C(".dropdown-menu", eu), h.setAttribute("aria-expanded", l)
            }
            _setAttributeIfNotExists(s, l, h) {
                s.hasAttribute(l) || s.setAttribute(l, h)
            }
            _elemIsActive(s) {
                return s.classList.contains(wr)
            }
            _getInnerElement(s) {
                return s.matches(nu) ? s : F.findOne(nu, s)
            }
            _getOuterElement(s) {
                return s.closest(".nav-item, .list-group-item") || s
            }
            static jQueryInterface(s) {
                return this.each(function() {
                    const l = _r.getOrCreateInstance(this);
                    if (typeof s == "string") {
                        if (l[s] === void 0 || s.startsWith("_") || s === "constructor") throw new TypeError(`No method named "${s}"`);
                        l[s]()
                    }
                })
            }
        }
        E.on(document, Yy, Ep, function(f) {
            ["A", "AREA"].includes(this.tagName) && f.preventDefault(), c(this) || _r.getOrCreateInstance(this).show()
        }), E.on(window, qy, () => {
            for (const f of F.find(ev)) _r.getOrCreateInstance(f)
        }), k(_r);
        const Fn = ".bs.toast",
            tv = `mouseover${Fn}`,
            nv = `mouseout${Fn}`,
            rv = `focusin${Fn}`,
            iv = `focusout${Fn}`,
            ov = `hide${Fn}`,
            sv = `hidden${Fn}`,
            av = `show${Fn}`,
            lv = `shown${Fn}`,
            bp = "hide",
            Cs = "show",
            Ss = "showing",
            uv = {
                animation: "boolean",
                autohide: "boolean",
                delay: "number"
            },
            cv = {
                animation: !0,
                autohide: !0,
                delay: 5e3
            };
        class io extends le {
            constructor(s, l) {
                super(s, l), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners()
            }
            static get Default() {
                return cv
            }
            static get DefaultType() {
                return uv
            }
            static get NAME() {
                return "toast"
            }
            show() {
                E.trigger(this._element, av).defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(bp), g(this._element), this._element.classList.add(Cs, Ss), this._queueCallback(() => {
                    this._element.classList.remove(Ss), E.trigger(this._element, lv), this._maybeScheduleHide()
                }, this._element, this._config.animation))
            }
            hide() {
                this.isShown() && (E.trigger(this._element, ov).defaultPrevented || (this._element.classList.add(Ss), this._queueCallback(() => {
                    this._element.classList.add(bp), this._element.classList.remove(Ss, Cs), E.trigger(this._element, sv)
                }, this._element, this._config.animation)))
            }
            dispose() {
                this._clearTimeout(), this.isShown() && this._element.classList.remove(Cs), super.dispose()
            }
            isShown() {
                return this._element.classList.contains(Cs)
            }
            _maybeScheduleHide() {
                this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
                    this.hide()
                }, this._config.delay)))
            }
            _onInteraction(s, l) {
                switch (s.type) {
                    case "mouseover":
                    case "mouseout":
                        this._hasMouseInteraction = l;
                        break;
                    case "focusin":
                    case "focusout":
                        this._hasKeyboardInteraction = l
                }
                if (l) return void this._clearTimeout();
                const h = s.relatedTarget;
                this._element === h || this._element.contains(h) || this._maybeScheduleHide()
            }
            _setListeners() {
                E.on(this._element, tv, s => this._onInteraction(s, !0)), E.on(this._element, nv, s => this._onInteraction(s, !1)), E.on(this._element, rv, s => this._onInteraction(s, !0)), E.on(this._element, iv, s => this._onInteraction(s, !1))
            }
            _clearTimeout() {
                clearTimeout(this._timeout), this._timeout = null
            }
            static jQueryInterface(s) {
                return this.each(function() {
                    const l = io.getOrCreateInstance(this, s);
                    if (typeof s == "string") {
                        if (l[s] === void 0) throw new TypeError(`No method named "${s}"`);
                        l[s](this)
                    }
                })
            }
        }
        return Fe(io), k(io), {
            Alert: ln,
            Button: Ji,
            Carousel: Zr,
            Collapse: Jr,
            Dropdown: Yt,
            Modal: yr,
            Offcanvas: Sn,
            Popover: ks,
            ScrollSpy: ro,
            Tab: _r,
            Toast: io,
            Tooltip: vr
        }
    })
});
export default IC();