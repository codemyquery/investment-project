import { content1 } from "../../utils/content"
import { ExpandableCard } from "../atoms"

export const SocialSection = () => {
    return <section className="py-5">
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
                </div>
            </div>
        </div>
    </section>
}