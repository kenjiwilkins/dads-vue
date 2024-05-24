/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Re(e, t) {
  const n = new Set(e.split(","));
  return (o) => n.has(o);
}
const H = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, _t = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], z = () => {
}, Is = () => !1, Ft = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), rn = (e) => e.startsWith("onUpdate:"), K = Object.assign, to = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Ps = Object.prototype.hasOwnProperty, R = (e, t) => Ps.call(e, t), C = Array.isArray, tt = (e) => an(e) === "[object Map]", Er = (e) => an(e) === "[object Set]", S = (e) => typeof e == "function", J = (e) => typeof e == "string", at = (e) => typeof e == "symbol", U = (e) => e !== null && typeof e == "object", no = (e) => (U(e) || S(e)) && S(e.then) && S(e.catch), vr = Object.prototype.toString, an = (e) => vr.call(e), oo = (e) => an(e).slice(8, -1), Nr = (e) => an(e) === "[object Object]", ro = (e) => J(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Ct = /* @__PURE__ */ Re(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Rs = /* @__PURE__ */ Re(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), dn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Ms = /-(\w)/g, vt = dn((e) => e.replace(Ms, (t, n) => n ? n.toUpperCase() : "")), As = /\B([A-Z])/g, ze = dn(
  (e) => e.replace(As, "-$1").toLowerCase()
), pn = dn((e) => e.charAt(0).toUpperCase() + e.slice(1)), et = dn((e) => e ? `on${pn(e)}` : ""), Je = (e, t) => !Object.is(e, t), Ot = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, br = (e, t, n, o = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: o,
    value: n
  });
}, Fs = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Mo;
const so = () => Mo || (Mo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function io(e) {
  if (C(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], r = J(o) ? Us(o) : io(o);
      if (r)
        for (const s in r)
          t[s] = r[s];
    }
    return t;
  } else if (J(e) || U(e))
    return e;
}
const js = /;(?![^(]*\))/g, Ls = /:([^]+)/, Hs = /\/\*[^]*?\*\//g;
function Us(e) {
  const t = {};
  return e.replace(Hs, "").split(js).forEach((n) => {
    if (n) {
      const o = n.split(Ls);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function hn(e) {
  let t = "";
  if (J(e))
    t = e;
  else if (C(e))
    for (let n = 0; n < e.length; n++) {
      const o = hn(e[n]);
      o && (t += o + " ");
    }
  else if (U(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const ks = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Bs = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Ks = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", Ws = /* @__PURE__ */ Re(ks), Gs = /* @__PURE__ */ Re(Bs), qs = /* @__PURE__ */ Re(Ks), zs = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Js = /* @__PURE__ */ Re(zs);
function yr(e) {
  return !!e || e === "";
}
const Ao = (e) => J(e) ? e : e == null ? "" : C(e) || U(e) && (e.toString === vr || !S(e.toString)) ? JSON.stringify(e, Or, 2) : String(e), Or = (e, t) => t && t.__v_isRef ? Or(e, t.value) : tt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [o, r], s) => (n[Tn(o, s) + " =>"] = r, n),
    {}
  )
} : Er(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Tn(n))
} : at(t) ? Tn(t) : U(t) && !C(t) && !Nr(t) ? String(t) : t, Tn = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    at(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Ye(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let me;
class Ys {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = me, !t && me && (this.index = (me.scopes || (me.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = me;
      try {
        return me = this, t();
      } finally {
        me = n;
      }
    } else
      process.env.NODE_ENV !== "production" && Ye("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    me = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    me = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++)
        this.effects[n].stop();
      for (n = 0, o = this.cleanups.length; n < o; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, o = this.scopes.length; n < o; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function Xs(e, t = me) {
  t && t.active && t.effects.push(e);
}
function Zs() {
  return me;
}
let nt;
class lo {
  constructor(t, n, o, r) {
    this.fn = t, this.trigger = n, this.scheduler = o, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, Xs(this, r);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, Me();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (Qs(n.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), Ae();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = Ge, n = nt;
    try {
      return Ge = !0, nt = this, this._runnings++, Fo(this), this.fn();
    } finally {
      jo(this), this._runnings--, nt = n, Ge = t;
    }
  }
  stop() {
    this.active && (Fo(this), jo(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Qs(e) {
  return e.value;
}
function Fo(e) {
  e._trackId++, e._depsLength = 0;
}
function jo(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      wr(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function wr(e, t) {
  const n = e.get(t);
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup());
}
let Ge = !0, jn = 0;
const Vr = [];
function Me() {
  Vr.push(Ge), Ge = !1;
}
function Ae() {
  const e = Vr.pop();
  Ge = e === void 0 ? !0 : e;
}
function co() {
  jn++;
}
function uo() {
  for (jn--; !jn && Ln.length; )
    Ln.shift()();
}
function Dr(e, t, n) {
  var o;
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const r = e.deps[e._depsLength];
    r !== t ? (r && wr(r, e), e.deps[e._depsLength++] = t) : e._depsLength++, process.env.NODE_ENV !== "production" && ((o = e.onTrack) == null || o.call(e, K({ effect: e }, n)));
  }
}
const Ln = [];
function xr(e, t, n) {
  var o;
  co();
  for (const r of e.keys()) {
    let s;
    r._dirtyLevel < t && (s ?? (s = e.get(r) === r._trackId)) && (r._shouldSchedule || (r._shouldSchedule = r._dirtyLevel === 0), r._dirtyLevel = t), r._shouldSchedule && (s ?? (s = e.get(r) === r._trackId)) && (process.env.NODE_ENV !== "production" && ((o = r.onTrigger) == null || o.call(r, K({ effect: r }, n))), r.trigger(), (!r._runnings || r.allowRecurse) && r._dirtyLevel !== 2 && (r._shouldSchedule = !1, r.scheduler && Ln.push(r.scheduler)));
  }
  uo();
}
const Cr = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, Hn = /* @__PURE__ */ new WeakMap(), ot = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), Un = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
function te(e, t, n) {
  if (Ge && nt) {
    let o = Hn.get(e);
    o || Hn.set(e, o = /* @__PURE__ */ new Map());
    let r = o.get(n);
    r || o.set(n, r = Cr(() => o.delete(n))), Dr(
      nt,
      r,
      process.env.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n
      } : void 0
    );
  }
}
function Ve(e, t, n, o, r, s) {
  const l = Hn.get(e);
  if (!l)
    return;
  let c = [];
  if (t === "clear")
    c = [...l.values()];
  else if (n === "length" && C(e)) {
    const f = Number(o);
    l.forEach((d, h) => {
      (h === "length" || !at(h) && h >= f) && c.push(d);
    });
  } else
    switch (n !== void 0 && c.push(l.get(n)), t) {
      case "add":
        C(e) ? ro(n) && c.push(l.get("length")) : (c.push(l.get(ot)), tt(e) && c.push(l.get(Un)));
        break;
      case "delete":
        C(e) || (c.push(l.get(ot)), tt(e) && c.push(l.get(Un)));
        break;
      case "set":
        tt(e) && c.push(l.get(ot));
        break;
    }
  co();
  for (const f of c)
    f && xr(
      f,
      4,
      process.env.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n,
        newValue: o,
        oldValue: r,
        oldTarget: s
      } : void 0
    );
  uo();
}
const ei = /* @__PURE__ */ Re("__proto__,__v_isRef,__isVue"), Sr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(at)
), Lo = /* @__PURE__ */ ti();
function ti() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const o = $(this);
      for (let s = 0, l = this.length; s < l; s++)
        te(o, "get", s + "");
      const r = o[t](...n);
      return r === -1 || r === !1 ? o[t](...n.map($)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      Me(), co();
      const o = $(this)[t].apply(this, n);
      return uo(), Ae(), o;
    };
  }), e;
}
function ni(e) {
  at(e) || (e = String(e));
  const t = $(this);
  return te(t, "has", e), t.hasOwnProperty(e);
}
class Tr {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, o) {
    const r = this._isReadonly, s = this._isShallow;
    if (n === "__v_isReactive")
      return !r;
    if (n === "__v_isReadonly")
      return r;
    if (n === "__v_isShallow")
      return s;
    if (n === "__v_raw")
      return o === (r ? s ? Fr : Ar : s ? Mr : Rr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const l = C(t);
    if (!r) {
      if (l && R(Lo, n))
        return Reflect.get(Lo, n, o);
      if (n === "hasOwnProperty")
        return ni;
    }
    const c = Reflect.get(t, n, o);
    return (at(n) ? Sr.has(n) : ei(n)) || (r || te(t, "get", n), s) ? c : ne(c) ? l && ro(n) ? c : c.value : U(c) ? r ? jr(c) : ao(c) : c;
  }
}
class $r extends Tr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, r) {
    let s = t[n];
    if (!this._isShallow) {
      const f = ct(s);
      if (!rt(o) && !ct(o) && (s = $(s), o = $(o)), !C(t) && ne(s) && !ne(o))
        return f ? !1 : (s.value = o, !0);
    }
    const l = C(t) && ro(n) ? Number(n) < t.length : R(t, n), c = Reflect.set(t, n, o, r);
    return t === $(r) && (l ? Je(o, s) && Ve(t, "set", n, o, s) : Ve(t, "add", n, o)), c;
  }
  deleteProperty(t, n) {
    const o = R(t, n), r = t[n], s = Reflect.deleteProperty(t, n);
    return s && o && Ve(t, "delete", n, void 0, r), s;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!at(n) || !Sr.has(n)) && te(t, "has", n), o;
  }
  ownKeys(t) {
    return te(
      t,
      "iterate",
      C(t) ? "length" : ot
    ), Reflect.ownKeys(t);
  }
}
class Ir extends Tr {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && Ye(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && Ye(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const oi = /* @__PURE__ */ new $r(), ri = /* @__PURE__ */ new Ir(), si = /* @__PURE__ */ new $r(
  !0
), ii = /* @__PURE__ */ new Ir(!0), fo = (e) => e, mn = (e) => Reflect.getPrototypeOf(e);
function Kt(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const r = $(e), s = $(t);
  n || (Je(t, s) && te(r, "get", t), te(r, "get", s));
  const { has: l } = mn(r), c = o ? fo : n ? po : Pt;
  if (l.call(r, t))
    return c(e.get(t));
  if (l.call(r, s))
    return c(e.get(s));
  e !== r && e.get(t);
}
function Wt(e, t = !1) {
  const n = this.__v_raw, o = $(n), r = $(e);
  return t || (Je(e, r) && te(o, "has", e), te(o, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function Gt(e, t = !1) {
  return e = e.__v_raw, !t && te($(e), "iterate", ot), Reflect.get(e, "size", e);
}
function Ho(e) {
  e = $(e);
  const t = $(this);
  return mn(t).has.call(t, e) || (t.add(e), Ve(t, "add", e, e)), this;
}
function Uo(e, t) {
  t = $(t);
  const n = $(this), { has: o, get: r } = mn(n);
  let s = o.call(n, e);
  s ? process.env.NODE_ENV !== "production" && Pr(n, o, e) : (e = $(e), s = o.call(n, e));
  const l = r.call(n, e);
  return n.set(e, t), s ? Je(t, l) && Ve(n, "set", e, t, l) : Ve(n, "add", e, t), this;
}
function ko(e) {
  const t = $(this), { has: n, get: o } = mn(t);
  let r = n.call(t, e);
  r ? process.env.NODE_ENV !== "production" && Pr(t, n, e) : (e = $(e), r = n.call(t, e));
  const s = o ? o.call(t, e) : void 0, l = t.delete(e);
  return r && Ve(t, "delete", e, void 0, s), l;
}
function Bo() {
  const e = $(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? tt(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && Ve(e, "clear", void 0, void 0, n), o;
}
function qt(e, t) {
  return function(o, r) {
    const s = this, l = s.__v_raw, c = $(l), f = t ? fo : e ? po : Pt;
    return !e && te(c, "iterate", ot), l.forEach((d, h) => o.call(r, f(d), f(h), s));
  };
}
function zt(e, t, n) {
  return function(...o) {
    const r = this.__v_raw, s = $(r), l = tt(s), c = e === "entries" || e === Symbol.iterator && l, f = e === "keys" && l, d = r[e](...o), h = n ? fo : t ? po : Pt;
    return !t && te(
      s,
      "iterate",
      f ? Un : ot
    ), {
      // iterator protocol
      next() {
        const { value: a, done: v } = d.next();
        return v ? { value: a, done: v } : {
          value: c ? [h(a[0]), h(a[1])] : h(a),
          done: v
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Ue(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Ye(
        `${pn(e)} operation ${n}failed: target is readonly.`,
        $(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function li() {
  const e = {
    get(s) {
      return Kt(this, s);
    },
    get size() {
      return Gt(this);
    },
    has: Wt,
    add: Ho,
    set: Uo,
    delete: ko,
    clear: Bo,
    forEach: qt(!1, !1)
  }, t = {
    get(s) {
      return Kt(this, s, !1, !0);
    },
    get size() {
      return Gt(this);
    },
    has: Wt,
    add: Ho,
    set: Uo,
    delete: ko,
    clear: Bo,
    forEach: qt(!1, !0)
  }, n = {
    get(s) {
      return Kt(this, s, !0);
    },
    get size() {
      return Gt(this, !0);
    },
    has(s) {
      return Wt.call(this, s, !0);
    },
    add: Ue("add"),
    set: Ue("set"),
    delete: Ue("delete"),
    clear: Ue("clear"),
    forEach: qt(!0, !1)
  }, o = {
    get(s) {
      return Kt(this, s, !0, !0);
    },
    get size() {
      return Gt(this, !0);
    },
    has(s) {
      return Wt.call(this, s, !0);
    },
    add: Ue("add"),
    set: Ue("set"),
    delete: Ue("delete"),
    clear: Ue("clear"),
    forEach: qt(!0, !0)
  };
  return [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((s) => {
    e[s] = zt(s, !1, !1), n[s] = zt(s, !0, !1), t[s] = zt(s, !1, !0), o[s] = zt(
      s,
      !0,
      !0
    );
  }), [
    e,
    n,
    t,
    o
  ];
}
const [
  ci,
  ui,
  fi,
  ai
] = /* @__PURE__ */ li();
function _n(e, t) {
  const n = t ? e ? ai : fi : e ? ui : ci;
  return (o, r, s) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? o : Reflect.get(
    R(n, r) && r in o ? n : o,
    r,
    s
  );
}
const di = {
  get: /* @__PURE__ */ _n(!1, !1)
}, pi = {
  get: /* @__PURE__ */ _n(!1, !0)
}, hi = {
  get: /* @__PURE__ */ _n(!0, !1)
}, mi = {
  get: /* @__PURE__ */ _n(!0, !0)
};
function Pr(e, t, n) {
  const o = $(n);
  if (o !== n && t.call(e, o)) {
    const r = oo(e);
    Ye(
      `Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Rr = /* @__PURE__ */ new WeakMap(), Mr = /* @__PURE__ */ new WeakMap(), Ar = /* @__PURE__ */ new WeakMap(), Fr = /* @__PURE__ */ new WeakMap();
function _i(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function gi(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : _i(oo(e));
}
function ao(e) {
  return ct(e) ? e : gn(
    e,
    !1,
    oi,
    di,
    Rr
  );
}
function Ei(e) {
  return gn(
    e,
    !1,
    si,
    pi,
    Mr
  );
}
function jr(e) {
  return gn(
    e,
    !0,
    ri,
    hi,
    Ar
  );
}
function we(e) {
  return gn(
    e,
    !0,
    ii,
    mi,
    Fr
  );
}
function gn(e, t, n, o, r) {
  if (!U(e))
    return process.env.NODE_ENV !== "production" && Ye(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = r.get(e);
  if (s)
    return s;
  const l = gi(e);
  if (l === 0)
    return e;
  const c = new Proxy(
    e,
    l === 2 ? o : n
  );
  return r.set(e, c), c;
}
function gt(e) {
  return ct(e) ? gt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function ct(e) {
  return !!(e && e.__v_isReadonly);
}
function rt(e) {
  return !!(e && e.__v_isShallow);
}
function kn(e) {
  return e ? !!e.__v_raw : !1;
}
function $(e) {
  const t = e && e.__v_raw;
  return t ? $(t) : e;
}
function vi(e) {
  return Object.isExtensible(e) && br(e, "__v_skip", !0), e;
}
const Pt = (e) => U(e) ? ao(e) : e, po = (e) => U(e) ? jr(e) : e, Ni = "Computed is still dirty after getter evaluation, likely because a computed is mutating its own dependency in its getter. State mutations in computed getters should be avoided.  Check the docs for more details: https://vuejs.org/guide/essentials/computed.html#getters-should-be-side-effect-free";
class Lr {
  constructor(t, n, o, r) {
    this.getter = t, this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new lo(
      () => t(this._value),
      () => Yt(
        this,
        this.effect._dirtyLevel === 2 ? 2 : 3
      )
    ), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = o;
  }
  get value() {
    const t = $(this);
    return (!t._cacheable || t.effect.dirty) && Je(t._value, t._value = t.effect.run()) && Yt(t, 4), Hr(t), t.effect._dirtyLevel >= 2 && (process.env.NODE_ENV !== "production" && this._warnRecursive && Ye(Ni, `

getter: `, this.getter), Yt(t, 2)), t._value;
  }
  set value(t) {
    this._setter(t);
  }
  // #region polyfill _dirty for backward compatibility third party code for Vue <= 3.3.x
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(t) {
    this.effect.dirty = t;
  }
  // #endregion
}
function bi(e, t, n = !1) {
  let o, r;
  const s = S(e);
  s ? (o = e, r = process.env.NODE_ENV !== "production" ? () => {
    Ye("Write operation failed: computed value is readonly");
  } : z) : (o = e.get, r = e.set);
  const l = new Lr(o, r, s || !r, n);
  return process.env.NODE_ENV !== "production" && t && !n && (l.effect.onTrack = t.onTrack, l.effect.onTrigger = t.onTrigger), l;
}
function Hr(e) {
  var t;
  Ge && nt && (e = $(e), Dr(
    nt,
    (t = e.dep) != null ? t : e.dep = Cr(
      () => e.dep = void 0,
      e instanceof Lr ? e : void 0
    ),
    process.env.NODE_ENV !== "production" ? {
      target: e,
      type: "get",
      key: "value"
    } : void 0
  ));
}
function Yt(e, t = 4, n) {
  e = $(e);
  const o = e.dep;
  o && xr(
    o,
    t,
    process.env.NODE_ENV !== "production" ? {
      target: e,
      type: "set",
      key: "value",
      newValue: n
    } : void 0
  );
}
function ne(e) {
  return !!(e && e.__v_isRef === !0);
}
function yi(e) {
  return Oi(e, !1);
}
function Oi(e, t) {
  return ne(e) ? e : new wi(e, t);
}
class wi {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : $(t), this._value = n ? t : Pt(t);
  }
  get value() {
    return Hr(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || rt(t) || ct(t);
    t = n ? t : $(t), Je(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : Pt(t), Yt(this, 4, t));
  }
}
function Vi(e) {
  return ne(e) ? e.value : e;
}
const Di = {
  get: (e, t, n) => Vi(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const r = e[t];
    return ne(r) && !ne(n) ? (r.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function Ur(e) {
  return gt(e) ? e : new Proxy(e, Di);
}
/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const st = [];
function Xt(e) {
  st.push(e);
}
function Zt() {
  st.pop();
}
function y(e, ...t) {
  Me();
  const n = st.length ? st[st.length - 1].component : null, o = n && n.appContext.config.warnHandler, r = xi();
  if (o)
    Pe(
      o,
      n,
      11,
      [
        e + t.map((s) => {
          var l, c;
          return (c = (l = s.toString) == null ? void 0 : l.call(s)) != null ? c : JSON.stringify(s);
        }).join(""),
        n && n.proxy,
        r.map(
          ({ vnode: s }) => `at <${Vn(n, s.type)}>`
        ).join(`
`),
        r
      ]
    );
  else {
    const s = [`[Vue warn]: ${e}`, ...t];
    r.length && s.push(`
`, ...Ci(r)), console.warn(...s);
  }
  Ae();
}
function xi() {
  let e = st[st.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function Ci(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...Si(n));
  }), t;
}
function Si({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, r = ` at <${Vn(
    e.component,
    e.type,
    o
  )}`, s = ">" + n;
  return e.props ? [r, ...Ti(e.props), s] : [r + s];
}
function Ti(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...kr(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function kr(e, t, n) {
  return J(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : ne(t) ? (t = kr(e, $(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : S(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = $(t), n ? t : [`${e}=`, t]);
}
const ho = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."
};
function Pe(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (r) {
    jt(r, t, n);
  }
}
function ve(e, t, n, o) {
  if (S(e)) {
    const r = Pe(e, t, n, o);
    return r && no(r) && r.catch((s) => {
      jt(s, t, n);
    }), r;
  }
  if (C(e)) {
    const r = [];
    for (let s = 0; s < e.length; s++)
      r.push(ve(e[s], t, n, o));
    return r;
  } else
    process.env.NODE_ENV !== "production" && y(
      `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
    );
}
function jt(e, t, n, o = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let s = t.parent;
    const l = t.proxy, c = process.env.NODE_ENV !== "production" ? ho[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; s; ) {
      const d = s.ec;
      if (d) {
        for (let h = 0; h < d.length; h++)
          if (d[h](e, l, c) === !1)
            return;
      }
      s = s.parent;
    }
    const f = t.appContext.config.errorHandler;
    if (f) {
      Me(), Pe(
        f,
        null,
        10,
        [e, l, c]
      ), Ae();
      return;
    }
  }
  $i(e, n, r, o);
}
function $i(e, t, n, o = !0) {
  if (process.env.NODE_ENV !== "production") {
    const r = ho[t];
    if (n && Xt(n), y(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && Zt(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let Rt = !1, Bn = !1;
const oe = [];
let Oe = 0;
const Et = [];
let Ie = null, ke = 0;
const Br = /* @__PURE__ */ Promise.resolve();
let mo = null;
const Ii = 100;
function Pi(e) {
  const t = mo || Br;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ri(e) {
  let t = Oe + 1, n = oe.length;
  for (; t < n; ) {
    const o = t + n >>> 1, r = oe[o], s = Mt(r);
    s < e || s === e && r.pre ? t = o + 1 : n = o;
  }
  return t;
}
function En(e) {
  (!oe.length || !oe.includes(
    e,
    Rt && e.allowRecurse ? Oe + 1 : Oe
  )) && (e.id == null ? oe.push(e) : oe.splice(Ri(e.id), 0, e), Kr());
}
function Kr() {
  !Rt && !Bn && (Bn = !0, mo = Br.then(qr));
}
function Mi(e) {
  const t = oe.indexOf(e);
  t > Oe && oe.splice(t, 1);
}
function Wr(e) {
  C(e) ? Et.push(...e) : (!Ie || !Ie.includes(
    e,
    e.allowRecurse ? ke + 1 : ke
  )) && Et.push(e), Kr();
}
function Ko(e, t, n = Rt ? Oe + 1 : 0) {
  for (process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < oe.length; n++) {
    const o = oe[n];
    if (o && o.pre) {
      if (e && o.id !== e.uid || process.env.NODE_ENV !== "production" && _o(t, o))
        continue;
      oe.splice(n, 1), n--, o();
    }
  }
}
function Gr(e) {
  if (Et.length) {
    const t = [...new Set(Et)].sort(
      (n, o) => Mt(n) - Mt(o)
    );
    if (Et.length = 0, Ie) {
      Ie.push(...t);
      return;
    }
    for (Ie = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), ke = 0; ke < Ie.length; ke++)
      process.env.NODE_ENV !== "production" && _o(e, Ie[ke]) || Ie[ke]();
    Ie = null, ke = 0;
  }
}
const Mt = (e) => e.id == null ? 1 / 0 : e.id, Ai = (e, t) => {
  const n = Mt(e) - Mt(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function qr(e) {
  Bn = !1, Rt = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), oe.sort(Ai);
  const t = process.env.NODE_ENV !== "production" ? (n) => _o(e, n) : z;
  try {
    for (Oe = 0; Oe < oe.length; Oe++) {
      const n = oe[Oe];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        Pe(n, null, 14);
      }
    }
  } finally {
    Oe = 0, oe.length = 0, Gr(e), Rt = !1, mo = null, (oe.length || Et.length) && qr(e);
  }
}
function _o(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > Ii) {
      const o = t.ownerInstance, r = o && Ds(o.type);
      return jt(
        `Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
let it = !1;
const ht = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (so().__VUE_HMR_RUNTIME__ = {
  createRecord: $n(zr),
  rerender: $n(Li),
  reload: $n(Hi)
});
const ut = /* @__PURE__ */ new Map();
function Fi(e) {
  const t = e.type.__hmrId;
  let n = ut.get(t);
  n || (zr(t, e.type), n = ut.get(t)), n.instances.add(e);
}
function ji(e) {
  ut.get(e.type.__hmrId).instances.delete(e);
}
function zr(e, t) {
  return ut.has(e) ? !1 : (ut.set(e, {
    initialDef: St(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function St(e) {
  return xs(e) ? e.__vccOpts : e;
}
function Li(e, t) {
  const n = ut.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, St(o.type).render = t), o.renderCache = [], it = !0, o.effect.dirty = !0, o.update(), it = !1;
  }));
}
function Hi(e, t) {
  const n = ut.get(e);
  if (!n)
    return;
  t = St(t), Wo(n.initialDef, t);
  const o = [...n.instances];
  for (const r of o) {
    const s = St(r.type);
    ht.has(s) || (s !== n.initialDef && Wo(s, t), ht.add(s)), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (ht.add(s), r.ceReload(t.styles), ht.delete(s)) : r.parent ? (r.parent.effect.dirty = !0, En(r.parent.update)) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  Wr(() => {
    for (const r of o)
      ht.delete(
        St(r.type)
      );
  });
}
function Wo(e, t) {
  K(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function $n(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let ge, Dt = [], Kn = !1;
function Lt(e, ...t) {
  ge ? ge.emit(e, ...t) : Kn || Dt.push({ event: e, args: t });
}
function go(e, t) {
  var n, o;
  ge = e, ge ? (ge.enabled = !0, Dt.forEach(({ event: r, args: s }) => ge.emit(r, ...s)), Dt = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    go(s, t);
  }), setTimeout(() => {
    ge || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Kn = !0, Dt = []);
  }, 3e3)) : (Kn = !0, Dt = []);
}
function Ui(e, t) {
  Lt("app:init", e, t, {
    Fragment: fe,
    Text: Ht,
    Comment: ae,
    Static: tn
  });
}
function ki(e) {
  Lt("app:unmount", e);
}
const Bi = /* @__PURE__ */ Eo(
  "component:added"
  /* COMPONENT_ADDED */
), Jr = /* @__PURE__ */ Eo(
  "component:updated"
  /* COMPONENT_UPDATED */
), Ki = /* @__PURE__ */ Eo(
  "component:removed"
  /* COMPONENT_REMOVED */
), Wi = (e) => {
  ge && typeof ge.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !ge.cleanupBuffer(e) && Ki(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Eo(e) {
  return (t) => {
    Lt(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const Gi = /* @__PURE__ */ Yr(
  "perf:start"
  /* PERFORMANCE_START */
), qi = /* @__PURE__ */ Yr(
  "perf:end"
  /* PERFORMANCE_END */
);
function Yr(e) {
  return (t, n, o) => {
    Lt(e, t.appContext.app, t.uid, t, n, o);
  };
}
function zi(e, t, n) {
  Lt(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
function Ji(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const o = e.vnode.props || H;
  if (process.env.NODE_ENV !== "production") {
    const {
      emitsOptions: h,
      propsOptions: [a]
    } = e;
    if (h)
      if (!(t in h))
        (!a || !(et(t) in a)) && y(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${et(t)}" prop.`
        );
      else {
        const v = h[t];
        S(v) && (v(...n) || y(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let r = n;
  const s = t.startsWith("update:"), l = s && t.slice(7);
  if (l && l in o) {
    const h = `${l === "modelValue" ? "model" : l}Modifiers`, { number: a, trim: v } = o[h] || H;
    v && (r = n.map((V) => J(V) ? V.trim() : V)), a && (r = n.map(Fs));
  }
  if (process.env.NODE_ENV !== "production" && zi(e, t, r), process.env.NODE_ENV !== "production") {
    const h = t.toLowerCase();
    h !== t && o[et(h)] && y(
      `Event "${h}" is emitted in component ${Vn(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${ze(
        t
      )}" instead of "${t}".`
    );
  }
  let c, f = o[c = et(t)] || // also try camelCase event handler (#2249)
  o[c = et(vt(t))];
  !f && s && (f = o[c = et(ze(t))]), f && ve(
    f,
    e,
    6,
    r
  );
  const d = o[c + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, ve(
      d,
      e,
      6,
      r
    );
  }
}
function Xr(e, t, n = !1) {
  const o = t.emitsCache, r = o.get(e);
  if (r !== void 0)
    return r;
  const s = e.emits;
  let l = {}, c = !1;
  if (!S(e)) {
    const f = (d) => {
      const h = Xr(d, t, !0);
      h && (c = !0, K(l, h));
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !s && !c ? (U(e) && o.set(e, null), null) : (C(s) ? s.forEach((f) => l[f] = null) : K(l, s), U(e) && o.set(e, l), l);
}
function vn(e, t) {
  return !e || !Ft(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), R(e, t[0].toLowerCase() + t.slice(1)) || R(e, ze(t)) || R(e, t));
}
let ee = null, Nn = null;
function sn(e) {
  const t = ee;
  return ee = e, Nn = e && e.type.__scopeId || null, t;
}
function Zr(e) {
  Nn = e;
}
function Qr() {
  Nn = null;
}
function Yi(e, t = ee, n) {
  if (!t || e._n)
    return e;
  const o = (...r) => {
    o._d && or(-1);
    const s = sn(t);
    let l;
    try {
      l = e(...r);
    } finally {
      sn(s), o._d && or(1);
    }
    return process.env.NODE_ENV !== "production" && Jr(t), l;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
let Wn = !1;
function ln() {
  Wn = !0;
}
function In(e) {
  const {
    type: t,
    vnode: n,
    proxy: o,
    withProxy: r,
    propsOptions: [s],
    slots: l,
    attrs: c,
    emit: f,
    render: d,
    renderCache: h,
    props: a,
    data: v,
    setupState: V,
    ctx: P,
    inheritAttrs: M
  } = e, xe = sn(e);
  let G, Y;
  process.env.NODE_ENV !== "production" && (Wn = !1);
  try {
    if (n.shapeFlag & 4) {
      const q = r || o, de = process.env.NODE_ENV !== "production" && V.__isScriptSetup ? new Proxy(q, {
        get(I, re, se) {
          return y(
            `Property '${String(
              re
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(I, re, se);
        }
      }) : q;
      G = _e(
        d.call(
          de,
          q,
          h,
          process.env.NODE_ENV !== "production" ? we(a) : a,
          V,
          v,
          P
        )
      ), Y = c;
    } else {
      const q = t;
      process.env.NODE_ENV !== "production" && c === a && ln(), G = _e(
        q.length > 1 ? q(
          process.env.NODE_ENV !== "production" ? we(a) : a,
          process.env.NODE_ENV !== "production" ? {
            get attrs() {
              return ln(), we(c);
            },
            slots: l,
            emit: f
          } : { attrs: c, slots: l, emit: f }
        ) : q(
          process.env.NODE_ENV !== "production" ? we(a) : a,
          null
        )
      ), Y = t.props ? c : Xi(c);
    }
  } catch (q) {
    It.length = 0, jt(q, e, 1), G = De(ae);
  }
  let B = G, W;
  if (process.env.NODE_ENV !== "production" && G.patchFlag > 0 && G.patchFlag & 2048 && ([B, W] = es(G)), Y && M !== !1) {
    const q = Object.keys(Y), { shapeFlag: de } = B;
    if (q.length) {
      if (de & 7)
        s && q.some(rn) && (Y = Zi(
          Y,
          s
        )), B = Xe(B, Y, !1, !0);
      else if (process.env.NODE_ENV !== "production" && !Wn && B.type !== ae) {
        const I = Object.keys(c), re = [], se = [];
        for (let Ce = 0, je = I.length; Ce < je; Ce++) {
          const pe = I[Ce];
          Ft(pe) ? rn(pe) || re.push(pe[2].toLowerCase() + pe.slice(3)) : se.push(pe);
        }
        se.length && y(
          `Extraneous non-props attributes (${se.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
        ), re.length && y(
          `Extraneous non-emits event listeners (${re.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !Go(B) && y(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), B = Xe(B, null, !1, !0), B.dirs = B.dirs ? B.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !Go(B) && y(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), B.transition = n.transition), process.env.NODE_ENV !== "production" && W ? W(B) : G = B, sn(xe), G;
}
const es = (e) => {
  const t = e.children, n = e.dynamicChildren, o = vo(t, !1);
  if (o) {
    if (process.env.NODE_ENV !== "production" && o.patchFlag > 0 && o.patchFlag & 2048)
      return es(o);
  } else
    return [e, void 0];
  const r = t.indexOf(o), s = n ? n.indexOf(o) : -1, l = (c) => {
    t[r] = c, n && (s > -1 ? n[s] = c : c.patchFlag > 0 && (e.dynamicChildren = [...n, c]));
  };
  return [_e(o), l];
};
function vo(e, t = !0) {
  let n;
  for (let o = 0; o < e.length; o++) {
    const r = e[o];
    if (On(r)) {
      if (r.type !== ae || r.children === "v-if") {
        if (n)
          return;
        if (n = r, process.env.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return vo(n.children);
      }
    } else
      return;
  }
  return n;
}
const Xi = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Ft(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Zi = (e, t) => {
  const n = {};
  for (const o in e)
    (!rn(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, Go = (e) => e.shapeFlag & 7 || e.type === ae;
function Qi(e, t, n) {
  const { props: o, children: r, component: s } = e, { props: l, children: c, patchFlag: f } = t, d = s.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (r || c) && it || t.dirs || t.transition)
    return !0;
  if (n && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return o ? qo(o, l, d) : !!l;
    if (f & 8) {
      const h = t.dynamicProps;
      for (let a = 0; a < h.length; a++) {
        const v = h[a];
        if (l[v] !== o[v] && !vn(d, v))
          return !0;
      }
    }
  } else
    return (r || c) && (!c || !c.$stable) ? !0 : o === l ? !1 : o ? l ? qo(o, l, d) : !0 : !!l;
  return !1;
}
function qo(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < o.length; r++) {
    const s = o[r];
    if (t[s] !== e[s] && !vn(n, s))
      return !0;
  }
  return !1;
}
function el({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const tl = Symbol.for("v-ndc"), nl = (e) => e.__isSuspense;
function ol(e, t) {
  t && t.pendingBranch ? C(e) ? t.effects.push(...e) : t.effects.push(e) : Wr(e);
}
const rl = Symbol.for("v-scx"), sl = () => {
  {
    const e = Qt(rl);
    return e || process.env.NODE_ENV !== "production" && y(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
}, Jt = {};
function Pn(e, t, n) {
  return process.env.NODE_ENV !== "production" && !S(t) && y(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), ts(e, t, n);
}
function ts(e, t, {
  immediate: n,
  deep: o,
  flush: r,
  once: s,
  onTrack: l,
  onTrigger: c
} = H) {
  if (t && s) {
    const I = t;
    t = (...re) => {
      I(...re), de();
    };
  }
  process.env.NODE_ENV !== "production" && o !== void 0 && typeof o == "number" && y(
    'watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.'
  ), process.env.NODE_ENV !== "production" && !t && (n !== void 0 && y(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && y(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), s !== void 0 && y(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const f = (I) => {
    y(
      "Invalid watch source: ",
      I,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, d = Z, h = (I) => o === !0 ? I : (
    // for deep: false, only traverse root-level properties
    mt(I, o === !1 ? 1 : void 0)
  );
  let a, v = !1, V = !1;
  if (ne(e) ? (a = () => e.value, v = rt(e)) : gt(e) ? (a = () => h(e), v = !0) : C(e) ? (V = !0, v = e.some((I) => gt(I) || rt(I)), a = () => e.map((I) => {
    if (ne(I))
      return I.value;
    if (gt(I))
      return h(I);
    if (S(I))
      return Pe(I, d, 2);
    process.env.NODE_ENV !== "production" && f(I);
  })) : S(e) ? t ? a = () => Pe(e, d, 2) : a = () => (P && P(), ve(
    e,
    d,
    3,
    [M]
  )) : (a = z, process.env.NODE_ENV !== "production" && f(e)), t && o) {
    const I = a;
    a = () => mt(I());
  }
  let P, M = (I) => {
    P = W.onStop = () => {
      Pe(I, d, 4), P = W.onStop = void 0;
    };
  }, xe;
  if (wn)
    if (M = z, t ? n && ve(t, d, 3, [
      a(),
      V ? [] : void 0,
      M
    ]) : a(), r === "sync") {
      const I = sl();
      xe = I.__watcherHandles || (I.__watcherHandles = []);
    } else
      return z;
  let G = V ? new Array(e.length).fill(Jt) : Jt;
  const Y = () => {
    if (!(!W.active || !W.dirty))
      if (t) {
        const I = W.run();
        (o || v || (V ? I.some((re, se) => Je(re, G[se])) : Je(I, G))) && (P && P(), ve(t, d, 3, [
          I,
          // pass undefined as the old value when it's changed for the first time
          G === Jt ? void 0 : V && G[0] === Jt ? [] : G,
          M
        ]), G = I);
      } else
        W.run();
  };
  Y.allowRecurse = !!t;
  let B;
  r === "sync" ? B = Y : r === "post" ? B = () => ue(Y, d && d.suspense) : (Y.pre = !0, d && (Y.id = d.uid), B = () => En(Y));
  const W = new lo(a, z, B), q = Zs(), de = () => {
    W.stop(), q && to(q.effects, W);
  };
  return process.env.NODE_ENV !== "production" && (W.onTrack = l, W.onTrigger = c), t ? n ? Y() : G = W.run() : r === "post" ? ue(
    W.run.bind(W),
    d && d.suspense
  ) : W.run(), xe && xe.push(de), de;
}
function il(e, t, n) {
  const o = this.proxy, r = J(e) ? e.includes(".") ? ns(o, e) : () => o[e] : e.bind(o, o);
  let s;
  S(t) ? s = t : (s = t.handler, n = t);
  const l = Ut(this), c = ts(r, s.bind(o), n);
  return l(), c;
}
function ns(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let r = 0; r < n.length && o; r++)
      o = o[n[r]];
    return o;
  };
}
function mt(e, t = 1 / 0, n) {
  if (t <= 0 || !U(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, ne(e))
    mt(e.value, t, n);
  else if (C(e))
    for (let o = 0; o < e.length; o++)
      mt(e[o], t, n);
  else if (Er(e) || tt(e))
    e.forEach((o) => {
      mt(o, t, n);
    });
  else if (Nr(e))
    for (const o in e)
      mt(e[o], t, n);
  return e;
}
function os(e) {
  Rs(e) && y("Do not use built-in directive ids as custom directive id: " + e);
}
function Ze(e, t, n, o) {
  const r = e.dirs, s = t && t.dirs;
  for (let l = 0; l < r.length; l++) {
    const c = r[l];
    s && (c.oldValue = s[l].value);
    let f = c.dir[o];
    f && (Me(), ve(f, n, 8, [
      e.el,
      c,
      e,
      t
    ]), Ae());
  }
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function No(e, t) {
  return S(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    K({ name: e.name }, t, { setup: e })
  ) : e;
}
const Tt = (e) => !!e.type.__asyncLoader, bo = (e) => e.type.__isKeepAlive;
function ll(e, t) {
  rs(e, "a", t);
}
function cl(e, t) {
  rs(e, "da", t);
}
function rs(e, t, n = Z) {
  const o = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (bn(t, o, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      bo(r.parent.vnode) && ul(o, t, n, r), r = r.parent;
  }
}
function ul(e, t, n, o) {
  const r = bn(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  ss(() => {
    to(o[t], r);
  }, n);
}
function bn(e, t, n = Z, o = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...l) => {
      if (n.isUnmounted)
        return;
      Me();
      const c = Ut(n), f = ve(t, n, e, l);
      return c(), Ae(), f;
    });
    return o ? r.unshift(s) : r.push(s), s;
  } else if (process.env.NODE_ENV !== "production") {
    const r = et(ho[e].replace(/ hook$/, ""));
    y(
      `${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Fe = (e) => (t, n = Z) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!wn || e === "sp") && bn(e, (...o) => t(...o), n)
), fl = Fe("bm"), al = Fe("m"), dl = Fe("bu"), pl = Fe("u"), hl = Fe("bum"), ss = Fe("um"), ml = Fe("sp"), _l = Fe(
  "rtg"
), gl = Fe(
  "rtc"
);
function El(e, t = Z) {
  bn("ec", e, t);
}
function vl(e, t, n = {}, o, r) {
  if (ee.isCE || ee.parent && Tt(ee.parent) && ee.parent.isCE)
    return De("slot", n, o);
  let s = e[t];
  process.env.NODE_ENV !== "production" && s && s.length > 1 && (y(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), s = () => []), s && s._c && (s._d = !1), yn();
  const l = s && is(s(n)), c = Yl(
    fe,
    {
      key: n.key || // slot content array of a dynamic conditional slot may have a branch
      // key attached in the `createSlots` helper, respect that
      l && l.key || `_${t}`
    },
    l || [],
    l && e._ === 1 ? 64 : -2
  );
  return c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), s && s._c && (s._d = !0), c;
}
function is(e) {
  return e.some((t) => On(t) ? !(t.type === ae || t.type === fe && !is(t.children)) : !0) ? e : null;
}
const Gn = (e) => e ? ws(e) ? xo(e) || e.proxy : Gn(e.parent) : null, lt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ K(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? we(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? we(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? we(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? we(e.refs) : e.refs,
    $parent: (e) => Gn(e.parent),
    $root: (e) => Gn(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Oo(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, En(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Pi.bind(e.proxy)),
    $watch: (e) => il.bind(e)
  })
), yo = (e) => e === "_" || e === "$", Rn = (e, t) => e !== H && !e.__isScriptSetup && R(e, t), ls = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: o, data: r, props: s, accessCache: l, type: c, appContext: f } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let d;
    if (t[0] !== "$") {
      const V = l[t];
      if (V !== void 0)
        switch (V) {
          case 1:
            return o[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return s[t];
        }
      else {
        if (Rn(o, t))
          return l[t] = 1, o[t];
        if (r !== H && R(r, t))
          return l[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (d = e.propsOptions[0]) && R(d, t)
        )
          return l[t] = 3, s[t];
        if (n !== H && R(n, t))
          return l[t] = 4, n[t];
        qn && (l[t] = 0);
      }
    }
    const h = lt[t];
    let a, v;
    if (h)
      return t === "$attrs" ? (te(e.attrs, "get", ""), process.env.NODE_ENV !== "production" && ln()) : process.env.NODE_ENV !== "production" && t === "$slots" && te(e, "get", t), h(e);
    if (
      // css module (injected by vue-loader)
      (a = c.__cssModules) && (a = a[t])
    )
      return a;
    if (n !== H && R(n, t))
      return l[t] = 4, n[t];
    if (
      // global properties
      v = f.config.globalProperties, R(v, t)
    )
      return v[t];
    process.env.NODE_ENV !== "production" && ee && (!J(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (r !== H && yo(t[0]) && R(r, t) ? y(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === ee && y(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: r, ctx: s } = e;
    return Rn(r, t) ? (r[t] = n, !0) : process.env.NODE_ENV !== "production" && r.__isScriptSetup && R(r, t) ? (y(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== H && R(o, t) ? (o[t] = n, !0) : R(e.props, t) ? (process.env.NODE_ENV !== "production" && y(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && y(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(s, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : s[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: r, propsOptions: s }
  }, l) {
    let c;
    return !!n[l] || e !== H && R(e, l) || Rn(t, l) || (c = s[0]) && R(c, l) || R(o, l) || R(lt, l) || R(r.config.globalProperties, l);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : R(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (ls.ownKeys = (e) => (y(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function Nl(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(lt).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => lt[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: z
    });
  }), t;
}
function bl(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: z
    });
  });
}
function yl(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys($(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (yo(o[0])) {
        y(
          `setup() return property ${JSON.stringify(
            o
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, o, {
        enumerable: !0,
        configurable: !0,
        get: () => n[o],
        set: z
      });
    }
  });
}
function zo(e) {
  return C(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Ol() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? y(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let qn = !0;
function wl(e) {
  const t = Oo(e), n = e.proxy, o = e.ctx;
  qn = !1, t.beforeCreate && Jo(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: s,
    methods: l,
    watch: c,
    provide: f,
    inject: d,
    // lifecycle
    created: h,
    beforeMount: a,
    mounted: v,
    beforeUpdate: V,
    updated: P,
    activated: M,
    deactivated: xe,
    beforeDestroy: G,
    beforeUnmount: Y,
    destroyed: B,
    unmounted: W,
    render: q,
    renderTracked: de,
    renderTriggered: I,
    errorCaptured: re,
    serverPrefetch: se,
    // public API
    expose: Ce,
    inheritAttrs: je,
    // assets
    components: pe,
    directives: kt,
    filters: Co
  } = t, Le = process.env.NODE_ENV !== "production" ? Ol() : null;
  if (process.env.NODE_ENV !== "production") {
    const [j] = e.propsOptions;
    if (j)
      for (const F in j)
        Le("Props", F);
  }
  if (d && Vl(d, o, Le), l)
    for (const j in l) {
      const F = l[j];
      S(F) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(o, j, {
        value: F.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[j] = F.bind(n), process.env.NODE_ENV !== "production" && Le("Methods", j)) : process.env.NODE_ENV !== "production" && y(
        `Method "${j}" has type "${typeof F}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (r) {
    process.env.NODE_ENV !== "production" && !S(r) && y(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const j = r.call(n, n);
    if (process.env.NODE_ENV !== "production" && no(j) && y(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !U(j))
      process.env.NODE_ENV !== "production" && y("data() should return an object.");
    else if (e.data = ao(j), process.env.NODE_ENV !== "production")
      for (const F in j)
        Le("Data", F), yo(F[0]) || Object.defineProperty(o, F, {
          configurable: !0,
          enumerable: !0,
          get: () => j[F],
          set: z
        });
  }
  if (qn = !0, s)
    for (const j in s) {
      const F = s[j], Ne = S(F) ? F.bind(n, n) : S(F.get) ? F.get.bind(n, n) : z;
      process.env.NODE_ENV !== "production" && Ne === z && y(`Computed property "${j}" has no getter.`);
      const xn = !S(F) && S(F.set) ? F.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        y(
          `Write operation failed: computed property "${j}" is readonly.`
        );
      } : z, Nt = Cs({
        get: Ne,
        set: xn
      });
      Object.defineProperty(o, j, {
        enumerable: !0,
        configurable: !0,
        get: () => Nt.value,
        set: (dt) => Nt.value = dt
      }), process.env.NODE_ENV !== "production" && Le("Computed", j);
    }
  if (c)
    for (const j in c)
      cs(c[j], o, n, j);
  if (f) {
    const j = S(f) ? f.call(n) : f;
    Reflect.ownKeys(j).forEach((F) => {
      $l(F, j[F]);
    });
  }
  h && Jo(h, e, "c");
  function ce(j, F) {
    C(F) ? F.forEach((Ne) => j(Ne.bind(n))) : F && j(F.bind(n));
  }
  if (ce(fl, a), ce(al, v), ce(dl, V), ce(pl, P), ce(ll, M), ce(cl, xe), ce(El, re), ce(gl, de), ce(_l, I), ce(hl, Y), ce(ss, W), ce(ml, se), C(Ce))
    if (Ce.length) {
      const j = e.exposed || (e.exposed = {});
      Ce.forEach((F) => {
        Object.defineProperty(j, F, {
          get: () => n[F],
          set: (Ne) => n[F] = Ne
        });
      });
    } else
      e.exposed || (e.exposed = {});
  q && e.render === z && (e.render = q), je != null && (e.inheritAttrs = je), pe && (e.components = pe), kt && (e.directives = kt);
}
function Vl(e, t, n = z) {
  C(e) && (e = zn(e));
  for (const o in e) {
    const r = e[o];
    let s;
    U(r) ? "default" in r ? s = Qt(
      r.from || o,
      r.default,
      !0
    ) : s = Qt(r.from || o) : s = Qt(r), ne(s) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (l) => s.value = l
    }) : t[o] = s, process.env.NODE_ENV !== "production" && n("Inject", o);
  }
}
function Jo(e, t, n) {
  ve(
    C(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function cs(e, t, n, o) {
  const r = o.includes(".") ? ns(n, o) : () => n[o];
  if (J(e)) {
    const s = t[e];
    S(s) ? Pn(r, s) : process.env.NODE_ENV !== "production" && y(`Invalid watch handler specified by key "${e}"`, s);
  } else if (S(e))
    Pn(r, e.bind(n));
  else if (U(e))
    if (C(e))
      e.forEach((s) => cs(s, t, n, o));
    else {
      const s = S(e.handler) ? e.handler.bind(n) : t[e.handler];
      S(s) ? Pn(r, s, e) : process.env.NODE_ENV !== "production" && y(`Invalid watch handler specified by key "${e.handler}"`, s);
    }
  else
    process.env.NODE_ENV !== "production" && y(`Invalid watch option: "${o}"`, e);
}
function Oo(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: r,
    optionsCache: s,
    config: { optionMergeStrategies: l }
  } = e.appContext, c = s.get(t);
  let f;
  return c ? f = c : !r.length && !n && !o ? f = t : (f = {}, r.length && r.forEach(
    (d) => cn(f, d, l, !0)
  ), cn(f, t, l)), U(t) && s.set(t, f), f;
}
function cn(e, t, n, o = !1) {
  const { mixins: r, extends: s } = t;
  s && cn(e, s, n, !0), r && r.forEach(
    (l) => cn(e, l, n, !0)
  );
  for (const l in t)
    if (o && l === "expose")
      process.env.NODE_ENV !== "production" && y(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const c = Dl[l] || n && n[l];
      e[l] = c ? c(e[l], t[l]) : t[l];
    }
  return e;
}
const Dl = {
  data: Yo,
  props: Xo,
  emits: Xo,
  // objects
  methods: xt,
  computed: xt,
  // lifecycle
  beforeCreate: le,
  created: le,
  beforeMount: le,
  mounted: le,
  beforeUpdate: le,
  updated: le,
  beforeDestroy: le,
  beforeUnmount: le,
  destroyed: le,
  unmounted: le,
  activated: le,
  deactivated: le,
  errorCaptured: le,
  serverPrefetch: le,
  // assets
  components: xt,
  directives: xt,
  // watch
  watch: Cl,
  // provide / inject
  provide: Yo,
  inject: xl
};
function Yo(e, t) {
  return t ? e ? function() {
    return K(
      S(e) ? e.call(this, this) : e,
      S(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function xl(e, t) {
  return xt(zn(e), zn(t));
}
function zn(e) {
  if (C(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function le(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function xt(e, t) {
  return e ? K(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Xo(e, t) {
  return e ? C(e) && C(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : K(
    /* @__PURE__ */ Object.create(null),
    zo(e),
    zo(t ?? {})
  ) : t;
}
function Cl(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = K(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = le(e[o], t[o]);
  return n;
}
function us() {
  return {
    app: null,
    config: {
      isNativeTag: Is,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Sl = 0;
function Tl(e, t) {
  return function(o, r = null) {
    S(o) || (o = K({}, o)), r != null && !U(r) && (process.env.NODE_ENV !== "production" && y("root props passed to app.mount() must be an object."), r = null);
    const s = us(), l = /* @__PURE__ */ new WeakSet();
    let c = !1;
    const f = s.app = {
      _uid: Sl++,
      _component: o,
      _props: r,
      _container: null,
      _context: s,
      _instance: null,
      version: lr,
      get config() {
        return s.config;
      },
      set config(d) {
        process.env.NODE_ENV !== "production" && y(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(d, ...h) {
        return l.has(d) ? process.env.NODE_ENV !== "production" && y("Plugin has already been applied to target app.") : d && S(d.install) ? (l.add(d), d.install(f, ...h)) : S(d) ? (l.add(d), d(f, ...h)) : process.env.NODE_ENV !== "production" && y(
          'A plugin must either be a function or an object with an "install" function.'
        ), f;
      },
      mixin(d) {
        return s.mixins.includes(d) ? process.env.NODE_ENV !== "production" && y(
          "Mixin has already been applied to target app" + (d.name ? `: ${d.name}` : "")
        ) : s.mixins.push(d), f;
      },
      component(d, h) {
        return process.env.NODE_ENV !== "production" && Qn(d, s.config), h ? (process.env.NODE_ENV !== "production" && s.components[d] && y(`Component "${d}" has already been registered in target app.`), s.components[d] = h, f) : s.components[d];
      },
      directive(d, h) {
        return process.env.NODE_ENV !== "production" && os(d), h ? (process.env.NODE_ENV !== "production" && s.directives[d] && y(`Directive "${d}" has already been registered in target app.`), s.directives[d] = h, f) : s.directives[d];
      },
      mount(d, h, a) {
        if (c)
          process.env.NODE_ENV !== "production" && y(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          process.env.NODE_ENV !== "production" && d.__vue_app__ && y(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const v = De(o, r);
          return v.appContext = s, a === !0 ? a = "svg" : a === !1 && (a = void 0), process.env.NODE_ENV !== "production" && (s.reload = () => {
            e(
              Xe(v),
              d,
              a
            );
          }), h && t ? t(v, d) : e(v, d, a), c = !0, f._container = d, d.__vue_app__ = f, process.env.NODE_ENV !== "production" && (f._instance = v.component, Ui(f, lr)), xo(v.component) || v.component.proxy;
        }
      },
      unmount() {
        c ? (e(null, f._container), process.env.NODE_ENV !== "production" && (f._instance = null, ki(f)), delete f._container.__vue_app__) : process.env.NODE_ENV !== "production" && y("Cannot unmount an app that is not mounted.");
      },
      provide(d, h) {
        return process.env.NODE_ENV !== "production" && d in s.provides && y(
          `App already provides property with key "${String(d)}". It will be overwritten with the new value.`
        ), s.provides[d] = h, f;
      },
      runWithContext(d) {
        const h = $t;
        $t = f;
        try {
          return d();
        } finally {
          $t = h;
        }
      }
    };
    return f;
  };
}
let $t = null;
function $l(e, t) {
  if (!Z)
    process.env.NODE_ENV !== "production" && y("provide() can only be used inside setup().");
  else {
    let n = Z.provides;
    const o = Z.parent && Z.parent.provides;
    o === n && (n = Z.provides = Object.create(o)), n[e] = t;
  }
}
function Qt(e, t, n = !1) {
  const o = Z || ee;
  if (o || $t) {
    const r = o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : $t._context.provides;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && S(t) ? t.call(o && o.proxy) : t;
    process.env.NODE_ENV !== "production" && y(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && y("inject() can only be used inside setup() or functional components.");
}
const fs = {}, as = () => Object.create(fs), ds = (e) => Object.getPrototypeOf(e) === fs;
function Il(e, t, n, o = !1) {
  const r = {}, s = as();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), ps(e, t, r, s);
  for (const l in e.propsOptions[0])
    l in r || (r[l] = void 0);
  process.env.NODE_ENV !== "production" && ms(t || {}, r, e), n ? e.props = o ? r : Ei(r) : e.type.props ? e.props = r : e.props = s, e.attrs = s;
}
function Pl(e) {
  for (; e; ) {
    if (e.type.__hmrId)
      return !0;
    e = e.parent;
  }
}
function Rl(e, t, n, o) {
  const {
    props: r,
    attrs: s,
    vnode: { patchFlag: l }
  } = e, c = $(r), [f] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(process.env.NODE_ENV !== "production" && Pl(e)) && (o || l > 0) && !(l & 16)
  ) {
    if (l & 8) {
      const h = e.vnode.dynamicProps;
      for (let a = 0; a < h.length; a++) {
        let v = h[a];
        if (vn(e.emitsOptions, v))
          continue;
        const V = t[v];
        if (f)
          if (R(s, v))
            V !== s[v] && (s[v] = V, d = !0);
          else {
            const P = vt(v);
            r[P] = Jn(
              f,
              c,
              P,
              V,
              e,
              !1
            );
          }
        else
          V !== s[v] && (s[v] = V, d = !0);
      }
    }
  } else {
    ps(e, t, r, s) && (d = !0);
    let h;
    for (const a in c)
      (!t || // for camelCase
      !R(t, a) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((h = ze(a)) === a || !R(t, h))) && (f ? n && // for camelCase
      (n[a] !== void 0 || // for kebab-case
      n[h] !== void 0) && (r[a] = Jn(
        f,
        c,
        a,
        void 0,
        e,
        !0
      )) : delete r[a]);
    if (s !== c)
      for (const a in s)
        (!t || !R(t, a)) && (delete s[a], d = !0);
  }
  d && Ve(e.attrs, "set", ""), process.env.NODE_ENV !== "production" && ms(t || {}, r, e);
}
function ps(e, t, n, o) {
  const [r, s] = e.propsOptions;
  let l = !1, c;
  if (t)
    for (let f in t) {
      if (Ct(f))
        continue;
      const d = t[f];
      let h;
      r && R(r, h = vt(f)) ? !s || !s.includes(h) ? n[h] = d : (c || (c = {}))[h] = d : vn(e.emitsOptions, f) || (!(f in o) || d !== o[f]) && (o[f] = d, l = !0);
    }
  if (s) {
    const f = $(n), d = c || H;
    for (let h = 0; h < s.length; h++) {
      const a = s[h];
      n[a] = Jn(
        r,
        f,
        a,
        d[a],
        e,
        !R(d, a)
      );
    }
  }
  return l;
}
function Jn(e, t, n, o, r, s) {
  const l = e[n];
  if (l != null) {
    const c = R(l, "default");
    if (c && o === void 0) {
      const f = l.default;
      if (l.type !== Function && !l.skipFactory && S(f)) {
        const { propsDefaults: d } = r;
        if (n in d)
          o = d[n];
        else {
          const h = Ut(r);
          o = d[n] = f.call(
            null,
            t
          ), h();
        }
      } else
        o = f;
    }
    l[
      0
      /* shouldCast */
    ] && (s && !c ? o = !1 : l[
      1
      /* shouldCastTrue */
    ] && (o === "" || o === ze(n)) && (o = !0));
  }
  return o;
}
function hs(e, t, n = !1) {
  const o = t.propsCache, r = o.get(e);
  if (r)
    return r;
  const s = e.props, l = {}, c = [];
  let f = !1;
  if (!S(e)) {
    const h = (a) => {
      f = !0;
      const [v, V] = hs(a, t, !0);
      K(l, v), V && c.push(...V);
    };
    !n && t.mixins.length && t.mixins.forEach(h), e.extends && h(e.extends), e.mixins && e.mixins.forEach(h);
  }
  if (!s && !f)
    return U(e) && o.set(e, _t), _t;
  if (C(s))
    for (let h = 0; h < s.length; h++) {
      process.env.NODE_ENV !== "production" && !J(s[h]) && y("props must be strings when using array syntax.", s[h]);
      const a = vt(s[h]);
      Zo(a) && (l[a] = H);
    }
  else if (s) {
    process.env.NODE_ENV !== "production" && !U(s) && y("invalid props options", s);
    for (const h in s) {
      const a = vt(h);
      if (Zo(a)) {
        const v = s[h], V = l[a] = C(v) || S(v) ? { type: v } : K({}, v);
        if (V) {
          const P = er(Boolean, V.type), M = er(String, V.type);
          V[
            0
            /* shouldCast */
          ] = P > -1, V[
            1
            /* shouldCastTrue */
          ] = M < 0 || P < M, (P > -1 || R(V, "default")) && c.push(a);
        }
      }
    }
  }
  const d = [l, c];
  return U(e) && o.set(e, d), d;
}
function Zo(e) {
  return e[0] !== "$" && !Ct(e) ? !0 : (process.env.NODE_ENV !== "production" && y(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Yn(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function Qo(e, t) {
  return Yn(e) === Yn(t);
}
function er(e, t) {
  return C(t) ? t.findIndex((n) => Qo(n, e)) : S(t) && Qo(t, e) ? 0 : -1;
}
function ms(e, t, n) {
  const o = $(t), r = n.propsOptions[0];
  for (const s in r) {
    let l = r[s];
    l != null && Ml(
      s,
      o[s],
      l,
      process.env.NODE_ENV !== "production" ? we(o) : o,
      !R(e, s) && !R(e, ze(s))
    );
  }
}
function Ml(e, t, n, o, r) {
  const { type: s, required: l, validator: c, skipCheck: f } = n;
  if (l && r) {
    y('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !l)) {
    if (s != null && s !== !0 && !f) {
      let d = !1;
      const h = C(s) ? s : [s], a = [];
      for (let v = 0; v < h.length && !d; v++) {
        const { valid: V, expectedType: P } = Fl(t, h[v]);
        a.push(P || ""), d = V;
      }
      if (!d) {
        y(jl(e, t, a));
        return;
      }
    }
    c && !c(t, o) && y('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Al = /* @__PURE__ */ Re(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function Fl(e, t) {
  let n;
  const o = Yn(t);
  if (Al(o)) {
    const r = typeof e;
    n = r === o.toLowerCase(), !n && r === "object" && (n = e instanceof t);
  } else
    o === "Object" ? n = U(e) : o === "Array" ? n = C(e) : o === "null" ? n = e === null : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function jl(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(pn).join(" | ")}`;
  const r = n[0], s = oo(t), l = tr(t, r), c = tr(t, s);
  return n.length === 1 && nr(r) && !Ll(r, s) && (o += ` with value ${l}`), o += `, got ${s} `, nr(s) && (o += `with value ${c}.`), o;
}
function tr(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function nr(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Ll(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const _s = (e) => e[0] === "_" || e === "$stable", wo = (e) => C(e) ? e.map(_e) : [_e(e)], Hl = (e, t, n) => {
  if (t._n)
    return t;
  const o = Yi((...r) => (process.env.NODE_ENV !== "production" && Z && (!n || n.root === Z.root) && y(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), wo(t(...r))), n);
  return o._c = !1, o;
}, gs = (e, t, n) => {
  const o = e._ctx;
  for (const r in e) {
    if (_s(r))
      continue;
    const s = e[r];
    if (S(s))
      t[r] = Hl(r, s, o);
    else if (s != null) {
      process.env.NODE_ENV !== "production" && y(
        `Non-function value encountered for slot "${r}". Prefer function slots for better performance.`
      );
      const l = wo(s);
      t[r] = () => l;
    }
  }
}, Es = (e, t) => {
  process.env.NODE_ENV !== "production" && !bo(e.vnode) && y(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = wo(t);
  e.slots.default = () => n;
}, Ul = (e, t) => {
  const n = e.slots = as();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (K(n, t), br(n, "_", o, !0)) : gs(t, n);
  } else
    t && Es(e, t);
}, kl = (e, t, n) => {
  const { vnode: o, slots: r } = e;
  let s = !0, l = H;
  if (o.shapeFlag & 32) {
    const c = t._;
    c ? process.env.NODE_ENV !== "production" && it ? (K(r, t), Ve(e, "set", "$slots")) : n && c === 1 ? s = !1 : (K(r, t), !n && c === 1 && delete r._) : (s = !t.$stable, gs(t, r)), l = t;
  } else
    t && (Es(e, t), l = { default: 1 });
  if (s)
    for (const c in r)
      !_s(c) && l[c] == null && delete r[c];
};
function Xn(e, t, n, o, r = !1) {
  if (C(e)) {
    e.forEach(
      (v, V) => Xn(
        v,
        t && (C(t) ? t[V] : t),
        n,
        o,
        r
      )
    );
    return;
  }
  if (Tt(o) && !r)
    return;
  const s = o.shapeFlag & 4 ? xo(o.component) || o.component.proxy : o.el, l = r ? null : s, { i: c, r: f } = e;
  if (process.env.NODE_ENV !== "production" && !c) {
    y(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const d = t && t.r, h = c.refs === H ? c.refs = {} : c.refs, a = c.setupState;
  if (d != null && d !== f && (J(d) ? (h[d] = null, R(a, d) && (a[d] = null)) : ne(d) && (d.value = null)), S(f))
    Pe(f, c, 12, [l, h]);
  else {
    const v = J(f), V = ne(f);
    if (v || V) {
      const P = () => {
        if (e.f) {
          const M = v ? R(a, f) ? a[f] : h[f] : f.value;
          r ? C(M) && to(M, s) : C(M) ? M.includes(s) || M.push(s) : v ? (h[f] = [s], R(a, f) && (a[f] = h[f])) : (f.value = [s], e.k && (h[e.k] = f.value));
        } else
          v ? (h[f] = l, R(a, f) && (a[f] = l)) : V ? (f.value = l, e.k && (h[e.k] = l)) : process.env.NODE_ENV !== "production" && y("Invalid template ref type:", f, `(${typeof f})`);
      };
      l ? (P.id = -1, ue(P, n)) : P();
    } else
      process.env.NODE_ENV !== "production" && y("Invalid template ref type:", f, `(${typeof f})`);
  }
}
let wt, We;
function Te(e, t) {
  e.appContext.config.performance && un() && We.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && Gi(e, t, un() ? We.now() : Date.now());
}
function $e(e, t) {
  if (e.appContext.config.performance && un()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    We.mark(o), We.measure(
      `<${Vn(e, e.type)}> ${t}`,
      n,
      o
    ), We.clearMarks(n), We.clearMarks(o);
  }
  process.env.NODE_ENV !== "production" && qi(e, t, un() ? We.now() : Date.now());
}
function un() {
  return wt !== void 0 || (typeof window < "u" && window.performance ? (wt = !0, We = window.performance) : wt = !1), wt;
}
function Bl() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const ue = ol;
function Kl(e) {
  return Wl(e);
}
function Wl(e, t) {
  Bl();
  const n = so();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && go(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: o,
    remove: r,
    patchProp: s,
    createElement: l,
    createText: c,
    createComment: f,
    setText: d,
    setElementText: h,
    parentNode: a,
    nextSibling: v,
    setScopeId: V = z,
    insertStaticContent: P
  } = e, M = (i, u, p, m = null, _ = null, N = null, O = void 0, E = null, b = process.env.NODE_ENV !== "production" && it ? !1 : !!u.dynamicChildren) => {
    if (i === u)
      return;
    i && !Vt(i, u) && (m = Bt(i), He(i, _, N, !0), i = null), u.patchFlag === -2 && (b = !1, u.dynamicChildren = null);
    const { type: g, ref: w, shapeFlag: x } = u;
    switch (g) {
      case Ht:
        xe(i, u, p, m);
        break;
      case ae:
        G(i, u, p, m);
        break;
      case tn:
        i == null ? Y(u, p, m, O) : process.env.NODE_ENV !== "production" && B(i, u, p, O);
        break;
      case fe:
        kt(
          i,
          u,
          p,
          m,
          _,
          N,
          O,
          E,
          b
        );
        break;
      default:
        x & 1 ? de(
          i,
          u,
          p,
          m,
          _,
          N,
          O,
          E,
          b
        ) : x & 6 ? Co(
          i,
          u,
          p,
          m,
          _,
          N,
          O,
          E,
          b
        ) : x & 64 || x & 128 ? g.process(
          i,
          u,
          p,
          m,
          _,
          N,
          O,
          E,
          b,
          bt
        ) : process.env.NODE_ENV !== "production" && y("Invalid VNode type:", g, `(${typeof g})`);
    }
    w != null && _ && Xn(w, i && i.ref, N, u || i, !u);
  }, xe = (i, u, p, m) => {
    if (i == null)
      o(
        u.el = c(u.children),
        p,
        m
      );
    else {
      const _ = u.el = i.el;
      u.children !== i.children && d(_, u.children);
    }
  }, G = (i, u, p, m) => {
    i == null ? o(
      u.el = f(u.children || ""),
      p,
      m
    ) : u.el = i.el;
  }, Y = (i, u, p, m) => {
    [i.el, i.anchor] = P(
      i.children,
      u,
      p,
      m,
      i.el,
      i.anchor
    );
  }, B = (i, u, p, m) => {
    if (u.children !== i.children) {
      const _ = v(i.anchor);
      q(i), [u.el, u.anchor] = P(
        u.children,
        p,
        _,
        m
      );
    } else
      u.el = i.el, u.anchor = i.anchor;
  }, W = ({ el: i, anchor: u }, p, m) => {
    let _;
    for (; i && i !== u; )
      _ = v(i), o(i, p, m), i = _;
    o(u, p, m);
  }, q = ({ el: i, anchor: u }) => {
    let p;
    for (; i && i !== u; )
      p = v(i), r(i), i = p;
    r(u);
  }, de = (i, u, p, m, _, N, O, E, b) => {
    u.type === "svg" ? O = "svg" : u.type === "math" && (O = "mathml"), i == null ? I(
      u,
      p,
      m,
      _,
      N,
      O,
      E,
      b
    ) : Ce(
      i,
      u,
      _,
      N,
      O,
      E,
      b
    );
  }, I = (i, u, p, m, _, N, O, E) => {
    let b, g;
    const { props: w, shapeFlag: x, transition: D, dirs: T } = i;
    if (b = i.el = l(
      i.type,
      N,
      w && w.is,
      w
    ), x & 8 ? h(b, i.children) : x & 16 && se(
      i.children,
      b,
      null,
      m,
      _,
      Mn(i, N),
      O,
      E
    ), T && Ze(i, null, m, "created"), re(b, i, i.scopeId, O, m), w) {
      for (const L in w)
        L !== "value" && !Ct(L) && s(
          b,
          L,
          null,
          w[L],
          N,
          i.children,
          m,
          _,
          Se
        );
      "value" in w && s(b, "value", null, w.value, N), (g = w.onVnodeBeforeMount) && ye(g, m, i);
    }
    process.env.NODE_ENV !== "production" && (Object.defineProperty(b, "__vnode", {
      value: i,
      enumerable: !1
    }), Object.defineProperty(b, "__vueParentComponent", {
      value: m,
      enumerable: !1
    })), T && Ze(i, null, m, "beforeMount");
    const A = Gl(_, D);
    A && D.beforeEnter(b), o(b, u, p), ((g = w && w.onVnodeMounted) || A || T) && ue(() => {
      g && ye(g, m, i), A && D.enter(b), T && Ze(i, null, m, "mounted");
    }, _);
  }, re = (i, u, p, m, _) => {
    if (p && V(i, p), m)
      for (let N = 0; N < m.length; N++)
        V(i, m[N]);
    if (_) {
      let N = _.subTree;
      if (process.env.NODE_ENV !== "production" && N.patchFlag > 0 && N.patchFlag & 2048 && (N = vo(N.children) || N), u === N) {
        const O = _.vnode;
        re(
          i,
          O,
          O.scopeId,
          O.slotScopeIds,
          _.parent
        );
      }
    }
  }, se = (i, u, p, m, _, N, O, E, b = 0) => {
    for (let g = b; g < i.length; g++) {
      const w = i[g] = E ? Be(i[g]) : _e(i[g]);
      M(
        null,
        w,
        u,
        p,
        m,
        _,
        N,
        O,
        E
      );
    }
  }, Ce = (i, u, p, m, _, N, O) => {
    const E = u.el = i.el;
    let { patchFlag: b, dynamicChildren: g, dirs: w } = u;
    b |= i.patchFlag & 16;
    const x = i.props || H, D = u.props || H;
    let T;
    if (p && Qe(p, !1), (T = D.onVnodeBeforeUpdate) && ye(T, p, u, i), w && Ze(u, i, p, "beforeUpdate"), p && Qe(p, !0), process.env.NODE_ENV !== "production" && it && (b = 0, O = !1, g = null), g ? (je(
      i.dynamicChildren,
      g,
      E,
      p,
      m,
      Mn(u, _),
      N
    ), process.env.NODE_ENV !== "production" && en(i, u)) : O || Ne(
      i,
      u,
      E,
      null,
      p,
      m,
      Mn(u, _),
      N,
      !1
    ), b > 0) {
      if (b & 16)
        pe(
          E,
          u,
          x,
          D,
          p,
          m,
          _
        );
      else if (b & 2 && x.class !== D.class && s(E, "class", null, D.class, _), b & 4 && s(E, "style", x.style, D.style, _), b & 8) {
        const A = u.dynamicProps;
        for (let L = 0; L < A.length; L++) {
          const k = A[L], X = x[k], he = D[k];
          (he !== X || k === "value") && s(
            E,
            k,
            X,
            he,
            _,
            i.children,
            p,
            m,
            Se
          );
        }
      }
      b & 1 && i.children !== u.children && h(E, u.children);
    } else
      !O && g == null && pe(
        E,
        u,
        x,
        D,
        p,
        m,
        _
      );
    ((T = D.onVnodeUpdated) || w) && ue(() => {
      T && ye(T, p, u, i), w && Ze(u, i, p, "updated");
    }, m);
  }, je = (i, u, p, m, _, N, O) => {
    for (let E = 0; E < u.length; E++) {
      const b = i[E], g = u[E], w = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        b.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (b.type === fe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Vt(b, g) || // - In the case of a component, it could contain anything.
        b.shapeFlag & 70) ? a(b.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          p
        )
      );
      M(
        b,
        g,
        w,
        null,
        m,
        _,
        N,
        O,
        !0
      );
    }
  }, pe = (i, u, p, m, _, N, O) => {
    if (p !== m) {
      if (p !== H)
        for (const E in p)
          !Ct(E) && !(E in m) && s(
            i,
            E,
            p[E],
            null,
            O,
            u.children,
            _,
            N,
            Se
          );
      for (const E in m) {
        if (Ct(E))
          continue;
        const b = m[E], g = p[E];
        b !== g && E !== "value" && s(
          i,
          E,
          g,
          b,
          O,
          u.children,
          _,
          N,
          Se
        );
      }
      "value" in m && s(i, "value", p.value, m.value, O);
    }
  }, kt = (i, u, p, m, _, N, O, E, b) => {
    const g = u.el = i ? i.el : c(""), w = u.anchor = i ? i.anchor : c("");
    let { patchFlag: x, dynamicChildren: D, slotScopeIds: T } = u;
    process.env.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (it || x & 2048) && (x = 0, b = !1, D = null), T && (E = E ? E.concat(T) : T), i == null ? (o(g, p, m), o(w, p, m), se(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      u.children || [],
      p,
      w,
      _,
      N,
      O,
      E,
      b
    )) : x > 0 && x & 64 && D && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    i.dynamicChildren ? (je(
      i.dynamicChildren,
      D,
      p,
      _,
      N,
      O,
      E
    ), process.env.NODE_ENV !== "production" ? en(i, u) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (u.key != null || _ && u === _.subTree) && en(
        i,
        u,
        !0
        /* shallow */
      )
    )) : Ne(
      i,
      u,
      p,
      w,
      _,
      N,
      O,
      E,
      b
    );
  }, Co = (i, u, p, m, _, N, O, E, b) => {
    u.slotScopeIds = E, i == null ? u.shapeFlag & 512 ? _.ctx.activate(
      u,
      p,
      m,
      O,
      b
    ) : Le(
      u,
      p,
      m,
      _,
      N,
      O,
      b
    ) : ce(i, u, b);
  }, Le = (i, u, p, m, _, N, O) => {
    const E = i.component = nc(
      i,
      m,
      _
    );
    if (process.env.NODE_ENV !== "production" && E.type.__hmrId && Fi(E), process.env.NODE_ENV !== "production" && (Xt(i), Te(E, "mount")), bo(i) && (E.ctx.renderer = bt), process.env.NODE_ENV !== "production" && Te(E, "init"), sc(E), process.env.NODE_ENV !== "production" && $e(E, "init"), E.asyncDep) {
      if (_ && _.registerDep(E, j), !i.el) {
        const b = E.subTree = De(ae);
        G(null, b, u, p);
      }
    } else
      j(
        E,
        i,
        u,
        p,
        _,
        N,
        O
      );
    process.env.NODE_ENV !== "production" && (Zt(), $e(E, "mount"));
  }, ce = (i, u, p) => {
    const m = u.component = i.component;
    if (Qi(i, u, p))
      if (m.asyncDep && !m.asyncResolved) {
        process.env.NODE_ENV !== "production" && Xt(u), F(m, u, p), process.env.NODE_ENV !== "production" && Zt();
        return;
      } else
        m.next = u, Mi(m.update), m.effect.dirty = !0, m.update();
    else
      u.el = i.el, m.vnode = u;
  }, j = (i, u, p, m, _, N, O) => {
    const E = () => {
      if (i.isMounted) {
        let { next: w, bu: x, u: D, parent: T, vnode: A } = i;
        {
          const pt = vs(i);
          if (pt) {
            w && (w.el = A.el, F(i, w, O)), pt.asyncDep.then(() => {
              i.isUnmounted || E();
            });
            return;
          }
        }
        let L = w, k;
        process.env.NODE_ENV !== "production" && Xt(w || i.vnode), Qe(i, !1), w ? (w.el = A.el, F(i, w, O)) : w = A, x && Ot(x), (k = w.props && w.props.onVnodeBeforeUpdate) && ye(k, T, w, A), Qe(i, !0), process.env.NODE_ENV !== "production" && Te(i, "render");
        const X = In(i);
        process.env.NODE_ENV !== "production" && $e(i, "render");
        const he = i.subTree;
        i.subTree = X, process.env.NODE_ENV !== "production" && Te(i, "patch"), M(
          he,
          X,
          // parent may have changed if it's in a teleport
          a(he.el),
          // anchor may have changed if it's in a fragment
          Bt(he),
          i,
          _,
          N
        ), process.env.NODE_ENV !== "production" && $e(i, "patch"), w.el = X.el, L === null && el(i, X.el), D && ue(D, _), (k = w.props && w.props.onVnodeUpdated) && ue(
          () => ye(k, T, w, A),
          _
        ), process.env.NODE_ENV !== "production" && Jr(i), process.env.NODE_ENV !== "production" && Zt();
      } else {
        let w;
        const { el: x, props: D } = u, { bm: T, m: A, parent: L } = i, k = Tt(u);
        if (Qe(i, !1), T && Ot(T), !k && (w = D && D.onVnodeBeforeMount) && ye(w, L, u), Qe(i, !0), x && $o) {
          const X = () => {
            process.env.NODE_ENV !== "production" && Te(i, "render"), i.subTree = In(i), process.env.NODE_ENV !== "production" && $e(i, "render"), process.env.NODE_ENV !== "production" && Te(i, "hydrate"), $o(
              x,
              i.subTree,
              i,
              _,
              null
            ), process.env.NODE_ENV !== "production" && $e(i, "hydrate");
          };
          k ? u.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !i.isUnmounted && X()
          ) : X();
        } else {
          process.env.NODE_ENV !== "production" && Te(i, "render");
          const X = i.subTree = In(i);
          process.env.NODE_ENV !== "production" && $e(i, "render"), process.env.NODE_ENV !== "production" && Te(i, "patch"), M(
            null,
            X,
            p,
            m,
            i,
            _,
            N
          ), process.env.NODE_ENV !== "production" && $e(i, "patch"), u.el = X.el;
        }
        if (A && ue(A, _), !k && (w = D && D.onVnodeMounted)) {
          const X = u;
          ue(
            () => ye(w, L, X),
            _
          );
        }
        (u.shapeFlag & 256 || L && Tt(L.vnode) && L.vnode.shapeFlag & 256) && i.a && ue(i.a, _), i.isMounted = !0, process.env.NODE_ENV !== "production" && Bi(i), u = p = m = null;
      }
    }, b = i.effect = new lo(
      E,
      z,
      () => En(g),
      i.scope
      // track it in component's effect scope
    ), g = i.update = () => {
      b.dirty && b.run();
    };
    g.id = i.uid, Qe(i, !0), process.env.NODE_ENV !== "production" && (b.onTrack = i.rtc ? (w) => Ot(i.rtc, w) : void 0, b.onTrigger = i.rtg ? (w) => Ot(i.rtg, w) : void 0, g.ownerInstance = i), g();
  }, F = (i, u, p) => {
    u.component = i;
    const m = i.vnode.props;
    i.vnode = u, i.next = null, Rl(i, u.props, m, p), kl(i, u.children, p), Me(), Ko(i), Ae();
  }, Ne = (i, u, p, m, _, N, O, E, b = !1) => {
    const g = i && i.children, w = i ? i.shapeFlag : 0, x = u.children, { patchFlag: D, shapeFlag: T } = u;
    if (D > 0) {
      if (D & 128) {
        Nt(
          g,
          x,
          p,
          m,
          _,
          N,
          O,
          E,
          b
        );
        return;
      } else if (D & 256) {
        xn(
          g,
          x,
          p,
          m,
          _,
          N,
          O,
          E,
          b
        );
        return;
      }
    }
    T & 8 ? (w & 16 && Se(g, _, N), x !== g && h(p, x)) : w & 16 ? T & 16 ? Nt(
      g,
      x,
      p,
      m,
      _,
      N,
      O,
      E,
      b
    ) : Se(g, _, N, !0) : (w & 8 && h(p, ""), T & 16 && se(
      x,
      p,
      m,
      _,
      N,
      O,
      E,
      b
    ));
  }, xn = (i, u, p, m, _, N, O, E, b) => {
    i = i || _t, u = u || _t;
    const g = i.length, w = u.length, x = Math.min(g, w);
    let D;
    for (D = 0; D < x; D++) {
      const T = u[D] = b ? Be(u[D]) : _e(u[D]);
      M(
        i[D],
        T,
        p,
        null,
        _,
        N,
        O,
        E,
        b
      );
    }
    g > w ? Se(
      i,
      _,
      N,
      !0,
      !1,
      x
    ) : se(
      u,
      p,
      m,
      _,
      N,
      O,
      E,
      b,
      x
    );
  }, Nt = (i, u, p, m, _, N, O, E, b) => {
    let g = 0;
    const w = u.length;
    let x = i.length - 1, D = w - 1;
    for (; g <= x && g <= D; ) {
      const T = i[g], A = u[g] = b ? Be(u[g]) : _e(u[g]);
      if (Vt(T, A))
        M(
          T,
          A,
          p,
          null,
          _,
          N,
          O,
          E,
          b
        );
      else
        break;
      g++;
    }
    for (; g <= x && g <= D; ) {
      const T = i[x], A = u[D] = b ? Be(u[D]) : _e(u[D]);
      if (Vt(T, A))
        M(
          T,
          A,
          p,
          null,
          _,
          N,
          O,
          E,
          b
        );
      else
        break;
      x--, D--;
    }
    if (g > x) {
      if (g <= D) {
        const T = D + 1, A = T < w ? u[T].el : m;
        for (; g <= D; )
          M(
            null,
            u[g] = b ? Be(u[g]) : _e(u[g]),
            p,
            A,
            _,
            N,
            O,
            E,
            b
          ), g++;
      }
    } else if (g > D)
      for (; g <= x; )
        He(i[g], _, N, !0), g++;
    else {
      const T = g, A = g, L = /* @__PURE__ */ new Map();
      for (g = A; g <= D; g++) {
        const ie = u[g] = b ? Be(u[g]) : _e(u[g]);
        ie.key != null && (process.env.NODE_ENV !== "production" && L.has(ie.key) && y(
          "Duplicate keys found during update:",
          JSON.stringify(ie.key),
          "Make sure keys are unique."
        ), L.set(ie.key, g));
      }
      let k, X = 0;
      const he = D - A + 1;
      let pt = !1, Io = 0;
      const yt = new Array(he);
      for (g = 0; g < he; g++)
        yt[g] = 0;
      for (g = T; g <= x; g++) {
        const ie = i[g];
        if (X >= he) {
          He(ie, _, N, !0);
          continue;
        }
        let be;
        if (ie.key != null)
          be = L.get(ie.key);
        else
          for (k = A; k <= D; k++)
            if (yt[k - A] === 0 && Vt(ie, u[k])) {
              be = k;
              break;
            }
        be === void 0 ? He(ie, _, N, !0) : (yt[be - A] = g + 1, be >= Io ? Io = be : pt = !0, M(
          ie,
          u[be],
          p,
          null,
          _,
          N,
          O,
          E,
          b
        ), X++);
      }
      const Po = pt ? ql(yt) : _t;
      for (k = Po.length - 1, g = he - 1; g >= 0; g--) {
        const ie = A + g, be = u[ie], Ro = ie + 1 < w ? u[ie + 1].el : m;
        yt[g] === 0 ? M(
          null,
          be,
          p,
          Ro,
          _,
          N,
          O,
          E,
          b
        ) : pt && (k < 0 || g !== Po[k] ? dt(be, p, Ro, 2) : k--);
      }
    }
  }, dt = (i, u, p, m, _ = null) => {
    const { el: N, type: O, transition: E, children: b, shapeFlag: g } = i;
    if (g & 6) {
      dt(i.component.subTree, u, p, m);
      return;
    }
    if (g & 128) {
      i.suspense.move(u, p, m);
      return;
    }
    if (g & 64) {
      O.move(i, u, p, bt);
      return;
    }
    if (O === fe) {
      o(N, u, p);
      for (let x = 0; x < b.length; x++)
        dt(b[x], u, p, m);
      o(i.anchor, u, p);
      return;
    }
    if (O === tn) {
      W(i, u, p);
      return;
    }
    if (m !== 2 && g & 1 && E)
      if (m === 0)
        E.beforeEnter(N), o(N, u, p), ue(() => E.enter(N), _);
      else {
        const { leave: x, delayLeave: D, afterLeave: T } = E, A = () => o(N, u, p), L = () => {
          x(N, () => {
            A(), T && T();
          });
        };
        D ? D(N, A, L) : L();
      }
    else
      o(N, u, p);
  }, He = (i, u, p, m = !1, _ = !1) => {
    const {
      type: N,
      props: O,
      ref: E,
      children: b,
      dynamicChildren: g,
      shapeFlag: w,
      patchFlag: x,
      dirs: D
    } = i;
    if (E != null && Xn(E, null, p, i, !0), w & 256) {
      u.ctx.deactivate(i);
      return;
    }
    const T = w & 1 && D, A = !Tt(i);
    let L;
    if (A && (L = O && O.onVnodeBeforeUnmount) && ye(L, u, i), w & 6)
      $s(i.component, p, m);
    else {
      if (w & 128) {
        i.suspense.unmount(p, m);
        return;
      }
      T && Ze(i, null, u, "beforeUnmount"), w & 64 ? i.type.remove(
        i,
        u,
        p,
        _,
        bt,
        m
      ) : g && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (N !== fe || x > 0 && x & 64) ? Se(
        g,
        u,
        p,
        !1,
        !0
      ) : (N === fe && x & 384 || !_ && w & 16) && Se(b, u, p), m && Cn(i);
    }
    (A && (L = O && O.onVnodeUnmounted) || T) && ue(() => {
      L && ye(L, u, i), T && Ze(i, null, u, "unmounted");
    }, p);
  }, Cn = (i) => {
    const { type: u, el: p, anchor: m, transition: _ } = i;
    if (u === fe) {
      process.env.NODE_ENV !== "production" && i.patchFlag > 0 && i.patchFlag & 2048 && _ && !_.persisted ? i.children.forEach((O) => {
        O.type === ae ? r(O.el) : Cn(O);
      }) : Ts(p, m);
      return;
    }
    if (u === tn) {
      q(i);
      return;
    }
    const N = () => {
      r(p), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (i.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: O, delayLeave: E } = _, b = () => O(p, N);
      E ? E(i.el, N, b) : b();
    } else
      N();
  }, Ts = (i, u) => {
    let p;
    for (; i !== u; )
      p = v(i), r(i), i = p;
    r(u);
  }, $s = (i, u, p) => {
    process.env.NODE_ENV !== "production" && i.type.__hmrId && ji(i);
    const { bum: m, scope: _, update: N, subTree: O, um: E } = i;
    m && Ot(m), _.stop(), N && (N.active = !1, He(O, i, u, p)), E && ue(E, u), ue(() => {
      i.isUnmounted = !0;
    }, u), u && u.pendingBranch && !u.isUnmounted && i.asyncDep && !i.asyncResolved && i.suspenseId === u.pendingId && (u.deps--, u.deps === 0 && u.resolve()), process.env.NODE_ENV !== "production" && Wi(i);
  }, Se = (i, u, p, m = !1, _ = !1, N = 0) => {
    for (let O = N; O < i.length; O++)
      He(i[O], u, p, m, _);
  }, Bt = (i) => i.shapeFlag & 6 ? Bt(i.component.subTree) : i.shapeFlag & 128 ? i.suspense.next() : v(i.anchor || i.el);
  let Sn = !1;
  const So = (i, u, p) => {
    i == null ? u._vnode && He(u._vnode, null, null, !0) : M(
      u._vnode || null,
      i,
      u,
      null,
      null,
      null,
      p
    ), Sn || (Sn = !0, Ko(), Gr(), Sn = !1), u._vnode = i;
  }, bt = {
    p: M,
    um: He,
    m: dt,
    r: Cn,
    mt: Le,
    mc: se,
    pc: Ne,
    pbc: je,
    n: Bt,
    o: e
  };
  let To, $o;
  return {
    render: So,
    hydrate: To,
    createApp: Tl(So, To)
  };
}
function Mn({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Qe({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Gl(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function en(e, t, n = !1) {
  const o = e.children, r = t.children;
  if (C(o) && C(r))
    for (let s = 0; s < o.length; s++) {
      const l = o[s];
      let c = r[s];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = r[s] = Be(r[s]), c.el = l.el), n || en(l, c)), c.type === Ht && (c.el = l.el), process.env.NODE_ENV !== "production" && c.type === ae && !c.el && (c.el = l.el);
    }
}
function ql(e) {
  const t = e.slice(), n = [0];
  let o, r, s, l, c;
  const f = e.length;
  for (o = 0; o < f; o++) {
    const d = e[o];
    if (d !== 0) {
      if (r = n[n.length - 1], e[r] < d) {
        t[o] = r, n.push(o);
        continue;
      }
      for (s = 0, l = n.length - 1; s < l; )
        c = s + l >> 1, e[n[c]] < d ? s = c + 1 : l = c;
      d < e[n[s]] && (s > 0 && (t[o] = n[s - 1]), n[s] = o);
    }
  }
  for (s = n.length, l = n[s - 1]; s-- > 0; )
    n[s] = l, l = t[l];
  return n;
}
function vs(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : vs(t);
}
const zl = (e) => e.__isTeleport, fe = Symbol.for("v-fgt"), Ht = Symbol.for("v-txt"), ae = Symbol.for("v-cmt"), tn = Symbol.for("v-stc"), It = [];
let Ee = null;
function yn(e = !1) {
  It.push(Ee = e ? null : []);
}
function Jl() {
  It.pop(), Ee = It[It.length - 1] || null;
}
let At = 1;
function or(e) {
  At += e;
}
function Ns(e) {
  return e.dynamicChildren = At > 0 ? Ee || _t : null, Jl(), At > 0 && Ee && Ee.push(e), e;
}
function Vo(e, t, n, o, r, s) {
  return Ns(
    Q(
      e,
      t,
      n,
      o,
      r,
      s,
      !0
    )
  );
}
function Yl(e, t, n, o, r) {
  return Ns(
    De(
      e,
      t,
      n,
      o,
      r,
      !0
    )
  );
}
function On(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Vt(e, t) {
  return process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && ht.has(t.type) ? (e.shapeFlag &= -257, t.shapeFlag &= -513, !1) : e.type === t.type && e.key === t.key;
}
const Xl = (...e) => ys(
  ...e
), bs = ({ key: e }) => e ?? null, nn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? J(e) || ne(e) || S(e) ? { i: ee, r: e, k: t, f: !!n } : e : null);
function Q(e, t = null, n = null, o = 0, r = null, s = e === fe ? 0 : 1, l = !1, c = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && bs(t),
    ref: t && nn(t),
    scopeId: Nn,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: o,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: ee
  };
  return c ? (Do(f, n), s & 128 && e.normalize(f)) : n && (f.shapeFlag |= J(n) ? 8 : 16), process.env.NODE_ENV !== "production" && f.key !== f.key && y("VNode created with invalid key (NaN). VNode type:", f.type), At > 0 && // avoid a block node from tracking itself
  !l && // has current parent block
  Ee && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && Ee.push(f), f;
}
const De = process.env.NODE_ENV !== "production" ? Xl : ys;
function ys(e, t = null, n = null, o = 0, r = null, s = !1) {
  if ((!e || e === tl) && (process.env.NODE_ENV !== "production" && !e && y(`Invalid vnode type when creating vnode: ${e}.`), e = ae), On(e)) {
    const c = Xe(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Do(c, n), At > 0 && !s && Ee && (c.shapeFlag & 6 ? Ee[Ee.indexOf(e)] = c : Ee.push(c)), c.patchFlag |= -2, c;
  }
  if (xs(e) && (e = e.__vccOpts), t) {
    t = Zl(t);
    let { class: c, style: f } = t;
    c && !J(c) && (t.class = hn(c)), U(f) && (kn(f) && !C(f) && (f = K({}, f)), t.style = io(f));
  }
  const l = J(e) ? 1 : nl(e) ? 128 : zl(e) ? 64 : U(e) ? 4 : S(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && l & 4 && kn(e) && (e = $(e), y(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), Q(
    e,
    t,
    n,
    o,
    r,
    l,
    s,
    !0
  );
}
function Zl(e) {
  return e ? kn(e) || ds(e) ? K({}, e) : e : null;
}
function Xe(e, t, n = !1, o = !1) {
  const { props: r, ref: s, patchFlag: l, children: c, transition: f } = e, d = t ? Ql(r || {}, t) : r, h = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && bs(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? C(s) ? s.concat(nn(t)) : [s, nn(t)] : nn(t)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && l === -1 && C(c) ? c.map(Os) : c,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== fe ? l === -1 ? 16 : l | 16 : l,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: f,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Xe(e.ssContent),
    ssFallback: e.ssFallback && Xe(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return f && o && (h.transition = f.clone(h)), h;
}
function Os(e) {
  const t = Xe(e);
  return C(e.children) && (t.children = e.children.map(Os)), t;
}
function ft(e = " ", t = 0) {
  return De(Ht, null, e, t);
}
function _e(e) {
  return e == null || typeof e == "boolean" ? De(ae) : C(e) ? De(
    fe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? Be(e) : De(Ht, null, String(e));
}
function Be(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Xe(e);
}
function Do(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (C(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Do(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !ds(t) ? t._ctx = ee : r === 3 && ee && (ee.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    S(t) ? (t = { default: t, _ctx: ee }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [ft(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Ql(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const r in o)
      if (r === "class")
        t.class !== o.class && (t.class = hn([t.class, o.class]));
      else if (r === "style")
        t.style = io([t.style, o.style]);
      else if (Ft(r)) {
        const s = t[r], l = o[r];
        l && s !== l && !(C(s) && s.includes(l)) && (t[r] = s ? [].concat(s, l) : l);
      } else
        r !== "" && (t[r] = o[r]);
  }
  return t;
}
function ye(e, t, n, o = null) {
  ve(e, t, 7, [
    n,
    o
  ]);
}
const ec = us();
let tc = 0;
function nc(e, t, n) {
  const o = e.type, r = (t ? t.appContext : e.appContext) || ec, s = {
    uid: tc++,
    vnode: e,
    type: o,
    parent: t,
    appContext: r,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    scope: new Ys(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: hs(o, r),
    emitsOptions: Xr(o, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: H,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: H,
    data: H,
    props: H,
    attrs: H,
    slots: H,
    refs: H,
    setupState: H,
    setupContext: null,
    attrsProxy: null,
    slotsProxy: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return process.env.NODE_ENV !== "production" ? s.ctx = Nl(s) : s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = Ji.bind(null, s), e.ce && e.ce(s), s;
}
let Z = null;
const oc = () => Z || ee;
let fn, Zn;
{
  const e = so(), t = (n, o) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(o), (s) => {
      r.length > 1 ? r.forEach((l) => l(s)) : r[0](s);
    };
  };
  fn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Z = n
  ), Zn = t(
    "__VUE_SSR_SETTERS__",
    (n) => wn = n
  );
}
const Ut = (e) => {
  const t = Z;
  return fn(e), e.scope.on(), () => {
    e.scope.off(), fn(t);
  };
}, rr = () => {
  Z && Z.scope.off(), fn(null);
}, rc = /* @__PURE__ */ Re("slot,component");
function Qn(e, { isNativeTag: t }) {
  (rc(e) || t(e)) && y(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function ws(e) {
  return e.vnode.shapeFlag & 4;
}
let wn = !1;
function sc(e, t = !1) {
  t && Zn(t);
  const { props: n, children: o } = e.vnode, r = ws(e);
  Il(e, n, r, t), Ul(e, o);
  const s = r ? ic(e, t) : void 0;
  return t && Zn(!1), s;
}
function ic(e, t) {
  var n;
  const o = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (o.name && Qn(o.name, e.appContext.config), o.components) {
      const s = Object.keys(o.components);
      for (let l = 0; l < s.length; l++)
        Qn(s[l], e.appContext.config);
    }
    if (o.directives) {
      const s = Object.keys(o.directives);
      for (let l = 0; l < s.length; l++)
        os(s[l]);
    }
    o.compilerOptions && lc() && y(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, ls), process.env.NODE_ENV !== "production" && bl(e);
  const { setup: r } = o;
  if (r) {
    const s = e.setupContext = r.length > 1 ? uc(e) : null, l = Ut(e);
    Me();
    const c = Pe(
      r,
      e,
      0,
      [
        process.env.NODE_ENV !== "production" ? we(e.props) : e.props,
        s
      ]
    );
    if (Ae(), l(), no(c)) {
      if (c.then(rr, rr), t)
        return c.then((f) => {
          sr(e, f, t);
        }).catch((f) => {
          jt(f, e, 0);
        });
      if (e.asyncDep = c, process.env.NODE_ENV !== "production" && !e.suspense) {
        const f = (n = o.name) != null ? n : "Anonymous";
        y(
          `Component <${f}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      sr(e, c, t);
  } else
    Vs(e, t);
}
function sr(e, t, n) {
  S(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : U(t) ? (process.env.NODE_ENV !== "production" && On(t) && y(
    "setup() should not return VNodes directly - return a render function instead."
  ), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Ur(t), process.env.NODE_ENV !== "production" && yl(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && y(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), Vs(e, n);
}
let eo;
const lc = () => !eo;
function Vs(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && eo && !o.render) {
      const r = o.template || Oo(e).template;
      if (r) {
        process.env.NODE_ENV !== "production" && Te(e, "compile");
        const { isCustomElement: s, compilerOptions: l } = e.appContext.config, { delimiters: c, compilerOptions: f } = o, d = K(
          K(
            {
              isCustomElement: s,
              delimiters: c
            },
            l
          ),
          f
        );
        o.render = eo(r, d), process.env.NODE_ENV !== "production" && $e(e, "compile");
      }
    }
    e.render = o.render || z;
  }
  {
    const r = Ut(e);
    Me();
    try {
      wl(e);
    } finally {
      Ae(), r();
    }
  }
  process.env.NODE_ENV !== "production" && !o.render && e.render === z && !t && (o.template ? y(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : y("Component is missing template or render function."));
}
const ir = process.env.NODE_ENV !== "production" ? {
  get(e, t) {
    return ln(), te(e, "get", ""), e[t];
  },
  set() {
    return y("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return y("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return te(e, "get", ""), e[t];
  }
};
function cc(e) {
  return e.slotsProxy || (e.slotsProxy = new Proxy(e.slots, {
    get(t, n) {
      return te(e, "get", "$slots"), t[n];
    }
  }));
}
function uc(e) {
  const t = (n) => {
    if (process.env.NODE_ENV !== "production" && (e.exposed && y("expose() should be called only once per setup()."), n != null)) {
      let o = typeof n;
      o === "object" && (C(n) ? o = "array" : ne(n) && (o = "ref")), o !== "object" && y(
        `expose() should be passed a plain object, received ${o}.`
      );
    }
    e.exposed = n || {};
  };
  if (process.env.NODE_ENV !== "production") {
    let n;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, ir));
      },
      get slots() {
        return cc(e);
      },
      get emit() {
        return (o, ...r) => e.emit(o, ...r);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, ir),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function xo(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Ur(vi(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in lt)
          return lt[n](e);
      },
      has(t, n) {
        return n in t || n in lt;
      }
    }));
}
const fc = /(?:^|[-_])(\w)/g, ac = (e) => e.replace(fc, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Ds(e, t = !0) {
  return S(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Vn(e, t, n = !1) {
  let o = Ds(t);
  if (!o && t.__file) {
    const r = t.__file.match(/([^/\\]+)\.\w+$/);
    r && (o = r[1]);
  }
  if (!o && e && e.parent) {
    const r = (s) => {
      for (const l in s)
        if (s[l] === t)
          return l;
    };
    o = r(
      e.components || e.parent.type.components
    ) || r(e.appContext.components);
  }
  return o ? ac(o) : n ? "App" : "Anonymous";
}
function xs(e) {
  return S(e) && "__vccOpts" in e;
}
const Cs = (e, t) => {
  const n = bi(e, t, wn);
  if (process.env.NODE_ENV !== "production") {
    const o = oc();
    o && o.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function dc() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, r = {
    header(a) {
      return U(a) ? a.__isVue ? ["div", e, "VueInstance"] : ne(a) ? [
        "div",
        {},
        ["span", e, h(a)],
        "<",
        c(a.value),
        ">"
      ] : gt(a) ? [
        "div",
        {},
        ["span", e, rt(a) ? "ShallowReactive" : "Reactive"],
        "<",
        c(a),
        `>${ct(a) ? " (readonly)" : ""}`
      ] : ct(a) ? [
        "div",
        {},
        ["span", e, rt(a) ? "ShallowReadonly" : "Readonly"],
        "<",
        c(a),
        ">"
      ] : null : null;
    },
    hasBody(a) {
      return a && a.__isVue;
    },
    body(a) {
      if (a && a.__isVue)
        return [
          "div",
          {},
          ...s(a.$)
        ];
    }
  };
  function s(a) {
    const v = [];
    a.type.props && a.props && v.push(l("props", $(a.props))), a.setupState !== H && v.push(l("setup", a.setupState)), a.data !== H && v.push(l("data", $(a.data)));
    const V = f(a, "computed");
    V && v.push(l("computed", V));
    const P = f(a, "inject");
    return P && v.push(l("injected", P)), v.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: a }]
    ]), v;
  }
  function l(a, v) {
    return v = K({}, v), Object.keys(v).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        a
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(v).map((V) => [
          "div",
          {},
          ["span", o, V + ": "],
          c(v[V], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function c(a, v = !0) {
    return typeof a == "number" ? ["span", t, a] : typeof a == "string" ? ["span", n, JSON.stringify(a)] : typeof a == "boolean" ? ["span", o, a] : U(a) ? ["object", { object: v ? $(a) : a }] : ["span", n, String(a)];
  }
  function f(a, v) {
    const V = a.type;
    if (S(V))
      return;
    const P = {};
    for (const M in a.ctx)
      d(V, M, v) && (P[M] = a.ctx[M]);
    return P;
  }
  function d(a, v, V) {
    const P = a[V];
    if (C(P) && P.includes(v) || U(P) && v in P || a.extends && d(a.extends, v, V) || a.mixins && a.mixins.some((M) => d(M, v, V)))
      return !0;
  }
  function h(a) {
    return rt(a) ? "ShallowRef" : a.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
const lr = "3.4.27", qe = process.env.NODE_ENV !== "production" ? y : z;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const pc = "http://www.w3.org/2000/svg", hc = "http://www.w3.org/1998/Math/MathML", Ke = typeof document < "u" ? document : null, cr = Ke && /* @__PURE__ */ Ke.createElement("template"), mc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const r = t === "svg" ? Ke.createElementNS(pc, e) : t === "mathml" ? Ke.createElementNS(hc, e) : Ke.createElement(e, n ? { is: n } : void 0);
    return e === "select" && o && o.multiple != null && r.setAttribute("multiple", o.multiple), r;
  },
  createText: (e) => Ke.createTextNode(e),
  createComment: (e) => Ke.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ke.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, o, r, s) {
    const l = n ? n.previousSibling : t.lastChild;
    if (r && (r === s || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === s || !(r = r.nextSibling)); )
        ;
    else {
      cr.innerHTML = o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e;
      const c = cr.content;
      if (o === "svg" || o === "mathml") {
        const f = c.firstChild;
        for (; f.firstChild; )
          c.appendChild(f.firstChild);
        c.removeChild(f);
      }
      t.insertBefore(c, n);
    }
    return [
      // first
      l ? l.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, _c = Symbol("_vtc");
function gc(e, t, n) {
  const o = e[_c];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const ur = Symbol("_vod"), Ec = Symbol("_vsh");
process.env.NODE_ENV;
const vc = Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), Nc = /(^|;)\s*display\s*:/;
function bc(e, t, n) {
  const o = e.style, r = J(n);
  let s = !1;
  if (n && !r) {
    if (t)
      if (J(t))
        for (const l of t.split(";")) {
          const c = l.slice(0, l.indexOf(":")).trim();
          n[c] == null && on(o, c, "");
        }
      else
        for (const l in t)
          n[l] == null && on(o, l, "");
    for (const l in n)
      l === "display" && (s = !0), on(o, l, n[l]);
  } else if (r) {
    if (t !== n) {
      const l = o[vc];
      l && (n += ";" + l), o.cssText = n, s = Nc.test(n);
    }
  } else
    t && e.removeAttribute("style");
  ur in e && (e[ur] = s ? o.display : "", e[Ec] && (o.display = "none"));
}
const yc = /[^\\];\s*$/, fr = /\s*!important$/;
function on(e, t, n) {
  if (C(n))
    n.forEach((o) => on(e, t, o));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && yc.test(n) && qe(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = Oc(e, t);
    fr.test(n) ? e.setProperty(
      ze(o),
      n.replace(fr, ""),
      "important"
    ) : e[o] = n;
  }
}
const ar = ["Webkit", "Moz", "ms"], An = {};
function Oc(e, t) {
  const n = An[t];
  if (n)
    return n;
  let o = vt(t);
  if (o !== "filter" && o in e)
    return An[t] = o;
  o = pn(o);
  for (let r = 0; r < ar.length; r++) {
    const s = ar[r] + o;
    if (s in e)
      return An[t] = s;
  }
  return t;
}
const dr = "http://www.w3.org/1999/xlink";
function wc(e, t, n, o, r) {
  if (o && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(dr, t.slice(6, t.length)) : e.setAttributeNS(dr, t, n);
  else {
    const s = Js(t);
    n == null || s && !yr(n) ? e.removeAttribute(t) : e.setAttribute(t, s ? "" : n);
  }
}
function Vc(e, t, n, o, r, s, l) {
  if (t === "innerHTML" || t === "textContent") {
    o && l(o, r, s), e[t] = n ?? "";
    return;
  }
  const c = e.tagName;
  if (t === "value" && c !== "PROGRESS" && // custom elements may use _value internally
  !c.includes("-")) {
    const d = c === "OPTION" ? e.getAttribute("value") || "" : e.value, h = n ?? "";
    (d !== h || !("_value" in e)) && (e.value = h), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let f = !1;
  if (n === "" || n == null) {
    const d = typeof e[t];
    d === "boolean" ? n = yr(n) : n == null && d === "string" ? (n = "", f = !0) : d === "number" && (n = 0, f = !0);
  }
  try {
    e[t] = n;
  } catch (d) {
    process.env.NODE_ENV !== "production" && !f && qe(
      `Failed setting prop "${t}" on <${c.toLowerCase()}>: value ${n} is invalid.`,
      d
    );
  }
  f && e.removeAttribute(t);
}
function Dc(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function xc(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const pr = Symbol("_vei");
function Cc(e, t, n, o, r = null) {
  const s = e[pr] || (e[pr] = {}), l = s[t];
  if (o && l)
    l.value = process.env.NODE_ENV !== "production" ? mr(o, t) : o;
  else {
    const [c, f] = Sc(t);
    if (o) {
      const d = s[t] = Ic(
        process.env.NODE_ENV !== "production" ? mr(o, t) : o,
        r
      );
      Dc(e, c, d, f);
    } else
      l && (xc(e, c, l, f), s[t] = void 0);
  }
}
const hr = /(?:Once|Passive|Capture)$/;
function Sc(e) {
  let t;
  if (hr.test(e)) {
    t = {};
    let o;
    for (; o = e.match(hr); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : ze(e.slice(2)), t];
}
let Fn = 0;
const Tc = /* @__PURE__ */ Promise.resolve(), $c = () => Fn || (Tc.then(() => Fn = 0), Fn = Date.now());
function Ic(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    ve(
      Pc(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = $c(), n;
}
function mr(e, t) {
  return S(e) || C(e) ? e : (qe(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), z);
}
function Pc(e, t) {
  if (C(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (o) => (r) => !r._stopped && o && o(r)
    );
  } else
    return t;
}
const _r = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Rc = (e, t, n, o, r, s, l, c, f) => {
  const d = r === "svg";
  t === "class" ? gc(e, o, d) : t === "style" ? bc(e, n, o) : Ft(t) ? rn(t) || Cc(e, t, n, o, l) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Mc(e, t, o, d)) ? Vc(
    e,
    t,
    o,
    s,
    l,
    c,
    f
  ) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), wc(e, t, o, d));
};
function Mc(e, t, n, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && _r(t) && S(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return _r(t) && J(n) ? !1 : t in e;
}
const Ac = /* @__PURE__ */ K({ patchProp: Rc }, mc);
let gr;
function Fc() {
  return gr || (gr = Kl(Ac));
}
const jc = (...e) => {
  const t = Fc().createApp(...e);
  process.env.NODE_ENV !== "production" && (Hc(t), Uc(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const r = kc(o);
    if (!r)
      return;
    const s = t._component;
    !S(s) && !s.render && !s.template && (s.template = r.innerHTML), r.innerHTML = "";
    const l = n(r, !1, Lc(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), l;
  }, t;
};
function Lc(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Hc(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => Ws(t) || Gs(t) || qs(t),
    writable: !1
  });
}
function Uc(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        qe(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return qe(o), n;
      },
      set() {
        qe(o);
      }
    });
  }
}
function kc(e) {
  if (J(e)) {
    const t = document.querySelector(e);
    return process.env.NODE_ENV !== "production" && !t && qe(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && qe(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
/**
* vue v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Bc() {
  dc();
}
process.env.NODE_ENV !== "production" && Bc();
const Kc = "/vite.svg", Wc = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='37.07'%20height='36'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20198'%3e%3cpath%20fill='%2341B883'%20d='M204.8%200H256L128%20220.8L0%200h97.92L128%2051.2L157.44%200h47.36Z'%3e%3c/path%3e%3cpath%20fill='%2341B883'%20d='m0%200l128%20220.8L256%200h-51.2L128%20132.48L50.56%200H0Z'%3e%3c/path%3e%3cpath%20fill='%2335495E'%20d='M50.56%200L128%20133.12L204.8%200h-47.36L128%2051.2L97.92%200H50.56Z'%3e%3c/path%3e%3c/svg%3e", Dn = (e) => (Zr("data-v-1d5be6d4"), e = e(), Qr(), e), Gc = { class: "card" }, qc = /* @__PURE__ */ Dn(() => /* @__PURE__ */ Q("p", null, [
  /* @__PURE__ */ ft(" Edit "),
  /* @__PURE__ */ Q("code", null, "components/HelloWorld.vue"),
  /* @__PURE__ */ ft(" to test HMR ")
], -1)), zc = /* @__PURE__ */ Dn(() => /* @__PURE__ */ Q("p", null, [
  /* @__PURE__ */ ft(" Check out "),
  /* @__PURE__ */ Q("a", {
    href: "https://vuejs.org/guide/quick-start.html#local",
    target: "_blank"
  }, "create-vue"),
  /* @__PURE__ */ ft(", the official Vue + Vite starter ")
], -1)), Jc = /* @__PURE__ */ Dn(() => /* @__PURE__ */ Q("p", null, [
  /* @__PURE__ */ ft(" Install "),
  /* @__PURE__ */ Q("a", {
    href: "https://github.com/vuejs/language-tools",
    target: "_blank"
  }, "Volar"),
  /* @__PURE__ */ ft(" in your IDE for a better DX ")
], -1)), Yc = /* @__PURE__ */ Dn(() => /* @__PURE__ */ Q("p", { class: "read-the-docs" }, "Click on the Vite and Vue logos to learn more", -1)), Xc = /* @__PURE__ */ No({
  __name: "HelloWorld",
  props: {
    msg: {}
  },
  setup(e) {
    const t = yi(0);
    return (n, o) => (yn(), Vo(fe, null, [
      Q("h1", null, Ao(n.msg), 1),
      Q("div", Gc, [
        Q("button", {
          type: "button",
          onClick: o[0] || (o[0] = (r) => t.value++)
        }, "count is " + Ao(t.value), 1),
        qc
      ]),
      zc,
      Jc,
      Yc
    ], 64));
  }
}), Ss = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, Zc = /* @__PURE__ */ Ss(Xc, [["__scopeId", "data-v-1d5be6d4"]]), Qc = (e) => (Zr("data-v-58aba71c"), e = e(), Qr(), e), eu = /* @__PURE__ */ Qc(() => /* @__PURE__ */ Q("div", null, [
  /* @__PURE__ */ Q("a", {
    href: "https://vitejs.dev",
    target: "_blank"
  }, [
    /* @__PURE__ */ Q("img", {
      src: Kc,
      class: "logo",
      alt: "Vite logo"
    })
  ]),
  /* @__PURE__ */ Q("a", {
    href: "https://vuejs.org/",
    target: "_blank"
  }, [
    /* @__PURE__ */ Q("img", {
      src: Wc,
      class: "logo vue",
      alt: "Vue logo"
    })
  ])
], -1)), tu = /* @__PURE__ */ No({
  __name: "App",
  setup(e) {
    return (t, n) => (yn(), Vo(fe, null, [
      eu,
      De(Zc, { msg: "Vite + Vue" })
    ], 64));
  }
}), nu = /* @__PURE__ */ Ss(tu, [["__scopeId", "data-v-58aba71c"]]), ou = ["disabled"], ru = /* @__PURE__ */ No({
  __name: "Button",
  props: {
    variant: { default: "primary" },
    size: { default: "medium" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["onClick"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = Cs(() => [
      "dads-btn",
      `--${n.variant}`,
      `--${n.size}`,
      `--${n.disabled ? "disabled" : "enabled"}`
    ]);
    return (s, l) => (yn(), Vo("button", {
      class: hn(r.value),
      disabled: n.disabled ? "true" : "false",
      onClick: l[0] || (l[0] = (c) => o("onClick"))
    }, [
      vl(s.$slots, "default")
    ], 10, ou));
  }
});
jc(nu).mount("#app");
export {
  ru as Button
};
