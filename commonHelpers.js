import{S as l,i as u}from"./assets/vendor-46aac873.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const d=document.querySelector(".loader"),m=document.querySelector(".img-information"),f=document.querySelector(".input-img-name");let c={key:"41575459-699006cd61f4fecce9ea2d52d",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0};function h(a){c.q=a;const s=new URLSearchParams(c);fetch(`https://pixabay.com/api/?${s}`).then(r=>{if(!r.ok)throw new Error("Sorry, there are no images matching your search query. Please try again!");return r.json()}).then(({hits:r})=>{d.classList.add("hidden");const i=document.querySelector(".gallery"),e=new l(".gallery a",{captionDelay:250,captionsData:"alt",close:!0}),t=r.reduce((n,o)=>n+`<li class="gallery-item">
         <a class="image-link" href="${o.largeImageURL}">
         <img class="images" data-source="${o.largeImageURL}" alt="${o.tags}" src="${o.webformatURL}" width="360" height="200">
         </a>
         <div class="information">
         <p>Likes: ${o.likes}</p>
         <p>Views: ${o.views}</p>
         <p>Comments: ${o.comments}</p>
         <p>Downloads: ${o.downloads}</p>
        </div>
      </li>`,"");i.innerHTML=t,e.refresh()}).catch(r=>{u.error({title:"Error",message:r.message,position:"topRight"})})}m.addEventListener("submit",a=>{a.preventDefault(),h(f.value)});
//# sourceMappingURL=commonHelpers.js.map
