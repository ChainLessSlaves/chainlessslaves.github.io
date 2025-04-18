








/*------------------------------------------------------------------------------
MIT License

https://github.com/DoomAccount/gallery-pop

Copyright (c) 2024 DoomAccount (Mostafa Sabry)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
------------------------------------------------------------------------------*/
/**
 * @function gallery_Pop
 * 
 * A comprehensive gallery pop-up system for viewing images and videos. This function dynamically creates
 * a modal overlay with navigation controls, thumbnails, and a counter for media items grouped by a shared identifier.
 * 
 * Key Features:
 * - Supports both image and video content.
 * - Enables navigation through next/previous buttons or thumbnail selection.
 * - Displays a counter showing the current media index and total items.
 * - Automatically handles media grouping via `data-group` attributes.
 * - Responsive design with full-screen overlay.
 * - Closes on "Escape" key press or clicking outside the content area.
 * 
 * Usage:
 * - Add a `data-gallerypop` attribute to triggers, specifying the media source (image or video).
 * - Group media items with a `data-group` attribute for seamless navigation within the same group.
 * - Include optional `data-video-image` for video thumbnails.
 */

const gallery_Pop=()=>{let e=document.createElement("div");e.classList.add("gallerypop-overlay"),document.body.appendChild(e);let t=0,l={},a=()=>{let l=document.createElement("div");return l.classList.add("gallerypop-counter"),l.textContent=`${t+1} / 1`,e.appendChild(l),l};function s(s){let c=s.getAttribute("data-gallerypop"),o=s.getAttribute("data-group");e.classList.remove("hide"),e.classList.add("show"),l[o]||(l[o]=[],document.querySelectorAll(`[data-gallerypop][data-group="${o}"]`).forEach(e=>{let t=e.getAttribute("data-gallerypop"),a=e.getAttribute("data-video-image");l[o].includes(t)||l[o].push(a||t)})),t=l[o].indexOf(c);let p=document.createElement("div");p.classList.add("gallerypop-content");let y=c.match(/\.(mp4|webm|ogg)$/i)?"video":"image",g;"video"===y?((g=document.createElement("video")).src=c,g.controls=!0,g.autoplay=!0,g.style.width="auto",g.style.height="100%",g.style.objectFit="contain",g.style.margin="auto",g.style.display="block"):((g=document.createElement("img")).src=c,g.alt="Gallery Image",g.style.width="auto",g.style.height="100%",g.style.objectFit="contain",g.style.margin="auto",g.style.display="block"),g.classList.add("gallerypop-image"),p.appendChild(g),e.innerHTML="",e.appendChild(p),e.style.display="flex",e.style.alignItems="center",e.style.justifyContent="center";let u=document.createElement("button");u.classList.add("gallerypop-close"),u.innerHTML="",u.addEventListener("click",r),e.appendChild(u);let v=document.createElement("div");v.classList.add("gallerypop-nav","prev"),v.addEventListener("click",()=>i(-1,o)),e.appendChild(v);let m=document.createElement("div");m.classList.add("gallerypop-nav","next"),m.addEventListener("click",()=>i(1,o)),e.appendChild(m);let h=document.createElement("div");h.classList.add("gallerypop-thumbs"),l[o].forEach((e,t)=>{let l=document.createElement("img");l.src=e,l.classList.add("gallerypop-thumb"),l.addEventListener("click",()=>n(t,o)),l.addEventListener("mouseenter",()=>l.classList.add("active")),l.addEventListener("mouseleave",()=>l.classList.remove("active")),h.appendChild(l)}),e.appendChild(h),e.addEventListener("click",t=>{(t.target===e||t.target===h||t.target===u||t.target===p)&&r()}),setTimeout(()=>{g.classList.add("show")},10);let L=a();d(L)}function r(){let t=e.querySelector(".gallerypop-image");t.classList.remove("show"),setTimeout(()=>{e.classList.remove("show")},500),setTimeout(()=>{e.classList.add("hide")},600),setTimeout(()=>{e.style.display="none",e.innerHTML=""},900)}function i(a,s){t=(t+a+l[s].length)%l[s].length;let r=e.querySelector(".gallerypop-content img");if(!r)return;r.src=l[s][t];let i=e.querySelectorAll(".gallerypop-thumb");i.forEach(e=>e.classList.remove("active")),i[t].classList.add("active"),d(e.querySelector(".gallerypop-counter"))}function n(a,s){t=a;let r=e.querySelector(".gallerypop-content img");if(!r)return;r.src=l[s][t];let i=e.querySelectorAll(".gallerypop-thumb");i.forEach(e=>e.classList.remove("active")),i[t].classList.add("active"),d(e.querySelector(".gallerypop-counter"))}function d(e){let a=l[Object.keys(l)[0]].length;e.textContent=`${t<0?1:t+1} / ${a}`}document.addEventListener("keydown",e=>{"Escape"===e.key&&r()}),document.querySelectorAll("[data-gallerypop]").forEach(e=>{e.addEventListener("click",t=>{t.preventDefault(),s(e)})})};document.addEventListener("DOMContentLoaded",()=>{setTimeout(()=>gallery_Pop(),1500)});