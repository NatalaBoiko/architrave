'use client';

import { useState } from 'react';

function useModal(open = false) {
  const [showClick, setShowClick] = useState(open);
  const openModal = () => setShowClick(true);
  const closeModal = () => setShowClick(false);
  const toggleModal = () => setShowClick((state) => !state);

  return { showClick, openModal, closeModal, toggleModal };
}

export default useModal;
