import React from 'react';
import {
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  FooterLogo,
  SocialIcon,
  FooterRights,
  FooterSocialIcon,
  FooterWrapper,
  FooterAddress,
  FooterColumn,
  FooterGrid,
} from './footerStyles';
import { footerData, footerSocialData } from '../../data/footerData';
import { Row, Section } from '../../globalStyles';
import logo from "../../assets/logo.png"

function Footer() {
  return (
    <Section padding="4rem 0 2rem 0">
      <FooterWrapper>
        <FooterGrid justify="space-between">
          <FooterColumn id="footerLogo">
            <FooterLogo to="/delta">
              <SocialIcon src={logo} />
              Delta
            </FooterLogo>
            <FooterAddress>
              69 Street, Delta Building, US Road, Los Angeles 123
            </FooterAddress>

            <Row align="center" margin="auto  0 0 0" gap="1rem">
              {footerSocialData.map((social, index) => (
                <FooterSocialIcon
                  key={index}
                  href="/delta"
                  target="_blank"
                  aria-label={social.name}
                >
                  {social.icon}
                </FooterSocialIcon>
              ))}
            </Row>
          </FooterColumn>
          {footerData.map((footerItem, index) => (
            <FooterLinkItems key={index}>
              <FooterLinkTitle>{footerItem.title}</FooterLinkTitle>
              {footerItem.links.map((link, linkIndex) => (
                <FooterLink key={linkIndex} to="/delta">
                  {link}
                </FooterLink>
              ))}
            </FooterLinkItems>
          ))}
        </FooterGrid>
        <FooterRights>Delta © 2021</FooterRights>
      </FooterWrapper>
    </Section>
  );
}

export default Footer;
