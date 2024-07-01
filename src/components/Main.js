import HomePage from "../pages/Homepage"
import BookingPage from "../pages/BookingPage"
import ConfirmedBooking from "./ConfirmedBooking"

import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route,
    useNavigate,

} from "react-router-dom"

import { useReducer } from "react"

const updateTimes = (state, { type, payload }) => {
    return { availableTimes: fetchAPI(new Date()) }
}


const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

const fetchAPI = (date) => {
    let result = [];
    let random = seededRandom(date.getDate());

    for (let i = 17; i <= 23; i++) {
        if (random() < 0.5) {
            result.push(i + ':00');
        }
        if (random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;

}

const initializeTimes = {
    availableTimes: fetchAPI(new Date())
}

const submitAPI = (formData) => {
    return true
}

const WrapperBookingBage = ({ dispatch, availableTimes }) => {
    const navigate = useNavigate();

    const submitForm = (formData) => {
        const formDataJson = JSON.stringify(formData);
        const existingFormData = localStorage.getItem('formData')

        if(existingFormData) {
            localStorage.setItem('formData', formDataJson)
        } else {
            localStorage.setItem('formData', formDataJson)
        }

        if (submitAPI(formData)) {
            navigate('/confirmed')
        }
    }

    return <BookingPage dispatch={dispatch} availableTimes={availableTimes} submitForm={submitForm} />
}

export default function Main() {
    const [state, dispatch] = useReducer(updateTimes, initializeTimes)

    const router = createBrowserRouter(
        createRoutesFromElements([
            <>
                <Route path="/" element={<HomePage />} />
                <Route path="/booking" element={<WrapperBookingBage
                    dispatch={dispatch}
                    availableTimes={state.availableTimes}
                />}
                />
                <Route path="/confirmed" element={<ConfirmedBooking />} />
            </>

        ])
    )
    return (
        <main>
            <RouterProvider router={router} />
        </main>
    )
}