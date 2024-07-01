import test1 from "../assets/testi1.webp"
import test2 from "../assets/testi2.webp"
import test3 from "../assets/testi3.png"
import test4 from "../assets/testi4.jpg"

import { FaStar } from "react-icons/fa6";

const TESTI = [
    {
        id: 1,
        name: 'Jhon',
        rate: 4,
        img: test1,
        comment: 'Really enjoyed the atmosphere.'
    }, {
        id: 2,
        name: 'smith',
        rate: 4.5,
        img: test2,
        comment: 'The greek salad was excellent!'
    }
    ,
    {
        id: 3,
        name: 'Neha',
        rate: 4.5,
        img: test3,
        comment: 'You have to try the Greek Salad!'
    },
    {
        id: 4,
        name: 'Selena',
        rate: 4.5,
        img: test4,
        comment: 'Awesome place peaceful atmosphere with delicious food'
    }
]

export default function Testimonials() {
    return (
        <div className="testimonials">
            <section>
                {TESTI.map(testi => (
                    <div key={testi.id} className="card">
                        <div className="left">
                            <img src={testi.img} />
                        </div>
                        <div className="right">
                            <p className="rate">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </p>
                            <h4 className="name">{testi.name}</h4>
                            <p className="comment">{testi.comment}</p>
                        </div>
                    </div>
                ))}

            </section>
        </div>
    )
}