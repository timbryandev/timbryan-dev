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
    <div className={`alert alert--${classes.join(' ')}`} role="alert">
      {heading && <p className="alert__heading">{heading}</p>}
      {text && <p>{text}</p>}
    </div>
  );
}
