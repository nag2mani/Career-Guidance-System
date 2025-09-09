import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../../services/api";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                `${API_BASE_URL}auth/jwt/create`,
                {
                    username,
                    password,
                }
            );
            localStorage.setItem("accessToken", response.data.access);
            localStorage.setItem("refreshToken", response.data.refresh);
            navigate("/dashboard");
            alert("Login Successful");
        } catch (error) {
            if (error.response && error.response.data) {
                // Extract error messages from the response
                const errorData = error.response.data;
                let errorMsg = "";

                // Handle different types of error responses
                if (
                    typeof errorData === "object" &&
                    !Array.isArray(errorData)
                ) {
                    for (const key in errorData) {
                        if (errorData.hasOwnProperty(key)) {
                            if (Array.isArray(errorData[key])) {
                                errorMsg += `${errorData[key].join(" ")} `;
                            } else {
                                errorMsg += `${errorData[key]} `;
                            }
                        }
                    }
                } else {
                    errorMsg =
                        errorData.detail || "An error occurred during login";
                }
                setError(
                    errorMsg.trim() || "An error occurred during registration"
                );
            } else {
                setError("An error occurred during registration");
            }
            // alert(`Error Authenticating ${error}`);
            console.log("Login Failed", error);
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
                <h2 style={{color: "#fd6e6a", marginBottom: "1rem"}}>Login</h2>
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
                    type="password"
                    value={password}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
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
                }}>Login</button>
            </form>
        </div>
    );
};

export default Login;
