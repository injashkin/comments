/**
 * Преобразует объект даты в формат ДД-ММ-ГГГГ, а также словесную
 * форму, например: сегодня; вчера; неделю назад и т.д.
 * @param date - Дата в виде объекта, например, текущую дату в виде
 * объекта можно получить так: new Date()
 * @returns
 * Obj - Объект со свойствами:
 * date - Дата в формате ДД-ММ-ГГГГ
 * word - словесная форма
 */
export function formatDate(date) {
  const result = {
    date: "",
    word: "",
  };
  let month = date.getMonth();
  let day = date.getDate();

  let monthStr = month < 10 ? `0${month}` : `${month}`;
  let dayStr = day < 10 ? `0${day}` : `${day}`;
  result.date = `${date.getFullYear()}-${monthStr}-${dayStr}`;

  return result;
}
