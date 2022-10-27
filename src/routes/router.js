import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home';
import Layout from '../Layout/Layout';
import NotFound from '../Pages/NotFound';
import Courses from '../Pages/Courses';
import AllCourses from '../Pages/AllCourses';
import CourseDetails from '../Pages/CourseDetails';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import PrivateRoute from './PrivateRoute';
import Checkout from '../Pages/Checkout';
import Blog from '../Pages/Blog';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [

            {
                path: "/",
                element: <Home />
            },
            {
                path: "/home",
                element: <Home />
            },
            {
                path: "/blog",
                element: <Blog />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/checkout",
                element: <PrivateRoute><Checkout /></PrivateRoute>
            },
            {
                path: "/courses",
                loader: () => fetch(' https://assignment-10-server-wheat.vercel.app/courses'),
                element: <Courses />,
                children: [
                    {
                        path: "/courses",
                        loader: () => fetch(' https://assignment-10-server-wheat.vercel.app/courses'),
                        element: <AllCourses />,
                    },
                    {
                        path: ":courseId",
                        loader: ({ params }) => fetch(` https://assignment-10-server-wheat.vercel.app/courses/${params.courseId}`),
                        element: <CourseDetails />
                    }
                ]
            },

        ]
    },
    {
        path: "*",
        element: <NotFound />
    }

])