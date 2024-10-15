'use client';

import { Post } from './components/Post/Post';
import { Post as PostInterface } from './models/Post';

const posts: PostInterface[] = [
  {
    id: '1',
    title: 'Introduction',
    date: 'October 10, 2024',
    content:
      'Learn how to use Storybook and Chromatic to create isolated UI components and improve testing...',
    link: '#',
  },
  {
    id: '2',
    title: 'Best Practices for Development',
    date: 'October 12, 2024',
    content:
      'Follow these best practices to ensure your components are reusable, maintainable, and scalable...',
    link: '#',
  },
  {
    id: '3',
    title: 'How to Optimize UI Performance',
    date: 'October 14, 2024',
    content:
      'Improving UI performance is key for providing smooth and fast user experiences...',
    link: '#',
  },
];

export default function Home() {
  return (
    <div className='max-w-screen-xl m-0 mx-auto py-24'>
      <h1 className='text-center text-4xl font-bold mb-16'>
        Coffee Break | Storybook & Chromatic
      </h1>
      <div className='max-w-screen-xl m-0 mx-auto py-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
