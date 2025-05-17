
export const MainContainer = ({ children, className }: { children: React.ReactNode | React.ReactNode[], className?: string }) => {
  return (
    <div className={`w-full max-w-[1088px] ${className}` }>
      { children }
    </div>
  )
};
