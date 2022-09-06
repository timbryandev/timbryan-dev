export interface AlertProps {
  color?: string;
  heading?: string;
  text?: string;
}

export default function Alert({
  color = 'blue',
  heading = '',
  text = '',
}: AlertProps) {
  return (
    <div
      className={`bg-${color}-100 border border-${color}-400 text-${color}-700 px-4 py-3 mt-5 rounded relative`}
      role="alert"
    >
      {heading && <p className="font-bold">{heading}</p>}
      {text && <p>{text}</p>}
    </div>
  );
}
