import Header from "./Header";
import FooterDeck from './FooterDeck'
import React from "react";
import EndFooter from './EndFooter'

let cards = [
    { question: ' O que é JSX?', answer: 'Uma extensão de linguagem do JavaScript' },
    { question: 'O React é __ ', answer: 'uma biblioteca JavaScript para construção de interfaces' },
    { question: 'Componentes devem iniciar com __', answer: 'letra maiúscula' },
    { question: 'Podemos colocar __ dentro do JSX', answer: 'expressões' },
    { question: ' O ReactDOM nos ajuda __ ', answer: 'interagindo com a DOM para colocar componentes React na mesma' },
    { question: 'Usamos o npm para __', answer: 'gerenciar os pacotes necessários e suas dependências' },
    { question: 'Usamos props para __', answer: 'passar diferentes informações para componentes ' },
    { question: 'Usamos estado (state) para __', answer: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente' },
    
]
cards = cards.sort(comparador); // Após esta linha, a minhaArray estará embaralhada

// Esta função pode ficar separada do código acima, onde você preferir
function comparador() { 
	return Math.random() - 0.5; 
}

export default function Deck(props) {
    const [cardsOpened, setCardsOpened] = React.useState(0)
    const [choice, setChoice] = React.useState([])
    const [finalFooter, setFinalFooter] = React.useState(false)
    return (
        <>
            <Header />
            <div className="Screen">
                <div className="cards">
                    {cards.map((item, index) => {
                        return (
                            <RenderCard setFinalFooter={setFinalFooter} choice={choice} setChoice={setChoice} cardsOpened={cardsOpened} setCardsOpened={setCardsOpened} index={index + 1} question={item.question} answer={item.answer} />
                        )
                    })}
                </div>
            </div>
            {choice.length === cards.length ? <EndFooter finalFooter={finalFooter} choice={choice} cardsOpened={cardsOpened} total={cards.length} /> : < FooterDeck choice={choice} cardsOpened={cardsOpened} total={cards.length} />}
        </>
    )
}

function RenderCard({ index, question, answer, setCardsOpened, cardsOpened, setChoice, choice, setFinalFooter }) {
    const [showCardClosed, setShowCardClosed] = React.useState(true)
    const [showCardOpen, setShowCardOpen] = React.useState(false)
    const [showCardInfos, setShowCardInfos] = React.useState(false)
    const [color, setColor] = React.useState('black')
    const [iconCard, setIconCard] = React.useState('./static/Vector.svg')
    const [desable, setDesable] = React.useState('')


    return (
        <>

            {showCardClosed ?
                <div className={`card cardClosed ${desable}`} onClick={() => {
                    setShowCardClosed(false)
                    setShowCardOpen(true)
                }}>

                    <p className={`${color}`}>Pergunta {index}</p>
                    <img className="arrowIcon" src={iconCard} alt='arrow'></img>
                </div> : <></>
            }
            {showCardOpen ? <div className="card cardOpen" onClick={() => {
                setShowCardOpen(false)
                setShowCardInfos(true)
            }}>
                <p>{question}</p>
                <img src='./static/setinha.png' alt='setinha'></img>
            </div> : <></>}

            {showCardInfos ? <div className="card cardInfos">
                <p>{answer}</p>
                <div className="buttons">
                    <button className="btn unknow" onClick={(item) => {
                        setShowCardInfos(false)
                        setShowCardClosed(true)
                        setColor('red')
                        setCardsOpened(cardsOpened + 1)
                        setChoice([...choice, 'x.svg'])
                        setFinalFooter(true)
                        setIconCard('./static/x.svg')
                        setDesable('desable')

                    }}>
                        <span>Não lembrei</span>
                    </button>
                    <button className="btn soSo" onClick={(item) => {
                        setShowCardInfos(false)
                        setShowCardClosed(true)
                        setColor('orange')
                        setCardsOpened(cardsOpened + 1)
                        setChoice([...choice, 'icon2.svg'])
                        setIconCard('./static/icon2.svg')
                        setDesable('desable')

                    }}>
                        <span>Quase não lembrei</span>
                    </button>
                    <button className="btn zap" onClick={(item) => {
                        setShowCardInfos(false)

                        setShowCardClosed(true)
                        setColor('green')
                        setCardsOpened(cardsOpened + 1)
                        setChoice([...choice, 'v.svg'])
                        setIconCard('./static/v.svg')
                        setDesable('desable')

                    }}>
                        <span>Zap!</span>
                    </button>
                </div>

            </div> : <></>}
        </>
    )
}