'use client'
import React, { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import store from '@/core/store/store'

const ReduxContainer: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <Provider store={store}>{children}</Provider>
        </>
    )
}

export default ReduxContainer
