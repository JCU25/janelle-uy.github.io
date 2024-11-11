import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/20/solid";
import React from "react";


export default function MobileNav() {

    return (
        <Menu>
            <MenuButton>
                <Bars3Icon className="h-10"></Bars3Icon>
            </MenuButton>

            <MenuItems
                transition
                anchor="bottom end"
                className="bg-gradient-to-r from-magenta to-navy-blue w-full flex flex-col text-white p-5 gap-4 border-t border-light-gray">
                <MenuItem as="a" href="/">
                    Home
                </MenuItem>
                <MenuItem as="a" href="/coding">
                    Coding Projects
                </MenuItem>
                <MenuItem as="a" href="/">
                    Designs
                </MenuItem>
                <MenuItem as="a" href="/about-me">
                    BY THE WAY!!
                </MenuItem>

            </MenuItems>
        </Menu>
    )
}