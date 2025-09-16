
import React from "react";

type IdolSearchStatusProps = {
  isLoading: boolean;
  isError: boolean;
  isSearching: boolean;
  itemCount: number;
};

const IdolSearchStatus: React.FC<IdolSearchStatusProps> = ({
  isLoading,
  isError,
  isSearching,
  itemCount,
}) => {
  if (isLoading) {
    return <p className='text-center text-fuchsia-400'>불러오는 중...</p>;
  }

  if (isError) {
    return <p className='text-center text-fuchsia-800'>에러가 발생했습니다.</p>;
  }

  if (itemCount === 0) {
    if (isSearching) {
      return <p className='text-center text-fuchsia-400'>검색 결과가 없습니다.</p>;
    } else {
      return (
        <p className='text-center text-gray-500 leading-relaxed'>
          아직 찜한 아이돌이 없어요. <br /> 검색해서 일정을 찾아보세요. 🔍
          <br />
          <br />
          좋아하는 아이돌을 찜하면, 💖 <br /> 최신 일정을 바로 확인할 수 있어요. 📅
        </p>
      );
    }
  }

  return null; // If there are items, or none of the above conditions met, render nothing.
};

export default IdolSearchStatus;
