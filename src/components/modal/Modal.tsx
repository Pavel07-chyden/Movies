import React, { useState, useEffect, useRef } from 'react';
import './modal.scss';

type ModalTypes = {
   active: boolean;
   id: string;
   children?: React.ReactNode


};

export const ModalComp: React.FC<ModalTypes> = (props) => {

   const [active, setActive] = useState<boolean>(false);

   useEffect(() => {
      setActive(props.active);
   }, [props.active]);

   return (
      <div id={props.id} className={`modal ${active ? 'active' : ''}`}>
         {props.children}
      </div>
   );
}

// Modal.propTypes = {
//    active: PropTypes.bool,
//    id: PropTypes.string
// }

type ModalContentTypes = {
   onClose: ()=>void;
   children?: React.ReactNode;

};

export const ModalContent: React.FC<ModalContentTypes> = (props) => {

   const contentRef: React.MutableRefObject<any> = useRef(null);

   const closeModal = () => {
      contentRef.current.parentNode.classList.remove('active');
      if (props.onClose){ props.onClose()};
   }

   return (
      <div ref={contentRef} className="modal__content">
         {props.children}
         <div className="modal__content__close" onClick={closeModal}>
            <i className="bx bx-x">x</i>
         </div>
      </div>
   )
}


