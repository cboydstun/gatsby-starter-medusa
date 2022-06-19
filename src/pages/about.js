import { Link } from "gatsby"
import React from "react"
import SearchEngineOptimization from "../components/utility/seo"

const About = () => (
  <div className="layout-base">
    <SearchEngineOptimization title="About FunAsFam.com" />
    <div className="h-full w-full flex flex-col justify-center items-center mt-8">
      <h1 className="text-3xl">About us in development</h1>
      <p className="mt-2">I'm working on it! Please come back later.</p>
      <Link to="/" className="mt-4 btn-ui">
        Go to frontpage
      </Link>
    </div>
  </div>
)

export default About
