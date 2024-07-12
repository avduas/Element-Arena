import MainPop from './mainPop'
import './mainScreen.css'

function MainScreen() {

    return (
        <>
            <MainPop />
            <div className='upperBlock'>
                <div className="element">
                    <img src="..\..\Fire.jpg" alt="Fire" />
                </div>
                <div className="element">
                    <img src="..\..\Water.jpg" alt="Water" />
                </div>
                <div className="element">
                    <img src="..\..\Wind.jpg" alt="Wind" />
                </div>
                <div className="element">
                    <img src="..\..\Earth.jfif" alt="Earth" />
                </div>
                <div className="element">
                    <img src="..\..\ice.jpg" alt="Ice" />
                </div>
                <div className="element">
                    <img src="..\..\Lightning.jfif" alt="Lightning" />
                </div>
            </div>
        </>
    )

}

export default MainScreen