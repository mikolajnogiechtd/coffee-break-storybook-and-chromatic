import type { Meta, StoryObj } from '@storybook/react';
import { Post } from './Post';
import { Post as PostInterface } from '@/app/models/Post'; // Assuming you have a Post model defined somewhere

const meta = {
  title: 'Shared/Post',
  component: Post,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Post>;

export default meta;
type Story = StoryObj<typeof meta>;

// Mock Post Object
const samplePost: PostInterface = {
  id: '1',
  title: 'Storybook & Chromatic',
  date: 'October 10, 2024',
  content:
    'Storybook and Chromatic are tools used to build, test, and document UI components in isolation...',
  link: '#',
};

// Default Post Story
export const Default: Story = {
  args: {
    post: samplePost,
  },
};

// Empty content Post Story
export const EmptyContentPost: Story = {
  args: {
    post: {
      ...samplePost,
      content: '',
    },
  },
};
