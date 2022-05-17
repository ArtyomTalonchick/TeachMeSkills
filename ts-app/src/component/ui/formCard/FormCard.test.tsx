import { render, screen } from "@testing-library/react";
import FormCard from "./FormCard";

describe("FormCard", () => {
    // test("FormCard without loading", () => {
    //     render(<FormCard/>);
    //     const formElement = screen.getByRole("form");
    //     expect(formElement).not.toHaveClass("_loading");
    //     const loadingElement = screen.queryByRole("progressbar");
    //     expect(loadingElement).not.toBeInTheDocument();
    // });
    
    // test("FormCard with loading", () => {
    //     render(<FormCard loading/>);
    //     const loadingElement = screen.getByRole("progressbar");
    //     expect(loadingElement).toBeInTheDocument();
    // });
    
    // test("FormCard without header", () => {
    //     render(<FormCard/>);
    //     const headerElement = screen.queryByRole("heading");
    //     expect(headerElement).not.toBeInTheDocument();
    // });
    
    test("FormCard with header", () => {
        render(<FormCard header="some text title"/>);
        const headerElement = screen.getByText("some text title");
        expect(headerElement).toBeInTheDocument();
    });
});
