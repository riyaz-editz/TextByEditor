import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {

  return (
    <>
    <div> <nav className={`navbar navbar-expand-md navbar-light bg-${props.Mode}`}>
    <div className="container-fluid">
      <h1 className={`navbar-brand text-${props.Mode === "light" ? "dark":"light"}`} href="/#"><h2 className='text-decoration-underline'><b>{props.title}</b></h2></h1>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className={`nav-link active text-${props.Mode==="light"? "dark":"light"} `} aria-current="page" href="/#">{props.second_tab}</a>
          </li>
          <li className="nav-item">
            <a className={`nav-link text-${props.Mode==="light"?"dark":"light"}`} href="/#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled">Disabled</a>
          </li>
        </ul> */}
      
      </div>
      <div className="form-check form-switch" id='navtr'>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggle}/>
<label className={`form-check-label text-${props.Mode === "light" ? "dark":"light"}`} htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
</div>
      </div>
      
  </nav></div>
  </>
  )
};

Navbar.propTypes={
    // title: PropTypes.string.isRequired, // required otherwise error
    title: PropTypes.string,
    second_tab: PropTypes.string
};

Navbar.defaultProps= {
    title: "enter your title"
    // if you are not pass title
};