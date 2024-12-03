import { render, screen } from "@testing-library/react";
import { customTestWrapper } from "utils/testUtils";
import { Wrapper } from "..";

describe("Wrapper Component", () => {
  it("renders the wrapper and children correctly", () => {
    render(
      <Wrapper>
        <p>Test Content</p>
      </Wrapper>,
      { wrapper: customTestWrapper }
    );

    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });
});
