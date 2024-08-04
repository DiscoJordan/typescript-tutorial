import React from 'react'
import { IUser } from '../types/types'

interface UserListProps{
    users:IUser[]
}

const UserList = ({users}:UserListProps) => {

  return (
    <>
   { users.map(user=>
    <div key={user?.id}>
        <h3>info</h3>
        name: {user?.name}
        id: {user?.id}
        email: {user.email}
        <h3>adress</h3>
        city: {user.address?.city}
        zipcode: {user.address?.zipcode}
        street: {user.address?.street}
    </div>)}
    </>
  )
}
 
export default UserList