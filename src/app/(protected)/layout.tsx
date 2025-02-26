"use client";

import { useState } from "react";
import { useUser, SignOutButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // Import pathname hook
import { motion } from "framer-motion";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
    IconLayoutDashboard,  // For Home/Dashboard
    IconHistory,          // For Recent Activity
    IconSettings,         // For Settings
    IconArrowLeft,        // For Logout
  } from "@tabler/icons-react";
  
  const links = [
    { label: "Home", href: "/dashboard", icon: <IconLayoutDashboard className="icon" /> }, 
    { label: "Recent", href: "/recent", icon: <IconHistory className="icon" /> }, 
    { label: "Settings", href: "/settings", icon: <IconSettings className="icon" /> },
  ];
  

export default function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const { user } = useUser();
  const pathname = usePathname(); // Get the current path

  return (
    <div className="flex h-screen w-screen">
      {/* Sidebar */}
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="flex flex-col justify-between h-full overflow-y-auto">
          <div className="flex flex-col flex-1">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink
                  key={idx}
                  link={link}
                  className={pathname === link.href ? "bg-gray-800 text-white rounded-lg" : ""}
                />
              ))}
            </div>
          </div>

          {/* Profile & Logout Section */}
          <div className="flex flex-col gap-2 items-center">
            {/* Profile Section */}
            <SidebarLink
              link={{
                label: open ? (user?.fullName || "Guest") : "",
                href: "#",
                icon: user ? (
                  <Image
                    src={user.imageUrl}
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="User Avatar"
                  />
                ) : (
                  <div className="h-7 w-7 bg-gray-300 rounded-full" />
                ),
              }}
            />

            {/* Logout Button */}
            <SignOutButton>
              <button
                className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white`}
              >
                <IconArrowLeft className="h-5 w-5" />
                {open && "Logout"}
              </button>
            </SignOutButton>
          </div>
        </SidebarBody>
      </Sidebar>

      {/* Main Content */}
      <motion.main
        className="flex-1 overflow-y-auto bg-gray-100 dark:bg-neutral-900 p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.main>
    </div>
  );
}

/* Logo Components */
export const Logo = () => (
  <Link href="/" className="flex items-center text-black dark:text-white space-x-2">
    <div className="h-5 w-6 bg-black dark:bg-white rounded-lg" />
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-xl font-mono"
    >
      SlideMaven
    </motion.span>
  </Link>
);

export const LogoIcon = () => (
  <Link href="#" className="flex items-center">
    <div className="h-5 w-6 bg-black dark:bg-white rounded-lg" />
  </Link>
);
