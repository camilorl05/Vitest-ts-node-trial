import { describe, expect, test } from "vitest";
import { Alumno } from "../src/Alumno";

describe("Alumno", () => {

  test("un alumno de 18 años debe ser mayor de edad", () => {
    const alumno = new Alumno("Juan", 18);

    expect(alumno.esMayorDeEdad()).toBe(true);
  });

  test("un alumno de 25 años debe ser mayor de edad", () => {
    const alumno = new Alumno("Ana", 25);

    expect(alumno.esMayorDeEdad()).toBe(true);
  });

  test("un alumno de 19 años debe ser mayor de edad", () => {
    const alumno = new Alumno("Pedro", 19);

    expect(alumno.esMayorDeEdad()).toBe(true);
  });

});

