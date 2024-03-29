/**
 * Преобразует объект или строку даты в форматы ДД-ММ-ГГГГ и ЧЧ:ММ а также в
 * словесную форму, например: сегодня; вчера; неделю назад и т.д.
 * @param date - Дата в виде строки в формате ГГГГ-ММ-ДД или в виде
 * объекта в формате new Date(). Если задана пустая строка, то
 * подразумевается настоящий момент
 * @returns
 * Объект со свойствами:
 * dateFormat - Дата в формате ДД-ММ-ГГГГ
 * dateWord - словесная форма
 * timeFormat - Время в формате ЧЧ:ММ. Если на входе дата указана строкой в
 * формате ГГГГ-ММ-ДД, то timeFormat вернет текущее время
 */
export function formatDate(date: Date | string) {
  const result = {
    dateFormat: "",
    dateWord: "",
    timeFormat: "",
  };

  let copyDate = date;
  const now = new Date();

  if (!copyDate) {
    copyDate = now;
    result.timeFormat = formatTime(now);
  } else if (typeof copyDate == "string") {
    copyDate = new Date(copyDate);
    result.timeFormat = formatTime(now);
  } else result.timeFormat = formatTime(copyDate);

  const diff = <any>now - <any>copyDate;
  const ago = Math.floor(diff / (84600 * 1000));
  if (ago < 1) copyDate = now;

  //===========================================

  const month = copyDate.getMonth();
  const day = copyDate.getDate();

  const monthStr = month < 10 ? `0${month}` : `${month}`;
  const dayStr = day < 10 ? `0${day}` : `${day}`;

  result.dateFormat = `${copyDate.getFullYear()}-${monthStr}-${dayStr}`;

  //===========================================

  function formatTime(date: Date) {
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const hoursStr = hours < 10 ? `0${hours}` : `${hours}`;
    const minutesStr = minutes < 10 ? `0${minutes}` : `${minutes}`;

    return `${hoursStr}:${minutesStr}`; // вернет время в формате ЧЧ:ММ
  }

  //===========================================

  if (ago < 1) result.dateWord = "Сегодня";
  if (ago === 1) result.dateWord = "Вчера";
  if (ago === 2) result.dateWord = "Позавчера";
  if (ago > 2 && ago < 5) result.dateWord = `${ago} дня назад`;
  if (ago >= 5 && ago < 21) result.dateWord = `${ago} дней назад`;
  if (ago === 21) result.dateWord = `${ago} день назад`;
  if (ago > 21 && ago < 25) result.dateWord = `${ago} дня назад`;
  if (ago >= 25) result.dateWord = `${ago} дней назад`;

  //===========================================

  // Доделать и сделать обработку ошибок если задан неправильный формат
  // Сделать поддержку словесной формы для будущего времени

  return result;
}
