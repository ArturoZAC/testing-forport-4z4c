import { BodyEducation } from '@/components/education'
import { Title } from '@/components/ui'

export const Education = () => {
  return (
    <section id='education' className='flex flex-col gap-y-20 mt-40 px-6 max-md:gap-y-10 scroll-mt-24'>
      {/* <Title title='Education'/> */}
      <BodyEducation />
    </section>
  )
}
