import React from "react";

function Education() {
  return (
    <section className="education-container" id="education">
      <div className="education-content">
        <h3 className="about-heading1 pb-5">EDUCATION</h3>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 ">
              <img
                src="https://res.cloudinary.com/ddaults7y/image/upload/v1734954600/bz5gengygyyhm5718imc.jpg"
                alt="Diploma"
                className="education-image"
              />
            </div>
            <div className="col-12 col-md-6">
              <h4 className="education-heading">DIPLOMA:</h4>
              <p className="education-paragraph">
                I completed my Diploma in <b>Electronics and Communication Engineering (ECE)</b> from 
                <b> Smt. B. Seetha Polytechnic</b> in 2023 with <b>78%</b>.  
                The program built a strong foundation in electronics, communication systems, and circuit design.  
                Hands-on labs and projects gave me practical experience with microprocessors and embedded systems,  
                strengthening my technical skills for real-world applications.
              </p>
              <a href="https://seethapoly.edu.in/" target="_blank" rel="noreferrer">
                <button className="education-button">Know more</button>
              </a>
            </div>
            <div className="col-12 col-md-6 pt-5 order-md-2">
              <img
                src="https://res.cloudinary.com/ddaults7y/image/upload/v1734955269/f7dcb7b1-391b-469b-8291-1e230dd79831_ai7lsh.jpg"
                alt="BTech"
                className="education-image"
              />
            </div>
            <div className="col-12 col-md-6 order-md-1">
              <h4 className="education-heading">BTECH:</h4>
              <p className="education-paragraph">
                 I am pursuing a <b>Bachelor's degree in Artificial Intelligence and Machine Learning (AIML)</b>  
                at <b>SASI Engineering College, Tadepalligudem</b> with an overall <b>78%</b>.  
                The program emphasizes AI, machine learning, and data science with hands-on projects and coding.  
                This education is shaping my skills to excel in advanced AI and software development fields.
              </p>
              <a href="https://sasi.ac.in/" target="_blank" rel="noreferrer">
                <button className="education-button">Know more</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
