import {
  useCallback, useEffect, useRef, useState,
} from 'react';
import useOutsideClick from './useOutsideClick';

const useControlledTooltip = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [clicked, setClicked] = useState<boolean>(false);
  const ref = useRef(null);

  useOutsideClick(ref, () => {
    if (open) setOpen(false);
    setClicked(false);
  });

  useEffect(() => {
    setOpen(clicked);
  }, [clicked]);

  const onOpen = useCallback(() => {
    if (!open) setOpen(true);
  }, [open]);

  const onClose = useCallback(() => {
    if (open && !clicked) setOpen(false);
  }, [open, clicked]);

  const onClick = useCallback(() => {
    setClicked(!clicked);
  }, [clicked]);

  return {
    open,
    ref,
    onOpen,
    onClose,
    onClick,
  };
};

export default useControlledTooltip;
