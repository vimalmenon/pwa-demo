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
    "/no-css" : {
        previous: "/",
        next: "/table",
    },
    "/table" : {
        previous: "/no-css",
        next: "",
    }
}