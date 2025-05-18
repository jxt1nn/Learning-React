import { useContext, useEffect, useState, useRef } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  const [fetching, setFetching] = useState(false);

  const isMounted = useRef(true); // 👈 track component mount status

  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();

    fetch("https://dummyjson.com/posts", { signal: controller.signal })
      .then((res) => res.json())
      .then((data) => {
        if (isMounted.current) {
          addInitialPosts(data.posts);
          setFetching(false);
        }
      });

    return () => {
      isMounted.current = false; // 👈 mark as unmounted
      controller.abort();
      console.log("Cleaning up UseEffect.");
    };
  }, []);

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

export default PostList;
