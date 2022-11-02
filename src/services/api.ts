import axios from "axios";

export const baseUrl = "https://hacker-news.firebaseio.com/v0";
export const newStoriesUrl = `${baseUrl}/newstories.json`;
export const topStoriesUrl = `${baseUrl}/topstories.json`;
export const bestStoriesUrl = `${baseUrl}/beststories.json`;
export const itemUrl = `${baseUrl}/item/`;

export const getStories = async () => {
  try {
    const res = await axios.get(newStoriesUrl).then(({ data }) => data);
    return res;
  } catch (err) {
    console.error(err);
  }
};

export const getStory = async (storyId: any) => {
  try {
    const res = await axios
      .get(`${itemUrl + storyId}.json`)
      .then(({ data }) => data);
    return res;
  } catch (err) {
    console.error(err);
  }
};
