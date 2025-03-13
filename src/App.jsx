import './App.css'

import { useState } from "react"

import PageSwitchingButton from './components/PageSwitchingButton/PageSwitchingButton'
import Timer from './components/Timer/Timer'
import Stopwatch from './components/Stopwatch/Stopwatch'

function App() {
    const [page, setPage] = useState('timer')

    return (
        <>
            <div className="button_switcher_container">
                <PageSwitchingButton isActive={page == 'timer'} onClick={() => setPage('timer')}>Таймер</PageSwitchingButton>
                <PageSwitchingButton isActive={page == 'stopwatch'} onClick={() => setPage('stopwatch')}>Секундомер</PageSwitchingButton>
            </div>

            { page == 'timer' ? <Timer /> : <Stopwatch />}
        </>
    )
}

export default App
