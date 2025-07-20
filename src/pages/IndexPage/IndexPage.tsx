import { Section, Cell, List } from '@telegram-apps/telegram-ui';
import type { FC } from 'react';

import { Link } from '@/components/Link/Link.tsx';
import { Page } from '@/components/Page.tsx';

export const IndexPage: FC = () => {
  const platform = getMobilePlatform();
  const destination = platform === 'ios' ? 'https://apps.apple.com/us/app/age-of-sails/id6738692514' : 'https://play.google.com/store/apps/details?id=com.street.bunny';

  return (
    <Page back={false}>
      <List>
        <Section header="Hello">
          <Link to={destination} target="_blank">
            <Cell subtitle="Determined by user agent.">
                <span className="text-bold">Platform: {platform}</span>
            </Cell>
          </Link>
        </Section>
        <Section>
          <Link to="/ball">
            <Cell>
              Go to [Ball Page]
            </Cell>
          </Link>
        </Section>
      </List>
    </Page>
  );
};

function getMobilePlatform() {
  const userAgent = navigator.userAgent || navigator.vendor;

  // iOS detection
  if (/iPad|iPhone|iPod/.test(userAgent)) {
    return 'ios';
  }

  // Android detection
  if (/android/i.test(userAgent)) {
    return 'android';
  }

  // Fallback to android
  return 'android';
}

