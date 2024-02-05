import { useEffect, useState } from "react";

export function useLocalStorage(initial, key) {
  const [val, setVal] = useState(function () {
    const storedVal = localStorage.getItem(key);
    return JSON.parse(storedVal) || [];
  });
  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(val));
    },
    [key, val]
  );
  return [val, setVal];
}
