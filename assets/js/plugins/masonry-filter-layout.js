/*------------------------------------------------------------------------------
MIT License

https://github.com/DoomAccount/masonry-filter-layout

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
 * @function filterMasonry
 * 
 * This function sets up a masonry layout and handles filtering logic for elements in containers marked with `.have-filter-masonry`. 
 * It dynamically calculates column layouts based on screen size, applies the Masonry effect, and manages filtering of portfolio items.
 * 
 * Key functionalities include:
 * - Dynamically adjusting grid layout based on screen size (mobile, tablet, desktop, etc.).
 * - Filtering items based on categories, triggered by buttons with specific `data-filter` attributes.
 * - Maintaining responsiveness by recalculating the Masonry layout on window resize.
 * 
 * Usage:
 * - Attach this function to containers with the `.have-filter-masonry` class to enable the Masonry layout and filtering system.
 */
const filterMasonry=()=>{let e=document.querySelectorAll(".have-filter-masonry");e.length&&e.forEach(e=>{let t=e.querySelector("[data-filter-masonry]"),r=e.querySelector(".filter-buttons");if(!t)return;let l;try{l=JSON.parse(t.getAttribute("data-filter-masonry"))||{}}catch(i){console.error("Error parsing data-filter-masonry attribute:",i),l={}}let a="number"==typeof l.default?l.default:1,s="number"==typeof l.mobile?l.mobile:1,o="number"==typeof l.tablet?l.tablet:2,n="number"==typeof l.desktop?l.desktop:3,d="number"==typeof l.xlarge?l.xlarge:4,c=()=>{let e=Array.from(t.querySelectorAll(".grid-item")),r="100%",l=a;window.innerWidth<481?(l=s,r=100/s):window.innerWidth<768?(l=o,r=100/o):window.innerWidth<1280?(l=n,r=100/n):(l=d,r=100/d);let i=Array(l).fill(0);e.forEach(e=>{e.style.position="absolute",e.style.width=`${r}%`;let t=i.indexOf(Math.min(...i)),a=`${t*(100/l)}%`;e.style.left=a,e.style.top=`${i[t]}px`,i[t]+=e.offsetHeight}),t.style.position="relative",t.style.height=`${Math.max(...i)}px`};c();let f=e=>{let r=Array.from(t.querySelectorAll(".grid-item"));r.forEach(t=>{if("*"===e||t.classList.contains(e)){t.style.display="",setTimeout(()=>{t.classList.add("active"),t.classList.remove("hidden")},300);return}t.classList.remove("active"),t.classList.add("hidden"),setTimeout(()=>{t.classList.contains("active")||(t.style.display="none"),c()},200)}),c()};if(r){let y=r.querySelectorAll("button");y.forEach(e=>{e.addEventListener("click",()=>{y.forEach(e=>e.classList.remove("active")),e.classList.add("active");let t="*"===e.getAttribute("data-filter")?"*":e.getAttribute("data-filter").toLowerCase();f(t)})})}window.addEventListener("resize",()=>{requestAnimationFrame(()=>{c()})})})};document.addEventListener("DOMContentLoaded",()=>{setTimeout(()=>filterMasonry(),1500)});
