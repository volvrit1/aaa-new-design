"use client";

import ReactDOM from "react-dom";

interface ModalProps {
  width?: string;
  formtype?: string;
  isVisible: boolean;
  onClose: () => void;
  hidePadding?: boolean;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  width = "w-4/5",
  children,
  isVisible,
}) => {
  if (!isVisible) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-[1000]">
      <div className="fixed inset-0 bg-black backdrop-blur-lg opacity-20"></div>
      <div className={`bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-2xl rounded-xl z-10 relative ${width}`}>
        <div className="bg-white overflow-scroll no-scrollbar max-h-[90vh] rounded-xl">
          <div onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root") as HTMLElement
  );
};

export default Modal;
