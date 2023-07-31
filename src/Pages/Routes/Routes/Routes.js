import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layout/Main";
import Home from "../../Home/Home/Home";
import AllCourses from "../../ALLCourses/AllCourses";
import AllJobPreparation from "../../AllJobPreparation/AllJobPreparation";
import SignIn from "../../SignIn/SignIn";
import SignUp from "../../SignUp/SignUp";
import UiClass from "../../ALLCourses/UiClass/UiClass";
import ResetPassword from "../../SignIn/ResetPassword";
import Profile from "../../Profile/Profile";
import AllVideoClasses from "../../AllVideoClasses/AllVideoClasses";

const router = createBrowserRouter([
{
    path: "/",
    element: <Main/>,
    children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/allCourses',
            element: <AllCourses />
        },
        {
            path: '/allVideoClasses',
            element: <AllVideoClasses />
        },
        {
            path: '/allJobPreparation',
            element: <AllJobPreparation />
        },
        {
            path: '/signIn',
            element: <SignIn />
        },
        {
            path: '/signUp',
            element: <SignUp />
        },
        {
            path:'/reset',
            element: <ResetPassword/>
        },
        {
            path: "/uiClass",
            element: <UiClass />
          },
          {
            path: "/profile",
            element: <Profile />
          }

    ]
}
])
export default router;