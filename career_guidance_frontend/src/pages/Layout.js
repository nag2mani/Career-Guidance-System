import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav style={{
                background: "linear-gradient(90deg, #89f7fe 0%, #66a6ff 100%)",
                padding: "1rem 0",
                boxShadow: "0 2px 8px rgba(102, 166, 255, 0.12)",
                marginBottom: 0
            }}>
                <ul style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "2rem",
                    listStyle: "none",
                    margin: 0,
                    padding: 0
                }}>
                    <li>
                        <Link to="/" style={{
                            color: "#fff",
                            fontWeight: "bold",
                            textDecoration: "none",
                            fontSize: "1.1rem",
                            padding: "0.5rem 1.2rem",
                            borderRadius: "8px",
                            transition: "background 0.2s"
                        }}>Home</Link>
                    </li>
                    <li>
                        <Link to="/dashboard" style={{
                            color: "#fff",
                            fontWeight: "bold",
                            textDecoration: "none",
                            fontSize: "1.1rem",
                            padding: "0.5rem 1.2rem",
                            borderRadius: "8px",
                            transition: "background 0.2s"
                        }}>Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/login" style={{
                            color: "#fff",
                            fontWeight: "bold",
                            textDecoration: "none",
                            fontSize: "1.1rem",
                            padding: "0.5rem 1.2rem",
                            borderRadius: "8px",
                            transition: "background 0.2s"
                        }}>Login</Link>
                    </li>
                    <li>
                        <Link to="/register" style={{
                            color: "#fff",
                            fontWeight: "bold",
                            textDecoration: "none",
                            fontSize: "1.1rem",
                            padding: "0.5rem 1.2rem",
                            borderRadius: "8px",
                            transition: "background 0.2s"
                        }}>Register</Link>
                    </li>
                    <li>
                        <Link to="/careers" style={{
                            color: "#fff",
                            fontWeight: "bold",
                            textDecoration: "none",
                            fontSize: "1.1rem",
                            padding: "0.5rem 1.2rem",
                            borderRadius: "8px",
                            transition: "background 0.2s"
                        }}>Career Lists</Link>
                    </li>
                    <li>
                        <Link to="careers/new" style={{
                            color: "#fff",
                            fontWeight: "bold",
                            textDecoration: "none",
                            fontSize: "1.1rem",
                            padding: "0.5rem 1.2rem",
                            borderRadius: "8px",
                            transition: "background 0.2s"
                        }}>Add Career</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
};

export default Layout;
