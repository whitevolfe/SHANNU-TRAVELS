const AirlinePartners = () => {
  const airlines = [
    { name: "SalamAir", color: "#2E7D32" },
    { name: "flydubai", color: "#FF6B35" },
    { name: "IndiGo", color: "#1E3A8A" },
    { name: "Jazeera", color: "#0EA5E9" },
  ];

  return (
    <section className="py-12 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {airlines.map((airline) => (
            <div 
              key={airline.name}
              className="flex items-center justify-center h-20 bg-white rounded-lg shadow-card hover:shadow-hover transition-shadow"
            >
              <span 
                className="text-2xl font-bold"
                style={{ color: airline.color }}
              >
                {airline.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AirlinePartners;
