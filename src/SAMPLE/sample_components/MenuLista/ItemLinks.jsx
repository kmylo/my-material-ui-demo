import React from "react";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ImageIcon from "@material-ui/icons/Image";
import LocalGroceryStoreIcon from "@material-ui/icons/LocalGroceryStore";
import WorkIcon from "@material-ui/icons/Work";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";

const ItemLinks = [
  {
    primary: "User Profile",
    to: "/user-profile",
    icon: () => <AccountCircleIcon />,
  },
  {
    primary: "Gallery",
    to: "/gallery",
    icon: () => <ImageIcon />,
  },
  {
    primary: "Products",
    to: "/products",
    icon: () => <LocalGroceryStoreIcon />,
  },
  {
    primary: "Home",
    to: "/app/home",
    icon: () => <InboxIcon />,
  },
  {
    primary: "About",
    to: "/about",
    icon: () => <DraftsIcon />,
  },
  {
    primary: "Topics",
    to: "/topics",
    icon: () => <WorkIcon />,
  },
];

export default ItemLinks;
