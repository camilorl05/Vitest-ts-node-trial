    import { describe, expect, test } from "vitest";
    import { Persona } from "../src/Persona";

    describe("Profesor", () => {

      test("un profesor debe tener un nombre y legajo", () => {
        const profesor = new Persona("Dr. García", 77707);
        expect(profesor.nombre).toBe("Dr. García");
        expect(profesor.legajo).toBe(77707);
      });
    });
