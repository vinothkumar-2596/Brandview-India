
import { useState } from 'react';

export default function FilterBar({ categories, onFilter }) {
  const [active, setActive] = useState('All');

  const handleFilter = (category) => {
    setActive(category);
    onFilter(category);
  };

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {['All', ...categories].map((category) => (
        <button
          key={category}
          onClick={() => handleFilter(category)}
          className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
            active === category
              ? 'bg-primary text-primary-foreground'
              : 'bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
