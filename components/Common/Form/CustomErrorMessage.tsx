import { ErrorMessage } from '@hookform/error-message';
import React from 'react';
import type { FieldErrors } from 'react-hook-form/dist/types';

interface iErrorMessage {
  name: string;
  errors: FieldErrors;
}

const CustomErrorMessage: React.FC<iErrorMessage> = ({ name, errors }) => {
  return (
    <ErrorMessage
      errors={errors}
      name={name}
      render={({ message }) =>
        message && (
          <div className="error" style={{ maxHeight: '18px' }}>
            <p>{message}</p>
          </div>
        )
      }
    />
  );
};

export default CustomErrorMessage;
