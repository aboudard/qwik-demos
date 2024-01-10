import { component$, useSignal } from '@builder.io/qwik';

export default component$(() => {
  const firstName = useSignal('Paul Poule');
  return (
    <div>
      <input type="text" bind:value={firstName} />
      <div>First name: {firstName.value}</div>
    </div>
  );
});
