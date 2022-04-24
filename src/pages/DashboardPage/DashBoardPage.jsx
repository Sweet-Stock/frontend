import React, { useState, useEffect } from "react";
import SideBar from "./sidebar/SideBar";
import DashBoardHome from "./dashboard_home/DashBoardHome";

export default (props) => {
  sessionStorage.setItem("lastLocation", "/dashboard");

  const [page, setPage] = useState(0);
  const [grow, setGrow] = useState(0);

  useEffect(() => {
    console.log(page);
  }, [page]);

  let dataStorage = JSON.parse(sessionStorage.getItem("data"));

  switch (page) {
    case 0:
      return (
        <>
          <SideBar
            name={dataStorage ? dataStorage.username : ""}
            setPage={setPage}
            setGrow={setGrow}
          />
          <DashBoardHome grow={grow} />
        </>
      );
    case 1:
      return (
        <>
          <SideBar
            name={dataStorage ? dataStorage.username : ""}
            setPage={setPage}
          />
        </>
      );
    case 2:
      return (
        <>
          <SideBar
            name={dataStorage ? dataStorage.username : ""}
            setPage={setPage}
          />
        </>
      );
    case 3:
      return (
        <>
          <SideBar
            name={dataStorage ? dataStorage.username : ""}
            setPage={setPage}
          />
        </>
      );
    case 4:
      return (
        <>
          <SideBar
            name={dataStorage ? dataStorage.username : ""}
            setPage={setPage}
          />
        </>
      );
    case 5:
      return (
        <>
          <SideBar
            name={dataStorage ? dataStorage.username : ""}
            setPage={setPage}
          />
        </>
      );
    default:
      return (
        <>
          <SideBar
            name={dataStorage ? dataStorage.username : ""}
            setPage={setPage}
          />
        </>
      );
  }
};
