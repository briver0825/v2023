import{r as v,s as y,a as k}from"./element-plus-a045e21a.js";import{x}from"./@element-plus-fb556ceb.js";import{u as I}from"./useUpload-9088fbb8.js";import{F as V,r as S,k as E,o as r,c as u,b as d,R as i,u as c,S as U}from"./@vue-c4263cf4.js";import{_ as b}from"./_plugin-vue_export-helper-c27b6911.js";const z={class:""},B=["src"],F=V({__name:"uploadSingleImage",props:{modelValue:{},url:{default:"upload/image"},allow_width:{default:2e3},allow_height:{default:2e3},size_error:{default:"文件尺寸过大"},name:{default:"file"}},emits:["update:modelValue","finish"],setup(p,{emit:_}){const a=p,{uploadImage:m}=I(),t=S(a.modelValue);E(()=>a.modelValue,e=>{t.value=e});const f=(e,s)=>{const o=new FileReader;o.readAsDataURL(e),o.onload=n=>{const w=n.target.result,l=new Image;l.src=w,l.onload=async()=>{if(l.width>a.allow_width||l.height>a.allow_height)return k.error(a.size_error);s(e)}}},g=async e=>{const s=new FormData;s.append(a.name,e);const{url:o}=await m(s,a.url+`?name=${a.name}`);t.value=o,_("update:modelValue",t.value),_("finish")},h=async e=>{f(e.file,g)};return(e,s)=>{const o=v,n=y;return r(),u("div",z,[d(n,{action:"",class:"avatar-uploader","http-request":h,"show-file-list":!1},{default:i(()=>[c(t)?(r(),u("img",{key:0,src:c(t),class:"avatar"},null,8,B)):(r(),U(o,{key:1,class:"avatar-uploader-icon"},{default:i(()=>[d(c(x))]),_:1}))]),_:1})])}}});const L=b(F,[["__scopeId","data-v-2dec8b07"]]);export{L as _};