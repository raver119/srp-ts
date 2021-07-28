/**
 * jest-environment: node
 */
import {expect, describe, test} from "@jest/globals"
import {bufferFromString, concat, rasterize} from "../src";

describe("Buffers", () => {
    test("string conversion ascii", () => {
        expect(rasterize(bufferFromString("alpha").valueOf())).toStrictEqual("[97, 108, 112, 104, 97]")
    })

    test("string conversion utf", () => {
        expect(rasterize(bufferFromString("соль").valueOf())).toStrictEqual("[209, 129, 208, 190, 208, 187, 209, 140]")
    })

    test("concat", () => {
        expect(rasterize(concat(bufferFromString("A"), bufferFromString("B")))).toStrictEqual("[65, 58, 66]")
    })
})