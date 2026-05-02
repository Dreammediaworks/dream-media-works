import { IMenuDT } from "@/types/menu-d-t";

const menu_data: IMenuDT[] = [
  {
    id: 1,
    title: "Home",
    link: "/",
    // home_menus: [
    //   {
    //     title: "MAIN HOME",
    //     link: "/home-1",
    //     img: "/assets/img/menu/white-version/home-1.jpg",
    //   },
    //   {
    //     title: "DIGITAL AGENCY",
    //     link: "/home-4",
    //     img: "/assets/img/menu/white-version/home-4.jpg",
    //   },
    // ],
  },
  {
    id: 2,
    title: "Services",
    link: "/service",
    // pages_mega_menu: {
    //   first: {
    //     title: "Core Pages",
    //     submenus: [
    //       { title: "ABOUT US", link: "/about-us" },
    //       { title: "OUR SERVICES", link: "/service" },
    //       { title: "SERVICE DETAILS", link: "/service-details" },
    //     ],
    //   },
    //   second: {
    //     title: "Selected Homes",
    //     submenus: [
    //       { title: "MAIN HOME", link: "/home-1" },
    //       { title: "DIGITAL AGENCY", link: "/home-4" },
    //     ],
    //   },
    // },
  },
  {
    id: 3,
    title: "Our Work",
    link: "/our-work",
    home_menus: [
      {
        title: "Branding",
        link: "/home-1",
        img: "/assets/img/menu/white-version/home-1.jpg",
      },
      {
        title: "Concept",
        link: "/home-4",
        img: "/assets/img/menu/white-version/home-4.jpg",
      },
      {
        title: "Creative",
        link: "/home-1",
        img: "/assets/img/menu/white-version/home-1.jpg",
      },
      {
        title: "Visuals",
        link: "/home-4",
        img: "/assets/img/menu/white-version/home-4.jpg",
      },
    ],
    // portfolio_mega_menus: {
    //   first: {
    //     title: "PORTFOLIO LIST",
    //     submenus: [
    //       {
    //         id: 1,
    //         menu_lists: [
    //           { title: "Standard", link: "/our-work" },
    //           { title: "Showcase", link: "/portfolio-showcase" },
    //         ],
    //       },
    //       {
    //         id: 2,
    //         menu_lists: [
    //           { title: "Two Columns", link: "/portfolio-grid-col-2" },
    //           { title: "Project Details", link: "/portfolio-details-1" },
    //         ],
    //       },
    //     ],
    //   },
    //   second: {
    //     submenus: [
    //       {
    //         id: 1,
    //         title: "List Layouts",
    //         menu_lists: [
    //           { title: "two-columns", link: "/portfolio-grid-col-2" },
    //           { title: "standard", link: "/our-work" },
    //           { title: "showcase", link: "/portfolio-showcase" },
    //         ],
    //       },
    //       {
    //         id: 2,
    //         title: "PORTFOLIO SINGLES",
    //         menu_lists: [
    //           { title: "images Small", link: "/portfolio-details-1" },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
  {
    id: 4,
    title: "Our Story",
    link: "/about-us",
    // dropdown_menus: [
    //   { title: "About Us", link: "/about-us" },
    //   { title: "Our Services", link: "/service" },
    //   { title: "Service Details", link: "/service-details" },
    //   { title: "Contact", link: "/contact" },
    // ],
  },
  {
    id: 5,
    title: "Contact Us",
    link: "/contact",
    // dropdown_menus: [
    //   { title: "About Us", link: "/about-us" },
    //   { title: "Our Services", link: "/service" },
    //   { title: "Service Details", link: "/service-details" },
    //   { title: "Contact", link: "/contact" },
    // ],
  },
  {
    id: 6,
    title: "Shehnai Inweds",
    link: "/home-4",
    // dropdown_menus: [
    //   { title: "About Us", link: "/about-us" },
    //   { title: "Our Services", link: "/service" },
    //   { title: "Service Details", link: "/service-details" },
    //   { title: "Contact", link: "/contact" },
    // ],
  },
];

export default menu_data;

// export const mobile_menu_data: {
//   id: number;
//   title: string;
//   link: string;
//   dropdown_menus: {
//     title: string;
//     link: string;
//   }[];
// }[] = [
//   {
//     id: 1,
//     title: "Home",
//     link: "/home-1",
//     dropdown_menus: [
//       { title: "MAIN HOME", link: "/home-1" },
//       { title: "DIGITAL AGENCY", link: "/home-4" },
//     ],
//   },
//   {
//     id: 2,
//     title: "Pages",
//     link: "#",
//     dropdown_menus: [
//       { title: "ABOUT US", link: "/about-us" },
//       { title: "OUR SERVICES", link: "/service" },
//       { title: "SERVICE DETAILS", link: "/service-details" },
//     ],
//   },
//   {
//     id: 3,
//     title: "Portfolio",
//     link: "/our-work",
//     dropdown_menus: [
//       { title: "Standard", link: "/our-work" },
//       { title: "Showcase", link: "/portfolio-showcase" },
//       { title: "Two Columns", link: "/portfolio-grid-col-2" },
//       { title: "Project Details", link: "/portfolio-details-1" },
//     ],
//   },
//   {
//     id: 4,
//     title: "About",
//     link: "/about-us",
//     dropdown_menus: [
//       { title: "About Us", link: "/about-us" },
//       { title: "Our Services", link: "/service" },
//       { title: "Service Details", link: "/service-details" },
//       { title: "Contact", link: "/contact" },
//     ],
//   },
// ];
