import {Home, NoCss, Table} from "../Page";


export const Pages = [
    {
        link: "/",
        label: "Home"
    },
    {
        link: "/no-css",
        label: "No CSS layout"
    },
    {
        link: "/table",
        label: "Table layout"
    }
];

export const FakeLinks = [
    {
        link: "",
        label: "Home"
    },
    {
        link: "/about",
        label: "About"
    },
    {
        link: "/contact",
        label: "Contact"
    }
];

export const PageLinks = {
    "/": {
        next: "/no-css",
    },
    "/no-css" : {
        previous: "/",
        next: "/table",
    },
    "/table" : {
        previous: "/no-css",
        next: "",
    }
}

export const Routes = [
   {
        path:"/",
        Component: Home
    },
    {
        path:"/no-css",
        Component: NoCss
    },
    {
        path:"/table",
        Component: Table
    },
    {
        path:"*",
        Component: Home
    }
]

