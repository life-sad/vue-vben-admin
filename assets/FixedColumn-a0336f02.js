import{_ as p}from"./BasicTable.vue_vue_type_script_setup_true_lang-09c5f737.js";import"./TableImg.vue_vue_type_style_index_0_lang-0ed7d68a.js";import{a as l}from"./componentMap-d26e5f5b.js";import{u as s}from"./useTable-b7ede229.js";import{d as c}from"./table-b1f4ce3d.js";import{d as u,Z as e,_ as f,l as _,a9 as x,a8 as b,u as t,ab as h}from"./vue-f962b0e4.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-25143c9d.js";import"./FormItem.vue_vue_type_script_lang-d62bffc8.js";import"./index.js";import"./antd-2f1e67c0.js";import"./helper-b0407d84.js";import"./isNumber-f0336cfd.js";import"./isBoolean-9388e2d6.js";import"./BasicForm.vue_vue_type_style_index_0_lang-1182c765.js";import"./get-3d19de2f.js";import"./uniqBy-3d1a97d8.js";import"./index-05c55ef7.js";import"./useWindowSizeFn-844b46eb.js";import"./useForm-8838369c.js";import"./uuid-31b8b5a4.js";import"./sortable.esm-4ae27e0b.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-c26a6a3e.js";import"./useFormItem-be9db066.js";import"./onMountedOrActivated-affa4888.js";import"./useSortable-b9fa3fd2.js";import"./download-4dc1f19b.js";import"./base64Conver-39fc0d26.js";import"./index-544ec404.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-1ffb7d6e.js";import"./copyTextToClipboard-f8b59f8f.js";import"./index-8a187562.js";import"./index-c694e7f6.js";const w={class:"p-4"},tt=u({__name:"FixedColumn",setup(C){const r=[{title:"ID",dataIndex:"id",fixed:"left",width:280},{title:"姓名",dataIndex:"name",width:260},{title:"地址",dataIndex:"address"},{title:"编号",dataIndex:"no",width:300},{title:"开始时间",width:200,dataIndex:"beginTime"},{title:"结束时间",dataIndex:"endTime",width:200}],[n]=s({title:"TableAction组件及固定列示例",api:c,columns:r,rowSelection:{type:"radio"},bordered:!0,actionColumn:{width:160,title:"Action",dataIndex:"action"}});function a(i){}function m(i){}return(i,I)=>(e(),f("div",w,[_(t(p),{onRegister:t(n)},{bodyCell:x(({column:d,record:o})=>[d.key==="action"?(e(),b(t(l),{key:0,actions:[{label:"删除",icon:"ic:outline-delete-outline",onClick:a.bind(null,o)}],dropDownActions:[{label:"启用",popConfirm:{title:"是否启用？",confirm:m.bind(null,o)}}]},null,8,["actions","dropDownActions"])):h("",!0)]),_:1},8,["onRegister"])]))}});export{tt as default};
