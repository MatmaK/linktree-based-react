import React from 'react'
import '../css/social-media-icons.css'

function SocialMediaButton(props) 
{  
  function clickLink(link) {
    window.open(link);
  }

  function getClassName(div) {
    if (div == 'main')
      return 'icon '+props.type;

    if (props.type == 'email')
      return 'fa fa-envelope';

    return 'fab fa-'+props.type;
  }

  return (
      <div className={getClassName('main')} onClick={()=> clickLink(props.link)}>
        <span><i className={getClassName('span')}></i></span>
      </div>
  )
}

export default SocialMediaButton