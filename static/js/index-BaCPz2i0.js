import{r as o}from"./react-DYnGVO3U.js";import{u as L,g as X,K as j,m as B,o as H,c as T}from"./BaseInput-CjXVCr5O.js";import{C as G,a as I,r as R,c as w}from"./index-Bx6Eal3s.js";function _(e){return t=>o.createElement(G,{theme:{token:{motion:!1,zIndexPopupBase:0}}},o.createElement(e,Object.assign({},t)))}const ne=(e,t,i,n)=>_(m=>{const{prefixCls:y,style:S}=m,h=o.useRef(null),[g,c]=o.useState(0),[p,$]=o.useState(0),[x,a]=L(!1,{value:m.open}),{getPrefixCls:z}=o.useContext(I),f=z(t||"select",y);o.useEffect(()=>{if(a(!0),typeof ResizeObserver<"u"){const v=new ResizeObserver(d=>{const l=d[0].target;c(l.offsetHeight+8),$(l.offsetWidth)}),b=setInterval(()=>{var d;const l=i?`.${i(f)}`:`.${f}-dropdown`,E=(d=h.current)===null||d===void 0?void 0:d.querySelector(l);E&&(clearInterval(b),v.observe(E))},10);return()=>{clearInterval(b),v.disconnect()}}},[]);let u=Object.assign(Object.assign({},m),{style:Object.assign(Object.assign({},S),{margin:0}),open:x,visible:x,getPopupContainer:()=>h.current});n&&(u=n(u));const r={paddingBottom:g,position:"relative",minWidth:p};return o.createElement("div",{ref:h,style:r},o.createElement(e,Object.assign({},u)))});function W(e,t,i){var n=i||{},s=n.noTrailing,m=s===void 0?!1:s,y=n.noLeading,S=y===void 0?!1:y,h=n.debounceMode,g=h===void 0?void 0:h,c,p=!1,$=0;function x(){c&&clearTimeout(c)}function a(f){var u=f||{},r=u.upcomingOnly,v=r===void 0?!1:r;x(),p=!v}function z(){for(var f=arguments.length,u=new Array(f),r=0;r<f;r++)u[r]=arguments[r];var v=this,b=Date.now()-$;if(p)return;function d(){$=Date.now(),t.apply(v,u)}function l(){c=void 0}!S&&g&&!c&&d(),x(),g===void 0&&b>e?S?($=Date.now(),m||(c=setTimeout(g?l:d,e))):d():m!==!0&&(c=setTimeout(g?l:d,g===void 0?e-b:e))}return z.cancel=a,z}function V(e,t,i){var n={},s=n.atBegin,m=s===void 0?!1:s;return W(e,t,{debounceMode:m!==!1})}const A=new j("antSpinMove",{to:{opacity:1}}),F=new j("antRotate",{to:{transform:"rotate(405deg)"}}),K=e=>{const{componentCls:t,calc:i}=e;return{[`${t}`]:Object.assign(Object.assign({},R(e)),{position:"absolute",display:"none",color:e.colorPrimary,fontSize:0,textAlign:"center",verticalAlign:"middle",opacity:0,transition:`transform ${e.motionDurationSlow} ${e.motionEaseInOutCirc}`,"&-spinning":{position:"static",display:"inline-block",opacity:1},[`${t}-text`]:{fontSize:e.fontSize,paddingTop:i(i(e.dotSize).sub(e.fontSize)).div(2).add(2).equal()},"&-fullscreen":{position:"fixed",width:"100vw",height:"100vh",backgroundColor:e.colorBgMask,zIndex:e.zIndexPopupBase,inset:0,display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center",opacity:0,visibility:"hidden",transition:`all ${e.motionDurationMid}`,"&-show":{opacity:1,visibility:"visible"},[`${t}-dot ${t}-dot-item`]:{backgroundColor:e.colorWhite},[`${t}-text`]:{color:e.colorTextLightSolid}},"&-nested-loading":{position:"relative",[`> div > ${t}`]:{position:"absolute",top:0,insetInlineStart:0,zIndex:4,display:"block",width:"100%",height:"100%",maxHeight:e.contentHeight,[`${t}-dot`]:{position:"absolute",top:"50%",insetInlineStart:"50%",margin:i(e.dotSize).mul(-1).div(2).equal()},[`${t}-text`]:{position:"absolute",top:"50%",width:"100%",textShadow:`0 1px 2px ${e.colorBgContainer}`},[`&${t}-show-text ${t}-dot`]:{marginTop:i(e.dotSize).div(2).mul(-1).sub(10).equal()},"&-sm":{[`${t}-dot`]:{margin:i(e.dotSizeSM).mul(-1).div(2).equal()},[`${t}-text`]:{paddingTop:i(i(e.dotSizeSM).sub(e.fontSize)).div(2).add(2).equal()},[`&${t}-show-text ${t}-dot`]:{marginTop:i(e.dotSizeSM).div(2).mul(-1).sub(10).equal()}},"&-lg":{[`${t}-dot`]:{margin:i(e.dotSizeLG).mul(-1).div(2).equal()},[`${t}-text`]:{paddingTop:i(i(e.dotSizeLG).sub(e.fontSize)).div(2).add(2).equal()},[`&${t}-show-text ${t}-dot`]:{marginTop:i(e.dotSizeLG).div(2).mul(-1).sub(10).equal()}}},[`${t}-container`]:{position:"relative",transition:`opacity ${e.motionDurationSlow}`,"&::after":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,zIndex:10,width:"100%",height:"100%",background:e.colorBgContainer,opacity:0,transition:`all ${e.motionDurationSlow}`,content:'""',pointerEvents:"none"}},[`${t}-blur`]:{clear:"both",opacity:.5,userSelect:"none",pointerEvents:"none","&::after":{opacity:.4,pointerEvents:"auto"}}},"&-tip":{color:e.spinDotDefault},[`${t}-dot`]:{position:"relative",display:"inline-block",fontSize:e.dotSize,width:"1em",height:"1em","&-item":{position:"absolute",display:"block",width:i(e.dotSize).sub(i(e.marginXXS).div(2)).div(2).equal(),height:i(e.dotSize).sub(i(e.marginXXS).div(2)).div(2).equal(),backgroundColor:e.colorPrimary,borderRadius:"100%",transform:"scale(0.75)",transformOrigin:"50% 50%",opacity:.3,animationName:A,animationDuration:"1s",animationIterationCount:"infinite",animationTimingFunction:"linear",animationDirection:"alternate","&:nth-child(1)":{top:0,insetInlineStart:0,animationDelay:"0s"},"&:nth-child(2)":{top:0,insetInlineEnd:0,animationDelay:"0.4s"},"&:nth-child(3)":{insetInlineEnd:0,bottom:0,animationDelay:"0.8s"},"&:nth-child(4)":{bottom:0,insetInlineStart:0,animationDelay:"1.2s"}},"&-spin":{transform:"rotate(45deg)",animationName:F,animationDuration:"1.2s",animationIterationCount:"infinite",animationTimingFunction:"linear"}},[`&-sm ${t}-dot`]:{fontSize:e.dotSizeSM,i:{width:i(i(e.dotSizeSM).sub(i(e.marginXXS).div(2))).div(2).equal(),height:i(i(e.dotSizeSM).sub(i(e.marginXXS).div(2))).div(2).equal()}},[`&-lg ${t}-dot`]:{fontSize:e.dotSizeLG,i:{width:i(i(e.dotSizeLG).sub(e.marginXXS)).div(2).equal(),height:i(i(e.dotSizeLG).sub(e.marginXXS)).div(2).equal()}},[`&${t}-show-text ${t}-text`]:{display:"block"}})}},J=e=>{const{controlHeightLG:t,controlHeight:i}=e;return{contentHeight:400,dotSize:t/2,dotSizeSM:t*.35,dotSizeLG:i}},Q=X("Spin",e=>{const t=B(e,{spinDotDefault:e.colorTextDescription});return[K(t)]},J);var U=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(i[n[s]]=e[n[s]]);return i};let N=null;function Y(e,t){const{indicator:i}=t,n=`${e}-dot`;return i===null?null:o.isValidElement(i)?T(i,{className:w(i.props.className,n)}):o.isValidElement(N)?T(N,{className:w(N.props.className,n)}):o.createElement("span",{className:w(n,`${e}-dot-spin`)},o.createElement("i",{className:`${e}-dot-item`,key:1}),o.createElement("i",{className:`${e}-dot-item`,key:2}),o.createElement("i",{className:`${e}-dot-item`,key:3}),o.createElement("i",{className:`${e}-dot-item`,key:4}))}function Z(e,t){return!!e&&!!t&&!isNaN(Number(t))}const k=e=>{const{prefixCls:t,spinning:i=!0,delay:n=0,className:s,rootClassName:m,size:y="default",tip:S,wrapperClassName:h,style:g,children:c,fullscreen:p=!1}=e,$=U(e,["prefixCls","spinning","delay","className","rootClassName","size","tip","wrapperClassName","style","children","fullscreen"]),{getPrefixCls:x}=o.useContext(I),a=x("spin",t),[z,f,u]=Q(a),[r,v]=o.useState(()=>i&&!Z(i,n));o.useEffect(()=>{if(i){const C=V(n,()=>{v(!0)});return C(),()=>{var O;(O=C?.cancel)===null||O===void 0||O.call(C)}}v(!1)},[n,i]);const b=o.useMemo(()=>typeof c<"u"&&!p,[c,p]),{direction:d,spin:l}=o.useContext(I),E=w(a,l?.className,{[`${a}-sm`]:y==="small",[`${a}-lg`]:y==="large",[`${a}-spinning`]:r,[`${a}-show-text`]:!!S,[`${a}-fullscreen`]:p,[`${a}-fullscreen-show`]:p&&r,[`${a}-rtl`]:d==="rtl"},s,m,f,u),M=w(`${a}-container`,{[`${a}-blur`]:r}),P=H($,["indicator"]),q=Object.assign(Object.assign({},l?.style),g),D=o.createElement("div",Object.assign({},P,{style:q,className:E,"aria-live":"polite","aria-busy":r}),Y(a,e),S&&(b||p)?o.createElement("div",{className:`${a}-text`},S):null);return z(b?o.createElement("div",Object.assign({},P,{className:w(`${a}-nested-loading`,h,f,u)}),r&&o.createElement("div",{key:"loading"},D),o.createElement("div",{className:M,key:"container"},c)):D)};k.setDefaultIndicator=e=>{N=e};export{k as S,ne as g,_ as w};