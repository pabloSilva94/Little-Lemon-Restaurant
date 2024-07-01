import { Link } from "react-router-dom"
import restauranfood from "../assets/restauranfood.jpg"

export default function Header() {
    return (
        <header>
            <section>
                <div className="banner">
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>We are a family owned
                        Mediterranean restaurant, focused on traditional
                        recipes served with a modern twist.
                    </p>
                    <button>
                        <Link aria-label="On Click" to='/booking' style={{color: 'black'}}>Reserve table</Link>
                    </button>
                </div>
                <div className="banner_img">
                    <img src={restauranfood} alt="restauran header image " />
                </div>
            </section>

        </header>
    )
}