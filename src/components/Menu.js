import card3 from "../assets/lemon dessert.jpg"
import card2 from "../assets/Bruchetta.png"
import card1 from "../assets/greek salad.jpg"

import { MdDeliveryDining } from "react-icons/md";

const MENU = [
    {
        id: 1,
        name: 'Greek salad',
        price: 12.99,
        description: '',
        img: card1
    },
    {
        id: 2,
        name: 'Bruchetta',
        price: 12.99,
        description: '',
        img: card2
    },
    {
        id: 3,
        name: 'Lemon Desert',
        price: 12.99,
        description: '',
        img: card3
    }
]

export default function Menu() {
    return (
        <section className="menu">
            <div className="title">
                <h1>This week specials!</h1>
                <button>Online menu</button>
            </div>

            <div className="menu_items">
                {MENU.map(menu => (
                    <div key={menu.id} className="card">
                        <img className="card_img" src={menu.img} />
                        <div className="card_body">
                            <div className="card_banner">
                                <h4>{menu.name}</h4>
                                <p>{menu.price}</p>
                            </div>
                            <p className="card_description">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                 Lorem Ipsum has been the industry's standard

                            </p>

                        </div>
                        <div className="card_footer">
                            <button aria-label="On Click">
                            Order a delivery
                                <span className="order_icon"><MdDeliveryDining /></span>
                            </button>
                        </div>

                    </div>
                ))}

            </div>


        </section>
    )
}