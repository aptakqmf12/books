import { IconProps } from ".";

export default function ArrowIcon({
  width = 14,
  height = 8,
  fill = "#B1B8C0",
  direction = "bottom",
}: IconProps & { direction: "up" | "bottom" | "right" | "left" }) {
  switch (direction) {
    case "bottom":
      return (
        <svg
          width={width}
          height={height}
          viewBox="0 0 14 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 -5.24537e-07L7 5L12 -8.74228e-08L14 1L7 8L-4.37114e-08 0.999999L2 -5.24537e-07Z"
            fill={fill}
          />
        </svg>
      );

    case "up":
      return (
        <svg
          width={width}
          height={height}
          viewBox="0 0 14 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 8L7 3L2 8L1.19249e-08 7L7 8.34742e-08L14 7L12 8Z"
            fill={fill}
          />
        </svg>
      );
    case "left":
      return (
        <svg
          width={width}
          height={height}
          viewBox="0 0 6 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 9.42857L3.75 5.5L0 1.57143L0.75 0L6 5.5L0.75 11L0 9.42857Z"
            fill={fill}
          />
        </svg>
      );
    case "right":
      return (
        <svg
          width={width}
          height={height}
          viewBox="0 0 6 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 1.57143L2.25 5.5L6 9.42857L5.25 11L-5.22165e-07 5.5L5.25 8.80614e-07L6 1.57143Z"
            fill={fill}
          />
        </svg>
      );
  }
}
