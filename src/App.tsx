import { useEffect, useState } from "react";
import { ContentModal, Renderable } from "./Modal/ContentModal";
import githubLogoLight from "./images/GitHub_dark.png";
import githubLogoDark from "./images/GitHub_light.png";
import { Modal } from "./Modal/Modal";
import { propsTable } from "./propsTable";
import { CheckboxSet } from "./CheckboxSet";
import { Sun } from "./Sun";
import { Moon } from "./Moon";

export function App() {
  const [dark, setDark] = useState(true);
  const [broken, setBroken] = useState(false);
  const [modalOpen, openModal] = useState<null | number>(null);
  const [springConfig, setSpringConfig] = useState<
    "default" | "gentle" | "wobbly" | "stiff" | "slow" | "molasses"
  >("default");
  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    if (!dark) document.documentElement.classList.remove("dark");
  }, [dark]);
  const darkMode = (
    <div
      className="text-3xl absolute top-8 right-8 md:right-9 md:top-9"
      onClick={() => setDark((d) => !d)}
    >
      {dark ? <Moon /> : <Sun />}
    </div>
  );
  return (
    <div className={"max-w-2xl m-auto p-10" + (dark ? " dark" : "")}>
      {darkMode}
      <div className="text-lg sm:text-4xl whitespace-nowrap">
        content-modal examples{" "}
        <a href="https://github.com/gla23/content-modal">
          <img
            className="-mt-1 ml-2 h-5 w-5 inline"
            src={dark ? githubLogoDark : githubLogoLight}
            alt="GitHub logo"
          />
        </a>
      </div>
      <div className="w-40 md:w-auto m-auto">
        <br />
        <div className="text-xl my-2">Modal component</div>
        <span
          className="bg-neutral-500/50 p-2 px-5 rounded my-1 inline-block mr-48 sm:mr-4 w-40 sm:w-auto text-center"
          onClick={() => openModal(0)}
        >
          A simple modal
        </span>
        <Modal isOpen={modalOpen === 0} onClose={() => openModal(null)}>
          <div className="p-4">
            <div className="text-4xl">This is a modal</div>
            <div className="mt-6">
              The children provided to the Modal component appear inside.
            </div>
          </div>
        </Modal>
        <span
          className="bg-neutral-500/50 p-2 px-5 rounded my-1 inline-block mr-48 sm:mr-4 w-40 sm:w-auto text-center"
          onClick={() => openModal(10)}
        >
          Lots of text
        </span>
        <Modal isOpen={modalOpen === 10} onClose={() => openModal(null)}>
          <div className="p-4 max-h-full">
            <div className="text-4xl mb-4">Modal height</div>
            <div className="overflow-auto">
              <div className="mb-4">The modal automatically adds scroll.</div>
              <div className="mb-4">
                {longText + longText + longText + longText}
              </div>
            </div>
          </div>
        </Modal>
        <span
          className="bg-neutral-500/50 p-2 px-5 rounded my-1 inline-block mr-48 sm:mr-4 w-40 sm:w-auto text-center"
          onClick={() => openModal(11)}
        >
          Custom size
        </span>
        <Modal isOpen={modalOpen === 11} onClose={() => openModal(null)}>
          <div className="p-4 w-[48rem] max-w-full">
            <div className="text-4xl">Custom size</div>
            <div className="mt-6 ">
              <div className="mb-4">
                The Modal div is <Code>position: fixed</Code>. It is out of
                normal flow; its width and height come from its contents.
              </div>
              <div className="mb-4">
                This means you can specify a width on your child div with:{" "}
                <Code>w-[48rem]</Code> and the modal will grow to fit your
                content.
              </div>
              <div className="my-4">
                The Modal component also has a maximum and minimum width based
                on the screen size. If you add <Code>max-w-full</Code>, your
                child will shrink along with the Modal when limited by screen
                size.
              </div>

              <div className="my-4">
                <input
                  type="checkbox"
                  checked={broken}
                  onChange={() => setBroken((v) => !v)}
                />
                <span className="ml-2">
                  Break the modal for smaller screens by not using{" "}
                  <Code>max-w-full</Code>
                </span>
              </div>
              {broken && (
                <div className="w-[27rem]">
                  Long text long text long text long text long text long text
                </div>
              )}
            </div>
          </div>
        </Modal>
        <div className="break my-4"></div>
        <div className="text-xl my-2">Content modal</div>
        <span className="text-md md:text-xl whitespace-nowrap ">
          <span
            className="text-base bg-neutral-500/50 p-2 px-5 rounded my-1 mr-4 inline-block mr-48 sm:mr-4 w-40 sm:w-auto text-center"
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
            <div className="md:p-8">
              <div className="text-2xl sm:text-6xl">Title text</div>
              <div className="text-lg sm:text-xl mt-6">
                Click on the right arrow to see the next page.
              </div>
            </div>,
            <div className="md:p-8">
              <div className="text-lg sm:text-2xl mt-4">
                You can also use the arrow keys{" "}
                <span className="ml-2 rotate-90 inline-block">
                  <span className="animate-bounce inline-block">⬆️</span>
                </span>
              </div>
            </div>,
            <div className="md:p-8">
              <div className="text-lg sm:text-2xl mt-4">
                Or click on the section markers below{" "}
                <span className=" inline-block relative top-2 ml-1">⤵</span>{" "}
              </div>
            </div>,
            <div className="md:p-8">
              <div className="text-lg sm:text-2xl mt-4">
                Just drink in that animation.
              </div>
            </div>,
            <div className="md:p-8">
              <div className="text-lg sm:text-2xl mt-4">
                The modal closes when you click outside or press the Escape key.
              </div>
            </div>,
          ]}
        />

        <span className="text-md md:text-xl">
          <span
            className="text-base bg-neutral-500/50 p-2 px-5 rounded my-1 mr-4 inline-block mr-48 sm:mr-4 w-40 sm:w-auto text-center"
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
            <div className="md:p-8">
              <div className="md:text-5xl mb-4">Props</div>
              {propsTable}
            </div>,
            <div className="max-w-lg m-auto ">
              <div className="md:text-4xl mb-4">
                <code className="md:text-3xl">springConfig</code> options
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
              <div className="md:text-xl mt-4">
                These are the react-spring config options. Unfortunately most of
                them just give users a headache.
              </div>
            </div>,
            <div className="md:text-xl max-w-lg m-auto">
              <div className="mt-2 mb-6">
                ContentModal automatically adds <Code>overflow-y: scroll</Code>{" "}
                for each page that is taller than the height prop.{" "}
              </div>
              <div className="mb-6 opacity-50">
                {longText + longText + longText}
              </div>
            </div>,
            <div className="md:text-xl max-w-lg m-auto">
              <div className="mt-2 mb-6">
                The modals are attached to a modal root element. If there is no
                DOM element with id "modalRoot" it will insert one after the
                element with id "root".
              </div>
            </div>,
            <div className="md:p-8">
              <div className="relative bottom-5 -right-6 text-2xl mt-4">
                {darkMode}
              </div>
              <div className="text-4xl absolute bottom-20 md:left-20">
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
  return <code className="text-red-500/60 text-sm mx-1">{props.children}</code>;
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
