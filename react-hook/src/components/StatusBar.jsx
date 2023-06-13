import React from 'react'
import { useOnlineStatus } from '../hook/useOnlineStatus'
import useLog from '../hook/useLog'


export default function StatusBar() {
    const isOnline = useOnlineStatus();
    useLog();
    return (
        <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>
    )
}