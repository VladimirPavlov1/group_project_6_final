(self.webpackChunkgroup_project_6_final=self.webpackChunkgroup_project_6_final||[]).push([[328],{9328:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return S}});var n="UserPage_box__E7q34",s="UserPage_title__CPvgT",l=t(5861),i=t(4942),r=t(1413),o=t(9439),c=t(4687),d=t.n(c),u=t(5705),m={photo:"UserData_photo__uE6V5",edit:"UserData_edit__jaVRz",labelPhoto:"UserData_labelPhoto__dXRJZ",confirm:"UserData_confirm__hJldX",inputHidden:"UserData_inputHidden__inphK",form:"UserData_form__GylCX",box:"UserData_box__W6rdZ",buttonUploadHidden:"UserData_buttonUploadHidden__Tt76m"},h=t(9126),p=t(6856),A=t(2791),b=t(9434),x=t(4746),j="UserDataItem_text__9MaBd",f="UserDataItem_input__+k829",k="UserDataItem_field__PD3Xz",v="UserDataItem_wrapper__TkHsR",U="UserDataItem_buttonHidden__tFCK4",D=t(7692),g=t(184),J=function(e){var a=e.id,t=e.value,n=e.name,s=e.placeholder,l=e.label,i=e.onChange,r=e.isReadonly,o=e.onClick,c=e.disabled;return(0,g.jsxs)("div",{className:k,children:[(0,g.jsx)("label",{className:j,htmlFor:a,children:l}),(0,g.jsxs)("div",{className:v,children:[(0,g.jsx)("input",{type:"text",className:f,id:a,placeholder:s,name:n,value:t,readOnly:r,onChange:i,required:"name"===n||"birthday"===n}),r?(0,g.jsx)("button",{type:"button",disabled:c,onClick:o,name:n,className:U,children:(0,g.jsx)(D.vpV,{style:{fill:"#54ADFF",pointerEvents:"none"},size:24})}):(0,g.jsx)("button",{type:"submit",className:U,children:(0,g.jsx)(h.IPg,{color:"#00C3AD",size:24,style:{pointerEvents:"none"}})})]})]})},y={name:!0,email:!0,birthday:!0,phone:!0,city:!0},R=function(){var e=(0,b.v9)(x.userStateValues),a=(0,A.useState)(null),t=(0,o.Z)(a,2),n=t[0],s=t[1],c=(0,A.useState)(y),j=(0,o.Z)(c,2),f=j[0],k=j[1],v=(0,A.useState)((0,r.Z)({},e)),U=(0,o.Z)(v,2),D=U[0],R=U[1],N=(0,A.useState)(""),z=(0,o.Z)(N,2),B=z[0],Q=z[1],S=(0,A.useState)(!1),Z=(0,o.Z)(S,2),G=Z[0],E=Z[1],L=function(e){var a=e.target,t=a.name,n=a.value;R((0,r.Z)((0,r.Z)({},D),{},(0,i.Z)({},t,n))),Q(t)},O=function(e){var a=e.target.name;k((0,r.Z)((0,r.Z)({},f),{},(0,i.Z)({},a,!1))),E(!0)},M=function(){var e=(0,l.Z)(d().mark((function e(){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=3;break}return alert("Please select file!"),e.abrupt("return");case 3:(new FormData).append("file",D.avatar);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,g.jsx)(u.J9,{children:(0,g.jsxs)("form",{onSubmit:function(e){e.preventDefault(),B?(console.log((0,i.Z)({},B,D[B])),Q(""),k(y),E(!1)):alert("Please write something")},className:m.box,autoComplete:"off",children:[(0,g.jsxs)("div",{className:"photo-container",children:[(0,g.jsx)("img",{className:m.photo,src:D.avatar?D.avatar:"data:image/png;base64,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",alt:"user",width:182,height:182}),(0,g.jsxs)("div",{className:m.edit,children:[n?(0,g.jsx)("button",{type:"submit",className:m.buttonUploadHidden,onClick:M,children:(0,g.jsx)(h.IPg,{size:24,color:"#54ADFF",style:{pointerEvents:"none"}})}):(0,g.jsx)(p.iOE,{size:24,color:"#54ADFF"}),(0,g.jsx)("div",{className:m.container,children:n?(0,g.jsx)("p",{className:m.confirm,children:"Confirm"}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("input",{type:"file",id:"file",name:"avatar",className:m.inputHidden,onChange:function(e){var a=e.target.name;s(e.target.files[0]);var t=window.URL.createObjectURL(e.target.files[0]);R((0,r.Z)((0,r.Z)({},D),{},(0,i.Z)({},a,t))),Q(a)},accept:"image/png, image/jpeg",disabled:!!G}),(0,g.jsx)("label",{className:m.labelPhoto,htmlFor:"file",children:"Edit Photo"})]})})]})]}),(0,g.jsxs)("div",{className:m.form,children:[(0,g.jsx)(J,{id:"user_name",value:D.name,placeholder:"Anna |",name:"name",label:"Name:",onChange:L,isReadonly:f.name,onClick:O,disabled:!!G}),(0,g.jsx)(J,{id:"user_email",value:D.email,placeholder:"anna00@gmail.com|",name:"email",label:"Email:",onChange:L,isReadonly:f.email,onClick:O,disabled:!!G}),(0,g.jsx)(J,{id:"user_birthday",value:D.birthday,placeholder:"00.00.0000",name:"birthday",label:"Birthday:",onChange:L,isReadonly:f.birthday,onClick:O,disabled:!!G}),(0,g.jsx)(J,{id:"user_phone",value:D.phone,placeholder:"+38000000000",name:"phone",label:"Phone:",onChange:L,isReadonly:f.phone,onClick:O,disabled:!!G}),(0,g.jsx)(J,{id:"user_city",value:D.city,placeholder:"Kiev",name:"city",label:"City:",onChange:L,isReadonly:f.city,onClick:O,disabled:!!G})]})]})})},N=t(458),z="LogOut_logout__ODqAK",B="LogOut_button__87t-9",Q=function(){return(0,g.jsxs)("div",{className:z,children:[(0,g.jsx)(N.GAI,{size:24,fill:"#54ADFF"}),(0,g.jsx)("button",{type:"button",className:B,children:"Log Out"})]})},S=function(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("h2",{className:s,children:"My information:"}),(0,g.jsxs)("div",{className:n,children:[(0,g.jsx)(R,{}),(0,g.jsx)(Q,{})]})]})}},4746:function(){}}]);
//# sourceMappingURL=328.fbbd1b30.chunk.js.map