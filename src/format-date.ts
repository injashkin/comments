/**
 * Преобразует объект или строку даты в формат ДД-ММ-ГГГГ, а также в
 * словесную форму, например: сегодня; вчера; неделю назад и т.д.
 * @param date - Дата в виде строки в формате ГГГГ-ММ-ДД или в виде
 * объекта в формате new Date(). Если задана пустая строка, то
 * подразумевается настоящий момент
 * @returns
 * Объект со свойствами:
 * date - Дата в формате ДД-ММ-ГГГГ
 * word - словесная форма
 */
export function formatDate(date: Date | string) {
  let copyDate = date;
  let now = new Date();

  if (!copyDate) {
    copyDate = now;
  } else if (typeof copyDate === "string") copyDate = new Date(copyDate);

  const result = {
    dateFormat: "",
    dateWord: "",
  };

  let month = copyDate.getMonth();
  let day = copyDate.getDate();

  let monthStr = month < 10 ? `0${month}` : `${month}`;
  let dayStr = day < 10 ? `0${day}` : `${day}`;

  result.dateFormat = `${copyDate.getFullYear()}-${monthStr}-${dayStr}`;
  //===========================================
  const diff = (now as any) - (copyDate as any);
  const ago = Math.floor(diff / (84600 * 1000));
  if (ago < 1) result.dateWord = "Сегодня";
  if (ago === 1) result.dateWord = "Вчера";
  if (ago === 2) result.dateWord = "Позавчера";
  if (ago > 2 && ago < 5) result.dateWord = `${ago} дня назад`;
  if (ago >= 5 && ago < 21) result.dateWord = `${ago} дней назад`;
  if (ago === 21) result.dateWord = `${ago} день назад`;
  if (ago > 21 && ago < 25) result.dateWord = `${ago} дня назад`;
  if (ago >= 25) result.dateWord = `${ago} дней назад`;

  // Доделать и сделать обработку ошибок если задан неправильный формат

  return result;
}
