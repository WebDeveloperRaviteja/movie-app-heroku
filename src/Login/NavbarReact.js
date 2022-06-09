import React from 'react'
import { useNavigate } from 'react-router-dom';

const NavbarReact = () => {
  let navigate = useNavigate()

  function loginForm(){
    navigate("/login")
  }
  return (
    <div>
      {/* <nav class=" navbar navbar-expand-lg navbar-light bg-dark text-right">
        <ul style={{listStyleType:'none'}}>
          <li style= { {textAlign:"right",padding:'10px',fontSize:'30px',color:'white'}}>This is Responsive Movie App</li>
        </ul>
      </nav> */}
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <div class="container-fluid">
    {/* <a class="navbar-brand text-light" href="#" onClick={loginForm}>Login page</a> */}
    {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> */}
    <div class="collapse navbar-collapse" id="navbarNav">
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavbarReact
