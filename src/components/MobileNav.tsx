import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/20/solid";


export default function MobileNav() {

    return (
        <Menu>
            <MenuButton>
                <Bars3Icon className="h-10"></Bars3Icon>
            </MenuButton>

            <MenuItems
                transition
                anchor="bottom end"
                className="bg-gradient-to-r from-dark-magenta to-navy-blue w-full text-white px-5 border-b shadow-md">
                <div className="flex flex-col gap-4 border-light-gray py-3">
                    <MenuItem as="a" href="/">
                        Home
                    </MenuItem>
                    <MenuItem as="a" href="/#projects">
                        Projects
                    </MenuItem>
                    <MenuItem as="a" href="/about-me">
                        BY THE WAY!!
                    </MenuItem>
                </div>

            </MenuItems>
        </Menu>
    )
}