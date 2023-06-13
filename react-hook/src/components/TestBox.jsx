import React, { useEffect } from 'react'
// import {useLog} from '../hook/useLog'
// default로 보내준 값이라서 {}생략가능
import useLog from '../hook/useLog'

export default function TestBox() {
    // 컴포넌트가 생성될 때마다 실행할 useEffect
    // ex) firebase의 값을 가져오는 일
    // 생성될 때 마다 값이 출력

    useEffect(()=>{
        console.log("컴포넌트가 생성되었습니다")
    },[])

    return (
        <div>TestBox</div>
    )
}
