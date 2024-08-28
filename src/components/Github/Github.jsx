import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([])
    const [name, setName] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/SuhailAhmed011')
        .then(Response => Response.json())
        .then(data => {
            console.log(data);
            setData(data)
            
        })
    
    
    }, [])
    
    
  return (
    <div className='bg-slate-500 text-3xl text-white p-4 text-center'>
        Github Followers: {data.followers} <br />
        Name: {data.name}
        <img src={data.avatar_url} alt="Git image" width={300} />
    </div>
  )
}

export default Github