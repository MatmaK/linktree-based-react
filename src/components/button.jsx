import React from 'react'
import '../css/btn.css'

function Button(props) {
  
  function clickLink(link) {
    if (link != '#')
        window.open(link);
  }

  return (
    <div className="button">
      <button onClick={() => clickLink(props.link)}>{props.children}</button>
    </div>
  )
}

export default Button