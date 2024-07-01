import img1 from "../assets/restaurant.jpg"
import img2 from "../assets/restaurant chef B.jpg"

export default function About() {
    return (
        <section className="about">
            <div>
                <h2>Our Story</h2>
                <p>Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant.
                    To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond
                    classic Italian to incorporate additional cuisines from the Mediterranean region.
                </p>
            </div>
            <div className="about_imgs">
                <img src={img1} className="img1" />
                <img src={img2} className="img2" />
            </div>
        </section>
    )
}