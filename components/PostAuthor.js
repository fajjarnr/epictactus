import React from "react";

export default function PostAuthor({ avatar, author, job, center }) {
  return (
    <div className="flex items-center mt-5">
      <img src={avatar} className="object-cover w-14 h-14 rounded-full" />
      <div className="ml-4">
        <h3>{author}</h3>
        <div className="text-sm text-white/60">{job}</div>
      </div>
    </div>
  );
}
