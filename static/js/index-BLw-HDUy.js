import{j as e}from"./rainbowkit-D4aRuV4-.js";import{r as n}from"./react-zxVSF9uU.js";import{r as X,C as T,h as m}from"./index-CAW4ymrh.js";import{g as Y,m as Z,c as J,d as Q,P as ee,e as te,f as se,h as ae,u as le,T as ne,j as ie,k as re}from"./index-P7Cq4Bp5.js";import{K as ce,B as w}from"./button-BQnGQRWV.js";import{P as oe}from"./progress-CYsh6qV_.js";import{a as xe}from"./index-xTJJvxmG.js";import"./CheckCircleFilled-Bblnz8ZR.js";import"./index-BaVSXGdv.js";const b=s=>s?typeof s=="function"?s():s:null,de=s=>{const{componentCls:l,popoverColor:a,titleMinWidth:t,fontWeightStrong:i,innerPadding:r,boxShadowSecondary:d,colorTextHeading:o,borderRadiusLG:c,zIndexPopup:u,titleMarginBottom:x,colorBgElevated:h,popoverBg:f,titleBorderBottom:g,innerContentPadding:v,titlePadding:j}=s;return[{[l]:Object.assign(Object.assign({},X(s)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:u,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text",transformOrigin:"var(--arrow-x, 50%) var(--arrow-y, 50%)","--antd-arrow-background-color":h,width:"max-content",maxWidth:"100vw","&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${l}-content`]:{position:"relative"},[`${l}-inner`]:{backgroundColor:f,backgroundClip:"padding-box",borderRadius:c,boxShadow:d,padding:r},[`${l}-title`]:{minWidth:t,marginBottom:x,color:o,fontWeight:i,borderBottom:g,padding:j},[`${l}-inner-content`]:{color:a,padding:v}})},Q(s,"var(--antd-arrow-background-color)"),{[`${l}-pure`]:{position:"relative",maxWidth:"none",margin:s.sizePopupArrow,display:"inline-block",[`${l}-content`]:{display:"inline-block"}}}]},me=s=>{const{componentCls:l}=s;return{[l]:ee.map(a=>{const t=s[`${a}6`];return{[`&${l}-${a}`]:{"--antd-arrow-background-color":t,[`${l}-inner`]:{backgroundColor:t},[`${l}-arrow`]:{background:"transparent"}}}})}},pe=s=>{const{lineWidth:l,controlHeight:a,fontHeight:t,padding:i,wireframe:r,zIndexPopupBase:d,borderRadiusLG:o,marginXS:c,lineType:u,colorSplit:x,paddingSM:h}=s,f=a-t,g=f/2,v=f/2-l,j=i;return Object.assign(Object.assign(Object.assign({titleMinWidth:177,zIndexPopup:d+30},te(s)),se({contentRadius:o,limitVerticalRadius:!0})),{innerPadding:r?0:12,titleMarginBottom:r?0:c,titlePadding:r?`${g}px ${j}px ${v}px`:0,titleBorderBottom:r?`${l}px ${u} ${x}`:"none",innerContentPadding:r?`${h}px ${j}px`:0})},A=Y("Popover",s=>{const{colorBgElevated:l,colorText:a}=s,t=Z(s,{popoverBg:l,popoverColor:a});return[de(t),me(t),J(t,"zoom-big")]},pe,{resetStyle:!1,deprecatedTokens:[["width","titleMinWidth"],["minWidth","titleMinWidth"]]});var ue=function(s,l){var a={};for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&l.indexOf(t)<0&&(a[t]=s[t]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(s);i<t.length;i++)l.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(s,t[i])&&(a[t[i]]=s[t[i]]);return a};const fe=(s,l,a)=>!l&&!a?null:n.createElement(n.Fragment,null,l&&n.createElement("div",{className:`${s}-title`},b(l)),n.createElement("div",{className:`${s}-inner-content`},b(a))),he=s=>{const{hashId:l,prefixCls:a,className:t,style:i,placement:r="top",title:d,content:o,children:c}=s;return n.createElement("div",{className:m(l,a,`${a}-pure`,`${a}-placement-${r}`,t),style:i},n.createElement("div",{className:`${a}-arrow`}),n.createElement(ae,Object.assign({},s,{className:l,prefixCls:a}),c||fe(a,d,o)))},ge=s=>{const{prefixCls:l,className:a}=s,t=ue(s,["prefixCls","className"]),{getPrefixCls:i}=n.useContext(T),r=i("popover",l),[d,o,c]=A(r);return d(n.createElement(he,Object.assign({},t,{prefixCls:r,hashId:o,className:m(a,c)})))},je=ge;var ve=function(s,l){var a={};for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&l.indexOf(t)<0&&(a[t]=s[t]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(s);i<t.length;i++)l.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(s,t[i])&&(a[t[i]]=s[t[i]]);return a};const Ne=s=>{let{title:l,content:a,prefixCls:t}=s;return n.createElement(n.Fragment,null,l&&n.createElement("div",{className:`${t}-title`},b(l)),n.createElement("div",{className:`${t}-inner-content`},b(a)))},ye=n.forwardRef((s,l)=>{var a,t;const{prefixCls:i,title:r,content:d,overlayClassName:o,placement:c="top",trigger:u="hover",children:x,mouseEnterDelay:h=.1,mouseLeaveDelay:f=.1,onOpenChange:g,overlayStyle:v={}}=s,j=ve(s,["prefixCls","title","content","overlayClassName","placement","trigger","children","mouseEnterDelay","mouseLeaveDelay","onOpenChange","overlayStyle"]),{getPrefixCls:E}=n.useContext(T),C=E("popover",i),[W,H,z]=A(C),q=E(),F=m(o,H,z),[L,K]=le(!1,{value:(a=s.open)!==null&&a!==void 0?a:s.visible,defaultValue:(t=s.defaultOpen)!==null&&t!==void 0?t:s.defaultVisible}),M=(p,y)=>{K(p,!0),g?.(p,y)},U=p=>{p.keyCode===ce.ESC&&M(!1,p)},G=p=>{M(p)};return W(n.createElement(ne,Object.assign({placement:c,trigger:u,mouseEnterDelay:h,mouseLeaveDelay:f,overlayStyle:v},j,{prefixCls:C,overlayClassName:F,ref:l,open:L,onOpenChange:G,overlay:r||d?n.createElement(Ne,{prefixCls:C,title:r,content:d}):null,transitionName:ie(q,"zoom-big",j.transitionName),"data-popover-inject":!0}),re(x,{onKeyDown:p=>{var y,O;n.isValidElement(x)&&((O=x==null?void 0:(y=x.props).onKeyDown)===null||O===void 0||O.call(y,p)),U(p)}})))}),V=ye;V._InternalPanelDoNotUseOrYouWillBeFired=je;const k=V,P=({instant:s,onEnded:l,format:a,className:t})=>{const[i,r]=n.useState(0),d=n.useMemo(()=>{if(!s)return[];const o=Date.now(),c=s-o;if(c<=0)return l?.(!0),[0,0,0,0];const u=Math.floor(c/(1e3*60*60*24)),x=Math.floor(c%(1e3*60*60*24)/(1e3*60*60)),h=Math.floor(c%(1e3*60*60)/(1e3*60)),f=Math.floor(c%(1e3*60)/1e3);return a?a([u,x,h,f]):[`${String(x).padStart(2,"0")}`,`${String(h).padStart(2,"0")}`,`${String(f).padStart(2,"0")}`]},[s,i,l]);return n.useEffect(()=>{const o=Date.now();if(s-o>0){l?.(!1);const u=setInterval(()=>{r(x=>x+1)},1e3);return()=>{clearInterval(u)}}},[s,l]),e.jsx("div",{className:m("countdown",t),children:d.map((o,c)=>e.jsxs(n.Fragment,{children:[e.jsx("span",{className:"timefragments text-lg text-white font-404px",children:o}),c<d.length-1&&e.jsx("span",{className:"splitor text-lg text-white font-404px",children:":"})]},c))})};P.displayName=P.name;const $=P;function be(){const{stage:s}=n.useContext(N),l=n.useMemo(()=>[{user:"dogekiller",link:"",followed:!1},{user:"MeMoo.ai",link:"",followed:!0}],[]),a=n.useMemo(()=>s==="in-queue",[s]),t=n.useMemo(()=>s==="imo",[s]),i=n.useMemo(()=>s==="launch"||s==="1st-claim"||s==="2st-claim",[s]);return e.jsxs("div",{className:"airdrop_claim px-5 pt-9 pb-5",children:[e.jsxs("div",{className:"head flex justify-between",children:[e.jsxs("h3",{className:"flex items-center gap-x-2 font-404px text-green text text-lg",children:["airdrop"," ",e.jsx(k,{children:e.jsx("img",{src:"/create/tip.png"})})]}),a&&e.jsx("span",{className:"endsin font-OCR text-white",children:"Ends in"})]}),e.jsxs("div",{className:"in_queue flex justify-between",children:[e.jsxs("p",{className:"text-deep-green text-xs whitespace-pre-wrap",children:["Complete tasks to be",`
`,"eligible for token airdrop."," "]}),a&&e.jsx($,{instant:Date.now()+24*60*60*1e3})]}),e.jsx("ul",{className:"follow_list flex flex-col gap-y-2 mt-4",children:l.map(r=>e.jsxs("li",{className:"follow_list_item flex items-center w-full justify-between px-3 py-3.5",children:[e.jsxs("p",{className:m("leading-5 font-OCR whitespace-pre-wrap",{"text-white":a||t,"text-deep-green":i}),children:["Follow @dogekiller",`
`,"on twitter"]}),e.jsx("img",{className:m("w-5",{"cursor-pointer":!r.followed,"opacity-30":i}),src:`/create/icon-${r.followed?"followed":"outlink-media"}.png`})]},r.user))}),t&&e.jsxs("div",{className:"mt-5 airdrop-unlock flex flex-col items-center gap-y-2",children:[e.jsxs("div",{className:"flex gap-x-3.5",children:[e.jsx("img",{className:"w-5 object-contain",src:"/create/icon-airdrop-lock.png"}),e.jsx($,{instant:Date.now()+24*60*60*1e3})]}),e.jsx("p",{className:"text-white font-OCR leading-20 text-sm",children:"Wait for your airdrop to unlock."})]}),i&&e.jsxs("div",{className:"mt-5 airdrop-unlock flex flex-col items-center gap-y-2",children:[e.jsx("img",{className:"w-5 object-contain",src:"/create/icon-airdrop-unlock.png"}),e.jsx("p",{className:"text-white font-404px leading-20 text-2xl",children:"2,000,000 WIF"})]}),e.jsx(w,{disabled:a||t,className:m("uppercase w-full claim_btn h-12 font–404px",{"mt-20":a,"mt-5":t||i}),children:"claim"})]})}const _=()=>{const s=n.useMemo(()=>[{key:"Price",value:"$0.00003",tip:null},{key:"Total Raised",value:"1.82/2.3 ETH",tip:"1"},{key:"Contributed",value:"0.066 ETH",tip:"1"}],[]);return e.jsxs("div",{className:"imo_participate px-5 pt-9 pb-5",children:[e.jsx("div",{className:"head",children:e.jsx("h3",{className:"flex items-center gap-x-2 font-404px text-green text text-lg uppercase",children:"imo"})}),e.jsxs("div",{className:"content flex flex-col items-center",children:[e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("span",{className:"font-OCR text-sm text-white",children:"Ends in"}),e.jsx($,{className:"imo_countdown flex gap-x-2 mt-5",format:([l,a,t,i])=>[e.jsxs("div",{children:[e.jsx("time",{children:l}),e.jsx("span",{children:"D"})]},"days"),e.jsxs("div",{children:[e.jsx("time",{children:a}),e.jsx("span",{children:"H"})]},"hours"),e.jsxs("div",{children:[e.jsx("time",{children:t}),e.jsx("span",{children:"H"})]},"minutes"),e.jsxs("div",{children:[e.jsx("time",{children:i}),e.jsx("span",{children:"S"})]},"seconds")],instant:Date.now()+24*60*60*1e3}),e.jsx("p",{className:"mt-3 text-white font-OCR leading-5 text-sm",children:"Fair Distribution Policy"}),e.jsx("p",{className:"text-deep-green text-center font-OCR leading-14 text-xs",children:"Wallet capped at 1% token supply per address."})]}),e.jsx("ul",{className:"mt-6 params_list flex flex-col gap-y-6 w-full",children:s.map(l=>e.jsxs("li",{className:"flex justify-between",children:[e.jsxs("label",{className:"text-white text-xs font-OCR leading-4 flex items-center gap-x-1.5",children:[l.key," ",l.tip&&e.jsx(k,{content:l.tip,children:e.jsx("img",{src:"/create/tip.png"})})]}),e.jsx("var",{className:"text-white text-lg font-OCR leading-5",children:l.value})]},l.key))}),e.jsx(w,{className:m("mt-5 uppercase w-full participate_btn h-12 font–404px",{}),children:"participate"})]})]})};_.displayName=_.name;const we=_;function ke(){const[s,l]=n.useState("in-queue");return e.jsxs("div",{className:"status w-full flex flex-col",children:[e.jsxs("div",{className:"status_head flex items-center justify-between",children:[e.jsx("span",{children:"Status"}),e.jsxs("div",{className:"status_process flex items-center",children:[e.jsx("span",{children:s?.split("-").join(" ").toUpperCase()}),e.jsx("img",{src:"/create/icon-upcoming.png"})]})]}),e.jsxs("div",{className:"status_memo_score",children:[e.jsx("img",{className:"bot",src:"/create/icon-bot.png"}),e.jsxs("div",{className:"status_process_detail flex flex-col items-start",children:[e.jsxs("h3",{className:"flex items-center gap-x-1",children:["memo score"," ",e.jsx(k,{children:e.jsx("img",{className:"mb-1",src:"/create/tip.png"})})]}),e.jsxs("div",{className:"flex items-end mt-3 mb-4",children:[e.jsx("span",{className:"numerator",children:"70"}),e.jsx("span",{className:"denominator",children:"/100"})]}),e.jsx(oe,{className:"status_memo_score_bar",showInfo:!1,percent:70})]})]}),e.jsxs("p",{className:"mt-3 consider",children:["Might consider",`
`,"adding it to my wishlist."]}),e.jsxs("div",{className:"mt-4 intend flex justify-between",children:[e.jsxs("p",{children:["MeMoo Score is an indicative metric.",`
`,"Users are advised to DYOR."]}),e.jsx("img",{className:"outlink",src:"/create/icon-outlink.png"})]})]})}const S=()=>{const s=n.useMemo(()=>[{key:"Market Cap",value:"$973,672.8",tip:null},{key:"Price",value:"$0.00003",tip:null},{key:"Total Raised",value:"1.82/2.3 ETH",tip:"1"},{key:"Contributed",value:"0.066 ETH",tip:"1"}],[]);return e.jsxs("div",{className:"pubsale px-5 pt-9 pb-5",children:[e.jsx("div",{className:"head flex justify-center",children:e.jsx("img",{src:"/create/img-pubsale.png"})}),e.jsxs("div",{className:"content flex flex-col items-center",children:[e.jsx("ul",{className:"mt-6 params_list flex flex-col gap-y-6 w-full",children:s.map(l=>e.jsxs("li",{className:"flex justify-between",children:[e.jsxs("label",{className:"text-white text-xs font-OCR leading-4 flex items-center gap-x-1.5",children:["Price"," ",l.tip&&e.jsx(k,{content:l.tip,children:e.jsx("img",{src:"/create/tip.png"})})]}),e.jsx("var",{className:"text-white text-lg font-OCR leading-5",children:l.value})]},l.key))}),e.jsx(w,{className:m("mt-5 uppercase w-full pubsale_btn h-12 font–404px",{}),children:"Buy"})]})]})};S.displayName=S.name;const Ce=S,R=()=>{const{stage:s}=n.useContext(N),l=n.useMemo(()=>s==="launch"?[{key:"IDO Date",value:"06 Apr 2024"},{key:"LP Lock",value:"UNCX",formatValue:t=>e.jsxs("div",{className:"flex items-center gap-x-2.5",children:[e.jsxs("div",{className:"flex ido_params_token items-center py-1.5 gap-x-1 px-5",children:[e.jsx("img",{src:"/create/token-demo.png"}),e.jsx("span",{className:"font-OCR text-white text-sm",children:t})]}),e.jsx("span",{className:"text-white text-lg font-OCR leading-5",children:"Yes"})]})},{key:"Liquidity",value:"$21,000"},{key:"FDV",value:"$20,000"},{key:"24h Trading Vol",value:"$20,000"},{key:"1h",value:"+7%",formatValue:t=>e.jsx("span",{className:"text-green font-404px",children:t})},{key:"24h",value:"+86%",formatValue:t=>e.jsx("span",{className:"text-green font-404px",children:t})},{key:"Max Supply",value:"10,000,000,000"},{key:"All Time High",value:"$20,000",formatValue:t=>e.jsxs("div",{className:"flex flex-col items-end",children:[e.jsx("span",{className:"text-white text-lg font-OCR leading-5",children:t}),e.jsxs("div",{className:"flex items-center gap-x-2",children:[e.jsx("time",{className:"font-OCR text-xs text-bluish-purple-light",children:"20 Mar 2024"}),e.jsx("span",{className:"font-OCR text-xs text-red",children:"-42.9%"})]})]})},{key:"All Time Low",value:"$20,000",formatValue:t=>e.jsxs("div",{className:"flex flex-col items-end",children:[e.jsx("span",{className:"text-white text-lg font-OCR leading-5",children:t}),e.jsxs("div",{className:"flex items-center gap-x-2",children:[e.jsx("time",{className:"font-OCR text-xs text-bluish-purple-light",children:"20 Mar 2024"}),e.jsx("span",{className:"font-OCR text-xs text-green",children:"+42.9%"})]})]})},{key:"Holders",value:"12,456"}]:[{key:"IDO Date",value:"06 Apr 2024"},{key:"FDV",value:"$20,000"},{key:"Max Supply",value:"10,000,000,000"}],[s]),a=n.useMemo(()=>s==="launch"?[{key:"0x243073639B7189977E5DbA7edE1b5f5D18531418",value:"7.09%"},{key:"0x243073639B7189977E5DbA7edE1b5f5D18531428",value:"7.09%"},{key:"0x243073639B7189977E5DbA7edE1b5f5D18531438",value:"7.09%"},{key:"0x243073639B7189977E5DbA7edE1b5f5D18531448",value:"7.09%"},{key:"0x243073639B7189977E5DbA7edE1b5f5D18531458",value:"7.09%"},{key:"0x243073639B7189977E5DbA7edE1b5f5D18531468",value:"7.09%"}]:[],[s]);return e.jsxs("div",{className:"ido_detail px-5 pt-9 pb-5",children:[e.jsx("ul",{className:"data_list flex flex-col gap-y-6 w-full",children:l.map(t=>e.jsxs("li",{className:"flex justify-between",children:[e.jsx("label",{className:"text-bluish-purple-light text-sm font-OCR leading-4 flex items-center gap-x-1.5",children:t.key}),t.formatValue?t.formatValue(t.value):e.jsx("var",{className:"text-white text-lg font-OCR leading-5",children:t.value})]},t.key))}),e.jsx("div",{className:"divider h-px w-full bg-bluish-purple my-8"}),a.length>0&&e.jsxs("div",{className:"top10_holders",children:[e.jsx("h3",{className:"font-404px text-lg leading-5 text-green",children:"Top 10 Token Holders"}),e.jsx("ul",{className:"holders_list mt-5 flex flex-col",children:a.map((t,i)=>e.jsxs("li",{className:"flex items-center justify-between",children:[e.jsxs("label",{className:"text-sm font-OCR text-white",children:[i+1,".",xe(t.key)]}),e.jsx("var",{className:"text-sm font-OCR text-white",children:t.value})]},t.key))})]})]})};R.displayName=R.name;const Oe=R,D=()=>e.jsxs("div",{className:"banner w-full relative",children:[e.jsx("img",{className:"w-full",src:"/create/img-banner-demo.png"}),e.jsx("img",{className:"w-30 absolute bottom-0 left-5 translate-y-1/2",src:"/create/img-logo-demo.png"})]});D.displayName=D.name;const Pe=D,I=()=>{const s=n.useMemo(()=>[{key:"Name",value:"Bad Idea AI"},{key:"Ticker",value:"BAD"},{key:"Contract Address",value:"NA"},{key:"LP Contract",value:"NA"},{key:"Tools",value:"",formatKey:a=>e.jsx("label",{className:"col-span-3 text-bluish-purple-light text-sm font-OCR leading-4 flex gap-x-1.5 h-8 flex items-center",children:a}),formatValue:a=>e.jsx("ul",{className:"token_list flex flex-wrap col-span-6 gap-y-1.5 gap-x-1",children:[{name:"De.Fi Scanner",icon:"/create/token-demo.png"},{name:"DEX Screener",icon:"/create/token-demo.png"},{name:"Bubblemaps",icon:"/create/token-demo.png"},{name:"GeckoTerminal",icon:"/create/token-demo.png"}].map(t=>e.jsxs("li",{className:"flex items-center gap-x-1.5 h-8",children:[e.jsx("img",{className:"w-5 object-contain",src:t.icon})," ",t.name]},t.name))})}],[]),l=n.useMemo(()=>[{key:"Project Website",value:"",formatValue:a=>e.jsx("ul",{className:"token_list flex flex-wrap col-span-6 gap-y-1.5 gap-x-1",children:[{name:"badidea.ai"}].map(t=>e.jsx("li",{className:"flex items-center gap-x-1.5 h-8",children:t.name},t.name))})},{key:`Project’s
Social Account`,value:"",formatValue:a=>e.jsx("ul",{className:"token_list flex flex-wrap col-span-6 gap-y-1.5 gap-x-1",children:[{name:"BadIdea_Ai",icon:"/create/social-twitter.png"},{name:"BadIdea_Ai01",icon:"/create/social-tg.png"}].map(t=>e.jsxs("li",{className:"flex items-center gap-x-1.5 h-8",children:[e.jsx("img",{className:"w-5 object-contain",src:t.icon})," ",t.name]},t.name))})},{key:"Created By",value:"",formatKey:a=>e.jsx("label",{className:"col-span-3 text-bluish-purple-light text-sm font-OCR leading-4 flex gap-x-1.5 h-8 flex items-center mt-10",children:a}),formatValue:a=>e.jsx("ul",{className:"token_list flex flex-wrap col-span-6 gap-y-1.5 gap-x-1 mt-10",children:[{name:"FuckingBadIdea4770"},{name:"Rg7GG...kf9Lj7",icon:"/create/icon-copy.png"}].map(t=>e.jsxs("li",{className:"flex items-center gap-x-1.5 h-8",children:[t.name," ",t.icon&&e.jsx("img",{className:"w-2.5 object-contain",src:t.icon})]},t.name))})},{key:`Creator’s
Social Account`,value:"",formatValue:a=>e.jsx("ul",{className:"token_list flex flex-wrap col-span-6 gap-y-1.5 gap-x-1",children:[{name:"Robots_Luv",icon:"/create/social-twitter.png"}].map(t=>e.jsxs("li",{className:"flex items-center gap-x-1.5 h-8",children:[e.jsx("img",{className:"w-5 object-contain",src:t.icon})," ",t.name]},t.name))})}],[]);return e.jsxs("div",{className:"profile relative pt-20",children:[e.jsxs("ul",{className:"relationship_fracture absolute flex gap-x-2.5 top-5 right-5",children:[e.jsx("li",{children:e.jsx("img",{className:"w-10 h-10 object-cover",src:"/create/icon-collect.png"})}),e.jsx("li",{children:e.jsx("img",{className:"w-10 h-10 object-cover",src:"/create/icon-share.png"})}),e.jsx("li",{children:e.jsx("img",{className:"w-10 h-10 object-cover",src:"/create/icon-more.png"})})]}),e.jsxs("div",{className:"head",children:[e.jsxs("h1",{className:"font-404px text-white leading-7 text-3xl",children:["Bad Idea AI ",e.jsx("span",{className:"text-green text-base ml-1",children:"BAD"})]}),e.jsx("time",{className:"mt-2 block font-OCR text-bluish-purple-light text-sm",children:"Created 26 Mar 2024"}),e.jsx("p",{className:"mt-2 font-OCR text-white text-sm leading-5 max-w-2xl",children:`Bad Idea AI emerges as a daring response to the pervasive influence and potential dominance of AI in our
          lives. It represents a novel blend of Blockchain, AI, and DAOs, conceived as a "Hail Mary" effort to chart a
          collaborative path for humanity and AI. This initiative springs from a deep concern over AI's growing
          footprint, from personal assistants to autonomous vehicles, and a bold ambition to co-create our future with
          AI rather than succumb to its rule.`})]}),e.jsxs("div",{className:"content",children:[e.jsx("ul",{className:"basic_list mt-14 flex flex-col gap-y-6",children:s.map(a=>e.jsxs("li",{className:"grid grid-cols-12",children:[a.formatKey?a.formatKey(a.key):e.jsx("label",{className:"col-span-3 text-bluish-purple-light text-sm font-OCR leading-4 flex items-center gap-x-1.5",children:a.key}),a.formatValue?a.formatValue(a.value):e.jsx("var",{className:"col-span-6 text-white text-lg font-OCR leading-5",children:a.value})]},a.key))}),e.jsxs("div",{className:"soscial_info mt-16",children:[e.jsx("h1",{className:"font-404px text-lg text-green leading-5",children:"Social Info"}),e.jsx("ul",{className:"mt-6 flex flex-col gap-y-1.5",children:l.map(a=>e.jsxs("li",{className:"grid grid-cols-12",children:[a.formatKey?a.formatKey(a.key):e.jsx("label",{className:"col-span-3 text-bluish-purple-light text-sm font-OCR leading-4 flex h-8 gap-x-1.5 flex items-center whitespace-pre-wrap",children:a.key}),a.formatValue?a.formatValue(a.value):e.jsx("var",{className:"col-span-6 text-white text-lg font-OCR leading-5",children:a.value})]},a.key))})]})]})]})};I.displayName=I.name;const $e=I,B=()=>{const{stage:s}=n.useContext(N),l=n.useMemo(()=>[{key:"in-queue",icon:`/create/process-in-queue${s==="in-queue"?"-active":""}.svg`,title:"in queue",desc:`Complete tasks to be
eligible for airdrop`,onClick:()=>{},btnText:"increase",btnIcon:`/create/icon-increase${s==="in-queue"?"-active":""}.svg`},{key:"imo",icon:`/create/process-imo${s==="imo"?"-active":""}.svg`,title:"imo",desc:`Get first access
before public sale`},{key:"launch",icon:`/create/process-launch${s==="launch"?"-active":""}.svg`,title:"launch",desc:`Token available
for public sale`},{key:"1st-claim",icon:e.jsxs("div",{className:"relative z-10",children:[e.jsx("img",{src:"/create/bg-1st-claim.png"}),e.jsx("img",{className:"absolute left-[53px] top-[37px]",src:`/create/process-claim${s==="1st-claim"?"-active":""}.svg`})]}),title:"1st claim",desc:`1st 50% unlock when
token price hits 0.0005c`,onClick:()=>{},btnText:"claim",btnIcon:`/create/icon-claim${s==="1st-claim"?"-active":""}.svg`},{key:"2st-claim",icon:e.jsxs("div",{className:"relative z-10",children:[e.jsx("img",{src:"/create/bg-2st-claim.png"}),e.jsx("img",{className:"absolute left-[53px] top-[37px]",src:`/create/process-claim${s==="2st-claim"?"-active":""}.svg`})]}),title:"2st claim",desc:` Next 50% unlocked
tokens in 14 days`,onClick:()=>{},btnText:"claim",btnIcon:`/create/icon-claim${s==="2st-claim"?"-active":""}.svg`}],[s]);return e.jsx("ul",{className:"progress flex",children:l.map(a=>{const t=a.key===s;return e.jsxs("li",{className:m("flex max-w-[220px] flex-col items-center justify-end progress_list_item px-[18px]",{active:t}),children:[e.jsx("div",{className:m({active:t},"icon"),children:typeof a.icon=="string"?e.jsx("img",{src:a.icon}):a.icon}),e.jsx("h3",{className:m({"text-green":t},"text-lg font-404px leading-5 text-bluish-purple-light mt-[18px]"),children:a.title}),e.jsx("p",{className:"mt-1.5 font-OCR text-white leading-4 text-sm text-center break-keep whitespace-pre",children:a.desc}),e.jsx(w,{style:{visibility:a.btnText?"visible":"hidden"},className:"mt-[19px] px-[19px] h-[38px] btn rounded-[7px]",disabled:!t,onClick:()=>a.onClick?.(),children:e.jsxs("div",{className:"flex items-center gap-x-1",children:[a.btnIcon&&e.jsx("img",{src:a.btnIcon}),e.jsx("span",{className:m("btn_text font-404px text-white text-[10px] leading-5"),children:a.btnText})]})})]},a.key)})})};B.displayName=B.name;const _e=B,N=n.createContext({stage:"in-queue"});function Ve(){const[s,l]=n.useState("in-queue"),a=n.useMemo(()=>({stage:s}),[s]);return e.jsxs("div",{className:"pt-[70px] flex flex-col items-center",children:[e.jsx(N.Provider,{value:a,children:e.jsx(_e,{})}),e.jsxs("div",{className:"airdrop pb-16",children:[e.jsx("div",{className:"airdrop_left flex flex-col gap-y-3.5",children:e.jsxs(N.Provider,{value:a,children:[e.jsx(ke,{}),s==="launch"&&e.jsx(Ce,{}),s==="imo"&&e.jsx(we,{}),e.jsx(be,{}),e.jsx(Oe,{})]})}),e.jsxs("div",{className:"airdrop_right flex flex-col",children:[e.jsx(Pe,{}),e.jsx($e,{})]})]})]})}export{N as AirdropContext,Ve as default};