import { useSpring, config } from "@react-spring/core";
import React, { useState } from "react";
import { animated } from "react-spring";
import { Modal } from "./Modal";
import { SectionDots } from "./SectionDots";
import arrow from "../images/arrow.png";
import { useKeyPress } from "./useKeypress";

export type Renderable =
  | Exclude<React.ReactNode, undefined | React.ReactElement>
  | JSX.Element
  | Renderable[];

interface ContentModalProps {
  content: Renderable[];
  onClose: () => void;
  isOpen?: boolean;
  /**
   * @description The width of the modal unless limited by screen size
   */
  width?: number;
  height?: number;
  darkMode?: boolean;
  springConfig?:
    | "default"
    | "gentle"
    | "wobbly"
    | "stiff"
    | "slow"
    | "molasses";
}
export const defaultWidth = 640;
export const defaultHeight = 400;

export const ContentModal = (props: ContentModalProps) => {
  const {
    content,
    width = defaultWidth,
    height = defaultHeight,
    springConfig = "default",
    darkMode,
  } = props;

  const [selected, setSelected] = useState(0);
  const increaseIndex = (increace: number) =>
    setSelected(Math.min(content.length - 1, Math.max(0, selected + increace)));
  const dotsHeight = 32;
  const paddingTop = 20; //dotsHeight;
  const arrowWidth = 32;
  const arrowStyle: React.CSSProperties = {
    flex: arrowWidth + "px 0 0",
    textAlign: "center",
    color: "#bbbbbb",
    userSelect: "none",
    position: "relative",
  };
  const left = () => increaseIndex(-1);
  const right = () => increaseIndex(1);
  useKeyPress("ArrowLeft", props.isOpen && left);
  useKeyPress("ArrowRight", props.isOpen && right);

  const spring = useSpring({ tab: selected, config: config[springConfig] });

  return (
    <Modal
      padding={"0px"}
      isOpen={props.isOpen}
      onClose={() => {
        setTimeout(() => setSelected(0), 700);
        props.onClose();
      }}
      darkMode={darkMode}
    >
      <div
        className="cm-flex cm-max-h-full cm-max-w-full"
        style={{ width, height }}
      >
        <animated.div
          style={{ ...arrowStyle, opacity: spring.tab.to((v) => v) }}
          onClick={left}
        >
          <img
            style={{
              width: 24,
              position: "absolute",
              top: "50%",
              transform: "translateX(25%) translateY(-50%)",
              filter: "brightness(4)",
            }}
            alt="Previous section arrow"
            src={arrow}
          />
        </animated.div>
        <div
          style={{
            display: "flex",
            flex: "200px 1 1",
            flexDirection: "column",
            maxHeight: "100%",
            paddingTop,
          }}
        >
          <div
            style={{
              flex: "200px 1 1",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {content.map((page, index) => (
              <animated.div
                key={index}
                style={{
                  height: height - paddingTop - dotsHeight,
                  width: "100%",
                  overflowY: index === selected ? "auto" : "hidden",
                  position: "absolute",
                  transform: spring.tab.to(
                    (tab) => `translateX(${(index - tab) * width}px)`
                  ),
                }}
              >
                {page}
              </animated.div>
            ))}
          </div>
          <div
            style={{
              flex: dotsHeight + "px 0 0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SectionDots
              selectedState={[selected, setSelected]}
              count={content.length}
            />
          </div>
        </div>
        <animated.div
          style={{
            ...arrowStyle,
            opacity: spring.tab.to((v) => content.length - 1 - v),
          }}
          onClick={right}
        >
          <img
            style={{
              width: 24,
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%) rotate(180deg)",
              filter: "brightness(4)",
            }}
            alt="Next section arrow"
            src={arrow}
          />
        </animated.div>
      </div>
    </Modal>
  );
};
