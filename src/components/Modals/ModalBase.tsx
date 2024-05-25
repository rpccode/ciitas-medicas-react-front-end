import { Button, Dialog, DialogPanel } from '@tremor/react';

interface Props {
  children: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
    isOpen:boolean;
    handleOpen: () => void;
}

export const ModalBase:React.FC<Props> = ({children,isOpen,handleOpen})=> {
  
  return (
    <>
   
    <Dialog open={isOpen} onClose={handleOpen} static={true}>
      <DialogPanel>
        {typeof children === "function" ? children() : children}
      </DialogPanel>
    </Dialog>
    </>
  );
}