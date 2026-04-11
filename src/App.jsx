import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Header from './components/Header'
import Form from './components/Form'
import List from './components/List'

function App() {

  const list = ["Andrea", "Giada", "Manolo", "Rosa"]
  const [data, setData] = useState([])

  function card(e) {

    e.preventDefault()
    let newData = [e.target.name.value, e.target.email.value]
    setData(newData)

  }


  return (
    <>


      <Navbar></Navbar>
      <Header>

        <h1 className='text-center mt-5'>Hello</h1>
        <List>

          <div className='d-flex justify-content-center mt-5 gap-3'>
            {list.map((el) => <h2 key={el}>{el}</h2>)}
          </div>
        </List>
        <Form>

          <div className='py-5'>
            <form onSubmit={card} className="mt-5 d-flex flex-column align-items-center">
              <div className="mb-3">
                <label htmlFor="name">Name</label>
                <input type="text" className="mx-2" id="name" aria-describedby="" />
              </div>
              <div className="mb-3">
                <label htmlFor="email">Email</label>
                <input type="email" className="mx-2" id="email" aria-describedby="" />
              </div>
              <button type="submit" className="btn btn-primary" >Submit</button>
            </form>

          </div>
        </Form>
        <div className="container mt-5">
          <div className="row justify-content-center ">
            <div className="customCard col-3 border border-2 text-center p-5">
              <h2>{data[0]}</h2>
              <h2>{data[1]}</h2>
            </div>
          </div>
        </div>
      </Header>

    </>
  )
}

export default App
