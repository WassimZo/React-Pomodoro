import UpdateTimeButton from "./components/UpdateTimeButton"
import ToggleTimerButton from "./components/ToggleTimerButton"
import { useSelector } from "react-redux"
import timerFormat from "./utils/timerFormat"

function App() {

  const chronoValues = useSelector(state => state.chrono)

  return (
    <div className="bg-slate-700 text-slate-100 pt-20 min-h-screen">
      <div className="max-w-xl mx-auto border border-slate-500 rounded p-10">
        <h1 className="text-center text-3xl mb-8">React Pomodoro</h1>

        <div className="flex justify-center mb-8">

          {/* Sessions */}
          <div className="mr-10">
            <p className="text-center mb-1">Sessions</p>
            <div className="flex">
              <UpdateTimeButton sign={"-"} type={"session"}/>
              <p className="mx-4 text-xl">{chronoValues.session.value / 60}</p>
              <UpdateTimeButton sign={"+"} type={"session"}/>
            </div>
          </div>

          {/* Pauses */}
          <div>
            <p className="text-center mb-1">Pauses</p>
            <div className="flex">
              <UpdateTimeButton sign={"-"} type={"pause"}/>
              <p className="mx-4 text-xl">{chronoValues.pause.value / 60}</p>
              <UpdateTimeButton sign={"+"} type={"pause"}/>
            </div>
          </div>

        </div>

        <p className="text-center mb-2 text-xl font-semibold">{chronoValues.displayedValue.heading}</p>

        <p className="text-center flex justify-center mb-1">
          <span className="text-4xl p-4 rounded bg-slate-300 text-slate-900">{timerFormat(chronoValues.displayedValue.value)}</span>
        </p>
        <p className="mb-10 text-center">Passed cycle(s): {chronoValues.cycles}</p>

        <ToggleTimerButton />
      </div>
    </div>
  )
}

export default App
