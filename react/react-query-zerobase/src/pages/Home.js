import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../mocks/api";

export default function Home() {
  const navigate = useNavigate();

  const { data, isLoading } = useQuery(["@getUSer"], getUser, {
    staleTime: Infinity,  //기본적으로 0으로 세팅되어 있어서 계속 패치를 한다. 그래서 infinity로 바꿔준다! 즉 fresh한 상태로 취급하는것1//user를 다시 패치하지 않도록한다1 
  });

  return (
    <div>
      <h1>Home, {data?.nickName}</h1>
      <button onClick={() => navigate("/edit")}>Go Edit Page</button>
    </div>
  );
}
