import React from "react";
import { toCamelCase } from "../../utils"

const placeholders = {
    fips: '33',
    province_state: 'Alabama',
    people_fully_vaccinated: '666'
}

const InputList = ({ formValues, handleInput }) => {
    const inputJSX = Object.keys(formValues).map(key => {
        const value = formValues[key]
        const keyName = key.toLowerCase()

        return (
            <div key={keyName} className="animated-input-box">
                <input
                    className="animated-input"
                    id={keyName}
                    name={keyName}
                    placeholder={placeholders[keyName]}
                    value={value}
                    onChange={handleInput}
                />
                <label htmlFor={keyName}>
                    {toCamelCase(keyName)}    
                </label>    
            </div>
        )
    })

    return inputJSX
}

export default InputList;