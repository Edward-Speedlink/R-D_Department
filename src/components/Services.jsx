"use client"
import styled from "styled-components"
import { Lightbulb, Handshake, Zap } from "lucide-react"

const ServicesWrapper = styled.section`
  padding: 5rem 2rem;
  background-color: #0f172a;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`

const SectionTitle = styled.h2`
  font-size: 3rem;
  color: white;
  margin-bottom: 1rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  color: #cbd5e1;
  text-align: center;
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ServiceCard = styled.div`
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(220, 38, 38, 0.05) 100%);
  border: 1px solid rgba(37, 99, 235, 0.2);
  padding: 2.5rem;
  border-radius: 16px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #2563eb, #dc2626);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-8px);
    border-color: rgba(37, 99, 235, 0.4);
    box-shadow: 0 20px 40px rgba(37, 99, 235, 0.2);

    &::before {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }
`

const ServiceIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #2563eb 0%, #dc2626 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
`

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  color: white;
  margin-bottom: 1rem;
`

const ServicePrice = styled.p`
  color: #2563eb;
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 1rem;
`

const ServiceDescription = styled.p`
  color: #cbd5e1;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`

const FeaturesList = styled.ul`
  list-style: none;
  color: #cbd5e1;

  li {
    padding: 0.5rem 0;
    display: flex;
    align-items: center;
    gap: 0.75rem;

    &::before {
      content: '✓';
      color: #dc2626;
      font-weight: bold;
      flex-shrink: 0;
    }
  }
`

const Services = () => {
  const services = [
    {
      icon: Lightbulb,
      title: "Technical Advisory",
      price: "Low Cost",
      description: "Get expert guidance on your project architecture and development approach.",
      features: [
        "Architecture reviews",
        "Code reviews",
        "Design consultation",
        "Technology recommendations",
        "Problem-solving support",
      ],
    },
    {
      icon: Handshake,
      title: "Co-Build Model",
      price: "Mid Cost",
      description: "Your team builds with our R&D support guiding the implementation.",
      features: [
        "Weekly consultation calls",
        "Architecture design",
        "Implementation guidance",
        "Code review & feedback",
        "Testing support",
      ],
    },
    {
      icon: Zap,
      title: "Full Implementation",
      price: "Premium",
      description: "Our expert team builds your complete project from scratch to deployment.",
      features: ["End-to-end development", "Complete testing", "Documentation", "Code handover", "Lifetime support"],
    },
  ]

  return (
    <ServicesWrapper id="services">
      <Container>
        <SectionTitle>Three Engagement Models</SectionTitle>
        <SectionSubtitle>Choose the level of involvement that works best for your needs and budget</SectionSubtitle>
        <ServicesGrid>
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <ServiceCard key={index}>
                <ServiceIcon>
                  <IconComponent size={28} color="white" />
                </ServiceIcon>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServicePrice>{service.price}</ServicePrice>
                <ServiceDescription>{service.description}</ServiceDescription>
                <FeaturesList>
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </FeaturesList>
              </ServiceCard>
            )
          })}
        </ServicesGrid>
      </Container>
    </ServicesWrapper>
  )
}

export default Services










// import styled from "styled-components"

// const ServicesWrapper = styled.section`
//   padding: 5rem 2rem;
//   background-color: #0f172a;

//   @media (max-width: 768px) {
//     padding: 3rem 1.5rem;
//   }
// `

// const Container = styled.div`
//   max-width: 1400px;
//   margin: 0 auto;
// `

// const SectionTitle = styled.h2`
//   font-size: 3rem;
//   color: white;
//   margin-bottom: 1rem;
//   text-align: center;

//   @media (max-width: 768px) {
//     font-size: 2rem;
//   }
// `

// const SectionSubtitle = styled.p`
//   font-size: 1.1rem;
//   color: #cbd5e1;
//   text-align: center;
//   margin-bottom: 4rem;
//   max-width: 600px;
//   margin-left: auto;
//   margin-right: auto;
// `

// const ServicesGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
//   gap: 2rem;

//   @media (max-width: 768px) {
//     grid-template-columns: 1fr;
//   }
// `

// const ServiceCard = styled.div`
//   background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(30, 64, 175, 0.05) 100%);
//   border: 1px solid rgba(59, 130, 246, 0.2);
//   padding: 2.5rem;
//   border-radius: 16px;
//   transition: all 0.3s ease;
//   position: relative;
//   overflow: hidden;

//   &::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     height: 3px;
//     background: linear-gradient(90deg, #3b82f6, #1e40af);
//     opacity: 0;
//     transition: opacity 0.3s ease;
//   }

//   &:hover {
//     transform: translateY(-8px);
//     border-color: rgba(59, 130, 246, 0.4);
//     box-shadow: 0 20px 40px rgba(59, 130, 246, 0.2);

//     &::before {
//       opacity: 1;
//     }
//   }

//   @media (max-width: 768px) {
//     padding: 2rem;
//   }
// `

// const ServiceIcon = styled.div`
//   width: 60px;
//   height: 60px;
//   background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%);
//   border-radius: 12px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 1.8rem;
//   margin-bottom: 1.5rem;
// `

// const ServiceTitle = styled.h3`
//   font-size: 1.5rem;
//   color: white;
//   margin-bottom: 1rem;
// `

// const ServicePrice = styled.p`
//   color: #3b82f6;
//   font-weight: 600;
//   font-size: 1.1rem;
//   margin-bottom: 1rem;
// `

// const ServiceDescription = styled.p`
//   color: #cbd5e1;
//   line-height: 1.6;
//   margin-bottom: 1.5rem;
// `

// const FeaturesList = styled.ul`
//   list-style: none;
//   color: #cbd5e1;

//   li {
//     padding: 0.5rem 0;
//     display: flex;
//     align-items: center;
//     gap: 0.75rem;

//     &::before {
//       content: '✓';
//       color: #3b82f6;
//       font-weight: bold;
//       flex-shrink: 0;
//     }
//   }
// `

// const Services = () => {
//   const services = [
//     {
//       icon: "💡",
//       title: "Technical Advisory",
//       price: "Low Cost",
//       description: "Get expert guidance on your project architecture and development approach.",
//       features: [
//         "Architecture reviews",
//         "Code reviews",
//         "Design consultation",
//         "Technology recommendations",
//         "Problem-solving support",
//       ],
//     },
//     {
//       icon: "🤝",
//       title: "Co-Build Model",
//       price: "Mid Cost",
//       description: "Your team builds with our R&D support guiding the implementation.",
//       features: [
//         "Weekly consultation calls",
//         "Architecture design",
//         "Implementation guidance",
//         "Code review & feedback",
//         "Testing support",
//       ],
//     },
//     {
//       icon: "⚡",
//       title: "Full Implementation",
//       price: "Premium",
//       description: "Our expert team builds your complete project from scratch to deployment.",
//       features: ["End-to-end development", "Complete testing", "Documentation", "Code handover", "Lifetime support"],
//     },
//   ]

//   return (
//     <ServicesWrapper id="services">
//       <Container>
//         <SectionTitle>Three Engagement Models</SectionTitle>
//         <SectionSubtitle>Choose the level of involvement that works best for your needs and budget</SectionSubtitle>
//         <ServicesGrid>
//           {services.map((service, index) => (
//             <ServiceCard key={index}>
//               <ServiceIcon>{service.icon}</ServiceIcon>
//               <ServiceTitle>{service.title}</ServiceTitle>
//               <ServicePrice>{service.price}</ServicePrice>
//               <ServiceDescription>{service.description}</ServiceDescription>
//               <FeaturesList>
//                 {service.features.map((feature, idx) => (
//                   <li key={idx}>{feature}</li>
//                 ))}
//               </FeaturesList>
//             </ServiceCard>
//           ))}
//         </ServicesGrid>
//       </Container>
//     </ServicesWrapper>
//   )
// }

// export default Services
