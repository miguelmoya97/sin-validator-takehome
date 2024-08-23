'use client'
import React, { useState, useEffect, ChangeEvent } from 'react'

interface SinValidatorProps {
    className?: string
}

const SinValidator: React.FC<SinValidatorProps> = (props) => {
    const [sin, setSin] = useState<string>('')
    const [validSin, setValidSin] = useState<boolean>(false)

    useEffect(() => {
        if (sin.length === 9) {
            validateSin()
        } else {
            setValidSin(false)
        }
    }, [sin])

    const onInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const regex = /^[0-9\b]+$/;
        if (e.target.value === '' || regex.test(e.target.value)) {
            setSin(e.target.value)
        }
    }

    const validateSin = (): void => {
        const sinArr: string[] = sin.split('')
        let sum: number = sinArr.map(digit => parseInt(digit))
            .map((digit, index) => (index % 2 !== 0) ? digit * 2 : digit)
            .map(digit => (digit / 10 >= 1) ? digit % 10 + Math.floor(digit / 10) : digit)
            .reduce((accum, digit) => accum + digit, 0)
        setValidSin(sum / 10 === 5)
    }

    return (
        <div className={`${props.className} flex flex-col items-center`}>
            <input className={`border focus:outline-none rounded-lg p-2 ${sin.length >= 9 && (validSin ? 'border-green-500' : 'border-red-500')}`} onChange={(e) => onInputChange(e)} value={sin} aria-label="SIN Input" />
            <span className='text-md '>{`${sin.length >= 9 ? (validSin ? 'Valid SIN' : 'Invalid SIN') : 'Enter a 9 digit SIN'}`}</span>
        </div>
    )
}

export default SinValidator