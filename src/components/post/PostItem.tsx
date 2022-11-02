import { useEffect, useState } from "react";
import { mapTime } from "../../helpers/mapTime";
import { getStory } from "../../services/api";
import styles from "./Post.module.scss";

interface IStory {
  id?: number;
  title?: string;
  url?: string;
  kids?: number[];
  time?: string;
  by?: string;
  score?: number;
}
const PostItem = (props: { storyId: any }) => {
  const [story, setStory] = useState<IStory>({});

  useEffect(() => {
    getStory(props.storyId).then((data) => {
      if (data && data.url) {
        setStory(data);
      }
    });
  }, []);

  return story && story.url ? (
    <div className={styles.wrapper}>
      <div className={styles.row}>
        <h3 className="clicable">{story.title}</h3>
        <p className="clicable">({story.url})</p>
      </div>
      <div className={styles.row}>
        <p>
          posted: <time dateTime={story.time}>{mapTime(story.time)} ago</time>
        </p>
        <div className="vl"></div>
        <p>{story.score} points</p>
        <div className="vl"></div>
        <p>author {story.by}</p>
        <div className="vl"></div>
        <p className="clicable">{story.kids} comments</p>
      </div>
    </div>
  ) : null;
};

export default PostItem;

// {props.posts.map((post) => (
//    <div className={styles.wrapper} key={post.id}>
//      <div className={styles.row}>
//        <h3>{(newsNumber += 1)}.</h3>
//        <h3 className="clicable">{post.title}</h3>
//        <p className="clicable">({post.source})</p>
//      </div>
//      <div className={styles.row}>
//        <p>{post.data}</p>
//        <div className="vl"></div>
//        <p>{post.points} points</p>
//        <div className="vl"></div>
//        <p>by {post.author}</p>
//        <div className="vl"></div>
//        <p className="clicable">{post.comments} comments</p>
//      </div>
//    </div>
//  ))}
