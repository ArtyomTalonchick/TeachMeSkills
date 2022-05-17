import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import axios from "axios";


import store from "../../../store/store";
import Username from "./Username";
// jest.mock("../../../helpers/sagaApi", () => ({
//     get: () => Promise.resolve({
//         username: "testName",
//         id: 0,
//         email: "test@email.com",
//     })
// }));

jest.mock("axios");

const renderWithRedux = (component: JSX.Element) => ({...render(<Provider store={store}>{component}</Provider>)});

afterEach(() => {
    cleanup();
});

describe("UserName", () => {

    // test("loading", () => {
    //     renderWithRedux(<Username/>);

    //     const usernameElement = screen.queryByTestId("username");
    //     expect(usernameElement).not.toBeInTheDocument();
    // });

    test("loaded", async () => {
        (axios.request as jest.Mock).mockResolvedValue({
            data: {
                username: "testName",
                id: 0,
                email: "test@email.com",
            }
        });

        renderWithRedux(<Username/>);

        const usernameElement = await screen.findByText("testName");
        expect(usernameElement).toBeInTheDocument();
    });
});
