import React from "react";
import SideBar from "./DashboardPage/SideBar";

export default (props) => {
  const [page, setPage] = React.useState(0);

React.useEffect(()=>{
  console.log(page);
},[page])

  switch (page) {
    case 0:
      return (
        <>
          <SideBar name="Rafael" setPage={setPage}/>
        </>
      );
      case 1:
        return (
          <>
            <SideBar name="sdadsa" setPage={setPage}/>
          </>
        );
        case 2:
      return (
        <>
          <SideBar name="dasdsa" setPage={setPage}/>
        </>
      );
      case 3:
      return (
        <>
          <SideBar name="dsa" setPage={setPage}/>
        </>
      );
      case 4:
      return (
        <>
          <SideBar name="dsasda" setPage={setPage}/>
        </>
      );
      case 5:
      return (
        <>
          <SideBar name="dasdas" setPage={setPage}/>
        </>
      );
    default:
      return (
        <>
          <SideBar name="dsadas" setPage={setPage}/>
        </>
      );
  }
};
