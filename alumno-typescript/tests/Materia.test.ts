import { describe, expect, test } from "vitest";
import { Materia } from "../src/Materia";

describe("Materia", () => {

  test("una materia debe tener un nombre", () => {
    const materia = new Materia("Lengua" , 4, "Ingeniería");

    expect(materia.nombre).toBe("Lengua");
  });

  test("una materia debe tener un año", () => {
    const materia = new Materia("Lengua", 4, "Ingeniería");

    expect(materia.anio).toBe(4);
  });

  test("una materia debe tener una carrera", () => {
    const materia = new Materia("Lengua", 4, "Ingeniería");

    expect(materia.carrera).toBe("Ingeniería");
  });
})