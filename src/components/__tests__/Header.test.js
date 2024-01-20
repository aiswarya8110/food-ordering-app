import Header from '../Header';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../utils/appStore';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

test("Should render the Header Component with login button", ()=>{
    render(
        <BrowserRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    // const loginButton = screen.getByRole("button");
    const loginButton = screen.getByText("login");
    expect(loginButton).toBeInTheDocument();
})

test("Should render the Header Component with Cart - 0 items", ()=>{
    render(
        <BrowserRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
    const cartItems = screen.getByText("Cart(0)");
    expect(cartItems).toBeInTheDocument();
})

test("Should render the Header Component with Cart items", ()=>{
    render(
        <BrowserRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
    const cartItems = screen.getByText(/Cart/);
    expect(cartItems).toBeInTheDocument();
})

test("Should render logout btn when login btn is clicked", ()=>{
    render(
        <BrowserRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByText("login");

    fireEvent.click(loginButton);

    const logoutBtn = screen.getByText("logout");

    expect(logoutBtn).toBeInTheDocument();
})

// 1. Render
// 2. Query
// 3. Assert