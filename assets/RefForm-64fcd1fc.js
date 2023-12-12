var b=(d,u,r)=>new Promise((f,p)=>{var l=e=>{try{t(r.next(e))}catch(o){p(o)}},a=e=>{try{t(r.throw(e))}catch(o){p(o)}},t=e=>e.done?f(e.value):Promise.resolve(e.value).then(l,a);t((r=r.apply(d,u)).next())});import{_ as C}from"./BasicForm.vue_vue_type_script_setup_true_lang-25143c9d.js";import"./BasicForm.vue_vue_type_style_index_0_lang-1182c765.js";import"./componentMap-d26e5f5b.js";import{C as k,a as c}from"./index.js";import{P as $}from"./index-1e1e3c34.js";import{d as P,f as B,a7 as w,Z as x,a8 as S,a9 as s,$ as v,l as n,E as i,u as m,x as g}from"./vue-f962b0e4.js";import"./FormItem.vue_vue_type_script_lang-d62bffc8.js";import"./helper-b0407d84.js";import"./isNumber-f0336cfd.js";import"./isBoolean-9388e2d6.js";import"./antd-2f1e67c0.js";import"./get-3d19de2f.js";import"./uniqBy-3d1a97d8.js";import"./index-05c55ef7.js";import"./useWindowSizeFn-844b46eb.js";import"./useFormItem-be9db066.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-c26a6a3e.js";import"./uuid-31b8b5a4.js";import"./useSortable-b9fa3fd2.js";import"./download-4dc1f19b.js";import"./base64Conver-39fc0d26.js";import"./index-544ec404.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-1ffb7d6e.js";import"./copyTextToClipboard-f8b59f8f.js";import"./index-8a187562.js";import"./index-c694e7f6.js";import"./useContentViewHeight-4ea1ac81.js";import"./onMountedOrActivated-affa4888.js";const y={class:"mb-4"},R={class:"mb-4"},lt=P({__name:"RefForm",setup(d){const u=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:a=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}}],r=B(null),{createMessage:f}=c();function p(a){f.success("click search,values:"+JSON.stringify(a))}function l(a){return b(this,null,function*(){const t=m(r);t&&(yield g(),yield t.setProps(a))})}return(a,t)=>{const e=w("a-button");return x(),S(m($),{title:"Ref操作示例"},{default:s(()=>[v("div",y,[n(e,{onClick:t[0]||(t[0]=o=>l({labelWidth:150})),class:"mr-2"},{default:s(()=>[i(" 更改labelWidth ")]),_:1}),n(e,{onClick:t[1]||(t[1]=o=>l({labelWidth:120})),class:"mr-2"},{default:s(()=>[i(" 还原labelWidth ")]),_:1}),n(e,{onClick:t[2]||(t[2]=o=>l({size:"large"})),class:"mr-2"},{default:s(()=>[i(" 更改Size ")]),_:1}),n(e,{onClick:t[3]||(t[3]=o=>l({size:"default"})),class:"mr-2"},{default:s(()=>[i(" 还原Size ")]),_:1}),n(e,{onClick:t[4]||(t[4]=o=>l({disabled:!0})),class:"mr-2"},{default:s(()=>[i(" 禁用表单 ")]),_:1}),n(e,{onClick:t[5]||(t[5]=o=>l({disabled:!1})),class:"mr-2"},{default:s(()=>[i(" 解除禁用 ")]),_:1}),n(e,{onClick:t[6]||(t[6]=o=>l({readonly:!0})),class:"mr-2"},{default:s(()=>[i(" 只读表单 ")]),_:1}),n(e,{onClick:t[7]||(t[7]=o=>l({readonly:!1})),class:"mr-2"},{default:s(()=>[i(" 解除只读 ")]),_:1}),n(e,{onClick:t[8]||(t[8]=o=>l({compact:!0})),class:"mr-2"},{default:s(()=>[i(" 紧凑表单 ")]),_:1}),n(e,{onClick:t[9]||(t[9]=o=>l({compact:!1})),class:"mr-2"},{default:s(()=>[i(" 还原正常间距 ")]),_:1}),n(e,{onClick:t[10]||(t[10]=o=>l({actionColOptions:{span:8}})),class:"mr-2"},{default:s(()=>[i(" 操作按钮位置 ")]),_:1})]),v("div",R,[n(e,{onClick:t[11]||(t[11]=o=>l({showActionButtonGroup:!1})),class:"mr-2"},{default:s(()=>[i(" 隐藏操作按钮 ")]),_:1}),n(e,{onClick:t[12]||(t[12]=o=>l({showActionButtonGroup:!0})),class:"mr-2"},{default:s(()=>[i(" 显示操作按钮 ")]),_:1}),n(e,{onClick:t[13]||(t[13]=o=>l({showResetButton:!1})),class:"mr-2"},{default:s(()=>[i(" 隐藏重置按钮 ")]),_:1}),n(e,{onClick:t[14]||(t[14]=o=>l({showResetButton:!0})),class:"mr-2"},{default:s(()=>[i(" 显示重置按钮 ")]),_:1}),n(e,{onClick:t[15]||(t[15]=o=>l({showSubmitButton:!1})),class:"mr-2"},{default:s(()=>[i(" 隐藏查询按钮 ")]),_:1}),n(e,{onClick:t[16]||(t[16]=o=>l({showSubmitButton:!0})),class:"mr-2"},{default:s(()=>[i(" 显示查询按钮 ")]),_:1}),n(e,{onClick:t[17]||(t[17]=o=>l({resetButtonOptions:{disabled:!0,text:"重置New"}})),class:"mr-2"},{default:s(()=>[i(" 修改重置按钮 ")]),_:1}),n(e,{onClick:t[18]||(t[18]=o=>l({submitButtonOptions:{disabled:!0,loading:!0}})),class:"mr-2"},{default:s(()=>[i(" 修改查询按钮 ")]),_:1})]),n(m(k),{title:"使用ref调用表单内部函数示例"},{default:s(()=>[n(m(C),{schemas:u,ref_key:"formElRef",ref:r,labelWidth:100,onSubmit:p,actionColOptions:{span:24}},null,512)]),_:1})]),_:1})}}});export{lt as default};
