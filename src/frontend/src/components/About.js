import React from 'react'
import image1 from "../images/indiaGate.jpg"
import image2 from "../images/charminar.jpg"
import image3 from "../images/lotusTemple.jpg"
import "./about.css"

function About() {
    return (
        <div id="about">
            <section className="">
                <h2>About</h2>
                <div className="cont">
                    <div className="insideCont">
                        <img src={image1}
                            alt="carousel1" />
                    </div>
                    <div className="insideCont">
                        <p className="text">
                        In the old days, finding monuments was considered a monumental task for archaeologists. The story of the accidental discovery of the famous Khajuraho temple inspired me to look for evidence of monuments scattered around the world through satellite images. Given the recent advancement of CNNs and the easy availability of satellite images, I could concoct a solution to discover satellite images automatically.
                        <br></br><br></br>
                        The goal is to label a given satellite image as a monument with sufficient evidence backing the claim. The solution involves using CNNs and transfer-learning to learn the abstract monument representations and then using CAM (Class Activation Map) techniques to provide empirical justification for the classification.
                        </p>
                    </div>
                </div>
            </section>
            <section className="">
                <div className="cont">
                    <div className="insideCont">
                        <p className="text">
                        The solution has two main modules:
                        <ol type="1">
                            <li><b>Data Collection Module:</b> I started with a small sample of hand-collected coordinates comprising 39 monuments and 25 random landmarks in India. Then I created a tool to collect satellite images using "Bhuvanlite". However, this task was challenging without well-defined REST APIs, which I overcame by using the Mozilla plugin's automated screenshots of browser images. The images were trimmed, rotated, and shifted to create more samples. Thus I was able to generate 384 satellite images.</li>
                            <br></br>
                            <li><b>Model Selection and Tuning Parameters:</b> I used Transfer learning. Used "MobileNetV2" and a few dense layers with relu activation to achieve 1.0 training and testing accuracy.</li>
                        </ol>
                        </p>
                    </div>
                    <div className="insideCont">
                        <img className="" src={image2} alt="carousel2" />
                    </div>
                </div>
            </section>
            <section className="">
                <div className="cont">
                    <div className="insideCont">
                        <img className="" src={image3} alt="carousel3" />
                    </div>
                    <div className="insideCont">
                        <p className="text">
                        The website has three main modules:
                        <ol type="1">
                            <li><b>Frontend:</b> I have used React to give the website a modern look and feel.</li>
                            <br></br>
                            <li><b>Backend and API:</b> I have used FastApi to connect the front-end with the back-end (tensorflow model), i.e., providing the image uploaded by the user to the model for prediction, and returning the result to the user.</li>
                            <br></br>
                            <li><b>Docker:</b> I have dockerized both the front-end and back-end, and then used docker-compose. Hence, I hosted the full end-to-end application by running the composed docker container on the cloud.</li>
                        </ol>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About