import styled from "styled-components"
import { Settings, BookOpen, Video } from "lucide-react"

const DeliverablesWrapper = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #1a2847 0%, #0f172a 100%);

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`

const Container = styled.div`
  max-width: 1200px;
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

const DeliverablesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const DeliverableCard = styled.div`
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(30, 64, 175, 0.05) 100%);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 16px;
  padding: 2.5rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    border-color: rgba(59, 130, 246, 0.4);
    box-shadow: 0 20px 40px rgba(59, 130, 246, 0.2);
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }
`

const IconBox = styled.div`
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin-bottom: 1.5rem;
`

const DeliverableTitle = styled.h3`
  font-size: 1.4rem;
  color: white;
  margin-bottom: 1rem;
`

const DeliverableDescription = styled.p`
  color: #cbd5e1;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`

const DeliverableList = styled.ul`
  list-style: none;
  color: #cbd5e1;

  li {
    padding: 0.5rem 0;
    display: flex;
    align-items: center;
    gap: 0.75rem;

    &::before {
      content: '✓';
      color: #3b82f6;
      font-weight: bold;
      flex-shrink: 0;
    }
  }
`

const ImportantNote = styled.div`
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(30, 64, 175, 0.1) 100%);
  border: 2px solid rgba(59, 130, 246, 0.3);
  border-radius: 12px;
  padding: 2rem;
  margin-top: 3rem;
  text-align: center;

  .title {
    font-size: 1.3rem;
    color: #3b82f6;
    font-weight: 600;
    margin-bottom: 0.75rem;
  }

  .desc {
    color: #cbd5e1;
    line-height: 1.6;
  }
`

const Deliverables = () => {
  const deliverables = [
    {
      icon: Settings,
      title: "Functional Prototype / Complete Product",
      desc: "Fully working, tested, and production-ready implementation",
      items: [
        "Complete source code",
        "Database setup scripts",
        "All required dependencies",
        "Deployment ready",
        "Performance optimized",
      ],
    },
    {
      icon: BookOpen,
      title: "Full Project Documentation",
      desc: "Comprehensive written documentation for understanding and maintenance",
      items: [
        "Architecture overview",
        "Installation guide",
        "API documentation",
        "Code comments",
        "Troubleshooting guide",
      ],
    },
    {
      icon: Video,
      title: "Video Documentation (Compulsory)",
      desc: "Professional video explaining the entire project",
      items: [
        "Architecture walkthrough",
        "Feature demonstrations",
        "Code explanations",
        "Deployment process",
        "Key decision rationales",
      ],
    },
  ]

  return (
    <DeliverablesWrapper>
      <Container>
        <SectionTitle>What You Get</SectionTitle>
        <SectionSubtitle>Complete deliverables for every project</SectionSubtitle>

        <DeliverablesGrid>
          {deliverables.map((item, index) => {
            const IconComponent = item.icon
            return (
              <DeliverableCard key={index}>
                <IconBox>
                  <IconComponent size={32} color="white" />
                </IconBox>
                <DeliverableTitle>{item.title}</DeliverableTitle>
                <DeliverableDescription>{item.desc}</DeliverableDescription>
                <DeliverableList>
                  {item.items.map((itm, idx) => (
                    <li key={idx}>{itm}</li>
                  ))}
                </DeliverableList>
              </DeliverableCard>
            )
          })}
        </DeliverablesGrid>

        <ImportantNote>
          <div
            className="title"
            style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}
          >
            <Video size={24} color="#3b82f6" />
            Video Documentation is Mandatory
          </div>
          <div className="desc">
            Every project includes a professional video demonstrating the system architecture, implementation details,
            key features, and design decisions. This ensures you can confidently defend your project.
          </div>
        </ImportantNote>
      </Container>
    </DeliverablesWrapper>
  )
}

export default Deliverables












// import styled from "styled-components"

// const DeliverablesWrapper = styled.section`
//   padding: 5rem 2rem;
//   background: linear-gradient(135deg, #1a2847 0%, #0f172a 100%);

//   @media (max-width: 768px) {
//     padding: 3rem 1.5rem;
//   }
// `

// const Container = styled.div`
//   max-width: 1200px;
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

// const DeliverablesGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//   gap: 2rem;

//   @media (max-width: 768px) {
//     grid-template-columns: 1fr;
//   }
// `

// const DeliverableCard = styled.div`
//   background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(30, 64, 175, 0.05) 100%);
//   border: 1px solid rgba(59, 130, 246, 0.2);
//   border-radius: 16px;
//   padding: 2.5rem;
//   transition: all 0.3s ease;

//   &:hover {
//     transform: translateY(-8px);
//     border-color: rgba(59, 130, 246, 0.4);
//     box-shadow: 0 20px 40px rgba(59, 130, 246, 0.2);
//   }

//   @media (max-width: 768px) {
//     padding: 2rem;
//   }
// `

// const IconBox = styled.div`
//   width: 70px;
//   height: 70px;
//   background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%);
//   border-radius: 12px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 2rem;
//   margin-bottom: 1.5rem;
// `

// const DeliverableTitle = styled.h3`
//   font-size: 1.4rem;
//   color: white;
//   margin-bottom: 1rem;
// `

// const DeliverableDescription = styled.p`
//   color: #cbd5e1;
//   line-height: 1.6;
//   margin-bottom: 1.5rem;
// `

// const DeliverableList = styled.ul`
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

// const ImportantNote = styled.div`
//   background: linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(30, 64, 175, 0.1) 100%);
//   border: 2px solid rgba(59, 130, 246, 0.3);
//   border-radius: 12px;
//   padding: 2rem;
//   margin-top: 3rem;
//   text-align: center;

//   .title {
//     font-size: 1.3rem;
//     color: #3b82f6;
//     font-weight: 600;
//     margin-bottom: 0.75rem;
//   }

//   .desc {
//     color: #cbd5e1;
//     line-height: 1.6;
//   }
// `

// const Deliverables = () => {
//   const deliverables = [
//     {
//       icon: "⚙️",
//       title: "Functional Prototype / Complete Product",
//       desc: "Fully working, tested, and production-ready implementation",
//       items: [
//         "Complete source code",
//         "Database setup scripts",
//         "All required dependencies",
//         "Deployment ready",
//         "Performance optimized",
//       ],
//     },
//     {
//       icon: "📚",
//       title: "Full Project Documentation",
//       desc: "Comprehensive written documentation for understanding and maintenance",
//       items: [
//         "Architecture overview",
//         "Installation guide",
//         "API documentation",
//         "Code comments",
//         "Troubleshooting guide",
//       ],
//     },
//     {
//       icon: "🎥",
//       title: "Video Documentation (Compulsory)",
//       desc: "Professional video explaining the entire project",
//       items: [
//         "Architecture walkthrough",
//         "Feature demonstrations",
//         "Code explanations",
//         "Deployment process",
//         "Key decision rationales",
//       ],
//     },
//   ]

//   return (
//     <DeliverablesWrapper>
//       <Container>
//         <SectionTitle>What You Get</SectionTitle>
//         <SectionSubtitle>Complete deliverables for every project</SectionSubtitle>

//         <DeliverablesGrid>
//           {deliverables.map((item, index) => (
//             <DeliverableCard key={index}>
//               <IconBox>{item.icon}</IconBox>
//               <DeliverableTitle>{item.title}</DeliverableTitle>
//               <DeliverableDescription>{item.desc}</DeliverableDescription>
//               <DeliverableList>
//                 {item.items.map((itm, idx) => (
//                   <li key={idx}>{itm}</li>
//                 ))}
//               </DeliverableList>
//             </DeliverableCard>
//           ))}
//         </DeliverablesGrid>

//         <ImportantNote>
//           <div className="title">📹 Video Documentation is Mandatory</div>
//           <div className="desc">
//             Every project includes a professional video demonstrating the system architecture, implementation details,
//             key features, and design decisions. This ensures you can confidently defend your project.
//           </div>
//         </ImportantNote>
//       </Container>
//     </DeliverablesWrapper>
//   )
// }

// export default Deliverables
