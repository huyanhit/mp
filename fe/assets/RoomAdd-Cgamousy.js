import{_ as H,a as q,l as W,H as G,m as J,r as K,o as i,c as d,g as o,f as t,w as r,v as h,G as M,y as _,t as m,u as p,I as P,d as Q,F as g,e as w,J as y,x,K as F,n as X,h as V,M as Y,W as Z,R as ee,p as se,k as oe}from"./index-BMd-QA-V.js";import{_ as ae}from"./DErrors-Beq5o5sd.js";import le from"./ImageFile-SGnJshYu.js";const v=b=>(se("data-v-ad10a409"),b=b(),oe(),b),te={class:"flex-shrink-0"},re=v(()=>o("i",{class:"ri ri-group-line",size:"lg"},"+",-1)),ne=[re],ie={class:"row"},de={class:"col-3 d-flex justify-content-center align-items-center"},me={key:1,src:"https://ui-avatars.com/api/?name=Room",class:"rounded-circle avatar-lg",alt:""},ce={class:"small text-center mt-2"},ue={class:"row"},_e={class:"col-12"},pe={class:"border-1"},fe=["src"],ve=["innerHTML"],be={class:"col-12"},he=v(()=>o("label",{class:"form-label",for:"customFile"},"Choose File",-1)),ge={class:"spinner-border spinner-border-sm mr-2",role:"status","aria-hidden":"true"},ke={class:"col-9"},we={class:"mb-1"},ye={class:"form-label mt-2 pe-2"},Ve=v(()=>o("span",{class:"text-danger"},"*",-1)),Ue={class:"flex-grow-1"},Ce=["placeholder"],$e={class:"mb-1"},Re={class:"form-label mt-2 pe-2"},Me=v(()=>o("span",{class:"text-danger"},"*",-1)),xe={class:"flex-grow-1"},Fe={class:"row mt-2"},Ie={class:"col-12"},Ee={class:"form-group"},Oe={class:"my-2 bg-light p-2 border border-groove rounded"},Se={class:"list-contact py-2 px-3 border border-groove rounded"},Le={key:0,class:"row border-bottom-inset border-1"},Ne={class:"col-md-6 mb-2"},Te={class:"my-2 pt-1"},je={key:0,class:"col-md-6"},ze={class:"pt-1"},Be=["onClick"],Ae=v(()=>o("span",{class:"multiselect-tag-remove-icon"},null,-1)),De=[Ae],He={class:"spinner-border spinner-border-sm mr-2",role:"status","aria-hidden":"true"},qe={__name:"RoomAdd",setup(b){const f=q(),k=W(null),I=G.useEvent(),E=[{value:"1",label:"Member"},{value:"2",label:"Admin"},{value:"3",label:"Read Only"}],e=J({check_all:!1,overlay:!1,saving:!1,members:[],disabled:!0,member_roles:[],modal:!1,show_upload_avatar:!1,files:[],scr_preview:[],icon_preview:[],waiting_upload:!1,form:{name:"",description:"",icon:"",members:{}}}),O=function(l){e.scr_preview=[];for(let s of l.target.files)s.type.substring(0,5)==="image"?e.scr_preview.push(URL.createObjectURL(s)):e.icon_preview.push('<i class="ri-folder-zip-line"></i>'),e.files.push(s)},S=async function(){if(e.files!==null){let l=new FormData;e.waiting_upload=!0;for(let n=0;n<e.files.length;n++)e.files[n].name!==void 0&&l.append("file[]",e.files[n]);l.append("room_id",f.chat.CURRENT_ROOM.id);const s=await f.uploadFile(l);s.success&&(e.show_upload_avatar=!1,e.form.icon=Object.keys(s.data.FILE)[0])}},L=function(){for(let l of f.users)e.members[l.id]=e.check_all},N={name:"required",description:"required"},U=function(){e.modal=!1},T=function(){e.form.name="",e.form.description="",e.form.icon="",e.form.members={},e.member_roles={},e.members={},e.check_all=!1,k.value.resetForm()},j=function(){let l={};e.members={...e.members,...e.member_roles};for(let s in e.members)e.members[s]&&(l[s]=e.members[s]);return l},z=async function(){if((await k.value.validate()).valid){e.saving=!0,e.form.members=j();const s=await f.addRoom(e.form);if(s!=null&&s.success){const n=parseInt(Object.keys(s.data.ROOM)[0]);f.joinChannel({room_id:n}),I.emit("change-room",{id:n}),T()}else e.response=s;e.saving=!1,U()}};return(l,s)=>{const n=Y,C=Z,$=ee,B=K("Multiselect");return i(),d("div",te,[o("div",null,[o("button",{type:"button",class:"btn",size:"lg",onClick:s[0]||(s[0]=a=>e.modal=!0)},ne)]),t(C,{modelValue:e.modal,"onUpdate:modelValue":s[11]||(s[11]=a=>e.modal=a),title:l.$t("chat.message.create-room"),scrollable:"",size:"lg"},{footer:r(()=>[t(n,{type:"submit",variant:"secondary",class:"w-sm",disabled:e.saving,onClick:z},{default:r(()=>[h(o("span",He,null,512),[[M,e.saving]]),_(" "+m(l.$t("common.form.save")),1)]),_:1},8,["disabled"]),t(n,{variant:"outline-secondary",onClick:U},{default:r(()=>[_(m(l.$t("common.form.cancel")),1)]),_:1})]),default:r(()=>[t(ae,{response:e.response},null,8,["response"]),t(p(P),{"validation-schema":N,ref_key:"form",ref:k,class:"form-add-room"},{default:r(()=>[o("div",ie,[o("div",de,[o("div",{class:"avatar-lg cursor-pointer",onClick:s[1]||(s[1]=a=>e.show_upload_avatar=!e.show_upload_avatar)},[e.form.icon?(i(),Q(le,{key:0,img_id:e.form.icon,class:"rounded-circle img-fluid userprofile"},null,8,["img_id"])):(i(),d("img",me)),o("div",ce,m(l.$t("chat.message.click-to-upload")),1)]),t(C,{modelValue:e.show_upload_avatar,"onUpdate:modelValue":s[4]||(s[4]=a=>e.show_upload_avatar=a),title:"Upload avatar",scrollable:""},{footer:r(()=>[t(n,{type:"submit",variant:"secondary",class:"w-sm",disabled:e.saving,onClick:S},{default:r(()=>[h(o("span",ge,null,512),[[M,e.saving]]),_(" "+m(l.$t("common.form.save")),1)]),_:1},8,["disabled"]),t(n,{variant:"outline-secondary",onClick:s[3]||(s[3]=a=>e.show_upload_avatar=!1)},{default:r(()=>[_(m(l.$t("common.form.cancel")),1)]),_:1})]),default:r(()=>[o("div",ue,[o("div",_e,[o("div",pe,[(i(!0),d(g,null,w(e.scr_preview,(a,c)=>(i(),d("img",{ref_for:!0,ref:"preview_image_upload",src:a,class:"mx-1 my-2",key:c,alt:"preview"},null,8,fe))),128)),(i(!0),d(g,null,w(e.icon_preview,(a,c)=>(i(),d("span",{innerHTML:a,key:c,class:"mx-1 my-2 file-upload"},null,8,ve))),128))])]),o("div",be,[he,o("input",{type:"file",class:"form-control",ref:"fileUpload",onChange:s[2]||(s[2]=a=>O(a))},null,544)])])]),_:1},8,["modelValue"])]),o("div",ke,[o("div",we,[o("label",ye,[_(m(l.$t("chat.message.room-name"))+" ",1),Ve]),o("div",Ue,[t(p(y),{name:"name",label:l.$t("chat.message.room-name"),class:"form-control",modelValue:e.form.name,"onUpdate:modelValue":s[6]||(s[6]=a=>e.form.name=a)},{default:r(({field:a})=>[h(o("input",{type:"text",class:"form-control","onUpdate:modelValue":s[5]||(s[5]=c=>e.form.name=c),placeholder:l.$t("chat.message.enter-room-name")},null,8,Ce),[[x,e.form.name]])]),_:1},8,["label","modelValue"]),t(p(F),{name:"name",class:"text-danger"})])]),o("div",$e,[o("label",Re,[_(m(l.$t("chat.message.description"))+" ",1),Me]),o("div",xe,[t(p(y),{name:"description",label:"Mô tả",class:"form-control",modelValue:e.form.description,"onUpdate:modelValue":s[8]||(s[8]=a=>e.form.description=a)},{default:r(({field:a})=>[h(o("textarea",{type:"text",class:"form-control","onUpdate:modelValue":s[7]||(s[7]=c=>e.form.description=c),placeholder:"Enter description"},null,512),[[x,e.form.description]])]),_:1},8,["modelValue"]),t(p(F),{name:"description",class:"text-danger"})])])])]),o("div",Fe,[o("div",Ie,[o("div",Ee,[o("div",Oe,[t($,{modelValue:e.check_all,"onUpdate:modelValue":s[9]||(s[9]=a=>e.check_all=a),onChange:s[10]||(s[10]=a=>L()),id:"check_all_item"},{default:r(()=>[_(m(l.$t("chat.message.check-all")),1)]),_:1},8,["modelValue"])]),o("div",Se,[(i(!0),d(g,null,w(p(f).users,(a,c)=>(i(),d(g,{key:c},[a.id!==p(f).chat.CURRENT_USER.id?(i(),d("div",Le,[o("div",Ne,[o("div",Te,[t($,{modelValue:e.members[a.id],"onUpdate:modelValue":u=>e.members[a.id]=u,id:"check-item-"+a.id},{default:r(()=>[_(m(a.name),1)]),_:2},1032,["modelValue","onUpdate:modelValue","id"])])]),e.members[a.id]?(i(),d("div",je,[o("div",ze,[t(p(y),{name:"member_roles"+a.id,modelValue:e.member_roles[a.id],"onUpdate:modelValue":u=>e.member_roles[a.id]=u},{default:r(()=>[t(B,{modelValue:e.member_roles[a.id],"onUpdate:modelValue":u=>e.member_roles[a.id]=u,value:"1",options:E},{tag:r(({option:u,handleTagRemove:A,disabled:R})=>[o("div",{class:X(["multiselect-tag is-user",{"is-disabled":R}])},[o("span",null,m(u.label),1),R?V("",!0):(i(),d("span",{key:0,class:"multiselect-tag-remove",onClick:D=>A(u,D)},De,8,Be))],2)]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1032,["name","modelValue","onUpdate:modelValue"])])])):V("",!0)])):V("",!0)],64))),128))])])])])]),_:1},512)]),_:1},8,["modelValue","title"])])}}},Ke=H(qe,[["__scopeId","data-v-ad10a409"]]);export{Ke as default};
