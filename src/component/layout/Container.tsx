import Header from "./Header";
import { Outlet } from "react-router-dom";

function Container() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
export default Container;