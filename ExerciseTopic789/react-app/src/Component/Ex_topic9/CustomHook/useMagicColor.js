import { useEffect, useState } from "react";

function useMagicColor(props) {
    const [color, setColor] = useState('green')
    useEffect(() => {
      const intervalColor = setInterval(() => {
        const newColor = Math.floor(Math.random() * 999999)
        setColor(`#${newColor}`)
      }, 1000);
      return () => {
        clearInterval(intervalColor)
      }
    }, [])
    return color
  }
  
  export {useMagicColor};