import{j as n}from"./rainbowkit-DswL0T-s.js";import{r as a}from"./react-zxVSF9uU.js";import{g as h}from"./index-QVCVkd2z.js";import{g as F,m as U,j as V,r as q,k as H,P as K,l as L,n as G,C as k,q as Y,s as X,T as Z,t as J,v as Q}from"./index-DgWyM-vV.js";import{K as ee,B as te}from"./button-D9XFjost.js";import{P as ne}from"./progress-CGtQ919a.js";import"./CheckCircleFilled-C04lhYEI.js";const y=e=>e?typeof e=="function"?e():e:null,oe=e=>{const{componentCls:o,popoverColor:s,titleMinWidth:t,fontWeightStrong:r,innerPadding:l,boxShadowSecondary:i,colorTextHeading:c,borderRadiusLG:d,zIndexPopup:u,titleMarginBottom:p,colorBgElevated:v,popoverBg:f,titleBorderBottom:x,innerContentPadding:j,titlePadding:g}=e;return[{[o]:Object.assign(Object.assign({},q(e)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:u,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text",transformOrigin:"var(--arrow-x, 50%) var(--arrow-y, 50%)","--antd-arrow-background-color":v,width:"max-content",maxWidth:"100vw","&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${o}-content`]:{position:"relative"},[`${o}-inner`]:{backgroundColor:f,backgroundClip:"padding-box",borderRadius:d,boxShadow:i,padding:l},[`${o}-title`]:{minWidth:t,marginBottom:p,color:c,fontWeight:r,borderBottom:x,padding:g},[`${o}-inner-content`]:{color:s,padding:j}})},H(e,"var(--antd-arrow-background-color)"),{[`${o}-pure`]:{position:"relative",maxWidth:"none",margin:e.sizePopupArrow,display:"inline-block",[`${o}-content`]:{display:"inline-block"}}}]},se=e=>{const{componentCls:o}=e;return{[o]:K.map(s=>{const t=e[`${s}6`];return{[`&${o}-${s}`]:{"--antd-arrow-background-color":t,[`${o}-inner`]:{backgroundColor:t},[`${o}-arrow`]:{background:"transparent"}}}})}},re=e=>{const{lineWidth:o,controlHeight:s,fontHeight:t,padding:r,wireframe:l,zIndexPopupBase:i,borderRadiusLG:c,marginXS:d,lineType:u,colorSplit:p,paddingSM:v}=e,f=s-t,x=f/2,j=f/2-o,g=r;return Object.assign(Object.assign(Object.assign({titleMinWidth:177,zIndexPopup:i+30},L(e)),G({contentRadius:c,limitVerticalRadius:!0})),{innerPadding:l?0:12,titleMarginBottom:l?0:d,titlePadding:l?`${x}px ${g}px ${j}px`:0,titleBorderBottom:l?`${o}px ${u} ${p}`:"none",innerContentPadding:l?`${v}px ${g}px`:0})},$=F("Popover",e=>{const{colorBgElevated:o,colorText:s}=e,t=U(e,{popoverBg:o,popoverColor:s});return[oe(t),se(t),V(t,"zoom-big")]},re,{resetStyle:!1,deprecatedTokens:[["width","titleMinWidth"],["minWidth","titleMinWidth"]]});var ae=function(e,o){var s={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(s[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)o.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(s[t[r]]=e[t[r]]);return s};const le=(e,o,s)=>!o&&!s?null:a.createElement(a.Fragment,null,o&&a.createElement("div",{className:`${e}-title`},y(o)),a.createElement("div",{className:`${e}-inner-content`},y(s))),ie=e=>{const{hashId:o,prefixCls:s,className:t,style:r,placement:l="top",title:i,content:c,children:d}=e;return a.createElement("div",{className:h(o,s,`${s}-pure`,`${s}-placement-${l}`,t),style:r},a.createElement("div",{className:`${s}-arrow`}),a.createElement(Y,Object.assign({},e,{className:o,prefixCls:s}),d||le(s,i,c)))},ce=e=>{const{prefixCls:o,className:s}=e,t=ae(e,["prefixCls","className"]),{getPrefixCls:r}=a.useContext(k),l=r("popover",o),[i,c,d]=$(l);return i(a.createElement(ie,Object.assign({},t,{prefixCls:l,hashId:c,className:h(s,d)})))},de=ce;var me=function(e,o){var s={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(s[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)o.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(s[t[r]]=e[t[r]]);return s};const pe=e=>{let{title:o,content:s,prefixCls:t}=e;return a.createElement(a.Fragment,null,o&&a.createElement("div",{className:`${t}-title`},y(o)),a.createElement("div",{className:`${t}-inner-content`},y(s)))},ue=a.forwardRef((e,o)=>{var s,t;const{prefixCls:r,title:l,content:i,overlayClassName:c,placement:d="top",trigger:u="hover",children:p,mouseEnterDelay:v=.1,mouseLeaveDelay:f=.1,onOpenChange:x,overlayStyle:j={}}=e,g=me(e,["prefixCls","title","content","overlayClassName","placement","trigger","children","mouseEnterDelay","mouseLeaveDelay","onOpenChange","overlayStyle"]),{getPrefixCls:P}=a.useContext(k),b=P("popover",r),[M,B,T]=$(b),I=P(),W=h(c,B,T),[D,R]=X(!1,{value:(s=e.open)!==null&&s!==void 0?s:e.visible,defaultValue:(t=e.defaultOpen)!==null&&t!==void 0?t:e.defaultVisible}),O=(m,w)=>{R(m,!0),x?.(m,w)},z=m=>{m.keyCode===ee.ESC&&O(!1,m)},A=m=>{O(m)};return M(a.createElement(Z,Object.assign({placement:d,trigger:u,mouseEnterDelay:v,mouseLeaveDelay:f,overlayStyle:j},g,{prefixCls:b,overlayClassName:W,ref:o,open:D,onOpenChange:A,overlay:l||i?a.createElement(pe,{prefixCls:b,title:l,content:i}):null,transitionName:J(I,"zoom-big",g.transitionName),"data-popover-inject":!0}),Q(p,{onKeyDown:m=>{var w,N;a.isValidElement(p)&&((N=p==null?void 0:(w=p.props).onKeyDown)===null||N===void 0||N.call(w,m)),z(m)}})))}),_=ue;_._InternalPanelDoNotUseOrYouWillBeFired=de;const E=_,C=({instant:e,onEnded:o})=>{const[s,t]=a.useState(0),r=a.useMemo(()=>{if(!e)return[];const l=Date.now(),i=e-l;if(i<=0)return o?.(!0),[0,0,0,0];const c=Math.floor(i%(1e3*60*60*24)/(1e3*60*60)),d=Math.floor(i%(1e3*60*60)/(1e3*60)),u=Math.floor(i%(1e3*60)/1e3);return[`${String(c).padStart(2,"0")}`,`${String(d).padStart(2,"0")}`,`${String(u).padStart(2,"0")}`]},[e,s,o]);return a.useEffect(()=>{const l=Date.now();if(e-l>0){o?.(!1);const c=setInterval(()=>{t(d=>d+1)},1e3);return()=>{clearInterval(c)}}},[e,o]),n.jsx("div",{className:"countdown",children:r.map((l,i)=>n.jsxs(a.Fragment,{children:[n.jsx("span",{className:"timefragments text-lg text-white font-404px",children:l}),i<r.length-1&&n.jsx("span",{className:"splitor text-lg text-white font-404px",children:":"})]},i))})};C.displayName=C.name;const S=C;function xe(){const[e,o]=a.useState("in-queue"),s=a.useMemo(()=>[{user:"dogekiller",link:"",followed:!1},{user:"MeMoo.ai",link:"",followed:!0}],[]),t=a.useMemo(()=>e==="in-queue",[e]),r=a.useMemo(()=>e==="imo",[e]),l=a.useMemo(()=>e==="launch"||e==="1st-claim"||e==="2st-claim",[e]);return n.jsxs("div",{className:"airdrop_claim px-5 pt-9 pb-5",children:[n.jsxs("div",{className:"head flex justify-between",children:[n.jsxs("h3",{className:"flex items-center gap-x-2 font-404px text-green text text-lg",children:["airdrop"," ",n.jsx(E,{children:n.jsx("img",{src:"/create/tip.png"})})]}),t&&n.jsx("span",{className:"endsin font-OCR text-white",children:"Ends in"})]}),n.jsxs("div",{className:"in_queue flex justify-between",children:[n.jsxs("p",{className:"text-deep-green text-xs whitespace-pre-wrap",children:["Complete tasks to be",`
`,"eligible for token airdrop."," "]}),t&&n.jsx(S,{instant:Date.now()+24*60*60*1e3})]}),n.jsx("ul",{className:"follow_list flex flex-col gap-y-2 mt-4",children:s.map(i=>n.jsxs("li",{className:"follow_list_item flex items-center w-full justify-between px-3 py-3.5",children:[n.jsxs("p",{className:h("leading-5 font-OCR whitespace-pre-wrap",{"text-white":t||r,"text-deep-green":l}),children:["Follow @dogekiller",`
`,"on twitter"]}),n.jsx("img",{className:h("w-5",{"cursor-pointer":!i.followed,"opacity-30":l}),src:`/create/icon-${i.followed?"followed":"outlink-media"}.png`})]},i.user))}),r&&n.jsxs("div",{className:"mt-5 airdrop-unlock flex flex-col items-center gap-y-2",children:[n.jsxs("div",{className:"flex gap-x-3.5",children:[n.jsx("img",{className:"w-5 object-contain",src:"/create/icon-airdrop-lock.png"}),n.jsx(S,{instant:Date.now()+24*60*60*1e3})]}),n.jsx("p",{className:"text-white font-OCR leading-20 text-sm",children:"Wait for your airdrop to unlock."})]}),l&&n.jsxs("div",{className:"mt-5 airdrop-unlock flex flex-col items-center gap-y-2",children:[n.jsx("img",{className:"w-5 object-contain",src:"/create/icon-airdrop-unlock.png"}),n.jsx("p",{className:"text-white font-404px leading-20 text-2xl",children:"2,000,000 WIF"})]}),n.jsx(te,{disabled:t||r,className:h("uppercase w-full claim_btn h-12 font–404px",{"mt-20":t,"mt-5":r||l}),children:"claim"})]})}function ge(){const[e,o]=a.useState("in-queue");return n.jsxs("div",{className:"status w-full flex flex-col",children:[n.jsxs("div",{className:"status_head flex items-center justify-between",children:[n.jsx("span",{children:"Status"}),n.jsxs("div",{className:"status_process flex items-center",children:[n.jsx("span",{children:e?.split("-").join(" ").toUpperCase()}),n.jsx("img",{src:"/create/icon-upcoming.png"})]})]}),n.jsxs("div",{className:"status_memo_score",children:[n.jsx("img",{className:"bot",src:"/create/icon-bot.png"}),n.jsxs("div",{className:"status_process_detail flex flex-col items-start",children:[n.jsxs("h3",{className:"flex items-center gap-x-1",children:["memo score"," ",n.jsx(E,{children:n.jsx("img",{className:"mb-1",src:"/create/tip.png"})})]}),n.jsxs("div",{className:"flex items-end mt-3 mb-4",children:[n.jsx("span",{className:"numerator",children:"70"}),n.jsx("span",{className:"denominator",children:"/100"})]}),n.jsx(ne,{className:"status_memo_score_bar",showInfo:!1,percent:70})]})]}),n.jsxs("p",{className:"mt-3 consider",children:["Might consider",`
`,"adding it to my wishlist."]}),n.jsxs("div",{className:"mt-4 intend flex justify-between",children:[n.jsxs("p",{children:["MeMoo Score is an indicative metric.",`
`,"Users are advised to DYOR."]}),n.jsx("img",{className:"outlink",src:"/create/icon-outlink.png"})]})]})}function Ne(){return n.jsxs("div",{className:"airdrop",children:[n.jsxs("div",{className:"airdrop_left flex flex-col gap-y-3.5",children:[n.jsx(ge,{}),n.jsx(xe,{})]}),n.jsx("div",{className:"airdrop_right flex flex-col",children:"22"})]})}export{Ne as default};
