(function(){"use strict";try{if(typeof document<"u"){var d=document.createElement("style");d.appendChild(document.createTextNode(':root{font-family:Noto Sans JP,sans-serif;--dads-white: #ffffff;--dads-black: #000000;--dads-gray-50: #f2f2f2;--dads-gray-100: #e6e6e6;--dads-gray-200: #cccccc;--dads-gray-300: #b3b3b3;--dads-gray-400: #999999;--dads-gray-420: #949494;--dads-gray-500: #7f7f7f;--dads-gray-536: #767676;--dads-gray-600: #666666;--dads-gray-700: #4d4d4d;--dads-gray-800: #333333;--dads-gray-900: #1a1a1a;--dads-blue-50: #e8f1fe;--dads-blue-100: #d9e6ff;--dads-blue-200: #c5d7fb;--dads-blue-300: #9db7f9;--dads-blue-400: #7096f8;--dads-blue-500: #4979f5;--dads-blue-600: #3460fb;--dads-blue-700: #264af4;--dads-blue-800: #0031d8;--dads-blue-900: #0017c1;--dads-blue-1000: #00118f;--dads-blue-1100: #000071;--dads-blue-1200: #000060;--dads-yellow-700: #b78f00;--dads-body: #1a1a1a;--dads-description: #626264;--dads-placeholder: #757578;--dads-on-fill: #ffffff;--dads-link: #0017c1;--dads-hover: #000082;--dads-active: #000082;--dads-visited: #000082;--dads-alert: #ec0000;--dads-disabled: #949497}@media (prefers-color-scheme: dark){:root{--dads-body: #ffffff;--dads-description: #b4b4b7;--dads-placeholder: #949497;--dads-on-fill: #ffffff;--dads-link: #7096f8;--dads-hover: #9db7f9;--dads-active: #9db7f9;--dads-visited: #9db7f9;--dads-alert: #ff7b5c;--dads-disabled: #757578}}.dads-h1{font-size:"36px";font-weight:400;line-height:1.4;letter-spacing:.04em}@media (max-width: 768px){.dads-h1{font-size:"32px";font-weight:500;line-height:1.4;letter-spacing:.04em}}.dads-h2{font-size:"32px";font-weight:400;line-height:1.5;letter-spacing:.04em}@media (max-width: 768px){.dads-h2{font-size:"28px";font-weight:500;line-height:1.5;letter-spacing:.04em}}.dads-h3{font-size:"28px";font-weight:400;line-height:1.5;letter-spacing:.04em}@media (max-width: 768px){.dads-h3{font-size:"24px";font-weight:500;line-height:1.5;letter-spacing:.04em}}.dads-h4{font-size:"24px";font-weight:400;line-height:1.5;letter-spacing:.04em}@media (max-width: 768px){.dads-h4{font-size:"20px";font-weight:500;line-height:1.5;letter-spacing:.04em}}.dads-h5{font-size:"20px";font-weight:400;line-height:1.5;letter-spacing:.04em}@media (max-width: 768px){.dads-h5{font-size:"16px";font-weight:500;line-height:1.7;letter-spacing:.04em}}.dads-body-l,.dads-body{font-size:16px;font-weight:400;line-height:1.7;letter-spacing:.04em}.dads-body-m{font-size:14px;font-weight:400;line-height:1.7;letter-spacing:.04em}.dads-label-l,.dads-label{font-size:14px;font-weight:500;line-height:1.5;letter-spacing:.04em}.dads-label-m{font-size:12px;font-weight:500;line-height:1.5;letter-spacing:.04em}.dads-caption-l,.dads-caption{font-size:12px;font-weight:400;line-height:1.7;letter-spacing:.04em}.dads-caption-m{font-size:10px;font-weight:400;line-height:1.7;letter-spacing:.04em}.dads-button-text{font-size:16px;font-weight:500;line-height:1.5;letter-spacing:.04em}.dads-btn{box-sizing:border-box;display:flex;justify-content:center;align-items:center;min-width:96px;height:48px;padding:12px 16px;border-radius:8px;border-width:1px;border-color:transparent;border-style:solid;background-color:#949494;color:#fff;font-size:16px;font-weight:500;line-height:1.5;letter-spacing:.04em}.dads-btn.--primary{background-color:var(--dads-blue-900);color:#fff}.dads-btn.--primary:active{background-color:var(--dads-blue-100);text-decoration:underline}.dads-btn.--primary:hover{background-color:var(--dads-blue-1100);text-decoration:underline}.dads-btn.--primary:focus-visible{border-color:var(--dads-white);outline-offset:2px;outline:2px solid var(--dads-yellow-700);text-decoration:underline}.dads-btn.--primary:disabled{background-color:var(--dads-gray-420)}.dads-btn.--secondary{background-color:var(--dads-white);color:var(--dads-blue-900);border-color:var(--dads-blue-900)}.dads-btn.--secondary:active{background-color:var(--dads-blue-200);color:var(--dads-blue-1000);border-color:var(--dads-blue-1000);text-decoration:underline}.dads-btn.--secondary:hover{background-color:var(--dads-blue-200);color:var(--dads-blue-1200);border-color:var(--dads-blue-1200);text-decoration:underline}.dads-btn.--secondary:focus-visible{border-color:var(--dads-blue-900);outline-offset:2px;outline:2px solid var(--dads-yellow-700);text-decoration:underline}.dads-btn.--secondary:disabled{background-color:var(--dads-white);color:var(--dads-gray-420);border-color:var(--dads-gray-420)}.dads-btn.--tertiary{background-color:transparent;color:var(--dads-blue-900);border-color:transparent;text-decoration:underline}.dads-btn.--tertiary:active{background-color:var(--dads-blue-200);color:var(--dads-blue-1000)}.dads-btn.--tertiary:hover{background-color:var(--dads-blue-300);color:var(--dads-blue-1200)}.dads-btn.--tertiary:focus-visible{border-color:var(--dads-blue-900);outline-offset:2px;outline:2px solid var(--dads-yellow-700)}.dads-btn.--tertiary:disabled{background-color:transparent;color:var(--dads-gray-420)}.dads-btn.--large{min-width:136px;height:56px}.dads-btn.--medium{min-width:96px;height:48px}.dads-btn.--small{min-width:80px;height:36px;padding:6px 12px}.dads-btn.--x-small{min-width:72px;height:28px;padding:8px 7px}.dads-icn-btn{box-sizing:border-box;display:flex;justify-content:center;align-items:center;padding:16px;border-radius:9999px;border-style:solid;border-width:1px;background-color:var(--dads-white);border-color:var(--dads-blue-900);color:var(--dads-blue-900);font-size:16px;font-weight:700;line-height:150%}.dads-icn-btn .dads-icn{width:24px;height:24px;display:flex;justify-content:center;align-items:center;stroke:var(--dads-blue-900);fill:var(--dads-blue-900)}.dads-icn-btn:hover{background-color:var(--dads-blue-200);color:var(--dads-blue-1000);border-color:var(--dads-blue-1000)}.dads-icn-btn:hover .dads-icn{stroke:var(--dads-blue-1000);fill:var(--dads-blue-1000)}.dads-icn-btn:active{background-color:var(--dads-blue-300);color:var(--dads-blue-1200);border-color:var(--dads-blue-1200)}.dads-icn-btn:active .dads-icn{stroke:var(--dads-blue-1200);fill:var(--dads-blue-1200)}.dads-icn-btn:focus-visible{border-color:var(--dads-blue-900);outline-offset:2px;outline:2px solid var(--dads-yellow-700)}')),document.head.appendChild(d)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
import { defineComponent as i, computed as p, openBlock as t, createElementBlock as e, normalizeClass as u, renderSlot as o } from "vue";
const h = ["disabled"], S = /* @__PURE__ */ i({
  __name: "Button",
  props: {
    variant: { default: "primary" },
    size: { default: "medium" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["onClick"],
  setup(d, { emit: a }) {
    const s = d, l = a, r = p(() => [
      "dads-btn",
      `--${s.variant}`,
      `--${s.size}`,
      `--${s.disabled ? "disabled" : "enabled"}`
    ]);
    return (c, n) => (t(), e("button", {
      class: u(r.value),
      disabled: s.disabled ? "true" : "false",
      onClick: n[0] || (n[0] = (T) => l("onClick"))
    }, [
      o(c.$slots, "default")
    ], 10, h));
  }
}), y = {
  key: 0,
  class: "dads-h1"
}, b = {
  key: 1,
  class: "dads-h2"
}, f = {
  key: 2,
  class: "dads-h3"
}, m = {
  key: 3,
  class: "dads-h4"
}, _ = {
  key: 4,
  class: "dads-h5"
}, v = {
  key: 5,
  class: "dads-body"
}, $ = {
  key: 6,
  class: "dads-body-m"
}, k = {
  key: 7,
  class: "dads-label"
}, C = {
  key: 8,
  class: "dads-label-m"
}, B = {
  key: 9,
  class: "dads-caption"
}, z = {
  key: 10,
  class: "dads-caption-m"
}, g = {
  key: 11,
  class: "dads-body-m"
}, D = {
  key: 12,
  class: "dads-body"
}, j = /* @__PURE__ */ i({
  __name: "Typography",
  props: {
    variant: { default: "body" }
  },
  setup(d) {
    const a = d;
    return (s, l) => a.variant === "h1" ? (t(), e("h1", y, [
      o(s.$slots, "default")
    ])) : a.variant === "h2" ? (t(), e("h2", b, [
      o(s.$slots, "default")
    ])) : a.variant === "h3" ? (t(), e("h3", f, [
      o(s.$slots, "default")
    ])) : a.variant === "h4" ? (t(), e("h4", m, [
      o(s.$slots, "default")
    ])) : a.variant === "h5" ? (t(), e("h5", _, [
      o(s.$slots, "default")
    ])) : a.variant === "body-l" || a.variant === "body" ? (t(), e("p", v, [
      o(s.$slots, "default")
    ])) : a.variant === "body-m" ? (t(), e("p", $, [
      o(s.$slots, "default")
    ])) : a.variant === "label-l" || a.variant === "label" ? (t(), e("p", k, [
      o(s.$slots, "default")
    ])) : a.variant === "label-m" ? (t(), e("p", C, [
      o(s.$slots, "default")
    ])) : a.variant === "caption-l" || a.variant === "caption" ? (t(), e("caption", B, [
      o(s.$slots, "default")
    ])) : a.variant === "caption-m" ? (t(), e("caption", z, [
      o(s.$slots, "default")
    ])) : a.variant === "body-m" ? (t(), e("p", g, [
      o(s.$slots, "default")
    ])) : (t(), e("p", D, [
      o(s.$slots, "default")
    ]));
  }
});
export {
  S as DadsButton,
  j as DadsTypography
};
