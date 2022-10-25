import clsx from "clsx";
import { memo } from "react";

interface ITitle {
  typeTitle: string,
  textTitle: string,
  className?: string,
  white?: boolean,
  noLine?: boolean,
  style?: string
}

const Title = (props: ITitle) => {
  const createElement = ({
    typeTitle,
    textTitle,
    className,
    white,
    noLine,
    style
  }: ITitle) => {
    switch (typeTitle) {
      case "h1":
        return (
          <h1
            className={clsx("", className)}
            no-line={noLine ? "true" : null}
            white={white ? "true" : null}
            style={style}
          >
            {textTitle}
          </h1>
        );
      case "h2":
        return (
          <h2
            className={clsx("", className)}
            no-line={noLine ? "true" : null}
            white={white ? "true" : null}
            style={style}
          >
            {textTitle}
          </h2>
        );
      case "h3":
        return (
          <h3
            className={clsx("", className)}
            no-line={noLine ? "true" : null}
            white={white ? "true" : null}
            style={style}
          >
            {textTitle}
          </h3>
        );
      case "h4":
        return (
          <h4
            className={clsx("", className)}
            no-line={noLine ? "true" : null}
            white={white ? "true" : null}
            style={style}
          >
            {textTitle}
          </h4>
        );
      case "h5":
        return (
          <h5
            className={clsx("", className)}
            no-line={noLine ? "true" : null}
            white={white ? "true" : null}
            style={style}
          >
            {textTitle}
          </h5>
        );
      case "h6":
        return (
          <h6
            className={clsx("", className)}
            no-line={noLine ? "true" : null}
            white={white ? "true" : null}
            style={style}
          >
            {textTitle}
          </h6>
        );
    }
  };

  return <>{createElement(props)}</>;
};

export default memo(Title);
