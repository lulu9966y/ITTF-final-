import React from "react";
import "./footer.css";

export default class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
          <path
            d="M 90 30 C 94.971 30 99 34.029 99 39 C 99 43.971 94.971 48 90 48 C 85.029 48 81 43.971 81 39 C 81 34.029 85.029 30 90 30 Z"
            fill="rgba(245, 244, 242, 1.00)"
          />
          <path
            d="M 27 50 L 33 50 L 24 72 L 18 72 Z"
            fill="rgba(245, 244, 242, 1.00)"
          />
          <path
            d="M 36 50 L 50 50 L 48.5 55 L 43.955 55 L 37 72 L 31 72 L 37.955 55 L 34.5 55 Z"
            fill="rgba(245, 244, 242, 1.00)"
          />
          <path
            d="M 96 50 L 94.5 55 L 85.955 55 L 84.727 58 L 91 58 L 89.5 63 L 82.682 63 L 79 72 L 73 72 L 82 50 Z"
            fill="rgba(245, 244, 242, 1.00)"
          />
          <path
            d="M 53 50 L 67 50 L 65.5 55 L 60.955 55 L 54 72 L 48 72 L 54.955 55 L 51.5 55 Z"
            fill="rgba(245, 244, 242, 1.00)"
          />
          <path
            d="M 61.307 4.358 L 73.431 11.358 L 63.061 29.32 C 70.879 34.735 76 43.77 76 54 C 76 70.569 62.569 84 46 84 C 41.858 84 37.912 83.161 34.323 81.642 C 30.733 80.124 27.501 77.928 24.787 75.213 C 24.687 75.113 24.587 75.012 24.489 74.911 L 28.025 71.375 C 32.57 76.077 38.944 79 46 79 C 59.807 79 71 67.807 71 54 C 71 44.084 65.227 35.516 56.858 31.475 L 67.03 13.858 L 62.699 11.358 L 54.882 24.897 L 50.807 22.544 Z"
            fill="rgba(245, 244, 242, 1.00)"
          />
          <path
            d="M 2 85 L 95 85 L 95 95 L 90 95 L 90 90 L 2 90 Z"
            fill="rgba(245, 244, 242, 1.00)"
          />
        </svg> */}
        <img id="socials" src={require("../photos/socials.png")} width="200"/>
        <div className="Bottom" />
      </div>
    );
  }
}