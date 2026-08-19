import { describe, expect, test } from "vitest";
import { Profesor } from "../src/Profesor";

describe("Profesor", () => {

  test("un profesor debe tener un nombre y legajo", () => {
    const profesor = new Profesor("Dr. García", 77707);

    expect(profesor.nombre).toBe("Dr. García");
    expect(profesor.legajo).toBe(77707);
  });

  test("un profesor debe poder obtener su información", () => {
    const profesor = new Profesor("Dr. García", 77707);

    expect(profesor.obtenerInformacion()).toBe("Nombre: Dr. García, Legajo: 77707");
  });

});
