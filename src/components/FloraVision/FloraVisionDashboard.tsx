import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';

import SearchBar from './SearchBar';
import ActionButtons from './ActionButtons';
import InfoPanel from './InfoPanel';
import { showSuccess } from '@/utils/toast';

// 1. (Refinamento) Criando uma interface para tipagem forte dos dados
interface LocationData {
  locationName: string;
  plantingProbability: 'ALTA' | 'MÉDIA' | 'BAIXA';
  coords: LatLngExpression;
  plantingWindow: {
    recommendation: string;
    analysis: string;
  };
  precipitation: Array<{ day: string; rain: number }>;
  bioindicator: {
    status: string;
    interpretation: string;
  };
  solarIncidence: {
    classification: string;
    hours: string;
  };
  airQuality: {
    classification: string;
    details: string;
  };
}

// Dados iniciais com coordenadas
const initialLocationData: LocationData = {
  locationName: "Fazenda Da Soja- MG",
  coords: [-19.9167, -43.9345], // Coordenadas de Belo Horizonte, MG como exemplo
  plantingProbability: "ALTA",
  plantingWindow: {
    recommendation: "Ideal",
    analysis: "A combinação de chuvas recentes, umidade do solo adequada e previsão de sol moderado cria uma janela de plantio perfeita para os próximos 3-5 dias."
  },
  precipitation: [
    { day: "Hoje", rain: 5 }, { day: "Ter", rain: 15 }, { day: "Qua", rain: 8 },
    { day: "Qui", rain: 2 }, { day: "Sex", rain: 0 }, { day: "Sáb", rain: 0 }, { day: "Dom", rain: 3 },
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
  const [locationData, setLocationData] = useState<LocationData>(initialLocationData);

  const handleSearch = (query: string) => {
    if (!query) return;

    const probabilities: Array<'ALTA' | 'MÉDIA' | 'BAIXA'> = ["ALTA", "MÉDIA", "BAIXA"];
    const randomProbability = probabilities[Math.floor(Math.random() * probabilities.length)];

    setLocationData(prevData => ({
      ...prevData,
      locationName: query,
      plantingProbability: randomProbability,
      // Em um app real, você buscaria as novas coordenadas aqui
      coords: [-23.5505, -46.6333], // Ex: Coordenadas de São Paulo
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
      {/* 2. (Ponto Principal) Mapa Interativo com React Leaflet */}
      <MapContainer center={locationData.coords} zoom={13} scrollWheelZoom={true} className="w-full h-full z-0">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={locationData.coords}>
          <Popup>
            {locationData.locationName} <br /> Probabilidade de Plantio: {locationData.plantingProbability}
          </Popup>
        </Marker>
      </MapContainer>

      {/* 3. (Refinamento) Agrupando UI flutuante em um único container */}
      <div className="absolute inset-0 z-10 p-4 flex flex-col justify-between pointer-events-none">
        <div className="pointer-events-auto">
          <SearchBar onSearch={handleSearch} />
        </div>
        
        {/* Espaçador para empurrar o resto para baixo (se necessário) */}
        <div className="flex-grow"></div> 
        
        <div className="flex items-end gap-4 pointer-events-auto">
          <InfoPanel data={locationData} />
          <ActionButtons onRecenter={handleRecenter} onLayersClick={handleLayersClick} />
        </div>
      </div>
    </div>
  );
};

export default FloraVisionDashboard;
