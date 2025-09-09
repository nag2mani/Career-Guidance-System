import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';  // Adjust the import path as necessary

const CareerList = () => {
  const [careers, setCareers] = useState([]);

  useEffect(() => {
    api.get('/careers/')
      .then(response => {
        setCareers(response.data);
      })
      .catch(error => {
        console.error('Failed to fetch careers', error);
      });
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(120deg, #fbc2eb 0%, #a6c1ee 100%)"
    }}>
      <div style={{
        background: "white",
        padding: "2.5rem 3rem",
        borderRadius: "20px",
        boxShadow: "0 8px 32px 0 rgba(166, 193, 238, 0.18)",
        minWidth: "340px",
        textAlign: "center"
      }}>
        <h2 style={{color: "#a6c1ee", fontWeight: 700, marginBottom: "1.5rem"}}>Career List</h2>
        <ul style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem"
        }}>
          {careers.map(career => (
            <li key={career.id}>
              <Link to={`/careers/${career.id}`} style={{
                background: "linear-gradient(120deg, #fbc2eb 0%, #a6c1ee 100%)",
                color: "white",
                textDecoration: "none",
                padding: "0.75rem 2rem",
                borderRadius: "12px",
                fontWeight: "bold",
                fontSize: "1.1rem",
                boxShadow: "0 2px 8px 0 rgba(166, 193, 238, 0.10)",
                transition: "transform 0.2s",
                display: "inline-block"
              }}>{career.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CareerList;
