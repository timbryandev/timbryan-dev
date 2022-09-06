import Alert, { AlertProps } from './Alert';

export default function Success(props: AlertProps) {
  return <Alert {...props} classes={['success']} />;
}
