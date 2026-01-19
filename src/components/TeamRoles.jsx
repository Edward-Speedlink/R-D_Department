import styled from "styled-components"
import { Briefcase, Code, FileText } from "lucide-react"

const TeamWrapper = styled.section`
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

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const RoleCard = styled.div`
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(30, 64, 175, 0.05) 100%);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 16px;
  padding: 2.5rem;
  text-align: center;
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

const RoleIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
`

const RoleTitle = styled.h3`
  font-size: 1.5rem;
  color: white;
  margin-bottom: 1rem;
`

const RoleDescription = styled.p`
  color: #cbd5e1;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`

const Responsibilities = styled.ul`
  list-style: none;
  text-align: left;
  color: #cbd5e1;

  li {
    padding: 0.5rem 0;
    display: flex;
    align-items: center;
    gap: 0.75rem;

    &::before {
      content: '→';
      color: #3b82f6;
      font-weight: bold;
      flex-shrink: 0;
    }
  }
`

const TeamRoles = () => {
  const roles = [
    {
      icon: Briefcase,
      title: "Project Lead",
      desc: "Overall project management and coordination",
      responsibilities: ["Client communication", "Timeline management", "Quality oversight", "Risk management"],
    },
    {
      icon: Code,
      title: "Engineer / Researcher",
      desc: "Technical implementation and development",
      responsibilities: ["Code development", "System architecture", "Problem solving", "Testing & debugging"],
    },
    {
      icon: FileText,
      title: "Documentation Lead",
      desc: "Complete documentation and knowledge transfer",
      responsibilities: ["Code documentation", "User guides", "Video tutorials", "Architecture docs"],
    },
  ]

  return (
    <TeamWrapper>
      <Container>
        <SectionTitle>Dedicated Team Structure</SectionTitle>
        <SectionSubtitle>Each project gets a skilled team with clear roles and responsibilities</SectionSubtitle>

        <TeamGrid>
          {roles.map((role, index) => {
            const IconComponent = role.icon
            return (
              <RoleCard key={index}>
                <RoleIcon>
                  <IconComponent size={36} color="white" />
                </RoleIcon>
                <RoleTitle>{role.title}</RoleTitle>
                <RoleDescription>{role.desc}</RoleDescription>
                <Responsibilities>
                  {role.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </Responsibilities>
              </RoleCard>
            )
          })}
        </TeamGrid>
      </Container>
    </TeamWrapper>
  )
}

export default TeamRoles
