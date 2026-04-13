'use strict';
var aa = {},
    k = function(a) {
        function b(c) {
            return a.next(c)
        }

        function d(c) {
            return a.throw(c)
        }
        return new Promise(function(c, e) {
            function f(g) {
                g.done ? c(g.value) : Promise.resolve(g.value).then(b, d).then(f, e)
            }
            f(a.next())
        })
    };

function q(a, b) {
    return a.length >= b.length && a.substring(0, b.length) === b
};
var x = Object.freeze({
    eventSourceEligible: !1,
    triggerEligible: !0
});
/*

 Copyright 2020 Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
function E(a) {
    const b = [];
    let d = 0;
    for (let c = 0; c < a.length; c++) {
        const e = a.charCodeAt(c);
        b[d++] = e
    }
    new Uint8Array(b)
};
/*

 Copyright 2022 Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
F(1, 0);
F(2, 16);
F(2, 18);
F(2, 1);
F(2, 3);
F(2, 1);
F(2, 2);
E("KEM");
E("HPKE");
E("HPKE-v1");

function F(a, b) {
    const d = new Uint8Array(a);
    for (let c = 0; c < a; c++) d[c] = b >> 8 * (a - c - 1) & 255
};
const G = /^[0-9A-Fa-f]{64}$/;

function H(a) {
    try {
        return (new TextEncoder).encode(a)
    } catch (b) {
        const d = [];
        for (let c = 0; c < a.length; c++) {
            let e = a.charCodeAt(c);
            e < 128 ? d.push(e) : e < 2048 ? d.push(192 | e >> 6, 128 | e & 63) : e < 55296 || e >= 57344 ? d.push(224 | e >> 12, 128 | e >> 6 & 63, 128 | e & 63) : (e = 65536 + ((e & 1023) << 10 | a.charCodeAt(++c) & 1023), d.push(240 | e >> 18, 128 | e >> 12 & 63, 128 | e >> 6 & 63, 128 | e & 63))
        }
        return new Uint8Array(d)
    }
}

function I(a, b) {
    if (a === "" || a === "e0") return Promise.resolve(a);
    let d;
    if ((d = b.crypto) == null ? 0 : d.subtle) {
        if (G.test(a)) return Promise.resolve(a);
        try {
            const c = H(a);
            return b.crypto.subtle.digest("SHA-256", c).then(e => J(e, b)).catch(() => "e2")
        } catch (c) {
            return Promise.resolve("e2")
        }
    } else return Promise.resolve("e1")
}

function J(a, b) {
    const d = Array.from(new Uint8Array(a)).map(c => String.fromCharCode(c)).join("");
    return b.btoa(d).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
};
/*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license.
*/
var K = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    N = function(a) {
        var b;
        if (!(b = !a)) {
            var d;
            if (a == null) d = String(a);
            else {
                var c = K.exec(Object.prototype.toString.call(Object(a)));
                d = c ? c[1].toLowerCase() : "object"
            }
            b = d != "object"
        }
        if (b || a.nodeType || a == a.window) return !1;
        try {
            if (a.constructor && !Object.prototype.hasOwnProperty.call(Object(a), "constructor") && !Object.prototype.hasOwnProperty.call(Object(a.constructor.prototype), "isPrototypeOf")) return !1
        } catch (f) {
            return !1
        }
        for (var e in a);
        return e ===
            void 0 || Object.prototype.hasOwnProperty.call(Object(a), e)
    };
var P = function(a, b) {
        if (b) {
            var d = N(b.options) ? b.options : {},
                c = (e, f) => {
                    if (Array.isArray(e))
                        for (const g of e) typeof g === "string" && f(g, d)
                };
            c(b.send_pixel, (e, f) => {
                a.h({
                    url: e,
                    method: 0,
                    templates: a.templates,
                    processResponse: !1,
                    attributionReporting: f.attribution_reporting
                }, O(a, f))
            });
            c(b.fetch, (e, f) => {
                a.h({
                    url: e,
                    method: 0,
                    templates: a.templates,
                    processResponse: f.process_response || !1,
                    attributionReporting: f.attribution_reporting
                }, O(a, f))
            })
        }
    },
    Q = function(a, b) {
        b = a.g + b;
        let d = b.indexOf("\n\n");
        for (; d !== -1;) {
            var c = P,
                e = a,
                f;
            a: {
                const [r, u] = b.substring(0, d).split("\n");
                if (q(r, "event: message") && q(u, "data: ")) {
                    var g = u.substring(6);
                    try {
                        f = JSON.parse(g);
                        break a
                    } catch (y) {}
                }
                f = void 0
            }
            c(e, f);
            b = b.substring(d + 2);
            d = b.indexOf("\n\n")
        }
        a.g = b
    },
    O = function(a, b) {
        return () => {
            const d = b.fallback_url,
                c = b.fallback_url_method;
            d && c && P(a, {
                [c]: [d],
                options: {}
            })
        }
    },
    R = class {
        constructor() {
            this.g = ""
        }
    };
var S = {
    m: 0,
    o: 1,
    0: "GET",
    1: "POST"
};
var T = function(a) {
        if (!a.url) return {
            failureType: 9,
            command: 0,
            data: "url required."
        }
    },
    W = function(a, b, d) {
        return k(function*() {
            const c = yield U(a, b, d);
            if ("failureType" in c) return c;
            yield V(a, c, b);
            return c
        }())
    },
    X = function(a, b, d) {
        return k(function*() {
            const c = T(b);
            return c ? c : yield W(a, b, d)
        }())
    },
    da = function(a, b, d, c) {
        k(function*() {
            let e;
            const f = b.commandType,
                g = b.params;
            if (f === 0)
                if (g.reportEarlySuccess) {
                    const r = T(g);
                    r ? c(r) : (W(a, g).catch(() => {}), d({
                        data: g.url
                    }))
                } else e = yield X(a, g), "failureType" in e ? c(e) : d(e);
            else c({
                failureType: 8,
                command: f,
                data: `Command with type ${f} unknown.`
            })
        }())
    },
    U = function(a, b, d) {
        return k(function*() {
            function c(h) {
                return k(function*() {
                    const [l, m] = h.split("|");
                    let [z, v] = l.split("."), n = v, p = u[z];
                    p || (p = l, n = "");
                    const B = w => k(function*() {
                        try {
                            return yield ba(m)(w)
                        } catch (A) {
                            throw new Y(A.message);
                        }
                    }());
                    if (!n) {
                        if (typeof p === "string") return yield B(p);
                        const w = p,
                            A = Object.keys(w).map(L => k(function*() {
                                const ca = yield B(w[L]);
                                return `${L}=${ca}`
                            }()));
                        return (yield Promise.all(A)).join("&")
                    }
                    return typeof p ===
                        "object" && p[n] ? yield B(p[n]): h
                }())
            }

            function e(h) {
                return k(function*() {
                    let l, m = "";
                    for (; h.match(C) && m !== h;) {
                        m = h;
                        l = h.matchAll(C);
                        const z = [...l].map(n => c(n[1])),
                            v = yield Promise.all(z);
                        v.length !== 0 && (h = h.replace(C, n => v.shift() || n))
                    }
                    return h
                }())
            }
            let {
                url: f,
                body: g
            } = b;
            const {
                attributionReporting: r,
                templates: u,
                processResponse: y,
                method: M = 0,
                referer: D
            } = b, C = RegExp("\\${([^${}]*?)}", "g"), ba = h => {
                if (h == null) return m => k(function*() {
                    return m
                }());
                const l = a.h[h];
                if (l == null) throw Error(`Unknown filter: ${h}`);
                return m =>
                    k(function*() {
                        return yield l(m, b)
                    }())
            };
            try {
                f = yield e(f), g = g ? yield e(g): void 0
            } catch (h) {
                return d == null || d(), {
                    failureType: 9,
                    command: 0,
                    data: `Failed to inject template values: ${h}`
                }
            }
            const t = {
                method: S[M],
                credentials: "include",
                body: M === 1 ? g : void 0,
                keepalive: !0,
                redirect: "follow"
            };
            if (D) try {
                t.headers = {
                    ["X-Effective-Origin"]: (new URL(D)).origin,
                    ["X-Effective-Referer"]: D
                }
            } catch (h) {}
            y || (t.mode = "no-cors");
            r && (t.attributionReporting = x);
            try {
                const h = yield a.g.fetch(f, t);
                return t.mode === "no-cors" || h.ok ? {
                    data: y ? yield h.text():
                        f
                } : (d == null || d(), {
                    failureType: 9,
                    command: 0,
                    data: "Fetch failed"
                })
            } catch (h) {
                return d == null || d(), {
                    failureType: 9,
                    command: 0,
                    data: `Fetch failed: ${h}`
                }
            }
        }())
    },
    V = function(a, b, d) {
        return k(function*() {
            if (d.processResponse) {
                var c = [];
                Q(new ea(d.templates, (e, f) => {
                    c.push(X(a, e, f))
                }), b.data);
                return Promise.all(c)
            }
        }())
    },
    fa = class {
        constructor(a) {
            this.g = a;
            this.h = {
                sha256: b => {
                    const d = this;
                    return k(function*() {
                        return yield I(b, d.g)
                    }())
                },
                encode: b => k(function*() {
                    return encodeURIComponent(b)
                }()),
                encrypt: () => k(function*() {
                    throw new Y("Encryption not supported.");
                }())
            }
        }
    };
class ea extends R {
    constructor(a, b) {
        super();
        this.templates = a;
        this.h = b
    }
}
class Y extends Error {
    constructor(a) {
        super(a)
    }
};
var ha = function(a, b, d) {
    a.g[b] == null && (a.g[b] = 0, a.h[b] = d, a.i++);
    a.g[b]++;
    return {
        targetId: a.id,
        clientCount: a.i,
        totalLifeMs: Math.round(d - a.l),
        heartbeatCount: a.g[b],
        clientLifeMs: Math.round(d - a.h[b])
    }
};
class ia {
    constructor(a) {
        this.l = a;
        this.g = {};
        this.h = {};
        this.i = 0;
        this.id = String(Math.floor(Number.MAX_SAFE_INTEGER * Math.random()))
    }
}

function Z(a) {
    return a.performance && a.performance.now() || Date.now()
}
var ja = function(a, b) {
    class d {
        constructor(c, e) {
            this.h = c;
            this.g = e;
            this.i = new ia(Z(e))
        }
        j(c, e) {
            const f = c.clientId;
            if (c.type === 0) c.stats = ha(this.i, f, Z(this.g)), e(c);
            else if (c.type === 1) try {
                this.h(c.command, g => {
                    c.result = g;
                    e(c)
                }, g => {
                    c.failure = g;
                    e(c)
                })
            } catch (g) {
                c.failure = {
                    failureType: 11,
                    data: g.toString()
                }, e(c)
            }
        }
    }
    return new d(a, b)
};
(new class {
    constructor(a) {
        this.g = a;
        const b = new fa(a);
        this.h = ja((d, c, e) => {
            da(b, d, c, e)
        }, a)
    }
    init() {
        this.g.addEventListener("install", () => {
            this.g.skipWaiting()
        });
        this.g.addEventListener("activate", a => {
            a.waitUntil(this.g.clients.claim())
        });
        this.g.addEventListener("message", a => {
            const b = a.source;
            if (b) {
                var d = a.data,
                    c = new Promise(e => {
                        this.h.j(d, f => {
                            b.postMessage(f);
                            e(void 0)
                        })
                    });
                a.waitUntil(c)
            }
        })
    }
}(self)).init();