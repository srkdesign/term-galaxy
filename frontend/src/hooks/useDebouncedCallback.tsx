import { debounce } from "lodash";
import { useMemo } from "react";

interface UseDebouncedCallbackProps {
  callback: () => void;
  delay: number;
}

const useDebouncedCallback = ({ callback, delay }: UseDebouncedCallbackProps) => {
  return useMemo(() => debounce(callback, delay), [callback, delay]);
}

export default useDebouncedCallback;