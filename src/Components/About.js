import React from "react";

function About(props) { 
  const color={
    color:props.mode==="dark"?"white":"black",
    backgroundColor:props.mode==="dark"?"#3f30b2":"white",
    border:'1px solid',
    borderColor:props.mode==="dark"?"white":"white"
  }
  return (
    <div style={props.color} className="container rounded">
      <h2>{props.about}</h2>
      <div className="accordion accordion-flush text-dark" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne" style={color}
            >
              React js Tutorial
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> className. This is the
              first item's accordion body.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus consectetur, officia nesciunt atque deleniti ex quisquam dicta blanditiis praesentium molestias natus repudiandae odit dolore sit doloremque. Necessitatibus corrupti quos pariatur!
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo" style={color}
            >
              Angular Js Tutorial
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> className. This is the
              second item's accordion body. Let's imagine this being filled with
              some actual content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt corrupti error dolorem, repudiandae est magnam! Harum, exercitationem quasi laborum animi magnam, quos vero architecto omnis quam dolorum error maxime sunt.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree" style={color}
            >
              Vue Js Tutorial
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> className. This is the
              third item's accordion body. Nothing more exciting happening here
              in terms of content, but just filling up the space to make it
              look, at least at first glance, a bit more representative of how
              this would look in a real-world application.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

About.defaultProps = {
  about: "About Us",
};
