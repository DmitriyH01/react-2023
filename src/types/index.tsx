export type HtmlProps<T extends Object> = {
  props: T[];
};

export type HTMLProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
