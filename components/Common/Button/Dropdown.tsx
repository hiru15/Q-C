import clsx from 'clsx';
import dynamic from 'next/dynamic';
import { Image } from '@components/Common/Image/index';
import { number } from 'yup/lib/locale';
import { memo } from "react";
const SmallText = dynamic(()=>import('@components/Common/SmallText/index'));
export interface IDropdownButton {
  label?: string;
  itemSelected: any | Number;
  iconInDrop?: string;
  setItemSelected(item: any): void;
  listItem: Array<any>;
  classNameButton?: string,
  classNameDropdownButton?: string,
  classNameDropDownItem?: string,
  id?: any,
  w50?: boolean;
  w75?: boolean;
  w100?: boolean;
  w50m?: boolean;
  w75m?: boolean;
  w100m?: boolean;
  smallText?: string;
  disabled?: boolean;
}
const DropdownButton = ({
  label,
  itemSelected,
  setItemSelected,
  listItem = [],
  classNameButton,
  classNameDropdownButton,
  classNameDropDownItem,
  id,
  w50,
  w75,
  w100,
  w50m,
  w75m,
  w100m,
  smallText,
  disabled,
  iconInDrop
}: IDropdownButton) => {
  return (
    <div className="dropdown">
      {label && (<label htmlFor={id}>{label}</label>)}
      <button
        className={clsx(
          'dropdown-toggle',
          classNameButton
        )}
        type="button"
        id={id}
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        w-50={w50 ? "true" : null}
        w-75={w75 ? "true" : null}
        w-100={w100 ? "true" : null}
        w-50-m={w50m ? "true" : null}
        w-75-m={w75m ? "true" : null}
        w-100-m={w100m ? "true" : null}
        disabled={disabled || listItem?.length === 0}
      >
        {iconInDrop && (
          <Image
            alt="icon.jpg"
            src={iconInDrop}
            layout="intrinsic"
            width={27}
            aspectRatio="3:2"
          />
        )}
        {itemSelected?.img && (
          <Image
            alt="icon.jpg"
            src={itemSelected?.img}
            layout="intrinsic"
            width={27}
            aspectRatio="3:2"
          />
        )}
        {itemSelected?.name && (
          <span className="ml-1">{itemSelected.name}</span>
        )}
        {!itemSelected?.name && (
          <span className="ml-1">{(itemSelected === '56' || itemSelected === '51') && '+'} {itemSelected}</span>
        )}
      </button>
      {listItem?.length > 0 && (
        <div
          className={clsx(
            'dropdown-menu bar',
            classNameDropdownButton
          )}
          style={{ width: '100%', maxHeight: '200px', overflowY: 'scroll' }}
          aria-labelledby="dropdownMenuButton"
        >
          {listItem?.map((element, index) => {
            return (
              <a
                className={clsx(
                  'dropdown-item',
                  classNameDropDownItem
                )}
                style={{ cursor: 'pointer' }}
                key={index}
                w-100={w100 ? "true" : null}
                onClick={(e) => {
                  e.preventDefault();
                  setItemSelected(element);
                }}
              >
                {element?.name && (
                  <span>{element.name}</span>
                )}
                {element?.code && !element?.name && (
                  <span>+ {element.code}</span>
                )}
              </a>
            );
          })}
        </div>
      )}
      {smallText && (
        <SmallText
        text={smallText}
        />
      )}
    </div>
  );
};
export default memo(DropdownButton);
