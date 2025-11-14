// import { Card } from '@/components/ui/card';
// import img1 from '@/assets/shannu-post1.png';
// import img2 from '@/assets/shannu-post2.png';
// import img3 from '@/assets/shannu-post3.png';
// import img4 from '@/assets/shannu-post4.png';
// import img5 from '@/assets/shannu-post5.png';
// import img6 from '@/assets/shannu-post6.png';
// import img7 from '@/assets/shannu-post7.png';
// import img8 from '@/assets/shannu-post8.png';
// import img9 from '@/assets/shannu-post9.png';
// import img10 from '@/assets/shannu-post10.png';

// const Gallery = () => {
//   const images = [
//     { url: img1, title: 'Shannu Post 1', description: 'Gallery image 1' },
//     { url: img2, title: 'Shannu Post 2', description: 'Gallery image 2' },
//     { url: img3, title: 'Shannu Post 3', description: 'Gallery image 3' },
//     { url: img4, title: 'Shannu Post 4', description: 'Gallery image 4' },
//     { url: img5, title: 'Shannu Post 5', description: 'Gallery image 5' },
//     { url: img6, title: 'Shannu Post 6', description: 'Gallery image 6' },
//     { url: img7, title: 'Shannu Post 7', description: 'Gallery image 7' },
//     { url: img8, title: 'Shannu Post 8', description: 'Gallery image 8' },
//     { url: img9, title: 'Shannu Post 9', description: 'Gallery image 9' },
//     { url: img10, title: 'Shannu Post 10', description: 'Gallery image 10' },
//   ];

//   return (
//     <div className='container mx-auto px-4 py-8'>
//       <h1 className='text-4xl font-bold mb-8 text-primary'>Travel Gallery</h1>
//       <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
//         {images.map((image, index) => (
//           <Card key={index} className='overflow-hidden group'>
//             <div className='relative'>
//               <img
//                 src={image.url}
//                 alt={image.title}
//                 className='w-full h-64 object-cover transition-transform group-hover:scale-105'
//               />
//               <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4'>
//                 <h3 className='text-white text-xl font-semibold'>
//                   {image.title}
//                 </h3>
//                 <p className='text-white/80'>{image.description}</p>
//               </div>
//             </div>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Gallery;
