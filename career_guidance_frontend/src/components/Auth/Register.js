import axios from "axios";
import React, { useState } from "react";
import { API_BASE_URL } from "../../services/api";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [re_password, setRePassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${API_BASE_URL}auth/users/`, {
                username,
                email,
                password,
                re_password,
            });
            navigate("/login");
            alert("Registration successful");
        } catch (error) {
            if (error.response && error.response.data) {
                // Extract error messages from the response
                const errorData = error.response.data;
                let errorMsg = "";

                // Concatenate all error messages into a single string
                for (const key in errorData) {
                    if (errorData.hasOwnProperty(key)) {
                        errorMsg += `${errorData[key].join(" ")} `;
                    }
                }
                setError(
                    errorMsg.trim() || "An error occurred during registration"
                );
            } else {
                setError("An error occurred during registration");
            }
        }
    };

    return (
            <div style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(135deg, #f6d365 0%, #fd6e6a 100%)"
            }}>
                <form onSubmit={handleSubmit} style={{
                    background: "white",
                    padding: "2rem 2.5rem",
                    borderRadius: "16px",
                    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    minWidth: "320px"
                }}>
                    <h2 style={{color: "#fd6e6a", marginBottom: "1rem"}}>Register</h2>
                    {error && <p style={{ color: "#fd6e6a", marginBottom: "1rem" }}>{error}</p>}
                    <input
                        type="text"
                        value={username}
                        placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        style={{marginBottom: "1rem", padding: "0.5rem", borderRadius: "8px", border: "1px solid #fd6e6a", width: "100%"}}
                    />
                    <input
                        type="email"
                        value={email}
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        style={{marginBottom: "1rem", padding: "0.5rem", borderRadius: "8px", border: "1px solid #fd6e6a", width: "100%"}}
                    />
                    <input
                        type="password"
                        value={password}
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{marginBottom: "1rem", padding: "0.5rem", borderRadius: "8px", border: "1px solid #fd6e6a", width: "100%"}}
                    />
                    <input
                        type="password"
                        value={re_password}
                        placeholder="Confirm Password"
                        onChange={(e) => setRePassword(e.target.value)}
                        required
                        style={{marginBottom: "1.5rem", padding: "0.5rem", borderRadius: "8px", border: "1px solid #fd6e6a", width: "100%"}}
                    />
                    <button type="submit" style={{
                        background: "linear-gradient(135deg, #f6d365 0%, #fd6e6a 100%)",
                        color: "white",
                        border: "none",
                        borderRadius: "8px",
                        padding: "0.75rem 2rem",
                        fontWeight: "bold",
                        cursor: "pointer",
                        fontSize: "1rem"
                    }}>Register</button>
                </form>
            </div>
    );
};

export default Register;
