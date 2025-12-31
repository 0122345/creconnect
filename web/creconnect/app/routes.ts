// // import { type RouteConfig } from "@react-router/dev/routes";

// export default [
//   {
//     path: "/",
//     file: "homescreen/page.tsx",
//   },
//   {
//     path: "/login",
//     file: "auth/page.tsx",
//   },
//   {
//     path: "/forgot-password",
//     file: "routes/forgetPassword.tsx",
//   },
//   {
//     path: "/register",
//     file: "auth/SignUp.tsx",
//   },
// //   {
// //     path: "/verify-email",
// //     file: "routes/verifyEmail.tsx",
// //   },
// //   {
// //     path: "/sidebar",
// //     file: "components/AdminSidebar.tsx",
// //   },
// //   {
// //     path: "/reset-password",
// //     file: "routes/resetPassword.tsx",
// //   },
  
//   // Customer routes (protected)
// //   {
// //     path: "/customer",
// //     file: "components/CustomerLayout.tsx",
// //     children: [
// //       {
// //         path: "/customer/movies",
// //         file: "routes/customer.movies.tsx",
// //       },
// //       {
// //         path: "/customer/movies/:id",
// //         file: "routes/customer.movies.$id.tsx",
// //       },
// //       {
// //         path: "/customer/theaters",
// //         file: "routes/customer.theaters.tsx",
// //       },
// //       {
// //         path: "/customer/theaters/:id",
// //         file: "routes/customer.theaters.$id.tsx",
// //       },
// //       {
// //         path: "/customer/bookings",
// //         file: "routes/customer.bookings.tsx",
// //       },
// //       {
// //         path: "/customer/bookings/:id",
// //         file: "routes/customer.bookings.$id.tsx",
// //       },
// //     ]
// //   },
  
//   // Admin routes (protected)
//   {
//     path: "/admin",
//     file: "components/AdminLayout.tsx",
//     children: [
//       {
//         path: "dashboard",
//         file: "dashboards/page.tsx",
//       },
//       {
//         path: "studios",
//         file: "dashboards/StudioDashboard.tsx",
//       },
//       {
//         path: "studio/:id",
//         file: "studio/admin.studio.$id.tsx",
//       },
//       {
//         path: "venue/:id",
//         file: "venue/admin.venue.$id.tsx",
//       },
//       {
//         path: "theaters",
//         file: "routes/admin.theaters.tsx",
//       },
//       {
//         path: "theaters/:id",
//         file: "routes/admin.theaters.$id.tsx",
//       },
//       {
//         path: "showtimes",
//         file: "routes/admin.showtimes.tsx",
//       },
//       {
//         path: "bookings",
//         file: "routes/admin.bookings.tsx",
//       },
//       {
//         path: "bookings/:id",
//         file: "routes/admin.bookings.$id.tsx",
//       },
//       {
//         path: "reports",
//         file: "routes/admin.reports.tsx",
//       },
//     ]
//   },
  
//   // Catch-all route
//   {
//     path: "*",
//     file: "routes/404.tsx",
//   },
// ] satisfies RouteConfig;