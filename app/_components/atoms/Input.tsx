import { ReactNode } from "react";
import { Input as AntInput, InputProps } from "antd";
interface IButtonProps extends InputProps {
  children: ReactNode;
}

const Input: React.FunctionComponent<IButtonProps> = ({
  ...restProps
}) => {
  return <AntInput {...restProps} />;
};

export default Input;
