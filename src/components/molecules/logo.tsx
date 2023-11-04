interface Logo {
    className: string
}
export const Logo = ({ className }: Logo) => {
    return <a href="/" className={className}>
        {/* <img
        src={logo}
        alt="logo"
        className="img-fluid"
        style={{ width: "12rem" }}
    /> */}
        <b style={{ color: "white", fontWeight: "50px" }}>Virtual Property</b>
    </a>
}