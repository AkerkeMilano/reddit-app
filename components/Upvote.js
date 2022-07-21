import styles from "../styles/Post.module.css";

const Upvote = ({vote}) => {
    console.log(vote.user);
    return (
        <div className={styles["user-voted"]}>
            {vote.user.name.length > 0 ? vote.user.name[0].toUpperCase() : "A"}
        </div>
    )
};

export default Upvote;