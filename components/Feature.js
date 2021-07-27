import Link from "next/link";
import React from "react";
import InfoPost from "./InfoPost";

export default function Feature() {
  return (
    <article>
      <div className="flex -mx-4 flex-wrap">
        <div className="px-4 lg:w-8/12 md:w-7/12 w-full">
          <Link href="/detail">
            <a>
              <img
                src="/featured-thumbnail.png"
                className="rounded w-full mb-4 md:mb-0"
              />
            </a>
          </Link>
        </div>
        <div className="lg:w-4/12 md:w-5/12 w-full px-4">
          <InfoPost
            author="Leslie Alexander"
            job="UI Designer"
            category="UI DESIGN"
            date="July 2, 2021"
            title="Understanding color theory: the color wheel and finding complementary colors"
            desc="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum."
            avatar="/author-1.png"
          />
        </div>
      </div>
      <hr className="border-white/10 mt-10" />
    </article>
  );
}
