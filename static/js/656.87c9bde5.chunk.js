"use strict";(self.webpackChunkgroup_project_6_final=self.webpackChunkgroup_project_6_final||[]).push([[656],{8752:function(e,s,r){r.d(s,{Z:function(){return N}});var a=r(9439),t="LoginForm_container__YDFcb",n="LoginForm_header__SClA8",i="LoginForm_formRegister__efCmK",o="LoginForm_inputRegister__wAgzU",l="LoginForm_bttnRegister__IBYPY",c="LoginForm_containerLog__FbvL7",m="LoginForm_text__um7cL",u="LoginForm_link__IJw1a",d="LoginForm_passwordCont__mEq4p",_="LoginForm_eyeBttn__y-8Kj",x=r(9126),p=r(7689),g=r(1087),j=r(2791),h=r(9532),b=r(9434),f=r(184),N=function(){var e=(0,b.I0)(),s=(0,p.s0)(),r=(0,j.useState)(!1),N=(0,a.Z)(r,2),v=N[0],F=N[1];return(0,f.jsxs)("div",{className:t,children:[(0,f.jsx)("h2",{className:n,children:"Login"}),(0,f.jsxs)("form",{className:i,onSubmit:function(r){r.preventDefault();var a=r.currentTarget;e((0,h.Ib)({email:a.elements.email.value,password:a.elements.password.value})),a.reset(),s("/user")},children:[(0,f.jsx)("label",{children:(0,f.jsx)("input",{placeholder:"Email",type:"email",name:"email",className:o})}),(0,f.jsx)("div",{className:d,children:(0,f.jsxs)("label",{children:[(0,f.jsx)("input",{placeholder:"Password",type:v?"text":"password",name:"password",className:o}),(0,f.jsx)("button",{type:"button",className:_,onClick:function(){F(!v)},children:v?(0,f.jsx)(x.rCC,{size:24,color:"rgba(84, 173, 255, 1)"}):(0,f.jsx)(x.I$m,{size:24,color:"rgba(84, 173, 255, 1)"})})]})}),(0,f.jsx)("button",{type:"submit",className:l,children:"Login"})]}),(0,f.jsxs)("div",{className:c,children:[(0,f.jsx)("p",{className:m,children:"Don't have an account?"}),"\xa0",(0,f.jsx)(g.OL,{className:u,to:"/register",children:"Register"})]})]})}},3656:function(e,s,r){r.r(s),r.d(s,{default:function(){return R}});var a=r(8752),t=r(9439),n="RegisterForm_container__w0Atp",i="RegisterForm_header__ugVkt",o="RegisterForm_formRegister__JQ41P",l="RegisterForm_inputRegister__fjx69",c="RegisterForm_bttnRegister__h7T-X",m="RegisterForm_containerLog__7q5c7",u="RegisterForm_text__cFC0o",d="RegisterForm_link__xu2eW",_="RegisterForm_passwordCont__u4mox",x="RegisterForm_eyeBttn__OELqF",p="RegisterForm_errorRassword__S7RI4",g=r(7689),j=r(1087),h=r(9126),b=r(2791),f=r(9434),N=r(9532),v=r(184),F=function(){var e=(0,f.I0)(),s=(0,g.s0)(),r=(0,b.useState)(!1),a=(0,t.Z)(r,2),F=a[0],w=a[1],R=(0,b.useState)(!1),L=(0,t.Z)(R,2),C=L[0],y=L[1],k=(0,b.useState)(!0),S=(0,t.Z)(k,2),I=S[0],z=S[1],Z=(0,b.useState)(!0),P=(0,t.Z)(Z,2),E=P[0],A=P[1],D=(0,b.useState)(!0),q=(0,t.Z)(D,2),B=q[0],O=q[1];return(0,v.jsxs)("div",{className:n,children:[(0,v.jsx)("h2",{className:i,children:"Registration"}),(0,v.jsxs)("form",{className:o,onSubmit:function(r){r.preventDefault();var a=r.currentTarget,t=a.elements.email.value,n=a.elements.password.value,i=a.elements.confirmPassword.value;n===i&&t&&""!==n&&""!==i?(z(I),A(E),O(B),e((0,N.z2)({email:a.elements.email.value,password:a.elements.password.value})),a.reset(),s("/user")):t||i!==n||""===n||""===i?t||n||i?(i!==n||t&&!n)&&(z(I=!1),A(E=!0),O(B=!0)):(O(B=!1),z(I=!0),A(E=!0)):(A(E=!1),O(B=!0),z(I=!0))},children:[(0,v.jsx)("label",{children:(0,v.jsx)("input",{placeholder:"Email",type:"email",name:"email",className:l})}),(0,v.jsx)("div",{className:_,children:(0,v.jsxs)("label",{children:[(0,v.jsx)("input",{placeholder:"Password",type:F?"text":"password",name:"password",className:l}),(0,v.jsx)("button",{type:"button",className:x,onClick:function(){w(!F)},children:F?(0,v.jsx)(h.rCC,{size:24,color:"rgba(84, 173, 255, 1)"}):(0,v.jsx)(h.I$m,{size:24,color:"rgba(84, 173, 255, 1)"})})]})}),(0,v.jsxs)("div",{className:_,children:[(0,v.jsxs)("label",{children:[(0,v.jsx)("input",{placeholder:"Confirm password",type:C?"text":"password",name:"confirmPassword",className:l}),(0,v.jsx)("button",{type:"button",className:x,onClick:function(){y(!C)},children:C?(0,v.jsx)(h.rCC,{size:24,color:"rgba(84, 173, 255, 1)"}):(0,v.jsx)(h.I$m,{size:24,color:"rgba(84, 173, 255, 1)"})})]}),I?"":(0,v.jsx)("p",{className:p,children:"Password mismatch"}),E?"":(0,v.jsx)("p",{className:p,children:"Email incorrect"}),B?"":(0,v.jsx)("p",{className:p,children:"Enter data"})]}),(0,v.jsx)("button",{type:"submit",className:c,children:"Registration"})]}),(0,v.jsxs)("div",{className:m,children:[(0,v.jsx)("p",{className:u,children:"Already have an account?"}),"\xa0",(0,v.jsx)(j.OL,{className:d,to:"/login",children:"Login"})]})]})},w=function(){return(0,v.jsx)(v.Fragment,{children:R?(0,v.jsx)(F,{}):(0,v.jsx)(a.Z,{})})},R=function(){return(0,v.jsx)("div",{children:(0,v.jsx)(w,{})})}}}]);
//# sourceMappingURL=656.87c9bde5.chunk.js.map