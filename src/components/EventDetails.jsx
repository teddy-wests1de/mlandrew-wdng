import { Camera, ChurchIcon, Music, ReceiptPoundSterling, Utensils, Wine } from "lucide-react";

function EventDetails() {
//   if (!event) return null;  

  return <section className="event-details" id="schedule">
    <div className="event-details-header">
      <h2 className="event-details-title">Event Details</h2>
      <div className="section-divider">
        <span className="divider-icon"> ❣️ </span>
      </div>
    </div>
    <div className="event-details-timeline">
      <div className="event-details-item">

        <div className="event-details-icon">
          <ChurchIcon />
        </div>

        <div className="event-details-content">

          <div className="event-details-time">
            15:00
          </div>

          <div className="event-details-title">
            CEREMONY
          </div>

          <div className="event-details-location">
            Pulse Full Gospel Church
          </div>

          <div className="event-details-city">
            Port Nolloth
          </div>

        </div>

      </div>

      <div className="event-details-item">

      <div className="event-details-icon">
        <Camera />
      </div>

      <div className="event-details-content">

        <div className="event-details-time">
          16:30
        </div>

        <div className="event-details-title">
          PHOTO SESSION
        </div>

        <div className="event-details-location">
          Wedding Photos
        </div>

      </div>

    </div>

      <div className="event-details-item">

        <div className="event-details-icon">
          <Utensils />
        </div>

        <div className="event-details-content">

          <div className="event-details-time">
            18:00
          </div>

          <div className="event-details-title">
            RECEPTION
          </div>

          <div className="event-details-location">
            The Bayview Estate
          </div>

        </div>

        </div>

        <div className="event-details-item">

          <div className="event-details-icon">
            <Music />
          </div>

          <div className="event-details-content">

            <div className="event-details-time">
              21:00
            </div>

            <div className="event-details-title">
              DANCING & PARTY
            </div>

            <div className="event-details-location">
              Let's Celebrate!
            </div>

          </div>

        </div>

      </div>
    
  </section>    
}

export default EventDetails;