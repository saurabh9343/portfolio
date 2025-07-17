import "./Main.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section py-5" data-aos="fade-up">
      <div className="container text-center">
        {/* Title */}
        <h2 className="contact-title mb-3">
          Let's <span className="highlight">Connect</span>
        </h2>
        <p className="contact-text mb-4">
          Feel free to reach out for collaborations, opportunities, or just to say hi 👋
        </p>

        {/* Icons */}
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6  ">
              <div className="row justify-content-center g-3">
                <div className="col-sm-6 col-md-4">
                  <a
                    href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTJndBrVVXBLpggDLVtkwtLshtTxsGFmgmdhCndvgNhQDLbBnGwfLPXrsfSvnhsGClDxNq"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-link d-flex align-items-center justify-content-center"
                  >
                    <span>Email</span>
                  </a>
                </div>
                <div className="col-sm-6 col-md-4">
                  <a
                    href="https://github.com/saurabh9343"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-link d-flex align-items-center justify-content-center"
                  >
                    <span>GitHub</span>
                  </a>
                </div>
                <div className="col-sm-6 col-md-4">
                  <a
                    href="https://www.linkedin.com/in/saurabh-kushwah-03198a2b1"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-link d-flex align-items-center justify-content-center"
                  >
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
