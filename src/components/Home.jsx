import React from "react";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <section className="home-container" id="home">
      <div className="home-content">
        <div className="container">
          <div className="row">

            {/* Left Side - Profile Image */}
            <div
              className="col-12 col-md-6"
              data-aos="zoom-in"        // 👌 Image pops in smoothly
              data-aos-delay="100"
            >
              <div className="home-image-container">
                <img
                  src="https://res.cloudinary.com/dymntfrwl/image/upload/v1775558483/WhatsApp_Image_2026-04-07_at_4.10.59_PM_isnd7y.jpg"
                  className="home-image"
                  alt="Chandu profile"
                />
              </div>
            </div>

            {/* Right Side - Text Content */}
            <div className="col-12 col-md-6 home-details">
              <div
                data-aos="fade-up"     // ✨ Clean slide-up for all text content
                data-aos-delay="300"
              >
                <h3 className="home-heading"> HELLO I'M </h3>
                <h1 className="home-heading2">CHANDU JANIPIREDDY</h1>

                <p className="home-paragraph1">
                  <ReactTyped
                    strings={[
                      "FRONTEND DEVELOPER",
                      "BACKEND DEVELOPER",
                      "UI/UX DESIGNER",
                      "FULL STACK DEVELOPER",
                    ]}
                    typeSpeed={60}
                    backSpeed={35}
                    loop
                  />
                </p>

                <div className="text-left">
                  <div className="home-paragraph2 text-center">
                    <p className="home-paragraph2">
                      I am a passionate software development student, eager to apply my
                      skills and knowledge to contribute to impactful projects in a
                      professional environment.
                    </p>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div
                className="home-button-container"
                data-aos="fade-up"
                data-aos-delay="600"   // 👌 Buttons appear after text
              >
                <a href="#about">
                  <button className="home-button"> About Me </button>
                </a>
                <a href="/CHANDU_RESUMEE.pdf" download="CHANDU_RESUMEE.pdf">
                  <button className="home-button"> Download CV </button>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
