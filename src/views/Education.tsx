import { BodyEducation } from '@/components/education'
import { Title } from '@/components/ui'

export const Education = () => {
  return (
    <section className='flex flex-col gap-y-20 mt-40'>
      <Title title='Education'/>
      <BodyEducation />
    </section>
  )
}
