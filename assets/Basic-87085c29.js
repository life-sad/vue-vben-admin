import{_ as b}from"./BasicTable.vue_vue_type_script_setup_true_lang-09c5f737.js";import"./TableImg.vue_vue_type_style_index_0_lang-0ed7d68a.js";import"./componentMap-d26e5f5b.js";import{getBasicData as h,getBasicColumns as k}from"./tableData-8330db7a.js";import{d as B,f as t,a7 as S,Z as z,_ as x,l as e,a9 as o,E as p,a0 as s,u as m}from"./vue-f962b0e4.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-25143c9d.js";import"./FormItem.vue_vue_type_script_lang-d62bffc8.js";import"./index.js";import"./antd-2f1e67c0.js";import"./helper-b0407d84.js";import"./isNumber-f0336cfd.js";import"./isBoolean-9388e2d6.js";import"./BasicForm.vue_vue_type_style_index_0_lang-1182c765.js";import"./get-3d19de2f.js";import"./uniqBy-3d1a97d8.js";import"./index-05c55ef7.js";import"./useWindowSizeFn-844b46eb.js";import"./useForm-8838369c.js";import"./uuid-31b8b5a4.js";import"./sortable.esm-4ae27e0b.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-c26a6a3e.js";import"./useFormItem-be9db066.js";import"./onMountedOrActivated-affa4888.js";import"./useSortable-b9fa3fd2.js";import"./download-4dc1f19b.js";import"./base64Conver-39fc0d26.js";import"./index-544ec404.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-1ffb7d6e.js";import"./copyTextToClipboard-f8b59f8f.js";import"./index-8a187562.js";import"./index-c694e7f6.js";import"./select-10be400c.js";const R={class:"p-4"},lt=B({__name:"Basic",setup(T){const a=t(!1),l=t(!1),i=t(!0),r=t(!0),u=t(!1),c=k(),d=h();function g(){a.value=!a.value}function f(){i.value=!i.value}function _(){l.value=!0,setTimeout(()=>{l.value=!1,u.value={pageSize:20}},3e3)}function v(){r.value=!r.value}function C(y){}return(y,w)=>{const n=S("a-button");return z(),x("div",R,[e(m(b),{title:"基础示例",titleHelpMessage:"温馨提醒",columns:m(c),dataSource:m(d),canResize:a.value,loading:l.value,striped:i.value,bordered:r.value,showTableSetting:"",pagination:u.value,onColumnsChange:C},{toolbar:o(()=>[e(n,{type:"primary",onClick:g},{default:o(()=>[p(s(a.value?"取消自适应":"自适应高度"),1)]),_:1}),e(n,{type:"primary",onClick:v},{default:o(()=>[p(s(r.value?"隐藏边框":"显示边框"),1)]),_:1}),e(n,{type:"primary",onClick:_},{default:o(()=>[p(" 开启loading ")]),_:1}),e(n,{type:"primary",onClick:f},{default:o(()=>[p(s(i.value?"隐藏斑马纹":"显示斑马纹"),1)]),_:1})]),_:1},8,["columns","dataSource","canResize","loading","striped","bordered","pagination"])])}}});export{lt as default};
