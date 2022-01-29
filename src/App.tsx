import { useEffect, useState } from "react";
import { ContentModal, Renderable } from "./Modal/ContentModal";
import githubLogoLight from "./images/GitHub_dark.png";
import githubLogoDark from "./images/GitHub_light.png";
import { Modal } from "./Modal/Modal";
import { propsTable } from "./propsTable";
import { CheckboxSet } from "./CheckboxSet";
import { Sun } from "./Sun";
import { Moon } from "./Moon";
import "./App.css";

export function App() {
  const [dark, setDark] = useState(true);
  const [broken, setBroken] = useState(false);
  const [modalOpen, openModal] = useState<null | number>(null);
  const [springConfig, setSpringConfig] = useState<
    "default" | "gentle" | "wobbly" | "stiff" | "slow" | "molasses"
  >("default");
  useEffect(() => {
    if (dark) document.documentElement.classList.add("cm-dark");
    if (!dark) document.documentElement.classList.remove("cm-dark");
  }, [dark]);
  const darkMode = (
    <div
      className="cm-text-3xl cm-absolute cm-top-8 cm-right-8 md:cm-right-9 md:cm-top-9"
      onClick={() => setDark((d) => !d)}
    >
      {dark ? <Moon /> : <Sun />}
    </div>
  );
  return (
    <div
      className={"cm-max-w-2xl cm-m-auto cm-p-10" + (dark ? " cm-dark" : "")}
    >
      {darkMode}
      <div className="cm-text-lg sm:cm-text-4xl cm-whitespace-nowrap">
        content-modal examples{" "}
        <a href="https://github.com/gla23/content-modal">
          <img
            className="cm--mt-1 cm-ml-2 cm-h-5 cm-w-5 cm-inline"
            src={dark ? githubLogoDark : githubLogoLight}
            alt="GitHub logo"
          />
        </a>
      </div>
      <div className="cm-w-40 md:cm-w-auto cm-m-auto">
        <br />
        <div className="cm-text-xl cm-my-2">Modal component</div>
        <span
          className="cm-bg-neutral-500/50 cm-p-2 cm-px-5 cm-rounded cm-my-1 cm-inline-block cm-mr-48 sm:cm-mr-4 cm-w-40 sm:cm-w-auto cm-text-center"
          onClick={() => openModal(0)}
        >
          A simple modal
        </span>
        <Modal isOpen={modalOpen === 0} onClose={() => openModal(null)}>
          <div className="cm-p-4">
            <div className="cm-text-4xl">This is a modal</div>
            <div className="cm-mt-6">
              The children provided to the Modal component appear inside.
            </div>
          </div>
        </Modal>
        <span
          className="cm-bg-neutral-500/50 cm-p-2 cm-px-5 cm-rounded cm-my-1 cm-inline-block cm-mr-48 sm:cm-mr-4 cm-w-40 sm:cm-w-auto cm-text-center"
          onClick={() => openModal(10)}
        >
          Lots of text
        </span>
        <Modal isOpen={modalOpen === 10} onClose={() => openModal(null)}>
          <div className="cm-p-4 cm-max-h-full">
            <div className="cm-text-4xl cm-mb-4">Modal height</div>
            <div className="cm-overflow-auto">
              <div className="cm-mb-4">
                The modal automatically adds scroll.
              </div>
              <div className="cm-mb-4">
                {longText + longText + longText + longText}
              </div>
            </div>
          </div>
        </Modal>
        <span
          className="cm-bg-neutral-500/50 cm-p-2 cm-px-5 cm-rounded cm-my-1 cm-inline-block cm-mr-48 sm:cm-mr-4 cm-w-40 sm:cm-w-auto cm-text-center"
          onClick={() => openModal(11)}
        >
          Custom size
        </span>
        <Modal isOpen={modalOpen === 11} onClose={() => openModal(null)}>
          <div className="cm-p-4 cm-w-[48rem] cm-max-w-full">
            <div className="cm-text-4xl">Custom size</div>
            <div className="cm-mt-6">
              <div className="cm-mb-4">
                The Modal div is <Code>position: fixed</Code>. It is out of
                normal flow; its width and height come from its contents.
              </div>
              <div className="cm-mb-4">
                This means you can specify a width on your child div with:{" "}
                <Code>w-[48rem]</Code> and the modal will grow to fit your
                content.
              </div>
              <div className="cm-my-4">
                The Modal component also has a maximum and minimum width based
                on the screen size. If you add <Code>max-w-full</Code>, your
                child will shrink along with the Modal when limited by screen
                size.
              </div>

              <div className="cm-my-4">
                <input
                  type="checkbox"
                  checked={broken}
                  onChange={() => setBroken((v) => !v)}
                />
                <span className="cm-ml-2">
                  Break the modal for smaller screens by not using{" "}
                  <Code>max-w-full</Code>
                </span>
              </div>
              {broken && (
                <div className="cm-w-[27rem]">
                  Long text long text long text long text long text long text
                </div>
              )}
            </div>
          </div>
        </Modal>
        <div className="cm-break cm-my-4"></div>
        <div className="cm-text-xl cm-my-2">Content modal</div>
        <span className="cm-text-md md:cm-text-xl cm-whitespace-nowrap cm-">
          <span
            className="cm-text-base cm-bg-neutral-500/50 cm-p-2 cm-px-5 cm-rounded cm-my-1 cm-mr-4 cm-inline-block cm-mr-48 sm:cm-mr-4 cm-w-40 sm:cm-w-auto cm-text-center"
            onClick={() => openModal(100)}
          >
            Features
          </span>
        </span>
        <ContentModal
          isOpen={modalOpen === 100}
          onClose={() => openModal(null)}
          width={800}
          height={500}
          content={[
            <div className="md:cm-p-8">
              <div className="cm-text-2xl sm:cm-text-6xl">Title text</div>
              <div className="cm-text-lg sm:cm-text-xl cm-mt-6">
                Click on the right arrow to see the next page.
              </div>
            </div>,
            <div className="md:cm-p-8">
              <div className="cm-text-lg sm:cm-text-2xl cm-mt-4">
                You can also use the arrow keys{" "}
                <span className="cm-ml-2 cm-rotate-90 cm-inline-block">
                  <span className="cm-animate-bounce cm-inline-block">⬆️</span>
                </span>
              </div>
            </div>,
            <div className="md:cm-p-8">
              <div className="cm-text-lg sm:cm-text-2xl cm-mt-4">
                Or click on the section markers below{" "}
                <span className="cm-inline-block cm-relative cm-top-2 cm-ml-1">
                  ⤵
                </span>{" "}
              </div>
            </div>,
            <div className="md:cm-p-8">
              <div className="cm-text-lg sm:cm-text-2xl cm-mt-4">
                Just drink in that animation.
              </div>
            </div>,
            <div className="md:cm-p-8">
              <div className="cm-text-lg sm:cm-text-2xl cm-mt-4">
                The modal closes when you click outside or press the Escape key.
              </div>
            </div>,
          ]}
        />

        <span className="cm-text-md md:cm-text-xl">
          <span
            className="cm-text-base cm-bg-neutral-500/50 cm-p-2 cm-px-5 cm-rounded cm-my-1 cm-mr-4 cm-inline-block cm-mr-48 sm:cm-mr-4 cm-w-40 sm:cm-w-auto cm-text-center"
            onClick={() => openModal(101)}
          >
            Usage
          </span>
        </span>
        <ContentModal
          isOpen={modalOpen === 101}
          onClose={() => openModal(null)}
          width={750}
          height={440}
          springConfig={springConfig}
          content={[
            <div className="md:cm-p-8">
              <div className="md:cm-text-5xl cm-mb-4">Props</div>
              {propsTable}
            </div>,
            <div className="cm-max-w-lg cm-m-auto cm-">
              <div className="md:cm-text-4xl cm-mb-4">
                <code className="md:cm-text-3xl">springConfig</code> options
              </div>
              <CheckboxSet
                state={[springConfig, setSpringConfig]}
                options={[
                  "default",
                  "slow",
                  "gentle",
                  "wobbly",
                  "stiff",
                  "molasses",
                ]}
              />
              <div className="md:cm-text-xl cm-mt-4">
                These are the react-spring config options. Unfortunately most of
                them just give users a headache.
              </div>
            </div>,
            <div className="md:cm-text-xl cm-max-w-lg cm-m-auto">
              <div className="cm-mt-2 cm-mb-6">
                ContentModal automatically adds <Code>overflow-y: scroll</Code>{" "}
                for each page that is taller than the height prop.{" "}
              </div>
              <div className="cm-mb-6 cm-opacity-50">
                {longText + longText + longText}
              </div>
            </div>,
            <div className="md:cm-text-xl cm-max-w-lg cm-m-auto">
              <div className="cm-mt-2 cm-mb-6">
                The modals are attached to a modal root element. If there is no
                DOM element with id "modalRoot" it will insert one after the
                element with id "root".
              </div>
            </div>,
            <div className="md:cm-p-8">
              <div className="cm-relative cm-bottom-5 cm--right-6 cm-text-2xl cm-mt-4">
                {darkMode}
              </div>
              <div className="cm-text-4xl cm-absolute cm-bottom-20 md:cm-left-20">
                Twas brillig...
              </div>
            </div>,
          ]}
        />
      </div>
    </div>
  );
}

function Code(props: { children: Renderable }) {
  return (
    <code className="cm-text-red-500/60 cm-text-sm cm-mx-1">
      {props.children}
    </code>
  );
}
const longText = `
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
has been the industry's standard dummy text ever since the 1500s, when an
unknown printer took a galley of type and scrambled it to make a type
specimen book. It has survived not only five centuries, but also the leap into
electronic typesetting, remaining essentially unchanged. It was
popularised in the 1960s with the release of Letraset sheets containing
Lorem Ipsum passages, and more recently with desktop publishing software
like Aldus PageMaker including versions of Lorem Ipsum.
`;
