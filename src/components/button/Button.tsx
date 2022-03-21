import React, { FC, MouseEventHandler } from 'react';
import PropTypes from 'prop-types';

import './button.scss';

type ButtonPropsType = {
   onClick: MouseEventHandler<HTMLButtonElement>
   className?: string
   outlined?: boolean
}

export const Button: FC<ButtonPropsType> = (props) => {
   return (
      <button
         className={`btn ${props.className} ${props.outlined ? 'btn-outline' : ''}`}
         onClick={props.onClick && props.onClick}
      >
         {props.children}
      </button>
   );
}
export const OutlineButton: FC<ButtonPropsType> = (props) => {
   return (
      <button
         className={`btn ${props.className} ${props.outlined ? 'btn-outline' : ''}`}
         onClick={props.onClick && props.onClick}
      >
         {props.children}
      </button>
   );
}
Button.prototype = {
   onClick: PropTypes.func
}
export default Button;