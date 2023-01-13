import React from 'react'
import CardItem from './CardItem'
import './modules-css/Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>News Block</h1>
        <div className="cards__container">
            <div className="cards__wrapper">

                <ul className="cards__items">
                    <CardItem 
                    src="./images/ds-preview.jpg"
                    text="DESERT STORM / ILLUSTRATION ART
                    Illustration of the DESERT STORM playable character
                    from the indie game IMPULSE Designed specifically for JAM
                    p.s every stitch is made with love"
                    label="Illustration"
                    path="/"
                    />

                    <CardItem 
                    src="./images/fg-42-image.jpg"
                    text="High Explosive Grenade FG-42
                    //Shard Explosive Grenade FG-42//
                    //Designed to quickly break through enemy defenses. Works well in narrow spaces//"
                    label="Render"
                    path="/"
                    />

                    <CardItem 
                    src="./images/rino-render.jpg"
                    text="Восьмой:
                    RINOCERONTE // Game Character Present
                    The playable character RINOCERONTE is a heavy robot. His highly armored frontal detail makes it possible to hold back the onslaught of enemies well and settle down like a walking bunker in narrow places."
                    label="Render"
                    path="/"
                    />
                    <CardItem 
                    src="./images/no-ai.jpg"
                    text="//Community voice//
                    //Artificial intelligence is an absolutely necessary technology that gives a new experience in work and in some cases saves time.//
                    //With the right skill to use neural networks, even very good and most importantly original work can be achieved.//"
                    label="Community"
                    path="/"
                    />
                </ul>

            </div>
        </div>
    </div>
  )
}

export default Cards;
