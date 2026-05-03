import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import PortfolioGridColTwoMain from "@/pages/portfolio/portfolio-grid-col-2-main";
import {
  getOurWorkCategory,
  ourWorkCategories,
} from "@/data/our-work-data";

type IProps = {
  params: Promise<{
    category: string;
  }>;
};

export function generateStaticParams() {
  return ourWorkCategories.map((category) => ({
    category: category.slug,
  }));
}

export async function generateMetadata({ params }: IProps): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getOurWorkCategory(slug);

  return {
    title: category
      ? `Dream MeDia WorKs - ${category.title}`
      : "Dream MeDia WorKs - Our Work",
  };
}

const OurWorkCategoryPage = async ({ params }: IProps) => {
  const { category: slug } = await params;
  const category = getOurWorkCategory(slug);

  if (!category) {
    notFound();
  }

  return <PortfolioGridColTwoMain categorySlug={category.slug} />;
};

export default OurWorkCategoryPage;
