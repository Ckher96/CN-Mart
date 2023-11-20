import { useEffect, useState } from "react";

export default function useFetch(url, method = "GET", body = null) {
  const [data, setData] = useState([]);
  const [err, setErr] = useState(null);

  useEffect(() => {
    async function getData() {
      const options = {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
      };

      if (method === "POST") {
        options.body = body;
      }

      try {
        const data = await fetch(url, options);
        const formattedData = await data.json();
        if (formattedData.data) setData(formattedData.data);
        else throw new Error(formattedData.err);
      } catch (e) {
        setErr(e.message);
      }
    }
    setErr(null);
    setData([])
    getData();
  }, [url, method, body]);

  return { data, err };
}
