import { useMutation } from "@apollo/client";
import { debounce } from "lodash";
import { useRef } from "react";

export function useDebouncedMutation({
  mutationDocument,
  makeUpdateFunction,
  wait = 250,
  refetchQueries,
}) {
  const [originalMutation] = useMutation(mutationDocument);

  const abortController = useRef();
  const debouncedMutation = useRef(
    debounce(async (mutationFunc) => {
      // eslint-disable-next-line
      const controller = new AbortController();
      abortController.current = controller;

      await mutationFunc({
        variables,
        context: { fetchOptions: { signal: controller.signal } },
      });
    }, wait)
  );

  const abortLatest = () => abortController.current?.abort();

  const mutationWithOptimisticUI = async ({ variables, context }) => {
    let update = undefined;

    if (makeUpdateFunction) {
      update = makeUpdateFunction(variables);
    }

    return await originalMutation({
      variables,
      context,
      update,
      refetchQueries,
      awaitRefetchQueries: refetchQueries ? true : undefined,
    });
  };

  return async (newVariables) => {
    abortLatest();
    return await debouncedMutation.current(
      mutationWithOptimisticUI,
      newVariables
    );
  };
}
