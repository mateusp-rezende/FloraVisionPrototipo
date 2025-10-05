import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ActionButtons from './ActionButtons';
import InfoPanel from './InfoPanel';
import { showSuccess } from '@/utils/toast';

// Mock data simulating an API response for a selected location
const initialLocationData = {
  locationName: "Fazenda Da Soja- MG",
  plantingProbability: "ALTA",
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
  const [locationData, setLocationData] = useState(initialLocationData);

  const handleSearch = (query: string) => {
    if (!query) return;

    // Simulate fetching new data for the searched location
    const probabilities = ["ALTA", "MÉDIA", "BAIXA"];
    const randomProbability = probabilities[Math.floor(Math.random() * probabilities.length)];

    setLocationData(prevData => ({
      ...prevData,
      locationName: query,
      plantingProbability: randomProbability,
    }));
    showSuccess(`Exibindo dados para ${query}`);
  };

  const handleRecenter = () => {
    setLocationData(initialLocationData);
    showSuccess("Mapa recentralizado na sua propriedade.");
  };

  const handleLayersClick = () => {
    showSuccess("Funcionalidade de camadas em desenvolvimento.");
  };

  return (
    <div className="relative w-full h-full">
      {/* Background Satellite Map Image */}
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3817.2794943136378!2d-49.36318202572967!3d-16.911499951451802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935effe6bdc2f5e7%3A0xfd604fba915c8632!2sFazenda%20Jabuticabal!5e0!3m2!1spt-BR!2sbr!4v1759676661213!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      {/* Floating UI Elements */}
      <div className="absolute inset-0 z-10 p-4 flex flex-col justify-between pointer-events-none">
        <SearchBar onSearch={handleSearch} />
        
        <div></div>
      </div>
      
      <ActionButtons onRecenter={handleRecenter} onLayersClick={handleLayersClick} />
      <InfoPanel data={locationData} />

    </div>
  );
};

export default FloraVisionDashboard;
