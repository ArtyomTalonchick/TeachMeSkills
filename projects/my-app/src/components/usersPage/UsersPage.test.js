import { render, screen, cleanup, findAllByTestId } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import "@testing-library/jest-dom/extend-expect";
import axios from "axios";

import UsersPage from "./UsersPage";

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

afterEach(() => {
    cleanup();
});


jest.mock("axios");
jest.mock("./card/UsersPageCard", () => ({user}) => <span data-testid="user-card">{user.login}</span>);
jest.mock("../../hoc/withAuth", () => {
    return {
        withAuth: (component) => component
    }
});

describe("User card", () => {
    it("Avatar rendering", async () => {
        axios.get.mockResolvedValueOnce(response);
        
        const { findAllByTestId } = render(<UsersPage/>);

        const cards = await findAllByTestId("user-card");
        expect(cards).toHaveLength(2);
        expect(cards[0]).toHaveTextContent(/AlexName/i);
        expect(cards[1]).toHaveTextContent(/Tom/i);
    });

})