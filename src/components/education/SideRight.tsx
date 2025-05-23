
interface Props {
  isLast?: boolean;
  title?: string;
  date?: string;
  description?: string;
}

export const SideRight = (
  { 
    isLast,
    date = "ENERO 2024 - FEBRERO 2024",
    description="As a software Developer with a background in computer systems, algorithms, and data structures, I have two years of experience in IT and two years of English studies under my belt.",
    title = "Frontend Developer"
  }: Props) => {
  return (
      <div className={`flex flex-col max-w-[416px] items-start gap-y-4 mt-50 ${isLast ? 'mt-0' : ''}`}>
        <div className='flex flex-col gap-y-1 items-start'>
          <p className='text-subtitle2-b-d'>{title}</p>
          <p className='text-tiny-r-d'>{date}</p>
        </div>
        <p className='text-pretty'>{description}</p>
      </div>
  )
}
