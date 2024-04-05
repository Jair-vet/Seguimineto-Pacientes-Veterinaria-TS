
type PatientDetailItemProps = {
    label: string,
    data: string
}


export const PatientDetailItem = ({label, data}: PatientDetailItemProps) => {
  return (
    <p className="font-bold mb-3 text-violet-700 uppercase">{label}: {''}
        <span className="font-normal text-gray-700 normal-case">{data}</span>
    </p>
  )
}
