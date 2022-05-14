import { FC } from 'react';
import { Container } from 'features/styles';
import { FollowingComponent } from 'features/following';

/**
 * Following page
 *
 * Usage:
 * ``` <FollowingPage /> ```
 *
 * @returns the following page
 */
const FollowingPage: FC = () => (
  <Container flexDirection={'column'}>
    <h2>Following Characters</h2>
    <FollowingComponent />
  </Container>
);

export default FollowingPage;
