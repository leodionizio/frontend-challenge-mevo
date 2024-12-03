import { ReactNode } from "react";
import { render, screen } from "@testing-library/react";
import { customTestWrapper } from "utils/testUtils";
import { Score } from "../Score";

describe("Score Component", () => {
  const renderComponent = (component: ReactNode, score?: number) =>
    render(component, {
      wrapper: ({ children }) =>
        customTestWrapper({
          children,
          playContextValues: { score },
        }),
    });

  it("should render score component title", () => {
    renderComponent(<Score />);

    expect(screen.getByRole("heading", { name: /score/i })).toBeInTheDocument();
  });

  it("should render the score value", () => {
    renderComponent(<Score />, 123);

    expect(screen.getByText("123")).toBeInTheDocument();
  });
});
