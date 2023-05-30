"use strict";(self.webpackChunkgroup_project_6_final=self.webpackChunkgroup_project_6_final||[]).push([[217],{458:function(n,t,e){e.d(t,{GAI:function(){return i}});var r=e(9983);function i(n){return(0,r.w_)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Logout"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:"M20.968,18.448a2.577,2.577,0,0,1-2.73,2.5c-2.153.012-4.306,0-6.459,0a.5.5,0,0,1,0-1c2.2,0,4.4.032,6.6,0,1.107-.016,1.589-.848,1.589-1.838V5.647A1.546,1.546,0,0,0,19,4.175a3.023,3.023,0,0,0-1.061-.095H11.779a.5.5,0,0,1,0-1c2.224,0,4.465-.085,6.687,0a2.567,2.567,0,0,1,2.5,2.67Z"}},{tag:"path",attr:{d:"M3.176,11.663a.455.455,0,0,0-.138.311c0,.015,0,.028-.006.043s0,.027.006.041a.457.457,0,0,0,.138.312l3.669,3.669a.5.5,0,0,0,.707-.707L4.737,12.516H15.479a.5.5,0,0,0,0-1H4.737L7.552,8.7a.5.5,0,0,0-.707-.707Z"}}]}]}]})(n)}},6856:function(n,t,e){e.d(t,{iOE:function(){return i}});var r=e(9983);function i(n){return(0,r.w_)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M14.12 4l1.83 2H20v12H4V6h4.05l1.83-2h4.24M15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2zm-3 7c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3m0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z"}}]})(n)}},7647:function(n,t,e){e.d(t,{hl:function(){return H}});var r=e(5671),i=e(3144),u=e(1752),a=e(1120),o=e(136),c=e(7277),f=e(6281),s=e(8513);function v(n){var t=n.toString();return t.match(/[A-Z]/gi)||t.length>1&&"0"===t[0]?t:!isNaN(parseFloat(t))&&-1===t.indexOf(":")&&-1===t.indexOf(".")?"".concat(t,".0"):t}var l=e(9793),h=function(n){(0,o.Z)(e,n);var t=(0,c.Z)(e);function e(){return(0,r.Z)(this,e),t.apply(this,arguments)}return(0,i.Z)(e)}(l.N),d=e(8216),g=e(1187),w=e(5442),p=function(n){(0,o.Z)(e,n);var t=(0,c.Z)(e);function e(n,i,u){var a;return(0,r.Z)(this,e),(a=t.call(this))._actionModel={dimensions:{}},a._actionModel.actionType=w.IZ[n]||n,a.addQualifier(new f.q("c",n)),i&&a.width(i),u&&a.height(u),a}return(0,i.Z)(e,[{key:"height",value:function(n){return this._actionModel.dimensions.height=n,this.addQualifier(new f.q("h",n))}},{key:"width",value:function(n){return this._actionModel.dimensions.width=n,this.addQualifier(new f.q("w",n))}},{key:"aspectRatio",value:function(n){return n instanceof h?(this._actionModel.dimensions.aspectRatio="".concat(n),this.addQualifier(new f.q("ar",n))):"number"===typeof n||"string"===typeof n?(this._actionModel.dimensions.aspectRatio=v(n),this.addQualifier(new f.q("ar",v(n)))):n instanceof g.A?(this._actionModel.dimensions.aspectRatio="".concat(n.qualifierValue),this.addFlag(n)):void 0}},{key:"relative",value:function(){return this._actionModel.relative=!0,this.addFlag((0,d.Gf)())}},{key:"regionRelative",value:function(){return this._actionModel.regionRelative=!0,this.addFlag((0,d.S7)())}}],[{key:"fromJson",value:function(n){var t=n.actionType,e=n.dimensions,r=n.relative,i=n.regionRelative,u=e.aspectRatio,a=e.width,o=e.height,c=new this(w.Q8[t]||t,a,o);return u&&c.aspectRatio("ignore_aspect_ratio"===u?(0,d.og)():u),r&&c.relative(),i&&c.regionRelative(),c}}]),e}(s.a),y=e(3433),Z=e(1614),k=e(7325),_=e(7094),m=e(9635);function b(n){return"".concat(n).replace("g_","")}function M(n){var t=n.toString().split("_"),e={object:t[0]};return t.length>1&&("avoid"===t[1]?e.avoid=!0:e.weight=+t[1]),e}function q(n){var t="auto"===n?new Z.d:n;return{gravityType:"auto",autoFocus:("".concat(n).startsWith("auto:")?"".concat(n).split(":").filter((function(n){return"auto"!==n})):t.qualifierValue.values.filter((function(n){return"auto"!==n}))).map(M)}}function A(n){return function(n){var t=b(n);return["north","center","east","west","south","north_west","south_east","south_west","north_east"].includes(t)}(n)?function(n){return{compass:b(n),gravityType:"direction"}}(n):function(n){return"ocr_text"===b(n)}(n)?{gravityType:"ocr"}:function(n){return n&&"auto"==="".concat(n).split(":")[0]}(n)||function(n){return"auto"==="".concat(n.qualifierValue).split(":")[0]}(n)?q(n):function(n){var t="".concat(n).split(":").includes("auto"),e=n.qualifierValue.values,r={gravityType:"object",focusOnObjects:(t?e.slice(0,e.length-1):e).map((function(n){return"".concat(n)}))};if(t){var i,u=e[e.length-1].values.slice(1),a=(i=(0,_.j6)()).autoFocus.apply(i,(0,y.Z)(u));r.fallbackGravity=q(a)}return r}("string"===typeof n?function(n){var t=n.split(":").map((function(n){return new m.v(n)}));return new k.n(t)}(n):n)}var x=e(3533),j=function(n){(0,o.Z)(e,n);var t=(0,c.Z)(e);function e(n,i){var u;return(0,r.Z)(this,e),(u=t.call(this))._weight=i,u.focusOn=n,u.shouldAvoid=!1,u}return(0,i.Z)(e,[{key:"shouldAddWeight",value:function(){return"number"===typeof this._weight||"string"===typeof this._weight||this.shouldAvoid}},{key:"getName",value:function(){return this.focusOn.name}},{key:"getWeight",value:function(){return this.shouldAvoid?"avoid":this._weight}},{key:"toString",value:function(){return this.shouldAddWeight()?"".concat(this.getName(),"_").concat(this.getWeight()):"".concat(this.getName())}},{key:"weight",value:function(n){return this._weight=n,this}},{key:"avoid",value:function(){return this.shouldAvoid=!0,this}}],[{key:"focusOn",value:function(n,t){return new e(n,t)}}]),e}(l.N),F=(j.focusOn,e(6417)),O=function(n){(0,o.Z)(e,n);var t=(0,c.Z)(e);function e(n){var i;return(0,r.Z)(this,e),(i=t.call(this)).val=n,i}return(0,i.Z)(e,[{key:"toString",value:function(){return this.val}}]),e}(l.N);function V(n){var t=n.object,e=n.weight,r=n.avoid,i=new j(new m.v(t));return(e||0===e)&&i.weight(e),r&&i.avoid(),i}function N(n){var t,e=(n.autoFocus||[]).map(V);return(t=(0,_.j6)()).autoFocus.apply(t,(0,y.Z)(e))}function R(n){return function(n){return"direction"===n.gravityType}(n)?new F.f(new O(n.compass)):function(n){return"ocr"===n.gravityType}(n)?(0,_.v0)((0,x.A2)()):function(n){return"auto"===n.gravityType}(n)?N(n):function(n){var t=(n.focusOnObjects||[]).map((function(n){return new m.v(n)})),e=_.v0.apply(void 0,(0,y.Z)(t));if(n.fallbackGravity){var r=N(n.fallbackGravity);e.fallbackGravity(r)}return e}(n)}var Q=function(n){(0,o.Z)(e,n);var t=(0,c.Z)(e);function e(){return(0,r.Z)(this,e),t.apply(this,arguments)}return(0,i.Z)(e,[{key:"gravity",value:function(n){this._actionModel.gravity=A(n);var t="string"===typeof n?new f.q("g",n):n;return this.addQualifier(t)}}],[{key:"fromJson",value:function(n){var t=(0,u.Z)((0,a.Z)(e),"fromJson",this).apply(this,[n]);return n.gravity&&t.gravity(R(n.gravity)),t}}]),e}(p);f.q,e(6580);e(8440);var T=function(n){(0,o.Z)(e,n);var t=(0,c.Z)(e);function e(){return(0,r.Z)(this,e),t.apply(this,arguments)}return(0,i.Z)(e,[{key:"x",value:function(n){return this._actionModel.x=n,this.addQualifier(new f.q("x",n))}},{key:"y",value:function(n){return this._actionModel.y=n,this.addQualifier(new f.q("y",n))}}],[{key:"fromJson",value:function(n){var t=(0,u.Z)((0,a.Z)(e),"fromJson",this).apply(this,[n]);return n.x&&t.x(n.x),n.y&&t.y(n.y),t}}]),e}(Q);function H(n,t){return new T("fill",n,t)}},3533:function(n,t,e){e.d(t,{A2:function(){return i},Yj:function(){return u}});var r=e(9635);function i(){return new r.v("ocr_text")}var u={person:function(){return new r.v("person")},cat:function(){return new r.v("cat")},microwave:function(){return new r.v("microwave")},refrigerator:function(){return new r.v("refrigerator")},skateboard:function(){return new r.v("skateboard")},bird:function(){return new r.v("bird")},bottle:function(){return new r.v("bottle")},dog:function(){return new r.v("dog")},sink:function(){return new r.v("sink")},face:function(){return new r.v("face")},train:function(){return new r.v("train")},sofa:function(){return new r.v("sofa")},sheep:function(){return new r.v("sheep")},pottedplant:function(){return new r.v("pottedplant")},horse:function(){return new r.v("horse")},faces:function(){return new r.v("faces")},cow:function(){return new r.v("cow")},bus:function(){return new r.v("bus")},boat:function(){return new r.v("boat")},advancedEyes:function(){return new r.v("adv_eyes")},advancedFace:function(){return new r.v("adv_face")},advancedFaces:function(){return new r.v("adv_faces")},aeroplane:function(){return new r.v("aeroplane")},background:function(){return new r.v("background")},bicycle:function(){return new r.v("bicycle")},car:function(){return new r.v("car")},chair:function(){return new r.v("chair")},diningtable:function(){return new r.v("diningtable")},tvmonitor:function(){return new r.v("tvmonitor")},motorbike:function(){return new r.v("motorbike")},ocr:i}},7094:function(n,t,e){e.d(t,{j6:function(){return s},v0:function(){return f}});e(6417);var r=e(7325),i=e(1614),u=e(3144),a=e(5671),o=e(136),c=e(7277);e(8440).B;function f(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];var i=[].concat(t);return new r.n(i)}function s(){return new i.d}},8440:function(n,t,e){e.d(t,{B:function(){return f}});var r=e(3144),i=e(5671),u=e(136),a=e(7277),o=e(6281),c=e(9793),f=function(n){(0,u.Z)(e,n);var t=(0,a.Z)(e);function e(n){return(0,i.Z)(this,e),t.call(this,"g",new c.N(n))}return(0,r.Z)(e)}(o.q)},1614:function(n,t,e){e.d(t,{d:function(){return o}});var r=e(5671),i=e(3144),u=e(136),a=e(7277),o=function(n){(0,u.Z)(e,n);var t=(0,a.Z)(e);function e(){return(0,r.Z)(this,e),t.call(this,"auto")}return(0,i.Z)(e,[{key:"autoFocus",value:function(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return this.addValue(t),this}}]),e}(e(8440).B)},6417:function(n,t,e){e.d(t,{f:function(){return o}});var r=e(3144),i=e(5671),u=e(136),a=e(7277),o=function(n){(0,u.Z)(e,n);var t=(0,a.Z)(e);function e(n){return(0,i.Z)(this,e),t.call(this,n)}return(0,r.Z)(e)}(e(8440).B)},7325:function(n,t,e){e.d(t,{n:function(){return o}});var r=e(5671),i=e(3144),u=e(136),a=e(7277),o=function(n){(0,u.Z)(e,n);var t=(0,a.Z)(e);function e(n){return(0,r.Z)(this,e),t.call(this,n)}return(0,i.Z)(e,[{key:"fallbackGravity",value:function(n){return this.addValue(n.qualifierValue),this}}]),e}(e(8440).B)},9635:function(n,t,e){e.d(t,{v:function(){return o}});var r=e(5671),i=e(3144),u=e(136),a=e(7277),o=function(n){(0,u.Z)(e,n);var t=(0,a.Z)(e);function e(n){var i;return(0,r.Z)(this,e),(i=t.call(this)).name=n,i}return(0,i.Z)(e,[{key:"toString",value:function(){return this.name}}]),e}(e(9793).N)}}]);
//# sourceMappingURL=217.36f6587a.chunk.js.map