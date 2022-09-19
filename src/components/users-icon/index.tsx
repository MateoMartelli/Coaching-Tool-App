import { Icon } from "@chakra-ui/react";
import { FC } from "react";

const UsersIcon: FC = () => (
  <Icon viewBox="0 0 200 200" color="lightMode.snowBG1">
    <svg
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2.8"
      // class="feather feather-users"
      viewBox="0 0 24 24"
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  </Icon>
);

export default UsersIcon;
