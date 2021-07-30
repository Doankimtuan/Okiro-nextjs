import Image from 'next/image';
export default function LatestPostHighLight() {
  return (
    <article className="latest-post__item--highlight">
      <small className="global__label">
        Latest posts
        <svg role="img" viewBox="0 0 136 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.525 1.525a3.5 3.5 0 014.95 0L20 15.05 33.525 1.525a3.5 3.5 0 014.95 0L52 15.05 65.525 1.525a3.5 3.5 0 014.95 0L84 15.05 97.525 1.525a3.5 3.5 0 014.95 0L116 15.05l13.525-13.525a3.5 3.5 0 014.95 4.95l-16 16a3.5 3.5 0 01-4.95 0L100 8.95 86.475 22.475a3.5 3.5 0 01-4.95 0L68 8.95 54.475 22.475a3.5 3.5 0 01-4.95 0L36 8.95 22.475 22.475a3.5 3.5 0 01-4.95 0l-16-16a3.5 3.5 0 010-4.95z"></path>
        </svg>
      </small>
      <div className="item__container">
        <div className="global__image item__image">
          <Image
            src="/2020/11/photo-1560141343-966cb5212777.jpeg"
            width="2000"
            height="1600"
            alt="I work best when my space is filled with inspiration"
          />
        </div>
        <div className="item__content">
          <div className="item__tags global__tags">
            <a href="#">Creative</a>
          </div>
          <h2 className="item__title">
            <a href="#">I work best when my space is filled with inspiration </a>
          </h2>
          <p className="item__excerpt">
            <svg role="img" viewBox="0 0 136 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.525 1.525a3.5 3.5 0 014.95 0L20 15.05 33.525 1.525a3.5 3.5 0 014.95 0L52 15.05 65.525 1.525a3.5 3.5 0 014.95 0L84 15.05 97.525 1.525a3.5 3.5 0 014.95 0L116 15.05l13.525-13.525a3.5 3.5 0 014.95 4.95l-16 16a3.5 3.5 0 01-4.95 0L100 8.95 86.475 22.475a3.5 3.5 0 01-4.95 0L68 8.95 54.475 22.475a3.5 3.5 0 01-4.95 0L36 8.95 22.475 22.475a3.5 3.5 0 01-4.95 0l-16-16a3.5 3.5 0 010-4.95z"></path>
            </svg>{' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat ut facilisis rutrum donec
            tristique mauris est ac nunc. Eget nec, lorem mi libero accumsan....
          </p>
          <div className="item__meta">
            <div className="item-profile__image hover--underline">
              <a href="#" className="global__image">
                <Image
                  src="/2020/11/prince-akachi-J1OScm_uHUQ-unsplash.jpg"
                  width="40"
                  height="40"
                  alt="Victoria West"
                />
              </a>
              <a href="#" className="global__image hover--underline">
                <Image
                  src="/2020/11/laura-chouette-1z--Cu8-wXU-unsplash.jpg"
                  width="40"
                  height="40"
                  alt="Lauren Langford"
                />
              </a>
            </div>
            <div className="item-authors hover--underline">
              <a href="#">Victoria West</a>, <a href="#">Lauren Langford</a>
              <div className="item-time">
                <time dateTime="2020-09-30">September 30, 2020</time> ∙ 3 minutes read
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
