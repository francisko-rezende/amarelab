import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootLayout
})

function RootLayout() {
  return (
    <>
      <header>Amarelab</header>
      <main><Outlet /></main>
    </>
  )
}
