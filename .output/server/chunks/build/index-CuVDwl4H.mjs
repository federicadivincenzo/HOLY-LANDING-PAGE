import { useSSRContext, withCtx, createTextVNode, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as _export_sfc, a as __nuxt_component_0$1 } from './server.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _imports_0 = publicAssetsURL("/img/HOLY_LOGO_WHITE.png");
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "holy-hero" }, _attrs))}><div class="holy-hero__logo"><img${ssrRenderAttr("src", _imports_0)} alt="Holy logo "></div><div class="holy-hero__footer"><span>VIA PALERMO, 15</span><span class="holy-hero__center">MILANO, BRERA</span><span> 20121</span></div></main>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HolyHero.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_HolyHero = __nuxt_component_0;
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<!--[--><div class="holy__main">`);
  _push(ssrRenderComponent(_component_HolyHero, null, null, _parent));
  _push(`</div><main class="holy__menu"><div class="holy__menu__container"><div class="holy__menu__item">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "https://drive.google.com/file/d/1YtkoQdX8T3xx3-i53wvDr58EKSqPeYr3/view?usp=sharing" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Lunch and Dinner`);
      } else {
        return [
          createTextVNode(" Lunch and Dinner")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="holy__menu__item">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "https://drive.google.com/file/d/1BBTzuILckq82yl9r0ALkSUOaEj-p3Jf5/view?usp=sharing" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Wine`);
      } else {
        return [
          createTextVNode("Wine")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="holy__menu__item">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "https://drive.google.com/file/d/1UWOKtdz3BgctqsVPrhQTSiZhmkn8VkkJ/view?usp=sharing" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Dolcetti`);
      } else {
        return [
          createTextVNode(" Dolcetti")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="holy__menu__item">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "https://drive.google.com/file/d/1bpkS94XY1t-XD2OkzR7xbIArevebkNsX/view?usp=sharing" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Join the event`);
      } else {
        return [
          createTextVNode(" Join the event")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></main><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-CuVDwl4H.mjs.map
