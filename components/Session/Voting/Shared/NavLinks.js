import React from 'react';
import styled, { css } from 'styled-components';
import { below } from '../../../../utilities';
import Icon from '../../../shared/Icon';

const SharedLinkStyles = css`
  cursor: pointer;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.thatBlue};

  &:hover {
    color: ${({ theme }) => theme.colors.tertiary};
    svg {
      fill: ${({ theme }) => theme.colors.tertiary};
    }
  }

  svg {
    vertical-align: text-bottom;
    width: 1.7rem;
    height: 1.7rem;
  }

  ${below.med`
    position: unset;
    top: unset;
  `};
`;

const BackLink = styled.a`
  ${SharedLinkStyles}
  span {
    margin-left: 0.5rem;
  }
`;

const ForwardLink = styled.a`
  ${SharedLinkStyles}
  span {
    margin-right: 0.5rem;
  }
`;

const BackArrow = styled(Icon)`
  fill: ${({ theme }) => theme.colors.thatBlue};
  transform: scaleX(-1);
`;

const ForwardArrow = styled(Icon)`
  fill: ${({ theme }) => theme.colors.thatBlue};
`;

const NavLinks = ({ showForwardLink, forwardLabel, forwardLink }) => {
  return (
    <>
      <BackLink href="/wi/session/voting/start">
        <BackArrow
          icon="fullArrow"
          height="2rem"
          width="2rem"
          viewBoxHeight="100"
          viewBoxWidth="100"
        />
        <span>Voting Help</span>
      </BackLink>
      {showForwardLink !== false && (
        <ForwardLink href={forwardLink} className="float-right">
          <span>{forwardLabel}</span>
          <ForwardArrow
            icon="fullArrow"
            height="2rem"
            width="2rem"
            viewBoxHeight="100"
            viewBoxWidth="100"
          />
        </ForwardLink>
      )}
    </>
  );
};

export default NavLinks;