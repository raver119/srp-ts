/**
 * jest-environment: node
 */
import {expect, describe, test} from "@jest/globals"
import {padTo} from "../src";

describe("Padding tests", () => {
    test("simple padding", () => {
        expect(padTo(new Uint8Array([1, 2, 3, 4]), 6)).toStrictEqual(new Uint8Array([0, 0, 1, 2, 3, 4]))
    })

    test("no padding", () => {
        expect(padTo(new Uint8Array([1, 2, 3, 4]), 4)).toStrictEqual(new Uint8Array([1, 2, 3, 4]))
    })
})