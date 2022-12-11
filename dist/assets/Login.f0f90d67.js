import{l as e,w as s,M as a,r as l,o as t,c as o,m as r,a as n,q as d,K as u,p as i,k as c,W as m,Z as p,Q as v}from"./vendor.680f2693.js";import{F as f,a as w,E as x}from"./vee-validate.esm.4d9894ad.js";import{u as g,A as h}from"./index.75ec14bb.js";i("data-v-1dcedaa7");const y={class:"min-h-full flex items-center justify-center px-4 sm:px-6 lg:px-8"},b={class:"max-w-xs w-full space-y-6 -translate-y-1/3"},k=r("div",null,[r("h3",{class:"text-3xl text-center font-bold"},"flomo")],-1),j={class:"rounded-md shadow-sm space-y-3"},M=r("label",{for:"email-address",class:"sr-only"},"手机号码/邮箱",-1),_={class:"relative"},V=r("label",{for:"password",class:"sr-only"},"密码",-1),A=[r("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"gray","stroke-width":"2"},[r("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),r("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})],-1)],$=[r("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"gray","stroke-width":"2"},[r("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"})],-1)],z=r("div",null,[r("button",{type:"submit",class:"group relative w-full flex justify-center px-4 border border-transparent text-sm py-2.5 font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"}," 登录 ")],-1),C={class:"w-full flex justify-center gap-x-5"},B=v(" 注册 "),U=v(" 忘记密码 ");c();var Z=e({setup(e){const i=s(""),c=s(""),v=s(!1),Z=e=>{if(0===e.length)return"用户名不能为空！";if(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e))return!0;return!!/^[a-zA-Z0-9]{6,18}$/.test(e)||"用户名不符合规范，请检查！"},q=e=>{const s=e.length>0,a=/(?=^.{6,}$).*$/.test(e);return s&&a},E=a(),F=g(),I=async()=>{const e=await h({username:i.value,password:c.value});e&&(F.setToken(e.data.token),E.push({path:"/memo"}))};return(e,s)=>{const a=l("router-link");return t(),o("div",y,[r("div",b,[k,n(d(f),{class:"mt-8 space-y-2",onSubmit:I},{default:u((()=>[r("div",j,[r("div",null,[M,n(d(w),{id:"email-address",name:"email",type:"email",autocomplete:"email",rules:Z,modelValue:i.value,"onUpdate:modelValue":s[0]||(s[0]=e=>i.value=e),class:"flomo-input on-active",placeholder:"手机号码/邮箱"},null,8,["modelValue"]),n(d(x),{name:"email",class:"text-red-500 text-xs italic"})]),r("div",_,[V,n(d(w),{id:"password",name:"password",type:v.value?"text":"password",autocomplete:"current-password",rules:q,modelValue:c.value,"onUpdate:modelValue":s[1]||(s[1]=e=>c.value=e),class:"flomo-input on-active",placeholder:"密码"},null,8,["type","modelValue"]),n(d(x),{name:"password",class:"text-red-500 text-xs italic"}),m(r("div",{class:"eye_open",onClick:s[2]||(s[2]=e=>v.value=!1)},A,512),[[p,v.value]]),m(r("div",{class:"eye_close",onClick:s[3]||(s[3]=e=>v.value=!0)},$,512),[[p,!v.value]])])]),z,r("div",C,[n(a,{to:"/logup",class:"text-blue-400"},{default:u((()=>[B])),_:1}),n(a,{to:"/reset",class:"text-blue-400"},{default:u((()=>[U])),_:1})])])),_:1})])])}}});Z.__scopeId="data-v-1dcedaa7";export{Z as default};
