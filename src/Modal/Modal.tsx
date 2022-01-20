import { forwardRef, RefObject } from "react";
import ReactDOM from "react-dom";
import { animated, useTransition } from "react-spring";
import { useKeyPress } from "./useKeypress";

export interface ModalProps {
  children: React.ReactNode | string;
  title?: React.ReactNode | string;
  onClose: () => void;
  isOpen?: boolean;
  ref?: ((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement>;
}
export const Modal = forwardRef<HTMLDivElement, ModalProps>((props, ref) => {
  useKeyPress("Escape", props.isOpen && props.onClose);

  const backgroundTransition = useTransition(props.isOpen, {
    from: { opacity: 0 },
    enter: { opacity: 0.5 },
    leave: { opacity: 0 },
  });
  const modalTransition = useTransition(props.isOpen, {
    from: { opacity: 0, top: -1000 },
    enter: { opacity: 1, top: 50 },
    leave: { opacity: 0, top: -1000 },
  });

  let modalRoot = document.querySelector("#modalRoot");
  if (!modalRoot) {
    const root = document.querySelector("#root");
    if (!root) throw new Error("No root element found");
    modalRoot = document.createElement("div");
    modalRoot.setAttribute("id", "modalRoot");
    root.parentNode?.insertBefore(modalRoot, root.nextSibling);
  }
  return ReactDOM.createPortal(
    <>
      {backgroundTransition((style, item) =>
        !item ? null : (
          <animated.div
            style={{
              ...style,
              position: "fixed",
              top: "0px",
              left: "0px",
              width: "100vw",
              height: "100vh",
              backgroundColor: "black",
            }}
            onClick={props.onClose}
          />
        )
      )}
      {modalTransition((style, item) =>
        item ? (
          <animated.div
            ref={ref}
            className="bg-white text-black dark:bg-neutral-700 dark:text-white"
            style={{
              position: "fixed",
              ...style,
              maxWidth: "80vw",
              minWidth: "min(80vw, 500px)",
              margin: "auto",
              minHeight: "240px",
              left: "50vw",
              transform: "translateX(-50%)",
              borderRadius: "8px",
            }}
          >
            {props.title && (
              <div
                style={{
                  display: "flex",
                  height: 80,
                  padding: 28,
                  borderBottom: "solid grey 1px",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h1>{props.title}</h1>
                <button style={{ fontSize: 24 }} onClick={props.onClose}>
                  ×
                </button>
              </div>
            )}
            {props.children}
          </animated.div>
        ) : null
      )}
    </>,
    modalRoot
  );
});
