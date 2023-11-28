import { component$, useSignal, useStyles$, $ } from "@builder.io/qwik";
import AboutStyles from "./about.css?inline";
import Modal from "~/components/modal/modal";
export default component$(() => {
  useStyles$(AboutStyles);
    const modalVisible = useSignal(false);
    
    const closeModal = $(() => {
        modalVisible.value = false;
    });
  return (
    <article>
      <h2>Hello This is Mario!</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <button
        onClick$={() => {
          modalVisible.value = !modalVisible.value;
        }}
      >
        {modalVisible.value ? "Hide Modal" : "Show Modal"}
      </button>
      {modalVisible.value && (
        <Modal
          size="lg"
          frosted={true}
          onClose={closeModal}
        >
          <div q:slot="content">
            <h2>Great News</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
              tenetur.
            </p>
          </div>
          <div q:slot="footer">
            <button>Sign Up Now!</button>
          </div>
        </Modal>
      )}
    </article>
  );
});
