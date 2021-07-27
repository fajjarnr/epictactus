import React from "react";
import PostAuthor from "./PostAuthor";
import PostMetaTitle from "./PostMetaTitle";

export default function InfoPost({
  category,
  date,
  title,
  desc,
  author,
  job,
  avatar,
}) {
  return (
    <>
      <PostMetaTitle category={category} date={date} title={title} />
      <p className="text-white/60 mt-5 w-10/12">{desc}</p>
      <PostAuthor author={author} job={job} avatar={avatar} />
    </>
  );
}
