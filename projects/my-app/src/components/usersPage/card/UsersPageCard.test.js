import { render, screen, cleanup } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import "@testing-library/jest-dom/extend-expect";

import UsersPageCard from "./UsersPageCard";

jest.mock("../modal/UsersPageModal", () => ({ 
    UsersPageModal: ({onClose}) => <button data-testid="modal" onClick={onClose}/>
}));

afterEach(() => {
    cleanup();
});

const avatar_url = "https://avatars.githubusercontent.com/u/1?v=4";
const user = {
    "id": 1,
    avatar_url,
    "login": "AlexName",
    "html_url": "https://github.com/mojombo",
    "type": "User",
}

describe("User Card", () => {

    test("Data rendering", () => {
        const { getByAltText, getByText } = render(<UsersPageCard user={user}/>);

        expect(getByAltText(/Avatar/i)).toHaveAttribute("src", avatar_url);
        expect(getByText(/alexname/i)).toBeInTheDocument();
    })

    test("Open and close modal", () => {
        const { getByAltText } = render(<UsersPageCard user={user}/>);
        
        userEvent.click(getByAltText(/Avatar/i));
        expect(screen.getByTestId("modal")).toBeInTheDocument();

        userEvent.click(screen.getByRole("button"));
        expect(screen.queryByTestId("modal")).not.toBeInTheDocument();
    })
});
