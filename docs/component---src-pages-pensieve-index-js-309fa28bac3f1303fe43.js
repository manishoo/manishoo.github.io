(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    '/9aa': function(e, t, n) {
      const o = n('NykK');
      const r = n('ExA7');
      e.exports = function(e) {
        return 'symbol' === typeof e || (r(e) && '[object Symbol]' == o(e));
      };
    },
    '3cYt': function(e, t) {
      e.exports = function(e) {
        return function(t) {
          return null == e ? void 0 : e[t];
        };
      };
    },
    '6nK8': function(e, t, n) {
      const o = n('dVn5');
      const r = n('fo6e');
      const a = n('dt0z');
      const i = n('9NmV');
      e.exports = function(e, t, n) {
        return (
          (e = a(e)), void 0 === (t = n ? void 0 : t) ? (r(e) ? i(e) : o(e)) : e.match(t) || []
        );
      };
    },
    '9NmV': function(e, t) {
      const n =
          '\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000';
      const o = `[${  n  }]`;
      const r = '\\d+';
      const a = '[\\u2700-\\u27bf]';
      const i = '[a-z\\xdf-\\xf6\\xf8-\\xff]';
      const l =
          `[^\\ud800-\\udfff${ 
            n 
          }${r 
          }\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]`;
      const u = '(?:\\ud83c[\\udde6-\\uddff]){2}';
      const f = '[\\ud800-\\udbff][\\udc00-\\udfff]';
      const c = '[A-Z\\xc0-\\xd6\\xd8-\\xde]';
      const s = `(?:${  i  }|${  l  })`;
      const d = `(?:${  c  }|${  l  })`;
      const p = '(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?';
      const m =
          `[\\ufe0e\\ufe0f]?${ 
            p 
          }(?:\\u200d(?:${ 
            ['[^\\ud800-\\udfff]', u, f].join('|') 
          })[\\ufe0e\\ufe0f]?${ 
            p 
          })*`;
      const x = `(?:${  [a, u, f].join('|')  })${  m}`;
      const v = RegExp(
        [
          `${c  }?${  i  }+(?:['’](?:d|ll|m|re|s|t|ve))?(?=${  [o, c, '$'].join('|')  })`,
          `${d  }+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=${  [o, c + s, '$'].join('|')  })`,
          `${c  }?${  s  }+(?:['’](?:d|ll|m|re|s|t|ve))?`,
          `${c  }+(?:['’](?:D|LL|M|RE|S|T|VE))?`,
          '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
          '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
          r,
          x,
        ].join('|'),
        'g',
      );
      e.exports = function(e) {
        return e.match(v) || [];
      };
    },
    AP2z: function(e, t, n) {
      const o = n('nmnc');
      const r = Object.prototype;
      const a = r.hasOwnProperty;
      const i = r.toString;
      const l = o ? o.toStringTag : void 0;
      e.exports = function(e) {
        const t = a.call(e, l);
        const n = e[l];
        try {
          e[l] = void 0;
          var o = !0;
        } catch (u) {}
        const r = i.call(e);
        return o && (t ? (e[l] = n) : delete e[l]), r;
      };
    },
    ExA7: function(e, t) {
      e.exports = function(e) {
        return null != e && 'object' === typeof e;
      };
    },
    KfNM: function(e, t) {
      const n = Object.prototype.toString;
      e.exports = function(e) {
        return n.call(e);
      };
    },
    Kz5y: function(e, t, n) {
      const o = n('WFqU');
      const r = 'object' === typeof self && self && self.Object === Object && self;
      const a = o || r || Function('return this')();
      e.exports = a;
    },
    N1om: function(e, t, n) {
      const o = n('sgoq')(function(e, t, n) {
        return e + (n ? '-' : '') + t.toLowerCase();
      });
      e.exports = o;
    },
    NykK: function(e, t, n) {
      const o = n('nmnc');
      const r = n('AP2z');
      const a = n('KfNM');
      const i = o ? o.toStringTag : void 0;
      e.exports = function(e) {
        return null == e
          ? void 0 === e
            ? '[object Undefined]'
            : '[object Null]'
          : i && i in Object(e)
            ? r(e)
            : a(e);
      };
    },
    SqBY: function(e, t, n) {
      'use strict';
      n.r(t);
      const o = n('q1tI');
      const r = n.n(o);
      const a = n('Wbzz');
      const i = n('N1om');
      const l = n.n(i);
      const u = n('qhky');
      const f = n('vOnD');
      const c = n('Kvkj');
      const s = n('g67X');
      const d = f.d.main.withConfig({
        displayName: 'pensieve__StyledMainContainer',
        componentId: 'sc-jb5p05-0',
      })(
        [
          '& > header{margin-bottom:100px;text-align:center;a{&:hover,&:focus{cursor:url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'40\' height=\'48\' viewport=\'0 0 100 100\' style=\'fill:black;font-size:24px;\'><text y=\'50%\'>⚡</text></svg>") 20 0,auto;}}}footer{',
          ';width:100%;margin-top:20px;}',
        ],
        function(e) {
          return e.theme.mixins.flexBetween;
        },
      );
      const p = f.d.div.withConfig({ displayName: 'pensieve__StyledGrid', componentId: 'sc-jb5p05-1' })(
        [
          'margin-top:50px;.posts{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));grid-gap:15px;position:relative;@media (max-width:1080px){grid-template-columns:repeat(auto-fill,minmax(250px,1fr));}}',
        ],
      );
      const m = f.d.div.withConfig({
        displayName: 'pensieve__StyledPostInner',
        componentId: 'sc-jb5p05-2',
      })(
        [
          '',
          ';',
          ';flex-direction:column;align-items:flex-start;position:relative;height:100%;padding:2rem 1.75rem;border-radius:var(--border-radius);transition:var(--transition);background-color:var(--light-navy);header,a{width:100%;}',
        ],
        function(e) {
          return e.theme.mixins.boxShadow;
        },
        function(e) {
          return e.theme.mixins.flexBetween;
        },
      );
      const x = f.d.div.withConfig({ displayName: 'pensieve__StyledPost', componentId: 'sc-jb5p05-3' })(
        [
          'transition:var(--transition);cursor:default;&:hover,&:focus{outline:0;',
          '{transform:translateY(-5px);}}',
        ],
        m,
      );
      const v = f.d.div.withConfig({
        displayName: 'pensieve__StyledPostHeader',
        componentId: 'sc-jb5p05-4',
      })(['', ';margin-bottom:30px;'], function(e) {
        return e.theme.mixins.flexBetween;
      });
      const g = f.d.div.withConfig({
        displayName: 'pensieve__StyledFolder',
        componentId: 'sc-jb5p05-5',
      })(['color:var(--green);svg{width:40px;height:40px;}']);
      const h = f.d.h5.withConfig({
        displayName: 'pensieve__StyledPostName',
        componentId: 'sc-jb5p05-6',
      })(['margin:0 0 10px;color:var(--lightest-slate);font-size:var(--fz-xxl);']);
      const y = f.d.div.withConfig({
        displayName: 'pensieve__StyledPostDescription',
        componentId: 'sc-jb5p05-7',
      })(['color:var(--light-slate);font-size:17px;']);
      const b = f.d.span.withConfig({
        displayName: 'pensieve__StyledDate',
        componentId: 'sc-jb5p05-8',
      })([
        'color:var(--light-slate);font-family:var(--font-mono);font-size:var(--fz-xxs);text-transform:uppercase;',
      ]);
      const w = f.d.ul.withConfig({ displayName: 'pensieve__StyledTags', componentId: 'sc-jb5p05-9' })([
        'display:flex;align-items:flex-end;flex-wrap:wrap;padding:0;margin:0;list-style:none;li{color:var(--green);font-family:var(--font-mono);font-size:var(--fz-xxs);line-height:1.75;&:not(:last-of-type){margin-right:15px;}}',
      ]);
      t.default = function(e) {
        const t = e.location;
        const n = e.data.allMarkdownRemark.edges;
        return r.a.createElement(
          c.h,
          { location: t },
          r.a.createElement(u.a, { title: 'Pensieve' }),
          r.a.createElement(
            d,
            null,
            r.a.createElement(
              'header',
              null,
              r.a.createElement('h1', { className: 'big-heading' }, 'Pensieve'),
              r.a.createElement(
                'p',
                { className: 'subtitle' },
                r.a.createElement(
                  'a',
                  { href: 'https://www.wizardingworld.com/writing-by-jk-rowling/pensieve' },
                  'a collection of memories',
                ),
              ),
            ),
            r.a.createElement(
              p,
              null,
              r.a.createElement(
                'div',
                { className: 'posts' },
                n.length > 0 &&
                  n.map(function(e, t) {
                    const n = e.node.frontmatter;
                    const o = n.title;
                    const i = n.description;
                    const u = n.slug;
                    const f = n.date;
                    const c = n.tags;
                    const d = new Date(f);
                    return r.a.createElement(
                      x,
                      { key: t, tabIndex: '0' },
                      r.a.createElement(
                        m,
                        null,
                        r.a.createElement(
                          'header',
                          null,
                          r.a.createElement(
                            a.Link,
                            { to: u },
                            r.a.createElement(
                              v,
                              null,
                              r.a.createElement(g, null, r.a.createElement(s.o, null)),
                            ),
                            r.a.createElement(h, null, o),
                            r.a.createElement(y, null, i),
                          ),
                        ),
                        r.a.createElement(
                          'footer',
                          null,
                          r.a.createElement(b, null, `${  d.toLocaleDateString()}`),
                          r.a.createElement(
                            w,
                            null,
                            c.map(function(e, t) {
                              return r.a.createElement(
                                'li',
                                { key: t },
                                r.a.createElement(
                                  a.Link,
                                  {
                                    to: `/pensieve/tags/${  l()(e)  }/`,
                                    className: 'inline-link',
                                  },
                                  '#',
                                  e,
                                ),
                              );
                            }),
                          ),
                        ),
                      ),
                    );
                  }),
              ),
            ),
          ),
        );
      };
    },
    TKrE: function(e, t, n) {
      const o = n('qRkn');
      const r = n('dt0z');
      const a = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
      const i = RegExp('[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]', 'g');
      e.exports = function(e) {
        return (e = r(e)) && e.replace(a, o).replace(i, '');
      };
    },
    WFqU: function(e, t, n) {
      (function(t) {
        const n = 'object' === typeof t && t && t.Object === Object && t;
        e.exports = n;
      }.call(this, n('yLpj')));
    },
    Z0cm: function(e, t) {
      const n = Array.isArray;
      e.exports = n;
    },
    asDA: function(e, t) {
      e.exports = function(e, t, n, o) {
        let r = -1;
        const a = null == e ? 0 : e.length;
        for (o && a && (n = e[++r]); ++r < a; ) {n = t(n, e[r], r, e);}
        return n;
      };
    },
    dVn5: function(e, t) {
      const n = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
      e.exports = function(e) {
        return e.match(n) || [];
      };
    },
    dt0z: function(e, t, n) {
      const o = n('zoYe');
      e.exports = function(e) {
        return null == e ? '' : o(e);
      };
    },
    eUgh: function(e, t) {
      e.exports = function(e, t) {
        for (var n = -1, o = null == e ? 0 : e.length, r = Array(o); ++n < o; ) {r[n] = t(e[n], n, e);}
        return r;
      };
    },
    fo6e: function(e, t) {
      const n = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
      e.exports = function(e) {
        return n.test(e);
      };
    },
    nmnc: function(e, t, n) {
      const o = n('Kz5y').Symbol;
      e.exports = o;
    },
    qRkn: function(e, t, n) {
      const o = n('3cYt')({
        À: 'A',
        Á: 'A',
        Â: 'A',
        Ã: 'A',
        Ä: 'A',
        Å: 'A',
        à: 'a',
        á: 'a',
        â: 'a',
        ã: 'a',
        ä: 'a',
        å: 'a',
        Ç: 'C',
        ç: 'c',
        Ð: 'D',
        ð: 'd',
        È: 'E',
        É: 'E',
        Ê: 'E',
        Ë: 'E',
        è: 'e',
        é: 'e',
        ê: 'e',
        ë: 'e',
        Ì: 'I',
        Í: 'I',
        Î: 'I',
        Ï: 'I',
        ì: 'i',
        í: 'i',
        î: 'i',
        ï: 'i',
        Ñ: 'N',
        ñ: 'n',
        Ò: 'O',
        Ó: 'O',
        Ô: 'O',
        Õ: 'O',
        Ö: 'O',
        Ø: 'O',
        ò: 'o',
        ó: 'o',
        ô: 'o',
        õ: 'o',
        ö: 'o',
        ø: 'o',
        Ù: 'U',
        Ú: 'U',
        Û: 'U',
        Ü: 'U',
        ù: 'u',
        ú: 'u',
        û: 'u',
        ü: 'u',
        Ý: 'Y',
        ý: 'y',
        ÿ: 'y',
        Æ: 'Ae',
        æ: 'ae',
        Þ: 'Th',
        þ: 'th',
        ß: 'ss',
        Ā: 'A',
        Ă: 'A',
        Ą: 'A',
        ā: 'a',
        ă: 'a',
        ą: 'a',
        Ć: 'C',
        Ĉ: 'C',
        Ċ: 'C',
        Č: 'C',
        ć: 'c',
        ĉ: 'c',
        ċ: 'c',
        č: 'c',
        Ď: 'D',
        Đ: 'D',
        ď: 'd',
        đ: 'd',
        Ē: 'E',
        Ĕ: 'E',
        Ė: 'E',
        Ę: 'E',
        Ě: 'E',
        ē: 'e',
        ĕ: 'e',
        ė: 'e',
        ę: 'e',
        ě: 'e',
        Ĝ: 'G',
        Ğ: 'G',
        Ġ: 'G',
        Ģ: 'G',
        ĝ: 'g',
        ğ: 'g',
        ġ: 'g',
        ģ: 'g',
        Ĥ: 'H',
        Ħ: 'H',
        ĥ: 'h',
        ħ: 'h',
        Ĩ: 'I',
        Ī: 'I',
        Ĭ: 'I',
        Į: 'I',
        İ: 'I',
        ĩ: 'i',
        ī: 'i',
        ĭ: 'i',
        į: 'i',
        ı: 'i',
        Ĵ: 'J',
        ĵ: 'j',
        Ķ: 'K',
        ķ: 'k',
        ĸ: 'k',
        Ĺ: 'L',
        Ļ: 'L',
        Ľ: 'L',
        Ŀ: 'L',
        Ł: 'L',
        ĺ: 'l',
        ļ: 'l',
        ľ: 'l',
        ŀ: 'l',
        ł: 'l',
        Ń: 'N',
        Ņ: 'N',
        Ň: 'N',
        Ŋ: 'N',
        ń: 'n',
        ņ: 'n',
        ň: 'n',
        ŋ: 'n',
        Ō: 'O',
        Ŏ: 'O',
        Ő: 'O',
        ō: 'o',
        ŏ: 'o',
        ő: 'o',
        Ŕ: 'R',
        Ŗ: 'R',
        Ř: 'R',
        ŕ: 'r',
        ŗ: 'r',
        ř: 'r',
        Ś: 'S',
        Ŝ: 'S',
        Ş: 'S',
        Š: 'S',
        ś: 's',
        ŝ: 's',
        ş: 's',
        š: 's',
        Ţ: 'T',
        Ť: 'T',
        Ŧ: 'T',
        ţ: 't',
        ť: 't',
        ŧ: 't',
        Ũ: 'U',
        Ū: 'U',
        Ŭ: 'U',
        Ů: 'U',
        Ű: 'U',
        Ų: 'U',
        ũ: 'u',
        ū: 'u',
        ŭ: 'u',
        ů: 'u',
        ű: 'u',
        ų: 'u',
        Ŵ: 'W',
        ŵ: 'w',
        Ŷ: 'Y',
        ŷ: 'y',
        Ÿ: 'Y',
        Ź: 'Z',
        Ż: 'Z',
        Ž: 'Z',
        ź: 'z',
        ż: 'z',
        ž: 'z',
        Ĳ: 'IJ',
        ĳ: 'ij',
        Œ: 'Oe',
        œ: 'oe',
        ŉ: '\'n',
        ſ: 's',
      });
      e.exports = o;
    },
    sgoq: function(e, t, n) {
      const o = n('asDA');
      const r = n('TKrE');
      const a = n('6nK8');
      const i = RegExp('[\'’]', 'g');
      e.exports = function(e) {
        return function(t) {
          return o(a(r(t).replace(i, '')), e, '');
        };
      };
    },
    zoYe: function(e, t, n) {
      const o = n('nmnc');
      const r = n('eUgh');
      const a = n('Z0cm');
      const i = n('/9aa');
      const l = o ? o.prototype : void 0;
      const u = l ? l.toString : void 0;
      e.exports = function e(t) {
        if ('string' === typeof t) {return t;}
        if (a(t)) {return `${r(t, e)  }`;}
        if (i(t)) {return u ? u.call(t) : '';}
        const n = `${t  }`;
        return '0' == n && 1 / t == -1 / 0 ? '-0' : n;
      };
    },
  },
]);
//# sourceMappingURL=component---src-pages-pensieve-index-js-309fa28bac3f1303fe43.js.map
