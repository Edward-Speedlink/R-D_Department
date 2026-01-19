"use client"

import React from "react"
import styled from "styled-components"

const PricingWrapper = styled.section`
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

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`

const FormCard = styled.div`
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(220, 38, 38, 0.05) 100%);
  border: 2px solid rgba(37, 99, 235, 0.2);
  border-radius: 16px;
  padding: 2.5rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(37, 99, 235, 0.4);
    box-shadow: 0 10px 30px rgba(37, 99, 235, 0.15);
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }
`

const FormTitle = styled.h3`
  font-size: 1.5rem;
  color: white;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  .title-accent {
    width: 4px;
    height: 24px;
    background: linear-gradient(135deg, #2563eb 0%, #dc2626 100%);
    border-radius: 2px;
  }
`

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`

const Label = styled.label`
  display: block;
  color: #e2e8f0;
  font-weight: 500;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
`

const Input = styled.input`
  width: 100%;
  padding: 0.875rem;
  background: rgba(15, 23, 42, 0.5);
  border: 1px solid rgba(37, 99, 235, 0.3);
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 0.95rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #2563eb;
    background: rgba(15, 23, 42, 0.8);
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
  }

  &::placeholder {
    color: #64748b;
  }
`

const Select = styled.select`
  width: 100%;
  padding: 0.875rem;
  background: rgba(15, 23, 42, 0.5);
  border: 1px solid rgba(37, 99, 235, 0.3);
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #2563eb;
    background: rgba(15, 23, 42, 0.8);
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
  }

  option {
    background: #1e293b;
    color: #e2e8f0;
  }
`

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.875rem;
  background: rgba(15, 23, 42, 0.5);
  border: 1px solid rgba(37, 99, 235, 0.3);
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 0.95rem;
  font-family: 'Inter', sans-serif;
  resize: vertical;
  min-height: 100px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #2563eb;
    background: rgba(15, 23, 42, 0.8);
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
  }

  &::placeholder {
    color: #64748b;
  }
`

const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  color: white;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(37, 99, 235, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`

const EstimateDisplay = styled.div`
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.15) 0%, rgba(220, 38, 38, 0.1) 100%);
  border: 2px solid rgba(220, 38, 38, 0.3);
  border-radius: 12px;
  padding: 2rem;
  margin-top: 2rem;
  text-align: center;

  .estimate-label {
    color: #cbd5e1;
    font-size: 0.95rem;
    margin-bottom: 0.75rem;
  }

  .estimate-range {
    font-size: 2rem;
    font-weight: 800;
    background: linear-gradient(135deg, #2563eb 0%, #dc2626 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 1rem;
  }

  .estimate-disclaimer {
    color: #94a3b8;
    font-size: 0.85rem;
    font-style: italic;
  }
`

const Pricing = () => {
  const [estimatorForm, setEstimatorForm] = React.useState({
    projectTitle: "",
    category: "Software",
    academicLevel: "Undergraduate",
    timeline: "4-8 weeks",
    engagementModel: "Co-build",
  })

  const [contactForm, setContactForm] = React.useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [estimatedCost, setEstimatedCost] = React.useState(null)

  const handleEstimatorChange = (e) => {
    const { name, value } = e.target
    setEstimatorForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleContactChange = (e) => {
    const { name, value } = e.target
    setContactForm((prev) => ({ ...prev, [name]: value }))
  }

  const calculateEstimate = () => {
    const complexityMap = {
      Software: 1,
      AI: 1.5,
      IoT: 1.3,
      Embedded: 1.4,
      Data: 1.2,
      Hybrid: 1.6,
    }

    const timelineMap = {
      "2-4 weeks": 80000,
      "4-8 weeks": 120000,
      "8-12 weeks": 180000,
      "12-16 weeks": 250000,
      "16+ weeks": 350000,
    }

    const engagementMap = {
      Advisory: 0.5,
      "Co-build": 1,
      "Full Implementation": 1.5,
    }

    const levelMultiplier = estimatorForm.academicLevel === "Post-Graduate" ? 1.3 : 1

    const basePrice = timelineMap[estimatorForm.timeline] || 1200
    const complexity = complexityMap[estimatorForm.category] || 1
    const engagement = engagementMap[estimatorForm.engagementModel] || 1

    const totalCost = basePrice * complexity * engagement * levelMultiplier
    const minCost = Math.round(totalCost * 0.8)
    const maxCost = Math.round(totalCost * 1.2)

    setEstimatedCost({ min: minCost, max: maxCost })

    // Send to backend
    console.log("[v0] Sending project inquiry to backend:", {
      ...estimatorForm,
      estimatedRange: { min: minCost, max: maxCost },
    })
  }

  // const handleContactSubmit = (e) => {
  //   e.preventDefault()
  //   console.log("[v0] Sending contact form to backend:", contactForm)
  //   setContactForm({ name: "", email: "", phone: "", message: "" })
  //   alert("Thank you! We'll get back to you soon.")
  // }

  const handleContactSubmit = (e) => {
  e.preventDefault();
  
  const subject = `Interest in Project - contact name ${contactForm.name}`;
  const body = `
Client: ${contactForm.name}
Email: ${contactForm.email}
Phone: ${contactForm.phone || 'N/A'}

Message:
${contactForm.message}
  `.trim();
  
  const mailtoLink = `mailto:research@speedlinkng.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
  // Check if we're on mobile
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  
  if (isMobile) {
    // For mobile, we need a different approach
    window.location.href = mailtoLink;
    
    // Show instructions for mobile users
    setTimeout(() => {
      if (confirm("If your email app didn't open:\n\n1. Copy this email: research@speedlinkng.com\n2. Open your email app manually\n3. Paste the email and send your message\n\nClick OK to copy the email address.")) {
        navigator.clipboard.writeText('research@speedlinkng.com');
        alert("Email address copied to clipboard!");
      }
    }, 1000);
  } else {
    // For desktop
    window.open(mailtoLink, '_blank');
  }
  
  // Reset form
  setContactForm({ name: "", email: "", phone: "", message: "" });
};


  return (
    <PricingWrapper id="pricing">
      <Container>
        <SectionTitle>Project Estimation & Contact</SectionTitle>
        <SectionSubtitle>Get an estimated project cost or reach out to our team directly</SectionSubtitle>

        <FormGrid>
          <FormCard>
            <FormTitle>
              <span className="title-accent"></span>
              Project Estimator
            </FormTitle>

            <FormGroup>
              <Label>Project Title</Label>
              <Input
                type="text"
                name="projectTitle"
                value={estimatorForm.projectTitle}
                onChange={handleEstimatorChange}
                placeholder="e.g., Smart Home IoT System"
              />
            </FormGroup>

            <FormGroup>
              <Label>Project Category</Label>
              <Select name="category" value={estimatorForm.category} onChange={handleEstimatorChange}>
                <option>Software</option>
                <option>AI</option>
                <option>IoT</option>
                <option>Embedded</option>
                <option>Data</option>
                <option>Hybrid</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <Label>Academic Level</Label>
              <Select name="academicLevel" value={estimatorForm.academicLevel} onChange={handleEstimatorChange}>
                <option>Undergraduate</option>
                <option>Post-Graduate</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <Label>Expected Timeline</Label>
              <Select name="timeline" value={estimatorForm.timeline} onChange={handleEstimatorChange}>
                <option>2-4 weeks</option>
                <option>4-8 weeks</option>
                <option>8-12 weeks</option>
                <option>12-16 weeks</option>
                <option>16+ weeks</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <Label>Engagement Model</Label>
              <Select name="engagementModel" value={estimatorForm.engagementModel} onChange={handleEstimatorChange}>
                <option>Advisory</option>
                <option>Co-build</option>
                <option>Full Implementation</option>
              </Select>
            </FormGroup>

            <SubmitButton onClick={calculateEstimate}>Calculate Estimated Cost</SubmitButton>

            {estimatedCost && (
              <EstimateDisplay>
                <div className="estimate-label">Estimated Project Range</div>
                <div className="estimate-range">₦{estimatedCost.min.toLocaleString()} - ₦{estimatedCost.max.toLocaleString()}</div>
                <div className="estimate-disclaimer">*This is an estimate. Final pricing depends on detailed project requirements.</div>
              </EstimateDisplay>
            )}
          </FormCard>

          <FormCard>
            <FormTitle>
              <span className="title-accent"></span>
              Contact Us
            </FormTitle>

            <form onSubmit={handleContactSubmit}>
              <FormGroup>
                <Label>Full Name</Label>
                <Input
                  type="text"
                  name="name"
                  value={contactForm.name}
                  onChange={handleContactChange}
                  placeholder="Your name"
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label>Email</Label>
                <Input
                  type="email"
                  name="email"
                  value={contactForm.email}
                  onChange={handleContactChange}
                  placeholder="your@email.com"
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label>Phone (Optional)</Label>
                <Input
                  type="tel"
                  name="phone"
                  value={contactForm.phone}
                  onChange={handleContactChange}
                  placeholder="+1 (555) 123-4567"
                />
              </FormGroup>

              <FormGroup>
                <Label>Message</Label>
                <Textarea
                  name="message"
                  value={contactForm.message}
                  onChange={handleContactChange}
                  placeholder="Tell us about your project and how we can help..."
                  required
                />
              </FormGroup>

              <SubmitButton type="submit" title="This will open your email client with a pre-filled message">Send Message</SubmitButton>
            </form>
          </FormCard>
        </FormGrid>
      </Container>
    </PricingWrapper>
  )
}

export default Pricing
