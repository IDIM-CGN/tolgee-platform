import { Link, Box, styled } from '@mui/material';

import TwitterLogo from 'tg.svgs/social/twitter.svg?react';
import FacebookLogo from 'tg.svgs/social/facebook.svg?react';
import GitHubLogo from 'tg.svgs/social/github.svg?react';
import LinkedInLogo from 'tg.svgs/social/linkedin.svg?react';
import SlackLogo from 'tg.svgs/social/slack.svg?react';
import DiscussionsLogo from 'tg.svgs/social/discussions.svg?react';

const StyledContainer = styled('div')`
  display: grid;
  border-top: 1px solid ${({ theme }) => theme.palette.divider};
  padding: ${({ theme }) => theme.spacing(3, 4)};
  justify-items: center;
  position: relative;
`;

const StyledContent = styled('div')`
  display: grid;
  width: min(800px, 100%);
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
`;

const StyledSocial = styled(Box)`
  padding: ${({ theme }) => theme.spacing(0.5, 3)};
`;

const StyledLink = styled(Link)`
  display: grid;
  gap: 8px;
  align-items: center;
  color: ${({ theme }) => theme.palette.text.secondary};
  transition: color 50ms ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.palette.text.primary};
  }
  grid-template-columns: 25px auto;
  justify-items: center;
`;

const StyledSocialText = styled('span')`
  justify-self: start;
`;

export const CompactFooter = () => {
  return (
    <StyledContainer>
    </StyledContainer>
  );
};
