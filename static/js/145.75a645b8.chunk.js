"use strict";(self.webpackChunkgroup_project_6_final=self.webpackChunkgroup_project_6_final||[]).push([[145],{3048:function(e,n,t){t.d(n,{r:function(){return s}});var r,o=t(2791),i=["title","titleId"];function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function c(e,n){var t=e.title,c=e.titleId,s=l(e,i);return o.createElement("svg",a({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":c},s),t?o.createElement("title",{id:c},t):null,r||(r=o.createElement("path",{d:"M12 7V17M7 12L17 12",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))}var s=o.forwardRef(c);t.p},617:function(e,n,t){t.d(n,{r:function(){return s}});var r,o=t(2791),i=["title","titleId"];function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function c(e,n){var t=e.title,c=e.titleId,s=l(e,i);return o.createElement("svg",a({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":c},s),t?o.createElement("title",{id:c},t):null,r||(r=o.createElement("path",{d:"M12 20V12M12 12V4M12 12H20M12 12H4",strokeWidth:2,strokeLinecap:"round"})))}var s=o.forwardRef(c);t.p},8145:function(e,n,t){t.r(n),t.d(n,{default:function(){return mn}});var r,o,i,a,l,c,s,d,u=t(2791),p=t(5861),m=t(9439),f=t(4687),x=t.n(f),h=t(5705),g=t(7689),y=t(9434),b=t(1209),v=t(9273),j=t(4942),w=t(1413),k=t(6727),Z=k.Ry().shape({title:k.Z_().required("Title is required").min(2,"Name must be at least 2 characters").max(16,"Name must not exceed 16 characters"),category:k.Z_().required("Category is required").oneOf(["my pet","sell","lost-found","for-free"],"Invalid category"),name:k.Z_().required("Name is required").min(2,"Name must be at least 2 characters").max(16,"Name must not exceed 16 characters"),birthday:k.Z_().required("Date is required").matches(/^(\d{2})\.(\d{2})\.(\d{4})$/,"Invalid date format. Use DD.MM.YYYY"),breed:k.Z_().required("Breed is required").min(2,"Breed must be at least 2 characters").max(16,"Breed must not exceed 16 characters"),petPhoto:k.nK().required("File is required").test("fileSize","File size must not exceed 3MB",(function(e){return e&&e.size<=3145728})),sex:k.Z_().required("Sex is required").oneOf(["male","female"],"Invalid sex"),location:k.Z_().required("Location is required").matches(/^[A-Za-z\s]+$/i,"Invalid location format"),price:k.Rx().positive("Price must be greater than 0").required("Price is required"),comments:k.Z_().test("comments","Comments must be between 8 and 120 characters",(function(e){return!e||e.length>=8&&e.length<=120}))}),O=function(){var e=(0,p.Z)(x().mark((function e(n,t,r){return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z.validateAt(n,t);case 3:r((function(e){return(0,w.Z)((0,w.Z)({},e),{},(0,j.Z)({},n,""))})),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),r((function(t){return(0,w.Z)((0,w.Z)({},t),{},(0,j.Z)({},n,e.t0.message))}));case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(n,t,r){return e.apply(this,arguments)}}(),P=t(168),_=t(9236),B=_.ZP.div(r||(r=(0,P.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 20px 8px 17px;\n  width: 100%;\n  min-height: 496px;\n  background: var(--color-white);\n  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);\n  border-radius: 40px;\n\n  @media screen and (min-width: 768px) {\n    margin: 0 auto;\n    padding: 20px 32px;\n    width: fit-content;\n    min-width: 458px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    padding: ",";\n  }\n"])),(function(e){var n=e.step,t=e.category;return 2===n&&"my-pet"!==t?"20px 74px":"20px 32px"})),C=(0,_.ZP)(h.l0)(o||(o=(0,P.Z)(["\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n"]))),F=_.ZP.h1(i||(i=(0,P.Z)(["\n  font-family: Manrope;\n  padding-left: 12px;\n  margin-bottom: 24px;\n  font-size: 20px;\n  line-height: 1.35;\n\n  color: var(--color-black);\n\n    @media screen and (min-width: 768px) {\n      font-size: 28px;\n  }\n"]))),N=_.ZP.ul(a||(a=(0,P.Z)(["\n  display: flex;\n  column-gap: 12px;\n  margin-bottom: 16px;\n     \n  @media screen and (min-width: 768px) {\n    column-gap: 16px;\n  }\n"]))),L=_.ZP.li(l||(l=(0,P.Z)(["\n  position: relative;\n  padding-bottom: 20px;\n  flex-basis: calc((100% - 24px) / 3);\n\n  &::after {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    left: 0;\n\n    width: 100%;\n    height: 8px;\n\n    background-color: var(--background_btn-color);\n    border-radius: 8px;\n  }\n\n  &.current::after {\n    background-color: var(--text-color-blue);\n  }\n\n  &.completed::after {\n    background-color: var(--color-green);\n  }\n"]))),S=_.ZP.p(c||(c=(0,P.Z)(["\n  font-family: Manrope;\n  font-size: 10px;\n  line-height: 1.4;\n\n  color: var(--background_btn-color);\n\n  ",".current & {\n    color: var(--text-color-blue);\n  }\n\n  ",".completed & {\n    color: var(--color-green);\n  }\n\n  @media screen and (min-width: 768px) {\n    font-size: 15px;\n    line-height: 1.62;\n  }\n"])),L,L),E=_.ZP.div(s||(s=(0,P.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-top: 24px;\n\n  @media screen and (min-width: 768px) {\n    flex-direction: row-reverse;\n    justify-content: ",";\n    margin-top: 40px;\n    column-gap: 24px;\n  }\n"])),(function(e){var n=e.category,t=e.isMoreInfo;return"your-pet"!==n?t:"end"})),M="AddFormButton_buttonBack__7Zn96",D="AddFormButton_buttonNext__ueL3h",z=t(1087),I=["title","titleId"];function q(){return q=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},q.apply(this,arguments)}function A(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function T(e,n){var t=e.title,r=e.titleId,o=A(e,I);return u.createElement("svg",q({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":r},o),t?u.createElement("title",{id:r},t):null,d||(d=u.createElement("path",{d:"M4 12L20 12M4 12L10 6M4 12L10 18",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))}var W,H=u.forwardRef(T),R=(t.p,["title","titleId"]);function V(){return V=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},V.apply(this,arguments)}function U(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function Y(e,n){var t=e.title,r=e.titleId,o=U(e,R);return u.createElement("svg",V({width:25,height:24,viewBox:"0 0 25 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":r},o),t?u.createElement("title",{id:r},t):null,W||(W=u.createElement("path",{d:"M12.7578 13C15.5192 13 17.7578 10.7614 17.7578 8C17.7578 5.23858 15.5192 3 12.7578 3C9.99639 3 7.75781 5.23858 7.75781 8C7.75781 10.7614 9.99639 13 12.7578 13ZM12.7578 13L12.7578 21M9.75781 18L15.7578 18",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))}var $,G=u.forwardRef(Y),J=(t.p,["title","titleId"]);function K(){return K=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},K.apply(this,arguments)}function Q(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function X(e,n){var t=e.title,r=e.titleId,o=Q(e,J);return u.createElement("svg",K({width:25,height:24,viewBox:"0 0 25 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":r},o),t?u.createElement("title",{id:r},t):null,$||($=u.createElement("path",{d:"M12.7578 11C9.99639 11 7.75781 13.2386 7.75781 16C7.75781 18.7614 9.99639 21 12.7578 21C15.5192 21 17.7578 18.7614 17.7578 16C17.7578 13.2386 15.5192 11 12.7578 11ZM12.7578 11V3M12.7578 3L16.7578 7M12.7578 3L8.75781 7",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))}var ee,ne,te,re,oe,ie,ae,le,ce,se,de,ue,pe,me,fe,xe,he,ge,ye,be,ve,je=u.forwardRef(X),we=(t.p,t(8369)),ke=(t(3048),t(617)),Ze=t(184),Oe=function(e){var n=e.text,t=e.clickHandler,r=e.type,o=e.isLink,i=e.path;return o?(0,Ze.jsxs)(z.OL,{className:M,onClick:t,type:r,to:i,children:[(0,Ze.jsx)(H,{}),n]}):(0,Ze.jsxs)("button",{className:M,onClick:t,type:r,children:[(0,Ze.jsx)(H,{}),n]})},Pe=function(e){var n=e.text,t=e.icon,r=e.clickHandler,o=e.filled,i=e.short,a=e.type,l=e.isDisabled;return(0,Ze.jsxs)("button",{className:D,type:a,onClick:r&&function(){return r(!1)},filled:o,short:i,disabled:l,children:[n,t]})},_e="ErrorMessage_ErrorText__pdd4H",Be=function(e){var n=e.message;return(0,Ze.jsx)("p",{className:_e,children:n})},Ce=(0,_.iv)(ee||(ee=(0,P.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  border: 0;\n  padding: 0;\n  white-space: nowrap;\n  clip-path: inset(100%);\n  clip: rect(0 0 0 0);\n  overflow: hidden;\n"]))),Fe=(0,_.ZP)(h.gN)(ne||(ne=(0,P.Z)(["\n  ","\n"])),Ce),Ne=_.ZP.div(te||(te=(0,P.Z)(["\n  position: relative;\n"]))),Le=_.ZP.label(re||(re=(0,P.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 1.36;\n\n  color: var(--color-black);\n\n  @media screen and (min-width: 768px) {\n    gap: 8px;\n    font-size: 20px;\n    line-height: 1.3;\n  }\n"]))),Se=(0,_.ZP)(h.gN)(oe||(oe=(0,P.Z)(["\n  padding: 10px 16px;\n\n  font-size: 14px;\n  line-height: 1.5;\n\n  border: 1px solid var(--text-color-blue);\n  border-radius: 40px;\n  outline-color: var(--text-color-blue);\n  transition: outline 300ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &.invalid {\n    border-color: var(--color-red);\n  }\n\n  @media screen and (min-width: 768px) {\n    font-size: 16px;\n    min-width: 394px;\n    padding: 12px 16px;\n  }\n\n  &[type='date']::-webkit-calendar-picker-indicator {\n    cursor: pointer;\n  }\n"]))),Ee=_.ZP.div(ie||(ie=(0,P.Z)(["\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  padding: 16px 0 24px;\n  gap: 20px;\n\n  @media screen and (min-width: 768px) {\n    ",";\n  }\n"])),(function(e){return"my-pet"!==e.category?"flex-direction: row; column-gap:44px":""})),Me=_.ZP.div(ae||(ae=(0,P.Z)(["\n  display: flex;\n  ",";\n  gap: 20px;\n\n  @media screen and (min-width: 768px) {\n    ",";\n  }\n"])),(function(e){return"my-pet"!==e.category?"flex-direction: column;":""}),(function(e){return"my-pet"!==e.category?"row-gap: 38px;":""})),De=_.ZP.div(le||(le=(0,P.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n\n  @media screen and (min-width: 768px) {\n    gap: 24px;\n  }\n"]))),ze=(0,_.ZP)(h.gN)(ce||(ce=(0,P.Z)(["\n  ","\n"])),Ce),Ie=(0,_.ZP)(Le)(se||(se=(0,P.Z)(["\n  @media screen and (min-width: 768px) {\n    height: 100%;\n  }\n"]))),qe=(0,_.ZP)(Se)(de||(de=(0,P.Z)(["\n  resize: none;\n  height: 92;\n  flex-grow: 1;\n\n  border-radius: 20px;\n\n  @media screen and (min-width: 768px) {\n    height: 108px;\n  }\n"]))),Ae=_.ZP.div(ue||(ue=(0,P.Z)(["\n  display: flex;\n  flex-direction: column;\n  row-gap: 8px;\n  column-gap: 16px;\n\n  @media screen and (min-width: 768px) {\n    row-gap: 20px;\n  }\n\n  & p {\n    font-weight: 500;\n    font-size: 14px;\n    line-height: 1.36;\n\n    color: var(--color-black);\n\n    @media screen and (min-width: 768px) {\n      font-size: 20px;\n      line-height: 1.3;\n    }\n  }\n"]))),Te=_.ZP.div(pe||(pe=(0,P.Z)(["\n  display: inherit;\n"]))),We=_.ZP.label(me||(me=(0,P.Z)(["\n  display: flex;\n  column-count: 12px;\n  align-items: center;\n\n  font-size: 16px;\n  line-height: 1.5;\n\n  color: #888888;\n\n  cursor: pointer;\n  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    color: var(--text-color-blue);\n  }\n\n  ",":checked + & {\n    color: var(--color-black);\n  }\n"])),Fe),He=(0,_.ZP)(Le)(fe||(fe=(0,P.Z)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  column-gap: 28px;\n\n  @media screen and (min-width: 768px) {\n    ",";\n  }\n"])),(function(e){return"my-pet"!==e.category?"flex-direction: column":""})),Re=_.ZP.div(xe||(xe=(0,P.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 112px;\n  height: 112px;\n\n  background-color: var(--background_btn-color);\n  border-radius: 20px;\n  color: var(--text-color-blue);\n\n  cursor: pointer;\n  overflow: hidden;\n  object-position: center;\n  object-fit: cover;\n\n  & svg {\n    stroke: currentColor;\n  }\n\n  @media screen and (min-width: 768px) {\n    min-width: 182px;\n    height: 182px;\n  }\n"]))),Ve=function(e){var n=e.formData,t=e.setFormData,r=e.submit,o=e.backStep,i=(0,u.useState)(!0),a=(0,m.Z)(i,2),l=a[0],c=a[1],s=(0,u.useState)({}),d=(0,m.Z)(s,2),p=d[0],f=d[1],x=(0,u.useState)(""),h=(0,m.Z)(x,2),g=h[0],y=h[1],b=(0,u.useState)(window.innerWidth),v=(0,m.Z)(b,2),k=v[0],Z=v[1],P=Boolean(!p.petPhoto&&!!n.petPhoto),_=Boolean(!p.comments),B=Boolean(!p.location&&!!n.location),C=Boolean(!p.sex&&!!n.sex),F=Boolean(!p.price&&!!n.price);(0,u.useEffect)((function(){var e=function(){Z(window.innerWidth)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),(0,u.useEffect)((function(){switch(n.category){case"sell":c(!(P&&B&&C&&F&&_));break;case"lost-found":c(!(P&&B&&C&&_));break;case"my-pet":c(!(P&&_));break;default:c(!0)}}),[p,n.category,_,B,P,F,C]);var N=function(e){var n=e.target,r=n.name,o=n.value,i=n.type,a=n.files,l="file"===i?a[0]:o;f((function(e){return(0,w.Z)((0,w.Z)({},e),{},(0,j.Z)({},r,""))})),"file"===i&&y(o),t((function(e){return(0,w.Z)((0,w.Z)({},e),{},(0,j.Z)({},r,l))}))};return(0,Ze.jsxs)(Ze.Fragment,{children:[(0,Ze.jsxs)(Ee,{category:n.category,children:[(0,Ze.jsxs)(Me,{category:n.category,children:["my-pet"!==n.category&&(0,Ze.jsxs)(Ae,{children:[(0,Ze.jsx)("p",{children:"The Sex"}),(0,Ze.jsxs)(Te,{children:[(0,Ze.jsx)(Fe,{type:"radio",id:"female",name:"sex",value:"female",onChange:N,checked:"female"===n.sex,onBlur:function(){return O("sex",n,f)}}),(0,Ze.jsxs)(We,{htmlFor:"female",children:[(0,Ze.jsx)(G,{stroke:"#F43F5E"}),"Female"]}),(0,Ze.jsx)(Fe,{type:"radio",id:"male",name:"sex",value:"male",onChange:N,checked:"male"===n.sex,onBlur:function(){return O("sex",n,f)}}),(0,Ze.jsxs)(We,{htmlFor:"male",children:[(0,Ze.jsx)(je,{stroke:"#54ADFF"}),"Male"]})]})]}),(0,Ze.jsxs)(He,{htmlFor:"pet-image",category:n.category,children:["my-pet"===n.category||k<768?"Add photo":"Load the pet\u2019s image:",(0,Ze.jsxs)(Re,{children:[!n.petPhoto&&(0,Ze.jsx)(ke.r,{width:"30",height:"30"}),!!n.petPhoto&&(0,Ze.jsx)("img",{id:"image",src:URL.createObjectURL(n.petPhoto),alt:n.petPhoto.name})]}),(0,Ze.jsx)(ze,{type:"file",id:"pet-image",name:"petPhoto",accept:".png, .jpg, .jpeg, .webp",onChange:N,value:g,onBlur:function(){return O("petPhoto",n,f)}})]})]}),(0,Ze.jsxs)(De,{children:["my-pet"!==n.category&&(0,Ze.jsxs)(Ne,{children:[(0,Ze.jsxs)(Le,{htmlFor:"location",children:["Location",(0,Ze.jsx)(Se,{placeholder:"Type of location",type:"text",name:"location",onChange:N,value:n.location,onBlur:function(){return O("location",n,f)},className:p.location?"invalid":""})]}),!!p.location&&(0,Ze.jsx)(Be,{message:p.location})]}),"sell"===n.category&&(0,Ze.jsxs)(Ne,{children:[(0,Ze.jsxs)(Le,{htmlFor:"price",children:["Price",(0,Ze.jsx)(Se,{placeholder:"Type of price",type:"number",name:"price",onChange:N,value:n.price,onBlur:function(){return O("price",n,f)},className:p.price?"invalid":""})]}),!!p.price&&(0,Ze.jsx)(Be,{message:p.price})]}),(0,Ze.jsxs)(Ne,{children:[(0,Ze.jsxs)(Ie,{htmlFor:"comments",children:["Comments",(0,Ze.jsx)(qe,{component:"textarea",placeholder:"Type comments",name:"comments",onChange:N,value:n.comments,onBlur:function(){return O("comments",n,f)},className:p.comments?"invalid":""})]}),!!p.comments&&(0,Ze.jsx)(Be,{message:p.comments})]})]})]}),(0,Ze.jsxs)(E,{isMoreInfo:!0,category:n.category,children:[(0,Ze.jsx)(Pe,{type:"submit",text:"Done",icon:(0,Ze.jsx)(we.r,{}),filled:!0,clickHandler:r,isDisabled:l}),(0,Ze.jsx)(Oe,{type:"button",clickHandler:o,text:"Back",isLink:!1})]})]})},Ue="ChooseForm_CategoryWrapper__WJIFV",Ye="ChooseForm_RadioCategoryLabel__Vmgxk",$e="ChooseForm_AddFormRadioButton__FY5bd",Ge=function(e){var n=e.formData,t=e.setFormData,r=e.nextStep,o=e.cancel,i=(e.setValues,(0,u.useState)(!0)),a=(0,m.Z)(i,2),l=a[0],c=a[1];(0,u.useEffect)((function(){n.category?c(!1):c(!0)}),[n.category]);var s=function(e){var n=e.target,r=n.name,o=n.value;t((function(e){return(0,w.Z)((0,w.Z)({},e),{},(0,j.Z)({},r,o))}))};return(0,Ze.jsxs)("div",{className:Ue,children:[(0,Ze.jsx)(h.gN,{className:$e,type:"radio",name:"category",value:"my-pet",id:"my-pet",onChange:s,checked:"my-pet"===n.category}),(0,Ze.jsx)("label",{className:Ye,htmlFor:"my-pet",children:"Your pet"}),(0,Ze.jsx)(h.gN,{className:$e,type:"radio",name:"category",value:"sell",id:"sell",checked:"sell"===n.category,onChange:s}),(0,Ze.jsx)("label",{className:Ye,htmlFor:"sell",children:"Sell"}),(0,Ze.jsx)(h.gN,{className:$e,type:"radio",name:"category",value:"lost-found",id:"lost-found",checked:"lost-found"===n.category,onChange:s}),(0,Ze.jsx)("label",{className:Ye,htmlFor:"lost-found",children:"Lost/found"}),(0,Ze.jsx)(h.gN,{className:$e,type:"radio",name:"category",value:"for-free",id:"for-free",checked:"for-free"===n.category,onChange:s}),(0,Ze.jsx)("label",{className:Ye,htmlFor:"for-free",children:"In good hands"}),(0,Ze.jsxs)(E,{children:[(0,Ze.jsx)(Pe,{isDisabled:l,type:"button",text:"Next",icon:(0,Ze.jsx)(we.r,{}),clickHandler:r,filled:!1}),(0,Ze.jsx)(Oe,{text:"Cancel",isLink:!0,path:o})]})]})},Je=_.ZP.div(he||(he=(0,P.Z)(["\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  padding: 16px 0 24px;\n  gap: 20px;\n"]))),Ke=_.ZP.div(ge||(ge=(0,P.Z)(["\n  position: relative;\n"]))),Qe=_.ZP.label(ye||(ye=(0,P.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 1.36;\n\n  color: var(--color-black);\n\n  @media screen and (min-width: 768px) {\n    gap: 8px;\n    font-size: 20px;\n    line-height: 1.3;\n  }\n"]))),Xe=(0,_.ZP)(h.gN)(be||(be=(0,P.Z)(["\n  padding: 10px 16px;\n\n  font-size: 14px;\n  line-height: 1.5;\n\n  border: 1px solid var(--color-blue);\n  border-radius: 40px;\n  outline-color: var(--color-blue);\n  transition: outline 300ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &.invalid {\n    border-color: var(--color-red);\n  }\n\n  @media screen and (min-width: 768px) {\n    font-size: 16px;\n    min-width: 394px;\n    padding: 12px 16px;\n  }\n\n  &[type='date']::-webkit-calendar-picker-indicator {\n    cursor: pointer;\n  }\n"]))),en=function(e){var n=e.formData,t=e.setFormData,r=e.nextStep,o=e.backStep,i=(0,u.useState)({}),a=(0,m.Z)(i,2),l=a[0],c=a[1],s=(0,u.useState)(!1),d=(0,m.Z)(s,2),p=d[0],f=d[1],x=Boolean(!l.name&&!!n.name),h=Boolean(!l.birthday&&!!n.birthday),g=Boolean(!l.breed&&!!n.breed),y=Boolean(!l.title&&!!n.title);(0,u.useEffect)((function(){switch(n.category){case"sell":f(!(x&&h&&g&&y));break;case"my-pet":f(!(x&&h&&g));break;default:f(!0)}}),[l,n.category,h,g,x,y]),(0,u.useEffect)((function(){f(!0)}),[]);var b=function(e){var n=e.target,r=n.name,o=n.value;c((function(e){return(0,w.Z)((0,w.Z)({},e),{},(0,j.Z)({},r,""))}));var i="birthday"===r?new Date(o).toLocaleDateString("uk-UA",{day:"2-digit",month:"2-digit",year:"numeric"}):o;t((function(e){return(0,w.Z)((0,w.Z)({},e),{},(0,j.Z)({},r,i))}))};return(0,Ze.jsxs)(Je,{children:["my-pet"!==n.category&&(0,Ze.jsxs)(Ke,{children:[(0,Ze.jsxs)(Qe,{htmlFor:"title",children:["Title of add:",(0,Ze.jsx)(Xe,{placeholder:"Type title",type:"text",name:"title",value:n.title,onChange:b,onBlur:function(){return O("title",n,c)},className:l.title?"invalid":""})]}),!!l.title&&(0,Ze.jsx)(Be,{message:l.title})]}),(0,Ze.jsxs)(Ke,{children:[(0,Ze.jsxs)(Qe,{htmlFor:"name",children:["Name:",(0,Ze.jsx)(Xe,{placeholder:"Type name pet",type:"text",name:"name",onChange:b,value:n.name,onBlur:function(){return O("name",n,c)},className:l.name?"invalid":""})]}),!!l.name&&(0,Ze.jsx)(Be,{message:l.name})]}),(0,Ze.jsxs)(Ke,{children:[(0,Ze.jsxs)(Qe,{htmlFor:"birthday",children:["Birthday:",(0,Ze.jsx)(Xe,{placeholder:"Type date of birth",type:"date",name:"birthday","data-pattern":"**.**.****",onChange:b,value:n.birthday.split(".").reverse().join("-"),onBlur:function(){return O("birthday",n,c)},className:l.birthday?"invalid":""})]}),!!l.birthday&&(0,Ze.jsx)(Be,{message:l.birthday})]}),(0,Ze.jsxs)(Ke,{children:[(0,Ze.jsxs)(Qe,{htmlFor:"breed",children:["Breed:",(0,Ze.jsx)(Xe,{placeholder:"Type breed",type:"text",name:"breed",onChange:b,value:n.breed,onBlur:function(){return O("breed",n,c)},className:l.breed?"invalid":""})]}),!!l.breed&&(0,Ze.jsx)(Be,{message:l.breed})]}),(0,Ze.jsxs)(E,{children:[(0,Ze.jsx)(Pe,{type:"button",text:"Next",icon:(0,Ze.jsx)(we.r,{}),clickHandler:r,filled:!1,isDisabled:p}),(0,Ze.jsx)(Oe,{type:"button",clickHandler:o,text:"Back",isLink:!1})]})]})},nn=t(4164),tn=t(1213),rn={backDrop:"Modal_backDrop__WFlO+",modalWindow:"Modal_modalWindow__CzUCW",closeBtn:"Modal_closeBtn__mlOa4",svg_closeBtn:"Modal_svg_closeBtn__-Rm1+"},on=document.getElementById("modal-root"),an=function(e){var n=e.toggleModal,t=e.children;(0,u.useEffect)((function(){var e=function(e){"Escape"===e.code&&n()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[n]);return(0,nn.createPortal)((0,Ze.jsx)(Ze.Fragment,{children:(0,Ze.jsx)("div",{className:rn.backdrop,onClick:function(e){e.target===e.currentTarget&&n()},children:(0,Ze.jsxs)("div",{className:rn.modalWindow,children:[(0,Ze.jsx)("button",{className:rn.closeBtn,onClick:n,children:(0,Ze.jsx)(tn.$iT,{className:rn.svg_closeBtn})}),t]})})}),on)},ln=function(e){return e.notices.isLoading},cn=function(e){return e.notices.error},sn=t(4217),dn=_.ZP.div(ve||(ve=(0,P.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 44px 20px;\n\n  text-align: center;\n  font-family: Manrope;\n  font-size: 20px;\n\n  @media screen and (min-width: 768px) {\n    padding: 64px 32px;\n    font-size: 28px;\n  }\n"]))),un=function(e){var n=e.backLink,t=e.category,r=(0,g.s0)(),o=(0,y.v9)(sn.zh),i=(0,y.v9)(cn),a=Boolean(o)||Boolean(i)?"Something wrong, please try again.":"Pet was successfully added!",l="my-pet"===t?"Go to profile":"Go to your adds",c="my-pet"===t?"/user":"/notices/my-pets";return(0,Ze.jsxs)(dn,{children:[(0,Ze.jsx)("p",{children:a}),(0,Ze.jsxs)(E,{children:[(0,Ze.jsx)(Pe,{type:"button",text:l,icon:(0,Ze.jsx)(we.r,{}),clickHandler:function(){r(c)},filled:!1,isDisabled:!1}),(0,Ze.jsx)(Oe,{type:"button",clickHandler:function(){return r(n)},text:"Back",isLink:!1})]})]})},pn=function(){var e,n,t=(0,u.useState)({category:"",name:"",title:"",birthday:"",breed:"",location:"",comments:"",petPhoto:null,sex:"",price:0}),r=(0,m.Z)(t,2),o=r[0],i=r[1],a=(0,u.useState)(!1),l=(0,m.Z)(a,2),c=l[0],s=l[1],d=(0,u.useState)(0),f=(0,m.Z)(d,2),j=f[0],w=f[1],k=(0,u.useState)(""),O=(0,m.Z)(k,2),P=O[0],_=O[1],E=null!==(e=null===(n=(0,g.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/",M=(0,g.s0)(),D=(0,y.I0)(),z=(0,y.v9)(sn.xU),I=(0,y.v9)(ln),q=z||I,A=(0,u.useCallback)((function(){if(j<1)return"Add Pet";return{"my-pet":"Add my pet",sell:"Add pet for sell","lost-found":"Add to lost or found pet","for-free":"Add to give a Pet for Adoption","":"Add Pet"}[o.category]||"Add Pet"}),[o.category,j]);(0,u.useEffect)((function(){_(A())}),[A]);var T=function(){s((function(e){return!e}))},W=function(e){return e>j?"":e<j?"completed":"current"},H=function(e){w((function(e){return e+1}))},R=function(){w((function(e){return e-1}))},V=function(){var e=(0,p.Z)(x().mark((function e(){var n;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o.category){e.next=2;break}return e.abrupt("return");case 2:if((n=new FormData).append("name",o.name),n.append("birthday",o.birthday),n.append("breed",o.breed),n.append("pets-photo",o.petPhoto),o.comments&&n.append("comments",o.comments),"my-pet"!==o.category){e.next=12;break}return D((0,v.Ci)(n)),T(),e.abrupt("return");case 12:if(n.append("titleOfAdd",o.title),n.append("sex",o.sex),n.append("location",o.location),"lost-found"!==o.category){e.next=19;break}return D((0,b.Fy)({category:"lost-found",newFormData:n})),T(),e.abrupt("return");case 19:if("for-free"!==o.category){e.next=23;break}return D((0,b.Fy)({category:"in-good-hands",newFormData:n})),T(),e.abrupt("return");case 23:n.append("price",o.price),"sell"===o.category&&(D((0,b.Fy)({category:o.category,newFormData:n})),T());case 25:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,Ze.jsxs)(B,{step:j,category:o.category,children:[(0,Ze.jsx)(F,{children:P}),(0,Ze.jsx)(N,{children:["Choose Option","Personal Details","More Info"].map((function(e,n){return(0,Ze.jsx)(L,{className:W(n),children:(0,Ze.jsx)(S,{children:e})},n)}))}),(0,Ze.jsx)(h.J9,{initialValues:o,validationSchema:Z,onSubmit:V,validateOnChange:!1,children:function(){return(0,Ze.jsxs)(C,{autoComplete:"on",children:[0===j&&(0,Ze.jsx)(Ge,{formData:o,setFormData:i,nextStep:H,cancel:E}),1===j&&(0,Ze.jsx)(en,{formData:o,setFormData:i,nextStep:H,backStep:R}),2===j&&(0,Ze.jsx)(Ve,{formData:o,setFormData:i,backStep:R,submit:V})]})}}),c&&!q&&(0,Ze.jsx)(an,{toggleModal:function(){return M(E)},children:(0,Ze.jsx)(un,{backLink:E})})]})},mn=function(){return(0,Ze.jsx)(pn,{})}},4217:function(e,n,t){t.d(n,{Qb:function(){return r},dy:function(){return o},xU:function(){return i},zh:function(){return a}});var r=function(e){return e.auth.isLoggedIn},o=function(e){return e.auth.user},i=function(e){return e.auth.isLoading},a=function(e){return e.auth.error}}}]);
//# sourceMappingURL=145.75a645b8.chunk.js.map