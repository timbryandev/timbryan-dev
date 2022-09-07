import { format } from 'date-fns';

import { AppConfig } from '../utils/AppConfig';

interface IPublishDateProps {
  posted: string;
  updated: string;
  showUpdated: boolean;
}

function PublishDate({
  posted,
  updated = posted,
  showUpdated = false,
}: IPublishDateProps) {
  if (showUpdated && posted !== updated) {
    return (
      <span className="text-right">
        Published: {format(new Date(posted), AppConfig.dateFormat)}
        <br />
        Updated: {format(new Date(updated), AppConfig.dateFormat)}
      </span>
    );
  }

  return <span>{format(new Date(posted), AppConfig.dateFormat)}</span>;
}

export default PublishDate;
