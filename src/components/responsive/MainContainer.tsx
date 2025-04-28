
export const MainContainer = ({ children, className }: { children: React.ReactNode | React.ReactNode[], className?: string }) => {
  return (
    <div className={`w-full max-w-[1208px] ${className}` }>
      { children }
    </div>
  )
};
