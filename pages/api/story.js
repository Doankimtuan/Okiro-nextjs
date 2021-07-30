import story from '../../data/story.json';
export default function handleStory(req, res) {
  res.status(200).json(story);
}
