import{B as n}from"./componentMap-d26e5f5b.js";import{a as l}from"./index.js";import{_ as c}from"./BasicForm.vue_vue_type_script_setup_true_lang-25143c9d.js";import"./BasicForm.vue_vue_type_style_index_0_lang-1182c765.js";import{u as f}from"./useForm-8838369c.js";import{P as u}from"./index-1e1e3c34.js";import{u as e}from"./upload-0bcb9c45.js";import{d,Z as g,a8 as _,a9 as h,l as r,u as o}from"./vue-f962b0e4.js";import{x as i}from"./antd-2f1e67c0.js";import"./useFormItem-be9db066.js";import"./get-3d19de2f.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-c26a6a3e.js";import"./index-05c55ef7.js";import"./useWindowSizeFn-844b46eb.js";import"./isBoolean-9388e2d6.js";import"./uuid-31b8b5a4.js";import"./useSortable-b9fa3fd2.js";import"./download-4dc1f19b.js";import"./base64Conver-39fc0d26.js";import"./index-544ec404.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-1ffb7d6e.js";import"./copyTextToClipboard-f8b59f8f.js";import"./index-8a187562.js";import"./index-c694e7f6.js";import"./FormItem.vue_vue_type_script_lang-d62bffc8.js";import"./helper-b0407d84.js";import"./isNumber-f0336cfd.js";import"./uniqBy-3d1a97d8.js";import"./useContentViewHeight-4ea1ac81.js";import"./onMountedOrActivated-affa4888.js";const Q=d({__name:"index",setup(x){const a=[{field:"field1",component:"Upload",label:"字段1",colProps:{span:8},rules:[{required:!0,message:"请选择上传文件"}],componentProps:{api:e}}],{createMessage:m}=l(),[p]=f({labelWidth:120,schemas:a,actionColOptions:{span:16}});function s(t){m.info(`已上传文件${JSON.stringify(t)}`)}return(t,C)=>(g(),_(o(u),{title:"上传组件示例"},{default:h(()=>[r(o(i),{message:"基础示例"}),r(o(n),{maxSize:20,maxNumber:10,onChange:s,api:o(e),class:"my-5",accept:["image/*"]},null,8,["api"]),r(o(i),{message:"嵌入表单,加入表单校验"}),r(o(c),{onRegister:o(p),class:"my-5"},null,8,["onRegister"])]),_:1}))}});export{Q as default};
