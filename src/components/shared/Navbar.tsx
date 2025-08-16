"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Bell, User } from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between h-14">
        {/* Logo */}
        {/* <div className="flex items-center gap-3">
          <span className="text-lg font-bold text-gray-800">MyApp</span>
        </div> */}

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-gray-900 transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-900 transition-colors">
            About
          </Link>
          <Link
            href="/services"
            className="hover:text-gray-900 transition-colors"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="hover:text-gray-900 transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <div className="relative hidden md:block">
            <Input
              type="text"
              placeholder="Search..."
              className="pl-9 pr-4 h-9 w-48"
            />
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
          </div>

          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>

          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>

          <Button>Sign In</Button>
        </div>
      </div>
    </header>
  );
};
