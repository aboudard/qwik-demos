import { component$, useStore } from '@builder.io/qwik';

export default component$(() => {
  console.log('Counter Store rendering');
  const count = useStore({val: 0});
  return (
    <div>
      Count Store
      <button onClick$={()=>count.val++}>Count</button>
      <CountChild value={count.val} />
    </div>
  );
});

interface CounterProps {
    value: number;
}

export const CountChild = component$<CounterProps>((props) => {
  console.log('CountChild rendering');
  return (
    <div>
      Count Child : {props.value}
    </div>
  );
});
