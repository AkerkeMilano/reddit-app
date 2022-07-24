import React from "react";
import logo from "../assets/img/Reddit_logo_new.svg.png";
import Image from "next/image";
import LoginModal from "./LoginModal";
import client from "../apollo-client";
import Button from "@mui/material/Button";
import { useLoginContext } from "../contexts/LoginContext";
import Avatar from "./Avatar";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = () => {
  const { user, logout: logoutUser } = useLoginContext();
  const router = useRouter();

  const logout = () => {
    logoutUser();
    localStorage.clear();
    client.cache.reset();
  };
  const createHandler = (e) => {
    e.preventDefault();
    router.push("/creation");
  };
  return (
    <div className="layout-header">
      <Link href="/">
        <a>
          <Image width={130} height={50} src={logo} alt="logo" />
        </a>
      </Link>

      {user ? (
        <div className="avatar">
          <Button onClick={createHandler}>Create post</Button>
          <Avatar></Avatar>
          <Button onClick={logout}>Logout</Button>
        </div>
      ) : (
        <LoginModal>Login</LoginModal>
      )}
    </div>
  );
};

export default Header;
