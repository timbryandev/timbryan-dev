import Link from 'next/link';

import { convertUrlToLinkHref } from '../../utils/Pagination';

export type IPaginationProps = {
  previous?: string;
  next?: string;
};

const Pagination = (props: IPaginationProps) => (
  <div className="pagination">
    {props.previous && (
      <div>
        <Link href={convertUrlToLinkHref(props.previous)} as={props.previous}>
          <a className="link">← Newer Posts</a>
        </Link>
      </div>
    )}

    {props.next && (
      <div className="text-right ml-auto">
        <Link href={convertUrlToLinkHref(props.next)} as={props.next}>
          <a className="link">Older Posts →</a>
        </Link>
      </div>
    )}
  </div>
);

export { Pagination };