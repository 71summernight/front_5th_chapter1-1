import{R as s,B as d}from"./router-CokK9yiR.js";const n=()=>{const o=document.getElementById("root");o.innerHTML="";const t=location.hash.slice(1)||"/",e=s[d+t];if(!e){t!=="/404"&&(location.hash="/404",n());return}const a=e();a&&o.appendChild(a)},i=()=>{window.addEventListener("DOMContentLoaded",n),window.addEventListener("hashchange",n)};i();
