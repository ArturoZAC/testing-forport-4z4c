
interface Props {
  icon?: undefined,
  lead?: string;
  descripcion?: string;
}

// max-w-[272px] min-h-[282px]
export const Card = ( {icon,lead,descripcion}: Props) => {
  return (
    <div className="relative h-full">
      <div
        className="absolute -inset-[0.5px] rounded-4xl bg-gradient-to-l from-violet-600 to-fuchsia-600 opacity-30 blur-[3px]"
      ></div>
      <div className="relative w-full h-full min-h-[282px] max-lg:min-h-auto p-5 max-lg:p-4 flex flex-col bg-fourth rounded-4xl gap-y-5 max-lg:gap-y-2 max-md:gap-y-3">
        <div className="flex flex-col gap-y-8 max-lg:flex-row max-lg:items-center max-lg:gap-x-5">
          <div className="size-[40px] bg-third-light">{ icon }</div>
          <p className="body-large-b text-body-large-d max-md:text-body-large-m">{ lead }</p>
        </div>
        <div className="flex flex-col gap-y-5">
          <p className="body-small-r text-body-small-d max-md:text-body-small-m text-justify">{descripcion}</p>
        </div>
      </div>
    </div>
  )
}