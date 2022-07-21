import styles from "../styles/Post.module.css";
import upVote from "../public/up-arrow.png";
import Image from "next/image";
import Upvote from "./Upvote";

const Post = ({ post }) => {
  const upvotesList =
    post.votes.length > 3 ? post.votes.slice(0, 3) : post.votes;
  return (
    <div className={styles.post}>
      <div className={styles.description}>{post.description}</div>
      <div className={styles["post-footer"]}>
        <button className={styles["upvote-btn"]}>
          <Image src={upVote} alt="Upvote btn" width={30} height={25}></Image>
        </button>
        <div className={styles.upvotes}>
          <div className={styles["upvotes-icons"]}>
            {post.votes.length !== 0
              ? upvotesList.map((vote) => <Upvote key={vote.id} vote={vote} />)
              : "No upvotes"}
          </div>
          <div>
            {post.votes.length > 3
              ? `...${post.votes.length - 3} more upvotes`
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
