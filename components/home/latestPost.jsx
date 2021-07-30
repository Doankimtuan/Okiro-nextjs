import React, { useState } from 'react';
import Image from 'next/image';
import LatestPostHighLight from './latestPostHighlight';
import { useDispatch } from 'react-redux';
import { getLatestPost as getLatestPostAction } from '../../redux/module/home/slice';

export default function LatestPost({ listLatestPost }) {
  const [showButtonMore, setShowButtonMore] = useState(true);
  const dispatch = useDispatch();

  return (
    <>
      <section className="latest-post">
        <div className="latest-post__wrap">
          <LatestPostHighLight />
          <div>
            {listLatestPost.map((elm, index) => (
              <article className={`item ${elm.bg}`} key={index}>
                <a href="#" className="global__link"></a>
                <div className="item__container">
                  <div className="item__image global__image">
                    <Image
                      src={elm.img}
                      height="440"
                      width="500"
                      layout="responsive"
                      alt={elm.title}
                    />
                  </div>
                  <div className="item__content">
                    <h2 className="item__title">
                      <a href="#">{elm.title}</a>
                    </h2>
                    <div className="item__meta hover--underline global--pointer">
                      <div>
                        {elm.author.map((elm, index) => (
                          <a href="#" key={index}>
                            {elm}{' '}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="item__tags global__tags global--pointer">
                    {elm.lock && (
                      <span className="global-members-label">
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.445 9.333V6.667C5.445 2.985 8.38 0 12 0c3.62 0 6.554 2.985 6.554 6.667v2.666s2.622 1.214 2.622 6c0 4.787-3.815 8.667-8.52 8.667h-1.312c-4.706 0-8.52-3.88-8.52-8.667 0-4.786 2.621-6 2.621-6zm10.487 0V6.667c0-2.21-1.76-4-3.932-4-2.172 0-3.933 1.79-3.933 4v2.666h7.865z"></path>
                        </svg>
                      </span>
                    )}
                    <a href="#">{elm.tag}</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="pagination">
        {showButtonMore && (
          <button
            onClick={() => {
              dispatch(getLatestPostAction('full'));
              setShowButtonMore(false);
            }}
            className="global__button"
          >
            Load more
          </button>
        )}
      </section>
    </>
  );
}
