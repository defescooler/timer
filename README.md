# Таймер обратного отсчета
Таймер обратного счёта — это лёгкое React-приложение, в котором пользователь вводит своё имя, запускает 10-секундный таймер, а по окончании отображается мотивирующее сообщение 

---

## Описание проекта

Проект демонстрирует:

- работу с React-хуками `useState` и `useEffect` для управления состоянием и побочными эффектами;
- создание простого обратного отсчёта (таймера) в компоненте;
- условный рендеринг: блокировка поля ввода во время отсчёта, показ итогового сообщения и кнопки «Попробовать ещё раз» после завершения;
- циклическую трансляцию рандомных мотивационных цитат каждые 6 секунд;
- разделение стилей на глобальные (`index.css`) и локальные (`App.css`).

Идея в том, чтобы пользователь увидел не просто «0», а персональное сообщение «Ты справился, <Имя> 💪» и получил дозу мотивации сразу же после окончания отсчёта.

---

## Возможности

1. **Ввод имени**  
   Пользователь вводит своё имя в текстовое поле. Оно сохраняется и используется в итоговом сообщении.

2. **10-секундный обратный отсчёт**  
   - При клике на кнопку **«Старт таймера»** запускается обратный отсчёт от 10 до 0.  
   - Поле ввода и кнопка запуска блокируются до конца отсчёта, чтобы предотвратить прерывание.

3. **Итоговое сообщение**  
   По завершении отсчёта выводится фраза и появляется кнопка **«Попробовать ещё раз»**.

4. **Кнопка «Сброс»**  
- Останавливает текущий таймер (если он идёт).  
- Сбрасывает счётчик на 0 и отключает флаг «запущен».  
- Сохраняет ранее введённое имя, но возвращает интерфейс в состояние до старта таймера.

5. **Мотивационные цитаты**  
— Список заранее заданных фраз (более 10 вариантов).  
— Цитата меняется каждые 6 секунд в нижней части экрана, независимо от состояния таймера.

---

## Демонстрация

1. **До запуска таймера**  
- Поле ввода активно, кнопка «Старт таймера» доступна, если введено имя.  
- Ни одна цитата не блокирует основной интерфейс — только отображается первая случайная фраза.

2. **Во время работы таймера**  
- Поле ввода и кнопка «Старт таймера» заблокированы.  
- Отображается текущий счёт:  
  ```
  Показ текущего отсчёта с именем: <Имя>, осталось <N> сек
  ```
- Внизу меняются случайные мотивационные цитаты раз в 3 секунды.

3. **После завершения отсчёта**  
- Показывается:
  ```
  Ты справился, <Имя> 💪
  ```
- Появляется кнопка **«Попробовать ещё раз»**.  
- Поле ввода снова разблокировано для изменения имени (по желанию).  
- Цитаты продолжают обновляться каждые 3 секунды.

---

## Технологии

- **React**  
- Хуки: `useState` (для управления состоянием имени, таймера и флага запущен/не запущен), `useEffect` (для запуска/очистки интервалов).

- **JavaScript**  
— Стрелочные функции, деструктуризация, методы работы с массивами.

- **CSS**  
- Глобальные стили в `index.css` (шрифт Inter, базовая типографика, центрирование body, базовые правила для button, a).  
- Локальные стили в `App.css` (градиент, тень, отступы, стили кнопок, стили для цитат).

- **Google Fonts: Inter**  
Читать шрифт Inter для всего приложения.

---

## Установка и запуск

1. **Клонировать репозиторий**
git clone https://github.com/<ваш-профиль>/timer-motivation.git
cd timer-motivation

2. **Установить зависимости**
npm install

3. **Запустить дев-сервер**
npm run dev

4. **(Опционально) Сборка для production**
npm run build
npm run preview

