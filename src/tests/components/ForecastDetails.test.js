import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("ForecastDetails", () => {
  const validProps = [
    {
      date: 123123123,
      temperature: {
        max: 11,
        min: 4,
      },
      wind: {
        speed: 13,
        direction: "s",
      },
      humidity: 30,
    },
  ];

  it("renders correctly", () => {
    const { asFragment } = render(<ForecastDetails forecasts={validProps} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
