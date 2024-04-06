import { toast } from "react-toastify"
import { usePatientStore } from "../store"
import { Patient } from "../types"
import { PatientDetailItem } from "./PatientDetailItem"

type PatientDetailsProps = {
    patient: Patient
}


export const PatientDetail = ({patient} : PatientDetailsProps) => {

    const { deletePatient, getPatientId } = usePatientStore()

    const handleClick = () =>{
        deletePatient(patient.id)
        toast('Paciente Eliminado', {
            type: 'error'
        })
    }

  return (
    <div className="mx-5 my-10 py-10 bg-white shadow-md rounded-xl">
        <div className="ml-10">
            <PatientDetailItem label="ID" data={patient.id}/>
            <PatientDetailItem label="Paciente" data={patient.name}/>
            <PatientDetailItem label="Dueño" data={patient.caretaker}/>
            <PatientDetailItem label="Email" data={patient.email}/>
            <PatientDetailItem label="Fecha" data={patient.date.toString()}/>
            <PatientDetailItem label="Sintomas" data={patient.symptoms}/>

        </div>
        <div className="flex justify-between mt-2 mx-3 gap-3">
            <button className=" w-full p-2 text-center duration-300 bg-emerald-700 hover:bg-emerald-800 text-white font-bold uppercase rounded-lg"
                onClick={() => getPatientId(patient.id)}    
            >Editar
            </button>
            <button className=" w-full p-2 text-center duration-300 bg-red-700 hover:bg-red-800 text-white font-bold uppercase rounded-lg"
                onClick={handleClick}    
            >Eliminar
            </button>
        </div>
    </div>
  )
}
