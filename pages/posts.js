import CardPost from "@components/CardPost";
import Container from "@components/COntainer";
import Header from "@components/Header";
import Layout from "@components/Layout";
import { useState } from "react";
import mockPost from "../utils/post.json";

export default function Posts() {
  const [post, setPost] = useState(mockPost);

  return (
    <Layout>
      <Container>
        <Header>UI Design</Header>
        {!post.length ? (
          <div className="text-center">
            <h2 className="text-7xl">No Result</h2>
            <p className="text-xl mt-4 text-white/60 md:w-6/12 w-full mx-auto">
              We couldn’t find any posts with the keyword `yahahahayuk`. Please
              try another keyword.
            </p>
          </div>
        ) : (
          <div className="flex -mx-4 flex-wrap mt-6">
            {post.map((item) => (
              <div key={item.id} className="md:w-4/12 w-full px-4 py-6">
                <CardPost {...item} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </Layout>
  );
}
