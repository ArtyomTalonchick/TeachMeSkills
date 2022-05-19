import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import axios from "axios";

import store from "../../store/store";
import MyPostsPage from "./MyPostsPage";

jest.mock("axios");
jest.mock("../postsPage/card/PostCard", () => ({ data }: any) => <span data-testid="card">{data.title}</span>);

const renderWithRedux = (component: JSX.Element) => ({...render(<Provider store={store}>{component}</Provider>)});

describe("MyPostsPage", () => {

    test("Loading", async () => {
        (axios.request as jest.Mock).mockResolvedValue({data: []});

        renderWithRedux(<MyPostsPage/>);
        expect(screen.getByText(/load/i)).toBeInTheDocument();
        expect(screen.queryByText(/error/i)).not.toBeInTheDocument();
        expect(screen.getByTestId("cards")).toHaveTextContent("");
    });

    test("Success", async () => {
        (axios.request as jest.Mock).mockResolvedValue({
            data: [
                {
                    "id":1,
                    "title":"title1",
                    "date":"2021-10-06",
                },
                {
                    "id":2,
                    "title":"title2",
                    "date":"2021-10-06",
                },
            ],
        });

        renderWithRedux(<MyPostsPage/>);
        const cardCollection = await screen.findAllByTestId("card");
        expect(cardCollection).toHaveLength(2);
        expect(cardCollection[0]).toHaveTextContent(/title1/i);
        expect(cardCollection[1]).toHaveTextContent(/title2/i);

        expect(screen.queryByText(/error/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/load/i)).not.toBeInTheDocument();
    });

    test("Error", async () => {
        (axios.request as jest.Mock).mockRejectedValue(null);
        renderWithRedux(<MyPostsPage/>);
        expect(await screen.findByText(/error/i)).toBeInTheDocument();
        expect(screen.queryByText(/load/i)).not.toBeInTheDocument();
        expect(screen.getByTestId("cards")).toHaveTextContent("");
    });

});