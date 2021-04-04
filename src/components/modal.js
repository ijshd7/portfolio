import React from 'react';
import { Dialog } from '@reach/dialog';
import "@reach/dialog/styles.css";
import tw from 'twin.macro';

const Container = tw.div`flex-1`;

const Content = tw.div`z-30 w-full flex flex-col items-center`;

const Modal = ({ displayModal, dismissModal, children }) => (
    <Dialog
      tw="relative z-50 w-auto mx-4 my-8 sm:mx-24 lg:max-w-lg lg:mx-auto"
      isOpen={displayModal}
      onDismiss={dismissModal}
      allowPinchZoom={true}
      aria-label="Dialog"
      role="alertdialog"
    >
      <Container>
        <Content>{children}</Content>
      </Container>
    </Dialog>
  );
  
  export default Modal;
  