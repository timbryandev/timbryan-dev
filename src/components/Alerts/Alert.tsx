export interface AlertProps {
  classes?: string[];
  color?: string;
  heading?: string;
  text?: string;
}

export default function Alert({
  classes = [''],
  heading = '',
  text = '',
}: AlertProps) {
  return (
    <div className={`alert ${classes.join(' ')}`} role="alert">
      {heading && <p className="font-bold">{heading}</p>}
      {text && <p>{text}</p>}
    </div>
  );
}
