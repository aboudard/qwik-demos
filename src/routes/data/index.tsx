import { component$, useStore } from '@builder.io/qwik';
import { server$ } from '@builder.io/qwik-city';


const serverList = server$(() => {
    return [
      { id: 1, name: 'Velit officia consequat officia esse ullamco.', likes: 0 },
      { id: 2, name: 'Elit incididunt commodo labore culpa et ipsum nostrud consequat deserunt ipsum officia.', likes: 0 },
      { id: 3, name: 'Anim laborum eiusmod cupidatat sint proident ea.', likes: 0 }
    ];
  });

export default component$(() => {

  const list = useStore<{id: number, name: string, likes: number}[]>([]);

  return (
    <div>
      <button onClick$={async () => {
        const response = await serverList();
        console.log(response);

        for await (const item of response) {
          list.push(item);
        }

      }}>server</button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item.id} / {item.name} : [{item.likes}] <button onClick$={() => item.likes++}>like</button></li>
        ))}
      </ul>
    </div>
  );
});
