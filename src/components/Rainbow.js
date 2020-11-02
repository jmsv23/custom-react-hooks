import React, { useEffect, useState } from 'react';

const Rainbow = () => {
  const [r, setR] = useState(0)
  const [g, setG] = useState(0)
  const [ screen, setScreen ] = useState(0)
  const [ width, setWidth ] = useState(0)
  useEffect(() => {
    setR(Math.floor(Math.random() * 255))
    setG(Math.floor(Math.random() * 255))
    setScreen(window.screen.width)
    setWidth(window.innerWidth)
    const onResize = () => (setWidth(window.innerWidth))
    window.addEventListener('resize', onResize)
    return () => (window.removeEventListener('resize', onResize))
  }, [])

  const b = Math.floor(((1 * width)/screen) * 255)

  return (
    <div className="p-20" style={{ background: `rgb(${r}, ${g}, ${b})`}}>
      <h1 className="text-3xl text-white">RGB: {`(${r}, ${g}, ${b})`}</h1>
    </div>
  );
}

export default Rainbow
