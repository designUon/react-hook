import React, { useState } from 'react'
import { useFormInput } from '../hook/useFormInput'

export default function InputBox() {
    // 이름 받아오는 useFormInput
    const nameProps = useFormInput("");
    // 전화번호 받아오는 useFormInput
    const phoneProps = useFormInput("");

    const textProps = useFormInput("");
    const emailProps = useFormInput("");
    const dateProps = useFormInput("");

    // 확정된 이름을 기록하는 state
    const [name, setName] = useState("");

    const [text, setText] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");

    // 클릭했을 때 이름값을 저장하는 함수
    const addName = () => {
        setName(nameProps.value);
    }

    const addText = () => {
        setText(textProps.value);
        setEmail(emailProps.value);
        setDate(dateProps.value);
    }

    return (
        <div>
            <br/>

            <label htmlFor="">
                이름 :
                <input {...nameProps} />
            </label>
            
            <br/>

            <label htmlFor="">
                전화번호 :
                <input {...phoneProps} />
            </label>

            <br />
            <br />

            <button onClick={addName}>확인</button>

            {/* 값을 바로 가져오지않고 버튼 사용해서 가져와주기 */}
            {/* <p>이름 : {nameProps.value}</p> */}
            <p>이름 : {name}</p>

            {/* useFormInput을 사용하여 아래 태그의 값을 가져오세요 */}
            <textarea name="" id="" cols="30" rows="10" {...textProps}></textarea><br/>
            <input type="email" {...emailProps}/><br/>
            <input type="date" {...dateProps}/><br/>
            <button onClick={addText}>확인</button>
            <p>{text}</p>
            <p>{email}</p>
            <p>{date}</p>

        </div>
    )
}
