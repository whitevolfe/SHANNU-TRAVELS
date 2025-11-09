import { Card } from '@/components/ui/card';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Top 10 Tourist Destinations in Sri Lanka',
      date: 'November 9, 2025',
      excerpt:
        'Discover the most beautiful and culturally rich destinations across Sri Lanka. From ancient temples to pristine beaches...',
      image: 'https://source.unsplash.com/800x400/?srilanka,tourism',
    },
    {
      title: 'Essential Travel Tips for First-Time Visitors',
      date: 'November 8, 2025',
      excerpt:
        'Planning your first trip to Sri Lanka? Here are the essential tips you need to know about transportation, accommodation...',
      image: 'https://source.unsplash.com/800x400/?travel,tips',
    },
    {
      title: 'Local Cuisine Guide: Must-Try Sri Lankan Dishes',
      date: 'November 7, 2025',
      excerpt:
        "Explore the rich flavors of Sri Lankan cuisine. From spicy curries to sweet desserts, here's your guide to local delicacies...",
      image: 'https://source.unsplash.com/800x400/?srilanka,food',
    },
  ];

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-4xl font-bold mb-8 text-primary'>Travel Blog</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {blogPosts.map((post, index) => (
          <Card key={index} className='overflow-hidden'>
            <img
              src={post.image}
              alt={post.title}
              className='w-full h-48 object-cover'
            />
            <div className='p-4'>
              <h2 className='text-xl font-semibold mb-2'>{post.title}</h2>
              <p className='text-sm text-gray-500 mb-2'>{post.date}</p>
              <p className='text-gray-600'>{post.excerpt}</p>
              <button className='mt-4 text-primary hover:text-primary-dark transition-colors'>
                Read More →
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Blog;
