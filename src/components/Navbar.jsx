const Navbar = ({ setCategory }) => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark shadow-sm py-3">
            <div className="container-fluid">
                <button
                    className="me-3 px-4 py-2 fw-bold text-white border-0"
                    style={{
                        background: "linear-gradient(135deg, #007bff, #6610f2)",
                        borderRadius: "999px",
                        boxShadow: "0 4px 12px rgba(0, 123, 255, 0.4)",
                        fontSize: "1.1rem",
                        letterSpacing: "1px",
                        transition: "all 0.3s ease",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.boxShadow = "0 6px 16px rgba(0, 123, 255, 0.6)")}
                    onMouseOut={(e) => (e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 123, 255, 0.4)")}
                >
                    <span>News-Mag</span>
                </button>


                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="navbar-nav ms-auto gap-2">
                        <li className="nav-item">
                            <div className="nav-link cursor-pointer" onClick={() => setCategory("technology")}>
                                Technology
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link cursor-pointer" onClick={() => setCategory("business")}>
                                Business
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link cursor-pointer" onClick={() => setCategory("health")}>
                                Health
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link cursor-pointer" onClick={() => setCategory("sports")}>
                                Sports
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link cursor-pointer" onClick={() => setCategory("entertainment")}>
                                Entertainment
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
