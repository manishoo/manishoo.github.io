/*! For license information please see app-71779fa3918fbf95bcc6.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    '+ZDr': function(t, e, n) {
      'use strict';
      const r = n('TqRt');
      (e.__esModule = !0),
      (e.withPrefix = h),
      (e.withAssetPrefix = function(t) {
        return h(t, v());
      }),
      (e.navigateTo = e.replace = e.push = e.navigate = e.default = void 0);
      const o = r(n('8OQS'));
      const a = r(n('PJYZ'));
      const i = r(n('VbXa'));
      const u = r(n('pVnL'));
      const c = r(n('17x9'));
      const s = r(n('q1tI'));
      const l = n('YwZP');
      const p = n('LYrO');
      const f = n('cu4x');
      e.parsePath = f.parsePath;
      const d = function(t) {
        return null == t ? void 0 : t.startsWith('/');
      };
      function h(t, e) {
        let n; let r;
        if ((void 0 === e && (e = m()), !g(t))) {return t;}
        if (t.startsWith('./') || t.startsWith('../')) {return t;}
        const o = null !== (n = null !== (r = e) && void 0 !== r ? r : v()) && void 0 !== n ? n : '/';
        return (
          `${ 
            (null == o ? void 0 : o.endsWith('/')) ? o.slice(0, -1) : o 
          }${t.startsWith('/') ? t : `/${  t}`}`
        );
      }
      var v = function() {
        return '';
      };
      var m = function() {
        return '';
      };
      var g = function(t) {
        return t && !t.startsWith('http://') && !t.startsWith('https://') && !t.startsWith('//');
      };
      const y = function(t, e) {
        return 'number' === typeof t
          ? t
          : g(t)
            ? d(t)
              ? h(t)
              : (function(t, e) {
                return d(t) ? t : (0, p.resolve)(t, e);
              })(t, e)
            : t;
      };
      const b = {
        activeClassName: c.default.string,
        activeStyle: c.default.object,
        partiallyActive: c.default.bool,
      };
      function w(t) {
        return s.default.createElement(l.Location, null, function(e) {
          const n = e.location;
          return s.default.createElement(S, (0, u.default)({}, t, { _location: n }));
        });
      }
      var S = (function(t) {
        function e(e) {
          let n;
          (n = t.call(this, e) || this).defaultGetProps = function(t) {
            const e = t.isPartiallyCurrent;
            const r = t.isCurrent;
            return (n.props.partiallyActive ? e : r)
              ? {
                className: [n.props.className, n.props.activeClassName].filter(Boolean).join(' '),
                style: (0, u.default)({}, n.props.style, n.props.activeStyle),
              }
              : null;
          };
          let r = !1;
          return (
            'undefined' !== typeof window && window.IntersectionObserver && (r = !0),
            (n.state = { IOSupported: r }),
            (n.handleRef = n.handleRef.bind((0, a.default)(n))),
            n
          );
        }
        (0, i.default)(e, t);
        const n = e.prototype;
        return (
          (n._prefetch = function() {
            let t = window.location.pathname;
            this.props._location &&
              this.props._location.pathname &&
              (t = this.props._location.pathname);
            const e = y(this.props.to, t);
            const n = (0, f.parsePath)(e).pathname;
            t !== n && ___loader.enqueue(n);
          }),
          (n.componentDidUpdate = function(t, e) {
            this.props.to === t.to || this.state.IOSupported || this._prefetch();
          }),
          (n.componentDidMount = function() {
            this.state.IOSupported || this._prefetch();
          }),
          (n.componentWillUnmount = function() {
            if (this.io) {
              const t = this.io;
              const e = t.instance;
              const n = t.el;
              e.unobserve(n), e.disconnect();
            }
          }),
          (n.handleRef = function(t) {
            let e;
            let n;
            let r;
            const o = this;
            this.props.innerRef && this.props.innerRef.hasOwnProperty('current')
              ? (this.props.innerRef.current = t)
              : this.props.innerRef && this.props.innerRef(t),
            this.state.IOSupported &&
                t &&
                (this.io =
                  ((e = t),
                  (n = function() {
                    o._prefetch();
                  }),
                  (r = new window.IntersectionObserver(function(t) {
                    t.forEach(function(t) {
                      e === t.target &&
                        (t.isIntersecting || t.intersectionRatio > 0) &&
                        (r.unobserve(e), r.disconnect(), n());
                    });
                  })).observe(e),
                  { instance: r, el: e }));
          }),
          (n.render = function() {
            const t = this;
            const e = this.props;
            const n = e.to;
            const r = e.getProps;
            const a = void 0 === r ? this.defaultGetProps : r;
            const i = e.onClick;
            const c = e.onMouseEnter;
            const p = (e.activeClassName, e.activeStyle, e.innerRef, e.partiallyActive, e.state);
            const d = e.replace;
            const h = e._location;
            const v = (0, o.default)(e, [
              'to',
              'getProps',
              'onClick',
              'onMouseEnter',
              'activeClassName',
              'activeStyle',
              'innerRef',
              'partiallyActive',
              'state',
              'replace',
              '_location',
            ]);
            const m = y(n, h.pathname);
            return g(m)
              ? s.default.createElement(
                l.Link,
                (0, u.default)(
                  {
                    to: m,
                    state: p,
                    getProps: a,
                    innerRef: this.handleRef,
                    onMouseEnter: function(t) {
                      c && c(t), ___loader.hovering((0, f.parsePath)(m).pathname);
                    },
                    onClick: function(e) {
                      if (
                        (i && i(e),
                        !(
                          0 !== e.button ||
                            t.props.target ||
                            e.defaultPrevented ||
                            e.metaKey ||
                            e.altKey ||
                            e.ctrlKey ||
                            e.shiftKey
                        ))
                      ) {
                        e.preventDefault();
                        let n = d;
                        const r = encodeURI(m) === h.pathname;
                        'boolean' !== typeof d && r && (n = !0),
                        window.___navigate(m, { state: p, replace: n });
                      }
                      return !0;
                    },
                  },
                  v,
                ),
              )
              : s.default.createElement('a', (0, u.default)({ href: m }, v));
          }),
          e
        );
      })(s.default.Component);
      S.propTypes = (0, u.default)({}, b, {
        onClick: c.default.func,
        to: c.default.string.isRequired,
        replace: c.default.bool,
        state: c.default.object,
      });
      const P = function(t, e, n) {
        return console.warn(
          `The "${ 
            t 
          }" method is now deprecated and will be removed in Gatsby v${ 
            n 
          }. Please use "${ 
            e 
          }" instead.`,
        );
      };
      const x = s.default.forwardRef(function(t, e) {
        return s.default.createElement(w, (0, u.default)({ innerRef: e }, t));
      });
      e.default = x;
      e.navigate = function(t, e) {
        window.___navigate(y(t, window.location.pathname), e);
      };
      const R = function(t) {
        P('push', 'navigate', 3), window.___push(y(t, window.location.pathname));
      };
      e.push = R;
      e.replace = function(t) {
        P('replace', 'navigate', 3), window.___replace(y(t, window.location.pathname));
      };
      e.navigateTo = function(t) {
        return P('navigateTo', 'navigate', 3), R(t);
      };
    },
    '/GqU': function(t, e, n) {
      const r = n('RK3t');
      const o = n('HYAF');
      t.exports = function(t) {
        return r(o(t));
      };
    },
    '/b8u': function(t, e, n) {
      const r = n('STAE');
      t.exports = r && !Symbol.sham && 'symbol' === typeof Symbol.iterator;
    },
    '/hTd': function(t, e, n) {
      'use strict';
      (e.__esModule = !0), (e.SessionStorage = void 0);
      const r = (function() {
        function t() {}
        const e = t.prototype;
        return (
          (e.read = function(t, e) {
            const n = this.getStateKey(t, e);
            try {
              const r = window.sessionStorage.getItem(n);
              return r ? JSON.parse(r) : 0;
            } catch (o) {
              return window &&
                window.___GATSBY_REACT_ROUTER_SCROLL &&
                window.___GATSBY_REACT_ROUTER_SCROLL[n]
                ? window.___GATSBY_REACT_ROUTER_SCROLL[n]
                : 0;
            }
          }),
          (e.save = function(t, e, n) {
            const r = this.getStateKey(t, e);
            const o = JSON.stringify(n);
            try {
              window.sessionStorage.setItem(r, o);
            } catch (a) {
              (window && window.___GATSBY_REACT_ROUTER_SCROLL) ||
                (window.___GATSBY_REACT_ROUTER_SCROLL = {}),
              (window.___GATSBY_REACT_ROUTER_SCROLL[r] = JSON.parse(o));
            }
          }),
          (e.getStateKey = function(t, e) {
            const n = `@@scroll|${  t.pathname}`;
            return null == e ? n : `${n  }|${  e}`;
          }),
          t
        );
      })();
      e.SessionStorage = r;
    },
    '0BK2': function(t, e) {
      t.exports = {};
    },
    '0Dky': function(t, e) {
      t.exports = function(t) {
        try {
          return !!t();
        } catch (e) {
          return !0;
        }
      };
    },
    '0GbY': function(t, e, n) {
      const r = n('2oRo');
      const o = function(t) {
        return 'function' === typeof t ? t : void 0;
      };
      t.exports = function(t, e) {
        return arguments.length < 2 ? o(r[t]) : r[t] && r[t][e];
      };
    },
    '0eef': function(t, e, n) {
      'use strict';
      const r = {}.propertyIsEnumerable;
      const o = Object.getOwnPropertyDescriptor;
      const a = o && !r.call({ 1: 2 }, 1);
      e.f = a
        ? function(t) {
          const e = o(this, t);
          return !!e && e.enumerable;
        }
        : r;
    },
    '1Y/n': function(t, e, n) {
      const r = n('HAuM');
      const o = n('ewvW');
      const a = n('RK3t');
      const i = n('UMSQ');
      const u = function(t) {
        return function(e, n, u, c) {
          r(n);
          const s = o(e);
          const l = a(s);
          const p = i(s.length);
          let f = t ? p - 1 : 0;
          const d = t ? -1 : 1;
          if (u < 2) {
            for (;;) {
              if (f in l) {
                (c = l[f]), (f += d);
                break;
              }
              if (((f += d), t ? f < 0 : p <= f)) {throw TypeError('Reduce of empty array with no initial value');}
            }
          }
          for (; t ? f >= 0 : p > f; f += d) {f in l && (c = n(c, l[f], f, s));}
          return c;
        };
      };
      t.exports = { left: u(!1), right: u(!0) };
    },
    '284h': function(t, e, n) {
      const r = n('cDf5').default;
      function o(t) {
        if ('function' !== typeof WeakMap) {return null;}
        const e = new WeakMap();
        const n = new WeakMap();
        return (o = function(t) {
          return t ? n : e;
        })(t);
      }
      (t.exports = function(t, e) {
        if (!e && t && t.__esModule) {return t;}
        if (null === t || ('object' !== r(t) && 'function' !== typeof t)) {return { default: t };}
        const n = o(e);
        if (n && n.has(t)) {return n.get(t);}
        const a = {};
        const i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (const u in t) {
          if ('default' !== u && Object.prototype.hasOwnProperty.call(t, u)) {
            const c = i ? Object.getOwnPropertyDescriptor(t, u) : null;
            c && (c.get || c.set) ? Object.defineProperty(a, u, c) : (a[u] = t[u]);
          }
        }
        return (a.default = t), n && n.set(t, a), a;
      }),
      (t.exports.default = t.exports),
      (t.exports.__esModule = !0);
    },
    '2bX/': function(t, e, n) {
      const r = n('0GbY');
      const o = n('/b8u');
      t.exports = o
        ? function(t) {
          return 'symbol' === typeof t;
        }
        : function(t) {
          const e = r('Symbol');
          return 'function' === typeof e && Object(t) instanceof e;
        };
    },
    '2oRo': function(t, e, n) {
      (function(e) {
        const n = function(t) {
          return t && t.Math == Math && t;
        };
        t.exports =
          n('object' === typeof globalThis && globalThis) ||
          n('object' === typeof window && window) ||
          n('object' === typeof self && self) ||
          n('object' === typeof e && e) ||
          (function() {
            return this;
          })() ||
          Function('return this')();
      }.call(this, n('yLpj')));
    },
    '30RF': function(t, e, n) {
      'use strict';
      n.d(e, 'd', function() {
        return l;
      }),
      n.d(e, 'a', function() {
        return p;
      }),
      n.d(e, 'c', function() {
        return f;
      }),
      n.d(e, 'b', function() {
        return d;
      });
      const r = n('LYrO');
      const o = n('cSJ8');
      const a = function(t) {
        return void 0 === t
          ? t
          : '/' === t
            ? '/'
            : '/' === t.charAt(t.length - 1)
              ? t.slice(0, -1)
              : t;
      };
      const i = new Map();
      let u = [];
      const c = function(t) {
        const e = decodeURIComponent(t);
        return Object(o.a)(e, '').split('#')[0].split('?')[0];
      };
      function s(t) {
        return t.startsWith('/') || t.startsWith('https://') || t.startsWith('http://')
          ? t
          : new URL(t, window.location.href + (window.location.href.endsWith('/') ? '' : '/'))
            .pathname;
      }
      var l = function(t) {
        u = t;
      };
      var p = function(t) {
        const e = h(t);
        const n = u.map(function(t) {
          const e = t.path;
          return { path: t.matchPath, originalPath: e };
        });
        const o = Object(r.pick)(n, e);
        return o ? a(o.route.originalPath) : null;
      };
      var f = function(t) {
        const e = h(t);
        const n = u.map(function(t) {
          const e = t.path;
          return { path: t.matchPath, originalPath: e };
        });
        const o = Object(r.pick)(n, e);
        return o ? o.params : {};
      };
      var d = function(t) {
        const e = c(s(t));
        if (i.has(e)) {return i.get(e);}
        let n = p(e);
        return n || (n = h(t)), i.set(e, n), n;
      };
      var h = function(t) {
        let e = c(s(t));
        return '/index.html' === e && (e = '/'), (e = a(e));
      };
    },
    '3uz+': function(t, e, n) {
      'use strict';
      (e.__esModule = !0),
      (e.useScrollRestoration = function(t) {
        const e = (0, a.useLocation)();
        const n = (0, o.useContext)(r.ScrollContext);
        const i = (0, o.useRef)();
        return (
          (0, o.useLayoutEffect)(function() {
            if (i.current) {
              const r = n.read(e, t);
              i.current.scrollTo(0, r || 0);
            }
          }, []),
          {
            ref: i,
            onScroll: function() {
              i.current && n.save(e, t, i.current.scrollTop);
            },
          }
        );
      });
      var r = n('Enzk');
      var o = n('q1tI');
      var a = n('YwZP');
    },
    '5yr3': function(t, e, n) {
      'use strict';
      const r = (function(t) {
        return (
          (t = t || Object.create(null)),
          {
            on: function(e, n) {
              (t[e] || (t[e] = [])).push(n);
            },
            off: function(e, n) {
              t[e] && t[e].splice(t[e].indexOf(n) >>> 0, 1);
            },
            emit: function(e, n) {
              (t[e] || []).slice().map(function(t) {
                t(n);
              }),
              (t['*'] || []).slice().map(function(t) {
                t(e, n);
              });
            },
          }
        );
      })();
      e.a = r;
    },
    '6JNq': function(t, e, n) {
      const r = n('UTVS');
      const o = n('Vu81');
      const a = n('Bs8V');
      const i = n('m/L8');
      t.exports = function(t, e) {
        for (let n = o(e), u = i.f, c = a.f, s = 0; s < n.length; s++) {
          const l = n[s];
          r(t, l) || u(t, l, c(e, l));
        }
      };
    },
    '7hJ6': function(t, e, n) {
      'use strict';
      (e.__esModule = !0), (e.useScrollRestoration = e.ScrollContainer = e.ScrollContext = void 0);
      const r = n('Enzk');
      e.ScrollContext = r.ScrollHandler;
      const o = n('hd9s');
      e.ScrollContainer = o.ScrollContainer;
      const a = n('3uz+');
      e.useScrollRestoration = a.useScrollRestoration;
    },
    '8OQS': function(t, e) {
      (t.exports = function(t, e) {
        if (null == t) {return {};}
        let n;
        let r;
        const o = {};
        const a = Object.keys(t);
        for (r = 0; r < a.length; r++) {(n = a[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);}
        return o;
      }),
      (t.exports.default = t.exports),
      (t.exports.__esModule = !0);
    },
    '93I0': function(t, e, n) {
      const r = n('VpIT');
      const o = n('kOOl');
      const a = r('keys');
      t.exports = function(t) {
        return a[t] || (a[t] = o(t));
      };
    },
    '94VI': function(t, e) {
      e.polyfill = function(t) {
        return t;
      };
    },
    '9Xx/': function(t, e, n) {
      'use strict';
      n.d(e, 'c', function() {
        return c;
      }),
      n.d(e, 'd', function() {
        return s;
      }),
      n.d(e, 'a', function() {
        return a;
      }),
      n.d(e, 'b', function() {
        return i;
      });
      const r =
          Object.assign ||
          function(t) {
            for (let e = 1; e < arguments.length; e++) {
              const n = arguments[e];
              for (const r in n) {Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);}
            }
            return t;
          };
      const o = function(t) {
        const e = t.location;
        const n = e.search;
        const r = e.hash;
        const o = e.href;
        const a = e.origin;
        const i = e.protocol;
        const c = e.host;
        const s = e.hostname;
        const l = e.port;
        let p = t.location.pathname;
        !p && o && u && (p = new URL(o).pathname);
        return {
          pathname: encodeURI(decodeURI(p)),
          search: n,
          hash: r,
          href: o,
          origin: a,
          protocol: i,
          host: c,
          hostname: s,
          port: l,
          state: t.history.state,
          key: (t.history.state && t.history.state.key) || 'initial',
        };
      };
      var a = function(t, e) {
        let n = [];
        let a = o(t);
        let i = !1;
        let u = function() {};
        return {
          get location() {
            return a;
          },
          get transitioning() {
            return i;
          },
          _onTransitionComplete: function() {
            (i = !1), u();
          },
          listen: function(e) {
            n.push(e);
            const r = function() {
              (a = o(t)), e({ location: a, action: 'POP' });
            };
            return (
              t.addEventListener('popstate', r),
              function() {
                t.removeEventListener('popstate', r),
                (n = n.filter(function(t) {
                  return t !== e;
                }));
              }
            );
          },
          navigate: function(e) {
            const c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            let s = c.state;
            const l = c.replace;
            const p = void 0 !== l && l;
            if ('number' === typeof e) {t.history.go(e);} else {
              s = r({}, s, { key: `${Date.now()  }` });
              try {
                i || p ? t.history.replaceState(s, null, e) : t.history.pushState(s, null, e);
              } catch (d) {
                t.location[p ? 'replace' : 'assign'](e);
              }
            }
            (a = o(t)), (i = !0);
            const f = new Promise(function(t) {
              return (u = t);
            });
            return (
              n.forEach(function(t) {
                return t({ location: a, action: 'PUSH' });
              }),
              f
            );
          },
        };
      };
      var i = function() {
        const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '/';
        const e = t.indexOf('?');
        const n = { pathname: e > -1 ? t.substr(0, e) : t, search: e > -1 ? t.substr(e) : '' };
        let r = 0;
        const o = [n];
        const a = [null];
        return {
          get location() {
            return o[r];
          },
          addEventListener: function(t, e) {},
          removeEventListener: function(t, e) {},
          history: {
            get entries() {
              return o;
            },
            get index() {
              return r;
            },
            get state() {
              return a[r];
            },
            pushState: function(t, e, n) {
              const i = n.split('?');
              const u = i[0];
              const c = i[1];
              const s = void 0 === c ? '' : c;
              r++, o.push({ pathname: u, search: s.length ? `?${  s}` : s }), a.push(t);
            },
            replaceState: function(t, e, n) {
              const i = n.split('?');
              const u = i[0];
              const c = i[1];
              const s = void 0 === c ? '' : c;
              (o[r] = { pathname: u, search: s }), (a[r] = t);
            },
            go: function(t) {
              const e = r + t;
              e < 0 || e > a.length - 1 || (r = e);
            },
          },
        };
      };
      var u = !('undefined' === typeof window || !window.document || !window.document.createElement);
      var c = a(u ? window : i());
      var s = c.navigate;
    },
    '9hXx': function(t, e, n) {
      'use strict';
      (e.__esModule = !0), (e.default = void 0);
      e.default = function(t, e) {
        if (!Array.isArray(e)) {return 'manifest.webmanifest';}
        const n = e.find(function(e) {
          return t.startsWith(e.start_url);
        });
        return n ? `manifest_${  n.lang  }.webmanifest` : 'manifest.webmanifest';
      };
    },
    Bs8V: function(t, e, n) {
      const r = n('g6v/');
      const o = n('0eef');
      const a = n('XGwC');
      const i = n('/GqU');
      const u = n('oEtG');
      const c = n('UTVS');
      const s = n('DPsx');
      const l = Object.getOwnPropertyDescriptor;
      e.f = r
        ? l
        : function(t, e) {
          if (((t = i(t)), (e = u(e)), s)) {
            try {
              return l(t, e);
            } catch (n) {}
          }
          if (c(t, e)) {return a(!o.f.call(t, e), t[e]);}
        };
    },
    DPsx: function(t, e, n) {
      const r = n('g6v/');
      const o = n('0Dky');
      const a = n('zBJ4');
      t.exports =
        !r &&
        !o(function() {
          return (
            7 !=
            Object.defineProperty(a('div'), 'a', {
              get: function() {
                return 7;
              },
            }).a
          );
        });
    },
    E9XD: function(t, e, n) {
      'use strict';
      const r = n('I+eb');
      const o = n('1Y/n').left;
      const a = n('pkCn');
      const i = n('LQDL');
      const u = n('YF1G');
      r(
        { target: 'Array', proto: !0, forced: !a('reduce') || (!u && i > 79 && i < 83) },
        {
          reduce: function(t) {
            return o(this, t, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
          },
        },
      );
    },
    Enzk: function(t, e, n) {
      'use strict';
      const r = n('284h');
      const o = n('TqRt');
      (e.__esModule = !0), (e.ScrollHandler = e.ScrollContext = void 0);
      const a = o(n('PJYZ'));
      const i = o(n('VbXa'));
      const u = r(n('q1tI'));
      const c = o(n('17x9'));
      const s = n('/hTd');
      const l = u.createContext(new s.SessionStorage());
      (e.ScrollContext = l), (l.displayName = 'GatsbyScrollContext');
      const p = (function(t) {
        function e() {
          for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++) {r[o] = arguments[o];}
          return (
            ((e = t.call.apply(t, [this].concat(r)) || this)._stateStorage =
              new s.SessionStorage()),
            (e.scrollListener = function() {
              const t = e.props.location.key;
              t && e._stateStorage.save(e.props.location, t, window.scrollY);
            }),
            (e.windowScroll = function(t, n) {
              e.shouldUpdateScroll(n, e.props) && window.scrollTo(0, t);
            }),
            (e.scrollToHash = function(t, n) {
              const r = document.getElementById(t.substring(1));
              r && e.shouldUpdateScroll(n, e.props) && r.scrollIntoView();
            }),
            (e.shouldUpdateScroll = function(t, n) {
              const r = e.props.shouldUpdateScroll;
              return !r || r.call((0, a.default)(e), t, n);
            }),
            e
          );
        }
        (0, i.default)(e, t);
        const n = e.prototype;
        return (
          (n.componentDidMount = function() {
            let t;
            window.addEventListener('scroll', this.scrollListener);
            const e = this.props.location;
            const n = e.key;
            const r = e.hash;
            n && (t = this._stateStorage.read(this.props.location, n)),
            t ? this.windowScroll(t, void 0) : r && this.scrollToHash(decodeURI(r), void 0);
          }),
          (n.componentWillUnmount = function() {
            window.removeEventListener('scroll', this.scrollListener);
          }),
          (n.componentDidUpdate = function(t) {
            let e;
            const n = this.props.location;
            const r = n.hash;
            const o = n.key;
            o && (e = this._stateStorage.read(this.props.location, o)),
            r ? this.scrollToHash(decodeURI(r), t) : this.windowScroll(e, t);
          }),
          (n.render = function() {
            return u.createElement(l.Provider, { value: this._stateStorage }, this.props.children);
          }),
          e
        );
      })(u.Component);
      (e.ScrollHandler = p),
      (p.propTypes = {
        shouldUpdateScroll: c.default.func,
        children: c.default.element.isRequired,
        location: c.default.object.isRequired,
      });
    },
    GddB: function(t, e) {},
    HAuM: function(t, e) {
      t.exports = function(t) {
        if ('function' !== typeof t) {throw TypeError(`${String(t)  } is not a function`);}
        return t;
      };
    },
    HYAF: function(t, e) {
      t.exports = function(t) {
        if (null == t) {throw TypeError(`Can't call method on ${  t}`);}
        return t;
      };
    },
    'I+eb': function(t, e, n) {
      const r = n('2oRo');
      const o = n('Bs8V').f;
      const a = n('kRJp');
      const i = n('busE');
      const u = n('zk60');
      const c = n('6JNq');
      const s = n('lMq5');
      t.exports = function(t, e) {
        let n;
        let l;
        let p;
        let f;
        let d;
        const h = t.target;
        const v = t.global;
        const m = t.stat;
        if ((n = v ? r : m ? r[h] || u(h, {}) : (r[h] || {}).prototype)) {
          for (l in e) {
            if (
              ((f = e[l]),
              (p = t.noTargetGet ? (d = o(n, l)) && d.value : n[l]),
              !s(v ? l : h + (m ? '.' : '#') + l, t.forced) && void 0 !== p)
            ) {
              if (typeof f === typeof p) {continue;}
              c(f, p);
            }
            (t.sham || (p && p.sham)) && a(f, 'sham', !0), i(n, l, f, t);
          }
        }
      };
    },
    I8vh: function(t, e, n) {
      const r = n('ppGB');
      const o = Math.max;
      const a = Math.min;
      t.exports = function(t, e) {
        const n = r(t);
        return n < 0 ? o(n + e, 0) : a(n, e);
      };
    },
    IOVJ: function(t, e, n) {
      'use strict';
      const r = n('dI71');
      const o = n('q1tI');
      const a = n.n(o);
      const i = n('emEt');
      const u = n('xtsi');
      const c = n('30RF');
      const s = (function(t) {
        function e() {
          return t.apply(this, arguments) || this;
        }
        return (
          Object(r.a)(e, t),
          (e.prototype.render = function() {
            const t = Object.assign({}, this.props, {
              params: Object.assign(
                {},
                Object(c.c)(this.props.location.pathname),
                this.props.pageResources.json.pageContext.__params,
              ),
              pathContext: this.props.pageContext,
            });
            const e =
                  Object(u.apiRunner)('replaceComponentRenderer', {
                    props: this.props,
                    loader: i.publicLoader,
                  })[0] ||
                  Object(o.createElement)(
                    this.props.pageResources.component,
                    Object.assign({}, t, {
                      key: this.props.path || this.props.pageResources.page.path,
                    }),
                  );
            return Object(u.apiRunner)(
              'wrapPageElement',
              { element: e, props: t },
              e,
              function(e) {
                return { element: e.result, props: t };
              },
            ).pop();
          }),
          e
        );
      })(a.a.Component);
      e.a = s;
    },
    JBy8: function(t, e, n) {
      const r = n('yoRg');
      const o = n('eDl+').concat('length', 'prototype');
      e.f =
        Object.getOwnPropertyNames ||
        function(t) {
          return r(t, o);
        };
    },
    JeVI: function(t) {
      t.exports = JSON.parse('[]');
    },
    KQm4: function(t, e, n) {
      'use strict';
      function r(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) {r[n] = t[n];}
        return r;
      }
      function o(t) {
        return (
          (function(t) {
            if (Array.isArray(t)) {return r(t);}
          })(t) ||
          (function(t) {
            if (
              ('undefined' !== typeof Symbol && null != t[Symbol.iterator]) ||
              null != t['@@iterator']
            ) {return Array.from(t);}
          })(t) ||
          (function(t, e) {
            if (t) {
              if ('string' === typeof t) {return r(t, e);}
              let n = Object.prototype.toString.call(t).slice(8, -1);
              return (
                'Object' === n && t.constructor && (n = t.constructor.name),
                'Map' === n || 'Set' === n
                  ? Array.from(t)
                  : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? r(t, e)
                    : void 0
              );
            }
          })(t) ||
          (function() {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      n.d(e, 'a', function() {
        return o;
      });
    },
    LQDL: function(t, e, n) {
      let r;
      let o;
      const a = n('2oRo');
      const i = n('NC/Y');
      const u = a.process;
      const c = a.Deno;
      const s = (u && u.versions) || (c && c.version);
      const l = s && s.v8;
      l
        ? (o = (r = l.split('.'))[0] < 4 ? 1 : r[0] + r[1])
        : i &&
          (!(r = i.match(/Edge\/(\d+)/)) || r[1] >= 74) &&
          (r = i.match(/Chrome\/(\d+)/)) &&
          (o = r[1]),
      (t.exports = o && +o);
    },
    LYrO: function(t, e, n) {
      'use strict';
      n.r(e),
      n.d(e, 'startsWith', function() {
        return a;
      }),
      n.d(e, 'pick', function() {
        return i;
      }),
      n.d(e, 'match', function() {
        return u;
      }),
      n.d(e, 'resolve', function() {
        return c;
      }),
      n.d(e, 'insertParams', function() {
        return s;
      }),
      n.d(e, 'validateRedirect', function() {
        return l;
      }),
      n.d(e, 'shallowCompare', function() {
        return b;
      });
      const r = n('QLaP');
      const o = n.n(r);
      var a = function(t, e) {
        return t.substr(0, e.length) === e;
      };
      var i = function(t, e) {
        for (
          var n = void 0,
            r = void 0,
            a = e.split('?')[0],
            i = m(a),
            u = '' === i[0],
            c = v(t),
            s = 0,
            l = c.length;
          s < l;
          s++
        ) {
          let f = !1;
          const h = c[s].route;
          if (h.default) {r = { route: h, params: {}, uri: e };} else {
            for (var g = m(h.path), b = {}, w = Math.max(i.length, g.length), S = 0; S < w; S++) {
              const P = g[S];
              const x = i[S];
              if (d(P)) {
                b[P.slice(1) || '*'] = i.slice(S).map(decodeURIComponent).join('/');
                break;
              }
              if (void 0 === x) {
                f = !0;
                break;
              }
              const R = p.exec(P);
              if (R && !u) {
                -1 === y.indexOf(R[1]) || o()(!1);
                const O = decodeURIComponent(x);
                b[R[1]] = O;
              } else if (P !== x) {
                f = !0;
                break;
              }
            }
            if (!f) {
              n = { route: h, params: b, uri: `/${  i.slice(0, S).join('/')}` };
              break;
            }
          }
        }
        return n || r || null;
      };
      var u = function(t, e) {
        return i([{ path: t }], e);
      };
      var c = function(t, e) {
        if (a(t, '/')) {return t;}
        const n = t.split('?');
        const r = n[0];
        const o = n[1];
        const i = e.split('?')[0];
        const u = m(r);
        const c = m(i);
        if ('' === u[0]) {return g(i, o);}
        if (!a(u[0], '.')) {
          const s = c.concat(u).join('/');
          return g(('/' === i ? '' : '/') + s, o);
        }
        for (var l = c.concat(u), p = [], f = 0, d = l.length; f < d; f++) {
          const h = l[f];
          '..' === h ? p.pop() : '.' !== h && p.push(h);
        }
        return g(`/${  p.join('/')}`, o);
      };
      var s = function(t, e) {
        const n = t.split('?');
        const r = n[0];
        const o = n[1];
        const a = void 0 === o ? '' : o;
        let i =
              `/${ 
                m(r)
                  .map(function(t) {
                    const n = p.exec(t);
                    return n ? e[n[1]] : t;
                  })
                  .join('/')}`;
        let u = e.location;
        const c = (u = void 0 === u ? {} : u).search;
        const s = (void 0 === c ? '' : c).split('?')[1] || '';
        return (i = g(i, a, s));
      };
      var l = function(t, e) {
        const n = function(t) {
          return f(t);
        };
        return m(t).filter(n).sort().join('/') === m(e).filter(n).sort().join('/');
      };
      var p = /^:(.+)/;
      var f = function(t) {
        return p.test(t);
      };
      var d = function(t) {
        return t && '*' === t[0];
      };
      const h = function(t, e) {
        return {
          route: t,
          score: t.default
            ? 0
            : m(t.path).reduce(function(t, e) {
              return (
                (t += 4),
                !(function(t) {
                  return '' === t;
                })(e)
                  ? f(e)
                    ? (t += 2)
                    : d(e)
                      ? (t -= 5)
                      : (t += 3)
                  : (t += 1),
                t
              );
            }, 0),
          index: e,
        };
      };
      var v = function(t) {
        return t.map(h).sort(function(t, e) {
          return t.score < e.score ? 1 : t.score > e.score ? -1 : t.index - e.index;
        });
      };
      var m = function(t) {
        return t.replace(/(^\/+|\/+$)/g, '').split('/');
      };
      var g = function(t) {
        for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) {n[r - 1] = arguments[r];}
        return (
          t +
            ((n = n.filter(function(t) {
              return t && t.length > 0;
            })) && n.length > 0
              ? `?${  n.join('&')}`
              : '')
        );
      };
      var y = ['uri', 'path'];
      var b = function(t, e) {
        const n = Object.keys(t);
        return (
          n.length === Object.keys(e).length &&
            n.every(function(n) {
              return e.hasOwnProperty(n) && t[n] === e[n];
            })
        );
      };
    },
    LeKB: function(t, e, n) {
      t.exports = [
        {
          plugin: n('npZl'),
          options: {
            plugins: [],
            name: 'Mani Shooshtari',
            short_name: 'Mani',
            start_url: '/',
            background_color: '#020c1b',
            theme_color: '#0a192f',
            display: 'minimal-ui',
            icon: 'src/images/logo.png',
            legacy: !0,
            theme_color_in_head: !0,
            cache_busting_mode: 'query',
            crossOrigin: 'anonymous',
            include_favicon: !0,
            cacheDigest: 'ee786f2e505f7d02e2af7e7b1d4f3e6a',
          },
        },
        { plugin: n('e/UW'), options: { plugins: [] } },
        {
          plugin: n('q9nr'),
          options: {
            plugins: [],
            maxWidth: 700,
            linkImagesToOriginal: !0,
            quality: 90,
            tracedSVG: {
              color: 'rgb(255, 204, 0)',
              turnPolicy: 'majority',
              turdSize: 100,
              optCurve: !0,
              optTolerance: 0.4,
              threshold: -1,
              blackOnWhite: !0,
              background: 'transparent',
            },
            showCaptions: !1,
            markdownCaptions: !1,
            sizeByPixelDensity: !1,
            backgroundColor: 'white',
            withWebp: !1,
            loading: 'lazy',
            disableBgImageOnAlpha: !1,
            disableBgImage: !1,
          },
        },
        {
          plugin: n('pWkz'),
          options: {
            plugins: [],
            trackingId: 'UA-45666519-2',
            head: !1,
            anonymize: !1,
            respectDNT: !1,
            exclude: [],
            pageTransitionDelay: 0,
          },
        },
        { plugin: n('GddB'), options: { plugins: [] } },
      ];
    },
    MMVs: function(t, e, n) {
      t.exports = (function() {
        let t = !1;
        -1 !== navigator.appVersion.indexOf('MSIE 10') && (t = !0);
        let e;
        const n = [];
        const r = 'object' === typeof document && document;
        const o = t ? r.documentElement.doScroll('left') : r.documentElement.doScroll;
        let a = r && (o ? /^loaded|^c/ : /^loaded|^i|^c/).test(r.readyState);
        return (
          !a &&
            r &&
            r.addEventListener(
              'DOMContentLoaded',
              (e = function() {
                for (r.removeEventListener('DOMContentLoaded', e), a = 1; (e = n.shift()); ) {e();}
              }),
            ),
          function(t) {
            a ? setTimeout(t, 0) : n.push(t);
          }
        );
      })();
    },
    'NC/Y': function(t, e, n) {
      const r = n('0GbY');
      t.exports = r('navigator', 'userAgent') || '';
    },
    NSX3: function(t, e, n) {
      'use strict';
      n.r(e);
      const r = n('xtsi');
      'https:' !== window.location.protocol && 'localhost' !== window.location.hostname
        ? console.error(
          'Service workers can only be used over HTTPS, or on localhost for development',
        )
        : 'serviceWorker' in navigator &&
          navigator.serviceWorker
            .register('/sw.js')
            .then(function(t) {
              t.addEventListener('updatefound', function() {
                Object(r.apiRunner)('onServiceWorkerUpdateFound', { serviceWorker: t });
                const e = t.installing;
                console.log('installingWorker', e),
                e.addEventListener('statechange', function() {
                  switch (e.state) {
                    case 'installed':
                      navigator.serviceWorker.controller
                        ? ((window.___swUpdated = !0),
                        Object(r.apiRunner)('onServiceWorkerUpdateReady', { serviceWorker: t }),
                        window.___failedResources &&
                              (console.log('resources failed, SW updated - reloading'),
                              window.location.reload()))
                        : (console.log('Content is now available offline!'),
                        Object(r.apiRunner)('onServiceWorkerInstalled', { serviceWorker: t }));
                      break;
                    case 'redundant':
                      console.error('The installing service worker became redundant.'),
                      Object(r.apiRunner)('onServiceWorkerRedundant', { serviceWorker: t });
                      break;
                    case 'activated':
                      Object(r.apiRunner)('onServiceWorkerActive', { serviceWorker: t });
                  }
                });
              });
            })
            .catch(function(t) {
              console.error('Error during service worker registration:', t);
            });
    },
    NsGk: function(t, e, n) {
      e.components = {
        'component---cache-caches-gatsby-plugin-offline-app-shell-js': function() {
          return n.e(3).then(n.t.bind(null, 'zXQ9', 7));
        },
        'component---src-pages-404-js': function() {
          return Promise.all([n.e(0), n.e(4)]).then(n.bind(null, 'w2l6'));
        },
        'component---src-pages-archive-js': function() {
          return Promise.all([n.e(0), n.e(5)]).then(n.bind(null, 'nRki'));
        },
        'component---src-pages-index-js': function() {
          return Promise.all([n.e(0), n.e(6)]).then(n.bind(null, 'RXBc'));
        },
        'component---src-pages-pensieve-index-js': function() {
          return Promise.all([n.e(0), n.e(7)]).then(n.bind(null, 'SqBY'));
        },
        'component---src-pages-pensieve-tags-js': function() {
          return Promise.all([n.e(0), n.e(8)]).then(n.bind(null, '+W3S'));
        },
        'component---src-templates-post-js': function() {
          return Promise.all([n.e(0), n.e(9)]).then(n.bind(null, '6qSS'));
        },
        'component---src-templates-tag-js': function() {
          return Promise.all([n.e(0), n.e(10)]).then(n.bind(null, 'ccoC'));
        },
      };
    },
    PJYZ: function(t, e) {
      (t.exports = function(t) {
        if (void 0 === t) {throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');}
        return t;
      }),
      (t.exports.default = t.exports),
      (t.exports.__esModule = !0);
    },
    QLaP: function(t, e, n) {
      'use strict';
      t.exports = function(t, e, n, r, o, a, i, u) {
        if (!t) {
          let c;
          if (void 0 === e) {
            c = new Error(
              'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.',
            );
          } else {
            const s = [n, r, o, a, i, u];
            let l = 0;
            (c = new Error(
              e.replace(/%s/g, function() {
                return s[l++];
              }),
            )).name = 'Invariant Violation';
          }
          throw ((c.framesToPop = 1), c);
        }
      };
    },
    RK3t: function(t, e, n) {
      const r = n('0Dky');
      const o = n('xrYK');
      const a = ''.split;
      t.exports = r(function() {
        return !Object('z').propertyIsEnumerable(0);
      })
        ? function(t) {
          return 'String' == o(t) ? a.call(t, '') : Object(t);
        }
        : Object;
    },
    SFrS: function(t, e, n) {
      const r = n('hh1v');
      t.exports = function(t, e) {
        let n; let o;
        if ('string' === e && 'function' === typeof (n = t.toString) && !r((o = n.call(t)))) {return o;}
        if ('function' === typeof (n = t.valueOf) && !r((o = n.call(t)))) {return o;}
        if ('string' !== e && 'function' === typeof (n = t.toString) && !r((o = n.call(t)))) {return o;}
        throw TypeError('Can\'t convert object to primitive value');
      };
    },
    STAE: function(t, e, n) {
      const r = n('LQDL');
      const o = n('0Dky');
      t.exports =
        !!Object.getOwnPropertySymbols &&
        !o(function() {
          const t = Symbol();
          return !String(t) || !(Object(t) instanceof Symbol) || (!Symbol.sham && r && r < 41);
        });
    },
    SksO: function(t, e) {
      function n(e, r) {
        return (
          (t.exports = n =
            Object.setPrototypeOf ||
            function(t, e) {
              return (t.__proto__ = e), t;
            }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0),
          n(e, r)
        );
      }
      (t.exports = n), (t.exports.default = t.exports), (t.exports.__esModule = !0);
    },
    TWQb: function(t, e, n) {
      const r = n('/GqU');
      const o = n('UMSQ');
      const a = n('I8vh');
      const i = function(t) {
        return function(e, n, i) {
          let u;
          const c = r(e);
          const s = o(c.length);
          let l = a(i, s);
          if (t && n != n) {
            for (; s > l; ) {if ((u = c[l++]) != u) {return !0;}}
          } else {for (; s > l; l++) {if ((t || l in c) && c[l] === n) {return t || l || 0;}}}
          return !t && -1;
        };
      };
      t.exports = { includes: i(!0), indexOf: i(!1) };
    },
    TqRt: function(t, e) {
      (t.exports = function(t) {
        return t && t.__esModule ? t : { default: t };
      }),
      (t.exports.default = t.exports),
      (t.exports.__esModule = !0);
    },
    UMSQ: function(t, e, n) {
      const r = n('ppGB');
      const o = Math.min;
      t.exports = function(t) {
        return t > 0 ? o(r(t), 9007199254740991) : 0;
      };
    },
    UTVS: function(t, e, n) {
      const r = n('ewvW');
      const o = {}.hasOwnProperty;
      t.exports =
        Object.hasOwn ||
        function(t, e) {
          return o.call(r(t), e);
        };
    },
    UxWs: function(t, e, n) {
      'use strict';
      n.r(e);
      const r = n('dI71');
      const o = n('xtsi');
      const a = n('q1tI');
      const i = n.n(a);
      const u = n('i8i4');
      const c = n.n(u);
      const s = n('YwZP');
      const l = n('7hJ6');
      const p = n('MMVs');
      const f = n.n(p);
      const d = n('Wbzz');
      const h = n('emEt');
      const v = n('YLt+');
      const m = n('5yr3');
      const g = {
        id: 'gatsby-announcer',
        style: {
          position: 'absolute',
          top: 0,
          width: 1,
          height: 1,
          padding: 0,
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          border: 0,
        },
        'aria-live': 'assertive',
        'aria-atomic': 'true',
      };
      const y = n('9Xx/');
      const b = n('+ZDr');
      const w = new Map();
      const S = new Map();
      function P(t) {
        let e = w.get(t);
        return e || (e = S.get(t.toLowerCase())), null != e && (window.___replace(e.toPath), !0);
      }
      v.forEach(function(t) {
        t.ignoreCase ? S.set(t.fromPath, t) : w.set(t.fromPath, t);
      });
      const x = function(t, e) {
        P(t.pathname) ||
            Object(o.apiRunner)('onPreRouteUpdate', { location: t, prevLocation: e });
      };
      const R = function(t, e) {
        P(t.pathname) || Object(o.apiRunner)('onRouteUpdate', { location: t, prevLocation: e });
      };
      const O = function(t, e) {
        if ((void 0 === e && (e = {}), 'number' !== typeof t)) {
          let n = Object(b.parsePath)(t).pathname;
          let r = w.get(n);
          if (
            (r || (r = S.get(n.toLowerCase())),
            r && ((t = r.toPath), (n = Object(b.parsePath)(t).pathname)),
            window.___swUpdated)
          ) {window.location = n;} else {
            const a = setTimeout(function() {
              m.a.emit('onDelayedLoadPageResources', { pathname: n }),
              Object(o.apiRunner)('onRouteUpdateDelayed', { location: window.location });
            }, 1e3);
            h.default.loadPage(n).then(function(r) {
              if (!r || r.status === h.PageResourceStatus.Error) {
                return (
                  window.history.replaceState({}, '', location.href),
                  (window.location = n),
                  void clearTimeout(a)
                );
              }
              r &&
                  r.page.webpackCompilationHash !== window.___webpackCompilationHash &&
                  ('serviceWorker' in navigator &&
                    null !== navigator.serviceWorker.controller &&
                    'activated' === navigator.serviceWorker.controller.state &&
                    navigator.serviceWorker.controller.postMessage({
                      gatsbyApi: 'clearPathResources',
                    }),
                  (window.location = n)),
              Object(s.navigate)(t, e),
              clearTimeout(a);
            });
          }
        } else {y.c.navigate(t);}
      };
      function _(t, e) {
        const n = this;
        const r = e.location;
        const a = r.pathname;
        const i = r.hash;
        const u = Object(o.apiRunner)('shouldUpdateScroll', {
          prevRouterProps: t,
          pathname: a,
          routerProps: { location: r },
          getSavedScrollPosition: function(t) {
            return [0, n._stateStorage.read(t, t.key)];
          },
        });
        if (u.length > 0) {return u[u.length - 1];}
        if (t && t.location.pathname === a) {return i ? decodeURI(i.slice(1)) : [0, 0];}
        return !0;
      }
      const E = (function(t) {
        function e(e) {
          let n;
          return ((n = t.call(this, e) || this).announcementRef = i.a.createRef()), n;
        }
        Object(r.a)(e, t);
        const n = e.prototype;
        return (
          (n.componentDidUpdate = function(t, e) {
            const n = this;
            requestAnimationFrame(function() {
              let t = `new page at ${  n.props.location.pathname}`;
              document.title && (t = document.title);
              const e = document.querySelectorAll('#gatsby-focus-wrapper h1');
              e && e.length && (t = e[0].textContent);
              const r = `Navigated to ${  t}`;
              n.announcementRef.current &&
                  n.announcementRef.current.innerText !== r &&
                  (n.announcementRef.current.innerText = r);
            });
          }),
          (n.render = function() {
            return i.a.createElement('div', Object.assign({}, g, { ref: this.announcementRef }));
          }),
          e
        );
      })(i.a.Component);
      const j = function(t, e) {
        let n; let r;
        return (
          t.href !== e.href ||
            (null == t || null === (n = t.state) || void 0 === n ? void 0 : n.key) !==
              (null == e || null === (r = e.state) || void 0 === r ? void 0 : r.key)
        );
      };
      const k = (function(t) {
        function e(e) {
          let n;
          return (n = t.call(this, e) || this), x(e.location, null), n;
        }
        Object(r.a)(e, t);
        const n = e.prototype;
        return (
          (n.componentDidMount = function() {
            R(this.props.location, null);
          }),
          (n.shouldComponentUpdate = function(t) {
            return (
              !!j(t.location, this.props.location) && (x(this.props.location, t.location), !0)
            );
          }),
          (n.componentDidUpdate = function(t) {
            j(t.location, this.props.location) && R(this.props.location, t.location);
          }),
          (n.render = function() {
            return i.a.createElement(
              i.a.Fragment,
              null,
              this.props.children,
              i.a.createElement(E, { location: location }),
            );
          }),
          e
        );
      })(i.a.Component);
      const C = n('IOVJ');
      const T = n('NsGk');
      const L = n.n(T);
      function D(t, e) {
        for (const n in t) {if (!(n in e)) {return !0;}}
        for (const r in e) {if (t[r] !== e[r]) {return !0;}}
        return !1;
      }
      const M = (function(t) {
        function e(e) {
          let n;
          n = t.call(this) || this;
          const r = e.location;
          const o = e.pageResources;
          return (
            (n.state = {
              location: Object.assign({}, r),
              pageResources: o || h.default.loadPageSync(r.pathname),
            }),
            n
          );
        }
        Object(r.a)(e, t),
        (e.getDerivedStateFromProps = function(t, e) {
          const n = t.location;
          return e.location.href !== n.href
            ? {
              pageResources: h.default.loadPageSync(n.pathname),
              location: Object.assign({}, n),
            }
            : { location: Object.assign({}, n) };
        });
        const n = e.prototype;
        return (
          (n.loadResources = function(t) {
            const e = this;
            h.default.loadPage(t).then(function(n) {
              n && n.status !== h.PageResourceStatus.Error
                ? e.setState({ location: Object.assign({}, window.location), pageResources: n })
                : (window.history.replaceState({}, '', location.href), (window.location = t));
            });
          }),
          (n.shouldComponentUpdate = function(t, e) {
            return e.pageResources
              ? this.state.pageResources !== e.pageResources ||
                    this.state.pageResources.component !== e.pageResources.component ||
                    this.state.pageResources.json !== e.pageResources.json ||
                    !(
                      this.state.location.key === e.location.key ||
                      !e.pageResources.page ||
                      (!e.pageResources.page.matchPath && !e.pageResources.page.path)
                    ) ||
                    (function(t, e, n) {
                      return D(t.props, e) || D(t.state, n);
                    })(this, t, e)
              : (this.loadResources(t.location.pathname), !1);
          }),
          (n.render = function() {
            return this.props.children(this.state);
          }),
          e
        );
      })(i.a.Component);
      const U = n('cSJ8');
      const A = n('JeVI');
      const I = new h.ProdLoader(L.a, A);
      Object(h.setLoader)(I),
      I.setApiRunner(o.apiRunner),
      (window.asyncRequires = L.a),
      (window.___emitter = m.a),
      (window.___loader = h.publicLoader),
      y.c.listen(function(t) {
        t.location.action = t.action;
      }),
      (window.___push = function(t) {
        return O(t, { replace: !1 });
      }),
      (window.___replace = function(t) {
        return O(t, { replace: !0 });
      }),
      (window.___navigate = function(t, e) {
        return O(t, e);
      }),
      P(window.location.pathname),
      Object(o.apiRunnerAsync)('onClientEntry').then(function() {
        Object(o.apiRunner)('registerServiceWorker').length > 0 && n('NSX3');
        const t = function(t) {
          return i.a.createElement(
            s.BaseContext.Provider,
            { value: { baseuri: '/', basepath: '/' } },
            i.a.createElement(C.a, t),
          );
        };
        const e = i.a.createContext({});
        const a = (function(t) {
          function n() {
            return t.apply(this, arguments) || this;
          }
          return (
            Object(r.a)(n, t),
            (n.prototype.render = function() {
              const t = this.props.children;
              return i.a.createElement(s.Location, null, function(n) {
                const r = n.location;
                return i.a.createElement(M, { location: r }, function(n) {
                  const r = n.pageResources;
                  const o = n.location;
                  const a = Object(h.getStaticQueryResults)();
                  return i.a.createElement(
                    d.StaticQueryContext.Provider,
                    { value: a },
                    i.a.createElement(
                      e.Provider,
                      { value: { pageResources: r, location: o } },
                      t,
                    ),
                  );
                });
              });
            }),
            n
          );
        })(i.a.Component);
        const u = (function(n) {
          function o() {
            return n.apply(this, arguments) || this;
          }
          return (
            Object(r.a)(o, n),
            (o.prototype.render = function() {
              const n = this;
              return i.a.createElement(e.Consumer, null, function(e) {
                const r = e.pageResources;
                const o = e.location;
                return i.a.createElement(
                  k,
                  { location: o },
                  i.a.createElement(
                    l.ScrollContext,
                    { location: o, shouldUpdateScroll: _ },
                    i.a.createElement(
                      s.Router,
                      { basepath: '', location: o, id: 'gatsby-focus-wrapper' },
                      i.a.createElement(
                        t,
                        Object.assign(
                          {
                            path:
                                  '/404.html' === r.page.path
                                    ? Object(U.a)(o.pathname, '')
                                    : encodeURI(r.page.matchPath || r.page.path),
                          },
                          n.props,
                          { location: o, pageResources: r },
                          r.json,
                        ),
                      ),
                    ),
                  ),
                );
              });
            }),
            o
          );
        })(i.a.Component);
        const p = window;
        const v = p.pagePath;
        const m = p.location;
        v &&
            `${  v}` !== m.pathname &&
            !(
              I.findMatchPath(Object(U.a)(m.pathname, '')) ||
              '/404.html' === v ||
              v.match(/^\/404\/?$/) ||
              v.match(/^\/offline-plugin-app-shell-fallback\/?$/)
            ) &&
            Object(s.navigate)(`${  v  }${m.search  }${m.hash}`, { replace: !0 }),
        h.publicLoader.loadPage(m.pathname).then(function(t) {
          if (!t || t.status === h.PageResourceStatus.Error) {
            throw new Error(
              `page resources for ${  m.pathname  } not found. Not rendering React`,
            );
          }
          window.___webpackCompilationHash = t.page.webpackCompilationHash;
          const e = Object(o.apiRunner)(
            'wrapRootElement',
            { element: i.a.createElement(u, null) },
            i.a.createElement(u, null),
            function(t) {
              return { element: t.result };
            },
          ).pop();
          const n = function() {
            return i.a.createElement(a, null, e);
          };
          const r = Object(o.apiRunner)('replaceHydrateFunction', void 0, c.a.hydrate)[0];
          f()(function() {
            r(
              i.a.createElement(n, null),
              'undefined' !== typeof window ? document.getElementById('___gatsby') : void 0,
              function() {
                Object(o.apiRunner)('onInitialClientRender');
              },
            );
          });
        });
      });
    },
    VbXa: function(t, e, n) {
      const r = n('SksO');
      (t.exports = function(t, e) {
        (t.prototype = Object.create(e.prototype)), (t.prototype.constructor = t), r(t, e);
      }),
      (t.exports.default = t.exports),
      (t.exports.__esModule = !0);
    },
    VpIT: function(t, e, n) {
      const r = n('xDBR');
      const o = n('xs3f');
      (t.exports = function(t, e) {
        return o[t] || (o[t] = void 0 !== e ? e : {});
      })('versions', []).push({
        version: '3.17.1',
        mode: r ? 'pure' : 'global',
        copyright: '© 2021 Denis Pushkarev (zloirock.ru)',
      });
    },
    Vu81: function(t, e, n) {
      const r = n('0GbY');
      const o = n('JBy8');
      const a = n('dBg+');
      const i = n('glrk');
      t.exports =
        r('Reflect', 'ownKeys') ||
        function(t) {
          const e = o.f(i(t));
          const n = a.f;
          return n ? e.concat(n(t)) : e;
        };
    },
    Wbzz: function(t, e, n) {
      'use strict';
      n.r(e),
      n.d(e, 'graphql', function() {
        return v;
      }),
      n.d(e, 'StaticQueryContext', function() {
        return p;
      }),
      n.d(e, 'StaticQuery', function() {
        return d;
      }),
      n.d(e, 'useStaticQuery', function() {
        return h;
      }),
      n.d(e, 'prefetchPathname', function() {
        return l;
      });
      const r = n('q1tI');
      const o = n.n(r);
      const a = n('+ZDr');
      const i = n.n(a);
      n.d(e, 'Link', function() {
        return i.a;
      }),
      n.d(e, 'withAssetPrefix', function() {
        return a.withAssetPrefix;
      }),
      n.d(e, 'withPrefix', function() {
        return a.withPrefix;
      }),
      n.d(e, 'parsePath', function() {
        return a.parsePath;
      }),
      n.d(e, 'navigate', function() {
        return a.navigate;
      }),
      n.d(e, 'push', function() {
        return a.push;
      }),
      n.d(e, 'replace', function() {
        return a.replace;
      }),
      n.d(e, 'navigateTo', function() {
        return a.navigateTo;
      });
      const u = n('7hJ6');
      n.d(e, 'useScrollRestoration', function() {
        return u.useScrollRestoration;
      });
      const c = n('lw3w');
      const s = n.n(c);
      n.d(e, 'PageRenderer', function() {
        return s.a;
      });
      var l = n('emEt').default.enqueue;
      var p = o.a.createContext({});
      function f(t) {
        const e = t.staticQueryData;
        const n = t.data;
        const r = t.query;
        const a = t.render;
        const i = n ? n.data : e[r] && e[r].data;
        return o.a.createElement(
          o.a.Fragment,
          null,
          i && a(i),
          !i && o.a.createElement('div', null, 'Loading (StaticQuery)'),
        );
      }
      var d = function(t) {
        const e = t.data;
        const n = t.query;
        const r = t.render;
        const a = t.children;
        return o.a.createElement(p.Consumer, null, function(t) {
          return o.a.createElement(f, { data: e, query: n, render: r || a, staticQueryData: t });
        });
      };
      var h = function(t) {
        let e;
        o.a.useContext;
        const n = o.a.useContext(p);
        if (isNaN(Number(t))) {
          throw new Error(
            `useStaticQuery was called with a string but expects to be called using \`graphql\`. Try this:\n\nimport { useStaticQuery, graphql } from 'gatsby';\n\nuseStaticQuery(graphql\`${ 
              t 
            }\`);\n`,
          );
        }
        if (null !== (e = n[t]) && void 0 !== e && e.data) {return n[t].data;}
        throw new Error(
          'The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues',
        );
      };
      function v() {
        throw new Error(
          'It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away. Unfortunately, something went wrong and the query was left in the compiled code.\n\nUnless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.',
        );
      }
    },
    XGwC: function(t, e) {
      t.exports = function(t, e) {
        return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e };
      };
    },
    YF1G: function(t, e, n) {
      const r = n('xrYK');
      const o = n('2oRo');
      t.exports = 'process' == r(o.process);
    },
    'YLt+': function(t) {
      t.exports = JSON.parse('[]');
    },
    YVoz: function(t, e, n) {
      'use strict';
      t.exports = Object.assign;
    },
    YwZP: function(t, e, n) {
      'use strict';
      n.r(e),
      n.d(e, 'Link', function() {
        return L;
      }),
      n.d(e, 'Location', function() {
        return b;
      }),
      n.d(e, 'LocationProvider', function() {
        return w;
      }),
      n.d(e, 'Match', function() {
        return W;
      }),
      n.d(e, 'Redirect', function() {
        return I;
      }),
      n.d(e, 'Router', function() {
        return x;
      }),
      n.d(e, 'ServerLocation', function() {
        return S;
      }),
      n.d(e, 'isRedirect', function() {
        return M;
      }),
      n.d(e, 'redirectTo', function() {
        return U;
      }),
      n.d(e, 'useLocation', function() {
        return F;
      }),
      n.d(e, 'useNavigate', function() {
        return q;
      }),
      n.d(e, 'useParams', function() {
        return N;
      }),
      n.d(e, 'useMatch', function() {
        return G;
      }),
      n.d(e, 'BaseContext', function() {
        return P;
      });
      const r = n('q1tI');
      const o = n.n(r);
      const a = (n('17x9'), n('QLaP'));
      const i = n.n(a);
      const u = n('nqlD');
      const c = n.n(u);
      const s = n('94VI');
      const l = n('LYrO');
      n.d(e, 'matchPath', function() {
        return l.match;
      });
      const p = n('9Xx/');
      n.d(e, 'createHistory', function() {
        return p.a;
      }),
      n.d(e, 'createMemorySource', function() {
        return p.b;
      }),
      n.d(e, 'navigate', function() {
        return p.d;
      }),
      n.d(e, 'globalHistory', function() {
        return p.c;
      });
      const f =
        Object.assign ||
        function(t) {
          for (let e = 1; e < arguments.length; e++) {
            const n = arguments[e];
            for (const r in n) {Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);}
          }
          return t;
        };
      function d(t, e) {
        const n = {};
        for (const r in t) {e.indexOf(r) >= 0 || (Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]));}
        return n;
      }
      function h(t, e) {
        if (!(t instanceof e)) {throw new TypeError('Cannot call a class as a function');}
      }
      function v(t, e) {
        if (!t) {throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');}
        return !e || ('object' !== typeof e && 'function' !== typeof e) ? t : e;
      }
      function m(t, e) {
        if ('function' !== typeof e && null !== e) {
          throw new TypeError(
            `Super expression must either be null or a function, not ${  typeof e}`,
          );
        }
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
        })),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
      }
      const g = function(t, e) {
        const n = c()(e);
        return (n.displayName = t), n;
      };
      const y = g('Location');
      var b = function(t) {
        const e = t.children;
        return o.a.createElement(y.Consumer, null, function(t) {
          return t ? e(t) : o.a.createElement(w, null, e);
        });
      };
      var w = (function(t) {
        function e() {
          let n; let r;
          h(this, e);
          for (var o = arguments.length, a = Array(o), i = 0; i < o; i++) {a[i] = arguments[i];}
          return (
            (n = r = v(this, t.call.apply(t, [this].concat(a)))),
            (r.state = { context: r.getContext(), refs: { unlisten: null } }),
            v(r, n)
          );
        }
        return (
          m(e, t),
          (e.prototype.getContext = function() {
            const t = this.props.history;
            return { navigate: t.navigate, location: t.location };
          }),
          (e.prototype.componentDidCatch = function(t, e) {
            if (!M(t)) {throw t;}
            (0, this.props.history.navigate)(t.uri, { replace: !0 });
          }),
          (e.prototype.componentDidUpdate = function(t, e) {
            e.context.location !== this.state.context.location &&
                this.props.history._onTransitionComplete();
          }),
          (e.prototype.componentDidMount = function() {
            const t = this;
            const e = this.state.refs;
            const n = this.props.history;
            n._onTransitionComplete(),
            (e.unlisten = n.listen(function() {
              Promise.resolve().then(function() {
                requestAnimationFrame(function() {
                  t.unmounted ||
                        t.setState(function() {
                          return { context: t.getContext() };
                        });
                });
              });
            }));
          }),
          (e.prototype.componentWillUnmount = function() {
            const t = this.state.refs;
            (this.unmounted = !0), t.unlisten();
          }),
          (e.prototype.render = function() {
            const t = this.state.context;
            const e = this.props.children;
            return o.a.createElement(
              y.Provider,
              { value: t },
              'function' === typeof e ? e(t) : e || null,
            );
          }),
          e
        );
      })(o.a.Component);
      w.defaultProps = { history: p.c };
      var S = function(t) {
        const e = t.url;
        const n = t.children;
        const r = e.indexOf('?');
        let a = void 0;
        let i = '';
        return (
          r > -1 ? ((a = e.substring(0, r)), (i = e.substring(r))) : (a = e),
          o.a.createElement(
            y.Provider,
            {
              value: {
                location: { pathname: a, search: i, hash: '' },
                navigate: function() {
                  throw new Error('You can\'t call navigate on the server.');
                },
              },
            },
            n,
          )
        );
      };
      var P = g('Base', { baseuri: '/', basepath: '/' });
      var x = function(t) {
        return o.a.createElement(P.Consumer, null, function(e) {
          return o.a.createElement(b, null, function(n) {
            return o.a.createElement(R, f({}, e, n, t));
          });
        });
      };
      var R = (function(t) {
        function e() {
          return h(this, e), v(this, t.apply(this, arguments));
        }
        return (
          m(e, t),
          (e.prototype.render = function() {
            const t = this.props;
            const e = t.location;
            const n = t.navigate;
            let r = t.basepath;
            const a = t.primary;
            const i = t.children;
            const u = (t.baseuri, t.component);
            const c = void 0 === u ? 'div' : u;
            const s = d(t, [
              'location',
              'navigate',
              'basepath',
              'primary',
              'children',
              'baseuri',
              'component',
            ]);
            const p = o.a.Children.toArray(i).reduce(function(t, e) {
              const n = Y(r)(e);
              return t.concat(n);
            }, []);
            const h = e.pathname;
            const v = Object(l.pick)(p, h);
            if (v) {
              const m = v.params;
              const g = v.uri;
              const y = v.route;
              const b = v.route.value;
              r = y.default ? r : y.path.replace(/\*$/, '');
              const w = f({}, m, {
                uri: g,
                location: e,
                navigate: function(t, e) {
                  return n(Object(l.resolve)(t, g), e);
                },
              });
              const S = o.a.cloneElement(
                b,
                w,
                b.props.children
                  ? o.a.createElement(x, { location: e, primary: a }, b.props.children)
                  : void 0,
              );
              const R = a ? _ : c;
              const O = a ? f({ uri: g, location: e, component: c }, s) : s;
              return o.a.createElement(
                P.Provider,
                { value: { baseuri: g, basepath: r } },
                o.a.createElement(R, O, S),
              );
            }
            return null;
          }),
          e
        );
      })(o.a.PureComponent);
      R.defaultProps = { primary: !0 };
      const O = g('Focus');
      var _ = function(t) {
        const e = t.uri;
        const n = t.location;
        const r = t.component;
        const a = d(t, ['uri', 'location', 'component']);
        return o.a.createElement(O.Consumer, null, function(t) {
          return o.a.createElement(
            k,
            f({}, a, { component: r, requestFocus: t, uri: e, location: n }),
          );
        });
      };
      let E = !0;
      let j = 0;
      var k = (function(t) {
        function e() {
          let n; let r;
          h(this, e);
          for (var o = arguments.length, a = Array(o), i = 0; i < o; i++) {a[i] = arguments[i];}
          return (
            (n = r = v(this, t.call.apply(t, [this].concat(a)))),
            (r.state = {}),
            (r.requestFocus = function(t) {
              !r.state.shouldFocus && t && t.focus();
            }),
            v(r, n)
          );
        }
        return (
          m(e, t),
          (e.getDerivedStateFromProps = function(t, e) {
            if (null == e.uri) {return f({ shouldFocus: !0 }, t);}
            const n = t.uri !== e.uri;
            const r = e.location.pathname !== t.location.pathname && t.location.pathname === t.uri;
            return f({ shouldFocus: n || r }, t);
          }),
          (e.prototype.componentDidMount = function() {
            j++, this.focus();
          }),
          (e.prototype.componentWillUnmount = function() {
            0 === --j && (E = !0);
          }),
          (e.prototype.componentDidUpdate = function(t, e) {
            t.location !== this.props.location && this.state.shouldFocus && this.focus();
          }),
          (e.prototype.focus = function() {
            const t = this.props.requestFocus;
            t
              ? t(this.node)
              : E
                ? (E = !1)
                : this.node && (this.node.contains(document.activeElement) || this.node.focus());
          }),
          (e.prototype.render = function() {
            const t = this;
            const e = this.props;
            const n = (e.children, e.style);
            const r = (e.requestFocus, e.component);
            const a = void 0 === r ? 'div' : r;
            const i =
                  (e.uri,
                  e.location,
                  d(e, ['children', 'style', 'requestFocus', 'component', 'uri', 'location']));
            return o.a.createElement(
              a,
              f(
                {
                  style: f({ outline: 'none' }, n),
                  tabIndex: '-1',
                  ref: function(e) {
                    return (t.node = e);
                  },
                },
                i,
              ),
              o.a.createElement(O.Provider, { value: this.requestFocus }, this.props.children),
            );
          }),
          e
        );
      })(o.a.Component);
      Object(s.polyfill)(k);
      const C = function() {};
      let T = o.a.forwardRef;
      void 0 === T &&
        (T = function(t) {
          return t;
        });
      var L = T(function(t, e) {
        const n = t.innerRef;
        const r = d(t, ['innerRef']);
        return o.a.createElement(P.Consumer, null, function(t) {
          t.basepath;
          const a = t.baseuri;
          return o.a.createElement(b, null, function(t) {
            const i = t.location;
            const u = t.navigate;
            const c = r.to;
            const s = r.state;
            const p = r.replace;
            const h = r.getProps;
            const v = void 0 === h ? C : h;
            const m = d(r, ['to', 'state', 'replace', 'getProps']);
            const g = Object(l.resolve)(c, a);
            const y = encodeURI(g);
            const b = i.pathname === y;
            const w = Object(l.startsWith)(i.pathname, y);
            return o.a.createElement(
              'a',
              f(
                { ref: e || n, 'aria-current': b ? 'page' : void 0 },
                m,
                v({ isCurrent: b, isPartiallyCurrent: w, href: g, location: i }),
                {
                  href: g,
                  onClick: function(t) {
                    if ((m.onClick && m.onClick(t), J(t))) {
                      t.preventDefault();
                      let e = p;
                      if ('boolean' !== typeof p && b) {
                        const n = f({}, i.state);
                        const r = (n.key, d(n, ['key']));
                        e = Object(l.shallowCompare)(f({}, s), r);
                      }
                      u(g, { state: s, replace: e });
                    }
                  },
                },
              ),
            );
          });
        });
      });
      function D(t) {
        this.uri = t;
      }
      L.displayName = 'Link';
      var M = function(t) {
        return t instanceof D;
      };
      var U = function(t) {
        throw new D(t);
      };
      const A = (function(t) {
        function e() {
          return h(this, e), v(this, t.apply(this, arguments));
        }
        return (
          m(e, t),
          (e.prototype.componentDidMount = function() {
            const t = this.props;
            const e = t.navigate;
            const n = t.to;
            const r = (t.from, t.replace);
            const o = void 0 === r || r;
            const a = t.state;
            const i = (t.noThrow, t.baseuri);
            const u = d(t, ['navigate', 'to', 'from', 'replace', 'state', 'noThrow', 'baseuri']);
            Promise.resolve().then(function() {
              const t = Object(l.resolve)(n, i);
              e(Object(l.insertParams)(t, u), { replace: o, state: a });
            });
          }),
          (e.prototype.render = function() {
            const t = this.props;
            const e = (t.navigate, t.to);
            const n = (t.from, t.replace, t.state, t.noThrow);
            const r = t.baseuri;
            const o = d(t, ['navigate', 'to', 'from', 'replace', 'state', 'noThrow', 'baseuri']);
            const a = Object(l.resolve)(e, r);
            return n || U(Object(l.insertParams)(a, o)), null;
          }),
          e
        );
      })(o.a.Component);
      var I = function(t) {
        return o.a.createElement(P.Consumer, null, function(e) {
          const n = e.baseuri;
          return o.a.createElement(b, null, function(e) {
            return o.a.createElement(A, f({}, e, { baseuri: n }, t));
          });
        });
      };
      var W = function(t) {
        const e = t.path;
        const n = t.children;
        return o.a.createElement(P.Consumer, null, function(t) {
          const r = t.baseuri;
          return o.a.createElement(b, null, function(t) {
            const o = t.navigate;
            const a = t.location;
            const i = Object(l.resolve)(e, r);
            const u = Object(l.match)(i, a.pathname);
            return n({
              navigate: o,
              location: a,
              match: u ? f({}, u.params, { uri: u.uri, path: e }) : null,
            });
          });
        });
      };
      var F = function() {
        const t = Object(r.useContext)(y);
        if (!t) {
          throw new Error(
            'useLocation hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router',
          );
        }
        return t.location;
      };
      var q = function() {
        const t = Object(r.useContext)(y);
        if (!t) {
          throw new Error(
            'useNavigate hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router',
          );
        }
        return t.navigate;
      };
      var N = function() {
        const t = Object(r.useContext)(P);
        if (!t) {
          throw new Error(
            'useParams hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router',
          );
        }
        const e = F();
        const n = Object(l.match)(t.basepath, e.pathname);
        return n ? n.params : null;
      };
      var G = function(t) {
        if (!t) {
          throw new Error(
            'useMatch(path: string) requires an argument of a string to match against',
          );
        }
        const e = Object(r.useContext)(P);
        if (!e) {
          throw new Error(
            'useMatch hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router',
          );
        }
        const n = F();
        const o = Object(l.resolve)(t, e.baseuri);
        const a = Object(l.match)(o, n.pathname);
        return a ? f({}, a.params, { uri: a.uri, path: t }) : null;
      };
      const B = function(t) {
        return t.replace(/(^\/+|\/+$)/g, '');
      };
      var Y = function t(e) {
        return function(n) {
          if (!n) {return null;}
          if (n.type === o.a.Fragment && n.props.children) {return o.a.Children.map(n.props.children, t(e));}
          if (
            (n.props.path || n.props.default || n.type === I || i()(!1),
            n.type !== I || (n.props.from && n.props.to) || i()(!1),
            n.type !== I || Object(l.validateRedirect)(n.props.from, n.props.to) || i()(!1),
            n.props.default)
          ) {return { value: n, default: !0 };}
          const r = n.type === I ? n.props.from : n.props.path;
          const a = '/' === r ? e : `${B(e)  }/${  B(r)}`;
          return { value: n, default: n.props.default, path: n.props.children ? `${B(a)  }/*` : a };
        };
      };
      var J = function(t) {
        return (
          !t.defaultPrevented &&
            0 === t.button &&
            !(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey)
        );
      };
    },
    afO8: function(t, e, n) {
      let r;
      let o;
      let a;
      const i = n('f5p1');
      const u = n('2oRo');
      const c = n('hh1v');
      const s = n('kRJp');
      const l = n('UTVS');
      const p = n('xs3f');
      const f = n('93I0');
      const d = n('0BK2');
      const h = u.WeakMap;
      if (i || p.state) {
        const v = p.state || (p.state = new h());
        const m = v.get;
        const g = v.has;
        const y = v.set;
        (r = function(t, e) {
          if (g.call(v, t)) {throw new TypeError('Object already initialized');}
          return (e.facade = t), y.call(v, t, e), e;
        }),
        (o = function(t) {
          return m.call(v, t) || {};
        }),
        (a = function(t) {
          return g.call(v, t);
        });
      } else {
        const b = f('state');
        (d[b] = !0),
        (r = function(t, e) {
          if (l(t, b)) {throw new TypeError('Object already initialized');}
          return (e.facade = t), s(t, b, e), e;
        }),
        (o = function(t) {
          return l(t, b) ? t[b] : {};
        }),
        (a = function(t) {
          return l(t, b);
        });
      }
      t.exports = {
        set: r,
        get: o,
        has: a,
        enforce: function(t) {
          return a(t) ? o(t) : r(t, {});
        },
        getterFor: function(t) {
          return function(e) {
            let n;
            if (!c(e) || (n = o(e)).type !== t) {throw TypeError(`Incompatible receiver, ${  t  } required`);}
            return n;
          };
        },
      };
    },
    busE: function(t, e, n) {
      const r = n('2oRo');
      const o = n('kRJp');
      const a = n('UTVS');
      const i = n('zk60');
      const u = n('iSVu');
      const c = n('afO8');
      const s = c.get;
      const l = c.enforce;
      const p = String(String).split('String');
      (t.exports = function(t, e, n, u) {
        let c;
        const s = !!u && !!u.unsafe;
        let f = !!u && !!u.enumerable;
        const d = !!u && !!u.noTargetGet;
        'function' === typeof n &&
          ('string' !== typeof e || a(n, 'name') || o(n, 'name', e),
          (c = l(n)).source || (c.source = p.join('string' === typeof e ? e : ''))),
        t !== r
          ? (s ? !d && t[e] && (f = !0) : delete t[e], f ? (t[e] = n) : o(t, e, n))
          : f
            ? (t[e] = n)
            : i(e, n);
      })(Function.prototype, 'toString', function() {
        return ('function' === typeof this && s(this).source) || u(this);
      });
    },
    cDf5: function(t, e) {
      function n(e) {
        return (
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? ((t.exports = n =
                function(t) {
                  return typeof t;
                }),
            (t.exports.default = t.exports),
            (t.exports.__esModule = !0))
            : ((t.exports = n =
                function(t) {
                  return t &&
                    'function' === typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
            (t.exports.default = t.exports),
            (t.exports.__esModule = !0)),
          n(e)
        );
      }
      (t.exports = n), (t.exports.default = t.exports), (t.exports.__esModule = !0);
    },
    cSJ8: function(t, e, n) {
      'use strict';
      function r(t, e) {
        return (
          void 0 === e && (e = ''),
          e ? (t === e ? '/' : t.startsWith(`${e  }/`) ? t.slice(e.length) : t) : t
        );
      }
      n.d(e, 'a', function() {
        return r;
      });
    },
    cu4x: function(t, e, n) {
      'use strict';
      (e.__esModule = !0),
      (e.parsePath = function(t) {
        let e = t || '/';
        let n = '';
        let r = '';
        const o = e.indexOf('#');
        -1 !== o && ((r = e.substr(o)), (e = e.substr(0, o)));
        const a = e.indexOf('?');
        -1 !== a && ((n = e.substr(a)), (e = e.substr(0, a)));
        return { pathname: e, search: '?' === n ? '' : n, hash: '#' === r ? '' : r };
      });
    },
    'dBg+': function(t, e) {
      e.f = Object.getOwnPropertySymbols;
    },
    dI71: function(t, e, n) {
      'use strict';
      function r(t, e) {
        return (r =
          Object.setPrototypeOf ||
          function(t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function o(t, e) {
        (t.prototype = Object.create(e.prototype)), (t.prototype.constructor = t), r(t, e);
      }
      n.d(e, 'a', function() {
        return o;
      });
    },
    'e/UW': function(t, e, n) {
      'use strict';
      e.registerServiceWorker = function() {
        return !0;
      };
      const r = /^(stylesheet|preload)$/;
      const o = [];
      function a(t, e) {
        if (!window.___swUpdated && 'serviceWorker' in navigator) {
          const n = navigator.serviceWorker;
          if (null === n.controller) {o.push(t);} else {
            const r = e(t);
            n.controller.postMessage({ gatsbyApi: 'setPathResources', path: t, resources: r });
          }
        }
      }
      (e.onServiceWorkerActive = function(t) {
        const e = t.getResourceURLsForPathname;
        const n = t.serviceWorker;
        if (window.___swUpdated) {n.active.postMessage({ gatsbyApi: 'clearPathResources' });} else {
          const a = document.querySelectorAll(
            '\n    head > script[src],\n    head > link[href],\n    head > style[data-href]\n  ',
          );
          const i = [].slice
            .call(a)
            .filter(function(t) {
              return 'LINK' !== t.tagName || r.test(t.getAttribute('rel'));
            })
            .map(function(t) {
              return t.src || t.href || t.getAttribute('data-href');
            });
          const u = [];
          o.forEach(function(t) {
            const r = e(t);
            u.push.apply(u, r),
            n.active.postMessage({ gatsbyApi: 'setPathResources', path: t, resources: r });
          }),
          [].concat(i, u).forEach(function(t) {
            const e = document.createElement('link');
            (e.rel = 'prefetch'),
            (e.href = t),
            (e.onload = e.remove),
            (e.onerror = e.remove),
            document.head.appendChild(e);
          });
        }
      }),
      (e.onRouteUpdate = function(t) {
        const e = t.location;
        const n = t.getResourceURLsForPathname;
        a(e.pathname.replace('', ''), n),
        'serviceWorker' in navigator &&
              null !== navigator.serviceWorker.controller &&
              navigator.serviceWorker.controller.postMessage({ gatsbyApi: 'enableOfflineShell' });
      }),
      (e.onPostPrefetchPathname = function(t) {
        a(t.pathname, t.getResourceURLsForPathname);
      });
    },
    'eDl+': function(t, e) {
      t.exports = [
        'constructor',
        'hasOwnProperty',
        'isPrototypeOf',
        'propertyIsEnumerable',
        'toLocaleString',
        'toString',
        'valueOf',
      ];
    },
    emEt: function(t, e, n) {
      'use strict';
      n.r(e),
      n.d(e, 'PageResourceStatus', function() {
        return l;
      }),
      n.d(e, 'BaseLoader', function() {
        return m;
      }),
      n.d(e, 'ProdLoader', function() {
        return y;
      }),
      n.d(e, 'setLoader', function() {
        return b;
      }),
      n.d(e, 'publicLoader', function() {
        return w;
      }),
      n.d(e, 'getStaticQueryResults', function() {
        return S;
      });
      const r = n('dI71');
      const o = n('KQm4');
      const a = (function(t) {
        if ('undefined' === typeof document) {return !1;}
        const e = document.createElement('link');
        try {
          if (e.relList && 'function' === typeof e.relList.supports) {return e.relList.supports(t);}
        } catch (n) {
          return !1;
        }
        return !1;
      })('prefetch')
        ? function(t, e) {
          return new Promise(function(n, r) {
            if ('undefined' !== typeof document) {
              const o = document.createElement('link');
              o.setAttribute('rel', 'prefetch'),
              o.setAttribute('href', t),
              Object.keys(e).forEach(function(t) {
                o.setAttribute(t, e[t]);
              }),
              (o.onload = n),
              (o.onerror = r),
              (
                document.getElementsByTagName('head')[0] ||
                      document.getElementsByName('script')[0].parentNode
              ).appendChild(o);
            } else {r();}
          });
        }
        : function(t) {
          return new Promise(function(e, n) {
            const r = new XMLHttpRequest();
            r.open('GET', t, !0),
            (r.onload = function() {
              200 === r.status ? e() : n();
            }),
            r.send(null);
          });
        };
      const i = {};
      const u = function(t, e) {
        return new Promise(function(n) {
          i[t]
            ? n()
            : a(t, e)
              .then(function() {
                n(), (i[t] = !0);
              })
              .catch(function() {});
        });
      };
      const c = n('5yr3');
      const s = n('30RF');
      var l = { Error: 'error', Success: 'success' };
      const p = function(t) {
        return (t && t.default) || t;
      };
      const f = function(t) {
        let e;
        return (
          `/page-data/${ 
            '/' === t
              ? 'index'
              : (e = (e = '/' === (e = t)[0] ? e.slice(1) : e).endsWith('/')
                ? e.slice(0, -1)
                : e) 
          }/page-data.json`
        );
      };
      function d(t, e) {
        return (
          void 0 === e && (e = 'GET'),
          new Promise(function(n, r) {
            const o = new XMLHttpRequest();
            o.open(e, t, !0),
            (o.onreadystatechange = function() {
              4 == o.readyState && n(o);
            }),
            o.send(null);
          })
        );
      }
      let h;
      const v = function(t, e) {
        void 0 === e && (e = null);
        const n = {
          componentChunkName: t.componentChunkName,
          path: t.path,
          webpackCompilationHash: t.webpackCompilationHash,
          matchPath: t.matchPath,
          staticQueryHashes: t.staticQueryHashes,
        };
        return { component: e, json: t.result, page: n };
      };
      var m = (function() {
        function t(t, e) {
          (this.inFlightNetworkRequests = new Map()),
          (this.pageDb = new Map()),
          (this.inFlightDb = new Map()),
          (this.staticQueryDb = {}),
          (this.pageDataDb = new Map()),
          (this.prefetchTriggered = new Set()),
          (this.prefetchCompleted = new Set()),
          (this.loadComponent = t),
          Object(s.d)(e);
        }
        const e = t.prototype;
        return (
          (e.memoizedGet = function(t) {
            const e = this;
            let n = this.inFlightNetworkRequests.get(t);
            return (
              n || ((n = d(t, 'GET')), this.inFlightNetworkRequests.set(t, n)),
              n
                .then(function(n) {
                  return e.inFlightNetworkRequests.delete(t), n;
                })
                .catch(function(n) {
                  throw (e.inFlightNetworkRequests.delete(t), n);
                })
            );
          }),
          (e.setApiRunner = function(t) {
            (this.apiRunner = t),
            (this.prefetchDisabled = t('disableCorePrefetching').some(function(t) {
              return t;
            }));
          }),
          (e.fetchPageDataJson = function(t) {
            const e = this;
            const n = t.pagePath;
            const r = t.retries;
            const o = void 0 === r ? 0 : r;
            const a = f(n);
            return this.memoizedGet(a).then(function(r) {
              const a = r.status;
              const i = r.responseText;
              if (200 === a) {
                try {
                  const u = JSON.parse(i);
                  if (void 0 === u.path) {throw new Error('not a valid pageData response');}
                  return Object.assign(t, { status: l.Success, payload: u });
                } catch (c) {}
              }
              return 404 === a || 200 === a
                ? '/404.html' === n
                  ? Object.assign(t, { status: l.Error })
                  : e.fetchPageDataJson(Object.assign(t, { pagePath: '/404.html', notFound: !0 }))
                : 500 === a
                  ? Object.assign(t, { status: l.Error })
                  : o < 3
                    ? e.fetchPageDataJson(Object.assign(t, { retries: o + 1 }))
                    : Object.assign(t, { status: l.Error });
            });
          }),
          (e.loadPageDataJson = function(t) {
            const e = this;
            const n = Object(s.b)(t);
            if (this.pageDataDb.has(n)) {
              const r = this.pageDataDb.get(n);
              return Promise.resolve(r);
            }
            return this.fetchPageDataJson({ pagePath: n }).then(function(t) {
              return e.pageDataDb.set(n, t), t;
            });
          }),
          (e.findMatchPath = function(t) {
            return Object(s.a)(t);
          }),
          (e.loadPage = function(t) {
            const e = this;
            const n = Object(s.b)(t);
            if (this.pageDb.has(n)) {
              const r = this.pageDb.get(n);
              return Promise.resolve(r.payload);
            }
            if (this.inFlightDb.has(n)) {return this.inFlightDb.get(n);}
            const o = Promise.all([this.loadAppData(), this.loadPageDataJson(n)]).then(function(
              t,
            ) {
              const r = t[1];
              if (r.status === l.Error) {return { status: l.Error };}
              let o = r.payload;
              const a = o;
              const i = a.componentChunkName;
              const u = a.staticQueryHashes;
              const s = void 0 === u ? [] : u;
              const p = {};
              const f = e.loadComponent(i).then(function(e) {
                let n;
                return (
                  (p.createdAt = new Date()),
                  e
                    ? ((p.status = l.Success),
                    !0 === r.notFound && (p.notFound = !0),
                    (o = Object.assign(o, {
                      webpackCompilationHash: t[0] ? t[0].webpackCompilationHash : '',
                    })),
                    (n = v(o, e)))
                    : (p.status = l.Error),
                  n
                );
              });
              const d = Promise.all(
                s.map(function(t) {
                  if (e.staticQueryDb[t]) {
                    const n = e.staticQueryDb[t];
                    return { staticQueryHash: t, jsonPayload: n };
                  }
                  return e.memoizedGet(`/page-data/sq/d/${  t  }.json`).then(function(e) {
                    const n = JSON.parse(e.responseText);
                    return { staticQueryHash: t, jsonPayload: n };
                  });
                }),
              ).then(function(t) {
                const n = {};
                return (
                  t.forEach(function(t) {
                    const r = t.staticQueryHash;
                    const o = t.jsonPayload;
                    (n[r] = o), (e.staticQueryDb[r] = o);
                  }),
                  n
                );
              });
              return Promise.all([f, d]).then(function(t) {
                let r;
                const o = t[0];
                const a = t[1];
                return (
                  o &&
                      ((r = Object.assign({}, o, { staticQueryResults: a })),
                      (p.payload = r),
                      c.a.emit('onPostLoadPageResources', { page: r, pageResources: r })),
                  e.pageDb.set(n, p),
                  r
                );
              });
            });
            return (
              o
                .then(function(t) {
                  e.inFlightDb.delete(n);
                })
                .catch(function(t) {
                  throw (e.inFlightDb.delete(n), t);
                }),
              this.inFlightDb.set(n, o),
              o
            );
          }),
          (e.loadPageSync = function(t) {
            const e = Object(s.b)(t);
            if (this.pageDb.has(e)) {return this.pageDb.get(e).payload;}
          }),
          (e.shouldPrefetch = function(t) {
            return (
              !!(function() {
                if ('connection' in navigator && void 0 !== navigator.connection) {
                  if ((navigator.connection.effectiveType || '').includes('2g')) {return !1;}
                  if (navigator.connection.saveData) {return !1;}
                }
                return !0;
              })() && !this.pageDb.has(t)
            );
          }),
          (e.prefetch = function(t) {
            const e = this;
            if (!this.shouldPrefetch(t)) {return !1;}
            if (
              (this.prefetchTriggered.has(t) ||
                  (this.apiRunner('onPrefetchPathname', { pathname: t }),
                  this.prefetchTriggered.add(t)),
              this.prefetchDisabled)
            ) {return !1;}
            const n = Object(s.b)(t);
            return (
              this.doPrefetch(n).then(function() {
                e.prefetchCompleted.has(t) ||
                    (e.apiRunner('onPostPrefetchPathname', { pathname: t }),
                    e.prefetchCompleted.add(t));
              }),
              !0
            );
          }),
          (e.doPrefetch = function(t) {
            const e = this;
            const n = f(t);
            return u(n, { crossOrigin: 'anonymous', as: 'fetch' }).then(function() {
              return e.loadPageDataJson(t);
            });
          }),
          (e.hovering = function(t) {
            this.loadPage(t);
          }),
          (e.getResourceURLsForPathname = function(t) {
            const e = Object(s.b)(t);
            const n = this.pageDataDb.get(e);
            if (n) {
              const r = v(n.payload);
              return [].concat(Object(o.a)(g(r.page.componentChunkName)), [f(e)]);
            }
            return null;
          }),
          (e.isPageNotFound = function(t) {
            const e = Object(s.b)(t);
            const n = this.pageDb.get(e);
            return !n || n.notFound;
          }),
          (e.loadAppData = function(t) {
            const e = this;
            return (
              void 0 === t && (t = 0),
              this.memoizedGet('/page-data/app-data.json').then(function(n) {
                let r;
                const o = n.status;
                const a = n.responseText;
                if (200 !== o && t < 3) {return e.loadAppData(t + 1);}
                if (200 === o) {
                  try {
                    const i = JSON.parse(a);
                    if (void 0 === i.webpackCompilationHash) {throw new Error('not a valid app-data response');}
                    r = i;
                  } catch (u) {}
                }
                return r;
              })
            );
          }),
          t
        );
      })();
      var g = function(t) {
        return (window.___chunkMapping[t] || []).map(function(t) {
          return `${  t}`;
        });
      };
      var y = (function(t) {
        function e(e, n) {
          return (
            t.call(
              this,
              function(t) {
                return e.components[t]
                  ? e.components[t]()
                    .then(p)
                    .catch(function() {
                      return null;
                    })
                  : Promise.resolve();
              },
              n,
            ) || this
          );
        }
        Object(r.a)(e, t);
        const n = e.prototype;
        return (
          (n.doPrefetch = function(e) {
            return t.prototype.doPrefetch.call(this, e).then(function(t) {
              if (t.status !== l.Success) {return Promise.resolve();}
              const e = t.payload;
              const n = e.componentChunkName;
              const r = g(n);
              return Promise.all(r.map(u)).then(function() {
                return e;
              });
            });
          }),
          (n.loadPageDataJson = function(e) {
            return t.prototype.loadPageDataJson.call(this, e).then(function(t) {
              return t.notFound
                ? d(e, 'HEAD').then(function(e) {
                  return 200 === e.status ? { status: l.Error } : t;
                })
                : t;
            });
          }),
          e
        );
      })(m);
      var b = function(t) {
        h = t;
      };
      var w = {
        getResourcesForPathname: function(t) {
          return (
            console.warn('Warning: getResourcesForPathname is deprecated. Use loadPage instead'),
            h.i.loadPage(t)
          );
        },
        getResourcesForPathnameSync: function(t) {
          return (
            console.warn(
              'Warning: getResourcesForPathnameSync is deprecated. Use loadPageSync instead',
            ),
            h.i.loadPageSync(t)
          );
        },
        enqueue: function(t) {
          return h.prefetch(t);
        },
        getResourceURLsForPathname: function(t) {
          return h.getResourceURLsForPathname(t);
        },
        loadPage: function(t) {
          return h.loadPage(t);
        },
        loadPageSync: function(t) {
          return h.loadPageSync(t);
        },
        prefetch: function(t) {
          return h.prefetch(t);
        },
        isPageNotFound: function(t) {
          return h.isPageNotFound(t);
        },
        hovering: function(t) {
          return h.hovering(t);
        },
        loadAppData: function() {
          return h.loadAppData();
        },
      };
      e.default = w;
      function S() {
        return h ? h.staticQueryDb : {};
      }
    },
    ewvW: function(t, e, n) {
      const r = n('HYAF');
      t.exports = function(t) {
        return Object(r(t));
      };
    },
    f5p1: function(t, e, n) {
      const r = n('2oRo');
      const o = n('iSVu');
      const a = r.WeakMap;
      t.exports = 'function' === typeof a && /native code/.test(o(a));
    },
    'g6v/': function(t, e, n) {
      const r = n('0Dky');
      t.exports = !r(function() {
        return (
          7 !=
          Object.defineProperty({}, 1, {
            get: function() {
              return 7;
            },
          })[1]
        );
      });
    },
    glrk: function(t, e, n) {
      const r = n('hh1v');
      t.exports = function(t) {
        if (!r(t)) {throw TypeError(`${String(t)  } is not an object`);}
        return t;
      };
    },
    hd9s: function(t, e, n) {
      'use strict';
      const r = n('284h');
      const o = n('TqRt');
      (e.__esModule = !0), (e.ScrollContainer = void 0);
      const a = o(n('pVnL'));
      const i = o(n('VbXa'));
      const u = r(n('q1tI'));
      const c = o(n('i8i4'));
      const s = o(n('17x9'));
      const l = n('Enzk');
      const p = n('YwZP');
      const f = {
        scrollKey: s.default.string.isRequired,
        shouldUpdateScroll: s.default.func,
        children: s.default.element.isRequired,
      };
      const d = (function(t) {
        function e(e) {
          return t.call(this, e) || this;
        }
        (0, i.default)(e, t);
        const n = e.prototype;
        return (
          (n.componentDidMount = function() {
            const t = this;
            const e = c.default.findDOMNode(this);
            const n = this.props;
            const r = n.location;
            const o = n.scrollKey;
            if (e) {
              e.addEventListener('scroll', function() {
                t.props.context.save(r, o, e.scrollTop);
              });
              const a = this.props.context.read(r, o);
              e.scrollTo(0, a || 0);
            }
          }),
          (n.render = function() {
            return this.props.children;
          }),
          e
        );
      })(u.Component);
      const h = function(t) {
        return u.createElement(p.Location, null, function(e) {
          const n = e.location;
          return u.createElement(l.ScrollContext.Consumer, null, function(e) {
            return u.createElement(d, (0, a.default)({}, t, { context: e, location: n }));
          });
        });
      };
      (e.ScrollContainer = h), (h.propTypes = f);
    },
    hh1v: function(t, e) {
      t.exports = function(t) {
        return 'object' === typeof t ? null !== t : 'function' === typeof t;
      };
    },
    iSVu: function(t, e, n) {
      const r = n('xs3f');
      const o = Function.toString;
      'function' !== typeof r.inspectSource &&
        (r.inspectSource = function(t) {
          return o.call(t);
        }),
      (t.exports = r.inspectSource);
    },
    kOOl: function(t, e) {
      let n = 0;
      const r = Math.random();
      t.exports = function(t) {
        return `Symbol(${  String(void 0 === t ? '' : t)  })_${  (++n + r).toString(36)}`;
      };
    },
    kRJp: function(t, e, n) {
      const r = n('g6v/');
      const o = n('m/L8');
      const a = n('XGwC');
      t.exports = r
        ? function(t, e, n) {
          return o.f(t, e, a(1, n));
        }
        : function(t, e, n) {
          return (t[e] = n), t;
        };
    },
    lMq5: function(t, e, n) {
      const r = n('0Dky');
      const o = /#|\.prototype\./;
      const a = function(t, e) {
        const n = u[i(t)];
        return n == s || (n != c && ('function' === typeof e ? r(e) : !!e));
      };
      var i = (a.normalize = function(t) {
        return String(t).replace(o, '.').toLowerCase();
      });
      var u = (a.data = {});
      var c = (a.NATIVE = 'N');
      var s = (a.POLYFILL = 'P');
      t.exports = a;
    },
    lw3w: function(t, e, n) {
      let r;
      t.exports = ((r = n('rzlk')) && r.default) || r;
    },
    'm/L8': function(t, e, n) {
      const r = n('g6v/');
      const o = n('DPsx');
      const a = n('glrk');
      const i = n('oEtG');
      const u = Object.defineProperty;
      e.f = r
        ? u
        : function(t, e, n) {
          if ((a(t), (e = i(e)), a(n), o)) {
            try {
              return u(t, e, n);
            } catch (r) {}
          }
          if ('get' in n || 'set' in n) {throw TypeError('Accessors not supported');}
          return 'value' in n && (t[e] = n.value), t;
        };
    },
    npZl: function(t, e, n) {
      'use strict';
      const r = n('TqRt');
      n('Wbzz'), r(n('9hXx'));
    },
    nqlD: function(t, e, n) {
      const r = n('q1tI').createContext;
      (t.exports = r), (t.exports.default = r);
    },
    nwwn: function(t, e, n) {
      'use strict';
      (e.DEFAULT_OPTIONS = {
        maxWidth: 650,
        wrapperStyle: '',
        backgroundColor: 'white',
        linkImagesToOriginal: !0,
        showCaptions: !1,
        markdownCaptions: !1,
        withWebp: !1,
        withAvif: !1,
        tracedSVG: !1,
        loading: 'lazy',
        disableBgImageOnAlpha: !1,
        disableBgImage: !1,
      }),
      (e.EMPTY_ALT = 'GATSBY_EMPTY_ALT'),
      (e.imageClass = 'gatsby-resp-image-image'),
      (e.imageWrapperClass = 'gatsby-resp-image-wrapper'),
      (e.imageBackgroundClass = 'gatsby-resp-image-background-image');
    },
    oEtG: function(t, e, n) {
      const r = n('wE6v');
      const o = n('2bX/');
      t.exports = function(t) {
        const e = r(t, 'string');
        return o(e) ? e : String(e);
      };
    },
    pVnL: function(t, e) {
      function n() {
        return (
          (t.exports = n =
            Object.assign ||
            function(t) {
              for (let e = 1; e < arguments.length; e++) {
                const n = arguments[e];
                for (const r in n) {Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);}
              }
              return t;
            }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0),
          n.apply(this, arguments)
        );
      }
      (t.exports = n), (t.exports.default = t.exports), (t.exports.__esModule = !0);
    },
    pWkz: function(t, e, n) {
      'use strict';
      (e.__esModule = !0), (e.onRouteUpdate = void 0);
      e.onRouteUpdate = function(t, e) {
        const n = t.location;
        if ((void 0 === e && (e = {}), 'function' !== typeof ga)) {return null;}
        if (
          n &&
          void 0 !== window.excludeGAPaths &&
          window.excludeGAPaths.some(function(t) {
            return t.test(n.pathname);
          })
        ) {return null;}
        const r = Math.max(32, e.pageTransitionDelay || 0);
        return (
          setTimeout(function() {
            const t = n ? n.pathname + n.search + n.hash : void 0;
            window.ga('set', 'page', t), window.ga('send', 'pageview');
          }, r),
          null
        );
      };
    },
    pkCn: function(t, e, n) {
      'use strict';
      const r = n('0Dky');
      t.exports = function(t, e) {
        const n = [][t];
        return (
          !!n &&
          r(function() {
            n.call(
              null,
              e ||
                function() {
                  throw 1;
                },
              1,
            );
          })
        );
      };
    },
    ppGB: function(t, e) {
      const n = Math.ceil;
      const r = Math.floor;
      t.exports = function(t) {
        return isNaN((t = +t)) ? 0 : (t > 0 ? r : n)(t);
      };
    },
    q9nr: function(t, e, n) {
      'use strict';
      const r = n('nwwn');
      const o = r.DEFAULT_OPTIONS;
      const a = r.imageClass;
      const i = r.imageBackgroundClass;
      const u = r.imageWrapperClass;
      e.onRouteUpdate = function(t, e) {
        for (
          var n = Object.assign({}, o, e),
            r = document.querySelectorAll(`.${  u}`),
            c = function(t) {
              const e = r[t];
              const o = e.querySelector(`.${  i}`);
              const u = e.querySelector(`.${  a}`);
              const c = function() {
                (o.style.transition = 'opacity 0.5s 0.5s'),
                (u.style.transition = 'opacity 0.5s'),
                s();
              };
              var s = function t() {
                (o.style.opacity = 0),
                (u.style.opacity = 1),
                (u.style.color = 'inherit'),
                (u.style.boxShadow = `inset 0px 0px 0px 400px ${  n.backgroundColor}`),
                u.removeEventListener('load', c),
                u.removeEventListener('error', t);
              };
              (u.style.opacity = 0),
              u.addEventListener('load', c),
              u.addEventListener('error', s),
              u.complete && s();
            },
            s = 0;
          s < r.length;
          s++
        ) {c(s);}
      };
    },
    rzlk: function(t, e, n) {
      'use strict';
      n.r(e);
      const r = n('q1tI');
      const o = n.n(r);
      const a = n('emEt');
      const i = n('IOVJ');
      e.default = function(t) {
        const e = t.location;
        const n = a.default.loadPageSync(e.pathname);
        return n
          ? o.a.createElement(i.a, Object.assign({ location: e, pageResources: n }, n.json))
          : null;
      };
    },
    tiKp: function(t, e, n) {
      const r = n('2oRo');
      const o = n('VpIT');
      const a = n('UTVS');
      const i = n('kOOl');
      const u = n('STAE');
      const c = n('/b8u');
      const s = o('wks');
      const l = r.Symbol;
      const p = c ? l : (l && l.withoutSetter) || i;
      t.exports = function(t) {
        return (
          (a(s, t) && (u || 'string' === typeof s[t])) ||
            (u && a(l, t) ? (s[t] = l[t]) : (s[t] = p(`Symbol.${  t}`))),
          s[t]
        );
      };
    },
    wE6v: function(t, e, n) {
      const r = n('hh1v');
      const o = n('2bX/');
      const a = n('SFrS');
      const i = n('tiKp')('toPrimitive');
      t.exports = function(t, e) {
        if (!r(t) || o(t)) {return t;}
        let n;
        const u = t[i];
        if (void 0 !== u) {
          if ((void 0 === e && (e = 'default'), (n = u.call(t, e)), !r(n) || o(n))) {return n;}
          throw TypeError('Can\'t convert object to primitive value');
        }
        return void 0 === e && (e = 'number'), a(t, e);
      };
    },
    xDBR: function(t, e) {
      t.exports = !1;
    },
    xrYK: function(t, e) {
      const n = {}.toString;
      t.exports = function(t) {
        return n.call(t).slice(8, -1);
      };
    },
    xs3f: function(t, e, n) {
      const r = n('2oRo');
      const o = n('zk60');
      const a = r['__core-js_shared__'] || o('__core-js_shared__', {});
      t.exports = a;
    },
    xtsi: function(t, e, n) {
      n('E9XD');
      const r = n('LeKB');
      const o = n('emEt').publicLoader;
      const a = o.getResourcesForPathname;
      const i = o.getResourcesForPathnameSync;
      const u = o.getResourceURLsForPathname;
      const c = o.loadPage;
      const s = o.loadPageSync;
      (e.apiRunner = function(t, e, n, o) {
        void 0 === e && (e = {});
        let l = r.map(function(n) {
          if (n.plugin[t]) {
            (e.getResourcesForPathnameSync = i),
            (e.getResourcesForPathname = a),
            (e.getResourceURLsForPathname = u),
            (e.loadPage = c),
            (e.loadPageSync = s);
            const r = n.plugin[t](e, n.options);
            return r && o && (e = o({ args: e, result: r, plugin: n })), r;
          }
        });
        return (l = l.filter(function(t) {
          return void 0 !== t;
        })).length > 0
          ? l
          : n
            ? [n]
            : [];
      }),
      (e.apiRunnerAsync = function(t, e, n) {
        return r.reduce(function(n, r) {
          return r.plugin[t]
            ? n.then(function() {
              return r.plugin[t](e, r.options);
            })
            : n;
        }, Promise.resolve());
      });
    },
    yLpj: function(t, e) {
      let n;
      n = (function() {
        return this;
      })();
      try {
        n = n || new Function('return this')();
      } catch (r) {
        'object' === typeof window && (n = window);
      }
      t.exports = n;
    },
    yoRg: function(t, e, n) {
      const r = n('UTVS');
      const o = n('/GqU');
      const a = n('TWQb').indexOf;
      const i = n('0BK2');
      t.exports = function(t, e) {
        let n;
        const u = o(t);
        let c = 0;
        const s = [];
        for (n in u) {!r(i, n) && r(u, n) && s.push(n);}
        for (; e.length > c; ) {r(u, (n = e[c++])) && (~a(s, n) || s.push(n));}
        return s;
      };
    },
    zBJ4: function(t, e, n) {
      const r = n('2oRo');
      const o = n('hh1v');
      const a = r.document;
      const i = o(a) && o(a.createElement);
      t.exports = function(t) {
        return i ? a.createElement(t) : {};
      };
    },
    zk60: function(t, e, n) {
      const r = n('2oRo');
      t.exports = function(t, e) {
        try {
          Object.defineProperty(r, t, { value: e, configurable: !0, writable: !0 });
        } catch (n) {
          r[t] = e;
        }
        return e;
      };
    },
  },
  [['UxWs', 1, 11]],
]);
//# sourceMappingURL=app-71779fa3918fbf95bcc6.js.map
