import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Featured, LatestPost, Story } from '../components/home';
import {
  getFeature as getFeatureAction,
  getStory as getStoryAction,
  getLatestPost as getLatestPostAction,
} from '../redux/module/home/slice';
import Loading from '../components/common/Loading';

export default function Home() {
  const dispatch = useDispatch();
  const featured = useSelector((state) => state.home.featured);
  const story = useSelector((state) => state.home.story);
  const latestPost = useSelector((state) => state.home.latestPost);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(getFeatureAction());
    dispatch(getStoryAction());
    dispatch(getLatestPostAction('default'));
  }, []);

  useEffect(() => {
    featured.loading === true || story.loading === true || latestPost.loading === true
      ? setLoading(true)
      : setLoading(false);
  }, [featured.loading, story.loading, latestPost.loading]);
  return (
    <>
      {loading && <Loading label={'Loading . . .'} />}
      <main className="global__main">
        <Featured listFeatured={featured.data} />
        <LatestPost listLatestPost={latestPost.data} />
        <Story listStory={story.data} />
      </main>
    </>
  );
}
