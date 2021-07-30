
import { Menu } from './Menu'
import { Mentor } from './Mentor'
import { Student } from './Student'
import { Conference } from './Conference'


/** Arrays */

let mentorArray:Mentor[] = [
  new Mentor("roso", "roso@", "1234"),
  new Mentor("angel", "angel@", "1234"),
  new Mentor("andres", "andres@", "1234")
];

let studentArray:Student[] = [
    new Student("hector", "hector@"),
    new Student("Veronica", "Vero@"),
    new Student("Santiago", "Santi@")
];

let conferenceArray: Conference[] = [
    new Conference("angular", "25-05-2021", "26-05-2021", new Mentor("alejo", "alejo@", "1234"), [])
];



/** Functions */

function mentorValidation (mentorArray:Mentor[], mail:string, passw:string){
return mentorArray.find(mentor => mentor.getEmail() === mail && mentor.getPassword() === passw)
}

function uniqueEmail (email:string[], emailInput:string):boolean{
  return email.some(e => e === emailInput)
}

(async () => {
  const menu = new Menu()
    while (menu.isActive()) {

      menu.printMenu()
      let key = await menu.getInt('seleccione un número de la lista:')
    
      switch (key) {
        case 0:
          console.log('0: ',key);
          menu.close()
          process.exit()

          break;
        
        case 1:
          const mentorNameInput:string = await menu.getString('Ingrese nombre del mentor')
          const mentorEmailInput:string = await menu.getString('Ingrese email del mentor')
          const mentorPasswInput:string = await menu.getString('Ingrese password del mentor')

          //validar que el correo sea unico
          let searchMentorEmail:boolean = uniqueEmail(mentorArray.map(e => e.getEmail()), mentorEmailInput)

          if (searchMentorEmail){
            console.log("El correo ya se encuentra registrado")
          } else {

            //si el correo es único agrega nuevo mentor al arreglo mentorArray
            mentorArray.push(new Mentor(mentorNameInput, mentorEmailInput, mentorPasswInput))
          }
          break;
        
        case 2:
          const studentNameInput:string = await menu.getString('Ingrese nombre del estudiante')
          const studentEmailInput:string = await menu.getString('Ingrese email del estudiante')

          //validar que el correo sea único
            let searchStudentEmail:boolean = uniqueEmail(studentArray.map(e => e.getEmail()), studentEmailInput)
            if(searchStudentEmail){
              console.log("El correo ya se encuentra registrado")
            } else {

              //si el correo es único agrega nuevo mentor al arreglo studentArray
              studentArray.push(new Student(studentNameInput, studentEmailInput))
            }
          break;
        
        case 3:

          //validar identidad del mentor
          const mentorEmailInputValid:string = await menu.getString('Ingrese email del mentor')
          const mentorPasswInputValid:string = await menu.getString('Ingrese contraseña del mentor')
          let validMentor: Mentor | undefined = mentorValidation(mentorArray, mentorEmailInputValid, mentorPasswInputValid)
            if (validMentor === undefined){
              console.log("Los datos ingresados no son válidos")
            } else {

              //continua agregando datos por teclado
              const confName:string = await menu.getString('Ingrese nombre Conferencia')
              const startDate:string = await menu.getString('Ingrese fecha inicio con formato dd-mm-aaaa')
              const endDate:string = await menu.getString('Ingrese fecha fin  con formato dd-mm-aaaa')

              //se comprueba que el correo del mentor sea igual al ingresado
              let validacionEMail:Mentor[] = mentorArray.filter(e => e.getEmail() === mentorEmailInputValid)
              let mentorConferences:Conference[] = conferenceArray.filter(e => e.getInstructor().getEmail() === mentorEmailInputValid)

              //valida si el mentor esta disponible en nueva fecha
              let dateValidation:boolean
              if (validacionEMail.length != 0){
                let registerDateValidation:boolean[] = []
                for(let i = 0; i < mentorConferences.length; i++){
                  let fechaInicio1:string = mentorConferences[i].startingDate.split("-")[0]
                  let fechaFin1:string = mentorConferences[i].endingDate.split("-")[0]
                  let fechaInicio2:string = startDate.split("-")[0]
                  let fechaFin2:string = endDate.split("-")[0]

                  dateValidation = (fechaInicio1 != fechaInicio2) && (fechaFin1 != fechaFin2) && (fechaFin1 != fechaInicio2)
                  registerDateValidation.push(dateValidation)

                }

                if (registerDateValidation.some(e => e === false)){
                  console.log("El mentor no se encuentra disponible en la fecha indicada")
                } else {
                  conferenceArray.push(new Conference(confName, startDate, endDate, validMentor, []))
                  console.log("Conferencia Agregada exitosamente")
                }
              }
            }
          break;
      
        case 4:
          let listaConferencias:string[] = conferenceArray.map(e => e.getConferenceName())
          console.log("Conferencias disponibles: ", listaConferencias);
          break;
      
        case 5:
          const mentorName:string = await menu.getString('Ingrese nombre del mentor')
          const findMentor:Mentor | undefined = mentorArray.find(e => e.getPersonName() === mentorName)
          if(findMentor === undefined){
            console.log("El mentor no se encuentra registrado")
          } else {
            let conferenceByMentor:Conference[] = conferenceArray.filter(e => e.getInstructor().getPersonName() === mentorName)
            console.log(conferenceByMentor.map(e => e.getConferenceName()))
          }
          break;
      
        case 6:
          const inputEmail:string = await menu.getString('Ingrese su correo electrónico')

            //se valida datos de usuario estudiante
          const validatedUser:Student | undefined = studentArray.find(e => e.getEmail() === inputEmail)
            if (validatedUser === undefined){
              console.log("Datos de usuario no corresponden con nuestras bases de datos")
            } else {
              const registerConference:string = await menu.getString('Ingrese nombre de la conferencia en la cual desea registrarse')

              //se valida si la conferencia existe
              const validateConference:Conference | undefined = conferenceArray.find(e => e.getConferenceName() === registerConference)
              if (validateConference === undefined){
                console.log("La conferencia no se encuentra en nuestras bases de datos")
              } else {

                //se valida si hay cupo disponible
                if (validateConference.getParticipants().length >= 20){
                  console.log("No tiene cupos disponibles")
                } else {
                  const findEvent: Conference | undefined = conferenceArray.find(e => e.getConferenceName() === registerConference)
                  if(findEvent === undefined){
                    console.log("Conferencia no encontrada")
                  } else {
                    const validateUniqueEmail = findEvent.getParticipants().some(e => e.getEmail() === inputEmail)
                    if(validateUniqueEmail){
                      console.log("El estudiante ya se encuentra registrado")
                    } else {
                        findEvent.addParticipants(validatedUser)
                    }
                    console.log(`Registro exitoso de ${inputEmail} en conferencia: ${findEvent.getConferenceName()}`)
                  }
                }
              }
            }

          break;
        
        case 7:
          let studentsList = studentArray.map(e => "Name: " + e.getPersonName() + ", " + "Email: " + e.getEmail())
          console.log(studentsList)
          break;

        case 8:
          const inputConference:string = await menu.getString('Ingrese nombre de la conferencia')
          const searchForConference:Conference | undefined = conferenceArray.find(e => e.getConferenceName() === inputConference)
          if (searchForConference === undefined){
            console.log("La conferencia ingresada no existe")
          } else {
              console.log(searchForConference.getParticipants())
          }
          break;

        case 9:
          let mentorsList = mentorArray.map(e => "Name: " + e.getPersonName() + ", " + "Email: " + e.getEmail())
          console.log(mentorsList)
          break;

        case 10:
          const inputConference2:string = await menu.getString('Ingrese nombre de la conferencia')
          const searchForConference2:Conference | undefined = conferenceArray.find(e => e.getConferenceName() === inputConference2)
          if (searchForConference2 === undefined){
            console.log("La conferencia ingresada no existe")
          } else {
            const mentoresPorEvento = "Name: " + searchForConference2.getInstructor().getPersonName()
                                    + " " + "Email: " + searchForConference2.getInstructor().getEmail()
            console.log(mentoresPorEvento)
          }
          break;

        default:
          console.log('Debe elegir una opción valida');
          //menu.close()
          break;
      }
    }
    
  console.log('Adios');
    
  })()


