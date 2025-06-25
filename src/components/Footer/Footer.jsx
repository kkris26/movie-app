import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-10">
      <section className="footer max-w-7xl mx-auto sm:footer-horizontal pt-15 text-base-content">
        <aside>
          <Link to={"/"} className="text-4xl">
            MovoRa
          </Link>
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </section>
      <section className="footer sm:footer-horizontal footer-center text-base-content p-4">
        <aside>
          <p>
            &copy; {new Date().getFullYear()} - All rights reserved. Made with{" "}
            <span className="text-red-400">❤️</span> by Krisnu
          </p>
        </aside>
      </section>
    </footer>
  );
};

export default Footer;
