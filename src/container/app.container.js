/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";

export const appContainer = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  useEffect(() => {
    if (!data?.length) {
      fetch("https://jsonplaceholder.typicode.com/albums")
        .then((res) => res.json())
        .then((json) => {
          console.log("json", json);
          setData(json);
        });
    }
  }, []);

  const getSearchValue = (e) => {
    e.preventDefault();
    const {
      target: { value },
    } = e;
    const obj = data.find((o) => o.id === Number(value));
    const el = document.getElementById(obj.id);
    setValue(value);
    setTimeout(() => {
      if (el)
        el.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "center",
        });
    }, 300);
  };

  return { data, getSearchValue, value };
};
