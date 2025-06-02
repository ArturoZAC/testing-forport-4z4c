
export const AboutCard = () => {

  return (
    <div className="relative bg-neutral-900 w-full max-w-1/2 h-[600px] rounded-4xl 
     before:bg-linear-to-r before:from-violet-600 before:to-fuchsia-600 before:w-full before:max-w-[584px] before:min-h-[600px] before:absolute before:right-1 before:rounded-[34px] before:rotate-[-2deg] before:-z-10
    ">
      <div className="flex flex-col justify-around items-center p-10 h-[inherit]">
        <div className="space-y-6">
          <p className="text-subtitle1-b-d">WHO I AM</p>
          <p className="text-body-small-r-d text-justify">💻 As a full-stack developer, I have experience building both front- and back-end platforms. 🧠 I stand out for my ability to solve problems in practical and creative ways. 🔧 Programming is my passion; I enjoy learning new technologies and taking on challenges that push me to improve. 🤝 I&apos;m motivated by working as a team with other talented programmers and continuing to grow every day. 🚀</p>
        </div>
        <div className="flex flex-col gap-y-6">
          <div className="min-h-[3px] bg-neutral-700 w-full"></div>
          <p className="text-body-small-r-d text-justify">🚀 Currently, I continue my passion for programming at Devtalles, actively taking several courses and expanding my knowledge on the same platform. 📚💻</p>
        </div>
      </div>
    </div>
  )
}
