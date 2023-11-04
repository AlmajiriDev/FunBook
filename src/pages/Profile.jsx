import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const Profile = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { user } = useSelector((state)=> state.user)
  const { posts } = useSelector((state)=> state.posts)
  const [userInfo, setUserInfo] = useState(null)
  const [loading, setLoading] = useState(false)
  return (
   <>
    <div className='home w-full px-0 lg:px-10 pb-10 2xl:px-40 bg-bgColor'>

    </div>
   </>
  )
}

export default Profile