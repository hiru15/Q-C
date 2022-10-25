/* tslint:disable */
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { getMonth, getYear } from "date-fns";
import type { UseFormRegisterReturn } from "react-hook-form";
import range from "lodash/range";
import { months } from "@utils/listMonths";
import type { FieldError } from "react-hook-form";
import { Controller } from "react-hook-form";
import { memo } from "react";
const startDate = new Date("1922/01/01");
const endDate = new Date().setFullYear(new Date().getFullYear() - 18);
const yearEnd = new Date(endDate).getFullYear();
const years = range(1922, 2015 + 1);

interface IInputDatePicker {
  disabled?: boolean;
  onChange?(event: any): any;
  registration: Partial<UseFormRegisterReturn>;
  value: any;
  control: any;
  error?: FieldError | undefined;
  includeBadge?: boolean;
  w50?: boolean
}

const InputDatePicker = ({
  disabled,
  registration,
  value,
  error,
  control,
  includeBadge,
  w50
}: IInputDatePicker) => {
  return (
    <div
      error={error && "true"}
      include-badge={includeBadge && "true"}
      className="form-group"
    >
      <Controller
        control={control}
        name="birthDate"
        render={({ field }) => (
          <DatePicker
            placeholderText="Fecha de nacimiento"
            disabled={disabled}
            onChange={(e) => {
              field.onChange(e);
            }}
            className="maxWidthDatePicker"
            selected={field.value}
            dateFormat="dd-MM-yyyy"
            minDate={startDate}
            maxDate={endDate}
            renderCustomHeader={({
              date,
              changeYear,
              changeMonth,
              decreaseMonth,
              increaseMonth,
              prevMonthButtonDisabled,
              nextMonthButtonDisabled,
            }) => (
              <div
                style={{
                  margin: 10,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <button
                  onClick={decreaseMonth}
                  disabled={prevMonthButtonDisabled}
                  type="button"
                >
                  {"<"}
                </button>
                <select
                  {...registration}
                  value={months[getMonth(date)]}
                  onChange={({ target: { value } }) =>
                    changeMonth(months.indexOf(value))
                  }
                >
                  {months.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <select
                  value={getYear(date)}
                  onChange={({ target: { value } }) => changeYear(value)}
                >
                  {years.map((option) => {
                    if (option <= yearEnd) {
                      return (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      );
                    }
                  })}
                </select>

                <button
                  onClick={increaseMonth}
                  disabled={nextMonthButtonDisabled}
                  type="button"
                >
                  {">"}
                </button>
              </div>
            )}
          />
        )}
      />
      <label htmlFor="birthDate">Fecha de nacimiento</label>
      {error?.message && (
        <div role="alert" aria-label={error.message} className="error">
          {error.message}
        </div>
      )}
    </div>
  );
};

export default memo(InputDatePicker);
