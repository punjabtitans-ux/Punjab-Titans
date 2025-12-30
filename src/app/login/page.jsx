import React from 'react'
import Featured from '../Components/Pagecomponent/Featured'
import Sponsors from '../Components/Pagecomponent/Sponsors'
import Login from '../Components/Pagecomponent/Login'

const page = () => {
  return (
    <div>
      <Login />
      <Featured />
      <div className="pb-16">
        <Sponsors />
      </div>
    </div>
  )
}

export default page
