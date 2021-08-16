import React from 'react'
import logo from './images/logo.png'
import './App.css'
import Button from './components/button'
import SocialButton from './components/SocialMediaButton'

function App() {

  return (
    <>
      <div className="App">
        <div className="profile">
          <div className="logo">
            <img src={logo} className="logo_img" alt="logo_image"></img>
          </div>

          <div className="name">
            <h2>@alforty_doceria</h2>
          </div>
          <div className="bio">
            <span>Doceria Gourmet</span>
          </div>
        </div>

        <div className="panel">
          <Button link="https://www.instagram.com/alforty_doceria/">Nos siga no Instagram!</Button>
          <Button link="https://pt.surveymonkey.com/r/27JZ3NM">Delivery: nos ajude respondendo uma pergunta</Button>
          {/* <Button link="https://www.instagram.com/alforty_doceria/">Promoções</Button> */}
          <Button link="#">Encomendas: em breve!</Button>
          <Button link="https://api.whatsapp.com/send?phone=5511948729852&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20revenda%20dos%20produtos%20da%20Alforty.">
            Revenda os nossos produtos
          </Button>
          
          <div className="wrapper">
            {/*<SocialButton type="facebook-f" link="https://www.facebook.com"></SocialButton>*/}
            <SocialButton type="whatsapp" link="https://wa.me/5511948729852"></SocialButton>
            <SocialButton type="email" link="mailto:alfortydoceria@gmail.com"></SocialButton>
          </div>
        </div>
        <footer>Desenvolvido por <a href="https://github.com/MatmaK">Mateus Caetano</a></footer>
      </div>
    </>
  )
}

export default App
