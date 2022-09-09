import React from 'react'
import { Col, Row } from 'react-bootstrap'

import { DiBootstrap, DiCss3Full, DiGithubBadge, DiHtml5, DiJavascript1, DiLinux, DiMysql, DiNpm, DiPostgresql, DiPython, DiReact, DiRor } from "react-icons/di";



export const Skills = () => {
  return (
    <>
      <Row  className='text-white row-style'>
        <Col>
        <h1>Skill's</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </Col>
        <Col>
          <DiBootstrap className='icons-style' alt="bootstrap" />
          <DiCss3Full className='icons-style'/>
          <DiGithubBadge className='icons-style'/>
          <DiHtml5 className='icons-style'/>
          <DiJavascript1 className='icons-style'/>
          <DiLinux className='icons-style'/>
          <DiMysql className='icons-style'/>
          <DiNpm className='icons-style'/>
          <DiPostgresql className='icons-style'/>
          <DiPython className='icons-style'/>
          <DiReact className='icons-style'/>
          <DiRor className='icons-style'/>
        </Col>
      </Row>
    </>
  )
}
