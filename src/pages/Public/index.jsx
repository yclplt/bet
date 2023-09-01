import * as React from 'react'
import { Outlet } from 'react-router-dom'

const PublicLayout = () => {
    return (
        <div
            style={{
                display: 'flex',
                flex: '1 1 auto',
                maxWidth: '100%',
            }}
        >
            <Outlet />
        </div>
    )
}

export default PublicLayout
