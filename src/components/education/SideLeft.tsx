interface Props {
  isLast?: boolean;
  title?: string;
  date?: string;
  description?: string;
}

export const SideLeft = (
  { 
    isLast,
    date = "ENERO 2024 - FEBRERO 2024",
    description="As a software Developer with a background in computer systems, algorithms, and data structures, I have two years of experience in IT and two years of English studies under my belt.",
    title = "Frontend Developer"
  }: Props) => {
  return (
      <div className={`flex flex-col w-full max-w-[440px] items-end gap-y-4 ${isLast ? '' : 'mb-50'} bg-fourth/60 py-4 px-6 rounded-2xl
        max-md:w-full
      `}>
        <div className='flex flex-col gap-y-1 items-end'>
          <p className='subtitle2-b text-subtitle-2-d max-md:text-subtitle-2-m'>{title}</p>
          <p className='tiny-r text-tiny-d max-md:text-tiny-m'>{date}</p>
        </div>
        <p className='text-pretty body-small-r text-body-small-d max-md:text-body-small-m'>{description}</p>
      </div>
  )
}
