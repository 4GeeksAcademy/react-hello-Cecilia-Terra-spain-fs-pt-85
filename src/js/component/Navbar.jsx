import React from 'react'; 

 const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid d-flex">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" >
      <span className="navbar-toggler-icon"></span>
    </button>
       <div className="navbar-nav d-flex align-items-end"> 
        <div className="botons d-flex align-items-end">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#">Features</a>
        <a className="nav-link" href="#">Pricing</a>
        <a className="nav-link " aria-disabled="true">Disabled</a>     
      </div>
    </div>
  </div>

  
</nav>
    );
 };

export default Navbar;