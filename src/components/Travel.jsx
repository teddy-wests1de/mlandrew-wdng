function Travel() {
  return (
    <section id="travel" className="travel-section">

      <h2 className="travel-title">
        Venue & Travel
      </h2>
      <div className="section-divider">
          <span className="divider-icon">❣️</span>
      </div>
      <p className="travel-description">
        We are so excited to celebrate our special day with you!
        <br />
      To help you prepare for the celebration, we've included some useful information about the venue, travel, and getting around on the day.
      </p>

      <div className="venue-card">

        <div className="venue-map">
          {/* Map Image Here */}
        </div>

        <div className="venue-details">

          <h3 className="venue-name">
            Pulse Full Gospel Church Port Nolloth
          </h3>

          <p className="venue-address">
            Malherbe St<br />
            Port Nolloth<br />
            8280<br />
            South Africa
          </p>

        </div>
        <div className="venue-map">

          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2783.062670331952!2d16.874120195837694!3d-29.259100629906964!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1c38b95b1ad8a2ff%3A0x48cc9905ef694e18!2sPulse%20Full%20Gospel%20Church%20Port%20Nolloth!5e1!3m2!1sen!2sza!4v1791457063764!5m2!1sen!2sza" width="600" height="450" style={{ border: 0 }} allowFullscreen="" loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
        </div>

        <button className="directions-button btn">
          Get Directions
        </button>

      </div>

      <div className="travel-information">

        <div className="travel-item">

          <h3>Accommodation</h3>

          <p>
            A list of recommended nearby hotels and guesthouses
            will be provided closer to the wedding date.
          </p>

        </div>

        <div className="travel-item">

          <h3>Transport</h3>

          <p>
            Parking and shuttle details will be shared with guests
            prior to the event.
          </p>

        </div>

        </div>
    
    </section>
  );
}
export default Travel;