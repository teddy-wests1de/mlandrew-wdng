function Travel() {
  return (
    <section id="travel" className="travel-section">

      <h2 className="travel-title">
        Venue & Travel
      </h2>

      <p className="travel-description">
        We are so excited to celebrate our special day with you!
        <br />
        For those traveling from out of town, we have compiled a list of recommended accommodations and transportation options to make your stay as comfortable as possible.
      </p>

      <div className="venue-card">

        <div className="venue-map">
          {/* Map Image Here */}
        </div>

        <div className="venue-details">

          <h3 className="venue-name">
            The Bayview Estate
          </h3>

          <p className="venue-address">
            123 Ocean Drive<br />
            Camps Bay<br />
            Cape Town, South Africa
          </p>

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

          <h3>Airport</h3>

          <p>
            Cape Town International Airport is approximately
            30 minutes from the venue.
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
    
        <div className="section-divider">
            <span className="divider-icon">❣️</span>
        </div>
    </section>
  );
}
export default Travel;