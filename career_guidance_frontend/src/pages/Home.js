import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div style={{
            height: "100vh",
            width: "100vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)",
            overflow: "hidden"
        }}>
            <div style={{
                background: "white",
                padding: "2.5rem 2.5rem",
                borderRadius: "24px",
                boxShadow: "0 12px 40px 0 rgba(102, 166, 255, 0.25)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                minWidth: "320px",
                maxHeight: "80vh",
                overflow: "auto"
            }}>
                <h1 style={{
                    color: "#66a6ff",
                    marginBottom: "1.5rem",
                    fontWeight: 800,
                    fontSize: "2.2rem",
                    letterSpacing: "1px"
                }}>Welcome to Career Guidance App</h1>
                <Link to="/login" style={{
                    background: "linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)",
                    color: "white",
                    textDecoration: "none",
                    padding: "0.7rem 1.7rem",
                    borderRadius: "12px",
                    fontWeight: "bold",
                    fontSize: "1.05rem",
                    marginBottom: "1rem",
                    boxShadow: "0 4px 16px 0 rgba(102, 166, 255, 0.15)",
                    transition: "transform 0.2s",
                    display: "block"
                }}>Login</Link>
                <Link to="/register" style={{
                    background: "linear-gradient(120deg, #fbc2eb 0%, #a6c1ee 100%)",
                    color: "white",
                    textDecoration: "none",
                    padding: "0.7rem 1.7rem",
                    borderRadius: "12px",
                    fontWeight: "bold",
                    fontSize: "1.05rem",
                    boxShadow: "0 4px 16px 0 rgba(166, 193, 238, 0.15)",
                    transition: "transform 0.2s",
                    display: "block"
                }}>Register</Link>
            </div>
        </div>
    );
};

export default Home;
