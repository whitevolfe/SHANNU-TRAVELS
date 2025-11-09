import { Card } from '@/components/ui/card';

const Gallery = () => {
  const images = [
    {
      url: 'https://source.unsplash.com/800x600/?srilanka,temple',
      title: 'Ancient Temples',
      description: 'Sacred Buddhist temples across Sri Lanka',
    },
    {
      url: 'https://source.unsplash.com/800x600/?srilanka,beach',
      title: 'Pristine Beaches',
      description: 'Beautiful coastal areas and beaches',
    },
    {
      url: 'https://source.unsplash.com/800x600/?srilanka,tea',
      title: 'Tea Plantations',
      description: 'Lush green tea estates in the highlands',
    },
    {
      url: 'https://source.unsplash.com/800x600/?srilanka,wildlife',
      title: 'Wildlife Safaris',
      description: 'Exotic wildlife in natural habitats',
    },
    {
      url: 'https://source.unsplash.com/800x600/?srilanka,culture',
      title: 'Cultural Events',
      description: 'Traditional ceremonies and festivals',
    },
    {
      url: 'https://source.unsplash.com/800x600/?srilanka,food',
      title: 'Local Cuisine',
      description: 'Authentic Sri Lankan dishes and spices',
    },
  ];

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-4xl font-bold mb-8 text-primary'>Travel Gallery</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {images.map((image, index) => (
          <Card key={index} className='overflow-hidden group'>
            <div className='relative'>
              <img
                src={image.url}
                alt={image.title}
                className='w-full h-64 object-cover transition-transform group-hover:scale-105'
              />
              <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4'>
                <h3 className='text-white text-xl font-semibold'>
                  {image.title}
                </h3>
                <p className='text-white/80'>{image.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
