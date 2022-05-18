import { render, screen } from "@testing-library/react";
import FormCard from "./FormCard";


describe("FormCard", () => {

    test("Include children", () => {
        const someText = "fgdsgtre45trer";
        render(<FormCard>{someText}</FormCard>);
        const contentElement = screen.getByText(someText);
        expect(contentElement).toBeInTheDocument();
    });

    test("With header", () => {
        const header = "Header text";
        render(<FormCard header={header}/>);
        const contentElement = screen.getByText(header);
        expect(contentElement).toBeInTheDocument();
    });

    test("With loader", () => {
        render(<FormCard loading/>);
        const formContentElement = screen.getByTestId("form-content");
        const contentElement = screen.getByRole("progressbar");
        expect(contentElement).toBeInTheDocument();
        expect(formContentElement).toHaveClass("_loading");

    });

    test("Without loader", () => {
        render(<FormCard/>);
        const formContentElement = screen.getByTestId("form-content");
        const contentElement = screen.queryByRole("progressbar");
        expect(contentElement).not.toBeInTheDocument();
        expect(formContentElement).not.toHaveClass("_loading");
    });

});
