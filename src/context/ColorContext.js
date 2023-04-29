import { useGLTF } from '@react-three/drei'
import { createContext, useState } from 'react'

export const ColorContext = createContext({})

export const ColorContextProvider = ({ children }) => {
  const { materials } = useGLTF('/iphone_14_pro_max.glb')
  const [currentColor, setCurrentColor] = useState({
    color: '#9BB5CE',
    text: 'Sierra Blue',
    rgbaColor: '155, 181, 206',
  })

  let changeColorContext = (colorObj) => {
    materials.jFPFAvCbiqflbQV.color.set(colorObj.color)
    materials.bmOZLlCkCKhIIVe.color.set(colorObj.color)

    setCurrentColor(colorObj)
  }
  return (
    <ColorContext.Provider value={{ currentColor, changeColorContext }}>
      {children}
    </ColorContext.Provider>
  )
}
