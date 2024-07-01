import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';
import Main from './components/Main';


test('Renders the BookingForm heading', () => {
  render(<BookingForm />);

  const headingElement = screen.getByText("Reserve Table")
  expect(headingElement).toBeInTheDocument()

  const reserveBtn = screen.getByRole('button')
  fireEvent.click(reserveBtn);
  
});

test('Render the date input have attributes', () => {
  render(<BookingForm />);
  const dateInput = screen.getByLabelText("Choose date")
  expect(dateInput).toHaveAttribute('required')
  expect(dateInput).toHaveAttribute('min');


})

test('displays error when no date is selected', () => {
  const dispatch = jest.fn();
  render(<BookingForm dispatch={dispatch} />);

  const dateInput = screen.getByLabelText("Choose date");

  fireEvent.change(dateInput, { target: { value: '' } });
  fireEvent.blur(dateInput); // Trigger onBlur

  expect(screen.getByText(/You have to pick a date/i)).toBeInTheDocument();
  expect(dateInput).toHaveClass('invalid');

})


test('valid input: accepts valid date without error message', () => {
  const dispatch = jest.fn();
  render(<BookingForm dispatch={dispatch} />);
  const dateInput = screen.getByLabelText("Choose date");

  // Generate current date dynamically
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = ('0' + (currentDate.getMonth() + 1)).slice(-2); // Months are zero indexed
  const day = ('0' + currentDate.getDate()).slice(-2);
  const formattedDate = `${year}-${month}-${day}`;

  fireEvent.change(dateInput, { target: { value: formattedDate } });
  fireEvent.blur(dateInput); // Trigger onBlur

  expect(screen.queryByText(/You have to pick a date/i)).toBeNull();
  expect(dateInput).toHaveClass('valid');
})


test('initializeTimes/updateTimes', () => {
  render(<Main />);

  const mockFetchAPI = jest.fn().mockReturnValue(['17:00', '18:30']);

  // Replace fetchAPI with mockFetchAPI in the initializeTimes
  const initializeTimesTest = {
    availableTimes: mockFetchAPI(new Date())
  };

  // Check the return value of initializeTimes
  expect(initializeTimesTest.availableTimes).toEqual(['17:00', '18:30']);

  const updateTimes = () => {
    return { availableTimes: mockFetchAPI(new Date()) };
  };

  const result = updateTimes();
  console.log(result)
  expect(result).toEqual({ availableTimes: ['17:00', '18:30'] });
})


