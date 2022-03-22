import React, { FC, MouseEventHandler, PropsWithChildren } from 'react';
import PropTypes from 'prop-types';

import './button.scss';

type ButtonPropsType = {
   onClick?: any
   className?: string
   outlined?: boolean
   children?: any

}
const Button: FC<ButtonPropsType> = ({ className, onClick, children }) => {
   return (
      <button
         className={`btn ${className}`}
         onClick={onClick ? () => onClick() : undefined}
      >
         {children}
      </button>
   );
}

type OutlineButtonType = {
   onClick?: any
   className?: string
   outlined?: any

}
export const OutlineButton: FC<OutlineButtonType> = ({ className, onClick, children }) => {
   return (
      <Button
         className={`btn-outline ${className}`}
         onClick={onClick ? () => onClick() : undefined}
      >
         {children}
      </Button>
   );
}

export default Button;





































// import React, { FC, MouseEventHandler } from 'react';
// import PropTypes from 'prop-types';

// import './button.scss';

// type ButtonPropsType = {
//    onClick?: MouseEventHandler<HTMLButtonElement>
//    className?: string
//    outlined?: boolean
//    children?: any

// }

// export const Button: FC<ButtonPropsType> = (props) => {
//    return (
//       <button
//          className={`btn ${props.className} ${props.outlined ? 'btn-outline' : ''}`}
//          onClick={props.onClick && props.onClick}
//       >
//          {props.children}
//       </button>
//    );
// }
// type OutlineButtonType = {
//    onClick?: MouseEventHandler<HTMLButtonElement>
//    className?: string
//    outlined?: boolean

// }

// export const OutlineButton: FC<OutlineButtonType> = (props) => {
//    return (
//       <button
//          className={`btn ${props.className} ${p'btn-outlinerops.outlined ? ' : ''}`}
//          onClick={props.onClick && props.onClick}
//       >
//          {props.children}
//       </button>
//    );
// }

// export default Button;