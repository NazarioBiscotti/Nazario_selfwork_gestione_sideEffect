
import './App.css'
import Navbar from './components/navbar'
import Header from './components/Header'
import Form from './components/Form'
import List from './components/List'
import LoadingData from './components/LoadingData'

function App() {

  //!NON HO USATO USE EFFECT PUR AVENDO CAPITO IL MOTIVO DEL SUO UTILIZZO, VOLEVO UN PARERE SULLA PULIZIA DI QUESTA VERSIONE, NON MI SEMBRAVA CE NE FOSSE BISOGNO
  //!VORREI ANCHE UN PARERE SUL LOADING QUINDI SE FOSSE POSSIBILE AVERE UN CONFRONTO NE SAREI LIETO

  const list = ["Andrea", "Giada", "Manolo", "Rosa"]
  const [data, setData] = useState([])
  const [users, setUsers] = useState([])
  const [isTrue, setIsTrue] = useState(false)
  const [loading, setLoading] = useState("")

  function card(e) {

    e.preventDefault()
    let newData = [e.target.name.value, e.target.email.value]
    setData(newData)

  }

  async function getUsers() {


    const promise = await fetch('https://jsonplaceholder.typicode.com/todos')
    const json = await promise.json()

    if (!isTrue) {
      setLoading(<div className='text-center mt-5'><h2>loading...</h2></div>)

      setTimeout(() => {
        setUsers(json)
        setIsTrue(true)
        setLoading("")
      }, 2000)

    } else {
      setUsers([])
      setIsTrue(false)
    }

    console.log(json)

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
                <input type="text" className="mx-2" id="name" name="name" aria-describedby="" />
              </div>
              <div className="mb-3">
                <label htmlFor="email">Email</label>
                <input type="email" className="mx-2" id="email" name="email" aria-describedby="" />
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

        <LoadingData>
          <button onClick={getUsers}>ciao</button>
        </LoadingData>

        <div>
          <div>{loading}</div>
          <ul>
            {users.map((user, index) => (<li key={index}>{user.title}</li>))}
          </ul>
        </div>



      </Header>


    </>
  )
}

export default App
