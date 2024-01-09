"use client";

import Link from 'next/link';
// import { getPost } from '../../../lib/api';
import ArrowRight from '../../../components/icons/ArrowLeft';
import { sanitize } from 'isomorphic-dompurify';
import { useEffect, useState } from 'react';
import BookMarked from '../../../components/icons/bookmarked';
import BookMark from '../../../components/icons/Bookmark';


const SinglePage = (post) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [postsById, setPostsById] = useState([]);
  const AuthorAttribution = () => <div>By Post Manager</div>;
  interface IProps {
    className: string;
  }
  useEffect(() => {
    const postID = post.params.slug;

    const fetchDataById = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setPostsById(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataById();
  }, []);

  function handleBookmarkClick() {
    const postId = post.params.slug;
    localStorage.setItem('bookmarkedPostId', postId);
    setIsBookmarked(true);
    console.log('Post ID bookmarked:', postId);
  }
  const buttonClick = document.getElementById('bookmarkButton')
  if (buttonClick) {
    buttonClick.addEventListener('click', handleBookmarkClick);
  }

  useEffect(() => {
    const bookmarkedPostId = localStorage.getItem('bookmarkedPostId');
    setIsBookmarked(!!bookmarkedPostId);
  }, []);

  

  const handleRemoveBookmarkClick = () => {
    localStorage.removeItem('bookmarkedPostId');
    setIsBookmarked(false);
    console.log('Bookmark removed');
  };
  return (
    <>
      <main className="mx-auto mt-4 flex flex-col justify-center">
        <div className="mx-auto flex w-full flex-col items-start justify-center px-4 md:flex-row">
          <div className="mt-4 flex justify-start pb-4 md:justify-center md:pb-0 md:pr-20">
            <Link
              href="/"
              passHref
              className="rounded-full border border-zinc-100 bg-white p-2 text-zinc-700 shadow-md dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
            >
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mr-20 flex w-full max-w-3xl flex-col justify-start md:w-3/4">
            {postsById ? (
              <>
                <h2>
                  <Link href={`/posts/${postsById['id']}`} passHref>
                    {postsById['title']}
                  </Link>
                </h2>
                <div className="flex flex-col justify-between space-y-4 pb-8 md:flex-row md:space-y-0">
                  <div className="flex items-center space-x-2 text-zinc-500 dark:text-zinc-400 md:space-y-0">
                    <AuthorAttribution /> 
                    {isBookmarked ? (
                      <button id='bookmarkButton' onClick={handleRemoveBookmarkClick}>
                        <BookMarked />
                      </button>
                    ) : (
                      <button id='bookmarkButton' onClick={handleBookmarkClick}>
                        <BookMark />
                      </button>
                    )}
                </div>
              </div>
            <hr className="w-full border-t border-zinc-300 pb-8 dark:border-zinc-700" />
            <div
              dangerouslySetInnerHTML={{
                __html: sanitize(postsById['body']) ?? '', // Assuming the content is in the 'body' property
              }}
            ></div>
          </>
          ) : (
          <>
            <div className="text-center">Post Not found</div>
          </>
            )}
          <div className="mx-auto mt-8 w-full">
            <hr className="w-full border-t border-zinc-300 pb-8 dark:border-zinc-700" />
          </div>
        </div>
      </div>
    </main >
    </>
  );
}
export default SinglePage;

