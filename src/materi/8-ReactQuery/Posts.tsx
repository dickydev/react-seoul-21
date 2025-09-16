import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchPosts, createPost } from "./api/fakeApi";

const Posts = () => {
  const queryClient = useQueryClient();

  const {
    data: posts,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  const mutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  if (isLoading) return <p>Loading....</p>;
  if (isError)
    return <p style={{ color: "red" }}>Error :{(error as Error).message}</p>;

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Posts</h1>
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      <button onClick={() => mutation.mutate("Belajar React Query")}>
        Tambah Post
      </button>
    </div>
  );
};

export default Posts;
