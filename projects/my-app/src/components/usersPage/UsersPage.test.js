import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import axios from "axios";
import { Provider } from "react-redux";

import UsersPage from "./UsersPage";

import store from "../../store/store";

jest.mock("axios");
jest.mock("../loader/Loader", () => () => <span>Loading</span>);
jest.mock("./card/UsersPageCard", () => ({user}) => <span data-testid="user-card">{user.login}</span>);
jest.mock("../../hoc/withAuth", () => {
    return {
        withAuth: (component) => component
    }
});

const renderwithRedux = (component) => ({...render(<Provider store={store}>{component}</Provider>)});

afterEach(() => {
    cleanup();
});

const response = {
    data: [
        {
            "id": 1,
            "login": "AlexName",
        },
        {
            "id": 2,
            "login": "Tom",
        },
    ]
}

describe("Users Page", () => {
    describe("Response process", () => {
        test("Success response", async () => {
            axios.get.mockResolvedValueOnce(response);

            const { findAllByTestId } = renderwithRedux(<UsersPage/>);

            const cards = await findAllByTestId("user-card");
            expect(cards).toHaveLength(2);
            expect(cards[0]).toHaveTextContent(/AlexName/i);
            expect(cards[1]).toHaveTextContent(/Tom/i);
        })

        test("Failed response", async () => {
            axios.get.mockRejectedValueOnce(new Error());

            const { findByText } = renderwithRedux(<UsersPage/>);
            expect(await findByText(/error/i)).toBeInTheDocument();
        })
    })

    describe("Show loader", () => {
        test("Success response", async () => {
            axios.get.mockResolvedValueOnce(response);

            const { getByText, findByText } = renderwithRedux(<UsersPage/>);
            expect(getByText(/Loading/i)).toBeInTheDocument();
            expect(await findByText(/Loading/i)).not.toBeInTheDocument();
        })

        test("Failed response", async () => {
            axios.get.mockRejectedValueOnce(new Error());

            const { getByText, findByText } = renderwithRedux(<UsersPage/>);
            expect(getByText(/Loading/i)).toBeInTheDocument();
            expect(await findByText(/Loading/i)).not.toBeInTheDocument();
        })
    })
});