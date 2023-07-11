import React, { useState, useEffect } from 'react'
import heart from '../Images/heart.svg'
import reload from '../Images/reload.svg'
import score1 from '../Images/score1.png'
import score2 from '../Images/score2.png'
import score3 from '../Images/score3.png'
import fail from '../Images/catBored.png'
import './Home.css'

export default function Home() {
  const [color, setColor] = useState('#adaf0d')
  const [color2, setColor2] = useState('#0daf0d')
  const [color3, setColor3] = useState('#041f3c')
  const [randomColor, setRandomColor] = useState(color3)
  const [prevRandomColor, setPrevRandomColor] = useState(null);
  const [answer, setAnswer] = useState('Guess the color!')
  const [life, setlife] = useState(20)
  const [ansCount, setAnsCount] = useState(0)
  const [comobo, setComobo] = useState(0)
  const [comboMax, setComboMax] = useState(0)
  const [restart, setRestart] = useState(false)


  useEffect(() => {
    if (answer === 'Correct') {
      setAnsCount(count => count + 1)
      setComobo(count => count + 1)
    }
    else if (answer === 'Incorrect') {
      setlife(life => life - 1)
      setComobo((value) => {
        if (value > 0) setComboMax((maxVal) => value > maxVal ? value : maxVal)
        return 0
      })
    }
  }, [randomColor, answer])

  useEffect(() => {
    if (life === 0) {
      setRestart(true)
    }
  }, [life])


  const numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
  const randomColorGenerate = (colorData) => {
    let digit = ''
    let hex = ''
    for (let index = 0; index < 18; index++) {
      digit = numArr[Math.floor(Math.random() * 16)]
      hex = hex.concat(digit)
    }
    let colorArr = [`#${hex.slice(0, 6)}`, `#${hex.slice(6, 12)}`, `#${hex.slice(12, 18)}`]
    let chooseColor = colorArr[Math.floor(Math.random() * 3)]

    setRandomColor(chooseColor)
    setColor(`#${hex.slice(0, 6)}`)
    setColor2(`#${hex.slice(6, 12)}`)
    setColor3(`#${hex.slice(12, 18)}`)
    setPrevRandomColor(randomColor);
    setAnswer(colorData === randomColor ? 'Correct' : 'Incorrect');
  }

  const restartGame = () => {
    setRestart(false)
    setComobo(0)
    setComboMax(0)
    setAnsCount(0)
    setlife(20)
    setAnswer('Start!')
  }

  return (
    <>
      <div className='container-home'>
        <h1>HI, I'M CHAI</h1>
        <p>Welcome to my web space!</p>
      </div>

      <section className='section-home'>
        <div className='title'><h2>Color Clash Challenge</h2></div>

        <div className='game-main'>
          <div className='game-ans'>{`Correct answers: ${ansCount}`}</div>
          <div className='game-combo'>
            <div className={`combo-main ${comboMax === 0 ? 'hide' : "show"}`}>{`Combo: x${comobo}`}</div>
            <div className={`combo-max ${comboMax === 0 ? 'hide' : "show"}`}>{`x${comboMax}`}</div>
          </div>

          <div className='color-container'>

            <div className='color-field' style={{ backgroundColor: randomColor }}>
              <div className='life'>
                <div>{life}</div>
                <img src={heart} alt="life" />
              </div>

              <div className={`answer ${!restart ? 'show' : 'hide'}`}>
                {`${answer === 'Incorrect' ? `${answer}: It's ${prevRandomColor}` : `${answer}`}`}
              </div>

              <div className={`comment-end ${!restart ? 'hide' : 'show'}`}>
                {
                  comboMax >= 10 ? <div>Did you cheat!?<img src={score3} alt="Restart" /></div> :
                    ansCount <= 15 ? <div>Better luck next time!<img src={fail} alt="Restart" /></div> :
                      ansCount <= 25 ? <div><img src={score1} alt="Restart" /></div> :
                        ansCount <= 35 ? <div>!!!<img src={score2} alt="Restart" /></div> :
                          <div>Did you cheat!?<img src={score3} alt="Restart" /></div>
                }
              </div>

              <div className={`re-container ${!restart ? 'hide' : 'show'}`}>
                <button className='restart' onClick={() => restartGame()}>
                  <img src={reload} alt="restart" />
                </button>
              </div>

            </div>

            <div className={`btn-choose ${!restart ? 'show' : 'hide'}`}>
              <button onClick={() => randomColorGenerate(color)}>{color}</button>
              <button onClick={() => randomColorGenerate(color2)}>{color2}</button>
              <button onClick={() => randomColorGenerate(color3)}>{color3}</button>
            </div>


          </div>
          <div className='re-bottom'>
            <button className='restart' onClick={() => restartGame()}>
              Restart
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
