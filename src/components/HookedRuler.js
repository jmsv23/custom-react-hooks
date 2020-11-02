import React, { useEffect, useRef, useState } from 'react'
import useWidth from '../hooks/useWidth'

const Ruler = () => {
  const hiddenDiv = useRef(null)
  const [dpi, setDpi] = useState(0)
  const width = useWidth()

  useEffect(() => {
    setDpi(hiddenDiv.current.offsetWidth)
  }, [])

  return (
    <>
      <div 
        ref={hiddenDiv}
        style={{
          height: '1in',
          width: '1in',
          left: '100%', 
          position: 'fixed', 
          top: '100%',
        }}
      ></div>
      <div className="bg-green-200 p-3">
        <dl>
          <dt><strong>dpi:</strong></dt>
          <dd>{dpi}</dd>
          <dt><strong>Ancho pixeles:</strong></dt>
          <dd>{width} px</dd>
          <dt><strong>Ancho pulgadas:</strong></dt>
          <dd>{Number(width/dpi).toFixed(2)} in</dd>
          <dt><strong>Ancho centimetros:</strong></dt>
          <dd>{Number((width/dpi) * 2.54).toFixed(2)} cm</dd>
        </dl>
      </div>
    </>
  );
}

export default Ruler
