import Footer from "./Footer";
import Nav from "./Nav";
import cofirm from "../assets/undraw_order_confirmed_re_g0if.svg"

export default function ConfirmedBooking() {
    return (
        <div className="cofirm">
            <Nav />
            <div className="card">
                <h1>Booking has been confirmed</h1>
                <img src={cofirm} />
            </div>
            <Footer />
        </div>
    )
}