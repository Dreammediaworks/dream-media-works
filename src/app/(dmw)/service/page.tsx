import React from "react";
import { Metadata } from "next";
import ServiceMain from "@/pages/service/service";

export const metadata: Metadata = {
  title: "Dream MeDia WorKs  - Service page",
};

const ServicePage = () => {
  return <ServiceMain />;
};

export default ServicePage;
