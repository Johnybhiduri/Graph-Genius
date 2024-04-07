import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <>
     <header id="header" class="header fixed-top">

<div class="topbar d-flex align-items-center">
  <div class="container d-flex justify-content-center justify-content-md-between">
    
  </div>
</div>

<div class="branding">

  <di class="container position-relative d-flex align-items-center justify-content-between">
    <a href="index.html" class="logo d-flex align-items-center">
      {/* <!-- <img src="assets/img/logo.png" alt=""> --> */}
      <h1 class="">Graph Genius</h1>
    </a>

    <nav id="navmenu" class="navmenu">
      <ul>
        <li><a href="#hero" class="">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#">Login</a></li>
        <li><a href="#">Sign up</a></li>
        <li><a href="#">Guest user</a></li>
        
        
      </ul>
      <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
    </nav>

  </di>
</div>

</header>
    </>
  );
};

export default Header;
