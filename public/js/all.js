! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";
    var n = [],
        r = e.document,
        i = Object.getPrototypeOf,
        o = n.slice,
        a = n.concat,
        s = n.push,
        u = n.indexOf,
        l = {},
        c = l.toString,
        f = l.hasOwnProperty,
        p = f.toString,
        d = p.call(Object),
        h = {},
        g = function e(t) {
            return "function" == typeof t && "number" != typeof t.nodeType
        },
        y = function e(t) {
            return null != t && t === t.window
        },
        v = {
            type: !0,
            src: !0,
            noModule: !0
        };

    function m(e, t, n) {
        var i, o = (t = t || r).createElement("script");
        if (o.text = e, n)
            for (i in v) n[i] && (o[i] = n[i]);
        t.head.appendChild(o).parentNode.removeChild(o)
    }

    function x(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e
    }
    var b = "3.3.1",
        w = function(e, t) {
            return new w.fn.init(e, t)
        },
        T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    w.fn = w.prototype = {
        jquery: "3.3.1",
        constructor: w,
        length: 0,
        toArray: function() {
            return o.call(this)
        },
        get: function(e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = w.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return w.each(this, e)
        },
        map: function(e) {
            return this.pushStack(w.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(o.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: s,
        sort: n.sort,
        splice: n.splice
    }, w.extend = w.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || g(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) n = a[t], a !== (r = e[t]) && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && w.isPlainObject(n) ? n : {}, a[t] = w.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, w.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || "function" == typeof(n = f.call(t, "constructor") && t.constructor) && p.call(n) === d)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e) {
            m(e)
        },
        each: function(e, t) {
            var n, r = 0;
            if (C(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r])) break
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break; return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(T, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : u.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++)(r = !t(e[o], o)) !== s && i.push(e[o]);
            return i
        },
        map: function(e, t, n) {
            var r, i, o = 0,
                s = [];
            if (C(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
            return a.apply([], s)
        },
        guid: 1,
        support: h
    }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        l["[object " + t + "]"] = t.toLowerCase()
    });

    function C(e) {
        var t = !!e && "length" in e && e.length,
            n = x(e);
        return !g(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    var E = function(e) {
        var t, n, r, i, o, a, s, u, l, c, f, p, d, h, g, y, v, m, x, b = "sizzle" + 1 * new Date,
            w = e.document,
            T = 0,
            C = 0,
            E = ae(),
            k = ae(),
            S = ae(),
            D = function(e, t) {
                return e === t && (f = !0), 0
            },
            N = {}.hasOwnProperty,
            A = [],
            j = A.pop,
            q = A.push,
            L = A.push,
            H = A.slice,
            O = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            I = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]",
            W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
            $ = new RegExp(M + "+", "g"),
            B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            F = new RegExp("^" + M + "*," + M + "*"),
            _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
            X = new RegExp(W),
            U = new RegExp("^" + R + "$"),
            V = {
                ID: new RegExp("^#(" + R + ")"),
                CLASS: new RegExp("^\\.(" + R + ")"),
                TAG: new RegExp("^(" + R + "|[*])"),
                ATTR: new RegExp("^" + I),
                PSEUDO: new RegExp("^" + W),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + P + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            },
            G = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            Q = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            K = /[+~]/,
            Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
            ee = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ne = function(e, t) {
                return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            re = function() {
                p()
            },
            ie = me(function(e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            L.apply(A = H.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType
        } catch (e) {
            L = {
                apply: A.length ? function(e, t) {
                    q.apply(e, H.call(t))
                } : function(e, t) {
                    var n = e.length,
                        r = 0;
                    while (e[n++] = t[r++]);
                    e.length = n - 1
                }
            }
        }

        function oe(e, t, r, i) {
            var o, s, l, c, f, h, v, m = t && t.ownerDocument,
                T = t ? t.nodeType : 9;
            if (r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r;
            if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g)) {
                if (11 !== T && (f = J.exec(e)))
                    if (o = f[1]) {
                        if (9 === T) {
                            if (!(l = t.getElementById(o))) return r;
                            if (l.id === o) return r.push(l), r
                        } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r
                    } else {
                        if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;
                        if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), r
                    }
                if (n.qsa && !S[e + " "] && (!y || !y.test(e))) {
                    if (1 !== T) m = t, v = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        (c = t.getAttribute("id")) ? c = c.replace(te, ne): t.setAttribute("id", c = b), s = (h = a(e)).length;
                        while (s--) h[s] = "#" + c + " " + ve(h[s]);
                        v = h.join(","), m = K.test(e) && ge(t.parentNode) || t
                    }
                    if (v) try {
                        return L.apply(r, m.querySelectorAll(v)), r
                    } catch (e) {} finally {
                        c === b && t.removeAttribute("id")
                    }
                }
            }
            return u(e.replace(B, "$1"), t, r, i)
        }

        function ae() {
            var e = [];

            function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
            return t
        }

        function se(e) {
            return e[b] = !0, e
        }

        function ue(e) {
            var t = d.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function le(e, t) {
            var n = e.split("|"),
                i = n.length;
            while (i--) r.attrHandle[n[i]] = t
        }

        function ce(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function fe(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function pe(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function de(e) {
            return function(t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function he(e) {
            return se(function(t) {
                return t = +t, se(function(n, r) {
                    var i, o = e([], n.length, t),
                        a = o.length;
                    while (a--) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function ge(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        n = oe.support = {}, o = oe.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, p = oe.setDocument = function(e) {
            var t, i, a = e ? e.ownerDocument || e : w;
            return a !== d && 9 === a.nodeType && a.documentElement ? (d = a, h = d.documentElement, g = !o(d), w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = ue(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), n.getElementsByTagName = ue(function(e) {
                return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length
            }), n.getElementsByClassName = Q.test(d.getElementsByClassName), n.getById = ue(function(e) {
                return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length
            }), n.getById ? (r.filter.ID = function(e) {
                var t = e.replace(Z, ee);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }, r.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && g) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (r.filter.ID = function(e) {
                var t = e.replace(Z, ee);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }, r.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && g) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                        i = t.getElementsByName(e), r = 0;
                        while (o = i[r++])
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                    }
                    return []
                }
            }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n, r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++]) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && g) return t.getElementsByClassName(e)
            }, v = [], y = [], (n.qsa = Q.test(d.querySelectorAll)) && (ue(function(e) {
                h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + b + "-]").length || y.push("~="), e.querySelectorAll(":checked").length || y.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || y.push(".#.+[+~]")
            }), ue(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = d.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:")
            })), (n.matchesSelector = Q.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue(function(e) {
                n.disconnectedMatch = m.call(e, "*"), m.call(e, "[s!='']:x"), v.push("!=", W)
            }), y = y.length && new RegExp(y.join("|")), v = v.length && new RegExp(v.join("|")), t = Q.test(h.compareDocumentPosition), x = t || Q.test(h.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function(e, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === e) return !0;
                return !1
            }, D = t ? function(e, t) {
                if (e === t) return f = !0, 0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & r ? -1 : 1)
            } : function(e, t) {
                if (e === t) return f = !0, 0;
                var n, r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    s = [t];
                if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;
                if (i === o) return ce(e, t);
                n = e;
                while (n = n.parentNode) a.unshift(n);
                n = t;
                while (n = n.parentNode) s.unshift(n);
                while (a[r] === s[r]) r++;
                return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0
            }, d) : d
        }, oe.matches = function(e, t) {
            return oe(e, null, null, t)
        }, oe.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== d && p(e), t = t.replace(z, "='$1']"), n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!y || !y.test(t))) try {
                var r = m.call(e, t);
                if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (e) {}
            return oe(t, d, null, [e]).length > 0
        }, oe.contains = function(e, t) {
            return (e.ownerDocument || e) !== d && p(e), x(e, t)
        }, oe.attr = function(e, t) {
            (e.ownerDocument || e) !== d && p(e);
            var i = r.attrHandle[t.toLowerCase()],
                o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
            return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
        }, oe.escape = function(e) {
            return (e + "").replace(te, ne)
        }, oe.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, oe.uniqueSort = function(e) {
            var t, r = [],
                i = 0,
                o = 0;
            if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(D), f) {
                while (t = e[o++]) t === e[o] && (i = r.push(o));
                while (i--) e.splice(r[i], 1)
            }
            return c = null, e
        }, i = oe.getText = function(e) {
            var t, n = "",
                r = 0,
                o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else
                while (t = e[r++]) n += i(t);
            return n
        }, (r = oe.selectors = {
            cacheLength: 50,
            createPseudo: se,
            match: V,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(Z, ee).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = E[e + " "];
                    return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, t, n) {
                    return function(r) {
                        var i = oe.attr(r, e);
                        return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace($, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, u) {
                        var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling",
                            y = t.parentNode,
                            v = s && t.nodeName.toLowerCase(),
                            m = !u && !s,
                            x = !1;
                        if (y) {
                            if (o) {
                                while (g) {
                                    p = t;
                                    while (p = p[g])
                                        if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? y.firstChild : y.lastChild], a && m) {
                                x = (d = (l = (c = (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], p = d && y.childNodes[d];
                                while (p = ++d && p && p[g] || (x = d = 0) || h.pop())
                                    if (1 === p.nodeType && ++x && p === t) {
                                        c[e] = [T, d, x];
                                        break
                                    }
                            } else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x)
                                while (p = ++d && p && p[g] || (x = d = 0) || h.pop())
                                    if ((s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) && ++x && (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p === t)) break;
                            return (x -= i) === r || x % r == 0 && x / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                    return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function(e, n) {
                        var r, o = i(e, t),
                            a = o.length;
                        while (a--) e[r = O(e, o[a])] = !(n[r] = o[a])
                    }) : function(e) {
                        return i(e, 0, n)
                    }) : i
                }
            },
            pseudos: {
                not: se(function(e) {
                    var t = [],
                        n = [],
                        r = s(e.replace(B, "$1"));
                    return r[b] ? se(function(e, t, n, i) {
                        var o, a = r(e, null, i, []),
                            s = e.length;
                        while (s--)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, i, o) {
                        return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                    }
                }),
                has: se(function(e) {
                    return function(t) {
                        return oe(e, t).length > 0
                    }
                }),
                contains: se(function(e) {
                    return e = e.replace(Z, ee),
                        function(t) {
                            return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                        }
                }),
                lang: se(function(e) {
                    return U.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(),
                        function(t) {
                            var n;
                            do {
                                if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                            } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === h
                },
                focus: function(e) {
                    return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: de(!1),
                disabled: de(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !r.pseudos.empty(e)
                },
                header: function(e) {
                    return Y.test(e.nodeName)
                },
                input: function(e) {
                    return G.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: he(function() {
                    return [0]
                }),
                last: he(function(e, t) {
                    return [t - 1]
                }),
                eq: he(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: he(function(e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: he(function(e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: he(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: he(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }).pseudos.nth = r.pseudos.eq;
        for (t in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) r.pseudos[t] = fe(t);
        for (t in {
            submit: !0,
            reset: !0
        }) r.pseudos[t] = pe(t);

        function ye() {}
        ye.prototype = r.filters = r.pseudos, r.setFilters = new ye, a = oe.tokenize = function(e, t) {
            var n, i, o, a, s, u, l, c = k[e + " "];
            if (c) return t ? 0 : c.slice(0);
            s = e, u = [], l = r.preFilter;
            while (s) {
                n && !(i = F.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = _.exec(s)) && (n = i.shift(), o.push({
                    value: n,
                    type: i[0].replace(B, " ")
                }), s = s.slice(n.length));
                for (a in r.filter) !(i = V[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({
                    value: n,
                    type: a,
                    matches: i
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? oe.error(e) : k(e, u).slice(0)
        };

        function ve(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function me(e, t, n) {
            var r = t.dir,
                i = t.next,
                o = i || r,
                a = n && "parentNode" === o,
                s = C++;
            return t.first ? function(t, n, i) {
                while (t = t[r])
                    if (1 === t.nodeType || a) return e(t, n, i);
                return !1
            } : function(t, n, u) {
                var l, c, f, p = [T, s];
                if (u) {
                    while (t = t[r])
                        if ((1 === t.nodeType || a) && e(t, n, u)) return !0
                } else
                    while (t = t[r])
                        if (1 === t.nodeType || a)
                            if (f = t[b] || (t[b] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                            else {
                                if ((l = c[o]) && l[0] === T && l[1] === s) return p[2] = l[2];
                                if (c[o] = p, p[2] = e(t, n, u)) return !0
                            } return !1
            }
        }

        function xe(e) {
            return e.length > 1 ? function(t, n, r) {
                var i = e.length;
                while (i--)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function be(e, t, n) {
            for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
            return n
        }

        function we(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }

        function Te(e, t, n, r, i, o) {
            return r && !r[b] && (r = Te(r)), i && !i[b] && (i = Te(i, o)), se(function(o, a, s, u) {
                var l, c, f, p = [],
                    d = [],
                    h = a.length,
                    g = o || be(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !o && t ? g : we(g, p, e, s, u),
                    v = n ? i || (o ? e : h || r) ? [] : a : y;
                if (n && n(y, v, s, u), r) {
                    l = we(v, d), r(l, [], s, u), c = l.length;
                    while (c--)(f = l[c]) && (v[d[c]] = !(y[d[c]] = f))
                }
                if (o) {
                    if (i || e) {
                        if (i) {
                            l = [], c = v.length;
                            while (c--)(f = v[c]) && l.push(y[c] = f);
                            i(null, v = [], l, u)
                        }
                        c = v.length;
                        while (c--)(f = v[c]) && (l = i ? O(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f))
                    }
                } else v = we(v === a ? v.splice(h, v.length) : v), i ? i(null, a, v, u) : L.apply(a, v)
            })
        }

        function Ce(e) {
            for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = me(function(e) {
                return e === t
            }, s, !0), f = me(function(e) {
                return O(t, e) > -1
            }, s, !0), p = [function(e, n, r) {
                var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                return t = null, i
            }]; u < o; u++)
                if (n = r.relative[e[u].type]) p = [me(xe(p), n)];
                else {
                    if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                        for (i = ++u; i < o; i++)
                            if (r.relative[e[i].type]) break;
                        return Te(u > 1 && xe(p), u > 1 && ve(e.slice(0, u - 1).concat({
                            value: " " === e[u - 2].type ? "*" : ""
                        })).replace(B, "$1"), n, u < i && Ce(e.slice(u, i)), i < o && Ce(e = e.slice(i)), i < o && ve(e))
                    }
                    p.push(n)
                }
            return xe(p)
        }

        function Ee(e, t) {
            var n = t.length > 0,
                i = e.length > 0,
                o = function(o, a, s, u, c) {
                    var f, h, y, v = 0,
                        m = "0",
                        x = o && [],
                        b = [],
                        w = l,
                        C = o || i && r.find.TAG("*", c),
                        E = T += null == w ? 1 : Math.random() || .1,
                        k = C.length;
                    for (c && (l = a === d || a || c); m !== k && null != (f = C[m]); m++) {
                        if (i && f) {
                            h = 0, a || f.ownerDocument === d || (p(f), s = !g);
                            while (y = e[h++])
                                if (y(f, a || d, s)) {
                                    u.push(f);
                                    break
                                }
                            c && (T = E)
                        }
                        n && ((f = !y && f) && v--, o && x.push(f))
                    }
                    if (v += m, n && m !== v) {
                        h = 0;
                        while (y = t[h++]) y(x, b, a, s);
                        if (o) {
                            if (v > 0)
                                while (m--) x[m] || b[m] || (b[m] = j.call(u));
                            b = we(b)
                        }
                        L.apply(u, b), c && !o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(u)
                    }
                    return c && (T = E, l = w), x
                };
            return n ? se(o) : o
        }
        return s = oe.compile = function(e, t) {
            var n, r = [],
                i = [],
                o = S[e + " "];
            if (!o) {
                t || (t = a(e)), n = t.length;
                while (n--)(o = Ce(t[n]))[b] ? r.push(o) : i.push(o);
                (o = S(e, Ee(i, r))).selector = e
            }
            return o
        }, u = oe.select = function(e, t, n, i) {
            var o, u, l, c, f, p = "function" == typeof e && e,
                d = !i && a(e = p.selector || e);
            if (n = n || [], 1 === d.length) {
                if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                    if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0])) return n;
                    p && (t = t.parentNode), e = e.slice(u.shift().value.length)
                }
                o = V.needsContext.test(e) ? 0 : u.length;
                while (o--) {
                    if (l = u[o], r.relative[c = l.type]) break;
                    if ((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), K.test(u[0].type) && ge(t.parentNode) || t))) {
                        if (u.splice(o, 1), !(e = i.length && ve(u))) return L.apply(n, i), n;
                        break
                    }
                }
            }
            return (p || s(e, d))(i, t, !g, n, !t || K.test(e) && ge(t.parentNode) || t), n
        }, n.sortStable = b.split("").sort(D).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ue(function(e) {
            return 1 & e.compareDocumentPosition(d.createElement("fieldset"))
        }), ue(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || le("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), n.attributes && ue(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || le("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ue(function(e) {
            return null == e.getAttribute("disabled")
        }) || le(P, function(e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), oe
    }(e);
    w.find = E, w.expr = E.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = E.uniqueSort, w.text = E.getText, w.isXMLDoc = E.isXML, w.contains = E.contains, w.escapeSelector = E.escape;
    var k = function(e, t, n) {
            var r = [],
                i = void 0 !== n;
            while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) {
                    if (i && w(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        S = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        D = w.expr.match.needsContext;

    function N(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function j(e, t, n) {
        return g(t) ? w.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        }) : t.nodeType ? w.grep(e, function(e) {
            return e === t !== n
        }) : "string" != typeof t ? w.grep(e, function(e) {
            return u.call(t, e) > -1 !== n
        }) : w.filter(t, e, n)
    }
    w.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, w.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(w(e).filter(function() {
                for (t = 0; t < r; t++)
                    if (w.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) w.find(e, i[t], n);
            return r > 1 ? w.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(j(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(j(this, e || [], !0))
        },
        is: function(e) {
            return !!j(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1).length
        }
    });
    var q, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (w.fn.init = function(e, t, n) {
        var i, o;
        if (!e) return this;
        if (n = n || q, "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), A.test(i[1]) && w.isPlainObject(t))
                    for (i in t) g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return (o = r.getElementById(i[2])) && (this[0] = o, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this)
    }).prototype = w.fn, q = w(r);
    var H = /^(?:parents|prev(?:Until|All))/,
        O = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    w.fn.extend({
        has: function(e) {
            var t = w(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (w.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && w(e);
            if (!D.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? u.call(w(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    });

    function P(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType);
        return e
    }
    w.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return k(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return k(e, "parentNode", n)
        },
        next: function(e) {
            return P(e, "nextSibling")
        },
        prev: function(e) {
            return P(e, "previousSibling")
        },
        nextAll: function(e) {
            return k(e, "nextSibling")
        },
        prevAll: function(e) {
            return k(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return k(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return k(e, "previousSibling", n)
        },
        siblings: function(e) {
            return S((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return S(e.firstChild)
        },
        contents: function(e) {
            return N(e, "iframe") ? e.contentDocument : (N(e, "template") && (e = e.content || e), w.merge([], e.childNodes))
        }
    }, function(e, t) {
        w.fn[e] = function(n, r) {
            var i = w.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), this.length > 1 && (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var M = /[^\x20\t\r\n\f]+/g;

    function R(e) {
        var t = {};
        return w.each(e.match(M) || [], function(e, n) {
            t[n] = !0
        }), t
    }
    w.Callbacks = function(e) {
        e = "string" == typeof e ? R(e) : w.extend({}, e);
        var t, n, r, i, o = [],
            a = [],
            s = -1,
            u = function() {
                for (i = i || e.once, r = t = !0; a.length; s = -1) {
                    n = a.shift();
                    while (++s < o.length) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1)
                }
                e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
            },
            l = {
                add: function() {
                    return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
                        w.each(n, function(n, r) {
                            g(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== x(r) && t(r)
                        })
                    }(arguments), n && !t && u()), this
                },
                remove: function() {
                    return w.each(arguments, function(e, t) {
                        var n;
                        while ((n = w.inArray(t, o, n)) > -1) o.splice(n, 1), n <= s && s--
                    }), this
                },
                has: function(e) {
                    return e ? w.inArray(e, o) > -1 : o.length > 0
                },
                empty: function() {
                    return o && (o = []), this
                },
                disable: function() {
                    return i = a = [], o = n = "", this
                },
                disabled: function() {
                    return !o
                },
                lock: function() {
                    return i = a = [], n || t || (o = n = ""), this
                },
                locked: function() {
                    return !!i
                },
                fireWith: function(e, n) {
                    return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this
                },
                fire: function() {
                    return l.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!r
                }
            };
        return l
    };

    function I(e) {
        return e
    }

    function W(e) {
        throw e
    }

    function $(e, t, n, r) {
        var i;
        try {
            e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    w.extend({
        Deferred: function(t) {
            var n = [
                    ["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
                    ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]
                ],
                r = "pending",
                i = {
                    state: function() {
                        return r
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    "catch": function(e) {
                        return i.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return w.Deferred(function(t) {
                            w.each(n, function(n, r) {
                                var i = g(e[r[4]]) && e[r[4]];
                                o[r[1]](function() {
                                    var e = i && i.apply(this, arguments);
                                    e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function(t, r, i) {
                        var o = 0;

                        function a(t, n, r, i) {
                            return function() {
                                var s = this,
                                    u = arguments,
                                    l = function() {
                                        var e, l;
                                        if (!(t < o)) {
                                            if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            l = e && ("object" == typeof e || "function" == typeof e) && e.then, g(l) ? i ? l.call(e, a(o, n, I, i), a(o, n, W, i)) : (o++, l.call(e, a(o, n, I, i), a(o, n, W, i), a(o, n, I, n.notifyWith))) : (r !== I && (s = void 0, u = [e]), (i || n.resolveWith)(s, u))
                                        }
                                    },
                                    c = i ? l : function() {
                                        try {
                                            l()
                                        } catch (e) {
                                            w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (r !== W && (s = void 0, u = [e]), n.rejectWith(s, u))
                                        }
                                    };
                                t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c))
                            }
                        }
                        return w.Deferred(function(e) {
                            n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)), n[1][3].add(a(0, e, g(t) ? t : I)), n[2][3].add(a(0, e, g(r) ? r : W))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? w.extend(e, i) : i
                    }
                },
                o = {};
            return w.each(n, function(e, t) {
                var a = t[2],
                    s = t[5];
                i[t[1]] = a.add, s && a.add(function() {
                    r = s
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function() {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[t[0] + "With"] = a.fireWith
            }), i.promise(o), t && t.call(o, o), o
        },
        when: function(e) {
            var t = arguments.length,
                n = t,
                r = Array(n),
                i = o.call(arguments),
                a = w.Deferred(),
                s = function(e) {
                    return function(n) {
                        r[e] = this, i[e] = arguments.length > 1 ? o.call(arguments) : n, --t || a.resolveWith(r, i)
                    }
                };
            if (t <= 1 && ($(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(i[n] && i[n].then))) return a.then();
            while (n--) $(i[n], s(n), a.reject);
            return a.promise()
        }
    });
    var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    w.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && B.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, w.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    };
    var F = w.Deferred();
    w.fn.ready = function(e) {
        return F.then(e)["catch"](function(e) {
            w.readyException(e)
        }), this
    }, w.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || F.resolveWith(r, [w]))
        }
    }), w.ready.then = F.then;

    function _() {
        r.removeEventListener("DOMContentLoaded", _), e.removeEventListener("load", _), w.ready()
    }
    "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", _), e.addEventListener("load", _));
    var z = function(e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === x(n)) {
                i = !0;
                for (s in n) z(e, t, s, n[s], !0, o, a)
            } else if (void 0 !== r && (i = !0, g(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                return l.call(w(e), n)
            })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        X = /^-ms-/,
        U = /-([a-z])/g;

    function V(e, t) {
        return t.toUpperCase()
    }

    function G(e) {
        return e.replace(X, "ms-").replace(U, V)
    }
    var Y = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function Q() {
        this.expando = w.expando + Q.uid++
    }
    Q.uid = 1, Q.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[G(t)] = n;
            else
                for (r in t) i[G(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [t] : t.match(M) || []).length;
                    while (n--) delete r[t[n]]
                }(void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !w.isEmptyObject(t)
        }
    };
    var J = new Q,
        K = new Q,
        Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ee = /[A-Z]/g;

    function te(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e)
    }

    function ne(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = te(n)
                } catch (e) {}
                K.set(e, t, n)
            } else n = void 0;
        return n
    }
    w.extend({
        hasData: function(e) {
            return K.hasData(e) || J.hasData(e)
        },
        data: function(e, t, n) {
            return K.access(e, t, n)
        },
        removeData: function(e, t) {
            K.remove(e, t)
        },
        _data: function(e, t, n) {
            return J.access(e, t, n)
        },
        _removeData: function(e, t) {
            J.remove(e, t)
        }
    }), w.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = K.get(o), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
                    n = a.length;
                    while (n--) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = G(r.slice(5)), ne(o, r, i[r]));
                    J.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                K.set(this, e)
            }) : z(this, function(t) {
                var n;
                if (o && void 0 === t) {
                    if (void 0 !== (n = K.get(o, e))) return n;
                    if (void 0 !== (n = ne(o, e))) return n
                } else this.each(function() {
                    K.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                K.remove(this, e)
            })
        }
    }), w.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = J.get(e, t), n && (!r || Array.isArray(n) ? r = J.access(e, t, w.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = w.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = w._queueHooks(e, t),
                a = function() {
                    w.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return J.get(e, n) || J.access(e, n, {
                empty: w.Callbacks("once memory").add(function() {
                    J.remove(e, [t + "queue", n])
                })
            })
        }
    }), w.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = w.queue(this, e, t);
                w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                w.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = w.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --r || i.resolveWith(o, [o])
                };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while (a--)(n = J.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
        oe = ["Top", "Right", "Bottom", "Left"],
        ae = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display")
        },
        se = function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i
        };

    function ue(e, t, n, r) {
        var i, o, a = 20,
            s = r ? function() {
                return r.cur()
            } : function() {
                return w.css(e, t, "")
            },
            u = s(),
            l = n && n[3] || (w.cssNumber[t] ? "" : "px"),
            c = (w.cssNumber[t] || "px" !== l && +u) && ie.exec(w.css(e, t));
        if (c && c[3] !== l) {
            u /= 2, l = l || c[3], c = +u || 1;
            while (a--) w.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, w.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }
    var le = {};

    function ce(e) {
        var t, n = e.ownerDocument,
            r = e.nodeName,
            i = le[r];
        return i || (t = n.body.appendChild(n.createElement(r)), i = w.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), le[r] = i, i)
    }

    function fe(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++)(r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = J.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ae(r) && (i[o] = ce(r))) : "none" !== n && (i[o] = "none", J.set(r, "display", n)));
        for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
        return e
    }
    w.fn.extend({
        show: function() {
            return fe(this, !0)
        },
        hide: function() {
            return fe(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ae(this) ? w(this).show() : w(this).hide()
            })
        }
    });
    var pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i,
        ge = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;

    function ye(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && N(e, t) ? w.merge([e], n) : n
    }

    function ve(e, t) {
        for (var n = 0, r = e.length; n < r; n++) J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"))
    }
    var me = /<|&#?\w+;/;

    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === x(o)) w.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
                    a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2], c = u[0];
                    while (c--) a = a.lastChild;
                    w.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
                } else p.push(t.createTextNode(o));
        f.textContent = "", d = 0;
        while (o = p[d++])
            if (r && w.inArray(o, r) > -1) i && i.push(o);
            else if (l = w.contains(o.ownerDocument, o), a = ye(f.appendChild(o), "script"), l && ve(a), n) {
                c = 0;
                while (o = a[c++]) he.test(o.type || "") && n.push(o)
            }
        return f
    }! function() {
        var e = r.createDocumentFragment().appendChild(r.createElement("div")),
            t = r.createElement("input");
        t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var be = r.documentElement,
        we = /^key/,
        Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ce = /^([^.]*)(?:\.(.+)|)/;

    function Ee() {
        return !0
    }

    function ke() {
        return !1
    }

    function Se() {
        try {
            return r.activeElement
        } catch (e) {}
    }

    function De(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n, n = void 0);
            for (s in t) De(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = ke;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function(e) {
            return w().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = w.guid++)), e.each(function() {
            w.event.add(this, t, i, r, n)
        })
    }
    w.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, y = J.get(e);
            if (y) {
                n.handler && (n = (o = n).handler, i = o.selector), i && w.find.matchesSelector(be, i), n.guid || (n.guid = w.guid++), (u = y.events) || (u = y.events = {}), (a = y.handle) || (a = y.handle = function(t) {
                    return "undefined" != typeof w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0
                }), l = (t = (t || "").match(M) || [""]).length;
                while (l--) d = g = (s = Ce.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = w.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = w.event.special[d] || {}, c = w.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && w.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), w.event.global[d] = !0)
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, y = J.hasData(e) && J.get(e);
            if (y && (u = y.events)) {
                l = (t = (t || "").match(M) || [""]).length;
                while (l--)
                    if (s = Ce.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                        f = w.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
                        while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || w.removeEvent(e, d, y.handle), delete u[d])
                    } else
                        for (d in u) w.event.remove(e, d + t[l], n, r, !0);
                w.isEmptyObject(u) && J.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t = w.event.fix(e),
                n, r, i, o, a, s, u = new Array(arguments.length),
                l = (J.get(this, "events") || {})[t.type] || [],
                c = w.event.special[t.type] || {};
            for (u[0] = t, n = 1; n < arguments.length; n++) u[n] = arguments[n];
            if (t.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
                s = w.event.handlers.call(this, t, l), n = 0;
                while ((o = s[n++]) && !t.isPropagationStopped()) {
                    t.currentTarget = o.elem, r = 0;
                    while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped()) t.rnamespace && !t.rnamespace.test(a.namespace) || (t.handleObj = a, t.data = a.data, void 0 !== (i = ((w.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this, u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }), s
        },
        addProp: function(e, t) {
            Object.defineProperty(w.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: g(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[w.expando] ? e : new w.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== Se() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === Se() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && N(this, "input")) return this.click(), !1
                },
                _default: function(e) {
                    return N(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, w.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, w.Event = function(e, t) {
        if (!(this instanceof w.Event)) return new w.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : ke, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0
    }, w.Event.prototype = {
        constructor: w.Event,
        isDefaultPrevented: ke,
        isPropagationStopped: ke,
        isImmediatePropagationStopped: ke,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, w.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, w.event.addProp), w.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        w.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return i && (i === r || w.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), w.fn.extend({
        on: function(e, t, n, r) {
            return De(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return De(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), this.each(function() {
                w.event.remove(this, e, n, t)
            })
        }
    });
    var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Ae = /<script|<style|<link/i,
        je = /checked\s*(?:[^=]|=\s*.checked.)/i,
        qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Le(e, t) {
        return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") ? w(e).children("tbody")[0] || e : e
    }

    function He(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Oe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Pe(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (J.hasData(e) && (o = J.access(e), a = J.set(t, o), l = o.events)) {
                delete a.handle, a.events = {};
                for (i in l)
                    for (n = 0, r = l[i].length; n < r; n++) w.event.add(t, i, l[i][n])
            }
            K.hasData(e) && (s = K.access(e), u = w.extend({}, s), K.set(t, u))
        }
    }

    function Me(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && pe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function Re(e, t, n, r) {
        t = a.apply([], t);
        var i, o, s, u, l, c, f = 0,
            p = e.length,
            d = p - 1,
            y = t[0],
            v = g(y);
        if (v || p > 1 && "string" == typeof y && !h.checkClone && je.test(y)) return e.each(function(i) {
            var o = e.eq(i);
            v && (t[0] = y.call(this, i, o.html())), Re(o, t, n, r)
        });
        if (p && (i = xe(t, e[0].ownerDocument, !1, e, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
            for (u = (s = w.map(ye(i, "script"), He)).length; f < p; f++) l = i, f !== d && (l = w.clone(l, !0, !0), u && w.merge(s, ye(l, "script"))), n.call(e[f], l, f);
            if (u)
                for (c = s[s.length - 1].ownerDocument, w.map(s, Oe), f = 0; f < u; f++) l = s[f], he.test(l.type || "") && !J.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(l.src) : m(l.textContent.replace(qe, ""), c, l))
        }
        return e
    }

    function Ie(e, t, n) {
        for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || w.cleanData(ye(r)), r.parentNode && (n && w.contains(r.ownerDocument, r) && ve(ye(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    w.extend({
        htmlPrefilter: function(e) {
            return e.replace(Ne, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, o, a, s = e.cloneNode(!0),
                u = w.contains(e.ownerDocument, e);
            if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e)))
                for (a = ye(s), r = 0, i = (o = ye(e)).length; r < i; r++) Me(o[r], a[r]);
            if (t)
                if (n)
                    for (o = o || ye(e), a = a || ye(s), r = 0, i = o.length; r < i; r++) Pe(o[r], a[r]);
                else Pe(e, s);
            return (a = ye(s, "script")).length > 0 && ve(a, !u && ye(e, "script")), s
        },
        cleanData: function(e) {
            for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (Y(n)) {
                    if (t = n[J.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
                        n[J.expando] = void 0
                    }
                    n[K.expando] && (n[K.expando] = void 0)
                }
        }
    }), w.fn.extend({
        detach: function(e) {
            return Ie(this, e, !0)
        },
        remove: function(e) {
            return Ie(this, e)
        },
        text: function(e) {
            return z(this, function(e) {
                return void 0 === e ? w.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Re(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Re(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Le(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Re(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Re(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(ye(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return w.clone(this, e, t)
            })
        },
        html: function(e) {
            return z(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ae.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = w.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(ye(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return Re(this, arguments, function(t) {
                var n = this.parentNode;
                w.inArray(this, e) < 0 && (w.cleanData(ye(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), w.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        w.fn[e] = function(e) {
            for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), w(i[a])[t](n), s.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
        $e = function(t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        },
        Be = new RegExp(oe.join("|"), "i");
    ! function() {
        function t() {
            if (c) {
                l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", be.appendChild(l).appendChild(c);
                var t = e.getComputedStyle(c);
                i = "1%" !== t.top, u = 12 === n(t.marginLeft), c.style.right = "60%", s = 36 === n(t.right), o = 36 === n(t.width), c.style.position = "absolute", a = 36 === c.offsetWidth || "absolute", be.removeChild(l), c = null
            }
        }

        function n(e) {
            return Math.round(parseFloat(e))
        }
        var i, o, a, s, u, l = r.createElement("div"),
            c = r.createElement("div");
        c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(h, {
            boxSizingReliable: function() {
                return t(), o
            },
            pixelBoxStyles: function() {
                return t(), s
            },
            pixelPosition: function() {
                return t(), i
            },
            reliableMarginLeft: function() {
                return t(), u
            },
            scrollboxSize: function() {
                return t(), a
            }
        }))
    }();

    function Fe(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || $e(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (a = w.style(e, t)), !h.pixelBoxStyles() && We.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function _e(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    var ze = /^(none|table(?!-c[ea]).+)/,
        Xe = /^--/,
        Ue = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ve = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ge = ["Webkit", "Moz", "ms"],
        Ye = r.createElement("div").style;

    function Qe(e) {
        if (e in Ye) return e;
        var t = e[0].toUpperCase() + e.slice(1),
            n = Ge.length;
        while (n--)
            if ((e = Ge[n] + t) in Ye) return e
    }

    function Je(e) {
        var t = w.cssProps[e];
        return t || (t = w.cssProps[e] = Qe(e) || e), t
    }

    function Ke(e, t, n) {
        var r = ie.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function Ze(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += w.css(e, n + oe[a], !0, i)), r ? ("content" === n && (u -= w.css(e, "padding" + oe[a], !0, i)), "margin" !== n && (u -= w.css(e, "border" + oe[a] + "Width", !0, i))) : (u += w.css(e, "padding" + oe[a], !0, i), "padding" !== n ? u += w.css(e, "border" + oe[a] + "Width", !0, i) : s += w.css(e, "border" + oe[a] + "Width", !0, i));
        return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5))), u
    }

    function et(e, t, n) {
        var r = $e(e),
            i = Fe(e, t, r),
            o = "border-box" === w.css(e, "boxSizing", !1, r),
            a = o;
        if (We.test(i)) {
            if (!n) return i;
            i = "auto"
        }
        return a = a && (h.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === w.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), a, r, i) + "px"
    }
    w.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Fe(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = G(t),
                    u = Xe.test(t),
                    l = e.style;
                if (u || (t = Je(s)), a = w.cssHooks[t] || w.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" == (o = typeof n) && (i = ie.exec(n)) && i[1] && (n = ue(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (w.cssNumber[s] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = G(t);
            return Xe.test(t) || (t = Je(s)), (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Fe(e, t, r)), "normal" === i && t in Ve && (i = Ve[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), w.each(["height", "width"], function(e, t) {
        w.cssHooks[t] = {
            get: function(e, n, r) {
                if (n) return !ze.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : se(e, Ue, function() {
                    return et(e, t, r)
                })
            },
            set: function(e, n, r) {
                var i, o = $e(e),
                    a = "border-box" === w.css(e, "boxSizing", !1, o),
                    s = r && Ze(e, t, r, a, o);
                return a && h.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)), s && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Ke(e, n, s)
            }
        }
    }), w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - se(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), w.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        w.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, "margin" !== e && (w.cssHooks[e + t].set = Ke)
    }), w.fn.extend({
        css: function(e, t) {
            return z(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (r = $e(e), i = t.length; a < i; a++) o[t[a]] = w.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? w.style(e, t, n) : w.css(e, t)
            }, e, t, arguments.length > 1)
        }
    });

    function tt(e, t, n, r, i) {
        return new tt.prototype.init(e, t, n, r, i)
    }
    w.Tween = tt, tt.prototype = {
        constructor: tt,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (w.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = tt.propHooks[this.prop];
            return e && e.get ? e.get(this) : tt.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = tt.propHooks[this.prop];
            return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : tt.propHooks._default.set(this), this
        }
    }, tt.prototype.init.prototype = tt.prototype, tt.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, w.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, w.fx = tt.prototype.init, w.fx.step = {};
    var nt, rt, it = /^(?:toggle|show|hide)$/,
        ot = /queueHooks$/;

    function at() {
        rt && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, w.fx.interval), w.fx.tick())
    }

    function st() {
        return e.setTimeout(function() {
            nt = void 0
        }), nt = Date.now()
    }

    function ut(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = oe[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function lt(e, t, n) {
        for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function ct(e, t, n) {
        var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
            p = this,
            d = {},
            h = e.style,
            g = e.nodeType && ae(e),
            y = J.get(e, "fxshow");
        n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
            a.unqueued || s()
        }), a.unqueued++, p.always(function() {
            p.always(function() {
                a.unqueued--, w.queue(e, "fx").length || a.empty.fire()
            })
        }));
        for (r in t)
            if (i = t[r], it.test(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                    if ("show" !== i || !y || void 0 === y[r]) continue;
                    g = !0
                }
                d[r] = y && y[r] || w.style(e, r)
            }
        if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) {
            f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = y && y.display) && (l = J.get(e, "display")), "none" === (c = w.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = w.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === w.css(e, "float") && (u || (p.done(function() {
                h.display = l
            }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
            })), u = !1;
            for (r in d) u || (y ? "hidden" in y && (g = y.hidden) : y = J.access(e, "fxshow", {
                display: l
            }), o && (y.hidden = !g), g && fe([e], !0), p.done(function() {
                g || fe([e]), J.remove(e, "fxshow");
                for (r in d) w.style(e, r, d[r])
            })), u = lt(g ? y[r] : 0, r, p), r in y || (y[r] = u.start, g && (u.end = u.start, u.start = 0))
        }
    }

    function ft(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (r = G(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = w.cssHooks[r]) && "expand" in a) {
                o = a.expand(o), delete e[r];
                for (n in o) n in e || (e[n] = o[n], t[n] = i)
            } else t[r] = i
    }

    function pt(e, t, n) {
        var r, i, o = 0,
            a = pt.prefilters.length,
            s = w.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (i) return !1;
                for (var t = nt || st(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r);
                return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
            },
            l = s.promise({
                elem: e,
                props: w.extend({}, t),
                opts: w.extend(!0, {
                    specialEasing: {},
                    easing: w.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: nt || st(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; n < r; n++) l.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
                }
            }),
            c = l.props;
        for (ft(c, l.opts.specialEasing); o < a; o++)
            if (r = pt.prefilters[o].call(l, e, c, l.opts)) return g(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
        return w.map(c, lt, l), g(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), w.fx.timer(w.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l
    }
    w.Animation = w.extend(pt, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return ue(n.elem, e, ie.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            g(e) ? (t = e, e = ["*"]) : e = e.match(M);
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], pt.tweeners[n] = pt.tweeners[n] || [], pt.tweeners[n].unshift(t)
        },
        prefilters: [ct],
        prefilter: function(e, t) {
            t ? pt.prefilters.unshift(e) : pt.prefilters.push(e)
        }
    }), w.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? w.extend({}, e) : {
            complete: n || !n && t || g(e) && e,
            duration: e,
            easing: n && t || t && !g(t) && t
        };
        return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue)
        }, r
    }, w.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(ae).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = w.isEmptyObject(e),
                o = w.speed(t, n, r),
                a = function() {
                    var t = pt(this, w.extend({}, e), o);
                    (i || J.get(this, "finish")) && t.stop(!0)
                };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, t, n) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                var t = !0,
                    i = null != e && e + "queueHooks",
                    o = w.timers,
                    a = J.get(this);
                if (i) a[i] && a[i].stop && r(a[i]);
                else
                    for (i in a) a[i] && a[i].stop && ot.test(i) && r(a[i]);
                for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                !t && n || w.dequeue(this, e)
            })
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"), this.each(function() {
                var t, n = J.get(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    o = w.timers,
                    a = r ? r.length : 0;
                for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }), w.each(["toggle", "show", "hide"], function(e, t) {
        var n = w.fn[t];
        w.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i)
        }
    }), w.each({
        slideDown: ut("show"),
        slideUp: ut("hide"),
        slideToggle: ut("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        w.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), w.timers = [], w.fx.tick = function() {
        var e, t = 0,
            n = w.timers;
        for (nt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || w.fx.stop(), nt = void 0
    }, w.fx.timer = function(e) {
        w.timers.push(e), w.fx.start()
    }, w.fx.interval = 13, w.fx.start = function() {
        rt || (rt = !0, at())
    }, w.fx.stop = function() {
        rt = null
    }, w.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, w.fn.delay = function(t, n) {
        return t = w.fx ? w.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, r) {
            var i = e.setTimeout(n, t);
            r.stop = function() {
                e.clearTimeout(i)
            }
        })
    },
        function() {
            var e = r.createElement("input"),
                t = r.createElement("select").appendChild(r.createElement("option"));
            e.type = "checkbox", h.checkOn = "" !== e.value, h.optSelected = t.selected, (e = r.createElement("input")).value = "t", e.type = "radio", h.radioValue = "t" === e.value
        }();
    var dt, ht = w.expr.attrHandle;
    w.fn.extend({
        attr: function(e, t) {
            return z(this, w.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                w.removeAttr(this, e)
            })
        }
    }), w.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!h.radioValue && "radio" === t && N(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0,
                i = t && t.match(M);
            if (i && 1 === e.nodeType)
                while (n = i[r++]) e.removeAttribute(n)
        }
    }), dt = {
        set: function(e, t, n) {
            return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, w.each(w.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = ht[t] || w.find.attr;
        ht[t] = function(e, t, r) {
            var i, o, a = t.toLowerCase();
            return r || (o = ht[a], ht[a] = i, i = null != n(e, t, r) ? a : null, ht[a] = o), i
        }
    });
    var gt = /^(?:input|select|textarea|button)$/i,
        yt = /^(?:a|area)$/i;
    w.fn.extend({
        prop: function(e, t) {
            return z(this, w.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[w.propFix[e] || e]
            })
        }
    }), w.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, i = w.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = w.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : gt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), h.optSelected || (w.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        w.propFix[this.toLowerCase()] = this
    });

    function vt(e) {
        return (e.match(M) || []).join(" ")
    }

    function mt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function xt(e) {
        return Array.isArray(e) ? e : "string" == typeof e ? e.match(M) || [] : []
    }
    w.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, a, s, u = 0;
            if (g(e)) return this.each(function(t) {
                w(this).addClass(e.call(this, t, mt(this)))
            });
            if ((t = xt(e)).length)
                while (n = this[u++])
                    if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                        a = 0;
                        while (o = t[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a, s, u = 0;
            if (g(e)) return this.each(function(t) {
                w(this).removeClass(e.call(this, t, mt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((t = xt(e)).length)
                while (n = this[u++])
                    if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                        a = 0;
                        while (o = t[a++])
                            while (r.indexOf(" " + o + " ") > -1) r = r.replace(" " + o + " ", " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e,
                r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function(n) {
                w(this).toggleClass(e.call(this, n, mt(this), t), t)
            }) : this.each(function() {
                var t, i, o, a;
                if (r) {
                    i = 0, o = w(this), a = xt(e);
                    while (t = a[i++]) o.hasClass(t) ? o.removeClass(t) : o.addClass(t)
                } else void 0 !== e && "boolean" !== n || ((t = mt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var bt = /\r/g;
    w.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0]; {
                if (arguments.length) return r = g(e), this.each(function(n) {
                    var i;
                    1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, function(e) {
                        return null == e ? "" : e + ""
                    })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                });
                if (i) return (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(bt, "") : null == n ? "" : n
            }
        }
    }), w.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = w.find.attr(e, "value");
                    return null != t ? t : vt(w.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
                            if (t = w(n).val(), a) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    var n, r, i = e.options,
                        o = w.makeArray(t),
                        a = i.length;
                    while (a--)((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), w.each(["radio", "checkbox"], function() {
        w.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1
            }
        }, h.checkOn || (w.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), h.focusin = "onfocusin" in e;
    var wt = /^(?:focusinfocus|focusoutblur)$/,
        Tt = function(e) {
            e.stopPropagation()
        };
    w.extend(w.event, {
        trigger: function(t, n, i, o) {
            var a, s, u, l, c, p, d, h, v = [i || r],
                m = f.call(t, "type") ? t.type : t,
                x = f.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = h = u = i = i || r, 3 !== i.nodeType && 8 !== i.nodeType && !wt.test(m + w.event.triggered) && (m.indexOf(".") > -1 && (m = (x = m.split(".")).shift(), x.sort()), c = m.indexOf(":") < 0 && "on" + m, t = t[w.expando] ? t : new w.Event(m, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = x.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : w.makeArray(n, [t]), d = w.event.special[m] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
                if (!o && !d.noBubble && !y(i)) {
                    for (l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode); s; s = s.parentNode) v.push(s), u = s;
                    u === (i.ownerDocument || r) && v.push(u.defaultView || u.parentWindow || e)
                }
                a = 0;
                while ((s = v[a++]) && !t.isPropagationStopped()) h = s, t.type = a > 1 ? l : d.bindType || m, (p = (J.get(s, "events") || {})[t.type] && J.get(s, "handle")) && p.apply(s, n), (p = c && s[c]) && p.apply && Y(s) && (t.result = p.apply(s, n), !1 === t.result && t.preventDefault());
                return t.type = m, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !Y(i) || c && g(i[m]) && !y(i) && ((u = i[c]) && (i[c] = null), w.event.triggered = m, t.isPropagationStopped() && h.addEventListener(m, Tt), i[m](), t.isPropagationStopped() && h.removeEventListener(m, Tt), w.event.triggered = void 0, u && (i[c] = u)), t.result
            }
        },
        simulate: function(e, t, n) {
            var r = w.extend(new w.Event, n, {
                type: e,
                isSimulated: !0
            });
            w.event.trigger(r, null, t)
        }
    }), w.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                w.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return w.event.trigger(e, t, n, !0)
        }
    }), h.focusin || w.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            w.event.simulate(t, e.target, w.event.fix(e))
        };
        w.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    i = J.access(r, t);
                i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    i = J.access(r, t) - 1;
                i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t))
            }
        }
    });
    var Ct = e.location,
        Et = Date.now(),
        kt = /\?/;
    w.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), n
    };
    var St = /\[\]$/,
        Dt = /\r?\n/g,
        Nt = /^(?:submit|button|image|reset|file)$/i,
        At = /^(?:input|select|textarea|keygen)/i;

    function jt(e, t, n, r) {
        var i;
        if (Array.isArray(t)) w.each(t, function(t, i) {
            n || St.test(e) ? r(e, i) : jt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== x(t)) r(e, t);
        else
            for (i in t) jt(e + "[" + i + "]", t[i], n, r)
    }
    w.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                var n = g(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) jt(n, e[n], t, i);
        return r.join("&")
    }, w.fn.extend({
        serialize: function() {
            return w.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = w.prop(this, "elements");
                return e ? w.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !w(this).is(":disabled") && At.test(this.nodeName) && !Nt.test(e) && (this.checked || !pe.test(e))
            }).map(function(e, t) {
                var n = w(this).val();
                return null == n ? null : Array.isArray(n) ? w.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Dt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Dt, "\r\n")
                }
            }).get()
        }
    });
    var qt = /%20/g,
        Lt = /#.*$/,
        Ht = /([?&])_=[^&]*/,
        Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Mt = /^(?:GET|HEAD)$/,
        Rt = /^\/\//,
        It = {},
        Wt = {},
        $t = "*/".concat("*"),
        Bt = r.createElement("a");
    Bt.href = Ct.href;

    function Ft(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(M) || [];
            if (g(n))
                while (r = o[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function _t(e, t, n, r) {
        var i = {},
            o = e === Wt;

        function a(s) {
            var u;
            return i[s] = !0, w.each(e[s] || [], function(e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1)
            }), u
        }
        return a(t.dataTypes[0]) || !i["*"] && a("*")
    }

    function zt(e, t) {
        var n, r, i = w.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && w.extend(!0, e, r), e
    }

    function Xt(e, t, n) {
        var r, i, o, a, s = e.contents,
            u = e.dataTypes;
        while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in s)
                if (s[i] && s[i].test(r)) {
                    u.unshift(i);
                    break
                }
        if (u[0] in n) o = u[0];
        else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                a || (a = i)
            }
            o = o || a
        }
        if (o) return o !== u[0] && u.unshift(o), n[o]
    }

    function Ut(e, t, n, r) {
        var i, o, a, s, u, l = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
        o = c.shift();
        while (o)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) {
                    if (!(a = l[u + " " + o] || l["* " + o]))
                        for (i in l)
                            if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                                break
                            }
                    if (!0 !== a)
                        if (a && e["throws"]) t = a(t);
                        else try {
                            t = a(t)
                        } catch (e) {
                            return {
                                state: "parsererror",
                                error: a ? e : "No conversion from " + u + " to " + o
                            }
                        }
                }
        return {
            state: "success",
            data: t
        }
    }
    w.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ct.href,
            type: "GET",
            isLocal: Pt.test(Ct.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": $t,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": w.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e)
        },
        ajaxPrefilter: Ft(It),
        ajaxTransport: Ft(Wt),
        ajax: function(t, n) {
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var i, o, a, s, u, l, c, f, p, d, h = w.ajaxSetup({}, n),
                g = h.context || h,
                y = h.context && (g.nodeType || g.jquery) ? w(g) : w.event,
                v = w.Deferred(),
                m = w.Callbacks("once memory"),
                x = h.statusCode || {},
                b = {},
                T = {},
                C = "canceled",
                E = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (c) {
                            if (!s) {
                                s = {};
                                while (t = Ot.exec(a)) s[t[1].toLowerCase()] = t[2]
                            }
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return c ? a : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, b[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == c && (h.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (c) E.always(e[E.status]);
                            else
                                for (t in e) x[t] = [x[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || C;
                        return i && i.abort(t), k(0, t), this
                    }
                };
            if (v.promise(E), h.url = ((t || h.url || Ct.href) + "").replace(Rt, Ct.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""], null == h.crossDomain) {
                l = r.createElement("a");
                try {
                    l.href = h.url, l.href = l.href, h.crossDomain = Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host
                } catch (e) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), _t(It, h, n, E), c) return E;
            (f = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Mt.test(h.type), o = h.url.replace(Lt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+")) : (d = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (kt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Ht, "$1"), d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d), h.url = o + d), h.ifModified && (w.lastModified[o] && E.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && E.setRequestHeader("Content-Type", h.contentType), E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]);
            for (p in h.headers) E.setRequestHeader(p, h.headers[p]);
            if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c)) return E.abort();
            if (C = "abort", m.add(h.complete), E.done(h.success), E.fail(h.error), i = _t(Wt, h, n, E)) {
                if (E.readyState = 1, f && y.trigger("ajaxSend", [E, h]), c) return E;
                h.async && h.timeout > 0 && (u = e.setTimeout(function() {
                    E.abort("timeout")
                }, h.timeout));
                try {
                    c = !1, i.send(b, k)
                } catch (e) {
                    if (c) throw e;
                    k(-1, e)
                }
            } else k(-1, "No Transport");

            function k(t, n, r, s) {
                var l, p, d, b, T, C = n;
                c || (c = !0, u && e.clearTimeout(u), i = void 0, a = s || "", E.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, r && (b = Xt(h, E, r)), b = Ut(h, b, E, l), l ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T), (T = E.getResponseHeader("etag")) && (w.etag[o] = T)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, p = b.data, l = !(d = b.error))) : (d = C, !t && C || (C = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (n || C) + "", l ? v.resolveWith(g, [p, C, E]) : v.rejectWith(g, [E, C, d]), E.statusCode(x), x = void 0, f && y.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]), m.fireWith(g, [E, C]), f && (y.trigger("ajaxComplete", [E, h]), --w.active || w.event.trigger("ajaxStop")))
            }
            return E
        },
        getJSON: function(e, t, n) {
            return w.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return w.get(e, void 0, t, "script")
        }
    }), w.each(["get", "post"], function(e, t) {
        w[t] = function(e, n, r, i) {
            return g(n) && (i = i || r, r = n, n = void 0), w.ajax(w.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, w.isPlainObject(e) && e))
        }
    }), w._evalUrl = function(e) {
        return w.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, w.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (g(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(e) {
            return g(e) ? this.each(function(t) {
                w(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = w(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = g(e);
            return this.each(function(n) {
                w(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                w(this).replaceWith(this.childNodes)
            }), this
        }
    }), w.expr.pseudos.hidden = function(e) {
        return !w.expr.pseudos.visible(e)
    }, w.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, w.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var Vt = {
            0: 200,
            1223: 204
        },
        Gt = w.ajaxSettings.xhr();
    h.cors = !!Gt && "withCredentials" in Gt, h.ajax = Gt = !!Gt, w.ajaxTransport(function(t) {
        var n, r;
        if (h.cors || Gt && !t.crossDomain) return {
            send: function(i, o) {
                var a, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (a in t.xhrFields) s[a] = t.xhrFields[a];
                t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for (a in i) s.setRequestHeader(a, i[a]);
                n = function(e) {
                    return function() {
                        n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Vt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                            binary: s.response
                        } : {
                            text: s.responseText
                        }, s.getAllResponseHeaders()))
                    }
                }, s.onload = n(), r = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                    4 === s.readyState && e.setTimeout(function() {
                        n && r()
                    })
                }, n = n("abort");
                try {
                    s.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (n) throw e
                }
            },
            abort: function() {
                n && n()
            }
        }
    }), w.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), w.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return w.globalEval(e), e
            }
        }
    }), w.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), w.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(i, o) {
                    t = w("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                    }), r.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var Yt = [],
        Qt = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Yt.pop() || w.expando + "_" + Et++;
            return this[e] = !0, e
        }
    }), w.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, a, s = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Qt, "$1" + i) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return a || w.error(i + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
            a = arguments
        }, r.always(function() {
            void 0 === o ? w(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Yt.push(i)), a && g(o) && o(a[0]), a = o = void 0
        }), "script"
    }), h.createHTMLDocument = function() {
        var e = r.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), w.parseHTML = function(e, t, n) {
        if ("string" != typeof e) return [];
        "boolean" == typeof t && (n = t, t = !1);
        var i, o, a;
        return t || (h.createHTMLDocument ? ((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href, t.head.appendChild(i)) : t = r), o = A.exec(e), a = !n && [], o ? [t.createElement(o[1])] : (o = xe([e], t, a), a && a.length && w(a).remove(), w.merge([], o.childNodes))
    }, w.fn.load = function(e, t, n) {
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return s > -1 && (r = vt(e.slice(s)), e = e.slice(0, s)), g(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && w.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        w.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), w.expr.pseudos.animated = function(e) {
        return w.grep(w.timers, function(t) {
            return e === t.elem
        }).length
    }, w.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l, c = w.css(e, "position"),
                f = w(e),
                p = {};
            "static" === c && (e.style.position = "relative"), s = f.offset(), o = w.css(e, "top"), u = w.css(e, "left"), (l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1) ? (a = (r = f.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), g(t) && (t = t.call(e, n, w.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : f.css(p)
        }
    }, w.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                w.offset.setOffset(this, e, t)
            });
            var t, n, r = this[0];
            if (r) return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            }
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position")) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0), i.left += w.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - w.css(r, "marginTop", !0),
                    left: t.left - i.left - w.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent;
                while (e && "static" === w.css(e, "position")) e = e.offsetParent;
                return e || be
            })
        }
    }), w.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        w.fn[e] = function(r) {
            return z(this, function(e, r, i) {
                var o;
                if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
                o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
            }, e, r, arguments.length)
        }
    }), w.each(["top", "left"], function(e, t) {
        w.cssHooks[t] = _e(h.pixelPosition, function(e, n) {
            if (n) return n = Fe(e, t), We.test(n) ? w(e).position()[t] + "px" : n
        })
    }), w.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        w.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            w.fn[r] = function(i, o) {
                var a = arguments.length && (n || "boolean" != typeof i),
                    s = n || (!0 === i || !0 === o ? "margin" : "border");
                return z(this, function(t, n, i) {
                    var o;
                    return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s)
                }, t, a ? i : void 0, a)
            }
        })
    }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        w.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), w.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), w.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), w.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return r = o.call(arguments, 2), i = function() {
            return e.apply(t || this, r.concat(o.call(arguments)))
        }, i.guid = e.guid = e.guid || w.guid++, i
    }, w.holdReady = function(e) {
        e ? w.readyWait++ : w.ready(!0)
    }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = N, w.isFunction = g, w.isWindow = y, w.camelCase = G, w.type = x, w.now = Date.now, w.isNumeric = function(e) {
        var t = w.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return w
    });
    var Jt = e.jQuery,
        Kt = e.$;
    return w.noConflict = function(t) {
        return e.$ === w && (e.$ = Kt), t && e.jQuery === w && (e.jQuery = Jt), w
    }, t || (e.jQuery = e.$ = w), w
});
(function(e, t) {
    'object' == typeof exports && 'undefined' != typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define(t) : e.Popper = t()
})(this, function() {
    'use strict';

    function e(e) {
        return e && '[object Function]' === {}.toString.call(e)
    }

    function t(e, t) {
        if (1 !== e.nodeType) return [];
        var o = getComputedStyle(e, null);
        return t ? o[t] : o
    }

    function o(e) {
        return 'HTML' === e.nodeName ? e : e.parentNode || e.host
    }

    function n(e) {
        if (!e) return document.body;
        switch (e.nodeName) {
            case 'HTML':
            case 'BODY':
                return e.ownerDocument.body;
            case '#document':
                return e.body;
        }
        var i = t(e),
            r = i.overflow,
            p = i.overflowX,
            s = i.overflowY;
        return /(auto|scroll)/.test(r + s + p) ? e : n(o(e))
    }

    function r(e) {
        var o = e && e.offsetParent,
            i = o && o.nodeName;
        return i && 'BODY' !== i && 'HTML' !== i ? -1 !== ['TD', 'TABLE'].indexOf(o.nodeName) && 'static' === t(o, 'position') ? r(o) : o : e ? e.ownerDocument.documentElement : document.documentElement
    }

    function p(e) {
        var t = e.nodeName;
        return 'BODY' !== t && ('HTML' === t || r(e.firstElementChild) === e)
    }

    function s(e) {
        return null === e.parentNode ? e : s(e.parentNode)
    }

    function d(e, t) {
        if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement;
        var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            i = o ? e : t,
            n = o ? t : e,
            a = document.createRange();
        a.setStart(i, 0), a.setEnd(n, 0);
        var l = a.commonAncestorContainer;
        if (e !== l && t !== l || i.contains(n)) return p(l) ? l : r(l);
        var f = s(e);
        return f.host ? d(f.host, t) : d(e, s(t).host)
    }

    function a(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top',
            o = 'top' === t ? 'scrollTop' : 'scrollLeft',
            i = e.nodeName;
        if ('BODY' === i || 'HTML' === i) {
            var n = e.ownerDocument.documentElement,
                r = e.ownerDocument.scrollingElement || n;
            return r[o]
        }
        return e[o]
    }

    function l(e, t) {
        var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            i = a(t, 'top'),
            n = a(t, 'left'),
            r = o ? -1 : 1;
        return e.top += i * r, e.bottom += i * r, e.left += n * r, e.right += n * r, e
    }

    function f(e, t) {
        var o = 'x' === t ? 'Left' : 'Top',
            i = 'Left' == o ? 'Right' : 'Bottom';
        return parseFloat(e['border' + o + 'Width'], 10) + parseFloat(e['border' + i + 'Width'], 10)
    }

    function m(e, t, o, i) {
        return J(t['offset' + e], t['scroll' + e], o['client' + e], o['offset' + e], o['scroll' + e], ie() ? o['offset' + e] + i['margin' + ('Height' === e ? 'Top' : 'Left')] + i['margin' + ('Height' === e ? 'Bottom' : 'Right')] : 0)
    }

    function h() {
        var e = document.body,
            t = document.documentElement,
            o = ie() && getComputedStyle(t);
        return {
            height: m('Height', e, t, o),
            width: m('Width', e, t, o)
        }
    }

    function c(e) {
        return se({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        })
    }

    function g(e) {
        var o = {};
        if (ie()) try {
            o = e.getBoundingClientRect();
            var i = a(e, 'top'),
                n = a(e, 'left');
            o.top += i, o.left += n, o.bottom += i, o.right += n
        } catch (e) {} else o = e.getBoundingClientRect();
        var r = {
                left: o.left,
                top: o.top,
                width: o.right - o.left,
                height: o.bottom - o.top
            },
            p = 'HTML' === e.nodeName ? h() : {},
            s = p.width || e.clientWidth || r.right - r.left,
            d = p.height || e.clientHeight || r.bottom - r.top,
            l = e.offsetWidth - s,
            m = e.offsetHeight - d;
        if (l || m) {
            var g = t(e);
            l -= f(g, 'x'), m -= f(g, 'y'), r.width -= l, r.height -= m
        }
        return c(r)
    }

    function u(e, o) {
        var i = ie(),
            r = 'HTML' === o.nodeName,
            p = g(e),
            s = g(o),
            d = n(e),
            a = t(o),
            f = parseFloat(a.borderTopWidth, 10),
            m = parseFloat(a.borderLeftWidth, 10),
            h = c({
                top: p.top - s.top - f,
                left: p.left - s.left - m,
                width: p.width,
                height: p.height
            });
        if (h.marginTop = 0, h.marginLeft = 0, !i && r) {
            var u = parseFloat(a.marginTop, 10),
                b = parseFloat(a.marginLeft, 10);
            h.top -= f - u, h.bottom -= f - u, h.left -= m - b, h.right -= m - b, h.marginTop = u, h.marginLeft = b
        }
        return (i ? o.contains(d) : o === d && 'BODY' !== d.nodeName) && (h = l(h, o)), h
    }

    function b(e) {
        var t = e.ownerDocument.documentElement,
            o = u(e, t),
            i = J(t.clientWidth, window.innerWidth || 0),
            n = J(t.clientHeight, window.innerHeight || 0),
            r = a(t),
            p = a(t, 'left'),
            s = {
                top: r - o.top + o.marginTop,
                left: p - o.left + o.marginLeft,
                width: i,
                height: n
            };
        return c(s)
    }

    function w(e) {
        var i = e.nodeName;
        return 'BODY' === i || 'HTML' === i ? !1 : 'fixed' === t(e, 'position') || w(o(e))
    }

    function y(e, t, i, r) {
        var p = {
                top: 0,
                left: 0
            },
            s = d(e, t);
        if ('viewport' === r) p = b(s);
        else {
            var a;
            'scrollParent' === r ? (a = n(o(t)), 'BODY' === a.nodeName && (a = e.ownerDocument.documentElement)) : 'window' === r ? a = e.ownerDocument.documentElement : a = r;
            var l = u(a, s);
            if ('HTML' === a.nodeName && !w(s)) {
                var f = h(),
                    m = f.height,
                    c = f.width;
                p.top += l.top - l.marginTop, p.bottom = m + l.top, p.left += l.left - l.marginLeft, p.right = c + l.left
            } else p = l
        }
        return p.left += i, p.top += i, p.right -= i, p.bottom -= i, p
    }

    function E(e) {
        var t = e.width,
            o = e.height;
        return t * o
    }

    function v(e, t, o, i, n) {
        var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf('auto')) return e;
        var p = y(o, i, r, n),
            s = {
                top: {
                    width: p.width,
                    height: t.top - p.top
                },
                right: {
                    width: p.right - t.right,
                    height: p.height
                },
                bottom: {
                    width: p.width,
                    height: p.bottom - t.bottom
                },
                left: {
                    width: t.left - p.left,
                    height: p.height
                }
            },
            d = Object.keys(s).map(function(e) {
                return se({
                    key: e
                }, s[e], {
                    area: E(s[e])
                })
            }).sort(function(e, t) {
                return t.area - e.area
            }),
            a = d.filter(function(e) {
                var t = e.width,
                    i = e.height;
                return t >= o.clientWidth && i >= o.clientHeight
            }),
            l = 0 < a.length ? a[0].key : d[0].key,
            f = e.split('-')[1];
        return l + (f ? '-' + f : '')
    }

    function O(e, t, o) {
        var i = d(t, o);
        return u(o, i)
    }

    function L(e) {
        var t = getComputedStyle(e),
            o = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
            i = parseFloat(t.marginLeft) + parseFloat(t.marginRight),
            n = {
                width: e.offsetWidth + i,
                height: e.offsetHeight + o
            };
        return n
    }

    function x(e) {
        var t = {
            left: 'right',
            right: 'left',
            bottom: 'top',
            top: 'bottom'
        };
        return e.replace(/left|right|bottom|top/g, function(e) {
            return t[e]
        })
    }

    function S(e, t, o) {
        o = o.split('-')[0];
        var i = L(e),
            n = {
                width: i.width,
                height: i.height
            },
            r = -1 !== ['right', 'left'].indexOf(o),
            p = r ? 'top' : 'left',
            s = r ? 'left' : 'top',
            d = r ? 'height' : 'width',
            a = r ? 'width' : 'height';
        return n[p] = t[p] + t[d] / 2 - i[d] / 2, n[s] = o === s ? t[s] - i[a] : t[x(s)], n
    }

    function T(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }

    function D(e, t, o) {
        if (Array.prototype.findIndex) return e.findIndex(function(e) {
            return e[t] === o
        });
        var i = T(e, function(e) {
            return e[t] === o
        });
        return e.indexOf(i)
    }

    function C(t, o, i) {
        var n = void 0 === i ? t : t.slice(0, D(t, 'name', i));
        return n.forEach(function(t) {
            t['function'] && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
            var i = t['function'] || t.fn;
            t.enabled && e(i) && (o.offsets.popper = c(o.offsets.popper), o.offsets.reference = c(o.offsets.reference), o = i(o, t))
        }), o
    }

    function N() {
        if (!this.state.isDestroyed) {
            var e = {
                instance: this,
                styles: {},
                arrowStyles: {},
                attributes: {},
                flipped: !1,
                offsets: {}
            };
            e.offsets.reference = O(this.state, this.popper, this.reference), e.placement = v(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.offsets.popper = S(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = 'absolute', e = C(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
        }
    }

    function k(e, t) {
        return e.some(function(e) {
            var o = e.name,
                i = e.enabled;
            return i && o === t
        })
    }

    function W(e) {
        for (var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length - 1; n++) {
            var i = t[n],
                r = i ? '' + i + o : e;
            if ('undefined' != typeof document.body.style[r]) return r
        }
        return null
    }

    function P() {
        return this.state.isDestroyed = !0, k(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'), this.popper.style.left = '', this.popper.style.position = '', this.popper.style.top = '', this.popper.style[W('transform')] = ''), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
    }

    function B(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window
    }

    function H(e, t, o, i) {
        var r = 'BODY' === e.nodeName,
            p = r ? e.ownerDocument.defaultView : e;
        p.addEventListener(t, o, {
            passive: !0
        }), r || H(n(p.parentNode), t, o, i), i.push(p)
    }

    function A(e, t, o, i) {
        o.updateBound = i, B(e).addEventListener('resize', o.updateBound, {
            passive: !0
        });
        var r = n(e);
        return H(r, 'scroll', o.updateBound, o.scrollParents), o.scrollElement = r, o.eventsEnabled = !0, o
    }

    function I() {
        this.state.eventsEnabled || (this.state = A(this.reference, this.options, this.state, this.scheduleUpdate))
    }

    function M(e, t) {
        return B(e).removeEventListener('resize', t.updateBound), t.scrollParents.forEach(function(e) {
            e.removeEventListener('scroll', t.updateBound)
        }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t
    }

    function R() {
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = M(this.reference, this.state))
    }

    function U(e) {
        return '' !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }

    function Y(e, t) {
        Object.keys(t).forEach(function(o) {
            var i = ''; - 1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(o) && U(t[o]) && (i = 'px'), e.style[o] = t[o] + i
        })
    }

    function j(e, t) {
        Object.keys(t).forEach(function(o) {
            var i = t[o];
            !1 === i ? e.removeAttribute(o) : e.setAttribute(o, t[o])
        })
    }

    function F(e, t, o) {
        var i = T(e, function(e) {
                var o = e.name;
                return o === t
            }),
            n = !!i && e.some(function(e) {
                return e.name === o && e.enabled && e.order < i.order
            });
        if (!n) {
            var r = '`' + t + '`';
            console.warn('`' + o + '`' + ' modifier is required by ' + r + ' modifier in order to work, be sure to include it before ' + r + '!')
        }
        return n
    }

    function K(e) {
        return 'end' === e ? 'start' : 'start' === e ? 'end' : e
    }

    function q(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            o = ae.indexOf(e),
            i = ae.slice(o + 1).concat(ae.slice(0, o));
        return t ? i.reverse() : i
    }

    function V(e, t, o, i) {
        var n = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
            r = +n[1],
            p = n[2];
        if (!r) return e;
        if (0 === p.indexOf('%')) {
            var s;
            switch (p) {
                case '%p':
                    s = o;
                    break;
                case '%':
                case '%r':
                default:
                    s = i;
            }
            var d = c(s);
            return d[t] / 100 * r
        }
        if ('vh' === p || 'vw' === p) {
            var a;
            return a = 'vh' === p ? J(document.documentElement.clientHeight, window.innerHeight || 0) : J(document.documentElement.clientWidth, window.innerWidth || 0), a / 100 * r
        }
        return r
    }

    function z(e, t, o, i) {
        var n = [0, 0],
            r = -1 !== ['right', 'left'].indexOf(i),
            p = e.split(/(\+|\-)/).map(function(e) {
                return e.trim()
            }),
            s = p.indexOf(T(p, function(e) {
                return -1 !== e.search(/,|\s/)
            }));
        p[s] && -1 === p[s].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
        var d = /\s*,\s*|\s+/,
            a = -1 === s ? [p] : [p.slice(0, s).concat([p[s].split(d)[0]]), [p[s].split(d)[1]].concat(p.slice(s + 1))];
        return a = a.map(function(e, i) {
            var n = (1 === i ? !r : r) ? 'height' : 'width',
                p = !1;
            return e.reduce(function(e, t) {
                return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t) ? (e[e.length - 1] = t, p = !0, e) : p ? (e[e.length - 1] += t, p = !1, e) : e.concat(t)
            }, []).map(function(e) {
                return V(e, n, t, o)
            })
        }), a.forEach(function(e, t) {
            e.forEach(function(o, i) {
                U(o) && (n[t] += o * ('-' === e[i - 1] ? -1 : 1))
            })
        }), n
    }

    function G(e, t) {
        var o, i = t.offset,
            n = e.placement,
            r = e.offsets,
            p = r.popper,
            s = r.reference,
            d = n.split('-')[0];
        return o = U(+i) ? [+i, 0] : z(i, p, s, d), 'left' === d ? (p.top += o[0], p.left -= o[1]) : 'right' === d ? (p.top += o[0], p.left += o[1]) : 'top' === d ? (p.left += o[0], p.top -= o[1]) : 'bottom' === d && (p.left += o[0], p.top += o[1]), e.popper = p, e
    }
    for (var _ = Math.min, X = Math.floor, J = Math.max, Q = 'undefined' != typeof window && 'undefined' != typeof document, Z = ['Edge', 'Trident', 'Firefox'], $ = 0, ee = 0; ee < Z.length; ee += 1)
        if (Q && 0 <= navigator.userAgent.indexOf(Z[ee])) {
            $ = 1;
            break
        }
    var i, te = Q && window.Promise,
        oe = te ? function(e) {
            var t = !1;
            return function() {
                t || (t = !0, window.Promise.resolve().then(function() {
                    t = !1, e()
                }))
            }
        } : function(e) {
            var t = !1;
            return function() {
                t || (t = !0, setTimeout(function() {
                    t = !1, e()
                }, $))
            }
        },
        ie = function() {
            return void 0 == i && (i = -1 !== navigator.appVersion.indexOf('MSIE 10')), i
        },
        ne = function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        },
        re = function() {
            function e(e, t) {
                for (var o, n = 0; n < t.length; n++) o = t[n], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
            return function(t, o, i) {
                return o && e(t.prototype, o), i && e(t, i), t
            }
        }(),
        pe = function(e, t, o) {
            return t in e ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = o, e
        },
        se = Object.assign || function(e) {
            for (var t, o = 1; o < arguments.length; o++)
                for (var i in t = arguments[o], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        },
        de = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'],
        ae = de.slice(3),
        le = {
            FLIP: 'flip',
            CLOCKWISE: 'clockwise',
            COUNTERCLOCKWISE: 'counterclockwise'
        },
        fe = function() {
            function t(o, i) {
                var n = this,
                    r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                ne(this, t), this.scheduleUpdate = function() {
                    return requestAnimationFrame(n.update)
                }, this.update = oe(this.update.bind(this)), this.options = se({}, t.Defaults, r), this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                }, this.reference = o && o.jquery ? o[0] : o, this.popper = i && i.jquery ? i[0] : i, this.options.modifiers = {}, Object.keys(se({}, t.Defaults.modifiers, r.modifiers)).forEach(function(e) {
                    n.options.modifiers[e] = se({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {})
                }), this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
                    return se({
                        name: e
                    }, n.options.modifiers[e])
                }).sort(function(e, t) {
                    return e.order - t.order
                }), this.modifiers.forEach(function(t) {
                    t.enabled && e(t.onLoad) && t.onLoad(n.reference, n.popper, n.options, t, n.state)
                }), this.update();
                var p = this.options.eventsEnabled;
                p && this.enableEventListeners(), this.state.eventsEnabled = p
            }
            return re(t, [{
                key: 'update',
                value: function() {
                    return N.call(this)
                }
            }, {
                key: 'destroy',
                value: function() {
                    return P.call(this)
                }
            }, {
                key: 'enableEventListeners',
                value: function() {
                    return I.call(this)
                }
            }, {
                key: 'disableEventListeners',
                value: function() {
                    return R.call(this)
                }
            }]), t
        }();
    return fe.Utils = ('undefined' == typeof window ? global : window).PopperUtils, fe.placements = de, fe.Defaults = {
        placement: 'bottom',
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function(e) {
                    var t = e.placement,
                        o = t.split('-')[0],
                        i = t.split('-')[1];
                    if (i) {
                        var n = e.offsets,
                            r = n.reference,
                            p = n.popper,
                            s = -1 !== ['bottom', 'top'].indexOf(o),
                            d = s ? 'left' : 'top',
                            a = s ? 'width' : 'height',
                            l = {
                                start: pe({}, d, r[d]),
                                end: pe({}, d, r[d] + r[a] - p[a])
                            };
                        e.offsets.popper = se({}, p, l[i])
                    }
                    return e
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: G,
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(e, t) {
                    var o = t.boundariesElement || r(e.instance.popper);
                    e.instance.reference === o && (o = r(o));
                    var i = y(e.instance.popper, e.instance.reference, t.padding, o);
                    t.boundaries = i;
                    var n = t.priority,
                        p = e.offsets.popper,
                        s = {
                            primary: function(e) {
                                var o = p[e];
                                return p[e] < i[e] && !t.escapeWithReference && (o = J(p[e], i[e])), pe({}, e, o)
                            },
                            secondary: function(e) {
                                var o = 'right' === e ? 'left' : 'top',
                                    n = p[o];
                                return p[e] > i[e] && !t.escapeWithReference && (n = _(p[o], i[e] - ('right' === e ? p.width : p.height))), pe({}, o, n)
                            }
                        };
                    return n.forEach(function(e) {
                        var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary';
                        p = se({}, p, s[t](e))
                    }), e.offsets.popper = p, e
                },
                priority: ['left', 'right', 'top', 'bottom'],
                padding: 5,
                boundariesElement: 'scrollParent'
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(e) {
                    var t = e.offsets,
                        o = t.popper,
                        i = t.reference,
                        n = e.placement.split('-')[0],
                        r = X,
                        p = -1 !== ['top', 'bottom'].indexOf(n),
                        s = p ? 'right' : 'bottom',
                        d = p ? 'left' : 'top',
                        a = p ? 'width' : 'height';
                    return o[s] < r(i[d]) && (e.offsets.popper[d] = r(i[d]) - o[a]), o[d] > r(i[s]) && (e.offsets.popper[d] = r(i[s])), e
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function(e, o) {
                    var i;
                    if (!F(e.instance.modifiers, 'arrow', 'keepTogether')) return e;
                    var n = o.element;
                    if ('string' == typeof n) {
                        if (n = e.instance.popper.querySelector(n), !n) return e;
                    } else if (!e.instance.popper.contains(n)) return console.warn('WARNING: `arrow.element` must be child of its popper element!'), e;
                    var r = e.placement.split('-')[0],
                        p = e.offsets,
                        s = p.popper,
                        d = p.reference,
                        a = -1 !== ['left', 'right'].indexOf(r),
                        l = a ? 'height' : 'width',
                        f = a ? 'Top' : 'Left',
                        m = f.toLowerCase(),
                        h = a ? 'left' : 'top',
                        g = a ? 'bottom' : 'right',
                        u = L(n)[l];
                    d[g] - u < s[m] && (e.offsets.popper[m] -= s[m] - (d[g] - u)), d[m] + u > s[g] && (e.offsets.popper[m] += d[m] + u - s[g]), e.offsets.popper = c(e.offsets.popper);
                    var b = d[m] + d[l] / 2 - u / 2,
                        w = t(e.instance.popper),
                        y = parseFloat(w['margin' + f], 10),
                        E = parseFloat(w['border' + f + 'Width'], 10),
                        v = b - e.offsets.popper[m] - y - E;
                    return v = J(_(s[l] - u, v), 0), e.arrowElement = n, e.offsets.arrow = (i = {}, pe(i, m, Math.round(v)), pe(i, h, ''), i), e
                },
                element: '[x-arrow]'
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(e, t) {
                    if (k(e.instance.modifiers, 'inner')) return e;
                    if (e.flipped && e.placement === e.originalPlacement) return e;
                    var o = y(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement),
                        i = e.placement.split('-')[0],
                        n = x(i),
                        r = e.placement.split('-')[1] || '',
                        p = [];
                    switch (t.behavior) {
                        case le.FLIP:
                            p = [i, n];
                            break;
                        case le.CLOCKWISE:
                            p = q(i);
                            break;
                        case le.COUNTERCLOCKWISE:
                            p = q(i, !0);
                            break;
                        default:
                            p = t.behavior;
                    }
                    return p.forEach(function(s, d) {
                        if (i !== s || p.length === d + 1) return e;
                        i = e.placement.split('-')[0], n = x(i);
                        var a = e.offsets.popper,
                            l = e.offsets.reference,
                            f = X,
                            m = 'left' === i && f(a.right) > f(l.left) || 'right' === i && f(a.left) < f(l.right) || 'top' === i && f(a.bottom) > f(l.top) || 'bottom' === i && f(a.top) < f(l.bottom),
                            h = f(a.left) < f(o.left),
                            c = f(a.right) > f(o.right),
                            g = f(a.top) < f(o.top),
                            u = f(a.bottom) > f(o.bottom),
                            b = 'left' === i && h || 'right' === i && c || 'top' === i && g || 'bottom' === i && u,
                            w = -1 !== ['top', 'bottom'].indexOf(i),
                            y = !!t.flipVariations && (w && 'start' === r && h || w && 'end' === r && c || !w && 'start' === r && g || !w && 'end' === r && u);
                        (m || b || y) && (e.flipped = !0, (m || b) && (i = p[d + 1]), y && (r = K(r)), e.placement = i + (r ? '-' + r : ''), e.offsets.popper = se({}, e.offsets.popper, S(e.instance.popper, e.offsets.reference, e.placement)), e = C(e.instance.modifiers, e, 'flip'))
                    }), e
                },
                behavior: 'flip',
                padding: 5,
                boundariesElement: 'viewport'
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function(e) {
                    var t = e.placement,
                        o = t.split('-')[0],
                        i = e.offsets,
                        n = i.popper,
                        r = i.reference,
                        p = -1 !== ['left', 'right'].indexOf(o),
                        s = -1 === ['top', 'left'].indexOf(o);
                    return n[p ? 'left' : 'top'] = r[o] - (s ? n[p ? 'width' : 'height'] : 0), e.placement = x(t), e.offsets.popper = c(n), e
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(e) {
                    if (!F(e.instance.modifiers, 'hide', 'preventOverflow')) return e;
                    var t = e.offsets.reference,
                        o = T(e.instance.modifiers, function(e) {
                            return 'preventOverflow' === e.name
                        }).boundaries;
                    if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) {
                        if (!0 === e.hide) return e;
                        e.hide = !0, e.attributes['x-out-of-boundaries'] = ''
                    } else {
                        if (!1 === e.hide) return e;
                        e.hide = !1, e.attributes['x-out-of-boundaries'] = !1
                    }
                    return e
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(e, t) {
                    var o = t.x,
                        i = t.y,
                        n = e.offsets.popper,
                        p = T(e.instance.modifiers, function(e) {
                            return 'applyStyle' === e.name
                        }).gpuAcceleration;
                    void 0 !== p && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
                    var s, d, a = void 0 === p ? t.gpuAcceleration : p,
                        l = r(e.instance.popper),
                        f = g(l),
                        m = {
                            position: n.position
                        },
                        h = {
                            left: X(n.left),
                            top: X(n.top),
                            bottom: X(n.bottom),
                            right: X(n.right)
                        },
                        c = 'bottom' === o ? 'top' : 'bottom',
                        u = 'right' === i ? 'left' : 'right',
                        b = W('transform');
                    if (d = 'bottom' == c ? -f.height + h.bottom : h.top, s = 'right' == u ? -f.width + h.right : h.left, a && b) m[b] = 'translate3d(' + s + 'px, ' + d + 'px, 0)', m[c] = 0, m[u] = 0, m.willChange = 'transform';
                    else {
                        var w = 'bottom' == c ? -1 : 1,
                            y = 'right' == u ? -1 : 1;
                        m[c] = d * w, m[u] = s * y, m.willChange = c + ', ' + u
                    }
                    var E = {
                        "x-placement": e.placement
                    };
                    return e.attributes = se({}, E, e.attributes), e.styles = se({}, m, e.styles), e.arrowStyles = se({}, e.offsets.arrow, e.arrowStyles), e
                },
                gpuAcceleration: !0,
                x: 'bottom',
                y: 'right'
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(e) {
                    return Y(e.instance.popper, e.styles), j(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && Y(e.arrowElement, e.arrowStyles), e
                },
                onLoad: function(e, t, o, i, n) {
                    var r = O(n, t, e),
                        p = v(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding);
                    return t.setAttribute('x-placement', p), Y(t, {
                        position: 'absolute'
                    }), o
                },
                gpuAcceleration: void 0
            }
        }
    }, fe
});
! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e(t.bootstrap = {}, t.jQuery, t.Popper)
}(this, function(t, e, c) {
    "use strict";

    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function o(t, e, n) {
        return e && i(t.prototype, e), n && i(t, n), t
    }

    function h(r) {
        for (var t = 1; t < arguments.length; t++) {
            var s = null != arguments[t] ? arguments[t] : {},
                e = Object.keys(s);
            "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(s).filter(function(t) {
                return Object.getOwnPropertyDescriptor(s, t).enumerable
            }))), e.forEach(function(t) {
                var e, n, i;
                e = r, i = s[n = t], n in e ? Object.defineProperty(e, n, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = i
            })
        }
        return r
    }
    e = e && e.hasOwnProperty("default") ? e.default : e, c = c && c.hasOwnProperty("default") ? c.default : c;
    var r, n, s, a, l, u, f, d, _, g, m, p, v, E, y, T, C, I, A, D, b, S, w, N, O, k, P, L, j, R, H, W, M, x, U, K, F, V, Q, B, Y, G, q, z, X, J, Z, $, tt, et, nt, it, rt, st, ot, at, lt, ht, ct, ut, ft, dt, _t, gt, mt, pt, vt, Et, yt, Tt, Ct, It, At, Dt, bt, St, wt, Nt, Ot, kt, Pt, Lt, jt, Rt, Ht, Wt, Mt, xt, Ut, Kt, Ft, Vt, Qt, Bt, Yt, Gt, qt, zt, Xt, Jt, Zt, $t, te, ee, ne, ie, re, se, oe, ae, le, he, ce, ue, fe, de, _e, ge, me, pe, ve, Ee, ye, Te, Ce, Ie, Ae, De, be, Se, we, Ne, Oe, ke, Pe, Le, je, Re, He, We, Me, xe, Ue, Ke, Fe, Ve, Qe, Be, Ye, Ge, qe, ze, Xe, Je, Ze, $e, tn, en, nn, rn, sn, on, an, ln, hn, cn, un, fn, dn, _n, gn, mn, pn, vn, En, yn, Tn, Cn = function(i) {
            var e = "transitionend";

            function t(t) {
                var e = this,
                    n = !1;
                return i(this).one(l.TRANSITION_END, function() {
                    n = !0
                }), setTimeout(function() {
                    n || l.triggerTransitionEnd(e)
                }, t), this
            }
            var l = {
                TRANSITION_END: "bsTransitionEnd",
                getUID: function(t) {
                    for (; t += ~~(1e6 * Math.random()), document.getElementById(t););
                    return t
                },
                getSelectorFromElement: function(t) {
                    var e = t.getAttribute("data-target");
                    e && "#" !== e || (e = t.getAttribute("href") || "");
                    try {
                        return 0 < i(document).find(e).length ? e : null
                    } catch (t) {
                        return null
                    }
                },
                getTransitionDurationFromElement: function(t) {
                    if (!t) return 0;
                    var e = i(t).css("transition-duration");
                    return parseFloat(e) ? (e = e.split(",")[0], 1e3 * parseFloat(e)) : 0
                },
                reflow: function(t) {
                    return t.offsetHeight
                },
                triggerTransitionEnd: function(t) {
                    i(t).trigger(e)
                },
                supportsTransitionEnd: function() {
                    return Boolean(e)
                },
                isElement: function(t) {
                    return (t[0] || t).nodeType
                },
                typeCheckConfig: function(t, e, n) {
                    for (var i in n)
                        if (Object.prototype.hasOwnProperty.call(n, i)) {
                            var r = n[i],
                                s = e[i],
                                o = s && l.isElement(s) ? "element" : (a = s, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
                            if (!new RegExp(r).test(o)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + o + '" but expected type "' + r + '".')
                        }
                    var a
                }
            };
            return i.fn.emulateTransitionEnd = t, i.event.special[l.TRANSITION_END] = {
                bindType: e,
                delegateType: e,
                handle: function(t) {
                    if (i(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
                }
            }, l
        }(e),
        In = (n = "alert", a = "." + (s = "bs.alert"), l = (r = e).fn[n], u = {
            CLOSE: "close" + a,
            CLOSED: "closed" + a,
            CLICK_DATA_API: "click" + a + ".data-api"
        }, f = "alert", d = "fade", _ = "show", g = function() {
            function i(t) {
                this._element = t
            }
            var t = i.prototype;
            return t.close = function(t) {
                t = t || this._element;
                var e = this._getRootElement(t);
                this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
            }, t.dispose = function() {
                r.removeData(this._element, s), this._element = null
            }, t._getRootElement = function(t) {
                var e = Cn.getSelectorFromElement(t),
                    n = !1;
                return e && (n = r(e)[0]), n || (n = r(t).closest("." + f)[0]), n
            }, t._triggerCloseEvent = function(t) {
                var e = r.Event(u.CLOSE);
                return r(t).trigger(e), e
            }, t._removeElement = function(e) {
                var n = this;
                if (r(e).removeClass(_), r(e).hasClass(d)) {
                    var t = Cn.getTransitionDurationFromElement(e);
                    r(e).one(Cn.TRANSITION_END, function(t) {
                        return n._destroyElement(e, t)
                    }).emulateTransitionEnd(t)
                } else this._destroyElement(e)
            }, t._destroyElement = function(t) {
                r(t).detach().trigger(u.CLOSED).remove()
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var t = r(this),
                        e = t.data(s);
                    e || (e = new i(this), t.data(s, e)), "close" === n && e[n](this)
                })
            }, i._handleDismiss = function(e) {
                return function(t) {
                    t && t.preventDefault(), e.close(this)
                }
            }, o(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.0"
                }
            }]), i
        }(), r(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', g._handleDismiss(new g)), r.fn[n] = g._jQueryInterface, r.fn[n].Constructor = g, r.fn[n].noConflict = function() {
            return r.fn[n] = l, g._jQueryInterface
        }, g),
        An = (p = "button", E = "." + (v = "bs.button"), y = ".data-api", T = (m = e).fn[p], C = "active", I = "btn", D = '[data-toggle^="button"]', b = '[data-toggle="buttons"]', S = "input", w = ".active", N = ".btn", O = {
            CLICK_DATA_API: "click" + E + y,
            FOCUS_BLUR_DATA_API: (A = "focus") + E + y + " blur" + E + y
        }, k = function() {
            function n(t) {
                this._element = t
            }
            var t = n.prototype;
            return t.toggle = function() {
                var t = !0,
                    e = !0,
                    n = m(this._element).closest(b)[0];
                if (n) {
                    var i = m(this._element).find(S)[0];
                    if (i) {
                        if ("radio" === i.type)
                            if (i.checked && m(this._element).hasClass(C)) t = !1;
                            else {
                                var r = m(n).find(w)[0];
                                r && m(r).removeClass(C)
                            }
                        if (t) {
                            if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
                            i.checked = !m(this._element).hasClass(C), m(i).trigger("change")
                        }
                        i.focus(), e = !1
                    }
                }
                e && this._element.setAttribute("aria-pressed", !m(this._element).hasClass(C)), t && m(this._element).toggleClass(C)
            }, t.dispose = function() {
                m.removeData(this._element, v), this._element = null
            }, n._jQueryInterface = function(e) {
                return this.each(function() {
                    var t = m(this).data(v);
                    t || (t = new n(this), m(this).data(v, t)), "toggle" === e && t[e]()
                })
            }, o(n, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.0"
                }
            }]), n
        }(), m(document).on(O.CLICK_DATA_API, D, function(t) {
            t.preventDefault();
            var e = t.target;
            m(e).hasClass(I) || (e = m(e).closest(N)), k._jQueryInterface.call(m(e), "toggle")
        }).on(O.FOCUS_BLUR_DATA_API, D, function(t) {
            var e = m(t.target).closest(N)[0];
            m(e).toggleClass(A, /^focus(in)?$/.test(t.type))
        }), m.fn[p] = k._jQueryInterface, m.fn[p].Constructor = k, m.fn[p].noConflict = function() {
            return m.fn[p] = T, k._jQueryInterface
        }, k),
        Dn = (L = "carousel", R = "." + (j = "bs.carousel"), H = ".data-api", W = (P = e).fn[L], M = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0
        }, x = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean"
        }, U = "next", K = "prev", F = "left", V = "right", Q = {
            SLIDE: "slide" + R,
            SLID: "slid" + R,
            KEYDOWN: "keydown" + R,
            MOUSEENTER: "mouseenter" + R,
            MOUSELEAVE: "mouseleave" + R,
            TOUCHEND: "touchend" + R,
            LOAD_DATA_API: "load" + R + H,
            CLICK_DATA_API: "click" + R + H
        }, B = "carousel", Y = "active", G = "slide", q = "carousel-item-right", z = "carousel-item-left", X = "carousel-item-next", J = "carousel-item-prev", Z = {
            ACTIVE: ".active",
            ACTIVE_ITEM: ".active.carousel-item",
            ITEM: ".carousel-item",
            NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
            INDICATORS: ".carousel-indicators",
            DATA_SLIDE: "[data-slide], [data-slide-to]",
            DATA_RIDE: '[data-ride="carousel"]'
        }, $ = function() {
            function s(t, e) {
                this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(e), this._element = P(t)[0], this._indicatorsElement = P(this._element).find(Z.INDICATORS)[0], this._addEventListeners()
            }
            var t = s.prototype;
            return t.next = function() {
                this._isSliding || this._slide(U)
            }, t.nextWhenVisible = function() {
                !document.hidden && P(this._element).is(":visible") && "hidden" !== P(this._element).css("visibility") && this.next()
            }, t.prev = function() {
                this._isSliding || this._slide(K)
            }, t.pause = function(t) {
                t || (this._isPaused = !0), P(this._element).find(Z.NEXT_PREV)[0] && (Cn.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
            }, t.cycle = function(t) {
                t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }, t.to = function(t) {
                var e = this;
                this._activeElement = P(this._element).find(Z.ACTIVE_ITEM)[0];
                var n = this._getItemIndex(this._activeElement);
                if (!(t > this._items.length - 1 || t < 0))
                    if (this._isSliding) P(this._element).one(Q.SLID, function() {
                        return e.to(t)
                    });
                    else {
                        if (n === t) return this.pause(), void this.cycle();
                        var i = n < t ? U : K;
                        this._slide(i, this._items[t])
                    }
            }, t.dispose = function() {
                P(this._element).off(R), P.removeData(this._element, j), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
            }, t._getConfig = function(t) {
                return t = h({}, M, t), Cn.typeCheckConfig(L, t, x), t
            }, t._addEventListeners = function() {
                var e = this;
                this._config.keyboard && P(this._element).on(Q.KEYDOWN, function(t) {
                    return e._keydown(t)
                }), "hover" === this._config.pause && (P(this._element).on(Q.MOUSEENTER, function(t) {
                    return e.pause(t)
                }).on(Q.MOUSELEAVE, function(t) {
                    return e.cycle(t)
                }), "ontouchstart" in document.documentElement && P(this._element).on(Q.TOUCHEND, function() {
                    e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function(t) {
                        return e.cycle(t)
                    }, 500 + e._config.interval)
                }))
            }, t._keydown = function(t) {
                if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                    case 37:
                        t.preventDefault(), this.prev();
                        break;
                    case 39:
                        t.preventDefault(), this.next()
                }
            }, t._getItemIndex = function(t) {
                return this._items = P.makeArray(P(t).parent().find(Z.ITEM)), this._items.indexOf(t)
            }, t._getItemByDirection = function(t, e) {
                var n = t === U,
                    i = t === K,
                    r = this._getItemIndex(e),
                    s = this._items.length - 1;
                if ((i && 0 === r || n && r === s) && !this._config.wrap) return e;
                var o = (r + (t === K ? -1 : 1)) % this._items.length;
                return -1 === o ? this._items[this._items.length - 1] : this._items[o]
            }, t._triggerSlideEvent = function(t, e) {
                var n = this._getItemIndex(t),
                    i = this._getItemIndex(P(this._element).find(Z.ACTIVE_ITEM)[0]),
                    r = P.Event(Q.SLIDE, {
                        relatedTarget: t,
                        direction: e,
                        from: i,
                        to: n
                    });
                return P(this._element).trigger(r), r
            }, t._setActiveIndicatorElement = function(t) {
                if (this._indicatorsElement) {
                    P(this._indicatorsElement).find(Z.ACTIVE).removeClass(Y);
                    var e = this._indicatorsElement.children[this._getItemIndex(t)];
                    e && P(e).addClass(Y)
                }
            }, t._slide = function(t, e) {
                var n, i, r, s = this,
                    o = P(this._element).find(Z.ACTIVE_ITEM)[0],
                    a = this._getItemIndex(o),
                    l = e || o && this._getItemByDirection(t, o),
                    h = this._getItemIndex(l),
                    c = Boolean(this._interval);
                if (t === U ? (n = z, i = X, r = F) : (n = q, i = J, r = V), l && P(l).hasClass(Y)) this._isSliding = !1;
                else if (!this._triggerSlideEvent(l, r).isDefaultPrevented() && o && l) {
                    this._isSliding = !0, c && this.pause(), this._setActiveIndicatorElement(l);
                    var u = P.Event(Q.SLID, {
                        relatedTarget: l,
                        direction: r,
                        from: a,
                        to: h
                    });
                    if (P(this._element).hasClass(G)) {
                        P(l).addClass(i), Cn.reflow(l), P(o).addClass(n), P(l).addClass(n);
                        var f = Cn.getTransitionDurationFromElement(o);
                        P(o).one(Cn.TRANSITION_END, function() {
                            P(l).removeClass(n + " " + i).addClass(Y), P(o).removeClass(Y + " " + i + " " + n), s._isSliding = !1, setTimeout(function() {
                                return P(s._element).trigger(u)
                            }, 0)
                        }).emulateTransitionEnd(f)
                    } else P(o).removeClass(Y), P(l).addClass(Y), this._isSliding = !1, P(this._element).trigger(u);
                    c && this.cycle()
                }
            }, s._jQueryInterface = function(i) {
                return this.each(function() {
                    var t = P(this).data(j),
                        e = h({}, M, P(this).data());
                    "object" == typeof i && (e = h({}, e, i));
                    var n = "string" == typeof i ? i : e.slide;
                    if (t || (t = new s(this, e), P(this).data(j, t)), "number" == typeof i) t.to(i);
                    else if ("string" == typeof n) {
                        if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n]()
                    } else e.interval && (t.pause(), t.cycle())
                })
            }, s._dataApiClickHandler = function(t) {
                var e = Cn.getSelectorFromElement(this);
                if (e) {
                    var n = P(e)[0];
                    if (n && P(n).hasClass(B)) {
                        var i = h({}, P(n).data(), P(this).data()),
                            r = this.getAttribute("data-slide-to");
                        r && (i.interval = !1), s._jQueryInterface.call(P(n), i), r && P(n).data(j).to(r), t.preventDefault()
                    }
                }
            }, o(s, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return M
                }
            }]), s
        }(), P(document).on(Q.CLICK_DATA_API, Z.DATA_SLIDE, $._dataApiClickHandler), P(window).on(Q.LOAD_DATA_API, function() {
            P(Z.DATA_RIDE).each(function() {
                var t = P(this);
                $._jQueryInterface.call(t, t.data())
            })
        }), P.fn[L] = $._jQueryInterface, P.fn[L].Constructor = $, P.fn[L].noConflict = function() {
            return P.fn[L] = W, $._jQueryInterface
        }, $),
        bn = (et = "collapse", it = "." + (nt = "bs.collapse"), rt = (tt = e).fn[et], st = {
            toggle: !0,
            parent: ""
        }, ot = {
            toggle: "boolean",
            parent: "(string|element)"
        }, at = {
            SHOW: "show" + it,
            SHOWN: "shown" + it,
            HIDE: "hide" + it,
            HIDDEN: "hidden" + it,
            CLICK_DATA_API: "click" + it + ".data-api"
        }, lt = "show", ht = "collapse", ct = "collapsing", ut = "collapsed", ft = "width", dt = "height", _t = {
            ACTIVES: ".show, .collapsing",
            DATA_TOGGLE: '[data-toggle="collapse"]'
        }, gt = function() {
            function a(t, e) {
                this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = tt.makeArray(tt('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
                for (var n = tt(_t.DATA_TOGGLE), i = 0; i < n.length; i++) {
                    var r = n[i],
                        s = Cn.getSelectorFromElement(r);
                    null !== s && 0 < tt(s).filter(t).length && (this._selector = s, this._triggerArray.push(r))
                }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
            }
            var t = a.prototype;
            return t.toggle = function() {
                tt(this._element).hasClass(lt) ? this.hide() : this.show()
            }, t.show = function() {
                var t, e, n = this;
                if (!this._isTransitioning && !tt(this._element).hasClass(lt) && (this._parent && 0 === (t = tt.makeArray(tt(this._parent).find(_t.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (t = null), !(t && (e = tt(t).not(this._selector).data(nt)) && e._isTransitioning))) {
                    var i = tt.Event(at.SHOW);
                    if (tt(this._element).trigger(i), !i.isDefaultPrevented()) {
                        t && (a._jQueryInterface.call(tt(t).not(this._selector), "hide"), e || tt(t).data(nt, null));
                        var r = this._getDimension();
                        tt(this._element).removeClass(ht).addClass(ct), (this._element.style[r] = 0) < this._triggerArray.length && tt(this._triggerArray).removeClass(ut).attr("aria-expanded", !0), this.setTransitioning(!0);
                        var s = "scroll" + (r[0].toUpperCase() + r.slice(1)),
                            o = Cn.getTransitionDurationFromElement(this._element);
                        tt(this._element).one(Cn.TRANSITION_END, function() {
                            tt(n._element).removeClass(ct).addClass(ht).addClass(lt), n._element.style[r] = "", n.setTransitioning(!1), tt(n._element).trigger(at.SHOWN)
                        }).emulateTransitionEnd(o), this._element.style[r] = this._element[s] + "px"
                    }
                }
            }, t.hide = function() {
                var t = this;
                if (!this._isTransitioning && tt(this._element).hasClass(lt)) {
                    var e = tt.Event(at.HIDE);
                    if (tt(this._element).trigger(e), !e.isDefaultPrevented()) {
                        var n = this._getDimension();
                        if (this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", Cn.reflow(this._element), tt(this._element).addClass(ct).removeClass(ht).removeClass(lt), 0 < this._triggerArray.length)
                            for (var i = 0; i < this._triggerArray.length; i++) {
                                var r = this._triggerArray[i],
                                    s = Cn.getSelectorFromElement(r);
                                if (null !== s) tt(s).hasClass(lt) || tt(r).addClass(ut).attr("aria-expanded", !1)
                            }
                        this.setTransitioning(!0);
                        this._element.style[n] = "";
                        var o = Cn.getTransitionDurationFromElement(this._element);
                        tt(this._element).one(Cn.TRANSITION_END, function() {
                            t.setTransitioning(!1), tt(t._element).removeClass(ct).addClass(ht).trigger(at.HIDDEN)
                        }).emulateTransitionEnd(o)
                    }
                }
            }, t.setTransitioning = function(t) {
                this._isTransitioning = t
            }, t.dispose = function() {
                tt.removeData(this._element, nt), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
            }, t._getConfig = function(t) {
                return (t = h({}, st, t)).toggle = Boolean(t.toggle), Cn.typeCheckConfig(et, t, ot), t
            }, t._getDimension = function() {
                return tt(this._element).hasClass(ft) ? ft : dt
            }, t._getParent = function() {
                var n = this,
                    t = null;
                Cn.isElement(this._config.parent) ? (t = this._config.parent, "undefined" != typeof this._config.parent.jquery && (t = this._config.parent[0])) : t = tt(this._config.parent)[0];
                var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                return tt(t).find(e).each(function(t, e) {
                    n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e])
                }), t
            }, t._addAriaAndCollapsedClass = function(t, e) {
                if (t) {
                    var n = tt(t).hasClass(lt);
                    0 < e.length && tt(e).toggleClass(ut, !n).attr("aria-expanded", n)
                }
            }, a._getTargetFromElement = function(t) {
                var e = Cn.getSelectorFromElement(t);
                return e ? tt(e)[0] : null
            }, a._jQueryInterface = function(i) {
                return this.each(function() {
                    var t = tt(this),
                        e = t.data(nt),
                        n = h({}, st, t.data(), "object" == typeof i && i);
                    if (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1), e || (e = new a(this, n), t.data(nt, e)), "string" == typeof i) {
                        if ("undefined" == typeof e[i]) throw new TypeError('No method named "' + i + '"');
                        e[i]()
                    }
                })
            }, o(a, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return st
                }
            }]), a
        }(), tt(document).on(at.CLICK_DATA_API, _t.DATA_TOGGLE, function(t) {
            "A" === t.currentTarget.tagName && t.preventDefault();
            var n = tt(this),
                e = Cn.getSelectorFromElement(this);
            tt(e).each(function() {
                var t = tt(this),
                    e = t.data(nt) ? "toggle" : n.data();
                gt._jQueryInterface.call(t, e)
            })
        }), tt.fn[et] = gt._jQueryInterface, tt.fn[et].Constructor = gt, tt.fn[et].noConflict = function() {
            return tt.fn[et] = rt, gt._jQueryInterface
        }, gt),
        Sn = (pt = "dropdown", Et = "." + (vt = "bs.dropdown"), yt = ".data-api", Tt = (mt = e).fn[pt], Ct = new RegExp("38|40|27"), It = {
            HIDE: "hide" + Et,
            HIDDEN: "hidden" + Et,
            SHOW: "show" + Et,
            SHOWN: "shown" + Et,
            CLICK: "click" + Et,
            CLICK_DATA_API: "click" + Et + yt,
            KEYDOWN_DATA_API: "keydown" + Et + yt,
            KEYUP_DATA_API: "keyup" + Et + yt
        }, At = "disabled", Dt = "show", bt = "dropup", St = "dropright", wt = "dropleft", Nt = "dropdown-menu-right", Ot = "position-static", kt = '[data-toggle="dropdown"]', Pt = ".dropdown form", Lt = ".dropdown-menu", jt = ".navbar-nav", Rt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", Ht = "top-start", Wt = "top-end", Mt = "bottom-start", xt = "bottom-end", Ut = "right-start", Kt = "left-start", Ft = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic"
        }, Vt = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string"
        }, Qt = function() {
            function l(t, e) {
                this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
            }
            var t = l.prototype;
            return t.toggle = function() {
                if (!this._element.disabled && !mt(this._element).hasClass(At)) {
                    var t = l._getParentFromElement(this._element),
                        e = mt(this._menu).hasClass(Dt);
                    if (l._clearMenus(), !e) {
                        var n = {
                                relatedTarget: this._element
                            },
                            i = mt.Event(It.SHOW, n);
                        if (mt(t).trigger(i), !i.isDefaultPrevented()) {
                            if (!this._inNavbar) {
                                if ("undefined" == typeof c) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                                var r = this._element;
                                "parent" === this._config.reference ? r = t : Cn.isElement(this._config.reference) && (r = this._config.reference, "undefined" != typeof this._config.reference.jquery && (r = this._config.reference[0])), "scrollParent" !== this._config.boundary && mt(t).addClass(Ot), this._popper = new c(r, this._menu, this._getPopperConfig())
                            }
                            "ontouchstart" in document.documentElement && 0 === mt(t).closest(jt).length && mt(document.body).children().on("mouseover", null, mt.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), mt(this._menu).toggleClass(Dt), mt(t).toggleClass(Dt).trigger(mt.Event(It.SHOWN, n))
                        }
                    }
                }
            }, t.dispose = function() {
                mt.removeData(this._element, vt), mt(this._element).off(Et), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
            }, t.update = function() {
                this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
            }, t._addEventListeners = function() {
                var e = this;
                mt(this._element).on(It.CLICK, function(t) {
                    t.preventDefault(), t.stopPropagation(), e.toggle()
                })
            }, t._getConfig = function(t) {
                return t = h({}, this.constructor.Default, mt(this._element).data(), t), Cn.typeCheckConfig(pt, t, this.constructor.DefaultType), t
            }, t._getMenuElement = function() {
                if (!this._menu) {
                    var t = l._getParentFromElement(this._element);
                    this._menu = mt(t).find(Lt)[0]
                }
                return this._menu
            }, t._getPlacement = function() {
                var t = mt(this._element).parent(),
                    e = Mt;
                return t.hasClass(bt) ? (e = Ht, mt(this._menu).hasClass(Nt) && (e = Wt)) : t.hasClass(St) ? e = Ut : t.hasClass(wt) ? e = Kt : mt(this._menu).hasClass(Nt) && (e = xt), e
            }, t._detectNavbar = function() {
                return 0 < mt(this._element).closest(".navbar").length
            }, t._getPopperConfig = function() {
                var e = this,
                    t = {};
                "function" == typeof this._config.offset ? t.fn = function(t) {
                    return t.offsets = h({}, t.offsets, e._config.offset(t.offsets) || {}), t
                } : t.offset = this._config.offset;
                var n = {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: t,
                        flip: {
                            enabled: this._config.flip
                        },
                        preventOverflow: {
                            boundariesElement: this._config.boundary
                        }
                    }
                };
                return "static" === this._config.display && (n.modifiers.applyStyle = {
                    enabled: !1
                }), n
            }, l._jQueryInterface = function(e) {
                return this.each(function() {
                    var t = mt(this).data(vt);
                    if (t || (t = new l(this, "object" == typeof e ? e : null), mt(this).data(vt, t)), "string" == typeof e) {
                        if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
                        t[e]()
                    }
                })
            }, l._clearMenus = function(t) {
                if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                    for (var e = mt.makeArray(mt(kt)), n = 0; n < e.length; n++) {
                        var i = l._getParentFromElement(e[n]),
                            r = mt(e[n]).data(vt),
                            s = {
                                relatedTarget: e[n]
                            };
                        if (r) {
                            var o = r._menu;
                            if (mt(i).hasClass(Dt) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && mt.contains(i, t.target))) {
                                var a = mt.Event(It.HIDE, s);
                                mt(i).trigger(a), a.isDefaultPrevented() || ("ontouchstart" in document.documentElement && mt(document.body).children().off("mouseover", null, mt.noop), e[n].setAttribute("aria-expanded", "false"), mt(o).removeClass(Dt), mt(i).removeClass(Dt).trigger(mt.Event(It.HIDDEN, s)))
                            }
                        }
                    }
            }, l._getParentFromElement = function(t) {
                var e, n = Cn.getSelectorFromElement(t);
                return n && (e = mt(n)[0]), e || t.parentNode
            }, l._dataApiKeydownHandler = function(t) {
                if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || mt(t.target).closest(Lt).length)) : Ct.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !mt(this).hasClass(At))) {
                    var e = l._getParentFromElement(this),
                        n = mt(e).hasClass(Dt);
                    if ((n || 27 === t.which && 32 === t.which) && (!n || 27 !== t.which && 32 !== t.which)) {
                        var i = mt(e).find(Rt).get();
                        if (0 !== i.length) {
                            var r = i.indexOf(t.target);
                            38 === t.which && 0 < r && r--, 40 === t.which && r < i.length - 1 && r++, r < 0 && (r = 0), i[r].focus()
                        }
                    } else {
                        if (27 === t.which) {
                            var s = mt(e).find(kt)[0];
                            mt(s).trigger("focus")
                        }
                        mt(this).trigger("click")
                    }
                }
            }, o(l, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return Ft
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Vt
                }
            }]), l
        }(), mt(document).on(It.KEYDOWN_DATA_API, kt, Qt._dataApiKeydownHandler).on(It.KEYDOWN_DATA_API, Lt, Qt._dataApiKeydownHandler).on(It.CLICK_DATA_API + " " + It.KEYUP_DATA_API, Qt._clearMenus).on(It.CLICK_DATA_API, kt, function(t) {
            t.preventDefault(), t.stopPropagation(), Qt._jQueryInterface.call(mt(this), "toggle")
        }).on(It.CLICK_DATA_API, Pt, function(t) {
            t.stopPropagation()
        }), mt.fn[pt] = Qt._jQueryInterface, mt.fn[pt].Constructor = Qt, mt.fn[pt].noConflict = function() {
            return mt.fn[pt] = Tt, Qt._jQueryInterface
        }, Qt),
        wn = (Yt = "modal", qt = "." + (Gt = "bs.modal"), zt = (Bt = e).fn[Yt], Xt = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        }, Jt = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        }, Zt = {
            HIDE: "hide" + qt,
            HIDDEN: "hidden" + qt,
            SHOW: "show" + qt,
            SHOWN: "shown" + qt,
            FOCUSIN: "focusin" + qt,
            RESIZE: "resize" + qt,
            CLICK_DISMISS: "click.dismiss" + qt,
            KEYDOWN_DISMISS: "keydown.dismiss" + qt,
            MOUSEUP_DISMISS: "mouseup.dismiss" + qt,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + qt,
            CLICK_DATA_API: "click" + qt + ".data-api"
        }, $t = "modal-scrollbar-measure", te = "modal-backdrop", ee = "modal-open", ne = "fade", ie = "show", re = {
            DIALOG: ".modal-dialog",
            DATA_TOGGLE: '[data-toggle="modal"]',
            DATA_DISMISS: '[data-dismiss="modal"]',
            FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            STICKY_CONTENT: ".sticky-top",
            NAVBAR_TOGGLER: ".navbar-toggler"
        }, se = function() {
            function r(t, e) {
                this._config = this._getConfig(e), this._element = t, this._dialog = Bt(t).find(re.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._scrollbarWidth = 0
            }
            var t = r.prototype;
            return t.toggle = function(t) {
                return this._isShown ? this.hide() : this.show(t)
            }, t.show = function(t) {
                var e = this;
                if (!this._isTransitioning && !this._isShown) {
                    Bt(this._element).hasClass(ne) && (this._isTransitioning = !0);
                    var n = Bt.Event(Zt.SHOW, {
                        relatedTarget: t
                    });
                    Bt(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), Bt(document.body).addClass(ee), this._setEscapeEvent(), this._setResizeEvent(), Bt(this._element).on(Zt.CLICK_DISMISS, re.DATA_DISMISS, function(t) {
                        return e.hide(t)
                    }), Bt(this._dialog).on(Zt.MOUSEDOWN_DISMISS, function() {
                        Bt(e._element).one(Zt.MOUSEUP_DISMISS, function(t) {
                            Bt(t.target).is(e._element) && (e._ignoreBackdropClick = !0)
                        })
                    }), this._showBackdrop(function() {
                        return e._showElement(t)
                    }))
                }
            }, t.hide = function(t) {
                var e = this;
                if (t && t.preventDefault(), !this._isTransitioning && this._isShown) {
                    var n = Bt.Event(Zt.HIDE);
                    if (Bt(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
                        this._isShown = !1;
                        var i = Bt(this._element).hasClass(ne);
                        if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), Bt(document).off(Zt.FOCUSIN), Bt(this._element).removeClass(ie), Bt(this._element).off(Zt.CLICK_DISMISS), Bt(this._dialog).off(Zt.MOUSEDOWN_DISMISS), i) {
                            var r = Cn.getTransitionDurationFromElement(this._element);
                            Bt(this._element).one(Cn.TRANSITION_END, function(t) {
                                return e._hideModal(t)
                            }).emulateTransitionEnd(r)
                        } else this._hideModal()
                    }
                }
            }, t.dispose = function() {
                Bt.removeData(this._element, Gt), Bt(window, document, this._element, this._backdrop).off(qt), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
            }, t.handleUpdate = function() {
                this._adjustDialog()
            }, t._getConfig = function(t) {
                return t = h({}, Xt, t), Cn.typeCheckConfig(Yt, t, Jt), t
            }, t._showElement = function(t) {
                var e = this,
                    n = Bt(this._element).hasClass(ne);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, n && Cn.reflow(this._element), Bt(this._element).addClass(ie), this._config.focus && this._enforceFocus();
                var i = Bt.Event(Zt.SHOWN, {
                        relatedTarget: t
                    }),
                    r = function() {
                        e._config.focus && e._element.focus(), e._isTransitioning = !1, Bt(e._element).trigger(i)
                    };
                if (n) {
                    var s = Cn.getTransitionDurationFromElement(this._element);
                    Bt(this._dialog).one(Cn.TRANSITION_END, r).emulateTransitionEnd(s)
                } else r()
            }, t._enforceFocus = function() {
                var e = this;
                Bt(document).off(Zt.FOCUSIN).on(Zt.FOCUSIN, function(t) {
                    document !== t.target && e._element !== t.target && 0 === Bt(e._element).has(t.target).length && e._element.focus()
                })
            }, t._setEscapeEvent = function() {
                var e = this;
                this._isShown && this._config.keyboard ? Bt(this._element).on(Zt.KEYDOWN_DISMISS, function(t) {
                    27 === t.which && (t.preventDefault(), e.hide())
                }) : this._isShown || Bt(this._element).off(Zt.KEYDOWN_DISMISS)
            }, t._setResizeEvent = function() {
                var e = this;
                this._isShown ? Bt(window).on(Zt.RESIZE, function(t) {
                    return e.handleUpdate(t)
                }) : Bt(window).off(Zt.RESIZE)
            }, t._hideModal = function() {
                var t = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function() {
                    Bt(document.body).removeClass(ee), t._resetAdjustments(), t._resetScrollbar(), Bt(t._element).trigger(Zt.HIDDEN)
                })
            }, t._removeBackdrop = function() {
                this._backdrop && (Bt(this._backdrop).remove(), this._backdrop = null)
            }, t._showBackdrop = function(t) {
                var e = this,
                    n = Bt(this._element).hasClass(ne) ? ne : "";
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = te, n && Bt(this._backdrop).addClass(n), Bt(this._backdrop).appendTo(document.body), Bt(this._element).on(Zt.CLICK_DISMISS, function(t) {
                        e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide())
                    }), n && Cn.reflow(this._backdrop), Bt(this._backdrop).addClass(ie), !t) return;
                    if (!n) return void t();
                    var i = Cn.getTransitionDurationFromElement(this._backdrop);
                    Bt(this._backdrop).one(Cn.TRANSITION_END, t).emulateTransitionEnd(i)
                } else if (!this._isShown && this._backdrop) {
                    Bt(this._backdrop).removeClass(ie);
                    var r = function() {
                        e._removeBackdrop(), t && t()
                    };
                    if (Bt(this._element).hasClass(ne)) {
                        var s = Cn.getTransitionDurationFromElement(this._backdrop);
                        Bt(this._backdrop).one(Cn.TRANSITION_END, r).emulateTransitionEnd(s)
                    } else r()
                } else t && t()
            }, t._adjustDialog = function() {
                var t = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, t._resetAdjustments = function() {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }, t._checkScrollbar = function() {
                var t = document.body.getBoundingClientRect();
                this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, t._setScrollbar = function() {
                var r = this;
                if (this._isBodyOverflowing) {
                    Bt(re.FIXED_CONTENT).each(function(t, e) {
                        var n = Bt(e)[0].style.paddingRight,
                            i = Bt(e).css("padding-right");
                        Bt(e).data("padding-right", n).css("padding-right", parseFloat(i) + r._scrollbarWidth + "px")
                    }), Bt(re.STICKY_CONTENT).each(function(t, e) {
                        var n = Bt(e)[0].style.marginRight,
                            i = Bt(e).css("margin-right");
                        Bt(e).data("margin-right", n).css("margin-right", parseFloat(i) - r._scrollbarWidth + "px")
                    }), Bt(re.NAVBAR_TOGGLER).each(function(t, e) {
                        var n = Bt(e)[0].style.marginRight,
                            i = Bt(e).css("margin-right");
                        Bt(e).data("margin-right", n).css("margin-right", parseFloat(i) + r._scrollbarWidth + "px")
                    });
                    var t = document.body.style.paddingRight,
                        e = Bt(document.body).css("padding-right");
                    Bt(document.body).data("padding-right", t).css("padding-right", parseFloat(e) + this._scrollbarWidth + "px")
                }
            }, t._resetScrollbar = function() {
                Bt(re.FIXED_CONTENT).each(function(t, e) {
                    var n = Bt(e).data("padding-right");
                    "undefined" != typeof n && Bt(e).css("padding-right", n).removeData("padding-right")
                }), Bt(re.STICKY_CONTENT + ", " + re.NAVBAR_TOGGLER).each(function(t, e) {
                    var n = Bt(e).data("margin-right");
                    "undefined" != typeof n && Bt(e).css("margin-right", n).removeData("margin-right")
                });
                var t = Bt(document.body).data("padding-right");
                "undefined" != typeof t && Bt(document.body).css("padding-right", t).removeData("padding-right")
            }, t._getScrollbarWidth = function() {
                var t = document.createElement("div");
                t.className = $t, document.body.appendChild(t);
                var e = t.getBoundingClientRect().width - t.clientWidth;
                return document.body.removeChild(t), e
            }, r._jQueryInterface = function(n, i) {
                return this.each(function() {
                    var t = Bt(this).data(Gt),
                        e = h({}, r.Default, Bt(this).data(), "object" == typeof n && n);
                    if (t || (t = new r(this, e), Bt(this).data(Gt, t)), "string" == typeof n) {
                        if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n](i)
                    } else e.show && t.show(i)
                })
            }, o(r, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return Xt
                }
            }]), r
        }(), Bt(document).on(Zt.CLICK_DATA_API, re.DATA_TOGGLE, function(t) {
            var e, n = this,
                i = Cn.getSelectorFromElement(this);
            i && (e = Bt(i)[0]);
            var r = Bt(e).data(Gt) ? "toggle" : h({}, Bt(e).data(), Bt(this).data());
            "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
            var s = Bt(e).one(Zt.SHOW, function(t) {
                t.isDefaultPrevented() || s.one(Zt.HIDDEN, function() {
                    Bt(n).is(":visible") && n.focus()
                })
            });
            se._jQueryInterface.call(Bt(e), r, this)
        }), Bt.fn[Yt] = se._jQueryInterface, Bt.fn[Yt].Constructor = se, Bt.fn[Yt].noConflict = function() {
            return Bt.fn[Yt] = zt, se._jQueryInterface
        }, se),
        Nn = (ae = "tooltip", he = "." + (le = "bs.tooltip"), ce = (oe = e).fn[ae], ue = "bs-tooltip", fe = new RegExp("(^|\\s)" + ue + "\\S+", "g"), ge = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !(_e = {
                AUTO: "auto",
                TOP: "top",
                RIGHT: "right",
                BOTTOM: "bottom",
                LEFT: "left"
            }),
            selector: !(de = {
                animation: "boolean",
                template: "string",
                title: "(string|element|function)",
                trigger: "string",
                delay: "(number|object)",
                html: "boolean",
                selector: "(string|boolean)",
                placement: "(string|function)",
                offset: "(number|string)",
                container: "(string|element|boolean)",
                fallbackPlacement: "(string|array)",
                boundary: "(string|element)"
            }),
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent"
        }, pe = "out", ve = {
            HIDE: "hide" + he,
            HIDDEN: "hidden" + he,
            SHOW: (me = "show") + he,
            SHOWN: "shown" + he,
            INSERTED: "inserted" + he,
            CLICK: "click" + he,
            FOCUSIN: "focusin" + he,
            FOCUSOUT: "focusout" + he,
            MOUSEENTER: "mouseenter" + he,
            MOUSELEAVE: "mouseleave" + he
        }, Ee = "fade", ye = "show", Te = ".tooltip-inner", Ce = ".arrow", Ie = "hover", Ae = "focus", De = "click", be = "manual", Se = function() {
            function i(t, e) {
                if ("undefined" == typeof c) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
            }
            var t = i.prototype;
            return t.enable = function() {
                this._isEnabled = !0
            }, t.disable = function() {
                this._isEnabled = !1
            }, t.toggleEnabled = function() {
                this._isEnabled = !this._isEnabled
            }, t.toggle = function(t) {
                if (this._isEnabled)
                    if (t) {
                        var e = this.constructor.DATA_KEY,
                            n = oe(t.currentTarget).data(e);
                        n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), oe(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                    } else {
                        if (oe(this.getTipElement()).hasClass(ye)) return void this._leave(null, this);
                        this._enter(null, this)
                    }
            }, t.dispose = function() {
                clearTimeout(this._timeout), oe.removeData(this.element, this.constructor.DATA_KEY), oe(this.element).off(this.constructor.EVENT_KEY), oe(this.element).closest(".modal").off("hide.bs.modal"), this.tip && oe(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
            }, t.show = function() {
                var e = this;
                if ("none" === oe(this.element).css("display")) throw new Error("Please use show on visible elements");
                var t = oe.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    oe(this.element).trigger(t);
                    var n = oe.contains(this.element.ownerDocument.documentElement, this.element);
                    if (t.isDefaultPrevented() || !n) return;
                    var i = this.getTipElement(),
                        r = Cn.getUID(this.constructor.NAME);
                    i.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && oe(i).addClass(Ee);
                    var s = "function" == typeof this.config.placement ? this.config.placement.call(this, i, this.element) : this.config.placement,
                        o = this._getAttachment(s);
                    this.addAttachmentClass(o);
                    var a = !1 === this.config.container ? document.body : oe(this.config.container);
                    oe(i).data(this.constructor.DATA_KEY, this), oe.contains(this.element.ownerDocument.documentElement, this.tip) || oe(i).appendTo(a), oe(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new c(this.element, i, {
                        placement: o,
                        modifiers: {
                            offset: {
                                offset: this.config.offset
                            },
                            flip: {
                                behavior: this.config.fallbackPlacement
                            },
                            arrow: {
                                element: Ce
                            },
                            preventOverflow: {
                                boundariesElement: this.config.boundary
                            }
                        },
                        onCreate: function(t) {
                            t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                        },
                        onUpdate: function(t) {
                            e._handlePopperPlacementChange(t)
                        }
                    }), oe(i).addClass(ye), "ontouchstart" in document.documentElement && oe(document.body).children().on("mouseover", null, oe.noop);
                    var l = function() {
                        e.config.animation && e._fixTransition();
                        var t = e._hoverState;
                        e._hoverState = null, oe(e.element).trigger(e.constructor.Event.SHOWN), t === pe && e._leave(null, e)
                    };
                    if (oe(this.tip).hasClass(Ee)) {
                        var h = Cn.getTransitionDurationFromElement(this.tip);
                        oe(this.tip).one(Cn.TRANSITION_END, l).emulateTransitionEnd(h)
                    } else l()
                }
            }, t.hide = function(t) {
                var e = this,
                    n = this.getTipElement(),
                    i = oe.Event(this.constructor.Event.HIDE),
                    r = function() {
                        e._hoverState !== me && n.parentNode && n.parentNode.removeChild(n), e._cleanTipClass(), e.element.removeAttribute("aria-describedby"), oe(e.element).trigger(e.constructor.Event.HIDDEN), null !== e._popper && e._popper.destroy(), t && t()
                    };
                if (oe(this.element).trigger(i), !i.isDefaultPrevented()) {
                    if (oe(n).removeClass(ye), "ontouchstart" in document.documentElement && oe(document.body).children().off("mouseover", null, oe.noop), this._activeTrigger[De] = !1, this._activeTrigger[Ae] = !1, this._activeTrigger[Ie] = !1, oe(this.tip).hasClass(Ee)) {
                        var s = Cn.getTransitionDurationFromElement(n);
                        oe(n).one(Cn.TRANSITION_END, r).emulateTransitionEnd(s)
                    } else r();
                    this._hoverState = ""
                }
            }, t.update = function() {
                null !== this._popper && this._popper.scheduleUpdate()
            }, t.isWithContent = function() {
                return Boolean(this.getTitle())
            }, t.addAttachmentClass = function(t) {
                oe(this.getTipElement()).addClass(ue + "-" + t)
            }, t.getTipElement = function() {
                return this.tip = this.tip || oe(this.config.template)[0], this.tip
            }, t.setContent = function() {
                var t = oe(this.getTipElement());
                this.setElementContent(t.find(Te), this.getTitle()), t.removeClass(Ee + " " + ye)
            }, t.setElementContent = function(t, e) {
                var n = this.config.html;
                "object" == typeof e && (e.nodeType || e.jquery) ? n ? oe(e).parent().is(t) || t.empty().append(e) : t.text(oe(e).text()) : t[n ? "html" : "text"](e)
            }, t.getTitle = function() {
                var t = this.element.getAttribute("data-original-title");
                return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t
            }, t._getAttachment = function(t) {
                return _e[t.toUpperCase()]
            }, t._setListeners = function() {
                var i = this;
                this.config.trigger.split(" ").forEach(function(t) {
                    if ("click" === t) oe(i.element).on(i.constructor.Event.CLICK, i.config.selector, function(t) {
                        return i.toggle(t)
                    });
                    else if (t !== be) {
                        var e = t === Ie ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
                            n = t === Ie ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
                        oe(i.element).on(e, i.config.selector, function(t) {
                            return i._enter(t)
                        }).on(n, i.config.selector, function(t) {
                            return i._leave(t)
                        })
                    }
                    oe(i.element).closest(".modal").on("hide.bs.modal", function() {
                        return i.hide()
                    })
                }), this.config.selector ? this.config = h({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }, t._fixTitle = function() {
                var t = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, t._enter = function(t, e) {
                var n = this.constructor.DATA_KEY;
                (e = e || oe(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), oe(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? Ae : Ie] = !0), oe(e.getTipElement()).hasClass(ye) || e._hoverState === me ? e._hoverState = me : (clearTimeout(e._timeout), e._hoverState = me, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function() {
                    e._hoverState === me && e.show()
                }, e.config.delay.show) : e.show())
            }, t._leave = function(t, e) {
                var n = this.constructor.DATA_KEY;
                (e = e || oe(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), oe(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? Ae : Ie] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = pe, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function() {
                    e._hoverState === pe && e.hide()
                }, e.config.delay.hide) : e.hide())
            }, t._isWithActiveTrigger = function() {
                for (var t in this._activeTrigger)
                    if (this._activeTrigger[t]) return !0;
                return !1
            }, t._getConfig = function(t) {
                return "number" == typeof(t = h({}, this.constructor.Default, oe(this.element).data(), t)).delay && (t.delay = {
                    show: t.delay,
                    hide: t.delay
                }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), Cn.typeCheckConfig(ae, t, this.constructor.DefaultType), t
            }, t._getDelegateConfig = function() {
                var t = {};
                if (this.config)
                    for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                return t
            }, t._cleanTipClass = function() {
                var t = oe(this.getTipElement()),
                    e = t.attr("class").match(fe);
                null !== e && 0 < e.length && t.removeClass(e.join(""))
            }, t._handlePopperPlacementChange = function(t) {
                this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement))
            }, t._fixTransition = function() {
                var t = this.getTipElement(),
                    e = this.config.animation;
                null === t.getAttribute("x-placement") && (oe(t).removeClass(Ee), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e)
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var t = oe(this).data(le),
                        e = "object" == typeof n && n;
                    if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), oe(this).data(le, t)), "string" == typeof n)) {
                        if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n]()
                    }
                })
            }, o(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return ge
                }
            }, {
                key: "NAME",
                get: function() {
                    return ae
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return le
                }
            }, {
                key: "Event",
                get: function() {
                    return ve
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return he
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return de
                }
            }]), i
        }(), oe.fn[ae] = Se._jQueryInterface, oe.fn[ae].Constructor = Se, oe.fn[ae].noConflict = function() {
            return oe.fn[ae] = ce, Se._jQueryInterface
        }, Se),
        On = (Ne = "popover", ke = "." + (Oe = "bs.popover"), Pe = (we = e).fn[Ne], Le = "bs-popover", je = new RegExp("(^|\\s)" + Le + "\\S+", "g"), Re = h({}, Nn.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }), He = h({}, Nn.DefaultType, {
            content: "(string|element|function)"
        }), We = "fade", xe = ".popover-header", Ue = ".popover-body", Ke = {
            HIDE: "hide" + ke,
            HIDDEN: "hidden" + ke,
            SHOW: (Me = "show") + ke,
            SHOWN: "shown" + ke,
            INSERTED: "inserted" + ke,
            CLICK: "click" + ke,
            FOCUSIN: "focusin" + ke,
            FOCUSOUT: "focusout" + ke,
            MOUSEENTER: "mouseenter" + ke,
            MOUSELEAVE: "mouseleave" + ke
        }, Fe = function(t) {
            var e, n;

            function i() {
                return t.apply(this, arguments) || this
            }
            n = t, (e = i).prototype = Object.create(n.prototype), (e.prototype.constructor = e).__proto__ = n;
            var r = i.prototype;
            return r.isWithContent = function() {
                return this.getTitle() || this._getContent()
            }, r.addAttachmentClass = function(t) {
                we(this.getTipElement()).addClass(Le + "-" + t)
            }, r.getTipElement = function() {
                return this.tip = this.tip || we(this.config.template)[0], this.tip
            }, r.setContent = function() {
                var t = we(this.getTipElement());
                this.setElementContent(t.find(xe), this.getTitle());
                var e = this._getContent();
                "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(Ue), e), t.removeClass(We + " " + Me)
            }, r._getContent = function() {
                return this.element.getAttribute("data-content") || this.config.content
            }, r._cleanTipClass = function() {
                var t = we(this.getTipElement()),
                    e = t.attr("class").match(je);
                null !== e && 0 < e.length && t.removeClass(e.join(""))
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var t = we(this).data(Oe),
                        e = "object" == typeof n ? n : null;
                    if ((t || !/destroy|hide/.test(n)) && (t || (t = new i(this, e), we(this).data(Oe, t)), "string" == typeof n)) {
                        if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n]()
                    }
                })
            }, o(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return Re
                }
            }, {
                key: "NAME",
                get: function() {
                    return Ne
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return Oe
                }
            }, {
                key: "Event",
                get: function() {
                    return Ke
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return ke
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return He
                }
            }]), i
        }(Nn), we.fn[Ne] = Fe._jQueryInterface, we.fn[Ne].Constructor = Fe, we.fn[Ne].noConflict = function() {
            return we.fn[Ne] = Pe, Fe._jQueryInterface
        }, Fe),
        kn = (Qe = "scrollspy", Ye = "." + (Be = "bs.scrollspy"), Ge = (Ve = e).fn[Qe], qe = {
            offset: 10,
            method: "auto",
            target: ""
        }, ze = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        }, Xe = {
            ACTIVATE: "activate" + Ye,
            SCROLL: "scroll" + Ye,
            LOAD_DATA_API: "load" + Ye + ".data-api"
        }, Je = "dropdown-item", Ze = "active", $e = {
            DATA_SPY: '[data-spy="scroll"]',
            ACTIVE: ".active",
            NAV_LIST_GROUP: ".nav, .list-group",
            NAV_LINKS: ".nav-link",
            NAV_ITEMS: ".nav-item",
            LIST_ITEMS: ".list-group-item",
            DROPDOWN: ".dropdown",
            DROPDOWN_ITEMS: ".dropdown-item",
            DROPDOWN_TOGGLE: ".dropdown-toggle"
        }, tn = "offset", en = "position", nn = function() {
            function n(t, e) {
                var n = this;
                this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + $e.NAV_LINKS + "," + this._config.target + " " + $e.LIST_ITEMS + "," + this._config.target + " " + $e.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, Ve(this._scrollElement).on(Xe.SCROLL, function(t) {
                    return n._process(t)
                }), this.refresh(), this._process()
            }
            var t = n.prototype;
            return t.refresh = function() {
                var e = this,
                    t = this._scrollElement === this._scrollElement.window ? tn : en,
                    r = "auto" === this._config.method ? t : this._config.method,
                    s = r === en ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), Ve.makeArray(Ve(this._selector)).map(function(t) {
                    var e, n = Cn.getSelectorFromElement(t);
                    if (n && (e = Ve(n)[0]), e) {
                        var i = e.getBoundingClientRect();
                        if (i.width || i.height) return [Ve(e)[r]().top + s, n]
                    }
                    return null
                }).filter(function(t) {
                    return t
                }).sort(function(t, e) {
                    return t[0] - e[0]
                }).forEach(function(t) {
                    e._offsets.push(t[0]), e._targets.push(t[1])
                })
            }, t.dispose = function() {
                Ve.removeData(this._element, Be), Ve(this._scrollElement).off(Ye), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
            }, t._getConfig = function(t) {
                if ("string" != typeof(t = h({}, qe, t)).target) {
                    var e = Ve(t.target).attr("id");
                    e || (e = Cn.getUID(Qe), Ve(t.target).attr("id", e)), t.target = "#" + e
                }
                return Cn.typeCheckConfig(Qe, t, ze), t
            }, t._getScrollTop = function() {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }, t._getScrollHeight = function() {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }, t._getOffsetHeight = function() {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }, t._process = function() {
                var t = this._getScrollTop() + this._config.offset,
                    e = this._getScrollHeight(),
                    n = this._config.offset + e - this._getOffsetHeight();
                if (this._scrollHeight !== e && this.refresh(), n <= t) {
                    var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i)
                } else {
                    if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
                    for (var r = this._offsets.length; r--;) {
                        this._activeTarget !== this._targets[r] && t >= this._offsets[r] && ("undefined" == typeof this._offsets[r + 1] || t < this._offsets[r + 1]) && this._activate(this._targets[r])
                    }
                }
            }, t._activate = function(e) {
                this._activeTarget = e, this._clear();
                var t = this._selector.split(",");
                t = t.map(function(t) {
                    return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                });
                var n = Ve(t.join(","));
                n.hasClass(Je) ? (n.closest($e.DROPDOWN).find($e.DROPDOWN_TOGGLE).addClass(Ze), n.addClass(Ze)) : (n.addClass(Ze), n.parents($e.NAV_LIST_GROUP).prev($e.NAV_LINKS + ", " + $e.LIST_ITEMS).addClass(Ze), n.parents($e.NAV_LIST_GROUP).prev($e.NAV_ITEMS).children($e.NAV_LINKS).addClass(Ze)), Ve(this._scrollElement).trigger(Xe.ACTIVATE, {
                    relatedTarget: e
                })
            }, t._clear = function() {
                Ve(this._selector).filter($e.ACTIVE).removeClass(Ze)
            }, n._jQueryInterface = function(e) {
                return this.each(function() {
                    var t = Ve(this).data(Be);
                    if (t || (t = new n(this, "object" == typeof e && e), Ve(this).data(Be, t)), "string" == typeof e) {
                        if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
                        t[e]()
                    }
                })
            }, o(n, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return qe
                }
            }]), n
        }(), Ve(window).on(Xe.LOAD_DATA_API, function() {
            for (var t = Ve.makeArray(Ve($e.DATA_SPY)), e = t.length; e--;) {
                var n = Ve(t[e]);
                nn._jQueryInterface.call(n, n.data())
            }
        }), Ve.fn[Qe] = nn._jQueryInterface, Ve.fn[Qe].Constructor = nn, Ve.fn[Qe].noConflict = function() {
            return Ve.fn[Qe] = Ge, nn._jQueryInterface
        }, nn),
        Pn = (on = "." + (sn = "bs.tab"), an = (rn = e).fn.tab, ln = {
            HIDE: "hide" + on,
            HIDDEN: "hidden" + on,
            SHOW: "show" + on,
            SHOWN: "shown" + on,
            CLICK_DATA_API: "click" + on + ".data-api"
        }, hn = "dropdown-menu", cn = "active", un = "disabled", fn = "fade", dn = "show", _n = ".dropdown", gn = ".nav, .list-group", mn = ".active", pn = "> li > .active", vn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', En = ".dropdown-toggle", yn = "> .dropdown-menu .active", Tn = function() {
            function i(t) {
                this._element = t
            }
            var t = i.prototype;
            return t.show = function() {
                var n = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && rn(this._element).hasClass(cn) || rn(this._element).hasClass(un))) {
                    var t, i, e = rn(this._element).closest(gn)[0],
                        r = Cn.getSelectorFromElement(this._element);
                    if (e) {
                        var s = "UL" === e.nodeName ? pn : mn;
                        i = (i = rn.makeArray(rn(e).find(s)))[i.length - 1]
                    }
                    var o = rn.Event(ln.HIDE, {
                            relatedTarget: this._element
                        }),
                        a = rn.Event(ln.SHOW, {
                            relatedTarget: i
                        });
                    if (i && rn(i).trigger(o), rn(this._element).trigger(a), !a.isDefaultPrevented() && !o.isDefaultPrevented()) {
                        r && (t = rn(r)[0]), this._activate(this._element, e);
                        var l = function() {
                            var t = rn.Event(ln.HIDDEN, {
                                    relatedTarget: n._element
                                }),
                                e = rn.Event(ln.SHOWN, {
                                    relatedTarget: i
                                });
                            rn(i).trigger(t), rn(n._element).trigger(e)
                        };
                        t ? this._activate(t, t.parentNode, l) : l()
                    }
                }
            }, t.dispose = function() {
                rn.removeData(this._element, sn), this._element = null
            }, t._activate = function(t, e, n) {
                var i = this,
                    r = ("UL" === e.nodeName ? rn(e).find(pn) : rn(e).children(mn))[0],
                    s = n && r && rn(r).hasClass(fn),
                    o = function() {
                        return i._transitionComplete(t, r, n)
                    };
                if (r && s) {
                    var a = Cn.getTransitionDurationFromElement(r);
                    rn(r).one(Cn.TRANSITION_END, o).emulateTransitionEnd(a)
                } else o()
            }, t._transitionComplete = function(t, e, n) {
                if (e) {
                    rn(e).removeClass(dn + " " + cn);
                    var i = rn(e.parentNode).find(yn)[0];
                    i && rn(i).removeClass(cn), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
                }
                if (rn(t).addClass(cn), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), Cn.reflow(t), rn(t).addClass(dn), t.parentNode && rn(t.parentNode).hasClass(hn)) {
                    var r = rn(t).closest(_n)[0];
                    r && rn(r).find(En).addClass(cn), t.setAttribute("aria-expanded", !0)
                }
                n && n()
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var t = rn(this),
                        e = t.data(sn);
                    if (e || (e = new i(this), t.data(sn, e)), "string" == typeof n) {
                        if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n]()
                    }
                })
            }, o(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.0"
                }
            }]), i
        }(), rn(document).on(ln.CLICK_DATA_API, vn, function(t) {
            t.preventDefault(), Tn._jQueryInterface.call(rn(this), "show")
        }), rn.fn.tab = Tn._jQueryInterface, rn.fn.tab.Constructor = Tn, rn.fn.tab.noConflict = function() {
            return rn.fn.tab = an, Tn._jQueryInterface
        }, Tn);
    ! function(t) {
        if ("undefined" == typeof t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var e = t.fn.jquery.split(" ")[0].split(".");
        if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || 4 <= e[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }(e), t.Util = Cn, t.Alert = In, t.Button = An, t.Carousel = Dn, t.Collapse = bn, t.Dropdown = Sn, t.Modal = wn, t.Popover = On, t.Scrollspy = kn, t.Tab = Pn, t.Tooltip = Nn, Object.defineProperty(t, "__esModule", {
        value: !0
    })
});
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery)
}(function(a, b) {
    function c() {
        return new Date(Date.UTC.apply(Date, arguments))
    }

    function d() {
        var a = new Date;
        return c(a.getFullYear(), a.getMonth(), a.getDate())
    }

    function e(a, b) {
        return a.getUTCFullYear() === b.getUTCFullYear() && a.getUTCMonth() === b.getUTCMonth() && a.getUTCDate() === b.getUTCDate()
    }

    function f(a) {
        return function() {
            return this[a].apply(this, arguments)
        }
    }

    function g(a) {
        return a && !isNaN(a.getTime())
    }

    function h(b, c) {
        function d(a, b) {
            return b.toLowerCase()
        }
        var e, f = a(b).data(),
            g = {},
            h = new RegExp("^" + c.toLowerCase() + "([A-Z])");
        c = new RegExp("^" + c.toLowerCase());
        for (var i in f) c.test(i) && (e = i.replace(h, d), g[e] = f[i]);
        return g
    }

    function i(b) {
        var c = {};
        if (q[b] || (b = b.split("-")[0], q[b])) {
            var d = q[b];
            return a.each(p, function(a, b) {
                b in d && (c[b] = d[b])
            }), c
        }
    }
    var j = function() {
            var b = {
                get: function(a) {
                    return this.slice(a)[0]
                },
                contains: function(a) {
                    for (var b = a && a.valueOf(), c = 0, d = this.length; d > c; c++)
                        if (this[c].valueOf() === b) return c;
                    return -1
                },
                remove: function(a) {
                    this.splice(a, 1)
                },
                replace: function(b) {
                    b && (a.isArray(b) || (b = [b]), this.clear(), this.push.apply(this, b))
                },
                clear: function() {
                    this.length = 0
                },
                copy: function() {
                    var a = new j;
                    return a.replace(this), a
                }
            };
            return function() {
                var c = [];
                return c.push.apply(c, arguments), a.extend(c, b), c
            }
        }(),
        k = function(b, c) {
            a(b).data("datepicker", this), this._process_options(c), this.dates = new j, this.viewDate = this.o.defaultViewDate, this.focusDate = null, this.element = a(b), this.isInput = this.element.is("input"), this.inputField = this.isInput ? this.element : this.element.find("input"), this.component = this.element.hasClass("date") ? this.element.find(".add-on, .input-group-addon, .btn") : !1, this.hasInput = this.component && this.inputField.length, this.component && 0 === this.component.length && (this.component = !1), this.isInline = !this.component && this.element.is("div"), this.picker = a(r.template), this._check_template(this.o.templates.leftArrow) && this.picker.find(".prev").html(this.o.templates.leftArrow), this._check_template(this.o.templates.rightArrow) && this.picker.find(".next").html(this.o.templates.rightArrow), this._buildEvents(), this._attachEvents(), this.isInline ? this.picker.addClass("datepicker-inline").appendTo(this.element) : this.picker.addClass("datepicker-dropdown dropdown-menu"), this.o.rtl && this.picker.addClass("datepicker-rtl"), this.viewMode = this.o.startView, this.o.calendarWeeks && this.picker.find("thead .datepicker-title, tfoot .today, tfoot .clear").attr("colspan", function(a, b) {
                return parseInt(b) + 1
            }), this._allow_update = !1, this.setStartDate(this._o.startDate), this.setEndDate(this._o.endDate), this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled), this.setDaysOfWeekHighlighted(this.o.daysOfWeekHighlighted), this.setDatesDisabled(this.o.datesDisabled), this.fillDow(), this.fillMonths(), this._allow_update = !0, this.update(), this.showMode(), this.isInline && this.show()
        };
    k.prototype = {
        constructor: k,
        _resolveViewName: function(a, c) {
            return 0 === a || "days" === a || "month" === a ? 0 : 1 === a || "months" === a || "year" === a ? 1 : 2 === a || "years" === a || "decade" === a ? 2 : 3 === a || "decades" === a || "century" === a ? 3 : 4 === a || "centuries" === a || "millennium" === a ? 4 : c === b ? !1 : c
        },
        _check_template: function(c) {
            try {
                if (c === b || "" === c) return !1;
                if ((c.match(/[<>]/g) || []).length <= 0) return !0;
                var d = a(c);
                return d.length > 0
            } catch (e) {
                return !1
            }
        },
        _process_options: function(b) {
            this._o = a.extend({}, this._o, b);
            var e = this.o = a.extend({}, this._o),
                f = e.language;
            q[f] || (f = f.split("-")[0], q[f] || (f = o.language)), e.language = f, e.startView = this._resolveViewName(e.startView, 0), e.minViewMode = this._resolveViewName(e.minViewMode, 0), e.maxViewMode = this._resolveViewName(e.maxViewMode, 4), e.startView = Math.min(e.startView, e.maxViewMode), e.startView = Math.max(e.startView, e.minViewMode), e.multidate !== !0 && (e.multidate = Number(e.multidate) || !1, e.multidate !== !1 && (e.multidate = Math.max(0, e.multidate))), e.multidateSeparator = String(e.multidateSeparator), e.weekStart %= 7, e.weekEnd = (e.weekStart + 6) % 7;
            var g = r.parseFormat(e.format);
            e.startDate !== -(1 / 0) && (e.startDate ? e.startDate instanceof Date ? e.startDate = this._local_to_utc(this._zero_time(e.startDate)) : e.startDate = r.parseDate(e.startDate, g, e.language, e.assumeNearbyYear) : e.startDate = -(1 / 0)), e.endDate !== 1 / 0 && (e.endDate ? e.endDate instanceof Date ? e.endDate = this._local_to_utc(this._zero_time(e.endDate)) : e.endDate = r.parseDate(e.endDate, g, e.language, e.assumeNearbyYear) : e.endDate = 1 / 0), e.daysOfWeekDisabled = e.daysOfWeekDisabled || [], a.isArray(e.daysOfWeekDisabled) || (e.daysOfWeekDisabled = e.daysOfWeekDisabled.split(/[,\s]*/)), e.daysOfWeekDisabled = a.map(e.daysOfWeekDisabled, function(a) {
                return parseInt(a, 10)
            }), e.daysOfWeekHighlighted = e.daysOfWeekHighlighted || [], a.isArray(e.daysOfWeekHighlighted) || (e.daysOfWeekHighlighted = e.daysOfWeekHighlighted.split(/[,\s]*/)), e.daysOfWeekHighlighted = a.map(e.daysOfWeekHighlighted, function(a) {
                return parseInt(a, 10)
            }), e.datesDisabled = e.datesDisabled || [], a.isArray(e.datesDisabled) || (e.datesDisabled = [e.datesDisabled]), e.datesDisabled = a.map(e.datesDisabled, function(a) {
                return r.parseDate(a, g, e.language, e.assumeNearbyYear)
            });
            var h = String(e.orientation).toLowerCase().split(/\s+/g),
                i = e.orientation.toLowerCase();
            if (h = a.grep(h, function(a) {
                return /^auto|left|right|top|bottom$/.test(a)
            }), e.orientation = {
                x: "auto",
                y: "auto"
            }, i && "auto" !== i)
                if (1 === h.length) switch (h[0]) {
                    case "top":
                    case "bottom":
                        e.orientation.y = h[0];
                        break;
                    case "left":
                    case "right":
                        e.orientation.x = h[0]
                } else i = a.grep(h, function(a) {
                    return /^left|right$/.test(a)
                }), e.orientation.x = i[0] || "auto", i = a.grep(h, function(a) {
                    return /^top|bottom$/.test(a)
                }), e.orientation.y = i[0] || "auto";
            else;
            if (e.defaultViewDate) {
                var j = e.defaultViewDate.year || (new Date).getFullYear(),
                    k = e.defaultViewDate.month || 0,
                    l = e.defaultViewDate.day || 1;
                e.defaultViewDate = c(j, k, l)
            } else e.defaultViewDate = d()
        },
        _events: [],
        _secondaryEvents: [],
        _applyEvents: function(a) {
            for (var c, d, e, f = 0; f < a.length; f++) c = a[f][0], 2 === a[f].length ? (d = b, e = a[f][1]) : 3 === a[f].length && (d = a[f][1], e = a[f][2]), c.on(e, d)
        },
        _unapplyEvents: function(a) {
            for (var c, d, e, f = 0; f < a.length; f++) c = a[f][0], 2 === a[f].length ? (e = b, d = a[f][1]) : 3 === a[f].length && (e = a[f][1], d = a[f][2]), c.off(d, e)
        },
        _buildEvents: function() {
            var b = {
                keyup: a.proxy(function(b) {
                    -1 === a.inArray(b.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) && this.update()
                }, this),
                keydown: a.proxy(this.keydown, this),
                paste: a.proxy(this.paste, this)
            };
            this.o.showOnFocus === !0 && (b.focus = a.proxy(this.show, this)), this.isInput ? this._events = [
                [this.element, b]
            ] : this.component && this.hasInput ? this._events = [
                [this.inputField, b],
                [this.component, {
                    click: a.proxy(this.show, this)
                }]
            ] : this._events = [
                [this.element, {
                    click: a.proxy(this.show, this),
                    keydown: a.proxy(this.keydown, this)
                }]
            ], this._events.push([this.element, "*", {
                blur: a.proxy(function(a) {
                    this._focused_from = a.target
                }, this)
            }], [this.element, {
                blur: a.proxy(function(a) {
                    this._focused_from = a.target
                }, this)
            }]), this.o.immediateUpdates && this._events.push([this.element, {
                "changeYear changeMonth": a.proxy(function(a) {
                    this.update(a.date)
                }, this)
            }]), this._secondaryEvents = [
                [this.picker, {
                    click: a.proxy(this.click, this)
                }],
                [a(window), {
                    resize: a.proxy(this.place, this)
                }],
                [a(document), {
                    mousedown: a.proxy(function(a) {
                        this.element.is(a.target) || this.element.find(a.target).length || this.picker.is(a.target) || this.picker.find(a.target).length || this.isInline || this.hide()
                    }, this)
                }]
            ]
        },
        _attachEvents: function() {
            this._detachEvents(), this._applyEvents(this._events)
        },
        _detachEvents: function() {
            this._unapplyEvents(this._events)
        },
        _attachSecondaryEvents: function() {
            this._detachSecondaryEvents(), this._applyEvents(this._secondaryEvents)
        },
        _detachSecondaryEvents: function() {
            this._unapplyEvents(this._secondaryEvents)
        },
        _trigger: function(b, c) {
            var d = c || this.dates.get(-1),
                e = this._utc_to_local(d);
            this.element.trigger({
                type: b,
                date: e,
                dates: a.map(this.dates, this._utc_to_local),
                format: a.proxy(function(a, b) {
                    0 === arguments.length ? (a = this.dates.length - 1, b = this.o.format) : "string" == typeof a && (b = a, a = this.dates.length - 1), b = b || this.o.format;
                    var c = this.dates.get(a);
                    return r.formatDate(c, b, this.o.language)
                }, this)
            })
        },
        show: function() {
            return this.inputField.prop("disabled") || this.inputField.prop("readonly") && this.o.enableOnReadonly === !1 ? void 0 : (this.isInline || this.picker.appendTo(this.o.container), this.place(), this.picker.show(), this._attachSecondaryEvents(), this._trigger("show"), (window.navigator.msMaxTouchPoints || "ontouchstart" in document) && this.o.disableTouchKeyboard && a(this.element).blur(), this)
        },
        hide: function() {
            return this.isInline || !this.picker.is(":visible") ? this : (this.focusDate = null, this.picker.hide().detach(), this._detachSecondaryEvents(), this.viewMode = this.o.startView, this.showMode(), this.o.forceParse && this.inputField.val() && this.setValue(), this._trigger("hide"), this)
        },
        destroy: function() {
            return this.hide(), this._detachEvents(), this._detachSecondaryEvents(), this.picker.remove(), delete this.element.data().datepicker, this.isInput || delete this.element.data().date, this
        },
        paste: function(b) {
            var c;
            if (b.originalEvent.clipboardData && b.originalEvent.clipboardData.types && -1 !== a.inArray("text/plain", b.originalEvent.clipboardData.types)) c = b.originalEvent.clipboardData.getData("text/plain");
            else {
                if (!window.clipboardData) return;
                c = window.clipboardData.getData("Text")
            }
            this.setDate(c), this.update(), b.preventDefault()
        },
        _utc_to_local: function(a) {
            return a && new Date(a.getTime() + 6e4 * a.getTimezoneOffset())
        },
        _local_to_utc: function(a) {
            return a && new Date(a.getTime() - 6e4 * a.getTimezoneOffset())
        },
        _zero_time: function(a) {
            return a && new Date(a.getFullYear(), a.getMonth(), a.getDate())
        },
        _zero_utc_time: function(a) {
            return a && new Date(Date.UTC(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate()))
        },
        getDates: function() {
            return a.map(this.dates, this._utc_to_local)
        },
        getUTCDates: function() {
            return a.map(this.dates, function(a) {
                return new Date(a)
            })
        },
        getDate: function() {
            return this._utc_to_local(this.getUTCDate())
        },
        getUTCDate: function() {
            var a = this.dates.get(-1);
            return "undefined" != typeof a ? new Date(a) : null
        },
        clearDates: function() {
            this.inputField && this.inputField.val(""), this.update(), this._trigger("changeDate"), this.o.autoclose && this.hide()
        },
        setDates: function() {
            var b = a.isArray(arguments[0]) ? arguments[0] : arguments;
            return this.update.apply(this, b), this._trigger("changeDate"), this.setValue(), this
        },
        setUTCDates: function() {
            var b = a.isArray(arguments[0]) ? arguments[0] : arguments;
            return this.update.apply(this, a.map(b, this._utc_to_local)), this._trigger("changeDate"), this.setValue(), this
        },
        setDate: f("setDates"),
        setUTCDate: f("setUTCDates"),
        remove: f("destroy"),
        setValue: function() {
            var a = this.getFormattedDate();
            return this.inputField.val(a), this
        },
        getFormattedDate: function(c) {
            c === b && (c = this.o.format);
            var d = this.o.language;
            return a.map(this.dates, function(a) {
                return r.formatDate(a, c, d)
            }).join(this.o.multidateSeparator)
        },
        getStartDate: function() {
            return this.o.startDate
        },
        setStartDate: function(a) {
            return this._process_options({
                startDate: a
            }), this.update(), this.updateNavArrows(), this
        },
        getEndDate: function() {
            return this.o.endDate
        },
        setEndDate: function(a) {
            return this._process_options({
                endDate: a
            }), this.update(), this.updateNavArrows(), this
        },
        setDaysOfWeekDisabled: function(a) {
            return this._process_options({
                daysOfWeekDisabled: a
            }), this.update(), this.updateNavArrows(), this
        },
        setDaysOfWeekHighlighted: function(a) {
            return this._process_options({
                daysOfWeekHighlighted: a
            }), this.update(), this
        },
        setDatesDisabled: function(a) {
            this._process_options({
                datesDisabled: a
            }), this.update(), this.updateNavArrows()
        },
        place: function() {
            if (this.isInline) return this;
            var b = this.picker.outerWidth(),
                c = this.picker.outerHeight(),
                d = 10,
                e = a(this.o.container),
                f = e.width(),
                g = "body" === this.o.container ? a(document).scrollTop() : e.scrollTop(),
                h = e.offset(),
                i = [];
            this.element.parents().each(function() {
                var b = a(this).css("z-index");
                "auto" !== b && 0 !== b && i.push(parseInt(b))
            });
            var j = Math.max.apply(Math, i) + this.o.zIndexOffset,
                k = this.component ? this.component.parent().offset() : this.element.offset(),
                l = this.component ? this.component.outerHeight(!0) : this.element.outerHeight(!1),
                m = this.component ? this.component.outerWidth(!0) : this.element.outerWidth(!1),
                n = k.left - h.left,
                o = k.top - h.top;
            "body" !== this.o.container && (o += g), this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"), "auto" !== this.o.orientation.x ? (this.picker.addClass("datepicker-orient-" + this.o.orientation.x), "right" === this.o.orientation.x && (n -= b - m)) : k.left < 0 ? (this.picker.addClass("datepicker-orient-left"), n -= k.left - d) : n + b > f ? (this.picker.addClass("datepicker-orient-right"), n += m - b) : this.picker.addClass("datepicker-orient-left");
            var p, q = this.o.orientation.y;
            if ("auto" === q && (p = -g + o - c, q = 0 > p ? "bottom" : "top"), this.picker.addClass("datepicker-orient-" + q), "top" === q ? o -= c + parseInt(this.picker.css("padding-top")) : o += l, this.o.rtl) {
                var r = f - (n + m);
                this.picker.css({
                    top: o,
                    right: r,
                    zIndex: j
                })
            } else this.picker.css({
                top: o,
                left: n,
                zIndex: j
            });
            return this
        },
        _allow_update: !0,
        update: function() {
            if (!this._allow_update) return this;
            var b = this.dates.copy(),
                c = [],
                d = !1;
            return arguments.length ? (a.each(arguments, a.proxy(function(a, b) {
                b instanceof Date && (b = this._local_to_utc(b)), c.push(b)
            }, this)), d = !0) : (c = this.isInput ? this.element.val() : this.element.data("date") || this.inputField.val(), c = c && this.o.multidate ? c.split(this.o.multidateSeparator) : [c], delete this.element.data().date), c = a.map(c, a.proxy(function(a) {
                return r.parseDate(a, this.o.format, this.o.language, this.o.assumeNearbyYear)
            }, this)), c = a.grep(c, a.proxy(function(a) {
                return !this.dateWithinRange(a) || !a
            }, this), !0), this.dates.replace(c), this.dates.length ? this.viewDate = new Date(this.dates.get(-1)) : this.viewDate < this.o.startDate ? this.viewDate = new Date(this.o.startDate) : this.viewDate > this.o.endDate ? this.viewDate = new Date(this.o.endDate) : this.viewDate = this.o.defaultViewDate, d ? this.setValue() : c.length && String(b) !== String(this.dates) && this._trigger("changeDate"), !this.dates.length && b.length && this._trigger("clearDate"), this.fill(), this.element.change(), this
        },
        fillDow: function() {
            var b = this.o.weekStart,
                c = "<tr>";
            for (this.o.calendarWeeks && (this.picker.find(".datepicker-days .datepicker-switch").attr("colspan", function(a, b) {
                return parseInt(b) + 1
            }), c += '<th class="cw">&#160;</th>'); b < this.o.weekStart + 7;) c += '<th class="dow', a.inArray(b, this.o.daysOfWeekDisabled) > -1 && (c += " disabled"), c += '">' + q[this.o.language].daysMin[b++ % 7] + "</th>";
            c += "</tr>", this.picker.find(".datepicker-days thead").append(c)
        },
        fillMonths: function() {
            for (var a = this._utc_to_local(this.viewDate), b = "", c = 0; 12 > c;) {
                var d = a && a.getMonth() === c ? " focused" : "";
                b += '<span class="month' + d + '">' + q[this.o.language].monthsShort[c++] + "</span>"
            }
            this.picker.find(".datepicker-months td").html(b)
        },
        setRange: function(b) {
            b && b.length ? this.range = a.map(b, function(a) {
                return a.valueOf()
            }) : delete this.range, this.fill()
        },
        getClassNames: function(b) {
            var c = [],
                d = this.viewDate.getUTCFullYear(),
                e = this.viewDate.getUTCMonth(),
                f = new Date;
            return b.getUTCFullYear() < d || b.getUTCFullYear() === d && b.getUTCMonth() < e ? c.push("old") : (b.getUTCFullYear() > d || b.getUTCFullYear() === d && b.getUTCMonth() > e) && c.push("new"), this.focusDate && b.valueOf() === this.focusDate.valueOf() && c.push("focused"), this.o.todayHighlight && b.getUTCFullYear() === f.getFullYear() && b.getUTCMonth() === f.getMonth() && b.getUTCDate() === f.getDate() && c.push("today"), -1 !== this.dates.contains(b) && c.push("active"), this.dateWithinRange(b) || c.push("disabled"), this.dateIsDisabled(b) && c.push("disabled", "disabled-date"), -1 !== a.inArray(b.getUTCDay(), this.o.daysOfWeekHighlighted) && c.push("highlighted"), this.range && (b > this.range[0] && b < this.range[this.range.length - 1] && c.push("range"), -1 !== a.inArray(b.valueOf(), this.range) && c.push("selected"), b.valueOf() === this.range[0] && c.push("range-start"), b.valueOf() === this.range[this.range.length - 1] && c.push("range-end")), c
        },
        _fill_yearsView: function(c, d, e, f, g, h, i, j) {
            var k, l, m, n, o, p, q, r, s, t, u;
            for (k = "", l = this.picker.find(c), m = parseInt(g / e, 10) * e, o = parseInt(h / f, 10) * f, p = parseInt(i / f, 10) * f, n = a.map(this.dates, function(a) {
                return parseInt(a.getUTCFullYear() / f, 10) * f
            }), l.find(".datepicker-switch").text(m + "-" + (m + 9 * f)), q = m - f, r = -1; 11 > r; r += 1) s = [d], t = null, -1 === r ? s.push("old") : 10 === r && s.push("new"), -1 !== a.inArray(q, n) && s.push("active"), (o > q || q > p) && s.push("disabled"), q === this.viewDate.getFullYear() && s.push("focused"), j !== a.noop && (u = j(new Date(q, 0, 1)), u === b ? u = {} : "boolean" == typeof u ? u = {
                enabled: u
            } : "string" == typeof u && (u = {
                classes: u
            }), u.enabled === !1 && s.push("disabled"), u.classes && (s = s.concat(u.classes.split(/\s+/))), u.tooltip && (t = u.tooltip)), k += '<span class="' + s.join(" ") + '"' + (t ? ' title="' + t + '"' : "") + ">" + q + "</span>", q += f;
            l.find("td").html(k)
        },
        fill: function() {
            var d, e, f = new Date(this.viewDate),
                g = f.getUTCFullYear(),
                h = f.getUTCMonth(),
                i = this.o.startDate !== -(1 / 0) ? this.o.startDate.getUTCFullYear() : -(1 / 0),
                j = this.o.startDate !== -(1 / 0) ? this.o.startDate.getUTCMonth() : -(1 / 0),
                k = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0,
                l = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0,
                m = q[this.o.language].today || q.en.today || "",
                n = q[this.o.language].clear || q.en.clear || "",
                o = q[this.o.language].titleFormat || q.en.titleFormat;
            if (!isNaN(g) && !isNaN(h)) {
                this.picker.find(".datepicker-days .datepicker-switch").text(r.formatDate(f, o, this.o.language)), this.picker.find("tfoot .today").text(m).toggle(this.o.todayBtn !== !1), this.picker.find("tfoot .clear").text(n).toggle(this.o.clearBtn !== !1), this.picker.find("thead .datepicker-title").text(this.o.title).toggle("" !== this.o.title), this.updateNavArrows(), this.fillMonths();
                var p = c(g, h - 1, 28),
                    s = r.getDaysInMonth(p.getUTCFullYear(), p.getUTCMonth());
                p.setUTCDate(s), p.setUTCDate(s - (p.getUTCDay() - this.o.weekStart + 7) % 7);
                var t = new Date(p);
                p.getUTCFullYear() < 100 && t.setUTCFullYear(p.getUTCFullYear()), t.setUTCDate(t.getUTCDate() + 42), t = t.valueOf();
                for (var u, v = []; p.valueOf() < t;) {
                    if (p.getUTCDay() === this.o.weekStart && (v.push("<tr>"), this.o.calendarWeeks)) {
                        var w = new Date(+p + (this.o.weekStart - p.getUTCDay() - 7) % 7 * 864e5),
                            x = new Date(Number(w) + (11 - w.getUTCDay()) % 7 * 864e5),
                            y = new Date(Number(y = c(x.getUTCFullYear(), 0, 1)) + (11 - y.getUTCDay()) % 7 * 864e5),
                            z = (x - y) / 864e5 / 7 + 1;
                        v.push('<td class="cw">' + z + "</td>")
                    }
                    u = this.getClassNames(p), u.push("day"), this.o.beforeShowDay !== a.noop && (e = this.o.beforeShowDay(this._utc_to_local(p)), e === b ? e = {} : "boolean" == typeof e ? e = {
                        enabled: e
                    } : "string" == typeof e && (e = {
                        classes: e
                    }), e.enabled === !1 && u.push("disabled"), e.classes && (u = u.concat(e.classes.split(/\s+/))), e.tooltip && (d = e.tooltip)), u = a.isFunction(a.uniqueSort) ? a.uniqueSort(u) : a.unique(u), v.push('<td class="' + u.join(" ") + '"' + (d ? ' title="' + d + '"' : "") + ">" + p.getUTCDate() + "</td>"), d = null, p.getUTCDay() === this.o.weekEnd && v.push("</tr>"), p.setUTCDate(p.getUTCDate() + 1)
                }
                this.picker.find(".datepicker-days tbody").empty().append(v.join(""));
                var A = q[this.o.language].monthsTitle || q.en.monthsTitle || "Months",
                    B = this.picker.find(".datepicker-months").find(".datepicker-switch").text(this.o.maxViewMode < 2 ? A : g).end().find("span").removeClass("active");
                if (a.each(this.dates, function(a, b) {
                    b.getUTCFullYear() === g && B.eq(b.getUTCMonth()).addClass("active")
                }), (i > g || g > k) && B.addClass("disabled"), g === i && B.slice(0, j).addClass("disabled"), g === k && B.slice(l + 1).addClass("disabled"), this.o.beforeShowMonth !== a.noop) {
                    var C = this;
                    a.each(B, function(c, d) {
                        var e = new Date(g, c, 1),
                            f = C.o.beforeShowMonth(e);
                        f === b ? f = {} : "boolean" == typeof f ? f = {
                            enabled: f
                        } : "string" == typeof f && (f = {
                            classes: f
                        }), f.enabled !== !1 || a(d).hasClass("disabled") || a(d).addClass("disabled"), f.classes && a(d).addClass(f.classes), f.tooltip && a(d).prop("title", f.tooltip)
                    })
                }
                this._fill_yearsView(".datepicker-years", "year", 10, 1, g, i, k, this.o.beforeShowYear), this._fill_yearsView(".datepicker-decades", "decade", 100, 10, g, i, k, this.o.beforeShowDecade), this._fill_yearsView(".datepicker-centuries", "century", 1e3, 100, g, i, k, this.o.beforeShowCentury)
            }
        },
        updateNavArrows: function() {
            if (this._allow_update) {
                var a = new Date(this.viewDate),
                    b = a.getUTCFullYear(),
                    c = a.getUTCMonth();
                switch (this.viewMode) {
                    case 0:
                        this.o.startDate !== -(1 / 0) && b <= this.o.startDate.getUTCFullYear() && c <= this.o.startDate.getUTCMonth() ? this.picker.find(".prev").css({
                            visibility: "hidden"
                        }) : this.picker.find(".prev").css({
                            visibility: "visible"
                        }), this.o.endDate !== 1 / 0 && b >= this.o.endDate.getUTCFullYear() && c >= this.o.endDate.getUTCMonth() ? this.picker.find(".next").css({
                            visibility: "hidden"
                        }) : this.picker.find(".next").css({
                            visibility: "visible"
                        });
                        break;
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                        this.o.startDate !== -(1 / 0) && b <= this.o.startDate.getUTCFullYear() || this.o.maxViewMode < 2 ? this.picker.find(".prev").css({
                            visibility: "hidden"
                        }) : this.picker.find(".prev").css({
                            visibility: "visible"
                        }), this.o.endDate !== 1 / 0 && b >= this.o.endDate.getUTCFullYear() || this.o.maxViewMode < 2 ? this.picker.find(".next").css({
                            visibility: "hidden"
                        }) : this.picker.find(".next").css({
                            visibility: "visible"
                        })
                }
            }
        },
        click: function(b) {
            b.preventDefault(), b.stopPropagation();
            var e, f, g, h, i, j, k;
            e = a(b.target), e.hasClass("datepicker-switch") && this.showMode(1);
            var l = e.closest(".prev, .next");
            l.length > 0 && (f = r.modes[this.viewMode].navStep * (l.hasClass("prev") ? -1 : 1), 0 === this.viewMode ? (this.viewDate = this.moveMonth(this.viewDate, f), this._trigger("changeMonth", this.viewDate)) : (this.viewDate = this.moveYear(this.viewDate, f), 1 === this.viewMode && this._trigger("changeYear", this.viewDate)), this.fill()), e.hasClass("today") && !e.hasClass("day") && (this.showMode(-2), this._setDate(d(), "linked" === this.o.todayBtn ? null : "view")), e.hasClass("clear") && this.clearDates(), e.hasClass("disabled") || (e.hasClass("day") && (g = parseInt(e.text(), 10) || 1, h = this.viewDate.getUTCFullYear(), i = this.viewDate.getUTCMonth(), e.hasClass("old") && (0 === i ? (i = 11, h -= 1, j = !0, k = !0) : (i -= 1, j = !0)), e.hasClass("new") && (11 === i ? (i = 0, h += 1, j = !0, k = !0) : (i += 1, j = !0)), this._setDate(c(h, i, g)), k && this._trigger("changeYear", this.viewDate), j && this._trigger("changeMonth", this.viewDate)), e.hasClass("month") && (this.viewDate.setUTCDate(1), g = 1, i = e.parent().find("span").index(e), h = this.viewDate.getUTCFullYear(), this.viewDate.setUTCMonth(i), this._trigger("changeMonth", this.viewDate), 1 === this.o.minViewMode ? (this._setDate(c(h, i, g)), this.showMode()) : this.showMode(-1), this.fill()), (e.hasClass("year") || e.hasClass("decade") || e.hasClass("century")) && (this.viewDate.setUTCDate(1), g = 1, i = 0, h = parseInt(e.text(), 10) || 0, this.viewDate.setUTCFullYear(h), e.hasClass("year") && (this._trigger("changeYear", this.viewDate), 2 === this.o.minViewMode && this._setDate(c(h, i, g))), e.hasClass("decade") && (this._trigger("changeDecade", this.viewDate), 3 === this.o.minViewMode && this._setDate(c(h, i, g))), e.hasClass("century") && (this._trigger("changeCentury", this.viewDate), 4 === this.o.minViewMode && this._setDate(c(h, i, g))), this.showMode(-1), this.fill())), this.picker.is(":visible") && this._focused_from && a(this._focused_from).focus(), delete this._focused_from
        },
        _toggle_multidate: function(a) {
            var b = this.dates.contains(a);
            if (a || this.dates.clear(), -1 !== b ? (this.o.multidate === !0 || this.o.multidate > 1 || this.o.toggleActive) && this.dates.remove(b) : this.o.multidate === !1 ? (this.dates.clear(), this.dates.push(a)) : this.dates.push(a), "number" == typeof this.o.multidate)
                for (; this.dates.length > this.o.multidate;) this.dates.remove(0)
        },
        _setDate: function(a, b) {
            b && "date" !== b || this._toggle_multidate(a && new Date(a)), b && "view" !== b || (this.viewDate = a && new Date(a)), this.fill(), this.setValue(), b && "view" === b || this._trigger("changeDate"), this.inputField && this.inputField.change(), !this.o.autoclose || b && "date" !== b || this.hide()
        },
        moveDay: function(a, b) {
            var c = new Date(a);
            return c.setUTCDate(a.getUTCDate() + b), c
        },
        moveWeek: function(a, b) {
            return this.moveDay(a, 7 * b)
        },
        moveMonth: function(a, b) {
            if (!g(a)) return this.o.defaultViewDate;
            if (!b) return a;
            var c, d, e = new Date(a.valueOf()),
                f = e.getUTCDate(),
                h = e.getUTCMonth(),
                i = Math.abs(b);
            if (b = b > 0 ? 1 : -1, 1 === i) d = -1 === b ? function() {
                return e.getUTCMonth() === h
            } : function() {
                return e.getUTCMonth() !== c
            }, c = h + b, e.setUTCMonth(c), (0 > c || c > 11) && (c = (c + 12) % 12);
            else {
                for (var j = 0; i > j; j++) e = this.moveMonth(e, b);
                c = e.getUTCMonth(), e.setUTCDate(f), d = function() {
                    return c !== e.getUTCMonth()
                }
            }
            for (; d();) e.setUTCDate(--f), e.setUTCMonth(c);
            return e
        },
        moveYear: function(a, b) {
            return this.moveMonth(a, 12 * b)
        },
        moveAvailableDate: function(a, b, c) {
            do {
                if (a = this[c](a, b), !this.dateWithinRange(a)) return !1;
                c = "moveDay"
            } while (this.dateIsDisabled(a));
            return a
        },
        weekOfDateIsDisabled: function(b) {
            return -1 !== a.inArray(b.getUTCDay(), this.o.daysOfWeekDisabled)
        },
        dateIsDisabled: function(b) {
            return this.weekOfDateIsDisabled(b) || a.grep(this.o.datesDisabled, function(a) {
                return e(b, a)
            }).length > 0
        },
        dateWithinRange: function(a) {
            return a >= this.o.startDate && a <= this.o.endDate
        },
        keydown: function(a) {
            if (!this.picker.is(":visible")) return void((40 === a.keyCode || 27 === a.keyCode) && (this.show(), a.stopPropagation()));
            var b, c, d = !1,
                e = this.focusDate || this.viewDate;
            switch (a.keyCode) {
                case 27:
                    this.focusDate ? (this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill()) : this.hide(), a.preventDefault(), a.stopPropagation();
                    break;
                case 37:
                case 38:
                case 39:
                case 40:
                    if (!this.o.keyboardNavigation || 7 === this.o.daysOfWeekDisabled.length) break;
                    b = 37 === a.keyCode || 38 === a.keyCode ? -1 : 1, 0 === this.viewMode ? a.ctrlKey ? (c = this.moveAvailableDate(e, b, "moveYear"), c && this._trigger("changeYear", this.viewDate)) : a.shiftKey ? (c = this.moveAvailableDate(e, b, "moveMonth"), c && this._trigger("changeMonth", this.viewDate)) : 37 === a.keyCode || 39 === a.keyCode ? c = this.moveAvailableDate(e, b, "moveDay") : this.weekOfDateIsDisabled(e) || (c = this.moveAvailableDate(e, b, "moveWeek")) : 1 === this.viewMode ? ((38 === a.keyCode || 40 === a.keyCode) && (b = 4 * b), c = this.moveAvailableDate(e, b, "moveMonth")) : 2 === this.viewMode && ((38 === a.keyCode || 40 === a.keyCode) && (b = 4 * b), c = this.moveAvailableDate(e, b, "moveYear")), c && (this.focusDate = this.viewDate = c, this.setValue(), this.fill(), a.preventDefault());
                    break;
                case 13:
                    if (!this.o.forceParse) break;
                    e = this.focusDate || this.dates.get(-1) || this.viewDate, this.o.keyboardNavigation && (this._toggle_multidate(e), d = !0), this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.setValue(), this.fill(), this.picker.is(":visible") && (a.preventDefault(), a.stopPropagation(), this.o.autoclose && this.hide());
                    break;
                case 9:
                    this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill(), this.hide()
            }
            d && (this.dates.length ? this._trigger("changeDate") : this._trigger("clearDate"), this.inputField && this.inputField.change())
        },
        showMode: function(a) {
            a && (this.viewMode = Math.max(this.o.minViewMode, Math.min(this.o.maxViewMode, this.viewMode + a))), this.picker.children("div").hide().filter(".datepicker-" + r.modes[this.viewMode].clsName).show(), this.updateNavArrows()
        }
    };
    var l = function(b, c) {
        a(b).data("datepicker", this), this.element = a(b), this.inputs = a.map(c.inputs, function(a) {
            return a.jquery ? a[0] : a
        }), delete c.inputs, n.call(a(this.inputs), c).on("changeDate", a.proxy(this.dateUpdated, this)), this.pickers = a.map(this.inputs, function(b) {
            return a(b).data("datepicker")
        }), this.updateDates()
    };
    l.prototype = {
        updateDates: function() {
            this.dates = a.map(this.pickers, function(a) {
                return a.getUTCDate()
            }), this.updateRanges()
        },
        updateRanges: function() {
            var b = a.map(this.dates, function(a) {
                return a.valueOf()
            });
            a.each(this.pickers, function(a, c) {
                c.setRange(b)
            })
        },
        dateUpdated: function(b) {
            if (!this.updating) {
                this.updating = !0;
                var c = a(b.target).data("datepicker");
                if ("undefined" != typeof c) {
                    var d = c.getUTCDate(),
                        e = a.inArray(b.target, this.inputs),
                        f = e - 1,
                        g = e + 1,
                        h = this.inputs.length;
                    if (-1 !== e) {
                        if (a.each(this.pickers, function(a, b) {
                            b.getUTCDate() || b.setUTCDate(d)
                        }), d < this.dates[f])
                            for (; f >= 0 && d < this.dates[f];) this.pickers[f--].setUTCDate(d);
                        else if (d > this.dates[g])
                            for (; h > g && d > this.dates[g];) this.pickers[g++].setUTCDate(d);
                        this.updateDates(), delete this.updating
                    }
                }
            }
        },
        remove: function() {
            a.map(this.pickers, function(a) {
                a.remove()
            }), delete this.element.data().datepicker
        }
    };
    var m = a.fn.datepicker,
        n = function(c) {
            var d = Array.apply(null, arguments);
            d.shift();
            var e;
            if (this.each(function() {
                var b = a(this),
                    f = b.data("datepicker"),
                    g = "object" == typeof c && c;
                if (!f) {
                    var j = h(this, "date"),
                        m = a.extend({}, o, j, g),
                        n = i(m.language),
                        p = a.extend({}, o, n, j, g);
                    b.hasClass("input-daterange") || p.inputs ? (a.extend(p, {
                        inputs: p.inputs || b.find("input").toArray()
                    }), f = new l(this, p)) : f = new k(this, p), b.data("datepicker", f)
                }
                "string" == typeof c && "function" == typeof f[c] && (e = f[c].apply(f, d))
            }), e === b || e instanceof k || e instanceof l) return this;
            if (this.length > 1) throw new Error("Using only allowed for the collection of a single element (" + c + " function)");
            return e
        };
    a.fn.datepicker = n;
    var o = a.fn.datepicker.defaults = {
            assumeNearbyYear: !1,
            autoclose: !1,
            beforeShowDay: a.noop,
            beforeShowMonth: a.noop,
            beforeShowYear: a.noop,
            beforeShowDecade: a.noop,
            beforeShowCentury: a.noop,
            calendarWeeks: !1,
            clearBtn: !1,
            toggleActive: !1,
            daysOfWeekDisabled: [],
            daysOfWeekHighlighted: [],
            datesDisabled: [],
            endDate: 1 / 0,
            forceParse: !0,
            format: "mm/dd/yyyy",
            keyboardNavigation: !0,
            language: "en",
            minViewMode: 0,
            maxViewMode: 4,
            multidate: !1,
            multidateSeparator: ",",
            orientation: "auto",
            rtl: !1,
            startDate: -(1 / 0),
            startView: 0,
            todayBtn: !1,
            todayHighlight: !1,
            weekStart: 0,
            disableTouchKeyboard: !1,
            enableOnReadonly: !0,
            showOnFocus: !0,
            zIndexOffset: 10,
            container: "body",
            immediateUpdates: !1,
            title: "",
            templates: {
                leftArrow: "&laquo;",
                rightArrow: "&raquo;"
            }
        },
        p = a.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"];
    a.fn.datepicker.Constructor = k;
    var q = a.fn.datepicker.dates = {
            en: {
                days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                today: "Today",
                clear: "Clear",
                titleFormat: "MM yyyy"
            }
        },
        r = {
            modes: [{
                clsName: "days",
                navFnc: "Month",
                navStep: 1
            }, {
                clsName: "months",
                navFnc: "FullYear",
                navStep: 1
            }, {
                clsName: "years",
                navFnc: "FullYear",
                navStep: 10
            }, {
                clsName: "decades",
                navFnc: "FullDecade",
                navStep: 100
            }, {
                clsName: "centuries",
                navFnc: "FullCentury",
                navStep: 1e3
            }],
            isLeapYear: function(a) {
                return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
            },
            getDaysInMonth: function(a, b) {
                return [31, r.isLeapYear(a) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][b]
            },
            validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
            nonpunctuation: /[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,
            parseFormat: function(a) {
                if ("function" == typeof a.toValue && "function" == typeof a.toDisplay) return a;
                var b = a.replace(this.validParts, "\x00").split("\x00"),
                    c = a.match(this.validParts);
                if (!b || !b.length || !c || 0 === c.length) throw new Error("Invalid date format.");
                return {
                    separators: b,
                    parts: c
                }
            },
            parseDate: function(e, f, g, h) {
                function i(a, b) {
                    return b === !0 && (b = 10), 100 > a && (a += 2e3, a > (new Date).getFullYear() + b && (a -= 100)), a
                }

                function j() {
                    var a = this.slice(0, s[n].length),
                        b = s[n].slice(0, a.length);
                    return a.toLowerCase() === b.toLowerCase()
                }
                if (!e) return b;
                if (e instanceof Date) return e;
                if ("string" == typeof f && (f = r.parseFormat(f)), f.toValue) return f.toValue(e, f, g);
                var l, m, n, o, p = /([\-+]\d+)([dmwy])/,
                    s = e.match(/([\-+]\d+)([dmwy])/g),
                    t = {
                        d: "moveDay",
                        m: "moveMonth",
                        w: "moveWeek",
                        y: "moveYear"
                    },
                    u = {
                        yesterday: "-1d",
                        today: "+0d",
                        tomorrow: "+1d"
                    };
                if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(e)) {
                    for (e = new Date, n = 0; n < s.length; n++) l = p.exec(s[n]), m = parseInt(l[1]), o = t[l[2]], e = k.prototype[o](e, m);
                    return c(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate())
                }
                if ("undefined" != typeof u[e] && (e = u[e], s = e.match(/([\-+]\d+)([dmwy])/g), /^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(e))) {
                    for (e = new Date, n = 0; n < s.length; n++) l = p.exec(s[n]), m = parseInt(l[1]), o = t[l[2]], e = k.prototype[o](e, m);
                    return c(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate())
                }
                s = e && e.match(this.nonpunctuation) || [], e = new Date;
                var v, w, x = {},
                    y = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"],
                    z = {
                        yyyy: function(a, b) {
                            return a.setUTCFullYear(h ? i(b, h) : b)
                        },
                        yy: function(a, b) {
                            return a.setUTCFullYear(h ? i(b, h) : b)
                        },
                        m: function(a, b) {
                            if (isNaN(a)) return a;
                            for (b -= 1; 0 > b;) b += 12;
                            for (b %= 12, a.setUTCMonth(b); a.getUTCMonth() !== b;) a.setUTCDate(a.getUTCDate() - 1);
                            return a
                        },
                        d: function(a, b) {
                            return a.setUTCDate(b)
                        }
                    };
                z.M = z.MM = z.mm = z.m, z.dd = z.d, e = d();
                var A = f.parts.slice();
                if (s.length !== A.length && (A = a(A).filter(function(b, c) {
                    return -1 !== a.inArray(c, y)
                }).toArray()), s.length === A.length) {
                    var B;
                    for (n = 0, B = A.length; B > n; n++) {
                        if (v = parseInt(s[n], 10), l = A[n], isNaN(v)) switch (l) {
                            case "MM":
                                w = a(q[g].months).filter(j), v = a.inArray(w[0], q[g].months) + 1;
                                break;
                            case "M":
                                w = a(q[g].monthsShort).filter(j), v = a.inArray(w[0], q[g].monthsShort) + 1
                        }
                        x[l] = v
                    }
                    var C, D;
                    for (n = 0; n < y.length; n++) D = y[n], D in x && !isNaN(x[D]) && (C = new Date(e), z[D](C, x[D]), isNaN(C) || (e = C))
                }
                return e
            },
            formatDate: function(b, c, d) {
                if (!b) return "";
                if ("string" == typeof c && (c = r.parseFormat(c)), c.toDisplay) return c.toDisplay(b, c, d);
                var e = {
                    d: b.getUTCDate(),
                    D: q[d].daysShort[b.getUTCDay()],
                    DD: q[d].days[b.getUTCDay()],
                    m: b.getUTCMonth() + 1,
                    M: q[d].monthsShort[b.getUTCMonth()],
                    MM: q[d].months[b.getUTCMonth()],
                    yy: b.getUTCFullYear().toString().substring(2),
                    yyyy: b.getUTCFullYear()
                };
                e.dd = (e.d < 10 ? "0" : "") + e.d, e.mm = (e.m < 10 ? "0" : "") + e.m, b = [];
                for (var f = a.extend([], c.separators), g = 0, h = c.parts.length; h >= g; g++) f.length && b.push(f.shift()), b.push(e[c.parts[g]]);
                return b.join("")
            },
            headTemplate: '<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev">&laquo;</th><th colspan="5" class="datepicker-switch"></th><th class="next">&raquo;</th></tr></thead>',
            contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
            footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'
        };
    r.template = '<div class="datepicker"><div class="datepicker-days"><table class="table-condensed">' + r.headTemplate + "<tbody></tbody>" + r.footTemplate + '</table></div><div class="datepicker-months"><table class="table-condensed">' + r.headTemplate + r.contTemplate + r.footTemplate + '</table></div><div class="datepicker-years"><table class="table-condensed">' + r.headTemplate + r.contTemplate + r.footTemplate + '</table></div><div class="datepicker-decades"><table class="table-condensed">' + r.headTemplate + r.contTemplate + r.footTemplate + '</table></div><div class="datepicker-centuries"><table class="table-condensed">' + r.headTemplate + r.contTemplate + r.footTemplate + "</table></div></div>", a.fn.datepicker.DPGlobal = r, a.fn.datepicker.noConflict = function() {
        return a.fn.datepicker = m, this
    }, a.fn.datepicker.version = "1.6.4", a(document).on("focus.datepicker.data-api click.datepicker.data-api", '[data-provide="datepicker"]', function(b) {
        var c = a(this);
        c.data("datepicker") || (b.preventDefault(), n.call(c, "show"))
    }), a(function() {
        n.call(a('[data-provide="datepicker-inline"]'))
    })
});
! function(a, b) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : a.moment = b()
}(this, function() {
    "use strict";

    function a() {
        return sd.apply(null, arguments)
    }

    function b(a) {
        sd = a
    }

    function c(a) {
        return a instanceof Array || "[object Array]" === Object.prototype.toString.call(a)
    }

    function d(a) {
        return null != a && "[object Object]" === Object.prototype.toString.call(a)
    }

    function e(a) {
        var b;
        for (b in a) return !1;
        return !0
    }

    function f(a) {
        return void 0 === a
    }

    function g(a) {
        return "number" == typeof a || "[object Number]" === Object.prototype.toString.call(a)
    }

    function h(a) {
        return a instanceof Date || "[object Date]" === Object.prototype.toString.call(a)
    }

    function i(a, b) {
        var c, d = [];
        for (c = 0; c < a.length; ++c) d.push(b(a[c], c));
        return d
    }

    function j(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }

    function k(a, b) {
        for (var c in b) j(b, c) && (a[c] = b[c]);
        return j(b, "toString") && (a.toString = b.toString), j(b, "valueOf") && (a.valueOf = b.valueOf), a
    }

    function l(a, b, c, d) {
        return sb(a, b, c, d, !0).utc()
    }

    function m() {
        return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            meridiem: null,
            rfc2822: !1,
            weekdayMismatch: !1
        }
    }

    function n(a) {
        return null == a._pf && (a._pf = m()), a._pf
    }

    function o(a) {
        if (null == a._isValid) {
            var b = n(a),
                c = ud.call(b.parsedDateParts, function(a) {
                    return null != a
                }),
                d = !isNaN(a._d.getTime()) && b.overflow < 0 && !b.empty && !b.invalidMonth && !b.invalidWeekday && !b.nullInput && !b.invalidFormat && !b.userInvalidated && (!b.meridiem || b.meridiem && c);
            if (a._strict && (d = d && 0 === b.charsLeftOver && 0 === b.unusedTokens.length && void 0 === b.bigHour), null != Object.isFrozen && Object.isFrozen(a)) return d;
            a._isValid = d
        }
        return a._isValid
    }

    function p(a) {
        var b = l(NaN);
        return null != a ? k(n(b), a) : n(b).userInvalidated = !0, b
    }

    function q(a, b) {
        var c, d, e;
        if (f(b._isAMomentObject) || (a._isAMomentObject = b._isAMomentObject), f(b._i) || (a._i = b._i), f(b._f) || (a._f = b._f), f(b._l) || (a._l = b._l), f(b._strict) || (a._strict = b._strict), f(b._tzm) || (a._tzm = b._tzm), f(b._isUTC) || (a._isUTC = b._isUTC), f(b._offset) || (a._offset = b._offset), f(b._pf) || (a._pf = n(b)), f(b._locale) || (a._locale = b._locale), vd.length > 0)
            for (c = 0; c < vd.length; c++) d = vd[c], e = b[d], f(e) || (a[d] = e);
        return a
    }

    function r(b) {
        q(this, b), this._d = new Date(null != b._d ? b._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), wd === !1 && (wd = !0, a.updateOffset(this), wd = !1)
    }

    function s(a) {
        return a instanceof r || null != a && null != a._isAMomentObject
    }

    function t(a) {
        return a < 0 ? Math.ceil(a) || 0 : Math.floor(a)
    }

    function u(a) {
        var b = +a,
            c = 0;
        return 0 !== b && isFinite(b) && (c = t(b)), c
    }

    function v(a, b, c) {
        var d, e = Math.min(a.length, b.length),
            f = Math.abs(a.length - b.length),
            g = 0;
        for (d = 0; d < e; d++)(c && a[d] !== b[d] || !c && u(a[d]) !== u(b[d])) && g++;
        return g + f
    }

    function w(b) {
        a.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + b)
    }

    function x(b, c) {
        var d = !0;
        return k(function() {
            if (null != a.deprecationHandler && a.deprecationHandler(null, b), d) {
                for (var e, f = [], g = 0; g < arguments.length; g++) {
                    if (e = "", "object" == typeof arguments[g]) {
                        e += "\n[" + g + "] ";
                        for (var h in arguments[0]) e += h + ": " + arguments[0][h] + ", ";
                        e = e.slice(0, -2)
                    } else e = arguments[g];
                    f.push(e)
                }
                w(b + "\nArguments: " + Array.prototype.slice.call(f).join("") + "\n" + (new Error).stack), d = !1
            }
            return c.apply(this, arguments)
        }, c)
    }

    function y(b, c) {
        null != a.deprecationHandler && a.deprecationHandler(b, c), xd[b] || (w(c), xd[b] = !0)
    }

    function z(a) {
        return a instanceof Function || "[object Function]" === Object.prototype.toString.call(a)
    }

    function A(a) {
        var b, c;
        for (c in a) b = a[c], z(b) ? this[c] = b : this["_" + c] = b;
        this._config = a, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
    }

    function B(a, b) {
        var c, e = k({}, a);
        for (c in b) j(b, c) && (d(a[c]) && d(b[c]) ? (e[c] = {}, k(e[c], a[c]), k(e[c], b[c])) : null != b[c] ? e[c] = b[c] : delete e[c]);
        for (c in a) j(a, c) && !j(b, c) && d(a[c]) && (e[c] = k({}, e[c]));
        return e
    }

    function C(a) {
        null != a && this.set(a)
    }

    function D(a, b, c) {
        var d = this._calendar[a] || this._calendar.sameElse;
        return z(d) ? d.call(b, c) : d
    }

    function E(a) {
        var b = this._longDateFormat[a],
            c = this._longDateFormat[a.toUpperCase()];
        return b || !c ? b : (this._longDateFormat[a] = c.replace(/MMMM|MM|DD|dddd/g, function(a) {
            return a.slice(1)
        }), this._longDateFormat[a])
    }

    function F() {
        return this._invalidDate
    }

    function G(a) {
        return this._ordinal.replace("%d", a)
    }

    function H(a, b, c, d) {
        var e = this._relativeTime[c];
        return z(e) ? e(a, b, c, d) : e.replace(/%d/i, a)
    }

    function I(a, b) {
        var c = this._relativeTime[a > 0 ? "future" : "past"];
        return z(c) ? c(b) : c.replace(/%s/i, b)
    }

    function J(a, b) {
        var c = a.toLowerCase();
        Hd[c] = Hd[c + "s"] = Hd[b] = a
    }

    function K(a) {
        return "string" == typeof a ? Hd[a] || Hd[a.toLowerCase()] : void 0
    }

    function L(a) {
        var b, c, d = {};
        for (c in a) j(a, c) && (b = K(c), b && (d[b] = a[c]));
        return d
    }

    function M(a, b) {
        Id[a] = b
    }

    function N(a) {
        var b = [];
        for (var c in a) b.push({
            unit: c,
            priority: Id[c]
        });
        return b.sort(function(a, b) {
            return a.priority - b.priority
        }), b
    }

    function O(b, c) {
        return function(d) {
            return null != d ? (Q(this, b, d), a.updateOffset(this, c), this) : P(this, b)
        }
    }

    function P(a, b) {
        return a.isValid() ? a._d["get" + (a._isUTC ? "UTC" : "") + b]() : NaN
    }

    function Q(a, b, c) {
        a.isValid() && a._d["set" + (a._isUTC ? "UTC" : "") + b](c)
    }

    function R(a) {
        return a = K(a), z(this[a]) ? this[a]() : this
    }

    function S(a, b) {
        if ("object" == typeof a) {
            a = L(a);
            for (var c = N(a), d = 0; d < c.length; d++) this[c[d].unit](a[c[d].unit])
        } else if (a = K(a), z(this[a])) return this[a](b);
        return this
    }

    function T(a, b, c) {
        var d = "" + Math.abs(a),
            e = b - d.length,
            f = a >= 0;
        return (f ? c ? "+" : "" : "-") + Math.pow(10, Math.max(0, e)).toString().substr(1) + d
    }

    function U(a, b, c, d) {
        var e = d;
        "string" == typeof d && (e = function() {
            return this[d]()
        }), a && (Md[a] = e), b && (Md[b[0]] = function() {
            return T(e.apply(this, arguments), b[1], b[2])
        }), c && (Md[c] = function() {
            return this.localeData().ordinal(e.apply(this, arguments), a)
        })
    }

    function V(a) {
        return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "")
    }

    function W(a) {
        var b, c, d = a.match(Jd);
        for (b = 0, c = d.length; b < c; b++) Md[d[b]] ? d[b] = Md[d[b]] : d[b] = V(d[b]);
        return function(b) {
            var e, f = "";
            for (e = 0; e < c; e++) f += z(d[e]) ? d[e].call(b, a) : d[e];
            return f
        }
    }

    function X(a, b) {
        return a.isValid() ? (b = Y(b, a.localeData()), Ld[b] = Ld[b] || W(b), Ld[b](a)) : a.localeData().invalidDate()
    }

    function Y(a, b) {
        function c(a) {
            return b.longDateFormat(a) || a
        }
        var d = 5;
        for (Kd.lastIndex = 0; d >= 0 && Kd.test(a);) a = a.replace(Kd, c), Kd.lastIndex = 0, d -= 1;
        return a
    }

    function Z(a, b, c) {
        ce[a] = z(b) ? b : function(a, d) {
            return a && c ? c : b
        }
    }

    function $(a, b) {
        return j(ce, a) ? ce[a](b._strict, b._locale) : new RegExp(_(a))
    }

    function _(a) {
        return aa(a.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(a, b, c, d, e) {
            return b || c || d || e
        }))
    }

    function aa(a) {
        return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }

    function ba(a, b) {
        var c, d = b;
        for ("string" == typeof a && (a = [a]), g(b) && (d = function(a, c) {
            c[b] = u(a)
        }), c = 0; c < a.length; c++) de[a[c]] = d
    }

    function ca(a, b) {
        ba(a, function(a, c, d, e) {
            d._w = d._w || {}, b(a, d._w, d, e)
        })
    }

    function da(a, b, c) {
        null != b && j(de, a) && de[a](b, c._a, c, a)
    }

    function ea(a, b) {
        return new Date(Date.UTC(a, b + 1, 0)).getUTCDate()
    }

    function fa(a, b) {
        return a ? c(this._months) ? this._months[a.month()] : this._months[(this._months.isFormat || oe).test(b) ? "format" : "standalone"][a.month()] : c(this._months) ? this._months : this._months.standalone
    }

    function ga(a, b) {
        return a ? c(this._monthsShort) ? this._monthsShort[a.month()] : this._monthsShort[oe.test(b) ? "format" : "standalone"][a.month()] : c(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
    }

    function ha(a, b, c) {
        var d, e, f, g = a.toLocaleLowerCase();
        if (!this._monthsParse)
            for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], d = 0; d < 12; ++d) f = l([2e3, d]), this._shortMonthsParse[d] = this.monthsShort(f, "").toLocaleLowerCase(), this._longMonthsParse[d] = this.months(f, "").toLocaleLowerCase();
        return c ? "MMM" === b ? (e = ne.call(this._shortMonthsParse, g), e !== -1 ? e : null) : (e = ne.call(this._longMonthsParse, g), e !== -1 ? e : null) : "MMM" === b ? (e = ne.call(this._shortMonthsParse, g), e !== -1 ? e : (e = ne.call(this._longMonthsParse, g), e !== -1 ? e : null)) : (e = ne.call(this._longMonthsParse, g), e !== -1 ? e : (e = ne.call(this._shortMonthsParse, g), e !== -1 ? e : null))
    }

    function ia(a, b, c) {
        var d, e, f;
        if (this._monthsParseExact) return ha.call(this, a, b, c);
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), d = 0; d < 12; d++) {
            if (e = l([2e3, d]), c && !this._longMonthsParse[d] && (this._longMonthsParse[d] = new RegExp("^" + this.months(e, "").replace(".", "") + "$", "i"), this._shortMonthsParse[d] = new RegExp("^" + this.monthsShort(e, "").replace(".", "") + "$", "i")), c || this._monthsParse[d] || (f = "^" + this.months(e, "") + "|^" + this.monthsShort(e, ""), this._monthsParse[d] = new RegExp(f.replace(".", ""), "i")), c && "MMMM" === b && this._longMonthsParse[d].test(a)) return d;
            if (c && "MMM" === b && this._shortMonthsParse[d].test(a)) return d;
            if (!c && this._monthsParse[d].test(a)) return d
        }
    }

    function ja(a, b) {
        var c;
        if (!a.isValid()) return a;
        if ("string" == typeof b)
            if (/^\d+$/.test(b)) b = u(b);
            else if (b = a.localeData().monthsParse(b), !g(b)) return a;
        return c = Math.min(a.date(), ea(a.year(), b)), a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c), a
    }

    function ka(b) {
        return null != b ? (ja(this, b), a.updateOffset(this, !0), this) : P(this, "Month")
    }

    function la() {
        return ea(this.year(), this.month())
    }

    function ma(a) {
        return this._monthsParseExact ? (j(this, "_monthsRegex") || oa.call(this), a ? this._monthsShortStrictRegex : this._monthsShortRegex) : (j(this, "_monthsShortRegex") || (this._monthsShortRegex = re), this._monthsShortStrictRegex && a ? this._monthsShortStrictRegex : this._monthsShortRegex)
    }

    function na(a) {
        return this._monthsParseExact ? (j(this, "_monthsRegex") || oa.call(this), a ? this._monthsStrictRegex : this._monthsRegex) : (j(this, "_monthsRegex") || (this._monthsRegex = se), this._monthsStrictRegex && a ? this._monthsStrictRegex : this._monthsRegex)
    }

    function oa() {
        function a(a, b) {
            return b.length - a.length
        }
        var b, c, d = [],
            e = [],
            f = [];
        for (b = 0; b < 12; b++) c = l([2e3, b]), d.push(this.monthsShort(c, "")), e.push(this.months(c, "")), f.push(this.months(c, "")), f.push(this.monthsShort(c, ""));
        for (d.sort(a), e.sort(a), f.sort(a), b = 0; b < 12; b++) d[b] = aa(d[b]), e[b] = aa(e[b]);
        for (b = 0; b < 24; b++) f[b] = aa(f[b]);
        this._monthsRegex = new RegExp("^(" + f.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + d.join("|") + ")", "i")
    }

    function pa(a) {
        return qa(a) ? 366 : 365
    }

    function qa(a) {
        return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
    }

    function ra() {
        return qa(this.year())
    }

    function sa(a, b, c, d, e, f, g) {
        var h = new Date(a, b, c, d, e, f, g);
        return a < 100 && a >= 0 && isFinite(h.getFullYear()) && h.setFullYear(a), h
    }

    function ta(a) {
        var b = new Date(Date.UTC.apply(null, arguments));
        return a < 100 && a >= 0 && isFinite(b.getUTCFullYear()) && b.setUTCFullYear(a), b
    }

    function ua(a, b, c) {
        var d = 7 + b - c,
            e = (7 + ta(a, 0, d).getUTCDay() - b) % 7;
        return -e + d - 1
    }

    function va(a, b, c, d, e) {
        var f, g, h = (7 + c - d) % 7,
            i = ua(a, d, e),
            j = 1 + 7 * (b - 1) + h + i;
        return j <= 0 ? (f = a - 1, g = pa(f) + j) : j > pa(a) ? (f = a + 1, g = j - pa(a)) : (f = a, g = j), {
            year: f,
            dayOfYear: g
        }
    }

    function wa(a, b, c) {
        var d, e, f = ua(a.year(), b, c),
            g = Math.floor((a.dayOfYear() - f - 1) / 7) + 1;
        return g < 1 ? (e = a.year() - 1, d = g + xa(e, b, c)) : g > xa(a.year(), b, c) ? (d = g - xa(a.year(), b, c), e = a.year() + 1) : (e = a.year(), d = g), {
            week: d,
            year: e
        }
    }

    function xa(a, b, c) {
        var d = ua(a, b, c),
            e = ua(a + 1, b, c);
        return (pa(a) - d + e) / 7
    }

    function ya(a) {
        return wa(a, this._week.dow, this._week.doy).week
    }

    function za() {
        return this._week.dow
    }

    function Aa() {
        return this._week.doy
    }

    function Ba(a) {
        var b = this.localeData().week(this);
        return null == a ? b : this.add(7 * (a - b), "d")
    }

    function Ca(a) {
        var b = wa(this, 1, 4).week;
        return null == a ? b : this.add(7 * (a - b), "d")
    }

    function Da(a, b) {
        return "string" != typeof a ? a : isNaN(a) ? (a = b.weekdaysParse(a), "number" == typeof a ? a : null) : parseInt(a, 10)
    }

    function Ea(a, b) {
        return "string" == typeof a ? b.weekdaysParse(a) % 7 || 7 : isNaN(a) ? null : a
    }

    function Fa(a, b) {
        return a ? c(this._weekdays) ? this._weekdays[a.day()] : this._weekdays[this._weekdays.isFormat.test(b) ? "format" : "standalone"][a.day()] : c(this._weekdays) ? this._weekdays : this._weekdays.standalone
    }

    function Ga(a) {
        return a ? this._weekdaysShort[a.day()] : this._weekdaysShort
    }

    function Ha(a) {
        return a ? this._weekdaysMin[a.day()] : this._weekdaysMin
    }

    function Ia(a, b, c) {
        var d, e, f, g = a.toLocaleLowerCase();
        if (!this._weekdaysParse)
            for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], d = 0; d < 7; ++d) f = l([2e3, 1]).day(d), this._minWeekdaysParse[d] = this.weekdaysMin(f, "").toLocaleLowerCase(), this._shortWeekdaysParse[d] = this.weekdaysShort(f, "").toLocaleLowerCase(), this._weekdaysParse[d] = this.weekdays(f, "").toLocaleLowerCase();
        return c ? "dddd" === b ? (e = ne.call(this._weekdaysParse, g), e !== -1 ? e : null) : "ddd" === b ? (e = ne.call(this._shortWeekdaysParse, g), e !== -1 ? e : null) : (e = ne.call(this._minWeekdaysParse, g), e !== -1 ? e : null) : "dddd" === b ? (e = ne.call(this._weekdaysParse, g), e !== -1 ? e : (e = ne.call(this._shortWeekdaysParse, g), e !== -1 ? e : (e = ne.call(this._minWeekdaysParse, g), e !== -1 ? e : null))) : "ddd" === b ? (e = ne.call(this._shortWeekdaysParse, g), e !== -1 ? e : (e = ne.call(this._weekdaysParse, g), e !== -1 ? e : (e = ne.call(this._minWeekdaysParse, g), e !== -1 ? e : null))) : (e = ne.call(this._minWeekdaysParse, g), e !== -1 ? e : (e = ne.call(this._weekdaysParse, g), e !== -1 ? e : (e = ne.call(this._shortWeekdaysParse, g), e !== -1 ? e : null)))
    }

    function Ja(a, b, c) {
        var d, e, f;
        if (this._weekdaysParseExact) return Ia.call(this, a, b, c);
        for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), d = 0; d < 7; d++) {
            if (e = l([2e3, 1]).day(d), c && !this._fullWeekdaysParse[d] && (this._fullWeekdaysParse[d] = new RegExp("^" + this.weekdays(e, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[d] = new RegExp("^" + this.weekdaysShort(e, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[d] = new RegExp("^" + this.weekdaysMin(e, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[d] || (f = "^" + this.weekdays(e, "") + "|^" + this.weekdaysShort(e, "") + "|^" + this.weekdaysMin(e, ""), this._weekdaysParse[d] = new RegExp(f.replace(".", ""), "i")), c && "dddd" === b && this._fullWeekdaysParse[d].test(a)) return d;
            if (c && "ddd" === b && this._shortWeekdaysParse[d].test(a)) return d;
            if (c && "dd" === b && this._minWeekdaysParse[d].test(a)) return d;
            if (!c && this._weekdaysParse[d].test(a)) return d
        }
    }

    function Ka(a) {
        if (!this.isValid()) return null != a ? this : NaN;
        var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != a ? (a = Da(a, this.localeData()), this.add(a - b, "d")) : b
    }

    function La(a) {
        if (!this.isValid()) return null != a ? this : NaN;
        var b = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == a ? b : this.add(a - b, "d")
    }

    function Ma(a) {
        if (!this.isValid()) return null != a ? this : NaN;
        if (null != a) {
            var b = Ea(a, this.localeData());
            return this.day(this.day() % 7 ? b : b - 7)
        }
        return this.day() || 7
    }

    function Na(a) {
        return this._weekdaysParseExact ? (j(this, "_weekdaysRegex") || Qa.call(this), a ? this._weekdaysStrictRegex : this._weekdaysRegex) : (j(this, "_weekdaysRegex") || (this._weekdaysRegex = ye), this._weekdaysStrictRegex && a ? this._weekdaysStrictRegex : this._weekdaysRegex)
    }

    function Oa(a) {
        return this._weekdaysParseExact ? (j(this, "_weekdaysRegex") || Qa.call(this), a ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (j(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = ze), this._weekdaysShortStrictRegex && a ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
    }

    function Pa(a) {
        return this._weekdaysParseExact ? (j(this, "_weekdaysRegex") || Qa.call(this), a ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (j(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Ae), this._weekdaysMinStrictRegex && a ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
    }

    function Qa() {
        function a(a, b) {
            return b.length - a.length
        }
        var b, c, d, e, f, g = [],
            h = [],
            i = [],
            j = [];
        for (b = 0; b < 7; b++) c = l([2e3, 1]).day(b), d = this.weekdaysMin(c, ""), e = this.weekdaysShort(c, ""), f = this.weekdays(c, ""), g.push(d), h.push(e), i.push(f), j.push(d), j.push(e), j.push(f);
        for (g.sort(a), h.sort(a), i.sort(a), j.sort(a), b = 0; b < 7; b++) h[b] = aa(h[b]), i[b] = aa(i[b]), j[b] = aa(j[b]);
        this._weekdaysRegex = new RegExp("^(" + j.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + h.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + g.join("|") + ")", "i")
    }

    function Ra() {
        return this.hours() % 12 || 12
    }

    function Sa() {
        return this.hours() || 24
    }

    function Ta(a, b) {
        U(a, 0, 0, function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), b)
        })
    }

    function Ua(a, b) {
        return b._meridiemParse
    }

    function Va(a) {
        return "p" === (a + "").toLowerCase().charAt(0)
    }

    function Wa(a, b, c) {
        return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM"
    }

    function Xa(a) {
        return a ? a.toLowerCase().replace("_", "-") : a
    }

    function Ya(a) {
        for (var b, c, d, e, f = 0; f < a.length;) {
            for (e = Xa(a[f]).split("-"), b = e.length, c = Xa(a[f + 1]), c = c ? c.split("-") : null; b > 0;) {
                if (d = Za(e.slice(0, b).join("-"))) return d;
                if (c && c.length >= b && v(e, c, !0) >= b - 1) break;
                b--
            }
            f++
        }
        return null
    }

    function Za(a) {
        var b = null;
        if (!Fe[a] && "undefined" != typeof module && module && module.exports) try {
            b = Be._abbr, require("./locale/" + a), $a(b)
        } catch (a) {}
        return Fe[a]
    }

    function $a(a, b) {
        var c;
        return a && (c = f(b) ? bb(a) : _a(a, b), c && (Be = c)), Be._abbr
    }

    function _a(a, b) {
        if (null !== b) {
            var c = Ee;
            if (b.abbr = a, null != Fe[a]) y("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), c = Fe[a]._config;
            else if (null != b.parentLocale) {
                if (null == Fe[b.parentLocale]) return Ge[b.parentLocale] || (Ge[b.parentLocale] = []), Ge[b.parentLocale].push({
                    name: a,
                    config: b
                }), null;
                c = Fe[b.parentLocale]._config
            }
            return Fe[a] = new C(B(c, b)), Ge[a] && Ge[a].forEach(function(a) {
                _a(a.name, a.config)
            }), $a(a), Fe[a]
        }
        return delete Fe[a], null
    }

    function ab(a, b) {
        if (null != b) {
            var c, d = Ee;
            null != Fe[a] && (d = Fe[a]._config), b = B(d, b), c = new C(b), c.parentLocale = Fe[a], Fe[a] = c, $a(a)
        } else null != Fe[a] && (null != Fe[a].parentLocale ? Fe[a] = Fe[a].parentLocale : null != Fe[a] && delete Fe[a]);
        return Fe[a]
    }

    function bb(a) {
        var b;
        if (a && a._locale && a._locale._abbr && (a = a._locale._abbr), !a) return Be;
        if (!c(a)) {
            if (b = Za(a)) return b;
            a = [a]
        }
        return Ya(a)
    }

    function cb() {
        return Ad(Fe)
    }

    function db(a) {
        var b, c = a._a;
        return c && n(a).overflow === -2 && (b = c[fe] < 0 || c[fe] > 11 ? fe : c[ge] < 1 || c[ge] > ea(c[ee], c[fe]) ? ge : c[he] < 0 || c[he] > 24 || 24 === c[he] && (0 !== c[ie] || 0 !== c[je] || 0 !== c[ke]) ? he : c[ie] < 0 || c[ie] > 59 ? ie : c[je] < 0 || c[je] > 59 ? je : c[ke] < 0 || c[ke] > 999 ? ke : -1, n(a)._overflowDayOfYear && (b < ee || b > ge) && (b = ge), n(a)._overflowWeeks && b === -1 && (b = le), n(a)._overflowWeekday && b === -1 && (b = me), n(a).overflow = b), a
    }

    function eb(a) {
        var b, c, d, e, f, g, h = a._i,
            i = He.exec(h) || Ie.exec(h);
        if (i) {
            for (n(a).iso = !0, b = 0, c = Ke.length; b < c; b++)
                if (Ke[b][1].exec(i[1])) {
                    e = Ke[b][0], d = Ke[b][2] !== !1;
                    break
                }
            if (null == e) return void(a._isValid = !1);
            if (i[3]) {
                for (b = 0, c = Le.length; b < c; b++)
                    if (Le[b][1].exec(i[3])) {
                        f = (i[2] || " ") + Le[b][0];
                        break
                    }
                if (null == f) return void(a._isValid = !1)
            }
            if (!d && null != f) return void(a._isValid = !1);
            if (i[4]) {
                if (!Je.exec(i[4])) return void(a._isValid = !1);
                g = "Z"
            }
            a._f = e + (f || "") + (g || ""), lb(a)
        } else a._isValid = !1
    }

    function fb(a) {
        var b, c, d, e, f, g, h, i, j = {
                " GMT": " +0000",
                " EDT": " -0400",
                " EST": " -0500",
                " CDT": " -0500",
                " CST": " -0600",
                " MDT": " -0600",
                " MST": " -0700",
                " PDT": " -0700",
                " PST": " -0800"
            },
            k = "YXWVUTSRQPONZABCDEFGHIKLM";
        if (b = a._i.replace(/\([^\)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s|\s$/g, ""), c = Ne.exec(b)) {
            if (d = c[1] ? "ddd" + (5 === c[1].length ? ", " : " ") : "", e = "D MMM " + (c[2].length > 10 ? "YYYY " : "YY "), f = "HH:mm" + (c[4] ? ":ss" : ""), c[1]) {
                var l = new Date(c[2]),
                    m = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][l.getDay()];
                if (c[1].substr(0, 3) !== m) return n(a).weekdayMismatch = !0, void(a._isValid = !1)
            }
            switch (c[5].length) {
                case 2:
                    0 === i ? h = " +0000" : (i = k.indexOf(c[5][1].toUpperCase()) - 12, h = (i < 0 ? " -" : " +") + ("" + i).replace(/^-?/, "0").match(/..$/)[0] + "00");
                    break;
                case 4:
                    h = j[c[5]];
                    break;
                default:
                    h = j[" GMT"]
            }
            c[5] = h, a._i = c.splice(1).join(""), g = " ZZ", a._f = d + e + f + g, lb(a), n(a).rfc2822 = !0
        } else a._isValid = !1
    }

    function gb(b) {
        var c = Me.exec(b._i);
        return null !== c ? void(b._d = new Date(+c[1])) : (eb(b), void(b._isValid === !1 && (delete b._isValid, fb(b), b._isValid === !1 && (delete b._isValid, a.createFromInputFallback(b)))))
    }

    function hb(a, b, c) {
        return null != a ? a : null != b ? b : c
    }

    function ib(b) {
        var c = new Date(a.now());
        return b._useUTC ? [c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate()] : [c.getFullYear(), c.getMonth(), c.getDate()]
    }

    function jb(a) {
        var b, c, d, e, f = [];
        if (!a._d) {
            for (d = ib(a), a._w && null == a._a[ge] && null == a._a[fe] && kb(a), null != a._dayOfYear && (e = hb(a._a[ee], d[ee]), (a._dayOfYear > pa(e) || 0 === a._dayOfYear) && (n(a)._overflowDayOfYear = !0), c = ta(e, 0, a._dayOfYear), a._a[fe] = c.getUTCMonth(), a._a[ge] = c.getUTCDate()), b = 0; b < 3 && null == a._a[b]; ++b) a._a[b] = f[b] = d[b];
            for (; b < 7; b++) a._a[b] = f[b] = null == a._a[b] ? 2 === b ? 1 : 0 : a._a[b];
            24 === a._a[he] && 0 === a._a[ie] && 0 === a._a[je] && 0 === a._a[ke] && (a._nextDay = !0, a._a[he] = 0), a._d = (a._useUTC ? ta : sa).apply(null, f), null != a._tzm && a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm), a._nextDay && (a._a[he] = 24)
        }
    }

    function kb(a) {
        var b, c, d, e, f, g, h, i;
        if (b = a._w, null != b.GG || null != b.W || null != b.E) f = 1, g = 4, c = hb(b.GG, a._a[ee], wa(tb(), 1, 4).year), d = hb(b.W, 1), e = hb(b.E, 1), (e < 1 || e > 7) && (i = !0);
        else {
            f = a._locale._week.dow, g = a._locale._week.doy;
            var j = wa(tb(), f, g);
            c = hb(b.gg, a._a[ee], j.year), d = hb(b.w, j.week), null != b.d ? (e = b.d, (e < 0 || e > 6) && (i = !0)) : null != b.e ? (e = b.e + f, (b.e < 0 || b.e > 6) && (i = !0)) : e = f
        }
        d < 1 || d > xa(c, f, g) ? n(a)._overflowWeeks = !0 : null != i ? n(a)._overflowWeekday = !0 : (h = va(c, d, e, f, g), a._a[ee] = h.year, a._dayOfYear = h.dayOfYear)
    }

    function lb(b) {
        if (b._f === a.ISO_8601) return void eb(b);
        if (b._f === a.RFC_2822) return void fb(b);
        b._a = [], n(b).empty = !0;
        var c, d, e, f, g, h = "" + b._i,
            i = h.length,
            j = 0;
        for (e = Y(b._f, b._locale).match(Jd) || [], c = 0; c < e.length; c++) f = e[c], d = (h.match($(f, b)) || [])[0], d && (g = h.substr(0, h.indexOf(d)), g.length > 0 && n(b).unusedInput.push(g), h = h.slice(h.indexOf(d) + d.length), j += d.length), Md[f] ? (d ? n(b).empty = !1 : n(b).unusedTokens.push(f), da(f, d, b)) : b._strict && !d && n(b).unusedTokens.push(f);
        n(b).charsLeftOver = i - j, h.length > 0 && n(b).unusedInput.push(h), b._a[he] <= 12 && n(b).bigHour === !0 && b._a[he] > 0 && (n(b).bigHour = void 0), n(b).parsedDateParts = b._a.slice(0), n(b).meridiem = b._meridiem, b._a[he] = mb(b._locale, b._a[he], b._meridiem), jb(b), db(b)
    }

    function mb(a, b, c) {
        var d;
        return null == c ? b : null != a.meridiemHour ? a.meridiemHour(b, c) : null != a.isPM ? (d = a.isPM(c), d && b < 12 && (b += 12), d || 12 !== b || (b = 0), b) : b
    }

    function nb(a) {
        var b, c, d, e, f;
        if (0 === a._f.length) return n(a).invalidFormat = !0, void(a._d = new Date(NaN));
        for (e = 0; e < a._f.length; e++) f = 0, b = q({}, a), null != a._useUTC && (b._useUTC = a._useUTC), b._f = a._f[e], lb(b), o(b) && (f += n(b).charsLeftOver, f += 10 * n(b).unusedTokens.length, n(b).score = f, (null == d || f < d) && (d = f, c = b));
        k(a, c || b)
    }

    function ob(a) {
        if (!a._d) {
            var b = L(a._i);
            a._a = i([b.year, b.month, b.day || b.date, b.hour, b.minute, b.second, b.millisecond], function(a) {
                return a && parseInt(a, 10)
            }), jb(a)
        }
    }

    function pb(a) {
        var b = new r(db(qb(a)));
        return b._nextDay && (b.add(1, "d"), b._nextDay = void 0), b
    }

    function qb(a) {
        var b = a._i,
            d = a._f;
        return a._locale = a._locale || bb(a._l), null === b || void 0 === d && "" === b ? p({
            nullInput: !0
        }) : ("string" == typeof b && (a._i = b = a._locale.preparse(b)), s(b) ? new r(db(b)) : (h(b) ? a._d = b : c(d) ? nb(a) : d ? lb(a) : rb(a), o(a) || (a._d = null), a))
    }

    function rb(b) {
        var e = b._i;
        f(e) ? b._d = new Date(a.now()) : h(e) ? b._d = new Date(e.valueOf()) : "string" == typeof e ? gb(b) : c(e) ? (b._a = i(e.slice(0), function(a) {
            return parseInt(a, 10)
        }), jb(b)) : d(e) ? ob(b) : g(e) ? b._d = new Date(e) : a.createFromInputFallback(b)
    }

    function sb(a, b, f, g, h) {
        var i = {};
        return f !== !0 && f !== !1 || (g = f, f = void 0), (d(a) && e(a) || c(a) && 0 === a.length) && (a = void 0), i._isAMomentObject = !0, i._useUTC = i._isUTC = h, i._l = f, i._i = a, i._f = b, i._strict = g, pb(i)
    }

    function tb(a, b, c, d) {
        return sb(a, b, c, d, !1)
    }

    function ub(a, b) {
        var d, e;
        if (1 === b.length && c(b[0]) && (b = b[0]), !b.length) return tb();
        for (d = b[0], e = 1; e < b.length; ++e) b[e].isValid() && !b[e][a](d) || (d = b[e]);
        return d
    }

    function vb() {
        var a = [].slice.call(arguments, 0);
        return ub("isBefore", a)
    }

    function wb() {
        var a = [].slice.call(arguments, 0);
        return ub("isAfter", a)
    }

    function xb(a) {
        for (var b in a)
            if (Re.indexOf(b) === -1 || null != a[b] && isNaN(a[b])) return !1;
        for (var c = !1, d = 0; d < Re.length; ++d)
            if (a[Re[d]]) {
                if (c) return !1;
                parseFloat(a[Re[d]]) !== u(a[Re[d]]) && (c = !0)
            }
        return !0
    }

    function yb() {
        return this._isValid
    }

    function zb() {
        return Sb(NaN)
    }

    function Ab(a) {
        var b = L(a),
            c = b.year || 0,
            d = b.quarter || 0,
            e = b.month || 0,
            f = b.week || 0,
            g = b.day || 0,
            h = b.hour || 0,
            i = b.minute || 0,
            j = b.second || 0,
            k = b.millisecond || 0;
        this._isValid = xb(b), this._milliseconds = +k + 1e3 * j + 6e4 * i + 1e3 * h * 60 * 60, this._days = +g + 7 * f, this._months = +e + 3 * d + 12 * c, this._data = {}, this._locale = bb(), this._bubble()
    }

    function Bb(a) {
        return a instanceof Ab
    }

    function Cb(a) {
        return a < 0 ? Math.round(-1 * a) * -1 : Math.round(a)
    }

    function Db(a, b) {
        U(a, 0, 0, function() {
            var a = this.utcOffset(),
                c = "+";
            return a < 0 && (a = -a, c = "-"), c + T(~~(a / 60), 2) + b + T(~~a % 60, 2)
        })
    }

    function Eb(a, b) {
        var c = (b || "").match(a);
        if (null === c) return null;
        var d = c[c.length - 1] || [],
            e = (d + "").match(Se) || ["-", 0, 0],
            f = +(60 * e[1]) + u(e[2]);
        return 0 === f ? 0 : "+" === e[0] ? f : -f
    }

    function Fb(b, c) {
        var d, e;
        return c._isUTC ? (d = c.clone(), e = (s(b) || h(b) ? b.valueOf() : tb(b).valueOf()) - d.valueOf(), d._d.setTime(d._d.valueOf() + e), a.updateOffset(d, !1), d) : tb(b).local()
    }

    function Gb(a) {
        return 15 * -Math.round(a._d.getTimezoneOffset() / 15)
    }

    function Hb(b, c, d) {
        var e, f = this._offset || 0;
        if (!this.isValid()) return null != b ? this : NaN;
        if (null != b) {
            if ("string" == typeof b) {
                if (b = Eb(_d, b), null === b) return this
            } else Math.abs(b) < 16 && !d && (b = 60 * b);
            return !this._isUTC && c && (e = Gb(this)), this._offset = b, this._isUTC = !0, null != e && this.add(e, "m"), f !== b && (!c || this._changeInProgress ? Xb(this, Sb(b - f, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, a.updateOffset(this, !0), this._changeInProgress = null)), this
        }
        return this._isUTC ? f : Gb(this)
    }

    function Ib(a, b) {
        return null != a ? ("string" != typeof a && (a = -a), this.utcOffset(a, b), this) : -this.utcOffset()
    }

    function Jb(a) {
        return this.utcOffset(0, a)
    }

    function Kb(a) {
        return this._isUTC && (this.utcOffset(0, a), this._isUTC = !1, a && this.subtract(Gb(this), "m")), this
    }

    function Lb() {
        if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
        else if ("string" == typeof this._i) {
            var a = Eb($d, this._i);
            null != a ? this.utcOffset(a) : this.utcOffset(0, !0)
        }
        return this
    }

    function Mb(a) {
        return !!this.isValid() && (a = a ? tb(a).utcOffset() : 0, (this.utcOffset() - a) % 60 === 0)
    }

    function Nb() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    }

    function Ob() {
        if (!f(this._isDSTShifted)) return this._isDSTShifted;
        var a = {};
        if (q(a, this), a = qb(a), a._a) {
            var b = a._isUTC ? l(a._a) : tb(a._a);
            this._isDSTShifted = this.isValid() && v(a._a, b.toArray()) > 0
        } else this._isDSTShifted = !1;
        return this._isDSTShifted
    }

    function Pb() {
        return !!this.isValid() && !this._isUTC
    }

    function Qb() {
        return !!this.isValid() && this._isUTC
    }

    function Rb() {
        return !!this.isValid() && (this._isUTC && 0 === this._offset)
    }

    function Sb(a, b) {
        var c, d, e, f = a,
            h = null;
        return Bb(a) ? f = {
            ms: a._milliseconds,
            d: a._days,
            M: a._months
        } : g(a) ? (f = {}, b ? f[b] = a : f.milliseconds = a) : (h = Te.exec(a)) ? (c = "-" === h[1] ? -1 : 1, f = {
            y: 0,
            d: u(h[ge]) * c,
            h: u(h[he]) * c,
            m: u(h[ie]) * c,
            s: u(h[je]) * c,
            ms: u(Cb(1e3 * h[ke])) * c
        }) : (h = Ue.exec(a)) ? (c = "-" === h[1] ? -1 : 1, f = {
            y: Tb(h[2], c),
            M: Tb(h[3], c),
            w: Tb(h[4], c),
            d: Tb(h[5], c),
            h: Tb(h[6], c),
            m: Tb(h[7], c),
            s: Tb(h[8], c)
        }) : null == f ? f = {} : "object" == typeof f && ("from" in f || "to" in f) && (e = Vb(tb(f.from), tb(f.to)), f = {}, f.ms = e.milliseconds, f.M = e.months), d = new Ab(f), Bb(a) && j(a, "_locale") && (d._locale = a._locale), d
    }

    function Tb(a, b) {
        var c = a && parseFloat(a.replace(",", "."));
        return (isNaN(c) ? 0 : c) * b
    }

    function Ub(a, b) {
        var c = {
            milliseconds: 0,
            months: 0
        };
        return c.months = b.month() - a.month() + 12 * (b.year() - a.year()), a.clone().add(c.months, "M").isAfter(b) && --c.months, c.milliseconds = +b - +a.clone().add(c.months, "M"), c
    }

    function Vb(a, b) {
        var c;
        return a.isValid() && b.isValid() ? (b = Fb(b, a), a.isBefore(b) ? c = Ub(a, b) : (c = Ub(b, a), c.milliseconds = -c.milliseconds, c.months = -c.months), c) : {
            milliseconds: 0,
            months: 0
        }
    }

    function Wb(a, b) {
        return function(c, d) {
            var e, f;
            return null === d || isNaN(+d) || (y(b, "moment()." + b + "(period, number) is deprecated. Please use moment()." + b + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), f = c, c = d, d = f), c = "string" == typeof c ? +c : c, e = Sb(c, d), Xb(this, e, a), this
        }
    }

    function Xb(b, c, d, e) {
        var f = c._milliseconds,
            g = Cb(c._days),
            h = Cb(c._months);
        b.isValid() && (e = null == e || e, f && b._d.setTime(b._d.valueOf() + f * d), g && Q(b, "Date", P(b, "Date") + g * d), h && ja(b, P(b, "Month") + h * d), e && a.updateOffset(b, g || h))
    }

    function Yb(a, b) {
        var c = a.diff(b, "days", !0);
        return c < -6 ? "sameElse" : c < -1 ? "lastWeek" : c < 0 ? "lastDay" : c < 1 ? "sameDay" : c < 2 ? "nextDay" : c < 7 ? "nextWeek" : "sameElse"
    }

    function Zb(b, c) {
        var d = b || tb(),
            e = Fb(d, this).startOf("day"),
            f = a.calendarFormat(this, e) || "sameElse",
            g = c && (z(c[f]) ? c[f].call(this, d) : c[f]);
        return this.format(g || this.localeData().calendar(f, this, tb(d)))
    }

    function $b() {
        return new r(this)
    }

    function _b(a, b) {
        var c = s(a) ? a : tb(a);
        return !(!this.isValid() || !c.isValid()) && (b = K(f(b) ? "millisecond" : b), "millisecond" === b ? this.valueOf() > c.valueOf() : c.valueOf() < this.clone().startOf(b).valueOf())
    }

    function ac(a, b) {
        var c = s(a) ? a : tb(a);
        return !(!this.isValid() || !c.isValid()) && (b = K(f(b) ? "millisecond" : b), "millisecond" === b ? this.valueOf() < c.valueOf() : this.clone().endOf(b).valueOf() < c.valueOf())
    }

    function bc(a, b, c, d) {
        return d = d || "()", ("(" === d[0] ? this.isAfter(a, c) : !this.isBefore(a, c)) && (")" === d[1] ? this.isBefore(b, c) : !this.isAfter(b, c))
    }

    function cc(a, b) {
        var c, d = s(a) ? a : tb(a);
        return !(!this.isValid() || !d.isValid()) && (b = K(b || "millisecond"), "millisecond" === b ? this.valueOf() === d.valueOf() : (c = d.valueOf(), this.clone().startOf(b).valueOf() <= c && c <= this.clone().endOf(b).valueOf()))
    }

    function dc(a, b) {
        return this.isSame(a, b) || this.isAfter(a, b)
    }

    function ec(a, b) {
        return this.isSame(a, b) || this.isBefore(a, b)
    }

    function fc(a, b, c) {
        var d, e, f, g;
        return this.isValid() ? (d = Fb(a, this), d.isValid() ? (e = 6e4 * (d.utcOffset() - this.utcOffset()), b = K(b), "year" === b || "month" === b || "quarter" === b ? (g = gc(this, d), "quarter" === b ? g /= 3 : "year" === b && (g /= 12)) : (f = this - d, g = "second" === b ? f / 1e3 : "minute" === b ? f / 6e4 : "hour" === b ? f / 36e5 : "day" === b ? (f - e) / 864e5 : "week" === b ? (f - e) / 6048e5 : f), c ? g : t(g)) : NaN) : NaN
    }

    function gc(a, b) {
        var c, d, e = 12 * (b.year() - a.year()) + (b.month() - a.month()),
            f = a.clone().add(e, "months");
        return b - f < 0 ? (c = a.clone().add(e - 1, "months"), d = (b - f) / (f - c)) : (c = a.clone().add(e + 1, "months"), d = (b - f) / (c - f)), -(e + d) || 0
    }

    function hc() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }

    function ic() {
        if (!this.isValid()) return null;
        var a = this.clone().utc();
        return a.year() < 0 || a.year() > 9999 ? X(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : z(Date.prototype.toISOString) ? this.toDate().toISOString() : X(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
    }

    function jc() {
        if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
        var a = "moment",
            b = "";
        this.isLocal() || (a = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", b = "Z");
        var c = "[" + a + '("]',
            d = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
            e = "-MM-DD[T]HH:mm:ss.SSS",
            f = b + '[")]';
        return this.format(c + d + e + f)
    }

    function kc(b) {
        b || (b = this.isUtc() ? a.defaultFormatUtc : a.defaultFormat);
        var c = X(this, b);
        return this.localeData().postformat(c)
    }

    function lc(a, b) {
        return this.isValid() && (s(a) && a.isValid() || tb(a).isValid()) ? Sb({
            to: this,
            from: a
        }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
    }

    function mc(a) {
        return this.from(tb(), a)
    }

    function nc(a, b) {
        return this.isValid() && (s(a) && a.isValid() || tb(a).isValid()) ? Sb({
            from: this,
            to: a
        }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
    }

    function oc(a) {
        return this.to(tb(), a)
    }

    function pc(a) {
        var b;
        return void 0 === a ? this._locale._abbr : (b = bb(a), null != b && (this._locale = b), this)
    }

    function qc() {
        return this._locale
    }

    function rc(a) {
        switch (a = K(a)) {
            case "year":
                this.month(0);
            case "quarter":
            case "month":
                this.date(1);
            case "week":
            case "isoWeek":
            case "day":
            case "date":
                this.hours(0);
            case "hour":
                this.minutes(0);
            case "minute":
                this.seconds(0);
            case "second":
                this.milliseconds(0)
        }
        return "week" === a && this.weekday(0), "isoWeek" === a && this.isoWeekday(1), "quarter" === a && this.month(3 * Math.floor(this.month() / 3)), this
    }

    function sc(a) {
        return a = K(a), void 0 === a || "millisecond" === a ? this : ("date" === a && (a = "day"), this.startOf(a).add(1, "isoWeek" === a ? "week" : a).subtract(1, "ms"))
    }

    function tc() {
        return this._d.valueOf() - 6e4 * (this._offset || 0)
    }

    function uc() {
        return Math.floor(this.valueOf() / 1e3)
    }

    function vc() {
        return new Date(this.valueOf())
    }

    function wc() {
        var a = this;
        return [a.year(), a.month(), a.date(), a.hour(), a.minute(), a.second(), a.millisecond()]
    }

    function xc() {
        var a = this;
        return {
            years: a.year(),
            months: a.month(),
            date: a.date(),
            hours: a.hours(),
            minutes: a.minutes(),
            seconds: a.seconds(),
            milliseconds: a.milliseconds()
        }
    }

    function yc() {
        return this.isValid() ? this.toISOString() : null
    }

    function zc() {
        return o(this)
    }

    function Ac() {
        return k({}, n(this))
    }

    function Bc() {
        return n(this).overflow
    }

    function Cc() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        }
    }

    function Dc(a, b) {
        U(0, [a, a.length], 0, b)
    }

    function Ec(a) {
        return Ic.call(this, a, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
    }

    function Fc(a) {
        return Ic.call(this, a, this.isoWeek(), this.isoWeekday(), 1, 4)
    }

    function Gc() {
        return xa(this.year(), 1, 4)
    }

    function Hc() {
        var a = this.localeData()._week;
        return xa(this.year(), a.dow, a.doy)
    }

    function Ic(a, b, c, d, e) {
        var f;
        return null == a ? wa(this, d, e).year : (f = xa(a, d, e), b > f && (b = f), Jc.call(this, a, b, c, d, e))
    }

    function Jc(a, b, c, d, e) {
        var f = va(a, b, c, d, e),
            g = ta(f.year, 0, f.dayOfYear);
        return this.year(g.getUTCFullYear()), this.month(g.getUTCMonth()), this.date(g.getUTCDate()), this
    }

    function Kc(a) {
        return null == a ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (a - 1) + this.month() % 3)
    }

    function Lc(a) {
        var b = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == a ? b : this.add(a - b, "d")
    }

    function Mc(a, b) {
        b[ke] = u(1e3 * ("0." + a))
    }

    function Nc() {
        return this._isUTC ? "UTC" : ""
    }

    function Oc() {
        return this._isUTC ? "Coordinated Universal Time" : ""
    }

    function Pc(a) {
        return tb(1e3 * a)
    }

    function Qc() {
        return tb.apply(null, arguments).parseZone()
    }

    function Rc(a) {
        return a
    }

    function Sc(a, b, c, d) {
        var e = bb(),
            f = l().set(d, b);
        return e[c](f, a)
    }

    function Tc(a, b, c) {
        if (g(a) && (b = a, a = void 0), a = a || "", null != b) return Sc(a, b, c, "month");
        var d, e = [];
        for (d = 0; d < 12; d++) e[d] = Sc(a, d, c, "month");
        return e
    }

    function Uc(a, b, c, d) {
        "boolean" == typeof a ? (g(b) && (c = b, b = void 0), b = b || "") : (b = a, c = b, a = !1, g(b) && (c = b, b = void 0), b = b || "");
        var e = bb(),
            f = a ? e._week.dow : 0;
        if (null != c) return Sc(b, (c + f) % 7, d, "day");
        var h, i = [];
        for (h = 0; h < 7; h++) i[h] = Sc(b, (h + f) % 7, d, "day");
        return i
    }

    function Vc(a, b) {
        return Tc(a, b, "months")
    }

    function Wc(a, b) {
        return Tc(a, b, "monthsShort")
    }

    function Xc(a, b, c) {
        return Uc(a, b, c, "weekdays")
    }

    function Yc(a, b, c) {
        return Uc(a, b, c, "weekdaysShort")
    }

    function Zc(a, b, c) {
        return Uc(a, b, c, "weekdaysMin")
    }

    function $c() {
        var a = this._data;
        return this._milliseconds = df(this._milliseconds), this._days = df(this._days), this._months = df(this._months), a.milliseconds = df(a.milliseconds), a.seconds = df(a.seconds), a.minutes = df(a.minutes), a.hours = df(a.hours), a.months = df(a.months), a.years = df(a.years), this
    }

    function _c(a, b, c, d) {
        var e = Sb(b, c);
        return a._milliseconds += d * e._milliseconds, a._days += d * e._days, a._months += d * e._months, a._bubble()
    }

    function ad(a, b) {
        return _c(this, a, b, 1)
    }

    function bd(a, b) {
        return _c(this, a, b, -1)
    }

    function cd(a) {
        return a < 0 ? Math.floor(a) : Math.ceil(a)
    }

    function dd() {
        var a, b, c, d, e, f = this._milliseconds,
            g = this._days,
            h = this._months,
            i = this._data;
        return f >= 0 && g >= 0 && h >= 0 || f <= 0 && g <= 0 && h <= 0 || (f += 864e5 * cd(fd(h) + g), g = 0, h = 0), i.milliseconds = f % 1e3, a = t(f / 1e3), i.seconds = a % 60, b = t(a / 60), i.minutes = b % 60, c = t(b / 60), i.hours = c % 24, g += t(c / 24), e = t(ed(g)), h += e, g -= cd(fd(e)), d = t(h / 12), h %= 12, i.days = g, i.months = h, i.years = d, this
    }

    function ed(a) {
        return 4800 * a / 146097
    }

    function fd(a) {
        return 146097 * a / 4800
    }

    function gd(a) {
        if (!this.isValid()) return NaN;
        var b, c, d = this._milliseconds;
        if (a = K(a), "month" === a || "year" === a) return b = this._days + d / 864e5, c = this._months + ed(b), "month" === a ? c : c / 12;
        switch (b = this._days + Math.round(fd(this._months)), a) {
            case "week":
                return b / 7 + d / 6048e5;
            case "day":
                return b + d / 864e5;
            case "hour":
                return 24 * b + d / 36e5;
            case "minute":
                return 1440 * b + d / 6e4;
            case "second":
                return 86400 * b + d / 1e3;
            case "millisecond":
                return Math.floor(864e5 * b) + d;
            default:
                throw new Error("Unknown unit " + a)
        }
    }

    function hd() {
        return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * u(this._months / 12) : NaN
    }

    function id(a) {
        return function() {
            return this.as(a)
        }
    }

    function jd(a) {
        return a = K(a), this.isValid() ? this[a + "s"]() : NaN
    }

    function kd(a) {
        return function() {
            return this.isValid() ? this._data[a] : NaN
        }
    }

    function ld() {
        return t(this.days() / 7)
    }

    function md(a, b, c, d, e) {
        return e.relativeTime(b || 1, !!c, a, d)
    }

    function nd(a, b, c) {
        var d = Sb(a).abs(),
            e = uf(d.as("s")),
            f = uf(d.as("m")),
            g = uf(d.as("h")),
            h = uf(d.as("d")),
            i = uf(d.as("M")),
            j = uf(d.as("y")),
            k = e <= vf.ss && ["s", e] || e < vf.s && ["ss", e] || f <= 1 && ["m"] || f < vf.m && ["mm", f] || g <= 1 && ["h"] || g < vf.h && ["hh", g] || h <= 1 && ["d"] || h < vf.d && ["dd", h] || i <= 1 && ["M"] || i < vf.M && ["MM", i] || j <= 1 && ["y"] || ["yy", j];
        return k[2] = b, k[3] = +a > 0, k[4] = c, md.apply(null, k)
    }

    function od(a) {
        return void 0 === a ? uf : "function" == typeof a && (uf = a, !0)
    }

    function pd(a, b) {
        return void 0 !== vf[a] && (void 0 === b ? vf[a] : (vf[a] = b, "s" === a && (vf.ss = b - 1), !0))
    }

    function qd(a) {
        if (!this.isValid()) return this.localeData().invalidDate();
        var b = this.localeData(),
            c = nd(this, !a, b);
        return a && (c = b.pastFuture(+this, c)), b.postformat(c)
    }

    function rd() {
        if (!this.isValid()) return this.localeData().invalidDate();
        var a, b, c, d = wf(this._milliseconds) / 1e3,
            e = wf(this._days),
            f = wf(this._months);
        a = t(d / 60), b = t(a / 60), d %= 60, a %= 60, c = t(f / 12), f %= 12;
        var g = c,
            h = f,
            i = e,
            j = b,
            k = a,
            l = d,
            m = this.asSeconds();
        return m ? (m < 0 ? "-" : "") + "P" + (g ? g + "Y" : "") + (h ? h + "M" : "") + (i ? i + "D" : "") + (j || k || l ? "T" : "") + (j ? j + "H" : "") + (k ? k + "M" : "") + (l ? l + "S" : "") : "P0D"
    }
    var sd, td;
    td = Array.prototype.some ? Array.prototype.some : function(a) {
        for (var b = Object(this), c = b.length >>> 0, d = 0; d < c; d++)
            if (d in b && a.call(this, b[d], d, b)) return !0;
        return !1
    };
    var ud = td,
        vd = a.momentProperties = [],
        wd = !1,
        xd = {};
    a.suppressDeprecationWarnings = !1, a.deprecationHandler = null;
    var yd;
    yd = Object.keys ? Object.keys : function(a) {
        var b, c = [];
        for (b in a) j(a, b) && c.push(b);
        return c
    };
    var zd, Ad = yd,
        Bd = {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        Cd = {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A"
        },
        Dd = "Invalid date",
        Ed = "%d",
        Fd = /\d{1,2}/,
        Gd = {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        Hd = {},
        Id = {},
        Jd = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        Kd = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        Ld = {},
        Md = {},
        Nd = /\d/,
        Od = /\d\d/,
        Pd = /\d{3}/,
        Qd = /\d{4}/,
        Rd = /[+-]?\d{6}/,
        Sd = /\d\d?/,
        Td = /\d\d\d\d?/,
        Ud = /\d\d\d\d\d\d?/,
        Vd = /\d{1,3}/,
        Wd = /\d{1,4}/,
        Xd = /[+-]?\d{1,6}/,
        Yd = /\d+/,
        Zd = /[+-]?\d+/,
        $d = /Z|[+-]\d\d:?\d\d/gi,
        _d = /Z|[+-]\d\d(?::?\d\d)?/gi,
        ae = /[+-]?\d+(\.\d{1,3})?/,
        be = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
        ce = {},
        de = {},
        ee = 0,
        fe = 1,
        ge = 2,
        he = 3,
        ie = 4,
        je = 5,
        ke = 6,
        le = 7,
        me = 8;
    zd = Array.prototype.indexOf ? Array.prototype.indexOf : function(a) {
        var b;
        for (b = 0; b < this.length; ++b)
            if (this[b] === a) return b;
        return -1
    };
    var ne = zd;
    U("M", ["MM", 2], "Mo", function() {
        return this.month() + 1
    }), U("MMM", 0, 0, function(a) {
        return this.localeData().monthsShort(this, a)
    }), U("MMMM", 0, 0, function(a) {
        return this.localeData().months(this, a)
    }), J("month", "M"), M("month", 8), Z("M", Sd), Z("MM", Sd, Od), Z("MMM", function(a, b) {
        return b.monthsShortRegex(a)
    }), Z("MMMM", function(a, b) {
        return b.monthsRegex(a)
    }), ba(["M", "MM"], function(a, b) {
        b[fe] = u(a) - 1
    }), ba(["MMM", "MMMM"], function(a, b, c, d) {
        var e = c._locale.monthsParse(a, d, c._strict);
        null != e ? b[fe] = e : n(c).invalidMonth = a
    });
    var oe = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
        pe = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        qe = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        re = be,
        se = be;
    U("Y", 0, 0, function() {
        var a = this.year();
        return a <= 9999 ? "" + a : "+" + a
    }), U(0, ["YY", 2], 0, function() {
        return this.year() % 100
    }), U(0, ["YYYY", 4], 0, "year"), U(0, ["YYYYY", 5], 0, "year"), U(0, ["YYYYYY", 6, !0], 0, "year"), J("year", "y"), M("year", 1), Z("Y", Zd), Z("YY", Sd, Od), Z("YYYY", Wd, Qd), Z("YYYYY", Xd, Rd), Z("YYYYYY", Xd, Rd), ba(["YYYYY", "YYYYYY"], ee), ba("YYYY", function(b, c) {
        c[ee] = 2 === b.length ? a.parseTwoDigitYear(b) : u(b)
    }), ba("YY", function(b, c) {
        c[ee] = a.parseTwoDigitYear(b)
    }), ba("Y", function(a, b) {
        b[ee] = parseInt(a, 10)
    }), a.parseTwoDigitYear = function(a) {
        return u(a) + (u(a) > 68 ? 1900 : 2e3)
    };
    var te = O("FullYear", !0);
    U("w", ["ww", 2], "wo", "week"), U("W", ["WW", 2], "Wo", "isoWeek"), J("week", "w"), J("isoWeek", "W"), M("week", 5), M("isoWeek", 5), Z("w", Sd), Z("ww", Sd, Od), Z("W", Sd), Z("WW", Sd, Od), ca(["w", "ww", "W", "WW"], function(a, b, c, d) {
        b[d.substr(0, 1)] = u(a)
    });
    var ue = {
        dow: 0,
        doy: 6
    };
    U("d", 0, "do", "day"), U("dd", 0, 0, function(a) {
        return this.localeData().weekdaysMin(this, a)
    }), U("ddd", 0, 0, function(a) {
        return this.localeData().weekdaysShort(this, a)
    }), U("dddd", 0, 0, function(a) {
        return this.localeData().weekdays(this, a)
    }), U("e", 0, 0, "weekday"), U("E", 0, 0, "isoWeekday"), J("day", "d"), J("weekday", "e"), J("isoWeekday", "E"), M("day", 11), M("weekday", 11), M("isoWeekday", 11), Z("d", Sd), Z("e", Sd), Z("E", Sd), Z("dd", function(a, b) {
        return b.weekdaysMinRegex(a)
    }), Z("ddd", function(a, b) {
        return b.weekdaysShortRegex(a)
    }), Z("dddd", function(a, b) {
        return b.weekdaysRegex(a)
    }), ca(["dd", "ddd", "dddd"], function(a, b, c, d) {
        var e = c._locale.weekdaysParse(a, d, c._strict);
        null != e ? b.d = e : n(c).invalidWeekday = a
    }), ca(["d", "e", "E"], function(a, b, c, d) {
        b[d] = u(a)
    });
    var ve = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        we = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        xe = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        ye = be,
        ze = be,
        Ae = be;
    U("H", ["HH", 2], 0, "hour"), U("h", ["hh", 2], 0, Ra), U("k", ["kk", 2], 0, Sa), U("hmm", 0, 0, function() {
        return "" + Ra.apply(this) + T(this.minutes(), 2)
    }), U("hmmss", 0, 0, function() {
        return "" + Ra.apply(this) + T(this.minutes(), 2) + T(this.seconds(), 2)
    }), U("Hmm", 0, 0, function() {
        return "" + this.hours() + T(this.minutes(), 2)
    }), U("Hmmss", 0, 0, function() {
        return "" + this.hours() + T(this.minutes(), 2) + T(this.seconds(), 2)
    }), Ta("a", !0), Ta("A", !1), J("hour", "h"), M("hour", 13), Z("a", Ua), Z("A", Ua), Z("H", Sd), Z("h", Sd), Z("k", Sd), Z("HH", Sd, Od), Z("hh", Sd, Od), Z("kk", Sd, Od), Z("hmm", Td), Z("hmmss", Ud), Z("Hmm", Td), Z("Hmmss", Ud), ba(["H", "HH"], he), ba(["k", "kk"], function(a, b, c) {
        var d = u(a);
        b[he] = 24 === d ? 0 : d
    }), ba(["a", "A"], function(a, b, c) {
        c._isPm = c._locale.isPM(a), c._meridiem = a
    }), ba(["h", "hh"], function(a, b, c) {
        b[he] = u(a), n(c).bigHour = !0
    }), ba("hmm", function(a, b, c) {
        var d = a.length - 2;
        b[he] = u(a.substr(0, d)), b[ie] = u(a.substr(d)), n(c).bigHour = !0
    }), ba("hmmss", function(a, b, c) {
        var d = a.length - 4,
            e = a.length - 2;
        b[he] = u(a.substr(0, d)), b[ie] = u(a.substr(d, 2)), b[je] = u(a.substr(e)), n(c).bigHour = !0
    }), ba("Hmm", function(a, b, c) {
        var d = a.length - 2;
        b[he] = u(a.substr(0, d)), b[ie] = u(a.substr(d))
    }), ba("Hmmss", function(a, b, c) {
        var d = a.length - 4,
            e = a.length - 2;
        b[he] = u(a.substr(0, d)), b[ie] = u(a.substr(d, 2)), b[je] = u(a.substr(e))
    });
    var Be, Ce = /[ap]\.?m?\.?/i,
        De = O("Hours", !0),
        Ee = {
            calendar: Bd,
            longDateFormat: Cd,
            invalidDate: Dd,
            ordinal: Ed,
            dayOfMonthOrdinalParse: Fd,
            relativeTime: Gd,
            months: pe,
            monthsShort: qe,
            week: ue,
            weekdays: ve,
            weekdaysMin: xe,
            weekdaysShort: we,
            meridiemParse: Ce
        },
        Fe = {},
        Ge = {},
        He = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        Ie = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        Je = /Z|[+-]\d\d(?::?\d\d)?/,
        Ke = [
            ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
            ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
            ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
            ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
            ["YYYY-DDD", /\d{4}-\d{3}/],
            ["YYYY-MM", /\d{4}-\d\d/, !1],
            ["YYYYYYMMDD", /[+-]\d{10}/],
            ["YYYYMMDD", /\d{8}/],
            ["GGGG[W]WWE", /\d{4}W\d{3}/],
            ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
            ["YYYYDDD", /\d{7}/]
        ],
        Le = [
            ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
            ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
            ["HH:mm:ss", /\d\d:\d\d:\d\d/],
            ["HH:mm", /\d\d:\d\d/],
            ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
            ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
            ["HHmmss", /\d\d\d\d\d\d/],
            ["HHmm", /\d\d\d\d/],
            ["HH", /\d\d/]
        ],
        Me = /^\/?Date\((\-?\d+)/i,
        Ne = /^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;
    a.createFromInputFallback = x("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(a) {
        a._d = new Date(a._i + (a._useUTC ? " UTC" : ""))
    }), a.ISO_8601 = function() {}, a.RFC_2822 = function() {};
    var Oe = x("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
            var a = tb.apply(null, arguments);
            return this.isValid() && a.isValid() ? a < this ? this : a : p()
        }),
        Pe = x("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
            var a = tb.apply(null, arguments);
            return this.isValid() && a.isValid() ? a > this ? this : a : p()
        }),
        Qe = function() {
            return Date.now ? Date.now() : +new Date
        },
        Re = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
    Db("Z", ":"), Db("ZZ", ""), Z("Z", _d), Z("ZZ", _d), ba(["Z", "ZZ"], function(a, b, c) {
        c._useUTC = !0, c._tzm = Eb(_d, a)
    });
    var Se = /([\+\-]|\d\d)/gi;
    a.updateOffset = function() {};
    var Te = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
        Ue = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
    Sb.fn = Ab.prototype, Sb.invalid = zb;
    var Ve = Wb(1, "add"),
        We = Wb(-1, "subtract");
    a.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", a.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
    var Xe = x("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(a) {
        return void 0 === a ? this.localeData() : this.locale(a)
    });
    U(0, ["gg", 2], 0, function() {
        return this.weekYear() % 100
    }), U(0, ["GG", 2], 0, function() {
        return this.isoWeekYear() % 100
    }), Dc("gggg", "weekYear"), Dc("ggggg", "weekYear"), Dc("GGGG", "isoWeekYear"), Dc("GGGGG", "isoWeekYear"), J("weekYear", "gg"), J("isoWeekYear", "GG"), M("weekYear", 1), M("isoWeekYear", 1), Z("G", Zd), Z("g", Zd), Z("GG", Sd, Od), Z("gg", Sd, Od), Z("GGGG", Wd, Qd), Z("gggg", Wd, Qd), Z("GGGGG", Xd, Rd), Z("ggggg", Xd, Rd), ca(["gggg", "ggggg", "GGGG", "GGGGG"], function(a, b, c, d) {
        b[d.substr(0, 2)] = u(a)
    }), ca(["gg", "GG"], function(b, c, d, e) {
        c[e] = a.parseTwoDigitYear(b)
    }), U("Q", 0, "Qo", "quarter"), J("quarter", "Q"), M("quarter", 7), Z("Q", Nd), ba("Q", function(a, b) {
        b[fe] = 3 * (u(a) - 1)
    }), U("D", ["DD", 2], "Do", "date"), J("date", "D"), M("date", 9), Z("D", Sd), Z("DD", Sd, Od), Z("Do", function(a, b) {
        return a ? b._dayOfMonthOrdinalParse || b._ordinalParse : b._dayOfMonthOrdinalParseLenient
    }), ba(["D", "DD"], ge), ba("Do", function(a, b) {
        b[ge] = u(a.match(Sd)[0], 10)
    });
    var Ye = O("Date", !0);
    U("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), J("dayOfYear", "DDD"), M("dayOfYear", 4), Z("DDD", Vd), Z("DDDD", Pd), ba(["DDD", "DDDD"], function(a, b, c) {
        c._dayOfYear = u(a)
    }), U("m", ["mm", 2], 0, "minute"), J("minute", "m"), M("minute", 14), Z("m", Sd), Z("mm", Sd, Od), ba(["m", "mm"], ie);
    var Ze = O("Minutes", !1);
    U("s", ["ss", 2], 0, "second"), J("second", "s"), M("second", 15), Z("s", Sd), Z("ss", Sd, Od), ba(["s", "ss"], je);
    var $e = O("Seconds", !1);
    U("S", 0, 0, function() {
        return ~~(this.millisecond() / 100)
    }), U(0, ["SS", 2], 0, function() {
        return ~~(this.millisecond() / 10)
    }), U(0, ["SSS", 3], 0, "millisecond"), U(0, ["SSSS", 4], 0, function() {
        return 10 * this.millisecond()
    }), U(0, ["SSSSS", 5], 0, function() {
        return 100 * this.millisecond()
    }), U(0, ["SSSSSS", 6], 0, function() {
        return 1e3 * this.millisecond()
    }), U(0, ["SSSSSSS", 7], 0, function() {
        return 1e4 * this.millisecond()
    }), U(0, ["SSSSSSSS", 8], 0, function() {
        return 1e5 * this.millisecond()
    }), U(0, ["SSSSSSSSS", 9], 0, function() {
        return 1e6 * this.millisecond()
    }), J("millisecond", "ms"), M("millisecond", 16), Z("S", Vd, Nd), Z("SS", Vd, Od), Z("SSS", Vd, Pd);
    var _e;
    for (_e = "SSSS"; _e.length <= 9; _e += "S") Z(_e, Yd);
    for (_e = "S"; _e.length <= 9; _e += "S") ba(_e, Mc);
    var af = O("Milliseconds", !1);
    U("z", 0, 0, "zoneAbbr"), U("zz", 0, 0, "zoneName");
    var bf = r.prototype;
    bf.add = Ve, bf.calendar = Zb, bf.clone = $b, bf.diff = fc, bf.endOf = sc, bf.format = kc, bf.from = lc, bf.fromNow = mc, bf.to = nc, bf.toNow = oc, bf.get = R, bf.invalidAt = Bc, bf.isAfter = _b, bf.isBefore = ac, bf.isBetween = bc, bf.isSame = cc, bf.isSameOrAfter = dc, bf.isSameOrBefore = ec, bf.isValid = zc, bf.lang = Xe, bf.locale = pc, bf.localeData = qc, bf.max = Pe, bf.min = Oe, bf.parsingFlags = Ac, bf.set = S, bf.startOf = rc, bf.subtract = We, bf.toArray = wc, bf.toObject = xc, bf.toDate = vc, bf.toISOString = ic, bf.inspect = jc, bf.toJSON = yc, bf.toString = hc, bf.unix = uc, bf.valueOf = tc, bf.creationData = Cc, bf.year = te, bf.isLeapYear = ra, bf.weekYear = Ec, bf.isoWeekYear = Fc, bf.quarter = bf.quarters = Kc, bf.month = ka, bf.daysInMonth = la, bf.week = bf.weeks = Ba, bf.isoWeek = bf.isoWeeks = Ca, bf.weeksInYear = Hc, bf.isoWeeksInYear = Gc, bf.date = Ye, bf.day = bf.days = Ka, bf.weekday = La, bf.isoWeekday = Ma, bf.dayOfYear = Lc, bf.hour = bf.hours = De, bf.minute = bf.minutes = Ze, bf.second = bf.seconds = $e, bf.millisecond = bf.milliseconds = af, bf.utcOffset = Hb, bf.utc = Jb, bf.local = Kb, bf.parseZone = Lb, bf.hasAlignedHourOffset = Mb, bf.isDST = Nb, bf.isLocal = Pb, bf.isUtcOffset = Qb, bf.isUtc = Rb, bf.isUTC = Rb, bf.zoneAbbr = Nc, bf.zoneName = Oc, bf.dates = x("dates accessor is deprecated. Use date instead.", Ye), bf.months = x("months accessor is deprecated. Use month instead", ka), bf.years = x("years accessor is deprecated. Use year instead", te), bf.zone = x("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", Ib), bf.isDSTShifted = x("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Ob);
    var cf = C.prototype;
    cf.calendar = D, cf.longDateFormat = E, cf.invalidDate = F, cf.ordinal = G, cf.preparse = Rc, cf.postformat = Rc, cf.relativeTime = H, cf.pastFuture = I, cf.set = A, cf.months = fa, cf.monthsShort = ga, cf.monthsParse = ia, cf.monthsRegex = na, cf.monthsShortRegex = ma, cf.week = ya, cf.firstDayOfYear = Aa, cf.firstDayOfWeek = za, cf.weekdays = Fa, cf.weekdaysMin = Ha, cf.weekdaysShort = Ga, cf.weekdaysParse = Ja, cf.weekdaysRegex = Na, cf.weekdaysShortRegex = Oa, cf.weekdaysMinRegex = Pa, cf.isPM = Va, cf.meridiem = Wa, $a("en", {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(a) {
            var b = a % 10,
                c = 1 === u(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
            return a + c
        }
    }), a.lang = x("moment.lang is deprecated. Use moment.locale instead.", $a), a.langData = x("moment.langData is deprecated. Use moment.localeData instead.", bb);
    var df = Math.abs,
        ef = id("ms"),
        ff = id("s"),
        gf = id("m"),
        hf = id("h"),
        jf = id("d"),
        kf = id("w"),
        lf = id("M"),
        mf = id("y"),
        nf = kd("milliseconds"),
        of = kd("seconds"),
        pf = kd("minutes"),
        qf = kd("hours"),
        rf = kd("days"),
        sf = kd("months"),
        tf = kd("years"),
        uf = Math.round,
        vf = {
            ss: 44,
            s: 45,
            m: 45,
            h: 22,
            d: 26,
            M: 11
        },
        wf = Math.abs,
        xf = Ab.prototype;
    return xf.isValid = yb, xf.abs = $c, xf.add = ad, xf.subtract = bd, xf.as = gd, xf.asMilliseconds = ef, xf.asSeconds = ff, xf.asMinutes = gf, xf.asHours = hf, xf.asDays = jf, xf.asWeeks = kf, xf.asMonths = lf, xf.asYears = mf, xf.valueOf = hd, xf._bubble = dd, xf.get = jd, xf.milliseconds = nf, xf.seconds = of, xf.minutes = pf, xf.hours = qf, xf.days = rf, xf.weeks = ld, xf.months = sf, xf.years = tf, xf.humanize = qd, xf.toISOString = rd, xf.toString = rd, xf.toJSON = rd, xf.locale = pc, xf.localeData = qc, xf.toIsoString = x("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", rd), xf.lang = Xe, U("X", 0, 0, "unix"), U("x", 0, 0, "valueOf"), Z("x", Zd), Z("X", ae), ba("X", function(a, b, c) {
        c._d = new Date(1e3 * parseFloat(a, 10))
    }), ba("x", function(a, b, c) {
        c._d = new Date(u(a))
    }), a.version = "2.18.1", b(tb), a.fn = bf, a.min = vb, a.max = wb, a.now = Qe, a.utc = l, a.unix = Pc, a.months = Vc, a.isDate = h, a.locale = $a, a.invalid = p, a.duration = Sb, a.isMoment = s, a.weekdays = Xc, a.parseZone = Qc, a.localeData = bb, a.isDuration = Bb, a.monthsShort = Wc, a.weekdaysMin = Zc, a.defineLocale = _a, a.updateLocale = ab, a.locales = cb, a.weekdaysShort = Yc, a.normalizeUnits = K, a.relativeTimeRounding = od, a.relativeTimeThreshold = pd, a.calendarFormat = Yb, a.prototype = bf, a
});
! function(t, a) {
    if ("function" == typeof define && define.amd) define(["moment", "jquery"], function(t, e) {
        return e.fn || (e.fn = {}), a(t, e)
    });
    else if ("object" == typeof module && module.exports) {
        var e = "undefined" != typeof window ? window.jQuery : void 0;
        e || (e = require("jquery")).fn || (e.fn = {});
        var i = "undefined" != typeof window && void 0 !== window.moment ? window.moment : require("moment");
        module.exports = a(i, e)
    } else t.daterangepicker = a(t.moment, t.jQuery)
}(this, function(H, R) {
    var i = function(t, e, a) {
        if (this.parentEl = "body", this.element = R(t), this.startDate = H().startOf("day"), this.endDate = H().endOf("day"), this.minDate = !1, this.maxDate = !1, this.maxSpan = !1, this.autoApply = !1, this.singleDatePicker = !1, this.showDropdowns = !1, this.minYear = H().subtract(100, "year").format("YYYY"), this.maxYear = H().add(100, "year").format("YYYY"), this.showWeekNumbers = !1, this.showISOWeekNumbers = !1, this.showCustomRangeLabel = !0, this.timePicker = !1, this.timePicker24Hour = !1, this.timePickerIncrement = 1, this.timePickerSeconds = !1, this.linkedCalendars = !0, this.autoUpdateInput = !0, this.alwaysShowCalendars = !1, this.ranges = {}, this.opens = "right", this.element.hasClass("pull-right") && (this.opens = "left"), this.drops = "down", this.element.hasClass("dropup") && (this.drops = "up"), this.buttonClasses = "btn btn-sm", this.applyButtonClasses = "btn-primary", this.cancelButtonClasses = "btn-default", this.locale = {
            direction: "ltr",
            format: H.localeData().longDateFormat("L"),
            separator: " - ",
            applyLabel: "Apply",
            cancelLabel: "Cancel",
            weekLabel: "W",
            customRangeLabel: "Custom Range",
            daysOfWeek: H.weekdaysMin(),
            monthNames: H.monthsShort(),
            firstDay: H.localeData().firstDayOfWeek()
        }, this.callback = function() {}, this.isShowing = !1, this.leftCalendar = {}, this.rightCalendar = {}, "object" == typeof e && null !== e || (e = {}), "string" == typeof(e = R.extend(this.element.data(), e)).template || e.template instanceof R || (e.template = '<div class="daterangepicker"><div class="ranges"></div><div class="drp-calendar left"><div class="calendar-table"></div><div class="calendar-time"></div></div><div class="drp-calendar right"><div class="calendar-table"></div><div class="calendar-time"></div></div><div class="drp-buttons"><span class="drp-selected"></span><button class="cancelBtn" type="button"></button><button class="applyBtn" disabled="disabled" type="button"></button> </div></div>'), this.parentEl = e.parentEl && R(e.parentEl).length ? R(e.parentEl) : R(this.parentEl), this.container = R(e.template).appendTo(this.parentEl), "object" == typeof e.locale && ("string" == typeof e.locale.direction && (this.locale.direction = e.locale.direction), "string" == typeof e.locale.format && (this.locale.format = e.locale.format), "string" == typeof e.locale.separator && (this.locale.separator = e.locale.separator), "object" == typeof e.locale.daysOfWeek && (this.locale.daysOfWeek = e.locale.daysOfWeek.slice()), "object" == typeof e.locale.monthNames && (this.locale.monthNames = e.locale.monthNames.slice()), "number" == typeof e.locale.firstDay && (this.locale.firstDay = e.locale.firstDay), "string" == typeof e.locale.applyLabel && (this.locale.applyLabel = e.locale.applyLabel), "string" == typeof e.locale.cancelLabel && (this.locale.cancelLabel = e.locale.cancelLabel), "string" == typeof e.locale.weekLabel && (this.locale.weekLabel = e.locale.weekLabel), "string" == typeof e.locale.customRangeLabel)) {
            (d = document.createElement("textarea")).innerHTML = e.locale.customRangeLabel;
            var i = d.value;
            this.locale.customRangeLabel = i
        }
        if (this.container.addClass(this.locale.direction), "string" == typeof e.startDate && (this.startDate = H(e.startDate, this.locale.format)), "string" == typeof e.endDate && (this.endDate = H(e.endDate, this.locale.format)), "string" == typeof e.minDate && (this.minDate = H(e.minDate, this.locale.format)), "string" == typeof e.maxDate && (this.maxDate = H(e.maxDate, this.locale.format)), "object" == typeof e.startDate && (this.startDate = H(e.startDate)), "object" == typeof e.endDate && (this.endDate = H(e.endDate)), "object" == typeof e.minDate && (this.minDate = H(e.minDate)), "object" == typeof e.maxDate && (this.maxDate = H(e.maxDate)), this.minDate && this.startDate.isBefore(this.minDate) && (this.startDate = this.minDate.clone()), this.maxDate && this.endDate.isAfter(this.maxDate) && (this.endDate = this.maxDate.clone()), "string" == typeof e.applyButtonClasses && (this.applyButtonClasses = e.applyButtonClasses), "string" == typeof e.applyClass && (this.applyButtonClasses = e.applyClass), "string" == typeof e.cancelButtonClasses && (this.cancelButtonClasses = e.cancelButtonClasses), "string" == typeof e.cancelClass && (this.cancelButtonClasses = e.cancelClass), "object" == typeof e.maxSpan && (this.maxSpan = e.maxSpan), "object" == typeof e.dateLimit && (this.maxSpan = e.dateLimit), "string" == typeof e.opens && (this.opens = e.opens), "string" == typeof e.drops && (this.drops = e.drops), "boolean" == typeof e.showWeekNumbers && (this.showWeekNumbers = e.showWeekNumbers), "boolean" == typeof e.showISOWeekNumbers && (this.showISOWeekNumbers = e.showISOWeekNumbers), "string" == typeof e.buttonClasses && (this.buttonClasses = e.buttonClasses), "object" == typeof e.buttonClasses && (this.buttonClasses = e.buttonClasses.join(" ")), "boolean" == typeof e.showDropdowns && (this.showDropdowns = e.showDropdowns), "number" == typeof e.minYear && (this.minYear = e.minYear), "number" == typeof e.maxYear && (this.maxYear = e.maxYear), "boolean" == typeof e.showCustomRangeLabel && (this.showCustomRangeLabel = e.showCustomRangeLabel), "boolean" == typeof e.singleDatePicker && (this.singleDatePicker = e.singleDatePicker, this.singleDatePicker && (this.endDate = this.startDate.clone())), "boolean" == typeof e.timePicker && (this.timePicker = e.timePicker), "boolean" == typeof e.timePickerSeconds && (this.timePickerSeconds = e.timePickerSeconds), "number" == typeof e.timePickerIncrement && (this.timePickerIncrement = e.timePickerIncrement), "boolean" == typeof e.timePicker24Hour && (this.timePicker24Hour = e.timePicker24Hour), "boolean" == typeof e.autoApply && (this.autoApply = e.autoApply), "boolean" == typeof e.autoUpdateInput && (this.autoUpdateInput = e.autoUpdateInput), "boolean" == typeof e.linkedCalendars && (this.linkedCalendars = e.linkedCalendars), "function" == typeof e.isInvalidDate && (this.isInvalidDate = e.isInvalidDate), "function" == typeof e.isCustomDate && (this.isCustomDate = e.isCustomDate), "boolean" == typeof e.alwaysShowCalendars && (this.alwaysShowCalendars = e.alwaysShowCalendars), 0 != this.locale.firstDay)
            for (var s = this.locale.firstDay; 0 < s;) this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift()), s--;
        var n, r, o;
        if (void 0 === e.startDate && void 0 === e.endDate && R(this.element).is(":text")) {
            var h = R(this.element).val(),
                l = h.split(this.locale.separator);
            n = r = null, 2 == l.length ? (n = H(l[0], this.locale.format), r = H(l[1], this.locale.format)) : this.singleDatePicker && "" !== h && (n = H(h, this.locale.format), r = H(h, this.locale.format)), null !== n && null !== r && (this.setStartDate(n), this.setEndDate(r))
        }
        if ("object" == typeof e.ranges) {
            for (o in e.ranges) {
                n = "string" == typeof e.ranges[o][0] ? H(e.ranges[o][0], this.locale.format) : H(e.ranges[o][0]), r = "string" == typeof e.ranges[o][1] ? H(e.ranges[o][1], this.locale.format) : H(e.ranges[o][1]), this.minDate && n.isBefore(this.minDate) && (n = this.minDate.clone());
                var c = this.maxDate;
                if (this.maxSpan && c && n.clone().add(this.maxSpan).isAfter(c) && (c = n.clone().add(this.maxSpan)), c && r.isAfter(c) && (r = c.clone()), !(this.minDate && r.isBefore(this.minDate, this.timepicker ? "minute" : "day") || c && n.isAfter(c, this.timepicker ? "minute" : "day"))) {
                    var d;
                    (d = document.createElement("textarea")).innerHTML = o;
                    i = d.value;
                    this.ranges[i] = [n, r]
                }
            }
            var m = "<ul>";
            for (o in this.ranges) m += '<li data-range-key="' + o + '">' + o + "</li>";
            this.showCustomRangeLabel && (m += '<li data-range-key="' + this.locale.customRangeLabel + '">' + this.locale.customRangeLabel + "</li>"), m += "</ul>", this.container.find(".ranges").prepend(m)
        }
        "function" == typeof a && (this.callback = a), this.timePicker || (this.startDate = this.startDate.startOf("day"), this.endDate = this.endDate.endOf("day"), this.container.find(".calendar-time").hide()), this.timePicker && this.autoApply && (this.autoApply = !1), this.autoApply && this.container.addClass("auto-apply"), "object" == typeof e.ranges && this.container.addClass("show-ranges"), this.singleDatePicker && (this.container.addClass("single"), this.container.find(".drp-calendar.left").addClass("single"), this.container.find(".drp-calendar.left").show(), this.container.find(".drp-calendar.right").hide(), this.timePicker || this.container.addClass("auto-apply")), (void 0 === e.ranges && !this.singleDatePicker || this.alwaysShowCalendars) && this.container.addClass("show-calendar"), this.container.addClass("opens" + this.opens), this.container.find(".applyBtn, .cancelBtn").addClass(this.buttonClasses), this.applyButtonClasses.length && this.container.find(".applyBtn").addClass(this.applyButtonClasses), this.cancelButtonClasses.length && this.container.find(".cancelBtn").addClass(this.cancelButtonClasses), this.container.find(".applyBtn").html(this.locale.applyLabel), this.container.find(".cancelBtn").html(this.locale.cancelLabel), this.container.find(".drp-calendar").on("click.daterangepicker", ".prev", R.proxy(this.clickPrev, this)).on("click.daterangepicker", ".next", R.proxy(this.clickNext, this)).on("mousedown.daterangepicker", "td.available", R.proxy(this.clickDate, this)).on("mouseenter.daterangepicker", "td.available", R.proxy(this.hoverDate, this)).on("change.daterangepicker", "select.yearselect", R.proxy(this.monthOrYearChanged, this)).on("change.daterangepicker", "select.monthselect", R.proxy(this.monthOrYearChanged, this)).on("change.daterangepicker", "select.hourselect,select.minuteselect,select.secondselect,select.ampmselect", R.proxy(this.timeChanged, this)), this.container.find(".ranges").on("click.daterangepicker", "li", R.proxy(this.clickRange, this)), this.container.find(".drp-buttons").on("click.daterangepicker", "button.applyBtn", R.proxy(this.clickApply, this)).on("click.daterangepicker", "button.cancelBtn", R.proxy(this.clickCancel, this)), this.element.is("input") || this.element.is("button") ? this.element.on({
            "click.daterangepicker": R.proxy(this.show, this),
            "focus.daterangepicker": R.proxy(this.show, this),
            "keyup.daterangepicker": R.proxy(this.elementChanged, this),
            "keydown.daterangepicker": R.proxy(this.keydown, this)
        }) : (this.element.on("click.daterangepicker", R.proxy(this.toggle, this)), this.element.on("keydown.daterangepicker", R.proxy(this.toggle, this))), this.updateElement()
    };
    return i.prototype = {
        constructor: i,
        setStartDate: function(t) {
            "string" == typeof t && (this.startDate = H(t, this.locale.format)), "object" == typeof t && (this.startDate = H(t)), this.timePicker || (this.startDate = this.startDate.startOf("day")), this.timePicker && this.timePickerIncrement && this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement), this.minDate && this.startDate.isBefore(this.minDate) && (this.startDate = this.minDate.clone(), this.timePicker && this.timePickerIncrement && this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement)), this.maxDate && this.startDate.isAfter(this.maxDate) && (this.startDate = this.maxDate.clone(), this.timePicker && this.timePickerIncrement && this.startDate.minute(Math.floor(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement)), this.isShowing || this.updateElement(), this.updateMonthsInView()
        },
        setEndDate: function(t) {
            "string" == typeof t && (this.endDate = H(t, this.locale.format)), "object" == typeof t && (this.endDate = H(t)), this.timePicker || (this.endDate = this.endDate.add(1, "d").startOf("day").subtract(1, "second")), this.timePicker && this.timePickerIncrement && this.endDate.minute(Math.round(this.endDate.minute() / this.timePickerIncrement) * this.timePickerIncrement), this.endDate.isBefore(this.startDate) && (this.endDate = this.startDate.clone()), this.maxDate && this.endDate.isAfter(this.maxDate) && (this.endDate = this.maxDate.clone()), this.maxSpan && this.startDate.clone().add(this.maxSpan).isBefore(this.endDate) && (this.endDate = this.startDate.clone().add(this.maxSpan)), this.previousRightTime = this.endDate.clone(), this.container.find(".drp-selected").html(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format)), this.isShowing || this.updateElement(), this.updateMonthsInView()
        },
        isInvalidDate: function() {
            return !1
        },
        isCustomDate: function() {
            return !1
        },
        updateView: function() {
            this.timePicker && (this.renderTimePicker("left"), this.renderTimePicker("right"), this.endDate ? this.container.find(".right .calendar-time select").removeAttr("disabled").removeClass("disabled") : this.container.find(".right .calendar-time select").attr("disabled", "disabled").addClass("disabled")), this.endDate && this.container.find(".drp-selected").html(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format)), this.updateMonthsInView(), this.updateCalendars(), this.updateFormInputs()
        },
        updateMonthsInView: function() {
            if (this.endDate) {
                if (!this.singleDatePicker && this.leftCalendar.month && this.rightCalendar.month && (this.startDate.format("YYYY-MM") == this.leftCalendar.month.format("YYYY-MM") || this.startDate.format("YYYY-MM") == this.rightCalendar.month.format("YYYY-MM")) && (this.endDate.format("YYYY-MM") == this.leftCalendar.month.format("YYYY-MM") || this.endDate.format("YYYY-MM") == this.rightCalendar.month.format("YYYY-MM"))) return;
                this.leftCalendar.month = this.startDate.clone().date(2), this.linkedCalendars || this.endDate.month() == this.startDate.month() && this.endDate.year() == this.startDate.year() ? this.rightCalendar.month = this.startDate.clone().date(2).add(1, "month") : this.rightCalendar.month = this.endDate.clone().date(2)
            } else this.leftCalendar.month.format("YYYY-MM") != this.startDate.format("YYYY-MM") && this.rightCalendar.month.format("YYYY-MM") != this.startDate.format("YYYY-MM") && (this.leftCalendar.month = this.startDate.clone().date(2), this.rightCalendar.month = this.startDate.clone().date(2).add(1, "month"));
            this.maxDate && this.linkedCalendars && !this.singleDatePicker && this.rightCalendar.month > this.maxDate && (this.rightCalendar.month = this.maxDate.clone().date(2), this.leftCalendar.month = this.maxDate.clone().date(2).subtract(1, "month"))
        },
        updateCalendars: function() {
            if (this.timePicker) {
                var t, e, a, i;
                if (this.endDate) {
                    if (t = parseInt(this.container.find(".left .hourselect").val(), 10), e = parseInt(this.container.find(".left .minuteselect").val(), 10), a = this.timePickerSeconds ? parseInt(this.container.find(".left .secondselect").val(), 10) : 0, !this.timePicker24Hour) "PM" === (i = this.container.find(".left .ampmselect").val()) && t < 12 && (t += 12), "AM" === i && 12 === t && (t = 0)
                } else if (t = parseInt(this.container.find(".right .hourselect").val(), 10), e = parseInt(this.container.find(".right .minuteselect").val(), 10), a = this.timePickerSeconds ? parseInt(this.container.find(".right .secondselect").val(), 10) : 0, !this.timePicker24Hour) "PM" === (i = this.container.find(".right .ampmselect").val()) && t < 12 && (t += 12), "AM" === i && 12 === t && (t = 0);
                this.leftCalendar.month.hour(t).minute(e).second(a), this.rightCalendar.month.hour(t).minute(e).second(a)
            }
            this.renderCalendar("left"), this.renderCalendar("right"), this.container.find(".ranges li").removeClass("active"), null != this.endDate && this.calculateChosenLabel()
        },
        renderCalendar: function(t) {
            var e, a = (e = "left" == t ? this.leftCalendar : this.rightCalendar).month.month(),
                i = e.month.year(),
                s = e.month.hour(),
                n = e.month.minute(),
                r = e.month.second(),
                o = H([i, a]).daysInMonth(),
                h = H([i, a, 1]),
                l = H([i, a, o]),
                c = H(h).subtract(1, "month").month(),
                d = H(h).subtract(1, "month").year(),
                m = H([d, c]).daysInMonth(),
                f = h.day();
            (e = []).firstDay = h, e.lastDay = l;
            for (var p = 0; p < 6; p++) e[p] = [];
            var u = m - f + this.locale.firstDay + 1;
            m < u && (u -= 7), f == this.locale.firstDay && (u = m - 6);
            for (var D = H([d, c, u, 12, n, r]), g = (p = 0, 0), y = 0; p < 42; p++, g++, D = H(D).add(24, "hour")) 0 < p && g % 7 == 0 && (g = 0, y++), e[y][g] = D.clone().hour(s).minute(n).second(r), D.hour(12), this.minDate && e[y][g].format("YYYY-MM-DD") == this.minDate.format("YYYY-MM-DD") && e[y][g].isBefore(this.minDate) && "left" == t && (e[y][g] = this.minDate.clone()), this.maxDate && e[y][g].format("YYYY-MM-DD") == this.maxDate.format("YYYY-MM-DD") && e[y][g].isAfter(this.maxDate) && "right" == t && (e[y][g] = this.maxDate.clone());
            "left" == t ? this.leftCalendar.calendar = e : this.rightCalendar.calendar = e;
            var k = "left" == t ? this.minDate : this.startDate,
                b = this.maxDate,
                C = ("left" == t ? this.startDate : this.endDate, this.locale.direction, '<table class="table-condensed">');
            C += "<thead>", C += "<tr>", (this.showWeekNumbers || this.showISOWeekNumbers) && (C += "<th></th>"), k && !k.isBefore(e.firstDay) || this.linkedCalendars && "left" != t ? C += "<th></th>" : C += '<th class="prev available"><span></span></th>';
            var v = this.locale.monthNames[e[1][1].month()] + e[1][1].format(" YYYY");
            if (this.showDropdowns) {
                for (var Y = e[1][1].month(), w = e[1][1].year(), P = b && b.year() || this.maxYear, x = k && k.year() || this.minYear, M = w == x, S = w == P, I = '<select class="monthselect">', B = 0; B < 12; B++)(!M || B >= k.month()) && (!S || B <= b.month()) ? I += "<option value='" + B + "'" + (B === Y ? " selected='selected'" : "") + ">" + this.locale.monthNames[B] + "</option>" : I += "<option value='" + B + "'" + (B === Y ? " selected='selected'" : "") + " disabled='disabled'>" + this.locale.monthNames[B] + "</option>";
                I += "</select>";
                for (var A = '<select class="yearselect">', L = x; L <= P; L++) A += '<option value="' + L + '"' + (L === w ? ' selected="selected"' : "") + ">" + L + "</option>";
                v = I + (A += "</select>")
            }
            if (C += '<th colspan="5" class="month">' + v + "</th>", b && !b.isAfter(e.lastDay) || this.linkedCalendars && "right" != t && !this.singleDatePicker ? C += "<th></th>" : C += '<th class="next available"><span></span></th>', C += "</tr>", C += "<tr>", (this.showWeekNumbers || this.showISOWeekNumbers) && (C += '<th class="week">' + this.locale.weekLabel + "</th>"), R.each(this.locale.daysOfWeek, function(t, e) {
                C += "<th>" + e + "</th>"
            }), C += "</tr>", C += "</thead>", C += "<tbody>", null == this.endDate && this.maxSpan) {
                var E = this.startDate.clone().add(this.maxSpan).endOf("day");
                b && !E.isBefore(b) || (b = E)
            }
            for (y = 0; y < 6; y++) {
                C += "<tr>", this.showWeekNumbers ? C += '<td class="week">' + e[y][0].week() + "</td>" : this.showISOWeekNumbers && (C += '<td class="week">' + e[y][0].isoWeek() + "</td>");
                for (g = 0; g < 7; g++) {
                    var W = [];
                    e[y][g].isSame(new Date, "day") && W.push("today"), 5 < e[y][g].isoWeekday() && W.push("weekend"), e[y][g].month() != e[1][1].month() && W.push("off"), this.minDate && e[y][g].isBefore(this.minDate, "day") && W.push("off", "disabled"), b && e[y][g].isAfter(b, "day") && W.push("off", "disabled"), this.isInvalidDate(e[y][g]) && W.push("off", "disabled"), e[y][g].format("YYYY-MM-DD") == this.startDate.format("YYYY-MM-DD") && W.push("active", "start-date"), null != this.endDate && e[y][g].format("YYYY-MM-DD") == this.endDate.format("YYYY-MM-DD") && W.push("active", "end-date"), null != this.endDate && e[y][g] > this.startDate && e[y][g] < this.endDate && W.push("in-range");
                    var O = this.isCustomDate(e[y][g]);
                    !1 !== O && ("string" == typeof O ? W.push(O) : Array.prototype.push.apply(W, O));
                    var N = "",
                        j = !1;
                    for (p = 0; p < W.length; p++) N += W[p] + " ", "disabled" == W[p] && (j = !0);
                    j || (N += "available"), C += '<td class="' + N.replace(/^\s+|\s+$/g, "") + '" data-title="r' + y + "c" + g + '">' + e[y][g].date() + "</td>"
                }
                C += "</tr>"
            }
            C += "</tbody>", C += "</table>", this.container.find(".drp-calendar." + t + " .calendar-table").html(C)
        },
        renderTimePicker: function(t) {
            if ("right" != t || this.endDate) {
                var e, a, i, s = this.maxDate;
                if (!this.maxSpan || this.maxDate && !this.startDate.clone().add(this.maxSpan).isAfter(this.maxDate) || (s = this.startDate.clone().add(this.maxSpan)), "left" == t) a = this.startDate.clone(), i = this.minDate;
                else if ("right" == t) {
                    a = this.endDate.clone(), i = this.startDate;
                    var n = this.container.find(".drp-calendar.right .calendar-time");
                    if ("" != n.html() && (a.hour(a.hour() || n.find(".hourselect option:selected").val()), a.minute(a.minute() || n.find(".minuteselect option:selected").val()), a.second(a.second() || n.find(".secondselect option:selected").val()), !this.timePicker24Hour)) {
                        var r = n.find(".ampmselect option:selected").val();
                        "PM" === r && a.hour() < 12 && a.hour(a.hour() + 12), "AM" === r && 12 === a.hour() && a.hour(0)
                    }
                    a.isBefore(this.startDate) && (a = this.startDate.clone()), s && a.isAfter(s) && (a = s.clone())
                }
                e = '<select class="hourselect">';
                for (var o = this.timePicker24Hour ? 0 : 1, h = this.timePicker24Hour ? 23 : 12, l = o; l <= h; l++) {
                    var c = l;
                    this.timePicker24Hour || (c = 12 <= a.hour() ? 12 == l ? 12 : l + 12 : 12 == l ? 0 : l);
                    var d = a.clone().hour(c),
                        m = !1;
                    i && d.minute(59).isBefore(i) && (m = !0), s && d.minute(0).isAfter(s) && (m = !0), c != a.hour() || m ? e += m ? '<option value="' + l + '" disabled="disabled" class="disabled">' + l + "</option>" : '<option value="' + l + '">' + l + "</option>" : e += '<option value="' + l + '" selected="selected">' + l + "</option>"
                }
                e += "</select> ", e += ': <select class="minuteselect">';
                for (l = 0; l < 60; l += this.timePickerIncrement) {
                    var f = l < 10 ? "0" + l : l;
                    d = a.clone().minute(l), m = !1;
                    i && d.second(59).isBefore(i) && (m = !0), s && d.second(0).isAfter(s) && (m = !0), a.minute() != l || m ? e += m ? '<option value="' + l + '" disabled="disabled" class="disabled">' + f + "</option>" : '<option value="' + l + '">' + f + "</option>" : e += '<option value="' + l + '" selected="selected">' + f + "</option>"
                }
                if (e += "</select> ", this.timePickerSeconds) {
                    e += ': <select class="secondselect">';
                    for (l = 0; l < 60; l++) {
                        f = l < 10 ? "0" + l : l, d = a.clone().second(l), m = !1;
                        i && d.isBefore(i) && (m = !0), s && d.isAfter(s) && (m = !0), a.second() != l || m ? e += m ? '<option value="' + l + '" disabled="disabled" class="disabled">' + f + "</option>" : '<option value="' + l + '">' + f + "</option>" : e += '<option value="' + l + '" selected="selected">' + f + "</option>"
                    }
                    e += "</select> "
                }
                if (!this.timePicker24Hour) {
                    e += '<select class="ampmselect">';
                    var p = "",
                        u = "";
                    i && a.clone().hour(12).minute(0).second(0).isBefore(i) && (p = ' disabled="disabled" class="disabled"'), s && a.clone().hour(0).minute(0).second(0).isAfter(s) && (u = ' disabled="disabled" class="disabled"'), 12 <= a.hour() ? e += '<option value="AM"' + p + '>AM</option><option value="PM" selected="selected"' + u + ">PM</option>" : e += '<option value="AM" selected="selected"' + p + '>AM</option><option value="PM"' + u + ">PM</option>", e += "</select>"
                }
                this.container.find(".drp-calendar." + t + " .calendar-time").html(e)
            }
        },
        updateFormInputs: function() {
            this.singleDatePicker || this.endDate && (this.startDate.isBefore(this.endDate) || this.startDate.isSame(this.endDate)) ? this.container.find("button.applyBtn").removeAttr("disabled") : this.container.find("button.applyBtn").attr("disabled", "disabled")
        },
        move: function() {
            var t, e = {
                    top: 0,
                    left: 0
                },
                a = R(window).width();
            this.parentEl.is("body") || (e = {
                top: this.parentEl.offset().top - this.parentEl.scrollTop(),
                left: this.parentEl.offset().left - this.parentEl.scrollLeft()
            }, a = this.parentEl[0].clientWidth + this.parentEl.offset().left), t = "up" == this.drops ? this.element.offset().top - this.container.outerHeight() - e.top : this.element.offset().top + this.element.outerHeight() - e.top, this.container["up" == this.drops ? "addClass" : "removeClass"]("drop-up"), "left" == this.opens ? (this.container.css({
                top: t,
                right: a - this.element.offset().left - this.element.outerWidth(),
                left: "auto"
            }), this.container.offset().left < 0 && this.container.css({
                right: "auto",
                left: 9
            })) : "center" == this.opens ? (this.container.css({
                top: t,
                left: this.element.offset().left - e.left + this.element.outerWidth() / 2 - this.container.outerWidth() / 2,
                right: "auto"
            }), this.container.offset().left < 0 && this.container.css({
                right: "auto",
                left: 9
            })) : (this.container.css({
                top: t,
                left: this.element.offset().left - e.left,
                right: "auto"
            }), this.container.offset().left + this.container.outerWidth() > R(window).width() && this.container.css({
                left: "auto",
                right: 0
            }))
        },
        show: function(t) {
            this.isShowing || (this._outsideClickProxy = R.proxy(function(t) {
                this.outsideClick(t)
            }, this), R(document).on("mousedown.daterangepicker", this._outsideClickProxy).on("touchend.daterangepicker", this._outsideClickProxy).on("click.daterangepicker", "[data-toggle=dropdown]", this._outsideClickProxy).on("focusin.daterangepicker", this._outsideClickProxy), R(window).on("resize.daterangepicker", R.proxy(function(t) {
                this.move(t)
            }, this)), this.oldStartDate = this.startDate.clone(), this.oldEndDate = this.endDate.clone(), this.previousRightTime = this.endDate.clone(), this.updateView(), this.container.show(), this.move(), this.element.trigger("show.daterangepicker", this), this.isShowing = !0)
        },
        hide: function(t) {
            this.isShowing && (this.endDate || (this.startDate = this.oldStartDate.clone(), this.endDate = this.oldEndDate.clone()), this.startDate.isSame(this.oldStartDate) && this.endDate.isSame(this.oldEndDate) || this.callback(this.startDate.clone(), this.endDate.clone(), this.chosenLabel), this.updateElement(), R(document).off(".daterangepicker"), R(window).off(".daterangepicker"), this.container.hide(), this.element.trigger("hide.daterangepicker", this), this.isShowing = !1)
        },
        toggle: function(t) {
            this.isShowing ? this.hide() : this.show()
        },
        outsideClick: function(t) {
            var e = R(t.target);
            "focusin" == t.type || e.closest(this.element).length || e.closest(this.container).length || e.closest(".calendar-table").length || (this.hide(), this.element.trigger("outsideClick.daterangepicker", this))
        },
        showCalendars: function() {
            this.container.addClass("show-calendar"), this.move(), this.element.trigger("showCalendar.daterangepicker", this)
        },
        hideCalendars: function() {
            this.container.removeClass("show-calendar"), this.element.trigger("hideCalendar.daterangepicker", this)
        },
        clickRange: function(t) {
            var e = t.target.getAttribute("data-range-key");
            if ((this.chosenLabel = e) == this.locale.customRangeLabel) this.showCalendars();
            else {
                var a = this.ranges[e];
                this.startDate = a[0], this.endDate = a[1], this.timePicker || (this.startDate.startOf("day"), this.endDate.endOf("day")), this.alwaysShowCalendars || this.hideCalendars(), this.clickApply()
            }
        },
        clickPrev: function(t) {
            R(t.target).parents(".drp-calendar").hasClass("left") ? (this.leftCalendar.month.subtract(1, "month"), this.linkedCalendars && this.rightCalendar.month.subtract(1, "month")) : this.rightCalendar.month.subtract(1, "month"), this.updateCalendars()
        },
        clickNext: function(t) {
            R(t.target).parents(".drp-calendar").hasClass("left") ? this.leftCalendar.month.add(1, "month") : (this.rightCalendar.month.add(1, "month"), this.linkedCalendars && this.leftCalendar.month.add(1, "month")), this.updateCalendars()
        },
        hoverDate: function(t) {
            if (R(t.target).hasClass("available")) {
                var e = R(t.target).attr("data-title"),
                    a = e.substr(1, 1),
                    i = e.substr(3, 1),
                    r = R(t.target).parents(".drp-calendar").hasClass("left") ? this.leftCalendar.calendar[a][i] : this.rightCalendar.calendar[a][i],
                    o = this.leftCalendar,
                    h = this.rightCalendar,
                    l = this.startDate;
                this.endDate || this.container.find(".drp-calendar tbody td").each(function(t, e) {
                    if (!R(e).hasClass("week")) {
                        var a = R(e).attr("data-title"),
                            i = a.substr(1, 1),
                            s = a.substr(3, 1),
                            n = R(e).parents(".drp-calendar").hasClass("left") ? o.calendar[i][s] : h.calendar[i][s];
                        n.isAfter(l) && n.isBefore(r) || n.isSame(r, "day") ? R(e).addClass("in-range") : R(e).removeClass("in-range")
                    }
                })
            }
        },
        clickDate: function(t) {
            if (R(t.target).hasClass("available")) {
                var e = R(t.target).attr("data-title"),
                    a = e.substr(1, 1),
                    i = e.substr(3, 1),
                    s = R(t.target).parents(".drp-calendar").hasClass("left") ? this.leftCalendar.calendar[a][i] : this.rightCalendar.calendar[a][i];
                if (this.endDate || s.isBefore(this.startDate, "day")) {
                    if (this.timePicker) {
                        var n = parseInt(this.container.find(".left .hourselect").val(), 10);
                        if (!this.timePicker24Hour) "PM" === (h = this.container.find(".left .ampmselect").val()) && n < 12 && (n += 12), "AM" === h && 12 === n && (n = 0);
                        var r = parseInt(this.container.find(".left .minuteselect").val(), 10),
                            o = this.timePickerSeconds ? parseInt(this.container.find(".left .secondselect").val(), 10) : 0;
                        s = s.clone().hour(n).minute(r).second(o)
                    }
                    this.endDate = null, this.setStartDate(s.clone())
                } else if (!this.endDate && s.isBefore(this.startDate)) this.setEndDate(this.startDate.clone());
                else {
                    if (this.timePicker) {
                        var h;
                        n = parseInt(this.container.find(".right .hourselect").val(), 10);
                        if (!this.timePicker24Hour) "PM" === (h = this.container.find(".right .ampmselect").val()) && n < 12 && (n += 12), "AM" === h && 12 === n && (n = 0);
                        r = parseInt(this.container.find(".right .minuteselect").val(), 10), o = this.timePickerSeconds ? parseInt(this.container.find(".right .secondselect").val(), 10) : 0;
                        s = s.clone().hour(n).minute(r).second(o)
                    }
                    this.setEndDate(s.clone()), this.autoApply && (this.calculateChosenLabel(), this.clickApply())
                }
                this.singleDatePicker && (this.setEndDate(this.startDate), this.timePicker || this.clickApply()), this.updateView(), t.stopPropagation()
            }
        },
        calculateChosenLabel: function() {
            var t = !0,
                e = 0;
            for (var a in this.ranges) {
                if (this.timePicker) {
                    var i = this.timePickerSeconds ? "YYYY-MM-DD hh:mm:ss" : "YYYY-MM-DD hh:mm";
                    if (this.startDate.format(i) == this.ranges[a][0].format(i) && this.endDate.format(i) == this.ranges[a][1].format(i)) {
                        t = !1, this.chosenLabel = this.container.find(".ranges li:eq(" + e + ")").addClass("active").attr("data-range-key");
                        break
                    }
                } else if (this.startDate.format("YYYY-MM-DD") == this.ranges[a][0].format("YYYY-MM-DD") && this.endDate.format("YYYY-MM-DD") == this.ranges[a][1].format("YYYY-MM-DD")) {
                    t = !1, this.chosenLabel = this.container.find(".ranges li:eq(" + e + ")").addClass("active").attr("data-range-key");
                    break
                }
                e++
            }
            t && (this.showCustomRangeLabel ? this.chosenLabel = this.container.find(".ranges li:last").addClass("active").attr("data-range-key") : this.chosenLabel = null, this.showCalendars())
        },
        clickApply: function(t) {
            this.hide(), this.element.trigger("apply.daterangepicker", this)
        },
        clickCancel: function(t) {
            this.startDate = this.oldStartDate, this.endDate = this.oldEndDate, this.hide(), this.element.trigger("cancel.daterangepicker", this)
        },
        monthOrYearChanged: function(t) {
            var e = R(t.target).closest(".drp-calendar").hasClass("left"),
                a = e ? "left" : "right",
                i = this.container.find(".drp-calendar." + a),
                s = parseInt(i.find(".monthselect").val(), 10),
                n = i.find(".yearselect").val();
            e || (n < this.startDate.year() || n == this.startDate.year() && s < this.startDate.month()) && (s = this.startDate.month(), n = this.startDate.year()), this.minDate && (n < this.minDate.year() || n == this.minDate.year() && s < this.minDate.month()) && (s = this.minDate.month(), n = this.minDate.year()), this.maxDate && (n > this.maxDate.year() || n == this.maxDate.year() && s > this.maxDate.month()) && (s = this.maxDate.month(), n = this.maxDate.year()), e ? (this.leftCalendar.month.month(s).year(n), this.linkedCalendars && (this.rightCalendar.month = this.leftCalendar.month.clone().add(1, "month"))) : (this.rightCalendar.month.month(s).year(n), this.linkedCalendars && (this.leftCalendar.month = this.rightCalendar.month.clone().subtract(1, "month"))), this.updateCalendars()
        },
        timeChanged: function(t) {
            var e = R(t.target).closest(".drp-calendar"),
                a = e.hasClass("left"),
                i = parseInt(e.find(".hourselect").val(), 10),
                s = parseInt(e.find(".minuteselect").val(), 10),
                n = this.timePickerSeconds ? parseInt(e.find(".secondselect").val(), 10) : 0;
            if (!this.timePicker24Hour) {
                var r = e.find(".ampmselect").val();
                "PM" === r && i < 12 && (i += 12), "AM" === r && 12 === i && (i = 0)
            }
            if (a) {
                var o = this.startDate.clone();
                o.hour(i), o.minute(s), o.second(n), this.setStartDate(o), this.singleDatePicker ? this.endDate = this.startDate.clone() : this.endDate && this.endDate.format("YYYY-MM-DD") == o.format("YYYY-MM-DD") && this.endDate.isBefore(o) && this.setEndDate(o.clone())
            } else if (this.endDate) {
                var h = this.endDate.clone();
                h.hour(i), h.minute(s), h.second(n), this.setEndDate(h)
            }
            this.updateCalendars(), this.updateFormInputs(), this.renderTimePicker("left"), this.renderTimePicker("right")
        },
        elementChanged: function() {
            if (this.element.is("input") && this.element.val().length) {
                var t = this.element.val().split(this.locale.separator),
                    e = null,
                    a = null;
                2 === t.length && (e = H(t[0], this.locale.format), a = H(t[1], this.locale.format)), (this.singleDatePicker || null === e || null === a) && (a = e = H(this.element.val(), this.locale.format)), e.isValid() && a.isValid() && (this.setStartDate(e), this.setEndDate(a), this.updateView())
            }
        },
        keydown: function(t) {
            9 !== t.keyCode && 13 !== t.keyCode || this.hide(), 27 === t.keyCode && (t.preventDefault(), t.stopPropagation(), this.hide())
        },
        updateElement: function() {
            if (this.element.is("input") && this.autoUpdateInput) {
                var t = this.startDate.format(this.locale.format);
                this.singleDatePicker || (t += this.locale.separator + this.endDate.format(this.locale.format)), t !== this.element.val() && this.element.val(t).trigger("change")
            }
        },
        remove: function() {
            this.container.remove(), this.element.off(".daterangepicker"), this.element.removeData()
        }
    }, R.fn.daterangepicker = function(t, e) {
        var a = R.extend(!0, {}, R.fn.daterangepicker.defaultOptions, t);
        return this.each(function() {
            var t = R(this);
            t.data("daterangepicker") && t.data("daterangepicker").remove(), t.data("daterangepicker", new i(t, a, e))
        }), this
    }, i
});
"use strict";
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
        return typeof a
    } : function(a) {
        return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
    },
    windowIsDefined = "object" === ("undefined" == typeof window ? "undefined" : _typeof(window));
! function(a) {
    if ("function" == typeof define && define.amd) define(["jquery"], a);
    else if ("object" === ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports) {
        var b;
        try {
            b = require("jquery")
        } catch (c) {
            b = null
        }
        module.exports = a(b)
    } else window && (window.Slider = a(window.jQuery))
}(function(a) {
    var b = "slider",
        c = "bootstrapSlider";
    windowIsDefined && !window.console && (window.console = {}), windowIsDefined && !window.console.log && (window.console.log = function() {}), windowIsDefined && !window.console.warn && (window.console.warn = function() {});
    var d;
    return function(a) {
        function b() {}

        function c(a) {
            function c(b) {
                b.prototype.option || (b.prototype.option = function(b) {
                    a.isPlainObject(b) && (this.options = a.extend(!0, this.options, b))
                })
            }

            function e(b, c) {
                a.fn[b] = function(e) {
                    if ("string" == typeof e) {
                        for (var g = d.call(arguments, 1), h = 0, i = this.length; i > h; h++) {
                            var j = this[h],
                                k = a.data(j, b);
                            if (k)
                                if (a.isFunction(k[e]) && "_" !== e.charAt(0)) {
                                    var l = k[e].apply(k, g);
                                    if (void 0 !== l && l !== k) return l
                                } else f("no such method '" + e + "' for " + b + " instance");
                            else f("cannot call methods on " + b + " prior to initialization; attempted to call '" + e + "'")
                        }
                        return this
                    }
                    var m = this.map(function() {
                        var d = a.data(this, b);
                        return d ? (d.option(e), d._init()) : (d = new c(this, e), a.data(this, b, d)), a(this)
                    });
                    return !m || m.length > 1 ? m : m[0]
                }
            }
            if (a) {
                var f = "undefined" == typeof console ? b : function(a) {
                    console.error(a)
                };
                return a.bridget = function(a, b) {
                    c(b), e(a, b)
                }, a.bridget
            }
        }
        var d = Array.prototype.slice;
        c(a)
    }(a),
        function(a) {
            function e(b, c) {
                function d(a, b) {
                    var c = "data-slider-" + b.replace(/_/g, "-"),
                        d = a.getAttribute(c);
                    try {
                        return JSON.parse(d)
                    } catch (e) {
                        return d
                    }
                }
                this._state = {
                    value: null,
                    enabled: null,
                    offset: null,
                    size: null,
                    percentage: null,
                    inDrag: !1,
                    over: !1
                }, this.ticksCallbackMap = {}, this.handleCallbackMap = {}, "string" == typeof b ? this.element = document.querySelector(b) : b instanceof HTMLElement && (this.element = b), c = c ? c : {};
                for (var e = Object.keys(this.defaultOptions), f = 0; f < e.length; f++) {
                    var h = e[f],
                        i = c[h];
                    i = "undefined" != typeof i ? i : d(this.element, h), i = null !== i ? i : this.defaultOptions[h], this.options || (this.options = {}), this.options[h] = i
                }
                "auto" === this.options.rtl && (this.options.rtl = "rtl" === window.getComputedStyle(this.element).direction), "vertical" !== this.options.orientation || "top" !== this.options.tooltip_position && "bottom" !== this.options.tooltip_position ? "horizontal" !== this.options.orientation || "left" !== this.options.tooltip_position && "right" !== this.options.tooltip_position || (this.options.tooltip_position = "top") : this.options.rtl ? this.options.tooltip_position = "left" : this.options.tooltip_position = "right";
                var j, k, l, m, n, o = this.element.style.width,
                    p = !1,
                    q = this.element.parentNode;
                if (this.sliderElem) p = !0;
                else {
                    this.sliderElem = document.createElement("div"), this.sliderElem.className = "slider";
                    var r = document.createElement("div");
                    r.className = "slider-track", k = document.createElement("div"), k.className = "slider-track-low", j = document.createElement("div"), j.className = "slider-selection", l = document.createElement("div"), l.className = "slider-track-high", m = document.createElement("div"), m.className = "slider-handle min-slider-handle", m.setAttribute("role", "slider"), m.setAttribute("aria-valuemin", this.options.min), m.setAttribute("aria-valuemax", this.options.max), n = document.createElement("div"), n.className = "slider-handle max-slider-handle", n.setAttribute("role", "slider"), n.setAttribute("aria-valuemin", this.options.min), n.setAttribute("aria-valuemax", this.options.max), r.appendChild(k), r.appendChild(j), r.appendChild(l), this.rangeHighlightElements = [];
                    var s = this.options.rangeHighlights;
                    if (Array.isArray(s) && s.length > 0)
                        for (var t = 0; t < s.length; t++) {
                            var u = document.createElement("div"),
                                v = s[t]["class"] || "";
                            u.className = "slider-rangeHighlight slider-selection " + v, this.rangeHighlightElements.push(u), r.appendChild(u)
                        }
                    var w = Array.isArray(this.options.labelledby);
                    if (w && this.options.labelledby[0] && m.setAttribute("aria-labelledby", this.options.labelledby[0]), w && this.options.labelledby[1] && n.setAttribute("aria-labelledby", this.options.labelledby[1]), !w && this.options.labelledby && (m.setAttribute("aria-labelledby", this.options.labelledby), n.setAttribute("aria-labelledby", this.options.labelledby)), this.ticks = [], Array.isArray(this.options.ticks) && this.options.ticks.length > 0) {
                        for (this.ticksContainer = document.createElement("div"), this.ticksContainer.className = "slider-tick-container", f = 0; f < this.options.ticks.length; f++) {
                            var x = document.createElement("div");
                            if (x.className = "slider-tick", this.options.ticks_tooltip) {
                                var y = this._addTickListener(),
                                    z = y.addMouseEnter(this, x, f),
                                    A = y.addMouseLeave(this, x);
                                this.ticksCallbackMap[f] = {
                                    mouseEnter: z,
                                    mouseLeave: A
                                }
                            }
                            this.ticks.push(x), this.ticksContainer.appendChild(x)
                        }
                        j.className += " tick-slider-selection"
                    }
                    if (this.tickLabels = [], Array.isArray(this.options.ticks_labels) && this.options.ticks_labels.length > 0)
                        for (this.tickLabelContainer = document.createElement("div"), this.tickLabelContainer.className = "slider-tick-label-container", f = 0; f < this.options.ticks_labels.length; f++) {
                            var B = document.createElement("div"),
                                C = 0 === this.options.ticks_positions.length,
                                D = this.options.reversed && C ? this.options.ticks_labels.length - (f + 1) : f;
                            B.className = "slider-tick-label", B.innerHTML = this.options.ticks_labels[D], this.tickLabels.push(B), this.tickLabelContainer.appendChild(B)
                        }
                    var E = function(a) {
                            var b = document.createElement("div");
                            b.className = "tooltip-arrow";
                            var c = document.createElement("div");
                            c.className = "tooltip-inner", a.appendChild(b), a.appendChild(c)
                        },
                        F = document.createElement("div");
                    F.className = "tooltip tooltip-main", F.setAttribute("role", "presentation"), E(F);
                    var G = document.createElement("div");
                    G.className = "tooltip tooltip-min", G.setAttribute("role", "presentation"), E(G);
                    var H = document.createElement("div");
                    H.className = "tooltip tooltip-max", H.setAttribute("role", "presentation"), E(H), this.sliderElem.appendChild(r), this.sliderElem.appendChild(F), this.sliderElem.appendChild(G), this.sliderElem.appendChild(H), this.tickLabelContainer && this.sliderElem.appendChild(this.tickLabelContainer), this.ticksContainer && this.sliderElem.appendChild(this.ticksContainer), this.sliderElem.appendChild(m), this.sliderElem.appendChild(n), q.insertBefore(this.sliderElem, this.element), this.element.style.display = "none"
                }
                if (a && (this.$element = a(this.element), this.$sliderElem = a(this.sliderElem)), this.eventToCallbackMap = {}, this.sliderElem.id = this.options.id, this.touchCapable = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch, this.touchX = 0, this.touchY = 0, this.tooltip = this.sliderElem.querySelector(".tooltip-main"), this.tooltipInner = this.tooltip.querySelector(".tooltip-inner"), this.tooltip_min = this.sliderElem.querySelector(".tooltip-min"), this.tooltipInner_min = this.tooltip_min.querySelector(".tooltip-inner"), this.tooltip_max = this.sliderElem.querySelector(".tooltip-max"), this.tooltipInner_max = this.tooltip_max.querySelector(".tooltip-inner"), g[this.options.scale] && (this.options.scale = g[this.options.scale]), p === !0 && (this._removeClass(this.sliderElem, "slider-horizontal"), this._removeClass(this.sliderElem, "slider-vertical"), this._removeClass(this.sliderElem, "slider-rtl"), this._removeClass(this.tooltip, "hide"), this._removeClass(this.tooltip_min, "hide"), this._removeClass(this.tooltip_max, "hide"), ["left", "right", "top", "width", "height"].forEach(function(a) {
                    this._removeProperty(this.trackLow, a), this._removeProperty(this.trackSelection, a), this._removeProperty(this.trackHigh, a)
                }, this), [this.handle1, this.handle2].forEach(function(a) {
                    this._removeProperty(a, "left"), this._removeProperty(a, "right"), this._removeProperty(a, "top")
                }, this), [this.tooltip, this.tooltip_min, this.tooltip_max].forEach(function(a) {
                    this._removeProperty(a, "left"), this._removeProperty(a, "right"), this._removeProperty(a, "top"), this._removeClass(a, "right"), this._removeClass(a, "left"), this._removeClass(a, "top")
                }, this)), "vertical" === this.options.orientation ? (this._addClass(this.sliderElem, "slider-vertical"), this.stylePos = "top", this.mousePos = "pageY", this.sizePos = "offsetHeight") : (this._addClass(this.sliderElem, "slider-horizontal"), this.sliderElem.style.width = o, this.options.orientation = "horizontal", this.options.rtl ? this.stylePos = "right" : this.stylePos = "left", this.mousePos = "clientX", this.sizePos = "offsetWidth"), this.options.rtl && this._addClass(this.sliderElem, "slider-rtl"), this._setTooltipPosition(), Array.isArray(this.options.ticks) && this.options.ticks.length > 0 && (this.options.max = Math.max.apply(Math, this.options.ticks), this.options.min = Math.min.apply(Math, this.options.ticks)), Array.isArray(this.options.value) ? (this.options.range = !0, this._state.value = this.options.value) : this.options.range ? this._state.value = [this.options.value, this.options.max] : this._state.value = this.options.value, this.trackLow = k || this.trackLow, this.trackSelection = j || this.trackSelection, this.trackHigh = l || this.trackHigh, "none" === this.options.selection ? (this._addClass(this.trackLow, "hide"), this._addClass(this.trackSelection, "hide"), this._addClass(this.trackHigh, "hide")) : ("after" === this.options.selection || "before" === this.options.selection) && (this._removeClass(this.trackLow, "hide"), this._removeClass(this.trackSelection, "hide"), this._removeClass(this.trackHigh, "hide")), this.handle1 = m || this.handle1, this.handle2 = n || this.handle2, p === !0)
                    for (this._removeClass(this.handle1, "round triangle"), this._removeClass(this.handle2, "round triangle hide"), f = 0; f < this.ticks.length; f++) this._removeClass(this.ticks[f], "round triangle hide");
                var I = ["round", "triangle", "custom"],
                    J = -1 !== I.indexOf(this.options.handle);
                if (J)
                    for (this._addClass(this.handle1, this.options.handle), this._addClass(this.handle2, this.options.handle), f = 0; f < this.ticks.length; f++) this._addClass(this.ticks[f], this.options.handle);
                if (this._state.offset = this._offset(this.sliderElem), this._state.size = this.sliderElem[this.sizePos], this.setValue(this._state.value), this.handle1Keydown = this._keydown.bind(this, 0), this.handle1.addEventListener("keydown", this.handle1Keydown, !1), this.handle2Keydown = this._keydown.bind(this, 1), this.handle2.addEventListener("keydown", this.handle2Keydown, !1), this.mousedown = this._mousedown.bind(this), this.touchstart = this._touchstart.bind(this), this.touchmove = this._touchmove.bind(this), this.touchCapable) {
                    var K = !1;
                    try {
                        var L = Object.defineProperty({}, "passive", {
                            get: function() {
                                K = !0
                            }
                        });
                        window.addEventListener("test", null, L)
                    } catch (M) {}
                    var N = K ? {
                        passive: !0
                    } : !1;
                    this.sliderElem.addEventListener("touchstart", this.touchstart, N), this.sliderElem.addEventListener("touchmove", this.touchmove, N)
                }
                if (this.sliderElem.addEventListener("mousedown", this.mousedown, !1), this.resize = this._resize.bind(this), window.addEventListener("resize", this.resize, !1), "hide" === this.options.tooltip) this._addClass(this.tooltip, "hide"), this._addClass(this.tooltip_min, "hide"), this._addClass(this.tooltip_max, "hide");
                else if ("always" === this.options.tooltip) this._showTooltip(), this._alwaysShowTooltip = !0;
                else {
                    if (this.showTooltip = this._showTooltip.bind(this), this.hideTooltip = this._hideTooltip.bind(this), this.options.ticks_tooltip) {
                        var O = this._addTickListener(),
                            P = O.addMouseEnter(this, this.handle1),
                            Q = O.addMouseLeave(this, this.handle1);
                        this.handleCallbackMap.handle1 = {
                            mouseEnter: P,
                            mouseLeave: Q
                        }, P = O.addMouseEnter(this, this.handle2), Q = O.addMouseLeave(this, this.handle2), this.handleCallbackMap.handle2 = {
                            mouseEnter: P,
                            mouseLeave: Q
                        }
                    } else this.sliderElem.addEventListener("mouseenter", this.showTooltip, !1), this.sliderElem.addEventListener("mouseleave", this.hideTooltip, !1);
                    this.handle1.addEventListener("focus", this.showTooltip, !1), this.handle1.addEventListener("blur", this.hideTooltip, !1), this.handle2.addEventListener("focus", this.showTooltip, !1), this.handle2.addEventListener("blur", this.hideTooltip, !1)
                }
                this.options.enabled ? this.enable() : this.disable()
            }
            var f = {
                    formatInvalidInputErrorMsg: function(a) {
                        return "Invalid input value '" + a + "' passed in"
                    },
                    callingContextNotSliderInstance: "Calling context element does not have instance of Slider bound to it. Check your code to make sure the JQuery object returned from the call to the slider() initializer is calling the method"
                },
                g = {
                    linear: {
                        toValue: function(a) {
                            var b = a / 100 * (this.options.max - this.options.min),
                                c = !0;
                            if (this.options.ticks_positions.length > 0) {
                                for (var d, e, f, g = 0, h = 1; h < this.options.ticks_positions.length; h++)
                                    if (a <= this.options.ticks_positions[h]) {
                                        d = this.options.ticks[h - 1], f = this.options.ticks_positions[h - 1], e = this.options.ticks[h], g = this.options.ticks_positions[h];
                                        break
                                    }
                                var i = (a - f) / (g - f);
                                b = d + i * (e - d), c = !1
                            }
                            var j = c ? this.options.min : 0,
                                k = j + Math.round(b / this.options.step) * this.options.step;
                            return k < this.options.min ? this.options.min : k > this.options.max ? this.options.max : k
                        },
                        toPercentage: function(a) {
                            if (this.options.max === this.options.min) return 0;
                            if (this.options.ticks_positions.length > 0) {
                                for (var b, c, d, e = 0, f = 0; f < this.options.ticks.length; f++)
                                    if (a <= this.options.ticks[f]) {
                                        b = f > 0 ? this.options.ticks[f - 1] : 0, d = f > 0 ? this.options.ticks_positions[f - 1] : 0, c = this.options.ticks[f], e = this.options.ticks_positions[f];
                                        break
                                    }
                                if (f > 0) {
                                    var g = (a - b) / (c - b);
                                    return d + g * (e - d)
                                }
                            }
                            return 100 * (a - this.options.min) / (this.options.max - this.options.min)
                        }
                    },
                    logarithmic: {
                        toValue: function(a) {
                            var b = 0 === this.options.min ? 0 : Math.log(this.options.min),
                                c = Math.log(this.options.max),
                                d = Math.exp(b + (c - b) * a / 100);
                            return Math.round(d) === this.options.max ? this.options.max : (d = this.options.min + Math.round((d - this.options.min) / this.options.step) * this.options.step, d < this.options.min ? this.options.min : d > this.options.max ? this.options.max : d)
                        },
                        toPercentage: function(a) {
                            if (this.options.max === this.options.min) return 0;
                            var b = Math.log(this.options.max),
                                c = 0 === this.options.min ? 0 : Math.log(this.options.min),
                                d = 0 === a ? 0 : Math.log(a);
                            return 100 * (d - c) / (b - c)
                        }
                    }
                };
            if (d = function(a, b) {
                return e.call(this, a, b), this
            }, d.prototype = {
                _init: function() {},
                constructor: d,
                defaultOptions: {
                    id: "",
                    min: 0,
                    max: 10,
                    step: 1,
                    precision: 0,
                    orientation: "horizontal",
                    value: 5,
                    range: !1,
                    selection: "before",
                    tooltip: "show",
                    tooltip_split: !1,
                    handle: "round",
                    reversed: !1,
                    rtl: "auto",
                    enabled: !0,
                    formatter: function(a) {
                        return Array.isArray(a) ? a[0] + " : " + a[1] : a
                    },
                    natural_arrow_keys: !1,
                    ticks: [],
                    ticks_positions: [],
                    ticks_labels: [],
                    ticks_snap_bounds: 0,
                    ticks_tooltip: !1,
                    scale: "linear",
                    focus: !1,
                    tooltip_position: null,
                    labelledby: null,
                    rangeHighlights: []
                },
                getElement: function() {
                    return this.sliderElem
                },
                getValue: function() {
                    return this.options.range ? this._state.value : this._state.value[0]
                },
                setValue: function(a, b, c) {
                    a || (a = 0);
                    var d = this.getValue();
                    this._state.value = this._validateInputValue(a);
                    var e = this._applyPrecision.bind(this);
                    this.options.range ? (this._state.value[0] = e(this._state.value[0]), this._state.value[1] = e(this._state.value[1]), this._state.value[0] = Math.max(this.options.min, Math.min(this.options.max, this._state.value[0])), this._state.value[1] = Math.max(this.options.min, Math.min(this.options.max, this._state.value[1]))) : (this._state.value = e(this._state.value), this._state.value = [Math.max(this.options.min, Math.min(this.options.max, this._state.value))], this._addClass(this.handle2, "hide"), "after" === this.options.selection ? this._state.value[1] = this.options.max : this._state.value[1] = this.options.min), this.options.max > this.options.min ? this._state.percentage = [this._toPercentage(this._state.value[0]), this._toPercentage(this._state.value[1]), 100 * this.options.step / (this.options.max - this.options.min)] : this._state.percentage = [0, 0, 100], this._layout();
                    var f = this.options.range ? this._state.value : this._state.value[0];
                    return this._setDataVal(f), b === !0 && this._trigger("slide", f), d !== f && c === !0 && this._trigger("change", {
                        oldValue: d,
                        newValue: f
                    }), this
                },
                destroy: function() {
                    this._removeSliderEventHandlers(), this.sliderElem.parentNode.removeChild(this.sliderElem), this.element.style.display = "", this._cleanUpEventCallbacksMap(), this.element.removeAttribute("data"), a && (this._unbindJQueryEventHandlers(), this.$element.removeData("slider"))
                },
                disable: function() {
                    return this._state.enabled = !1, this.handle1.removeAttribute("tabindex"), this.handle2.removeAttribute("tabindex"), this._addClass(this.sliderElem, "slider-disabled"), this._trigger("slideDisabled"), this
                },
                enable: function() {
                    return this._state.enabled = !0, this.handle1.setAttribute("tabindex", 0), this.handle2.setAttribute("tabindex", 0), this._removeClass(this.sliderElem, "slider-disabled"), this._trigger("slideEnabled"), this
                },
                toggle: function() {
                    return this._state.enabled ? this.disable() : this.enable(), this
                },
                isEnabled: function() {
                    return this._state.enabled
                },
                on: function(a, b) {
                    return this._bindNonQueryEventHandler(a, b), this
                },
                off: function(b, c) {
                    a ? (this.$element.off(b, c), this.$sliderElem.off(b, c)) : this._unbindNonQueryEventHandler(b, c)
                },
                getAttribute: function(a) {
                    return a ? this.options[a] : this.options
                },
                setAttribute: function(a, b) {
                    return this.options[a] = b, this
                },
                refresh: function() {
                    return this._removeSliderEventHandlers(), e.call(this, this.element, this.options), a && a.data(this.element, "slider", this), this
                },
                relayout: function() {
                    return this._resize(), this._layout(), this
                },
                _removeSliderEventHandlers: function() {
                    if (this.handle1.removeEventListener("keydown", this.handle1Keydown, !1), this.handle2.removeEventListener("keydown", this.handle2Keydown, !1), this.options.ticks_tooltip) {
                        for (var a = this.ticksContainer.getElementsByClassName("slider-tick"), b = 0; b < a.length; b++) a[b].removeEventListener("mouseenter", this.ticksCallbackMap[b].mouseEnter, !1), a[b].removeEventListener("mouseleave", this.ticksCallbackMap[b].mouseLeave, !1);
                        this.handle1.removeEventListener("mouseenter", this.handleCallbackMap.handle1.mouseEnter, !1), this.handle2.removeEventListener("mouseenter", this.handleCallbackMap.handle2.mouseEnter, !1), this.handle1.removeEventListener("mouseleave", this.handleCallbackMap.handle1.mouseLeave, !1), this.handle2.removeEventListener("mouseleave", this.handleCallbackMap.handle2.mouseLeave, !1)
                    }
                    this.handleCallbackMap = null, this.ticksCallbackMap = null, this.showTooltip && (this.handle1.removeEventListener("focus", this.showTooltip, !1), this.handle2.removeEventListener("focus", this.showTooltip, !1)), this.hideTooltip && (this.handle1.removeEventListener("blur", this.hideTooltip, !1), this.handle2.removeEventListener("blur", this.hideTooltip, !1)), this.showTooltip && this.sliderElem.removeEventListener("mouseenter", this.showTooltip, !1), this.hideTooltip && this.sliderElem.removeEventListener("mouseleave", this.hideTooltip, !1), this.sliderElem.removeEventListener("touchstart", this.touchstart, !1), this.sliderElem.removeEventListener("touchmove", this.touchmove, !1), this.sliderElem.removeEventListener("mousedown", this.mousedown, !1), window.removeEventListener("resize", this.resize, !1)
                },
                _bindNonQueryEventHandler: function(a, b) {
                    void 0 === this.eventToCallbackMap[a] && (this.eventToCallbackMap[a] = []), this.eventToCallbackMap[a].push(b)
                },
                _unbindNonQueryEventHandler: function(a, b) {
                    var c = this.eventToCallbackMap[a];
                    if (void 0 !== c)
                        for (var d = 0; d < c.length; d++)
                            if (c[d] === b) {
                                c.splice(d, 1);
                                break
                            }
                },
                _cleanUpEventCallbacksMap: function() {
                    for (var a = Object.keys(this.eventToCallbackMap), b = 0; b < a.length; b++) {
                        var c = a[b];
                        delete this.eventToCallbackMap[c]
                    }
                },
                _showTooltip: function() {
                    this.options.tooltip_split === !1 ? (this._addClass(this.tooltip, "in"), this.tooltip_min.style.display = "none", this.tooltip_max.style.display = "none") : (this._addClass(this.tooltip_min, "in"), this._addClass(this.tooltip_max, "in"), this.tooltip.style.display = "none"), this._state.over = !0
                },
                _hideTooltip: function() {
                    this._state.inDrag === !1 && this.alwaysShowTooltip !== !0 && (this._removeClass(this.tooltip, "in"), this._removeClass(this.tooltip_min, "in"), this._removeClass(this.tooltip_max, "in")), this._state.over = !1
                },
                _setToolTipOnMouseOver: function(a) {
                    function b(a, b) {
                        return b ? [100 - a.percentage[0], this.options.range ? 100 - a.percentage[1] : a.percentage[1]] : [a.percentage[0], a.percentage[1]]
                    }
                    var c = this.options.formatter(a ? a.value[0] : this._state.value[0]),
                        d = a ? b(a, this.options.reversed) : b(this._state, this.options.reversed);
                    this._setText(this.tooltipInner, c), this.tooltip.style[this.stylePos] = d[0] + "%"
                },
                _addTickListener: function() {
                    return {
                        addMouseEnter: function(a, b, c) {
                            var d = function() {
                                var b = a._state,
                                    d = c >= 0 ? c : this.attributes["aria-valuenow"].value,
                                    e = parseInt(d, 10);
                                b.value[0] = e, b.percentage[0] = a.options.ticks_positions[e], a._setToolTipOnMouseOver(b), a._showTooltip()
                            };
                            return b.addEventListener("mouseenter", d, !1), d
                        },
                        addMouseLeave: function(a, b) {
                            var c = function() {
                                a._hideTooltip()
                            };
                            return b.addEventListener("mouseleave", c, !1), c
                        }
                    }
                },
                _layout: function() {
                    var a;
                    if (a = this.options.reversed ? [100 - this._state.percentage[0], this.options.range ? 100 - this._state.percentage[1] : this._state.percentage[1]] : [this._state.percentage[0], this._state.percentage[1]], this.handle1.style[this.stylePos] = a[0] + "%", this.handle1.setAttribute("aria-valuenow", this._state.value[0]), isNaN(this.options.formatter(this._state.value[0])) && this.handle1.setAttribute("aria-valuetext", this.options.formatter(this._state.value[0])), this.handle2.style[this.stylePos] = a[1] + "%", this.handle2.setAttribute("aria-valuenow", this._state.value[1]), isNaN(this.options.formatter(this._state.value[1])) && this.handle2.setAttribute("aria-valuetext", this.options.formatter(this._state.value[1])), this.rangeHighlightElements.length > 0 && Array.isArray(this.options.rangeHighlights) && this.options.rangeHighlights.length > 0)
                        for (var b = 0; b < this.options.rangeHighlights.length; b++) {
                            var c = this._toPercentage(this.options.rangeHighlights[b].start),
                                d = this._toPercentage(this.options.rangeHighlights[b].end);
                            if (this.options.reversed) {
                                var e = 100 - d;
                                d = 100 - c, c = e
                            }
                            var f = this._createHighlightRange(c, d);
                            f ? "vertical" === this.options.orientation ? (this.rangeHighlightElements[b].style.top = f.start + "%", this.rangeHighlightElements[b].style.height = f.size + "%") : (this.options.rtl ? this.rangeHighlightElements[b].style.right = f.start + "%" : this.rangeHighlightElements[b].style.left = f.start + "%", this.rangeHighlightElements[b].style.width = f.size + "%") : this.rangeHighlightElements[b].style.display = "none"
                        }
                    if (Array.isArray(this.options.ticks) && this.options.ticks.length > 0) {
                        var g, h = "vertical" === this.options.orientation ? "height" : "width";
                        g = "vertical" === this.options.orientation ? "marginTop" : this.options.rtl ? "marginRight" : "marginLeft";
                        var i = this._state.size / (this.options.ticks.length - 1);
                        if (this.tickLabelContainer) {
                            var j = 0;
                            if (0 === this.options.ticks_positions.length) "vertical" !== this.options.orientation && (this.tickLabelContainer.style[g] = -i / 2 + "px"), j = this.tickLabelContainer.offsetHeight;
                            else
                                for (k = 0; k < this.tickLabelContainer.childNodes.length; k++) this.tickLabelContainer.childNodes[k].offsetHeight > j && (j = this.tickLabelContainer.childNodes[k].offsetHeight);
                            "horizontal" === this.options.orientation && (this.sliderElem.style.marginBottom = j + "px")
                        }
                        for (var k = 0; k < this.options.ticks.length; k++) {
                            var l = this.options.ticks_positions[k] || this._toPercentage(this.options.ticks[k]);
                            this.options.reversed && (l = 100 - l), this.ticks[k].style[this.stylePos] = l + "%", this._removeClass(this.ticks[k], "in-selection"), this.options.range ? l >= a[0] && l <= a[1] && this._addClass(this.ticks[k], "in-selection") : "after" === this.options.selection && l >= a[0] ? this._addClass(this.ticks[k], "in-selection") : "before" === this.options.selection && l <= a[0] && this._addClass(this.ticks[k], "in-selection"), this.tickLabels[k] && (this.tickLabels[k].style[h] = i + "px", "vertical" !== this.options.orientation && void 0 !== this.options.ticks_positions[k] ? (this.tickLabels[k].style.position = "absolute", this.tickLabels[k].style[this.stylePos] = l + "%", this.tickLabels[k].style[g] = -i / 2 + "px") : "vertical" === this.options.orientation && (this.options.rtl ? this.tickLabels[k].style.marginRight = this.sliderElem.offsetWidth + "px" : this.tickLabels[k].style.marginLeft = this.sliderElem.offsetWidth + "px", this.tickLabelContainer.style[g] = this.sliderElem.offsetWidth / 2 * -1 + "px"))
                        }
                    }
                    var m;
                    if (this.options.range) {
                        m = this.options.formatter(this._state.value), this._setText(this.tooltipInner, m), this.tooltip.style[this.stylePos] = (a[1] + a[0]) / 2 + "%";
                        var n = this.options.formatter(this._state.value[0]);
                        this._setText(this.tooltipInner_min, n);
                        var o = this.options.formatter(this._state.value[1]);
                        this._setText(this.tooltipInner_max, o), this.tooltip_min.style[this.stylePos] = a[0] + "%", this.tooltip_max.style[this.stylePos] = a[1] + "%"
                    } else m = this.options.formatter(this._state.value[0]), this._setText(this.tooltipInner, m), this.tooltip.style[this.stylePos] = a[0] + "%";
                    if ("vertical" === this.options.orientation) this.trackLow.style.top = "0", this.trackLow.style.height = Math.min(a[0], a[1]) + "%", this.trackSelection.style.top = Math.min(a[0], a[1]) + "%", this.trackSelection.style.height = Math.abs(a[0] - a[1]) + "%", this.trackHigh.style.bottom = "0", this.trackHigh.style.height = 100 - Math.min(a[0], a[1]) - Math.abs(a[0] - a[1]) + "%";
                    else {
                        "right" === this.stylePos ? this.trackLow.style.right = "0" : this.trackLow.style.left = "0", this.trackLow.style.width = Math.min(a[0], a[1]) + "%", "right" === this.stylePos ? this.trackSelection.style.right = Math.min(a[0], a[1]) + "%" : this.trackSelection.style.left = Math.min(a[0], a[1]) + "%", this.trackSelection.style.width = Math.abs(a[0] - a[1]) + "%", "right" === this.stylePos ? this.trackHigh.style.left = "0" : this.trackHigh.style.right = "0", this.trackHigh.style.width = 100 - Math.min(a[0], a[1]) - Math.abs(a[0] - a[1]) + "%";
                        var p = this.tooltip_min.getBoundingClientRect(),
                            q = this.tooltip_max.getBoundingClientRect();
                        "bottom" === this.options.tooltip_position ? p.right > q.left ? (this._removeClass(this.tooltip_max, "bottom"), this._addClass(this.tooltip_max, "top"), this.tooltip_max.style.top = "", this.tooltip_max.style.bottom = "22px") : (this._removeClass(this.tooltip_max, "top"), this._addClass(this.tooltip_max, "bottom"), this.tooltip_max.style.top = this.tooltip_min.style.top, this.tooltip_max.style.bottom = "") : p.right > q.left ? (this._removeClass(this.tooltip_max, "top"), this._addClass(this.tooltip_max, "bottom"), this.tooltip_max.style.top = "18px") : (this._removeClass(this.tooltip_max, "bottom"), this._addClass(this.tooltip_max, "top"), this.tooltip_max.style.top = this.tooltip_min.style.top)
                    }
                },
                _createHighlightRange: function(a, b) {
                    return this._isHighlightRange(a, b) ? a > b ? {
                        start: b,
                        size: a - b
                    } : {
                        start: a,
                        size: b - a
                    } : null
                },
                _isHighlightRange: function(a, b) {
                    return a >= 0 && 100 >= a && b >= 0 && 100 >= b ? !0 : !1
                },
                _resize: function(a) {
                    this._state.offset = this._offset(this.sliderElem), this._state.size = this.sliderElem[this.sizePos], this._layout()
                },
                _removeProperty: function(a, b) {
                    a.style.removeProperty ? a.style.removeProperty(b) : a.style.removeAttribute(b)
                },
                _mousedown: function(a) {
                    if (!this._state.enabled) return !1;
                    a.preventDefault && a.preventDefault(), this._state.offset = this._offset(this.sliderElem), this._state.size = this.sliderElem[this.sizePos];
                    var b = this._getPercentage(a);
                    if (this.options.range) {
                        var c = Math.abs(this._state.percentage[0] - b),
                            d = Math.abs(this._state.percentage[1] - b);
                        this._state.dragged = d > c ? 0 : 1, this._adjustPercentageForRangeSliders(b)
                    } else this._state.dragged = 0;
                    this._state.percentage[this._state.dragged] = b, this._layout(), this.touchCapable && (document.removeEventListener("touchmove", this.mousemove, !1), document.removeEventListener("touchend", this.mouseup, !1)), this.mousemove && document.removeEventListener("mousemove", this.mousemove, !1), this.mouseup && document.removeEventListener("mouseup", this.mouseup, !1), this.mousemove = this._mousemove.bind(this), this.mouseup = this._mouseup.bind(this), this.touchCapable && (document.addEventListener("touchmove", this.mousemove, !1), document.addEventListener("touchend", this.mouseup, !1)), document.addEventListener("mousemove", this.mousemove, !1), document.addEventListener("mouseup", this.mouseup, !1), this._state.inDrag = !0;
                    var e = this._calculateValue();
                    return this._trigger("slideStart", e), this._setDataVal(e), this.setValue(e, !1, !0), a.returnValue = !1, this.options.focus && this._triggerFocusOnHandle(this._state.dragged), !0
                },
                _touchstart: function(a) {
                    if (void 0 === a.changedTouches) return void this._mousedown(a);
                    var b = a.changedTouches[0];
                    this.touchX = b.pageX, this.touchY = b.pageY
                },
                _triggerFocusOnHandle: function(a) {
                    0 === a && this.handle1.focus(), 1 === a && this.handle2.focus()
                },
                _keydown: function(a, b) {
                    if (!this._state.enabled) return !1;
                    var c;
                    switch (b.keyCode) {
                        case 37:
                        case 40:
                            c = -1;
                            break;
                        case 39:
                        case 38:
                            c = 1
                    }
                    if (c) {
                        if (this.options.natural_arrow_keys) {
                            var d = "vertical" === this.options.orientation && !this.options.reversed,
                                e = "horizontal" === this.options.orientation && this.options.reversed;
                            (d || e) && (c = -c)
                        }
                        var f = this._state.value[a] + c * this.options.step,
                            g = f / this.options.max * 100;
                        if (this._state.keyCtrl = a, this.options.range) {
                            this._adjustPercentageForRangeSliders(g);
                            var h = this._state.keyCtrl ? this._state.value[0] : f,
                                i = this._state.keyCtrl ? f : this._state.value[1];
                            f = [h, i]
                        }
                        return this._trigger("slideStart", f), this._setDataVal(f), this.setValue(f, !0, !0), this._setDataVal(f), this._trigger("slideStop", f), this._layout(), this._pauseEvent(b), delete this._state.keyCtrl, !1
                    }
                },
                _pauseEvent: function(a) {
                    a.stopPropagation && a.stopPropagation(), a.preventDefault && a.preventDefault(), a.cancelBubble = !0, a.returnValue = !1
                },
                _mousemove: function(a) {
                    if (!this._state.enabled) return !1;
                    var b = this._getPercentage(a);
                    this._adjustPercentageForRangeSliders(b), this._state.percentage[this._state.dragged] = b, this._layout();
                    var c = this._calculateValue(!0);
                    return this.setValue(c, !0, !0), !1
                },
                _touchmove: function(a) {
                    if (void 0 !== a.changedTouches) {
                        var b = a.changedTouches[0],
                            c = b.pageX - this.touchX,
                            d = b.pageY - this.touchY;
                        this._state.inDrag || ("vertical" === this.options.orientation && 5 >= c && c >= -5 && (d >= 15 || -15 >= d) ? this._mousedown(a) : 5 >= d && d >= -5 && (c >= 15 || -15 >= c) && this._mousedown(a))
                    }
                },
                _adjustPercentageForRangeSliders: function(a) {
                    if (this.options.range) {
                        var b = this._getNumDigitsAfterDecimalPlace(a);
                        b = b ? b - 1 : 0;
                        var c = this._applyToFixedAndParseFloat(a, b);
                        0 === this._state.dragged && this._applyToFixedAndParseFloat(this._state.percentage[1], b) < c ? (this._state.percentage[0] = this._state.percentage[1], this._state.dragged = 1) : 1 === this._state.dragged && this._applyToFixedAndParseFloat(this._state.percentage[0], b) > c ? (this._state.percentage[1] = this._state.percentage[0], this._state.dragged = 0) : 0 === this._state.keyCtrl && this._state.value[1] / this.options.max * 100 < a ? (this._state.percentage[0] = this._state.percentage[1], this._state.keyCtrl = 1, this.handle2.focus()) : 1 === this._state.keyCtrl && this._state.value[0] / this.options.max * 100 > a && (this._state.percentage[1] = this._state.percentage[0], this._state.keyCtrl = 0, this.handle1.focus())
                    }
                },
                _mouseup: function() {
                    if (!this._state.enabled) return !1;
                    this.touchCapable && (document.removeEventListener("touchmove", this.mousemove, !1), document.removeEventListener("touchend", this.mouseup, !1)), document.removeEventListener("mousemove", this.mousemove, !1), document.removeEventListener("mouseup", this.mouseup, !1), this._state.inDrag = !1, this._state.over === !1 && this._hideTooltip();
                    var a = this._calculateValue(!0);
                    return this._layout(), this._setDataVal(a), this._trigger("slideStop", a), !1
                },
                _calculateValue: function(a) {
                    var b;
                    if (this.options.range ? (b = [this.options.min, this.options.max], 0 !== this._state.percentage[0] && (b[0] = this._toValue(this._state.percentage[0]), b[0] = this._applyPrecision(b[0])), 100 !== this._state.percentage[1] && (b[1] = this._toValue(this._state.percentage[1]), b[1] = this._applyPrecision(b[1]))) : (b = this._toValue(this._state.percentage[0]), b = parseFloat(b), b = this._applyPrecision(b)), a) {
                        for (var c = [b, 1 / 0], d = 0; d < this.options.ticks.length; d++) {
                            var e = Math.abs(this.options.ticks[d] - b);
                            e <= c[1] && (c = [this.options.ticks[d], e])
                        }
                        if (c[1] <= this.options.ticks_snap_bounds) return c[0]
                    }
                    return b
                },
                _applyPrecision: function(a) {
                    var b = this.options.precision || this._getNumDigitsAfterDecimalPlace(this.options.step);
                    return this._applyToFixedAndParseFloat(a, b)
                },
                _getNumDigitsAfterDecimalPlace: function(a) {
                    var b = ("" + a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
                    return b ? Math.max(0, (b[1] ? b[1].length : 0) - (b[2] ? +b[2] : 0)) : 0
                },
                _applyToFixedAndParseFloat: function(a, b) {
                    var c = a.toFixed(b);
                    return parseFloat(c)
                },
                _getPercentage: function(a) {
                    !this.touchCapable || "touchstart" !== a.type && "touchmove" !== a.type || (a = a.touches[0]);
                    var b = a[this.mousePos],
                        c = this._state.offset[this.stylePos],
                        d = b - c;
                    "right" === this.stylePos && (d = -d);
                    var e = d / this._state.size * 100;
                    return e = Math.round(e / this._state.percentage[2]) * this._state.percentage[2], this.options.reversed && (e = 100 - e), Math.max(0, Math.min(100, e))
                },
                _validateInputValue: function(a) {
                    if (isNaN(+a)) {
                        if (Array.isArray(a)) return this._validateArray(a), a;
                        throw new Error(f.formatInvalidInputErrorMsg(a))
                    }
                    return +a
                },
                _validateArray: function(a) {
                    for (var b = 0; b < a.length; b++) {
                        var c = a[b];
                        if ("number" != typeof c) throw new Error(f.formatInvalidInputErrorMsg(c))
                    }
                },
                _setDataVal: function(a) {
                    this.element.setAttribute("data-value", a), this.element.setAttribute("value", a), this.element.value = a
                },
                _trigger: function(b, c) {
                    c = c || 0 === c ? c : void 0;
                    var d = this.eventToCallbackMap[b];
                    if (d && d.length)
                        for (var e = 0; e < d.length; e++) {
                            var f = d[e];
                            f(c)
                        }
                    a && this._triggerJQueryEvent(b, c)
                },
                _triggerJQueryEvent: function(a, b) {
                    var c = {
                        type: a,
                        value: b
                    };
                    this.$element.trigger(c), this.$sliderElem.trigger(c)
                },
                _unbindJQueryEventHandlers: function() {
                    this.$element.off(), this.$sliderElem.off()
                },
                _setText: function(a, b) {
                    "undefined" != typeof a.textContent ? a.textContent = b : "undefined" != typeof a.innerText && (a.innerText = b)
                },
                _removeClass: function(a, b) {
                    for (var c = b.split(" "), d = a.className, e = 0; e < c.length; e++) {
                        var f = c[e],
                            g = new RegExp("(?:\\s|^)" + f + "(?:\\s|$)");
                        d = d.replace(g, " ")
                    }
                    a.className = d.trim()
                },
                _addClass: function(a, b) {
                    for (var c = b.split(" "), d = a.className, e = 0; e < c.length; e++) {
                        var f = c[e],
                            g = new RegExp("(?:\\s|^)" + f + "(?:\\s|$)"),
                            h = g.test(d);
                        h || (d += " " + f)
                    }
                    a.className = d.trim()
                },
                _offsetLeft: function(a) {
                    return a.getBoundingClientRect().left
                },
                _offsetRight: function(a) {
                    return a.getBoundingClientRect().right
                },
                _offsetTop: function(a) {
                    for (var b = a.offsetTop;
                         (a = a.offsetParent) && !isNaN(a.offsetTop);) b += a.offsetTop, "BODY" !== a.tagName && (b -= a.scrollTop);
                    return b
                },
                _offset: function(a) {
                    return {
                        left: this._offsetLeft(a),
                        right: this._offsetRight(a),
                        top: this._offsetTop(a)
                    }
                },
                _css: function(b, c, d) {
                    if (a) a.style(b, c, d);
                    else {
                        var e = c.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(a, b) {
                            return b.toUpperCase()
                        });
                        b.style[e] = d
                    }
                },
                _toValue: function(a) {
                    return this.options.scale.toValue.apply(this, [a])
                },
                _toPercentage: function(a) {
                    return this.options.scale.toPercentage.apply(this, [a])
                },
                _setTooltipPosition: function() {
                    var a = [this.tooltip, this.tooltip_min, this.tooltip_max];
                    if ("vertical" === this.options.orientation) {
                        var b;
                        b = this.options.tooltip_position ? this.options.tooltip_position : this.options.rtl ? "left" : "right";
                        var c = "left" === b ? "right" : "left";
                        a.forEach(function(a) {
                            this._addClass(a, b), a.style[c] = "100%"
                        }.bind(this))
                    } else "bottom" === this.options.tooltip_position ? a.forEach(function(a) {
                        this._addClass(a, "bottom"), a.style.top = "22px"
                    }.bind(this)) : a.forEach(function(a) {
                        this._addClass(a, "top"), a.style.top = -this.tooltip.outerHeight - 14 + "px"
                    }.bind(this))
                }
            }, a && a.fn) {
                var h = void 0;
                a.fn.slider ? (windowIsDefined && window.console.warn("bootstrap-slider.js - WARNING: $.fn.slider namespace is already bound. Use the $.fn.bootstrapSlider namespace instead."), h = c) : (a.bridget(b, d), h = b), a.bridget(c, d), a(function() {
                    a("input[data-provide=slider]")[h]()
                })
            }
        }(a), d
});
! function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.ClipboardJS = e() : t.ClipboardJS = e()
}(this, function() {
    return function(t) {
        function e(o) {
            if (n[o]) return n[o].exports;
            var r = n[o] = {
                i: o,
                l: !1,
                exports: {}
            };
            return t[o].call(r.exports, r, r.exports, e), r.l = !0, r.exports
        }
        var n = {};
        return e.m = t, e.c = n, e.i = function(t) {
            return t
        }, e.d = function(t, n, o) {
            e.o(t, n) || Object.defineProperty(t, n, {
                configurable: !1,
                enumerable: !0,
                get: o
            })
        }, e.n = function(t) {
            var n = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return e.d(n, "a", n), n
        }, e.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, e.p = "", e(e.s = 3)
    }([function(t, e, n) {
        var o, r, i;
        ! function(a, c) {
            r = [t, n(7)], o = c, void 0 !== (i = "function" == typeof o ? o.apply(e, r) : o) && (t.exports = i)
        }(0, function(t, e) {
            "use strict";

            function n(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            var o = function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }(e),
                r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                },
                i = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var o = e[n];
                            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                        }
                    }
                    return function(e, n, o) {
                        return n && t(e.prototype, n), o && t(e, o), e
                    }
                }(),
                a = function() {
                    function t(e) {
                        n(this, t), this.resolveOptions(e), this.initSelection()
                    }
                    return i(t, [{
                        key: "resolveOptions",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            this.action = t.action, this.container = t.container, this.emitter = t.emitter, this.target = t.target, this.text = t.text, this.trigger = t.trigger, this.selectedText = ""
                        }
                    }, {
                        key: "initSelection",
                        value: function() {
                            this.text ? this.selectFake() : this.target && this.selectTarget()
                        }
                    }, {
                        key: "selectFake",
                        value: function() {
                            var t = this,
                                e = "rtl" == document.documentElement.getAttribute("dir");
                            this.removeFake(), this.fakeHandlerCallback = function() {
                                return t.removeFake()
                            }, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[e ? "right" : "left"] = "-9999px";
                            var n = window.pageYOffset || document.documentElement.scrollTop;
                            this.fakeElem.style.top = n + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, this.container.appendChild(this.fakeElem), this.selectedText = (0, o.default)(this.fakeElem), this.copyText()
                        }
                    }, {
                        key: "removeFake",
                        value: function() {
                            this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = null)
                        }
                    }, {
                        key: "selectTarget",
                        value: function() {
                            this.selectedText = (0, o.default)(this.target), this.copyText()
                        }
                    }, {
                        key: "copyText",
                        value: function() {
                            var t = void 0;
                            try {
                                t = document.execCommand(this.action)
                            } catch (e) {
                                t = !1
                            }
                            this.handleResult(t)
                        }
                    }, {
                        key: "handleResult",
                        value: function(t) {
                            this.emitter.emit(t ? "success" : "error", {
                                action: this.action,
                                text: this.selectedText,
                                trigger: this.trigger,
                                clearSelection: this.clearSelection.bind(this)
                            })
                        }
                    }, {
                        key: "clearSelection",
                        value: function() {
                            this.trigger && this.trigger.focus(), window.getSelection().removeAllRanges()
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.removeFake()
                        }
                    }, {
                        key: "action",
                        set: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "copy";
                            if (this._action = t, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"')
                        },
                        get: function() {
                            return this._action
                        }
                    }, {
                        key: "target",
                        set: function(t) {
                            if (void 0 !== t) {
                                if (!t || "object" !== (void 0 === t ? "undefined" : r(t)) || 1 !== t.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                                if ("copy" === this.action && t.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                if ("cut" === this.action && (t.hasAttribute("readonly") || t.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                                this._target = t
                            }
                        },
                        get: function() {
                            return this._target
                        }
                    }]), t
                }();
            t.exports = a
        })
    }, function(t, e, n) {
        function o(t, e, n) {
            if (!t && !e && !n) throw new Error("Missing required arguments");
            if (!c.string(e)) throw new TypeError("Second argument must be a String");
            if (!c.fn(n)) throw new TypeError("Third argument must be a Function");
            if (c.node(t)) return r(t, e, n);
            if (c.nodeList(t)) return i(t, e, n);
            if (c.string(t)) return a(t, e, n);
            throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
        }

        function r(t, e, n) {
            return t.addEventListener(e, n), {
                destroy: function() {
                    t.removeEventListener(e, n)
                }
            }
        }

        function i(t, e, n) {
            return Array.prototype.forEach.call(t, function(t) {
                t.addEventListener(e, n)
            }), {
                destroy: function() {
                    Array.prototype.forEach.call(t, function(t) {
                        t.removeEventListener(e, n)
                    })
                }
            }
        }

        function a(t, e, n) {
            return u(document.body, t, e, n)
        }
        var c = n(6),
            u = n(5);
        t.exports = o
    }, function(t, e) {
        function n() {}
        n.prototype = {
            on: function(t, e, n) {
                var o = this.e || (this.e = {});
                return (o[t] || (o[t] = [])).push({
                    fn: e,
                    ctx: n
                }), this
            },
            once: function(t, e, n) {
                function o() {
                    r.off(t, o), e.apply(n, arguments)
                }
                var r = this;
                return o._ = e, this.on(t, o, n)
            },
            emit: function(t) {
                var e = [].slice.call(arguments, 1),
                    n = ((this.e || (this.e = {}))[t] || []).slice(),
                    o = 0,
                    r = n.length;
                for (o; o < r; o++) n[o].fn.apply(n[o].ctx, e);
                return this
            },
            off: function(t, e) {
                var n = this.e || (this.e = {}),
                    o = n[t],
                    r = [];
                if (o && e)
                    for (var i = 0, a = o.length; i < a; i++) o[i].fn !== e && o[i].fn._ !== e && r.push(o[i]);
                return r.length ? n[t] = r : delete n[t], this
            }
        }, t.exports = n
    }, function(t, e, n) {
        var o, r, i;
        ! function(a, c) {
            r = [t, n(0), n(2), n(1)], o = c, void 0 !== (i = "function" == typeof o ? o.apply(e, r) : o) && (t.exports = i)
        }(0, function(t, e, n, o) {
            "use strict";

            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function a(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function c(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            function u(t, e) {
                var n = "data-clipboard-" + t;
                if (e.hasAttribute(n)) return e.getAttribute(n)
            }
            var l = r(e),
                s = r(n),
                f = r(o),
                d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                },
                h = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var o = e[n];
                            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                        }
                    }
                    return function(e, n, o) {
                        return n && t(e.prototype, n), o && t(e, o), e
                    }
                }(),
                p = function(t) {
                    function e(t, n) {
                        i(this, e);
                        var o = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                        return o.resolveOptions(n), o.listenClick(t), o
                    }
                    return c(e, t), h(e, [{
                        key: "resolveOptions",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            this.action = "function" == typeof t.action ? t.action : this.defaultAction, this.target = "function" == typeof t.target ? t.target : this.defaultTarget, this.text = "function" == typeof t.text ? t.text : this.defaultText, this.container = "object" === d(t.container) ? t.container : document.body
                        }
                    }, {
                        key: "listenClick",
                        value: function(t) {
                            var e = this;
                            this.listener = (0, f.default)(t, "click", function(t) {
                                return e.onClick(t)
                            })
                        }
                    }, {
                        key: "onClick",
                        value: function(t) {
                            var e = t.delegateTarget || t.currentTarget;
                            this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new l.default({
                                action: this.action(e),
                                target: this.target(e),
                                text: this.text(e),
                                container: this.container,
                                trigger: e,
                                emitter: this
                            })
                        }
                    }, {
                        key: "defaultAction",
                        value: function(t) {
                            return u("action", t)
                        }
                    }, {
                        key: "defaultTarget",
                        value: function(t) {
                            var e = u("target", t);
                            if (e) return document.querySelector(e)
                        }
                    }, {
                        key: "defaultText",
                        value: function(t) {
                            return u("text", t)
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
                        }
                    }], [{
                        key: "isSupported",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
                                e = "string" == typeof t ? [t] : t,
                                n = !!document.queryCommandSupported;
                            return e.forEach(function(t) {
                                n = n && !!document.queryCommandSupported(t)
                            }), n
                        }
                    }]), e
                }(s.default);
            t.exports = p
        })
    }, function(t, e) {
        function n(t, e) {
            for (; t && t.nodeType !== o;) {
                if ("function" == typeof t.matches && t.matches(e)) return t;
                t = t.parentNode
            }
        }
        var o = 9;
        if ("undefined" != typeof Element && !Element.prototype.matches) {
            var r = Element.prototype;
            r.matches = r.matchesSelector || r.mozMatchesSelector || r.msMatchesSelector || r.oMatchesSelector || r.webkitMatchesSelector
        }
        t.exports = n
    }, function(t, e, n) {
        function o(t, e, n, o, r) {
            var a = i.apply(this, arguments);
            return t.addEventListener(n, a, r), {
                destroy: function() {
                    t.removeEventListener(n, a, r)
                }
            }
        }

        function r(t, e, n, r, i) {
            return "function" == typeof t.addEventListener ? o.apply(null, arguments) : "function" == typeof n ? o.bind(null, document).apply(null, arguments) : ("string" == typeof t && (t = document.querySelectorAll(t)), Array.prototype.map.call(t, function(t) {
                return o(t, e, n, r, i)
            }))
        }

        function i(t, e, n, o) {
            return function(n) {
                n.delegateTarget = a(n.target, e), n.delegateTarget && o.call(t, n)
            }
        }
        var a = n(4);
        t.exports = r
    }, function(t, e) {
        e.node = function(t) {
            return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType
        }, e.nodeList = function(t) {
            var n = Object.prototype.toString.call(t);
            return void 0 !== t && ("[object NodeList]" === n || "[object HTMLCollection]" === n) && "length" in t && (0 === t.length || e.node(t[0]))
        }, e.string = function(t) {
            return "string" == typeof t || t instanceof String
        }, e.fn = function(t) {
            return "[object Function]" === Object.prototype.toString.call(t)
        }
    }, function(t, e) {
        function n(t) {
            var e;
            if ("SELECT" === t.nodeName) t.focus(), e = t.value;
            else if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) {
                var n = t.hasAttribute("readonly");
                n || t.setAttribute("readonly", ""), t.select(), t.setSelectionRange(0, t.value.length), n || t.removeAttribute("readonly"), e = t.value
            } else {
                t.hasAttribute("contenteditable") && t.focus();
                var o = window.getSelection(),
                    r = document.createRange();
                r.selectNodeContents(t), o.removeAllRanges(), o.addRange(r), e = o.toString()
            }
            return e
        }
        t.exports = n
    }])
});
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? a(require("jquery")) : a(jQuery)
}(function(a) {
    function b(a) {
        return h.raw ? a : encodeURIComponent(a)
    }

    function c(a) {
        return h.raw ? a : decodeURIComponent(a)
    }

    function d(a) {
        return b(h.json ? JSON.stringify(a) : String(a))
    }

    function e(a) {
        0 === a.indexOf('"') && (a = a.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return a = decodeURIComponent(a.replace(g, " ")), h.json ? JSON.parse(a) : a
        } catch (b) {}
    }

    function f(b, c) {
        var d = h.raw ? b : e(b);
        return a.isFunction(c) ? c(d) : d
    }
    var g = /\+/g,
        h = a.cookie = function(e, g, i) {
            if (void 0 !== g && !a.isFunction(g)) {
                if (i = a.extend({}, h.defaults, i), "number" == typeof i.expires) {
                    var j = i.expires,
                        k = i.expires = new Date;
                    k.setTime(+k + 864e5 * j)
                }
                return document.cookie = [b(e), "=", d(g), i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : ""].join("")
            }
            for (var l = e ? void 0 : {}, m = document.cookie ? document.cookie.split("; ") : [], n = 0, o = m.length; o > n; n++) {
                var p = m[n].split("="),
                    q = c(p.shift()),
                    r = p.join("=");
                if (e && e === q) {
                    l = f(r, g);
                    break
                }
                e || void 0 === (r = f(r)) || (l[q] = r)
            }
            return l
        };
    h.defaults = {}, a.removeCookie = function(b, c) {
        return void 0 === a.cookie(b) ? !1 : (a.cookie(b, "", a.extend({}, c, {
            expires: -1
        })), !a.cookie(b))
    }
});
$(window).on('load', function() {
    $("#ex2").slider({});
    new ClipboardJS('.copytext');
    $('[data-toggle="tooltip"]').tooltip();
    $('.backtotop').click(function(e) {
        var $target = $('html, body');
        $target.animate({
            scrollTop: 0
        }, 500);
        e.preventDefault();
    });
    $(document).scroll(function() {
        var y = $(this).scrollTop();
        if (y > 800) {
            $('.backtotop').fadeIn();
        } else {
            $('.backtotop').fadeOut();
        }
    });
    $('.mobile-menu').on('click', function() {
        $('.menu-main-menu-container').slideToggle();
        $('.mobile-menu a i').toggleClass("fa-window-close");
    });
    $(document).on('click', function(e) {
        var container = $('.menu-main-menu-container, .mobile-menu');
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            var toggleElement = $('.menu-main-menu-container');
            $(toggleElement).slideUp();
            $('.mobile-menu a i').removeClass("fa-window-close");
        }
    });
    $('input[name=startDate]').datepicker({
        format: 'dd/mm/yyyy',
        autoclose: true,
        startDate: new Date()
    });
    $('input[name=endDate]').datepicker({
        format: 'dd/mm/yyyy',
        autoclose: true,
        startDate: new Date()
    });
    $('.datepicker').on('change', function() {
        $('.daterange button').removeAttr('disabled');
    });
    $(' .search-form .fa-calendar-alt').on('click', function() {
        $(this).closest('.input-with-icon-container').find('input').datepicker('show');
    });
    $('.daterangepicker').daterangepicker({
        minDate: moment(),
        locale: {
            format: 'DD/MM/YYYY'
        }
    });
    $('.dropdown-list-container input, .dropdown-list-container li, .dropdown-list-container i').on('click', function() {
        var toggleElement = $(this).closest('.dropdown-list-container').find('ul');
        $(toggleElement).toggle();
    });
    $('.dropdown-list-container li').on('click', function() {
        $(this).parent('ul').parent('.dropdown-list-container').find('input').val($(this).text());
        $(this).closest('.dropdown-list-container').find('li').removeClass('active');
        $(this).addClass('active');
    });
    $(document).on('click', function(e) {
        var container = $('.dropdown-list-container input, .dropdown-list-container li, .dropdown-list-container i');
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            var toggleElement = $('.dropdown-list-container').find('ul');
            $(toggleElement).hide();
        }
    });
    $('#ex2').on('change', function() {
        var value = $(this).val();
        var value_splt = value.split(',');
        $('input[name=filter_minPrice]').val(value_splt[0]);
        $('input[name=filter_maxPrice]').val(value_splt[1]);
    });
    $(document).on('click', function(e) {
        var container = $('.input-group-search input');
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            var toggleElement = $('.input-group-search').find('ul');
            $(toggleElement).hide();
        } else {
            var toggleElement = $('.input-group-search').find('ul');
            $(toggleElement).show();
        }
    });
    $('body').on('keyup', '.input-group-search input, .by-cars input', function() {
        var valThis = $(this).val().toLowerCase();
        $('.input-group-search li, .by-cars li').each(function() {
            var text = $(this).text().toLowerCase();
            (text.indexOf(valThis) > -1) ? $(this).show(): $(this).hide();
        });
    });
    $('.input-group-search li').on('click', function() {
        var liname = $(this).find('span:first-child').text();
        $('.input-group-search input').val(liname);
    });
    $('.mobile-filters button, .mobile-filters .header li:last-child').on('click', function() {
        $('.mobile-filters').hide();
    });
    $('.additional-services li').on('click', function() {
        $(this).toggleClass('active');
        if ($('li.cdw').hasClass('active')) {
            $('.cdw-message').show();
        } else {
            $('.cdw-message').hide();
        }
        if ($(this).hasClass('active')) {
            var data = $(this).data('amount');
            var attach = $(this).data('attach');
            var vat_point = $('.vat-charge').val();
            var history = $('.td-' + attach + ' span').text();
            $('.td-' + attach + ' span').text(parseInt(history) + parseInt(data));
            var book_amount = $('.td-booking-rent span').text();
            var depi = $('.td-depi span').text();
            var addons = $('.td-addons span').text();
            $('.td-vat span').text(Math.round((parseInt(book_amount) + parseInt(depi) + parseInt(addons)) * vat_point));
            $('input[name=vat]').val(Math.round((parseInt(book_amount) + parseInt(depi) + parseInt(addons)) * vat_point));
            var vat = $('.td-vat span').text();
            $('.td-total-amount span').text(Math.round(parseInt(book_amount) + parseInt(depi) + parseInt(addons) + parseInt(vat)));
            $('input[name=totalAmount]').val(Math.round(parseInt(book_amount) + parseInt(depi) + parseInt(addons) + parseInt(vat)));
            $('.booking-form .hidden-fields').append('<input type="hidden" name="' + $(this).data("email") + '" value="' + $(this).data('amount') + '" />');
        } else {
            var data = $(this).data('amount');
            var attach = $(this).data('attach');
            var vat_point = $('.vat-charge').val();
            var history = $('.td-' + attach + ' span').text();
            $('.td-' + attach + ' span').text(parseInt(history) - parseInt(data));
            var book_amount = $('.td-booking-rent span').text();
            var depi = $('.td-depi span').text();
            var addons = $('.td-addons span').text();
            $('.td-vat span').text(Math.round((parseInt(book_amount) + parseInt(depi) + parseInt(addons)) * vat_point));
            $('input[name=vat]').val(Math.round((parseInt(book_amount) + parseInt(depi) + parseInt(addons)) * vat_point));
            var vat = $('.td-vat span').text();
            $('.td-total-amount span').text(Math.round(parseInt(book_amount) + parseInt(depi) + parseInt(addons) + parseInt(vat)));
            $('input[name=totalAmount]').val(Math.round(parseInt(book_amount) + parseInt(depi) + parseInt(addons) + parseInt(vat)));
            $('.booking-form .hidden-fields').find('input[name="' + $(this).data("email") + '"]').remove();
        }
    });
    $('body').on('click', '.inquiry', function() {
        var car = $(this).data('car');
        var type = $(this).data('type');
        var company = $(this).data('company');
        var date1 = $(this).data('date1');
        var date2 = $(this).data('date2');
        var duration = $(this).data('duration');
        var amount = $(this).data('amount');
        var daily = $(this).data('daily');
        var weekly = $(this).data('weekly');
        var monthly = $(this).data('monthly');
        var modal = $('#inquiry');
        $(modal).find('.modal-title').find('span').text(car);
        $(modal).find('input[name=car]').val(car);
        $(modal).find('input[name=type]').val(type);
        $(modal).find('input[name=company]').val(company);
        $(modal).find('input[name=dates]').val(date1 + ' - ' + date2);
        $(modal).find('input[name=date1]').val(date1);
        $(modal).find('input[name=date2]').val(date2);
        $(modal).find('.duration').find('span').text(duration);
        $(modal).find('input[name=duration]').val(duration);
        $(modal).find('.amount').find('span').text(amount);
        $(modal).find('input[name=amount]').val(amount);
        $('input[name=dates]').on('change', function() {
            var dates = $(this).val();
            var dates_spl = dates.split(' - ');
            var dates_spl1 = dates_spl[0].split('/');
            var dates_spl2 = dates_spl[1].split('/');
            var fromDate = new Date(dates_spl1[2] + '-' + dates_spl1[1] + '-' + dates_spl1[0]);
            var toDate = new Date(dates_spl2[2] + '-' + dates_spl2[1] + '-' + dates_spl2[0]);
            var diff = new Date(toDate - fromDate);
            var days = diff / 1000 / 60 / 60 / 24;
            if (days == 0) {
                var days = 1;
            } else {
                var days = days;
            }
            if (days < 7) {
                var rent = daily * days;
            } else if (days > 6 && days < 30) {
                var div = weekly / 7
                var rent = Math.round(div * days);
            } else if (days > 29) {
                var div = monthly / 30;
                var rent = Math.round(div * days);
            }
            $(modal).find('input[name=date1]').val(dates_spl[0]);
            $(modal).find('input[name=date2]').val(dates_spl[1]);
            $(modal).find('.duration').find('span').text(days);
            $(modal).find('input[name=duration]').val(days);
            $(modal).find('.amount').find('span').text(rent);
            $(modal).find('input[name=amount]').val(rent);
            if (days < 7) {
                $(modal).find('.dp_charge').prop('hidden', false);
                $(modal).find('.dp_charge').find('span').text('100');
            } else {
                $(modal).find('.dp_charge').prop('hidden', true);
            }
        });
    });
    $(document).on('click', function(e) {
        var container = $('.share-options button, .share-options ul');
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            var toggleElement = $('.share-options').find('ul');
            $(toggleElement).slideUp();
        }
    });
    $('.share-options button').on('click', function() {
        $(this).closest('.share-options').find('ul').slideToggle();
    });
    $('.contact-form input, .contact-form textarea, .side-booking-form-container .side-booking-form input').on('keyup', function() {
        if ($(this).val() != '') {
            $(this).closest('.input-width-border').find('.input-border').addClass('active');
            $(this).closest('.form-group').find('.form-text').hide();
        } else {
            $(this).closest('.input-width-border').find('.input-border').removeClass('active');
            $(this).closest('.form-group').find('.form-text').show();
        }
    });
    $('.btn-side-booking-form').on('click', function() {
        $('.side-booking-form').submit();
    });
    $('.dates-form button').on('click', function() {
        $('.dates-form').submit();
    });
    $('.contact-form, .side-booking-form-container .side-booking-form').on('submit', function() {
        var name = $(this).find('input[name=name]').val(),
            email = $(this).find('input[name=email]').val(),
            number = $(this).find('input[name=number]').val(),
            message = $(this).find('textarea').val();
        if (name != '' && email != '' && number != '' && message != '') {
            return true;
        } else {
            $('.contact-form input, .contact-form textarea, .side-booking-form-container .side-booking-form input').each(function() {
                if ($(this).val() == '') {
                    $(this).closest('.form-group').find('.form-text').show();
                } else {
                    $(this).closest('.form-group').find('.form-text').hide();
                }
            });
            return false;
        }
    });
    $('.leasing-period li').on('click', function() {
        var endDate = $(this).data('enddate');
        $(this).closest('form').find('input[name=endDate]').datepicker('setDate', endDate);
    });
    $('.by-price input[name=startDate]').on('change', function() {
        var days = $(this).closest('form').find('.leasing-period li.active').data('days'),
            date = $(this).datepicker('getDate');
        date.setDate(date.getDate() + days);
        $(this).closest('form').find('input[name=endDate]').datepicker('setDate', date);
    });
    $('form.by-cars input').on('change', function() {
        $('form.by-cars').submit();
    });
    $('form.by-cars li').on('click', function() {
        $('form.by-cars').submit();
    });
    $('.total-price-reload').text($('.rental-amount').find('.total-price').text());

    $('.side-booking-form-container .add-ons-options li').on('click', function() {

        $(this).toggleClass('active');
        var base_price = $('.base-price').text(),
            delivery_price = $('.delivery-price').text(),
            pickup_price = $('.pickup-price').text(),
            cdw_price = $('.cdw-price').text(),
            driver_price = $('.driver-price').text(),
            vat_charge = $('.vat-charge').val(),
            vat_price = $('.vat-price').text(),
            total_price = $('.total-price').text(),
            this_price = $(this).data('amount'),
            this_name = $(this).data('email');
        console.log(vat_price);
        if ($(this).hasClass('active')) {
            var vat_cal = Math.round(this_price * vat_charge);
            $('.vat-price').text(Math.round(parseInt(vat_price) + parseInt(vat_cal)));
            $('.total-price').text(Math.round(parseInt(total_price) + parseInt(this_price) + parseInt(vat_cal)));
            $('.total-price-reload').text(Math.round(parseInt(total_price) + parseInt(this_price) + parseInt(vat_cal)));
            $('.side-booking-form-container input[name=vat]').val(Math.round(parseInt(vat_price) + parseInt(vat_cal)));
            $('.side-booking-form-container input[name=totalAmount]').val(Math.round(parseInt(total_price) + parseInt(this_price) + parseInt(vat_cal)));
            $('.side-booking-form-container .hidden-fields').append('<input type="hidden" name="' + this_name + '" value="' + this_price + '" />');
        } else {
            var vat_cal = Math.round(this_price * vat_charge);
            $('.vat-price').text(Math.round(parseInt(vat_price) - parseInt(vat_cal)));
            $('.total-price').text(Math.round(parseInt(total_price) - parseInt(this_price) - parseInt(vat_cal)));
            $('.total-price-reload').text(Math.round(parseInt(total_price) - parseInt(this_price) - parseInt(vat_cal)));
            $('.side-booking-form-container input[name=vat]').val(Math.round(parseInt(vat_price) - parseInt(vat_cal)));
            $('.side-booking-form-container input[name=totalAmount]').val(Math.round(parseInt(total_price) - parseInt(this_price) - parseInt(vat_cal)));
            $('.side-booking-form-container .hidden-fields').find('input[name="' + this_name + '"]').remove();
        }
    });
    $('.booking-dates input').on('change', function() {
        $(this).closest('.booking-dates').find('input[name=endDate]').addClass('b0');
        $(this).closest('.booking-dates').find('button').show();
    });
    $('.faq-item a').on('click', function() {
        $(this).find('i').toggleClass('fa-plus fa-minus');
        $(this).closest('li').find('.answer').slideToggle();
    });
    $('li.delivery').click();
    $('li.pickup').click();
});

