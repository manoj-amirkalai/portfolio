import React from 'react'
import './projects.css'
import tic from '../../pics/xo.jpg'
import calci from '../../pics/calci.webp'
import todo from '../../pics/todo.webp'
import QR from '../../pics/qr.png'
const Projects = () => {
  return (
    <div id='project'>
      <h2>My Works</h2>
      <div className="container portfolio_container">
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={tic} alt='xo'/>
          </div>
          <h4>Tic-Tac-Toe</h4>
          <a href='#' className='btn' target="_blank">Github</a>
          <a href='#' className='btn btn-primary' target="_blank">View Demo</a>
        </article> <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={calci} alt='xo'/>
          </div>
          <h4>Calculator</h4>
          <a href='#' className='btn' target="_blank">Github</a>
          <a href='#' className='btn btn-primary' target="_blank">View Demo</a>
        </article> <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={todo} alt='xo'/>
          </div>
          <h4>To-Do-List</h4>
          <a href='#' className='btn' target="_blank">Github</a>
          <a href='#' className='btn btn-primary' target="_blank">View Demo</a>
        </article> <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={QR} alt='xo'/>
          </div>
          <h4 className='qr'>QR-Code-Generator</h4>
          <a href='#' className='btn' target="_blank">Github</a>
          <a href='#' className='btn btn-primary' target="_blank">View Demo</a>
        </article> 
      </div>
    </div>
  )
}

export default Projects
