import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("checkout page renders", () =>{
    render(<CheckoutForm/>);
});

test("form header renders", () => {
    render(<CheckoutForm/>);
    //Act
    const headerElement = screen.queryByText(/Checkout Form/i);
    //console.log(headerElement)
});

test("form shows success message on submit with form details", async () => {

    render(<CheckoutForm/>)

    const button = screen.getByRole("button");
    userEvent.click(button);

    const success = await screen.getByTestId(/successMessage/i);
    expect(success).toBeInTheDocument();
});
