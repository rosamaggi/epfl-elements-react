import React from 'react';
import './button.css';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Is this the button disabled?
   */
  isDisabled?: boolean;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Things that go inside the button, such as a text label.
   */
  children?: React.ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = true,
  size = 'medium',
  isDisabled = false,
  children,
  ...props
}: ButtonProps) => {
  let mode = primary ? 'btn btn-primary' : 'btn btn-secondary';

  switch (size) {
    case 'small':
      mode = mode.concat(' btn-sm');
      break;
    case 'large':
      mode = mode.concat(' btn-lg');
      break;
  }

  return (
    <button
      type="button"
      className={mode}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      disabled={isDisabled}
      {...props}
    >
      <div className="text-center" style={{ display: 'flex', alignItems: 'center' }}>
        {children}
      </div>
    </button>
  );
};
