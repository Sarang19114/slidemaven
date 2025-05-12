"use client";

import { Button } from "@/components/ui/button";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { SignedIn, UserButton, useUser, useClerk } from "@clerk/nextjs";
import { User } from "@prisma/client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const NavFooter = ({ prismaUser }: { prismaUser: User }) => {
  const { isLoaded, isSignedIn, user } = useUser();
  const { signOut } = useClerk();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const router = useRouter();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <div className="flex flex-col gap-y-6 items-start relative group-data-[collapsible=icon]:hidden">
          {!prismaUser.subscription && (
            <div className="flex flex-col items-start p-2 pb-3 gap-4 bg-background-80 rounded-xl">
              <div className="flex flex-col items-start gap-1">
                <p className="text-base font-bold">
                  Get <span className="text-yellow-300">SM Pro</span>
                </p>
                <span className="text-sm text-blue-500">
                  Unlock all features including AI and more
                </span>
              </div>
              <div className="w-full bg-vivid-gradient p-[1px] rounded-full">
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  as="button"
                  className="relative flex items-center gap-3 px-6 py-3 font-semibold text-md
    bg-black text-yellow-300 border-2 border-yellow-400/70 rounded-full
    transition-all duration-300 hover:bg-yellow-400 hover:text-black
    shadow-md hover:shadow-lg"
                >
                  Upgrade to Pro
                </HoverBorderGradient>
              </div>
            </div>
          )}
          <SignedIn>
            <SidebarMenuButton
              size="lg"
              className="relative data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <UserButton />
              <div className="grid flex-1 text-left text-sm leading-tight group-data-[collapsible=icon]:hidden">
                <span className="truncate font-semibold">{user?.fullName}</span>
                <span className="truncate cursor-pointer text-blue-500">
                  {user?.emailAddresses[0].emailAddress}
                </span>
              </div>
            </SidebarMenuButton>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute bottom-12 bg-black z-50 left-0 w-48 bg-background-90 border border-gray-700 rounded-lg shadow-lg p-3 transition-all duration-200 animate-fade-in">
                <Button
                  variant="ghost"
                  className="w-full text-left px-3 py-2 hover:bg-gray-700 rounded-md mb-2"
                  onClick={() => router.push("/settings")}
                >
                  Account Settings
                </Button>
                <Button
                  variant="destructive"
                  className="w-full text-left px-3 py-2 hover:bg-red-600 rounded-md"
                  onClick={() => signOut()}
                >
                  Logout
                </Button>
              </div>
            )}
          </SignedIn>
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

export default NavFooter;
