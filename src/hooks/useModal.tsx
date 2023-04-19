import React, {memo, useState} from 'react';
import ModalBase from '~/components/Modal/ModalBase';

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const Modal = memo(({children}: any) => (
    <ModalBase isOpen={isOpen} closeModal={closeModal}>
      {children}
    </ModalBase>
  ));

  return {isOpen, closeModal, openModal, Modal};
};

export default useModal;
