import CardPost from "@components/CardPost";
import Container from "@components/Container";
import Feature from "@components/Feature";
import Layout from "@components/Layout";
import { useState } from "react";
import mockPost from "../utils/post.json";

export default function Home() {
  const [post, setPost] = useState(mockPost);

  return (
    <Layout>
      <Container>
        <Feature />
        <div className="flex -mx-4 flex-wrap mt-6">
          {post.map((item) => (
            <div key={item.id} className="md:w-4/12 w-full px-4 py-6">
              <CardPost {...item} />
            </div>
          ))}
        </div>
      </Container>
    </Layout>
  );
}
