import React from 'react';
import './MiniBio.css'

const MiniBio = () => {
    return(
              <div >
                <p className="height tc w-75 center minibio i">

                    Aspiring Web Developer

                    <br/><div className = 'bb w-25 center padding'></div><br/>

                    Pedal Assembler at <div className = 'w-100 pa3'><a
                            href = 'http://kingsleyamplifiers.com/'
                            target = 'blank'
                            className = 'pointer dim shadow-1 background-color br-pill pa2 link-style'>Kingsley Amplifiers
                                       </a></div>

                    <br/><div className = 'bb w-25 center pt2'></div><br/>

                    UBC Electrical Engineering Graduate, Class of 2019

                    <br/><div className = 'bb w-25 center padding'></div><br/>

                    Rock Climber, Guitar Player, Outdoor Enthusiast

                </p>
              </div>

 );
}

export default MiniBio;