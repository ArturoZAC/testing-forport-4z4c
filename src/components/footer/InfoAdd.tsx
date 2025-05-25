
export const InfoAdd = () => {
  return (
    <div className="flex flex-row justify-around items-start w-1/2 pt-7 h-auto
      max-md:justify-between max-lg:justify-normal max-lg:px-7 max-lg:w-full max-lg:max-w-full max-lg:gap-80 max-md:gap-x-0
    ">
      <div className="flex flex-col gap-y-5">
        <p className="text-body-large-b-d">Quick Links</p>
        <ul className="flex flex-col gap-y-5 text-small-sm-d">
          <li>Home</li>
          <li>About Me</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Education</li>
          <li>Conctact</li>
        </ul>
      </div>
      <div className="flex flex-col gap-y-5 text-small-sm-d">
        <p className="text-body-large-b-d">Contact</p>
        <p>arturoyz2105@gmail.com</p>
        <p>+51 984221508</p>
        <p>Lima, Perú </p> 
      </div>
    </div>
  )
};
