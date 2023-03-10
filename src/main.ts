import "./style.css";
//import typescriptLogo from './typescript.svg'
//import { setupCounter } from './counter'

function editComment(target: any) {
  //console.log(target.firstElementChild);
  
  let placeholder = target.querySelector(".placeholder");
  if (placeholder) target.innerHTML = "";

  target.style.height = "115px";
}

function handle(e: Event) {
  let target = e.target;
  if (target === textarea) editComment(target);
}

let textarea = document.querySelector(".textarea-wrapper");

document.addEventListener("click", handle);

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
