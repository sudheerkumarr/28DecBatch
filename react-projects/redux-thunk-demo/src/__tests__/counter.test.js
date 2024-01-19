import Counter from '../components/counter';
import { render, screen, fireEvent } from "@testing-library/react";

describe("Counter component test suite", () => {
    // define test cases

    test("verify counter component title is correct or not", () => {
        // Render Counter component into virtual dom
        const component = render(<Counter />);
        // Get title element by using testid
        const titleEle = component.getByTestId("title");
        // Compare title
        expect(titleEle.textContent).toBe("Counter Component");
    }); //test-end
    test("verify text on increment button", () => {
        // Render Counter component into virtual dom
        const component = render(<Counter />);
        // Get title element by using id
        const incrBtnEle = component.getByTestId("increment");
        // Compare title
        expect(incrBtnEle.textContent).toBe("Increment");
    }); // 2nd test end

    // getByRole
    test("verify text on decrement button", () => {
        // loading component into virtual dom
        render(<Counter />);
        // Getting element from virutal dom
        const decrBtnElem = screen.getByRole("button", { name: "Decrement" });
        // Verify button text
        expect(decrBtnElem.textContent).toBe("Decrement");
    }); // 3rd test end
})
