import { format } from 'date-fns';

import { AppConfig } from '../AppConfig';

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
      <>
        Published: {format(new Date(posted), AppConfig.dateFormat)}
        <br />
        Updated: {format(new Date(updated), AppConfig.dateFormat)}
      </>
    );
  }

  return <>Published: {format(new Date(posted), AppConfig.dateFormat)}</>;
}

export default PublishDate;
