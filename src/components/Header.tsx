"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "./Navbar";

export default function Header() {
  const [activeSection, setActiveSection] = useState("about");

  let links = ["about", "education", "projects"];

  useEffect(() => {
    let about = document.getElementById("about");
    let education = document.getElementById("education");
    let projects = document.getElementById("projects");

    let sections = [about, education, projects];

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id == "about") {
            setActiveSection("about");
          }

          if (entry.target.id == "education") {
            setActiveSection("education");
          }

          if (entry.target.id == "projects") {
            setActiveSection("projects");
          }
        }
      });
    }, observerOptions);

    sections?.forEach((section) => {
      section && observer.observe(section);
    });
  }, []);

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          <Link href="/">Muhammad Sopian</Link>
        </h1>

        <h2 className="mt-3 text-lg font-medium tracking-tight sm:text-xl">
          Frontend Developer
        </h2>

        <p className="mt-3 max-w-xs leading-normal">
          Loves to build responsive website.
        </p>

        <div className="mt-3 max-w-xs leading-normal">
          <Link href="/">
            See my resume{" "}
            <span className="inline-flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-up-right"
              >
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </span>
          </Link>
        </div>

        <Navbar links={links} activeSection={activeSection} />
      </div>

      <ul className="ml-1 mt-8 flex items-center" aria-label="Social Media">
        <li className="mr-5 text-xs shrink-0">
          <Link
            href="https://www.github.com/msopiann/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub (opens in a new tab)"
            title="GitHub"
            className="block text-white hover:text-[#5CFF9D]"
          >
            <span className="sr-only">GitHub</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-github"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </Link>
        </li>

        <li className="mr-5 text-xs shrink-0">
          <Link
            href="https://www.linkedin.com/in/msopiann/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Linkedin (opens in a new tab)"
            title="Linkedin"
            className="block text-white hover:text-[#5CFF9D]"
          >
            <span className="sr-only">Linkedin</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-linkedin"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </Link>
        </li>
      </ul>
    </header>
  );
}
