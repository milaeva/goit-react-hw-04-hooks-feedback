import { useState } from "react"
import Button from "./components/Button/Button"
import Statistics from "./components/Statistics/Statistics"

export default function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const buttons = ["good", "neutral", "bad"]

  const increment = (buttonName) => {
    switch (buttonName) {
      case "good":
        setGood((prevstate) => prevstate + 1)
        break
      case "neutral":
        setNeutral((prevstate) => prevstate + 1)
        break
      case "bad":
        setBad((prevstate) => prevstate + 1)
        break
      default:
        return
    }
  }

  const countTotalFeedback = () => {
    const total = good + neutral + bad
    return total
  }

  const countPositiveFeedbackPercentage = () => {
    const percentage = Math.floor((100 / countTotalFeedback()) * good)
    return percentage
  }

  return (
    <div className="container">
      <div className="section">
        <p>Please leave feedback</p>
        <ul className="list">
          {buttons.map((el) => (
            <Button key={el} buttonName={el} increment={increment} />
          ))}
        </ul>
      </div>
      <div className="feedback-statistics">
        <p>Statistics</p>
        {countTotalFeedback() === 0 ? (
          <p>No feedback given</p>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            percantage={countPositiveFeedbackPercentage()}
          />
        )}
      </div>
    </div>
  )
}
