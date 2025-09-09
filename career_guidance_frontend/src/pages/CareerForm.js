import React, { useState, useEffect } from "react";
import api from "../services/api"; // Adjust the import path as necessary
import { useParams } from "react-router-dom";

const CareerForm = () => {
    const {careerId} = useParams()
    const [careerData, setCareerData] = useState({
        title: "",
        description: "",
        qualifications: "",
        job_outlook: "",
        pathways: "",
    });
    const [userRole, setUserRole] = useState(null);

    useEffect(() => {
        // Fetch user role
        const fetchUserRole = async () => {
            try {
                const response = await api.get("/auth/users/me/");
                setUserRole(response.data.role);
            } catch (error) {
                console.error("Failed to fetch user role", error);
            }
        };

        fetchUserRole();

        if (careerId) {
            // Fetch career data if editing an existing career
            api.get(`/careers/${careerId}/`)
                .then((response) => {
                    setCareerData(response.data);
                })
                .catch((error) => {
                    console.error("Failed to fetch career data", error);
                });
        }
    }, [careerId]);

    const handleChange = (e) => {
        setCareerData({
            ...careerData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const method = careerId ? "patch" : "post";
        try {
            if (careerId) {
                await api.patch(`/careers/${careerId}/`, careerData);
                alert("Career updated successfully!");
            } else {
                await api.post(`/careers/`, careerData);
                alert("Career created successfully!");
            }
        } catch (error) {
            alert("Error saving career");
        }
    };

    return (
        <div style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(120deg, #f6d365 0%, #fd6e6a 100%)"
        }}>
            <form onSubmit={handleSubmit} style={{
                background: "white",
                padding: "2.5rem 3rem",
                borderRadius: "20px",
                boxShadow: "0 8px 32px 0 rgba(253, 110, 106, 0.18)",
                minWidth: "340px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>
                <h2 style={{color: "#fd6e6a", fontWeight: 700, marginBottom: "1.5rem"}}>{careerId ? "Update" : "Create"} Career</h2>
                <input
                    type="text"
                    name="title"
                    value={careerData.title}
                    onChange={handleChange}
                    placeholder="Title"
                    required
                    style={{marginBottom: "1rem", padding: "0.5rem", borderRadius: "8px", border: "1px solid #fd6e6a", width: "100%"}}
                />
                <textarea
                    name="description"
                    value={careerData.description}
                    onChange={handleChange}
                    placeholder="Description"
                    required
                    style={{marginBottom: "1rem", padding: "0.5rem", borderRadius: "8px", border: "1px solid #fd6e6a", width: "100%", minHeight: "80px"}}
                />
                <input
                    type="text"
                    name="qualifications"
                    value={careerData.qualifications}
                    onChange={handleChange}
                    placeholder="Qualifications"
                    style={{marginBottom: "1rem", padding: "0.5rem", borderRadius: "8px", border: "1px solid #fd6e6a", width: "100%"}}
                />
                <input
                    type="text"
                    name="job_outlook"
                    value={careerData.job_outlook}
                    onChange={handleChange}
                    placeholder="Job Outlook"
                    style={{marginBottom: "1rem", padding: "0.5rem", borderRadius: "8px", border: "1px solid #fd6e6a", width: "100%"}}
                />
                <input
                    type="text"
                    name="pathways"
                    value={careerData.pathways}
                    onChange={handleChange}
                    placeholder="Pathways"
                    style={{marginBottom: "1.5rem", padding: "0.5rem", borderRadius: "8px", border: "1px solid #fd6e6a", width: "100%"}}
                />
                <button type="submit" style={{
                    background: "linear-gradient(120deg, #f6d365 0%, #fd6e6a 100%)",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    padding: "0.75rem 2rem",
                    fontWeight: "bold",
                    cursor: "pointer",
                    fontSize: "1rem"
                }}>{careerId ? "Update" : "Create"} Career</button>
            </form>
        </div>
    );
}

export default CareerForm;