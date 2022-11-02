import { useEffect, useState } from "react";
import { getStories } from "../../services/api";
import PostItem from "./PostItem";

const PostList: Function = (): JSX.Element[] => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStories().then((ids) => setStoryIds(ids));
  }, []);

  return storyIds
    .slice(0, 20)
    .map((storyId, i) => <PostItem key={i} storyId={storyId} />);
};

export default PostList;
