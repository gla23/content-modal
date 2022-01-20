import { useEffect, useState } from "react";
import { ContentModal, Renderable } from "./Modal/ContentModal";
import githubLogoLight from "./images/GitHub_dark.png";
import githubLogoDark from "./images/GitHub_light.png";
import { Modal } from "./Modal/Modal";

export function App() {
  const [dark, setDark] = useState(true);
  const [modalOpen, openModal] = useState<null | number>(null);

  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    if (!dark) document.documentElement.classList.remove("dark");
  }, [dark]);

  return (
    <div className={"max-w-2xl m-auto p-10" + (dark ? " dark" : "")}>
      <div
        className="text-3xl absolute top-9 md:top-11 right-12"
        onClick={() => setDark((d) => !d)}
      >
        {dark ? "🌙" : "☀️"}
      </div>
      <div className="text-2xl md:text-5xl whitespace-nowrap">
        content-modal Examples{" "}
        <a href="https://github.com/gla23/content-modal">
          <img
            className="-mt-1 ml-2 h-5 w-5 inline"
            src={dark ? githubLogoDark : githubLogoLight}
            alt="GitHub logo"
          />
        </a>
      </div>
      <br />
      <span className="text-xl mr-4">A simple modal</span>
      <span
        className="bg-neutral-500/50 p-2 px-5 rounded my-1 inline-block"
        onClick={() => openModal(0)}
      >
        Open
      </span>
      <Modal isOpen={modalOpen === 0} onClose={() => openModal(null)}>
        <div className="p-8">
          <div className="text-4xl">This is a modal</div>
          <div className="mt-6">
            The children provided to the Modal component appear inside.
          </div>
          <div className="mt-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
        </div>
      </Modal>
      <div className="break my-4"></div>
      <span className="text-xl mr-4">Lots of text</span>
      <span
        className="bg-neutral-500/50 p-2 px-5 rounded my-1 inline-block"
        onClick={() => openModal(10)}
      >
        Open
      </span>
      <Modal isOpen={modalOpen === 10} onClose={() => openModal(null)}>
        <div className="p-8">
          <div className="text-4xl mb-4">Modal height</div>
          <div className="h-96 overflow-scroll">
            <div className="mb-4">A div's height comes from its contents. </div>
            <div className="mb-4">
              If you want a lot of text without the modal growing very large,
              you will need to specify the height of your contents and add a
              scroll for the overflow. <Code>h-96 overflow-scroll</Code>.
            </div>
            <div className="mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
          </div>
        </div>
      </Modal>
      <div className="break my-4"></div>
      <span className="text-xl mr-4">Custom size</span>
      <span
        className="bg-neutral-500/50 p-2 px-5 rounded my-1 inline-block"
        onClick={() => openModal(11)}
      >
        Open
      </span>
      <Modal isOpen={modalOpen === 11} onClose={() => openModal(null)}>
        <div className="p-10 w-[48rem] max-w-full">
          <div className="text-4xl">Custom size</div>
          <div className="mt-6 h-96 overflow-scroll">
            <div className="mb-4">
              The Modal div is <Code>position: fixed</Code>. It is out of normal
              flow; its width and height come from its contents.
            </div>
            <div className="mb-4">
              This means you can specify a width on your child div with:{" "}
              <Code>w-[48rem]</Code> and the modal will grow to fit your
              content.
            </div>
            <div className="my-4">
              The Modal component also has a maximum and minimum width based on
              the screen size. If you add <Code>max-w-full</Code>, your child
              will shrink along with the Modal when limited by screen size.
            </div>
            <br />
          </div>
        </div>
      </Modal>
      <div className="break my-4"></div>
      <span className="text-md md:text-xl whitespace-nowrap ">
        A "content modal" containing multiple pages
        <span
          className="text-base bg-neutral-500/50 p-2 px-5 rounded my-1 ml-4 inline-block"
          onClick={() => openModal(1)}
        >
          Open
        </span>
      </span>
      <ContentModal
        isOpen={modalOpen === 1}
        onClose={() => openModal(null)}
        width={800}
        height={500}
        content={content}
      />
      hen an unknown printer took a galley of type and scrambled it to make a
      type specimen book. It has survived not only five centuries, but also the
      leap into electronic typesetting, remaining essentially unchanged. It was
      popularised in the 1960s with the release of Letraset sheets containing
      Lorem Ipsum passages, and more recently with desktop publishing software
      like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is
      simply dummy text of the printing and typesetting industry. Lorem Ipsum
      has been the industry's standard dummy text ever since the 1500s, when an
      unknown printer took a galley of type and scrambled it to make a type
      specimen book. It has survived not only five centuries, but also the leap
      into electronic typesetting, remaining essentially unchanged. It was
      popularised in the 1960s with the release of Letraset sheets containing
      Lorem Ipsum passages, and more recently with desktop publishing software
      like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is
      simply dummy text of the printing and typesetting industry. Lorem Ipsum
      has been the industry's standard dummy text ever since the 1500s, when an
      unknown printer took a galley of type and scrambled it to make a type
      specimen book. It has survived not only five centuri hen an unknown
      printer took a galley of type and scrambled it to make a type specimen
      book. It has survived not only five centuries, but also the leap into
      electronic typesetting, remaining essentially unchanged. It was
      popularised in the 1960s with the release of Letraset sheets containing
      Lorem Ipsum passages, and more recently with desktop publishing software
      like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is
      simply dummy text of the printing and typesetting industry. Lorem Ipsum
      has been the industry's standard dummy text ever since the 1500s, when an
      unknown printer took a galley of type and scrambled it to make a type
      specimen book. It has survived not only five centuries, but also the leap
      into electronic typesetting, remaining essentially unchanged. It was
      popularised in the 1960s with the release of Letraset sheets containing
      Lorem Ipsum passages, and more recently with desktop publishing software
      like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is
      simply dummy text of the printing and typesetting industry. Lorem Ipsum
      has been the industry's standard dummy text ever since the 1500s, when an
      unknown printer took a galley of type and scrambled it to make a type
      specimen book. It has survived not only five centuri hen an unknown
      printer took a galley of type and scrambled it to make a type specimen
      book. It has survived not only five centuries, but also the leap into
      electronic typesetting, remaining essentially unchanged. It was
      popularised in the 1960s with the release of Letraset sheets containing
      Lorem Ipsum passages, and more recently with desktop publishing software
      like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is
      simply dummy text of the printing and typesetting industry. Lorem Ipsum
      has been the industry's standard dummy text ever since the 1500s, when an
      unknown printer took a galley of type and scrambled it to make a type
      specimen book. It has survived not only five centuries, but also the leap
      into electronic typesetting, remaining essentially unchanged. It was
      popularised in the 1960s with the release of Letraset sheets containing
      Lorem Ipsum passages, and more recently with desktop publishing software
      like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is
      simply dummy text of the printing and typesetting industry. Lorem Ipsum
      has been the industry's standard dummy text ever since the 1500s, when an
      unknown printer took a galley of type and scrambled it to make a type
      specimen book. It has survived not only five centuri hen an unknown
      printer took a galley of type and scrambled it to make a type specimen
      book. It has survived not only five centuries, but also the leap into
      electronic typesetting, remaining essentially unchanged. It was
      popularised in the 1960s with the release of Letraset sheets containing
      Lorem Ipsum passages, and more recently with desktop publishing software
      like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is
      simply dummy text of the printing and typesetting industry. Lorem Ipsum
      has been the industry's standard dummy text ever since the 1500s, when an
      unknown printer took a galley of type and scrambled it to make a type
      specimen book. It has survived not only five centuries, but also the leap
      into electronic typesetting, remaining essentially unchanged. It was
      popularised in the 1960s with the release of Letraset sheets containing
      Lorem Ipsum passages, and more recently with desktop publishing software
      like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is
      simply dummy text of the printing and typesetting industry. Lorem Ipsum
      has been the industry's standard dummy text ever since the 1500s, when an
      unknown printer took a galley of type and scrambled it to make a type
      specimen book. It has survived not only five centuri hen an unknown
      printer took a galley of type and scrambled it to make a type specimen
      book. It has survived not only five centuries, but also the leap into
      electronic typesetting, remaining essentially unchanged. It was
      popularised in the 1960s with the release of Letraset sheets containing
      Lorem Ipsum passages, and more recently with desktop publishing software
      like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is
      simply dummy text of the printing and typesetting industry. Lorem Ipsum
      has been the industry's standard dummy text ever since the 1500s, when an
      unknown printer took a galley of type and scrambled it to make a type
      specimen book. It has survived not only five centuries, but also the leap
      into electronic typesetting, remaining essentially unchanged. It was
      popularised in the 1960s with the release of Letraset sheets containing
      Lorem Ipsum passages, and more recently with desktop publishing software
      like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is
      simply dummy text of the printing and typesetting industry. Lorem Ipsum
      has been the industry's standard dummy text ever since the 1500s, when an
      unknown printer took a galley of type and scrambled it to make a type
      specimen book. It has survived not only five centurihen an unknown printer
      took a galley of type and scrambled it to make a type specimen book. It
      has survived not only five centuries, but also the leap into electronic
      typesetting, remaining essentially unchanged. It was popularised in the
      1960s with the release of Letraset sheets containing Lorem Ipsum passages,
      and more recently with desktop publishing software like Aldus PageMaker
      including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the
      printing and typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown printer took a
      galley of type and scrambled it to make a type specimen book. It has
      survived not only five centuries, but also the leap into electronic
      typesetting, remaining essentially unchanged. It was popularised in the
      1960s with the release of Letraset sheets containing Lorem Ipsum passages,
      and more recently with desktop publishing software like Aldus PageMaker
      including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the
      printing and typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown printer took a
      galley of type and scrambled it to make a type specimen book. It has
      survived not only five centuri hen an unknown printer took a galley of
      type and scrambled it to make a type specimen book. It has survived not
      only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged. It was popularised in the 1960s with the
      release of Letraset sheets containing Lorem Ipsum passages, and more
      recently with desktop publishing software like Aldus PageMaker including
      versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing
      and typesetting industry. Lorem Ipsum has been the industry's standard
      dummy text ever since the 1500s, when an unknown printer took a galley of
      type and scrambled it to make a type specimen book. It has survived not
      only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged. It was popularised in the 1960s with the
      release of Letraset sheets containing Lorem Ipsum passages, and more
      recently with desktop publishing software like Aldus PageMaker including
      versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing
      and typesetting industry. Lorem Ipsum has been the industry's standard
      dummy text ever since the 1500s, when an unknown printer took a galley of
      type and scrambled it to make a type specimen book. It has survived not
      only five centuri hen an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only five
      centuries, but also the leap into electronic typesetting, remaining
      essentially unchanged. It was popularised in the 1960s with the release of
      Letraset sheets containing Lorem Ipsum passages, and more recently with
      desktop publishing software like Aldus PageMaker including versions of
      Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's standard dummy
      text ever since the 1500s, when an unknown printer took a galley of type
      and scrambled it to make a type specimen book. It has survived not only
      five centuries, but also the leap into electronic typesetting, remaining
      essentially unchanged. It was popularised in the 1960s with the release of
      Letraset sheets containing Lorem Ipsum passages, and more recently with
      desktop publishing software like Aldus PageMaker including versions of
      Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's standard dummy
      text ever since the 1500s, when an unknown printer took a galley of type
      and scrambled it to make a type specimen book. It has survived not only
      five centuri hen an unknown printer took a galley of type and scrambled it
      to make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only five
      centuries, but also the leap into electronic typesetting, remaining
      essentially unchanged. It was popularised in the 1960s with the release of
      Letraset sheets containing Lorem Ipsum passages, and more recently with
      desktop publishing software like Aldus PageMaker including versions of
      Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's standard dummy
      text ever since the 1500s, when an unknown printer took a galley of type
      and scrambled it to make a type specimen book. It has survived not only
      five centuri hen an unknown printer took a galley of type and scrambled it
      to make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only five
      centuries, but also the leap into electronic typesetting, remaining
      essentially unchanged. It was popularised in the 1960s with the release of
      Letraset sheets containing Lorem Ipsum passages, and more recently with
      desktop publishing software like Aldus PageMaker including versions of
      Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's standard dummy
      text ever since the 1500s, when an unknown printer took a galley of type
      and scrambled it to make a type specimen book. It has survived not only
      five centuri
    </div>
  );
}
const content = [
  <div className="p-8">
    <div className="text-6xl">Title text</div>
    <div className="text-xl mt-8">
      This is a splash page with some intro text right here before your very
      eyes.
    </div>
    <div className="text-xl mt-4">
      Click on the right arrow to see the next page.
    </div>
  </div>,
  <div className="p-8">
    <div className="text-2xl mt-4">
      You can also use the arrow keys{" "}
      <span className="ml-2 rotate-90 inline-block">
        <span className="animate-bounce inline-block">⬆️</span>
      </span>
    </div>
  </div>,
  <div className="p-8">
    <div className="text-2xl mt-4">
      Or click on the section markers below ⤵{" "}
    </div>
  </div>,
  <div className="p-8">
    <div className="text-2xl mt-4">
      Just look at that excessively aesthetic animation.
    </div>
  </div>,
  <div className="p-8">
    <div className="text-2xl mt-4">
      The modal closes when you click outside or press the Escape key.
    </div>
  </div>,
];
function Code(props: { children: Renderable }) {
  return <code className="text-red-500/60 text-sm">{props.children}</code>;
}
