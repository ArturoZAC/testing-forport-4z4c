
export const InfoAdd = () => {
  return (
    <div className="flex flex-row justify-around items-start w-1/2 pt-7 h-auto
      max-md:justify-between max-lg:justify-normal max-lg:px-7 max-lg:w-full max-lg:max-w-full max-lg:gap-80 max-md:gap-x-0 max-md:px-0
    ">
      <div className="flex flex-col gap-y-5">
        <p className="body-large-b text-body-large-d max-md:text-body-large-m">Quick Links</p>
        <ul className="flex flex-col gap-y-5 small-sm text-small-d max-md:text-small-m">
          <li>Home</li>
          <li>About Me</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Education</li>
          <li>Conctact</li>
        </ul>
      </div>
      <div className="flex flex-col gap-y-5 small-sm text-small-d max-md:text-small-m">
        <p className="body-large-b text-body-large-d max-md:text-body-large-m">Contact</p>
        <p>arturoyz2105@gmail.com</p>
        <p>+51 984221508</p>
        <p>Lima, Perú </p> 
      </div>
    </div>
  )
};
