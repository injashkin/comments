import "./style.css";
import { formatDate } from "./format-date";
//import typescriptLogo from './typescript.svg'

let submits = document.querySelector("[name='submits']");

document.addEventListener("click", handleClick);
document.addEventListener("keydown", handleKeydown);

// ========================================================

function handleClick(e: Event) {
  let textarea = document.querySelector(".textarea-wrapper");

  //let { target } = e;
  const target = <HTMLButtonElement>e.target;

  const placeholder = target.querySelector<HTMLButtonElement>(".placeholder")!;

  if (target === textarea) editComment(placeholder);
}

function handleKeydown(e: any) {
  const ev = e as KeyboardEvent;
  const target = e.target;

  if (ev.code == "Enter" && !ev.shiftKey) {
    if (target.closest("#form")) {
      const form = <HTMLFormElement>document.querySelector("#form");

      const checkedForm = checkForm(form);
      createComment(checkedForm);
    }
  }
}

function createComment(form: HTMLFormElement) {
  const { user, comment, date } = form;

  console.log(date.value);

  const { timeFormat, dateWord } = formatDate(date.value);

  let userName = user.value;
  let avatar = [...userName][0].toUpperCase();
  //let date = e.target.form.date.value;

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

        <div class="post-meta">
          <a href="" class="time-ago" title="Пятница, 8 Июля 2022 г., 20:13">${dateWord}, в ${timeFormat}</a>
        </div>
      </header>

      <div class="post-message-container" data-role="message-container">
        <div class="post-message" data-role="message">
          <p>${comment.value}</p>
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

function checkForm(form: HTMLFormElement) {
  const { user, comment } = form;

  //if (!e.repeat) {
  //const newEvent = new Event("click", { bubbles: true, cancelable: true });
  //target.nextElementSibling.dispatchEvent(newEvent);

  if (!user.value) {
    user.placeholder = "Это поле не должно быть пустым!";
    user.style.setProperty("--placeholder-color", "red");
  }

  if (!comment.value) {
    comment.placeholder = "Это поле не должно быть пустым!";
    comment.style.setProperty("--placeholder-color", "red");
  }

  //e.preventDefault();
  // }
  return form;
}

function editComment(placeholder: HTMLButtonElement) {
  if (placeholder.classList.contains("hide")) return;
  placeholder.classList.add("hide");

  let form = <HTMLElement>placeholder.nextElementSibling;

  //let form = document.forms.form; //querySelector(".comments__form");
  form.classList.remove("hide");
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
