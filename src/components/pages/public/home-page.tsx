import { useEffect, useState } from 'react'
import virtualProperty from '../../../assets/images/VirtualProperty.png'
import { content, content1 } from '../../../utils/content'
import { AutoWriting, ExpandableCard } from '../../atoms'
import { PlanSlider } from '../../organism'
import { Plan } from '../../../services'
import { PlanServerData } from '../../../types'
export const HomePage = () => {
  const [loader, setLoader] = useState<boolean>(true)
  const [planDetail, setPlanDetail] = useState<PlanServerData[]>([])
  useEffect(() => {
    const abortController = new AbortController();
    const init = async () => {
      const response = await Plan.fetchPlanList('', abortController);
      setPlanDetail(response.rows);
      setLoader(false)
    }
    init();
  }, []);
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
                  <AutoWriting text='Sure Things' />
                  <span
                    className="styles-module_blinkingCursor__yugAC"
                    style={{ color: "inherit" }}
                  >
                    |
                  </span>
                </span>
              </h1>
              <p className="text-white fw-400 fs-24 my-3 mb-md-4 py-2">
                Diversify your portfolio with guaranteed from RBI governed Investment.
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
                        <span className="fw-600 text-main-gold"> Monthly Income from Day 1</span>
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
                        Booking Amount<br /><br />
                        <span className="fw-600 text-main-gold"> 10%</span>
                        <br />

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
                      <div className="fw-400 text-center fs-20 mb-0 pt-2 card-title h5"><br />
                        Assured<br /><br />
                        <span className="fw-600 text-main-gold"> Buy</span>
                        Back<br />
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
              Its like a &nbsp;
              <span className="text-main-green">
                <AutoWriting text='Property' />
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
                  &nbsp;&nbsp;Registration Charges EMI
                </p>
                <p className="fs-24 fs-sm-18 fw-400 text-white">
                  &nbsp;&nbsp;&nbsp;&nbsp;Maintenance Cost
                </p>
                <p className="fs-24 fs-sm-18 fw-400 text-white">
                  &nbsp;&nbsp;&nbsp;&nbsp;Vacant Period
                </p>
                <p className="fs-24 fs-sm-18 fw-400 text-white">
                  &nbsp;&nbsp;&nbsp;Delay In Rentals
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
                        Second Income
                      </div>
                      <p className="fw-400 fs-17 lh-24 card-text">
                        We provide Second Income with safety and high returns.
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
                        This scheme is secured by RBI Investment. Hence, No worry!!
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
                      Free from any volatality. Monthly payouts in your
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
              We are growing rapidly. Join us soon
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
                    <span>₹10+</span>
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
                    <span>150%</span>
                  </div>
                  <p className="fw-500 fs-14 text-white text-uppercase card-text">
                    Upto
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
                    MANAGED PORTFOLIO
                  </div>
                  <div className="fw-700 display-5 text-main-green mb-0 card-title h5">
                    <span> 1200+</span>
                  </div>
                  <p className="fw-500 fs-14 text-white text-uppercase card-text">
                    Customers
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
              <span className="text-main-green"> 4 simple steps</span>
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
    {/* Plan Will be shown here */}
    <PlanSlider loader={loader} planDetail={planDetail}/>
    {/* End Plan Show */}
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
              new features and product updates. What is going on in Virtual Property,
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
                  {
                    <ExpandableCard content={content1} />
                  }
                </div>
              </div>
            </div>
            {/* <a href="/faqs" className="fs-16 fw-700 text-white text-start">
              More FAQs
            </a> */}
          </div>
        </div>
      </div>
    </section>
  </>)
}