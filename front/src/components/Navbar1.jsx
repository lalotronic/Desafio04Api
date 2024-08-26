import React from 'react'

let token=false;//si token = true...el user ya esta registrado si token=false ...el user no esta registrado
const total=25000;

export default function Navbar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Pizzeria Mamma Mia!
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item me-2">
                <a href="#" className="btn btn-primary botonHome-btn">
                  &#x1F355;Home
                </a>
              </li>
              {/* Aquí se muestran los botones según el valor de la variable 'token' */}
              {!token ? (
                <>
                  <li className="nav-item me-2">
                    <a
                      className="btn btn-primary botonLogin-btn"
                      href="#"
                    >
                      &#x1F510;Login
                    </a>
                  </li>
                  <li className="nav-item me-2">
                    <a
                      className="btn btn-primary botonRegister-btn"
                      href="#"
                    >
                      &#x1F510;Register
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item me-2">
                    <a
                      className="btn btn-primary botonProfile-btn"
                      href="#"
                    >
                      &#x1F513;Profile
                    </a>
                  </li>
                  <li className="nav-item me-5">
                    <a
                      className="btn btn-primary botonLogout-btn"
                      href="#"
                    >
                      &#x1F512;Logout
                    </a>
                  </li>
                </>
              )}
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a
                  className="botonTotal-btn"
                  aria-disabled="true"
                >
                  &#x1F6D2;Total: {total.toLocaleString('es-CL', {
                    style: 'currency',
                    currency: 'CLP',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  })}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}