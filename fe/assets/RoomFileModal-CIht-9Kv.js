import{a as u,m as v,o as i,c,f as d,w as _,u as r,F as b,e as y,g as t,t as h,O as x,a4 as w,P as k}from"./index-BMd-QA-V.js";import{_ as F}from"./FileSize-D3D-1plQ.js";import L from"./ImageFile-SGnJshYu.js";const R={class:"inline-block"},E=t("button",{class:"btn btn-ghost-success btn-icon",type:"button",title:"Danh sách files bạn đã upload"},[t("i",{class:"ri ri-folder-6-line"})],-1),S={class:"vstack gap-2"},I={class:"border rounded border-dashed p-2"},A={class:"d-flex align-items-center"},C={class:"flex-shrink-0 me-3"},H={class:"avatar-xs"},M={key:0,class:"avatar-xs me-2"},T={key:1,class:"avatar-title bg-light text-secondary rounded fs-20"},W=t("i",{class:"ri-folder-zip-line"},null,-1),$=[W],B={class:"flex-grow-1 overflow-hidden"},N={class:"fs-13 mb-1"},j={href:"#",class:"text-body text-truncate d-block"},z={class:"text-muted"},D={class:"d-flex align-items-end flex-column"},O=["onClick"],U=t("i",{class:"ri-download-2-line align-bottom me-2 text-muted"},null,-1),V=[U],K={class:"flex-grow-1 text-muted small"},P={key:1,class:"text-center border rounded border-dashed p-2"},Y=t("i",{class:"ri-delete-bin-7-line fs-24 text-muted"},null,-1),q=t("div",{class:"text-center pb-3 mt-2"}," Không có file nào ",-1),G=[Y,q],te={__name:"RoomFileModal",setup(J){const f=new k,a=u(),s=v({overlay:!1,modal:!1,page:0}),p=async function(o){let e=o.target;Math.ceil(e.scrollTop)>=e.scrollHeight-e.offsetHeight?s.page<a.chat.MY_FILE.total_page-1&&(s.page++,s.overlay=!0,await a.getFiles({page:s.page}),e.scrollTop=1,s.overlay=!1):Math.ceil(e.scrollTop)<1&&s.page>1&&(s.page--,s.overlay=!0,await a.getFiles({page:s.page}),e.scrollTop=e.scrollHeight-e.offsetHeight-1,s.overlay=!1)},g=async o=>{const e=document.createElement("a");document.body.appendChild(e),a.chat.FILE_RAW[o.id]||await f.getImageRaw({id:o.id}).then(n=>n.blob()).then(n=>{n&&(a.chat.FILE_RAW={...a.chat.FILE_RAW,[o.id]:{blob:URL.createObjectURL(n)}})}),e.style="display: none",e.href=a.chat.FILE_RAW[o.id].blob,e.download=o.name+"."+o.ext,e.click()};return(o,e)=>{const n=x,m=w;return i(),c("div",R,[d(m,{placement:"bottom",click:!0,title:o.$t("chat.message.my-files"),class:"z-1"},{target:_(()=>[E]),default:_(()=>[d(n,{show:r(s).overlay,"spinner-variant":"secondary"},{default:_(()=>[r(a).my_files&&r(a).my_files.length>0?(i(),c("div",{key:0,class:"b-overlay-wrap",style:{"min-height":"300px","max-height":"440px","overflow-y":"auto"},onScroll:e[0]||(e[0]=l=>p(l))},[(i(!0),c(b,null,y(r(a).my_files,l=>(i(),c("div",S,[t("div",I,[t("div",A,[t("div",C,[t("div",H,[l.type==="image"?(i(),c("div",M,[d(L,{img_id:l.id,class:"img-fluid userprofile"},null,8,["img_id"])])):(i(),c("div",T,$))])]),t("div",B,[t("h5",N,[t("a",j,h(l.name)+"."+h(l.ext),1)]),t("div",z,[d(F,{item:l},null,8,["item"])])]),t("div",D,[t("a",{class:"flex-grow-1 cursor-pointer",onClick:Q=>g(l)},V,8,O),t("span",K,h(o.filters.fromNow(l.created_at)),1)])])])]))),256))],32)):(i(),c("div",P,G))]),_:1},8,["show"])]),_:1},8,["title"])])}}};export{te as default};
