import { Slot, component$, useStylesScoped$ } from "@builder.io/qwik";
import ModalStyles from "./modal.css?inline";
import type {PropFunction} from "@builder.io/qwik";
interface ModalProps {
  size: "sm" | "lg";
  frosted?: boolean;
  onClose?: PropFunction<()=> void>;
}

export default component$((props: ModalProps) => {
  useStylesScoped$(ModalStyles);
  return (
    <div class={`modal ${props.size}  ${props.frosted && "frosted"}`}>
      <div class="modal-content">
        <button class="close" type="button" onClick$={props.onClose}>
          ❌
        </button>
        <main class="main-content">
          <Slot name="content" />
        </main>
        <footer>
          <Slot name="footer" />
        </footer>
      </div>
    </div>
  );
});
