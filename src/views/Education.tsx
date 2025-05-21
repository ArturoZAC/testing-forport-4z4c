import { BodyEducation } from '@/components/education'
import { Title } from '@/components/ui'
import React from 'react'

export const Education = () => {
  return (
    <section className='flex flex-col gap-y-18'>
      <Title title='Education'/>
      <BodyEducation />
    </section>
  )
}
