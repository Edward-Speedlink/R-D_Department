"use client"
import styled from "styled-components"

const HeroWrapper = styled.section`
  padding: 5rem 2rem;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0f172a 0%, #1a2847 50%, #0f172a 100%);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
    min-height: auto;
  }
`

const HeroContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 2;
`

const Subtitle = styled.p`
  color: #2563eb;
  font-weight: 600;
  margin-bottom: 1rem;
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`

const Headline = styled.h1`
  font-size: 4rem;
  color: white;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  font-weight: 900;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`

const Description = styled.p`
  font-size: 1.25rem;
  color: #cbd5e1;
  margin-bottom: 2.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`

const CTAContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
`

const PrimaryButton = styled.button`
  background: linear-gradient(135deg, #2563eb 0%, #dc2626 100%);
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(37, 99, 235, 0.4);
  }

  @media (max-width: 480px) {
    padding: 0.85rem 2rem;
    font-size: 0.95rem;
  }
`

const SecondaryButton = styled.button`
  background: transparent;
  color: #2563eb;
  padding: 1rem 2.5rem;
  border: 2px solid #2563eb;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(37, 99, 235, 0.1);
    transform: translateY(-3px);
  }

  @media (max-width: 480px) {
    padding: 0.85rem 2rem;
    font-size: 0.95rem;
  }
`

const Hero = () => {
  return (
    <HeroWrapper id="hero">
      <HeroContent>
        <Subtitle>Complete Project Solutions</Subtitle>
        <Headline>We Build Complete, Defendable Final Year Projects for Students</Headline>
        <Description>
          Save time, ensure quality, and get expert guidance through our three engagement models designed specifically
          for academic projects. From advisory to full implementation.
        </Description>
        <CTAContainer>
          <PrimaryButton onClick={() => (window.location.href = "https://wa.me/+2349167716220")}>
            Contact via WhatsApp
          </PrimaryButton>
          <SecondaryButton onClick={() => document.getElementById("services").scrollIntoView({ behavior: "smooth" })}>
            Learn More
          </SecondaryButton>
        </CTAContainer>
      </HeroContent>
    </HeroWrapper>
  )
}

export default Hero











// "use client"
// import styled from "styled-components"

// const HeroWrapper = styled.section`
//   padding: 5rem 2rem;
//   min-height: 90vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background: linear-gradient(135deg, #0f172a 0%, #1a2847 50%, #0f172a 100%);
//   position: relative;
//   overflow: hidden;

//   @media (max-width: 768px) {
//     padding: 3rem 1.5rem;
//     min-height: auto;
//   }
// `

// const HeroContent = styled.div`
//   max-width: 1000px;
//   margin: 0 auto;
//   text-align: center;
//   position: relative;
//   z-index: 2;
// `

// const Subtitle = styled.p`
//   color: #3b82f6;
//   font-weight: 600;
//   margin-bottom: 1rem;
//   font-size: 0.95rem;
//   text-transform: uppercase;
//   letter-spacing: 1px;
// `

// const Headline = styled.h1`
//   font-size: 4rem;
//   color: white;
//   margin-bottom: 1.5rem;
//   line-height: 1.1;
//   font-weight: 900;

//   @media (max-width: 768px) {
//     font-size: 2.5rem;
//   }

//   @media (max-width: 480px) {
//     font-size: 2rem;
//   }
// `

// const Description = styled.p`
//   font-size: 1.25rem;
//   color: #cbd5e1;
//   margin-bottom: 2.5rem;
//   max-width: 600px;
//   margin-left: auto;
//   margin-right: auto;
//   line-height: 1.6;

//   @media (max-width: 768px) {
//     font-size: 1.1rem;
//   }
// `

// const CTAContainer = styled.div`
//   display: flex;
//   gap: 1.5rem;
//   justify-content: center;
//   flex-wrap: wrap;
// `

// const PrimaryButton = styled.button`
//   background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%);
//   color: white;
//   padding: 1rem 2.5rem;
//   border-radius: 50px;
//   font-size: 1rem;
//   font-weight: 600;
//   box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
//   transition: all 0.3s ease;

//   &:hover {
//     transform: translateY(-3px);
//     box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
//   }

//   @media (max-width: 480px) {
//     padding: 0.85rem 2rem;
//     font-size: 0.95rem;
//   }
// `

// const SecondaryButton = styled.button`
//   background: transparent;
//   color: #3b82f6;
//   padding: 1rem 2.5rem;
//   border: 2px solid #3b82f6;
//   border-radius: 50px;
//   font-size: 1rem;
//   font-weight: 600;
//   transition: all 0.3s ease;

//   &:hover {
//     background: rgba(59, 130, 246, 0.1);
//     transform: translateY(-3px);
//   }

//   @media (max-width: 480px) {
//     padding: 0.85rem 2rem;
//     font-size: 0.95rem;
//   }
// `

// const Hero = () => {
//   return (
//     <HeroWrapper id="hero">
//       <HeroContent>
//         <Subtitle>Complete Project Solutions</Subtitle>
//         <Headline>We Build Complete, Defendable Final Year Projects for Students</Headline>
//         <Description>
//           Save time, ensure quality, and get expert guidance through our three engagement models designed specifically
//           for academic projects. From advisory to full implementation.
//         </Description>
//         <CTAContainer>
//           <PrimaryButton onClick={() => (window.location.href = "https://wa.me/1234567890")}>
//             Contact via WhatsApp
//           </PrimaryButton>
//           <SecondaryButton onClick={() => document.getElementById("services").scrollIntoView({ behavior: "smooth" })}>
//             Learn More
//           </SecondaryButton>
//         </CTAContainer>
//       </HeroContent>
//     </HeroWrapper>
//   )
// }

// export default Hero
