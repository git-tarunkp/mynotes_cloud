import React from 'react'
import { useContext } from 'react'
import noteContext from '../context/notes/notecontext'
const About = () => {
const a= useContext(noteContext)

  return (
    <div>this is about {a.name}</div>
  )
}

export default About