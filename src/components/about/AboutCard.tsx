
export const AboutCard = () => {

  return (
    <div className="relative bg-fourth w-full max-w-1/2 max-md:max-w-full  h-[600px] rounded-4xl 
     before:bg-linear-to-r before:from-violet-600 before:to-fuchsia-600 before:w-full before:max-w-[584px] max-md:before:max-w-full before:min-h-[600px] before:absolute before:right-1 before:rounded-[34px] before:rotate-[-2deg] before:-z-10
    ">
      <div className="flex flex-col justify-around items-center p-10 h-[inherit] max-middle:p-8 body-small-r text-body-small-d max-md:text-body-small-m">
        <div className="space-y-6 max-middle:space-y-4">
          <p className="subtitle1-b text-subtitle-1-d max-md:text-subtitle-1-m">WHO I AM</p>
          <p className="text-justify">💻 As a full-stack developer, I have experience building both front- and back-end platforms. 🧠 I stand out for my ability to solve problems in practical and creative ways. 🔧 Programming is my passion; I enjoy learning new technologies and taking on challenges that push me to improve. 🤝 I&apos;m motivated by working as a team with other talented programmers and continuing to grow every day.</p>
        </div>
        <div className="flex flex-col gap-y-6 max-middle:gap-y-4">
          <div className="min-h-[3px] bg-neutral-700 w-full"></div>
          <p className="text-justify">Currently, I continue my passion for programming at Devtalles, actively taking several courses and expanding my knowledge on the same platform. 📚💻</p>
        </div>
      </div>
    </div>
  )
}
