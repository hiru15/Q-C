import clsx from 'clsx';
import { memo } from "react";
const SubtitleTitle = (props : any) => {

  const createElement = ({ type, text, className }: any) => {
    switch(type){
      case 'h1': return (
                  <h1
                  className={clsx(
                    '',
                    className
                  )}
                  >{text}</h1>
                )
      case 'h2': return (
                  <h2
                  className={clsx(
                    '',
                    className
                  )}
                  >{text}</h2>
                 )
      case 'h3': return (
                  <h3
                  className={clsx(
                    '',
                    className
                  )}
                  >{text}</h3>
                 )
      case 'h4': return (
                  <h4
                  className={clsx(
                    '',
                    className
                  )}
                  >{text}</h4>
                 )
      case 'h5': return (
                  <h5
                  className={clsx(
                    '',
                    className
                  )}
                  >{text}</h5>
                 )
      case 'h6': return (
                  <h6
                  className={clsx(
                    '',
                    className
                  )}
                  >{text}</h6>
                 )
    }
  }

  return (
    <>
    {createElement(props)}
    </>
  );
};

export default memo(SubtitleTitle);
