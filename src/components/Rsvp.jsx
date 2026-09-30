import { supabase } from '../lib/supabase';
import { useState } from 'react';

function Rsvp() {
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [rsvpCode, setRsvpCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [guest, setGuest] = useState(null);
  const [error, setError] = useState('');

  function normalizeSouthAfricanNumber(value) {
    let number = value.replace(/\D/g, '');

    if (number.startsWith('0')) {
      number = '27' + number.substring(1);
    }

    if (!number.startsWith('27')) {
      return null;
    }

    if (number.length !== 11) {
      return null;
    }

    return '+' + number;
  }

  const handleAccessRsvp = async (event) => {
    event.preventDefault();

    setLoading(true);
    setError('');
    setGuest(null);

    const normalizedNumber =
      normalizeSouthAfricanNumber(whatsappNumber);

    const normalizedCode =
      rsvpCode.trim().toUpperCase();

    console.log('RSVP verification started');

    if (!normalizedNumber) {
      console.log('Invalid WhatsApp number');

      setError('Please enter a valid WhatsApp number.');
      setLoading(false);
      return;
    }

    if (!normalizedCode) {
      console.log('RSVP code missing');

      setError('Please enter your RSVP code.');
      setLoading(false);
      return;
    }

    try {
      console.log('Sending to Supabase:', {
        whatsappNumber: normalizedNumber,
        rsvpCode: normalizedCode,
      });

      const { data, error: supabaseError } =
        await supabase.rpc('verify_rsvp_access', {
          p_whatsapp_number: normalizedNumber,
          p_rsvp_code: normalizedCode,
        });

      console.log('Supabase response:', data);

      if (supabaseError) {
        console.error(
          'Supabase RSVP error:',
          supabaseError
        );

        setError(
          'Something went wrong while verifying your invitation.'
        );

        return;
      }

      if (!data || data.length === 0) {
        console.log('RSVP verification FAILED');

        setError(
          'The WhatsApp number or RSVP code could not be verified.'
        );

        return;
      }

      const verifiedGuest = data[0];

      console.log(
        'RSVP verification SUCCESS:',
        verifiedGuest
      );

      setGuest(verifiedGuest);

    } catch (err) {
      console.error(
        'Unexpected RSVP verification error:',
        err
      );

      setError(
        'Something went wrong. Please try again.'
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="rsvp" className="rsvp-section">

      <h2 className="rsvp-title">RSVP</h2>

      <div className="section-divider">
        <span className="divider-icon">❣️</span>
      </div>

      <p>
        Please let us know if you can make it to our special day!
      </p>

      {!guest ? (

        <div className="rsvp-card">

          <p className="rsvp-card-description">
            Please enter the details sent to you via WhatsApp
            to access your invitation.
          </p>

          <div className="rsvp-card-illustration">

            <img src="src\assets\images\whatsapp-svg.svg" alt="WhatsApp" />

            <span className="rsvp-card-illustration-text">
              WhatsApp Number
            </span>

          </div>

          <form
            className="rsvp-form"
            onSubmit={handleAccessRsvp}
          >

            <div className="rsvp-input-group">

              <input
                type="tel"
                className="rsvp-input"
                placeholder="Enter your WhatsApp number (e.g. 082 123 4567)"
                value={whatsappNumber}
                onChange={(e) =>
                  setWhatsappNumber(e.target.value)
                }
              />

            </div>

            <div className="rsvp-input-group">

              <input
                type="text"
                className="rsvp-input"
                placeholder="Enter your RSVP code"
                value={rsvpCode}
                onChange={(e) =>
                  setRsvpCode(e.target.value)
                }
              />

            </div>

            {error && (
              <div className="rsvp-error">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="rsvp-submit-button"
              disabled={loading}
            >
              {loading
                ? 'VERIFYING...'
                : 'ACCESS MY RSVP'}
            </button>

          </form>

        </div>

      ) : (

        <div className="verified-invitation">

          <div className="verified-invitation-icon">
            ✓
          </div>

          <p className="verified-invitation-label">
            INVITATION VERIFIED
          </p>

          <h3 className="verified-invitation-title">
            Welcome, {guest.first_name}
          </h3>

          <div className="verified-invitation-divider">
            ❣️
          </div>

          <p className="verified-invitation-message">
            We're delighted to celebrate our special day with you.
          </p>

          <button
            type="button"
            className="verified-invitation-button"
            onClick={() => {
              console.log(
                'View invitation clicked:',
                guest
              );
            }}
          >
            VIEW MY INVITATION
          </button>

        </div>

      )}

    </section>
  );
}

export default Rsvp;