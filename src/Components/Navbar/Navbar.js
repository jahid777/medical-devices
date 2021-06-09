import React from "react";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg  navbar navbar-dark bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <h3> BITFOUNTAIN LTD</h3>
        </a>
        {/* <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button> */}
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                <h6>Home</h6>
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                <h6>Our Services</h6>
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                <h6>About Us</h6>
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                <h6>Contact Us</h6>
              </a>
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              class="btn btn-primary"
              style={{ borderRadius: "5px", border: "1px solid white" }}
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
