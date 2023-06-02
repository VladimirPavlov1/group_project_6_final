"use strict";(self.webpackChunkgroup_project_6_final=self.webpackChunkgroup_project_6_final||[]).push([[955],{8946:function(e,s,r){r.d(s,{Z:function(){return y}});var a=r(5861),i=r(9439),n=r(4687),o=r.n(n),t="LoginForm_container__YDFcb",l="LoginForm_header__SClA8",c="LoginForm_formRegister__efCmK",d="LoginForm_inputRegister__wAgzU",m="LoginForm_inputRegisterError__xruVl",u="LoginForm_bttnRegister__IBYPY",p="LoginForm_containerLog__FbvL7",h="LoginForm_text__um7cL",_="LoginForm_link__IJw1a",w="LoginForm_passwordCont__mEq4p",g="LoginForm_eyeBttn__y-8Kj",x="LoginForm_errorRassword__S-hoe",j=r(9126),f=r(1087),b=r(2791),v=r(9273),N=r(9434),C=r(5705),F=r(8007),R=F.Ry({email:F.Z_("Enter your email").email("Please enter a valid email").required("Email is required"),password:F.Z_("Enter your password").required("Password is required")}),P=r(184),y=function(){var e=(0,N.I0)(),s=(0,b.useState)(!1),r=(0,i.Z)(s,2),n=r[0],F=r[1],y=(0,b.useState)(!0),L=(0,i.Z)(y,2),Z=L[0],S=L[1],k=(0,b.useState)(!1),q=(0,i.Z)(k,2),E=q[0],z=q[1],I=function(){var s=(0,a.Z)(o().mark((function s(r){return o().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(!E){s.next=2;break}return s.abrupt("return");case 2:return z(!0),s.prev=3,s.next=6,e((0,v.Ib)({email:r.email,password:r.password})).then((function(e){e.error?S(!1):S(!0)}));case 6:s.next=11;break;case 8:s.prev=8,s.t0=s.catch(3),console.error(s.t0);case 11:return s.prev=11,z(!1),s.finish(11);case 14:case"end":return s.stop()}}),s,null,[[3,8,11,14]])})));return function(e){return s.apply(this,arguments)}}(),A=(0,C.TA)({initialValues:{email:"",password:""},validationSchema:R,onSubmit:I}),$=A.values,V=A.errors,O=A.touched,B=A.handleChange,D=A.handleSubmit;return(0,P.jsxs)("div",{className:t,children:[(0,P.jsx)("h2",{className:l,children:"Login"}),(0,P.jsxs)("form",{className:c,onSubmit:D,noValidate:!0,autoComplete:"off",children:[(0,P.jsxs)("div",{className:w,children:[(0,P.jsx)("label",{children:(0,P.jsx)("input",{placeholder:"Email",type:"email",name:"email",id:"email",className:V.email&&O.email?m:d,value:$.email,onChange:B})}),V.email&&O.email&&(0,P.jsx)("p",{className:x,children:V.email})]}),(0,P.jsxs)("div",{className:w,children:[(0,P.jsxs)("label",{children:[(0,P.jsx)("input",{placeholder:"Password",type:n?"text":"password",name:"password",className:V.password&&O.password?m:d,value:$.password,onChange:B}),(0,P.jsx)("button",{type:"button",className:g,onClick:function(){F(!n)},children:n?(0,P.jsx)(j.rCC,{size:24,color:"rgba(84, 173, 255, 1)"}):(0,P.jsx)(j.I$m,{size:24,color:"rgba(84, 173, 255, 1)"})})]}),V.password&&O.password&&(0,P.jsx)("p",{className:x,children:V.password}),Z||V.password||V.email?"":(0,P.jsx)("p",{className:x,children:"Email or password incorrect"})]}),(0,P.jsx)("button",{type:"submit",className:u,children:"Login"})]}),(0,P.jsxs)("div",{className:p,children:[(0,P.jsx)("p",{className:h,children:"Don't have an account?"}),"\xa0",(0,P.jsx)(f.OL,{className:_,to:"/register",children:"Register"})]})]})}},2955:function(e,s,r){r.r(s),r.d(s,{default:function(){return q}});var a=r(8946),i=r(5861),n=r(9439),o=r(4687),t=r.n(o),l="RegisterForm_container__w0Atp",c="RegisterForm_header__ugVkt",d="RegisterForm_formRegister__JQ41P",m="RegisterForm_inputRegister__fjx69",u="RegisterForm_inputRegisterError__GBChO",p="RegisterForm_bttnRegister__h7T-X",h="RegisterForm_containerLog__7q5c7",_="RegisterForm_text__cFC0o",w="RegisterForm_link__xu2eW",g="RegisterForm_passwordCont__u4mox",x="RegisterForm_eyeBttn__OELqF",j="RegisterForm_errorRassword__S7RI4",f="RegisterForm_inputGood__Hm698",b=r(1087),v=r(9126),N=r(2791),C=r(9434),F=r(9273),R=r(5705),P=r(8007),y=P.Ry({email:P.Z_("Enter your email").email("Please enter a valid email").required("Email is required").matches(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/,{message:"Please enter a valid email"}),password:P.Z_("Enter your password").min(6,"Password should be min 6 characters").required("Password is required").matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*_.-]+$/,{message:"Password must be min 6 characters, at least 1 uppercase and 1 lowercase letter and 1 number"}),confirmPassword:P.Z_().oneOf([P.iH("password"),null],"Password must match").required("Confirm password is required")}),L=r(184),Z=function(){var e=(0,C.I0)(),s=(0,N.useState)(!1),r=(0,n.Z)(s,2),a=r[0],o=r[1],P=(0,N.useState)(!1),Z=(0,n.Z)(P,2),S=Z[0],k=Z[1],q=(0,N.useState)(!1),E=(0,n.Z)(q,2),z=E[0],I=E[1],A=(0,N.useState)(!0),$=(0,n.Z)(A,2),V=$[0],O=$[1],B=function(){var s=(0,i.Z)(t().mark((function s(r){return t().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(!z){s.next=2;break}return s.abrupt("return");case 2:return I(!0),s.prev=3,s.next=6,e((0,F.z2)({email:r.email,password:r.password}));case 6:"Request failed with status code 409"===s.sent.payload?O(!1):O(""),s.next=13;break;case 10:s.prev=10,s.t0=s.catch(3),console.error(s.t0);case 13:return s.prev=13,I(!1),s.finish(13);case 16:case"end":return s.stop()}}),s,null,[[3,10,13,16]])})));return function(e){return s.apply(this,arguments)}}(),D=(0,R.TA)({initialValues:{email:"",password:"",confirmPassword:""},validationSchema:y,onSubmit:B}),J=D.values,T=D.errors,Y=D.touched,G=D.handleChange,H=D.handleSubmit;return(0,L.jsxs)("div",{className:l,children:[(0,L.jsx)("h2",{className:c,children:"Registration"}),(0,L.jsxs)("form",{className:d,onSubmit:H,noValidate:!0,autoComplete:"off",children:[(0,L.jsxs)("div",{className:g,children:[(0,L.jsx)("label",{children:(0,L.jsx)("input",{placeholder:"Email",type:"email",name:"email",id:"email",className:T.email&&Y.email?u:m,value:J.email,onChange:G})}),T.email&&Y.email&&(0,L.jsx)("p",{className:j,children:T.email}),V?"":(0,L.jsx)("p",{className:j,children:"Email in use."})]}),(0,L.jsxs)("div",{className:g,children:[(0,L.jsxs)("label",{children:[(0,L.jsx)("input",{placeholder:"Password",type:a?"text":"password",name:"password",id:"password",className:T.password&&Y.password?u:m,value:J.password,onChange:G}),(0,L.jsxs)("button",{type:"button",className:x,onClick:function(){o(!a)},children:[a&&J.password.length<6&&(0,L.jsx)(v.rCC,{size:24,color:"rgba(84, 173, 255, 1)"}),!a&&J.password.length<6&&(0,L.jsx)(v.I$m,{size:24,color:"rgba(84, 173, 255, 1)"}),a&&T.password&&J.password.length>5&&(0,L.jsx)(v.rCC,{size:24,color:"rgba(84, 173, 255, 1)"}),!a&&T.password&&J.password.length>5&&(0,L.jsx)(v.I$m,{size:24,color:"rgba(84, 173, 255, 1)"}),J.password.length>5&&!T.password&&(0,L.jsx)(v.IPg,{size:24,color:"#00C3AD"})]})]}),T.password&&Y.password&&(0,L.jsx)("p",{className:j,children:T.password}),J.password.length>5&&!T.password&&(0,L.jsx)("p",{className:f,children:"Password is secure"})]}),(0,L.jsxs)("div",{className:g,children:[(0,L.jsxs)("label",{children:[(0,L.jsx)("input",{placeholder:"Confirm password",type:S?"text":"password",name:"confirmPassword",id:"confirmPassword",className:T.confirmPassword&&Y.confirmPassword?u:m,value:J.confirmPassword,onChange:G}),(0,L.jsx)("button",{type:"button",className:x,onClick:function(){k(!S)},children:S?(0,L.jsx)(v.rCC,{size:24,color:"rgba(84, 173, 255, 1)"}):(0,L.jsx)(v.I$m,{size:24,color:"rgba(84, 173, 255, 1)"})})]}),T.confirmPassword&&Y.confirmPassword&&(0,L.jsx)("p",{className:j,children:T.confirmPassword})]}),(0,L.jsx)("button",{type:"submit",className:p,children:"Registration"})]}),(0,L.jsxs)("div",{className:h,children:[(0,L.jsx)("p",{className:_,children:"Already have an account?"}),"\xa0",(0,L.jsx)(b.OL,{className:w,to:"/login",children:"Login"})]})]})},S=function(){return(0,L.jsx)(L.Fragment,{children:q?(0,L.jsx)(Z,{}):(0,L.jsx)(a.Z,{})})},k=r(9016),q=function(){return(0,L.jsx)("div",{className:k.Z.mainContainer,children:(0,L.jsx)(S,{})})}},9016:function(e,s){s.Z={mainContainer:"AddPetPage_mainContainer__JfxWF"}}}]);
//# sourceMappingURL=955.1b2a23c3.chunk.js.map