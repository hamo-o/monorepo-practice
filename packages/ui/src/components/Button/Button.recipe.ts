import { styled } from "../../../styled-system/jsx/index";
import { cva } from "../../../styled-system/css/index";

const buttonRecipe = cva({
  base: {
    width: "100%",
    minWidth: 90,
    padding: "1rem 0",

    borderRadius: "0.5rem",
  },
  variants: {
    style: {
      solid: {
        color: "#FFFFFF",
        bg: "#368FF7",
        _default: {
          bg: "#368FF7",
        },
        _pressed: {},
        _hover: {
          bg: "#368FF7",
        },
        _disabled: {
          bg: "#C2C2C2",
        },
      },
      outline: {
        bg: "#FFFFFF",
        color: "#368FF7",
        border: "1px solid #368FF7",
        _default: {
          color: "#368FF7",
          borderColor: "#368FF7",
        },
        _pressed: {},
        _hover: {},
        _disabled: {
          color: "#C2C2C2",
          borderColor: "#C2C2C2",
        },
      },
    },
  },
  defaultVariants: {
    style: "solid",
  },
});

type Style = "solid" | "outline";

export interface ButtonVariants {
  style: Style;
}

export const ButtonRecipe = styled("button", buttonRecipe);
