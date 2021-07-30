import latestPost from '../../data/latestPost.json';

export default function handleFeatured(req, res) {
  const result = [...latestPost];
  if (req.query.limit === 'default') {
    result.length = 5;
    res.status(200).json(result);
  } else {
    res.status(200).json(latestPost);
  }
}
