import React from "react";
import { HomeHeader } from "../../components/HomeHeader";
import { PhotoCard } from "../../components/PhotoCard";
import { UserList } from "../../components/UserList";
import { SPALayout } from "../SPAScroll";
export const Home = () => {
  return (
    <SPALayout>
      <HomeHeader />
      <UserList />
      <PhotoCard />
      <PhotoCard />
      <PhotoCard />
      <PhotoCard />
    </SPALayout>
  );
};
