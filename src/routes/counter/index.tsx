import { component$, useSignal } from '@builder.io/qwik';

export default component$(() => {
  const count = useSignal(0);
  return (
    <div>
      <div>Count : {count.value}</div>
      <button onClick$={()=>count.value += 1}>Counter</button>
      <button onClick$={()=>alert('Fenouil')}>Alert</button>
    </div>
  );
});
