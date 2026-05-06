import { IMenuDT } from "@/types/menu-d-t";

const menu_data: IMenuDT[] = [
  {
    id: 1,
    title: "Home",
    link: "/",
    // home_menus: [
    //   {
    //     title: "MAIN HOME",
    //     link: "/home",
    //     img: "/assets/img/menu/white-version/home-1.jpg",
    //   },
    //   {
    //     title: "DIGITAL AGENCY",
    //     link: "/shehnai-inweds/home",
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
    //       { title: "MAIN HOME", link: "/home" },
    //       { title: "DIGITAL AGENCY", link: "/shehnai-inweds/home" },
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
        link: "/our-work/branding",
        img: "/assets/img/our-work/branding/branding1.png",
      },
      {
        title: "Concept",
        link: "/our-work/concept",
        img: "/assets/img/our-work/concept/concept1.png",
      },
      {
        title: "Creative",
        link: "/our-work",
        img: "/assets/img/our-work/branding/branding3.png",
      },
      {
        title: "Visuals",
        link: "/our-work/visual",
        img: "/assets/img/our-work/visual/visual1.png",
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
    //           { title: "Two Columns", link: "/our-work" },
    //           { title: "Project Details", link: "/our-work" },
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
    //           { title: "two-columns", link: "/our-work" },
    //           { title: "standard", link: "/our-work" },
    //           { title: "showcase", link: "/portfolio-showcase" },
    //         ],
    //       },
    //       {
    //         id: 2,
    //         title: "PORTFOLIO SINGLES",
    //         menu_lists: [
    //           { title: "images Small", link: "/our-work" },
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
    link: "/shehnai-inweds",
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
//     link: "/home",
//     dropdown_menus: [
//       { title: "MAIN HOME", link: "/home" },
//       { title: "DIGITAL AGENCY", link: "/shehnai-inweds/home" },
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
//       { title: "Two Columns", link: "/our-work" },
//       { title: "Project Details", link: "/our-work" },
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
