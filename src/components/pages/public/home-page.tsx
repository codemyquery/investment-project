import virtualProperty from '../../../assets/images/VirtualProperty.png'
import { ExpandableCard } from '../../atoms'
export const HomePage = () => {
  const content = [
    {
      heading: 'Create account and complete KYC',
      description: 'Sign up with username and password. Verify your KYC which includes Pan Card, Adhaar card &amp; Bank account details.'
    },
    {
      heading: 'Choose investment option',
      description: 'Select the plan best suited to you and select the number of units you want to invest in.'
    },
    {
      heading: 'Add money and invest',
      description: 'Simply add money to Growpital Wallet, e-sign required documents.'
    },
    {
      heading: 'Harvest your earnings',
      description: 'Automate your earnings with assured return at scheduled dates.'
    }
  ]
  return (<>
    <section className="py-md-5 pt-3 pb-5">
      <div className="container">
        <div className="d-flex justify-content-center align-items-center py-0 mt-0 row">
          <div className="text-center text-md-start col-lg-7 col-md-12 col-12">
            <div className="bg-shark3 rounded p-1 p-md-2 d-inline-block mb-3">
              <h5 className="text-main-gradient fw-500 fs-22 fs-sm-18 mb-0">
                <img
                  src="/static/media/TopIcon2.ac5c57a0b39d7c7f5619280ff0165a8d.svg"
                  alt=""
                  className="img-fluid me-2"
                />
                Virtual Property is the New Trend
                <img
                  src="/static/media/TopIcon1.dcb427bef4e564145cec68daa97262db.svg"
                  alt=""
                  className="img-fluid ms-2"
                />
              </h5>
            </div>
            <div>
              <h1 className="text-white fw-600 display-5 mb-3 mb-md-4">
                Invest and earn assured Monthly Income &nbsp;
                <span className="text-main-green pe-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </span>
                <span className="text-main-green">
                  <span> Sure Thing</span>
                  <span
                    className="styles-module_blinkingCursor__yugAC"
                    style={{ color: "inherit" }}
                  >
                    |
                  </span>
                </span>
              </h1>
              <p className="text-white fw-400 fs-24 my-3 mb-md-4 py-2">
                Diversify your portfolio with safe agri-investments.
              </p>
            </div>
            <div className="px-5 px-lg-0">
              <div className="row">
                <div
                  data-aos="fade-up"
                  className="col-lg-4 col-md-4 aos-init aos-animate"
                >
                  <div className="darkcard mb-3 mb-md-4 p-0 rounded text-start text-white card">
                    <div className="m-1 bg-dark-gradient rounded px-4 py-5 py-md-4 card-body">
                      <div className="darkcard-icon p-3 mx-auto mb-4 mb-md-2 d-flex justify-content-center align-items-center">
                        <img
                          src="https://cms.growpital.com/uploads/2_cc14b85f6f.svg"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div className="fw-400 text-center fs-20 mb-0 pt-2 card-title h5">
                        Guaranteed
                        <span className="fw-600 text-main-gold">Monthly Income from Day 1</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  className="col-lg-4 col-md-4 aos-init aos-animate"
                >
                  <div className="darkcard mb-3 mb-md-4 p-0 rounded text-start text-white card">
                    <div className="m-1 bg-dark-gradient rounded px-4 py-5 py-md-4 card-body">
                      <div className="darkcard-icon p-3 mx-auto mb-4 mb-md-2 d-flex justify-content-center align-items-center">
                        <img
                          src="https://cms.growpital.com/uploads/1_79f6fc0e8e.svg"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div className="fw-400 text-center fs-20 mb-0 pt-2 card-title h5">
                      Booking Amount
                        <span className="fw-600 text-main-gold"> 10% </span>
                        
                        
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  className="col-lg-4 col-md-4 aos-init aos-animate"
                >
                  <div className="darkcard mb-5 mb-md-4 p-0 rounded text-start text-white card">
                    <div className="m-1 bg-dark-gradient rounded px-4 py-5 py-md-4 card-body">
                      <div className="darkcard-icon px-3 py-1 mx-auto mb-4 mb-md-2 d-flex justify-content-center align-items-center">
                        <img
                          src="https://cms.growpital.com/uploads/3_b6a6d12167.svg"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div className="fw-400 text-center fs-20 mb-0 pt-2 card-title h5">
                        Assured
                        <span className="fw-600 text-main-gold">Buy</span>
                        Back
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset={50}
              className="aos-init aos-animate"
            >
              <div className="d-inline-block">
                <a href="https://app.growpital.com/signup">
                  <button
                    className="main-btn maincolor mb-2"
                  >
                    Invest Now
                  </button>
                </a>
              </div>
            </div>
            <div
              className="mx-2 py-1 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-offset={50}
            >
              <p className="mb-1 text-md-start text-center">
                <span className="text-white fs-18 me-2">Rated </span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 16 16"
                  className="text-sunglow me-1"
                  height={18}
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 16 16"
                  className="text-sunglow me-1"
                  height={18}
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 16 16"
                  className="text-sunglow me-1"
                  height={18}
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 16 16"
                  className="text-sunglow me-1"
                  height={18}
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 16 16"
                  className="text-sunglow me-1"
                  height={18}
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <span className="text-white fs-18 ms-1">4.7 by user</span>
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="text-center text-lg-end mt-lg-0 mt-md-5 mt-5 p-3 mb-4 col-lg-5 col-md-12 col-12 aos-init aos-animate"
          >
            <img
              src={virtualProperty}
              alt=""
              className="img-fluid rounded-4"
            />
          </div>
        </div>
      </div>
    </section>
    <section className="py-5">
      <div className="container">
        <div className="d-flex justify-content-center align-items-center pb-0 row">
          <div className="text-center text-md-start col-lg-6 col-md-12 col-12">
            <p
              className="text-uppercase fs-18 fw-500 text-main-green aos-init aos-animate"
              data-aos="fade-up"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 16 16"
                className="me-1"
                height={8}
                width={8}
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx={8} cy={8} r={8} />
              </svg>
              WHAT ARE VIRTUAL PROPERTY INVESTMENTS LIKE?
            </p>
            <h2
              className="text-white fw-600 display-6 mb-3 mb-md-4 aos-init aos-animate"
              data-aos="fade-up"
            >
              Its like a
              <span className="text-main-green">
                <span> Property</span>
                <span
                  className="styles-module_blinkingCursor__yugAC"
                  style={{ color: "inherit" }}
                >
                  |
                </span>
              </span>
              but a much better one!
            </h2>
            <div
              className="d-flex justify-content-md-start justify-content-center align-items-center my-5 my-md-5 py-4 py-md-4 aos-init aos-animate"
              data-aos="fade-up"
            >
              <img
                src="https://cms.growpital.com/uploads/zero_cf5e683206.png"
                alt=""
                className="img-fluid"
              />
              <div className="text-start">
                <p className="fs-24 fs-sm-18 fw-400 text-white">
                  Stamp Duty
                </p>
                <p className="fs-24 fs-sm-18 fw-400 text-white">
                  Registration Charges
                </p>
                <p className="fs-24 fs-sm-18 fw-400 text-white">
                  EMI
                </p>
                <p className="fs-24 fs-sm-18 fw-400 text-white">
                  Maintenance Cost
                </p>
                <p className="fs-24 fs-sm-18 fw-400 text-white">
                  Vacant Period
                </p>
                <p className="fs-24 fs-sm-18 fw-400 text-white">
                  Delay In Rentals
                </p>
                <p className="fs-24 fs-sm-18 fw-400 text-white">
                  Interior Cost
                </p>
              </div>
            </div>
            <div className="mb-2 aos-init aos-animate" data-aos="fade-up">
              <div className="d-inline-block">
                <a href="https://app.growpital.com/signup">
                  <button className="main-btn maincolor mb-2">Invest Now</button>
                </a>
              </div>
            </div>
          </div>
          <div className="text-center text-md-end mt-5 mt-md-5 mt-lg-0 position-relative col-lg-6 col-md-12 col-12">
            <div className="d-flex justify-content-center align-items-center row">
              <div className="col-md-6">
                <div data-aos="fade-up" className="aos-init aos-animate">
                  <div className="darkcard mb-5 mb-md-5 p-0 rounded text-start text-white card">
                    <div className="m-1 bg-dark-gradient rounded p-4 card-body">
                      <div className="darkcard-icon p-3 mx-auto mb-4">
                        <img
                          src="https://cms.growpital.com/uploads/4_8fbdec3b01.svg"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div className="fw-600 fs-24 mb-3 pt-2 card-title h5">
                        Assured Growth
                      </div>
                      <p className="fw-400 fs-17 lh-24 card-text">
                        We provide much higher returns than FD and several bonds.
                      </p>
                    </div>
                  </div>
                </div>
                <div data-aos="fade-up" className="aos-init aos-animate">
                  <div className="darkcard mb-5 mb-md-5 p-0 rounded text-start text-white card">
                    <div className="m-1 bg-dark-gradient rounded p-4 card-body">
                      <div className="darkcard-icon p-3 mx-auto mb-4">
                        <img
                          src="https://cms.growpital.com/uploads/9_5e897da85d.svg"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div className="fw-600 fs-24 mb-3 pt-2 card-title h5">
                        Safe &amp; Secure
                      </div>
                      <p className="fw-400 fs-17 lh-24 card-text">
                        RBI governed safe & big firms involved  &amp; to ensure assured returns.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" className="col-md-6 aos-init aos-animate">
                <div className="darkcard mb-5 mb-md-5 p-0 rounded text-start text-white card">
                  <div className="m-1 bg-dark-gradient rounded p-4 card-body">
                    <div className="darkcard-icon p-3 mx-auto mb-4">
                      <img
                        src="https://cms.growpital.com/uploads/5_9c2e76a67a.svg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="fw-600 fs-24 mb-3 pt-2 card-title h5">
                      Consistent Returns
                    </div>
                    <p className="fw-400 fs-17 lh-24 card-text">
                      Free from Stock market volatality. Monthly payouts in your
                      Bank Account.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="py-5 d-flex justify-content-center align-items-center bg-charade">
      <div className="container">
        <div className="d-flex justify-content-center align-items-center row">
          <div
            data-aos="fade-up"
            className="text-center col aos-init aos-animate"
          >
            <p className="text-uppercase fs-18 fw-500 text-main-green">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 16 16"
                className="me-1"
                height={8}
                width={8}
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx={8} cy={8} r={8} />
              </svg>
              WHAT ARE WE PROUD ABOUT?
            </p>
            <p className="text-white fw-600 fs-24 mb-4 mb-md-4">
              Agriculture Sector is growing rapidly. Join us in the fast growing
              industry
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center row">
          <div
            data-aos="fade-up"
            className="d-flex justify-content-start justify-content-lg-center ps-5 ps-md-5 ps-lg-3 col-lg-4 col-md-12 col-12 aos-init aos-animate"
          >
            <div className="mt-4 mb-md-4 p-0 border-0 text-start bg-transparent card">
              <div className="d-flex justify-content-start align-items-center px-0 card-body">
                <img
                  src="https://cms.growpital.com/uploads/Total_Investments_e2952f6ea8.svg"
                  alt=""
                  className="img-fluid me-3"
                />
                <div>
                  <div className="fw-600 fs-22 text-white text-uppercase card-title h5">
                    TOTAL INVESTMENTS
                  </div>
                  <div className="fw-700 display-5 text-main-green mb-0 card-title h5">
                    <span>₹130+</span>
                  </div>
                  <p className="fw-500 fs-14 text-white text-uppercase card-text">
                    CRORES
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="d-flex justify-content-start justify-content-lg-center ps-5 ps-md-5 ps-lg-3 col-lg-4 col-md-12 col-12 aos-init aos-animate"
          >
            <div className="mt-4 mb-md-4 p-0 border-0 text-start bg-transparent card">
              <div className="d-flex justify-content-start align-items-center px-0 card-body">
                <img
                  src="https://cms.growpital.com/uploads/Returns_d6d7c7cb46.svg"
                  alt=""
                  className="img-fluid me-3"
                />
                <div>
                  <div className="fw-600 fs-22 text-white text-uppercase card-title h5">
                    PROFIT RETURNS
                  </div>
                  <div className="fw-700 display-5 text-main-green mb-0 card-title h5">
                    <span> 14%</span>
                  </div>
                  <p className="fw-500 fs-14 text-white text-uppercase card-text">
                    PER ANNUM
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="d-flex justify-content-start justify-content-lg-center ps-5 ps-md-5 ps-lg-3 col-lg-4 col-md-12 col-12 aos-init aos-animate"
          >
            <div className="mt-4 mb-md-4 p-0 border-0 text-start bg-transparent card">
              <div className="d-flex justify-content-start align-items-center px-0 card-body">
                <img
                  src="https://cms.growpital.com/uploads/Crop_Harvested_a58c6f1010.svg"
                  alt=""
                  className="img-fluid me-3"
                />
                <div>
                  <div className="fw-600 fs-22 text-white text-uppercase card-title h5">
                    MANAGED AREA
                  </div>
                  <div className="fw-700 display-5 text-main-green mb-0 card-title h5">
                    <span> 16500+</span>
                  </div>
                  <p className="fw-500 fs-14 text-white text-uppercase card-text">
                    ACRES
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="text-center mt-5 mt-md-0 col-md-12 aos-init aos-animate"
          >
            <div className="d-inline-block">
              <a href="https://app.growpital.com/signup">
                <button className="main-btn maincolor mb-2">Invest Now</button>
              </a>
            </div>
            <div className="pt-3">
              <p className="text-white fw-600 fs-24 fs-sm-16 mb-3 mb-md-4">
                Subscribed 100% in 6 hours on
                <a className="text-main-green"> Tyke Invest</a>
              </p>
              <p className="text-white fw-600 fs-24 fs-sm-16 mb-3 mb-md-4">
                Trusted by investor community spread across
                <span className="text-main-green">10+</span> countries and
                <span className="text-main-green">150+</span> cities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="py-5">
      <div className="container">
        <div className="d-flex justify-content-center align-items-center row">
          <div
            data-aos="fade-up"
            className="text-center col aos-init aos-animate"
          >
            <p className="text-uppercase fs-18 fw-500 text-main-green">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 16 16"
                className="me-1"
                height={8}
                width={8}
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx={8} cy={8} r={8} />
              </svg>
              HOW TO GET STARTED?
            </p>
            <h2 className="text-white fw-600 display-6 mb-3 mb-md-3">
              Start investing in
              <span className="text-main-green">4 simple steps</span>
            </h2>
          </div>
        </div>
        <div className="accordian-main">
          <div className="pt-5 mx-auto row">
            <div className="text-center text-lg-start mb-5 mb-lg-0 d-flex justify-content-center justify-content-lg-start align-items-center col-lg-6 col-md-12 col-12">
              <div className="vertical text-center carousel slide">
                <div className="carousel-inner">
                  <div className="active carousel-item">
                    <img
                      className="d-block img-fluid accordian-main-img"
                      src="https://cms.growpital.com/uploads/step_1_d82e1913f3.png"
                      alt="First slide"
                      style={{ width: "24rem" }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block img-fluid accordian-main-img"
                      src="https://cms.growpital.com/uploads/step3_c5a53d3b80.png"
                      alt="First slide"
                      style={{ width: "24rem" }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block img-fluid accordian-main-img"
                      src="https://cms.growpital.com/uploads/step2_b5c85a6e85.png"
                      alt="First slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block img-fluid accordian-main-img"
                      src="https://cms.growpital.com/uploads/step4_cc8ce0c98a.png"
                      alt="First slide"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center text-md-end col-lg-6 col-md-12 col-12">
              <ExpandableCard content={content} />
            </div>
          </div>
        </div>
        <div className="d-flex my-3 justify-content-center">
          <a href="https://app.growpital.com/signup" className="">
            <button className="main-btn maincolor mb-2">Invest Now</button>
          </a>
        </div>
      </div>
    </section>
    <section className="py-3">
      <div className="container">
        <div className="d-flex justify-content-center align-items-center row">
          <div
            data-aos="fade-up"
            className="text-center col aos-init aos-animate"
          >
            <p className="text-uppercase fs-18 fw-500 text-main-green">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 16 16"
                className="me-1"
                height={8}
                width={8}
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx={8} cy={8} r={8} />
              </svg>
              WHICH PLAN WHOULD YOU LIKE TO INVEST IN ?
            </p>
            <h2 className="text-white fw-600 display-6 mb-3 mb-md-4">
              Invest in our
              <span className="text-main-green"> high return </span> plans
            </h2>
          </div>
        </div>
        <div className="d-flex justify-content-center px-md-5 align-items-center pt-2 row">
          <div className="Service-Card d-none d-xl-block col-md-9">
            <div className="d-flex justify-content-center align-items-center row">
              <div
                data-aos="fade-up"
                className="d-flex justify-content-center align-items-center mb-5 col-lg-6 aos-init aos-animate"
              >
                <div
                  className="mb-2 bg-dark-gradient text-white position-relative card"
                  style={{ width: "25rem" }}
                >
                  <div className="d-inline-flex align-items-center py-3 fw-bold fs-4 card-header">
                    <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center me-4 p-2">
                      <img
                        src="https://cms.growpital.com/uploads/leafy_eleven_plan_fbfc42c562.png"
                        alt=""
                        className="img-fluid"
                        style={{ width: "1.5rem" }}
                      />
                    </p>
                    Leafy Eleven
                  </div>
                  <div className="d-flex align-items-center justify-content-between py-3 card-header">
                    <div>
                      <div className="text-main-green card-title h5">
                        ₹ 11,000/unit
                      </div>
                      <p className="card-text">Investment</p>
                    </div>
                    <div>
                      <div className="text-main-green card-title h5">11%</div>
                      <p className="card-text">ROI</p>
                    </div>
                  </div>
                  <div className="text-center card-body">
                    <div className="d-flex align-items-center justify-content-between mb-3 text-start">
                      <div>
                        <p className="card-text">
                          <img
                            src="https://cms.growpital.com/uploads/soil_Farming_1_a2e926fff4_588c230283.svg"
                            alt=""
                            className="mb-1"
                            style={{ width: "1rem" }}
                          />
                          Tenure
                        </p>
                        <p className="card-text">
                          <img
                            src="https://cms.growpital.com/uploads/locking_205dde42f1.svg"
                            alt="locking"
                            className="img-fluid mb-1"
                            style={{ width: "1rem" }}
                          />
                          Lockin period
                        </p>
                        <p className="card-text">
                          <img
                            src="https://cms.growpital.com/uploads/uil_money_insert_f5b9a6c93a.svg"
                            alt="locking"
                            className="img-fluid mb-1"
                            style={{ width: "1.2rem" }}
                          />
                          Payout
                        </p>
                      </div>
                      <div>
                        <p className="card-text">:</p>
                        <p className="card-text">:</p>
                        <p className="card-text">:</p>
                      </div>
                      <div>
                        <p className="card-text">12 Months</p>
                        <p className="card-text">12 Months</p>
                        <p className="card-text">Monthly</p>
                      </div>
                    </div>
                    <div className="py-2">
                      <a href="https://app.growpital.com/signup">
                        <button
                          type="button"
                          className="main-btn-service maincolor bg-transparent btn btn-primary"
                        >
                          Invest Now
                        </button>
                      </a>
                    </div>
                    <div className="py-2">
                      <a
                        href="https://drive.google.com/file/d/1bUF3cdfk5gGHGSK7Jh35kQD9ZwrQMLTK/view"
                        className="fs-16 fw-700 text-white text-center py-2"
                      >
                        Know more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-up"
                className="d-flex justify-content-center align-items-center mb-5 col-lg-6 aos-init aos-animate"
              >
                <div
                  className="mb-2 bg-dark-gradient text-white position-relative card"
                  style={{ width: "25rem" }}
                >
                  <div className="d-inline-flex align-items-center py-3 fw-bold fs-4 card-header">
                    <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center me-4 p-2">
                      <img
                        src="https://cms.growpital.com/uploads/leafy_eleven_plan_fbfc42c562.png"
                        alt=""
                        className="img-fluid"
                        style={{ width: "1.5rem" }}
                      />
                    </p>
                    EverGreen Returns
                  </div>
                  <div className="d-flex align-items-center justify-content-between py-3 card-header">
                    <div>
                      <div className="text-main-green card-title h5">
                        ₹ 20,000/unit
                      </div>
                      <p className="card-text">Investment</p>
                    </div>
                    <div>
                      <div className="text-main-green card-title h5">12%</div>
                      <p className="card-text">ROI</p>
                    </div>
                  </div>
                  <div className="text-center card-body">
                    <div className="d-flex align-items-center justify-content-between mb-3 text-start">
                      <div>
                        <p className="card-text">
                          <img
                            src="https://cms.growpital.com/uploads/soil_Farming_1_a2e926fff4_588c230283.svg"
                            alt=""
                            className="mb-1"
                            style={{ width: "1rem" }}
                          />
                          Tenure
                        </p>
                        <p className="card-text">
                          <img
                            src="https://cms.growpital.com/uploads/locking_205dde42f1.svg"
                            alt="locking"
                            className="img-fluid mb-1"
                            style={{ width: "1rem" }}
                          />
                          Lockin period
                        </p>
                        <p className="card-text">
                          <img
                            src="https://cms.growpital.com/uploads/uil_money_insert_f5b9a6c93a.svg"
                            alt="locking"
                            className="img-fluid mb-1"
                            style={{ width: "1.2rem" }}
                          />
                          Payout
                        </p>
                      </div>
                      <div>
                        <p className="card-text">:</p>
                        <p className="card-text">:</p>
                        <p className="card-text">:</p>
                      </div>
                      <div>
                        <p className="card-text">12 Months</p>
                        <p className="card-text">12 Months</p>
                        <p className="card-text">Quarterly</p>
                      </div>
                    </div>
                    <div className="py-2">
                      <a href="https://app.growpital.com/signup">
                        <button
                          type="button"
                          className="main-btn-service maincolor bg-transparent btn btn-primary"
                        >
                          Invest Now
                        </button>
                      </a>
                    </div>
                    <div className="py-2">
                      <a
                        href="https://drive.google.com/file/d/1bUF3cdfk5gGHGSK7Jh35kQD9ZwrQMLTK/view"
                        className="fs-16 fw-700 text-white text-center py-2"
                      >
                        Know more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-up"
                className="d-flex justify-content-center align-items-center mb-5 col-lg-6 aos-init aos-animate"
              >
                <div
                  className="mb-2 bg-dark-gradient text-white position-relative card"
                  style={{ width: "25rem" }}
                >
                  <div className="d-inline-flex align-items-center py-3 fw-bold fs-4 card-header">
                    <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center me-4 p-2">
                      <img
                        src="https://cms.growpital.com/uploads/soil_Farming_1_a2e926fff4_588c230283.svg"
                        alt=""
                        className="img-fluid"
                        style={{ width: "1.5rem" }}
                      />
                    </p>
                    Harvest Bloom
                  </div>
                  <div className="d-flex align-items-center justify-content-between py-3 card-header">
                    <div>
                      <div className="text-main-green card-title h5">
                        ₹ 2,00,000/unit
                      </div>
                      <p className="card-text">Investment</p>
                    </div>
                    <div>
                      <div className="text-main-green card-title h5">14%</div>
                      <p className="card-text">ROI</p>
                    </div>
                  </div>
                  <div className="text-center card-body">
                    <div className="d-flex align-items-center justify-content-between mb-3 text-start">
                      <div>
                        <p className="card-text">
                          <img
                            src="https://cms.growpital.com/uploads/soil_Farming_1_a2e926fff4_588c230283.svg"
                            alt=""
                            className="mb-1"
                            style={{ width: "1rem" }}
                          />
                          Tenure
                        </p>
                        <p className="card-text">
                          <img
                            src="https://cms.growpital.com/uploads/locking_205dde42f1.svg"
                            alt="locking"
                            className="img-fluid mb-1"
                            style={{ width: "1rem" }}
                          />
                          Lockin period
                        </p>
                        <p className="card-text">
                          <img
                            src="https://cms.growpital.com/uploads/uil_money_insert_f5b9a6c93a.svg"
                            alt="locking"
                            className="img-fluid mb-1"
                            style={{ width: "1.2rem" }}
                          />
                          Payout
                        </p>
                      </div>
                      <div>
                        <p className="card-text">:</p>
                        <p className="card-text">:</p>
                        <p className="card-text">:</p>
                      </div>
                      <div>
                        <p className="card-text">12 Months</p>
                        <p className="card-text">12 Months</p>
                        <p className="card-text">Quarterly</p>
                      </div>
                    </div>
                    <div className="py-2">
                      <a href="https://app.growpital.com/signup">
                        <button
                          type="button"
                          className="main-btn-service maincolor bg-transparent btn btn-primary"
                        >
                          Invest Now
                        </button>
                      </a>
                    </div>
                    <div className="py-2">
                      <a
                        href="https://drive.google.com/file/d/1bUF3cdfk5gGHGSK7Jh35kQD9ZwrQMLTK/view"
                        className="fs-16 fw-700 text-white text-center py-2"
                      >
                        Know more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events d-xl-none Service-Card">
          <div
            className="swiper-wrapper"
            style={{ cursor: "grab", transitionDuration: "0ms" }}
          >
            <div
              className="swiper-slide swiper-slide-duplicate mb-5"
              data-swiper-slide-index={0}
            >
              <div
                data-aos="fade-up"
                className="d-flex justify-content-center align-items-center mb-5 col-md-12 aos-init aos-animate"
              >
                <div
                  className="mb-2 bg-dark-gradient text-white px-3 card"
                  style={{ width: "25rem" }}
                >
                  <div className="d-inline-flex align-items-center py-3 fw-bold fs-4 card-header">
                    <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center me-4 p-2">
                      <img
                        src="https://cms.growpital.com/uploads/leafy_eleven_plan_fbfc42c562.png"
                        alt=""
                        className="img-fluid"
                        style={{ width: "1rem" }}
                      />
                    </p>
                    Leafy Eleven
                  </div>
                  <div className="d-flex align-items-center justify-content-between py-3 card-header">
                    <div>
                      <div className="text-main-green card-title h5">
                        ₹ 11000/unit
                      </div>
                      <p className="card-text">Investment</p>
                    </div>
                    <div>
                      <div className="text-main-green card-title h5">11%</div>
                      <p className="card-text">ROI</p>
                    </div>
                  </div>
                  <div className="text-center card-body">
                    <div className="d-flex align-items-center justify-content-between mb-3 text-start">
                      <div>
                        <p className="card-text">
                          <img
                            src="https://cms.growpital.com/uploads/soil_Farming_1_a2e926fff4_588c230283.svg"
                            alt=""
                            className="mb-1"
                            style={{ width: "1rem" }}
                          />
                          Tenure
                        </p>
                        <p className="card-text">
                          <img
                            src="https://cms.growpital.com/uploads/locking_205dde42f1.svg"
                            alt="locking"
                            className="img-fluid mb-1"
                            style={{ width: "1rem" }}
                          />
                          Lock in period
                        </p>
                        <p className="card-text">
                          <img
                            src="https://cms.growpital.com/uploads/uil_money_insert_f5b9a6c93a.svg"
                            alt="locking"
                            className="img-fluid mb-1"
                            style={{ width: "1.2rem" }}
                          />
                          Payout
                        </p>
                      </div>
                      <div>
                        <p className="card-text">:</p>
                        <p className="card-text">:</p>
                        <p className="card-text">:</p>
                      </div>
                      <div>
                        <p className="card-text">12 Months</p>
                        <p className="card-text">12 Months</p>
                        <p className="card-text">Monthly</p>
                      </div>
                    </div>
                    <div className="py-2">
                      <a href="https://app.growpital.com/signup">
                        <button
                          type="button"
                          className="main-btn-service maincolor bg-transparent btn btn-primary"
                        >
                          Invest Now
                        </button>
                      </a>
                    </div>
                    <div className="py-2">
                      <a
                        href="https://drive.google.com/file/d/1bUF3cdfk5gGHGSK7Jh35kQD9ZwrQMLTK/view"
                        className="fs-16 fw-700 text-white text-center py-2"
                      >
                        Know more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="swiper-slide swiper-slide-duplicate mb-5"
              data-swiper-slide-index={1}
            >
              <div
                data-aos="fade-up"
                className="d-flex justify-content-center align-items-center mb-5 col-md-12 aos-init aos-animate"
              >
                <div
                  className="mb-2 bg-dark-gradient text-white px-3 card"
                  style={{ width: "25rem" }}
                >
                  <div className="d-inline-flex align-items-center py-3 fw-bold fs-4 card-header">
                    <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center me-4 p-2">
                      <img
                        src="https://cms.growpital.com/uploads/leafy_eleven_plan_fbfc42c562.png"
                        alt=""
                        className="img-fluid"
                        style={{ width: "1rem" }}
                      />
                    </p>
                    EverGreen Returns
                  </div>
                  <div className="d-flex align-items-center justify-content-between py-3 card-header">
                    <div>
                      <div className="text-main-green card-title h5">
                        ₹ 20000/unit
                      </div>
                      <p className="card-text">Investment</p>
                    </div>
                    <div>
                      <div className="text-main-green card-title h5">12%</div>
                      <p className="card-text">ROI</p>
                    </div>
                  </div>
                  <div className="text-center card-body">
                    <div className="d-flex align-items-center justify-content-between mb-3 text-start">
                      <div>
                        <p className="card-text">
                          <img
                            src="https://cms.growpital.com/uploads/soil_Farming_1_a2e926fff4_588c230283.svg"
                            alt=""
                            className="mb-1"
                            style={{ width: "1rem" }}
                          />
                          Tenure
                        </p>
                        <p className="card-text">
                          <img
                            src="https://cms.growpital.com/uploads/locking_205dde42f1.svg"
                            alt="locking"
                            className="img-fluid mb-1"
                            style={{ width: "1rem" }}
                          />
                          Lock in period
                        </p>
                        <p className="card-text">
                          <img
                            src="https://cms.growpital.com/uploads/uil_money_insert_f5b9a6c93a.svg"
                            alt="locking"
                            className="img-fluid mb-1"
                            style={{ width: "1.2rem" }}
                          />
                          Payout
                        </p>
                      </div>
                      <div>
                        <p className="card-text">:</p>
                        <p className="card-text">:</p>
                        <p className="card-text">:</p>
                      </div>
                      <div>
                        <p className="card-text">12 Months</p>
                        <p className="card-text">12 Months</p>
                        <p className="card-text">Quarterly</p>
                      </div>
                    </div>
                    <div className="py-2">
                      <a href="https://app.growpital.com/signup">
                        <button
                          type="button"
                          className="main-btn-service maincolor bg-transparent btn btn-primary"
                        >
                          Invest Now
                        </button>
                      </a>
                    </div>
                    <div className="py-2">
                      <a
                        href="https://drive.google.com/file/d/1bUF3cdfk5gGHGSK7Jh35kQD9ZwrQMLTK/view"
                        className="fs-16 fw-700 text-white text-center py-2"
                      >
                        Know more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="swiper-slide swiper-slide-duplicate mb-5"
              data-swiper-slide-index={2}
            >
              <div
                data-aos="fade-up"
                className="d-flex justify-content-center align-items-center mb-5 col-md-12 aos-init aos-animate"
              >
                <div
                  className="mb-2 bg-dark-gradient text-white px-3 card"
                  style={{ width: "25rem" }}
                >
                  <div className="d-inline-flex align-items-center py-3 fw-bold fs-4 card-header">
                    <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center me-4 p-2">
                      <img
                        src="https://cms.growpital.com/uploads/soil_Farming_1_a2e926fff4_588c230283.svg"
                        alt=""
                        className="img-fluid"
                        style={{ width: "1rem" }}
                      />
                    </p>
                    Harvest Bloom
                  </div>
                  <div className="d-flex align-items-center justify-content-between py-3 card-header">
                    <div>
                      <div className="text-main-green card-title h5">
                        ₹ 200000/unit
                      </div>
                      <p className="card-text">Investment</p>
                    </div>
                    <div>
                      <div className="text-main-green card-title h5">14%</div>
                      <p className="card-text">ROI</p>
                    </div>
                  </div>
                  <div className="text-center card-body">
                    <div className="d-flex align-items-center justify-content-between mb-3 text-start">
                      <div>
                        <p className="card-text">
                          <img
                            src="https://cms.growpital.com/uploads/soil_Farming_1_a2e926fff4_588c230283.svg"
                            alt=""
                            className="mb-1"
                            style={{ width: "1rem" }}
                          />
                          Tenure
                        </p>
                        <p className="card-text">
                          <img
                            src="https://cms.growpital.com/uploads/locking_205dde42f1.svg"
                            alt="locking"
                            className="img-fluid mb-1"
                            style={{ width: "1rem" }}
                          />
                          Lock in period
                        </p>
                        <p className="card-text">
                          <img
                            src="https://cms.growpital.com/uploads/uil_money_insert_f5b9a6c93a.svg"
                            alt="locking"
                            className="img-fluid mb-1"
                            style={{ width: "1.2rem" }}
                          />
                          Payout
                        </p>
                      </div>
                      <div>
                        <p className="card-text">:</p>
                        <p className="card-text">:</p>
                        <p className="card-text">:</p>
                      </div>
                      <div>
                        <p className="card-text">12 Months</p>
                        <p className="card-text">12 Months</p>
                        <p className="card-text">Quarterly</p>
                      </div>
                    </div>
                    <div className="py-2">
                      <a href="https://app.growpital.com/signup">
                        <button
                          type="button"
                          className="main-btn-service maincolor bg-transparent btn btn-primary"
                        >
                          Invest Now
                        </button>
                      </a>
                    </div>
                    <div className="py-2">
                      <a
                        href="https://drive.google.com/file/d/1bUF3cdfk5gGHGSK7Jh35kQD9ZwrQMLTK/view"
                        className="fs-16 fw-700 text-white text-center py-2"
                      >
                        Know more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide mb-5" data-swiper-slide-index={0}>
              <div
                data-aos="fade-up"
                className="d-flex justify-content-center align-items-center mb-5 col-md-12 aos-init aos-animate"
              >
                <div
                  className="mb-2 bg-dark-gradient text-white px-3 card"
                  style={{ width: "25rem" }}
                >
                  <div className="d-inline-flex align-items-center py-3 fw-bold fs-4 card-header">
                    <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center me-4 p-2">
                      <img
                        src="https://cms.growpital.com/uploads/leafy_eleven_plan_fbfc42c562.png"
                        alt=""
                        className="img-fluid"
                        style={{ width: "1rem" }}
                      />
                    </p>
                    Leafy Eleven
                  </div>
                  <div className="d-flex align-items-center justify-content-between py-3 card-header">
                    <div>
                      <div className="text-main-green card-title h5">
                        ₹ 11000/unit
                      </div>
                      <p className="card-text">Investment</p>
                    </div>
                    <div>
                      <div className="text-main-green card-title h5">11%</div>
                      <p className="card-text">ROI</p>
                    </div>
                  </div>
                  <div className="text-center card-body">
                    <div className="d-flex align-items-center justify-content-between mb-3 text-start">
                      <div>
                        <p className="card-text">
                          <img
                            src="https://cms.growpital.com/uploads/soil_Farming_1_a2e926fff4_588c230283.svg"
                            alt=""
                            className="mb-1"
                            style={{ width: "1rem" }}
                          />
                          Tenure
                        </p>
                        <p className="card-text">
                          <img
                            src="https://cms.growpital.com/uploads/locking_205dde42f1.svg"
                            alt="locking"
                            className="img-fluid mb-1"
                            style={{ width: "1rem" }}
                          />
                          Lock in period
                        </p>
                        <p className="card-text">
                          <img
                            src="https://cms.growpital.com/uploads/uil_money_insert_f5b9a6c93a.svg"
                            alt="locking"
                            className="img-fluid mb-1"
                            style={{ width: "1.2rem" }}
                          />
                          Payout
                        </p>
                      </div>
                      <div>
                        <p className="card-text">:</p>
                        <p className="card-text">:</p>
                        <p className="card-text">:</p>
                      </div>
                      <div>
                        <p className="card-text">12 Months</p>
                        <p className="card-text">12 Months</p>
                        <p className="card-text">Monthly</p>
                      </div>
                    </div>
                    <div className="py-2">
                      <a href="https://app.growpital.com/signup">
                        <button
                          type="button"
                          className="main-btn-service maincolor bg-transparent btn btn-primary"
                        >
                          Invest Now
                        </button>
                      </a>
                    </div>
                    <div className="py-2">
                      <a
                        href="https://drive.google.com/file/d/1bUF3cdfk5gGHGSK7Jh35kQD9ZwrQMLTK/view"
                        className="fs-16 fw-700 text-white text-center py-2"
                      >
                        Know more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide mb-5" data-swiper-slide-index={1}>
              <div
                data-aos="fade-up"
                className="d-flex justify-content-center align-items-center mb-5 col-md-12 aos-init aos-animate"
              >
                <div
                  className="mb-2 bg-dark-gradient text-white px-3 card"
                  style={{ width: "25rem" }}
                >
                  <div className="d-inline-flex align-items-center py-3 fw-bold fs-4 card-header">
                    <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center me-4 p-2">
                      <img
                        src="https://cms.growpital.com/uploads/leafy_eleven_plan_fbfc42c562.png"
                        alt=""
                        className="img-fluid"
                        style={{ width: "1rem" }}
                      />
                    </p>
                    EverGreen Returns
                  </div>
                  <div className="d-flex align-items-center justify-content-between py-3 card-header">
                    <div>
                      <div className="text-main-green card-title h5">
                        ₹ 20000/unit
                      </div>
                      <p className="card-text">Investment</p>
                    </div>
                    <div>
                      <div className="text-main-green card-title h5">12%</div>
                      <p className="card-text">ROI</p>
                    </div>
                  </div>
                  <div className="text-center card-body">
                    <div className="d-flex align-items-center justify-content-between mb-3 text-start">
                      <div>
                        <p className="card-text">
                          <img
                            src="https://cms.growpital.com/uploads/soil_Farming_1_a2e926fff4_588c230283.svg"
                            alt=""
                            className="mb-1"
                            style={{ width: "1rem" }}
                          />
                          Tenure
                        </p>
                        <p className="card-text">
                          <img
                            src="https://cms.growpital.com/uploads/locking_205dde42f1.svg"
                            alt="locking"
                            className="img-fluid mb-1"
                            style={{ width: "1rem" }}
                          />
                          Lock in period
                        </p>
                        <p className="card-text">
                          <img
                            src="https://cms.growpital.com/uploads/uil_money_insert_f5b9a6c93a.svg"
                            alt="locking"
                            className="img-fluid mb-1"
                            style={{ width: "1.2rem" }}
                          />
                          Payout
                        </p>
                      </div>
                      <div>
                        <p className="card-text">:</p>
                        <p className="card-text">:</p>
                        <p className="card-text">:</p>
                      </div>
                      <div>
                        <p className="card-text">12 Months</p>
                        <p className="card-text">12 Months</p>
                        <p className="card-text">Quarterly</p>
                      </div>
                    </div>
                    <div className="py-2">
                      <a href="https://app.growpital.com/signup">
                        <button
                          type="button"
                          className="main-btn-service maincolor bg-transparent btn btn-primary"
                        >
                          Invest Now
                        </button>
                      </a>
                    </div>
                    <div className="py-2">
                      <a
                        href="https://drive.google.com/file/d/1bUF3cdfk5gGHGSK7Jh35kQD9ZwrQMLTK/view"
                        className="fs-16 fw-700 text-white text-center py-2"
                      >
                        Know more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide mb-5" data-swiper-slide-index={2}>
              <div
                data-aos="fade-up"
                className="d-flex justify-content-center align-items-center mb-5 col-md-12 aos-init aos-animate"
              >
                <div
                  className="mb-2 bg-dark-gradient text-white px-3 card"
                  style={{ width: "25rem" }}
                >
                  <div className="d-inline-flex align-items-center py-3 fw-bold fs-4 card-header">
                    <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center me-4 p-2">
                      <img
                        src="https://cms.growpital.com/uploads/soil_Farming_1_a2e926fff4_588c230283.svg"
                        alt=""
                        className="img-fluid"
                        style={{ width: "1rem" }}
                      />
                    </p>
                    Harvest Bloom
                  </div>
                  <div className="d-flex align-items-center justify-content-between py-3 card-header">
                    <div>
                      <div className="text-main-green card-title h5">
                        ₹ 200000/unit
                      </div>
                      <p className="card-text">Investment</p>
                    </div>
                    <div>
                      <div className="text-main-green card-title h5">14%</div>
                      <p className="card-text">ROI</p>
                    </div>
                  </div>
                  <div className="text-center card-body">
                    <div className="d-flex align-items-center justify-content-between mb-3 text-start">
                      <div>
                        <p className="card-text">
                          <img
                            src="https://cms.growpital.com/uploads/soil_Farming_1_a2e926fff4_588c230283.svg"
                            alt=""
                            className="mb-1"
                            style={{ width: "1rem" }}
                          />
                          Tenure
                        </p>
                        <p className="card-text">
                          <img
                            src="https://cms.growpital.com/uploads/locking_205dde42f1.svg"
                            alt="locking"
                            className="img-fluid mb-1"
                            style={{ width: "1rem" }}
                          />
                          Lock in period
                        </p>
                        <p className="card-text">
                          <img
                            src="https://cms.growpital.com/uploads/uil_money_insert_f5b9a6c93a.svg"
                            alt="locking"
                            className="img-fluid mb-1"
                            style={{ width: "1.2rem" }}
                          />
                          Payout
                        </p>
                      </div>
                      <div>
                        <p className="card-text">:</p>
                        <p className="card-text">:</p>
                        <p className="card-text">:</p>
                      </div>
                      <div>
                        <p className="card-text">12 Months</p>
                        <p className="card-text">12 Months</p>
                        <p className="card-text">Quarterly</p>
                      </div>
                    </div>
                    <div className="py-2">
                      <a href="https://app.growpital.com/signup">
                        <button
                          type="button"
                          className="main-btn-service maincolor bg-transparent btn btn-primary"
                        >
                          Invest Now
                        </button>
                      </a>
                    </div>
                    <div className="py-2">
                      <a
                        href="https://drive.google.com/file/d/1bUF3cdfk5gGHGSK7Jh35kQD9ZwrQMLTK/view"
                        className="fs-16 fw-700 text-white text-center py-2"
                      >
                        Know more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="swiper-slide swiper-slide-duplicate mb-5"
              data-swiper-slide-index={0}
            >
              <div
                data-aos="fade-up"
                className="d-flex justify-content-center align-items-center mb-5 col-md-12 aos-init aos-animate"
              >
                <div
                  className="mb-2 bg-dark-gradient text-white px-3 card"
                  style={{ width: "25rem" }}
                >
                  <div className="d-inline-flex align-items-center py-3 fw-bold fs-4 card-header">
                    <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center me-4 p-2">
                      <img
                        src="https://cms.growpital.com/uploads/leafy_eleven_plan_fbfc42c562.png"
                        alt=""
                        className="img-fluid"
                        style={{ width: "1rem" }}
                      />
                    </p>
                    Leafy Eleven
                  </div>
                  <div className="d-flex align-items-center justify-content-between py-3 card-header">
                    <div>
                      <div className="text-main-green card-title h5">
                        ₹ 11000/unit
                      </div>
                      <p className="card-text">Investment</p>
                    </div>
                    <div>
                      <div className="text-main-green card-title h5">11%</div>
                      <p className="card-text">ROI</p>
                    </div>
                  </div>
                  <div className="text-center card-body">
                    <div className="d-flex align-items-center justify-content-between mb-3 text-start">
                      <div>
                        <p className="card-text">
                          <img
                            src="https://cms.growpital.com/uploads/soil_Farming_1_a2e926fff4_588c230283.svg"
                            alt=""
                            className="mb-1"
                            style={{ width: "1rem" }}
                          />
                          Tenure
                        </p>
                        <p className="card-text">
                          <img
                            src="https://cms.growpital.com/uploads/locking_205dde42f1.svg"
                            alt="locking"
                            className="img-fluid mb-1"
                            style={{ width: "1rem" }}
                          />
                          Lock in period
                        </p>
                        <p className="card-text">
                          <img
                            src="https://cms.growpital.com/uploads/uil_money_insert_f5b9a6c93a.svg"
                            alt="locking"
                            className="img-fluid mb-1"
                            style={{ width: "1.2rem" }}
                          />
                          Payout
                        </p>
                      </div>
                      <div>
                        <p className="card-text">:</p>
                        <p className="card-text">:</p>
                        <p className="card-text">:</p>
                      </div>
                      <div>
                        <p className="card-text">12 Months</p>
                        <p className="card-text">12 Months</p>
                        <p className="card-text">Monthly</p>
                      </div>
                    </div>
                    <div className="py-2">
                      <a href="https://app.growpital.com/signup">
                        <button
                          type="button"
                          className="main-btn-service maincolor bg-transparent btn btn-primary"
                        >
                          Invest Now
                        </button>
                      </a>
                    </div>
                    <div className="py-2">
                      <a
                        href="https://drive.google.com/file/d/1bUF3cdfk5gGHGSK7Jh35kQD9ZwrQMLTK/view"
                        className="fs-16 fw-700 text-white text-center py-2"
                      >
                        Know more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="swiper-slide swiper-slide-duplicate mb-5"
              data-swiper-slide-index={1}
            >
              <div
                data-aos="fade-up"
                className="d-flex justify-content-center align-items-center mb-5 col-md-12 aos-init aos-animate"
              >
                <div
                  className="mb-2 bg-dark-gradient text-white px-3 card"
                  style={{ width: "25rem" }}
                >
                  <div className="d-inline-flex align-items-center py-3 fw-bold fs-4 card-header">
                    <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center me-4 p-2">
                      <img
                        src="https://cms.growpital.com/uploads/leafy_eleven_plan_fbfc42c562.png"
                        alt=""
                        className="img-fluid"
                        style={{ width: "1rem" }}
                      />
                    </p>
                    EverGreen Returns
                  </div>
                  <div className="d-flex align-items-center justify-content-between py-3 card-header">
                    <div>
                      <div className="text-main-green card-title h5">
                        ₹ 20000/unit
                      </div>
                      <p className="card-text">Investment</p>
                    </div>
                    <div>
                      <div className="text-main-green card-title h5">12%</div>
                      <p className="card-text">ROI</p>
                    </div>
                  </div>
                  <div className="text-center card-body">
                    <div className="d-flex align-items-center justify-content-between mb-3 text-start">
                      <div>
                        <p className="card-text">
                          <img
                            src="https://cms.growpital.com/uploads/soil_Farming_1_a2e926fff4_588c230283.svg"
                            alt=""
                            className="mb-1"
                            style={{ width: "1rem" }}
                          />
                          Tenure
                        </p>
                        <p className="card-text">
                          <img
                            src="https://cms.growpital.com/uploads/locking_205dde42f1.svg"
                            alt="locking"
                            className="img-fluid mb-1"
                            style={{ width: "1rem" }}
                          />
                          Lock in period
                        </p>
                        <p className="card-text">
                          <img
                            src="https://cms.growpital.com/uploads/uil_money_insert_f5b9a6c93a.svg"
                            alt="locking"
                            className="img-fluid mb-1"
                            style={{ width: "1.2rem" }}
                          />
                          Payout
                        </p>
                      </div>
                      <div>
                        <p className="card-text">:</p>
                        <p className="card-text">:</p>
                        <p className="card-text">:</p>
                      </div>
                      <div>
                        <p className="card-text">12 Months</p>
                        <p className="card-text">12 Months</p>
                        <p className="card-text">Quarterly</p>
                      </div>
                    </div>
                    <div className="py-2">
                      <a href="https://app.growpital.com/signup">
                        <button
                          type="button"
                          className="main-btn-service maincolor bg-transparent btn btn-primary"
                        >
                          Invest Now
                        </button>
                      </a>
                    </div>
                    <div className="py-2">
                      <a
                        href="https://drive.google.com/file/d/1bUF3cdfk5gGHGSK7Jh35kQD9ZwrQMLTK/view"
                        className="fs-16 fw-700 text-white text-center py-2"
                      >
                        Know more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="swiper-slide swiper-slide-duplicate mb-5"
              data-swiper-slide-index={2}
            >
              <div
                data-aos="fade-up"
                className="d-flex justify-content-center align-items-center mb-5 col-md-12 aos-init aos-animate"
              >
                <div
                  className="mb-2 bg-dark-gradient text-white px-3 card"
                  style={{ width: "25rem" }}
                >
                  <div className="d-inline-flex align-items-center py-3 fw-bold fs-4 card-header">
                    <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center me-4 p-2">
                      <img
                        src="https://cms.growpital.com/uploads/soil_Farming_1_a2e926fff4_588c230283.svg"
                        alt=""
                        className="img-fluid"
                        style={{ width: "1rem" }}
                      />
                    </p>
                    Harvest Bloom
                  </div>
                  <div className="d-flex align-items-center justify-content-between py-3 card-header">
                    <div>
                      <div className="text-main-green card-title h5">
                        ₹ 200000/unit
                      </div>
                      <p className="card-text">Investment</p>
                    </div>
                    <div>
                      <div className="text-main-green card-title h5">14%</div>
                      <p className="card-text">ROI</p>
                    </div>
                  </div>
                  <div className="text-center card-body">
                    <div className="d-flex align-items-center justify-content-between mb-3 text-start">
                      <div>
                        <p className="card-text">
                          <img
                            src="https://cms.growpital.com/uploads/soil_Farming_1_a2e926fff4_588c230283.svg"
                            alt=""
                            className="mb-1"
                            style={{ width: "1rem" }}
                          />
                          Tenure
                        </p>
                        <p className="card-text">
                          <img
                            src="https://cms.growpital.com/uploads/locking_205dde42f1.svg"
                            alt="locking"
                            className="img-fluid mb-1"
                            style={{ width: "1rem" }}
                          />
                          Lock in period
                        </p>
                        <p className="card-text">
                          <img
                            src="https://cms.growpital.com/uploads/uil_money_insert_f5b9a6c93a.svg"
                            alt="locking"
                            className="img-fluid mb-1"
                            style={{ width: "1.2rem" }}
                          />
                          Payout
                        </p>
                      </div>
                      <div>
                        <p className="card-text">:</p>
                        <p className="card-text">:</p>
                        <p className="card-text">:</p>
                      </div>
                      <div>
                        <p className="card-text">12 Months</p>
                        <p className="card-text">12 Months</p>
                        <p className="card-text">Quarterly</p>
                      </div>
                    </div>
                    <div className="py-2">
                      <a href="https://app.growpital.com/signup">
                        <button
                          type="button"
                          className="main-btn-service maincolor bg-transparent btn btn-primary"
                        >
                          Invest Now
                        </button>
                      </a>
                    </div>
                    <div className="py-2">
                      <a
                        href="https://drive.google.com/file/d/1bUF3cdfk5gGHGSK7Jh35kQD9ZwrQMLTK/view"
                        className="fs-16 fw-700 text-white text-center py-2"
                      >
                        Know more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-button-prev" />
          <div className="swiper-button-next" />
          <div className="swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal" />
        </div>
      </div>
    </section>
    <section className="py-5" id="calci" style={{overflow: "hidden"}}>
      <div className="container">
        <div className="d-flex justify-content-center align-items-center row">
          <div
            data-aos="fade-up"
            className="text-center col aos-init aos-animate"
          >
            <p className="text-uppercase fs-18 fw-500 text-main-green">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 16 16"
                className="me-1"
                height={8}
                width={8}
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx={8} cy={8} r={8} />
              </svg>
              CALCULATE YOUR RETURNS ON INVESTMENT
            </p>
            <h2 className="text-white fw-600 display-6 mb-3 mb-md-4">
              Estimate your
              <span className="text-main-green"> Earnings </span> before Investing
            </h2>
          </div>
        </div>
        <div className="pt-2 row">
          <div
            data-aos="fade-up"
            className="text-center mb-3 mb-md-0 col-lg-6 col-12 aos-init aos-animate"
            style={{ maxWidth: "40rem" }}
          >
            <div className="range-progress">
              <div className="darkcard mt-3 mt-md-4 p-0 rounded text-start text-white card">
                <div className="m-1 bg-dark-gradient rounded p-4 card-body">
                  <div className="text-center">
                    <h2 className="text-main-green fw-600 fs-30 text-capitalize mb-3 mb-md-3">
                      Investment Amount
                      <span className="text-main-gold">
                        <span className="px-1">₹</span>11,000
                      </span>
                    </h2>
                    <p className="fs-14 fw-500 text-white my-4">
                      Move the slider to change the investment amount
                    </p>
                  </div>
                  <div>
                    <div className="mb-3 px-3">
                      <div className="MuiBox-root css-0">
                        <span
                          aria-labelledby="non-linear-slider"
                          className="MuiSlider-root MuiSlider-colorPrimary MuiSlider-sizeMedium MuiSlider-marked css-1imz119"
                        >
                          <span className="MuiSlider-rail css-b04pc9" />
                          <span
                            className="MuiSlider-track css-1t2bqnt"
                            style={{ left: "0%", width: "0%" }}
                          />
                          <span
                            data-index={0}
                            className="MuiSlider-mark MuiSlider-markActive css-17lmo96"
                            style={{ left: "0%" }}
                          />
                          <span
                            aria-hidden="true"
                            data-index={0}
                            className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj"
                            style={{ left: "0%" }}
                          >
                            11K
                          </span>
                          <span
                            data-index={1}
                            className="MuiSlider-mark css-1ejytfe"
                            style={{ left: "16.6667%" }}
                          />
                          <span
                            aria-hidden="true"
                            data-index={1}
                            className="MuiSlider-markLabel css-60f6gz"
                            style={{ left: "16.6667%" }}
                          >
                            20K
                          </span>
                          <span
                            data-index={2}
                            className="MuiSlider-mark css-1ejytfe"
                            style={{ left: "33.3333%" }}
                          />
                          <span
                            aria-hidden="true"
                            data-index={2}
                            className="MuiSlider-markLabel css-60f6gz"
                            style={{ left: "33.3333%" }}
                          >
                            1L
                          </span>
                          <span
                            data-index={3}
                            className="MuiSlider-mark css-1ejytfe"
                            style={{ left: "50%" }}
                          />
                          <span
                            aria-hidden="true"
                            data-index={3}
                            className="MuiSlider-markLabel css-60f6gz"
                            style={{ left: "50%" }}
                          >
                            2L
                          </span>
                          <span
                            data-index={4}
                            className="MuiSlider-mark css-1ejytfe"
                            style={{ left: "66.6667%" }}
                          />
                          <span
                            aria-hidden="true"
                            data-index={4}
                            className="MuiSlider-markLabel css-60f6gz"
                            style={{ left: "66.6667%" }}
                          >
                            6L
                          </span>
                          <span
                            data-index={5}
                            className="MuiSlider-mark css-1ejytfe"
                            style={{ left: "83.3333%" }}
                          />
                          <span
                            aria-hidden="true"
                            data-index={5}
                            className="MuiSlider-markLabel css-60f6gz"
                            style={{ left: "83.3333%" }}
                          >
                            10L
                          </span>
                          <span
                            data-index={6}
                            className="MuiSlider-mark css-1ejytfe"
                            style={{ left: "100%" }}
                          />
                          <span
                            aria-hidden="true"
                            data-index={6}
                            className="MuiSlider-markLabel css-60f6gz"
                            style={{ left: "100%" }}
                          >
                            30L
                          </span>
                          <span
                            data-index={0}
                            data-focusvisible="false"
                            className="MuiSlider-thumb MuiSlider-thumbColorPrimary MuiSlider-thumbSizeMedium css-7drnjp"
                            style={{ left: "0%" }}
                          >
                            <input
                              data-index={0}
                              aria-valuenow={11000}
                              aria-labelledby="non-linear-slider"
                              aria-orientation="horizontal"
                              aria-valuemax={3000000}
                              aria-valuemin={11000}
                              type="range"
                              min={0}
                              max={6}
                              step={1}
                              defaultValue={0}
                              style={{
                                border: 0,
                                clip: "rect(0px, 0px, 0px, 0px)",
                                height: "100%",
                                margin: "-1px",
                                overflow: "hidden",
                                padding: 0,
                                position: "absolute",
                                whiteSpace: "nowrap",
                                width: "100%",
                                direction: "ltr",
                              }}
                            />
                            <span
                              className="MuiSlider-valueLabel css-3besu"
                              aria-hidden="true"
                            >
                              <span className="MuiSlider-valueLabelCircle">
                                <span className="MuiSlider-valueLabelLabel">
                                  11000
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between row">
                    <div className="text-start text-center col-md-6 col-12">
                      <p className="text-uppercase fs-18 fw-500 text-white">
                        <img
                          src="/static/media/locking.5659bec2a3848b88cd4e3d84e51f064a.svg"
                          alt="locking"
                          className="img-fluid me-2"
                          style={{ width: "1.5rem" }}
                        />
                        <span>Committed Period: 12 Months</span>
                      </p>
                    </div>
                    <div className="text-end text-center col-md-6 col-12">
                      <p className="text-uppercase fs-18 fw-500 text-white">
                        <img
                          src="/static/media/vintage-hourglass-svgrepo-com 1.a8b2042b3135c84ec5833c0438a3890b.svg"
                          alt=""
                          style={{ width: "1.5rem" }}
                        />
                        Tenure: 12 Months
                      </p>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-main-gold fw-600 fs-30 my-3 my-md-4">
                      <img
                        src="https://cms.growpital.com/uploads/leafy_eleven_plan_fbfc42c562.png"
                        alt=""
                        className="img-fluid me-2"
                        style={{ width: "6%" }}
                      />
                      Leafy Eleven
                    </h3>
                  </div>
                  <div className="pt-4 row">
                    <div className="d-flex justify-content-around col">
                      <div className="text-center px-2 mx-0">
                        <h2 className="text-main-green fw-600 fs-30 fs-sm-22 text-capitalize mb-1">
                          11%
                        </h2>
                        <p className="fs-18 fs-sm-16 fw-500 text-white mb-4 mb-md-0">
                          ROI
                        </p>
                      </div>
                      <div className="text-center px-2">
                        <h2 className="text-main-green fw-600 fs-30 fs-sm-22 text-capitalize mb-1">
                          <span className="px-1" />
                          ₹12,210
                        </h2>
                        <p className="fs-18 fs-sm-16 fw-500 text-white mb-4 mb-md-0">
                          <span className="pe-2">Takeaway</span>
                        </p>
                      </div>
                      <div className="text-center">
                        <h2 className="text-main-green fw-600 fs-30 fs-sm-22 text-capitalize mb-1">
                          Monthly
                        </h2>
                        <p className="fs-18 fs-sm-16 fw-500 text-white mb-4 mb-md-0">
                          <span className="pe-2">Payout </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-none d-lg-block col-lg-6 col-12">
            <section className="bargraph">
              <div id="canvas-container">
                <canvas
                  role="img"
                  height={500}
                  width={636}
                  style={{
                    display: "block",
                    boxSizing: "border-box",
                    height: 500,
                    width: 636,
                  }}
                />
              </div>
            </section>
          </div>
          <div className="d-lg-none col-lg-6 col-12">
            <section className="bargraph">
              <div id="canvas-container">
                <canvas
                  role="img"
                  height={0}
                  width={0}
                  style={{
                    display: "block",
                    boxSizing: "border-box",
                    height: 0,
                    width: 0,
                  }}
                />
              </div>
            </section>
          </div>
        </div>
        <div className="row">
          <div
            data-aos="fade-up"
            className="text-center mt-5 mt-md-4 col-md-12 aos-init aos-animate"
          >
            <div
              data-aos="fade-up"
              data-aos-offset={50}
              className="aos-init aos-animate"
            >
              <div className="d-inline-block">
                <a href="https://app.growpital.com/signup">
                  <button className="main-btn maincolor mb-2">Invest Now</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="py-5 bg-charade">
      <div className="container">
        <div className="d-flex justify-content-center align-items-center row">
          <div
            data-aos="fade-up"
            className="text-center col aos-init aos-animate"
          >
            <p className="text-uppercase fs-18 fw-500 text-main-green">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 16 16"
                className="me-1"
                height={8}
                width={8}
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx={8} cy={8} r={8} />
              </svg>
              HAVE QUESTIONS?
            </p>
            <h2 className="text-white fw-600 display-6 mb-3 mb-md-4">
              Connect with us &amp; get your answers
            </h2>
          </div>
          3
        </div>
        <div className="d-flex justify-content-center align-items-strech pt-5 row">
          <div
            data-aos="fade-up"
            className="text-center text-md-start col-lg-5 col-md-12 col-12 aos-init aos-animate"
          >
            <p className="fs-26 fs-sm-22 fw-500 text-white mb-5">
              Curiosity is one of the greatest secrets of Success.
            </p>
            <ul className="list-unstyled fs-20 fs-sm-18 fw-500 text-white text-start">
              <li className="d-flex justify-content-start mt-3">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 16 16"
                  className="text-main-gold mt-2 me-3"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z" />
                  <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                </svg>
                Personalised discussion to clear all your queries.
              </li>
              <li className="d-flex justify-content-start mt-3">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 16 16"
                  className="text-main-gold mt-2 me-3"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z" />
                  <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                </svg>
                Looking for quick answers? Chat with us now.
              </li>
              <li className="d-flex justify-content-start mt-3">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 16 16"
                  className="text-main-gold mt-2 me-3"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z" />
                  <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                </svg>
                Learn and grow with your peers.
              </li>
            </ul>
          </div>
          <div className="text-center d-flex justify-content-md-end justify-content-center align-items-center col-lg-7 col-md-12 col-12">
            <div className="mt-5 mt-lg-0 pe-md-5 me-md-5 row">
              <div
                data-aos="fade-up"
                className="d-grid gap-4 col-12 aos-init aos-animate"
              >
                <div>
                  <a href="https://growpital.zohobookings.in/#/customer/growpital">
                    <button
                      type="button"
                      className="px-3 px-md-5 py-3 w-100 btn btn-dark btn-lg"
                    >
                      <img
                        src="https://cms.growpital.com/uploads/call_center_svgrepo_com_1_1_b386393b80.svg"
                        className="img-fluid me-3 bg-yellow"
                        alt=""
                        style={{ width: "3rem" }}
                      />
                      Schedule a call
                    </button>
                  </a>
                </div>
                <div>
                  <button
                    type="button"
                    className="px-3 px-md-5 py-3 w-100 btn btn-dark btn-lg"
                  >
                    <img
                      src="https://cms.growpital.com/uploads/icons8_chat_room_96_a299aacfb3.png"
                      className="img-fluid me-3"
                      alt=""
                      style={{ width: "3rem" }}
                    />
                    Chat
                  </button>
                </div>
                <div>
                  <a href="https://t.me/growpitalofficial">
                    <button
                      type="button"
                      className="px-3 px-md-5 py-3 btn btn-dark btn-lg"
                    >
                      <img
                        src="https://cms.growpital.com/uploads/kisspng_telegram_logo_computer_icons_scalable_vector_graph_png_telegram_transparent_5ab08470747435_671490841521517680477_6b03ae449c.png"
                        className="img-fluid me-3"
                        alt=""
                        style={{ maxWidth: 50 }}
                      />
                      Community
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="py-md-5">
      <div className="container-fluid">
        <div className="d-flex justify-content-center align-items-center row">
          <div
            data-aos="fade-up"
            data-aos-offset={500}
            className="text-center col aos-init aos-animate"
          >
            <p className="text-uppercase fs-18 fw-500 text-main-green">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 16 16"
                className="me-1"
                height={8}
                width={8}
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx={8} cy={8} r={8} />
              </svg>
              MEET OUR TEAM
            </p>
            <h2 className="text-white fw-600 display-6 mb-3 mb-md-4">
              The spirit behind <span className="text-main-green">Growpital</span>
            </h2>
          </div>
        </div>
        <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events">
          <div
            className="swiper-wrapper"
            style={{
              cursor: "grab",
              transitionDuration: "0ms",
              transform: "translate3d(-8478px, 0px, 0px)",
            }}
          >
            <div
              className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
              data-swiper-slide-index={6}
              style={{ width: 937, marginRight: 5 }}
            >
              <div className="px-1 col-md-12">
                <div className="darkcard mb-4 mb-md-4 p-0 rounded text-start text-white card">
                  <div className="m-1 bg-dark-gradient rounded p-4 card-body">
                    <div className="row">
                      <div className="col-md-4 col-12">
                        <img
                          src="https://cms.growpital.com/uploads/Utkarsh_Srivastava_d09fbc3235.jpg"
                          alt=""
                          className="img-fluid w-100 mb-md-0 mb-3"
                        />
                      </div>
                      <div className="col-md-8 col-12">
                        <div className="fw-600 fs-20 mb-0 pt-2 card-title h5">
                          Utkarsh Srivastava
                        </div>
                        <div className="fw-600 fs-14 mb-3 pt-2 text-italian card-title h5">
                          <cite>Director- Business</cite>
                          <a
                            href="https://www.linkedin.com/in/utkarsh-srivastava-30210417/"
                            target="blank"
                          >
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth={0}
                              viewBox="0 0 1024 1024"
                              className="ms-2 text-indigo"
                              height={18}
                              width={18}
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
                            </svg>
                          </a>
                        </div>
                        <p className="fw-300 fs-15 lh-24 card-text">
                          Utkarsh is a first principles person. Graduated from IMT
                          Nagpur &amp; did his B Tech in computer science prior to
                          that. He is also an Alumnus of IIM Lucknow. He has over
                          a decade of diversified experience in BFSI, Fintech and
                          Edtech industries.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
              data-swiper-slide-index={7}
              style={{ width: 937, marginRight: 5 }}
            >
              <div className="px-1 col-md-12">
                <div className="darkcard mb-4 mb-md-4 p-0 rounded text-start text-white card">
                  <div className="m-1 bg-dark-gradient rounded p-4 card-body">
                    <div className="row">
                      <div className="col-md-4 col-12">
                        <img
                          src="https://cms.growpital.com/uploads/Shubhanshu_Chouhan_d023e38f17.jpg"
                          alt=""
                          className="img-fluid w-100 mb-md-0 mb-3"
                        />
                      </div>
                      <div className="col-md-8 col-12">
                        <div className="fw-600 fs-20 mb-0 pt-2 card-title h5">
                          Shubhanshu Chouhan
                        </div>
                        <div className="fw-600 fs-14 mb-3 pt-2 text-italian card-title h5">
                          <cite>Director-Technology</cite>
                          <a
                            href="https://www.linkedin.com/in/shubhanshu-chouhan/"
                            target="blank"
                          >
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth={0}
                              viewBox="0 0 1024 1024"
                              className="ms-2 text-indigo"
                              height={18}
                              width={18}
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
                            </svg>
                          </a>
                        </div>
                        <p className="fw-300 fs-15 lh-24 card-text">
                          Passionate about developing high-performing teams using
                          transformational leadership to accelerate business
                          capabilities and optimize IT value. Recognized for
                          creating impactful relationships, strategic sourcing,
                          consensus building, and leading full-cycle global
                          projects.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="swiper-slide swiper-slide-duplicate-next"
              data-swiper-slide-index={0}
              style={{ width: 937, marginRight: 5 }}
            >
              <div className="px-1 col-md-12">
                <div className="darkcard mb-4 mb-md-4 p-0 rounded text-start text-white card">
                  <div className="m-1 bg-dark-gradient rounded p-4 card-body">
                    <div className="row">
                      <div className="col-md-4 col-12">
                        <img
                          src="https://cms.growpital.com/uploads/Ankush_Ramesh_Agrawal_dcb49ae283.jpg"
                          alt=""
                          className="img-fluid w-100 mb-md-0 mb-3"
                        />
                      </div>
                      <div className="col-md-8 col-12">
                        <div className="fw-600 fs-20 mb-0 pt-2 card-title h5">
                          Ankush Agrawal
                        </div>
                        <div className="fw-600 fs-14 mb-3 pt-2 text-italian card-title h5">
                          <cite>Director- Business Intelligence</cite>
                          <a
                            href="https://www.linkedin.com/in/ankushragrawal/"
                            target="blank"
                          >
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth={0}
                              viewBox="0 0 1024 1024"
                              className="ms-2 text-indigo"
                              height={18}
                              width={18}
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
                            </svg>
                          </a>
                        </div>
                        <p className="fw-300 fs-15 lh-24 card-text">
                          Ankush has 10+ years experience spanning Social Media
                          &amp; Digital Marketing, Market Research &amp; Consumer
                          Insights, Data Analytics &amp; Business Strategy
                          responsibilities across multiple sectors. A PGDM in
                          Marketing &amp; Operations from IMT Nagpur &amp; B Tech
                          UDCT Mumbai graduate.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="swiper-slide"
              data-swiper-slide-index={1}
              style={{ width: 937, marginRight: 5 }}
            >
              <div className="px-1 col-md-12">
                <div className="darkcard mb-4 mb-md-4 p-0 rounded text-start text-white card">
                  <div className="m-1 bg-dark-gradient rounded p-4 card-body">
                    <div className="row">
                      <div className="col-md-4 col-12">
                        <img
                          src="https://cms.growpital.com/uploads/Karan_Agrawal_c112da518d.jpg"
                          alt=""
                          className="img-fluid w-100 mb-md-0 mb-3"
                        />
                      </div>
                      <div className="col-md-8 col-12">
                        <div className="fw-600 fs-20 mb-0 pt-2 card-title h5">
                          Karan Agrawal
                        </div>
                        <div className="fw-600 fs-14 mb-3 pt-2 text-italian card-title h5">
                          <cite>Director- Business Finance</cite>
                          <a
                            href="https://www.linkedin.com/in/karan-agrawal-623b5531/"
                            target="blank"
                          >
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth={0}
                              viewBox="0 0 1024 1024"
                              className="ms-2 text-indigo"
                              height={18}
                              width={18}
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
                            </svg>
                          </a>
                        </div>
                        <p className="fw-300 fs-15 lh-24 card-text">
                          Karan is a self driven person with diverse experience of
                          around 10 years in power and agriculture sector. He is
                          B. Tech (Honors) in Mechanical engineering from NIT
                          Raipur &amp; PGDM Operations and Strategy from MDI
                          Gurgaon.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="swiper-slide"
              data-swiper-slide-index={2}
              style={{ width: 937, marginRight: 5 }}
            >
              <div className="px-1 col-md-12">
                <div className="darkcard mb-4 mb-md-4 p-0 rounded text-start text-white card">
                  <div className="m-1 bg-dark-gradient rounded p-4 card-body">
                    <div className="row">
                      <div className="col-md-4 col-12">
                        <img
                          src="https://cms.growpital.com/uploads/Krishnna_Joshi_394b072481.jpg"
                          alt=""
                          className="img-fluid w-100 mb-md-0 mb-3"
                        />
                      </div>
                      <div className="col-md-8 col-12">
                        <div className="fw-600 fs-20 mb-0 pt-2 card-title h5">
                          Krishna Joshi
                        </div>
                        <div className="fw-600 fs-14 mb-3 pt-2 text-italian card-title h5">
                          <cite>Director-Farms</cite>
                          <a
                            href="https://www.linkedin.com/in/krishnna-joshi-a33638118/"
                            target="blank"
                          >
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth={0}
                              viewBox="0 0 1024 1024"
                              className="ms-2 text-indigo"
                              height={18}
                              width={18}
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
                            </svg>
                          </a>
                        </div>
                        <p className="fw-300 fs-15 lh-24 card-text">
                          Krishna comes with vast experience of 12 years across
                          industries ranging from BFSI, Marketing &amp;
                          automobile. His educational background in commerce &amp;
                          business management have led him to see through various
                          industries.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="swiper-slide"
              data-swiper-slide-index={3}
              style={{ width: 937, marginRight: 5 }}
            >
              <div className="px-1 col-md-12">
                <div className="darkcard mb-4 mb-md-4 p-0 rounded text-start text-white card">
                  <div className="m-1 bg-dark-gradient rounded p-4 card-body">
                    <div className="row">
                      <div className="col-md-4 col-12">
                        <img
                          src="https://cms.growpital.com/uploads/Rituraj_Sharma_8bea54ef16.jpg"
                          alt=""
                          className="img-fluid w-100 mb-md-0 mb-3"
                        />
                      </div>
                      <div className="col-md-8 col-12">
                        <div className="fw-600 fs-20 mb-0 pt-2 card-title h5">
                          Rituraj Sharma
                        </div>
                        <div className="fw-600 fs-14 mb-3 pt-2 text-italian card-title h5">
                          <cite>Director</cite>
                          <a
                            href="https://www.linkedin.com/in/riturajsharma123/"
                            target="blank"
                          >
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth={0}
                              viewBox="0 0 1024 1024"
                              className="ms-2 text-indigo"
                              height={18}
                              width={18}
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
                            </svg>
                          </a>
                        </div>
                        <p className="fw-300 fs-15 lh-24 card-text">
                          Rituraj is an alumnus of IMT Nagpur and an engineer. He
                          has over 10 years of experience being a serial
                          entrepreneur in industries related to Solar Energy &amp;
                          Agriculture.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="swiper-slide"
              data-swiper-slide-index={4}
              style={{ width: 937, marginRight: 5 }}
            >
              <div className="px-1 col-md-12">
                <div className="darkcard mb-4 mb-md-4 p-0 rounded text-start text-white card">
                  <div className="m-1 bg-dark-gradient rounded p-4 card-body">
                    <div className="row">
                      <div className="col-md-4 col-12">
                        <img
                          src="https://cms.growpital.com/uploads/Sudhir_Paswan_79054509bb.jpg"
                          alt=""
                          className="img-fluid w-100 mb-md-0 mb-3"
                        />
                      </div>
                      <div className="col-md-8 col-12">
                        <div className="fw-600 fs-20 mb-0 pt-2 card-title h5">
                          Sudhir Paswan
                        </div>
                        <div className="fw-600 fs-14 mb-3 pt-2 text-italian card-title h5">
                          <cite>Director- Agronomy</cite>
                          <a
                            href="https://www.linkedin.com/in/sudhir-paswan-19326969/"
                            target="blank"
                          >
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth={0}
                              viewBox="0 0 1024 1024"
                              className="ms-2 text-indigo"
                              height={18}
                              width={18}
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
                            </svg>
                          </a>
                        </div>
                        <p className="fw-300 fs-15 lh-24 card-text">
                          An Agriculture Graduate with 16+ years of agribusiness
                          experience with Corporates and social organisations like
                          Reliance, REI, PepsiCo, KGVK, Swades Foundation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="swiper-slide"
              data-swiper-slide-index={5}
              style={{ width: 937, marginRight: 5 }}
            >
              <div className="px-1 col-md-12">
                <div className="darkcard mb-4 mb-md-4 p-0 rounded text-start text-white card">
                  <div className="m-1 bg-dark-gradient rounded p-4 card-body">
                    <div className="row">
                      <div className="col-md-4 col-12">
                        <img
                          src="https://cms.growpital.com/uploads/Fahad_Shaikh_c6c7405150.jpg"
                          alt=""
                          className="img-fluid w-100 mb-md-0 mb-3"
                        />
                      </div>
                      <div className="col-md-8 col-12">
                        <div className="fw-600 fs-20 mb-0 pt-2 card-title h5">
                          Fahad Shaikh
                        </div>
                        <div className="fw-600 fs-14 mb-3 pt-2 text-italian card-title h5">
                          <cite>Director- Farm Operations</cite>
                          <a
                            href="https://www.linkedin.com/in/fahad-shaikh-611b43217/"
                            target="blank"
                          >
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth={0}
                              viewBox="0 0 1024 1024"
                              className="ms-2 text-indigo"
                              height={18}
                              width={18}
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
                            </svg>
                          </a>
                        </div>
                        <p className="fw-300 fs-15 lh-24 card-text">
                          Fahad's experience spans more than a decade in Supply
                          Chain, Agriculture, Restaurants, Entrepreneurship and
                          Telecommunication sector. He has operational skills and
                          also possesses expertise in team management, vendor
                          management, client management, and quality assurance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="swiper-slide swiper-slide-prev"
              data-swiper-slide-index={6}
              style={{ width: 937, marginRight: 5 }}
            >
              <div className="px-1 col-md-12">
                <div className="darkcard mb-4 mb-md-4 p-0 rounded text-start text-white card">
                  <div className="m-1 bg-dark-gradient rounded p-4 card-body">
                    <div className="row">
                      <div className="col-md-4 col-12">
                        <img
                          src="https://cms.growpital.com/uploads/Utkarsh_Srivastava_d09fbc3235.jpg"
                          alt=""
                          className="img-fluid w-100 mb-md-0 mb-3"
                        />
                      </div>
                      <div className="col-md-8 col-12">
                        <div className="fw-600 fs-20 mb-0 pt-2 card-title h5">
                          Utkarsh Srivastava
                        </div>
                        <div className="fw-600 fs-14 mb-3 pt-2 text-italian card-title h5">
                          <cite>Director- Business</cite>
                          <a
                            href="https://www.linkedin.com/in/utkarsh-srivastava-30210417/"
                            target="blank"
                          >
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth={0}
                              viewBox="0 0 1024 1024"
                              className="ms-2 text-indigo"
                              height={18}
                              width={18}
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
                            </svg>
                          </a>
                        </div>
                        <p className="fw-300 fs-15 lh-24 card-text">
                          Utkarsh is a first principles person. Graduated from IMT
                          Nagpur &amp; did his B Tech in computer science prior to
                          that. He is also an Alumnus of IIM Lucknow. He has over
                          a decade of diversified experience in BFSI, Fintech and
                          Edtech industries.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="swiper-slide swiper-slide-active"
              data-swiper-slide-index={7}
              style={{ width: 937, marginRight: 5 }}
            >
              <div className="px-1 col-md-12">
                <div className="darkcard mb-4 mb-md-4 p-0 rounded text-start text-white card">
                  <div className="m-1 bg-dark-gradient rounded p-4 card-body">
                    <div className="row">
                      <div className="col-md-4 col-12">
                        <img
                          src="https://cms.growpital.com/uploads/Shubhanshu_Chouhan_d023e38f17.jpg"
                          alt=""
                          className="img-fluid w-100 mb-md-0 mb-3"
                        />
                      </div>
                      <div className="col-md-8 col-12">
                        <div className="fw-600 fs-20 mb-0 pt-2 card-title h5">
                          Shubhanshu Chouhan
                        </div>
                        <div className="fw-600 fs-14 mb-3 pt-2 text-italian card-title h5">
                          <cite>Director-Technology</cite>
                          <a
                            href="https://www.linkedin.com/in/shubhanshu-chouhan/"
                            target="blank"
                          >
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth={0}
                              viewBox="0 0 1024 1024"
                              className="ms-2 text-indigo"
                              height={18}
                              width={18}
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
                            </svg>
                          </a>
                        </div>
                        <p className="fw-300 fs-15 lh-24 card-text">
                          Passionate about developing high-performing teams using
                          transformational leadership to accelerate business
                          capabilities and optimize IT value. Recognized for
                          creating impactful relationships, strategic sourcing,
                          consensus building, and leading full-cycle global
                          projects.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="swiper-slide swiper-slide-duplicate swiper-slide-next"
              data-swiper-slide-index={0}
              style={{ width: 937, marginRight: 5 }}
            >
              <div className="px-1 col-md-12">
                <div className="darkcard mb-4 mb-md-4 p-0 rounded text-start text-white card">
                  <div className="m-1 bg-dark-gradient rounded p-4 card-body">
                    <div className="row">
                      <div className="col-md-4 col-12">
                        <img
                          src="https://cms.growpital.com/uploads/Ankush_Ramesh_Agrawal_dcb49ae283.jpg"
                          alt=""
                          className="img-fluid w-100 mb-md-0 mb-3"
                        />
                      </div>
                      <div className="col-md-8 col-12">
                        <div className="fw-600 fs-20 mb-0 pt-2 card-title h5">
                          Ankush Agrawal
                        </div>
                        <div className="fw-600 fs-14 mb-3 pt-2 text-italian card-title h5">
                          <cite>Director- Business Intelligence</cite>
                          <a
                            href="https://www.linkedin.com/in/ankushragrawal/"
                            target="blank"
                          >
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth={0}
                              viewBox="0 0 1024 1024"
                              className="ms-2 text-indigo"
                              height={18}
                              width={18}
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
                            </svg>
                          </a>
                        </div>
                        <p className="fw-300 fs-15 lh-24 card-text">
                          Ankush has 10+ years experience spanning Social Media
                          &amp; Digital Marketing, Market Research &amp; Consumer
                          Insights, Data Analytics &amp; Business Strategy
                          responsibilities across multiple sectors. A PGDM in
                          Marketing &amp; Operations from IMT Nagpur &amp; B Tech
                          UDCT Mumbai graduate.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="swiper-slide swiper-slide-duplicate"
              data-swiper-slide-index={1}
              style={{ width: 937, marginRight: 5 }}
            >
              <div className="px-1 col-md-12">
                <div className="darkcard mb-4 mb-md-4 p-0 rounded text-start text-white card">
                  <div className="m-1 bg-dark-gradient rounded p-4 card-body">
                    <div className="row">
                      <div className="col-md-4 col-12">
                        <img
                          src="https://cms.growpital.com/uploads/Karan_Agrawal_c112da518d.jpg"
                          alt=""
                          className="img-fluid w-100 mb-md-0 mb-3"
                        />
                      </div>
                      <div className="col-md-8 col-12">
                        <div className="fw-600 fs-20 mb-0 pt-2 card-title h5">
                          Karan Agrawal
                        </div>
                        <div className="fw-600 fs-14 mb-3 pt-2 text-italian card-title h5">
                          <cite>Director- Business Finance</cite>
                          <a
                            href="https://www.linkedin.com/in/karan-agrawal-623b5531/"
                            target="blank"
                          >
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth={0}
                              viewBox="0 0 1024 1024"
                              className="ms-2 text-indigo"
                              height={18}
                              width={18}
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
                            </svg>
                          </a>
                        </div>
                        <p className="fw-300 fs-15 lh-24 card-text">
                          Karan is a self driven person with diverse experience of
                          around 10 years in power and agriculture sector. He is
                          B. Tech (Honors) in Mechanical engineering from NIT
                          Raipur &amp; PGDM Operations and Strategy from MDI
                          Gurgaon.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          ...
        </div>
      </div>
    </section>
    <section className="py-5">
      <div className="container-fluid">
        <div className="d-flex justify-content-center align-items-center row">
          <div
            data-aos="fade-up"
            className="text-center col aos-init aos-animate"
          >
            <p className="text-uppercase fs-18 fw-500 text-main-green">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 16 16"
                className="me-1"
                height={8}
                width={8}
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx={8} cy={8} r={8} />
              </svg>
              WHAT OUR INVESTORS SAY ABOUT US!
            </p>
            <h2 className="text-white fw-600 display-6 mb-3 mb-md-4">
              Happy to boast a<span className="text-main-green"> 4.7 rating</span>{" "}
              by customers
            </h2>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-start pt-3 row">
          <div
            data-aos="fade-up"
            className="text-center text-md-start col aos-init aos-animate"
          >
            <div>
              <div className="testislider">
                <div className="slick-slider center slick-initialized" dir="ltr">
                  <div className="slick-list" style={{ padding: "0px 100px" }}>
                    <div
                      className="slick-track"
                      style={{
                        width: 6720,
                        opacity: 1,
                        transform: "translate3d(-3360px, 0px, 0px)",
                      }}
                    >
                      <div
                        data-index={-4}
                        tabIndex={-1}
                        className="slick-slide slick-cloned"
                        aria-hidden="true"
                        style={{ width: 560 }}
                      >
                        <div>
                          <div
                            className="mx-2"
                            tabIndex={-1}
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <div className="darkcard mx-2 mb-md-4 p-0 rounded text-start text-white card">
                              <div className="m-1 bg-dark-gradient rounded px-3 py-3 card-body">
                                <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center mb-0">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 24 24"
                                    className="text-white"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g>
                                      <path fill="none" d="M0 0h24v24H0z" />
                                      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                                    </g>
                                  </svg>
                                </p>
                                <div className="px-4">
                                  <p className="mb-1 mt-2">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                  </p>
                                  <p className="fw-300 fs-13 lh-24">
                                    One of THE BEST alternative investment
                                    platforms I've come across. With the stock
                                    market being unreliable, I was looking for
                                    safer investment opportunities and BANG - Came
                                    across Growpital 🤩. The best part - the
                                    RETURNS ARE TAX FREE!.
                                  </p>
                                  <div className="d-flex justify-content-start align-items-center m-0">
                                    <img
                                      src="https://cms.growpital.com/uploads/aditya_9ae2e51a05.png"
                                      className="img-fluid m-0 rounded-circle"
                                      alt=""
                                      style={{ width: 45, height: 45 }}
                                    />
                                    <div className="ms-3 text-start">
                                      <h6 className="fw-600 fs-13 mb-0 pt-2">
                                        Aditya Patra
                                        <a
                                          href="https://www.linkedin.com/in/aditya-patra"
                                          target="blank"
                                        >
                                          <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            viewBox="0 0 1024 1024"
                                            className="ms-2 text-indigo"
                                            height={18}
                                            width={18}
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
                                          </svg>
                                        </a>
                                      </h6>
                                      <p className="fw-300 fs-12 mb-0 pt-2 text-start">
                                        Bhubaneswar
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center float-end">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 24 24"
                                    className="text-white"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g>
                                      <path fill="none" d="M0 0h24v24H0z" />
                                      <path d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C4.591 12.322 3.17 10.841 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179z" />
                                    </g>
                                  </svg>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div
                            className="mx-2"
                            tabIndex={-1}
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <div className="darkcard mx-2 mb-md-4 p-0 rounded text-start text-white card">
                              <div className="m-1 bg-dark-gradient rounded px-3 py-3 card-body">
                                <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center mb-0">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 24 24"
                                    className="text-white"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g>
                                      <path fill="none" d="M0 0h24v24H0z" />
                                      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                                    </g>
                                  </svg>
                                </p>
                                <div className="px-4">
                                  <p className="mb-1 mt-2">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                  </p>
                                  <p className="fw-300 fs-13 lh-24">
                                    Investing in farms is something I have wished
                                    for since a long time. I have started
                                    investing with Growpital since last 6 months
                                    and have been really impressed with the
                                    customer support and the high returns. Great
                                    job!
                                  </p>
                                  <div className="d-flex justify-content-start align-items-center m-0">
                                    <img
                                      src="https://cms.growpital.com/uploads/gujan_5f111ee66a.png"
                                      className="img-fluid m-0 rounded-circle"
                                      alt=""
                                      style={{ width: 45, height: 45 }}
                                    />
                                    <div className="ms-3 text-start">
                                      <h6 className="fw-600 fs-13 mb-0 pt-2">
                                        Gunjan Dhote
                                        <a href="   " target="blank">
                                          <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            viewBox="0 0 1024 1024"
                                            className="ms-2 text-indigo"
                                            height={18}
                                            width={18}
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
                                          </svg>
                                        </a>
                                      </h6>
                                      <p className="fw-300 fs-12 mb-0 pt-2 text-start">
                                        Nagpur
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center float-end">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 24 24"
                                    className="text-white"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g>
                                      <path fill="none" d="M0 0h24v24H0z" />
                                      <path d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C4.591 12.322 3.17 10.841 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179z" />
                                    </g>
                                  </svg>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={-3}
                        tabIndex={-1}
                        className="slick-slide slick-cloned"
                        aria-hidden="true"
                        style={{ width: 560 }}
                      >
                        <div>
                          <div
                            className="mx-2"
                            tabIndex={-1}
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <div className="darkcard mx-2 mb-md-4 p-0 rounded text-start text-white card">
                              <div className="m-1 bg-dark-gradient rounded px-3 py-3 card-body">
                                <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center mb-0">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 24 24"
                                    className="text-white"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g>
                                      <path fill="none" d="M0 0h24v24H0z" />
                                      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                                    </g>
                                  </svg>
                                </p>
                                <div className="px-4">
                                  <p className="mb-1 mt-2">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                  </p>
                                  <p className="fw-300 fs-13 lh-24">
                                    Growpital is a really convenient &amp; high
                                    ROI, tax-free alternative investment option to
                                    diversify your portfolio. Having interacted
                                    with the key team members I really trust their
                                    business model &amp; am sure it's going to do
                                    well.
                                  </p>
                                  <div className="d-flex justify-content-start align-items-center m-0">
                                    <img
                                      src="https://cms.growpital.com/uploads/user_svgrepo_com_407936f55e.svg"
                                      className="img-fluid m-0 rounded-circle"
                                      alt=""
                                      style={{ width: 45, height: 45 }}
                                    />
                                    <div className="ms-3 text-start">
                                      <h6 className="fw-600 fs-13 mb-0 pt-2">
                                        Mehul Anil Doshi
                                        <a
                                          href="https://www.linkedin.com/in/mehul-doshi-69871b13/"
                                          target="blank"
                                        >
                                          <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            viewBox="0 0 1024 1024"
                                            className="ms-2 text-indigo"
                                            height={18}
                                            width={18}
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
                                          </svg>
                                        </a>
                                      </h6>
                                      <p className="fw-300 fs-12 mb-0 pt-2 text-start">
                                        Bengaluru
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center float-end">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 24 24"
                                    className="text-white"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g>
                                      <path fill="none" d="M0 0h24v24H0z" />
                                      <path d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C4.591 12.322 3.17 10.841 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179z" />
                                    </g>
                                  </svg>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div
                            className="mx-2"
                            tabIndex={-1}
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <div className="darkcard mx-2 mb-md-4 p-0 rounded text-start text-white card">
                              <div className="m-1 bg-dark-gradient rounded px-3 py-3 card-body">
                                <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center mb-0">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 24 24"
                                    className="text-white"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g>
                                      <path fill="none" d="M0 0h24v24H0z" />
                                      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                                    </g>
                                  </svg>
                                </p>
                                <div className="px-4">
                                  <p className="mb-1 mt-2">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                  </p>
                                  <p className="fw-300 fs-13 lh-24">
                                    It is a unique alternative investment
                                    platform. I wish it grows big and helps
                                    investors as well as country in improving
                                    farming sector. I love that I'm investing for
                                    a better cause like farming which will help
                                    the bottom line of our country.
                                  </p>
                                  <div className="d-flex justify-content-start align-items-center m-0">
                                    <img
                                      src="https://cms.growpital.com/uploads/prashenjeet_fc09ad8e93.png"
                                      className="img-fluid m-0 rounded-circle"
                                      alt=""
                                      style={{ width: 45, height: 45 }}
                                    />
                                    <div className="ms-3 text-start">
                                      <h6 className="fw-600 fs-13 mb-0 pt-2">
                                        Prashenjeet Biswas
                                        <a
                                          href="https://www.linkedin.com/in/impjb"
                                          target="blank"
                                        >
                                          <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            viewBox="0 0 1024 1024"
                                            className="ms-2 text-indigo"
                                            height={18}
                                            width={18}
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
                                          </svg>
                                        </a>
                                      </h6>
                                      <p className="fw-300 fs-12 mb-0 pt-2 text-start">
                                        Odisha
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center float-end">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 24 24"
                                    className="text-white"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g>
                                      <path fill="none" d="M0 0h24v24H0z" />
                                      <path d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C4.591 12.322 3.17 10.841 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179z" />
                                    </g>
                                  </svg>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={-2}
                        tabIndex={-1}
                        className="slick-slide slick-cloned"
                        aria-hidden="true"
                        style={{ width: 560 }}
                      >
                        <div>
                          <div
                            className="mx-2"
                            tabIndex={-1}
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <div className="darkcard mx-2 mb-md-4 p-0 rounded text-start text-white card">
                              <div className="m-1 bg-dark-gradient rounded px-3 py-3 card-body">
                                <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center mb-0">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 24 24"
                                    className="text-white"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g>
                                      <path fill="none" d="M0 0h24v24H0z" />
                                      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                                    </g>
                                  </svg>
                                </p>
                                <div className="px-4">
                                  <p className="mb-1 mt-2">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                  </p>
                                  <p className="fw-300 fs-13 lh-24">
                                    A great platform and opportunity presented by
                                    Growpital for safe investments with high
                                    returns. The income being tax-free is another
                                    cherry on top. Have invested in 1 plan till
                                    now, planning to invest more.
                                  </p>
                                  <div className="d-flex justify-content-start align-items-center m-0">
                                    <img
                                      src="https://cms.growpital.com/uploads/saurabh_e5036761ed.png"
                                      className="img-fluid m-0 rounded-circle"
                                      alt=""
                                      style={{ width: 45, height: 45 }}
                                    />
                                    <div className="ms-3 text-start">
                                      <h6 className="fw-600 fs-13 mb-0 pt-2">
                                        Saurabh Sharma
                                        <a href="   " target="blank">
                                          <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            viewBox="0 0 1024 1024"
                                            className="ms-2 text-indigo"
                                            height={18}
                                            width={18}
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
                                          </svg>
                                        </a>
                                      </h6>
                                      <p className="fw-300 fs-12 mb-0 pt-2 text-start">
                                        Nagpur
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center float-end">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 24 24"
                                    className="text-white"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g>
                                      <path fill="none" d="M0 0h24v24H0z" />
                                      <path d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C4.591 12.322 3.17 10.841 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179z" />
                                    </g>
                                  </svg>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div
                            className="mx-2"
                            tabIndex={-1}
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <div className="darkcard mx-2 mb-md-4 p-0 rounded text-start text-white card">
                              <div className="m-1 bg-dark-gradient rounded px-3 py-3 card-body">
                                <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center mb-0">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 24 24"
                                    className="text-white"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g>
                                      <path fill="none" d="M0 0h24v24H0z" />
                                      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                                    </g>
                                  </svg>
                                </p>
                                <div className="px-4">
                                  <p className="mb-1 mt-2">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                  </p>
                                  <p className="fw-300 fs-13 lh-24">
                                    Very good unique Platform for totally
                                    different type of tax free Investment.
                                  </p>
                                  <div className="d-flex justify-content-start align-items-center m-0">
                                    <img
                                      src="https://cms.growpital.com/uploads/shuman_d6350a418f.png"
                                      className="img-fluid m-0 rounded-circle"
                                      alt=""
                                      style={{ width: 45, height: 45 }}
                                    />
                                    <div className="ms-3 text-start">
                                      <h6 className="fw-600 fs-13 mb-0 pt-2">
                                        Suman Sarkar
                                        <a
                                          href="https://www.linkedin.com/in/suman-sarkar-588b885a"
                                          target="blank"
                                        >
                                          <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            viewBox="0 0 1024 1024"
                                            className="ms-2 text-indigo"
                                            height={18}
                                            width={18}
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
                                          </svg>
                                        </a>
                                      </h6>
                                      <p className="fw-300 fs-12 mb-0 pt-2 text-start">
                                        Kolkata
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center float-end">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 24 24"
                                    className="text-white"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g>
                                      <path fill="none" d="M0 0h24v24H0z" />
                                      <path d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C4.591 12.322 3.17 10.841 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179z" />
                                    </g>
                                  </svg>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={-1}
                        tabIndex={-1}
                        className="slick-slide slick-center slick-cloned"
                        aria-hidden="true"
                        style={{ width: 560 }}
                      >
                        <div>
                          <div
                            className="mx-2"
                            tabIndex={-1}
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <div className="darkcard mx-2 mb-md-4 p-0 rounded text-start text-white card">
                              <div className="m-1 bg-dark-gradient rounded px-3 py-3 card-body">
                                <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center mb-0">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 24 24"
                                    className="text-white"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g>
                                      <path fill="none" d="M0 0h24v24H0z" />
                                      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                                    </g>
                                  </svg>
                                </p>
                                <div className="px-4">
                                  <p className="mb-1 mt-2">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                  </p>
                                  <p className="fw-300 fs-13 lh-24">
                                    Unique concept and kudos to Rituraj for being
                                    available to clear any queries. May you grow
                                    further and create wealth for investors as
                                    well as help build sustainable environment.
                                  </p>
                                  <div className="d-flex justify-content-start align-items-center m-0">
                                    <img
                                      src="https://cms.growpital.com/uploads/shanshank_40d563febf.png"
                                      className="img-fluid m-0 rounded-circle"
                                      alt=""
                                      style={{ width: 45, height: 45 }}
                                    />
                                    <div className="ms-3 text-start">
                                      <h6 className="fw-600 fs-13 mb-0 pt-2">
                                        Shashank Tiwari
                                        <a
                                          href="https://www.linkedin.com/mwlite/in/shashank-tiwari-frm-795148b7"
                                          target="blank"
                                        >
                                          <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            viewBox="0 0 1024 1024"
                                            className="ms-2 text-indigo"
                                            height={18}
                                            width={18}
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
                                          </svg>
                                        </a>
                                      </h6>
                                      <p className="fw-300 fs-12 mb-0 pt-2 text-start">
                                        Pune
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center float-end">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 24 24"
                                    className="text-white"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g>
                                      <path fill="none" d="M0 0h24v24H0z" />
                                      <path d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C4.591 12.322 3.17 10.841 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179z" />
                                    </g>
                                  </svg>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div
                            className="mx-2"
                            tabIndex={-1}
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <div className="darkcard mx-2 mb-md-4 p-0 rounded text-start text-white card">
                              <div className="m-1 bg-dark-gradient rounded px-3 py-3 card-body">
                                <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center mb-0">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 24 24"
                                    className="text-white"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g>
                                      <path fill="none" d="M0 0h24v24H0z" />
                                      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                                    </g>
                                  </svg>
                                </p>
                                <div className="px-4">
                                  <p className="mb-1 mt-2">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                  </p>
                                  <p className="fw-300 fs-13 lh-24">
                                    Growpital allows to invest in a market which
                                    can barely has bad times. Agriproduce will
                                    always find buyers, use of technology to
                                    maximise the output is so obvious but rare.
                                  </p>
                                  <div className="d-flex justify-content-start align-items-center m-0">
                                    <img
                                      src="https://cms.growpital.com/uploads/vipul_14ead0051a.png"
                                      className="img-fluid m-0 rounded-circle"
                                      alt=""
                                      style={{ width: 45, height: 45 }}
                                    />
                                    <div className="ms-3 text-start">
                                      <h6 className="fw-600 fs-13 mb-0 pt-2">
                                        Vipul Rawal
                                        <a
                                          href="https://www.linkedin.com/in/vipulraw/"
                                          target="blank"
                                        >
                                          <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            viewBox="0 0 1024 1024"
                                            className="ms-2 text-indigo"
                                            height={18}
                                            width={18}
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
                                          </svg>
                                        </a>
                                      </h6>
                                      <p className="fw-300 fs-12 mb-0 pt-2 text-start">
                                        Delhi
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center float-end">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 24 24"
                                    className="text-white"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g>
                                      <path fill="none" d="M0 0h24v24H0z" />
                                      <path d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C4.591 12.322 3.17 10.841 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179z" />
                                    </g>
                                  </svg>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={0}
                        className="slick-slide"
                        tabIndex={-1}
                        aria-hidden="true"
                        style={{ outline: "none", width: 560 }}
                      >
                        <div>
                          <div
                            className="mx-2"
                            tabIndex={-1}
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <div className="darkcard mx-2 mb-md-4 p-0 rounded text-start text-white card">
                              <div className="m-1 bg-dark-gradient rounded px-3 py-3 card-body">
                                <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center mb-0">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 24 24"
                                    className="text-white"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g>
                                      <path fill="none" d="M0 0h24v24H0z" />
                                      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                                    </g>
                                  </svg>
                                </p>
                                <div className="px-4">
                                  <p className="mb-1 mt-2">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                  </p>
                                  <p className="fw-300 fs-13 lh-24">
                                    One of THE BEST alternative investment
                                    platforms I've come across. With the stock
                                    market being unreliable, I was looking for
                                    safer investment opportunities and BANG - Came
                                    across Growpital 🤩. The best part - the
                                    RETURNS ARE TAX FREE!.
                                  </p>
                                  <div className="d-flex justify-content-start align-items-center m-0">
                                    <img
                                      src="https://cms.growpital.com/uploads/aditya_9ae2e51a05.png"
                                      className="img-fluid m-0 rounded-circle"
                                      alt=""
                                      style={{ width: 45, height: 45 }}
                                    />
                                    <div className="ms-3 text-start">
                                      <h6 className="fw-600 fs-13 mb-0 pt-2">
                                        Aditya Patra
                                        <a
                                          href="https://www.linkedin.com/in/aditya-patra"
                                          target="blank"
                                        >
                                          <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            viewBox="0 0 1024 1024"
                                            className="ms-2 text-indigo"
                                            height={18}
                                            width={18}
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
                                          </svg>
                                        </a>
                                      </h6>
                                      <p className="fw-300 fs-12 mb-0 pt-2 text-start">
                                        Bhubaneswar
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center float-end">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 24 24"
                                    className="text-white"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g>
                                      <path fill="none" d="M0 0h24v24H0z" />
                                      <path d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C4.591 12.322 3.17 10.841 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179z" />
                                    </g>
                                  </svg>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div
                            className="mx-2"
                            tabIndex={-1}
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <div className="darkcard mx-2 mb-md-4 p-0 rounded text-start text-white card">
                              <div className="m-1 bg-dark-gradient rounded px-3 py-3 card-body">
                                <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center mb-0">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 24 24"
                                    className="text-white"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g>
                                      <path fill="none" d="M0 0h24v24H0z" />
                                      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                                    </g>
                                  </svg>
                                </p>
                                <div className="px-4">
                                  <p className="mb-1 mt-2">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                  </p>
                                  <p className="fw-300 fs-13 lh-24">
                                    Investing in farms is something I have wished
                                    for since a long time. I have started
                                    investing with Growpital since last 6 months
                                    and have been really impressed with the
                                    customer support and the high returns. Great
                                    job!
                                  </p>
                                  <div className="d-flex justify-content-start align-items-center m-0">
                                    <img
                                      src="https://cms.growpital.com/uploads/gujan_5f111ee66a.png"
                                      className="img-fluid m-0 rounded-circle"
                                      alt=""
                                      style={{ width: 45, height: 45 }}
                                    />
                                    <div className="ms-3 text-start">
                                      <h6 className="fw-600 fs-13 mb-0 pt-2">
                                        Gunjan Dhote
                                        <a href="   " target="blank">
                                          <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            viewBox="0 0 1024 1024"
                                            className="ms-2 text-indigo"
                                            height={18}
                                            width={18}
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
                                          </svg>
                                        </a>
                                      </h6>
                                      <p className="fw-300 fs-12 mb-0 pt-2 text-start">
                                        Nagpur
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center float-end">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 24 24"
                                    className="text-white"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g>
                                      <path fill="none" d="M0 0h24v24H0z" />
                                      <path d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C4.591 12.322 3.17 10.841 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179z" />
                                    </g>
                                  </svg>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={1}
                        className="slick-slide"
                        tabIndex={-1}
                        aria-hidden="true"
                        style={{ outline: "none", width: 560 }}
                      >
                        <div>
                          <div
                            className="mx-2"
                            tabIndex={-1}
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <div className="darkcard mx-2 mb-md-4 p-0 rounded text-start text-white card">
                              <div className="m-1 bg-dark-gradient rounded px-3 py-3 card-body">
                                <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center mb-0">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 24 24"
                                    className="text-white"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g>
                                      <path fill="none" d="M0 0h24v24H0z" />
                                      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                                    </g>
                                  </svg>
                                </p>
                                <div className="px-4">
                                  <p className="mb-1 mt-2">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                  </p>
                                  <p className="fw-300 fs-13 lh-24">
                                    Growpital is a really convenient &amp; high
                                    ROI, tax-free alternative investment option to
                                    diversify your portfolio. Having interacted
                                    with the key team members I really trust their
                                    business model &amp; am sure it's going to do
                                    well.
                                  </p>
                                  <div className="d-flex justify-content-start align-items-center m-0">
                                    <img
                                      src="https://cms.growpital.com/uploads/user_svgrepo_com_407936f55e.svg"
                                      className="img-fluid m-0 rounded-circle"
                                      alt=""
                                      style={{ width: 45, height: 45 }}
                                    />
                                    <div className="ms-3 text-start">
                                      <h6 className="fw-600 fs-13 mb-0 pt-2">
                                        Mehul Anil Doshi
                                        <a
                                          href="https://www.linkedin.com/in/mehul-doshi-69871b13/"
                                          target="blank"
                                        >
                                          <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            viewBox="0 0 1024 1024"
                                            className="ms-2 text-indigo"
                                            height={18}
                                            width={18}
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
                                          </svg>
                                        </a>
                                      </h6>
                                      <p className="fw-300 fs-12 mb-0 pt-2 text-start">
                                        Bengaluru
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center float-end">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 24 24"
                                    className="text-white"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g>
                                      <path fill="none" d="M0 0h24v24H0z" />
                                      <path d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C4.591 12.322 3.17 10.841 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179z" />
                                    </g>
                                  </svg>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div
                            className="mx-2"
                            tabIndex={-1}
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <div className="darkcard mx-2 mb-md-4 p-0 rounded text-start text-white card">
                              <div className="m-1 bg-dark-gradient rounded px-3 py-3 card-body">
                                <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center mb-0">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 24 24"
                                    className="text-white"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g>
                                      <path fill="none" d="M0 0h24v24H0z" />
                                      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                                    </g>
                                  </svg>
                                </p>
                                <div className="px-4">
                                  <p className="mb-1 mt-2">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                  </p>
                                  <p className="fw-300 fs-13 lh-24">
                                    It is a unique alternative investment
                                    platform. I wish it grows big and helps
                                    investors as well as country in improving
                                    farming sector. I love that I'm investing for
                                    a better cause like farming which will help
                                    the bottom line of our country.
                                  </p>
                                  <div className="d-flex justify-content-start align-items-center m-0">
                                    <img
                                      src="https://cms.growpital.com/uploads/prashenjeet_fc09ad8e93.png"
                                      className="img-fluid m-0 rounded-circle"
                                      alt=""
                                      style={{ width: 45, height: 45 }}
                                    />
                                    <div className="ms-3 text-start">
                                      <h6 className="fw-600 fs-13 mb-0 pt-2">
                                        Prashenjeet Biswas
                                        <a
                                          href="https://www.linkedin.com/in/impjb"
                                          target="blank"
                                        >
                                          <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            viewBox="0 0 1024 1024"
                                            className="ms-2 text-indigo"
                                            height={18}
                                            width={18}
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
                                          </svg>
                                        </a>
                                      </h6>
                                      <p className="fw-300 fs-12 mb-0 pt-2 text-start">
                                        Odisha
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center float-end">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 24 24"
                                    className="text-white"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g>
                                      <path fill="none" d="M0 0h24v24H0z" />
                                      <path d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C4.591 12.322 3.17 10.841 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179z" />
                                    </g>
                                  </svg>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={2}
                        className="slick-slide slick-active"
                        tabIndex={-1}
                        aria-hidden="false"
                        style={{ outline: "none", width: 560 }}
                      >
                        <div>
                          <div
                            className="mx-2"
                            tabIndex={-1}
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <div className="darkcard mx-2 mb-md-4 p-0 rounded text-start text-white card">
                              <div className="m-1 bg-dark-gradient rounded px-3 py-3 card-body">
                                <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center mb-0">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 24 24"
                                    className="text-white"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g>
                                      <path fill="none" d="M0 0h24v24H0z" />
                                      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                                    </g>
                                  </svg>
                                </p>
                                <div className="px-4">
                                  <p className="mb-1 mt-2">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                  </p>
                                  <p className="fw-300 fs-13 lh-24">
                                    A great platform and opportunity presented by
                                    Growpital for safe investments with high
                                    returns. The income being tax-free is another
                                    cherry on top. Have invested in 1 plan till
                                    now, planning to invest more.
                                  </p>
                                  <div className="d-flex justify-content-start align-items-center m-0">
                                    <img
                                      src="https://cms.growpital.com/uploads/saurabh_e5036761ed.png"
                                      className="img-fluid m-0 rounded-circle"
                                      alt=""
                                      style={{ width: 45, height: 45 }}
                                    />
                                    <div className="ms-3 text-start">
                                      <h6 className="fw-600 fs-13 mb-0 pt-2">
                                        Saurabh Sharma
                                        <a href="   " target="blank">
                                          <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            viewBox="0 0 1024 1024"
                                            className="ms-2 text-indigo"
                                            height={18}
                                            width={18}
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
                                          </svg>
                                        </a>
                                      </h6>
                                      <p className="fw-300 fs-12 mb-0 pt-2 text-start">
                                        Nagpur
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center float-end">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 24 24"
                                    className="text-white"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g>
                                      <path fill="none" d="M0 0h24v24H0z" />
                                      <path d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C4.591 12.322 3.17 10.841 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179z" />
                                    </g>
                                  </svg>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div
                            className="mx-2"
                            tabIndex={-1}
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <div className="darkcard mx-2 mb-md-4 p-0 rounded text-start text-white card">
                              <div className="m-1 bg-dark-gradient rounded px-3 py-3 card-body">
                                <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center mb-0">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 24 24"
                                    className="text-white"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g>
                                      <path fill="none" d="M0 0h24v24H0z" />
                                      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                                    </g>
                                  </svg>
                                </p>
                                <div className="px-4">
                                  <p className="mb-1 mt-2">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                  </p>
                                  <p className="fw-300 fs-13 lh-24">
                                    Very good unique Platform for totally
                                    different type of tax free Investment.
                                  </p>
                                  <div className="d-flex justify-content-start align-items-center m-0">
                                    <img
                                      src="https://cms.growpital.com/uploads/shuman_d6350a418f.png"
                                      className="img-fluid m-0 rounded-circle"
                                      alt=""
                                      style={{ width: 45, height: 45 }}
                                    />
                                    <div className="ms-3 text-start">
                                      <h6 className="fw-600 fs-13 mb-0 pt-2">
                                        Suman Sarkar
                                        <a
                                          href="https://www.linkedin.com/in/suman-sarkar-588b885a"
                                          target="blank"
                                        >
                                          <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            viewBox="0 0 1024 1024"
                                            className="ms-2 text-indigo"
                                            height={18}
                                            width={18}
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
                                          </svg>
                                        </a>
                                      </h6>
                                      <p className="fw-300 fs-12 mb-0 pt-2 text-start">
                                        Kolkata
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center float-end">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 24 24"
                                    className="text-white"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g>
                                      <path fill="none" d="M0 0h24v24H0z" />
                                      <path d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C4.591 12.322 3.17 10.841 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179z" />
                                    </g>
                                  </svg>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={3}
                        className="slick-slide slick-active slick-center slick-current"
                        tabIndex={-1}
                        aria-hidden="false"
                        style={{ outline: "none", width: 560 }}
                      >
                        <div>
                          <div
                            className="mx-2"
                            tabIndex={-1}
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <div className="darkcard mx-2 mb-md-4 p-0 rounded text-start text-white card">
                              <div className="m-1 bg-dark-gradient rounded px-3 py-3 card-body">
                                <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center mb-0">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 24 24"
                                    className="text-white"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g>
                                      <path fill="none" d="M0 0h24v24H0z" />
                                      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                                    </g>
                                  </svg>
                                </p>
                                <div className="px-4">
                                  <p className="mb-1 mt-2">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                  </p>
                                  <p className="fw-300 fs-13 lh-24">
                                    Unique concept and kudos to Rituraj for being
                                    available to clear any queries. May you grow
                                    further and create wealth for investors as
                                    well as help build sustainable environment.
                                  </p>
                                  <div className="d-flex justify-content-start align-items-center m-0">
                                    <img
                                      src="https://cms.growpital.com/uploads/shanshank_40d563febf.png"
                                      className="img-fluid m-0 rounded-circle"
                                      alt=""
                                      style={{ width: 45, height: 45 }}
                                    />
                                    <div className="ms-3 text-start">
                                      <h6 className="fw-600 fs-13 mb-0 pt-2">
                                        Shashank Tiwari
                                        <a
                                          href="https://www.linkedin.com/mwlite/in/shashank-tiwari-frm-795148b7"
                                          target="blank"
                                        >
                                          <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            viewBox="0 0 1024 1024"
                                            className="ms-2 text-indigo"
                                            height={18}
                                            width={18}
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
                                          </svg>
                                        </a>
                                      </h6>
                                      <p className="fw-300 fs-12 mb-0 pt-2 text-start">
                                        Pune
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center float-end">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 24 24"
                                    className="text-white"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g>
                                      <path fill="none" d="M0 0h24v24H0z" />
                                      <path d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C4.591 12.322 3.17 10.841 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179z" />
                                    </g>
                                  </svg>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div
                            className="mx-2"
                            tabIndex={-1}
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <div className="darkcard mx-2 mb-md-4 p-0 rounded text-start text-white card">
                              <div className="m-1 bg-dark-gradient rounded px-3 py-3 card-body">
                                <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center mb-0">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 24 24"
                                    className="text-white"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g>
                                      <path fill="none" d="M0 0h24v24H0z" />
                                      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                                    </g>
                                  </svg>
                                </p>
                                <div className="px-4">
                                  <p className="mb-1 mt-2">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                  </p>
                                  <p className="fw-300 fs-13 lh-24">
                                    Growpital allows to invest in a market which
                                    can barely has bad times. Agriproduce will
                                    always find buyers, use of technology to
                                    maximise the output is so obvious but rare.
                                  </p>
                                  <div className="d-flex justify-content-start align-items-center m-0">
                                    <img
                                      src="https://cms.growpital.com/uploads/vipul_14ead0051a.png"
                                      className="img-fluid m-0 rounded-circle"
                                      alt=""
                                      style={{ width: 45, height: 45 }}
                                    />
                                    <div className="ms-3 text-start">
                                      <h6 className="fw-600 fs-13 mb-0 pt-2">
                                        Vipul Rawal
                                        <a
                                          href="https://www.linkedin.com/in/vipulraw/"
                                          target="blank"
                                        >
                                          <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            viewBox="0 0 1024 1024"
                                            className="ms-2 text-indigo"
                                            height={18}
                                            width={18}
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
                                          </svg>
                                        </a>
                                      </h6>
                                      <p className="fw-300 fs-12 mb-0 pt-2 text-start">
                                        Delhi
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center float-end">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 24 24"
                                    className="text-white"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g>
                                      <path fill="none" d="M0 0h24v24H0z" />
                                      <path d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C4.591 12.322 3.17 10.841 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179z" />
                                    </g>
                                  </svg>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={4}
                        tabIndex={-1}
                        className="slick-slide slick-active slick-cloned"
                        aria-hidden="false"
                        style={{ width: 560 }}
                      >
                        <div>
                          <div
                            className="mx-2"
                            tabIndex={-1}
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <div className="darkcard mx-2 mb-md-4 p-0 rounded text-start text-white card">
                              <div className="m-1 bg-dark-gradient rounded px-3 py-3 card-body">
                                <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center mb-0">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 24 24"
                                    className="text-white"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g>
                                      <path fill="none" d="M0 0h24v24H0z" />
                                      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                                    </g>
                                  </svg>
                                </p>
                                <div className="px-4">
                                  <p className="mb-1 mt-2">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                  </p>
                                  <p className="fw-300 fs-13 lh-24">
                                    One of THE BEST alternative investment
                                    platforms I've come across. With the stock
                                    market being unreliable, I was looking for
                                    safer investment opportunities and BANG - Came
                                    across Growpital 🤩. The best part - the
                                    RETURNS ARE TAX FREE!.
                                  </p>
                                  <div className="d-flex justify-content-start align-items-center m-0">
                                    <img
                                      src="https://cms.growpital.com/uploads/aditya_9ae2e51a05.png"
                                      className="img-fluid m-0 rounded-circle"
                                      alt=""
                                      style={{ width: 45, height: 45 }}
                                    />
                                    <div className="ms-3 text-start">
                                      <h6 className="fw-600 fs-13 mb-0 pt-2">
                                        Aditya Patra
                                        <a
                                          href="https://www.linkedin.com/in/aditya-patra"
                                          target="blank"
                                        >
                                          <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            viewBox="0 0 1024 1024"
                                            className="ms-2 text-indigo"
                                            height={18}
                                            width={18}
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
                                          </svg>
                                        </a>
                                      </h6>
                                      <p className="fw-300 fs-12 mb-0 pt-2 text-start">
                                        Bhubaneswar
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center float-end">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 24 24"
                                    className="text-white"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g>
                                      <path fill="none" d="M0 0h24v24H0z" />
                                      <path d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C4.591 12.322 3.17 10.841 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179z" />
                                    </g>
                                  </svg>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div
                            className="mx-2"
                            tabIndex={-1}
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <div className="darkcard mx-2 mb-md-4 p-0 rounded text-start text-white card">
                              <div className="m-1 bg-dark-gradient rounded px-3 py-3 card-body">
                                <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center mb-0">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 24 24"
                                    className="text-white"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g>
                                      <path fill="none" d="M0 0h24v24H0z" />
                                      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                                    </g>
                                  </svg>
                                </p>
                                <div className="px-4">
                                  <p className="mb-1 mt-2">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                  </p>
                                  <p className="fw-300 fs-13 lh-24">
                                    Investing in farms is something I have wished
                                    for since a long time. I have started
                                    investing with Growpital since last 6 months
                                    and have been really impressed with the
                                    customer support and the high returns. Great
                                    job!
                                  </p>
                                  <div className="d-flex justify-content-start align-items-center m-0">
                                    <img
                                      src="https://cms.growpital.com/uploads/gujan_5f111ee66a.png"
                                      className="img-fluid m-0 rounded-circle"
                                      alt=""
                                      style={{ width: 45, height: 45 }}
                                    />
                                    <div className="ms-3 text-start">
                                      <h6 className="fw-600 fs-13 mb-0 pt-2">
                                        Gunjan Dhote
                                        <a href="   " target="blank">
                                          <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            viewBox="0 0 1024 1024"
                                            className="ms-2 text-indigo"
                                            height={18}
                                            width={18}
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
                                          </svg>
                                        </a>
                                      </h6>
                                      <p className="fw-300 fs-12 mb-0 pt-2 text-start">
                                        Nagpur
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center float-end">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 24 24"
                                    className="text-white"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g>
                                      <path fill="none" d="M0 0h24v24H0z" />
                                      <path d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C4.591 12.322 3.17 10.841 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179z" />
                                    </g>
                                  </svg>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={5}
                        tabIndex={-1}
                        className="slick-slide slick-cloned"
                        aria-hidden="true"
                        style={{ width: 560 }}
                      >
                        <div>
                          <div
                            className="mx-2"
                            tabIndex={-1}
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <div className="darkcard mx-2 mb-md-4 p-0 rounded text-start text-white card">
                              <div className="m-1 bg-dark-gradient rounded px-3 py-3 card-body">
                                <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center mb-0">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 24 24"
                                    className="text-white"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g>
                                      <path fill="none" d="M0 0h24v24H0z" />
                                      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                                    </g>
                                  </svg>
                                </p>
                                <div className="px-4">
                                  <p className="mb-1 mt-2">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                  </p>
                                  <p className="fw-300 fs-13 lh-24">
                                    Growpital is a really convenient &amp; high
                                    ROI, tax-free alternative investment option to
                                    diversify your portfolio. Having interacted
                                    with the key team members I really trust their
                                    business model &amp; am sure it's going to do
                                    well.
                                  </p>
                                  <div className="d-flex justify-content-start align-items-center m-0">
                                    <img
                                      src="https://cms.growpital.com/uploads/user_svgrepo_com_407936f55e.svg"
                                      className="img-fluid m-0 rounded-circle"
                                      alt=""
                                      style={{ width: 45, height: 45 }}
                                    />
                                    <div className="ms-3 text-start">
                                      <h6 className="fw-600 fs-13 mb-0 pt-2">
                                        Mehul Anil Doshi
                                        <a
                                          href="https://www.linkedin.com/in/mehul-doshi-69871b13/"
                                          target="blank"
                                        >
                                          <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            viewBox="0 0 1024 1024"
                                            className="ms-2 text-indigo"
                                            height={18}
                                            width={18}
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
                                          </svg>
                                        </a>
                                      </h6>
                                      <p className="fw-300 fs-12 mb-0 pt-2 text-start">
                                        Bengaluru
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center float-end">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 24 24"
                                    className="text-white"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g>
                                      <path fill="none" d="M0 0h24v24H0z" />
                                      <path d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C4.591 12.322 3.17 10.841 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179z" />
                                    </g>
                                  </svg>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div
                            className="mx-2"
                            tabIndex={-1}
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <div className="darkcard mx-2 mb-md-4 p-0 rounded text-start text-white card">
                              <div className="m-1 bg-dark-gradient rounded px-3 py-3 card-body">
                                <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center mb-0">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 24 24"
                                    className="text-white"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g>
                                      <path fill="none" d="M0 0h24v24H0z" />
                                      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                                    </g>
                                  </svg>
                                </p>
                                <div className="px-4">
                                  <p className="mb-1 mt-2">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                  </p>
                                  <p className="fw-300 fs-13 lh-24">
                                    It is a unique alternative investment
                                    platform. I wish it grows big and helps
                                    investors as well as country in improving
                                    farming sector. I love that I'm investing for
                                    a better cause like farming which will help
                                    the bottom line of our country.
                                  </p>
                                  <div className="d-flex justify-content-start align-items-center m-0">
                                    <img
                                      src="https://cms.growpital.com/uploads/prashenjeet_fc09ad8e93.png"
                                      className="img-fluid m-0 rounded-circle"
                                      alt=""
                                      style={{ width: 45, height: 45 }}
                                    />
                                    <div className="ms-3 text-start">
                                      <h6 className="fw-600 fs-13 mb-0 pt-2">
                                        Prashenjeet Biswas
                                        <a
                                          href="https://www.linkedin.com/in/impjb"
                                          target="blank"
                                        >
                                          <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            viewBox="0 0 1024 1024"
                                            className="ms-2 text-indigo"
                                            height={18}
                                            width={18}
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
                                          </svg>
                                        </a>
                                      </h6>
                                      <p className="fw-300 fs-12 mb-0 pt-2 text-start">
                                        Odisha
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center float-end">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 24 24"
                                    className="text-white"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g>
                                      <path fill="none" d="M0 0h24v24H0z" />
                                      <path d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C4.591 12.322 3.17 10.841 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179z" />
                                    </g>
                                  </svg>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={6}
                        tabIndex={-1}
                        className="slick-slide slick-cloned"
                        aria-hidden="true"
                        style={{ width: 560 }}
                      >
                        <div>
                          <div
                            className="mx-2"
                            tabIndex={-1}
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <div className="darkcard mx-2 mb-md-4 p-0 rounded text-start text-white card">
                              <div className="m-1 bg-dark-gradient rounded px-3 py-3 card-body">
                                <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center mb-0">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 24 24"
                                    className="text-white"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g>
                                      <path fill="none" d="M0 0h24v24H0z" />
                                      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                                    </g>
                                  </svg>
                                </p>
                                <div className="px-4">
                                  <p className="mb-1 mt-2">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                  </p>
                                  <p className="fw-300 fs-13 lh-24">
                                    A great platform and opportunity presented by
                                    Growpital for safe investments with high
                                    returns. The income being tax-free is another
                                    cherry on top. Have invested in 1 plan till
                                    now, planning to invest more.
                                  </p>
                                  <div className="d-flex justify-content-start align-items-center m-0">
                                    <img
                                      src="https://cms.growpital.com/uploads/saurabh_e5036761ed.png"
                                      className="img-fluid m-0 rounded-circle"
                                      alt=""
                                      style={{ width: 45, height: 45 }}
                                    />
                                    <div className="ms-3 text-start">
                                      <h6 className="fw-600 fs-13 mb-0 pt-2">
                                        Saurabh Sharma
                                        <a href="   " target="blank">
                                          <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            viewBox="0 0 1024 1024"
                                            className="ms-2 text-indigo"
                                            height={18}
                                            width={18}
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
                                          </svg>
                                        </a>
                                      </h6>
                                      <p className="fw-300 fs-12 mb-0 pt-2 text-start">
                                        Nagpur
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center float-end">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 24 24"
                                    className="text-white"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g>
                                      <path fill="none" d="M0 0h24v24H0z" />
                                      <path d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C4.591 12.322 3.17 10.841 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179z" />
                                    </g>
                                  </svg>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div
                            className="mx-2"
                            tabIndex={-1}
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <div className="darkcard mx-2 mb-md-4 p-0 rounded text-start text-white card">
                              <div className="m-1 bg-dark-gradient rounded px-3 py-3 card-body">
                                <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center mb-0">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 24 24"
                                    className="text-white"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g>
                                      <path fill="none" d="M0 0h24v24H0z" />
                                      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                                    </g>
                                  </svg>
                                </p>
                                <div className="px-4">
                                  <p className="mb-1 mt-2">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                  </p>
                                  <p className="fw-300 fs-13 lh-24">
                                    Very good unique Platform for totally
                                    different type of tax free Investment.
                                  </p>
                                  <div className="d-flex justify-content-start align-items-center m-0">
                                    <img
                                      src="https://cms.growpital.com/uploads/shuman_d6350a418f.png"
                                      className="img-fluid m-0 rounded-circle"
                                      alt=""
                                      style={{ width: 45, height: 45 }}
                                    />
                                    <div className="ms-3 text-start">
                                      <h6 className="fw-600 fs-13 mb-0 pt-2">
                                        Suman Sarkar
                                        <a
                                          href="https://www.linkedin.com/in/suman-sarkar-588b885a"
                                          target="blank"
                                        >
                                          <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            viewBox="0 0 1024 1024"
                                            className="ms-2 text-indigo"
                                            height={18}
                                            width={18}
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
                                          </svg>
                                        </a>
                                      </h6>
                                      <p className="fw-300 fs-12 mb-0 pt-2 text-start">
                                        Kolkata
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center float-end">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 24 24"
                                    className="text-white"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g>
                                      <path fill="none" d="M0 0h24v24H0z" />
                                      <path d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C4.591 12.322 3.17 10.841 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179z" />
                                    </g>
                                  </svg>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={7}
                        tabIndex={-1}
                        className="slick-slide slick-center slick-cloned"
                        aria-hidden="true"
                        style={{ width: 560 }}
                      >
                        <div>
                          <div
                            className="mx-2"
                            tabIndex={-1}
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <div className="darkcard mx-2 mb-md-4 p-0 rounded text-start text-white card">
                              <div className="m-1 bg-dark-gradient rounded px-3 py-3 card-body">
                                <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center mb-0">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 24 24"
                                    className="text-white"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g>
                                      <path fill="none" d="M0 0h24v24H0z" />
                                      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                                    </g>
                                  </svg>
                                </p>
                                <div className="px-4">
                                  <p className="mb-1 mt-2">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                  </p>
                                  <p className="fw-300 fs-13 lh-24">
                                    Unique concept and kudos to Rituraj for being
                                    available to clear any queries. May you grow
                                    further and create wealth for investors as
                                    well as help build sustainable environment.
                                  </p>
                                  <div className="d-flex justify-content-start align-items-center m-0">
                                    <img
                                      src="https://cms.growpital.com/uploads/shanshank_40d563febf.png"
                                      className="img-fluid m-0 rounded-circle"
                                      alt=""
                                      style={{ width: 45, height: 45 }}
                                    />
                                    <div className="ms-3 text-start">
                                      <h6 className="fw-600 fs-13 mb-0 pt-2">
                                        Shashank Tiwari
                                        <a
                                          href="https://www.linkedin.com/mwlite/in/shashank-tiwari-frm-795148b7"
                                          target="blank"
                                        >
                                          <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            viewBox="0 0 1024 1024"
                                            className="ms-2 text-indigo"
                                            height={18}
                                            width={18}
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
                                          </svg>
                                        </a>
                                      </h6>
                                      <p className="fw-300 fs-12 mb-0 pt-2 text-start">
                                        Pune
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center float-end">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 24 24"
                                    className="text-white"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g>
                                      <path fill="none" d="M0 0h24v24H0z" />
                                      <path d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C4.591 12.322 3.17 10.841 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179z" />
                                    </g>
                                  </svg>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div
                            className="mx-2"
                            tabIndex={-1}
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <div className="darkcard mx-2 mb-md-4 p-0 rounded text-start text-white card">
                              <div className="m-1 bg-dark-gradient rounded px-3 py-3 card-body">
                                <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center mb-0">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 24 24"
                                    className="text-white"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g>
                                      <path fill="none" d="M0 0h24v24H0z" />
                                      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                                    </g>
                                  </svg>
                                </p>
                                <div className="px-4">
                                  <p className="mb-1 mt-2">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 16 16"
                                      className="text-sunglow me-1"
                                      height={13}
                                      width={13}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                  </p>
                                  <p className="fw-300 fs-13 lh-24">
                                    Growpital allows to invest in a market which
                                    can barely has bad times. Agriproduce will
                                    always find buyers, use of technology to
                                    maximise the output is so obvious but rare.
                                  </p>
                                  <div className="d-flex justify-content-start align-items-center m-0">
                                    <img
                                      src="https://cms.growpital.com/uploads/vipul_14ead0051a.png"
                                      className="img-fluid m-0 rounded-circle"
                                      alt=""
                                      style={{ width: 45, height: 45 }}
                                    />
                                    <div className="ms-3 text-start">
                                      <h6 className="fw-600 fs-13 mb-0 pt-2">
                                        Vipul Rawal
                                        <a
                                          href="https://www.linkedin.com/in/vipulraw/"
                                          target="blank"
                                        >
                                          <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            viewBox="0 0 1024 1024"
                                            className="ms-2 text-indigo"
                                            height={18}
                                            width={18}
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
                                          </svg>
                                        </a>
                                      </h6>
                                      <p className="fw-300 fs-12 mb-0 pt-2 text-start">
                                        Delhi
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center float-end">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 24 24"
                                    className="text-white"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g>
                                      <path fill="none" d="M0 0h24v24H0z" />
                                      <path d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C4.591 12.322 3.17 10.841 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179z" />
                                    </g>
                                  </svg>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="py-5">
      <div className="container-fluid">
        <section className="py-0 mt-0 mt-md-0">
          <div className="container">
            <div className="row">
              <div className="d-flex justify-content-center align-items-center text-white mt-3 col">
                <div
                  className="text-center aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <h1>Latest News and Updates</h1>
                  <p className="subheading">
                    Stay Informed with the Latest Stories and Developments
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="d-flex justify-content-center align-items-start pt-3 row">
            <div
              data-aos="fade-up"
              className="text-center text-md-start col aos-init aos-animate"
            >
              <div>
                <div>
                  <div
                    className="slick-slider center slick-initialized"
                    dir="ltr"
                  >
                    <div className="slick-list" style={{ padding: "0px 100px" }}>
                      <div
                        className="slick-track"
                        style={{
                          opacity: 1,
                          transform: "translate3d(-2800px, 0px, 0px)",
                          width: 8960,
                          transition: "-webkit-transform 3000ms linear 0s",
                        }}
                      >
                        <div
                          data-index={-4}
                          tabIndex={-1}
                          className="slick-slide slick-center slick-cloned"
                          aria-hidden="true"
                          style={{ width: 560 }}
                        >
                          <div>
                            <div
                              data-aos="fade-up"
                              data-aos-once="true"
                              tabIndex={-1}
                              className="custom-news-col col-md-6 aos-init aos-animate"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="custom-news-card-wrapper darkcard mt-3 mt-md-4 p-0 rounded text-start text-white card">
                                <div className="custom-news-card bg-dark-gradient card-group">
                                  <div className="bg-transparent border-0 text-white cover-img card">
                                    <div className="custom-news-card-body card-body">
                                      <img
                                        className="card-img rounded-3 w-0 news-image"
                                        src="https://cms.growpital.com/uploads/Screenshot_2023_08_25_153730_78e41b1521.png"
                                        style={{ maxHeight: "18rem" }}
                                      />
                                      <div className="py-2 news-card-title card-title h5">
                                        EntrackR
                                      </div>
                                      <p className="py-2 news-card-text card-text">
                                        Agri-investment startup Growpital claims
                                        Rs 55 Cr revenue in FY23 with profits
                                      </p>
                                      <a
                                        className="news-card-link card-link"
                                        href="https://entrackr.com/2023/07/agri-investment-startup-growpital-claims-rs-55-cr-revenue-in-fy23-with-profits/"
                                        style={{ textDecoration: "none" }}
                                      >
                                        Read More
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          data-index={-3}
                          tabIndex={-1}
                          className="slick-slide slick-cloned"
                          aria-hidden="true"
                          style={{ width: 560 }}
                        >
                          <div>
                            <div
                              data-aos="fade-up"
                              data-aos-once="true"
                              tabIndex={-1}
                              className="custom-news-col col-md-6 aos-init aos-animate"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="custom-news-card-wrapper darkcard mt-3 mt-md-4 p-0 rounded text-start text-white card">
                                <div className="custom-news-card bg-dark-gradient card-group">
                                  <div className="bg-transparent border-0 text-white cover-img card">
                                    <div className="custom-news-card-body card-body">
                                      <img
                                        className="card-img rounded-3 w-0 news-image"
                                        src="https://cms.growpital.com/uploads/Growpital_Pratidin_Time_1a0617e455.jpg"
                                        style={{ maxHeight: "18rem" }}
                                      />
                                      <div className="py-2 news-card-title card-title h5">
                                        Pratidin Time
                                      </div>
                                      <p className="py-2 news-card-text card-text">
                                        Rajasthan-Based Zetta Farms Set to
                                        Revolutionize Assam Tea Industry
                                      </p>
                                      <a
                                        className="news-card-link card-link"
                                        href="https://www.pratidintime.com/latest-assam-news-breaking-news-assam/rajasthan-based-zetta-farms-set-to-revolutionize-assam-tea-industry-know-how"
                                        style={{ textDecoration: "none" }}
                                      >
                                        Read More
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          data-index={-2}
                          tabIndex={-1}
                          className="slick-slide slick-cloned"
                          aria-hidden="true"
                          style={{ width: 560 }}
                        >
                          <div>
                            <div
                              data-aos="fade-up"
                              data-aos-once="true"
                              tabIndex={-1}
                              className="custom-news-col col-md-6 aos-init aos-animate"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="custom-news-card-wrapper darkcard mt-3 mt-md-4 p-0 rounded text-start text-white card">
                                <div className="custom-news-card bg-dark-gradient card-group">
                                  <div className="bg-transparent border-0 text-white cover-img card">
                                    <div className="custom-news-card-body card-body">
                                      <img
                                        className="card-img rounded-3 w-0 news-image"
                                        src="https://cms.growpital.com/uploads/Growpital_Outlook_India_e400e34c37.jpg"
                                        style={{ maxHeight: "18rem" }}
                                      />
                                      <div className="py-2 news-card-title card-title h5">
                                        Outlook
                                      </div>
                                      <p className="py-2 news-card-text card-text">
                                        ZETTA FARMS Unveils Zetta Rozgaar Yojna
                                      </p>
                                      <a
                                        className="news-card-link card-link"
                                        href="https://startup.outlookindia.com/sector/agritech/zetta-farms-unveils-zetta-rozgaar-yojna-news-9123"
                                        style={{ textDecoration: "none" }}
                                      >
                                        Read More
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          data-index={-1}
                          tabIndex={-1}
                          className="slick-slide slick-cloned"
                          aria-hidden="true"
                          style={{ width: 560 }}
                        >
                          <div>
                            <div
                              data-aos="fade-up"
                              data-aos-once="true"
                              tabIndex={-1}
                              className="custom-news-col col-md-6 aos-init aos-animate"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="custom-news-card-wrapper darkcard mt-3 mt-md-4 p-0 rounded text-start text-white card">
                                <div className="custom-news-card bg-dark-gradient card-group">
                                  <div className="bg-transparent border-0 text-white cover-img card">
                                    <div className="custom-news-card-body card-body">
                                      <img
                                        className="card-img rounded-3 w-0 news-image"
                                        src="https://cms.growpital.com/uploads/Growpital_CNBC_TV_18_e2a5f742db.jpg"
                                        style={{ maxHeight: "18rem" }}
                                      />
                                      <div className="py-2 news-card-title card-title h5">
                                        CNBctv18
                                      </div>
                                      <p className="py-2 news-card-text card-text">
                                        Sustainable Agri-Startup Zetta Farms
                                        Announces Pension Plan for Farmers
                                      </p>
                                      <a
                                        className="news-card-link card-link"
                                        href="https://www.cnbctv18.com/startup/sustainable-agri-startup-zetta-farms-announces-pension-plan-for-farmers-17569581.htm"
                                        style={{ textDecoration: "none" }}
                                      >
                                        Read More
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          data-index={0}
                          className="slick-slide"
                          tabIndex={-1}
                          aria-hidden="true"
                          style={{ outline: "none", width: 560 }}
                        >
                          <div>
                            <div
                              data-aos="fade-up"
                              data-aos-once="true"
                              tabIndex={-1}
                              className="custom-news-col col-md-6 aos-init aos-animate"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="custom-news-card-wrapper darkcard mt-3 mt-md-4 p-0 rounded text-start text-white card">
                                <div className="custom-news-card bg-dark-gradient card-group">
                                  <div className="bg-transparent border-0 text-white cover-img card">
                                    <div className="custom-news-card-body card-body">
                                      <img
                                        className="card-img rounded-3 w-0 news-image"
                                        src="https://cms.growpital.com/uploads/Growpital_Nagaland_Post_cdbdda8f7c.jpg"
                                        style={{ maxHeight: "18rem" }}
                                      />
                                      <div className="py-2 news-card-title card-title h5">
                                        Nagaland Post
                                      </div>
                                      <p className="py-2 news-card-text card-text">
                                        Zetta Farms to Invest in Nagaland Agri,
                                        Allied Sector
                                      </p>
                                      <a
                                        className="news-card-link card-link"
                                        href="https://nagalandpost.com/index.php/zetta-farms-to-invest-in-nagaland-agri-allied-sector/"
                                        style={{ textDecoration: "none" }}
                                      >
                                        Read More
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          data-index={1}
                          className="slick-slide slick-active"
                          tabIndex={-1}
                          aria-hidden="false"
                          style={{ outline: "none", width: 560 }}
                        >
                          <div>
                            <div
                              data-aos="fade-up"
                              data-aos-once="true"
                              tabIndex={-1}
                              className="custom-news-col col-md-6 aos-init aos-animate"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="custom-news-card-wrapper darkcard mt-3 mt-md-4 p-0 rounded text-start text-white card">
                                <div className="custom-news-card bg-dark-gradient card-group">
                                  <div className="bg-transparent border-0 text-white cover-img card">
                                    <div className="custom-news-card-body card-body">
                                      <img
                                        className="card-img rounded-3 w-0 news-image"
                                        src="https://cms.growpital.com/uploads/Growpital_Moneycontrol_3b751b1d0c.jpg"
                                        style={{ maxHeight: "18rem" }}
                                      />
                                      <div className="py-2 news-card-title card-title h5">
                                        Moneycontrol
                                      </div>
                                      <p className="py-2 news-card-text card-text">
                                        Startup Company Zetta Farms Bags McCain
                                        Foods' Potato Cultivation Orders
                                      </p>
                                      <a
                                        className="news-card-link card-link"
                                        href="https://www.moneycontrol.com/news/business/startup/startup-company-zetta-farms-bags-mccain-foods-potato-cultivation-orders-9704871.html"
                                        style={{ textDecoration: "none" }}
                                      >
                                        Read More
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          data-index={2}
                          className="slick-slide slick-active slick-center slick-current"
                          tabIndex={-1}
                          aria-hidden="false"
                          style={{ outline: "none", width: 560 }}
                        >
                          <div>
                            <div
                              data-aos="fade-up"
                              data-aos-once="true"
                              tabIndex={-1}
                              className="custom-news-col col-md-6 aos-init aos-animate"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="custom-news-card-wrapper darkcard mt-3 mt-md-4 p-0 rounded text-start text-white card">
                                <div className="custom-news-card bg-dark-gradient card-group">
                                  <div className="bg-transparent border-0 text-white cover-img card">
                                    <div className="custom-news-card-body card-body">
                                      <img
                                        className="card-img rounded-3 w-0 news-image"
                                        src="https://cms.growpital.com/uploads/Screenshot_2023_08_25_153730_78e41b1521.png"
                                        style={{ maxHeight: "18rem" }}
                                      />
                                      <div className="py-2 news-card-title card-title h5">
                                        EntrackR
                                      </div>
                                      <p className="py-2 news-card-text card-text">
                                        Agri-investment startup Growpital claims
                                        Rs 55 Cr revenue in FY23 with profits
                                      </p>
                                      <a
                                        className="news-card-link card-link"
                                        href="https://entrackr.com/2023/07/agri-investment-startup-growpital-claims-rs-55-cr-revenue-in-fy23-with-profits/"
                                        style={{ textDecoration: "none" }}
                                      >
                                        Read More
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          data-index={3}
                          className="slick-slide slick-active"
                          tabIndex={-1}
                          aria-hidden="false"
                          style={{ outline: "none", width: 560 }}
                        >
                          <div>
                            <div
                              data-aos="fade-up"
                              data-aos-once="true"
                              tabIndex={-1}
                              className="custom-news-col col-md-6 aos-init aos-animate"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="custom-news-card-wrapper darkcard mt-3 mt-md-4 p-0 rounded text-start text-white card">
                                <div className="custom-news-card bg-dark-gradient card-group">
                                  <div className="bg-transparent border-0 text-white cover-img card">
                                    <div className="custom-news-card-body card-body">
                                      <img
                                        className="card-img rounded-3 w-0 news-image"
                                        src="https://cms.growpital.com/uploads/Growpital_Pratidin_Time_1a0617e455.jpg"
                                        style={{ maxHeight: "18rem" }}
                                      />
                                      <div className="py-2 news-card-title card-title h5">
                                        Pratidin Time
                                      </div>
                                      <p className="py-2 news-card-text card-text">
                                        Rajasthan-Based Zetta Farms Set to
                                        Revolutionize Assam Tea Industry
                                      </p>
                                      <a
                                        className="news-card-link card-link"
                                        href="https://www.pratidintime.com/latest-assam-news-breaking-news-assam/rajasthan-based-zetta-farms-set-to-revolutionize-assam-tea-industry-know-how"
                                        style={{ textDecoration: "none" }}
                                      >
                                        Read More
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          data-index={4}
                          className="slick-slide"
                          tabIndex={-1}
                          aria-hidden="true"
                          style={{ outline: "none", width: 560 }}
                        >
                          <div>
                            <div
                              data-aos="fade-up"
                              data-aos-once="true"
                              tabIndex={-1}
                              className="custom-news-col col-md-6 aos-init aos-animate"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="custom-news-card-wrapper darkcard mt-3 mt-md-4 p-0 rounded text-start text-white card">
                                <div className="custom-news-card bg-dark-gradient card-group">
                                  <div className="bg-transparent border-0 text-white cover-img card">
                                    <div className="custom-news-card-body card-body">
                                      <img
                                        className="card-img rounded-3 w-0 news-image"
                                        src="https://cms.growpital.com/uploads/Growpital_Outlook_India_e400e34c37.jpg"
                                        style={{ maxHeight: "18rem" }}
                                      />
                                      <div className="py-2 news-card-title card-title h5">
                                        Outlook
                                      </div>
                                      <p className="py-2 news-card-text card-text">
                                        ZETTA FARMS Unveils Zetta Rozgaar Yojna
                                      </p>
                                      <a
                                        className="news-card-link card-link"
                                        href="https://startup.outlookindia.com/sector/agritech/zetta-farms-unveils-zetta-rozgaar-yojna-news-9123"
                                        style={{ textDecoration: "none" }}
                                      >
                                        Read More
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          data-index={5}
                          className="slick-slide"
                          tabIndex={-1}
                          aria-hidden="true"
                          style={{ outline: "none", width: 560 }}
                        >
                          <div>
                            <div
                              data-aos="fade-up"
                              data-aos-once="true"
                              tabIndex={-1}
                              className="custom-news-col col-md-6 aos-init aos-animate"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="custom-news-card-wrapper darkcard mt-3 mt-md-4 p-0 rounded text-start text-white card">
                                <div className="custom-news-card bg-dark-gradient card-group">
                                  <div className="bg-transparent border-0 text-white cover-img card">
                                    <div className="custom-news-card-body card-body">
                                      <img
                                        className="card-img rounded-3 w-0 news-image"
                                        src="https://cms.growpital.com/uploads/Growpital_CNBC_TV_18_e2a5f742db.jpg"
                                        style={{ maxHeight: "18rem" }}
                                      />
                                      <div className="py-2 news-card-title card-title h5">
                                        CNBctv18
                                      </div>
                                      <p className="py-2 news-card-text card-text">
                                        Sustainable Agri-Startup Zetta Farms
                                        Announces Pension Plan for Farmers
                                      </p>
                                      <a
                                        className="news-card-link card-link"
                                        href="https://www.cnbctv18.com/startup/sustainable-agri-startup-zetta-farms-announces-pension-plan-for-farmers-17569581.htm"
                                        style={{ textDecoration: "none" }}
                                      >
                                        Read More
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          data-index={6}
                          tabIndex={-1}
                          className="slick-slide slick-cloned"
                          aria-hidden="true"
                          style={{ width: 560 }}
                        >
                          <div>
                            <div
                              data-aos="fade-up"
                              data-aos-once="true"
                              tabIndex={-1}
                              className="custom-news-col col-md-6 aos-init aos-animate"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="custom-news-card-wrapper darkcard mt-3 mt-md-4 p-0 rounded text-start text-white card">
                                <div className="custom-news-card bg-dark-gradient card-group">
                                  <div className="bg-transparent border-0 text-white cover-img card">
                                    <div className="custom-news-card-body card-body">
                                      <img
                                        className="card-img rounded-3 w-0 news-image"
                                        src="https://cms.growpital.com/uploads/Growpital_Nagaland_Post_cdbdda8f7c.jpg"
                                        style={{ maxHeight: "18rem" }}
                                      />
                                      <div className="py-2 news-card-title card-title h5">
                                        Nagaland Post
                                      </div>
                                      <p className="py-2 news-card-text card-text">
                                        Zetta Farms to Invest in Nagaland Agri,
                                        Allied Sector
                                      </p>
                                      <a
                                        className="news-card-link card-link"
                                        href="https://nagalandpost.com/index.php/zetta-farms-to-invest-in-nagaland-agri-allied-sector/"
                                        style={{ textDecoration: "none" }}
                                      >
                                        Read More
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          data-index={7}
                          tabIndex={-1}
                          className="slick-slide slick-cloned"
                          aria-hidden="true"
                          style={{ width: 560 }}
                        >
                          <div>
                            <div
                              data-aos="fade-up"
                              data-aos-once="true"
                              tabIndex={-1}
                              className="custom-news-col col-md-6 aos-init aos-animate"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="custom-news-card-wrapper darkcard mt-3 mt-md-4 p-0 rounded text-start text-white card">
                                <div className="custom-news-card bg-dark-gradient card-group">
                                  <div className="bg-transparent border-0 text-white cover-img card">
                                    <div className="custom-news-card-body card-body">
                                      <img
                                        className="card-img rounded-3 w-0 news-image"
                                        src="https://cms.growpital.com/uploads/Growpital_Moneycontrol_3b751b1d0c.jpg"
                                        style={{ maxHeight: "18rem" }}
                                      />
                                      <div className="py-2 news-card-title card-title h5">
                                        Moneycontrol
                                      </div>
                                      <p className="py-2 news-card-text card-text">
                                        Startup Company Zetta Farms Bags McCain
                                        Foods' Potato Cultivation Orders
                                      </p>
                                      <a
                                        className="news-card-link card-link"
                                        href="https://www.moneycontrol.com/news/business/startup/startup-company-zetta-farms-bags-mccain-foods-potato-cultivation-orders-9704871.html"
                                        style={{ textDecoration: "none" }}
                                      >
                                        Read More
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          data-index={8}
                          tabIndex={-1}
                          className="slick-slide slick-center slick-cloned"
                          aria-hidden="true"
                          style={{ width: 560 }}
                        >
                          <div>
                            <div
                              data-aos="fade-up"
                              data-aos-once="true"
                              tabIndex={-1}
                              className="custom-news-col col-md-6 aos-init aos-animate"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="custom-news-card-wrapper darkcard mt-3 mt-md-4 p-0 rounded text-start text-white card">
                                <div className="custom-news-card bg-dark-gradient card-group">
                                  <div className="bg-transparent border-0 text-white cover-img card">
                                    <div className="custom-news-card-body card-body">
                                      <img
                                        className="card-img rounded-3 w-0 news-image"
                                        src="https://cms.growpital.com/uploads/Screenshot_2023_08_25_153730_78e41b1521.png"
                                        style={{ maxHeight: "18rem" }}
                                      />
                                      <div className="py-2 news-card-title card-title h5">
                                        EntrackR
                                      </div>
                                      <p className="py-2 news-card-text card-text">
                                        Agri-investment startup Growpital claims
                                        Rs 55 Cr revenue in FY23 with profits
                                      </p>
                                      <a
                                        className="news-card-link card-link"
                                        href="https://entrackr.com/2023/07/agri-investment-startup-growpital-claims-rs-55-cr-revenue-in-fy23-with-profits/"
                                        style={{ textDecoration: "none" }}
                                      >
                                        Read More
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          data-index={9}
                          tabIndex={-1}
                          className="slick-slide slick-cloned"
                          aria-hidden="true"
                          style={{ width: 560 }}
                        >
                          <div>
                            <div
                              data-aos="fade-up"
                              data-aos-once="true"
                              tabIndex={-1}
                              className="custom-news-col col-md-6 aos-init aos-animate"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="custom-news-card-wrapper darkcard mt-3 mt-md-4 p-0 rounded text-start text-white card">
                                <div className="custom-news-card bg-dark-gradient card-group">
                                  <div className="bg-transparent border-0 text-white cover-img card">
                                    <div className="custom-news-card-body card-body">
                                      <img
                                        className="card-img rounded-3 w-0 news-image"
                                        src="https://cms.growpital.com/uploads/Growpital_Pratidin_Time_1a0617e455.jpg"
                                        style={{ maxHeight: "18rem" }}
                                      />
                                      <div className="py-2 news-card-title card-title h5">
                                        Pratidin Time
                                      </div>
                                      <p className="py-2 news-card-text card-text">
                                        Rajasthan-Based Zetta Farms Set to
                                        Revolutionize Assam Tea Industry
                                      </p>
                                      <a
                                        className="news-card-link card-link"
                                        href="https://www.pratidintime.com/latest-assam-news-breaking-news-assam/rajasthan-based-zetta-farms-set-to-revolutionize-assam-tea-industry-know-how"
                                        style={{ textDecoration: "none" }}
                                      >
                                        Read More
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          data-index={10}
                          tabIndex={-1}
                          className="slick-slide slick-cloned"
                          aria-hidden="true"
                          style={{ width: 560 }}
                        >
                          <div>
                            <div
                              data-aos="fade-up"
                              data-aos-once="true"
                              tabIndex={-1}
                              className="custom-news-col col-md-6 aos-init aos-animate"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="custom-news-card-wrapper darkcard mt-3 mt-md-4 p-0 rounded text-start text-white card">
                                <div className="custom-news-card bg-dark-gradient card-group">
                                  <div className="bg-transparent border-0 text-white cover-img card">
                                    <div className="custom-news-card-body card-body">
                                      <img
                                        className="card-img rounded-3 w-0 news-image"
                                        src="https://cms.growpital.com/uploads/Growpital_Outlook_India_e400e34c37.jpg"
                                        style={{ maxHeight: "18rem" }}
                                      />
                                      <div className="py-2 news-card-title card-title h5">
                                        Outlook
                                      </div>
                                      <p className="py-2 news-card-text card-text">
                                        ZETTA FARMS Unveils Zetta Rozgaar Yojna
                                      </p>
                                      <a
                                        className="news-card-link card-link"
                                        href="https://startup.outlookindia.com/sector/agritech/zetta-farms-unveils-zetta-rozgaar-yojna-news-9123"
                                        style={{ textDecoration: "none" }}
                                      >
                                        Read More
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          data-index={11}
                          tabIndex={-1}
                          className="slick-slide slick-cloned"
                          aria-hidden="true"
                          style={{ width: 560 }}
                        >
                          <div>
                            <div
                              data-aos="fade-up"
                              data-aos-once="true"
                              tabIndex={-1}
                              className="custom-news-col col-md-6 aos-init aos-animate"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="custom-news-card-wrapper darkcard mt-3 mt-md-4 p-0 rounded text-start text-white card">
                                <div className="custom-news-card bg-dark-gradient card-group">
                                  <div className="bg-transparent border-0 text-white cover-img card">
                                    <div className="custom-news-card-body card-body">
                                      <img
                                        className="card-img rounded-3 w-0 news-image"
                                        src="https://cms.growpital.com/uploads/Growpital_CNBC_TV_18_e2a5f742db.jpg"
                                        style={{ maxHeight: "18rem" }}
                                      />
                                      <div className="py-2 news-card-title card-title h5">
                                        CNBctv18
                                      </div>
                                      <p className="py-2 news-card-text card-text">
                                        Sustainable Agri-Startup Zetta Farms
                                        Announces Pension Plan for Farmers
                                      </p>
                                      <a
                                        className="news-card-link card-link"
                                        href="https://www.cnbctv18.com/startup/sustainable-agri-startup-zetta-farms-announces-pension-plan-for-farmers-17569581.htm"
                                        style={{ textDecoration: "none" }}
                                      >
                                        Read More
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
    <section className="py-5 hidden-section">
      <div className="container">
        <iframe
          frameBorder={0}
          className="subscription-form"
          src="https://forms.zohopublic.in/growpital/form/EmailSubscription2/formperma/Hf1ctjPbSSEIAbGT_rD_Yx9Gns9kfzp-s61NDdd8mq4"
        />
      </div>
    </section>
    <section className="py-5">
      <div className="container">
        <div className="d-flex justify-content-center align-items-start row">
          <div
            data-aos="fade-up"
            className="text-center text-lg-start col-lg-6 col-md-12 col-12 aos-init aos-animate"
          >
            <p className="text-uppercase fs-18 fw-500 text-main-green text-uppercase">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 16 16"
                className="me-1"
                height={8}
                width={8}
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx={8} cy={8} r={8} />
              </svg>
              JOIN US ON OUR TELEGRAM CHANNEL
            </p>
            <h2 className="text-white fw-600 display-6 mb-3 mb-md-4">
              Be part of our community!
            </h2>
            <p className="text-white fw-400 fs-18 py-4">
              Get content straight to you. Be the first to learn the news about
              new features and product updates. What is going on in agri industry,
              promotions and more.
            </p>
            <div data-aos="fade-up" className="aos-init aos-animate">
              <a href="https://t.me/growpitalofficial">
                <button
                  type="button"
                  className="px-3 px-md-5 py-3 btn btn-dark btn-lg"
                >
                  <img
                    src="https://cms.growpital.com/uploads/kisspng_telegram_logo_computer_icons_scalable_vector_graph_png_telegram_transparent_5ab08470747435_671490841521517680477_6b03ae449c.png"
                    className="img-fluid me-3"
                    alt=""
                    style={{ maxWidth: 50 }}
                  />
                  Join Telegram Channel
                </button>
              </a>
            </div>
          </div>
          <div className="mt-5 mt-lg-0 col-lg-6 col-md-12 col-12">
            <div
              className="faq-accordian text-center text-lg-end aos-init aos-animate"
              data-aos="fade-up"
            >
              <div className="row">
                <div className="text-center text-md-end col-md-12 col-12">
                  <div className="home-accordian accordion">
                    <div className="mb-3 bg-transparent accordion-item">
                      <h2 className="text-white fw-600 fs-22 accordion-header">
                        <button
                          type="button"
                          aria-expanded="false"
                          className="accordion-button collapsed"
                        >
                          <span className="pe-2">01</span> What is Growpital? (In
                          a Nutshell)
                        </button>
                      </h2>
                      <div className="accordion-collapse collapse">
                        <div className="pb-2 accordion-body">
                          <p>
                            The all -new Agro investment platform with tax-free
                            income. It’s the new clutter-free, fixed-income
                            platform with 11% -14% Tax free fixed profit share.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3 bg-transparent accordion-item">
                      <h2 className="text-white fw-600 fs-22 accordion-header">
                        <button
                          type="button"
                          aria-expanded="false"
                          className="accordion-button collapsed"
                        >
                          <span className="pe-2">02</span> What is the lock-in
                          period after I invest via Growpital?
                        </button>
                      </h2>
                      <div className="accordion-collapse collapse">
                        <div className="pb-2 accordion-body">
                          <p>
                            To make your investment experience hassle-free, the
                            project entities just put a minimum Lock-in period. If
                            you withdraw before the lock-in period ends, the
                            project entity would deduct all payouts given to you
                            from the original investment amount and pay the
                            remaining amount to you. This will result in no
                            profit/return to you.
                          </p>
                          <p>
                            However, if you make any withdraw request after the
                            lock in period before the maturity period, the
                            original investment amount shall be paid at that time;
                            no future profits and no pro-rata calculation of
                            payouts will be done.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3 bg-transparent accordion-item">
                      <h2 className="text-white fw-600 fs-22 accordion-header">
                        <button
                          type="button"
                          aria-expanded="false"
                          className="accordion-button collapsed"
                        >
                          <span className="pe-2">03</span> Are the returns
                          guaranteed?
                        </button>
                      </h2>
                      <div className="accordion-collapse collapse">
                        <div className="pb-2 accordion-body">
                          <p>
                            The returns are projected revenues from farm project
                            after sales of agri produce. So the revenues of the
                            farm project will deviate from crop to crop, but we
                            keep a satisfactory buffer to provide fixed returns in
                            the form of advance profits.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3 bg-transparent accordion-item">
                      <h2 className="text-white fw-600 fs-22 accordion-header">
                        <button
                          type="button"
                          aria-expanded="false"
                          className="accordion-button collapsed"
                        >
                          <span className="pe-2">04</span> How is my earning Tax
                          Free?
                        </button>
                      </h2>
                      <div className="accordion-collapse collapse">
                        <div className="pb-2 accordion-body">
                          <p>
                            There are no tax deduction on the returns received by
                            you as it is the share of profit given by the Farm
                            project entity, which is an LLP, as per section
                            10(2A). The earnings of the LLP is agriculture income,
                            and is exempted under Section 10(1) of the Income Tax
                            Act,1961 in India.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a href="/faqs" className="fs-16 fw-700 text-white text-start">
              More FAQs
            </a>
          </div>
        </div>
      </div>
    </section>
  </>)
}