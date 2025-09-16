import { cn } from '@/utils';

interface IdolSearchStatusProps {
  isLoading: boolean;
  isError: boolean;
  isSearching: boolean;
  itemCount: number;
}

export default function IdolSearchStatus({
  isLoading,
  isError,
  isSearching,
  itemCount,
}: IdolSearchStatusProps) {
  if (isLoading) {
    return <p className={cn('text-center text-fuchsia-400')}>불러오는 중...</p>;
  }

  if (isError) {
    return (
      <p className={cn('text-center text-fuchsia-800')}>에러가 발생했습니다.</p>
    );
  }

  if (isSearching && itemCount === 0) {
    return (
      <p className={cn('text-center text-fuchsia-400')}>
        검색 결과가 없습니다.
      </p>
    );
  }

  if (!isSearching && itemCount === 0) {
    return (
      <div className={cn('text-center text-gray-500 leading-relaxed')}>
        <p>
          아직 찜한 아이돌이 없네요. 😢<br />
          좋아하는 아이돌을 검색해서 찾아보세요!
        </p>
        <p className="mt-4">
          하트를 눌러 찜하면,<br />
          나만의 아이돌 컬렉션을 만들 수 있어요. 💖
        </p>
      </div>
    );
  }

  return null;
}
