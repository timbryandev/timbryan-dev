import Alert, { AlertProps } from './Alert';

export default function Error(props: AlertProps): JSX.Element {
  return <Alert {...props} classes={['error']} />;
}
