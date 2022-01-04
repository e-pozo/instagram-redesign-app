import React from "react";
import { HomeHeader } from "../../components/HomeHeader";
import { PhotoCard } from "../../components/PhotoCard";
import { SPALayout } from "../SPAScroll";
export const Home = () => {
  return (
    <SPALayout>
      <HomeHeader />
      <PhotoCard />
    </SPALayout>
  );
};
