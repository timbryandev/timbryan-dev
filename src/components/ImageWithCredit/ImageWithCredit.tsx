export interface IImageWithCreditProps {
  image: string;
  name?: string;
  link?: string;
}

function ImageWithCredit(props: IImageWithCreditProps) {
  const image = (
    <img src={props.image} className="image-credit__image" alt="" />
  );

  // If there is no credit, then just return the image tag
  if (props.name === undefined) return image;

  return (
    <div className="image-credit">
      {image}
      <span className="image-credit__credit">
        Cover image by{' '}
        {props.link ? (
          <a href={props.link} className="link">
            {props.name}
          </a>
        ) : (
          props.name
        )}
      </span>
    </div>
  );
}

export default ImageWithCredit;
