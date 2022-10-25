import Dropdown from '@components/Common/Button/Dropdown';
import type { IDropdownButton } from '@components/Common/Button/Dropdown';
import InputField from "@components/Common/Form/InputField";
import type { InputFieldProps } from '@components/Common/Form/InputField';
import { memo } from "react";

type InputWithDropdown = IDropdownButton & InputFieldProps & {
  idDropdown?: string;
  idInput: string;
  includeBadge: boolean;
};

const InputFieldWithDropdown = memo(
({
  label,
  itemSelected,
  setItemSelected,
  listItem,
  classNameButton,
  classNameDropdownButton,
  classNameDropDownItem,
  idDropdown,
  idInput,
  iconInDrop,
  type = 'text',
  className,
  registration,
  error,
  defaultValue,
  placeholder,
  name,
  w50,
  w75,
  w100,
  includeBadge,
  onChange,
  value,
  withWrapper = true
}: InputWithDropdown) => {
  return (
      <>
      <div
        include-badge={includeBadge ? "true" : null}
        className="form-group input-group"
        error={error?.type && 'true'}
      >
        <div style={{ display: 'flex', width: '100%' }}>
          <label style={{ top: 0 }} htmlFor={idDropdown}>
            {label}
          </label>

          <div className="input-group-prepend">
            <Dropdown
            iconInDrop={iconInDrop}
            itemSelected={itemSelected}
            listItem={listItem}
            id={idDropdown}
            setItemSelected={setItemSelected}
            classNameButton={classNameButton}
            />
          </div>
          <InputField
            registration={registration}
            className={className}
            type={type}
            id={idInput}
            name={name}
            htmlFor={idInput}
            value={value}
            defaultValue={defaultValue}
            placeholder={placeholder}
            onChange={onChange}
            w50={w50}
            w75={w75}
            w100={w100}
            style={{
              width: '100%',
              borderTopLeftRadius: '0',
              borderBottomLeftRadius: '0',
            }}
            error={error}
            withWrapper={false}
            />
        </div>
      </div>
      </>
  )
});
export default InputFieldWithDropdown;
