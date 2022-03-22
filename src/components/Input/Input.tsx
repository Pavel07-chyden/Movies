import React, { ChangeEventHandler, FC } from 'react';

import './input.scss';

type InputType = {
   type: any
   placeholder: string
   value: string
   onChange: ChangeEventHandler<HTMLInputElement>

}

const Input: FC<InputType> = props => {
   return (
      <input
         type={props.type}
         placeholder={props.placeholder}
         value={props.value}
         onChange={props.onChange ? (e) => props.onChange(e) : undefined}
      />
   );
}

export default Input;