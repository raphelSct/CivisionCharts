"use client";
import { useState } from 'react';
import FilterBar from './components/FilterBar';
import PriceDisplay from './components/PriceDisplay';
import Charts from './components/Charts';
import data from './data/database.json';



interface DataItem {
  saison: string;
  prix: number;
  niveau: string;
  [key: string]: string | number | boolean; 
}

export default function Home() {
  const [filteredData, setFilteredData] = useState<DataItem[]>(data);

  const handleFilterChange = (filters: { saison?: string; niveau?: string }) => {
    let filtered = data;
    if (filters.saison) {
      filtered = filtered.filter((item) => item.saison === filters.saison);
    }
    if (filters.niveau) {
      filtered = filtered.filter((item) => item.niveau === filters.niveau);
    }
    setFilteredData(filtered);
  };

  const totalPrix = filteredData.reduce((acc, item) => acc + item.prix, 0);

  return (
    <div>
      <FilterBar onFilterChange={handleFilterChange} />
      <PriceDisplay total={totalPrix} />
      <Charts data={filteredData} />
    </div>
  );
}
