import{C as m,a as f}from"./index.js";import{P as d}from"./index-1e1e3c34.js";import{c as _}from"./copyTextToClipboard-f8b59f8f.js";import{d as C,f as v,a7 as r,Z as x,a8 as y,a9 as a,l as o,u as n,$ as g,E as h}from"./vue-f962b0e4.js";import"./antd-2f1e67c0.js";import"./useContentViewHeight-4ea1ac81.js";import"./useWindowSizeFn-844b46eb.js";import"./onMountedOrActivated-affa4888.js";import"./isNumber-f0336cfd.js";const w={class:"flex justify-center"},R=C({__name:"index",setup(b){const e=v(""),{createMessage:p}=f();function l(){const t=n(e);if(!t){p.warning("请输入要拷贝的内容！");return}_(t)}return(t,s)=>{const i=r("a-input"),u=r("a-button");return x(),y(n(d),{title:"文本复制示例"},{default:a(()=>[o(n(m),{class:"w-full h-32 bg-white rounded-md",title:"Copy Example"},{default:a(()=>[g("div",w,[o(i,{placeholder:"请输入",value:e.value,"onUpdate:value":s[0]||(s[0]=c=>e.value=c)},null,8,["value"]),o(u,{type:"primary",onClick:l},{default:a(()=>[h(" Copy ")]),_:1})])]),_:1})]),_:1})}}});export{R as default};
