import Link from "next/link";
import React from "react";
import InfoPost from "./InfoPost";

export default function CardPost({ thumbnail, ...infoPost }) {
  return (
    <article className="">
      <Link href="/detail">
        <a>
          <img src={thumbnail} className="mb-4" />
        </a>
      </Link>
      <InfoPost {...infoPost} />
    </article>
  );
}
