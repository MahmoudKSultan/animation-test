import { Image } from "react-grid-gallery";

export interface CustomImage extends Image {
  original: string;
}

export const images: CustomImage[] = [
  {
    src: "/assets/tour/1.jpg",
    original: "/assets/tour/1.jpg",
    width: 320,
    height: 174,
    tags: [
      { value: "Nature", title: "Nature" },
      { value: "Flora", title: "Flora" },
    ],
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: "/assets/tour/2.jpg",
    original: "/assets/tour/2.jpg",
    width: 320,
    height: 212,
    caption: "Boats (Jeshu John - designerspics.com)",
  },
  {
    src: "/assets/tour/3.jpg",
    original: "/assets/tour/3.jpg",
    width: 320,
    height: 212,
    caption: "Color Pencils (Jeshu John - designerspics.com)",
  },
  {
    src: "/assets/tour/4.jpg",
    original: "/assets/tour/4.jpg",
    width: 320,
    height: 213,
    caption: "Red Apples with other Red Fruit (foodiesfeed.com)",
  },
  {
    src: "/assets/tour/5.jpg",
    original: "/assets/tour/5.jpg",
    width: 320,
    height: 183,
    caption: "37H (gratispgraphy.com)",
  },
  {
    src: "/assets/tour/6.jpg",
    original: "/assets/tour/6.jpg",
    width: 240,
    height: 320,
    tags: [{ value: "Nature", title: "Nature" }],
    caption: "8H (gratisography.com)",
  },
];