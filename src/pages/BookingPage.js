import { useState } from "react";
import BookingForm from "../components/BookingForm";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function BookingPage({ availableTimes, dispatch, submitForm }) {
    return (
        <>
            <Nav />
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
            <Footer />
        </>
    )
}