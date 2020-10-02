import React from "react"
import { Link } from 'gatsby'

export default function Home() {
  return (
    <div>
      Hello world!
      <p>
        <Link to='/about'>
          about
        </Link>
      </p>
    </div>
  );
}
