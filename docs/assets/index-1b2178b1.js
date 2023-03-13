(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function _(n){let o=n;const r=new Date;o?typeof o=="string"&&(o=new Date(o)):o=r;const s=r-o,e=Math.floor(s/(84600*1e3));e<1&&(o=r);const t={dateFormat:"",dateWord:"",timeFormat:""},c=o.getMonth(),a=o.getDate(),i=c<10?`0${c}`:`${c}`,h=a<10?`0${a}`:`${a}`;t.dateFormat=`${o.getFullYear()}-${i}-${h}`;const l=o.getHours(),d=o.getMinutes(),y=l<10?`0${l}`:`${l}`,$=d<10?`0${d}`:`${d}`;return t.timeFormat=`${y}:${$}`,e<1&&(t.dateWord="Сегодня"),e===1&&(t.dateWord="Вчера"),e===2&&(t.dateWord="Позавчера"),e>2&&e<5&&(t.dateWord=`${e} дня назад`),e>=5&&e<21&&(t.dateWord=`${e} дней назад`),e===21&&(t.dateWord=`${e} день назад`),e>21&&e<25&&(t.dateWord=`${e} дня назад`),e>=25&&(t.dateWord=`${e} дней назад`),t}const u="/comments/assets/favorite-778060ce.svg",S="/comments/assets/favorite_fill-e5400283.svg",b="/comments/assets/delete-1daacdcf.svg",f=document.querySelector("#comments");document.addEventListener("click",w);document.addEventListener("keydown",C);function C(n){const o=n,r=n.target;if(o.code=="Enter"&&!o.shiftKey&&r.closest(".comments__form")){const s=r.closest(".comments__form"),e=s.querySelector(".comments__submit");if(!n.repeat){const t=new Event("click",{bubbles:!0,cancelable:!0});e.dispatchEvent(t),n.preventDefault(),g(s)&&v(s)}}}function w(n){var r;const o=n.target;if(o.closest(".form-wrapper")){const s=o.closest(".form-wrapper"),e=s.querySelector(".comments__form"),t=s.querySelector(".appeal");t.classList.contains("hide")||(t.classList.add("hide"),m(e))}if(o.closest(".comments__submit")){const s=o.closest(".input-content"),e=s.querySelector(".appeal"),t=s.querySelector(".comments__form");if(!g(t))return;const c=v(t);s.after(c),s.closest(".children")?s.remove():(p(t),m(e))}if(o.closest(".comment-delete")&&o.closest(".post-content").remove(),o.closest(".voting")){const s=o.closest(".voting"),e=s.querySelector("img"),t=s.querySelector(".count");e.getAttribute("src")===u?(e.setAttribute("src",S),t.textContent&&(t.textContent=(+t.textContent+1).toString())):(e.setAttribute("src",u),t.textContent&&(t.textContent=(+t.textContent-1).toString()))}if(o.closest(".reply")){if(f.querySelectorAll(".input-content").length>1){alert("У вас уже открыта форма");return}const e=o.closest(".post-wrapper"),t=(r=f.querySelector(".input-content"))==null?void 0:r.cloneNode(!0),c=document.createElement("div");c.classList.add("children"),e.append(c),c.append(t);const a=t.querySelector(".appeal"),i=t.querySelector(".comments__form");p(a),m(i)}}function v(n){const{user:o,comment:r,date:s}=n,{timeFormat:e,dateWord:t}=_(s.value);let c=o.value,a=[...c][0].toUpperCase(),i=document.createElement("div");return i.innerHTML=`
  <div class="post-wrapper">
    <div class="post-content">
      <div class="avatar">
        <a href="" data-username="Влад" class="user">
          <div>${a}</div>
        </a>
      </div>
      <div class="post-body">
        <header class="comment__header">
          <span class="post-byline">
            <span class="author publisher-anchor-color"><a href="" data-action="profile">${c}</a></span>
            <a class="follow-user-container"><span class="follow-user" title="Подписаться"></span></a></span>

          <div class="post-meta">
            <a href="" class="time-ago" title="Пятница, 8 Июля 2022 г., 20:13">${t}, в ${e}</a>
          </div>
        </header>

        <div class="post-message-container" data-role="message-container">
          <div class="post-message" data-role="message">
            <p>${r.value}</p>
          </div>
        </div>

        <footer class="comment__footer">
          <menu class="comment-footer__menu">
            <div class="voting">
              <div class="post-votes">
                <a href="#" class="vote-up" title="Голосовать" name="Голосовать"><span class="control"><img
                      src=${u} /></span>
                  <span class="updatable count">0</span></a>
              </div>
            </div>
            <div class="reply">
              <a class="comment-footer__action" href="#" data-action="reply"><span class="text">Ответить</span></a>
            </div>
            <div class="comment-delete">
              <a href="#" title="Удалить комментарий"><img src=${b} /></a>
            </div>
          </menu>
        </footer>
      </div>
    </div>
  </div>
  `,i}function g(n){const{user:o,comment:r}=n;let s=!0,e=!0;return o.value||(o.placeholder="Это поле не должно быть пустым!",o.style.setProperty("--placeholder-color","red"),s=!1),r.value||(r.placeholder="Это поле не должно быть пустым!",r.style.setProperty("--placeholder-color","red"),e=!1),e&&s}function m(n){n.classList.remove("hide")}function p(n){n.classList.add("hide")}
