import { render, screen, cleanup } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import "@testing-library/jest-dom/extend-expect";

import UsersPageCard from "./UsersPageCard";

afterEach(() => {
    cleanup();
});

jest.mock("../modal/UsersPageModal", () => ({ 
    UsersPageModal: ({onClose}) => <button data-testid="modal" onClick={onClose}/>
}));

const avatar_url = "https://avatars.githubusercontent.com/u/1?v=4";
const user = {
    "id": 1,
    avatar_url,
    "login": "AlexName",
    "html_url": "https://github.com/mojombo",
    "type": "User",
}

describe("User card", () => {

    it("Avatar rendering", () => {
        const { getByAltText } = render(<UsersPageCard user={user}/>);

        expect(getByAltText(/Avatar/i)).toHaveAttribute("src", avatar_url);
    });

    it("Name rendering", () => {
        const { getByText } = render(<UsersPageCard user={user}/>);

        expect(getByText(/AlexName/i)).toBeInTheDocument();
    });

    
    it("Open Modal", () => {
        const { getByTestId } = render(<UsersPageCard user={user}/>);

        userEvent.click(getByTestId("user-card"));
        expect(screen.getByTestId("modal")).toBeInTheDocument();
    });
    
    it("Close Modal", () => {
        const { getByTestId } = render(<UsersPageCard user={user}/>);

        userEvent.click(getByTestId("user-card"));
        userEvent.click(screen.getByTestId("modal"));
        expect(screen.queryByTestId("modal")).not.toBeInTheDocument();
    });

})