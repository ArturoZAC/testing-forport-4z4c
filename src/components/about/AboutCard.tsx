
export const AboutCard = () => {

  // shadow-lg shadow-third-light/50

  return (
    <div className="relative bg-neutral-900 w-full max-w-1/2 h-[600px] rounded-4xl 
     before:bg-linear-to-r before:from-violet-700 before:to-fuchsia-700 before:w-full before:max-w-[584px] before:min-h-[600px] before:absolute before:right-2 before:rounded-[34px] before:rotate-[-4deg] before:-z-10
    ">
      <div className="flex flex-col justify-around items-center p-10 h-[inherit]">
        <div className="space-y-6">
          <p className="text-subtitle1-b-d">WHO I AM</p>
          <p className="text-body-small-r-d text-justify">As a software Developer with a background in computer systems, algorithms, and data structures, I have two years of experience in IT and two years of English studies under my belt. I am currently furthering my education in the 42 network for a Master Digital IT Architect degree. Coding and problem-solving through code are my passions, and I am excited to collaborate with talented programmers and expand my knowledge even more!</p>
        </div>
        <div className="flex flex-col gap-y-6">
          <div className="min-h-[4px] bg-neutral-700 w-full"></div>
          <p className="text-body-small-r-d">As a software Developer with a background in computer systems, algorithms, and data structures, I have two years of experience in IT and two years of English studies under my belt. </p>
        </div>
      </div>
    </div>
  )
}
