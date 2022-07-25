import { Navigate } from 'react-router-dom'
import Home from '../pages/Home';
import FirstPage from "../pages/Home/router_components/FirstPage";
import DynamicState from "../pages/Home/router_components/DynamicState";
import EditInfo from '../pages/EditInfo';
import SetNickName from '../pages/EditInfo/SetNickName'
import SetGender from '../pages/EditInfo/setGender'
import Mine from '../pages/Mine'
import Login from '../pages/Login';
import PlayListDet from '../pages/PlayListDet';

export default [
    {
        path: '/home',
        element: <Home />,
        children: [
            {
                path: 'firstPage',
                element: <AnthComponent><FirstPage /></AnthComponent>
                // element: <FirstPage />
            },
            {
                path: 'dynamicState',
                element: <AnthComponent><DynamicState /></AnthComponent>
                // element: <DynamicState />
            },
            {
                path: '',
                element: <AnthComponent><Navigate to='firstPage' /></AnthComponent>
                // element: <Navigate to='firstPage' />
            }
        ]
    },
    {
        path: '/edit',
        element: <AnthComponent><EditInfo /></AnthComponent>,
        // element: <EditInfo />,
        children: [
            {
                path: 'setNickName',
                element: <SetNickName />
            },
            {
                path: 'gender',
                element: <SetGender />
            }
        ]
    },
    {
        path: '/mine',
        element: <AnthComponent><Mine /></AnthComponent>
        // element: <Mine />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/playlist/:id',
        element: <PlayListDet />
    },
    {
        path: '*',
        element: <AnthComponent><Navigate to='/home' /></AnthComponent>
        // element: <Navigate to='login' />
    }
]

function AnthComponent(props) {
    const cookie = localStorage.getItem('cookie')
    return (cookie !== 'undefined' && cookie !== null) ? props.children : <Navigate to='/login' />
}

