import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    enterKeyHandler: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, enterKeyHandler} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.grayBorder// need to fix with (?:)

    return (
        <div className={s.form}>
            <input value={name} onChange={setNameCallback} className={`${inputClass} ${s.inputButtonCommonStyles} ${s.input}`} onKeyDown={enterKeyHandler}/>
            <button onClick={addUser} className={`${s.inputButtonCommonStyles} ${s.button}`}>add</button>
            <span className={s.totalUsers}>{totalUsers}</span>
            <div className={s.errorText}>{error}</div>
        </div>
    )
}

export default Greeting
