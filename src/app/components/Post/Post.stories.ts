import type { Meta, StoryObj } from '@storybook/react';
import { Post } from './Post';
import { Post as PostInterface } from '@/app/models/Post';

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

const samplePost: PostInterface = {
  id: '1',
  title: 'Storybook & Chromatic',
  date: 'October 10, 2024',
  content:
    'Storybook and Chromatic are tools used to build, test, and document UI components in isolation...',
  link: '#',
};

export const Default: Story = {
  args: {
    post: samplePost,
  },
};

export const EmptyContentPost: Story = {
  args: {
    post: {
      ...samplePost,
      content: '',
    },
  },
};
