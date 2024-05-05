import type { Spotify, Activity as ActivityData } from 'use-lanyard';

import {
  Activity,
  ActivityImageWrapper,
  ActivityInfo,
  ActivityLargeImage,
  ActivityParagraph,
  ActivitySmallImage,
  ActivityTitle,
  Container,
  Header,
} from './styles';

const activityImage = (appId: string, url: string) => {
  const isMpExternal = url.startsWith('mp:external/');
  return isMpExternal
    ? `https://media.discordapp.net/external/${url.replace('mp:external/', '')}`
    : `https://cdn.discordapp.com/app-assets/${appId}/${url}.png`;
};

interface Props {
  spotify: Spotify | null | undefined;
  activity: ActivityData | null | undefined;
}

export function Presence({ spotify, activity }: Props) {
  return (
    <>
      {spotify && (
        <Container>
          <Header>
            <h5>
              Listening to
              <span style={{ color: '#10bc4c' }}> Spotify</span>
              &nbsp;♪
            </h5>
          </Header>
          <Activity>
            <ActivityImageWrapper>
              <ActivityLargeImage src={spotify.album_art_url} alt="Spotify Album Art" />
              <ActivitySmallImage src="/static/images/spotify-logo.png" alt="Spotify Icon" />
            </ActivityImageWrapper>
            <ActivityInfo>
              <ActivityTitle>{spotify.song}</ActivityTitle>
              <ActivityParagraph>{`by ${spotify.artist}`}</ActivityParagraph>
            </ActivityInfo>
          </Activity>
        </Container>
      )}
      {activity && (
        <Container>
          <Header>
            <h5>Fazendo agora</h5>
          </Header>
          <Activity>
            <ActivityImageWrapper>
              <ActivityLargeImage
                src={
                  activity.assets?.large_image
                    ? activityImage(activity.application_id!, activity.assets.large_image)
                    : `https://dcdn.dstn.to/app-icons/${activity.application_id}`
                }
                alt="Activity Icon"
              />
              {activity.assets?.small_image && (
                <ActivitySmallImage
                  src={activityImage(activity.application_id!, activity.assets.small_image)}
                  alt="Application Icon"
                />
              )}
            </ActivityImageWrapper>
            <ActivityInfo>
              <ActivityTitle>{activity.name}</ActivityTitle>
              {activity.details && <ActivityParagraph>{activity.details}</ActivityParagraph>}
              <ActivityParagraph>{activity.state}</ActivityParagraph>
            </ActivityInfo>
          </Activity>
        </Container>
      )}
    </>
  );
}
