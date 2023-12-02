import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

interface BlogData {
  id: string;
  title: string;
  content: string;
}

export const useBlogDetails = routeLoader$(async (requestEvent) => {
  const res = await fetch(
    `http://localhost:3000/blogs/${requestEvent.params.id}`,
  );
  if (!res.ok) {
    console.log("redirecting user");
    throw requestEvent.redirect(302, "/about");
  }
  const blog = await res.json();
  return blog as BlogData;
});

export default component$(() => {
  const signal = useBlogDetails();

  return (
    <div>
      <h2>{signal.value.title}</h2>
      <p>{signal.value.content}</p>
    </div>
  );
});
