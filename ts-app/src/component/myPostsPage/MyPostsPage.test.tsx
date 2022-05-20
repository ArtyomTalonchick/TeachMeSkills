import { render, screen } from "@testing-library/react";
import axios from "axios";
import { Provider } from "react-redux";

import { getStore } from "../../store/store";
import MyPostsPage from "./MyPostsPage";

jest.mock("axios");
jest.mock("../postsPage/card/PostCard", () => ({ data }: any) => <div data-testid="card">{data.id}</div>);

const renderWithRedux = (component: JSX.Element) => render(<Provider store={getStore()}>{component}</Provider>)

describe("MyPostsPage", () => {
    
    test("loading", () => {
        (axios.request as jest.Mock).mockResolvedValueOnce(null);

        renderWithRedux(<MyPostsPage/>);
        expect(screen.getByText(/load/i)).toBeInTheDocument();
        expect(screen.queryByText(/error/i)).not.toBeInTheDocument();
        expect(screen.getByTestId("cards")).toHaveTextContent("");
    });

    test("error", async () => {
        (axios.request as jest.Mock).mockRejectedValueOnce(null);

        renderWithRedux(<MyPostsPage/>);

        expect(await screen.findByText(/error/i)).toBeInTheDocument();
        expect(screen.queryByText(/load/i)).not.toBeInTheDocument();
        expect(screen.getByTestId("cards")).toHaveTextContent("");
    });

    test("success", async () => {
        (axios.request as jest.Mock).mockResolvedValueOnce({
            data: [
                {"id":70,"image":"https://tms-studapi-dev.s3.amazonaws.com/media/____AVA.jpg","text":"Cat blog Cat blogCat blogCat blogCat blogCat blogCat blogCat blogCat blogCat blogCat blogCat blogCat blogCat blogCat blogCat blogCat blogCat blogCat blogCat blogCat blogCat blogCat blogCat blogCat blogCat blogCat blogCat blogCat blogCat blogCat blogCat blog","date":"2022-05-04","lesson_num":47,"title":"Cat blog","author":186},
                {"id":71,"image":"https://tms-studapi-dev.s3.amazonaws.com/media/____AVA.jpg","text":"Cat blog Cat blogCat blogCat blogCat blogCat blogCat blogCat blogCat blogCat blogCat blogCat blogCat blogCat blogCat blogCat blogCat blogCat blogCat blogCat blogCat blogCat blogCat blogCat blogCat blogCat blogCat blogCat blogCat blogCat blogCat blogCat blog","date":"2022-05-04","lesson_num":47,"title":"Cat blog","author":186}
            ],
        });

        renderWithRedux(<MyPostsPage/>);

        const cardsList = await screen.findAllByTestId("card");

        expect(screen.queryByText(/error/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/load/i)).not.toBeInTheDocument();
        expect(screen.getByTestId("cards")).not.toHaveTextContent("");

        expect(cardsList).toHaveLength(2);
        expect(cardsList[0]).toHaveTextContent("70");
        expect(cardsList[1]).toHaveTextContent("71");
    });

    test("success empty", async () => {
        (axios.request as jest.Mock).mockResolvedValueOnce({
            data: [],
        });

        renderWithRedux(<MyPostsPage/>);

        expect(await screen.findByText(/empty/i)).toBeInTheDocument();
        expect(screen.queryByText(/error/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/load/i)).not.toBeInTheDocument();
        expect(screen.getByTestId("cards")).toHaveTextContent(/empty/i);
    });

});