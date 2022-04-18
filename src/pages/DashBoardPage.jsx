import React from "react";
import SideBar from "./DashboardPage/SideBar";

export default (props) => {
  const [page, setPage] = React.useState(0);

  React.useEffect(() => {
    console.log(page);
  }, [page])

  let dataStorage = JSON.parse(sessionStorage.getItem("data"));

  switch (page) {
    case 0:
      return (
        <>
          <SideBar name={dataStorage.username} setPage={setPage} />
        </>
      );
    case 1:
      return (
        <>
          <SideBar name={dataStorage.username} setPage={setPage} />
        </>
      );
    case 2:
      return (
        <>
          <SideBar name={dataStorage.username} setPage={setPage} />
        </>
      );
    case 3:
      return (
        <>
          <SideBar name={dataStorage.username} setPage={setPage} />
        </>
      );
    case 4:
      return (
        <>
          <SideBar name={dataStorage.username} setPage={setPage} />
        </>
      );
    case 5:
      return (
        <>
        <SideBar name={dataStorage.username} setPage={setPage} />
        </>
      );
    default:
      return (
        <>
          <SideBar name={dataStorage.username} setPage={setPage} />
        </>
      );
  }
};
