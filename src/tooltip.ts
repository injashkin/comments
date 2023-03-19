/**
 * Выводит всплывающие подсказки при наведении курсором на элемент.
 *
 * Если необходимо добавить всплывающую подсказку элементу, то
 * этому элементу нужно добавить атрибут data-tooltip. Компонент
 * tooltip поддерживает два способа добавления подсказок:
 *
 * Способ 1-ый:
 *
 *   <div data-tooltip="Текст для всплывающей подсказки">Элемент, который показывается по умолчанию</div>
 *
 * Способ 2-ой:
 *
 *   <div data-tooltip="">
 *     <div>Элемент, который показывается по умолчанию</div>
 *     <div>Здесь можно оформить подсказку в виде текста, тегов и классов</div>
 *   </div>
 *
 * Значение data-tooltip во втором способе должно быть пустой строкой
 */
export function tooltip() {
  let tooltip: HTMLElement;
  let type: string;

  const styles = {
    left: "",
    top: "",
    opacity: "",
  };

  document.addEventListener("mouseover", showTooltip);
  document.addEventListener("mouseout", hideTooltip);

  function showTooltip(e: MouseEvent) {
    const target = <HTMLButtonElement>e.target;

    let dataTooltip = <HTMLElement>target.closest("[data-tooltip]");

    if (dataTooltip) {
      let tooltipText = <string>dataTooltip.dataset.tooltip;

      if (tooltipText === "") {
        showCompleteTooltip(dataTooltip);
      } else showSimpleTooltip(dataTooltip, target);
    }
  }

  function showCompleteTooltip(dataTooltip: HTMLElement) {
    type = "complete";
    tooltip = <HTMLElement>dataTooltip.lastElementChild;

    styles.left = tooltip.style.left;
    styles.top = tooltip.style.top;
    styles.opacity = tooltip.style.opacity;

    position(dataTooltip, tooltip);
  }

  function position(dataTooltip: HTMLElement, tooltip: HTMLElement) {
    let rect = dataTooltip.getBoundingClientRect();

    let leftPos =
      rect.left + (dataTooltip.offsetWidth - tooltip.offsetWidth) / 2;
    let topPos = rect.top - tooltip.offsetHeight;
    let rightPos = leftPos + tooltip.offsetWidth;
    let bottomPos = topPos + tooltip.offsetHeight;

    // Предотвращает выход за пределы экрана
    if (leftPos < 0) leftPos = 0;
    if (rightPos > document.documentElement.clientWidth) {
      leftPos =
        document.documentElement.clientWidth - tooltip.offsetWidth;
    }
    if (topPos < 0) topPos = rect.top + dataTooltip.offsetHeight;
    if (bottomPos > document.documentElement.clientHeight) {
      topPos =
        document.documentElement.clientHeight - tooltip.offsetHeight;
    }

    tooltip.style.left = `${leftPos}px`;
    tooltip.style.top = `${topPos}px`;
  }

  function showSimpleTooltip(
    dataTooltip: HTMLElement,
    target: HTMLButtonElement
  ) {
    type = "simple";
    let tooltipText = <string>dataTooltip.dataset.tooltip;

    tooltip = document.createElement("div");
    tooltip.innerHTML = tooltipText;
    tooltip.className = "tooltip";
    target.after(tooltip);
    position(dataTooltip, tooltip);
  }

  function hideTooltip() {
    if (tooltip && type === "simple") {
      tooltip.remove();
    }

    if (tooltip && type === "complete") {
      stash(tooltip);
    }
  }

  function stash(tooltip: HTMLElement) {
    tooltip.style.left = styles.left;
    tooltip.style.top = styles.top;
    tooltip.style.opacity = styles.opacity;
  }
}
