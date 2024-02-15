/*!
 * Bootstrap v5.1.3 (https://getbootstrap.com/)
 * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : ((t =
        "undefined" != typeof globalThis ? globalThis : t || self).bootstrap =
        e());
})(this, function () {
  "use strict";
  const t = (t) => {
      do {
        t += Math.floor(1e6 * Math.random());
      } while (document.getElementById(t));
      return t;
    },
    e = (t) => {
      let e = t.getAttribute("data-bs-target");
      if (!e || "#" === e) {
        let i = t.getAttribute("href");
        if (!i || (!i.includes("#") && !i.startsWith("."))) return null;
        i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`),
          (e = i && "#" !== i ? i.trim() : null);
      }
      return e;
    },
    i = (t) => {
      const i = e(t);
      return i && document.querySelector(i) ? i : null;
    },
    n = (t) => {
      const i = e(t);
      return i ? document.querySelector(i) : null;
    },
    s = (t) => {
      t.dispatchEvent(new Event("transitionend"));
    },
    o = (t) =>
      !(!t || "object" != typeof t) &&
      (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
    r = (t) =>
      o(t)
        ? t.jquery
          ? t[0]
          : t
        : "string" == typeof t && t.length > 0
        ? document.querySelector(t)
        : null,
    a = (t, e, i) => {
      Object.keys(i).forEach((n) => {
        const s = i[n],
          r = e[n],
          a =
            r && o(r)
              ? "element"
              : ((t) =>
                  null == t
                    ? `${t}`
                    : {}.toString
                        .call(t)
                        .match(/\s([a-z]+)/i)[1]
                        .toLowerCase())(r);
        if (!new RegExp(s).test(a))
          throw new TypeError(
            `${t.toUpperCase()}: Option "${n}" provided type "${a}" but expected type "${s}".`
          );
      });
    },
    l = (t) =>
      !(!o(t) || 0 === t.getClientRects().length) &&
      "visible" === getComputedStyle(t).getPropertyValue("visibility"),
    c = (t) =>
      !t ||
      t.nodeType !== Node.ELEMENT_NODE ||
      !!t.classList.contains("disabled") ||
      (void 0 !== t.disabled
        ? t.disabled
        : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")),
    h = (t) => {
      if (!document.documentElement.attachShadow) return null;
      if ("function" == typeof t.getRootNode) {
        const e = t.getRootNode();
        return e instanceof ShadowRoot ? e : null;
      }
      return t instanceof ShadowRoot
        ? t
        : t.parentNode
        ? h(t.parentNode)
        : null;
    },
    d = () => {},
    u = (t) => {
      t.offsetHeight;
    },
    f = () => {
      const { jQuery: t } = window;
      return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null;
    },
    p = [],
    g = () => "rtl" === document.documentElement.dir,
    m = (t) => {
      ((t) => {
        "loading" === document.readyState
          ? (p.length ||
              document.addEventListener("DOMContentLoaded", () => {
                p.forEach((t) => t());
              }),
            p.push(t))
          : t();
      })(() => {
        const e = f();
        if (e) {
          const i = t.NAME,
            n = e.fn[i];
          (e.fn[i] = t.jQueryInterface),
            (e.fn[i].Constructor = t),
            (e.fn[i].noConflict = () => ((e.fn[i] = n), t.jQueryInterface));
        }
      });
    },
    _ = (t) => {
      "function" == typeof t && t();
    },
    b = (t, e, i = !0) => {
      if (!i) return void _(t);
      const n =
        ((t) => {
          if (!t) return 0;
          let { transitionDuration: e, transitionDelay: i } =
            window.getComputedStyle(t);
          const n = Number.parseFloat(e),
            s = Number.parseFloat(i);
          return n || s
            ? ((e = e.split(",")[0]),
              (i = i.split(",")[0]),
              1e3 * (Number.parseFloat(e) + Number.parseFloat(i)))
            : 0;
        })(e) + 5;
      let o = !1;
      const r = ({ target: i }) => {
        i === e && ((o = !0), e.removeEventListener("transitionend", r), _(t));
      };
      e.addEventListener("transitionend", r),
        setTimeout(() => {
          o || s(e);
        }, n);
    },
    v = (t, e, i, n) => {
      let s = t.indexOf(e);
      if (-1 === s) return t[!i && n ? t.length - 1 : 0];
      const o = t.length;
      return (
        (s += i ? 1 : -1),
        n && (s = (s + o) % o),
        t[Math.max(0, Math.min(s, o - 1))]
      );
    },
    y = /[^.]*(?=\..*)\.|.*/,
    w = /\..*/,
    E = /::\d+$/,
    A = {};
  let T = 1;
  const O = { mouseenter: "mouseover", mouseleave: "mouseout" },
    C = /^(mouseenter|mouseleave)/i,
    k = new Set([
      "click",
      "dblclick",
      "mouseup",
      "mousedown",
      "contextmenu",
      "mousewheel",
      "DOMMouseScroll",
      "mouseover",
      "mouseout",
      "mousemove",
      "selectstart",
      "selectend",
      "keydown",
      "keypress",
      "keyup",
      "orientationchange",
      "touchstart",
      "touchmove",
      "touchend",
      "touchcancel",
      "pointerdown",
      "pointermove",
      "pointerup",
      "pointerleave",
      "pointercancel",
      "gesturestart",
      "gesturechange",
      "gestureend",
      "focus",
      "blur",
      "change",
      "reset",
      "select",
      "submit",
      "focusin",
      "focusout",
      "load",
      "unload",
      "beforeunload",
      "resize",
      "move",
      "DOMContentLoaded",
      "readystatechange",
      "error",
      "abort",
      "scroll",
    ]);
  function L(t, e) {
    return (e && `${e}::${T++}`) || t.uidEvent || T++;
  }
  function x(t) {
    const e = L(t);
    return (t.uidEvent = e), (A[e] = A[e] || {}), A[e];
  }
  function D(t, e, i = null) {
    const n = Object.keys(t);
    for (let s = 0, o = n.length; s < o; s++) {
      const o = t[n[s]];
      if (o.originalHandler === e && o.delegationSelector === i) return o;
    }
    return null;
  }
  function S(t, e, i) {
    const n = "string" == typeof e,
      s = n ? i : e;
    let o = P(t);
    return k.has(o) || (o = t), [n, s, o];
  }
  function N(t, e, i, n, s) {
    if ("string" != typeof e || !t) return;
    if ((i || ((i = n), (n = null)), C.test(e))) {
      const t = (t) =>
        function (e) {
          if (
            !e.relatedTarget ||
            (e.relatedTarget !== e.delegateTarget &&
              !e.delegateTarget.contains(e.relatedTarget))
          )
            return t.call(this, e);
        };
      n ? (n = t(n)) : (i = t(i));
    }
    const [o, r, a] = S(e, i, n),
      l = x(t),
      c = l[a] || (l[a] = {}),
      h = D(c, r, o ? i : null);
    if (h) return void (h.oneOff = h.oneOff && s);
    const d = L(r, e.replace(y, "")),
      u = o
        ? (function (t, e, i) {
            return function n(s) {
              const o = t.querySelectorAll(e);
              for (let { target: r } = s; r && r !== this; r = r.parentNode)
                for (let a = o.length; a--; )
                  if (o[a] === r)
                    return (
                      (s.delegateTarget = r),
                      n.oneOff && j.off(t, s.type, e, i),
                      i.apply(r, [s])
                    );
              return null;
            };
          })(t, i, n)
        : (function (t, e) {
            return function i(n) {
              return (
                (n.delegateTarget = t),
                i.oneOff && j.off(t, n.type, e),
                e.apply(t, [n])
              );
            };
          })(t, i);
    (u.delegationSelector = o ? i : null),
      (u.originalHandler = r),
      (u.oneOff = s),
      (u.uidEvent = d),
      (c[d] = u),
      t.addEventListener(a, u, o);
  }
  function I(t, e, i, n, s) {
    const o = D(e[i], n, s);
    o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent]);
  }
  function P(t) {
    return (t = t.replace(w, "")), O[t] || t;
  }
  const j = {
      on(t, e, i, n) {
        N(t, e, i, n, !1);
      },
      one(t, e, i, n) {
        N(t, e, i, n, !0);
      },
      off(t, e, i, n) {
        if ("string" != typeof e || !t) return;
        const [s, o, r] = S(e, i, n),
          a = r !== e,
          l = x(t),
          c = e.startsWith(".");
        if (void 0 !== o) {
          if (!l || !l[r]) return;
          return void I(t, l, r, o, s ? i : null);
        }
        c &&
          Object.keys(l).forEach((i) => {
            !(function (t, e, i, n) {
              const s = e[i] || {};
              Object.keys(s).forEach((o) => {
                if (o.includes(n)) {
                  const n = s[o];
                  I(t, e, i, n.originalHandler, n.delegationSelector);
                }
              });
            })(t, l, i, e.slice(1));
          });
        const h = l[r] || {};
        Object.keys(h).forEach((i) => {
          const n = i.replace(E, "");
          if (!a || e.includes(n)) {
            const e = h[i];
            I(t, l, r, e.originalHandler, e.delegationSelector);
          }
        });
      },
      trigger(t, e, i) {
        if ("string" != typeof e || !t) return null;
        const n = f(),
          s = P(e),
          o = e !== s,
          r = k.has(s);
        let a,
          l = !0,
          c = !0,
          h = !1,
          d = null;
        return (
          o &&
            n &&
            ((a = n.Event(e, i)),
            n(t).trigger(a),
            (l = !a.isPropagationStopped()),
            (c = !a.isImmediatePropagationStopped()),
            (h = a.isDefaultPrevented())),
          r
            ? (d = document.createEvent("HTMLEvents")).initEvent(s, l, !0)
            : (d = new CustomEvent(e, { bubbles: l, cancelable: !0 })),
          void 0 !== i &&
            Object.keys(i).forEach((t) => {
              Object.defineProperty(d, t, { get: () => i[t] });
            }),
          h && d.preventDefault(),
          c && t.dispatchEvent(d),
          d.defaultPrevented && void 0 !== a && a.preventDefault(),
          d
        );
      },
    },
    M = new Map(),
    $ = {
      set(t, e, i) {
        M.has(t) || M.set(t, new Map());
        const n = M.get(t);
        n.has(e) || 0 === n.size
          ? n.set(e, i)
          : console.error(
              `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
                Array.from(n.keys())[0]
              }.`
            );
      },
      get: (t, e) => (M.has(t) && M.get(t).get(e)) || null,
      remove(t, e) {
        if (!M.has(t)) return;
        const i = M.get(t);
        i.delete(e), 0 === i.size && M.delete(t);
      },
    },
    H = "5.1.3";
  class B {
    constructor(t) {
      (t = r(t)) &&
        ((this._element = t),
        $.set(this._element, this.constructor.DATA_KEY, this));
    }
    dispose() {
      $.remove(this._element, this.constructor.DATA_KEY),
        j.off(this._element, this.constructor.EVENT_KEY),
        Object.getOwnPropertyNames(this).forEach((t) => {
          this[t] = null;
        });
    }
    _queueCallback(t, e, i = !0) {
      b(t, e, i);
    }
    static getInstance(t) {
      return $.get(r(t), this.DATA_KEY);
    }
    static getOrCreateInstance(t, e = {}) {
      return (
        this.getInstance(t) || new this(t, "object" == typeof e ? e : null)
      );
    }
    static get VERSION() {
      return H;
    }
    static get NAME() {
      throw new Error(
        'You have to implement the static method "NAME", for each component!'
      );
    }
    static get DATA_KEY() {
      return `bs.${this.NAME}`;
    }
    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }
  }
  const R = (t, e = "hide") => {
      const i = `click.dismiss${t.EVENT_KEY}`,
        s = t.NAME;
      j.on(document, i, `[data-bs-dismiss="${s}"]`, function (i) {
        if (
          (["A", "AREA"].includes(this.tagName) && i.preventDefault(), c(this))
        )
          return;
        const o = n(this) || this.closest(`.${s}`);
        t.getOrCreateInstance(o)[e]();
      });
    },
    W = "alert",
    z = "close.bs.alert",
    q = "closed.bs.alert",
    F = "fade",
    U = "show";
  class V extends B {
    static get NAME() {
      return W;
    }
    close() {
      if (j.trigger(this._element, z).defaultPrevented) return;
      this._element.classList.remove(U);
      const t = this._element.classList.contains(F);
      this._queueCallback(() => this._destroyElement(), this._element, t);
    }
    _destroyElement() {
      this._element.remove(), j.trigger(this._element, q), this.dispose();
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = V.getOrCreateInstance(this);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  R(V, "close"), m(V);
  const K = "button",
    X = "active";
  class Y extends B {
    static get NAME() {
      return K;
    }
    toggle() {
      this._element.setAttribute(
        "aria-pressed",
        this._element.classList.toggle(X)
      );
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Y.getOrCreateInstance(this);
        "toggle" === t && e[t]();
      });
    }
  }
  function Q(t) {
    return (
      "true" === t ||
      ("false" !== t &&
        (t === Number(t).toString()
          ? Number(t)
          : "" === t || "null" === t
          ? null
          : t))
    );
  }
  function G(t) {
    return t.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
  }
  j.on(
    document,
    "click.bs.button.data-api",
    '[data-bs-toggle="button"]',
    (t) => {
      t.preventDefault();
      const e = t.target.closest('[data-bs-toggle="button"]');
      Y.getOrCreateInstance(e).toggle();
    }
  ),
    m(Y);
  const Z = {
      setDataAttribute(t, e, i) {
        t.setAttribute(`data-bs-${G(e)}`, i);
      },
      removeDataAttribute(t, e) {
        t.removeAttribute(`data-bs-${G(e)}`);
      },
      getDataAttributes(t) {
        if (!t) return {};
        const e = {};
        return (
          Object.keys(t.dataset)
            .filter((t) => t.startsWith("bs"))
            .forEach((i) => {
              let n = i.replace(/^bs/, "");
              (n = n.charAt(0).toLowerCase() + n.slice(1, n.length)),
                (e[n] = Q(t.dataset[i]));
            }),
          e
        );
      },
      getDataAttribute: (t, e) => Q(t.getAttribute(`data-bs-${G(e)}`)),
      offset(t) {
        const e = t.getBoundingClientRect();
        return {
          top: e.top + window.pageYOffset,
          left: e.left + window.pageXOffset,
        };
      },
      position: (t) => ({ top: t.offsetTop, left: t.offsetLeft }),
    },
    J = {
      find: (t, e = document.documentElement) =>
        [].concat(...Element.prototype.querySelectorAll.call(e, t)),
      findOne: (t, e = document.documentElement) =>
        Element.prototype.querySelector.call(e, t),
      children: (t, e) => [].concat(...t.children).filter((t) => t.matches(e)),
      parents(t, e) {
        const i = [];
        let n = t.parentNode;
        for (; n && n.nodeType === Node.ELEMENT_NODE && 3 !== n.nodeType; )
          n.matches(e) && i.push(n), (n = n.parentNode);
        return i;
      },
      prev(t, e) {
        let i = t.previousElementSibling;
        for (; i; ) {
          if (i.matches(e)) return [i];
          i = i.previousElementSibling;
        }
        return [];
      },
      next(t, e) {
        let i = t.nextElementSibling;
        for (; i; ) {
          if (i.matches(e)) return [i];
          i = i.nextElementSibling;
        }
        return [];
      },
      focusableChildren(t) {
        const e = [
          "a",
          "button",
          "input",
          "textarea",
          "select",
          "details",
          "[tabindex]",
          '[contenteditable="true"]',
        ]
          .map((t) => `${t}:not([tabindex^="-"])`)
          .join(", ");
        return this.find(e, t).filter((t) => !c(t) && l(t));
      },
    },
    tt = "carousel",
    et = 500,
    it = 40,
    nt = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: "hover",
      wrap: !0,
      touch: !0,
    },
    st = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      slide: "(boolean|string)",
      pause: "(string|boolean)",
      wrap: "boolean",
      touch: "boolean",
    },
    ot = "next",
    rt = "prev",
    at = "left",
    lt = "right",
    ct = { ArrowLeft: lt, ArrowRight: at },
    ht = "slide.bs.carousel",
    dt = "slid.bs.carousel",
    ut = "keydown.bs.carousel",
    ft = "mouseenter.bs.carousel",
    pt = "mouseleave.bs.carousel",
    gt = "touchstart.bs.carousel",
    mt = "touchmove.bs.carousel",
    _t = "touchend.bs.carousel",
    bt = "pointerdown.bs.carousel",
    vt = "pointerup.bs.carousel",
    yt = "dragstart.bs.carousel",
    wt = "carousel",
    Et = "active",
    At = "slide",
    Tt = "carousel-item-end",
    Ot = "carousel-item-start",
    Ct = "carousel-item-next",
    kt = "carousel-item-prev",
    Lt = "pointer-event",
    xt = ".active",
    Dt = ".active.carousel-item",
    St = ".carousel-item",
    Nt = ".carousel-item img",
    It = ".carousel-item-next, .carousel-item-prev",
    Pt = ".carousel-indicators",
    jt = "[data-bs-target]",
    Mt = "touch",
    $t = "pen";
  class Ht extends B {
    constructor(t, e) {
      super(t),
        (this._items = null),
        (this._interval = null),
        (this._activeElement = null),
        (this._isPaused = !1),
        (this._isSliding = !1),
        (this.touchTimeout = null),
        (this.touchStartX = 0),
        (this.touchDeltaX = 0),
        (this._config = this._getConfig(e)),
        (this._indicatorsElement = J.findOne(Pt, this._element)),
        (this._touchSupported =
          "ontouchstart" in document.documentElement ||
          navigator.maxTouchPoints > 0),
        (this._pointerEvent = Boolean(window.PointerEvent)),
        this._addEventListeners();
    }
    static get Default() {
      return nt;
    }
    static get NAME() {
      return tt;
    }
    next() {
      this._slide(ot);
    }
    nextWhenVisible() {
      !document.hidden && l(this._element) && this.next();
    }
    prev() {
      this._slide(rt);
    }
    pause(t) {
      t || (this._isPaused = !0),
        J.findOne(It, this._element) && (s(this._element), this.cycle(!0)),
        clearInterval(this._interval),
        (this._interval = null);
    }
    cycle(t) {
      t || (this._isPaused = !1),
        this._interval &&
          (clearInterval(this._interval), (this._interval = null)),
        this._config &&
          this._config.interval &&
          !this._isPaused &&
          (this._updateInterval(),
          (this._interval = setInterval(
            (document.visibilityState ? this.nextWhenVisible : this.next).bind(
              this
            ),
            this._config.interval
          )));
    }
    to(t) {
      this._activeElement = J.findOne(Dt, this._element);
      const e = this._getItemIndex(this._activeElement);
      if (t > this._items.length - 1 || t < 0) return;
      if (this._isSliding)
        return void j.one(this._element, dt, () => this.to(t));
      if (e === t) return this.pause(), void this.cycle();
      const i = t > e ? ot : rt;
      this._slide(i, this._items[t]);
    }
    _getConfig(t) {
      return (
        (t = {
          ...nt,
          ...Z.getDataAttributes(this._element),
          ...("object" == typeof t ? t : {}),
        }),
        a(tt, t, st),
        t
      );
    }
    _handleSwipe() {
      const t = Math.abs(this.touchDeltaX);
      if (t <= it) return;
      const e = t / this.touchDeltaX;
      (this.touchDeltaX = 0), e && this._slide(e > 0 ? lt : at);
    }
    _addEventListeners() {
      this._config.keyboard && j.on(this._element, ut, (t) => this._keydown(t)),
        "hover" === this._config.pause &&
          (j.on(this._element, ft, (t) => this.pause(t)),
          j.on(this._element, pt, (t) => this.cycle(t))),
        this._config.touch &&
          this._touchSupported &&
          this._addTouchEventListeners();
    }
    _addTouchEventListeners() {
      const t = (t) =>
          this._pointerEvent && (t.pointerType === $t || t.pointerType === Mt),
        e = (e) => {
          t(e)
            ? (this.touchStartX = e.clientX)
            : this._pointerEvent || (this.touchStartX = e.touches[0].clientX);
        },
        i = (t) => {
          this.touchDeltaX =
            t.touches && t.touches.length > 1
              ? 0
              : t.touches[0].clientX - this.touchStartX;
        },
        n = (e) => {
          t(e) && (this.touchDeltaX = e.clientX - this.touchStartX),
            this._handleSwipe(),
            "hover" === this._config.pause &&
              (this.pause(),
              this.touchTimeout && clearTimeout(this.touchTimeout),
              (this.touchTimeout = setTimeout(
                (t) => this.cycle(t),
                et + this._config.interval
              )));
        };
      J.find(Nt, this._element).forEach((t) => {
        j.on(t, yt, (t) => t.preventDefault());
      }),
        this._pointerEvent
          ? (j.on(this._element, bt, (t) => e(t)),
            j.on(this._element, vt, (t) => n(t)),
            this._element.classList.add(Lt))
          : (j.on(this._element, gt, (t) => e(t)),
            j.on(this._element, mt, (t) => i(t)),
            j.on(this._element, _t, (t) => n(t)));
    }
    _keydown(t) {
      if (/input|textarea/i.test(t.target.tagName)) return;
      const e = ct[t.key];
      e && (t.preventDefault(), this._slide(e));
    }
    _getItemIndex(t) {
      return (
        (this._items = t && t.parentNode ? J.find(St, t.parentNode) : []),
        this._items.indexOf(t)
      );
    }
    _getItemByOrder(t, e) {
      const i = t === ot;
      return v(this._items, e, i, this._config.wrap);
    }
    _triggerSlideEvent(t, e) {
      const i = this._getItemIndex(t),
        n = this._getItemIndex(J.findOne(Dt, this._element));
      return j.trigger(this._element, ht, {
        relatedTarget: t,
        direction: e,
        from: n,
        to: i,
      });
    }
    _setActiveIndicatorElement(t) {
      if (this._indicatorsElement) {
        const e = J.findOne(xt, this._indicatorsElement);
        e.classList.remove(Et), e.removeAttribute("aria-current");
        const i = J.find(jt, this._indicatorsElement);
        for (let e = 0; e < i.length; e++)
          if (
            Number.parseInt(i[e].getAttribute("data-bs-slide-to"), 10) ===
            this._getItemIndex(t)
          ) {
            i[e].classList.add(Et), i[e].setAttribute("aria-current", "true");
            break;
          }
      }
    }
    _updateInterval() {
      const t = this._activeElement || J.findOne(Dt, this._element);
      if (!t) return;
      const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
      e
        ? ((this._config.defaultInterval =
            this._config.defaultInterval || this._config.interval),
          (this._config.interval = e))
        : (this._config.interval =
            this._config.defaultInterval || this._config.interval);
    }
    _slide(t, e) {
      const i = this._directionToOrder(t),
        n = J.findOne(Dt, this._element),
        s = this._getItemIndex(n),
        o = e || this._getItemByOrder(i, n),
        r = this._getItemIndex(o),
        a = Boolean(this._interval),
        l = i === ot,
        c = l ? Ot : Tt,
        h = l ? Ct : kt,
        d = this._orderToDirection(i);
      if (o && o.classList.contains(Et)) return void (this._isSliding = !1);
      if (this._isSliding) return;
      if (this._triggerSlideEvent(o, d).defaultPrevented) return;
      if (!n || !o) return;
      (this._isSliding = !0),
        a && this.pause(),
        this._setActiveIndicatorElement(o),
        (this._activeElement = o);
      const f = () => {
        j.trigger(this._element, dt, {
          relatedTarget: o,
          direction: d,
          from: s,
          to: r,
        });
      };
      if (this._element.classList.contains(At)) {
        o.classList.add(h), u(o), n.classList.add(c), o.classList.add(c);
        const t = () => {
          o.classList.remove(c, h),
            o.classList.add(Et),
            n.classList.remove(Et, h, c),
            (this._isSliding = !1),
            setTimeout(f, 0);
        };
        this._queueCallback(t, n, !0);
      } else n.classList.remove(Et), o.classList.add(Et), (this._isSliding = !1), f();
      a && this.cycle();
    }
    _directionToOrder(t) {
      return [lt, at].includes(t)
        ? g()
          ? t === at
            ? rt
            : ot
          : t === at
          ? ot
          : rt
        : t;
    }
    _orderToDirection(t) {
      return [ot, rt].includes(t)
        ? g()
          ? t === rt
            ? at
            : lt
          : t === rt
          ? lt
          : at
        : t;
    }
    static carouselInterface(t, e) {
      const i = Ht.getOrCreateInstance(t, e);
      let { _config: n } = i;
      "object" == typeof e && (n = { ...n, ...e });
      const s = "string" == typeof e ? e : n.slide;
      if ("number" == typeof e) i.to(e);
      else if ("string" == typeof s) {
        if (void 0 === i[s]) throw new TypeError(`No method named "${s}"`);
        i[s]();
      } else n.interval && n.ride && (i.pause(), i.cycle());
    }
    static jQueryInterface(t) {
      return this.each(function () {
        Ht.carouselInterface(this, t);
      });
    }
    static dataApiClickHandler(t) {
      const e = n(this);
      if (!e || !e.classList.contains(wt)) return;
      const i = { ...Z.getDataAttributes(e), ...Z.getDataAttributes(this) },
        s = this.getAttribute("data-bs-slide-to");
      s && (i.interval = !1),
        Ht.carouselInterface(e, i),
        s && Ht.getInstance(e).to(s),
        t.preventDefault();
    }
  }
  j.on(
    document,
    "click.bs.carousel.data-api",
    "[data-bs-slide], [data-bs-slide-to]",
    Ht.dataApiClickHandler
  ),
    j.on(window, "load.bs.carousel.data-api", () => {
      const t = J.find('[data-bs-ride="carousel"]');
      for (let e = 0, i = t.length; e < i; e++)
        Ht.carouselInterface(t[e], Ht.getInstance(t[e]));
    }),
    m(Ht);
  const Bt = "collapse",
    Rt = "bs.collapse",
    Wt = `.${Rt}`,
    zt = { toggle: !0, parent: null },
    qt = { toggle: "boolean", parent: "(null|element)" },
    Ft = `show${Wt}`,
    Ut = `shown${Wt}`,
    Vt = `hide${Wt}`,
    Kt = `hidden${Wt}`,
    Xt = `click${Wt}.data-api`,
    Yt = "show",
    Qt = "collapse",
    Gt = "collapsing",
    Zt = "collapsed",
    Jt = `:scope .${Qt} .${Qt}`,
    te = "collapse-horizontal",
    ee = "width",
    ie = "height",
    ne = ".collapse.show, .collapse.collapsing",
    se = '[data-bs-toggle="collapse"]';
  class oe extends B {
    constructor(t, e) {
      super(t),
        (this._isTransitioning = !1),
        (this._config = this._getConfig(e)),
        (this._triggerArray = []);
      const n = J.find(se);
      for (let t = 0, e = n.length; t < e; t++) {
        const e = n[t],
          s = i(e),
          o = J.find(s).filter((t) => t === this._element);
        null !== s &&
          o.length &&
          ((this._selector = s), this._triggerArray.push(e));
      }
      this._initializeChildren(),
        this._config.parent ||
          this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
        this._config.toggle && this.toggle();
    }
    static get Default() {
      return zt;
    }
    static get NAME() {
      return Bt;
    }
    toggle() {
      this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (this._isTransitioning || this._isShown()) return;
      let t,
        e = [];
      if (this._config.parent) {
        const t = J.find(Jt, this._config.parent);
        e = J.find(ne, this._config.parent).filter((e) => !t.includes(e));
      }
      const i = J.findOne(this._selector);
      if (e.length) {
        const n = e.find((t) => i !== t);
        if ((t = n ? oe.getInstance(n) : null) && t._isTransitioning) return;
      }
      if (j.trigger(this._element, Ft).defaultPrevented) return;
      e.forEach((e) => {
        i !== e && oe.getOrCreateInstance(e, { toggle: !1 }).hide(),
          t || $.set(e, Rt, null);
      });
      const n = this._getDimension();
      this._element.classList.remove(Qt),
        this._element.classList.add(Gt),
        (this._element.style[n] = 0),
        this._addAriaAndCollapsedClass(this._triggerArray, !0),
        (this._isTransitioning = !0);
      const s = `scroll${n[0].toUpperCase() + n.slice(1)}`;
      this._queueCallback(
        () => {
          (this._isTransitioning = !1),
            this._element.classList.remove(Gt),
            this._element.classList.add(Qt, Yt),
            (this._element.style[n] = ""),
            j.trigger(this._element, Ut);
        },
        this._element,
        !0
      ),
        (this._element.style[n] = `${this._element[s]}px`);
    }
    hide() {
      if (this._isTransitioning || !this._isShown()) return;
      if (j.trigger(this._element, Vt).defaultPrevented) return;
      const t = this._getDimension();
      (this._element.style[t] = `${
        this._element.getBoundingClientRect()[t]
      }px`),
        u(this._element),
        this._element.classList.add(Gt),
        this._element.classList.remove(Qt, Yt);
      const e = this._triggerArray.length;
      for (let t = 0; t < e; t++) {
        const e = this._triggerArray[t],
          i = n(e);
        i && !this._isShown(i) && this._addAriaAndCollapsedClass([e], !1);
      }
      this._isTransitioning = !0;
      (this._element.style[t] = ""),
        this._queueCallback(
          () => {
            (this._isTransitioning = !1),
              this._element.classList.remove(Gt),
              this._element.classList.add(Qt),
              j.trigger(this._element, Kt);
          },
          this._element,
          !0
        );
    }
    _isShown(t = this._element) {
      return t.classList.contains(Yt);
    }
    _getConfig(t) {
      return (
        ((t = { ...zt, ...Z.getDataAttributes(this._element), ...t }).toggle =
          Boolean(t.toggle)),
        (t.parent = r(t.parent)),
        a(Bt, t, qt),
        t
      );
    }
    _getDimension() {
      return this._element.classList.contains(te) ? ee : ie;
    }
    _initializeChildren() {
      if (!this._config.parent) return;
      const t = J.find(Jt, this._config.parent);
      J.find(se, this._config.parent)
        .filter((e) => !t.includes(e))
        .forEach((t) => {
          const e = n(t);
          e && this._addAriaAndCollapsedClass([t], this._isShown(e));
        });
    }
    _addAriaAndCollapsedClass(t, e) {
      t.length &&
        t.forEach((t) => {
          e ? t.classList.remove(Zt) : t.classList.add(Zt),
            t.setAttribute("aria-expanded", e);
        });
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = {};
        "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1);
        const i = oe.getOrCreateInstance(this, e);
        if ("string" == typeof t) {
          if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
          i[t]();
        }
      });
    }
  }
  j.on(document, Xt, se, function (t) {
    ("A" === t.target.tagName ||
      (t.delegateTarget && "A" === t.delegateTarget.tagName)) &&
      t.preventDefault();
    const e = i(this);
    J.find(e).forEach((t) => {
      oe.getOrCreateInstance(t, { toggle: !1 }).toggle();
    });
  }),
    m(oe);
  var re = "top",
    ae = "bottom",
    le = "right",
    ce = "left",
    he = "auto",
    de = [re, ae, le, ce],
    ue = "start",
    fe = "end",
    pe = "clippingParents",
    ge = "viewport",
    me = "popper",
    _e = "reference",
    be = de.reduce(function (t, e) {
      return t.concat([e + "-" + ue, e + "-" + fe]);
    }, []),
    ve = [].concat(de, [he]).reduce(function (t, e) {
      return t.concat([e, e + "-" + ue, e + "-" + fe]);
    }, []),
    ye = [
      "beforeRead",
      "read",
      "afterRead",
      "beforeMain",
      "main",
      "afterMain",
      "beforeWrite",
      "write",
      "afterWrite",
    ];
  function we(t) {
    return t ? (t.nodeName || "").toLowerCase() : null;
  }
  function Ee(t) {
    if (null == t) return window;
    if ("[object Window]" !== t.toString()) {
      var e = t.ownerDocument;
      return (e && e.defaultView) || window;
    }
    return t;
  }
  function Ae(t) {
    return t instanceof Ee(t).Element || t instanceof Element;
  }
  function Te(t) {
    return t instanceof Ee(t).HTMLElement || t instanceof HTMLElement;
  }
  function Oe(t) {
    return (
      "undefined" != typeof ShadowRoot &&
      (t instanceof Ee(t).ShadowRoot || t instanceof ShadowRoot)
    );
  }
  const Ce = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: function (t) {
      var e = t.state;
      Object.keys(e.elements).forEach(function (t) {
        var i = e.styles[t] || {},
          n = e.attributes[t] || {},
          s = e.elements[t];
        Te(s) &&
          we(s) &&
          (Object.assign(s.style, i),
          Object.keys(n).forEach(function (t) {
            var e = n[t];
            !1 === e
              ? s.removeAttribute(t)
              : s.setAttribute(t, !0 === e ? "" : e);
          }));
      });
    },
    effect: function (t) {
      var e = t.state,
        i = {
          popper: {
            position: e.options.strategy,
            left: "0",
            top: "0",
            margin: "0",
          },
          arrow: { position: "absolute" },
          reference: {},
        };
      return (
        Object.assign(e.elements.popper.style, i.popper),
        (e.styles = i),
        e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow),
        function () {
          Object.keys(e.elements).forEach(function (t) {
            var n = e.elements[t],
              s = e.attributes[t] || {},
              o = Object.keys(
                e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]
              ).reduce(function (t, e) {
                return (t[e] = ""), t;
              }, {});
            Te(n) &&
              we(n) &&
              (Object.assign(n.style, o),
              Object.keys(s).forEach(function (t) {
                n.removeAttribute(t);
              }));
          });
        }
      );
    },
    requires: ["computeStyles"],
  };
  function ke(t) {
    return t.split("-")[0];
  }
  function Le(t, e) {
    var i = t.getBoundingClientRect();
    return {
      width: i.width / 1,
      height: i.height / 1,
      top: i.top / 1,
      right: i.right / 1,
      bottom: i.bottom / 1,
      left: i.left / 1,
      x: i.left / 1,
      y: i.top / 1,
    };
  }
  function xe(t) {
    var e = Le(t),
      i = t.offsetWidth,
      n = t.offsetHeight;
    return (
      Math.abs(e.width - i) <= 1 && (i = e.width),
      Math.abs(e.height - n) <= 1 && (n = e.height),
      { x: t.offsetLeft, y: t.offsetTop, width: i, height: n }
    );
  }
  function De(t, e) {
    var i = e.getRootNode && e.getRootNode();
    if (t.contains(e)) return !0;
    if (i && Oe(i)) {
      var n = e;
      do {
        if (n && t.isSameNode(n)) return !0;
        n = n.parentNode || n.host;
      } while (n);
    }
    return !1;
  }
  function Se(t) {
    return Ee(t).getComputedStyle(t);
  }
  function Ne(t) {
    return ["table", "td", "th"].indexOf(we(t)) >= 0;
  }
  function Ie(t) {
    return (
      (Ae(t) ? t.ownerDocument : t.document) || window.document
    ).documentElement;
  }
  function Pe(t) {
    return "html" === we(t)
      ? t
      : t.assignedSlot || t.parentNode || (Oe(t) ? t.host : null) || Ie(t);
  }
  function je(t) {
    return Te(t) && "fixed" !== Se(t).position ? t.offsetParent : null;
  }
  function Me(t) {
    for (var e = Ee(t), i = je(t); i && Ne(i) && "static" === Se(i).position; )
      i = je(i);
    return i &&
      ("html" === we(i) || ("body" === we(i) && "static" === Se(i).position))
      ? e
      : i ||
          (function (t) {
            var e = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
            if (
              -1 !== navigator.userAgent.indexOf("Trident") &&
              Te(t) &&
              "fixed" === Se(t).position
            )
              return null;
            for (
              var i = Pe(t);
              Te(i) && ["html", "body"].indexOf(we(i)) < 0;

            ) {
              var n = Se(i);
              if (
                "none" !== n.transform ||
                "none" !== n.perspective ||
                "paint" === n.contain ||
                -1 !== ["transform", "perspective"].indexOf(n.willChange) ||
                (e && "filter" === n.willChange) ||
                (e && n.filter && "none" !== n.filter)
              )
                return i;
              i = i.parentNode;
            }
            return null;
          })(t) ||
          e;
  }
  function $e(t) {
    return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
  }
  var He = Math.max,
    Be = Math.min,
    Re = Math.round;
  function We(t, e, i) {
    return He(t, Be(e, i));
  }
  function ze(t) {
    return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, t);
  }
  function qe(t, e) {
    return e.reduce(function (e, i) {
      return (e[i] = t), e;
    }, {});
  }
  var Fe = function (t, e) {
    return ze(
      "number" !=
        typeof (t =
          "function" == typeof t
            ? t(Object.assign({}, e.rects, { placement: e.placement }))
            : t)
        ? t
        : qe(t, de)
    );
  };
  const Ue = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: function (t) {
      var e,
        i = t.state,
        n = t.name,
        s = t.options,
        o = i.elements.arrow,
        r = i.modifiersData.popperOffsets,
        a = ke(i.placement),
        l = $e(a),
        c = [ce, le].indexOf(a) >= 0 ? "height" : "width";
      if (o && r) {
        var h = Fe(s.padding, i),
          d = xe(o),
          u = "y" === l ? re : ce,
          f = "y" === l ? ae : le,
          p =
            i.rects.reference[c] +
            i.rects.reference[l] -
            r[l] -
            i.rects.popper[c],
          g = r[l] - i.rects.reference[l],
          m = Me(o),
          _ = m ? ("y" === l ? m.clientHeight || 0 : m.clientWidth || 0) : 0,
          b = p / 2 - g / 2,
          v = h[u],
          y = _ - d[c] - h[f],
          w = _ / 2 - d[c] / 2 + b,
          E = We(v, w, y),
          A = l;
        i.modifiersData[n] = (((e = {})[A] = E), (e.centerOffset = E - w), e);
      }
    },
    effect: function (t) {
      var e = t.state,
        i = t.options.element,
        n = void 0 === i ? "[data-popper-arrow]" : i;
      null != n &&
        ("string" != typeof n || (n = e.elements.popper.querySelector(n))) &&
        De(e.elements.popper, n) &&
        (e.elements.arrow = n);
    },
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"],
  };
  function Ve(t) {
    return t.split("-")[1];
  }
  var Ke = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
  function Xe(t) {
    var e,
      i = t.popper,
      n = t.popperRect,
      s = t.placement,
      o = t.variation,
      r = t.offsets,
      a = t.position,
      l = t.gpuAcceleration,
      c = t.adaptive,
      h = t.roundOffsets,
      d =
        !0 === h
          ? (function (t) {
              var e = t.x,
                i = t.y,
                n = window.devicePixelRatio || 1;
              return { x: Re(Re(e * n) / n) || 0, y: Re(Re(i * n) / n) || 0 };
            })(r)
          : "function" == typeof h
          ? h(r)
          : r,
      u = d.x,
      f = void 0 === u ? 0 : u,
      p = d.y,
      g = void 0 === p ? 0 : p,
      m = r.hasOwnProperty("x"),
      _ = r.hasOwnProperty("y"),
      b = ce,
      v = re,
      y = window;
    if (c) {
      var w = Me(i),
        E = "clientHeight",
        A = "clientWidth";
      w === Ee(i) &&
        "static" !== Se((w = Ie(i))).position &&
        "absolute" === a &&
        ((E = "scrollHeight"), (A = "scrollWidth")),
        (w = w),
        (s !== re && ((s !== ce && s !== le) || o !== fe)) ||
          ((v = ae), (g -= w[E] - n.height), (g *= l ? 1 : -1)),
        (s !== ce && ((s !== re && s !== ae) || o !== fe)) ||
          ((b = le), (f -= w[A] - n.width), (f *= l ? 1 : -1));
    }
    var T,
      O = Object.assign({ position: a }, c && Ke);
    return l
      ? Object.assign(
          {},
          O,
          (((T = {})[v] = _ ? "0" : ""),
          (T[b] = m ? "0" : ""),
          (T.transform =
            (y.devicePixelRatio || 1) <= 1
              ? "translate(" + f + "px, " + g + "px)"
              : "translate3d(" + f + "px, " + g + "px, 0)"),
          T)
        )
      : Object.assign(
          {},
          O,
          (((e = {})[v] = _ ? g + "px" : ""),
          (e[b] = m ? f + "px" : ""),
          (e.transform = ""),
          e)
        );
  }
  const Ye = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: function (t) {
      var e = t.state,
        i = t.options,
        n = i.gpuAcceleration,
        s = void 0 === n || n,
        o = i.adaptive,
        r = void 0 === o || o,
        a = i.roundOffsets,
        l = void 0 === a || a,
        c = {
          placement: ke(e.placement),
          variation: Ve(e.placement),
          popper: e.elements.popper,
          popperRect: e.rects.popper,
          gpuAcceleration: s,
        };
      null != e.modifiersData.popperOffsets &&
        (e.styles.popper = Object.assign(
          {},
          e.styles.popper,
          Xe(
            Object.assign({}, c, {
              offsets: e.modifiersData.popperOffsets,
              position: e.options.strategy,
              adaptive: r,
              roundOffsets: l,
            })
          )
        )),
        null != e.modifiersData.arrow &&
          (e.styles.arrow = Object.assign(
            {},
            e.styles.arrow,
            Xe(
              Object.assign({}, c, {
                offsets: e.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: l,
              })
            )
          )),
        (e.attributes.popper = Object.assign({}, e.attributes.popper, {
          "data-popper-placement": e.placement,
        }));
    },
    data: {},
  };
  var Qe = { passive: !0 };
  const Ge = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function () {},
    effect: function (t) {
      var e = t.state,
        i = t.instance,
        n = t.options,
        s = n.scroll,
        o = void 0 === s || s,
        r = n.resize,
        a = void 0 === r || r,
        l = Ee(e.elements.popper),
        c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
      return (
        o &&
          c.forEach(function (t) {
            t.addEventListener("scroll", i.update, Qe);
          }),
        a && l.addEventListener("resize", i.update, Qe),
        function () {
          o &&
            c.forEach(function (t) {
              t.removeEventListener("scroll", i.update, Qe);
            }),
            a && l.removeEventListener("resize", i.update, Qe);
        }
      );
    },
    data: {},
  };
  var Ze = { left: "right", right: "left", bottom: "top", top: "bottom" };
  function Je(t) {
    return t.replace(/left|right|bottom|top/g, function (t) {
      return Ze[t];
    });
  }
  var ti = { start: "end", end: "start" };
  function ei(t) {
    return t.replace(/start|end/g, function (t) {
      return ti[t];
    });
  }
  function ii(t) {
    var e = Ee(t);
    return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
  }
  function ni(t) {
    return Le(Ie(t)).left + ii(t).scrollLeft;
  }
  function si(t) {
    var e = Se(t),
      i = e.overflow,
      n = e.overflowX,
      s = e.overflowY;
    return /auto|scroll|overlay|hidden/.test(i + s + n);
  }
  function oi(t, e) {
    var i;
    void 0 === e && (e = []);
    var n = (function t(e) {
        return ["html", "body", "#document"].indexOf(we(e)) >= 0
          ? e.ownerDocument.body
          : Te(e) && si(e)
          ? e
          : t(Pe(e));
      })(t),
      s = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
      o = Ee(n),
      r = s ? [o].concat(o.visualViewport || [], si(n) ? n : []) : n,
      a = e.concat(r);
    return s ? a : a.concat(oi(Pe(r)));
  }
  function ri(t) {
    return Object.assign({}, t, {
      left: t.x,
      top: t.y,
      right: t.x + t.width,
      bottom: t.y + t.height,
    });
  }
  function ai(t, e) {
    return e === ge
      ? ri(
          (function (t) {
            var e = Ee(t),
              i = Ie(t),
              n = e.visualViewport,
              s = i.clientWidth,
              o = i.clientHeight,
              r = 0,
              a = 0;
            return (
              n &&
                ((s = n.width),
                (o = n.height),
                /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
                  ((r = n.offsetLeft), (a = n.offsetTop))),
              { width: s, height: o, x: r + ni(t), y: a }
            );
          })(t)
        )
      : Te(e)
      ? (function (t) {
          var e = Le(t);
          return (
            (e.top = e.top + t.clientTop),
            (e.left = e.left + t.clientLeft),
            (e.bottom = e.top + t.clientHeight),
            (e.right = e.left + t.clientWidth),
            (e.width = t.clientWidth),
            (e.height = t.clientHeight),
            (e.x = e.left),
            (e.y = e.top),
            e
          );
        })(e)
      : ri(
          (function (t) {
            var e,
              i = Ie(t),
              n = ii(t),
              s = null == (e = t.ownerDocument) ? void 0 : e.body,
              o = He(
                i.scrollWidth,
                i.clientWidth,
                s ? s.scrollWidth : 0,
                s ? s.clientWidth : 0
              ),
              r = He(
                i.scrollHeight,
                i.clientHeight,
                s ? s.scrollHeight : 0,
                s ? s.clientHeight : 0
              ),
              a = -n.scrollLeft + ni(t),
              l = -n.scrollTop;
            return (
              "rtl" === Se(s || i).direction &&
                (a += He(i.clientWidth, s ? s.clientWidth : 0) - o),
              { width: o, height: r, x: a, y: l }
            );
          })(Ie(t))
        );
  }
  function li(t, e, i) {
    var n =
        "clippingParents" === e
          ? (function (t) {
              var e = oi(Pe(t)),
                i =
                  ["absolute", "fixed"].indexOf(Se(t).position) >= 0 && Te(t)
                    ? Me(t)
                    : t;
              return Ae(i)
                ? e.filter(function (t) {
                    return Ae(t) && De(t, i) && "body" !== we(t);
                  })
                : [];
            })(t)
          : [].concat(e),
      s = [].concat(n, [i]),
      o = s[0],
      r = s.reduce(function (e, i) {
        var n = ai(t, i);
        return (
          (e.top = He(n.top, e.top)),
          (e.right = Be(n.right, e.right)),
          (e.bottom = Be(n.bottom, e.bottom)),
          (e.left = He(n.left, e.left)),
          e
        );
      }, ai(t, o));
    return (
      (r.width = r.right - r.left),
      (r.height = r.bottom - r.top),
      (r.x = r.left),
      (r.y = r.top),
      r
    );
  }
  function ci(t) {
    var e,
      i = t.reference,
      n = t.element,
      s = t.placement,
      o = s ? ke(s) : null,
      r = s ? Ve(s) : null,
      a = i.x + i.width / 2 - n.width / 2,
      l = i.y + i.height / 2 - n.height / 2;
    switch (o) {
      case re:
        e = { x: a, y: i.y - n.height };
        break;
      case ae:
        e = { x: a, y: i.y + i.height };
        break;
      case le:
        e = { x: i.x + i.width, y: l };
        break;
      case ce:
        e = { x: i.x - n.width, y: l };
        break;
      default:
        e = { x: i.x, y: i.y };
    }
    var c = o ? $e(o) : null;
    if (null != c) {
      var h = "y" === c ? "height" : "width";
      switch (r) {
        case ue:
          e[c] = e[c] - (i[h] / 2 - n[h] / 2);
          break;
        case fe:
          e[c] = e[c] + (i[h] / 2 - n[h] / 2);
      }
    }
    return e;
  }
  function hi(t, e) {
    void 0 === e && (e = {});
    var i = e,
      n = i.placement,
      s = void 0 === n ? t.placement : n,
      o = i.boundary,
      r = void 0 === o ? pe : o,
      a = i.rootBoundary,
      l = void 0 === a ? ge : a,
      c = i.elementContext,
      h = void 0 === c ? me : c,
      d = i.altBoundary,
      u = void 0 !== d && d,
      f = i.padding,
      p = void 0 === f ? 0 : f,
      g = ze("number" != typeof p ? p : qe(p, de)),
      m = h === me ? _e : me,
      _ = t.rects.popper,
      b = t.elements[u ? m : h],
      v = li(Ae(b) ? b : b.contextElement || Ie(t.elements.popper), r, l),
      y = Le(t.elements.reference),
      w = ci({ reference: y, element: _, strategy: "absolute", placement: s }),
      E = ri(Object.assign({}, _, w)),
      A = h === me ? E : y,
      T = {
        top: v.top - A.top + g.top,
        bottom: A.bottom - v.bottom + g.bottom,
        left: v.left - A.left + g.left,
        right: A.right - v.right + g.right,
      },
      O = t.modifiersData.offset;
    if (h === me && O) {
      var C = O[s];
      Object.keys(T).forEach(function (t) {
        var e = [le, ae].indexOf(t) >= 0 ? 1 : -1,
          i = [re, ae].indexOf(t) >= 0 ? "y" : "x";
        T[t] += C[i] * e;
      });
    }
    return T;
  }
  function di(t, e) {
    void 0 === e && (e = {});
    var i = e,
      n = i.placement,
      s = i.boundary,
      o = i.rootBoundary,
      r = i.padding,
      a = i.flipVariations,
      l = i.allowedAutoPlacements,
      c = void 0 === l ? ve : l,
      h = Ve(n),
      d = h
        ? a
          ? be
          : be.filter(function (t) {
              return Ve(t) === h;
            })
        : de,
      u = d.filter(function (t) {
        return c.indexOf(t) >= 0;
      });
    0 === u.length && (u = d);
    var f = u.reduce(function (e, i) {
      return (
        (e[i] = hi(t, {
          placement: i,
          boundary: s,
          rootBoundary: o,
          padding: r,
        })[ke(i)]),
        e
      );
    }, {});
    return Object.keys(f).sort(function (t, e) {
      return f[t] - f[e];
    });
  }
  const ui = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: function (t) {
      var e = t.state,
        i = t.options,
        n = t.name;
      if (!e.modifiersData[n]._skip) {
        for (
          var s = i.mainAxis,
            o = void 0 === s || s,
            r = i.altAxis,
            a = void 0 === r || r,
            l = i.fallbackPlacements,
            c = i.padding,
            h = i.boundary,
            d = i.rootBoundary,
            u = i.altBoundary,
            f = i.flipVariations,
            p = void 0 === f || f,
            g = i.allowedAutoPlacements,
            m = e.options.placement,
            _ = ke(m),
            b =
              l ||
              (_ !== m && p
                ? (function (t) {
                    if (ke(t) === he) return [];
                    var e = Je(t);
                    return [ei(t), e, ei(e)];
                  })(m)
                : [Je(m)]),
            v = [m].concat(b).reduce(function (t, i) {
              return t.concat(
                ke(i) === he
                  ? di(e, {
                      placement: i,
                      boundary: h,
                      rootBoundary: d,
                      padding: c,
                      flipVariations: p,
                      allowedAutoPlacements: g,
                    })
                  : i
              );
            }, []),
            y = e.rects.reference,
            w = e.rects.popper,
            E = new Map(),
            A = !0,
            T = v[0],
            O = 0;
          O < v.length;
          O++
        ) {
          var C = v[O],
            k = ke(C),
            L = Ve(C) === ue,
            x = [re, ae].indexOf(k) >= 0,
            D = x ? "width" : "height",
            S = hi(e, {
              placement: C,
              boundary: h,
              rootBoundary: d,
              altBoundary: u,
              padding: c,
            }),
            N = x ? (L ? le : ce) : L ? ae : re;
          y[D] > w[D] && (N = Je(N));
          var I = Je(N),
            P = [];
          if (
            (o && P.push(S[k] <= 0),
            a && P.push(S[N] <= 0, S[I] <= 0),
            P.every(function (t) {
              return t;
            }))
          ) {
            (T = C), (A = !1);
            break;
          }
          E.set(C, P);
        }
        if (A)
          for (
            var j = function (t) {
                var e = v.find(function (e) {
                  var i = E.get(e);
                  if (i)
                    return i.slice(0, t).every(function (t) {
                      return t;
                    });
                });
                if (e) return (T = e), "break";
              },
              M = p ? 3 : 1;
            M > 0 && "break" !== j(M);
            M--
          );
        e.placement !== T &&
          ((e.modifiersData[n]._skip = !0), (e.placement = T), (e.reset = !0));
      }
    },
    requiresIfExists: ["offset"],
    data: { _skip: !1 },
  };
  function fi(t, e, i) {
    return (
      void 0 === i && (i = { x: 0, y: 0 }),
      {
        top: t.top - e.height - i.y,
        right: t.right - e.width + i.x,
        bottom: t.bottom - e.height + i.y,
        left: t.left - e.width - i.x,
      }
    );
  }
  function pi(t) {
    return [re, le, ae, ce].some(function (e) {
      return t[e] >= 0;
    });
  }
  const gi = {
    name: "hide",
    enabled: !0,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: function (t) {
      var e = t.state,
        i = t.name,
        n = e.rects.reference,
        s = e.rects.popper,
        o = e.modifiersData.preventOverflow,
        r = hi(e, { elementContext: "reference" }),
        a = hi(e, { altBoundary: !0 }),
        l = fi(r, n),
        c = fi(a, s, o),
        h = pi(l),
        d = pi(c);
      (e.modifiersData[i] = {
        referenceClippingOffsets: l,
        popperEscapeOffsets: c,
        isReferenceHidden: h,
        hasPopperEscaped: d,
      }),
        (e.attributes.popper = Object.assign({}, e.attributes.popper, {
          "data-popper-reference-hidden": h,
          "data-popper-escaped": d,
        }));
    },
  };
  const mi = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: function (t) {
      var e = t.state,
        i = t.options,
        n = t.name,
        s = i.offset,
        o = void 0 === s ? [0, 0] : s,
        r = ve.reduce(function (t, i) {
          return (
            (t[i] = (function (t, e, i) {
              var n = ke(t),
                s = [ce, re].indexOf(n) >= 0 ? -1 : 1,
                o =
                  "function" == typeof i
                    ? i(Object.assign({}, e, { placement: t }))
                    : i,
                r = o[0],
                a = o[1];
              return (
                (r = r || 0),
                (a = (a || 0) * s),
                [ce, le].indexOf(n) >= 0 ? { x: a, y: r } : { x: r, y: a }
              );
            })(i, e.rects, o)),
            t
          );
        }, {}),
        a = r[e.placement],
        l = a.x,
        c = a.y;
      null != e.modifiersData.popperOffsets &&
        ((e.modifiersData.popperOffsets.x += l),
        (e.modifiersData.popperOffsets.y += c)),
        (e.modifiersData[n] = r);
    },
  };
  const _i = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: function (t) {
      var e = t.state,
        i = t.name;
      e.modifiersData[i] = ci({
        reference: e.rects.reference,
        element: e.rects.popper,
        strategy: "absolute",
        placement: e.placement,
      });
    },
    data: {},
  };
  const bi = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: function (t) {
      var e = t.state,
        i = t.options,
        n = t.name,
        s = i.mainAxis,
        o = void 0 === s || s,
        r = i.altAxis,
        a = void 0 !== r && r,
        l = i.boundary,
        c = i.rootBoundary,
        h = i.altBoundary,
        d = i.padding,
        u = i.tether,
        f = void 0 === u || u,
        p = i.tetherOffset,
        g = void 0 === p ? 0 : p,
        m = hi(e, { boundary: l, rootBoundary: c, padding: d, altBoundary: h }),
        _ = ke(e.placement),
        b = Ve(e.placement),
        v = !b,
        y = $e(_),
        w = "x" === y ? "y" : "x",
        E = e.modifiersData.popperOffsets,
        A = e.rects.reference,
        T = e.rects.popper,
        O =
          "function" == typeof g
            ? g(Object.assign({}, e.rects, { placement: e.placement }))
            : g,
        C = { x: 0, y: 0 };
      if (E) {
        if (o || a) {
          var k = "y" === y ? re : ce,
            L = "y" === y ? ae : le,
            x = "y" === y ? "height" : "width",
            D = E[y],
            S = E[y] + m[k],
            N = E[y] - m[L],
            I = f ? -T[x] / 2 : 0,
            P = b === ue ? A[x] : T[x],
            j = b === ue ? -T[x] : -A[x],
            M = e.elements.arrow,
            $ = f && M ? xe(M) : { width: 0, height: 0 },
            H = e.modifiersData["arrow#persistent"]
              ? e.modifiersData["arrow#persistent"].padding
              : { top: 0, right: 0, bottom: 0, left: 0 },
            B = H[k],
            R = H[L],
            W = We(0, A[x], $[x]),
            z = v ? A[x] / 2 - I - W - B - O : P - W - B - O,
            q = v ? -A[x] / 2 + I + W + R + O : j + W + R + O,
            F = e.elements.arrow && Me(e.elements.arrow),
            U = F ? ("y" === y ? F.clientTop || 0 : F.clientLeft || 0) : 0,
            V = e.modifiersData.offset
              ? e.modifiersData.offset[e.placement][y]
              : 0,
            K = E[y] + z - V - U,
            X = E[y] + q - V;
          if (o) {
            var Y = We(f ? Be(S, K) : S, D, f ? He(N, X) : N);
            (E[y] = Y), (C[y] = Y - D);
          }
          if (a) {
            var Q = "x" === y ? re : ce,
              G = "x" === y ? ae : le,
              Z = E[w],
              J = Z + m[Q],
              tt = Z - m[G],
              et = We(f ? Be(J, K) : J, Z, f ? He(tt, X) : tt);
            (E[w] = et), (C[w] = et - Z);
          }
        }
        e.modifiersData[n] = C;
      }
    },
    requiresIfExists: ["offset"],
  };
  function vi(t, e, i) {
    void 0 === i && (i = !1);
    var n = Te(e);
    Te(e) &&
      (function (t) {
        var e = t.getBoundingClientRect(),
          i = e.width / t.offsetWidth || 1,
          n = e.height / t.offsetHeight || 1;
      })(e);
    var s,
      o,
      r = Ie(e),
      a = Le(t),
      l = { scrollLeft: 0, scrollTop: 0 },
      c = { x: 0, y: 0 };
    return (
      (n || (!n && !i)) &&
        (("body" !== we(e) || si(r)) &&
          (l =
            (s = e) !== Ee(s) && Te(s)
              ? { scrollLeft: (o = s).scrollLeft, scrollTop: o.scrollTop }
              : ii(s)),
        Te(e)
          ? (((c = Le(e)).x += e.clientLeft), (c.y += e.clientTop))
          : r && (c.x = ni(r))),
      {
        x: a.left + l.scrollLeft - c.x,
        y: a.top + l.scrollTop - c.y,
        width: a.width,
        height: a.height,
      }
    );
  }
  function yi(t) {
    var e = new Map(),
      i = new Set(),
      n = [];
    return (
      t.forEach(function (t) {
        e.set(t.name, t);
      }),
      t.forEach(function (t) {
        i.has(t.name) ||
          (function t(s) {
            i.add(s.name),
              []
                .concat(s.requires || [], s.requiresIfExists || [])
                .forEach(function (n) {
                  if (!i.has(n)) {
                    var s = e.get(n);
                    s && t(s);
                  }
                }),
              n.push(s);
          })(t);
      }),
      n
    );
  }
  var wi = { placement: "bottom", modifiers: [], strategy: "absolute" };
  function Ei() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
      e[i] = arguments[i];
    return !e.some(function (t) {
      return !(t && "function" == typeof t.getBoundingClientRect);
    });
  }
  function Ai(t) {
    void 0 === t && (t = {});
    var e = t,
      i = e.defaultModifiers,
      n = void 0 === i ? [] : i,
      s = e.defaultOptions,
      o = void 0 === s ? wi : s;
    return function (t, e, i) {
      void 0 === i && (i = o);
      var s,
        r,
        a = {
          placement: "bottom",
          orderedModifiers: [],
          options: Object.assign({}, wi, o),
          modifiersData: {},
          elements: { reference: t, popper: e },
          attributes: {},
          styles: {},
        },
        l = [],
        c = !1,
        h = {
          state: a,
          setOptions: function (i) {
            var s = "function" == typeof i ? i(a.options) : i;
            d(),
              (a.options = Object.assign({}, o, a.options, s)),
              (a.scrollParents = {
                reference: Ae(t)
                  ? oi(t)
                  : t.contextElement
                  ? oi(t.contextElement)
                  : [],
                popper: oi(e),
              });
            var r,
              c,
              u = (function (t) {
                var e = yi(t);
                return ye.reduce(function (t, i) {
                  return t.concat(
                    e.filter(function (t) {
                      return t.phase === i;
                    })
                  );
                }, []);
              })(
                ((r = [].concat(n, a.options.modifiers)),
                (c = r.reduce(function (t, e) {
                  var i = t[e.name];
                  return (
                    (t[e.name] = i
                      ? Object.assign({}, i, e, {
                          options: Object.assign({}, i.options, e.options),
                          data: Object.assign({}, i.data, e.data),
                        })
                      : e),
                    t
                  );
                }, {})),
                Object.keys(c).map(function (t) {
                  return c[t];
                }))
              );
            return (
              (a.orderedModifiers = u.filter(function (t) {
                return t.enabled;
              })),
              a.orderedModifiers.forEach(function (t) {
                var e = t.name,
                  i = t.options,
                  n = void 0 === i ? {} : i,
                  s = t.effect;
                if ("function" == typeof s) {
                  var o = s({ state: a, name: e, instance: h, options: n });
                  l.push(o || function () {});
                }
              }),
              h.update()
            );
          },
          forceUpdate: function () {
            if (!c) {
              var t = a.elements,
                e = t.reference,
                i = t.popper;
              if (Ei(e, i)) {
                (a.rects = {
                  reference: vi(e, Me(i), "fixed" === a.options.strategy),
                  popper: xe(i),
                }),
                  (a.reset = !1),
                  (a.placement = a.options.placement),
                  a.orderedModifiers.forEach(function (t) {
                    return (a.modifiersData[t.name] = Object.assign(
                      {},
                      t.data
                    ));
                  });
                for (var n = 0; n < a.orderedModifiers.length; n++)
                  if (!0 !== a.reset) {
                    var s = a.orderedModifiers[n],
                      o = s.fn,
                      r = s.options,
                      l = void 0 === r ? {} : r,
                      d = s.name;
                    "function" == typeof o &&
                      (a =
                        o({ state: a, options: l, name: d, instance: h }) || a);
                  } else (a.reset = !1), (n = -1);
              }
            }
          },
          update:
            ((s = function () {
              return new Promise(function (t) {
                h.forceUpdate(), t(a);
              });
            }),
            function () {
              return (
                r ||
                  (r = new Promise(function (t) {
                    Promise.resolve().then(function () {
                      (r = void 0), t(s());
                    });
                  })),
                r
              );
            }),
          destroy: function () {
            d(), (c = !0);
          },
        };
      if (!Ei(t, e)) return h;
      function d() {
        l.forEach(function (t) {
          return t();
        }),
          (l = []);
      }
      return (
        h.setOptions(i).then(function (t) {
          !c && i.onFirstUpdate && i.onFirstUpdate(t);
        }),
        h
      );
    };
  }
  var Ti = Ai(),
    Oi = Ai({ defaultModifiers: [Ge, _i, Ye, Ce] }),
    Ci = Ai({ defaultModifiers: [Ge, _i, Ye, Ce, mi, ui, bi, Ue, gi] });
  const ki = Object.freeze({
      __proto__: null,
      popperGenerator: Ai,
      detectOverflow: hi,
      createPopperBase: Ti,
      createPopper: Ci,
      createPopperLite: Oi,
      top: re,
      bottom: ae,
      right: le,
      left: ce,
      auto: he,
      basePlacements: de,
      start: ue,
      end: fe,
      clippingParents: pe,
      viewport: ge,
      popper: me,
      reference: _e,
      variationPlacements: be,
      placements: ve,
      beforeRead: "beforeRead",
      read: "read",
      afterRead: "afterRead",
      beforeMain: "beforeMain",
      main: "main",
      afterMain: "afterMain",
      beforeWrite: "beforeWrite",
      write: "write",
      afterWrite: "afterWrite",
      modifierPhases: ye,
      applyStyles: Ce,
      arrow: Ue,
      computeStyles: Ye,
      eventListeners: Ge,
      flip: ui,
      hide: gi,
      offset: mi,
      popperOffsets: _i,
      preventOverflow: bi,
    }),
    Li = "dropdown",
    xi = "Escape",
    Di = "Space",
    Si = "Tab",
    Ni = "ArrowUp",
    Ii = "ArrowDown",
    Pi = 2,
    ji = new RegExp(`${Ni}|${Ii}|${xi}`),
    Mi = "hide.bs.dropdown",
    $i = "hidden.bs.dropdown",
    Hi = "show.bs.dropdown",
    Bi = "shown.bs.dropdown",
    Ri = "show",
    Wi = "dropup",
    zi = "dropend",
    qi = "dropstart",
    Fi = "navbar",
    Ui = '[data-bs-toggle="dropdown"]',
    Vi = ".dropdown-menu",
    Ki = ".navbar-nav",
    Xi = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
    Yi = g() ? "top-end" : "top-start",
    Qi = g() ? "top-start" : "top-end",
    Gi = g() ? "bottom-end" : "bottom-start",
    Zi = g() ? "bottom-start" : "bottom-end",
    Ji = g() ? "left-start" : "right-start",
    tn = g() ? "right-start" : "left-start",
    en = {
      offset: [0, 2],
      boundary: "clippingParents",
      reference: "toggle",
      display: "dynamic",
      popperConfig: null,
      autoClose: !0,
    },
    nn = {
      offset: "(array|string|function)",
      boundary: "(string|element)",
      reference: "(string|element|object)",
      display: "string",
      popperConfig: "(null|object|function)",
      autoClose: "(boolean|string)",
    };
  class sn extends B {
    constructor(t, e) {
      super(t),
        (this._popper = null),
        (this._config = this._getConfig(e)),
        (this._menu = this._getMenuElement()),
        (this._inNavbar = this._detectNavbar());
    }
    static get Default() {
      return en;
    }
    static get DefaultType() {
      return nn;
    }
    static get NAME() {
      return Li;
    }
    toggle() {
      return this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (c(this._element) || this._isShown(this._menu)) return;
      const t = { relatedTarget: this._element };
      if (j.trigger(this._element, Hi, t).defaultPrevented) return;
      const e = sn.getParentFromElement(this._element);
      this._inNavbar
        ? Z.setDataAttribute(this._menu, "popper", "none")
        : this._createPopper(e),
        "ontouchstart" in document.documentElement &&
          !e.closest(Ki) &&
          []
            .concat(...document.body.children)
            .forEach((t) => j.on(t, "mouseover", d)),
        this._element.focus(),
        this._element.setAttribute("aria-expanded", !0),
        this._menu.classList.add(Ri),
        this._element.classList.add(Ri),
        j.trigger(this._element, Bi, t);
    }
    hide() {
      if (c(this._element) || !this._isShown(this._menu)) return;
      const t = { relatedTarget: this._element };
      this._completeHide(t);
    }
    dispose() {
      this._popper && this._popper.destroy(), super.dispose();
    }
    update() {
      (this._inNavbar = this._detectNavbar()),
        this._popper && this._popper.update();
    }
    _completeHide(t) {
      j.trigger(this._element, Mi, t).defaultPrevented ||
        ("ontouchstart" in document.documentElement &&
          []
            .concat(...document.body.children)
            .forEach((t) => j.off(t, "mouseover", d)),
        this._popper && this._popper.destroy(),
        this._menu.classList.remove(Ri),
        this._element.classList.remove(Ri),
        this._element.setAttribute("aria-expanded", "false"),
        Z.removeDataAttribute(this._menu, "popper"),
        j.trigger(this._element, $i, t));
    }
    _getConfig(t) {
      if (
        ((t = {
          ...this.constructor.Default,
          ...Z.getDataAttributes(this._element),
          ...t,
        }),
        a(Li, t, this.constructor.DefaultType),
        "object" == typeof t.reference &&
          !o(t.reference) &&
          "function" != typeof t.reference.getBoundingClientRect)
      )
        throw new TypeError(
          `${Li.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
        );
      return t;
    }
    _createPopper(t) {
      if (void 0 === ki)
        throw new TypeError(
          "Bootstrap's dropdowns require Popper (https://popper.js.org)"
        );
      let e = this._element;
      "parent" === this._config.reference
        ? (e = t)
        : o(this._config.reference)
        ? (e = r(this._config.reference))
        : "object" == typeof this._config.reference &&
          (e = this._config.reference);
      const i = this._getPopperConfig(),
        n = i.modifiers.find(
          (t) => "applyStyles" === t.name && !1 === t.enabled
        );
      (this._popper = Ci(e, this._menu, i)),
        n && Z.setDataAttribute(this._menu, "popper", "static");
    }
    _isShown(t = this._element) {
      return t.classList.contains(Ri);
    }
    _getMenuElement() {
      return J.next(this._element, Vi)[0];
    }
    _getPlacement() {
      const t = this._element.parentNode;
      if (t.classList.contains(zi)) return Ji;
      if (t.classList.contains(qi)) return tn;
      const e =
        "end" ===
        getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
      return t.classList.contains(Wi) ? (e ? Qi : Yi) : e ? Zi : Gi;
    }
    _detectNavbar() {
      return null !== this._element.closest(`.${Fi}`);
    }
    _getOffset() {
      const { offset: t } = this._config;
      return "string" == typeof t
        ? t.split(",").map((t) => Number.parseInt(t, 10))
        : "function" == typeof t
        ? (e) => t(e, this._element)
        : t;
    }
    _getPopperConfig() {
      const t = {
        placement: this._getPlacement(),
        modifiers: [
          {
            name: "preventOverflow",
            options: { boundary: this._config.boundary },
          },
          { name: "offset", options: { offset: this._getOffset() } },
        ],
      };
      return (
        "static" === this._config.display &&
          (t.modifiers = [{ name: "applyStyles", enabled: !1 }]),
        {
          ...t,
          ...("function" == typeof this._config.popperConfig
            ? this._config.popperConfig(t)
            : this._config.popperConfig),
        }
      );
    }
    _selectMenuItem({ key: t, target: e }) {
      const i = J.find(Xi, this._menu).filter(l);
      i.length && v(i, e, t === Ii, !i.includes(e)).focus();
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = sn.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
    static clearMenus(t) {
      if (t && (t.button === Pi || ("keyup" === t.type && t.key !== Si)))
        return;
      const e = J.find(Ui);
      for (let i = 0, n = e.length; i < n; i++) {
        const n = sn.getInstance(e[i]);
        if (!n || !1 === n._config.autoClose) continue;
        if (!n._isShown()) continue;
        const s = { relatedTarget: n._element };
        if (t) {
          const e = t.composedPath(),
            i = e.includes(n._menu);
          if (
            e.includes(n._element) ||
            ("inside" === n._config.autoClose && !i) ||
            ("outside" === n._config.autoClose && i)
          )
            continue;
          if (
            n._menu.contains(t.target) &&
            (("keyup" === t.type && t.key === Si) ||
              /input|select|option|textarea|form/i.test(t.target.tagName))
          )
            continue;
          "click" === t.type && (s.clickEvent = t);
        }
        n._completeHide(s);
      }
    }
    static getParentFromElement(t) {
      return n(t) || t.parentNode;
    }
    static dataApiKeydownHandler(t) {
      if (
        /input|textarea/i.test(t.target.tagName)
          ? t.key === Di ||
            (t.key !== xi &&
              ((t.key !== Ii && t.key !== Ni) || t.target.closest(Vi)))
          : !ji.test(t.key)
      )
        return;
      const e = this.classList.contains(Ri);
      if (!e && t.key === xi) return;
      if ((t.preventDefault(), t.stopPropagation(), c(this))) return;
      const i = this.matches(Ui) ? this : J.prev(this, Ui)[0],
        n = sn.getOrCreateInstance(i);
      if (t.key !== xi)
        return t.key === Ni || t.key === Ii
          ? (e || n.show(), void n._selectMenuItem(t))
          : void ((e && t.key !== Di) || sn.clearMenus());
      n.hide();
    }
  }
  j.on(document, "keydown.bs.dropdown.data-api", Ui, sn.dataApiKeydownHandler),
    j.on(
      document,
      "keydown.bs.dropdown.data-api",
      Vi,
      sn.dataApiKeydownHandler
    ),
    j.on(document, "click.bs.dropdown.data-api", sn.clearMenus),
    j.on(document, "keyup.bs.dropdown.data-api", sn.clearMenus),
    j.on(document, "click.bs.dropdown.data-api", Ui, function (t) {
      t.preventDefault(), sn.getOrCreateInstance(this).toggle();
    }),
    m(sn);
  const on = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    rn = ".sticky-top";
  class an {
    constructor() {
      this._element = document.body;
    }
    getWidth() {
      const t = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - t);
    }
    hide() {
      const t = this.getWidth();
      this._disableOverFlow(),
        this._setElementAttributes(this._element, "paddingRight", (e) => e + t),
        this._setElementAttributes(on, "paddingRight", (e) => e + t),
        this._setElementAttributes(rn, "marginRight", (e) => e - t);
    }
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, "overflow"),
        (this._element.style.overflow = "hidden");
    }
    _setElementAttributes(t, e, i) {
      const n = this.getWidth();
      this._applyManipulationCallback(t, (t) => {
        if (t !== this._element && window.innerWidth > t.clientWidth + n)
          return;
        this._saveInitialAttribute(t, e);
        const s = window.getComputedStyle(t)[e];
        t.style[e] = `${i(Number.parseFloat(s))}px`;
      });
    }
    reset() {
      this._resetElementAttributes(this._element, "overflow"),
        this._resetElementAttributes(this._element, "paddingRight"),
        this._resetElementAttributes(on, "paddingRight"),
        this._resetElementAttributes(rn, "marginRight");
    }
    _saveInitialAttribute(t, e) {
      const i = t.style[e];
      i && Z.setDataAttribute(t, e, i);
    }
    _resetElementAttributes(t, e) {
      this._applyManipulationCallback(t, (t) => {
        const i = Z.getDataAttribute(t, e);
        void 0 === i
          ? t.style.removeProperty(e)
          : (Z.removeDataAttribute(t, e), (t.style[e] = i));
      });
    }
    _applyManipulationCallback(t, e) {
      o(t) ? e(t) : J.find(t, this._element).forEach(e);
    }
    isOverflowing() {
      return this.getWidth() > 0;
    }
  }
  const ln = {
      className: "modal-backdrop",
      isVisible: !0,
      isAnimated: !1,
      rootElement: "body",
      clickCallback: null,
    },
    cn = {
      className: "string",
      isVisible: "boolean",
      isAnimated: "boolean",
      rootElement: "(element|string)",
      clickCallback: "(function|null)",
    },
    hn = "backdrop",
    dn = "fade",
    un = "show",
    fn = `mousedown.bs.${hn}`;
  class pn {
    constructor(t) {
      (this._config = this._getConfig(t)),
        (this._isAppended = !1),
        (this._element = null);
    }
    show(t) {
      this._config.isVisible
        ? (this._append(),
          this._config.isAnimated && u(this._getElement()),
          this._getElement().classList.add(un),
          this._emulateAnimation(() => {
            _(t);
          }))
        : _(t);
    }
    hide(t) {
      this._config.isVisible
        ? (this._getElement().classList.remove(un),
          this._emulateAnimation(() => {
            this.dispose(), _(t);
          }))
        : _(t);
    }
    _getElement() {
      if (!this._element) {
        const t = document.createElement("div");
        (t.className = this._config.className),
          this._config.isAnimated && t.classList.add(dn),
          (this._element = t);
      }
      return this._element;
    }
    _getConfig(t) {
      return (
        ((t = { ...ln, ...("object" == typeof t ? t : {}) }).rootElement = r(
          t.rootElement
        )),
        a(hn, t, cn),
        t
      );
    }
    _append() {
      this._isAppended ||
        (this._config.rootElement.append(this._getElement()),
        j.on(this._getElement(), fn, () => {
          _(this._config.clickCallback);
        }),
        (this._isAppended = !0));
    }
    dispose() {
      this._isAppended &&
        (j.off(this._element, fn),
        this._element.remove(),
        (this._isAppended = !1));
    }
    _emulateAnimation(t) {
      b(t, this._getElement(), this._config.isAnimated);
    }
  }
  const gn = { trapElement: null, autofocus: !0 },
    mn = { trapElement: "element", autofocus: "boolean" },
    _n = "focustrap",
    bn = ".bs.focustrap",
    vn = `focusin${bn}`,
    yn = `keydown.tab${bn}`,
    wn = "Tab",
    En = "forward",
    An = "backward";
  class Tn {
    constructor(t) {
      (this._config = this._getConfig(t)),
        (this._isActive = !1),
        (this._lastTabNavDirection = null);
    }
    activate() {
      const { trapElement: t, autofocus: e } = this._config;
      this._isActive ||
        (e && t.focus(),
        j.off(document, bn),
        j.on(document, vn, (t) => this._handleFocusin(t)),
        j.on(document, yn, (t) => this._handleKeydown(t)),
        (this._isActive = !0));
    }
    deactivate() {
      this._isActive && ((this._isActive = !1), j.off(document, bn));
    }
    _handleFocusin(t) {
      const { target: e } = t,
        { trapElement: i } = this._config;
      if (e === document || e === i || i.contains(e)) return;
      const n = J.focusableChildren(i);
      0 === n.length
        ? i.focus()
        : this._lastTabNavDirection === An
        ? n[n.length - 1].focus()
        : n[0].focus();
    }
    _handleKeydown(t) {
      t.key === wn && (this._lastTabNavDirection = t.shiftKey ? An : En);
    }
    _getConfig(t) {
      return (
        (t = { ...gn, ...("object" == typeof t ? t : {}) }), a(_n, t, mn), t
      );
    }
  }
  const On = "modal",
    Cn = ".bs.modal",
    kn = "Escape",
    Ln = { backdrop: !0, keyboard: !0, focus: !0 },
    xn = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      focus: "boolean",
    },
    Dn = `hide${Cn}`,
    Sn = `hidePrevented${Cn}`,
    Nn = `hidden${Cn}`,
    In = `show${Cn}`,
    Pn = `shown${Cn}`,
    jn = `resize${Cn}`,
    Mn = `click.dismiss${Cn}`,
    $n = `keydown.dismiss${Cn}`,
    Hn = `mouseup.dismiss${Cn}`,
    Bn = `mousedown.dismiss${Cn}`,
    Rn = `click${Cn}.data-api`,
    Wn = "modal-open",
    zn = "fade",
    qn = "show",
    Fn = "modal-static",
    Un = ".modal-dialog",
    Vn = ".modal-body";
  class Kn extends B {
    constructor(t, e) {
      super(t),
        (this._config = this._getConfig(e)),
        (this._dialog = J.findOne(Un, this._element)),
        (this._backdrop = this._initializeBackDrop()),
        (this._focustrap = this._initializeFocusTrap()),
        (this._isShown = !1),
        (this._ignoreBackdropClick = !1),
        (this._isTransitioning = !1),
        (this._scrollBar = new an());
    }
    static get Default() {
      return Ln;
    }
    static get NAME() {
      return On;
    }
    toggle(t) {
      return this._isShown ? this.hide() : this.show(t);
    }
    show(t) {
      if (this._isShown || this._isTransitioning) return;
      j.trigger(this._element, In, { relatedTarget: t }).defaultPrevented ||
        ((this._isShown = !0),
        this._isAnimated() && (this._isTransitioning = !0),
        this._scrollBar.hide(),
        document.body.classList.add(Wn),
        this._adjustDialog(),
        this._setEscapeEvent(),
        this._setResizeEvent(),
        j.on(this._dialog, Bn, () => {
          j.one(this._element, Hn, (t) => {
            t.target === this._element && (this._ignoreBackdropClick = !0);
          });
        }),
        this._showBackdrop(() => this._showElement(t)));
    }
    hide() {
      if (!this._isShown || this._isTransitioning) return;
      if (j.trigger(this._element, Dn).defaultPrevented) return;
      this._isShown = !1;
      const t = this._isAnimated();
      t && (this._isTransitioning = !0),
        this._setEscapeEvent(),
        this._setResizeEvent(),
        this._focustrap.deactivate(),
        this._element.classList.remove(qn),
        j.off(this._element, Mn),
        j.off(this._dialog, Bn),
        this._queueCallback(() => this._hideModal(), this._element, t);
    }
    dispose() {
      [window, this._dialog].forEach((t) => j.off(t, Cn)),
        this._backdrop.dispose(),
        this._focustrap.deactivate(),
        super.dispose();
    }
    handleUpdate() {
      this._adjustDialog();
    }
    _initializeBackDrop() {
      return new pn({
        isVisible: Boolean(this._config.backdrop),
        isAnimated: this._isAnimated(),
      });
    }
    _initializeFocusTrap() {
      return new Tn({ trapElement: this._element });
    }
    _getConfig(t) {
      return (
        (t = {
          ...Ln,
          ...Z.getDataAttributes(this._element),
          ...("object" == typeof t ? t : {}),
        }),
        a(On, t, xn),
        t
      );
    }
    _showElement(t) {
      const e = this._isAnimated(),
        i = J.findOne(Vn, this._dialog);
      (this._element.parentNode &&
        this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
        document.body.append(this._element),
        (this._element.style.display = "block"),
        this._element.removeAttribute("aria-hidden"),
        this._element.setAttribute("aria-modal", !0),
        this._element.setAttribute("role", "dialog"),
        (this._element.scrollTop = 0),
        i && (i.scrollTop = 0),
        e && u(this._element),
        this._element.classList.add(qn);
      this._queueCallback(
        () => {
          this._config.focus && this._focustrap.activate(),
            (this._isTransitioning = !1),
            j.trigger(this._element, Pn, { relatedTarget: t });
        },
        this._dialog,
        e
      );
    }
    _setEscapeEvent() {
      this._isShown
        ? j.on(this._element, $n, (t) => {
            this._config.keyboard && t.key === kn
              ? (t.preventDefault(), this.hide())
              : this._config.keyboard ||
                t.key !== kn ||
                this._triggerBackdropTransition();
          })
        : j.off(this._element, $n);
    }
    _setResizeEvent() {
      this._isShown
        ? j.on(window, jn, () => this._adjustDialog())
        : j.off(window, jn);
    }
    _hideModal() {
      (this._element.style.display = "none"),
        this._element.setAttribute("aria-hidden", !0),
        this._element.removeAttribute("aria-modal"),
        this._element.removeAttribute("role"),
        (this._isTransitioning = !1),
        this._backdrop.hide(() => {
          document.body.classList.remove(Wn),
            this._resetAdjustments(),
            this._scrollBar.reset(),
            j.trigger(this._element, Nn);
        });
    }
    _showBackdrop(t) {
      j.on(this._element, Mn, (t) => {
        this._ignoreBackdropClick
          ? (this._ignoreBackdropClick = !1)
          : t.target === t.currentTarget &&
            (!0 === this._config.backdrop
              ? this.hide()
              : "static" === this._config.backdrop &&
                this._triggerBackdropTransition());
      }),
        this._backdrop.show(t);
    }
    _isAnimated() {
      return this._element.classList.contains(zn);
    }
    _triggerBackdropTransition() {
      if (j.trigger(this._element, Sn).defaultPrevented) return;
      const { classList: t, scrollHeight: e, style: i } = this._element,
        n = e > document.documentElement.clientHeight;
      (!n && "hidden" === i.overflowY) ||
        t.contains(Fn) ||
        (n || (i.overflowY = "hidden"),
        t.add(Fn),
        this._queueCallback(() => {
          t.remove(Fn),
            n ||
              this._queueCallback(() => {
                i.overflowY = "";
              }, this._dialog);
        }, this._dialog),
        this._element.focus());
    }
    _adjustDialog() {
      const t =
          this._element.scrollHeight > document.documentElement.clientHeight,
        e = this._scrollBar.getWidth(),
        i = e > 0;
      ((!i && t && !g()) || (i && !t && g())) &&
        (this._element.style.paddingLeft = `${e}px`),
        ((i && !t && !g()) || (!i && t && g())) &&
          (this._element.style.paddingRight = `${e}px`);
    }
    _resetAdjustments() {
      (this._element.style.paddingLeft = ""),
        (this._element.style.paddingRight = "");
    }
    static jQueryInterface(t, e) {
      return this.each(function () {
        const i = Kn.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
          i[t](e);
        }
      });
    }
  }
  j.on(document, Rn, '[data-bs-toggle="modal"]', function (t) {
    const e = n(this);
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
      j.one(e, In, (t) => {
        t.defaultPrevented ||
          j.one(e, Nn, () => {
            l(this) && this.focus();
          });
      });
    const i = J.findOne(".modal.show");
    i && Kn.getInstance(i).hide(), Kn.getOrCreateInstance(e).toggle(this);
  }),
    R(Kn),
    m(Kn);
  const Xn = "offcanvas",
    Yn = "Escape",
    Qn = { backdrop: !0, keyboard: !0, scroll: !1 },
    Gn = { backdrop: "boolean", keyboard: "boolean", scroll: "boolean" },
    Zn = "show",
    Jn = "offcanvas-backdrop",
    ts = "show.bs.offcanvas",
    es = "shown.bs.offcanvas",
    is = "hide.bs.offcanvas",
    ns = "hidden.bs.offcanvas",
    ss = "keydown.dismiss.bs.offcanvas";
  class os extends B {
    constructor(t, e) {
      super(t),
        (this._config = this._getConfig(e)),
        (this._isShown = !1),
        (this._backdrop = this._initializeBackDrop()),
        (this._focustrap = this._initializeFocusTrap()),
        this._addEventListeners();
    }
    static get NAME() {
      return Xn;
    }
    static get Default() {
      return Qn;
    }
    toggle(t) {
      return this._isShown ? this.hide() : this.show(t);
    }
    show(t) {
      if (this._isShown) return;
      if (j.trigger(this._element, ts, { relatedTarget: t }).defaultPrevented)
        return;
      (this._isShown = !0),
        (this._element.style.visibility = "visible"),
        this._backdrop.show(),
        this._config.scroll || new an().hide(),
        this._element.removeAttribute("aria-hidden"),
        this._element.setAttribute("aria-modal", !0),
        this._element.setAttribute("role", "dialog"),
        this._element.classList.add(Zn);
      this._queueCallback(
        () => {
          this._config.scroll || this._focustrap.activate(),
            j.trigger(this._element, es, { relatedTarget: t });
        },
        this._element,
        !0
      );
    }
    hide() {
      if (!this._isShown) return;
      if (j.trigger(this._element, is).defaultPrevented) return;
      this._focustrap.deactivate(),
        this._element.blur(),
        (this._isShown = !1),
        this._element.classList.remove(Zn),
        this._backdrop.hide();
      this._queueCallback(
        () => {
          this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            this._element.removeAttribute("role"),
            (this._element.style.visibility = "hidden"),
            this._config.scroll || new an().reset(),
            j.trigger(this._element, ns);
        },
        this._element,
        !0
      );
    }
    dispose() {
      this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
    }
    _getConfig(t) {
      return (
        (t = {
          ...Qn,
          ...Z.getDataAttributes(this._element),
          ...("object" == typeof t ? t : {}),
        }),
        a(Xn, t, Gn),
        t
      );
    }
    _initializeBackDrop() {
      return new pn({
        className: Jn,
        isVisible: this._config.backdrop,
        isAnimated: !0,
        rootElement: this._element.parentNode,
        clickCallback: () => this.hide(),
      });
    }
    _initializeFocusTrap() {
      return new Tn({ trapElement: this._element });
    }
    _addEventListeners() {
      j.on(this._element, ss, (t) => {
        this._config.keyboard && t.key === Yn && this.hide();
      });
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = os.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  j.on(
    document,
    "click.bs.offcanvas.data-api",
    '[data-bs-toggle="offcanvas"]',
    function (t) {
      const e = n(this);
      if ((["A", "AREA"].includes(this.tagName) && t.preventDefault(), c(this)))
        return;
      j.one(e, ns, () => {
        l(this) && this.focus();
      });
      const i = J.findOne(".offcanvas.show");
      i && i !== e && os.getInstance(i).hide(),
        os.getOrCreateInstance(e).toggle(this);
    }
  ),
    j.on(window, "load.bs.offcanvas.data-api", () =>
      J.find(".offcanvas.show").forEach((t) => os.getOrCreateInstance(t).show())
    ),
    R(os),
    m(os);
  const rs = new Set([
      "background",
      "cite",
      "href",
      "itemtype",
      "longdesc",
      "poster",
      "src",
      "xlink:href",
    ]),
    as = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
    ls =
      /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
    cs = (t, e) => {
      const i = t.nodeName.toLowerCase();
      if (e.includes(i))
        return (
          !rs.has(i) || Boolean(as.test(t.nodeValue) || ls.test(t.nodeValue))
        );
      const n = e.filter((t) => t instanceof RegExp);
      for (let t = 0, e = n.length; t < e; t++) if (n[t].test(i)) return !0;
      return !1;
    },
    hs = {
      "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
      a: ["target", "href", "title", "rel"],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
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
      ul: [],
    };
  function ds(t, e, i) {
    if (!t.length) return t;
    if (i && "function" == typeof i) return i(t);
    const n = new window.DOMParser().parseFromString(t, "text/html"),
      s = [].concat(...n.body.querySelectorAll("*"));
    for (let t = 0, i = s.length; t < i; t++) {
      const i = s[t],
        n = i.nodeName.toLowerCase();
      if (!Object.keys(e).includes(n)) {
        i.remove();
        continue;
      }
      const o = [].concat(...i.attributes),
        r = [].concat(e["*"] || [], e[n] || []);
      o.forEach((t) => {
        cs(t, r) || i.removeAttribute(t.nodeName);
      });
    }
    return n.body.innerHTML;
  }
  const us = "tooltip",
    fs = "bs-tooltip",
    ps = new Set(["sanitize", "allowList", "sanitizeFn"]),
    gs = {
      animation: "boolean",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
      delay: "(number|object)",
      html: "boolean",
      selector: "(string|boolean)",
      placement: "(string|function)",
      offset: "(array|string|function)",
      container: "(string|element|boolean)",
      fallbackPlacements: "array",
      boundary: "(string|element)",
      customClass: "(string|function)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      allowList: "object",
      popperConfig: "(null|object|function)",
    },
    ms = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: g() ? "left" : "right",
      BOTTOM: "bottom",
      LEFT: g() ? "right" : "left",
    },
    _s = {
      animation: !0,
      template:
        '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !1,
      selector: !1,
      placement: "top",
      offset: [0, 0],
      container: !1,
      fallbackPlacements: ["top", "right", "bottom", "left"],
      boundary: "clippingParents",
      customClass: "",
      sanitize: !0,
      sanitizeFn: null,
      allowList: hs,
      popperConfig: null,
    },
    bs = {
      HIDE: "hide.bs.tooltip",
      HIDDEN: "hidden.bs.tooltip",
      SHOW: "show.bs.tooltip",
      SHOWN: "shown.bs.tooltip",
      INSERTED: "inserted.bs.tooltip",
      CLICK: "click.bs.tooltip",
      FOCUSIN: "focusin.bs.tooltip",
      FOCUSOUT: "focusout.bs.tooltip",
      MOUSEENTER: "mouseenter.bs.tooltip",
      MOUSELEAVE: "mouseleave.bs.tooltip",
    },
    vs = "fade",
    ys = "show",
    ws = "show",
    Es = "out",
    As = ".tooltip-inner",
    Ts = ".modal",
    Os = "hide.bs.modal",
    Cs = "hover",
    ks = "focus",
    Ls = "click",
    xs = "manual";
  class Ds extends B {
    constructor(t, e) {
      if (void 0 === ki)
        throw new TypeError(
          "Bootstrap's tooltips require Popper (https://popper.js.org)"
        );
      super(t),
        (this._isEnabled = !0),
        (this._timeout = 0),
        (this._hoverState = ""),
        (this._activeTrigger = {}),
        (this._popper = null),
        (this._config = this._getConfig(e)),
        (this.tip = null),
        this._setListeners();
    }
    static get Default() {
      return _s;
    }
    static get NAME() {
      return us;
    }
    static get Event() {
      return bs;
    }
    static get DefaultType() {
      return gs;
    }
    enable() {
      this._isEnabled = !0;
    }
    disable() {
      this._isEnabled = !1;
    }
    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }
    toggle(t) {
      if (this._isEnabled)
        if (t) {
          const e = this._initializeOnDelegatedTarget(t);
          (e._activeTrigger.click = !e._activeTrigger.click),
            e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e);
        } else {
          if (this.getTipElement().classList.contains(ys))
            return void this._leave(null, this);
          this._enter(null, this);
        }
    }
    dispose() {
      clearTimeout(this._timeout),
        j.off(this._element.closest(Ts), Os, this._hideModalHandler),
        this.tip && this.tip.remove(),
        this._disposePopper(),
        super.dispose();
    }
    show() {
      if ("none" === this._element.style.display)
        throw new Error("Please use show on visible elements");
      if (!this.isWithContent() || !this._isEnabled) return;
      const e = j.trigger(this._element, this.constructor.Event.SHOW),
        i = h(this._element),
        n =
          null === i
            ? this._element.ownerDocument.documentElement.contains(
                this._element
              )
            : i.contains(this._element);
      if (e.defaultPrevented || !n) return;
      "tooltip" === this.constructor.NAME &&
        this.tip &&
        this.getTitle() !== this.tip.querySelector(As).innerHTML &&
        (this._disposePopper(), this.tip.remove(), (this.tip = null));
      const s = this.getTipElement(),
        o = t(this.constructor.NAME);
      s.setAttribute("id", o),
        this._element.setAttribute("aria-describedby", o),
        this._config.animation && s.classList.add(vs);
      const r =
          "function" == typeof this._config.placement
            ? this._config.placement.call(this, s, this._element)
            : this._config.placement,
        a = this._getAttachment(r);
      this._addAttachmentClass(a);
      const { container: l } = this._config;
      $.set(s, this.constructor.DATA_KEY, this),
        this._element.ownerDocument.documentElement.contains(this.tip) ||
          (l.append(s),
          j.trigger(this._element, this.constructor.Event.INSERTED)),
        this._popper
          ? this._popper.update()
          : (this._popper = Ci(this._element, s, this._getPopperConfig(a))),
        s.classList.add(ys);
      const c = this._resolvePossibleFunction(this._config.customClass);
      c && s.classList.add(...c.split(" ")),
        "ontouchstart" in document.documentElement &&
          [].concat(...document.body.children).forEach((t) => {
            j.on(t, "mouseover", d);
          });
      const u = this.tip.classList.contains(vs);
      this._queueCallback(
        () => {
          const t = this._hoverState;
          (this._hoverState = null),
            j.trigger(this._element, this.constructor.Event.SHOWN),
            t === Es && this._leave(null, this);
        },
        this.tip,
        u
      );
    }
    hide() {
      if (!this._popper) return;
      const t = this.getTipElement();
      if (
        j.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented
      )
        return;
      t.classList.remove(ys),
        "ontouchstart" in document.documentElement &&
          []
            .concat(...document.body.children)
            .forEach((t) => j.off(t, "mouseover", d)),
        (this._activeTrigger[Ls] = !1),
        (this._activeTrigger[ks] = !1),
        (this._activeTrigger[Cs] = !1);
      const e = this.tip.classList.contains(vs);
      this._queueCallback(
        () => {
          this._isWithActiveTrigger() ||
            (this._hoverState !== ws && t.remove(),
            this._cleanTipClass(),
            this._element.removeAttribute("aria-describedby"),
            j.trigger(this._element, this.constructor.Event.HIDDEN),
            this._disposePopper());
        },
        this.tip,
        e
      ),
        (this._hoverState = "");
    }
    update() {
      null !== this._popper && this._popper.update();
    }
    isWithContent() {
      return Boolean(this.getTitle());
    }
    getTipElement() {
      if (this.tip) return this.tip;
      const t = document.createElement("div");
      t.innerHTML = this._config.template;
      const e = t.children[0];
      return (
        this.setContent(e), e.classList.remove(vs, ys), (this.tip = e), this.tip
      );
    }
    setContent(t) {
      this._sanitizeAndSetContent(t, this.getTitle(), As);
    }
    _sanitizeAndSetContent(t, e, i) {
      const n = J.findOne(i, t);
      e || !n ? this.setElementContent(n, e) : n.remove();
    }
    setElementContent(t, e) {
      if (null !== t)
        return o(e)
          ? ((e = r(e)),
            void (this._config.html
              ? e.parentNode !== t && ((t.innerHTML = ""), t.append(e))
              : (t.textContent = e.textContent)))
          : void (this._config.html
              ? (this._config.sanitize &&
                  (e = ds(e, this._config.allowList, this._config.sanitizeFn)),
                (t.innerHTML = e))
              : (t.textContent = e));
    }
    getTitle() {
      const t =
        this._element.getAttribute("data-bs-original-title") ||
        this._config.title;
      return this._resolvePossibleFunction(t);
    }
    updateAttachment(t) {
      return "right" === t ? "end" : "left" === t ? "start" : t;
    }
    _initializeOnDelegatedTarget(t, e) {
      return (
        e ||
        this.constructor.getOrCreateInstance(
          t.delegateTarget,
          this._getDelegateConfig()
        )
      );
    }
    _getOffset() {
      const { offset: t } = this._config;
      return "string" == typeof t
        ? t.split(",").map((t) => Number.parseInt(t, 10))
        : "function" == typeof t
        ? (e) => t(e, this._element)
        : t;
    }
    _resolvePossibleFunction(t) {
      return "function" == typeof t ? t.call(this._element) : t;
    }
    _getPopperConfig(t) {
      const e = {
        placement: t,
        modifiers: [
          {
            name: "flip",
            options: { fallbackPlacements: this._config.fallbackPlacements },
          },
          { name: "offset", options: { offset: this._getOffset() } },
          {
            name: "preventOverflow",
            options: { boundary: this._config.boundary },
          },
          {
            name: "arrow",
            options: { element: `.${this.constructor.NAME}-arrow` },
          },
          {
            name: "onChange",
            enabled: !0,
            phase: "afterWrite",
            fn: (t) => this._handlePopperPlacementChange(t),
          },
        ],
        onFirstUpdate: (t) => {
          t.options.placement !== t.placement &&
            this._handlePopperPlacementChange(t);
        },
      };
      return {
        ...e,
        ...("function" == typeof this._config.popperConfig
          ? this._config.popperConfig(e)
          : this._config.popperConfig),
      };
    }
    _addAttachmentClass(t) {
      this.getTipElement().classList.add(
        `${this._getBasicClassPrefix()}-${this.updateAttachment(t)}`
      );
    }
    _getAttachment(t) {
      return ms[t.toUpperCase()];
    }
    _setListeners() {
      this._config.trigger.split(" ").forEach((t) => {
        if ("click" === t)
          j.on(
            this._element,
            this.constructor.Event.CLICK,
            this._config.selector,
            (t) => this.toggle(t)
          );
        else if (t !== xs) {
          const e =
              t === Cs
                ? this.constructor.Event.MOUSEENTER
                : this.constructor.Event.FOCUSIN,
            i =
              t === Cs
                ? this.constructor.Event.MOUSELEAVE
                : this.constructor.Event.FOCUSOUT;
          j.on(this._element, e, this._config.selector, (t) => this._enter(t)),
            j.on(this._element, i, this._config.selector, (t) =>
              this._leave(t)
            );
        }
      }),
        (this._hideModalHandler = () => {
          this._element && this.hide();
        }),
        j.on(this._element.closest(Ts), Os, this._hideModalHandler),
        this._config.selector
          ? (this._config = {
              ...this._config,
              trigger: "manual",
              selector: "",
            })
          : this._fixTitle();
    }
    _fixTitle() {
      const t = this._element.getAttribute("title"),
        e = typeof this._element.getAttribute("data-bs-original-title");
      (t || "string" !== e) &&
        (this._element.setAttribute("data-bs-original-title", t || ""),
        !t ||
          this._element.getAttribute("aria-label") ||
          this._element.textContent ||
          this._element.setAttribute("aria-label", t),
        this._element.setAttribute("title", ""));
    }
    _enter(t, e) {
      (e = this._initializeOnDelegatedTarget(t, e)),
        t && (e._activeTrigger["focusin" === t.type ? ks : Cs] = !0),
        e.getTipElement().classList.contains(ys) || e._hoverState === ws
          ? (e._hoverState = ws)
          : (clearTimeout(e._timeout),
            (e._hoverState = ws),
            e._config.delay && e._config.delay.show
              ? (e._timeout = setTimeout(() => {
                  e._hoverState === ws && e.show();
                }, e._config.delay.show))
              : e.show());
    }
    _leave(t, e) {
      (e = this._initializeOnDelegatedTarget(t, e)),
        t &&
          (e._activeTrigger["focusout" === t.type ? ks : Cs] =
            e._element.contains(t.relatedTarget)),
        e._isWithActiveTrigger() ||
          (clearTimeout(e._timeout),
          (e._hoverState = Es),
          e._config.delay && e._config.delay.hide
            ? (e._timeout = setTimeout(() => {
                e._hoverState === Es && e.hide();
              }, e._config.delay.hide))
            : e.hide());
    }
    _isWithActiveTrigger() {
      for (const t in this._activeTrigger)
        if (this._activeTrigger[t]) return !0;
      return !1;
    }
    _getConfig(t) {
      const e = Z.getDataAttributes(this._element);
      return (
        Object.keys(e).forEach((t) => {
          ps.has(t) && delete e[t];
        }),
        ((t = {
          ...this.constructor.Default,
          ...e,
          ...("object" == typeof t && t ? t : {}),
        }).container = !1 === t.container ? document.body : r(t.container)),
        "number" == typeof t.delay &&
          (t.delay = { show: t.delay, hide: t.delay }),
        "number" == typeof t.title && (t.title = t.title.toString()),
        "number" == typeof t.content && (t.content = t.content.toString()),
        a(us, t, this.constructor.DefaultType),
        t.sanitize && (t.template = ds(t.template, t.allowList, t.sanitizeFn)),
        t
      );
    }
    _getDelegateConfig() {
      const t = {};
      for (const e in this._config)
        this.constructor.Default[e] !== this._config[e] &&
          (t[e] = this._config[e]);
      return t;
    }
    _cleanTipClass() {
      const t = this.getTipElement(),
        e = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`, "g"),
        i = t.getAttribute("class").match(e);
      null !== i &&
        i.length > 0 &&
        i.map((t) => t.trim()).forEach((e) => t.classList.remove(e));
    }
    _getBasicClassPrefix() {
      return fs;
    }
    _handlePopperPlacementChange(t) {
      const { state: e } = t;
      e &&
        ((this.tip = e.elements.popper),
        this._cleanTipClass(),
        this._addAttachmentClass(this._getAttachment(e.placement)));
    }
    _disposePopper() {
      this._popper && (this._popper.destroy(), (this._popper = null));
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Ds.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  m(Ds);
  const Ss = "popover",
    Ns = "bs-popover",
    Is = {
      ...Ds.Default,
      placement: "right",
      offset: [0, 8],
      trigger: "click",
      content: "",
      template:
        '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    },
    Ps = { ...Ds.DefaultType, content: "(string|element|function)" },
    js = {
      HIDE: "hide.bs.popover",
      HIDDEN: "hidden.bs.popover",
      SHOW: "show.bs.popover",
      SHOWN: "shown.bs.popover",
      INSERTED: "inserted.bs.popover",
      CLICK: "click.bs.popover",
      FOCUSIN: "focusin.bs.popover",
      FOCUSOUT: "focusout.bs.popover",
      MOUSEENTER: "mouseenter.bs.popover",
      MOUSELEAVE: "mouseleave.bs.popover",
    },
    Ms = ".popover-header",
    $s = ".popover-body";
  class Hs extends Ds {
    static get Default() {
      return Is;
    }
    static get NAME() {
      return Ss;
    }
    static get Event() {
      return js;
    }
    static get DefaultType() {
      return Ps;
    }
    isWithContent() {
      return this.getTitle() || this._getContent();
    }
    setContent(t) {
      this._sanitizeAndSetContent(t, this.getTitle(), Ms),
        this._sanitizeAndSetContent(t, this._getContent(), $s);
    }
    _getContent() {
      return this._resolvePossibleFunction(this._config.content);
    }
    _getBasicClassPrefix() {
      return Ns;
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Hs.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  m(Hs);
  const Bs = "scrollspy",
    Rs = ".bs.scrollspy",
    Ws = { offset: 10, method: "auto", target: "" },
    zs = { offset: "number", method: "string", target: "(string|element)" },
    qs = `activate${Rs}`,
    Fs = `scroll${Rs}`,
    Us = `load${Rs}.data-api`,
    Vs = "dropdown-item",
    Ks = "active",
    Xs = ".nav, .list-group",
    Ys = ".nav-link",
    Qs = ".nav-item",
    Gs = ".list-group-item",
    Zs = `${Ys}, ${Gs}, .${Vs}`,
    Js = ".dropdown",
    to = ".dropdown-toggle",
    eo = "offset",
    io = "position";
  class no extends B {
    constructor(t, e) {
      super(t),
        (this._scrollElement =
          "BODY" === this._element.tagName ? window : this._element),
        (this._config = this._getConfig(e)),
        (this._offsets = []),
        (this._targets = []),
        (this._activeTarget = null),
        (this._scrollHeight = 0),
        j.on(this._scrollElement, Fs, () => this._process()),
        this.refresh(),
        this._process();
    }
    static get Default() {
      return Ws;
    }
    static get NAME() {
      return Bs;
    }
    refresh() {
      const t = this._scrollElement === this._scrollElement.window ? eo : io,
        e = "auto" === this._config.method ? t : this._config.method,
        n = e === io ? this._getScrollTop() : 0;
      (this._offsets = []),
        (this._targets = []),
        (this._scrollHeight = this._getScrollHeight()),
        J.find(Zs, this._config.target)
          .map((t) => {
            const s = i(t),
              o = s ? J.findOne(s) : null;
            if (o) {
              const t = o.getBoundingClientRect();
              if (t.width || t.height) return [Z[e](o).top + n, s];
            }
            return null;
          })
          .filter((t) => t)
          .sort((t, e) => t[0] - e[0])
          .forEach((t) => {
            this._offsets.push(t[0]), this._targets.push(t[1]);
          });
    }
    dispose() {
      j.off(this._scrollElement, Rs), super.dispose();
    }
    _getConfig(t) {
      return (
        ((t = {
          ...Ws,
          ...Z.getDataAttributes(this._element),
          ...("object" == typeof t && t ? t : {}),
        }).target = r(t.target) || document.documentElement),
        a(Bs, t, zs),
        t
      );
    }
    _getScrollTop() {
      return this._scrollElement === window
        ? this._scrollElement.pageYOffset
        : this._scrollElement.scrollTop;
    }
    _getScrollHeight() {
      return (
        this._scrollElement.scrollHeight ||
        Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight
        )
      );
    }
    _getOffsetHeight() {
      return this._scrollElement === window
        ? window.innerHeight
        : this._scrollElement.getBoundingClientRect().height;
    }
    _process() {
      const t = this._getScrollTop() + this._config.offset,
        e = this._getScrollHeight(),
        i = this._config.offset + e - this._getOffsetHeight();
      if ((this._scrollHeight !== e && this.refresh(), t >= i)) {
        const t = this._targets[this._targets.length - 1];
        this._activeTarget !== t && this._activate(t);
      } else {
        if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0)
          return (this._activeTarget = null), void this._clear();
        for (let e = this._offsets.length; e--; ) {
          this._activeTarget !== this._targets[e] &&
            t >= this._offsets[e] &&
            (void 0 === this._offsets[e + 1] || t < this._offsets[e + 1]) &&
            this._activate(this._targets[e]);
        }
      }
    }
    _activate(t) {
      (this._activeTarget = t), this._clear();
      const e = Zs.split(",").map(
          (e) => `${e}[data-bs-target="${t}"],${e}[href="${t}"]`
        ),
        i = J.findOne(e.join(","), this._config.target);
      i.classList.add(Ks),
        i.classList.contains(Vs)
          ? J.findOne(to, i.closest(Js)).classList.add(Ks)
          : J.parents(i, Xs).forEach((t) => {
              J.prev(t, `${Ys}, ${Gs}`).forEach((t) => t.classList.add(Ks)),
                J.prev(t, Qs).forEach((t) => {
                  J.children(t, Ys).forEach((t) => t.classList.add(Ks));
                });
            }),
        j.trigger(this._scrollElement, qs, { relatedTarget: t });
    }
    _clear() {
      J.find(Zs, this._config.target)
        .filter((t) => t.classList.contains(Ks))
        .forEach((t) => t.classList.remove(Ks));
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = no.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  j.on(window, Us, () => {
    J.find('[data-bs-spy="scroll"]').forEach((t) => new no(t));
  }),
    m(no);
  const so = "tab",
    oo = "hide.bs.tab",
    ro = "hidden.bs.tab",
    ao = "show.bs.tab",
    lo = "shown.bs.tab",
    co = "dropdown-menu",
    ho = "active",
    uo = "fade",
    fo = "show",
    po = ".dropdown",
    go = ".nav, .list-group",
    mo = ".active",
    _o = ":scope > li > .active",
    bo = ".dropdown-toggle",
    vo = ":scope > .dropdown-menu .active";
  class yo extends B {
    static get NAME() {
      return so;
    }
    show() {
      if (
        this._element.parentNode &&
        this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
        this._element.classList.contains(ho)
      )
        return;
      let t;
      const e = n(this._element),
        i = this._element.closest(go);
      if (i) {
        const e = "UL" === i.nodeName || "OL" === i.nodeName ? _o : mo;
        t = (t = J.find(e, i))[t.length - 1];
      }
      const s = t ? j.trigger(t, oo, { relatedTarget: this._element }) : null;
      if (
        j.trigger(this._element, ao, { relatedTarget: t }).defaultPrevented ||
        (null !== s && s.defaultPrevented)
      )
        return;
      this._activate(this._element, i);
      const o = () => {
        j.trigger(t, ro, { relatedTarget: this._element }),
          j.trigger(this._element, lo, { relatedTarget: t });
      };
      e ? this._activate(e, e.parentNode, o) : o();
    }
    _activate(t, e, i) {
      const n = (
          !e || ("UL" !== e.nodeName && "OL" !== e.nodeName)
            ? J.children(e, mo)
            : J.find(_o, e)
        )[0],
        s = i && n && n.classList.contains(uo),
        o = () => this._transitionComplete(t, n, i);
      n && s ? (n.classList.remove(fo), this._queueCallback(o, t, !0)) : o();
    }
    _transitionComplete(t, e, i) {
      if (e) {
        e.classList.remove(ho);
        const t = J.findOne(vo, e.parentNode);
        t && t.classList.remove(ho),
          "tab" === e.getAttribute("role") &&
            e.setAttribute("aria-selected", !1);
      }
      t.classList.add(ho),
        "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0),
        u(t),
        t.classList.contains(uo) && t.classList.add(fo);
      let n = t.parentNode;
      if (
        (n && "LI" === n.nodeName && (n = n.parentNode),
        n && n.classList.contains(co))
      ) {
        const e = t.closest(po);
        e && J.find(bo, e).forEach((t) => t.classList.add(ho)),
          t.setAttribute("aria-expanded", !0);
      }
      i && i();
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = yo.getOrCreateInstance(this);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  j.on(
    document,
    "click.bs.tab.data-api",
    '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
    function (t) {
      if ((["A", "AREA"].includes(this.tagName) && t.preventDefault(), c(this)))
        return;
      yo.getOrCreateInstance(this).show();
    }
  ),
    m(yo);
  const wo = "toast",
    Eo = "mouseover.bs.toast",
    Ao = "mouseout.bs.toast",
    To = "focusin.bs.toast",
    Oo = "focusout.bs.toast",
    Co = "hide.bs.toast",
    ko = "hidden.bs.toast",
    Lo = "show.bs.toast",
    xo = "shown.bs.toast",
    Do = "fade",
    So = "hide",
    No = "show",
    Io = "showing",
    Po = { animation: "boolean", autohide: "boolean", delay: "number" },
    jo = { animation: !0, autohide: !0, delay: 5e3 };
  class Mo extends B {
    constructor(t, e) {
      super(t),
        (this._config = this._getConfig(e)),
        (this._timeout = null),
        (this._hasMouseInteraction = !1),
        (this._hasKeyboardInteraction = !1),
        this._setListeners();
    }
    static get DefaultType() {
      return Po;
    }
    static get Default() {
      return jo;
    }
    static get NAME() {
      return wo;
    }
    show() {
      if (j.trigger(this._element, Lo).defaultPrevented) return;
      this._clearTimeout(),
        this._config.animation && this._element.classList.add(Do);
      this._element.classList.remove(So),
        u(this._element),
        this._element.classList.add(No),
        this._element.classList.add(Io),
        this._queueCallback(
          () => {
            this._element.classList.remove(Io),
              j.trigger(this._element, xo),
              this._maybeScheduleHide();
          },
          this._element,
          this._config.animation
        );
    }
    hide() {
      if (!this._element.classList.contains(No)) return;
      if (j.trigger(this._element, Co).defaultPrevented) return;
      this._element.classList.add(Io),
        this._queueCallback(
          () => {
            this._element.classList.add(So),
              this._element.classList.remove(Io),
              this._element.classList.remove(No),
              j.trigger(this._element, ko);
          },
          this._element,
          this._config.animation
        );
    }
    dispose() {
      this._clearTimeout(),
        this._element.classList.contains(No) &&
          this._element.classList.remove(No),
        super.dispose();
    }
    _getConfig(t) {
      return (
        (t = {
          ...jo,
          ...Z.getDataAttributes(this._element),
          ...("object" == typeof t && t ? t : {}),
        }),
        a(wo, t, this.constructor.DefaultType),
        t
      );
    }
    _maybeScheduleHide() {
      this._config.autohide &&
        (this._hasMouseInteraction ||
          this._hasKeyboardInteraction ||
          (this._timeout = setTimeout(() => {
            this.hide();
          }, this._config.delay)));
    }
    _onInteraction(t, e) {
      switch (t.type) {
        case "mouseover":
        case "mouseout":
          this._hasMouseInteraction = e;
          break;
        case "focusin":
        case "focusout":
          this._hasKeyboardInteraction = e;
      }
      if (e) return void this._clearTimeout();
      const i = t.relatedTarget;
      this._element === i ||
        this._element.contains(i) ||
        this._maybeScheduleHide();
    }
    _setListeners() {
      j.on(this._element, Eo, (t) => this._onInteraction(t, !0)),
        j.on(this._element, Ao, (t) => this._onInteraction(t, !1)),
        j.on(this._element, To, (t) => this._onInteraction(t, !0)),
        j.on(this._element, Oo, (t) => this._onInteraction(t, !1));
    }
    _clearTimeout() {
      clearTimeout(this._timeout), (this._timeout = null);
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Mo.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  return (
    R(Mo),
    m(Mo),
    {
      Alert: V,
      Button: Y,
      Carousel: Ht,
      Collapse: oe,
      Dropdown: sn,
      Modal: Kn,
      Offcanvas: os,
      Popover: Hs,
      ScrollSpy: no,
      Tab: yo,
      Toast: Mo,
      Tooltip: Ds,
    }
  );
});
