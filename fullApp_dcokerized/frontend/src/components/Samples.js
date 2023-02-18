import React from 'react'
import './samples.css'
import tajFrontView from "../images/tajMahalFrontView.jpg"
import image1 from "../images/TajMahalLB.png"
import indiaGateFrontView from "../images/indiaGateFrontView.jpg"
import image2 from "../images/IndiaGateLB.png"
import image3 from "../images/AkbarsTombRot.png"
import image4 from "../images/AgraFortRB.png"
import random1 from "../images/Random14RB.png"
import random2 from "../images/Random12LB.png"
import random3 from "../images/Random21RB.png"
import random4 from "../images/Random25LB.png"


function Samples() {
    return (
        <div id="samples">
            <h2 className='headText'>Samples</h2>
            <h3 className='headText'>Drag and drop satellite monument images to view result.<br></br>or<br></br>Open the sample image in new tab, and then drag and drop.</h3>
            <div className='mainCard'>
                <div className="card">
                    <div className="card-image">
                        <div className='card-image-inside'>
                            <div className='insideText'>Taj Mahal</div>
                            <div className='inside-img'>
                                <img src={tajFrontView} alt="First photo" />
                            </div>
                            <div className='insideText'>Front view</div>
                        </div>
                    </div>
                    <div className="card-image">
                        <div>
                            <div className='insideText'>Taj Mahal satellite view</div>
                            <img src={image1} alt="First photo" />
                            <div className='insideText'>Label: Monument</div>
                            <div className='insideText'>Confidence: 100.00%</div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-image">
                        <div>
                            <div className='insideText'>India Gate</div>
                            <div className='inside-img'>
                                <img src={indiaGateFrontView} alt="First photo" />
                            </div>
                            <div className='insideText'>Front view</div>
                        </div>
                    </div>
                    <div className="card-image">
                        <div>
                            <div className='insideText'>India Gate satellite view</div>
                            <img src={image2} alt="First photo" />
                            <div className='insideText'>Label: Monument</div>
                            <div className='insideText'>Confidence: 100.00%</div>
                        </div>
                    </div>
                </div>
            </div>



            <div>
                <div className='container'>
                    <div className='wrap'>
                        <img src={random1} />
                        <div className='wrapText'>
                            <div className='insideText'>Label: Random &nbsp;</div>
                            <div className='insideText'>Confidence: 100.00%</div>
                        </div>
                    </div>
                    <div className='wrap'>
                        <img src={random2} />
                        <div className='wrapText'>
                            <div className='insideText'>Label: Random &nbsp; </div>
                            <div className='insideText'>Confidence: 99.99%</div>
                        </div>
                    </div>
                    <div className='wrap'>
                        <img src={random3} />
                        <div className='wrapText'>
                            <div className='insideText'>Label: Random &nbsp;</div>
                            <div className='insideText'>Confidence: 99.91%</div>
                        </div>
                    </div>
                    <div className='wrap'>
                        <img src={random4} />
                        <div className='wrapText'>
                            <div className='insideText'>Label: Random &nbsp;</div>
                            <div className='insideText'>Confidence: 99.51%</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Samples

