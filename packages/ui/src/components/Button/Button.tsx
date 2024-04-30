import { ButtonRecipe, ButtonVariants } from "./Button.recipe";

export interface ButtonProps extends ButtonVariants {
  text: string;
}

export const Button = (props: ButtonProps) => {
  return <ButtonRecipe {...props}>{props.text}</ButtonRecipe>;
};
