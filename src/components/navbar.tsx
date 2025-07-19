import { link } from "fs";
import { title } from "process";
import React from "react";

const navbar = () => {
  const links = [
    {
      title: "Guide",
      href: "#",
    },
    {
      title: "price",
      href: "#",
    },
    {
      title: "Login",
      href: "#",
    },
  ];
  return (
    <div className="navbar-root">
      <div className="logo">Fintech</div>
      <div className="links">
        {links.map((link, idx) => (
          <a className="links-items" key={link.title} href={link.href}>{link.title} </a>
        ))}
        <button className="btn">Start free trial</button>
      </div>
    </div>
  );
};

export default navbar;
