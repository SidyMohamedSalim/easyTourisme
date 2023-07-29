"use client";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import { useDisclosure } from "@mantine/hooks";
import { Avatar, Menu, Modal } from "@mantine/core";
import Link from "next/link";

const ProfileMenu = ({ image }: { image?: string }) => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div className="rounded-full border-2 border-black border-opacity-10 cursor-pointer">
      <Menu>
        <Menu.Target>
          <Avatar src={image} alt="user image" radius={"xl"} />
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item>
            <Link href={"/favorites"}>Mes favories</Link>
          </Menu.Item>

          <Menu.Item className="text-red-500" onClick={open}>
            Se déconnecter
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
      <Modal opened={opened} centered onClose={close} title="Deconnexion">
        <div className=" flex flex-col p-3 mx-auto text-center">
          <p className="font-bold">Voulez-vous vraiment vous deconnecter ?</p>
          <div className="flex my-3 mx-auto gap-4">
            <button className="bg-red-500" onClick={() => signOut()}>
              OUI
            </button>
            <button onClick={open}>NON</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ProfileMenu;
