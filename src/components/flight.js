import React, { useState } from 'react';
import axios from 'axios';

function Flight() {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const loadFlights = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get('http://localhost:5005/api/flights');
      setFlights(response.data);
    } catch (error) {
      console.error('Error fetching flights', error);
      setError('Failed to fetch flights');
    } finally {
      setLoading(false);
    }
  };

  const handleBookNow = (flightId) => {

    window.location.href = '/booking';
  };

  return (
    <div style={styles.container}>
      <center>
        <h1>Flight Booking</h1>
        <button onClick={loadFlights} style={styles.button}>
          Load Flights
        </button>
      </center>
      {loading && <p>Loading...</p>}
      {error && <p style={styles.error}>{error}</p>}
      <div style={styles.flightList}>
        {flights.length === 0 ? (
          <p>No flights available</p>
        ) : (
          flights.map((flight) => (
            <div key={flight._id} style={styles.flightCard}>
              <h2 style={styles.flightTitle}>{flight.from} to {flight.to}</h2>
              <p><strong>Price:</strong> Rs{flight.price}</p>
              <p><strong>Takeoff:</strong> {flight.takeoff}</p>
              <p><strong>Landing:</strong> {flight.landing}</p>
              <button 
                onClick={() => handleBookNow(flight._id)} 
                style={styles.bookButton}
              >
                Book Now
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  button: {
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: 'orange',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '16px',
    marginBottom: '20px',
  },
  flightList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  flightCard: {
    border: '2px solid orange',
    borderRadius: '5px',
    padding: '15px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  bookButton: {
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: 'orange',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '10px',
  },
  error: {
    color: 'red',
  },
};

export default Flight;

