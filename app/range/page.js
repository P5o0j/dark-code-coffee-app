"use client";

import Card from "../_components/Card";
import { useState, useEffect } from "react";
import Search from "../_components/Search";
import CardList from "../_components/CardList";

export default function Page() {
  const [searchField, setSearchField] = useState("");
  const [coffees, setCoffees] = useState([]);
  const [filteredCoffees, setFilteredCoffees] = useState(coffees);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("db.json"); // Adjust the path if the file is in a different location
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        console.log(jsonData);
        setCoffees(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    // ;
  }, []);

  useEffect(() => {
    const newFilteredCoffees = coffees.filter((coffee) => {
      return coffee.title.toLocaleLowerCase().includes(searchField);
    });

    setFilteredCoffees(newFilteredCoffees);
  }, [coffees, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-5 lg:justify-between px-5 lg:px-0 my-3 items-center">
        <h1>Our Range</h1>
        <Search placeholder="search coffees" onChangeHandler={onSearchChange} />
      </div>
      <div>
        <CardList coffees={filteredCoffees} />
      </div>
    </>
  );
}
