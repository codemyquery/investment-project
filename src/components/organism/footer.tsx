import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../utils";

export const Footer = () => {
    const navigate = useNavigate();

    return (
        <footer className="py-4 margin-top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-12">
                    
                        <h4 style={{color: 'white'}}>Virtual Property</h4>
                        <p className="text-white fs-18 fs-sm-22 fw-400 my-3">
                            We connect you to the world of better investment.
                        </p>
                    </div>
                    <div className="col-lg-3">
                        <h6 className="fs-22 fs-sm-24 mb-md-3 mt-4 mt-md-0 fw-600 text-white">
                            Virtual Property
                        </h6>
                        
                        <div className="flex-column nav">
                            <a href="/about-us" data-rr-ui-event-key="/about" className="nav-link">
                                About Us
                            </a>
                        </div>
                        {/* <div className="flex-column nav">
                            <a
                                href="/about#how_it_works"
                                data-rr-ui-event-key="/about#how_it_works"
                                className="nav-link"
                            >
                                How it works?
                            </a>
                        </div>
                        <div className="flex-column nav">
                            <a
                                href="/about#team"
                                data-rr-ui-event-key="/about#team"
                                className="nav-link"
                            >
                                Team
                            </a>
                        </div> */}
                        <div className="flex-column nav">
                            <a
                                href="/contact-us"
                                data-rr-ui-event-key="/contact"
                                className="nav-link"
                            >
                                Contact Us
                            </a>
                        </div>
                        
                    </div>
                    <div className="col-lg-3">
                        <h6 className="fs-22 fs-sm-24 mb-md-3 mt-4 mt-md-0 fw-600 text-white">
                            Important Links
                        </h6>
                        {/* <div className="flex-column nav">
                            <a
                                href="/home#calci"
                                data-rr-ui-event-key="/home#calci"
                                className="nav-link"
                            >
                                Returns Calculator
                            </a>
                        </div> */}
                        <div className="flex-column nav">
                            <a
                                href={`${BASE_URL}/sign-up`}
                                className="nav-link"
                            >
                                Sign up
                            </a>
                        </div>
                        <div className="flex-column nav">
                            <a
                                href={`${BASE_URL}/login`}
                                className="nav-link"
                                
                            >
                                Login
                            </a>
                        </div>
                        {/* <div className="flex-column nav">
                            <a
                                href="/terms-of-use"
                                data-rr-ui-event-key="/terms-of-use"
                                className="nav-link"
                            >
                                Terms of Service
                            </a>
                        </div>
                        <div className="flex-column nav">
                            <a
                                href="/privacy"
                                data-rr-ui-event-key="/privacy"
                                className="nav-link"
                            >
                                Privacy Policy
                            </a>
                        </div> */}
                    </div>
                    <div className="col-lg-3">
                        <h6 className="fs-22 fs-sm-24 mb-md-3 mt-4 mt-md-0 fw-600 text-white">
                            Contact us
                        </h6>
                        <div className="flex-column nav">
                            <a
                                href="tel:+91-9140636400"
                                data-rr-ui-event-key="tel:+91-9140636400"
                                className="nav-link"
                            >
                                +91-9140636400
                            </a>
                        </div>
                        <div className="flex-column nav">
                            <a
                                href="mailto:contact@virtual-property.in"
                                data-rr-ui-event-key="mailto:contact@virtual-property.in"
                                className="nav-link"
                            >
                                contact@virtual-property.in
                            </a>
                        </div>
                        <div className="flex-column nav">
                            <a
                            
                                href="https://maps.google.com/?q=MultiSphere+Consultancy"
                                data-rr-ui-event-key="https://maps.google.com/?q=MultiSphere+Consultancy"
                                className="nav-link"
                            >
                                Mughlaha, Medical Road, 
                                Gorakhpur, 273013
                            </a>
                        </div>
                        <div className="justify-content-start nav">
                            {/* <div className="pe-4 foot-icon nav-item">
                                <a
                                    href=" https://www.facebook.com/growpital"
                                    data-rr-ui-event-key=" https://www.facebook.com/growpital"
                                    className="nav-link"
                                >
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 320 512"
                                        className="text-indigo"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                                    </svg>
                                </a>
                            </div>
                            <div className="pe-4 foot-icon nav-item">
                                <a
                                    href="https://www.youtube.com/channel/UC01PIsA1RufWKdul_yve63g"
                                    data-rr-ui-event-key="https://www.youtube.com/channel/UC01PIsA1RufWKdul_yve63g"
                                    className="nav-link"
                                >
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 16 16"
                                        className="text-red"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"></path>
                                    </svg>
                                </a>
                            </div>
                            <div className="pe-4 foot-icon nav-item">
                                <a
                                    href=" https://www.linkedin.com/company/growpital/"
                                    data-rr-ui-event-key=" https://www.linkedin.com/company/growpital/"
                                    className="nav-link"
                                >
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 16 16"
                                        className="text-indigo foot-icon"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
                                    </svg>
                                </a>
                            </div>
                            <div className="pe-4 foot-icon nav-item">
                                <a
                                    href="https://instagram.com/growpitalbyzettafarms"
                                    data-rr-ui-event-key="https://instagram.com/growpitalbyzettafarms"
                                    className="nav-link"
                                >
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 16 16"
                                        className="text-darkpink"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
                                    </svg>
                                </a>
                            </div>
                            <div className="pe-4 foot-icon nav-item">
                                <a
                                    href="https://wa.me/message/FCMTNVU3NDJOB1"
                                    data-rr-ui-event-key="https://wa.me/message/FCMTNVU3NDJOB1"
                                    className="nav-link"
                                >
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 16 16"
                                        className="text-darkgreen"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
                                    </svg>
                                </a>
                            </div>
                            <div className="pe-4 foot-icon nav-item">
                                <a
                                    href="https://t.me/growpitalofficial"
                                    data-rr-ui-event-key="https://t.me/growpitalofficial"
                                    className="nav-link"
                                >
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 16 16"
                                        className="text-blue"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"></path>
                                    </svg>
                                </a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="d-flex justify-content-between text-center text-lg-start pt-5 row">
                    <div className="col-lg-9">
                        <p className="text-white fw-400 mb-3 mb-md-0 pt-0">
                            © Copyright 2021-{(new Date()).getFullYear()}
                            <a
                                href="/"
                                style={{
                                    color: "rgb(7, 229, 125)",
                                    textDecorationColor: "rgb(23, 23, 26)",
                                }}
                            >
                                <span> www.virtual-property.in </span>
                            </a>
                            . All Rights Reserved.
                        </p>
                    </div>
                    <div className="text-center text-lg-end pt-3 pt-lg-0 col-lg-3">
                        <p className="text-white fw-400 mb-3 mb-md-0 pt-0">
                            Made with <b style={{ color: 'red'}}>❤</b> in India.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}