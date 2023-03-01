import React from 'react'
import './projects.css'
import tic from '../../pics/xo.jpg'
import calci from '../../pics/calci.webp'
import todo from '../../pics/todo.webp'
import QR from '../../pics/qr.png'
import me from '../../pics/new.png'
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
          <a href='https://github.com/manojamirkalai/tic-tac-toe/tree/main' className='btn' target="_pop">Github</a>
          <a href='https://manojamirkalai.github.io/tic-tac-toe/' className='btn btn-primary' target="_pop">View Demo</a>
        </article> <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={calci} alt='xo'/>
          </div>
          <h4>Calculator</h4>
          <a href='https://github.com/manojamirkalai/calci/tree/main' className='btn' target="_pop">Github</a>
          <a href='https://manojamirkalai.github.io/calci/' className='btn btn-primary' target="_pop">View Demo</a>
        </article> <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={todo} alt='xo'/>
          </div>
          <h4>To-Do-List</h4>
          <a href='https://github.com/manojamirkalai/todolist/tree/main' className='btn' target="_pop">Github</a>
          <a href='https://manojamirkalai.github.io/todolist/' className='btn btn-primary' target="_pop">View Demo</a>
        </article> <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={QR} alt='xo'/>
          </div>
          <h4 className='qr'>QR-Code-Generator</h4>
          <a href='https://github.com/manojamirkalai/qrgenerator/tree/main' className='btn' target="_pop">Github</a>
          <a href='https://manojamirkalai.github.io/qrgenerator/' className='btn btn-primary' target="_pop">View Demo</a>
        </article>  <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={me} alt='xo'/>
          </div>
          <h4 className='my'>Portfolio</h4>
          <a href='https://github.com/manojamirkalai/portfolio/tree/main' className='btn' target="_pop">Github</a>
          <a href='https://manojamirkalai.github.io/portfolio/' className='btn btn-primary' target="_pop">View Demo</a>
        </article> 
      </div>
    </div>
  )
}

export default Projects
