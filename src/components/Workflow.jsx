import styled from "styled-components"

const WorkflowWrapper = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #1a2847 0%, #0f172a 100%);

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

const Timeline = styled.div`
  position: relative;
  padding: 2rem 0;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, #2563eb 0%, transparent 100%);

    @media (max-width: 768px) {
      left: 20px;
    }
  }

  @media (max-width: 768px) {
    padding-left: 0;
  }
`

const TimelineItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 60px 1fr;
  margin-bottom: 3rem;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 40px 1fr;
    gap: 1.5rem;

    &:nth-child(odd) {
      .content {
        grid-column: 2;
      }
    }

    &:nth-child(even) {
      .content {
        grid-column: 2;
      }
    }
  }
`

const Content = styled.div`
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(220, 38, 38, 0.05) 100%);
  border: 1px solid rgba(37, 99, 235, 0.2);
  padding: 2rem;
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(37, 99, 235, 0.4);
    box-shadow: 0 10px 25px rgba(37, 99, 235, 0.15);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`

const StepNumber = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #2563eb 0%, #dc2626 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  position: relative;
  z-index: 1;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1.1rem;
  }
`

const StepTitle = styled.h3`
  font-size: 1.3rem;
  color: white;
  margin-bottom: 0.75rem;
`

const StepDescription = styled.p`
  color: #cbd5e1;
  line-height: 1.6;
`

const Workflow = () => {
  const steps = [
    {
      title: "Student Onboarding",
      desc: "Initial consultation to understand your project requirements, academic level, and timeline.",
    },
    {
      title: "Project Scoping",
      desc: "Detailed project analysis, scope definition, estimation, and service agreement.",
    },
    {
      title: "Design & Implementation",
      desc: "Architecture design, code development, integration, and feature implementation phase.",
    },
    {
      title: "Testing & Validation",
      desc: "Comprehensive testing, bug fixes, performance optimization, and quality assurance.",
    },
    {
      title: "Final Delivery",
      desc: "Complete project handover with documentation, code comments, and video explanation.",
    },
  ]

  return (
    <WorkflowWrapper id="workflow">
      <Container>
        <SectionTitle>Our Process</SectionTitle>
        <SectionSubtitle>A structured, transparent workflow from start to finish</SectionSubtitle>

        <Timeline>
          {steps.map((step, index) => (
            <TimelineItem key={index}>
              {index % 2 === 0 ? (
                <>
                  <Content className="content">
                    <StepTitle>{step.title}</StepTitle>
                    <StepDescription>{step.desc}</StepDescription>
                  </Content>
                  <StepNumber>{index + 1}</StepNumber>
                  <div />
                </>
              ) : (
                <>
                  <div />
                  <StepNumber>{index + 1}</StepNumber>
                  <Content className="content">
                    <StepTitle>{step.title}</StepTitle>
                    <StepDescription>{step.desc}</StepDescription>
                  </Content>
                </>
              )}
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </WorkflowWrapper>
  )
}

export default Workflow


