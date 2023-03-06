// import React from 'react'
import React, { useState, useEffect } from "react";
import './samples.css'
// import tajFrontView from "../images/tajMahalFrontView.jpg"
// import indiaGateFrontView from "../images/indiaGateFrontView.jpg"
import image1 from "../images/TajMahalLB.png"
import image2 from "../images/IndiaGateLB.png"
import image3 from "../images/AkbarsTombRot.png"
import random1 from "../images/Random14RB.png"
import random2 from "../images/Random12LB.png"
// import image4 from "../images/AgraFortRB.png"
// import random3 from "../images/Random21RB.png"
// import random4 from "../images/Random25LB.png"


function HomeSamples() {
    const [scroll, setScroll] = useState(0);
    const [startY, setStartY] = useState(0);
    const [startScroll, setStartScroll] = useState(0);
    const [animationId, setAnimationId] = useState(null);

    const handleMouseDown = (e) => {
        setStartY(e.clientY);
        setStartScroll(scroll);
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    };

    const handleMouseMove = (e) => {
        const diff = e.clientY - startY;
        setScroll(startScroll - diff);
    };

    const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
        let currentScroll = scroll;
        const scrollStep = -currentScroll / (1000 / 15);

        const animateScroll = () => {
            currentScroll += scrollStep;
            window.scrollTo(0, currentScroll);
            if (currentScroll > 0) {
                setAnimationId(requestAnimationFrame(animateScroll));
            } else {
                cancelAnimationFrame(animationId);
            }
        };

        setAnimationId(requestAnimationFrame(animateScroll));
    };

    useEffect(() => {
        setScroll(window.scrollY);
    }, []);
    return (
        <div>
              {/* <h2 className='headTextHome'>Samples</h2> */}
              <h3 className='headTextHome'>PLAY WITH SAMPLE SATELLITE IMAGES BY DRAGGING AND DROPPING.</h3>
              <div className='mainCard'>
                {/* <div className="card"> */}
                <div className="card-image">
                  <div>
                    <div className='insideText'>Taj Mahal satellite view</div>
                    <img src={image1} alt="First photo" onMouseDown={handleMouseDown}
                      style={{ cursor: "grab" }}/>
                    <div className='insideText'>Label: Monument</div>
                    {/* <div className='insideText'>Confidence: 100.00%</div> */}
                  </div>
                </div>
                <div className="card-image">
                  <div>
                    <div className='insideText'>India Gate satellite view</div>
                    <img src={image2} alt="First photo" onMouseDown={handleMouseDown}
                      style={{ cursor: "grab" }}/>
                    <div className='insideText'>Label: Monument</div>
                    {/* <div className='insideText'>Confidence: 100.00%</div> */}
                  </div>
                </div>
                <div className="card-image">
                  <div>
                    <div className='insideText'>Akbar's Tomb satellite view</div>
                    <img src={image3} alt="First photo" onMouseDown={handleMouseDown}
                      style={{ cursor: "grab" }}/>
                    <div className='insideText'>Label: Monument</div>
                    {/* <div className='insideText'>Confidence: 100.00%</div> */}
                  </div>
                </div>
                {/* </div>
                <div className="card"> */}
                <div className="card-image">
                  <div>
                    <div className='insideText'>Random satellite view</div>
                    <img src={random1} alt="First photo" style={{ cursor: "grab" }}/>
                    <div className='insideText'>Label: Random</div>
                    {/* <div className='insideText'>Confidence: 100.00%</div> */}
                  </div>
                </div>
                <div className="card-image">
                  <div>
                    <div className='insideText'>Random satellite view</div>
                    <img src={random2} alt="First photo"/>
                    <div className='insideText'>Label: Random</div>
                    {/* <div className='insideText'>Confidence: 99.99%</div> */}
                  </div>
                </div>
                {/* </div> */}
              </div>
            </div>
        // <div>
        //     {/* <h2 className='headTextHome'>Samples</h2> */}
        //     <h3 className='headTextHome'>Drag and drop satellite monument images to view result.</h3>
        //     <div className='mainCard'>
        //         {/* <div className="card"> */}
        //             <div className="card-image">
        //                 <div>
        //                     <div className='insideText'>Taj Mahal satellite view</div>
        //                     <img src={image1} alt="First photo" onMouseDown={handleMouseDown}
        //                         style={{ cursor: "grab" }} />
        //                     <div className='insideText'>Label: Monument</div>
        //                     <div className='insideText'>Confidence: 100.00%</div>
        //                 </div>
        //             </div>
        //             <div className="card-image">
        //                 <div>
        //                     <div className='insideText'>Taj Mahal satellite view</div>
        //                     <img src={image2} alt="First photo" onMouseDown={handleMouseDown}
        //                         style={{ cursor: "grab" }} />
        //                     <div className='insideText'>Label: Monument</div>
        //                     <div className='insideText'>Confidence: 100.00%</div>
        //                 </div>
        //             </div>
        //             <div className="card-image">
        //                 <div>
        //                     <div className='insideText'>Taj Mahal satellite view</div>
        //                     <img src={image3} alt="First photo" onMouseDown={handleMouseDown}
        //                         style={{ cursor: "grab" }} />
        //                     <div className='insideText'>Label: Monument</div>
        //                     <div className='insideText'>Confidence: 100.00%</div>
        //                 </div>
        //             </div>
        //         {/* </div>
        //         <div className="card"> */}
        //             <div className="card-image">
        //                 <div>
        //                     <div className='insideText'>Akbar's Tomb satellite view</div>
        //                     <img src={random1} alt="First photo" />
        //                     <div className='insideText'>Label: Monument</div>
        //                     <div className='insideText'>Confidence: 100.00%</div>
        //                 </div>
        //             </div>
        //             <div className="card-image">
        //                 <div>
        //                     <div className='insideText'>AgraFort satellite view</div>
        //                     <img src={random2} alt="First photo" />
        //                     <div className='insideText'>Label: Monument</div>
        //                     <div className='insideText'>Confidence: 100.00%</div>
        //                 </div>
        //             </div>
        //         {/* </div> */}
        //     </div>



        // </div>
    )
}

export default HomeSamples

