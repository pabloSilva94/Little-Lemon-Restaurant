import { useEffect, useState } from "react"

const todayDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const dd = String(today.getDate()).padStart(2, '0');
    const todayDate = `${yyyy}-${mm}-${dd}`;
    return todayDate
}

export default function BookingForm({ submitForm, availableTimes = [], dispatch }) {
    const [date, setDate] = useState('');

    const [error, setError] = useState({
        date: '',
        time: '',
        guests: '',
        occasion: ''
    })

    const [form, setForm] = useState({
        time: '',
        guests: '',
        occasion: ''
    })

    useEffect(() => {

        if (date.length > 0 && date > todayDate()) setError({ ...error, date: '' })
        if (form.time > 0) setError({ ...error, time: '' })
        if (form.guests.length > 0 && form.guests <= 10 && form.guests > 0) setError({ ...error, guests: '' })
        if (form.occasion.length > 0) setError({ ...error, occasion: '' })

    }, [date, form.time, form.guests, form.occasion])


    const handleBlur = (field) => {
        const errorMessages = {
            date: 'You have to pick a date',
            guests: 'You have to provide at least 1 guest',
            time: 'You have to pick a time',
            occasion: 'You have to pick an occasion'
        };


        if (form[field]?.length === 0 || (field === 'date' && date.length === 0)) {
            setError({
                ...error,
                [field]: errorMessages[field]
            });
        }

        if (field === 'time') {
            console.log('here')
            if (date.length === 0 || error.date.length > 0) {
                setError({
                    ...error,
                    time: 'You have to pick date first to select time'
                })
            } else {
                setError({
                    ...error,
                    time: ''
                })
            }
        }
    };

    const handleChangeDate = (e) => {
        setDate(e.target.value);
        dispatch(e.target.value);

        if (e.target.value < todayDate()) {
            setError({
                ...error,
                date: 'Select a date that comes after today'
            })
        } else {
            setError({
                ...error,
                date: ''
            })
        }
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })

    }

    const handleChangeGuests = (e) => {
        if (e.target.value > 10 || e.target.value <= 0) {
            setError({
                ...error,
                guests: 'Please enter number between 1 to 10'
            })
        } else {
            setError({
                ...error,
                guests: ''
            })
        }
        setForm({ ...form, guests: e.target.value })

    }

    const handleDisabled = () => {
        return Object.values(error).some((err) => err !== '') || !(date && form.time && form.guests && form.occasion);
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        submitForm({
            ...form,
            date
        })
    }

    return (
        <section className="reserve">
            <h1>Reserve Table</h1>
            <form onSubmit={handleSubmit}>
                <div className="fieldset">
                    <label htmlFor="date">Choose date</label>
                    <input
                        className={error.date ? 'invalid' : 'valid'}
                        onBlur={() => handleBlur('date')}
                        type="date"
                        id="date"
                        name="date"
                        value={date}
                        onChange={handleChangeDate}
                        min={todayDate()}
                        required />
                    {error.date && <span style={{ color: 'red' }}>{error.date}</span>}
                </div>
                <div className="fieldset">
                    <label htmlFor="time">Choose time</label>
                    <select
                        id="time"
                        name="time"
                        onChange={handleChange}
                        value={form.time}
                        onBlur={() => handleBlur('time')}
                        className={error.time ? 'invalid' : ''}
                        required
                    >
                        {error.date && <option hidden className="placeholder-option" value="">Choose date first</option>}
                        <option hidden className="placeholder-option" value="">Choose date first</option>
                        {(date.length > 0 && !error.date.length > 0) && availableTimes.map(time => (<option value={time} key={time}>{time}</option>))}
                    </select>
                    {error.time && <span style={{ color: 'red' }}>{error.time}</span>}
                </div>
                <div className="fieldset">
                    <label htmlFor="guests">Number of guests</label>
                    <input
                        type="number"
                        placeholder="A number between 1 to 10"
                        min="1"
                        max="10"
                        id="guests"
                        name="guests"
                        value={form.guests}
                        onChange={handleChangeGuests}
                        onBlur={() => handleBlur('guests')}
                        className={error.guests ? 'invalid' : ''}
                        required />
                    {error.guests && <span style={{ color: 'red' }}>{error.guests}</span>}
                </div>
                <div className="fieldset">
                    <label htmlFor="occasion">Occasion</label>
                    <select
                        id="occasion"
                        value={form.occasion}
                        name="occasion"
                        onChange={handleChange}
                        onBlur={() => handleBlur('occasion')}
                        className={error.occasion ? 'invalid' : ''}
                        required
                    >
                        <option hidden>Select an Occasion</option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                    {error.occasion && <span style={{ color: 'red' }}>{error.occasion}</span>}
                </div>

                <button disabled={handleDisabled()} aria-label="On Click" type="submit">Book Now</button>
            </form>
        </section>
    )
}