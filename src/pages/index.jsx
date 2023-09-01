import { Navigate, useRoutes } from 'react-router-dom'
import PublicLayout from './Public'
import HomePage from './Home'

export const createRoutes = () => [
    {
        path:'',
        element: <PublicLayout />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            }
        ],
    },
    {
        path: '*',
        element: <Navigate to="/" replace />,
    },
]

const Pages = () => {
    const routes = useRoutes(createRoutes())
    return routes
}

export default Pages
