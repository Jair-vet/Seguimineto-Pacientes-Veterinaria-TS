

export const Error = ({children} : {children: React.ReactNode}) => {
  return (
    <p className="text-center bg-red-200 mt-1 rounded-md p-2 text-red-800 text-sm uppercase">{children}</p>
  )
}
