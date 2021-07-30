import Image from 'next/image';
export default function ItemFeatured({ data }) {
  return (
    <article className={`item ${data.bg}`} key={data.id}>
      <a href="#" className="global__link"></a>
      <div className="global__image item__image">
        <Image src={data.img} width="300" height="300" alt={data.title} />
      </div>
      <div className="global__sections--content">
        <h3>
          <a href="#">{data.title}</a>
        </h3>
        <div className="global__sections--meta global--pointer hover--underline">
          <div>
            {data.author.map((data, index) => (
              <a href="#" key={index}>
                {data}{' '}
              </a>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
