"use client";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import { Avatar, Menu } from "@mantine/core";

const ProfileMenu = () => {
  const user = useSession();
  return (
    <div className="rounded-full border-2 border-black border-opacity-10 cursor-pointer">
      <Menu>
        <Menu.Target>
          <Avatar src={user.data?.user?.image} alt="user image" radius={"xl"} />
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item>Mes favories</Menu.Item>

          <Menu.Item>Mes Reservation</Menu.Item>

          <Menu.Item onClick={() => signOut()}>Se déconnecter</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
};

export default ProfileMenu;
