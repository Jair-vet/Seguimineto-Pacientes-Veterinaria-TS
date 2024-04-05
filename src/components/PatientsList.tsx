import { usePatientStore } from "../store"
import { PatientDetail } from "./PatientDetail"

export const PatientsList = () => {

  const patients = usePatientStore(state => state.patients)
  
  return (
    <div className="md:w-2/3 lg:w-2/5 md:h-screen overflow-y-scroll">
      {patients.length 
        ? (
          <>
            <h2 className="font-black text-emerald-500 text-3xl text-center">Listado de Pacientes</h2>
            <p className="text-lg mt-5 text-white text-center mb-10">
              Administra tus {''}
              <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
            </p>
            {patients.map( patient => (
              <PatientDetail 
                key={patient.id}
                patient={patient}
              />
            ))}
          </>
        )
        : (
          <>
            <h2 className="text-2xl font-bold uppercase text-center text-yellow-500">No hay Pacientes</h2>
            <p className="text-lg mt-5 text-white text-center mb-10">
              Comienza agregendo pacientes y {''}
              <span className="text-indigo-600 font-bold">aparecerán en este lugar</span>
            </p>
          </>
        )
      }
    </div>
  )
}
