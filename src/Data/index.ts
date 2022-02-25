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

export const FakeSidebar = [
    {
        link: "",
        label: "Menu 1",
        subLinks: [
            {
                link: "",
                label: "Sub Menu 1",
            },
            {
                link: "",
                label: "Sub Menu 2",
            }
        ]
    },
    {
        link: "",
        label: "Menu 2",
        subLinks: [
            {
                link: "",
                label: "2 Sub Menu 1",
            },
            {
                link: "",
                label: "2 Sub Menu 2",
            }
        ]
    },
    {
        link: "",
        label: "Menu 3",
        subLinks: []
    }
]

export const PageLinks = {
    "/": {
        next: "/no-css",
    },
    "/no-css" : {
        title: "Page without CSS",
        previous: "/",
        next: "/table",
    },
    "/table" : {
        title: "Page with table",
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

