import Link from 'next/link'
import clsx from 'clsx'
import { HiBellAlert } from "react-icons/hi2";

const KnowMoreLink = ({
  color = 'violet',
}: {
  color?: 'violet' | 'gold'
}) => {
	return (
		 <Link
      href="#register"
      aria-label="Register to stay in the loop"
      className={clsx(
        'inline-flex justify-center rounded-full py-3 px-3 text-sm font-semibold transition-colors',
        color === 'violet'
          ? 'bg-violet-950 text-white hover:bg-violet-900'
          : 'bg-[#FFA500] text-violet-950 hover:bg-[#FFA500]',
      )}
    >
      <span className='flex justify-center items-center text-lg font-semibold'><HiBellAlert className='mr-2'/> I want to know more</span>
    </Link>
	)
}

export default KnowMoreLink