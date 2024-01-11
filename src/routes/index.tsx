import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>Hi 👋</h1>
      <ul>
        <li><a href="/hello">Hello </a></li>
        <li><a href="/counter">Counter</a></li>
        <li><a href="/counter-store">Counter Store</a></li>
        <li><a href="/binding">Binding</a></li>
        <li><a href="/visible">Visible</a></li>
        <li><a href="/data">Data</a></li>
        <li><a href="/delay">Delay</a></li>
        <li><a href="/context">Context</a></li>
      </ul>
      <p>
        Can't wait to see what you build with qwik!
        <br />
        Happy coding.
      </p>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
