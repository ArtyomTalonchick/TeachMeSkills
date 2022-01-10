import React from 'react';
import { render } from "@testing-library/react"; 
import "@testing-library/jest-dom/extend-expect";

import axios from "axios";

import UserPage from './UserPage';

jest.mock("axios");
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({
        login: '1',
    }),
  }));

const response = {
    data: {
        "id": 1,
        "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",
        "login": "AlexName",
        "html_url": "https://github.com/mojombo",
        "type": "User",
    }
}

test('match snapshot', async () => {
    axios.get.mockResolvedValueOnce(response);

    const { asFragment, findByText } = render(<UserPage />)

    
    expect(await findByText("AlexName")).toBeInTheDocument();

        
    expect(asFragment()).toMatchSnapshot();
});