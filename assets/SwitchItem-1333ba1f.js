import{h as c,i as d,e as l}from"./index.js";import{b as m}from"./index-f2d77fdd.js";import{d as p,c as u,Z as h,_,$ as f,a0 as b,l as g,ac as C,u as t,a1 as y}from"./vue-f962b0e4.js";import{a8 as v}from"./antd-2f1e67c0.js";import"./uniq-e2f49495.js";import"./isBoolean-9388e2d6.js";import"./index-de16e189.js";import"./useContentViewHeight-4ea1ac81.js";import"./useWindowSizeFn-844b46eb.js";import"./uniqBy-3d1a97d8.js";import"./get-3d19de2f.js";import"./useSortable-b9fa3fd2.js";import"./index-c5d2cc0e.js";import"./isNumber-f0336cfd.js";import"./lock-5a0d57cb.js";const k=p({name:"SwitchItem",__name:"SwitchItem",props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:Boolean}},setup(a){const e=a,{prefixCls:s}=c("setting-switch-item"),{t:n}=d(),i=u(()=>e.def?{checked:e.def}:{}),r=o=>{e.event&&m(e.event,o)};return(o,S)=>(h(),_("div",{class:y(t(s))},[f("span",null,b(a.title),1),g(t(v),C(i.value,{onChange:r,disabled:a.disabled,checkedChildren:t(n)("layout.setting.on"),unCheckedChildren:t(n)("layout.setting.off")}),null,16,["disabled","checkedChildren","unCheckedChildren"])],2))}});const A=l(k,[["__scopeId","data-v-b47b0939"]]);export{A as default};
