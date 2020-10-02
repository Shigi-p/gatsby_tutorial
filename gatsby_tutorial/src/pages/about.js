import React from "react"
import Header from '../components/header'
import { Link } from 'gatsby'

export default function About() {
  return (
    <div style={{ color: `#44aa99` }}>
      <Header/>
      <h1>
        About Gatsby
      </h1>
      <p>
        Such wow. Very React.
      </p>
      <Link to='/'>
        top
      </Link>
    </div>
  )
}