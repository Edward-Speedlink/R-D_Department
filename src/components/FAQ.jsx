"use client"

import { useState } from "react"
import styled from "styled-components"

const FAQWrapper = styled.section`
  padding: 5rem 2rem;
  background-color: #0f172a;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`

const Container = styled.div`
  max-width: 900px;
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

const FAQItem = styled.div`
  margin-bottom: 1.5rem;
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(59, 130, 246, 0.4);
    box-shadow: 0 10px 25px rgba(59, 130, 246, 0.1);
  }
`

const FAQQuestion = styled.button`
  width: 100%;
  padding: 1.5rem;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(30, 64, 175, 0.04) 100%);
  color: white;
  text-align: left;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.12) 0%, rgba(30, 64, 175, 0.08) 100%);
  }

  @media (max-width: 768px) {
    padding: 1.25rem;
    font-size: 1rem;
  }
`

const Icon = styled.span`
  color: #3b82f6;
  font-size: 1.5rem;
  font-weight: bold;
  transition: transform 0.3s ease;
  transform: ${(props) => (props.open ? "rotate(180deg)" : "rotate(0)")};
`

const FAQAnswer = styled.div`
  max-height: ${(props) => (props.open ? "500px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease;
  background: rgba(59, 130, 246, 0.05);
  padding: ${(props) => (props.open ? "1.5rem" : "0 1.5rem")};
`

const AnswerText = styled.p`
  color: #cbd5e1;
  line-height: 1.6;
`

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: "Is academic integrity maintained?",
      answer:
        "Absolutely. We believe in helping you learn, not cheating. Our co-build and advisory models ensure you understand every part of your project. We provide code with detailed comments and comprehensive documentation.",
    },
    {
      question: "What if I need revisions?",
      answer:
        "We offer revision rounds based on your pricing tier. Most plans include 1-3 revision rounds. Additional revisions can be requested for a small fee. Quality assurance is our priority.",
    },
    {
      question: "How long does a project take?",
      answer:
        "Timelines depend on complexity: Small projects (2-4 weeks), Medium projects (4-8 weeks), Complex projects (8-12 weeks). We provide realistic estimates after understanding your requirements.",
    },
    {
      question: "Do you provide ongoing support?",
      answer:
        "Yes! We provide support for at least 30 days after delivery. Premium packages include lifetime support. We're here to help you succeed even after the project is delivered.",
    },
    {
      question: "What technologies do you work with?",
      answer:
        "We work with modern tech stacks: Python, JavaScript, Node.js, React, Django, FastAPI, AWS, Docker, IoT platforms, ML frameworks (TensorFlow, PyTorch), and more. Tell us your requirements!",
    },
    {
      question: "Can I see a portfolio of previous work?",
      answer:
        "Due to academic integrity, we cannot share actual student projects. However, we can provide anonymized case studies and explain our approach to similar projects you're interested in.",
    },
    {
      question: "What's your refund policy?",
      answer:
        "We provide a 7-day refund guarantee if you're not satisfied with the project scope definition or our approach. Once development starts, we work towards completion with your satisfaction.",
    },
    {
      question: "How do we communicate?",
      answer:
        "We communicate through WhatsApp, Email, and scheduled video calls. Regular updates ensure you're always in the loop. Your project lead is your single point of contact.",
    },
  ]

  return (
    <FAQWrapper id="faq">
      <Container>
        <SectionTitle>Frequently Asked Questions</SectionTitle>
        <SectionSubtitle>Everything you need to know about working with us</SectionSubtitle>

        {faqs.map((faq, index) => (
          <FAQItem key={index}>
            <FAQQuestion onClick={() => setOpenIndex(openIndex === index ? -1 : index)}>
              <span>{faq.question}</span>
              <Icon open={openIndex === index}>+</Icon>
            </FAQQuestion>
            <FAQAnswer open={openIndex === index}>
              <AnswerText>{faq.answer}</AnswerText>
            </FAQAnswer>
          </FAQItem>
        ))}
      </Container>
    </FAQWrapper>
  )
}

export default FAQ
