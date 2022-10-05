export default function CloseButton({
  color = 'blue',
  onClose = () => {},
}): JSX.Element {
  return (
    <button className="close-button" onClick={onClose}>
      <svg
        className={`fill-current h-6 w-6 text-${color}-500`}
        role="button"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <title>Close</title>
        <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
      </svg>
      {/* eslint-disable-next-line react/no-unknown-property */}
      <style jsx>{`
        .close-button {
          padding: 1rem;

          svg {
            height: 20px;
            width: 20px;
          }
        }
      `}</style>
    </button>
  );
}
