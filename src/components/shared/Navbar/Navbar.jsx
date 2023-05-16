import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthForm from "../../../pages/AuthForms/AuthForm";
import Button from "../Button/Button";
import styles from "./Navbar.module.css";

const Navbar1 = () => {
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);

  const handleNavbarExpansion = () => {
    setIsNavbarExpanded(!isNavbarExpanded);
  };

  return (
    <>
      <div
        className={`row justify-content-center mx-auto ${styles.desktopView} ${styles.navWrapper}`}
      >
        <header
          className={`w-100 col-12 col-md-10 col-lg-8 ${styles.maxWFull}`}
        >
          <div
            className={`d-flex align-items-center ${styles.columns} ${styles.maxWL}`}
          >
            <div className={`${styles.left}`} style={{ fontSize: "16px" }}>
              <Link to="/" className="d-inline-block">
                <div className="logo">
                  <div data-v-eec4af22="">
                    <svg
                      width="129"
                      height="22"
                      viewBox="0 0 129 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      data-v-eec4af22=""
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M128.564 18.9586V0.660742H124.758V7.59705C123.841 6.22043 122.41 5.43798 120.548 5.43798C117.121 5.43798 114.395 8.51458 114.395 12.3198C114.395 16.1248 117.121 19.2286 120.548 19.2286C122.41 19.2286 123.841 18.4458 124.758 17.0695V18.9586H128.564ZM124.758 12.3196C124.758 14.1816 123.301 15.585 121.439 15.585C119.604 15.585 118.119 14.1547 118.119 12.3196C118.119 10.5116 119.604 9.0541 121.439 9.0541C123.301 9.0541 124.758 10.4844 124.758 12.3196ZM112.744 8.86536C113.203 8.86536 113.662 8.94624 114.12 9.05414V5.59966C113.689 5.51877 113.257 5.43789 112.852 5.43789C111.368 5.43789 110.207 6.0856 109.425 7.21908V5.70771H105.62V18.9585H109.425V12.4276C109.425 9.97167 110.909 8.86536 112.744 8.86536ZM103.948 2.29399C103.948 1.05244 102.896 0 101.627 0C100.359 0 99.3062 1.05244 99.3062 2.29399C99.3062 3.56222 100.359 4.61466 101.627 4.61466C102.896 4.61466 103.948 3.56222 103.948 2.29399ZM98.3643 12.3198C98.3643 8.51458 95.6385 5.43798 92.2111 5.43798C90.376 5.43798 88.9457 6.19358 88.0282 7.56987V0.660742H84.2228V18.9586H88.0282V17.0965C88.9457 18.473 90.376 19.2286 92.2111 19.2286C95.6385 19.2286 98.3643 16.1248 98.3643 12.3198ZM94.6401 12.3196C94.6401 14.1547 93.1826 15.585 91.3476 15.585C89.4854 15.585 88.0282 14.1816 88.0282 12.3196C88.0282 10.4844 89.4854 9.0541 91.3476 9.0541C93.1826 9.0541 94.6401 10.5116 94.6401 12.3196ZM78.3392 18.9586H82.1444V0.660742H78.3392V7.59705C77.4217 6.22043 75.9914 5.43798 74.1291 5.43798C70.702 5.43798 67.9759 8.51458 67.9759 12.3198C67.9759 16.1248 70.702 19.2286 74.1291 19.2286C75.9914 19.2286 77.4217 18.4458 78.3392 17.0695V18.9586ZM78.3393 12.3196C78.3393 14.1816 76.8819 15.585 75.0199 15.585C73.1848 15.585 71.7004 14.1547 71.7004 12.3196C71.7004 10.5116 73.1848 9.0541 75.0199 9.0541C76.8819 9.0541 78.3393 10.4844 78.3393 12.3196ZM62.7773 18.9585H66.5825V11.456C66.5825 7.7047 64.5316 5.43789 61.131 5.43789C59.6198 5.43789 58.3784 6.16664 57.5419 7.43504V5.70771H53.7366V18.9585H57.5419V11.942C57.5419 10.2146 58.5674 9.08099 60.1594 9.08099C61.7247 9.08099 62.7773 10.2146 62.7773 11.942V18.9585ZM52.2765 13.2372C52.3305 12.8055 52.3574 12.1848 52.3574 11.8879C52.3574 8.24435 49.4158 5.43789 45.8264 5.43789C41.9672 5.43789 38.9445 8.40627 38.9445 12.2657C38.9445 16.1789 41.9942 19.2285 45.9073 19.2285C49.2267 19.2285 51.7367 17.3663 52.1686 14.5056H48.4443C48.2283 15.4231 47.2836 16.071 45.7996 16.071C44.0182 16.071 42.6958 14.9644 42.426 13.2372H52.2765ZM48.3902 10.8081H42.615C43.0736 9.24304 44.2074 8.51445 45.6646 8.51445C47.0681 8.51445 48.2824 9.459 48.3902 10.8081ZM30.0874 9.51291C30.0874 8.89221 30.7353 8.59538 31.5989 8.59538C32.8133 8.59538 33.5419 9.18905 33.5959 9.86377H37.4281C37.1043 6.92224 34.5406 5.43789 31.68 5.43789C28.4143 5.43789 26.4171 7.32682 26.4171 9.78273C26.4171 14.7216 33.8659 12.7786 33.8659 14.9644C33.8659 15.5851 33.218 15.9629 32.0847 15.9629C30.8162 15.9629 29.8715 15.3691 29.7906 14.4784H26.1473C26.4171 17.4742 28.819 19.2285 32.2735 19.2285C35.2691 19.2285 37.563 17.3663 37.563 14.9374C37.563 9.40517 30.0874 11.5641 30.0874 9.51291ZM22 11C22 4.92476 17.0751 0 11 0H10.9964H0V5.5C0 8.49976 2.40269 10.934 5.38822 10.9942H0C0 17.0694 4.92493 21.9942 11 21.9942V22C17.0751 22 22 17.0751 22 11ZM99.7381 18.9584H103.543V5.70762H99.7381V18.9584Z"
                        fill="#6210CC"
                        data-v-eec4af22=""
                      ></path>
                    </svg>
                  </div>
                </div>
              </Link>
            </div>

            <div className={`${styles.center}`}>
              <nav
                className={`${styles.navigation} d-flex align-items-stretch`}
              >
                <div className={`d-flex align-items-center ${styles.navItem}`}>
                  <span className={`d-flex align-items-center ${styles.link}`}>
                    <div>Home</div>
                  </span>
                </div>
                <div className={`d-flex align-items-center ${styles.navItem}`}>
                  <span className={`d-flex align-items-center ${styles.link}`}>
                    <div>Features</div>
                  </span>
                </div>
                <div className={`d-flex align-items-center ${styles.navItem}`}>
                  <span className={`d-flex align-items-center ${styles.link}`}>
                    <div>About Us</div>
                  </span>
                </div>
              </nav>
            </div>

            <div
              className={`d-flex flex-grow-1 align-items-center justify-content-end flex-grow-1 ${styles.right}`}
            >
              <Link to="authentication" className={`${styles.signupLink} me-2`}>
                <span className={`${styles.shape}`}></span>
                <span
                  className={`d-flex align-items-center justify-content-center ${styles.slot}`}
                >
                  Login
                </span>
              </Link>

              <Button text="Get Started" />
            </div>
          </div>
        </header>
      </div>

      <div
        className={`row justify-content-center mx-auto ${styles.mobileView} ${styles.navWrapper}`}
      >
        <header
          className={`w-100 col-12 col-md-10 col-lg-8 ${styles.maxWFull}`}
        >
          <div
            className={`d-flex align-items-center ${styles.columns} ${styles.maxWL}`}
          >
            <div className={`${styles.left}`} style={{ fontSize: "16px" }}>
              <Link to="/" className="d-inline-block">
                <div className="logo">
                  <div data-v-eec4af22="">
                    <svg
                      width="129"
                      height="22"
                      viewBox="0 0 129 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      data-v-eec4af22=""
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M128.564 18.9586V0.660742H124.758V7.59705C123.841 6.22043 122.41 5.43798 120.548 5.43798C117.121 5.43798 114.395 8.51458 114.395 12.3198C114.395 16.1248 117.121 19.2286 120.548 19.2286C122.41 19.2286 123.841 18.4458 124.758 17.0695V18.9586H128.564ZM124.758 12.3196C124.758 14.1816 123.301 15.585 121.439 15.585C119.604 15.585 118.119 14.1547 118.119 12.3196C118.119 10.5116 119.604 9.0541 121.439 9.0541C123.301 9.0541 124.758 10.4844 124.758 12.3196ZM112.744 8.86536C113.203 8.86536 113.662 8.94624 114.12 9.05414V5.59966C113.689 5.51877 113.257 5.43789 112.852 5.43789C111.368 5.43789 110.207 6.0856 109.425 7.21908V5.70771H105.62V18.9585H109.425V12.4276C109.425 9.97167 110.909 8.86536 112.744 8.86536ZM103.948 2.29399C103.948 1.05244 102.896 0 101.627 0C100.359 0 99.3062 1.05244 99.3062 2.29399C99.3062 3.56222 100.359 4.61466 101.627 4.61466C102.896 4.61466 103.948 3.56222 103.948 2.29399ZM98.3643 12.3198C98.3643 8.51458 95.6385 5.43798 92.2111 5.43798C90.376 5.43798 88.9457 6.19358 88.0282 7.56987V0.660742H84.2228V18.9586H88.0282V17.0965C88.9457 18.473 90.376 19.2286 92.2111 19.2286C95.6385 19.2286 98.3643 16.1248 98.3643 12.3198ZM94.6401 12.3196C94.6401 14.1547 93.1826 15.585 91.3476 15.585C89.4854 15.585 88.0282 14.1816 88.0282 12.3196C88.0282 10.4844 89.4854 9.0541 91.3476 9.0541C93.1826 9.0541 94.6401 10.5116 94.6401 12.3196ZM78.3392 18.9586H82.1444V0.660742H78.3392V7.59705C77.4217 6.22043 75.9914 5.43798 74.1291 5.43798C70.702 5.43798 67.9759 8.51458 67.9759 12.3198C67.9759 16.1248 70.702 19.2286 74.1291 19.2286C75.9914 19.2286 77.4217 18.4458 78.3392 17.0695V18.9586ZM78.3393 12.3196C78.3393 14.1816 76.8819 15.585 75.0199 15.585C73.1848 15.585 71.7004 14.1547 71.7004 12.3196C71.7004 10.5116 73.1848 9.0541 75.0199 9.0541C76.8819 9.0541 78.3393 10.4844 78.3393 12.3196ZM62.7773 18.9585H66.5825V11.456C66.5825 7.7047 64.5316 5.43789 61.131 5.43789C59.6198 5.43789 58.3784 6.16664 57.5419 7.43504V5.70771H53.7366V18.9585H57.5419V11.942C57.5419 10.2146 58.5674 9.08099 60.1594 9.08099C61.7247 9.08099 62.7773 10.2146 62.7773 11.942V18.9585ZM52.2765 13.2372C52.3305 12.8055 52.3574 12.1848 52.3574 11.8879C52.3574 8.24435 49.4158 5.43789 45.8264 5.43789C41.9672 5.43789 38.9445 8.40627 38.9445 12.2657C38.9445 16.1789 41.9942 19.2285 45.9073 19.2285C49.2267 19.2285 51.7367 17.3663 52.1686 14.5056H48.4443C48.2283 15.4231 47.2836 16.071 45.7996 16.071C44.0182 16.071 42.6958 14.9644 42.426 13.2372H52.2765ZM48.3902 10.8081H42.615C43.0736 9.24304 44.2074 8.51445 45.6646 8.51445C47.0681 8.51445 48.2824 9.459 48.3902 10.8081ZM30.0874 9.51291C30.0874 8.89221 30.7353 8.59538 31.5989 8.59538C32.8133 8.59538 33.5419 9.18905 33.5959 9.86377H37.4281C37.1043 6.92224 34.5406 5.43789 31.68 5.43789C28.4143 5.43789 26.4171 7.32682 26.4171 9.78273C26.4171 14.7216 33.8659 12.7786 33.8659 14.9644C33.8659 15.5851 33.218 15.9629 32.0847 15.9629C30.8162 15.9629 29.8715 15.3691 29.7906 14.4784H26.1473C26.4171 17.4742 28.819 19.2285 32.2735 19.2285C35.2691 19.2285 37.563 17.3663 37.563 14.9374C37.563 9.40517 30.0874 11.5641 30.0874 9.51291ZM22 11C22 4.92476 17.0751 0 11 0H10.9964H0V5.5C0 8.49976 2.40269 10.934 5.38822 10.9942H0C0 17.0694 4.92493 21.9942 11 21.9942V22C17.0751 22 22 17.0751 22 11ZM99.7381 18.9584H103.543V5.70762H99.7381V18.9584Z"
                        fill="#6210CC"
                        data-v-eec4af22=""
                      ></path>
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
            <div
              className={`d-flex flex-grow-1 align-items-center justify-content-end flex-grow-1 ${styles.right}`}
            >
              <div
                role="button"
                className="cursor-pointer"
                onClick={handleNavbarExpansion}
              >
                <div
                  className={`cursor-pointer ${styles.hamburger} ${isNavbarExpanded ? styles.open : ""
                    }`}
                >
                  <div className={`cursor-pointer ${styles.bars}`}>
                    <div className={`${styles.bar}`}></div>
                    <div className={`${styles.bar}`}></div>
                    <div className={`${styles.bar}`}></div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${styles.menuBackground}`}
              style={{ display: `${isNavbarExpanded ? "block" : "none"}` }}
            ></div>

            <div
              className={`${styles.mobileNavigationWrapper}`}
              style={{ display: `${isNavbarExpanded ? "block" : "none"}` }}
            >
              <div className={`${styles.scrollable}`}>
                <div className={`${styles.mobileNavigationMenu}`}>
                  <div className={`${styles.mobileNavItem}`}>
                    <Link
                      className={`d-flex align-items-center cursor-pointer ${styles.mobileNavLink}`}
                      to="/"
                    >
                      <div className="text">Home</div>

                      <div className={`${styles.icon}`}>
                        {/* <i class="las la-arrow-circle-right"></i> */}
                      </div>
                    </Link>
                  </div>
                  <div className={`${styles.mobileNavItem}`}>
                    <Link
                      className={`d-flex align-items-center cursor-pointer ${styles.mobileNavLink}`}
                      to="/"
                    >
                      <div className="text">Features</div>

                      <div className={`${styles.icon}`}>
                        {/* <i class="las la-arrow-circle-right"></i> */}
                      </div>
                    </Link>
                  </div>
                  <div className={`${styles.mobileNavItem}`}>
                    <Link
                      className={`d-flex align-items-center cursor-pointer ${styles.mobileNavLink}`}
                      to="/"
                    >
                      <div className="text">About Us</div>

                      <div className={`${styles.icon}`}>
                        {/* <i class="las la-arrow-circle-right"></i> */}
                      </div>
                    </Link>
                  </div>

                  <div
                    className={`d-flex flex-column align-items-center justify-content-center ${styles.bottomLinks}`}
                  >
                    <Link className={`${styles.signupLink} me-2 mt-2 mb-2`}>
                      <span className={`${styles.shape}`}></span>
                      <span
                        className={`d-flex align-items-center justify-content-center ${styles.slot}`}
                      >
                        Login
                      </span>
                    </Link>

                    <Button text="Get Started" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar1;
