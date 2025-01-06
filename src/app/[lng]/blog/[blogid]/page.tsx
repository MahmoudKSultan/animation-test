import BlogPageClient from "./BlogPostClient";
import { getTranslatedPosts } from "@/data/constants/data";

export async function generateStaticParams() {
  const languages = ["ar", "en", "zh"];
  const params: Array<{ lng: string; blogid: string }> = [];

  languages.forEach((lng) => {
    const posts = getTranslatedPosts(lng);
    posts.forEach((post: { id: string }) => {
      params.push({ lng, blogid: post.id.toString() });
    });
  });

  return params;
}

type Params = Promise<{
  lng: string;
  blogid: string;
}>;

const BlogPage = async ({ params }: { params: Params }) => {
  const { lng, blogid } = await params;
  const posts = getTranslatedPosts(lng);
  const blog = posts.find(
    (post: { id: number }) => post.id === parseInt(blogid)
  );

  return <BlogPageClient blog={blog} lng={lng} />;
};

export default BlogPage;
