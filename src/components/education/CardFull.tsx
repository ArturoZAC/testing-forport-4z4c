interface Props {
  isLeft?: boolean;
  title?: string;
  date?: string;
  description?: string;
}

export const CardFull = (
  {
    date = "ENERO 2024 - FEBRERO 2024",
    description = "As a software Developer with a background in computer systems, algorithms, and data structures, I have two years of experience in IT and two years of English studies under my belt.",
    title = "Frontend Developer",
    isLeft
  }: Props) => {
  return (
    // animate__animated animate__fadeInUp
    <div className={`flex flex-col w-full ${ isLeft ? 'items-start' : 'items-end' } gap-y-4 !bg-fourth py-4 px-6 rounded-2xl relative !z-10!`}>
      <div className={`absolute size-12.5 bg-gradient-to-l from-violet-600 to-fuchsia-500 rounded-2xl -bottom-0.5 ${ isLeft ? '-left-0.5 ' : '-right-0.5'} -z-999 blur-sm`}></div>
      <div className={`flex flex-col gap-y-1 ${ isLeft ? 'items-start' : 'items-end' }`}>
        <p className='subtitle2-b text-subtitle-2-d max-md:text-subtitle-2-m'>{title}</p>
        <p className='tiny-r text-tiny-d max-md:text-tiny-m'>{date}</p>
      </div>
      <p className='text-pretty body-small-r text-body-small-d max-md:text-body-small-m'>{description}</p>
    </div>
  )
};
