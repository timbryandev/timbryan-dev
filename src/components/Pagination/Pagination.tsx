import Link from 'next/link';

import { convertUrlToLinkHref } from '../../utils/pagination';

export interface IPaginationProps {
  previous?: string;
  next?: string;
}

const Pagination = (props: IPaginationProps): JSX.Element => (
  <div className="pagination">
    {typeof props.previous === 'string' && (
      <div>
        <Link href={convertUrlToLinkHref(props.previous)} as={props.previous}>
          <a className="link">← Newer Posts</a>
        </Link>
      </div>
    )}

    {typeof props.next === 'string' && (
      <div className="text-right ml-auto">
        <Link href={convertUrlToLinkHref(props.next)} as={props.next}>
          <a className="link">Older Posts →</a>
        </Link>
      </div>
    )}
  </div>
);

export { Pagination };
