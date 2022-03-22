// import React, { FC, MouseEventHandler } from 'react';
// import PropTypes from 'prop-types';

// import './button.scss';

// type ButtonPropsType = {
//    // onClick?: MouseEventHandler<HTMLButtonElement>
//    onClick?:,
//    // onClick?:(e: React.MouseEventHandler<HTMLButtonElement, MouseEvent>) => void
//    className?: string
//    outlined?: boolean
//    children?: any

// }
// const Button: FC<ButtonPropsType> = ({children,className, onClick}) => {
//    return (
//       <button
//          className={`btn ${className}`}
//          onClick={onClick ? (e) => onClick(e) : null}
//       >
//          {children}
//       </button>
//    );
// }

// type OutlineButtonType = {
//    onClick?: MouseEventHandler<HTMLButtonElement> 
//    className?: string
//    outlined?: boolean

// }
// export const OutlineButton: FC<ButtonPropsType> = props => {
//    return (
//       <Button
//          className={`btn-outline ${props.className}`}
//          onClick={()=>props.onClick ? () => props.onClick() : null}
//       >
//          {props.children}
//       </Button>
//    );
// }

// Button.propTypes = {
//    onClick: PropTypes.func
// }

// export default Button;





































import React, { FC, MouseEventHandler } from 'react';
import PropTypes from 'prop-types';

import './button.scss';

type ButtonPropsType = {
   onClick?: MouseEventHandler<HTMLButtonElement>
   className?: string
   outlined?: boolean
   children?: any

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
type OutlineButtonType = {
   onClick?: MouseEventHandler<HTMLButtonElement>
   className?: string
   outlined?: boolean

}

export const OutlineButton: FC<OutlineButtonType> = (props) => {
   return (
      <button
         className={`btn ${props.className} ${props.outlined ? 'btn-outline' : ''}`}
         onClick={props.onClick && props.onClick}
      >
         {props.children}
      </button>
   );
}

export default Button;