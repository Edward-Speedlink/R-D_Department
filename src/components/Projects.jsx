import styled from "styled-components"

const ProjectsWrapper = styled.section`
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

const ProjectCard = styled.div`
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(30, 64, 175, 0.04) 100%);
  border: 1px solid rgba(59, 130, 246, 0.15);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(59, 130, 246, 0.3);
    box-shadow: 0 15px 35px rgba(59, 130, 246, 0.15);
  }
`

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.8);
`

const ProjectContent = styled.div`
  padding: 1.5rem;
`

const ProjectTitle = styled.h3`
  font-size: 1.2rem;
  color: white;
  margin-bottom: 0.75rem;
`

const ProjectDescription = styled.p`
  color: #cbd5e1;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 1rem;
`

const ProjectTags = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`

const Tag = styled.span`
  background: rgba(59, 130, 246, 0.2);
  color: #3b82f6;
  padding: 0.35rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`

const Projects = () => {
  const projects = [
    {
      title: "Smart Energy Meter",
      desc: "IoT-based real-time energy monitoring system",
      tags: ["IoT", "Hardware", "ML"],
      image: "/smart-energy-meter-iot-dashboard.jpg",
    },
    {
      title: "AI Surveillance Camera",
      desc: "AI-driven security camera with object detection",
      tags: ["AI", "CV", "Edge Computing"],
      image: "/ai-surveillance-camera-security.jpg",
    },
    {
      title: "Smart Irrigation",
      desc: "Automated irrigation system with weather predictions",
      tags: ["IoT", "ML", "Embedded"],
      image: "/smart-irrigation-system-agriculture.jpg",
    },
    {
      title: "Fire Detection System",
      desc: "Edge-AI powered early fire detection system",
      tags: ["AI", "Edge", "Computer Vision"],
      image: "/fire-detection-alert-system.jpg",
    },
    {
      title: "Voice-Controlled Home",
      desc: "AI voice-controlled home automation platform",
      tags: ["AI", "IoT", "NLP"],
      image: "/voice-controlled-smart-home.jpg",
    },
    {
      title: "Disease Detection AI",
      desc: "Deep learning model for medical image analysis",
      tags: ["ML", "Medical", "DL"],
      image: "/medical-ai-diagnosis-detection.jpg",
    },
    {
      title: "Real-Time Traffic",
      desc: "Traffic flow prediction using neural networks",
      tags: ["AI", "Traffic", "ML"],
      image: "/traffic-flow-prediction-neural-network.jpg",
    },
    {
      title: "Gesture Recognition",
      desc: "Hand gesture control system for devices",
      tags: ["CV", "ML", "IoT"],
      image: "/hand-gesture-recognition-control.jpg",
    },
    {
      title: "Drone Pathfinding",
      desc: "Autonomous drone with obstacle avoidance",
      tags: ["Robotics", "AI", "Navigation"],
      image: "/autonomous-drone-obstacle-avoidance.jpg",
    },
    {
      title: "Chatbot Assistant",
      desc: "Multi-language NLP chatbot platform",
      tags: ["NLP", "ML", "Web"],
      image: "/ai-chatbot-nlp-assistant.jpg",
    },
    {
      title: "Crop Disease Detection",
      desc: "Mobile app for agricultural disease detection",
      tags: ["ML", "Mobile", "Agriculture"],
      image: "/crop-disease-detection-app.jpg",
    },
    {
      title: "Stock Market Prediction",
      desc: "Time-series forecasting for stock prices",
      tags: ["ML", "Finance", "DL"],
      image: "/stock-market-prediction-graph.png",
    },
  ]

  return (
    <ProjectsWrapper>
      <Container>
        <SectionTitle>Sample Projects We Handle</SectionTitle>
        <SectionSubtitle>Across IoT, AI, Hardware, Embedded Systems, and Full-Stack Development</SectionSubtitle>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard key={index}>
              <ProjectImage
                style={{
                  backgroundImage: `url('${project.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.desc}</ProjectDescription>
                <ProjectTags>
                  {project.tags.map((tag, idx) => (
                    <Tag key={idx}>{tag}</Tag>
                  ))}
                </ProjectTags>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsWrapper>
  )
}

export default Projects
