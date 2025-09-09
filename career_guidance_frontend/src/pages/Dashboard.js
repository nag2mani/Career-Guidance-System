// src/pages/Dashboard.js

import React, { useEffect, useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";

function Dashboard() {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await api.get("/auth/users/me/");
                setProfile(response.data);
            } catch (error) {
                console.error("Failed to fetch profile", error);
            }
        };

        fetchProfile();
    }, []);

    if (!profile)
        return (
            <div style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)"
            }}>
                <div style={{
                    background: "white",
                    padding: "2.5rem 3rem",
                    borderRadius: "20px",
                    boxShadow: "0 8px 32px 0 rgba(245, 87, 108, 0.18)",
                    minWidth: "340px",
                    textAlign: "center"
                }}>
                    <h2 style={{color: "#f5576c", fontWeight: 700}}>Loading...</h2>
                </div>
            </div>
        );

    return (
        <div style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)"
        }}>
            <div style={{
                background: "white",
                padding: "2.5rem 3rem",
                borderRadius: "20px",
                boxShadow: "0 8px 32px 0 rgba(245, 87, 108, 0.18)",
                minWidth: "340px",
                textAlign: "center"
            }}>
                <h2 style={{color: "#f5576c", fontWeight: 700, marginBottom: "1.5rem"}}>Dashboard</h2>
                <p><strong>Username:</strong> {profile.username}</p>
                <p><strong>Email:</strong> {profile.email}</p>
                <p><strong>Role:</strong> {profile.role}</p>
                <p><strong>First Name:</strong> {profile.first_name}</p>
                <p><strong>Last Name:</strong> {profile.last_name}</p>
                <p><strong>Career Interests:</strong> {profile.career_interests ? profile.career_interests : "None"}</p>
                <Link to="/update-profile" style={{
                    display: "inline-block",
                    marginTop: "2rem",
                    background: "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)",
                    color: "white",
                    textDecoration: "none",
                    padding: "0.75rem 2rem",
                    borderRadius: "12px",
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                    boxShadow: "0 4px 16px 0 rgba(245, 87, 108, 0.15)",
                    transition: "transform 0.2s"
                }}>Update Profile</Link>
            </div>
        </div>
    );
}

export default Dashboard;
