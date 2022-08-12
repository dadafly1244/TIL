import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getUser, updateNickname } from "../mocks/api";

//api를 통해 현재 닉네임값 가져오기
//handleSubmit함수에 업데이트된 inputValue를 서버에 전송해서, 닉네임값 업데이트하기

export default function Edit() {
  const [inputValue, setInputValue] = useState("");
  const queryClient = useQueryClient();

  //1. 유니크한 키값, 2. promise기반의 함수
  // result안에는 data, error, isLoading등 다양한 객체가 들어있습니다.
  const { data, isLoading } = useQuery(["@getUser"], getUser);

  const mutation = useMutation(updateNickname, {
    onSuccess: () => {
      queryClient.invalidateQueries(["@getUser"]);//전역상태관리를 react-query안에서 해주는 것처럼 동작함!
    },
  });

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(inputValue); //inputValue가 updateNickname에 인자로 들어가게됨!
  };

  if (isLoading) return <span>Loading...</span>;

  return (
    <>
      <h1>Edit</h1>
      <h3>현재 닉네임: {data.nickName}</h3>
      <form onSubmit={handleSubmit}>
        <label>
          변경할 닉네임:
          <input type="text" value={inputValue} onChange={handleChange} />
        </label>
      </form>
    </>
  );
}
