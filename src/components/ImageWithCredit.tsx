export interface IImageWithCreditProps {
  image: string;
  name?: string;
  source?: string;
}

function ImageWithCredit(props: IImageWithCreditProps) {
  const image = <img src={props.image} className="mx-auto" alt="" />;

  if (props.name === undefined) return image;

  return (
    <div className="relative">
      {image}
      <span className="absolute bottom-0 right-0 left-0 text-right bg-black bg-opacity-50 text-gray-300 py-1 px-3">
        Cover image by{' '}
        {props.source ? (
          <a href={props.source} className="text-pink-300">
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
