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
      <p className={cn('text-center text-gray-500 leading-relaxed')}>
        좋아하는 아이돌을 검색해보세요!
      </p>
    );
  }

  return null;
}
