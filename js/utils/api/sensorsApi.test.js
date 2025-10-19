import { data } from "../../../data/mock-homepage-data";
import { retrieveSensorsData } from "./sensorsApi";

describe("sensorsApi UNit Test Suites",() =>{
    it("should return the mocked data",() =>{
        expect(retrieveSensorsData()).toBe(data.facades)
    })
})

