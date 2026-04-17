import { useState } from 'react'




function LoadingData() {
    
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)

    async function getUsers() {
        if (users.length===0) {
            setLoading(true)
            const promise = await fetch('https://jsonplaceholder.typicode.com/users')
            const json = await promise.json()



            setTimeout(() => {
                setUsers(json)
                setLoading(false)
            }, 3000)
        } else {

            setUsers([])
            setLoading(false)
        }
    }



    return (

        <>
            <div className='d-flex justify-content-center my-5'>
                <button className='btn btn-primary m-auto' onClick={getUsers}>show users</button>
            </div>

            <div className='d-flex flex-column align-items-center gap-2'>
                {loading && <h2>loading...</h2>}
                {users.map((user) => (<div key={user.id} className='d-flex border border-2 fs-3 gap-3'>

                    <div>{user.name}</div>
                    <div>{user.email}</div>
                </div>))}



            </div>
        </>



    )

}

export default LoadingData