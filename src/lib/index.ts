import data from "../../data/data.json"
import {
    codeMobileImage,
    codeDesktopImage,
    bulbMobileImage,
    bulbDesktopImage,
    blog02DesktopImage,
    blog02MobileImage,
    blog03MobileImage,
    blog03DesktopImage,
    blog04DesktopImage,
    blog04MobileImage,
    blog05DesktopImage,
    blog05MobileImage,
} from "../assets"


const images = [
    {
        mobile: codeMobileImage,
        desktop: codeDesktopImage,
    },
    {
        mobile: bulbMobileImage,
        desktop: bulbDesktopImage,
    },
    {
        mobile: blog05MobileImage,
        desktop: blog05DesktopImage,
    },
    {
        mobile: blog04MobileImage,
        desktop: blog04DesktopImage,
    },
    {
        mobile: blog02MobileImage,
        desktop: blog02DesktopImage,
    },
    {
        mobile: blog03MobileImage,
        desktop: blog03DesktopImage
    }
]

export const blogs = data.map((blog, index) => ({
    ...blog,
    image: images[index]
}))