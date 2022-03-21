import React from 'react'


export default function FooterDeck({ total, cardsOpened, choice }) {
    return (

        <div className="footer">

            <h1>{cardsOpened}/{total}CONCLUÍDOS</h1>
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

