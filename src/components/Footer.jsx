"use client"
import styled from "styled-components"
import { Mail, MessageCircle, Github, Instagram, Linkedin, Twitter } from "lucide-react"

const FooterWrapper = styled.footer`
  background: linear-gradient(135deg, #1a2847 0%, #0f172a 100%);
  border-top: 1px solid rgba(59, 130, 246, 0.1);
  padding: 3rem 2rem 2rem;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem 1.5rem;
  }
`

const FooterContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`

const FooterSection = styled.div``

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  color: #3b82f6;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const LogoMark = styled.span`
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 900;
  font-size: 0.9rem;
`

const FooterTitle = styled.h4`
  color: white;
  margin-bottom: 1rem;
  font-size: 1.1rem;
`

const FooterLink = styled.a`
  color: #cbd5e1;
  display: block;
  margin-bottom: 0.75rem;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #3b82f6;
  }
`

const FooterDescription = styled.p`
  color: #cbd5e1;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`

const ContactInfo = styled.div`
  color: #cbd5e1;
  margin-bottom: 1.5rem;

  p {
    margin-bottom: 0.75rem;
  }
`

const ContactLink = styled.a`
  color: #3b82f6;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;

  &:hover {
    color: #60a5fa;
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`

const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  background: rgba(59, 130, 246, 0.15);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3b82f6;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    background: #3b82f6;
    color: white;
    transform: translateY(-3px);
  }
`

const FooterBottom = styled.div`
  border-top: 1px solid rgba(59, 130, 246, 0.1);
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`

// Updated LogoImage component with responsive sizing
const LogoImage = styled.img`
  height: 40px; /* Default size */
  width: auto;
  object-fit: contain;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    height: 32px; /* Smaller on mobile */
  }

  @media (max-width: 480px) {
    height: 28px; /* Even smaller on very small screens */
  }
`

// Alternative if you want text next to the logo
const LogoText = styled.span`
  font-size: 1.5rem;
  font-weight: 800;
  color: #2563eb;
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`

const Copyright = styled.p`
  color: #64748b;
  font-size: 0.9rem;
`

const LegalLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`

const LegalLink = styled.a`
  color: #64748b;
  font-size: 0.9rem;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #3b82f6;
  }
`

const Footer = () => {
  return (
    <FooterWrapper id="footer">
      <FooterContent>
        <FooterSection>
          {/* <Logo>
            <LogoMark>P</LogoMark>
            ProjectHub
          </Logo> */}

          <LogoContainer>
          {/* Logo image with alt text for accessibility */}
          <LogoImage 
            src="./Speedlink_logo.jpeg"
            alt="SpeedLink Research Logo" 
            // title="SpeedLink Research"
          />
          {/* Optional: Keep text next to logo */}
          <LogoText>ProjectHub</LogoText>
        </LogoContainer>

          <FooterDescription>
            We help students build defensible, high-quality final year projects with expert guidance and technical
            support.
          </FooterDescription>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLink onClick={() => document.getElementById("hero").scrollIntoView({ behavior: "smooth" })}>
            Home
          </FooterLink>
          <FooterLink onClick={() => document.getElementById("services").scrollIntoView({ behavior: "smooth" })}>
            Services
          </FooterLink>
          <FooterLink onClick={() => document.getElementById("pricing").scrollIntoView({ behavior: "smooth" })}>
            Pricing
          </FooterLink>
          <FooterLink onClick={() => document.getElementById("faq").scrollIntoView({ behavior: "smooth" })}>
            FAQ
          </FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Get In Touch</FooterTitle>
          <ContactInfo>
            <p style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Mail size={18} color="#3b82f6" />
              Email
            </p>
            <ContactLink href="mailto:Research@speedlinkng.com">Research@speedlinkng.com</ContactLink>
          </ContactInfo>
          <ContactInfo>
            <p style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <MessageCircle size={18} color="#3b82f6" />
              WhatsApp
            </p>
            <ContactLink href="https://wa.me/+2349167716220">+234 916 771 6220</ContactLink>
          </ContactInfo>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Follow Us</FooterTitle>
          <SocialLinks>
            <SocialIcon href="https://www.linkedin.com/company/speedlinkng/" title="LinkedIn">
              <Linkedin size={20} />
            </SocialIcon>
            <SocialIcon href="#" title="Twitter">
              <Twitter size={20} />
            </SocialIcon>
            <SocialIcon href="https://www.instagram.com/_speedlinkng?igsh=bGdvMGhvZ29ieXV2" title="Instagram">
              <Instagram size={20} />
            </SocialIcon>
            <SocialIcon href="https://github.com/speedlinkAdmin" title="GitHub">
              <Github size={20} />
            </SocialIcon>
          </SocialLinks>
        </FooterSection>
      </FooterContent>

      <FooterBottom>
        <Copyright>© 2026 ProjectHub. All rights reserved.</Copyright>
        <LegalLinks>
          <LegalLink href="#">Privacy Policy</LegalLink>
          <LegalLink href="#">Terms of Service</LegalLink>
          <LegalLink href="#">Contact Us</LegalLink>
        </LegalLinks>
      </FooterBottom>
    </FooterWrapper>
  )
}

export default Footer
