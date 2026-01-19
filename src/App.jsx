"use client"

import styled from "styled-components"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Projects from "./components/Projects"
import Pricing from "./components/Pricing"
import Workflow from "./components/Workflow"
import TeamRoles from "./components/TeamRoles"
import Deliverables from "./components/Deliverables"
import FAQ from "./components/FAQ"
import Footer from "./components/Footer"
import GlobalStyles from "./styles/GlobalStyles"

const AppWrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
`

function App() {
  return (
    <AppWrapper>
      <GlobalStyles />
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Pricing />
      <Workflow />
      <TeamRoles />
      <Deliverables />
      <FAQ />
      <Footer />
    </AppWrapper>
  )
}

export default App
