import React from "react";

function About() {
  return (
    <section className="about-container" id="about">
      <div className="about-content">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="about-heading1">ABOUT ME</h1>
            </div>
            <div className="col-12 col-md-6 text-center">
              <img
                src="https://res.cloudinary.com/ddaults7y/image/upload/v1734927337/a0f9c12e-23f8-4f07-b380-cd7d5e5afdda_gcwqmf.jpg"
                className="about-image"
                alt="About Chandu"
              />
            </div>

            <div className="col-12 col-md-6 about-text-container">
              <h3 className="about-heading2">
                LET'S <br /> INTRODUCE ABOUT <br /> MY SELF
              </h3>
              <p className="about-paragraph">
                I am Chandu Janipireddy, a passionate web developer with a B.Tech in
                Artificial Intelligence and Machine Learning. I specialize in designing
                and developing creative, user-centric websites that blend functionality
                with aesthetics. With a strong focus on innovation, I enjoy turning
                ideas into impactful digital solutions.
              </p>
              <p className="about-paragraph2">
                Staying updated with the latest web development trends and technologies
                drives my professional growth. I excel in front-end development, ensuring
                seamless user experiences and responsive designs. My goal is to contribute
                to meaningful projects, delivering efficient and visually appealing results
                that exceed expectations
              </p>
              <div>
                <a href="#education">
                  <button className="about-button">Know more</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
