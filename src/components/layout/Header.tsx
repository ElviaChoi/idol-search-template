import { UserIcon } from "@heroicons/react/24/outline";
import { cn } from "@/utils/cn";

export default function Header() {
  return (
    <header className={cn('bg-white shadow-sm')}>
      <div className={cn('mx-auto flex max-w-6xl items-center justify-between px-6 py-4')}>
        <a href='/' className={cn('flex items-center gap-2')}>
          <img src='/logo-symbol.png' alt='DingDing logo' className={cn('h-8 w-8')} />
          <span className={cn('text-xl font-bold text-fuchsia-600')}>DingDing</span>
        </a>

        <div className={cn('flex items-center gap-4')}>
          <button className={cn('rounded-md px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-fuchsia-600')}>
            로그인
          </button>
          <button className={cn('rounded-md bg-fuchsia-500 px-3 py-1.5 text-sm font-medium text-white hover:bg-fuchsia-600')}>
            회원가입
          </button>
          <UserIcon className={cn('hidden h-6 w-6 text-gray-500 sm:block')} />
        </div>
      </div>
    </header>
  );
}
