import React from 'react'
import { IUser } from '../types/types'

interface UserItemProps{
    user:IUser
}

const UserItem = ({user}:UserItemProps) => {

  return (
    <>
        <h3>info</h3>
        name: {user?.name}
        id: {user?.id}
        email: {user.email}
        <h3>adress</h3>
        city: {user.address?.city}
        zipcode: {user.address?.zipcode}
        street: {user.address?.street}
    
    </>
  )
}
 
export default UserItem