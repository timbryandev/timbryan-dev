import Alert, { AlertProps } from './Alert';

export default function Error(props: AlertProps) {
  return <Alert {...props} classes={['error']} />;
}
