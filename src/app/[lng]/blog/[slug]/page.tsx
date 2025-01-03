import Container from "@/components/Container";
import Image from "next/image";
import React from "react";
import { formatText } from "@/lib/utils"; // Import the utility function

// Define the Content interface
interface Content {
  type: "image" | "paragraph" | "heading" | "list";
  src?: string;
  alt?: string;
  text?: string;
  level?: number;
  items?: string[];
}

// Define the BlogPostProps interface
interface BlogPostProps {
  params: {
    lng: string;
    slug: string;
  };
}

const BlogPost = async ({ params }: BlogPostProps) => {
  const { lng: lang, slug } = params;
  console.log("Params:", lang, slug);

  // Define the post state with a default value
  let post: {
    title: string;
    content: Content[];
  } = {
    title: "",
    content: [],
  };

  try {
    // Fetch the blog post data
    const response = await fetch(
      `http://localhost:3000/api/blog?post=${slug}&lang=${lang}`
    );
    console.log(response);

    if (!response.ok) {
      throw new Error("Failed to fetch post");
    }

    const data = await response.json();
    console.log("Fetched data:", data);
    post = data;
  } catch (error) {
    console.error("Error fetching post:", error);
  }

  // If the post is empty, show a "Post not found" message
  if (!post.title || post.content?.length === 0) {
    return <p>Post not found.</p>;
  }

  return (
    <div className="py-10">
      <Container>
        <h1 className="text-3xl font-bold">{post.title}</h1>
        {post.content?.map((section, index) => {
          switch (section.type) {
            case "image":
              return (
                <Image
                  key={index}
                  src={section.src as string}
                  alt={section.alt as string}
                  className="my-5"
                  width={800}
                  height={500}
                  style={{ width: "100%", maxWidth: "600px", height: "auto" }}
                />
              );
            case "paragraph":
              return (
                <p
                  key={index}
                  dangerouslySetInnerHTML={{
                    __html: formatText(section.text || ""),
                  }}
                />
              );
            case "heading":
              return React.createElement(
                `h${section.level}`,
                { key: index, className: "text-xl font-bold mt-20 mb-5" },
                section.text
              );
            case "list":
              return (
                <ul key={index}>
                  {section.items?.map((item, i) => (
                    <li
                      key={i}
                      dangerouslySetInnerHTML={{
                        __html: formatText(item || ""),
                      }}
                    />
                  ))}
                </ul>
              );
            default:
              return null;
          }
        })}
      </Container>
    </div>
  );
};

export default BlogPost;
