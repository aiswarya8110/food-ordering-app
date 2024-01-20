import { getAllByRole, render, screen } from '@testing-library/react';
import Contact from '../Contact';
import '@testing-library/jest-dom';

describe("Contact Us Page Test cases", ()=>{
    it("should load the Contact component", ()=>{
        render(<Contact />);
    
        const button = screen.getByText("Submit");
    
        expect(button).toBeInTheDocument();
    })
    
    it("Should load input name inside Contact Component", ()=>{
        render(<Contact />);
        // Querying
        const inputBox = screen.getByPlaceholderText("name")
        // Assertion
        expect(inputBox).toBeInTheDocument();
    });
    
    it("Should load input boxes ", ()=>{
        render(<Contact />);
    
        const inputBoxes = screen.getAllByRole("textbox");
        console.log(inputBoxes);
        expect(inputBoxes.length).toBe(2);
    })
})