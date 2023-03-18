import "./style.css";
import { formatDate } from "./format-date";
import favoriteSvg from "./image/favorite.svg";
import favoriteFillSvg from "./image/favorite_fill.svg";
import deleteSvg from "./image/delete.svg";

const comments = <HTMLElement>document.querySelector("#comments");

document.addEventListener("click", handleClick);
document.addEventListener("keydown", handleKeydown);

// ====================== Functions ==========================

function handleKeydown(e: KeyboardEvent) {
  const target = <HTMLButtonElement>e.target;

  if (e.code == "Enter" && !e.shiftKey) {
    if (target.closest(".comments__form")) {
      const form = <HTMLFormElement>target.closest(".comments__form");
      const submit = <HTMLFormElement>form.querySelector(".comments__submit");

      if (!e.repeat) {
        const newEvent = new Event("click", {
          bubbles: true,
          cancelable: true,
        });
        submit.dispatchEvent(newEvent);
        e.preventDefault();

        if (checkForm(form)) createComment(form);
      }
    }
  }
}

function handleClick(e: MouseEvent) {
  const target = <HTMLButtonElement>e.target;

  if (target.closest(".form-wrapper")) {
    const formWrapper = <HTMLFormElement>target.closest(".form-wrapper");
    const form = <HTMLFormElement>formWrapper.querySelector(".comments__form");
    const appeal = <HTMLButtonElement>formWrapper.querySelector(".appeal");

    if (!appeal.classList.contains("hide")) {
      appeal.classList.add("hide");
      openElement(form);
    }
  }

  if (target.closest(".comments__submit")) {
    const inputContent = <HTMLFormElement>target.closest(".input-content");
    const appeal = <HTMLFormElement>inputContent.querySelector(".appeal");
    const form = <HTMLFormElement>inputContent.querySelector(".comments__form");

    if (!checkForm(form)) return;
    const newComment = createComment(form);
    inputContent.after(newComment);

    if (inputContent.closest(".children")) {
      inputContent.remove();
    } else {
      closeElement(form);
      openElement(appeal);
    }
  }

  if (target.closest(".comment-delete")) {
    let elem = <HTMLButtonElement>target.closest(".post-content");
    elem.remove();
  }

  if (target.closest(".voting")) {
    const voting = <HTMLElement>target.closest(".voting");
    const img = <HTMLImageElement>voting.querySelector("img");
    const count = <HTMLElement>voting.querySelector(".count");

    if (img.getAttribute("src") === favoriteSvg) {
      img.setAttribute("src", favoriteFillSvg);
      if (count.textContent)
        count.textContent = (+count.textContent + 1).toString();
    } else {
      img.setAttribute("src", favoriteSvg);
      if (count.textContent)
        count.textContent = (+count.textContent - 1).toString();
    }
  }

  if (target.closest(".reply")) {
    const inputContentList = comments.querySelectorAll(".input-content");
    if (inputContentList.length > 1) {
      alert("У вас уже открыта форма");
      return;
    }

    const postWrapper = <HTMLElement>target.closest(".post-wrapper");
    const inputContentClone = <HTMLElement>(
      comments.querySelector(".input-content")?.cloneNode(true)
    );
    const children = document.createElement("div");
    children.classList.add("children");
    postWrapper.append(children);

    children.append(inputContentClone);
    const appeal = <HTMLFormElement>inputContentClone.querySelector(".appeal");
    const form = <HTMLFormElement>(
      inputContentClone.querySelector(".comments__form")
    );
    closeElement(appeal);
    openElement(form);
  }
}

function createComment(form: HTMLFormElement) {
  const { user, comment, date } = form;

  const { timeFormat, dateWord } = formatDate(date.value);

  let userName = user.value;
  let avatar = [...userName][0].toUpperCase();

  let newComment = document.createElement("div");

  newComment.innerHTML = `
  <div class="post-wrapper">
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

        <footer class="comment__footer">
          <menu class="comment-footer__menu">
            <div class="voting">
              <div class="post-votes">
                <a href="#" class="vote-up" title="Голосовать" name="Голосовать"><span class="control"><img
                      src=${favoriteSvg} /></span>
                  <span class="updatable count">0</span></a>
              </div>
            </div>
            <div class="reply">
              <a class="comment-footer__action" href="#" data-action="reply"><span class="text">Ответить</span></a>
            </div>
            <div class="comment-delete">
              <a href="#" title="Удалить комментарий"><img src=${deleteSvg} /></a>
            </div>
          </menu>
        </footer>
      </div>
    </div>
  </div>
  `;

  return newComment;
}

function checkForm(form: HTMLFormElement) {
  const { user, comment } = form;

  let isUser = true;
  let isComment = true;

  if (!user.value) {
    user.placeholder = "Это поле не должно быть пустым!";
    user.style.setProperty("--placeholder-color", "red");
    isUser = false;
  }

  if (!comment.value) {
    comment.placeholder = "Это поле не должно быть пустым!";
    comment.style.setProperty("--placeholder-color", "red");
    isComment = false;
  }

  return isComment && isUser;
}

function openElement(elem: Element) {
  elem.classList.remove("hide");
}

function closeElement(elem: Element) {
  elem.classList.add("hide");
}
