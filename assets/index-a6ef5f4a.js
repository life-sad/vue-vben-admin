import{_ as S}from"./BasicTable.vue_vue_type_script_setup_true_lang-09c5f737.js";import"./TableImg.vue_vue_type_style_index_0_lang-0ed7d68a.js";import{a as k}from"./componentMap-d26e5f5b.js";import{u as I}from"./useTable-b7ede229.js";import{g as R}from"./system-f9b163cb.js";import{P as T}from"./index-1e1e3c34.js";import{_ as F}from"./DeptTree.vue_vue_type_script_setup_true_lang-874b9417.js";import{b as M}from"./index-05c55ef7.js";import{_ as V}from"./AccountModal.vue_vue_type_script_setup_true_lang-7b509fb2.js";import{c as $,s as E}from"./account.data-18eb9a0b.js";import{bm as N}from"./index.js";import{d as A,r as B,a7 as D,Z as l,a8 as c,a9 as o,l as i,u as e,E as H,ab as P}from"./vue-f962b0e4.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-25143c9d.js";import"./FormItem.vue_vue_type_script_lang-d62bffc8.js";import"./helper-b0407d84.js";import"./isNumber-f0336cfd.js";import"./isBoolean-9388e2d6.js";import"./antd-2f1e67c0.js";import"./BasicForm.vue_vue_type_style_index_0_lang-1182c765.js";import"./get-3d19de2f.js";import"./uniqBy-3d1a97d8.js";import"./useForm-8838369c.js";import"./uuid-31b8b5a4.js";import"./sortable.esm-4ae27e0b.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-c26a6a3e.js";import"./useFormItem-be9db066.js";import"./useWindowSizeFn-844b46eb.js";import"./onMountedOrActivated-affa4888.js";import"./useSortable-b9fa3fd2.js";import"./download-4dc1f19b.js";import"./base64Conver-39fc0d26.js";import"./index-544ec404.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-1ffb7d6e.js";import"./copyTextToClipboard-f8b59f8f.js";import"./index-8a187562.js";import"./index-c694e7f6.js";import"./useContentViewHeight-4ea1ac81.js";import"./index-55db415a.js";import"./useContextMenu-b69faf00.js";const It=A({name:"AccountManagement",__name:"index",setup(U){const p=N(),[d,{openModal:a}]=M(),m=B({}),[u,{reload:s,updateTableDataRecord:f}]=I({title:"账号列表",api:R,rowKey:"id",columns:$,formConfig:{labelWidth:120,schemas:E,autoSubmitOnEnter:!0},useSearchForm:!0,showTableSetting:!0,bordered:!0,handleSearchInfoFn(t){return t},actionColumn:{width:120,title:"操作",dataIndex:"action"}});function _(){a(!0,{isUpdate:!1})}function h(t){a(!0,{record:t,isUpdate:!0})}function b(t){}function g({isUpdate:t,values:r}){t?f(r.id,r):s()}function C(t=""){m.deptId=t,s()}function x(t){p("/system/account_detail/"+t.id)}return(t,r)=>{const w=D("a-button");return l(),c(e(T),{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:o(()=>[i(F,{class:"w-1/4 xl:w-1/5",onSelect:C}),i(e(S),{onRegister:e(u),class:"w-3/4 xl:w-4/5",searchInfo:m},{toolbar:o(()=>[i(w,{type:"primary",onClick:_},{default:o(()=>[H("新增账号")]),_:1})]),bodyCell:o(({column:y,record:n})=>[y.key==="action"?(l(),c(e(k),{key:0,actions:[{icon:"clarity:info-standard-line",tooltip:"查看用户详情",onClick:x.bind(null,n)},{icon:"clarity:note-edit-line",tooltip:"编辑用户资料",onClick:h.bind(null,n)},{icon:"ant-design:delete-outlined",color:"error",tooltip:"删除此账号",popConfirm:{title:"是否确认删除",placement:"left",confirm:b.bind(null,n)}}]},null,8,["actions"])):P("",!0)]),_:1},8,["onRegister","searchInfo"]),i(V,{onRegister:e(d),onSuccess:g},null,8,["onRegister"])]),_:1})}}});export{It as default};
