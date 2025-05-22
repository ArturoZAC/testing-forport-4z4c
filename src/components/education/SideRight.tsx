
interface Props {
  isLast?: boolean;
}

export const SideRight = ({ isLast }: Props) => {
  return (
      <div className={`flex flex-col max-w-[416px] items-start gap-y-4 mt-50 ${isLast ? 'mt-0' : ''}`}>
        <div className='flex flex-col gap-y-1 items-start'>
          <p className='text-subtitle2-b-d'>Frontend Developer</p>
          <p className='text-tiny-r-d'>ENERO 2024 - FEBRERO 2024</p>
        </div>
        <p className='text-pretty'>As a software Developer with a background in computer systems, algorithms, and data structures, I have two years of experience in IT and two years of English studies under my belt.</p>
      </div>
  )
}
