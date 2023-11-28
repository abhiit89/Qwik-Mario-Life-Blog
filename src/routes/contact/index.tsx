import {
  component$,
  useSignal,
  useStore,
  useStylesScoped$,
} from "@builder.io/qwik";
import ContactStyles from "./contact.css?inline";
export default component$(() => {
  useStylesScoped$(ContactStyles);
  console.log("Hello from Contact Page");
  const formVisible = useSignal(false);
  const formState = useStore({ name: "", message: "" });
  return (
    <article>
      <h2>Contact Mario Life</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo praesentium
        corporis, sint doloremque saepe neque iure perferendis consequatur
        voluptatem recusandae eum error nam eius voluptates inventore repellat
        vero officia ex possimus. Suscipit maxime dicta alias illo quidem fugiat
        porro sed assumenda, quis facere ea, placeat maiores modi doloremque,
        cumque ipsum?
      </p>
      <button onClick$={() => (formVisible.value = !formVisible.value)}>
        {formVisible.value ? "Maybe Later 🤔" : "Contact Me 😀"}
      </button>
      {formVisible.value && (
        <form
          preventdefault:submit
          onSubmit$={() => {
            console.log(formState);
            formState.name = "";
            formState.message = "";
          }}
        >
          <label>
            <span> Name </span>
            <input
              type="text"
              value={formState.name}
              onInput$={(e) =>
                (formState.name = (e.target as HTMLInputElement).value)
              }
            />
          </label>
          <label>
            <span>Thoughts ✉️ </span>
            <textarea
              value={formState.message}
              onInput$={(e) =>
                (formState.message = (e.target as HTMLTextAreaElement).value)
              }
            ></textarea>
          </label>
          <button> ✈️ </button>
          <button
            type="button"
            onClick$={() => {
              formState.name = "";
              formState.message = "";
            }}
          >
            {" "}
            🆑{" "}
          </button>
        </form>
      )}
      {/* {formState.name} {formState.message} */}
    </article>
  );
});
