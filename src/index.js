import ReactDOM from 'react-dom'
import StartScreen from './components/StartScreen'
import Deck from './components/Deck'
import React from 'react'


function App() {
    const [showDeck,setShowDeck] = React.useState(false)
    console.log(<Deck/>)
    return(
        <>
            {!showDeck ? <StartScreen setScreen ={setShowDeck}/> : <Deck/>}
        </>
    )
}

ReactDOM.render(<App/>, document.querySelector('.root'))