import{j as e}from"./rainbowkit-DswL0T-s.js";import{T as f,a as j,b as o,I as b,C as k}from"./index-DKZTnsUt.js";import{r as s}from"./react-zxVSF9uU.js";import{T as N}from"./Table-NhGQWLCo.js";import"./button-Bs1kTVTA.js";import"./index-QVCVkd2z.js";import"./index-BaVSXGdv.js";import"./index-6jR6dI77.js";import"./index-DgWyM-vV.js";import"./button-D9XFjost.js";import"./BaseInput-CDbv-80P.js";import"./index-D_a_TRPf.js";const v=[{title:"Token",dataIndex:"name",key:"name",render:(t,r)=>e.jsxs("div",{className:"flex items-center",children:[e.jsx("img",{src:"",alt:"",className:"w-[84px] h-[84px] rounded-full mr-5"}),e.jsx("span",{className:"font-bold text-lg mr-2",children:t}),e.jsx("span",{className:"font-normal text-sm ",children:r.symbol})]})},{title:"Price",dataIndex:"price",key:"price",sorter:!0,render:t=>e.jsxs("div",{className:"font-semibold text-lg ",children:["$",t]})},{title:"1h",dataIndex:"priceChangeHourly",key:"priceChangeHourly",sorter:!0,render:t=>e.jsxs("span",{className:`font-semibold text-lg ${t<0?"text-red":"text-green"}`,children:[t>0?"+":"",t*100,"%"]})},{title:"24h",dataIndex:"priceChangeDaily",key:"priceChangeDaily",sorter:!0,render:t=>e.jsxs("span",{className:`font-semibold text-lg ${t<0?"text-red":"text-green"}`,children:[t>0?"+":"",t*100,"%"]})},{title:"24h Volume",dataIndex:"volumeDaily",key:"volumeDaily",sorter:!0,render:t=>e.jsxs("div",{className:"font-semibold text-lg ",children:["$",t]})},{title:"Market Cap",dataIndex:"marketCap",key:"marketCap",render:t=>e.jsxs("div",{className:"font-semibold text-lg ",children:["$",t]})}],A=()=>{const[t,r]=s.useState("trending"),[c,m]=s.useState([]),[d,y]=s.useState(!1),[n,i]=s.useState({current:1,pageSize:10,total:30}),[x,p]=s.useState([]),g=async()=>{const a=new Array(20).fill(void 0).map((u,l)=>({id:"dogwifhat",name:"DogWifHat",symbol:"WIF",price:.778,priceChangeHourly:3400,priceChangeDaily:100,volumeDaily:1e7,marketCap:24e6}));m(a)};s.useEffect(()=>{g()},[n,x]);const h=(a,u,l)=>{i(a),p(l)};return e.jsxs("div",{className:"page pb-[70px]",children:[e.jsx("div",{className:"header-banner-bg",children:e.jsxs("div",{className:"header-banner-content",children:[e.jsxs("div",{className:"header-banner-left flex  flex-col",children:[e.jsx("img",{className:"mb-[49px] w-[680px] h-[144px]",src:"./gecko/img-left-desc.png",alt:""}),e.jsx("img",{className:"w-[304px] h-[80px]",src:"./gecko/img-left-gecko.png",alt:""})]}),e.jsx("div",{children:e.jsx("img",{className:"w-[420px] h-[355px]",src:"./gecko/img-right-gecko.png",alt:""})})]})}),e.jsxs("div",{className:"flex items-center justify-between my-[70px]",children:[e.jsx("p",{className:"font-404px text-green font-normal text-[38px]",children:"Token Ranking"}),e.jsx(f,{value:t,onValueChange:a=>r(a),children:e.jsxs(j,{children:[e.jsx(o,{value:"trending",children:"Trending"}),e.jsx(o,{value:"top",children:"Top"})]})})]}),e.jsx(N,{className:"common-table mb-10",columns:v,dataSource:c,pagination:!1,loading:d,onChange:h}),e.jsx(b,{currentPage:n.current??0,total:n.total??0,onChangePageNumber:a=>{i({...n,current:a})}}),e.jsx(k,{title:"Discover the Next Big Thing on MeMoo LaunchPad.",desc:"Get in on the Action with the Hottest Meme Project Picks.",link:"/",linkText:"launchpad"})]})};export{A as default};
