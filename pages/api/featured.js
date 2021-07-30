import featured from '../../data/featured.json';
export default function handleFeatured(req, res) {
  res.status(200).json(featured);
}
