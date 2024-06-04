"use client";

import { FunctionComponent, useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavbarItemProps {
  label: string;
  children?: {
    label: string;
    links: string[];
  }[];
}

const NavbarItem: FunctionComponent<NavbarItemProps> = ({
  label,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className=" py-2">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger className="w-full border-b border-slate-200 pb-2">
          <div className="flex items-center justify-between w-full">
            <span className={cn({ "font-bold": isOpen })}>{label}</span>
            <button
              className={cn(
                "flex items-center justify-center w-12 h-6 border-l",
                {
                  hidden: !children,
                }
              )}>
              <ChevronDown
                className={cn("transition ease-in-out", {
                  "transform rotate-180": isOpen,
                })}
              />
            </button>
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent className="w-full">
          {children?.map((child, idx) => (
            <div key={idx} className="text-left mb-6">
              <h2 className="font-bold mt-4 mb-2">{child.label}</h2>
              <div className="flex flex-col">
                {child.links.map((link, idx) => (
                  <Link
                    key={idx}
                    href={""}
                    className="text-blue-500 py-1.5 font-medium">
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>
    </li>
  );
};

export default NavbarItem;
