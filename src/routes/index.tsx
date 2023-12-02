import { component$, useResource$, Resource } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";

interface BlogData {
  id: number;
  title: string;
  content: string;
}

export async function getBlogs() {
  const response = await fetch("http://localhost:3000/blogs");
  const data = await response.json();
  return Array.isArray(data)
    ? data
    : Promise.reject({ message: "Data Fetching Failed" });
}

export default component$(() => {
  const blogsData = useResource$<BlogData[]>(() => {
    return getBlogs();
  });

  return (
    <div>
      <h1>Okie Dokie!</h1>
      <Resource
        value={blogsData}
        onPending={() => <div>Loading blogs...</div>}
        onResolved={(blogs) => (
          <div class="blogs">
            {blogs &&
              blogs.map((blog) => (
                <div key={blog.id}>
                  <h3>{blog.title}</h3>
                  <p>{blog.content.slice(0, 50)}...</p>
                  <Link href={"/blog/" + blog.id}>Read More</Link>
                </div>
              ))}
          </div>
        )}
      />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Mario Life",
  meta: [
    {
      name: "description",
      content: "a blog site about everything Super Mario related",
    },
  ],
};
