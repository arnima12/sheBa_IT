import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layout/Main";
import Home from "../../Home/Home/Home";
import AllCourses from "../../ALLCourses/AllCourses";
import AllJobPreparation from "../../AllJobPreparation/AllJobPreparation";
import SignIn from "../../SignIn/SignIn";
import SignUp from "../../SignUp/SignUp";
import UiClass from "../../ALLCourses/UiClass/UiClass";
import ResetPassword from "../../SignIn/ResetPassword";

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
          }

    ]
}
])
export default router;