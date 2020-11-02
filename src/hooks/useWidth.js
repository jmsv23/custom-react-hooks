import { useEffect, useState } from 'react';

const useWidth = () => {
  const [ width, setWidth ] = useState(0)
  useEffect(() => {
    setWidth(window.innerWidth)
    const onResize = () => {
      setWidth(window.innerWidth)
      console.log(`custom hook updating window width(${window.innerWidth})`)
    }
    window.addEventListener('resize', onResize)
    return () => (window.removeEventListener('resize', onResize))
  }, [])

  return width;
}

export default useWidth
