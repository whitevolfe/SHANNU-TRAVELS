const AwardGallery = () => {
  const photos = Array(8).fill(null);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-foreground mb-12">
          Moments from the Award Ceremony
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {photos.map((_, index) => (
            <div 
              key={index}
              className="aspect-square bg-secondary rounded-lg overflow-hidden shadow-card hover:shadow-hover transition-all cursor-pointer group"
            >
              <div className="w-full h-full bg-gradient-primary opacity-20 group-hover:opacity-30 transition-opacity flex items-center justify-center">
                <span className="text-white text-4xl font-bold opacity-50">
                  {index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardGallery;
