import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: any }) {
  const { searchParams } = new URL(request.url);

  const lang = searchParams.get("lang") || "en"; // Default to 'en' if no language is provided
  const slug = searchParams.get("post") || "post3"; // Default to 'en' if no language is provided
  console.log("this is lang", lang);
  console.log("this is slug", slug);

  // Validate the language
  const supportedLangs = ["en", "ar", "zh"];
  if (!supportedLangs.includes(lang)) {
    return NextResponse.json(
      { error: "Unsupported language" },
      { status: 400 }
    );
  }

  try {
    console.log("before fetcing the json file");

    // Fetch the JSON file from the public folder
    const response = await fetch(`http://localhost:3000/posts/${slug}.json`);
    const post = await response.json();
    console.log("it reaches here");
    console.log("this is post");
    console.log(post[slug][lang]);
    const currentPost = post[slug][lang];
    // Return the translation for the requested language
    if (currentPost) {
      return NextResponse.json(currentPost);
    } else {
      return NextResponse.json(
        { error: "Translation not found" },
        { status: 404 }
      );
    }
  } catch (error) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }
}
