import{j as e,u as se,a as ie,b as W}from"./rainbowkit-CplsDoWA.js";import{c as re}from"./index-B3Ua-3mu.js";import{u as Y,r as i,e as oe}from"./react-DYnGVO3U.js";import{B as v}from"./button-CcYDhlnf.js";import{f as V,p as le,M as pe}from"./units-CGZmcsfz.js";import{u as de,a as me,g as ce,b as ye,P as y,c as ue,s as T,Z as Te,d as fe,e as he,f as ge}from"./useManageContract-BecTXTLd.js";import{F as o,q as xe,T as B,U as O}from"./index-NcJc--wn.js";import{i as be}from"./index-DnlLdj7F.js";import{I,R as Me}from"./index-i5GhYl1E.js";import{C as ke}from"./index-ZdlJE-iN.js";import"./index-ryeAhiz_.js";const Ie=({path:m="/dashboard",...l})=>{const c=Y();return e.jsxs("div",{className:"back_button",onClick:()=>{c(m)},children:[e.jsx("span",{className:"back_button_text",children:"Back to Dashboard"}),e.jsx(re,{className:"IconBack"})]})},je=Ie,Ce=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{inputs:[],name:"AccessControlBadConfirmation",type:"error"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"bytes32",name:"neededRole",type:"bytes32"}],name:"AccessControlUnauthorizedAccount",type:"error"},{inputs:[{internalType:"address",name:"target",type:"address"}],name:"AddressEmptyCode",type:"error"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"AddressInsufficientBalance",type:"error"},{inputs:[],name:"EnforcedPause",type:"error"},{inputs:[],name:"ExpectedPause",type:"error"},{inputs:[],name:"FailedInnerCall",type:"error"},{inputs:[],name:"InvalidInitialization",type:"error"},{inputs:[],name:"NotInitializing",type:"error"},{inputs:[{internalType:"address",name:"token",type:"address"}],name:"SafeERC20FailedOperation",type:"error"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"token",type:"address"},{indexed:!1,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"ClaimToken",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint64",name:"version",type:"uint64"}],name:"Initialized",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"meme",type:"address"},{components:[{components:[{internalType:"address",name:"creator",type:"address"},{internalType:"address",name:"defaultAdmin",type:"address"},{internalType:"address",name:"pauser",type:"address"},{internalType:"address",name:"minter",type:"address"},{internalType:"string",name:"name",type:"string"},{internalType:"string",name:"symbol",type:"string"},{internalType:"uint256",name:"totalSupply",type:"uint256"},{internalType:"uint8",name:"decimals",type:"uint8"},{internalType:"address",name:"payToken",type:"address"},{internalType:"uint256",name:"idoPrice",type:"uint256"},{internalType:"uint256",name:"airdropPrice",type:"uint256"},{internalType:"uint256",name:"preLaunchSecond",type:"uint256"},{internalType:"uint256",name:"idoUserBuyLimit",type:"uint256"}],internalType:"struct MemeInfoStructs.MemeInfo",name:"memeInfo",type:"tuple"},{components:[{internalType:"address",name:"memeFactory",type:"address"},{internalType:"address",name:"treasury",type:"address"},{internalType:"address",name:"memeWhitelist",type:"address"},{internalType:"address",name:"uniswapV2Factory",type:"address"},{internalType:"address",name:"uniswapV2Router02",type:"address"},{internalType:"uint256",name:"uniswapDeadline",type:"uint256"},{internalType:"address",name:"liquidityHolder",type:"address"},{internalType:"address",name:"liquidityLocker",type:"address"},{internalType:"address",name:"platformMemeRecipient",type:"address"},{internalType:"address payable",name:"platformFeeRecipient",type:"address"},{internalType:"uint256",name:"platformFeeRateIdo",type:"uint256"},{internalType:"uint256",name:"platformFeeRateDenominatorIdo",type:"uint256"},{internalType:"uint256",name:"platformFeeCreateMeme",type:"uint256"},{internalType:"address",name:"platformFeeCreateMemePayToken",type:"address"},{internalType:"uint256",name:"idoCreatorBuyLimit",type:"uint256"},{components:[{internalType:"uint256",name:"creator",type:"uint256"},{internalType:"uint256",name:"ido",type:"uint256"},{internalType:"uint256",name:"lp",type:"uint256"},{internalType:"uint256",name:"airdrop",type:"uint256"},{internalType:"uint256",name:"platform",type:"uint256"}],internalType:"struct MemooManageStructs.TokenAllocation",name:"allocation",type:"tuple"}],internalType:"struct MemooManageStructs.MemooConfig",name:"memooConfig",type:"tuple"},{internalType:"uint256",name:"creatorTotal",type:"uint256"},{internalType:"uint256",name:"platformTotal",type:"uint256"},{internalType:"uint256",name:"memeCreateTimestamp",type:"uint256"}],indexed:!1,internalType:"struct MemeInfoStructs.MemeConfigInfo",name:"memeConfigInfo",type:"tuple"}],name:"MemeCreated",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"account",type:"address"}],name:"Paused",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"previousAdminRole",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"newAdminRole",type:"bytes32"}],name:"RoleAdminChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleGranted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleRevoked",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"account",type:"address"}],name:"Unpaused",type:"event"},{inputs:[],name:"DEFAULT_ADMIN_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"MEMOO_MANAGE_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"PAUSER_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"PERCENT_DENOMINATOR",outputs:[{internalType:"uint16",name:"",type:"uint16"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"claimToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{components:[{internalType:"address",name:"creator",type:"address"},{internalType:"address",name:"defaultAdmin",type:"address"},{internalType:"address",name:"pauser",type:"address"},{internalType:"address",name:"minter",type:"address"},{internalType:"string",name:"name",type:"string"},{internalType:"string",name:"symbol",type:"string"},{internalType:"uint256",name:"totalSupply",type:"uint256"},{internalType:"uint8",name:"decimals",type:"uint8"},{internalType:"address",name:"payToken",type:"address"},{internalType:"uint256",name:"idoPrice",type:"uint256"},{internalType:"uint256",name:"airdropPrice",type:"uint256"},{internalType:"uint256",name:"preLaunchSecond",type:"uint256"},{internalType:"uint256",name:"idoUserBuyLimit",type:"uint256"}],internalType:"struct MemeInfoStructs.MemeInfo",name:"memeInfo",type:"tuple"},{components:[{internalType:"address",name:"memeFactory",type:"address"},{internalType:"address",name:"treasury",type:"address"},{internalType:"address",name:"memeWhitelist",type:"address"},{internalType:"address",name:"uniswapV2Factory",type:"address"},{internalType:"address",name:"uniswapV2Router02",type:"address"},{internalType:"uint256",name:"uniswapDeadline",type:"uint256"},{internalType:"address",name:"liquidityHolder",type:"address"},{internalType:"address",name:"liquidityLocker",type:"address"},{internalType:"address",name:"platformMemeRecipient",type:"address"},{internalType:"address payable",name:"platformFeeRecipient",type:"address"},{internalType:"uint256",name:"platformFeeRateIdo",type:"uint256"},{internalType:"uint256",name:"platformFeeRateDenominatorIdo",type:"uint256"},{internalType:"uint256",name:"platformFeeCreateMeme",type:"uint256"},{internalType:"address",name:"platformFeeCreateMemePayToken",type:"address"},{internalType:"uint256",name:"idoCreatorBuyLimit",type:"uint256"},{components:[{internalType:"uint256",name:"creator",type:"uint256"},{internalType:"uint256",name:"ido",type:"uint256"},{internalType:"uint256",name:"lp",type:"uint256"},{internalType:"uint256",name:"airdrop",type:"uint256"},{internalType:"uint256",name:"platform",type:"uint256"}],internalType:"struct MemooManageStructs.TokenAllocation",name:"allocation",type:"tuple"}],internalType:"struct MemooManageStructs.MemooConfig",name:"memooConfig",type:"tuple"}],name:"createMeme",outputs:[{internalType:"address",name:"",type:"address"},{components:[{components:[{internalType:"address",name:"creator",type:"address"},{internalType:"address",name:"defaultAdmin",type:"address"},{internalType:"address",name:"pauser",type:"address"},{internalType:"address",name:"minter",type:"address"},{internalType:"string",name:"name",type:"string"},{internalType:"string",name:"symbol",type:"string"},{internalType:"uint256",name:"totalSupply",type:"uint256"},{internalType:"uint8",name:"decimals",type:"uint8"},{internalType:"address",name:"payToken",type:"address"},{internalType:"uint256",name:"idoPrice",type:"uint256"},{internalType:"uint256",name:"airdropPrice",type:"uint256"},{internalType:"uint256",name:"preLaunchSecond",type:"uint256"},{internalType:"uint256",name:"idoUserBuyLimit",type:"uint256"}],internalType:"struct MemeInfoStructs.MemeInfo",name:"memeInfo",type:"tuple"},{components:[{internalType:"address",name:"memeFactory",type:"address"},{internalType:"address",name:"treasury",type:"address"},{internalType:"address",name:"memeWhitelist",type:"address"},{internalType:"address",name:"uniswapV2Factory",type:"address"},{internalType:"address",name:"uniswapV2Router02",type:"address"},{internalType:"uint256",name:"uniswapDeadline",type:"uint256"},{internalType:"address",name:"liquidityHolder",type:"address"},{internalType:"address",name:"liquidityLocker",type:"address"},{internalType:"address",name:"platformMemeRecipient",type:"address"},{internalType:"address payable",name:"platformFeeRecipient",type:"address"},{internalType:"uint256",name:"platformFeeRateIdo",type:"uint256"},{internalType:"uint256",name:"platformFeeRateDenominatorIdo",type:"uint256"},{internalType:"uint256",name:"platformFeeCreateMeme",type:"uint256"},{internalType:"address",name:"platformFeeCreateMemePayToken",type:"address"},{internalType:"uint256",name:"idoCreatorBuyLimit",type:"uint256"},{components:[{internalType:"uint256",name:"creator",type:"uint256"},{internalType:"uint256",name:"ido",type:"uint256"},{internalType:"uint256",name:"lp",type:"uint256"},{internalType:"uint256",name:"airdrop",type:"uint256"},{internalType:"uint256",name:"platform",type:"uint256"}],internalType:"struct MemooManageStructs.TokenAllocation",name:"allocation",type:"tuple"}],internalType:"struct MemooManageStructs.MemooConfig",name:"memooConfig",type:"tuple"},{internalType:"uint256",name:"creatorTotal",type:"uint256"},{internalType:"uint256",name:"platformTotal",type:"uint256"},{internalType:"uint256",name:"memeCreateTimestamp",type:"uint256"}],internalType:"struct MemeInfoStructs.MemeConfigInfo",name:"",type:"tuple"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"memeKey",type:"string"}],name:"getMemeAddress",outputs:[{internalType:"address",name:"meme",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"}],name:"getRoleAdmin",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"grantRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"hasRole",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"defaultAdmin",type:"address"},{internalType:"address",name:"pauser",type:"address"},{internalType:"address",name:"memooManage",type:"address"}],name:"initialize",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"meme",type:"address"}],name:"memeConfigInfo",outputs:[{components:[{components:[{internalType:"address",name:"creator",type:"address"},{internalType:"address",name:"defaultAdmin",type:"address"},{internalType:"address",name:"pauser",type:"address"},{internalType:"address",name:"minter",type:"address"},{internalType:"string",name:"name",type:"string"},{internalType:"string",name:"symbol",type:"string"},{internalType:"uint256",name:"totalSupply",type:"uint256"},{internalType:"uint8",name:"decimals",type:"uint8"},{internalType:"address",name:"payToken",type:"address"},{internalType:"uint256",name:"idoPrice",type:"uint256"},{internalType:"uint256",name:"airdropPrice",type:"uint256"},{internalType:"uint256",name:"preLaunchSecond",type:"uint256"},{internalType:"uint256",name:"idoUserBuyLimit",type:"uint256"}],internalType:"struct MemeInfoStructs.MemeInfo",name:"memeInfo",type:"tuple"},{components:[{internalType:"address",name:"memeFactory",type:"address"},{internalType:"address",name:"treasury",type:"address"},{internalType:"address",name:"memeWhitelist",type:"address"},{internalType:"address",name:"uniswapV2Factory",type:"address"},{internalType:"address",name:"uniswapV2Router02",type:"address"},{internalType:"uint256",name:"uniswapDeadline",type:"uint256"},{internalType:"address",name:"liquidityHolder",type:"address"},{internalType:"address",name:"liquidityLocker",type:"address"},{internalType:"address",name:"platformMemeRecipient",type:"address"},{internalType:"address payable",name:"platformFeeRecipient",type:"address"},{internalType:"uint256",name:"platformFeeRateIdo",type:"uint256"},{internalType:"uint256",name:"platformFeeRateDenominatorIdo",type:"uint256"},{internalType:"uint256",name:"platformFeeCreateMeme",type:"uint256"},{internalType:"address",name:"platformFeeCreateMemePayToken",type:"address"},{internalType:"uint256",name:"idoCreatorBuyLimit",type:"uint256"},{components:[{internalType:"uint256",name:"creator",type:"uint256"},{internalType:"uint256",name:"ido",type:"uint256"},{internalType:"uint256",name:"lp",type:"uint256"},{internalType:"uint256",name:"airdrop",type:"uint256"},{internalType:"uint256",name:"platform",type:"uint256"}],internalType:"struct MemooManageStructs.TokenAllocation",name:"allocation",type:"tuple"}],internalType:"struct MemooManageStructs.MemooConfig",name:"memooConfig",type:"tuple"},{internalType:"uint256",name:"creatorTotal",type:"uint256"},{internalType:"uint256",name:"platformTotal",type:"uint256"},{internalType:"uint256",name:"memeCreateTimestamp",type:"uint256"}],internalType:"struct MemeInfoStructs.MemeConfigInfo",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[],name:"pause",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"paused",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"callerConfirmation",type:"address"}],name:"renounceRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"revokeRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"unpause",outputs:[],stateMutability:"nonpayable",type:"function"}],we=()=>{const m=se({config:be});ie(),W();const{baseConfig:l}=de();return{getMemeAddressWithSymbol:i.useCallback(async C=>{if(!l||!m)return;const u=await m?.readContract({address:l.MemeFactoryContract,abi:Ce,functionName:"getMemeAddress",args:[C]});return console.log("res: ",u),u},[l,m])}};var ve={VITE_PROJECT_ID:"12054aa070d1f1a41e3420b5d40b665d",VITE_APP_BASE:"/memoo-interface",VITE_ENV:"production",VITE_NODE_TYPE:"mainnet",VITE_EXPLORER_API:"https://explorer-api.zklink.io",VITE_EXPLORER_URL:"https://explorer.zklink.io",VITE_NODE_CHAIN_ID:"1123",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const q=ve.VITE_TWITTER_REDIRECT_URI,j="create_token_storage",z="twitter_client_id",_e=[{label:"immediate",value:y.IMMEDIATE},{label:"1 day",value:y["1DAY"]},{label:"3 days",value:y["3DAYS"]}];function qe(){const{address:m}=W(),[l]=oe(),[c,C]=i.useState(!1),[u,H]=i.useState(!1),[p]=o.useForm(),[G,_]=i.useState(!1),[J,R]=i.useState(!1),[f,g]=i.useState(""),[x,b]=i.useState(""),{config:h,defaultConfig:M,createMeme:N,createMemeLoading:Re}=me(),[Ne,K]=i.useState(!1),[k,E]=i.useState(""),[S,A]=i.useState("");i.useState(""),console.log("memooConfig: ",h);const{getMemeAddressWithSymbol:X}=we(),F=Y(),w=i.useMemo(()=>{if(!h||!M)return 0;const t=Number(h.idoCreatorBuyLimit)/1e4;return Number(V(M?.idoPrice))*Number(V(M?.totalSupply))*t},[h,M]);console.log("memooConfig: ",h),console.log("totalCapInitial: ",w);const L=t=>Array.isArray(t)?t:t?.fileList,Z=t=>{console.log("Received values of form: ",t)},$=(t,n)=>{console.log("onFieldsChange",t)},P=(t,n)=>{if(t)return ge(t).then(a=>{p.setFieldValue(n,n==="banners"?[a.data.file]:a.data.file),n==="icon"&&g(a.data.fileUrl),n==="banners"&&b(a.data.fileUrl)}),!1},Q=i.useCallback(async()=>{const t=await ce(),n=p.getFieldsValue();console.log("formData: ",n),n.iconUrl=f,n.bannerUrl=x,localStorage.setItem(j,JSON.stringify(n)),K(!0);let a=t.data;localStorage.setItem(z,a);const s={response_type:"code",client_id:a,redirect_uri:q,scope:"tweet.read%20tweet.write%20like.write%20users.read%20follows.read%20follows.write",state:"twitter",code_challenge:"challenge",code_challenge_method:"plain"},r=new URL("https://twitter.com/i/oauth2/authorize");r.search=xe.stringify(s,{encode:!1}),window.location.href=r.href},[f,x]);i.useEffect(()=>{const t=l.get("ticker");if(console.log("ticker: ",t),t)ye(t).then(s=>{s?.data&&(g(s.data.icon),b(s.data.banners[0]),E(s.data.twitter),A(s.data.twitterAccessToken),p.setFieldsValue({...s.data,icon:s.data.oldIcon,banners:s.data.oldBanners[0],projectDescription:s.data.description}))});else{const s=localStorage.getItem(j);if(s)try{const r=JSON.parse(s);console.log("data: ",r),r.preLaunchDuration||(r.preLaunchDuration=y.IMMEDIATE),p.setFieldsValue(r),r.icon&&g(r.iconUrl),r.banners&&b(r.bannerUrl)}catch{}else p.setFieldsValue({preLaunchDuration:y.IMMEDIATE})}const n=l.get("code"),a=l.get("state"),d=localStorage.getItem(z);a==="twitter"&&n&&ue({code:n,grantType:"authorization_code",redirectUri:q,codeVerifier:"challenge",refreshToken:"",appClientId:d??""}).then(r=>{const{access_token:ne,twitter:ae}=r.data;A(ne),E(ae)})},[l]);const D=i.useCallback(async()=>{const t=p.getFieldsValue(),n=t.preLaunchDuration===y.IMMEDIATE?0:t.preLaunchDuration===y["1DAY"]?24*3600:3*24*3600,a=w*t.preMarketAcquisition;console.log("preValue: ",a);const d=le(String(a)),s=await N(t.tokenName,t.ticker,n,d);return console.log("res: ",s),s},[N]),U=i.useCallback(async t=>{if(!m){T.warning("Please connect wallet first.");return}try{const n=p.getFieldsValue(),a=await X(n.ticker);if(console.log("tokenAddress: ",a),a&&a!==Te){T.warning(`${n.ticker} is already taken. Please choose another one.`);return}if(!c){T.warning("Please accept the terms and conditions.");return}if(await p.validateFields(),n.twitter=k,n.accessToken=S,t){R(!0);const d=await fe(n);if(console.log("res: ",d),!await D()){T.error("Create failed.");return}localStorage.removeItem(j),T.success("Congratulations! Create meme successfully!"),F("/dashboard")}else{_(!0);const d=await he(n);console.log("res: ",d),localStorage.removeItem(j),T.success("Save meme craft successfully!"),F("/dashboard")}}catch(n){console.log(n)}finally{_(!1),R(!1)}},[k,S,c,D]),ee=()=>{g("")},te=()=>{b("")};return e.jsxs("div",{className:"create_token",children:[e.jsxs("div",{className:"create_token_top",children:[e.jsx("div",{className:"create_token_top_title",children:"Create Token"}),e.jsx("div",{className:"create_token_top_back cursor-pointer",children:e.jsx(je,{})})]}),e.jsxs("div",{className:"flex items-center mb-[30px]",children:[e.jsx("p",{className:"create_project_title",children:"Project Info"}),e.jsx("p",{className:"create_project_title_span",children:"Fill out the fields marked with *"})]}),e.jsxs("div",{className:"create_token_content",children:[e.jsxs("div",{className:"create_token_content_form",children:[e.jsxs(o,{form:p,layout:"horizontal",disabled:!1,onFinish:Z,onFieldsChange:$,className:"create-form",children:[e.jsx(o.Item,{label:e.jsxs("p",{children:["Token Name ",e.jsx("span",{children:"*"})]}),name:"tokenName",rules:[{required:!0,message:"Please input token name!"}],children:e.jsx(I,{showCount:!0,maxLength:20})}),e.jsx(o.Item,{label:e.jsxs("p",{children:["Ticker ",e.jsx("span",{children:"*"})]}),name:"ticker",rules:[{required:!0,message:"Please input ticker!"}],children:e.jsx(I,{showCount:!0,maxLength:8,style:{width:140}})}),e.jsx(o.Item,{label:e.jsxs("p",{children:["Upload Icon ",e.jsx("span",{children:"*"})]}),valuePropName:"fileList",getValueFromEvent:L,name:"icon",children:e.jsxs("div",{className:"token-icon-form-item",children:[f&&e.jsxs("div",{className:"icon-url-container",children:[e.jsx("img",{src:f,alt:""}),e.jsx("span",{className:"icon-url-actions",children:e.jsx(B,{size:16,onClick:ee})})]}),!f&&e.jsx(O,{listType:"picture-card",accept:"image/*",maxCount:1,beforeUpload:t=>P(t,"icon"),showUploadList:{showPreviewIcon:!1,showRemoveIcon:!0},style:{width:140,height:140},className:"custom-upload-icon",children:e.jsx("button",{style:{border:0,background:"none",width:"100%",height:"100%"},type:"button",children:e.jsxs("div",{style:{marginTop:8},className:"flex flex-col jusity-center items-center",children:[e.jsx("img",{src:"./token/icon-upload.svg",alt:"upload",className:"w-[30px] h-[30px]"}),e.jsx("p",{className:"font-OCR text-[10px] text-green leading-4",children:"Upload Image"})]})})})]})}),e.jsx(o.Item,{label:e.jsxs("p",{children:["Project Description ",e.jsx("span",{children:"*"})]}),name:"projectDescription",children:e.jsx(I.TextArea,{showCount:!0,maxLength:100,placeholder:"disable resize",style:{height:208,resize:"none"},className:"custom-create-textarea"})}),e.jsx(o.Item,{label:e.jsxs("p",{children:["Proejct Twitter ",e.jsx("span",{children:"*"})]}),children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("img",{src:"./token/icon-twitter.svg",className:"w-4 h-4 mr-4"}),k&&e.jsx("img",{src:"./create/icon-authed.svg"}),!k&&e.jsx(v,{variant:"secondary",className:"w-[136px] h-[32px]",onClick:Q,children:"CONNECT"})]})}),e.jsx(o.Item,{label:e.jsxs("p",{children:["Pre-Launch Duration ",e.jsx("span",{children:"*"})]}),name:"preLaunchDuration",children:e.jsx(Me.Group,{options:_e,optionType:"button",buttonStyle:"solid"})}),e.jsx(o.Item,{label:e.jsxs("p",{children:["Pre-Market Acquisition ",e.jsx("span",{children:"*"})]}),name:"preMarketAcquisition",style:{marginTop:"40px"},children:e.jsx(pe,{min:0,max:1,minPrice:0,maxPrice:w})}),e.jsx("p",{className:"create_tip_for_acquisition",children:"The creator can enhance the initial allocation by purchasing an additional 30%"}),e.jsxs("div",{className:"create_optional_info",children:[e.jsxs("div",{className:"create_optional_info_title",children:[e.jsx("p",{children:"Optional Info"}),e.jsx("img",{src:u?"./create/icon-minus.svg":"./create/icon-plus.svg",alt:"",onClick:()=>{H(!u)}})]}),u&&e.jsxs("div",{className:"create_optional_form",children:[e.jsx(o.Item,{label:e.jsx("p",{children:"Upload Project Banner"}),valuePropName:"bannerList",getValueFromEvent:L,name:"banners",children:e.jsxs("div",{className:"token-icon-form-item",children:[x&&e.jsxs("div",{className:"icon-url-container",children:[e.jsx("img",{src:x,alt:""}),e.jsx("span",{className:"icon-url-actions",children:e.jsx(B,{size:16,onClick:te})})]}),e.jsx(O,{listType:"picture-card",accept:"image/*",maxCount:1,beforeUpload:t=>P(t,"banners"),showUploadList:{showPreviewIcon:!0,showRemoveIcon:!0},style:{width:140,height:140},className:"custom-upload-banner",previewFile:t=>new Promise(n=>{const a=new FileReader;a.readAsDataURL(t),a.onload=()=>{n(a.result)}}),children:e.jsx("button",{style:{border:0,background:"none"},type:"button",children:e.jsxs("div",{style:{marginTop:8},className:"flex flex-col jusity-center items-center",children:[e.jsx("img",{src:"./token/icon-upload.svg",alt:"upload",className:"w-[30px] h-[30px]"}),e.jsx("p",{className:"font-OCR text-[10px] text-green leading-4 text-center w-[158px]",children:"Recommended 790px X 307px Max size: 50MB"})]})})})]})}),e.jsx(o.Item,{label:e.jsx("p",{children:"Website"}),name:"links",children:e.jsx(I,{maxLength:20,className:"custom-input"})})]})]})]}),e.jsx("div",{children:e.jsxs("p",{className:"create_fee_desc",children:["A platform Fee of 0.05 ETH is applicable to facilitate your meme token creation. You will be entitled to 5% supply of your meme token. The token will be distributed post TGE after"," ",e.jsx("span",{className:"text-[#07E993]",children:"‘fair conditions’"})," are met."," ",e.jsx("span",{className:"text-[#07E993]",children:"Click here"}),"for the tokenomics disclosures."]})}),e.jsx("div",{children:e.jsxs(ke,{value:c,onChange:()=>{C(!c)},className:"create_terms mt-[24px] text-[#ffffff] border-[red]",children:["I accept MeMoo’s ",e.jsx("span",{className:"text-[#07E993]",children:"terms & conditions."})]})}),e.jsxs("div",{className:"flex items-center mt-[48px]",children:[e.jsx(v,{variant:"secondary",className:"w-[322px] h-[50px] uppercase",onClick:()=>U(!1),loading:G,children:e.jsxs("span",{className:"flex items-center",children:[e.jsx("img",{src:"./token/icon-save-draft.svg",className:"w-[14px] mr-[10px]"}),"save draft"]})}),e.jsx(v,{variant:"default",className:"w-[322px] h-[50px] uppercase ml-[16px]",onClick:()=>U(!0),loading:J,children:"confirm"})]})]}),e.jsx("img",{src:"./create/img-create-bg.png",alt:"",className:"create_token_bg"})]})]})}export{qe as default};