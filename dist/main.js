(() => {
  'use strict';
  var n = {
      56: (n, e, t) => {
        n.exports = function (n) {
          var e = t.nc;
          e && n.setAttribute('nonce', e);
        };
      },
      72: (n) => {
        var e = [];
        function t(n) {
          for (var t = -1, o = 0; o < e.length; o++)
            if (e[o].identifier === n) {
              t = o;
              break;
            }
          return t;
        }
        function o(n, o) {
          for (var a = {}, c = [], i = 0; i < n.length; i++) {
            var d = n[i],
              s = o.base ? d[0] + o.base : d[0],
              l = a[s] || 0,
              u = ''.concat(s, ' ').concat(l);
            a[s] = l + 1;
            var f = t(u),
              p = {
                css: d[1],
                media: d[2],
                sourceMap: d[3],
                supports: d[4],
                layer: d[5],
              };
            if (-1 !== f) (e[f].references++, e[f].updater(p));
            else {
              var b = r(p, o);
              ((o.byIndex = i),
                e.splice(i, 0, { identifier: u, updater: b, references: 1 }));
            }
            c.push(u);
          }
          return c;
        }
        function r(n, e) {
          var t = e.domAPI(e);
          return (
            t.update(n),
            function (e) {
              if (e) {
                if (
                  e.css === n.css &&
                  e.media === n.media &&
                  e.sourceMap === n.sourceMap &&
                  e.supports === n.supports &&
                  e.layer === n.layer
                )
                  return;
                t.update((n = e));
              } else t.remove();
            }
          );
        }
        n.exports = function (n, r) {
          var a = o((n = n || []), (r = r || {}));
          return function (n) {
            n = n || [];
            for (var c = 0; c < a.length; c++) {
              var i = t(a[c]);
              e[i].references--;
            }
            for (var d = o(n, r), s = 0; s < a.length; s++) {
              var l = t(a[s]);
              0 === e[l].references && (e[l].updater(), e.splice(l, 1));
            }
            a = d;
          };
        };
      },
      113: (n) => {
        n.exports = function (n, e) {
          if (e.styleSheet) e.styleSheet.cssText = n;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n));
          }
        };
      },
      208: (n, e, t) => {
        t.d(e, { A: () => i });
        var o = t(601),
          r = t.n(o),
          a = t(314),
          c = t.n(a)()(r());
        c.push([
          n.id,
          'body {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  background-color: #f2f2f2;\n}\n\n.container {\n  max-width: 1200px;\n  height: 100vh;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 40px;\n  justify-content: center;\n  align-items: center;\n  background-color: #ffffff;\n}\n\n.calculator {\n  display: grid;\n  grid-template-columns: repeat(4, 60px);\n  background-color: #494848;\n  border-radius: 10px;\n  box-shadow: 5px 5px 20px rgba(38, 38, 38);\n  border: 1px solid black;\n}\n\n.calcDisplay {\n  grid-column: span 4;\n  text-align: right;\n  font-size: 30px;\n  font-weight: 100;\n  padding: 10px;\n  border: none;\n  height: 60px;\n  border-radius: 10px 10px 0 0;\n  background-color: #5f5f5f;\n  color: #f2f2f2;\n}\n\n.btn {\n  border: 1px solid gray;\n  height: 50px;\n  font-size: 22px;\n  color: #f2f2f2;\n  background-color: #959595;\n  cursor: pointer;\n}\n\n.btn:nth-last-child(3) {\n  border-bottom-left-radius: 10px;\n}\n\n.btn:last-child {\n  border-bottom-right-radius: 10px;\n}\n\n.btn-sign {\n  background-color: #e28a0e;\n}\n\n.btn-action {\n  background-color: #737373;\n}\n\n.btn-zero {\n  grid-column: span 2;\n}\n\n.toggleThemeBtn {\n  padding: 5px 10px;\n  cursor: pointer;\n  border: none;\n  border-radius: 5px;\n}\n\n.toggleThemeBtn:hover {\n  background-color: #d1d1d1;\n}\n\n/* Dark styles */\nbody.dark-mode {\n  background-color: #1a1a1a;\n}\n\nbody.dark-mode .container {\n  background: #3f3f3f;\n  color: #fff;\n}\n\nbody.dark-mode .calculator {\n  background: #b3b3b3;\n  border: 1px solid #fff;\n}\n\nbody.dark-mode .btn {\n  background-color: #b3b3b3;\n  color: #fff;\n}\n\nbody.dark-mode .btn-sign {\n  background-color: #343434;\n}\n\nbody.dark-mode .btn-action {\n  background-color: #737373;\n}\n\nbody.dark-mode .toggleThemeBtn {\n  background-color: #221e1e;\n  color: #fff;\n}\n\nbody.dark-mode .toggleThemeBtn:hover {\n  background-color: #313131;\n}\n',
          '',
        ]);
        const i = c;
      },
      314: (n) => {
        n.exports = function (n) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var t = '',
                  o = void 0 !== e[5];
                return (
                  e[4] && (t += '@supports ('.concat(e[4], ') {')),
                  e[2] && (t += '@media '.concat(e[2], ' {')),
                  o &&
                    (t += '@layer'.concat(
                      e[5].length > 0 ? ' '.concat(e[5]) : '',
                      ' {',
                    )),
                  (t += n(e)),
                  o && (t += '}'),
                  e[2] && (t += '}'),
                  e[4] && (t += '}'),
                  t
                );
              }).join('');
            }),
            (e.i = function (n, t, o, r, a) {
              'string' == typeof n && (n = [[null, n, void 0]]);
              var c = {};
              if (o)
                for (var i = 0; i < this.length; i++) {
                  var d = this[i][0];
                  null != d && (c[d] = !0);
                }
              for (var s = 0; s < n.length; s++) {
                var l = [].concat(n[s]);
                (o && c[l[0]]) ||
                  (void 0 !== a &&
                    (void 0 === l[5] ||
                      (l[1] = '@layer'
                        .concat(l[5].length > 0 ? ' '.concat(l[5]) : '', ' {')
                        .concat(l[1], '}')),
                    (l[5] = a)),
                  t &&
                    (l[2]
                      ? ((l[1] = '@media '
                          .concat(l[2], ' {')
                          .concat(l[1], '}')),
                        (l[2] = t))
                      : (l[2] = t)),
                  r &&
                    (l[4]
                      ? ((l[1] = '@supports ('
                          .concat(l[4], ') {')
                          .concat(l[1], '}')),
                        (l[4] = r))
                      : (l[4] = ''.concat(r))),
                  e.push(l));
              }
            }),
            e
          );
        };
      },
      540: (n) => {
        n.exports = function (n) {
          var e = document.createElement('style');
          return (n.setAttributes(e, n.attributes), n.insert(e, n.options), e);
        };
      },
      601: (n) => {
        n.exports = function (n) {
          return n[1];
        };
      },
      659: (n) => {
        var e = {};
        n.exports = function (n, t) {
          var o = (function (n) {
            if (void 0 === e[n]) {
              var t = document.querySelector(n);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (n) {
                  t = null;
                }
              e[n] = t;
            }
            return e[n];
          })(n);
          if (!o)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          o.appendChild(t);
        };
      },
      825: (n) => {
        n.exports = function (n) {
          if ('undefined' == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = n.insertStyleElement(n);
          return {
            update: function (t) {
              !(function (n, e, t) {
                var o = '';
                (t.supports && (o += '@supports ('.concat(t.supports, ') {')),
                  t.media && (o += '@media '.concat(t.media, ' {')));
                var r = void 0 !== t.layer;
                (r &&
                  (o += '@layer'.concat(
                    t.layer.length > 0 ? ' '.concat(t.layer) : '',
                    ' {',
                  )),
                  (o += t.css),
                  r && (o += '}'),
                  t.media && (o += '}'),
                  t.supports && (o += '}'));
                var a = t.sourceMap;
                (a &&
                  'undefined' != typeof btoa &&
                  (o +=
                    '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      ' */',
                    )),
                  e.styleTagTransform(o, n, e.options));
              })(e, n, t);
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n);
              })(e);
            },
          };
        };
      },
    },
    e = {};
  function t(o) {
    var r = e[o];
    if (void 0 !== r) return r.exports;
    var a = (e[o] = { id: o, exports: {} });
    return (n[o](a, a.exports, t), a.exports);
  }
  ((t.n = (n) => {
    var e = n && n.__esModule ? () => n.default : () => n;
    return (t.d(e, { a: e }), e);
  }),
    (t.d = (n, e) => {
      for (var o in e)
        t.o(e, o) &&
          !t.o(n, o) &&
          Object.defineProperty(n, o, { enumerable: !0, get: e[o] });
    }),
    (t.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e)),
    (t.nc = void 0));
  let o = '0',
    r = null,
    a = null;
  function c() {
    return o;
  }
  function i(n) {
    o = n;
  }
  function d(n) {
    r = n;
  }
  function s() {
    return a;
  }
  function l(n) {
    a = n;
  }
  function u(n) {
    let e = c();
    ('0' === e && '.' !== n && (e = ''),
      ('.' === n && e.includes('.')) || i(e + n));
  }
  function f(n) {
    (null !== s() && p(), d(parseFloat(c())), l(n), i('0'));
  }
  function p() {
    const n = s();
    if (null === n || null === r) return;
    const e = r,
      t = parseFloat(c());
    let o;
    switch (n) {
      case '+':
        o = (function (n, e) {
          return n + e;
        })(e, t);
        break;
      case '-':
        o = (function (n, e) {
          return n - e;
        })(e, t);
        break;
      case '*':
        o = (function (n, e) {
          return n * e;
        })(e, t);
        break;
      case '/':
        o = (function (n, e) {
          return 0 === e ? 0 : n / e;
        })(e, t);
    }
    (i(String(o)), l(null), d(null));
  }
  function b() {
    const n = c();
    '0' !== n && i(n.startsWith('-') ? n.slice(1) : '-' + n);
  }
  function m() {
    const n = parseFloat(c());
    i(String(n / 100));
  }
  function g() {
    ((o = '0'), (r = null), (a = null));
  }
  var h = t(72),
    v = t.n(h),
    y = t(825),
    x = t.n(y),
    k = t(659),
    C = t.n(k),
    E = t(56),
    T = t.n(E),
    L = t(540),
    S = t.n(L),
    w = t(113),
    A = t.n(w),
    M = t(208),
    I = {};
  ((I.styleTagTransform = A()),
    (I.setAttributes = T()),
    (I.insert = C().bind(null, 'head')),
    (I.domAPI = x()),
    (I.insertStyleElement = S()),
    v()(M.A, I),
    M.A && M.A.locals && M.A.locals,
    document.addEventListener('DOMContentLoaded', () => {
      !(function () {
        const n = document.querySelector('.container'),
          e = document.createElement('div');
        (e.classList.add('calculator'), n.appendChild(e));
        const t = document.createElement('button');
        (t.classList.add('toggleThemeBtn'),
          (t.textContent = 'Change Theme'),
          n.appendChild(t),
          t.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const n = document.body.classList.contains('dark-mode');
            localStorage.setItem('theme', n ? 'dark' : 'light');
          }),
          'dark' === localStorage.getItem('theme') &&
            document.body.classList.add('dark-mode'));
        const o = document.createElement('input');
        function r(n, t, r = '') {
          const a = document.createElement('button');
          ((a.textContent = n),
            (a.className = `btn ${r}`),
            (a.onclick = () => {
              (t(), (o.value = c()));
            }),
            e.appendChild(a));
        }
        ((o.value = c()),
          (o.readOnly = !0),
          (o.id = 'calc-display'),
          o.classList.add('calcDisplay'),
          e.appendChild(o),
          r('C', g, 'btn-action'),
          r('+/-', b, 'btn-action'),
          r('%', m, 'btn-action'),
          r('/', () => f('/'), 'btn-sign'),
          ['7', '8', '9'].forEach((n) => r(n, () => u(n))),
          r('×', () => f('*'), 'btn-sign'),
          ['4', '5', '6'].forEach((n) => r(n, () => u(n))),
          r('-', () => f('-'), 'btn-sign'),
          ['1', '2', '3'].forEach((n) => r(n, () => u(n))),
          r('+', () => f('+'), 'btn-sign'),
          r('0', () => u('0'), 'btn-zero'),
          r('.', () => u('.')),
          r('=', p, 'btn-sign'));
      })();
    }));
})();
