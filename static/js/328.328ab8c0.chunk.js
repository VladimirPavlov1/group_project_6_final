"use strict";(self.webpackChunkgroup_project_6_final=self.webpackChunkgroup_project_6_final||[]).push([[328],{9328:function(e,a,n){n.r(a),n.d(a,{default:function(){return B}});var t="UserPage_box__E7q34",i="UserPage_title__CPvgT",s=n(4942),l=n(1413),r=n(9439),o=n(5705),c={photo:"UserData_photo__uE6V5",edit:"UserData_edit__jaVRz",labelPhoto:"UserData_labelPhoto__dXRJZ",confirm:"UserData_confirm__hJldX",inputHidden:"UserData_inputHidden__inphK",form:"UserData_form__GylCX",box:"UserData_box__W6rdZ",buttonUploadHidden:"UserData_buttonUploadHidden__Tt76m"},d=n(9126),u=n(6856),h=n(2791),m=n(9434),A=n(4217),b="UserDataItem_text__9MaBd",p="UserDataItem_input__+k829",f="UserDataItem_field__PD3Xz",x="UserDataItem_wrapper__TkHsR",j="UserDataItem_buttonHidden__tFCK4",k=n(7692),v=n(184),U=function(e){var a=e.id,n=e.value,t=e.name,i=e.placeholder,s=e.label,l=e.onChange,r=e.isReadonly,o=e.onClick,c=e.disabled;return(0,v.jsxs)("div",{className:f,children:[(0,v.jsx)("label",{className:b,htmlFor:a,children:s}),(0,v.jsxs)("div",{className:x,children:[(0,v.jsx)("input",{type:"text",className:p,id:a,placeholder:i,name:t,value:n,readOnly:r,onChange:l}),r?(0,v.jsx)("button",{type:"button",disabled:c,onClick:o,name:t,className:j,children:(0,v.jsx)(k.vpV,{style:{fill:"#54ADFF",pointerEvents:"none"},size:24})}):(0,v.jsx)("button",{type:"submit",className:j,children:(0,v.jsx)(d.IPg,{color:"#00C3AD",size:24,style:{pointerEvents:"none"}})})]})]})},g=n(3702),D=n(9273),R={name:!0,email:!0,birthday:!0,phone:!0,city:!0},J=function(){var e=(0,m.v9)(A.dy),a=(0,m.I0)(),n=(0,h.useState)((0,l.Z)({},e)),t=(0,r.Z)(n,2),i=t[0],b=t[1],p=(0,h.useState)(null),f=(0,r.Z)(p,2),x=f[0],j=f[1],k=(0,h.useState)(R),J=(0,r.Z)(k,2),y=J[0],N=J[1],z=(0,h.useState)(""),L=(0,r.Z)(z,2),B=L[0],Q=L[1];console.log(B);var S=(0,h.useState)(!1),Z=(0,r.Z)(S,2),G=Z[0],E=Z[1];console.log(G);var I=function(e){var a=e.target,n=a.name,t=a.value;b((0,l.Z)((0,l.Z)({},i),{},(0,s.Z)({},n,t))),Q(n)},M=function(e){var a=e.target.name;N((0,l.Z)((0,l.Z)({},y),{},(0,s.Z)({},a,!1))),E(!0)};return(0,v.jsx)(o.J9,{validationSchema:g.Mf,children:(0,v.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log((0,s.Z)({id:i._id},B,i[B])),a((0,D.Nq)((0,s.Z)({_id:i._id},B,i[B]))),Q(""),N(R),E(!1)},className:c.box,autoComplete:"off",children:[(0,v.jsxs)("div",{className:"photo-container",children:[(0,v.jsx)("img",{className:c.photo,src:i.avatarURL?i.avatarURL:"data:image/png;base64,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",alt:"user",width:182,height:182}),(0,v.jsxs)("div",{className:c.edit,children:[x?(0,v.jsx)("button",{type:"submit",className:c.buttonUploadHidden,children:(0,v.jsx)(d.IPg,{size:24,color:"#54ADFF",style:{pointerEvents:"none"}})}):(0,v.jsx)(u.iOE,{size:24,color:"#54ADFF"}),(0,v.jsx)("div",{className:c.container,children:x?(0,v.jsx)("p",{className:c.confirm,children:"Confirm"}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("input",{type:"file",id:"file",name:"avatarURL",className:c.inputHidden,onChange:function(e){var a=e.target.name;j(e.target.files[0]);var n=window.URL.createObjectURL(e.target.files[0]);b((0,l.Z)((0,l.Z)({},i),{},(0,s.Z)({},a,n))),Q(a)},accept:"image/png, image/jpeg",disabled:!!G}),(0,v.jsx)("label",{className:c.labelPhoto,htmlFor:"file",children:"Edit Photo"})]})})]})]}),(0,v.jsxs)("div",{className:c.form,children:[(0,v.jsx)(U,{id:"user_name",value:i.name,placeholder:"Anna |",name:"name",label:"Name:",onChange:I,isReadonly:y.name,onClick:M,disabled:!!G}),(0,v.jsx)(U,{id:"user_email",value:i.email||"",placeholder:"anna00@gmail.com|",name:"email",label:"Email:",onChange:I,isReadonly:y.email,onClick:M,disabled:!!G}),(0,v.jsx)(U,{id:"user_birthday",value:i.birthday,placeholder:"00.00.0000",name:"birthday",label:"Birthday:",onChange:I,isReadonly:y.birthday,onClick:M,disabled:!!G}),(0,v.jsx)(U,{id:"user_phone",value:i.phone,placeholder:"+38000000000",name:"phone",label:"Phone:",onChange:I,isReadonly:y.phone,onClick:M,disabled:!!G}),(0,v.jsx)(U,{id:"user_city",value:i.city,placeholder:"Kiev",name:"city",label:"City:",onChange:I,isReadonly:y.city,onClick:M,disabled:!!G})]})]})})},y=n(458),N="LogOut_logout__ODqAK",z="LogOut_button__87t-9",L=function(){var e=(0,m.I0)();return(0,v.jsxs)("div",{className:N,children:[(0,v.jsx)(y.GAI,{size:24,fill:"#54ADFF"}),(0,v.jsx)("button",{type:"button",className:z,onClick:function(){return e((0,D.ni)())},children:"Log Out"})]})},B=function(){var e=(0,m.I0)();return(0,h.useEffect)((function(){e((0,D.bG)())}),[e]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("h2",{className:i,children:"My information:"}),(0,v.jsxs)("div",{className:t,children:[(0,v.jsx)(J,{}),(0,v.jsx)(L,{})]})]})}},4217:function(e,a,n){n.d(a,{Hz:function(){return t},Qb:function(){return i},dy:function(){return s},xU:function(){return l},zh:function(){return r}});var t=function(e){var a=e.auth;return{isLoggedIn:a.isLoggedIn,token:a.token}},i=function(e){return e.auth.isLoggedIn},s=function(e){return e.auth.user},l=function(e){return e.auth.isLoading},r=function(e){return e.auth.error}}}]);
//# sourceMappingURL=328.328ab8c0.chunk.js.map