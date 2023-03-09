type typeSize = 'x' | 'xs' | 'xss';

type ButtonCustomProps = {
  size: typeSize;
  content: string;
  layout?: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;

  iconRight?: string;
  iconLeft?: string;
  outline?: boolean;
  danger?: boolean;
  full?: boolean;
};

export type textType = `text${typeSize}`;

export default ButtonCustomProps;
