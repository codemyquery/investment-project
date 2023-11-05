export const Faqs = () => {
    return (<>
        <div className="mt-5 py-5">
            <section className="py-0 mt-0 mt-md-0">
                <div className="container">
                    <div className="row">
                        <div className="d-flex justify-content-center align-items-center text-white col">
                            <div className="text-center ">
                                <h1 data-aos="fade-up" className="aos-init aos-animate">
                                    Frequently Asked Questions
                                </h1>
                                <p>Got a question? We've got answers.</p>
                                <p>If you have some other questions, contact us using email.</p>
                                <div className="faqs-search my-4 py-3">
                                    <form className="d-flex ">
                                        <input
                                            placeholder="Search"
                                            aria-label="Search"
                                            type="search"
                                            className="py-2 searchBar bg-transparent text-white border-end-0   form-control"
                                        />
                                        <button
                                            type="submit"
                                            className="btn searchbtn bg-transparent py-2  btn btn-primary"
                                        >
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth={0}
                                                viewBox="0 0 16 16"
                                                height="25px"
                                                width="25px"
                                                xmlns="http://www.w3.org/2000/svg"
                                                style={{ color: "rgb(254, 191, 50)" }}
                                            >
                                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                            </svg>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-4 mb-3 py-3">
                <div className="text-white container">
                    <div className="row">
                        <div
                            data-aos="fade-up"
                            data-aos-once="true"
                            className="col-12 aos-init aos-animate"
                        >
                            <div className="text-center mx-auto mb-3">
                                <p className="fw-500 fs-32 mb-3 py-3">General Questions</p>
                            </div>
                            <div className="row">
                                <div
                                    data-aos="fade-up"
                                    data-aos-once="true"
                                    className="col-md-6 aos-init aos-animate"
                                >
                                    <div className="faqs-accordian accordion">
                                        <div className="mb-3 bg-transparent accordion-item">
                                            <h2 className="text-white fw-600 fs-22 accordion-header">
                                                <button
                                                    type="button"
                                                    aria-expanded="false"
                                                    className="accordion-button collapsed"
                                                >
                                                    What is Growpital? (In a Nutshell)
                                                </button>
                                            </h2>
                                            <div className="accordion-collapse collapse">
                                                <div className="accordion-body">
                                                    <p>
                                                        The all -new Agri investment platform with tax-free
                                                        income. It’s the new clutter-free, fixed-income platform
                                                        with 11% -14% Tax free assured profit share.
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
                                                    {" "}
                                                    How does Growpital work?
                                                </button>
                                            </h2>
                                            <div className="accordion-collapse collapse">
                                                <div className="accordion-body">
                                                    <p>
                                                        Choose your investment plan and units of investments in
                                                        farm projects.- Confirm details and pay securely. Our
                                                        team handles administration and property management –
                                                        from crop selection, farm inputs, to working with local
                                                        farmers and improving soil sustainability. Get your
                                                        assured Profit share every financial quarter end. You
                                                        can withdraw this directly in your bank account or even
                                                        choose to re-invest for more wealth creation
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
                                                    {" "}
                                                    How does this help farmers and land owners?
                                                </button>
                                            </h2>
                                            <div className="accordion-collapse collapse">
                                                <div className="accordion-body">
                                                    <p>
                                                        Farmland owners and farmers are essential stakeholders
                                                        to obtaining the desired farm productivity. While our
                                                        model strategically revolves around crop diversification
                                                        and hedging to predict and produce in-demand crops, we
                                                        also provide fixed returns to land owners in form of
                                                        land lease and employment to farmers, directly enhancing
                                                        farmer’s income and generating higher returns for land
                                                        owners and investors alike.
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
                                                    {" "}
                                                    Is the profit really assured or there's a catch?{" "}
                                                </button>
                                            </h2>
                                            <div className="accordion-collapse collapse">
                                                <div className="accordion-body">
                                                    <p>
                                                        The profits that Growpital provides on your investments
                                                        is absolutely assured, without any catch, this happens
                                                        because the profits are distributed as advance share to
                                                        the fractional owners from the revenues generated by the
                                                        farm projects.
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
                                                    Who are the farmers for growpital?
                                                </button>
                                            </h2>
                                            <div className="accordion-collapse collapse">
                                                <div className="accordion-body">
                                                    <p>
                                                        We have a dedicated team of highly experienced farmers,
                                                        farm managers and experts who make their hands and legs
                                                        dirty in the farms day and night in order to grow
                                                        in-demand crops that can yield high
                                                        profitability.There’s a detailed procedure of selecting
                                                        the farmers and farms we choose to partner with.
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
                                                    {" "}
                                                    How are you able to give such good returns?
                                                </button>
                                            </h2>
                                            <div className="accordion-collapse collapse">
                                                <div className="accordion-body">
                                                    <p>
                                                        We have a detailed and highly meticulous procedure of
                                                        curating farmlands and a research-based system for
                                                        selecting the type of horticultural crops that we grow.
                                                        Think of it as a mutual fund, where diversified crops
                                                        are grown over the farm projects instead of equities and
                                                        bonds.This, along with a deep understanding of market
                                                        demand and a strong network of buyers allow us to
                                                        receive great profits and therefore enables us to pass
                                                        those on to investors.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    data-aos="fade-up"
                                    data-aos-once="true"
                                    className="col-md-6 aos-init aos-animate"
                                >
                                    <div className="faqs-accordian accordion">
                                        <div className="mb-3 bg-transparent accordion-item">
                                            <h2 className="text-white fw-600 fs-22 accordion-header">
                                                <button
                                                    type="button"
                                                    aria-expanded="false"
                                                    className="accordion-button collapsed"
                                                >
                                                    {" "}
                                                    Who manages the farm projects?
                                                </button>
                                            </h2>
                                            <div className="accordion-collapse collapse">
                                                <div className="accordion-body">
                                                    <p>
                                                        The farm projects are owned and developed by us and are
                                                        operated in two ways:- Our in-house team who follows the
                                                        schedule to grow crops and sell it in market- We get
                                                        into an operational partnership with established or
                                                        experienced players in market and get fixed revenue from
                                                        them.
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
                                                    {" "}
                                                    What are the risks involved and how is Growpital
                                                    mitigating it?{" "}
                                                </button>
                                            </h2>
                                            <div className="accordion-collapse collapse">
                                                <div className="accordion-body">
                                                    <p>
                                                        There are two types of risk involved in agriculture,
                                                        Price risk and weather risk. To mitigate these risks, we
                                                        grow 60+ crops to hedge against price risk and to have
                                                        distributed our land acres across 11+ states to hedge
                                                        the weather risk.
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
                                                    How can one associate with Growpital for lands?
                                                </button>
                                            </h2>
                                            <div className="accordion-collapse collapse">
                                                <div className="accordion-body">
                                                    <p>
                                                        Request you to please fill up the below sheet and the
                                                        team will get in touch with you.{" "}
                                                        <a href="https://zfrmz.in/SgvimoNClgEAu0pRD4i3">
                                                            https://zfrmz.in/SgvimoNClgEAu0pRD4i3
                                                        </a>
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
                                                    When will I receive my LLP document?
                                                </button>
                                            </h2>
                                            <div className="accordion-collapse collapse">
                                                <div className="accordion-body">
                                                    <p>
                                                        It will take 55-65 days from your investment to update
                                                        your name in the LLP document. Request you to please
                                                        mail on support@growpital.com to obtain the document
                                                        after the said number of days.
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
                                                    {" "}
                                                    What are the Crops being Grown?
                                                </button>
                                            </h2>
                                            <div className="accordion-collapse collapse">
                                                <div className="accordion-body">
                                                    <p>
                                                        We are growing 70+ crops ranging from Cucumber to
                                                        Coconut. We are present in all sorts of crops like
                                                        Agriculture, Horticulture and Plantations.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-once="true"
                            className="col-12 aos-init aos-animate"
                        >
                            <div className="text-center mx-auto mb-3">
                                <p className="fw-500 fs-32 mb-3 py-3">Finance</p>
                            </div>
                            <div className="row">
                                <div
                                    data-aos="fade-up"
                                    data-aos-once="true"
                                    className="col-md-6 aos-init aos-animate"
                                >
                                    <div className="faqs-accordian accordion">
                                        <div className="mb-3 bg-transparent accordion-item">
                                            <h2 className="text-white fw-600 fs-22 accordion-header">
                                                <button
                                                    type="button"
                                                    aria-expanded="false"
                                                    className="accordion-button collapsed"
                                                >
                                                    What is the minimum commitment period after I invest via
                                                    Growpital?
                                                </button>
                                            </h2>
                                            <div className="accordion-collapse collapse">
                                                <div className="accordion-body">
                                                    <p>
                                                        To make your investment experience hassle-free, the
                                                        project entities just put a minimum committed period. If
                                                        you withdraw before the committed period ends, the
                                                        project entity would deduct all payouts given to you
                                                        from the original investment amount and pay the
                                                        remaining amount to you. This will result in no
                                                        profit/return to you. However, if you make any
                                                        withdrawal request after the committed period before the
                                                        maturity period, the original investment amount shall be
                                                        paid at that time; no future
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
                                                    {" "}
                                                    How are the investments structured?
                                                </button>
                                            </h2>
                                            <div className="accordion-collapse collapse">
                                                <div className="accordion-body">
                                                    <p>
                                                        Whenever any investor invests in our company, he/she
                                                        becomes a partner in our LLP firm and the amount
                                                        invested is considered as capital contribution and debt
                                                        to the LLP. The asset (farm projects) is owned by the
                                                        LLP and all the partners in the LLP are considered legal
                                                        co-owners.
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
                                                    {" "}
                                                    Are the returns guaranteed?{" "}
                                                </button>
                                            </h2>
                                            <div className="accordion-collapse collapse">
                                                <div className="accordion-body">
                                                    <p>
                                                        As we have a gross margin of 60-70% from every farmland
                                                        and after paying all the returns, land lease and
                                                        operating expenses we are left with a good buffer of
                                                        20-25%, we keep this buffer amount to hedge the risk
                                                        part. That’s why we can commit the guaranteed profit
                                                        share.
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
                                                    {" "}
                                                    What is the Investment process?{" "}
                                                </button>
                                            </h2>
                                            <div className="accordion-collapse collapse">
                                                <div className="accordion-body">
                                                    <p>
                                                        Once you complete the KYC process on the platform, we
                                                        will create a wallet on Growpital which you can use to
                                                        only invest into the opportunities listed on the
                                                        Growpital. You can add funds to your wallet at any time
                                                        and can invest your desired amount into the available
                                                        opportunities over Growpital
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
                                                    {" "}
                                                    How much is the minimum and maximum amount I can invest?
                                                </button>
                                            </h2>
                                            <div className="accordion-collapse collapse">
                                                <div className="accordion-body">
                                                    <p>
                                                        In order to provide this opportunity for as many retail
                                                        investors as possible, the price of one unit is kept as
                                                        low as INR 5,000/-. This provides you a fractional
                                                        ownership of the farm projects under your name as per
                                                        the amount invested by you.That said, you can buy as
                                                        many units as you want (subject to availability) and get
                                                        profit share in the same proportion.
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
                                                    {" "}
                                                    Is there any fee to invest through Growpital?{" "}
                                                </button>
                                            </h2>
                                            <div className="accordion-collapse collapse">
                                                <div className="accordion-body">
                                                    <p>
                                                        No, there are no fees involved when you invest over
                                                        Growpital. You are also not charged when you withdraw
                                                        funds.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    data-aos="fade-up"
                                    data-aos-once="true"
                                    className="col-md-6 aos-init aos-animate"
                                >
                                    <div className="faqs-accordian accordion">
                                        <div className="mb-3 bg-transparent accordion-item">
                                            <h2 className="text-white fw-600 fs-22 accordion-header">
                                                <button
                                                    type="button"
                                                    aria-expanded="false"
                                                    className="accordion-button collapsed"
                                                >
                                                    {" "}
                                                    Do I need to wait till a project get completely funded?{" "}
                                                </button>
                                            </h2>
                                            <div className="accordion-collapse collapse">
                                                <div className="accordion-body">
                                                    <p>
                                                        No, farming in itself is perpetual. When new investment
                                                        comes in, operations on new acres are started. This
                                                        means that you can invest anytime.
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
                                                    {" "}
                                                    When are the Payout dates ?
                                                </button>
                                            </h2>
                                            <div className="accordion-collapse collapse">
                                                <div className="accordion-body">
                                                    <p>
                                                        All Payouts will be credited on the Financial quarter
                                                        end, i.e on 31st March, 30th June, 30th September and
                                                        31st December. For Banyan Tree plans payout dates are
                                                        31st March and 30th September. First and last payout
                                                        will be calculated on Pro-rata basis.
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
                                                    How can NRI invest?{" "}
                                                </button>
                                            </h2>
                                            <div className="accordion-collapse collapse">
                                                <div className="accordion-body">
                                                    <p>
                                                        NRIs can invest through NRO accounts. For KYC, they can
                                                        upload their documents in the portal
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
                                                    Where can I see payout simulation?
                                                </button>
                                            </h2>
                                            <div className="accordion-collapse collapse">
                                                <div className="accordion-body">
                                                    <p>
                                                        <a href="https://docs.google.com/spreadsheets/d/1debkk4HXouNzSmiI48PuygjlWazjcdhTpLqrm6bal6k/edit#gid=0">
                                                            Click here to see the payout simulation!
                                                        </a>
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
                                                    {" "}
                                                    Are the profit shares guaranteed?
                                                </button>
                                            </h2>
                                            <div className="accordion-collapse collapse">
                                                <div className="accordion-body">
                                                    <p>
                                                        The profit shares are projected revenues from farm
                                                        projects after sales of agri produce. So the revenues of
                                                        the farm project will deviate from crop to crop, but we
                                                        keep a satisfactory buffer to provide fixed profit
                                                        share.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-once="true"
                            className="col-12 aos-init aos-animate"
                        >
                            <div className="text-center mx-auto mb-3">
                                <p className="fw-500 fs-32 mb-3 py-3">Banking</p>
                            </div>
                            <div className="row">
                                <div
                                    data-aos="fade-up"
                                    data-aos-once="true"
                                    className="col-md-6 aos-init aos-animate"
                                >
                                    <div className="faqs-accordian accordion">
                                        <div className="mb-3 bg-transparent accordion-item">
                                            <h2 className="text-white fw-600 fs-22 accordion-header">
                                                <button
                                                    type="button"
                                                    aria-expanded="false"
                                                    className="accordion-button collapsed"
                                                >
                                                    How is my earning Tax Free?
                                                </button>
                                            </h2>
                                            <div className="accordion-collapse collapse">
                                                <div className="accordion-body">
                                                    <p>
                                                        There are no tax deduction on the returns received by
                                                        you as it is the share of profit given by the Farm
                                                        project entity, which is an LLP, as per section 10(2A).
                                                        The earnings of the LLP is agriculture income, and is
                                                        exempted under Section 10(1) of the Income Tax Act,1961
                                                        in India.
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
                                                    How do I exit/cancel my investment?
                                                </button>
                                            </h2>
                                            <div className="accordion-collapse collapse">
                                                <div className="accordion-body">
                                                    <p>
                                                        You can cancel your investment anytime by logging in
                                                        your Growpital account. Once you do cancel, it may take
                                                        up to 24 hours to reflect money in your wallet as per
                                                        the date of cancellation in line with terms and
                                                        conditions of minimum committed period, which can then
                                                        be withdrawn into your linked bank account.
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
                                                    {" "}
                                                    Who takes care of the maintenance of Assets?
                                                </button>
                                            </h2>
                                            <div className="accordion-collapse collapse">
                                                <div className="accordion-body">
                                                    <p>
                                                        Growpital, along with its partners take care of the
                                                        regular development, maintenance and performance of the
                                                        farm projects.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    data-aos="fade-up"
                                    data-aos-once="true"
                                    className="col-md-6 aos-init aos-animate"
                                >
                                    <div className="faqs-accordian accordion">
                                        <div className="mb-3 bg-transparent accordion-item">
                                            <h2 className="text-white fw-600 fs-22 accordion-header">
                                                <button
                                                    type="button"
                                                    aria-expanded="false"
                                                    className="accordion-button collapsed"
                                                >
                                                    {" "}
                                                    How to show these returns in my ITR?{" "}
                                                </button>
                                            </h2>
                                            <div className="accordion-collapse collapse">
                                                <div className="accordion-body">
                                                    <p>
                                                        You will need to additionally fill ITR form 3 when you
                                                        submit your income tax returns.
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
                                                    {" "}
                                                    How are my returns transferred?{" "}
                                                </button>
                                            </h2>
                                            <div className="accordion-collapse collapse">
                                                <div className="accordion-body">
                                                    <p>
                                                        You payouts will be transferred to your Growpital wallet
                                                        as per the schedule/frequency of payout mentioned in the
                                                        opportunity. You can withdraw your wallet amount anytime
                                                        to your KYC verified bank account.
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
                                                    {" "}
                                                    Unable to e-verify aadhaar?
                                                </button>
                                            </h2>
                                            <div className="accordion-collapse collapse">
                                                <div className="accordion-body">
                                                    <p>
                                                        In case you are unable to e-verify aadhaar from our
                                                        website, You can upload your document from the profile
                                                        section and the team will verify it manually from the
                                                        backend. Please note it may take up to 24 hours for the
                                                        verification process.
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
            </section>
        </div>
    </>)
} 