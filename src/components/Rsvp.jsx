import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import whatsappIcon from '../assets/images/whatsapp-svg.svg';

function Rsvp() {
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [rsvpCode, setRsvpCode] = useState('');

  const [loading, setLoading] = useState(false);
  const [guest, setGuest] = useState(null);
  const [error, setError] = useState('');

  const [responseLoading, setResponseLoading] = useState(false);
  const [responseStatus, setResponseStatus] = useState(null);
  const [responseError, setResponseError] = useState('');
  const [showInvitation, setShowInvitation] = useState(false);

  useEffect(() => {

  const restoreGuest = async () => {

    const rememberToken =
      localStorage.getItem('wedding_guest_token');

    if (!rememberToken) {
      return;
    }

    try {

      console.log(
        'Restoring remembered RSVP guest...'
      );

      const { data, error: restoreError } =
        await supabase.rpc('restore_rsvp_access', {
          p_remember_token: rememberToken,
        });

      if (restoreError) {

        console.error(
          'RSVP restore error:',
          restoreError
        );

        localStorage.removeItem(
          'wedding_guest_token'
        );

        return;
      }

      if (!data || data.length === 0) {

        console.log(
          'Remembered RSVP guest no longer valid'
        );

        localStorage.removeItem(
          'wedding_guest_token'
        );

        return;
      }

      const restoredGuest = data[0];

      console.log(
        'RSVP guest restored:',
        restoredGuest
      );

      setGuest(restoredGuest);

      setResponseStatus(
        restoredGuest.rsvp_status
      );

    } catch (err) {

      console.error(
        'Unexpected RSVP restore error:',
        err
      );

    }

  };

  restoreGuest();

}, []);


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
    setResponseStatus(null);
    setResponseError('');

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
      console.log('Sending verification to Supabase:', {
        whatsappNumber: normalizedNumber,
        rsvpCode: normalizedCode,
      });

      const { data, error: supabaseError } =
        await supabase.rpc('verify_rsvp_access', {
          p_whatsapp_number: normalizedNumber,
          p_rsvp_code: normalizedCode,
        });

      console.log('Supabase verification response:', data);

      if (supabaseError) {
        console.error(
          'Supabase RSVP verification error:',
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

      // const verifiedGuest = data[0];

      // console.log(
      //   'RSVP verification SUCCESS:',
      //   verifiedGuest
      // );

      // setGuest(verifiedGuest);

      const verifiedGuest = data[0];

      console.log(
        'RSVP verification SUCCESS:',
        verifiedGuest
      );

      setGuest(verifiedGuest);

      setResponseStatus(
        verifiedGuest.rsvp_status
      );

      if (verifiedGuest.remember_token) {

        localStorage.setItem(
          'wedding_guest_token',
          verifiedGuest.remember_token
        );

        console.log(
          'Guest remember token saved'
        );

      }

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

  const handleRsvpResponse = async (status) => {
    setResponseLoading(true);
    setResponseError('');

    const normalizedNumber =
      normalizeSouthAfricanNumber(whatsappNumber);

    const normalizedCode =
      rsvpCode.trim().toUpperCase();

    if (!normalizedNumber || !normalizedCode) {
      setResponseError(
        'Your invitation details are no longer available. Please verify your invitation again.'
      );

      setResponseLoading(false);
      return;
    }

    try {
      console.log('Submitting RSVP response:', {
        whatsappNumber: normalizedNumber,
        rsvpCode: normalizedCode,
        status,
      });

      const { data, error: supabaseError } =
        await supabase.rpc('submit_rsvp_response', {
          p_whatsapp_number: normalizedNumber,
          p_rsvp_code: normalizedCode,
          p_rsvp_status: status,
        });

      console.log('Supabase RSVP submission response:', data);

      if (supabaseError) {
        console.error(
          'Supabase RSVP submission error:',
          supabaseError
        );

        setResponseError(
          'Something went wrong while saving your RSVP response.'
        );

        return;
      }

      if (data !== true) {
        console.log('RSVP response submission FAILED');

        setResponseError(
          'We could not save your RSVP response. Please try again.'
        );

        return;
      }

      console.log(
        'RSVP response saved successfully:',
        status
      );

      setResponseStatus(status);

    } catch (err) {
      console.error(
        'Unexpected RSVP submission error:',
        err
      );

      setResponseError(
        'Something went wrong while saving your response. Please try again.'
      );

    } finally {
      setResponseLoading(false);
    }
  };

  const handleStartOver = () => {
    setWhatsappNumber('');
    setRsvpCode('');
    setGuest(null);
    setError('');
    setResponseStatus(null);
    setResponseError('');
  };

  return (
    <section id="rsvp" className="rsvp-section">

      <h2 className="rsvp-title">
        RSVP
      </h2>

      <div className="section-divider">
        <span className="divider-icon">
          ❣️
        </span>
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

            <img
              src={whatsappIcon}
              alt="WhatsApp Number" />
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
                onChange={(event) =>
                  setWhatsappNumber(event.target.value)
                }
                disabled={loading}
              />

            </div>

            <div className="rsvp-input-group">

              <input
                type="text"
                className="rsvp-input"
                placeholder="Enter your RSVP code"
                value={rsvpCode}
                onChange={(event) =>
                  setRsvpCode(event.target.value)
                }
                disabled={loading}
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

          {!responseStatus ? (

            <>

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
                We're delighted to celebrate our special day
                with you.
              </p>

              <p className="verified-invitation-question">
                Will you be joining us?
              </p>

              {responseError && (
                <div className="rsvp-response-error">
                  {responseError}
                </div>
              )}

              <div className="rsvp-response-actions">

                <button
                  type="button"
                  className="rsvp-accept-button"
                  disabled={responseLoading}
                  onClick={() =>
                    handleRsvpResponse('accepted')
                  }
                >
                  {responseLoading
                    ? 'SAVING RESPONSE...'
                    : "YES, I'LL BE THERE"}
                </button>

                <button
                  type="button"
                  className="rsvp-decline-button"
                  disabled={responseLoading}
                  onClick={() =>
                    handleRsvpResponse('declined')
                  }
                >
                  SORRY, I CAN'T MAKE IT
                </button>

              </div>

            </>

          ) : responseStatus === 'accepted' ? (

  !showInvitation ? (

    <>

      <div className="verified-invitation-icon">
        ✓
      </div>

      <p className="verified-invitation-label">
        RSVP CONFIRMED
      </p>

      <h3 className="verified-invitation-title">
        We can't wait to see you, {guest.first_name}!
      </h3>

      <div className="verified-invitation-divider">
        ❣️
      </div>

      <p className="verified-invitation-message">
        Your attendance has been confirmed.
        Thank you for responding to our invitation.
      </p>

      <button
        type="button"
        className="verified-invitation-button"
        onClick={() => setShowInvitation(true)}
      >
        VIEW MY INVITATION
      </button>

    </>

      ) : (

        <div className="guest-invitation">

          <p className="guest-invitation-label">
            YOU'RE INVITED
          </p>

          <h3 className="guest-invitation-heading">
            Dear {guest.first_name}
          </h3>

          <div className="verified-invitation-divider">
            ❣️
          </div>

          <p className="guest-invitation-text">
            Together with our families, we would be delighted
            to have you join us as we celebrate our wedding.
          </p>

          <div className="guest-invitation-details">

            <div className="guest-invitation-detail">

              <span className="guest-invitation-detail-label">
                DATE
              </span>

              <strong>
                19 December 2026
              </strong>

            </div>

            <div className="guest-invitation-detail">

              <span className="guest-invitation-detail-label">
                TIME
              </span>

              <strong>
                15:00
              </strong>

            </div>

            <div className="guest-invitation-detail">

              <span className="guest-invitation-detail-label">
                VENUE
              </span>

              <strong>
                Pulse Full Gospel Church, Port Nolloth
              </strong>

            </div>

          </div>

          <p className="guest-invitation-footer">
            We look forward to celebrating this special day with you.
          </p>

          <button
            type="button"
            className="verified-invitation-button"
            onClick={() => setShowInvitation(false)}
          >
            BACK
          </button>

        </div>

        )

      ) : (

            <>

              <div className="verified-invitation-icon">
                ✓
              </div>

              <p className="verified-invitation-label">
                RESPONSE RECEIVED
              </p>

              <h3 className="verified-invitation-title">
                Thank you, {guest.first_name}
              </h3>

              <div className="verified-invitation-divider">
                ❣️
              </div>

              <p className="verified-invitation-message">
                We're sorry you won't be able to join us,
                but we appreciate you letting us know.
              </p>

              {/* <button
                type="button"
                className="verified-invitation-button"
                onClick={handleStartOver}
              >
                CLOSE
              </button> */}

            </>

          )}

        </div>

      )}

    </section>
  );
}

export default Rsvp;