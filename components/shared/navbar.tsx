import { FunctionComponent } from "react";
import { Menu } from "lucide-react";

import { Button } from "../ui/button";
import Logo from "./logo";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";
import { Separator } from "../ui/separator";

import NavbarItem from "./navbarItem";
import Link from "next/link";

interface NavbarProps {}

const menuItems = [
  {
    label: "Buy",
    children: [
      {
        label: "Homes for sale",
        links: [
          "Homes for sale",
          "Foreclosures",
          "For sale by owner",
          "Open houses",
          "New construction",
          "Coming soon",
          "Recent home sales",
          "All homes",
        ],
      },
      {
        label: "Resources",
        links: [
          "Home Buying Guide",
          "Foreclosure center",
          "Real estate app",
          "Down payment assistance",
        ],
      },
    ],
  },
  {
    label: "Rent",
    children: [
      {
        label: "Search for rentals",
        links: [
          "Rental buildings",
          "Apartment for rent",
          "Houses for rent",
          "All rental listings",
          "All rental buildings",
        ],
      },
      {
        label: "Renter Hub",
        links: ["Contacted rentals", "Your rental", "Messages"],
      },
      {
        label: "Resources",
        links: ["Affordability calculator", "Rent Guide"],
      },
    ],
  },
  {
    label: "Sell",
    children: [
      {
        label: "Resources",
        links: [
          "Explore your options",
          "See your home's Zestimate",
          "Home values",
          "Sellers guide",
        ],
      },
      {
        label: "Selling options",
        links: ["Find a seller's agent", "Post For Sale by Owner"],
      },
    ],
  },
  {
    label: "Advertise",
  },
  {
    label: "Help",
  },
];

const MobileNavbar: FunctionComponent<NavbarProps> = () => {
  return (
    <div
      data-testid="navbar"
      className="fixed top-0 left-0 w-full flex lg:hidden items-center justify-between py-3 z-50 text-white">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="ghost" className="w-2/12">
            <Menu />
          </Button>
        </DialogTrigger>

        <DialogContent className="h-full md:h-auto">
          <DialogHeader>
            <div className="flex justify-center items-center mb-2">
              <Logo />
            </div>
            <Separator />
            <DialogDescription>
              <ul className="mt-2">
                {menuItems.map((item, idx) => (
                  <NavbarItem key={idx} {...item} />
                ))}
              </ul>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>

        <Logo />

        <Button variant="ghost" className="w-2/12">
          Sign In
        </Button>
      </Dialog>
    </div>
  );
};

const LargeScreenNavbar: FunctionComponent<NavbarProps> = () => {
  return (
    <div className="hidden lg:flex items-center justify-between gap-x-4 py-4 max-w-screen-xl mx-auto">
      <ul className="flex items-center gap-x-6">
        {menuItems.slice(0, 3).map((item, idx) => (
          <li key={idx} {...item}>
            <Link href="" className="text-base font-semibold">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <Logo />

      <ul className="flex items-center gap-x-4 ">
        {menuItems.slice(3, 5).map((item, idx) => (
          <li key={idx} {...item}>
            <Link href="" className="text-base ont-semibold">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Navbar: FunctionComponent<NavbarProps> = () => {
  return (
    <nav data-testid="navbar">
      <MobileNavbar />
      <LargeScreenNavbar />
    </nav>
  );
};

export default Navbar;
