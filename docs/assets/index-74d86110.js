(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();function C(n){const o={dateFormat:"",dateWord:"",timeFormat:""};let t=n;const c=new Date;t?typeof t=="string"?(t=new Date(t),o.timeFormat=i(c)):o.timeFormat=i(t):(t=c,o.timeFormat=i(c));const e=c-t,s=Math.floor(e/(84600*1e3));s<1&&(t=c);const l=t.getMonth(),d=t.getDate(),u=l<10?`0${l}`:`${l}`,r=d<10?`0${d}`:`${d}`;o.dateFormat=`${t.getFullYear()}-${u}-${r}`;function i(a){const m=a.getHours(),f=a.getMinutes(),p=m<10?`0${m}`:`${m}`,v=f<10?`0${f}`:`${f}`;return`${p}:${v}`}return s<1&&(o.dateWord="Сегодня"),s===1&&(o.dateWord="Вчера"),s===2&&(o.dateWord="Позавчера"),s>2&&s<5&&(o.dateWord=`${s} дня назад`),s>=5&&s<21&&(o.dateWord=`${s} дней назад`),s===21&&(o.dateWord=`${s} день назад`),s>21&&s<25&&(o.dateWord=`${s} дня назад`),s>=25&&(o.dateWord=`${s} дней назад`),o}function w(){let n,o;const t={left:"",top:"",opacity:""};document.addEventListener("mouseover",c),document.addEventListener("mouseout",d);function c(r){const i=r.target;let a=i.closest("[data-tooltip]");a&&(a.dataset.tooltip===""?e(a):l(a,i))}function e(r){o="complete",n=r.lastElementChild,t.left=n.style.left,t.top=n.style.top,t.opacity=n.style.opacity,s(r,n)}function s(r,i){let a=r.getBoundingClientRect(),m=a.left+(r.offsetWidth-i.offsetWidth)/2,f=a.top-i.offsetHeight,p=m+i.offsetWidth,v=f+i.offsetHeight;m<0&&(m=0),p>document.documentElement.clientWidth&&(m=document.documentElement.clientWidth-i.offsetWidth),f<0&&(f=a.top+r.offsetHeight),v>document.documentElement.clientHeight&&(f=document.documentElement.clientHeight-i.offsetHeight),i.style.left=`${m}px`,i.style.top=`${f}px`}function l(r,i){o="simple";let a=r.dataset.tooltip;n=document.createElement("div"),n.innerHTML=a,n.className="tooltip",i.after(n),s(r,n)}function d(){n&&o==="simple"&&n.remove(),n&&o==="complete"&&u(n)}function u(r){r.style.left=t.left,r.style.top=t.top,r.style.opacity=t.opacity}}const g="/comments/assets/favorite-778060ce.svg",E="/comments/assets/favorite_fill-e5400283.svg",L="/comments/assets/delete-1daacdcf.svg",y=document.querySelector("#comments");w();document.addEventListener("click",b);document.addEventListener("keydown",W);function W(n){const o=n.target;if(n.code=="Enter"&&!n.shiftKey&&o.closest(".comments__form")){const t=o.closest(".comments__form"),c=t.querySelector(".comments__submit");if(!n.repeat){const e=new Event("click",{bubbles:!0,cancelable:!0});c.dispatchEvent(e),n.preventDefault(),_(t)&&S(t)}}}function b(n){const o=n.target;if(o.closest(".form-wrapper")){const t=o.closest(".form-wrapper"),c=t.querySelector(".comments__form"),e=t.querySelector(".appeal");e.classList.contains("hide")||(e.classList.add("hide"),h(c))}if(o.closest(".comments__submit")){const t=o.closest(".input-content"),c=t.querySelector(".appeal"),e=t.querySelector(".comments__form");if(!_(e))return;const s=S(e);t.after(s),t.closest(".children")?t.remove():($(e),h(c))}if(o.closest(".comment-delete")&&o.closest(".post-content").remove(),o.closest(".voting")){const t=o.closest(".voting"),c=t.querySelector("img"),e=t.querySelector(".count");c.getAttribute("src")===g?(c.setAttribute("src",E),e.textContent&&(e.textContent=(+e.textContent+1).toString())):(c.setAttribute("src",g),e.textContent&&(e.textContent=(+e.textContent-1).toString()))}if(o.closest(".reply")){if(y.querySelectorAll(".input-content").length>1){alert("У вас уже открыта форма");return}const c=o.closest(".post-wrapper"),e=y.querySelector(".input-content").cloneNode(!0);console.log(e);const s=document.createElement("div");s.classList.add("children"),c.append(s),s.append(e);const l=e.querySelector(".appeal"),d=e.querySelector(".comments__form");$(l),h(d)}}function S(n){const{user:o,comment:t,date:c}=n,{timeFormat:e,dateWord:s}=C(c.value);let l=o.value,d=[...l][0].toUpperCase(),u=document.createElement("div");return u.innerHTML=`
  <div class="post-wrapper">
    <div class="post-content">
      <div class="avatar">
        <a href="" class="user">
          <div>${d}</div>
        </a>
      </div>
      <div class="post-body">
        <header class="comment__header">
          <span class="post-byline">
            <span class="author"><a href="" data-action="profile">${l}</a></span>
            <a class="follow-user-container"><span class="follow-user" title="Подписаться"></span></a></span>

          <div class="post-meta">
            <a href="" class="time-ago">${s}, в ${e}</a>
          </div>
        </header>

        <div class="post-message-container" data-role="message-container">
          <div class="post-message" data-role="message">
            <p>${t.value}</p>
          </div>
        </div>

        <footer class="comment__footer">
          <menu class="comment-footer__menu">
            <div class="voting">
              <div class="post-votes">
                <a href="#" class="vote-up" title="Голосовать" name="Голосовать"><span class="control"><img
                      src=${g} /></span>
                  <span class="updatable count">0</span></a>
              </div>
            </div>
            <div class="reply">
              <a class="comment-footer__action" href="#" data-action="reply"><span class="text">Ответить</span></a>
            </div>
            <div class="comment-delete">
              <a href="#" title="Удалить комментарий"><img src=${L} /></a>
            </div>
          </menu>
        </footer>
      </div>
    </div>
  </div>
  `,u}function _(n){const{user:o,comment:t}=n;let c=!0,e=!0;return o.value||(o.placeholder="Это поле не должно быть пустым!",o.style.setProperty("--placeholder-color","red"),c=!1),t.value||(t.placeholder="Это поле не должно быть пустым!",t.style.setProperty("--placeholder-color","red"),e=!1),e&&c}function h(n){n.classList.remove("hide")}function $(n){n.classList.add("hide")}
