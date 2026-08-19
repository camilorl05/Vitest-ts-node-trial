export class Persona{
  constructor(
    public nombre: string,
    public legajo: number
  ) {}
obtenerInformacion(): string  {
  return `Nombre: ${this.nombre}, Legajo: ${this.legajo}`;
}

}