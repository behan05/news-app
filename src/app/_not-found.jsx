import React from "react";
import Link from "next/link";

export default function NotFound() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "80vh",
                color: "#e5e7eb",
                backgroundColor: "#0f172a",
                textAlign: "center",
                padding: "20px",
            }}
        >
            <h1 style={{ fontSize: "4rem", marginBottom: "20px" }}>404</h1>
            <h2 style={{ fontSize: "2rem", marginBottom: "10px" }}>
                Page Not Found
            </h2>
            <p style={{ maxWidth: "400px", marginBottom: "20px" }}>
                Oops! The page you are looking for does not exist or has been moved.
            </p>
            <Link
                href="/"
                style={{
                    padding: "10px 20px",
                    backgroundColor: "#3b82f6",
                    color: "#fff",
                    borderRadius: "6px",
                    textDecoration: "none",
                    fontWeight: "bold",
                }}
            >
                Go Back Home
            </Link>
        </div>
    );
}
