import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { AnyAction } from "redux";

export const useDispatchActionFn = <T = unknown>(
  action: AnyAction | ((value: T) => AnyAction)
) => {
  const dispatch = useDispatch();

  const dispatchAction = useCallback(
    (value?: T) => {
      if (typeof action === "function" && value !== undefined) {
        dispatch(action(value));
      } else if (typeof action === "object") {
        dispatch(action);
      }
    },
    [action, dispatch]
  );

  return dispatchAction;
};
