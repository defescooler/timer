import { useState, useEffect } from 'react'
import './App.css'

const motivationalQuotes = [
  "Пархай как бабочка, жаль как пчела",
  "Не суди меня по рубашке, суди по тому, что прячется в моих карманах.",
  "Великие дела начинаются с малых шагов.",
  "Не бойтесь провалов, они — часть пути к успеху.",
  "Сделай сегодня то, что другие не хотят, и завтра будешь жить так, как другие не могут.",
  "Ваше настроение — ваше оружие, не давайте ему сломаться.",
  "Ваше отношение определяет вашу высоту.",
  "Бежать или стоять? Я всегда стоял в тени, но никогда не сдавался.",
  "Ваше творчество — это ваша сила.",
  "Не бойтесь неудач, бойтесь не попробовать.",
  "Не сдавайтесь, потому что путь к успеху может быть долгим и трудным.",
  "Рост начинается там, где заканчивается комфорт."
]

function App() {
  const [name, setName] = useState('') // ставим '' потому что храним текст
  const [timeLeft, setTimeLeft] = useState(0) // 0 - храним числа 
  const [timerActive, setTimerActive] = useState(false)// false - храним логические элементы, идет ли отсчет?
  const [hasStarted, setHasStarted] = useState(false) //начали ли отсчет?
  const [currentQuote, setCurrentQuote] = useState(motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)])

  const startTimer = () => { // когда мы вызовем эту функцию мы поменяем значения функций ниже...
    if (!name.trim()) return;  // если имя пустое — не запускаем
    setTimeLeft(10);           // устанавливаем 10 секунд timeLeft
    setTimerActive(true);      // переключаем флаг (timerActive) на “запущен”
    setHasStarted(true) 
  }
  
  const resetAll = () => {
    setTimerActive(false)
    setTimeLeft(0)
    setName('')
    setHasStarted(false)
  }

  useEffect(() => { // этот юзффект отвечает за создание и автоматическую остановку интервала
    if (!timerActive) {
      return
    }

    const intervalId = setInterval(() => { // setInterval - встроенная функция React в формате const id = setInterval(callbackFunction, delayInMilliseconds);
      setTimeLeft(prev => prev - 1)
    }, 1000)


    return () => {
      clearInterval(intervalId) //тоже встроенная функция, убираем отсчет интервала времени при изменении timrActive
    }
  }, [timerActive]) 

 
  useEffect(() => { // а этот юзэффект следит чтобы мы остановили таймер когда timeLeft дойдёт до 0
    if (timerActive && timeLeft === 0) {
      setTimerActive(false) //останровка таймера
    }
  }, [timeLeft, timerActive])

  useEffect(() => { //юзэффект для вставки рандомных фраз с интервалом в 6 секунд (6000мс)
    const quoteInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * motivationalQuotes.length)
      setCurrentQuote(motivationalQuotes[randomIndex])
    }, 6000)

    return () => {
      clearInterval(quoteInterval)
    }
  }, [])

  return (
    <div className="app-container">
      <h1 className="title">Таймер обратного счёта</h1>

      <div className="input-group">
        <label htmlFor="nameInput">Введите имя:</label>
        <input
          id="nameInput"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Шокан...?"
          disabled={timerActive}
        />
      </div>

      <div className="buttons">
        <button
          onClick={startTimer}
          disabled={timerActive || !name.trim()}
          className={timerActive ? 'btn-disabled' : 'btn-start'}
        >
          Старт таймера
        </button>
        <button onClick={resetAll} className="btn-reset">
          Сброс
        </button>
      </div>

      <div className="timer-display">
        {timerActive && timeLeft > 0 && (
          <p className="countdown">
            {name}, осталось {timeLeft} секунд!
          </p>
        )}

{!timerActive && timeLeft === 0 && name.trim() && hasStarted && (
          <>
            <p className="finished">Ты справился, {name} 💪</p>
           
          </>
        )}
      </div>

      <div className="quote-display">
        <p className="quote">"{currentQuote}"</p>
      </div>
    </div>
  )
}

export default App