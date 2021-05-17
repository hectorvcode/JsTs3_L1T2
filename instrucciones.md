#Some Instructions

Utilizando como base el código de este repositorio diseñe, implemente y desarrolle todas las clases, funciones y estructuras necesarias para resolver el siguiente problema:

Vamos a retomar el problema del CSSConf de la clase de tipos de datos, queremos dictar una serie de conferencias de distintos temas: 

- Cada conferencia contará con un mentor y máximo 20 participantes. 
- Además, cada conferencia tendrá una fecha de inicio, fecha de finalización, 
- Los datos mínimos que se necesitan de los estudiantes y los mentores son: nombre, correo. 
  
Adicionalmente requerimos las siguientes funcionalidades.

- Se necesita poder registrar mentores y estudiantes
- El correo debe ser único, por lo cual no puede haber 2 estudiantes o 2 mentores con el mismo correo
- Se pueden crear todos los eventos que se quieran, pero estos eventos solo pueden ser creados por el mentor que los va a dictar, (para crear un evento se debe enviar los datos del mentor que lo crea, podemos usar el correo como atributo único del mentor, pero necesitaríamos una contraseña para garantizar que solo el mentor dueño de esa cuenta esta creando el evento)
- Un mentor puede tener más de una conferencias si las fechas no chocan (la fecha de inicio de la segunda conferencia debe ser mayor que la fecha de fin de la primera), considere solo la fecha y no la hora para esta restricción
- Los alumnos se pueden inscribir en todos los eventos que quieran, la única limitante es el cupo máximo del evento.
- Para que una persona se pueda registrar en un evento/conferencia debe estar registrado como alumno previamente


Se desea poder tener acceso a los siguientes datos:

- Lista de estudiantes
- lista de estudiantes por evento
- lista de eventos
- lista de mentores
- lista de eventos por mentores

Los datos expuestos anteriormente son los mínimos necesarios tanto para los eventos, conferencia, estudiantes y mentores, agregue cualquier otro atributo que considere necesario o que haga falta para poder dar solución a los requerimientos planteados

Esto es una aplicación de terminal, por lo que se ejecutara siempre en el terminal, las instrucciones para correr la aplicación se encuentran en el archivo readme.md del repositorio, el código del menú ya se encuentra implementado, recuerde hacer uso de todo lo aprendido hasta este momento.

Si tienen dudas consulten en internet, compartan con los otros estudiantes en Discord y consulten las clases anteriores antes de preguntar directamente a los mentores.

Cuando tenga lista la solución, cree un repositorio público en GitHub y coloque su respuesta en este repositorio, comparta el link al repositorio creado por usted.