import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("ForecastDetails", () => {
  const validProps = [
    {
      date: 1111111,
      humidity: 30,
      temperature: {
        max: 11,
        min: 4,
      },
      wind: {
        speed: 13,
        direction: "s",
      },
    },
  ];

  it("renders correctly", () => {
    const { asFragment } = render(<ForecastDetails forecast={validProps[0]} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
