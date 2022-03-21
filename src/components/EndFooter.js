

export default function EndFooter({ total, cardsOpened, choice, finalFooter }) {
    let arrayIcons = choice.map(item => { return (item) })

    function SadChoice() {
        return (
            <div className="endFooter">
                <div className='lineIconEndFooter'>
                    <img src='./static/sad.png' alt='' />
                    <p>Putz..</p>
                </div>
                <h1>Ainda faltam alguns... Mas não desanime!</h1>

                <h1>{cardsOpened}/{total}cabou</h1>
                <div className='icons'>
                    {choice.map(item => {
                        return (

                            <img className='iconFooter' src={`./static/${item}`} alt='' />

                        )
                    })}
                </div>
            </div>)
    }

    function HappyChoice() {
        return (
            <div className="endFooter">
                <div className='lineIconEndFooter'>
                    <img src='./static/party.png' alt='' />
                    <p>Parabéns</p>
                </div>
                <h1>Você não esqueceu de nenhum flashcard</h1>

                <h1>{cardsOpened}/{total} acabou</h1>
                <div className='icons'>
                    {choice.map(item => {
                        return (

                            <img className='iconFooter' src={`./static/${item}`} alt='' />

                        )
                    })}
                </div>
            </div>
        )
    }
    return (
        <div>
            {finalFooter ? <SadChoice /> : <HappyChoice />}
        </div>

    )
}

