import { Patient } from "../types"

type PatientDetailsProps = {
    patient: Patient
}


export const PatientDetail = ({patient} : PatientDetailsProps) => {
  return (
    <div>
        {patient.name}
    </div>
  )
}
