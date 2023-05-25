"use strict";(self.webpackChunkgroup_project_6_final=self.webpackChunkgroup_project_6_final||[]).push([[656],{8752:function(e,s,r){r.d(s,{Z:function(){return v}});var a=r(9439),t="LoginForm_container__YDFcb",n="LoginForm_header__SClA8",i="LoginForm_formRegister__efCmK",l="LoginForm_inputRegister__wAgzU",o="LoginForm_bttnRegister__IBYPY",c="LoginForm_containerLog__FbvL7",m="LoginForm_text__um7cL",d="LoginForm_link__IJw1a",u="LoginForm_passwordCont__mEq4p",_="LoginForm_eyeBttn__y-8Kj",p="LoginForm_errorRassword__S-hoe",x=r(9126),g=r(7689),h=r(1087),j=r(2791),N=r(9273),b=r(9434),f=r(184),v=function(){var e=(0,b.I0)(),s=(0,g.s0)(),r=(0,j.useState)(!1),v=(0,a.Z)(r,2),w=v[0],F=v[1],R=(0,j.useState)(!0),L=(0,a.Z)(R,2),C=L[0],y=L[1],S=(0,j.useState)(!0),Z=(0,a.Z)(S,2),k=Z[0],E=Z[1],I=(0,j.useState)(!0),z=(0,a.Z)(I,2),P=z[0],A=z[1],D=(0,j.useState)(!0),q=(0,a.Z)(D,2),B=q[0],O=q[1];return(0,f.jsxs)("div",{className:t,children:[(0,f.jsx)("h2",{className:n,children:"Login"}),(0,f.jsxs)("form",{className:i,onSubmit:function(r){r.preventDefault();var a=r.currentTarget,t=a.elements.email.value,n=a.elements.password.value;n&&t?e((0,N.Ib)({email:a.elements.email.value,password:a.elements.password.value})).then((function(e){""===e.payload.message?(O(!0),a.reset(),s("/user")):O(!1)})):!t&&n?(E(k=!1),A(P=!0),y(C=!0)):t||n?t&&!n&&(y(C=!1),E(k=!0),A(P=!0)):(A(P=!1),y(C=!0),E(k=!0))},children:[(0,f.jsx)("label",{children:(0,f.jsx)("input",{placeholder:"Email",type:"email",name:"email",className:l})}),(0,f.jsxs)("div",{className:u,children:[(0,f.jsxs)("label",{children:[(0,f.jsx)("input",{placeholder:"Password",type:w?"text":"password",name:"password",className:l}),(0,f.jsx)("button",{type:"button",className:_,onClick:function(){F(!w)},children:w?(0,f.jsx)(x.rCC,{size:24,color:"rgba(84, 173, 255, 1)"}):(0,f.jsx)(x.I$m,{size:24,color:"rgba(84, 173, 255, 1)"})})]}),C?"":(0,f.jsx)("p",{className:p,children:"Enter password"}),k?"":(0,f.jsx)("p",{className:p,children:"Enter email"}),P?"":(0,f.jsx)("p",{className:p,children:"Enter data"}),B?"":(0,f.jsx)("p",{className:p,children:"Email or password is incorrect."})]}),(0,f.jsx)("button",{type:"submit",className:o,children:"Login"})]}),(0,f.jsxs)("div",{className:c,children:[(0,f.jsx)("p",{className:m,children:"Don't have an account?"}),"\xa0",(0,f.jsx)(h.OL,{className:d,to:"/register",children:"Register"})]})]})}},3656:function(e,s,r){r.r(s),r.d(s,{default:function(){return R}});var a=r(8752),t=r(9439),n="RegisterForm_container__w0Atp",i="RegisterForm_header__ugVkt",l="RegisterForm_formRegister__JQ41P",o="RegisterForm_inputRegister__fjx69",c="RegisterForm_bttnRegister__h7T-X",m="RegisterForm_containerLog__7q5c7",d="RegisterForm_text__cFC0o",u="RegisterForm_link__xu2eW",_="RegisterForm_passwordCont__u4mox",p="RegisterForm_eyeBttn__OELqF",x="RegisterForm_errorRassword__S7RI4",g=r(7689),h=r(1087),j=r(9126),N=r(2791),b=r(9434),f=r(9273),v=r(184),w=function(){var e=(0,b.I0)(),s=(0,g.s0)(),r=(0,N.useState)(!1),a=(0,t.Z)(r,2),w=a[0],F=a[1],R=(0,N.useState)(!1),L=(0,t.Z)(R,2),C=L[0],y=L[1],S=(0,N.useState)(!0),Z=(0,t.Z)(S,2),k=Z[0],E=Z[1],I=(0,N.useState)(!0),z=(0,t.Z)(I,2),P=z[0],A=z[1],D=(0,N.useState)(!0),q=(0,t.Z)(D,2),B=q[0],O=q[1];return(0,v.jsxs)("div",{className:n,children:[(0,v.jsx)("h2",{className:i,children:"Registration"}),(0,v.jsxs)("form",{className:l,onSubmit:function(r){r.preventDefault();var a=r.currentTarget,t=a.elements.email.value,n=a.elements.password.value,i=a.elements.confirmPassword.value;n===i&&t&&""!==n&&""!==i?(E(k),A(P),O(B),e((0,f.z2)({email:a.elements.email.value,password:a.elements.password.value})),a.reset(),s("/user")):t||i!==n||""===n||""===i?t||n||i?(i!==n||t&&!n)&&(E(k=!1),A(P=!0),O(B=!0)):(O(B=!1),E(k=!0),A(P=!0)):(A(P=!1),O(B=!0),E(k=!0))},children:[(0,v.jsx)("label",{children:(0,v.jsx)("input",{placeholder:"Email",type:"email",name:"email",className:o})}),(0,v.jsx)("div",{className:_,children:(0,v.jsxs)("label",{children:[(0,v.jsx)("input",{placeholder:"Password",type:w?"text":"password",name:"password",className:o}),(0,v.jsx)("button",{type:"button",className:p,onClick:function(){F(!w)},children:w?(0,v.jsx)(j.rCC,{size:24,color:"rgba(84, 173, 255, 1)"}):(0,v.jsx)(j.I$m,{size:24,color:"rgba(84, 173, 255, 1)"})})]})}),(0,v.jsxs)("div",{className:_,children:[(0,v.jsxs)("label",{children:[(0,v.jsx)("input",{placeholder:"Confirm password",type:C?"text":"password",name:"confirmPassword",className:o}),(0,v.jsx)("button",{type:"button",className:p,onClick:function(){y(!C)},children:C?(0,v.jsx)(j.rCC,{size:24,color:"rgba(84, 173, 255, 1)"}):(0,v.jsx)(j.I$m,{size:24,color:"rgba(84, 173, 255, 1)"})})]}),k?"":(0,v.jsx)("p",{className:x,children:"Password mismatch"}),P?"":(0,v.jsx)("p",{className:x,children:"Email incorrect"}),B?"":(0,v.jsx)("p",{className:x,children:"Enter data"})]}),(0,v.jsx)("button",{type:"submit",className:c,children:"Registration"})]}),(0,v.jsxs)("div",{className:m,children:[(0,v.jsx)("p",{className:d,children:"Already have an account?"}),"\xa0",(0,v.jsx)(h.OL,{className:u,to:"/login",children:"Login"})]})]})},F=function(){return(0,v.jsx)(v.Fragment,{children:R?(0,v.jsx)(w,{}):(0,v.jsx)(a.Z,{})})},R=function(){return(0,v.jsx)("div",{children:(0,v.jsx)(F,{})})}}}]);
//# sourceMappingURL=656.639b6b0f.chunk.js.map