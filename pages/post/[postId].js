import { useRouter } from "next/router";
import { gql } from "@apollo/client";
import client from "../../apollo-client";
import styles from "../../styles/PostDetails.module.css";

const PostDetail = ({posts}) => {
    const router = useRouter();
    const postId = router.query.postId;
    const post = posts.filter(post => post.id === postId)[0];
  return (
    <div className={styles.postdetails}>
      <p>{`Posted by ${post.postedBy.name}`}</p>
      <h2>{post.description}</h2>
      <div>
        <a href={post.url} target="_blanket">{post.url}</a>
      </div>

    </div>
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