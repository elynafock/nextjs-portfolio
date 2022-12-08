import React from "react";
import AppLayout from "../components/core/AppLayout";

const portfolio = () => {
  return (
    <AppLayout>
      <article>
        <h3 className="text-3xl font-bold py-2 mt-8 mb-4">Portfolio</h3>
        <div className="flex flex-col gap-y-1">
          <img
            src="portfolio.jpg"
            alt="Dusted"
            className="aspect-video object-cover"
          />
          <div>
            <h4 className="text-2xl font-semibold">Dusted</h4>
            <p className="font-light text-sm text-gray-500">
              Cleaning Service Platform
            </p>
          </div>
        </div>
      </article>
    </AppLayout>
  );
};

export default portfolio;
