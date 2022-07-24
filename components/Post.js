import styles from "../styles/Post.module.css";
import upVote from "../public/up-arrow.png";
import Image from "next/image";
import Upvote from "./Upvote";
import Link from "next/link";
import ModalVotes from "./ModalVotes";

const Post = ({ post }) => {
  const upvotesList =
    post.votes.length > 3 ? post.votes.slice(0, 3) : post.votes;
  return (
    <div className={styles.post}>
      <div className={styles["block-btn"]}>
      <button className={styles["upvote-btn"]}>
        <Image src={upVote} alt="Upvote btn" width={30} height={25}></Image>
      </button>
      </div>
   
      <div className={styles.content}>
        <div className={styles.description}>
          <Link href={`post/${post.id}`} shallow>
            <a target="_blank" rel="noopener noreferrer">
              {post.description}
            </a>
          </Link>
        </div>
        <div className={styles.upvotes}>
          {post.votes.length > 0 ? (
            <ModalVotes post={post}>
              <div className={styles["upvotes-icons"]}>
                {upvotesList.map((vote) => (
                  <Upvote key={vote.id} vote={vote} />
                ))}
              </div>
              <div>
                {post.votes.length > 3
                  ? `...${post.votes.length - 3} more upvotes`
                  : null}
              </div>
            </ModalVotes>
          ) : (
            "No upvotes"
          )}
        </div>
      </div>
    </div>
  );
};

export default Post;
