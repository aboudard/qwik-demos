import { component$, createContextId, useContextProvider, useSignal } from '@builder.io/qwik';
import type { Signal } from '@builder.io/qwik';
import { ReadContext } from '~/components/read-context/read-context';

export const RedundantContext = createContextId<Signal<string>>(
  'redundant-context'
);

export default component$(() => {
  const theme = useSignal('apple');
  useContextProvider(RedundantContext, theme);
  return (
    <div>
      <button
        onClick$={() =>
          (theme.value = theme.value == 'apple' ? 'fennel' : 'apple')
        }
      >
        Redonder
      </button>
      <ReadContext />
    </div>
  );
});
