import './mainScreen.css'

function MainScreen() {
    return (
        <>
            <div className='upperBlock'>
                <div className="element">
                    <img src="..\..\public\Fire.jpg" alt="Fire" />
                </div>
                <div className="element">
                    <img src="..\..\public\Water.jpg" alt="Water" />
                </div>
                <div className="element"><img src="..\..\public\Wind.jpg" alt="Wind" /></div>
                <div className="element"><img src="..\..\public\Earth.jfif" alt="Earth" /></div>
                <div className="element"><img src="..\..\public\ice.jpg" alt="Ice" /></div>
                <div className="element"><img src="..\..\public\Lightning.jfif" alt="Lightning" /></div>
            </div>
        </>
    )

}

export default MainScreen