
interface Props {
  icon?: any,
  lead?: string;
  descripcion?: string;
}


export const Card = ( {icon,lead,descripcion}: Props) => {
  return (
    <div className="size-[272px] p-5 space-y-5 bg-emerald-800 rounded-[34px]">
      <div className="size-[50px] bg-third-light">{ icon }</div>
      <p className="text-lead-b-d">{ lead }</p>
      <p className="text-body-small-r-d text-pretty">{descripcion}</p>
    </div>
  )
}
