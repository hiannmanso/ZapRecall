

export default function StartScreen(props) {
    const{setScreen} = props
    return(
        <div className="Screen">
            <div className="logoContainerStartScreen">
                <img className="logo" src='./static/logo.png' alt='logo'/>
                <h1 className="titleLogo">ZapRecall</h1>
            </div>
            <button className="btnStartScreen" onClick={()=>{
                setScreen(true)
            }}>
                <p>Iniciar Recall!</p>
            </button>
        </div>
    )
}