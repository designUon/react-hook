import React, { useEffect } from 'react'

export default function useLog() {

    // 파이어베이스의 값을 리덕스에 넣어서 쓰거나
    // state에 넣어서 쓸 수 있다
    useEffect(()=>{
        console.log("컴포넌트가 생성되었습니다")
    },[])

    useEffect(()=>{
        // 파이어베이스에서 값을 가져옴
        // 리덕스에 값 저장 : useDispatch 이용
    })
}