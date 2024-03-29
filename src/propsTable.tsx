import { defaultHeight, defaultWidth } from "./Modal/ContentModal";

export const propsTable = (
  <table className="cm-text-sm md:cm-text-lg">
    <tbody>
      <tr>
        <td>
          <code>isOpen</code>
        </td>
        <td>Whether or not the modal is showing</td>
      </tr>
      <tr>
        <td>
          <code>onClose</code>
        </td>
        <td>A callback for when the user closes the modal</td>
      </tr>
      <tr>
        <td>
          <code>content</code>
        </td>
        <td>Your array of content, each element producing a page</td>
      </tr>
      <tr className="md:cm-table-row cm-hidden">
        <td>
          <code>currentPageState</code>
        </td>
        <td>
          By default this state is contained within the component, however you
          can hoist the state out by providing a useState array.
        </td>
      </tr>
      <tr>
        <td>
          <code>width</code>
        </td>
        <td>Modal width (default {defaultWidth})</td>
      </tr>
      <tr>
        <td>
          <code>height</code>
        </td>
        <td>Modal height (default {defaultHeight})</td>
      </tr>
      <tr>
        <td>
          <code>darkMode</code>
        </td>
        <td>Whether to display in dark or light mode</td>
      </tr>
      <tr>
        <td>
          <code className="text-xs md:text-lg">springConfig</code>
        </td>
        <td>The react spring config to use. See next page!</td>
      </tr>
    </tbody>
  </table>
);
