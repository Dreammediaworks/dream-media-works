import { StaticImageData } from "next/image";
import {
  branding1,
  branding2,
  branding3,
  branding4,
  branding5,
  branding6,
  branding7,
  branding8,
} from "@/assets/img/our-work/branding";
import {
  concept1,
  concept2,
  concept3,
  concept4,
  concept5,
  concept6,
  concept7,
  concept8,
  concept9,
  concept10,
  concept11,
  concept12,
} from "@/assets/img/our-work/concept";
import {
  creative1,
  creative2,
  creative3,
  creative4,
  creative5,
  creative6,
  creative7,
  creative8,
  creative9,
  creative10,
  creative11,
  creative12,
  creative13,
  creative14,
  creative15,
} from "@/assets/img/our-work/creative";
import {
  visual1,
  visual10,
  visual11,
  visual12,
  visual13,
  visual2,
  visual3,
  visual4,
  visual5,
  visual6,
  visual7,
  visual8,
  visual9,
} from "@/assets/img/our-work/visual";

export type OurWorkCategory = {
  slug: string;
  title: string;
  filterClass: string;
  featuredImage: StaticImageData;
  images: StaticImageData[];
};

export type OurWorkItem = {
  id: number;
  img: StaticImageData;
  category: string;
  title: string;
  year: string;
  show: string;
  slug: string;
};

export const ourWorkCategories: OurWorkCategory[] = [
  {
    slug: "branding",
    title: "Branding",
    filterClass: "cat1",
    featuredImage: branding3,
    images: [
      branding1,
      branding2,
      branding3,
      branding4,
      branding5,
      branding6,
      branding7,
      branding8,
    ],
  },
  {
    slug: "concept",
    title: "Concept",
    filterClass: "cat2",
    featuredImage: concept4,
    images: [
      concept1,
      concept2,
      concept3,
      concept4,
      concept5,
      concept6,
      concept7,
      concept8,
      concept9,
      concept10,
      concept11,
      concept12,
    ],
  },
  {
    slug: "visual",
    title: "Visual",
    filterClass: "cat3",
    featuredImage: visual3,
    images: [
      visual1,
      visual2,
      visual3,
      visual4,
      visual5,
      visual6,
      visual7,
      visual8,
      visual9,
      visual10,
      visual11,
      visual12,
      visual13,
    ],
  },
  {
    slug: "creative",
    title: "Creative",
    filterClass: "cat4",
    featuredImage: creative8,
    images: [
      creative1,
      creative2,
      creative3,
      creative4,
      creative5,
      creative6,
      creative7,
      creative8,
      creative9,
      creative10,
      creative11,
      creative12,
      creative13,
      creative14,
      creative15,
    ],
  },
];

export const ourWorkItems: OurWorkItem[] = ourWorkCategories.flatMap(
  (category) =>
    category.images.map((img, index) => ({
      id: Number(`${ourWorkCategories.indexOf(category) + 1}${index + 1}`),
      img,
      category: category.title,
      title: "",
      year: "2024",
      show: category.filterClass,
      slug: category.slug,
    })),
);

export function getOurWorkCategory(slug: string) {
  return ourWorkCategories.find((category) => category.slug === slug);
}

export function getOurWorkItems(slug?: string) {
  return slug
    ? ourWorkItems.filter((item) => item.slug === slug)
    : ourWorkItems;
}
