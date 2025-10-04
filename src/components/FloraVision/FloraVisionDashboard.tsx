import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ActionButtons from './ActionButtons';
import InfoPanel from './InfoPanel';

// Initial mock data to represent the user's primary location
const initialMockLocationData = {
  locationName: "Fazenda Boa Esperança, MG",
  plantingProbability: "ALTA" as "ALTA" | "MÉDIA" | "BAIXA",
  plantingWindow: {
    recommendation: "Ideal",
    analysis: "A combinação de chuvas recentes, umidade do solo adequada e previsão de sol moderado cria uma janela de plantio perfeita para os próximos 3-5 dias."
  },
  precipitation: [
    { day: "Hoje", rain: 5 },
    { day: "Ter", rain: 15 },
    { day: "Qua", rain: 8 },
    { day: "Qui", rain: 2 },
    { day: "Sex", rain: 0 },
    { day: "Sáb", rain: 0 },
    { day: "Dom", rain: 3 },
  ],
  bioindicator: {
    status: "Floração Ativa",
    interpretation: "A floração do Ipê Amarelo na região indica que o ciclo de chuvas está se estabilizando, um forte bioindicador positivo."
  },
  solarIncidence: {
    classification: "Ótima",
    hours: "9.5h de sol direto"
  },
  airQuality: {
    classification: "Boa",
    details: "Sem alertas de fumaça ou poluentes significativos. Vento sopra da direção Leste."
  }
};


const FloraVisionDashboard = () => {
  const [locationData, setLocationData] = useState(initialMockLocationData);

  const handleSearch = (query: string) => {
    if (!query) return;

    // Simulate fetching new data for the searched location
    const probabilities: ("ALTA" | "MÉDIA" | "BAIXA")[] = ["ALTA", "MÉDIA", "BAIXA"];
    const randomProbability = probabilities[Math.floor(Math.random() * probabilities.length)];

    setLocationData(prevData => ({
      ...prevData,
      locationName: query,
      plantingProbability: randomProbability,
    }));
  };

  const handleRecenter = () => {
    setLocationData(initialMockLocationData);
  };

  return (
    <div className="relative w-full h-full">
      {/* Background Satellite Map Image */}
      <img
        src="https://images.unsplash.com/photo-1542863282-00144736a633?q=80&w=2670&auto=format&fit=crop"
        alt="Satellite map of a rural area"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Floating UI Elements */}
      <div className="absolute inset-0 z-10 p-4 flex flex-col justify-between pointer-events-none">
        <SearchBar onSearch={handleSearch} />
        
        {/* This div is a placeholder to push the InfoPanel to the bottom */}
        <div></div>
      </div>
      
      <ActionButtons onRecenter={handleRecenter} />
      <InfoPanel data={locationData} />

    </div>
  );
};

export default FloraVisionDashboard;