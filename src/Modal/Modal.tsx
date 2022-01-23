import { forwardRef, RefObject, useEffect } from "react";
import ReactDOM from "react-dom";
import { animated, useTransition } from "react-spring";
import { useKeyPress } from "./useKeypress";
import "./Modal.css";

export interface ModalProps {
  children: React.ReactNode | string;
  title?: React.ReactNode | string;
  onClose: () => void;
  isOpen?: boolean;
  ref?: ((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement>;
  padding?: string;
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

  useEffect(() => {
    if (!props.isOpen) return;
    document.body.classList.add("modal-open");
    return () => document.body.classList.remove("modal-open");
  }, [props.isOpen]);

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
            className="transition-colours bg-white text-black dark:bg-neutral-700 dark:text-white"
            style={{
              padding: props.padding ?? "1rem",
              position: "fixed",
              ...style,
              margin: "auto",
              left: "50vw",
              transform: "translateX(-50%)",
              borderRadius: "8px",
            }}
          >
            <div
              className="flex"
              style={{
                maxWidth: "80vw",
                minWidth: "min(80vw, 400px)",
                minHeight: "220px",
                maxHeight: "min(calc(90vh - 100px), 500px)",
              }}
            >
              <div className="overflow-auto">{props.children}</div>
            </div>
          </animated.div>
        ) : null
      )}
    </>,
    modalRoot
  );
});
