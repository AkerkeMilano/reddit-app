import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import client from "../../apollo-client";

const PostDetail = ({posts}) => {
    const router = useRouter();
    const postId = router.query.postId;
    const post = posts.filter(post => post.id === postId)[0];
  return (
      <h1>{post.description}</h1>
  );
};

export default PostDetail;

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
    query Posts {
      feed {
        count
        links {
          id
          description
          url
          postedBy {
            id
            name
          }
          votes {
            id
            user {
              id
              name
            }
          }
        }
      }
    }
    `,
  });
  return {
    props: {
      posts: data.feed.links,
    },
  };
}