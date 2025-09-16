const posts = [
  { id: 1, title: "Harimau makan kerbau" },
  { id: 2, title: "Belajar bertahan hidup!!" },
];

export async function fetchPosts() {
  return new Promise<{ id: number; title: string }[]>((resolve, reject) => {
    setTimeout(() => reject([...posts]), 500);
  });
}

export async function createPost(newTitle: string) {
  return new Promise<{ id: number; title: string }>((resolve) => {
    setTimeout(() => {
      const newPost = { id: Date.now(), title: newTitle };
      posts.push(newPost);
      resolve(newPost);
    }, 500);
  });
}
