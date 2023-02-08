import { useState } from 'react'

const ShowHide = () => {
  const [display, setDisplay] = useState(true)
  const handleClick = () => setDisplay(!display)

  return (
    <div>
      <button onClick={handleClick}>show/hide</button>
      {display && <p>El texto se muestra</p>}
    </div>
  )
}

export default ShowHide