import styles from "./Post.module.scss";
import PostItem from "./PostItem";

export interface Post {
  id: number;
  title: string;
  source: string;
  data: string;
  points: number;
  comments: number;
}

const posts: Post[] = [
  {
    id: 1,
    title: "NASA finds super-emitters of methane",
    source: "smithsonianmag.com",
    data: "02.11.2022",
    points: 465,
    comments: 28,
  },
  {
   id: 2,
   title: "Ad blocking is under attack",
   source: "adguard.com",
   data: "02.11.2022",
   points: 465,
   comments: 28,
 },
];
const PostList = () => {
  return (
    <div className={styles.container}>
      <PostItem posts={posts} />
    </div>
  );
};

export default PostList;
