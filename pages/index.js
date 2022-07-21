import styles from "../styles/Home.module.css";
import { gql } from "@apollo/client";
import Post from "../components/Post";
import client from "../apollo-client";


const Home = ({ posts }) => {

  return (
    <div className={styles.container}>
      <div className={styles["posts-list"]}>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};
export default Home;

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
