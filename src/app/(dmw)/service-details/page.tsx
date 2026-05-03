import React from "react";
import { Metadata } from "next";
import ServiceDetailsMain from "@/pages/service/service-details";

export const metadata: Metadata = {
  title: "Dream MeDia WorKs  - Service Details page",
};

const ServiceDetailsPage = () => {
  return <ServiceDetailsMain />;
};

export default ServiceDetailsPage;
