
interface Props {
  icon?: undefined,
  lead?: string;
  descripcion?: string;
}


export const Card = ( {icon,lead,descripcion}: Props) => {
  return (
    <div className="w-full max-w-[272px] min-h-[272px] p-5 flex flex-col gap-y-3 bg-fourth rounded-4xl shadow-lg shadow-fuchsia-700/50">
      <div className="size-[50px] bg-third-light">{ icon }</div>
      <p className="text-lead-b-d">{ lead }</p>
      <p className="text-body-small-r-d text-pretty">{descripcion}</p>
    </div>
  )
}
