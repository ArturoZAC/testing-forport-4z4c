
interface Props {
  icon?: undefined,
  lead?: string;
  descripcion?: string;
}


export const Card = ( {icon,lead,descripcion}: Props) => {
  return (
    <div className="relative">
      <div
        className="absolute -inset-[0.5px] rounded-4xl bg-gradient-to-l from-violet-600 to-fuchsia-600 opacity-30 blur-xs"
      ></div>
      <div className="relative w-full max-w-[272px] min-h-[282px] p-5 flex flex-col bg-fourth rounded-4xl gap-y-8">
        <div className="size-[50px] bg-third-light">{ icon }</div>
        <div className="flex flex-col gap-y-5">
          <p className="text-body-large-b-d">{ lead }</p>
          <p className="text-body-small-r-d text-pretty">{descripcion}</p>
        </div>
      </div>
    </div>
  )
}
