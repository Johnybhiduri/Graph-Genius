import React from "react";

const HomePage = () => {
  return (
    <>
      <main class="main">
        <section id="hero" class="hero section">
          <img src="./public/business-5475658.jpg" alt="" data-aos="fade-in" />

          <div class="container" data-aos="fade-up" data-aos-delay="100">
            <div class="row justify-content-start">
              <div class="col-lg-8">
                <h2 class="">Welcome to Graph Genius</h2>
                <p>AI Graph generation for free</p>
                <a href="#about" class="btn-get-started">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" class="about section">
          <div class="container section-title" data-aos="fade-up">
            <span class="">
              About Us
              <br />
            </span>
            <h2 class="">
              About Us
              <br />
            </h2>
            <p>
              We are an open Source project with it first version where you can
              get beautiful and very informative AI generated graph. You just
              need to upload your CSV or Excel file and get EDA Graphs
            </p>
          </div>

          <div class="container">
            <div class="row gy-4">
              <div
                class="col-lg-6 order-1 order-lg-2"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img src="assets/img/about.jpg" class="img-fluid" alt="" />
              </div>

              <div
                class="col-lg-6 order-2 order-lg-1 content"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h3>Data Analysis</h3>
                <p class="fst-italic">
                  Bar Graphs, Histograms, scatter plots, Pie charts and a lot of
                  other graphs.
                </p>
                <a href="#" class="read-more">
                  <span>Login</span>
                  <i class="bi bi-arrow-right"></i>
                </a>
                <a href="#" class="read-more">
                  <span>Sign up</span>
                  <i class="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="team" class="team section">
          <div class="container section-title" data-aos="fade-up">
            <span class="">Team</span>
            <h2>Contributers</h2>
          </div>

          <div class="container">
            <div class="row">
              <div
                class="col-lg-4 col-md-6 d-flex"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div class="member">
                  <img
                    src="assets/img/team/team-1.jpg"
                    class="img-fluid"
                    alt=""
                  />
                  <div class="member-content">
                    <h4>Jainendra Bhiduri</h4>
                    <span>Fronted and Backend Developer</span>
                    <p>
                      Frontend with React JS and Backend with Django REST
                      framework.
                    </p>
                  </div>
                </div>
              </div>

              <div
                class="col-lg-4 col-md-6 d-flex"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                
              </div>
            </div>
          </div>
        </section>

        <section id="contact" class="contact section">
          <div class="container section-title" data-aos="fade-up">
            <span class="">Contact</span>
            <h2 class="">Contact</h2>
            
          </div>

          <div class="container" data-aos="fade-up" data-aos-delay="100">
            <div class="row gy-4">
              <div class="col-lg-6">
                <div
                  class="info-item d-flex flex-column justify-content-center align-items-center"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <i class="bi bi-geo-alt"></i>
                  <h3>Address</h3>
                  <p>Bhiwadi, Rajasthan</p>
                </div>
              </div>

              <div class="col-lg-3 col-md-6">
                <div
                  class="info-item d-flex flex-column justify-content-center align-items-center"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <i class="bi bi-telephone"></i>
                  <h3>Call Us</h3>
                  <p>+91 8955234081</p>
                </div>
              </div>

              <div class="col-lg-3 col-md-6">
                <div
                  class="info-item d-flex flex-column justify-content-center align-items-center"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <i class="bi bi-envelope"></i>
                  <h3>Email Us</h3>
                  <p>johnybhiduri8584@gmail.com</p>
                </div>
              </div>
            </div>

            
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
