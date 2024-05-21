import{_ as _e,g as Ce}from"./index-CKW3Te9o.js";import{r as o,R as de}from"./react-C2rEAUWD.js";import{I as xt,K as ut,i as Rt,d as dt,h as ve,b as V,_ as re,j as Pt,k as be,a as wt,l as Ht,w as Ot,n as Ft,T as kt,q as Bt,s as Be,g as Dt,m as Lt,r as Tt,u as Z,t as Nt,C as zt,D as _t}from"./index-D5W2DARi.js";import{j as ze}from"./rainbowkit-CJxJS5Ms.js";import{K as G}from"./BaseInput-Ij_7WG4C.js";var jt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"exclamation-circle",theme:"filled"},Wt=function(t,r){return o.createElement(xt,_e({},t,{ref:r,icon:jt}))},ma=o.forwardRef(Wt);const At=new ut("antFadeIn",{"0%":{opacity:0},"100%":{opacity:1}}),It=new ut("antFadeOut",{"0%":{opacity:1},"100%":{opacity:0}}),ha=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const{antCls:r}=e,a=`${r}-fade`,l=t?"&":"";return[Rt(a,At,It,e.motionDurationMid,t),{[`
        ${l}${a}-enter,
        ${l}${a}-appear
      `]:{opacity:0,animationTimingFunction:"linear"},[`${l}${a}-leave`]:{animationTimingFunction:"linear"}}]};function qe(e,t,r){return(e-t)/(r-t)}function Xe(e,t,r,a){var l=qe(t,r,a),i={};switch(e){case"rtl":i.right="".concat(l*100,"%"),i.transform="translateX(50%)";break;case"btt":i.bottom="".concat(l*100,"%"),i.transform="translateY(50%)";break;case"ttb":i.top="".concat(l*100,"%"),i.transform="translateY(-50%)";break;default:i.left="".concat(l*100,"%"),i.transform="translateX(-50%)";break}return i}function we(e,t){return Array.isArray(e)?e[t]:e}var Ee=o.createContext({min:0,max:0,direction:"ltr",step:1,includedStart:0,includedEnd:0,tabIndex:0,keyboard:!0,styles:{},classNames:{}}),qt=["prefixCls","value","valueIndex","onStartMove","style","render","dragging","onOffsetChange","onChangeComplete","onFocus","onMouseEnter"],lt=o.forwardRef(function(e,t){var r=e.prefixCls,a=e.value,l=e.valueIndex,i=e.onStartMove,g=e.style,s=e.render,$=e.dragging,v=e.onOffsetChange,C=e.onChangeComplete,M=e.onFocus,p=e.onMouseEnter,h=dt(e,qt),u=o.useContext(Ee),c=u.min,d=u.max,f=u.direction,n=u.disabled,b=u.keyboard,E=u.range,S=u.tabIndex,P=u.ariaLabelForHandle,x=u.ariaLabelledByForHandle,X=u.ariaValueTextFormatterForHandle,B=u.styles,y=u.classNames,D="".concat(r,"-handle"),_=function(z){n||i(z,l)},Y=function(z){M?.(z,l)},ae=function(z){p(z,l)},w=function(z){if(!n&&b){var j=null;switch(z.which||z.keyCode){case G.LEFT:j=f==="ltr"||f==="btt"?-1:1;break;case G.RIGHT:j=f==="ltr"||f==="btt"?1:-1;break;case G.UP:j=f!=="ttb"?1:-1;break;case G.DOWN:j=f!=="ttb"?-1:1;break;case G.HOME:j="min";break;case G.END:j="max";break;case G.PAGE_UP:j=2;break;case G.PAGE_DOWN:j=-2;break}j!==null&&(z.preventDefault(),v(j,l))}},F=function(z){switch(z.which||z.keyCode){case G.LEFT:case G.RIGHT:case G.UP:case G.DOWN:case G.HOME:case G.END:case G.PAGE_UP:case G.PAGE_DOWN:C?.();break}},R=Xe(f,a,c,d),L={};if(l!==null){var k;L={tabIndex:n?null:we(S,l),role:"slider","aria-valuemin":c,"aria-valuemax":d,"aria-valuenow":a,"aria-disabled":n,"aria-label":we(P,l),"aria-labelledby":we(x,l),"aria-valuetext":(k=we(X,l))===null||k===void 0?void 0:k(a),"aria-orientation":f==="ltr"||f==="rtl"?"horizontal":"vertical",onMouseDown:_,onTouchStart:_,onFocus:Y,onMouseEnter:ae,onKeyDown:w,onKeyUp:F}}var ee=o.createElement("div",_e({ref:t,className:Ce(D,ve(ve({},"".concat(D,"-").concat(l+1),l!==null&&E),"".concat(D,"-dragging"),$),y.handle),style:V(V(V({},R),g),B.handle)},L,h));return s&&(ee=s(ee,{index:l,prefixCls:r,value:a,dragging:$})),ee}),Xt=["prefixCls","style","onStartMove","onOffsetChange","values","handleRender","activeHandleRender","draggingIndex","onFocus"],Yt=o.forwardRef(function(e,t){var r=e.prefixCls,a=e.style,l=e.onStartMove,i=e.onOffsetChange,g=e.values,s=e.handleRender,$=e.activeHandleRender,v=e.draggingIndex,C=e.onFocus,M=dt(e,Xt),p=o.useRef({});o.useImperativeHandle(t,function(){return{focus:function(S){var P;(P=p.current[S])===null||P===void 0||P.focus()}}});var h=o.useState(-1),u=re(h,2),c=u[0],d=u[1],f=function(S,P){d(P),C?.(S)},n=function(S,P){d(P)},b=V({prefixCls:r,onStartMove:l,onOffsetChange:i,render:s,onFocus:f,onMouseEnter:n},M);return o.createElement(o.Fragment,null,g.map(function(E,S){return o.createElement(lt,_e({ref:function(x){x?p.current[S]=x:delete p.current[S]},dragging:v===S,style:we(a,S),key:S,value:E,valueIndex:S},b))}),$&&o.createElement(lt,_e({key:"a11y"},b,{value:g[c],valueIndex:null,dragging:v!==-1,render:$,style:{pointerEvents:"none"},tabIndex:null,"aria-hidden":!0})))}),Kt=function(t){var r=t.prefixCls,a=t.style,l=t.children,i=t.value,g=t.onClick,s=o.useContext(Ee),$=s.min,v=s.max,C=s.direction,M=s.includedStart,p=s.includedEnd,h=s.included,u="".concat(r,"-text"),c=Xe(C,i,$,v);return o.createElement("span",{className:Ce(u,ve({},"".concat(u,"-active"),h&&M<=i&&i<=p)),style:V(V({},c),a),onMouseDown:function(f){f.stopPropagation()},onClick:function(){g(i)}},l)},Ut=function(t){var r=t.prefixCls,a=t.marks,l=t.onClick,i="".concat(r,"-mark");return a.length?o.createElement("div",{className:i},a.map(function(g){var s=g.value,$=g.style,v=g.label;return o.createElement(Kt,{key:s,prefixCls:i,style:$,value:s,onClick:l},v)})):null},Gt=function(t){var r=t.prefixCls,a=t.value,l=t.style,i=t.activeStyle,g=o.useContext(Ee),s=g.min,$=g.max,v=g.direction,C=g.included,M=g.includedStart,p=g.includedEnd,h="".concat(r,"-dot"),u=C&&M<=a&&a<=p,c=V(V({},Xe(v,a,s,$)),typeof l=="function"?l(a):l);return u&&(c=V(V({},c),typeof i=="function"?i(a):i)),o.createElement("span",{className:Ce(h,ve({},"".concat(h,"-active"),u)),style:c})},Vt=function(t){var r=t.prefixCls,a=t.marks,l=t.dots,i=t.style,g=t.activeStyle,s=o.useContext(Ee),$=s.min,v=s.max,C=s.step,M=o.useMemo(function(){var p=new Set;if(a.forEach(function(u){p.add(u.value)}),l&&C!==null)for(var h=$;h<=v;)p.add(h),h+=C;return Array.from(p)},[$,v,C,l,a]);return o.createElement("div",{className:"".concat(r,"-step")},M.map(function(p){return o.createElement(Gt,{prefixCls:r,key:p,value:p,style:i,activeStyle:g})}))},it=function(t){var r=t.prefixCls,a=t.style,l=t.start,i=t.end,g=t.index,s=t.onStartMove,$=t.replaceCls,v=o.useContext(Ee),C=v.direction,M=v.min,p=v.max,h=v.disabled,u=v.range,c=v.classNames,d="".concat(r,"-track"),f=qe(l,M,p),n=qe(i,M,p),b=function(x){!h&&s&&s(x,-1)},E={};switch(C){case"rtl":E.right="".concat(f*100,"%"),E.width="".concat(n*100-f*100,"%");break;case"btt":E.bottom="".concat(f*100,"%"),E.height="".concat(n*100-f*100,"%");break;case"ttb":E.top="".concat(f*100,"%"),E.height="".concat(n*100-f*100,"%");break;default:E.left="".concat(f*100,"%"),E.width="".concat(n*100-f*100,"%")}var S=$||Ce(d,ve(ve({},"".concat(d,"-").concat(g+1),g!==null&&u),"".concat(r,"-track-draggable"),s),c.track);return o.createElement("div",{className:S,style:V(V({},E),a),onMouseDown:b,onTouchStart:b})},Jt=function(t){var r=t.prefixCls,a=t.style,l=t.values,i=t.startPoint,g=t.onStartMove,s=o.useContext(Ee),$=s.included,v=s.range,C=s.min,M=s.styles,p=s.classNames,h=o.useMemo(function(){if(!v){if(l.length===0)return[];var c=i??C,d=l[0];return[{start:Math.min(c,d),end:Math.max(c,d)}]}for(var f=[],n=0;n<l.length-1;n+=1)f.push({start:l[n],end:l[n+1]});return f},[l,v,i,C]);if(!$)return null;var u=p.tracks||M.tracks?o.createElement(it,{index:null,prefixCls:r,start:h[0].start,end:h[h.length-1].end,replaceCls:Ce(p.tracks,"".concat(r,"-tracks")),style:M.tracks}):null;return o.createElement(o.Fragment,null,u,h.map(function(c,d){var f=c.start,n=c.end;return o.createElement(it,{index:d,prefixCls:r,style:V(V({},we(a,d)),M.track),start:f,end:n,key:d,onStartMove:g})}))};function st(e){var t="touches"in e?e.touches[0]:e;return{pageX:t.pageX,pageY:t.pageY}}function Qt(e,t,r,a,l,i,g,s,$){var v=o.useState(null),C=re(v,2),M=C[0],p=C[1],h=o.useState(-1),u=re(h,2),c=u[0],d=u[1],f=o.useState(r),n=re(f,2),b=n[0],E=n[1],S=o.useState(r),P=re(S,2),x=P[0],X=P[1],B=o.useRef(null),y=o.useRef(null);o.useLayoutEffect(function(){c===-1&&E(r)},[r,c]),o.useEffect(function(){return function(){document.removeEventListener("mousemove",B.current),document.removeEventListener("mouseup",y.current),document.removeEventListener("touchmove",B.current),document.removeEventListener("touchend",y.current)}},[]);var D=function(F,R){b.some(function(L,k){return L!==F[k]})&&(R!==void 0&&p(R),E(F),g(F))},_=Pt(function(w,F){if(w===-1){var R=x[0],L=x[x.length-1],k=a-R,ee=l-L,T=F*(l-a);T=Math.max(T,k),T=Math.min(T,ee);var z=i(R+T);T=z-R;var j=x.map(function(le){return le+T});D(j)}else{var K=(l-a)*F,ne=be(b);ne[w]=x[w];var oe=$(ne,K,w,"dist");D(oe.values,oe.value)}}),Y=function(F,R,L){F.stopPropagation();var k=L||r,ee=k[R];d(R),p(ee),X(k);var T=st(F),z=T.pageX,j=T.pageY,K=function(le){le.preventDefault();var ge=st(le),xe=ge.pageX,He=ge.pageY,Se=xe-z,ye=He-j,pe=e.current.getBoundingClientRect(),Me=pe.width,W=pe.height,J;switch(t){case"btt":J=-ye/W;break;case"ttb":J=ye/W;break;case"rtl":J=-Se/Me;break;default:J=Se/Me}_(R,J)},ne=function oe(le){le.preventDefault(),document.removeEventListener("mouseup",oe),document.removeEventListener("mousemove",K),document.removeEventListener("touchend",oe),document.removeEventListener("touchmove",K),B.current=null,y.current=null,d(-1),s()};document.addEventListener("mouseup",ne),document.addEventListener("mousemove",K),document.addEventListener("touchend",ne),document.addEventListener("touchmove",K),B.current=K,y.current=ne},ae=o.useMemo(function(){var w=be(r).sort(function(R,L){return R-L}),F=be(b).sort(function(R,L){return R-L});return w.every(function(R,L){return R===F[L]})?b:r},[r,b]);return[c,M,ae,Y]}function Zt(e,t,r,a,l,i){var g=o.useCallback(function(h){return Math.max(e,Math.min(t,h))},[e,t]),s=o.useCallback(function(h){if(r!==null){var u=e+Math.round((g(h)-e)/r)*r,c=function(b){return(String(b).split(".")[1]||"").length},d=Math.max(c(r),c(t),c(e)),f=Number(u.toFixed(d));return e<=f&&f<=t?f:null}return null},[r,e,t,g]),$=o.useCallback(function(h){var u=g(h),c=a.map(function(n){return n.value});r!==null&&c.push(s(h)),c.push(e,t);var d=c[0],f=t-e;return c.forEach(function(n){var b=Math.abs(u-n);b<=f&&(d=n,f=b)}),d},[e,t,a,r,g,s]),v=function h(u,c,d){var f=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"unit";if(typeof c=="number"){var n,b=u[d],E=b+c,S=[];a.forEach(function(y){S.push(y.value)}),S.push(e,t),S.push(s(b));var P=c>0?1:-1;f==="unit"?S.push(s(b+P*r)):S.push(s(E)),S=S.filter(function(y){return y!==null}).filter(function(y){return c<0?y<=b:y>=b}),f==="unit"&&(S=S.filter(function(y){return y!==b}));var x=f==="unit"?b:E;n=S[0];var X=Math.abs(n-x);if(S.forEach(function(y){var D=Math.abs(y-x);D<X&&(n=y,X=D)}),n===void 0)return c<0?e:t;if(f==="dist")return n;if(Math.abs(c)>1){var B=be(u);return B[d]=n,h(B,c-P,d,f)}return n}else{if(c==="min")return e;if(c==="max")return t}},C=function(u,c,d){var f=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"unit",n=u[d],b=v(u,c,d,f);return{value:b,changed:b!==n}},M=function(u){return i===null&&u===0||typeof i=="number"&&u<i},p=function(u,c,d){var f=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"unit",n=u.map($),b=n[d],E=v(n,c,d,f);if(n[d]=E,l===!1){var S=i||0;d>0&&n[d-1]!==b&&(n[d]=Math.max(n[d],n[d-1]+S)),d<n.length-1&&n[d+1]!==b&&(n[d]=Math.min(n[d],n[d+1]-S))}else if(typeof i=="number"||i===null){for(var P=d+1;P<n.length;P+=1)for(var x=!0;M(n[P]-n[P-1])&&x;){var X=C(n,1,P);n[P]=X.value,x=X.changed}for(var B=d;B>0;B-=1)for(var y=!0;M(n[B]-n[B-1])&&y;){var D=C(n,-1,B-1);n[B-1]=D.value,y=D.changed}for(var _=n.length-1;_>0;_-=1)for(var Y=!0;M(n[_]-n[_-1])&&Y;){var ae=C(n,-1,_-1);n[_-1]=ae.value,Y=ae.changed}for(var w=0;w<n.length-1;w+=1)for(var F=!0;M(n[w+1]-n[w])&&F;){var R=C(n,1,w+1);n[w+1]=R.value,F=R.changed}}return{value:n[d],values:n}};return[$,p]}var ea=o.forwardRef(function(e,t){var r=e.prefixCls,a=r===void 0?"rc-slider":r,l=e.className,i=e.style,g=e.classNames,s=e.styles,$=e.disabled,v=$===void 0?!1:$,C=e.keyboard,M=C===void 0?!0:C,p=e.autoFocus,h=e.onFocus,u=e.onBlur,c=e.min,d=c===void 0?0:c,f=e.max,n=f===void 0?100:f,b=e.step,E=b===void 0?1:b,S=e.value,P=e.defaultValue,x=e.range,X=e.count,B=e.onChange,y=e.onBeforeChange,D=e.onAfterChange,_=e.onChangeComplete,Y=e.allowCross,ae=Y===void 0?!0:Y,w=e.pushable,F=w===void 0?!1:w,R=e.draggableTrack,L=e.reverse,k=e.vertical,ee=e.included,T=ee===void 0?!0:ee,z=e.startPoint,j=e.trackStyle,K=e.handleStyle,ne=e.railStyle,oe=e.dotStyle,le=e.activeDotStyle,ge=e.marks,xe=e.dots,He=e.handleRender,Se=e.activeHandleRender,ye=e.tabIndex,pe=ye===void 0?0:ye,Me=e.ariaLabelForHandle,W=e.ariaLabelledByForHandle,J=e.ariaValueTextFormatterForHandle,ie=o.useRef(null),U=o.useRef(null),Re=o.useMemo(function(){return k?L?"ttb":"btt":L?"rtl":"ltr"},[L,k]),Q=o.useMemo(function(){return isFinite(d)?d:0},[d]),me=o.useMemo(function(){return isFinite(n)?n:100},[n]),A=o.useMemo(function(){return E!==null&&E<=0?1:E},[E]),N=o.useMemo(function(){return typeof F=="boolean"?F?A:!1:F>=0?F:!1},[F,A]),te=o.useMemo(function(){return Object.keys(ge||{}).map(function(O){var m=ge[O],H={value:Number(O)};return m&&wt(m)==="object"&&!o.isValidElement(m)&&("label"in m||"style"in m)?(H.style=m.style,H.label=m.label):H.label=m,H}).filter(function(O){var m=O.label;return m||typeof m=="number"}).sort(function(O,m){return O.value-m.value})},[ge]),ft=Zt(Q,me,A,te,ae,N),Ye=re(ft,2),De=Ye[0],Ke=Ye[1],gt=Ht(P,{value:S}),Ue=re(gt,2),he=Ue[0],mt=Ue[1],se=o.useMemo(function(){var O=he==null?[]:Array.isArray(he)?he:[he],m=re(O,1),H=m[0],I=H===void 0?Q:H,q=he===null?[]:[I];if(x){if(q=be(O),X||he===void 0){var ce=X>=0?X+1:2;for(q=q.slice(0,ce);q.length<ce;){var ue;q.push((ue=q[q.length-1])!==null&&ue!==void 0?ue:Q)}}q.sort(function(fe,$e){return fe-$e})}return q.forEach(function(fe,$e){q[$e]=De(fe)}),q},[he,x,Q,X,De]),Le=o.useRef(se);Le.current=se;var Oe=function(m){return x?m:m[0]},je=function(m){var H=be(m).sort(function(I,q){return I-q});B&&!Ft(H,Le.current,!0)&&B(Oe(H)),mt(H)},Ge=function(){var m=Oe(Le.current);D?.(m),Ot(!D,"[rc-slider] `onAfterChange` is deprecated. Please use `onChangeComplete` instead."),_?.(m)},ht=Qt(U,Re,se,Q,me,De,je,Ge,Ke),Te=re(ht,4),Ve=Te[0],bt=Te[1],We=Te[2],Je=Te[3],Qe=function(m,H){if(!v){var I=0,q=me-Q;se.forEach(function($e,Ne){var Fe=Math.abs(m-$e);Fe<=q&&(q=Fe,I=Ne)});var ce=be(se);if(ce[I]=m,x&&!se.length&&X===void 0&&ce.push(m),y?.(Oe(ce)),je(ce),H){var ue,fe;(ue=document.activeElement)===null||ue===void 0||(fe=ue.blur)===null||fe===void 0||fe.call(ue),ie.current.focus(I),Je(H,I,ce)}}},Ct=function(m){m.preventDefault();var H=U.current.getBoundingClientRect(),I=H.width,q=H.height,ce=H.left,ue=H.top,fe=H.bottom,$e=H.right,Ne=m.clientX,Fe=m.clientY,ke;switch(Re){case"btt":ke=(fe-Fe)/q;break;case"ttb":ke=(Fe-ue)/q;break;case"rtl":ke=($e-Ne)/I;break;default:ke=(Ne-ce)/I}var Et=Q+ke*(me-Q);Qe(De(Et),m)},St=o.useState(null),Ze=re(St,2),Ae=Ze[0],et=Ze[1],yt=function(m,H){if(!v){var I=Ke(se,m,H);y?.(Oe(se)),je(I.values),et(I.value)}};o.useEffect(function(){if(Ae!==null){var O=se.indexOf(Ae);O>=0&&ie.current.focus(O)}et(null)},[Ae]);var pt=o.useMemo(function(){return R&&A===null?!1:R},[R,A]),tt=function(m,H){Je(m,H),y?.(Oe(Le.current))},at=Ve!==-1;o.useEffect(function(){if(!at){var O=se.lastIndexOf(bt);ie.current.focus(O)}},[at]);var Pe=o.useMemo(function(){return be(We).sort(function(O,m){return O-m})},[We]),Mt=o.useMemo(function(){return x?[Pe[0],Pe[Pe.length-1]]:[Q,Pe[0]]},[Pe,x,Q]),rt=re(Mt,2),nt=rt[0],ot=rt[1];o.useImperativeHandle(t,function(){return{focus:function(){ie.current.focus(0)},blur:function(){var m,H=document,I=H.activeElement;(m=U.current)!==null&&m!==void 0&&m.contains(I)&&I?.blur()}}}),o.useEffect(function(){p&&ie.current.focus(0)},[]);var $t=o.useMemo(function(){return{min:Q,max:me,direction:Re,disabled:v,keyboard:M,step:A,included:T,includedStart:nt,includedEnd:ot,range:x,tabIndex:pe,ariaLabelForHandle:Me,ariaLabelledByForHandle:W,ariaValueTextFormatterForHandle:J,styles:s||{},classNames:g||{}}},[Q,me,Re,v,M,A,T,nt,ot,x,pe,Me,W,J,s,g]);return o.createElement(Ee.Provider,{value:$t},o.createElement("div",{ref:U,className:Ce(a,l,ve(ve(ve(ve({},"".concat(a,"-disabled"),v),"".concat(a,"-vertical"),k),"".concat(a,"-horizontal"),!k),"".concat(a,"-with-marks"),te.length)),style:i,onMouseDown:Ct},o.createElement("div",{className:Ce("".concat(a,"-rail"),g?.rail),style:V(V({},ne),s?.rail)}),o.createElement(Jt,{prefixCls:a,style:j,values:Pe,startPoint:z,onStartMove:pt?tt:void 0}),o.createElement(Vt,{prefixCls:a,marks:te,dots:xe,style:oe,activeStyle:le}),o.createElement(Yt,{ref:ie,prefixCls:a,style:K,values:We,draggingIndex:Ve,onStartMove:tt,onOffsetChange:yt,onFocus:h,onBlur:u,handleRender:He,activeHandleRender:Se,onChangeComplete:Ge}),o.createElement(Ut,{prefixCls:a,marks:te,onClick:Qe})))});const ct=o.forwardRef((e,t)=>{const{open:r}=e,a=o.useRef(null),l=o.useRef(null);function i(){Be.cancel(l.current),l.current=null}function g(){l.current=Be(()=>{var s;(s=a.current)===null||s===void 0||s.forceAlign(),l.current=null})}return o.useEffect(()=>(r?g():i(),i),[r,e.title]),o.createElement(kt,Object.assign({ref:Bt(a,t)},e))}),ta=e=>{const{componentCls:t,antCls:r,controlSize:a,dotSize:l,marginFull:i,marginPart:g,colorFillContentHover:s,handleColorDisabled:$,calc:v}=e;return{[t]:Object.assign(Object.assign({},Tt(e)),{position:"relative",height:a,margin:`${Z(g)} ${Z(i)}`,padding:0,cursor:"pointer",touchAction:"none","&-vertical":{margin:`${Z(i)} ${Z(g)}`},[`${t}-rail`]:{position:"absolute",backgroundColor:e.railBg,borderRadius:e.borderRadiusXS,transition:`background-color ${e.motionDurationMid}`},[`${t}-track,${t}-tracks`]:{position:"absolute",transition:`background-color ${e.motionDurationMid}`},[`${t}-track`]:{backgroundColor:e.trackBg,borderRadius:e.borderRadiusXS},[`${t}-track-draggable`]:{boxSizing:"content-box",backgroundClip:"content-box",border:"solid rgba(0,0,0,0)"},"&:hover":{[`${t}-rail`]:{backgroundColor:e.railHoverBg},[`${t}-track`]:{backgroundColor:e.trackHoverBg},[`${t}-dot`]:{borderColor:s},[`${t}-handle::after`]:{boxShadow:`0 0 0 ${Z(e.handleLineWidth)} ${e.colorPrimaryBorderHover}`},[`${t}-dot-active`]:{borderColor:e.dotActiveBorderColor}},[`${t}-handle`]:{position:"absolute",width:e.handleSize,height:e.handleSize,outline:"none","&::before":{content:'""',position:"absolute",insetInlineStart:v(e.handleLineWidth).mul(-1).equal(),insetBlockStart:v(e.handleLineWidth).mul(-1).equal(),width:v(e.handleSize).add(v(e.handleLineWidth).mul(2)).equal(),height:v(e.handleSize).add(v(e.handleLineWidth).mul(2)).equal(),backgroundColor:"transparent"},"&::after":{content:'""',position:"absolute",insetBlockStart:0,insetInlineStart:0,width:e.handleSize,height:e.handleSize,backgroundColor:e.colorBgElevated,boxShadow:`0 0 0 ${Z(e.handleLineWidth)} ${e.handleColor}`,borderRadius:"50%",cursor:"pointer",transition:`
            inset-inline-start ${e.motionDurationMid},
            inset-block-start ${e.motionDurationMid},
            width ${e.motionDurationMid},
            height ${e.motionDurationMid},
            box-shadow ${e.motionDurationMid}
          `},"&:hover, &:active, &:focus":{"&::before":{insetInlineStart:v(e.handleSizeHover).sub(e.handleSize).div(2).add(e.handleLineWidthHover).mul(-1).equal(),insetBlockStart:v(e.handleSizeHover).sub(e.handleSize).div(2).add(e.handleLineWidthHover).mul(-1).equal(),width:v(e.handleSizeHover).add(v(e.handleLineWidthHover).mul(2)).equal(),height:v(e.handleSizeHover).add(v(e.handleLineWidthHover).mul(2)).equal()},"&::after":{boxShadow:`0 0 0 ${Z(e.handleLineWidthHover)} ${e.handleActiveColor}`,width:e.handleSizeHover,height:e.handleSizeHover,insetInlineStart:e.calc(e.handleSize).sub(e.handleSizeHover).div(2).equal(),insetBlockStart:e.calc(e.handleSize).sub(e.handleSizeHover).div(2).equal()}}},[`&-lock ${t}-handle`]:{"&::before, &::after":{transition:"none"}},[`${t}-mark`]:{position:"absolute",fontSize:e.fontSize},[`${t}-mark-text`]:{position:"absolute",display:"inline-block",color:e.colorTextDescription,textAlign:"center",wordBreak:"keep-all",cursor:"pointer",userSelect:"none","&-active":{color:e.colorText}},[`${t}-step`]:{position:"absolute",background:"transparent",pointerEvents:"none"},[`${t}-dot`]:{position:"absolute",width:l,height:l,backgroundColor:e.colorBgElevated,border:`${Z(e.handleLineWidth)} solid ${e.dotBorderColor}`,borderRadius:"50%",cursor:"pointer",transition:`border-color ${e.motionDurationSlow}`,pointerEvents:"auto","&-active":{borderColor:e.dotActiveBorderColor}},[`&${t}-disabled`]:{cursor:"not-allowed",[`${t}-rail`]:{backgroundColor:`${e.railBg} !important`},[`${t}-track`]:{backgroundColor:`${e.trackBgDisabled} !important`},[`
          ${t}-dot
        `]:{backgroundColor:e.colorBgElevated,borderColor:e.trackBgDisabled,boxShadow:"none",cursor:"not-allowed"},[`${t}-handle::after`]:{backgroundColor:e.colorBgElevated,cursor:"not-allowed",width:e.handleSize,height:e.handleSize,boxShadow:`0 0 0 ${Z(e.handleLineWidth)} ${$}`,insetInlineStart:0,insetBlockStart:0},[`
          ${t}-mark-text,
          ${t}-dot
        `]:{cursor:"not-allowed !important"}},[`&-tooltip ${r}-tooltip-inner`]:{minWidth:"unset"}})}},vt=(e,t)=>{const{componentCls:r,railSize:a,handleSize:l,dotSize:i,marginFull:g,calc:s}=e,$=t?"paddingBlock":"paddingInline",v=t?"width":"height",C=t?"height":"width",M=t?"insetBlockStart":"insetInlineStart",p=t?"top":"insetInlineStart",h=s(a).mul(3).sub(l).div(2).equal(),u=s(l).sub(a).div(2).equal(),c=t?{borderWidth:`${Z(u)} 0`,transform:`translateY(${Z(s(u).mul(-1).equal())})`}:{borderWidth:`0 ${Z(u)}`,transform:`translateX(${Z(e.calc(u).mul(-1).equal())})`};return{[$]:a,[C]:s(a).mul(3).equal(),[`${r}-rail`]:{[v]:"100%",[C]:a},[`${r}-track,${r}-tracks`]:{[C]:a},[`${r}-track-draggable`]:Object.assign({},c),[`${r}-handle`]:{[M]:h},[`${r}-mark`]:{insetInlineStart:0,top:0,[p]:s(a).mul(3).add(t?0:g).equal(),[v]:"100%"},[`${r}-step`]:{insetInlineStart:0,top:0,[p]:a,[v]:"100%",[C]:a},[`${r}-dot`]:{position:"absolute",[M]:s(a).sub(i).div(2).equal()}}},aa=e=>{const{componentCls:t,marginPartWithMark:r}=e;return{[`${t}-horizontal`]:Object.assign(Object.assign({},vt(e,!0)),{[`&${t}-with-marks`]:{marginBottom:r}})}},ra=e=>{const{componentCls:t}=e;return{[`${t}-vertical`]:Object.assign(Object.assign({},vt(e,!1)),{height:"100%"})}},na=e=>{const r=e.controlHeightLG/4,a=e.controlHeightSM/2,l=e.lineWidth+1,i=e.lineWidth+1*3;return{controlSize:r,railSize:4,handleSize:r,handleSizeHover:a,dotSize:8,handleLineWidth:l,handleLineWidthHover:i,railBg:e.colorFillTertiary,railHoverBg:e.colorFillSecondary,trackBg:e.colorPrimaryBorder,trackHoverBg:e.colorPrimaryBorderHover,handleColor:e.colorPrimaryBorder,handleActiveColor:e.colorPrimary,handleColorDisabled:new Nt(e.colorTextDisabled).onBackground(e.colorBgContainer).toHexShortString(),dotBorderColor:e.colorBorderSecondary,dotActiveBorderColor:e.colorPrimaryBorder,trackBgDisabled:e.colorBgContainerDisabled}},oa=Dt("Slider",e=>{const t=Lt(e,{marginPart:e.calc(e.controlHeight).sub(e.controlSize).div(2).equal(),marginFull:e.calc(e.controlSize).div(2).equal(),marginPartWithMark:e.calc(e.controlHeightLG).sub(e.controlSize).equal()});return[ta(t),aa(t),ra(t)]},na);function Ie(){const[e,t]=o.useState(!1),r=o.useRef(),a=()=>{Be.cancel(r.current)},l=i=>{a(),i?t(i):r.current=Be(()=>{t(i)})};return o.useEffect(()=>a,[]),[e,l]}var la=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};function ia(e,t){return e||e===null?e:t||t===null?t:r=>typeof r=="number"?r.toString():""}const sa=de.forwardRef((e,t)=>{const{prefixCls:r,range:a,className:l,rootClassName:i,style:g,disabled:s,tooltipPrefixCls:$,tipFormatter:v,tooltipVisible:C,getTooltipPopupContainer:M,tooltipPlacement:p,tooltip:h={},onChangeComplete:u}=e,c=la(e,["prefixCls","range","className","rootClassName","style","disabled","tooltipPrefixCls","tipFormatter","tooltipVisible","getTooltipPopupContainer","tooltipPlacement","tooltip","onChangeComplete"]),{vertical:d}=e,{direction:f,slider:n,getPrefixCls:b,getPopupContainer:E}=de.useContext(zt),S=de.useContext(_t),P=s??S,[x,X]=Ie(),[B,y]=Ie(),D=Object.assign({},h),{open:_,placement:Y,getPopupContainer:ae,prefixCls:w,formatter:F}=D,R=_??C,L=(x||B)&&R!==!1,k=ia(F,v),[ee,T]=Ie(),z=W=>{u?.(W),T(!1)},j=(W,J)=>W||(J?f==="rtl"?"left":"right":"top"),K=b("slider",r),[ne,oe,le]=oa(K),ge=Ce(l,n?.className,i,{[`${K}-rtl`]:f==="rtl",[`${K}-lock`]:ee},oe,le);f==="rtl"&&!c.vertical&&(c.reverse=!c.reverse);const[xe,He]=de.useMemo(()=>a?typeof a=="object"?[!0,a.draggableTrack]:[!0,!1]:[!1],[a]);de.useEffect(()=>{const W=()=>{Be(()=>{y(!1)},1)};return document.addEventListener("mouseup",W),()=>{document.removeEventListener("mouseup",W)}},[]);const Se=xe&&!R,ye=(W,J)=>{const{index:ie}=J,U=W.props,Re=Object.assign(Object.assign({},U),{onMouseEnter:A=>{var N;X(!0),(N=U.onMouseEnter)===null||N===void 0||N.call(U,A)},onMouseLeave:A=>{var N;X(!1),(N=U.onMouseLeave)===null||N===void 0||N.call(U,A)},onMouseDown:A=>{var N;y(!0),T(!0),(N=U.onMouseDown)===null||N===void 0||N.call(U,A)},onFocus:A=>{var N,te;y(!0),(N=c.onFocus)===null||N===void 0||N.call(c,A),(te=U.onFocus)===null||te===void 0||te.call(U,A)},onBlur:A=>{var N,te;y(!1),(N=c.onBlur)===null||N===void 0||N.call(c,A),(te=U.onBlur)===null||te===void 0||te.call(U,A)}}),Q=de.cloneElement(W,Re),me=(!!R||L)&&k!==null;return Se?Q:de.createElement(ct,Object.assign({},D,{prefixCls:b("tooltip",w??$),title:k?k(J.value):"",open:me,placement:j(Y??p,d),key:ie,overlayClassName:`${K}-tooltip`,getPopupContainer:ae||M||E}),Q)},pe=Se?(W,J)=>{const ie=de.cloneElement(W,{style:Object.assign(Object.assign({},W.props.style),{visibility:"hidden"})});return de.createElement(ct,Object.assign({},D,{prefixCls:b("tooltip",w??$),title:k?k(J.value):"",open:k!==null&&L,placement:j(Y??p,d),key:"tooltip",overlayClassName:`${K}-tooltip`,getPopupContainer:ae||M||E}),ie)}:void 0,Me=Object.assign(Object.assign({},n?.style),g);return ne(de.createElement(ea,Object.assign({},c,{step:c.step,range:xe,draggableTrack:He,className:ge,style:Me,disabled:P,ref:t,prefixCls:K,handleRender:ye,activeHandleRender:pe,onChangeComplete:z})))}),ca=({min:e=5,max:t=35,step:r,value:a=0,onChange:l})=>{const i=g=>{const s=g/100;l&&l(s)};return ze.jsxs("div",{className:"flex-1 flex items-center progress",children:[ze.jsxs("div",{className:"mr-[14px]",children:[e/100,"ETH"]})," ",ze.jsx(sa,{className:"flex-1 progress_slider",min:e,max:t,step:r,value:a*100,onChange:i,tipFormatter:g=>`${g}%`,tooltip:{open:!0}}),ze.jsxs("div",{className:"ml-[14px]",children:[t/100,"ETH"]})]})},ba=ca;export{ba as M,ma as R,ha as i};
