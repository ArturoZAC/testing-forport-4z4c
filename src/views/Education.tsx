import { BodyEducation } from '@/components/education'
import { Title } from '@/components/ui'
import { getTranslations } from 'next-intl/server'

export const Education = async() => {

  const t = await getTranslations('Titles');

  return (
    <section id='education' className='flex flex-col gap-y-20 mt-40 px-6 max-md:gap-y-10 scroll-mt-24'>
      <Title title={`${t('education')}`}/>
      <BodyEducation />
    </section>
  )
}
