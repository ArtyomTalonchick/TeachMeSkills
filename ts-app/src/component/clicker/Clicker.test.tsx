import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { Provider } from "react-redux";

import { getStore } from "../../store/store";
import Clicker from "./Clicker";

const renderWithRedux = (component: JSX.Element) => render(<Provider store={getStore()}>{component}</Provider>)

describe("Clicker", () => {
    
    test("default", () => {
        renderWithRedux(<Clicker/>);
        expect(screen.getByText("0")).toBeInTheDocument();
    });

    test("click plus", () => {
        renderWithRedux(<Clicker/>);
        userEvent.click(screen.getByText("+"));
        expect(screen.getByText("1")).toBeInTheDocument();
    });


    test("click minus", () => {
        renderWithRedux(<Clicker/>);
        const minusElement = screen.getByText("-");
        userEvent.click(minusElement);
        userEvent.click(minusElement);

        expect(screen.getByText("-2")).toBeInTheDocument();
    });


    test("click reset", () => {
        renderWithRedux(<Clicker/>);
        const minusElement = screen.getByText("-");
        userEvent.click(minusElement);
        userEvent.click(minusElement);

        userEvent.click(screen.getByText(/reset/i));

        expect(screen.getByText("0")).toBeInTheDocument();
    });

});