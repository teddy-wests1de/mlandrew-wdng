function Rsvp() {
  return (
    <section id="rsvp" className="rsvp-section">
      <h2 className="rsvp-title">RSVP</h2>
      <div className="section-divider">
        <span className="divider-icon">❣️</span>
      </div>
      <p>Please let us know if you can make it to our special day!</p>

      <div className="rsvp-card">

        <p className="rsvp-card-description">
          Please enter the details sent to you via WhatsApp
          to access your invitation.
        </p>

        <div className="rsvp-card-illustration">

          <img
            src="/images/rsvp-whatsapp.svg" alt="WhatsApp" />
        </div>

        <form className="rsvp-form">

          <div className="rsvp-input-group">

            <input
              type="tel"
              className="rsvp-input"
              placeholder="Enter your WhatsApp number (e.g. 082 123 4567)"
            />

          </div>

          <div className="rsvp-input-group">

            <input
              type="text"
              className="rsvp-input"
              placeholder="Enter your RSVP code"
            />

          </div>

          <button
            type="submit"
            className="rsvp-submit-button"
          >
            ACCESS MY RSVP
          </button>

        </form>

      </div>

  </section>
  );
}

export default Rsvp;