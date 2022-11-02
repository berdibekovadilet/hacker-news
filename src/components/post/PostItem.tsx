import styles from "./Post.module.scss";
import { Post } from "./PostList";

const PostItem = (props: { posts: Post[] }) => {
  let newsNumber = 0;
  return (
    <>
      {props.posts.map((post) => (
        <div className={styles.wrapper} key={post.id}>
          <div className={styles.row}>
            <h3>{newsNumber += 1}.</h3>
            <h3 className="clicable">{post.title}</h3>
            <p className="clicable">({post.source})</p>
          </div>
          <div className={styles.row}>
            <p>{post.data}</p>
            <div className="vl"></div>
            <p>{post.points} points</p>
            <div className="vl"></div>
            <p className="clicable">{post.comments} comments</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default PostItem;
