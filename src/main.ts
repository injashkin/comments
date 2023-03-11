import "./style.css";
//import typescriptLogo from './typescript.svg'
//import { setupCounter } from './counter'
let submits = document.querySelector("[name='submits']");

document.addEventListener("click", handleClick);
document.addEventListener("keydown", handleKeydown);

// ========================================================

function handleClick(e: Event) {
  let textarea = document.querySelector(".textarea-wrapper");

  let target = e.target;

  console.log("handleClick", e.target);
  if (target === textarea) editComment(target);
  if (target === submits) formHandling(target);
}

function createComment(e) {
  let userName = e.target.form.user.value;
  let avatar = [...userName][0].toUpperCase();
  let date = e.target.form.date.value;
  let comment = e.target.form.comment.value;

  console.log(avatar);
  let inputContent = document.querySelector(".input-content");
  let newComment = document.createElement("div");
  newComment.innerHTML = `
  <div class="post-content">
    <div class="avatar">
      <a href="" data-username="Влад" class="user">
        <div>${avatar}</div>
      </a>
    </div>
    <div class="post-body">
      <header class="comment__header">
        <span class="post-byline">
          <span class="author publisher-anchor-color"><a href="" data-action="profile">${userName}</a></span>
          <a class="follow-user-container"><span class="follow-user" title="Подписаться"></span></a></span>

        <div class="post-meta" style="display: block">
          <a href="" class="time-ago" title="Пятница, 8 Июля 2022 г., 20:13">8 месяцев назад ${date}</a>
        </div>
      </header>

      <div class="post-message-container" data-role="message-container">
        <div class="post-message" data-role="message">
          <p>${comment}</p>
        </div>
      </div>

      <!-- ****************************** -->

      <footer class="comment__footer">
        <menu class="comment-footer__menu">
          <li class="voting">
            <div class="post-votes">
              <a href="#" class="vote-up" title="Голосовать" name="Голосовать"><span class="control"><img
                    src="./src/image/like.svg" /></span>
                <span class="updatable count">0</span></a>
            </div>
          </li>
          <li class="reply">
            <a class="comment-footer__action" href="#" data-action="reply"><span class="text">Ответить</span></a>
          </li>
        </menu>
      </footer>
    </div>
  </div>
  `;
  inputContent?.after(newComment);
}

function checkForm(e) {
  if (!e.repeat) {
    const newEvent = new Event("click", { bubbles: true, cancelable: true });
    e.target.nextElementSibling.dispatchEvent(newEvent);

    if (!e.target.form.comment.value) {
      e.target.form.comment.placeholder = "Это поле не должно быть пустым!";
      e.target.form.comment.style.setProperty("--placeholder-color", "red");
    }
    if (!e.target.form.user.value) {
      e.target.form.user.placeholder = "Это поле не должно быть пустым!";
      e.target.form.user.style.setProperty("--placeholder-color", "red");
    }
    if (!e.target.form.date.value) {
      let date = new Date();

      let month = date.getMonth();
      let day = date.getDate();

      let monthStr = month < 10 ? `0${month}` : `${month}`;
      let dayStr = day < 10 ? `0${day}` : `${day}`;

      let formate = `${date.getFullYear()}-${monthStr}-${dayStr}`;
      e.target.form.date.value = formate;
    }

    createComment(e);

    //e.target.form.submit()

    e.preventDefault();
  }
}

function handleKeydown(e: any) {
  if (e.code == "Enter" && !e.shiftKey) {
    checkForm(e);
  }
}

function editComment(target: any) {
  //if (target.contains(target.querySelector("input"))) return;
  let placeholder = target.querySelector(".placeholder");

  if (placeholder.classList.contains("hide")) return;
  placeholder.classList.add("hide");

  let form = document.forms.form; //querySelector(".comments__form");
  form.classList.remove("hide");
}

function formHandling(target: any) {
  //if(target != )
}

/*
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
*/
