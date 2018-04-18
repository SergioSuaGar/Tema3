class Agenda {
  // var agendaContactos = new Array ();
  constructor() {
    this.agendaContactos=new Array();
  }
  inicializarAgendaEjemplos(){
    var alumno1 = new Object();
    alumno1.nombre = 'Sergio Suarez Garzon';
    alumno1.direccion = 'Castoreño';
    alumno1.telefono = '661112345';
    alumno1.email = 'sergio@gmail.com';

    var alumno2 = new Object();
    alumno2.nombre = 'Francisco Javier Sanchez de la Torre';
    alumno2.direccion = 'Greco';
    alumno2.telefono = '662223456';
    alumno2.email = 'fran@gmail.com';

    var alumno3 = new Object();
    alumno3.nombre = 'Rodrigo Lizaran Molina';
    alumno3.direccion = 'Clarines';
    alumno3.telefono = '663334567';
    alumno3.email = 'rodrigo@gmail.com';

    this.agendaContactos.push(alumno1);
    this.agendaContactos.push(alumno2);
    this.agendaContactos.push(alumno3);
  }
   introducirContacto(nombre, direccion, telefono, email){
    var contacto= new Object();
    contacto.nombre= nombre;
    contacto.direccion=direccion;
    contacto.telefono=telefono;
    contacto.email=email;
    this.agendaContactos.push(contacto);
  }
  mostrarTodos(){
    document.write("<h2>Se mostraran todos los contactos</h2>")
   for (let i=0;i<this.agendaContactos.length;i++){
     document.write(this.agendaContactos[i]["nombre"]+"<br>");
     document.write(this.agendaContactos[i]["direccion"]+"<br>");
     document.write(this.agendaContactos[i]["telefono"]+"<br>");
     document.write(this.agendaContactos[i]["email"]+"<br>");
     document.write("----------------------------------------"+"<br>")
   }
 }
   mostrarContacto(nombre){
     document.write("<h2>Se mostrara el contacto "+nombre+"</h2>")
    for (let i=0;i<this.agendaContactos.length;i++){
      if(this.agendaContactos[i]["nombre"]==nombre){
        document.write(this.agendaContactos[i]["nombre"]+"<br>");
        document.write(this.agendaContactos[i]["direccion"]+"<br>");
        document.write(this.agendaContactos[i]["telefono"]+"<br>");
        document.write(this.agendaContactos[i]["email"]+"<br>");
        document.write("----------------------------------------"+"<br>")
      }
    }
  }

   borrarContacto(nombre){
    for (let i=0;this.agendaContactos.length;i++){
      if(this.agendaContactos[i][0]==nombre){
        this.agendaContactos.pop(this.agendaContactos[i]);
      }
    }
  }
}
