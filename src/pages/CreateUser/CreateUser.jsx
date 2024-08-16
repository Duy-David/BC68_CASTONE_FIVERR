import React from 'react'
import InputCustom from '../../Input/InputCustom'

const CreateUser = () => {
  return (
    <div>
        <h2>Form tạo người dùng trong hệ thống</h2>
        <form action="">
        <InputCustom contentLabel={"Name"}/>
        <InputCustom contentLabel={"Email"}/>
        <InputCustom contentLabel={"Phone"}/>
        <InputCustom contentLabel={"Password"} type='password'/>
        </form>
    </div>
  )
}

export default CreateUser