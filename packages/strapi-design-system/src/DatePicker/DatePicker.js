import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import CalendarIcon from '@strapi/icons/Calendar';
import CloseAlertIcon from '@strapi/icons/CloseAlertIcon';
import { TextInput } from '../TextInput';
import { DatePickerButton, DatePickerWrapper, IconBox } from './components';
import { DatePickerCalendar } from './DatePickerCalendar';
import { formatDate } from './utils/formatDate';

export const DatePicker = ({
  initialDate,
  selectedDate,
  onChange,
  label,
  selectedDateLabel,
  onClear,
  clearLabel,
  disabled,
  ...props
}) => {
  const [visible, setVisible] = useState(false);
  const inputRef = useRef(null);
  const datePickerButtonRef = useRef(null);
  const langFormatter = new Intl.DateTimeFormat();
  const formattedDate = selectedDate ? formatDate(selectedDate) : '';
  const placeholder = formatDate(new Date(1970, 0, 1));

  const toggleVisibility = () => setVisible((prevVisible) => !prevVisible);

  const handleClear = () => {
    if (disabled) return;

    onClear();
    datePickerButtonRef.current.focus();
  };

  const handleChange = (date) => {
    onChange(date);
    setVisible(false);
  };

  return (
    <DatePickerWrapper highlighted={visible}>
      <TextInput
        ref={inputRef}
        onClick={toggleVisibility}
        // Prevent input from changing for now
        onChange={() => {}}
        value={formattedDate}
        placeholder={placeholder}
        startAction={
          <DatePickerButton
            ref={datePickerButtonRef}
            onClick={toggleVisibility}
            aria-label={selectedDate ? selectedDateLabel(langFormatter.format(selectedDate)) : label}
          >
            <CalendarIcon aria-hidden={true} />
          </DatePickerButton>
        }
        endAction={
          onClear && formattedDate ? (
            <IconBox as="button" onClick={handleClear} aria-label={clearLabel} aria-disabled={disabled}>
              <CloseAlertIcon />
            </IconBox>
          ) : undefined
        }
        aria-autocomplete="none"
        label={label}
        disabled={disabled}
        {...props}
      />

      {inputRef.current && inputRef.current.inputWrapperRef && visible && (
        <DatePickerCalendar
          selectedDate={selectedDate}
          initialDate={initialDate}
          onChange={handleChange}
          source={inputRef.current.inputWrapperRef}
          label={label}
        />
      )}
    </DatePickerWrapper>
  );
};

DatePicker.defaultProps = {
  clearLabel: undefined,
  disabled: false,
  initialDate: new Date(),
  onClear: undefined,
  selectedDate: undefined,
};

DatePicker.propTypes = {
  clearLabel: PropTypes.string,
  disabled: PropTypes.bool,
  initialDate: PropTypes.instanceOf(Date),
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClear: PropTypes.func,
  selectedDate: PropTypes.instanceOf(Date),
  selectedDateLabel: PropTypes.func.isRequired,
};
