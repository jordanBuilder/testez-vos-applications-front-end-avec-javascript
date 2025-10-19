
/**
 * @description Writing test to verify if we are in test env.
 * 
 */

import { isInTestEnv } from './index.js'

describe("isInTestEnv Unit Test Suites",() =>{
    it("should be in test env",() => {
        expect(isInTestEnv()).toBe(true)
    })
    it("should not be in test env",() => {
        process.env.NODE_ENV = "development"
        expect(isInTestEnv()).toBe(false)
    })
})
