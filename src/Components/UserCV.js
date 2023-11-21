import React from 'react'
    import PersonalInfo from './PersonalInfo'
    import Experience from './Experience'
    import Contacts from './Contacts'
    import "./UserCV.css"
    import logo from "./logo.svg"


const UserCV = () => {
  return (
    <div className='body'>
      <div className='cv'> Curriculum Vitae </div>
        <img className="photo" src={logo} />
        <PersonalInfo />
        <Experience />
        <Contacts />
    </div>
  )
}

export default UserCV

