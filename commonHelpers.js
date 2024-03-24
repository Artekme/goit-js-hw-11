import{S as u,i as o}from"./assets/vendor-5b791d57.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function d(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(t){if(t.ep)return;t.ep=!0;const a=d(t);fetch(t.href,a)}})();let n=new u(".gallery a",{captionDelay:250,captionsData:"alt"});const h=document.querySelector(".gallery");function m(r){h.innerHTML=r.map(e=>`<li class="gallery-item">
<div class="image-card">
<a class="gallery-link" href="${e.largeImageURL}">
<img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}"/>
<div class="data-field">

<div class="img-data">
<h4 class="data-title">Likes</h4>
<p class="data-value">${e.likes}</p>
</div>

<div class="img-data">
<h4 class="data-title">Views</h4>
<p class="data-value">${e.views}</p>
</div>

<div class="img-data">
<h4 class="data-title">Comments</h4>
<p class="data-value">${e.comments}</p>
</div>

<div class="img-data">
<h4 class="data-title">Downloads</h4>
<p class="data-value">${e.downloads}</p>
</div>

</div>
</a>
</div>
</li>`).join(""),n.on("show.simplelightbox",function(){}),n.refresh()}const s=document.querySelector(".loader");s.style.display="none";function f(r){s.style.display="block",fetch(`https://pixabay.com/api/?key=43036012-df3a1e6422cb462a655402953&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`).then(e=>{if(!e.ok)throw new Error("Failed to fetch images. Please try again later.");return e.json()}).then(e=>{s.style.display="none",e.hits.length===0?o.warning({title:"Warning",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:400}):m(e.hits)}).catch(e=>{console.error("Error fetching images:",e),s.style.display="none",o.error({title:"Error",message:"Failed to fetch images. Please try again later.",position:"topRight",maxWidth:400})})}const p=document.querySelector(".gallery"),y=document.querySelector(".search-form"),c=document.querySelector("input");y.addEventListener("submit",r=>{r.preventDefault(),p.innerHTML="";const e=c.value.trim();if(!e){o.show({title:"Warning",message:"Please enter a search query",position:"topRight",maxWidth:400});return}f(e),c.value=""});
//# sourceMappingURL=commonHelpers.js.map
