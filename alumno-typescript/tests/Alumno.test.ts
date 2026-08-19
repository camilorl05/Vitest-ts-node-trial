import { describe, expect, test } from "vitest";
import { Alumno } from "../src/Alumno";

describe("Alumno", () => {

  test("un alumno de 18 años debe ser mayor de edad y tener numero de legajo", () => {
    const alumno = new Alumno("Juan", 18, 55321);

    expect(alumno.esMayorDeEdad()).toBe(true);
    expect(alumno.legajo).toBe(55321);
  });

  test("un alumno de 25 años debe ser mayor de edad y tener numero de legajo", () => {
    const alumno = new Alumno("Ana", 25, 13356);

    expect(alumno.esMayorDeEdad()).toBe(true);
    expect(alumno.legajo).toBe(13356);
  });

  test("un alumno de 19 años debe ser mayor de edad y tener numero de legajo", () => {
    const alumno = new Alumno("Pedro", 19, 12345);

    expect(alumno.esMayorDeEdad()).toBe(true);
    expect(alumno.legajo).toBe(12345);
  });
})