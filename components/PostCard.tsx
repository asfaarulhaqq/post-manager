import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import ArrowRight from './icons/ArrowRight';

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostCardProps {
  post: Post;
}
const AuthorAttribution = () => <div>By Post Manager</div>;

const PostCard: React.FC<PostCardProps> = ({ post }) => (
  <div key={post.id} className='post-excerpt p-5'>
    <h2 className="pb-3 text-xl font-semibold tracking-tight text-zinc-800">
      <Link href={`/posts/${post.id}`}>{post.title}</Link>
    </h2>
    <div className="flex flex-col justify-between space-y-4 md:flex-row md:space-y-0">
      <div className="flex items-center space-x-2 text-zinc-500 md:space-y-0">
        <AuthorAttribution />
      </div>
    </div>
    <div className="py-6 text-zinc-500">
      <p>{post.body}</p>
    </div>
    <div className="flex items-center justify-between font-medium text-green-600">
      <Link href={`/posts/${post.id}`}>
        <div className="flex items-center space-x-2">
          <span>Read more</span>
          <ArrowRight className="h-4 w-4 text-inherit" />
        </div>
      </Link>
    </div>
  </div>
);

export default function PostList(): JSX.Element {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </>
  );
}
