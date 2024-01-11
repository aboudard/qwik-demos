import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import type { Signal } from '@builder.io/qwik';

export default component$(() => {
  const isClockRunning = useSignal(false);
  const items = new Array(60).fill(0).map((_, index) => "Item de liste " + index);
  return (
    <div>
      <div style="position: sticky; top:0; background: white; border-bottom: 1px solid gray;">
        Scroll to see clock. (Currently clock is
        {isClockRunning.value ? ' running' : ' not running'}.)
      </div>
      <p onClick$={()=>console.log('click')}>Lazy load component when visible</p>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <Clock isRunning={isClockRunning} />
    </div>
  );
});

const Clock = component$<{ isRunning: Signal<boolean> }>(({ isRunning }) => {
  const time = useSignal('paused');
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(({ cleanup }) => {
    isRunning.value = true;
    const update = () => (time.value = new Date().toLocaleTimeString());
    const id = setInterval(update, 1000);
    cleanup(() => clearInterval(id));
  });
  return <div>{time}</div>;
});