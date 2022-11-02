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
const PostItem = (props: { storyId: any; rank: number }) => {
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
        <h3>{props.rank}.</h3>
        <h3 className="clicable">{story.title}</h3>
        <p className="clicable">
          <a target="_blank" rel="noreferrer" href={story.url}>
            ({story.url.split("//")[1].split("/")[0]})
          </a>
        </p>
      </div>
      <div className={styles.row}>
        <p>
          posted: <time dateTime={story.time}>{mapTime(story.time)} ago</time>
        </p>
        <div className="vl"></div>
        <p>{story.score} points</p>
        <div className="vl"></div>
        <p>author: {story.by}</p>
        <div className="vl"></div>
        <p className="clicable">{story.kids} comments</p>
      </div>
    </div>
  ) : null;
};

export default PostItem;
