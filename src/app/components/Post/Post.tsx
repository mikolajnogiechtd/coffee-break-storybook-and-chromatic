import { Post as PostModel } from '@/app/models/Post';
import React from 'react';
import { Button } from '../Button/Button';
import classNames from 'classnames';

export interface PostProps {
  post: PostModel;
}

export const Post = ({ post }: PostProps) => {
  return (
    <div className='border p-4 rounded-lg shadow-lg w-full max-w-96'>
      <h2 className='text-xl font-semibold mb-2'>{post.title}</h2>
      <p className='text-sm text-gray-500 mb-2'>{post.date}</p>
      <p
        className={classNames('mb-4 h-20', { 'text-gray-500': !post.content })}>
        {post.content || 'No preview'}
      </p>
      <Button
        variant='primary'
        size='small'
        onClick={() => (window.location.href = post.link)}>
        Read More
      </Button>
    </div>
  );
};
