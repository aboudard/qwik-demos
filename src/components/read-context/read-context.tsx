import { component$, useContext } from '@builder.io/qwik';
import { RedundantContext } from '~/routes/context';

export const ReadContext = component$(() => {
  const redundant = useContext(RedundantContext);
  return <div>This is redundant {redundant.value}</div>;
});
