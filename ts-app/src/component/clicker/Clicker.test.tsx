import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";

import store from "../../store/store";
import Clicker from "./Clicker";
import userEvent from "@testing-library/user-event";

const renderWithRedux = (component: JSX.Element) => ({...render(<Provider store={store}>{component}</Provider>)});


describe("Clicker", () => {

    test("default", () => {
        renderWithRedux(<Clicker/>);
        expect(screen.getByText("0")).toBeInTheDocument();
    });

    test("single plus", () => {
        renderWithRedux(<Clicker/>);
        const plusElement = screen.getByText("+");

        userEvent.click(plusElement);
        expect(screen.queryByText("0")).not.toBeInTheDocument();
        expect(screen.getByText("1")).toBeInTheDocument();
    });

    test("several pluses", () => {
        renderWithRedux(<Clicker/>);    
        const plusElement = screen.getByText("+");

        userEvent.click(plusElement);
        userEvent.click(plusElement);
        userEvent.click(plusElement);
        expect(screen.getByText("4")).toBeInTheDocument();
    });

    test("single minus", () => {
        renderWithRedux(<Clicker/>);    
        const minusElement = screen.getByText("-");

        userEvent.click(minusElement);
        expect(screen.getByText("3")).toBeInTheDocument();
    });

    test("reset", () => {
        renderWithRedux(<Clicker/>);
        const resetElement = screen.getByText(/reset/i);

        userEvent.click(resetElement);
        expect(screen.getByText("0")).toBeInTheDocument();
    });
});