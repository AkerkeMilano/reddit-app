import styles from "../styles/Post.module.css";

const Upvote = ({vote}) => {
    return (
        <div className={styles["user-voted"]}>
            {vote.user.name[0].toUpperCase()}
        </div>
    )
};

export default Upvote;