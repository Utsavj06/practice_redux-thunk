import React from 'react'

const Users = ({users}) => {
  console.log(users)
  return (
    <div>
      {users.map((user)=>{
        return <div key={user.id}>
          <div style={{display:'flex', alignItems:'center'}}>
            <h1>{user.name}</h1>
            <h3>{user.email}</h3>
          </div>
          </div>
      })}
    </div>
  )
}

export default Users