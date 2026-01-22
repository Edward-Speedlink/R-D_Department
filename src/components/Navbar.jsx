"use client"
import styled from "styled-components"
// import speedlinkLogo from '../../public/Speedlink_logo.jpeg';

const NavbarWrapper = styled.nav`
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(37, 99, 235, 0.1);
  padding: 1.25rem 0;
`

const NavContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0 1rem;
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

// If you want just the logo without text, use this:
// const Logo = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 0.5rem;
// `

// const Logo = styled.div`
//   font-size: 1.5rem;
//   font-weight: 800;
//   color: #2563eb;
//   display: flex;
//   align-items: center;
//   gap: 0.5rem;

//   @media (max-width: 768px) {
//     font-size: 1.25rem;
//   }
// `

const LogoMark = styled.span`
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #2563eb 0%, #dc2626 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 900;
`

const NavMenu = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    gap: 1rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    display: none;
  }
`

const NavLink = styled.a`
  color: #cbd5e1;
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #2563eb;
  }
`

const CTAButton = styled.button`
  background: linear-gradient(135deg, #2563eb 0%, #dc2626 100%);
  color: white;
  padding: 0.65rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(37, 99, 235, 0.4);
  }

  @media (max-width: 768px) {
    padding: 0.55rem 1.2rem;
    font-size: 0.85rem;
  }
`

const Navbar = () => {
  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }
  // Function to handle logo click (scrolls to top/home)
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <NavbarWrapper>
      <NavContent>
        {/* <Logo>
          <LogoMark>P</LogoMark>
          ProjectHub
        </Logo> */}

        <LogoContainer onClick={handleLogoClick}>
          {/* Logo image with alt text for accessibility */}
          <LogoImage 
            src="./Speedlink_logo.jpeg"
            alt="SpeedLink Research Logo" 
            // title="SpeedLink Research"
          />
          {/* Optional: Keep text next to logo */}
          <LogoText>ProjectHub</LogoText>
        </LogoContainer>
        {/* Update navbar border color */}
        <NavMenu>
          <NavLink onClick={() => handleScroll("hero")}>Home</NavLink>
          <NavLink onClick={() => handleScroll("services")}>Features</NavLink>
          <NavLink onClick={() => handleScroll("pricing")}>Pricing</NavLink>
          <NavLink onClick={() => handleScroll("workflow")}>Workflow</NavLink>
          <NavLink onClick={() => handleScroll("faq")}>FAQ</NavLink>
          <NavLink onClick={() => handleScroll("footer")}>Contact</NavLink>
        </NavMenu>
        <CTAButton onClick={() => (window.location.href = "https://wa.me/+2349167716220")}>Get Started</CTAButton>
      </NavContent>
    </NavbarWrapper>
  )
}

export default Navbar
