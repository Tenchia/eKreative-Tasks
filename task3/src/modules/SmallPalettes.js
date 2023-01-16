import React from 'react'
import SmallPalette from './SmallPalette'
import './SmallPalette.css'

function SmallPalettes() {
  return (
    <div className='palettes-container'>
    <div className="small-palettes">
        <div className="small-palette">
            <SmallPalette name="Russian Palette" link="/palette-rus" col1='#f3a683' col2='#f7d794' col3='#778beb' col4='#e77f67' col5='#cf6a87' col6='#f19066' col7='#f5cd79' col8='#546de5' col9='#e15f41'/>
        </div>
        <div className="small-palette">
            <SmallPalette name="Aussie Palette" link="/palette-aus" col1='#f6e58d' col2='#ffbe76' col3='#ff7979' col4='#badc58' col5='#dff9fb' col6='#f9ca24' col7='#f0932b' col8='#eb4d4b' col9='#6ab04c'/>
        </div>
        <div className="small-palette">
            <SmallPalette name="Canadian Palette" link="/palette-ca" col1='#ff9ff3' col2='#feca57' col3='#ff6b6b' col4='"#48dbfb' col5='#1dd1a1' col6='#f368e0' col7='#ff9f43' col8='#ee5253' col9='#0abde3'/>
        </div>        
    </div>
    <div className="small-palettes">
        <div className="small-palette">
            <SmallPalette name="Chinese Palette" link="/" col1='#eccc68' col2='#ff7f50' col3='#ff6b81' col4='#a4b0be' col5='#57606f' col6='#ffa502' col7='#ff6348' col8='#ff4757' col9='#747d8c'/>
        </div>
        <div className="small-palette">
            <SmallPalette name="German Palette" link="/" col1='#fc5c65' col2='#fd9644' col3='#fed330' col4='#26de81' col5='#2bcbba' col6='#eb3b5a' col7='#fa8231' col8='#f7b731' col9='#20bf6b'/>
        </div>
        <div className="small-palette">
            <SmallPalette name="Spanish Paleette" link="/" col1="#40407a" col2="#706fd3" col3="#f7f1e3" col4="#34ace0" col5="#33d9b2" col6="#2c2c54" col7="#474787" col8="#aaa69d" col9="#227093"/>
        </div>        
    </div>
    <div className="small-palettes">
        <div className="small-palette">
            <SmallPalette name="French Palette" link="/" col1='#fad390' col2='#f8c291' col3='#6a89cc' col4="#82ccdd" col5="#b8e994" col6="#f6b93b" col7="#e55039" col8="#4a69bd" col9="#60a3bc"/>
        </div>
        <div className="small-palette">
            <SmallPalette name="British Palette" link="/" col1='#00a8ff' col2='#9c88ff' col3='#fbc531' col4='#4cd137' col5='#487eb0' col6='#0097e6' col7='#8c7ae6' col8='#e1b12c' col9='#44bd32'/>
        </div>
        <div className="small-palette">
            <SmallPalette name="Indian Palette" link="/" col1='#FEA47F' col2='#25CCF7' col3='#EAB543' col4='#55E6C1' col5='#CAD3C8' col6='#F97F51' col7='#1B9CFC' col8='#F8EFBA' col9='#58B19F'/>
        </div>        
    </div>
    </div>
  )
}

export default SmallPalettes