import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Grid, Cell } from 'styled-css-grid';
import ContentSection from '../../components/shared/ContentSection';
import LinkButton from '../../components/shared/LinkButton';
import { below } from '../../utilities/breakpoint';

const GET_PARTNERS = gql`
  query getPartners {
    partners {
      id
      year
      partnershipLevel
      companyName
      companyLogo
      heroImage
      website
    }
  }
`;

const RobotImage = styled.img`
  height: 500px;
  float: right;
  margin-top: -200px;
  margin-right: 35px;

  ${below.med`
    margin-top: 20px;
    margin-right: unset;
    height: 400px;
  `};
`;

const PartnerLevelTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 0;
  text-align: center;
  text-transform: uppercase;
`;

const Partners = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ImageContainer = styled.div`
  margin-top: 50px;
  text-align: center;
  display: grid;
  background-color: #fafafa;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

const Image = styled.img`
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  max-width: ${({ maxWidth }) => maxWidth};
`;

const renderPartner = (
  partner,
  containerWidth,
  containerHeight,
  imageMaxWidth,
) => {
  const url = `/wi/partner-detail?id=${partner.id}`;
  return (
    <ImageContainer
      width={containerWidth}
      height={containerHeight}
      key={partner.id}
    >
      <a href={url}>
        <Image
          maxWidth={imageMaxWidth}
          src={partner.companyLogo}
          alt={partner.companyName}
        />
      </a>
    </ImageContainer>
  );
};

const partnerListing = props => {
  const { loading, error, data } = useQuery(GET_PARTNERS);

  if (loading) return null;
  if (error) return null;

  return (
    <div>
      <ContentSection>
        <Grid columns="repeat(auto-fit,minmax(320px,1fr))">
          <Cell>
            <h1
              style={{
                marginTop: 0,
                marginBottom: 0,
                marginRight: '50px',
              }}
            >
              2019 Sponsors & Partners
            </h1>
            <div
              style={{ display: 'flex', textAlign: 'left', marginTop: '20px;' }}
            >
              <LinkButton
                href="/wi/become-a-partner"
                label="Become a Partner"
                color="thatBlue"
                borderColor="thatBlue"
              />
            </div>
            <RobotImage src="/images/robot.png" />
          </Cell>
          <Cell>
            <p className="large-body-copy">
              THAT Conference wouldn’t be possible without the support of our
              sponsors and partners. A large portion of the conference costs are
              paid from sponsorships so that we can keep ticket costs
              affordable. Please take a few minutes to learn about our sponsors
              and let them know you appreciate their support of our community!
            </p>
          </Cell>
        </Grid>
      </ContentSection>
      <ContentSection>
        <PartnerLevelTitle>Pioneer Partners</PartnerLevelTitle>
        <Partners>
          {data.partners.map(value => {
            if (value.partnershipLevel === 'PIONEER') {
              return renderPartner(value, '60.9rem', '38.7rem', '32.3rem');
            }
          })}
        </Partners>
      </ContentSection>
      <ContentSection>
        <PartnerLevelTitle>Explorer Partners</PartnerLevelTitle>
        <Partners>
          {data.partners.map(value => {
            if (value.partnershipLevel === 'EXPLORER') {
              return renderPartner(value, '39.9rem', '25.5rem', '28rem');
            }
          })}
        </Partners>
      </ContentSection>
      <ContentSection>
        <PartnerLevelTitle>Scout Partners</PartnerLevelTitle>
        <Partners>
          {data.partners.map(value => {
            if (value.partnershipLevel === 'SCOUT') {
              return renderPartner(value, '31.2rem', '20.3rem', '21.5rem');
            }
          })}
        </Partners>
      </ContentSection>
      <ContentSection>
        <PartnerLevelTitle>Patron Partners</PartnerLevelTitle>
        <Partners>
          {data.partners.map(value => {
            if (value.partnershipLevel === 'PATRON') {
              return renderPartner(value, '25.7rem', '16.7rem', '17.7rem');
            }
          })}
        </Partners>
      </ContentSection>
      <ContentSection>
        <PartnerLevelTitle>Media Partners</PartnerLevelTitle>
        <Partners>
          {data.partners.map(value => {
            if (value.partnershipLevel === 'MEDIA') {
              return renderPartner(value, '25.7rem', '16.7rem', '17.7rem');
            }
          })}
        </Partners>
      </ContentSection>
    </div>
  );
};

export default partnerListing;
