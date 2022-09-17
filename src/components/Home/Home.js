import Slider from "../Slider/Slider";

import brandIcon from "../../images/brandIcon.svg";

import "./Home.scss";
import Footer from "../Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "../ProductDetails/ProductDetails";
import NavBar from "../NavBar/NavBar";
// import ExploreProducts from "../ExploreProducts/ExploreProducts1";
import ProductsSlider from "../ExploreProducts/ProductsSlider";

function Home() {
  return (
    <BrowserRouter>
      <div className="homeWrapper">
        <nav className="navbar navbar-expand-lg navbar-dark bg-black">
          <a className="navbar-brand" href="#">
            <img src={brandIcon} alt="FooterLogo1" width={50} height={50} />
          </a>
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item  ">
                  <a
                    className="nav-link text-white active"
                    aria-current="page"
                    href="#"
                  >
                    Mac
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    iPad
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    iPhone
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    Watch
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    TV
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    Accessories
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    Offers
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    Support
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    Services
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    Locations
                  </a>
                </li>
              </ul>

              <div>
                <i className="fa-solid fa-magnifying-glass text-white mx-2"></i>
                <i className="fa-regular fa-user text-white mx-2"></i>
                <i className="fa-solid fa-bag-shopping text-white mx-2"></i>
              </div>
            </div>
          </div>
        </nav>
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<Slider />} />
          <Route path="/details" element={<ProductDetails />} />
        </Routes>
        {/* <ExploreProducts /> */}

        <ProductsSlider />

        <div className="subscription d-flex align-items-center justify-content-center">
          <div>
            <div>
              Subscribe our newsletter to be notified when it’ll be live.
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="rounded border p-1"
            />
            <button type="button" className="btn btn-dark">
              Subscribe
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default Home;
