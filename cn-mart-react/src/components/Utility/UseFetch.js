import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [err, setErr] = useState(null);

  useEffect(() => {
    setErr(null);
    setData([]);
    async function getData() {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };

      try {
        const data = await fetch(url, options);
        const formattedData = await data.json();
        if (formattedData.data) setData(formattedData.data);
        else throw new Error(formattedData.err);
      } catch (e) {
        setErr(e.message);
      }
    }
    getData();
  }, [url]);

  return { data, err };
}
