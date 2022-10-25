import clsx from 'clsx';
import { memo } from "react";
interface ISmallText {
  text: string,
  className?: string
}
const SmallText = ({
  text,
  className
}: ISmallText) => {
  return (
    <small id="help"
    className={clsx(
      'form-text text-muted',
      className
    )}
    >
      {text}
    </small>
  )
}
export default memo(SmallText);
