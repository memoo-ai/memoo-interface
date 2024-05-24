import{j as e}from"./rainbowkit-CQ-COd3-.js";import{r as l}from"./react-zxVSF9uU.js";import{g as f}from"./index-uLOhJzvE.js";import{g as K,m as Y,j as G,r as X,k as Z,P as J,l as Q,n as ee,C as B,q as te,s as se,T as ae,t as ne,v as le}from"./index-DwQrSyFa.js";import{K as re,B as D}from"./button-pGbQK1q8.js";import{P as ie}from"./progress-CeepxH--.js";import{a as oe}from"./index-BjFFA7oe.js";import"./CheckCircleFilled-G2eN40t9.js";import"./index-BaVSXGdv.js";const N=t=>t?typeof t=="function"?t():t:null,ce=t=>{const{componentCls:a,popoverColor:n,titleMinWidth:s,fontWeightStrong:r,innerPadding:i,boxShadowSecondary:x,colorTextHeading:c,borderRadiusLG:o,zIndexPopup:p,titleMarginBottom:d,colorBgElevated:h,popoverBg:u,titleBorderBottom:g,innerContentPadding:v,titlePadding:j}=t;return[{[a]:Object.assign(Object.assign({},X(t)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:p,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text",transformOrigin:"var(--arrow-x, 50%) var(--arrow-y, 50%)","--antd-arrow-background-color":h,width:"max-content",maxWidth:"100vw","&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${a}-content`]:{position:"relative"},[`${a}-inner`]:{backgroundColor:u,backgroundClip:"padding-box",borderRadius:o,boxShadow:x,padding:i},[`${a}-title`]:{minWidth:s,marginBottom:d,color:c,fontWeight:r,borderBottom:g,padding:j},[`${a}-inner-content`]:{color:n,padding:v}})},Z(t,"var(--antd-arrow-background-color)"),{[`${a}-pure`]:{position:"relative",maxWidth:"none",margin:t.sizePopupArrow,display:"inline-block",[`${a}-content`]:{display:"inline-block"}}}]},de=t=>{const{componentCls:a}=t;return{[a]:J.map(n=>{const s=t[`${n}6`];return{[`&${a}-${n}`]:{"--antd-arrow-background-color":s,[`${a}-inner`]:{backgroundColor:s},[`${a}-arrow`]:{background:"transparent"}}}})}},xe=t=>{const{lineWidth:a,controlHeight:n,fontHeight:s,padding:r,wireframe:i,zIndexPopupBase:x,borderRadiusLG:c,marginXS:o,lineType:p,colorSplit:d,paddingSM:h}=t,u=n-s,g=u/2,v=u/2-a,j=r;return Object.assign(Object.assign(Object.assign({titleMinWidth:177,zIndexPopup:x+30},Q(t)),ee({contentRadius:c,limitVerticalRadius:!0})),{innerPadding:i?0:12,titleMarginBottom:i?0:o,titlePadding:i?`${g}px ${j}px ${v}px`:0,titleBorderBottom:i?`${a}px ${p} ${d}`:"none",innerContentPadding:i?`${h}px ${j}px`:0})},T=K("Popover",t=>{const{colorBgElevated:a,colorText:n}=t,s=Y(t,{popoverBg:a,popoverColor:n});return[ce(s),de(s),G(s,"zoom-big")]},xe,{resetStyle:!1,deprecatedTokens:[["width","titleMinWidth"],["minWidth","titleMinWidth"]]});var me=function(t,a){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&a.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)a.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n};const pe=(t,a,n)=>!a&&!n?null:l.createElement(l.Fragment,null,a&&l.createElement("div",{className:`${t}-title`},N(a)),l.createElement("div",{className:`${t}-inner-content`},N(n))),ue=t=>{const{hashId:a,prefixCls:n,className:s,style:r,placement:i="top",title:x,content:c,children:o}=t;return l.createElement("div",{className:f(a,n,`${n}-pure`,`${n}-placement-${i}`,s),style:r},l.createElement("div",{className:`${n}-arrow`}),l.createElement(te,Object.assign({},t,{className:a,prefixCls:n}),o||pe(n,x,c)))},fe=t=>{const{prefixCls:a,className:n}=t,s=me(t,["prefixCls","className"]),{getPrefixCls:r}=l.useContext(B),i=r("popover",a),[x,c,o]=T(i);return x(l.createElement(ue,Object.assign({},s,{prefixCls:i,hashId:c,className:f(n,o)})))},he=fe;var ge=function(t,a){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&a.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)a.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n};const je=t=>{let{title:a,content:n,prefixCls:s}=t;return l.createElement(l.Fragment,null,a&&l.createElement("div",{className:`${s}-title`},N(a)),l.createElement("div",{className:`${s}-inner-content`},N(n)))},ve=l.forwardRef((t,a)=>{var n,s;const{prefixCls:r,title:i,content:x,overlayClassName:c,placement:o="top",trigger:p="hover",children:d,mouseEnterDelay:h=.1,mouseLeaveDelay:u=.1,onOpenChange:g,overlayStyle:v={}}=t,j=ge(t,["prefixCls","title","content","overlayClassName","placement","trigger","children","mouseEnterDelay","mouseLeaveDelay","onOpenChange","overlayStyle"]),{getPrefixCls:M}=l.useContext(B),w=M("popover",r),[A,V,W]=T(w),H=M(),z=f(c,V,W),[F,L]=se(!1,{value:(n=t.open)!==null&&n!==void 0?n:t.visible,defaultValue:(s=t.defaultOpen)!==null&&s!==void 0?s:t.defaultVisible}),R=(m,y)=>{L(m,!0),g?.(m,y)},U=m=>{m.keyCode===re.ESC&&R(!1,m)},q=m=>{R(m)};return A(l.createElement(ae,Object.assign({placement:o,trigger:p,mouseEnterDelay:h,mouseLeaveDelay:u,overlayStyle:v},j,{prefixCls:w,overlayClassName:z,ref:a,open:F,onOpenChange:q,overlay:i||x?l.createElement(je,{prefixCls:w,title:i,content:x}):null,transitionName:ne(H,"zoom-big",j.transitionName),"data-popover-inject":!0}),le(d,{onKeyDown:m=>{var y,C;l.isValidElement(d)&&((C=d==null?void 0:(y=d.props).onKeyDown)===null||C===void 0||C.call(y,m)),U(m)}})))}),I=ve;I._InternalPanelDoNotUseOrYouWillBeFired=he;const b=I,k=({instant:t,onEnded:a,format:n,className:s})=>{const[r,i]=l.useState(0),x=l.useMemo(()=>{if(!t)return[];const c=Date.now(),o=t-c;if(o<=0)return a?.(!0),[0,0,0,0];const p=Math.floor(o/(1e3*60*60*24)),d=Math.floor(o%(1e3*60*60*24)/(1e3*60*60)),h=Math.floor(o%(1e3*60*60)/(1e3*60)),u=Math.floor(o%(1e3*60)/1e3);return n?n([p,d,h,u]):[`${String(d).padStart(2,"0")}`,`${String(h).padStart(2,"0")}`,`${String(u).padStart(2,"0")}`]},[t,r,a]);return l.useEffect(()=>{const c=Date.now();if(t-c>0){a?.(!1);const p=setInterval(()=>{i(d=>d+1)},1e3);return()=>{clearInterval(p)}}},[t,a]),e.jsx("div",{className:f("countdown",s),children:x.map((c,o)=>e.jsxs(l.Fragment,{children:[e.jsx("span",{className:"timefragments text-lg text-white font-404px",children:c}),o<x.length-1&&e.jsx("span",{className:"splitor text-lg text-white font-404px",children:":"})]},o))})};k.displayName=k.name;const O=k;function ye(){const{stage:t}=l.useContext(E),a=l.useMemo(()=>[{user:"dogekiller",link:"",followed:!1},{user:"MeMoo.ai",link:"",followed:!0}],[]),n=l.useMemo(()=>t==="in-queue",[t]),s=l.useMemo(()=>t==="imo",[t]),r=l.useMemo(()=>t==="launch"||t==="1st-claim"||t==="2st-claim",[t]);return e.jsxs("div",{className:"airdrop_claim px-5 pt-9 pb-5",children:[e.jsxs("div",{className:"head flex justify-between",children:[e.jsxs("h3",{className:"flex items-center gap-x-2 font-404px text-green text text-lg",children:["airdrop"," ",e.jsx(b,{children:e.jsx("img",{src:"/create/tip.png"})})]}),n&&e.jsx("span",{className:"endsin font-OCR text-white",children:"Ends in"})]}),e.jsxs("div",{className:"in_queue flex justify-between",children:[e.jsxs("p",{className:"text-deep-green text-xs whitespace-pre-wrap",children:["Complete tasks to be",`
`,"eligible for token airdrop."," "]}),n&&e.jsx(O,{instant:Date.now()+24*60*60*1e3})]}),e.jsx("ul",{className:"follow_list flex flex-col gap-y-2 mt-4",children:a.map(i=>e.jsxs("li",{className:"follow_list_item flex items-center w-full justify-between px-3 py-3.5",children:[e.jsxs("p",{className:f("leading-5 font-OCR whitespace-pre-wrap",{"text-white":n||s,"text-deep-green":r}),children:["Follow @dogekiller",`
`,"on twitter"]}),e.jsx("img",{className:f("w-5",{"cursor-pointer":!i.followed,"opacity-30":r}),src:`/create/icon-${i.followed?"followed":"outlink-media"}.png`})]},i.user))}),s&&e.jsxs("div",{className:"mt-5 airdrop-unlock flex flex-col items-center gap-y-2",children:[e.jsxs("div",{className:"flex gap-x-3.5",children:[e.jsx("img",{className:"w-5 object-contain",src:"/create/icon-airdrop-lock.png"}),e.jsx(O,{instant:Date.now()+24*60*60*1e3})]}),e.jsx("p",{className:"text-white font-OCR leading-20 text-sm",children:"Wait for your airdrop to unlock."})]}),r&&e.jsxs("div",{className:"mt-5 airdrop-unlock flex flex-col items-center gap-y-2",children:[e.jsx("img",{className:"w-5 object-contain",src:"/create/icon-airdrop-unlock.png"}),e.jsx("p",{className:"text-white font-404px leading-20 text-2xl",children:"2,000,000 WIF"})]}),e.jsx(D,{disabled:n||s,className:f("uppercase w-full claim_btn h-12 font–404px",{"mt-20":n,"mt-5":s||r}),children:"claim"})]})}const P=()=>{const t=l.useMemo(()=>[{key:"Price",value:"$0.00003",tip:null},{key:"Total Raised",value:"1.82/2.3 ETH",tip:"1"},{key:"Contributed",value:"0.066 ETH",tip:"1"}],[]);return e.jsxs("div",{className:"imo_participate px-5 pt-9 pb-5",children:[e.jsx("div",{className:"head",children:e.jsx("h3",{className:"flex items-center gap-x-2 font-404px text-green text text-lg uppercase",children:"imo"})}),e.jsxs("div",{className:"content flex flex-col items-center",children:[e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("span",{className:"font-OCR text-sm text-white",children:"Ends in"}),e.jsx(O,{className:"imo_countdown flex gap-x-2 mt-5",format:([a,n,s,r])=>[e.jsxs("div",{children:[e.jsx("time",{children:a}),e.jsx("span",{children:"D"})]},"days"),e.jsxs("div",{children:[e.jsx("time",{children:n}),e.jsx("span",{children:"H"})]},"hours"),e.jsxs("div",{children:[e.jsx("time",{children:s}),e.jsx("span",{children:"H"})]},"minutes"),e.jsxs("div",{children:[e.jsx("time",{children:r}),e.jsx("span",{children:"S"})]},"seconds")],instant:Date.now()+24*60*60*1e3}),e.jsx("p",{className:"mt-3 text-white font-OCR leading-5 text-sm",children:"Fair Distribution Policy"}),e.jsx("p",{className:"text-deep-green text-center font-OCR leading-14 text-xs",children:"Wallet capped at 1% token supply per address."})]}),e.jsx("ul",{className:"mt-6 params_list flex flex-col gap-y-6 w-full",children:t.map(a=>e.jsxs("li",{className:"flex justify-between",children:[e.jsxs("label",{className:"text-white text-xs font-OCR leading-4 flex items-center gap-x-1.5",children:[a.key," ",a.tip&&e.jsx(b,{content:a.tip,children:e.jsx("img",{src:"/public/create/tip.png"})})]}),e.jsx("var",{className:"text-white text-lg font-OCR leading-5",children:a.value})]},a.key))}),e.jsx(D,{className:f("mt-5 uppercase w-full participate_btn h-12 font–404px",{}),children:"participate"})]})]})};P.displayName=P.name;const Ne=P;function be(){const[t,a]=l.useState("in-queue");return e.jsxs("div",{className:"status w-full flex flex-col",children:[e.jsxs("div",{className:"status_head flex items-center justify-between",children:[e.jsx("span",{children:"Status"}),e.jsxs("div",{className:"status_process flex items-center",children:[e.jsx("span",{children:t?.split("-").join(" ").toUpperCase()}),e.jsx("img",{src:"/create/icon-upcoming.png"})]})]}),e.jsxs("div",{className:"status_memo_score",children:[e.jsx("img",{className:"bot",src:"/create/icon-bot.png"}),e.jsxs("div",{className:"status_process_detail flex flex-col items-start",children:[e.jsxs("h3",{className:"flex items-center gap-x-1",children:["memo score"," ",e.jsx(b,{children:e.jsx("img",{className:"mb-1",src:"/create/tip.png"})})]}),e.jsxs("div",{className:"flex items-end mt-3 mb-4",children:[e.jsx("span",{className:"numerator",children:"70"}),e.jsx("span",{className:"denominator",children:"/100"})]}),e.jsx(ie,{className:"status_memo_score_bar",showInfo:!1,percent:70})]})]}),e.jsxs("p",{className:"mt-3 consider",children:["Might consider",`
`,"adding it to my wishlist."]}),e.jsxs("div",{className:"mt-4 intend flex justify-between",children:[e.jsxs("p",{children:["MeMoo Score is an indicative metric.",`
`,"Users are advised to DYOR."]}),e.jsx("img",{className:"outlink",src:"/create/icon-outlink.png"})]})]})}const $=()=>{const t=l.useMemo(()=>[{key:"Market Cap",value:"$973,672.8",tip:null},{key:"Price",value:"$0.00003",tip:null},{key:"Total Raised",value:"1.82/2.3 ETH",tip:"1"},{key:"Contributed",value:"0.066 ETH",tip:"1"}],[]);return e.jsxs("div",{className:"pubsale px-5 pt-9 pb-5",children:[e.jsx("div",{className:"head flex justify-center",children:e.jsx("img",{src:"/create/img-pubsale.png"})}),e.jsxs("div",{className:"content flex flex-col items-center",children:[e.jsx("ul",{className:"mt-6 params_list flex flex-col gap-y-6 w-full",children:t.map(a=>e.jsxs("li",{className:"flex justify-between",children:[e.jsxs("label",{className:"text-white text-xs font-OCR leading-4 flex items-center gap-x-1.5",children:["Price"," ",a.tip&&e.jsx(b,{content:a.tip,children:e.jsx("img",{src:"/public/create/tip.png"})})]}),e.jsx("var",{className:"text-white text-lg font-OCR leading-5",children:a.value})]},a.key))}),e.jsx(D,{className:f("mt-5 uppercase w-full pubsale_btn h-12 font–404px",{}),children:"Buy"})]})]})};$.displayName=$.name;const we=$,S=()=>{const{stage:t}=l.useContext(E),a=l.useMemo(()=>t==="launch"?[{key:"IDO Date",value:"06 Apr 2024"},{key:"LP Lock",value:"UNCX",formatValue:s=>e.jsxs("div",{className:"flex items-center gap-x-2.5",children:[e.jsxs("div",{className:"flex ido_params_token items-center py-1.5 px-5",children:[e.jsx("img",{src:"/create/token-demo.png"}),e.jsx("span",{className:"font-OCR text-white text-sm",children:s})]}),e.jsx("span",{className:"text-white text-lg font-OCR leading-5",children:"Yes"})]})},{key:"Liquidity",value:"$21,000"},{key:"FDV",value:"$20,000"},{key:"24h Trading Vol",value:"$20,000"},{key:"1h",value:"+7%",formatValue:s=>e.jsx("span",{className:"text-green font-404px",children:s})},{key:"24h",value:"+86%",formatValue:s=>e.jsx("span",{className:"text-green font-404px",children:s})},{key:"Max Supply",value:"10,000,000,000"},{key:"All Time High",value:"$20,000",formatValue:s=>e.jsxs("div",{className:"flex flex-col items-end",children:[e.jsx("span",{className:"text-white text-lg font-OCR leading-5",children:s}),e.jsxs("div",{className:"flex items-center gap-x-2",children:[e.jsx("time",{className:"font-OCR text-xs text-bluish-purple-light",children:"20 Mar 2024"}),e.jsx("span",{className:"font-OCR text-xs text-red",children:"-42.9%"})]})]})},{key:"All Time Low",value:"$20,000",formatValue:s=>e.jsxs("div",{className:"flex flex-col items-end",children:[e.jsx("span",{className:"text-white text-lg font-OCR leading-5",children:s}),e.jsxs("div",{className:"flex items-center gap-x-2",children:[e.jsx("time",{className:"font-OCR text-xs text-bluish-purple-light",children:"20 Mar 2024"}),e.jsx("span",{className:"font-OCR text-xs text-green",children:"+42.9%"})]})]})},{key:"Holders",value:"12,456"}]:[{key:"IDO Date",value:"06 Apr 2024"},{key:"FDV",value:"$20,000"},{key:"Max Supply",value:"10,000,000,000"}],[t]),n=l.useMemo(()=>t==="launch"?[{key:"0x243073639B7189977E5DbA7edE1b5f5D18531418",value:"7.09%"},{key:"0x243073639B7189977E5DbA7edE1b5f5D18531428",value:"7.09%"},{key:"0x243073639B7189977E5DbA7edE1b5f5D18531438",value:"7.09%"},{key:"0x243073639B7189977E5DbA7edE1b5f5D18531448",value:"7.09%"},{key:"0x243073639B7189977E5DbA7edE1b5f5D18531458",value:"7.09%"},{key:"0x243073639B7189977E5DbA7edE1b5f5D18531468",value:"7.09%"}]:[],[t]);return e.jsxs("div",{className:"ido_detail px-5 pt-9 pb-5",children:[e.jsx("ul",{className:"data_list flex flex-col gap-y-6 w-full",children:a.map(s=>e.jsxs("li",{className:"flex justify-between",children:[e.jsx("label",{className:"text-bluish-purple-light text-sm font-OCR leading-4 flex items-center gap-x-1.5",children:s.key}),s.formatValue?s.formatValue(s.value):e.jsx("var",{className:"text-white text-lg font-OCR leading-5",children:s.value})]},s.key))}),e.jsx("div",{className:"divider h-px w-full bg-bluish-purple my-8"}),n.length>0&&e.jsxs("div",{className:"top10_holders",children:[e.jsx("h3",{className:"font-404px text-lg leading-5 text-green",children:"Top 10 Token Holders"}),e.jsx("ul",{className:"holders_list mt-5 flex flex-col",children:n.map((s,r)=>e.jsxs("li",{className:"flex items-center justify-between",children:[e.jsxs("label",{className:"text-sm font-OCR text-white",children:[r+1,".",oe(s.key)]}),e.jsx("var",{className:"text-sm font-OCR text-white",children:s.value})]},s.key))})]})]})};S.displayName=S.name;const Ce=S,_=()=>e.jsxs("div",{className:"banner w-full relative",children:[e.jsx("img",{className:"w-full",src:"/public/create/img-banner-demo.png"}),e.jsx("img",{className:"w-30 absolute bottom-0 left-5 translate-y-1/2",src:"/public/create/img-logo-demo.png"})]});_.displayName=_.name;const ke=_,E=l.createContext({stage:"in-queue"});function Be(){const[t,a]=l.useState("launch"),n=l.useMemo(()=>({stage:t}),[t]);return e.jsxs("div",{className:"airdrop pb-16",children:[e.jsx("div",{className:"airdrop_left flex flex-col gap-y-3.5",children:e.jsxs(E.Provider,{value:n,children:[e.jsx(be,{}),t==="launch"&&e.jsx(we,{}),t==="imo"&&e.jsx(Ne,{}),e.jsx(ye,{}),e.jsx(Ce,{})]})}),e.jsx("div",{className:"airdrop_right flex flex-col",children:e.jsx(ke,{})})]})}export{E as AirdropContext,Be as default};
