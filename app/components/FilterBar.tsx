import { ChangeEvent, useState } from 'react';

interface FilterBarProps {
  onFilterChange: (filters: { saison: string; niveau: string }) => void;
}

export default function FilterBar({ onFilterChange }: FilterBarProps) {
    const [filters, setFilters] = useState<{ saison: string; niveau: string }>({
        saison: '',
        niveau: '',
      });
    
      const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;

        const updatedFilters = { ...filters, [name]: value };
        setFilters(updatedFilters);
    
        onFilterChange(updatedFilters);
      };

  return (
    <div className='filter-bar'>
      <label>
        Saison : 
        <select name="saison"  onChange={handleChange}>
          <option value="">Toutes</option>
          <option value="été">Été</option>
          <option value="hiver">Hiver</option>
          <option value="automne">Automne</option>
          <option value="printemps">Printemps</option>
        </select>
      </label>
      <label>
        Niveau : 
        <select name="niveau" onChange={handleChange}>
          <option value="">Tous</option>
          <option value="novice">Novice</option>
          <option value="moyen">Moyen</option>
          <option value="pro">Pro</option>
        </select>
      </label>
    </div>
  );
}
