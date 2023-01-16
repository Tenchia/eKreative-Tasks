import React from 'react'

import Header from '../../../Header'
import Palettes from './Palettes'
import Success from '../../../Success'
import { useGlobalContext } from '../../../../context'

function PaletteRus() {
  const { setHasShownSubmenu, color } = useGlobalContext()

  return (
    <div
      onClick={(event) => {
        if (!event.target.classList.contains('format-btn')) setHasShownSubmenu(false)
      }}
    >
      <Success color={color} />
      <Header />
      <Palettes />
    </div>
  )
}

export default PaletteRus