import React from 'react'
import { Link } from 'react-router-dom'

this.palette = require(`@/data/palette-${this.paletteId}.json`);
      this.paletteInfo = _.find(this.palettes, { id: this.paletteId });
      this.emoji = this.paletteInfo.emoji;
    }

<router-link
      to="{ path : '/palette/' + paletteId}"
      class="smallpalette-container"
    >
      <div
        class="colors"
      >
        <div
          class="color"
          v-for="color in palette.colors"
          key="color.hex"
          style="{background:color.hex}"
        ></div>
        <div class="name">{{paletteInfo.name}}
          <span class="emoji">{{emoji}}</span>
        </div>
      </div>
    </router-link>

function SmallPallete(props) {
  return (
    <>
    <Link to={`/pallete-${props.paletteId}`} className="smallpalette-container">
        <div className="colors">
            {
                {props,paletteImportName}.map( color => {
                    return(
                        <div className="color" style="{background: color.hex}">
                        </div>
                    )
                })
            }
        </div>
    </Link>
    </>
  )
}

export default SmallPallete