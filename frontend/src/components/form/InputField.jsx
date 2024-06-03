import React from 'react'

const InputField = ({labelName, placeholder, inputName, onChange, value}) => {
  return (
    <div className="filter-control">
        <label>{labelName}</label>
        <input type="number" placeholder={placeholder} name={inputName} value={value} onChange={onChange}/>
    </div>
  )
}

export default InputField