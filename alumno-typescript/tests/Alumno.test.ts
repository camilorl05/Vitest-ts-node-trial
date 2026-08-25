import { describe, expect, test } from "vitest";
import { Alumno } from "../src/Alumno";

describe("Alumno", () => {

  test("un alumno de 18 anios debe ser mayor de edad y tener numero de legajo", () => {
    const alumno = new Alumno("Juan", 18, 55321);

    expect(alumno.esMayorDeEdad()).toBe(true);
    expect(alumno.legajo).toBe(55321);
  });

  test("un alumno de 25 anios debe ser mayor de edad y tener numero de legajo", () => {
    const alumno = new Alumno("Ana", 25, 13356);

    expect(alumno.esMayorDeEdad()).toBe(true);
    expect(alumno.legajo).toBe(13356);
  });

  test("un alumno de 19 anios debe ser mayor de edad y tener numero de legajo", () => {
    const alumno = new Alumno("Pedro", 19, 12345);

    expect(alumno.esMayorDeEdad()).toBe(true);
    expect(alumno.legajo).toBe(12345);
  });

  test("un alumno de 16 anios debe ser menor de edad y tener un numero de legajo", () => {
    const alumno = new Alumno("Jazmin", 16, 47329);
    expect(alumno.esMayorDeEdad()).toBe(false);
    expect(alumno.legajo).toBe(47329);
  });

  test("un alumno de 15 anios debe ser menor de edad y tener un numero de legajo", () => {
    const alumno = new Alumno("Lucia", 15, 98765);
    expect(alumno.esMayorDeEdad()).toBe(false);
    expect(alumno.legajo).toBe(98765);
  });

  test("un alumno de 17 anios debe ser menor de edad y tener un numero de legajo", () => {
    const alumno = new Alumno("Tomas", 17, 18765);
    expect(alumno.esMayorDeEdad()).toBe(false);
    expect(alumno.legajo).toBe(18765);
  });

  test("un alumno de 24 anios debe ser mayor de edad y tener un numero de legajo", () => {
    const alumno = new Alumno("Lucia", 24, 28765);
    expect(alumno.esMayorDeEdad()).toBe(true);
    expect(alumno.legajo).toBe(28765);
  });

  test("un alumno de 21 anios debe ser mayor de edad y tener un numero de legajo", () => {
    const alumno = new Alumno("Martin", 21, 38765);
    expect(alumno.esMayorDeEdad()).toBe(true);
    expect(alumno.legajo).toBe(38765);
  });

})
