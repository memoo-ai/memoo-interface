import{j as e}from"./rainbowkit-C14eB3vO.js";import{T as I,a as E,b as k,I as R,C as P}from"./index-Der9i3E9.js";import{r as a,u as S,e as A}from"./react-Dusg2Zfy.js";import{a as y,B as g}from"./button-IEEiWGYg.js";import{c as L}from"./index-CyKIv-Uc.js";import{c as M,d as D}from"./index-OLdYHaOG.js";import{h as j,p as N}from"./index-CcNPTWGm.js";import{F as v}from"./Table-DUH5-5JG.js";import"./BaseInput-je7-z6M_.js";import"./index-BYIxU2lf.js";import"./index-evFx2DUO.js";import"./index-BuTSY06v.js";import"./index-Dpwpd4pN.js";const $=s=>[{title:"Token",dataIndex:"tokenName",key:"tokenName",render:(t,n)=>e.jsxs("div",{className:"flex items-center",children:[e.jsx("img",{src:n.icon,alt:"",className:"w-[84px] h-[84px] rounded-full mr-5"}),e.jsx("span",{className:"font-404px font-bold text-lg mr-2 text-[#ffffff]",children:t}),e.jsx("span",{className:"font-404px font-normal text-sm text-[#07E993]",children:n.ticker})]})},{title:"Ends In",dataIndex:"endsIn",key:"endsIn",sorter:!0,render:t=>e.jsx("div",{className:"font-404px font-semibold text-lg ",children:t?y(t??0):""})},{title:"Total Raissed",dataIndex:"totalRaised",key:"totalRaised",sorter:!0,render:t=>e.jsxs("span",{className:"font-404px font-semibold text-lg",children:[t,"E"]})},{title:"Action",key:"action",render:t=>e.jsx(g,{variant:"default",className:" h-[50px] uppercase font-404px font-bold text-lg px-2",onClick:()=>s(`/airdrop/${t.ticker}`),children:"PARTICIPATE"})}],O=s=>[{title:"Token",dataIndex:"tokenName",key:"tokenName",render:(t,n)=>e.jsxs("div",{className:"flex items-center",children:[e.jsx("img",{src:n.icon,alt:"",className:"w-[84px] h-[84px] rounded-full mr-5"}),e.jsx("span",{className:"font-404px font-bold text-lg mr-2",children:t}),e.jsx("span",{className:"font-404px font-normal text-sm ",children:n.ticker})]})},{title:"IDO Date",dataIndex:"idoDate",key:"idoDate",sorter:!0,render:t=>e.jsx("div",{className:"font-404px font-semibold text-lg ",children:t?y(t??0):""})},{title:"Participants",dataIndex:"participants",key:"participants",sorter:!0,render:t=>e.jsxs("span",{className:"font-404px font-semibold text-lg",children:[t,"E"]})},{title:"Action",key:"action",render:t=>e.jsx(g,{variant:"default",className:"w-[136px] h-[50px] uppercase font-404px font-bold text-lg",onClick:()=>s(`/airdrop/${t.ticker}`),children:"airdrop"})}];function z({type:s="light",title:t,step:n,children:r}){const[o,x]=a.useState(0),d=a.useRef(0),h=a.useRef(0);a.useEffect(()=>{r&&(h.current=document.querySelector(".swipe-card")?.clientWidth||0,d.current=document.querySelector(".swipe-container")?.clientWidth||0)},[r]);const i=()=>{u||x(o-n)},p=a.useMemo(()=>o===0,[o]),u=a.useMemo(()=>h.current-o>d.current,[o]),f=()=>{o!==0&&x(o+n)},m=a.useMemo(()=>s==="dark"?M:D,[s]);return e.jsxs("div",{className:L("swipe-card",s==="light"?"swipe-card-light":"swipe-card-dark"),children:[e.jsxs("div",{className:"swipe-header w-full flex items-center justify-between",children:[e.jsx("p",{className:"title",children:t}),e.jsxs("div",{className:"swipe-icons flex items-center",children:[e.jsx(m,{className:`w-10 h-10 curose-pointer mr-3  ${u?"cursor-not-allowed":"cursor-pointer"} `,onClick:i}),e.jsx(m,{className:`w-10 h-10 rotate-180 ${p?"cursor-not-allowed":"cursor-pointer"} `,onClick:f})]})]}),e.jsx("div",{className:"swipe-content",children:e.jsx("div",{className:"swipe-container",style:{transform:`translateX(${o}px)`,transition:"transform 0.3s ease-in-out"},children:r})})]})}const B=s=>j.get(`${N}/web-oriented/imo`,{params:s}),q=s=>j.get(`${N}/web-oriented/airdrop`,{params:s}),W=s=>j.get(`${N}/web-oriented/ido-completed`,{params:s}),H=()=>{const[s,t]=a.useState([]),n=S();return a.useEffect(()=>{(async()=>{try{const{data:r}=await W({pageNumber:1,pageSize:10});t(r.records)}catch(r){console.error("Error fetching data:",r)}})()},[]),e.jsx(z,{title:"COMPLETED IMO",step:360,children:e.jsx("div",{className:"flex items-center overflow-hidden",children:s.map(r=>e.jsxs("div",{className:"flex flex-col w-[390px] bg-[#131522]  px-11 py-6 mr-8 rounded-lg",children:[e.jsx("img",{src:r.icon,alt:"",className:"w-20 h-20 mb-2 rounded-full"}),e.jsx("p",{className:"font-OCR text-white text-lg mb-[64px]",children:r.tokenName}),e.jsxs("div",{className:"ido-info-item",children:[e.jsx("img",{src:"./dashboard/icon-roi.svg",alt:"",className:"w-5 h-5 mr-1"}),e.jsx("span",{children:"ATH ROI"}),e.jsx("span",{children:r.athRoi})]}),e.jsxs("div",{className:"ido-info-item",children:[e.jsx("img",{src:"./dashboard/icon-ido-symbol.svg",alt:"",className:"w-5 h-5 mr-1"}),e.jsx("span",{children:"Ticker"}),e.jsx("span",{children:r.ticker})]}),e.jsxs("div",{className:"ido-info-item",children:[e.jsx("img",{src:"./dashboard/icon-raised-target.svg",alt:"",className:"w-5 h-5 mr-1"}),e.jsx("span",{children:"Total Raised"}),e.jsxs("span",{children:[r.totalRaised," ETH"]})]}),e.jsx(g,{variant:"secondary",className:"font-404px text-lg  w-full h-[50px] uppercase mt-[74px]",onClick:()=>{n(`/airdrop/${r.ticker}`)},children:"Buy"})]},r.ticker))})})};function se(){const[s,t]=a.useState("imo"),[n,r]=a.useState([]);a.useState(0);const[o,x]=a.useState(1),[d,h]=a.useState(!1),[i,p]=a.useState({current:1,pageSize:10,total:30}),[u,f]=a.useState([]),m=A(),w=S();a.useEffect(()=>{const l=new URLSearchParams(m.search).get("type");l&&t(l)},[m.search]);const C=async()=>{let c={pageNumber:i.current??1,pageSize:i.pageSize??10};const{data:l}=s==="imo"?await B(c):await q(c);l&&(r(l.records),p({...i,total:l.total_record}))};a.useEffect(()=>{C()},[i.current,u,s]);const b=(c,l,T)=>{f(T)};return e.jsx("div",{className:"page pb-[70px]",children:e.jsxs("div",{className:"base-container",children:[e.jsx("div",{className:"header-banner-bg",children:e.jsxs("div",{className:"header-banner-content",children:[e.jsxs("div",{className:"header-banner-left flex  flex-col",children:[e.jsxs("p",{className:"left-text",children:[e.jsx("span",{children:" Memoo Launchpad."})," ",e.jsx("br",{}),e.jsx("span",{children:" Your Ticket to Memo Stardom."})]}),e.jsx("p",{className:"left-sub-text",children:"Get in on the Action with the Hottest Meme Project Picks."})]}),e.jsx("div",{children:e.jsx("img",{className:"w-[363px] h-[392px]",src:"./dashboard/img-banner-right.png",alt:""})})]})}),e.jsx("div",{className:"flex items-center justify-between my-[70px]",children:e.jsx(I,{value:s,onValueChange:c=>{t(c),x(1)},children:e.jsxs(E,{children:[e.jsx(k,{value:"imo",className:"text-[38px]",children:"Imo"}),e.jsx(k,{value:"airdrop",className:"text-[38px]",children:"Airdrop"})]})})}),s==="imo"?e.jsx(v,{columns:$(w),dataSource:n,pagination:!1,loading:d,onChange:b,className:"mb-[58px]"}):e.jsx(v,{columns:O(w),dataSource:n,pagination:!1,loading:d,onChange:b,className:"mb-[58px]"}),e.jsx(R,{currentPage:i.current??0,total:i.total??0,pageSize:i.pageSize,onChangePageNumber:c=>{p({...i,current:c})}}),e.jsx(H,{}),e.jsx(P,{title:"Supercharge Your Meme Creation.",desc:"Create Your Very Own Meme Token Now.",link:"/",linkText:"BE A CREATOR"})]})})}export{se as default};
