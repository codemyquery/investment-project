
import { footerlogo} from "../../assets"

interface footerlogo {
    className: string
}
export const footerLogo = ({ className }: footerlogo) => {
    return <a href="/" className={className}>
        <img
        src={footerlogo}
        alt="logo"
        className="img-fluid"
        style={{ width: "12rem" }}
    />
        {/* <b style={{ color: "white", fontWeight: "50px" }}>Virtual Property</b> */}
    </a>
}