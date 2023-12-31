"use client";
import React from "react";
import BlogHero from "@/components/eventhero";
import { useState, useEffect } from "react";
import MediumCard from "@/components/mediumcards";

export default function MediumArticles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@pharmacad.india"
    )
      .then((res) => res.json())
      .then((data) => setArticles(data.items));
  }, []);

  return (
    <>
      <BlogHero />
      <div className="container mx-auto max-w-screen-xl px-4 py-8">
        <div className="flex flex-wrap mt-2">
          {articles.map((article, index) => (
            <div key={index} className="w-full lg:w-1/2 mb-4 p-2 ">
              <MediumCard article={article} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
