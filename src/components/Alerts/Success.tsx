import Alert, { AlertProps } from './Alert';

export default function Success(props: AlertProps): JSX.Element {
  return <Alert {...props} classes={['success']} />;
}
