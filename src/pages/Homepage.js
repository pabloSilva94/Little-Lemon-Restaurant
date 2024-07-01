import Footer from "../components/Footer";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Nav from "../components/Nav";
import About from "../components/About"
import Testimonials from "../components/Testimonials";

export default function Homepage() {
    return (
        <>
            <Nav />
            <Header />
            <Menu />
            <Testimonials />
            <About />
            <Footer />
        </>
    )
}