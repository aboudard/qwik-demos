import { component$, useSignal, useStore } from '@builder.io/qwik';
import { server$ } from '@builder.io/qwik-city';

const stream = server$(async function* () {
  for (let i = 0; i < 10; i++) {
    yield i;
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
});

const serverList = server$(() => {
    return [
      { id: 1, name: 'Velit officia consequat officia esse ullamco.', likes: 0 },
      { id: 2, name: 'Elit incididunt commodo labore culpa et ipsum nostrud consequat deserunt ipsum officia.', likes: 0 },
      { id: 3, name: 'Anim laborum eiusmod cupidatat sint proident ea.', likes: 0 }
    ];
  });

export default component$(() => {

  const message = useSignal('');
  const list = useStore<{id: number, name: string, likes: number}[]>([]);

  return (
    <div>
      <button onClick$={async () => {
        const response = await serverList();
        for await (const item of response) {
          list.push(item);
        }
      }}>server</button>
      <button
        onClick$={async () => {
          const response = await stream();
          for await (const i of response) {
            message.value += ` ${i}`;
          }
        }}
      >
        start
      </button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item.id} / {item.name} : [{item.likes}] <button onClick$={() => item.likes++}>like</button></li>
        ))}
      </ul>
      <div>Message : {message.value}</div>
    </div>
  );
});
