import { Persona } from "./Persona";

export class Profesor extends Persona {
  constructor(
    nombre: string,
    legajo: number
  ) {
    super(nombre, legajo);
  }

  obtenerInformacion(): string  {
    return super.obtenerInformacion();
  }

  obtenersaludo(): string {
    return `Hola, soy el profesor ${this.nombre}.`;
  }
}
