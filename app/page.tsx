// Assuming each post has a unique 'id' property
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ReactPaginate from "react-paginate";

// Placeholder components - replace these with your actual components
const AuthorAttribution = () => <div>By Post Manager</div>;
const ArrowRight = () => <span>&rarr;</span>;

export default function BlogsList(): JSX.Element {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;
  const handlePageClick = (data) => {
    setCurrentPage(data.selected + 1);
  };
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  // Add this function definition after the useEffect hook
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // console.log("Posts:", posts); // Log posts to the console to inspect the data

  return (
    <div className="container mx-auto mt-4 space-y-16 px-4 lg:px-0">
      <div className="grid grid-cols-3 gap-4">
        {/* {posts?.map((post) => ( */}
        {currentPosts.map((post) => (
          <div key={post['id']} className="post-card shadow rounded">
            <div className='post-excerpt p-5'>
              <h2 className="pb-3 text-xl font-semibold tracking-tight text-zinc-800">
                <Link href={`/posts/${post['id']}`}>
                  {post['title']}
                </Link>
              </h2>
              <div className="flex flex-col justify-between space-y-4 md:flex-row md:space-y-0">
                <div className="flex items-center space-x-2 text-zinc-500 md:space-y-0">
                  <AuthorAttribution />
                </div>
              </div>
              <div className="py-6 text-zinc-500">
                <p>{post['body']}</p>
              </div>
              <div className="flex items-center justify-between font-medium text-green-600">
                <Link href={`/posts/${post['id']}`}>
                  <span>Read more</span> <ArrowRight />
                </Link>
              </div>
            </div>

          </div>
        ))}
      </div>
        <ReactPaginate
          className="flex justify-center blogs_pagination"
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          pageCount={Math.ceil(posts.length / postsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
    </div>
  );
}

export const revalidate = 60;
