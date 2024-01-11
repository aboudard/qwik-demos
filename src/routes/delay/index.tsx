import { $, Resource, component$, useResource$, useStore } from '@builder.io/qwik';
import styles from './delay.module.css';

export default component$(() => {

  const user = useStore({ name: "John", age: 20 });

  return (
    <div>
      <h1>User: {user.name}</h1>
        <button onClick$={$(() => user.name = 'Other')}>Name</button>
        <p>{delay('Alain', 500)}</p>
        <User text="Alain" delay={1500} />
        <User text="John" delay={2000} />
        <User text="Bob" delay={3000} />
    </div>
  );
});

export function delay<T>(value: T, ms: number): Promise<T> {
    return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

export function simpleDelay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export const User = component$((props: {text: string, delay: number}) => {

  const resource = useResource$<string>(async ({track}) => {
    track(() => props.text);
    await simpleDelay(props.delay);
    return props.text;
  });

  return (
    <Resource 
    value={resource} 
    onPending={() => <>Loading ...</>}
    onResolved={(value) => <div class={styles.user}>User : {value}</div>}
    />
  );
});