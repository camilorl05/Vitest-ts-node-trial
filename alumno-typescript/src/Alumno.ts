import { Persona } from "./Persona";

export class Alumno 
             extends Persona {
  constructor(
    public nombre: string,
    public edad: number,
    public legajo: number
  ) {
    super(nombre, legajo);
  }

  esMayorDeEdad(): boolean {
    return this.edad >= 18;
  }
}
