"use client";

import Card from "../_components/Card";
import { useState, useEffect } from "react";
// import fakeCoffee from "../db.json";

// export const revalidate = 3600;

// export const metadata = {
//   title: "Our Range",
// };

export default function Page() {
  const [data, setData] = useState([]);

  // Fetch the data from db.json
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("db.json"); // Adjust the path if the file is in a different location
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        console.log(jsonData);
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    // ;
  }, []);

  return (
    <>
      <h1 className="my-5">Our Range</h1>
      <div className="flex flex-col lg:flex-row gap-5 lg:justify-between px-5 lg:px-0">
        {data.map((coffee) => (
          <Card coffee={coffee} key={coffee.id} />
        ))}
      </div>
    </>
  );
}
