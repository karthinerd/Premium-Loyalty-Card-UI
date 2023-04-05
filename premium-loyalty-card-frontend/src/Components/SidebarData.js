import React from "react";
import PeopleIcon from "@mui/icons-material/People";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ForumIcon from "@mui/icons-material/Forum";
import DomainIcon from "@mui/icons-material/Domain";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";

export const SidebarData = [
  {
    title: "Customers",
    icon: <PeopleIcon />,
    link: "/customersList",
  },
  {
    title: "Subscriptions",
    icon: <AssignmentIcon />,
    link: "/subscriptionsList",
  },
  {
    title: "Vouchers",
    icon: <ForumIcon />,
    link: "/vouchersList",
  },
  {
    title: "Vendors",
    icon: <HourglassEmptyIcon />,
    link: "/vendorsList",
  },
  {
    title: "Users",
    icon: <DomainIcon />,
    link: "/usersList",
  },
];
