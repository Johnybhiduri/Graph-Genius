import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
    return <>
    <footer id="footer" className="footer position-relative">
        <div className="container footer-top">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6">
              <div className="footer-about">
                <a href="index.html" className="logo">
                  Graph Genius
                </a>
                
                
              </div>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li key="home"><a href="#">Home</a></li>
                <li key="about"><a href="#">About us</a></li>
                <li key="services"><a href="#">Login</a></li>
                <li key="terms"><a href="#">Sign up</a></li>
                <li key="privacy"><a href="#">Guest user</a></li>
              </ul>
            </div>

            

            
          </div>
        </div>

        <div className="container copyright text-center mt-4">
          <p>
            © <span>Copyright</span>{" "}
            <strong className="px-1">Graph Genius</strong>{" "}
            <span>All Rights Reserved</span>
          </p>
          <div className="credits">
            Designed by Johny
          </div>
        </div>
      </footer>
    </>
}

export default Footer;