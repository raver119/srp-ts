/**
 * jest-environment: node
 */
import {expect, describe, test} from "@jest/globals"
import { Client, params} from "../src";


describe("Client tests", () => {
    test("successful auth", () => {
        const salt = "a83jd7anmkls7dalsbaseksdh87s_@$!@#%$8sjas"
        const login = "test_user@gmail.com"
        const password = "test_pa55w0kD_2kdkdnx_skhdasdsfdfl"

        const key = new Uint8Array([110, 148, 46, 13, 61, 95, 201, 157, 157, 144, 212, 115, 82, 21, 48, 180, 190, 162, 220, 229, 145, 190, 166, 254, 190, 156, 216, 206, 114, 237, 250, 70, 155, 70, 250, 129, 115, 211, 51, 53, 78, 255, 5, 185, 3, 135, 144, 70, 113, 137, 165, 7, 218, 200, 53, 170, 130, 151, 13, 131, 227, 139, 47, 100])

        const client = new Client(params["2048"], login, password, salt, key)
        const A = client.computeA()
        expect(Array.from(A.valueOf())).toStrictEqual([165, 49, 100, 184, 142, 162, 176, 118, 147, 161, 255, 83, 23, 216, 175, 148, 146, 147, 110, 47, 119, 13, 148, 104, 220, 174, 138, 12, 131, 68, 146, 25, 40, 72, 92, 141, 201, 7, 161, 129, 116, 170, 219, 90, 17, 249, 158, 154, 149, 52, 145, 194, 114, 221, 115, 212, 159, 216, 219, 165, 3, 105, 125, 23, 100, 171, 83, 239, 62, 149, 62, 88, 161, 170, 244, 110, 246, 184, 143, 222, 16, 190, 7, 129, 217, 206, 16, 206, 46, 60, 57, 152, 134, 173, 81, 60, 240, 184, 141, 79, 176, 246, 139, 152, 204, 8, 195, 207, 181, 55, 102, 196, 30, 219, 166, 129, 121, 203, 88, 81, 165, 245, 94, 37, 172, 94, 13, 204, 85, 21, 250, 204, 98, 53, 54, 142, 155, 97, 48, 109, 23, 235, 214, 233, 68, 151, 142, 169, 5, 177, 66, 212, 24, 175, 210, 33, 175, 19, 146, 86, 145, 26, 122, 64, 136, 222, 185, 1, 125, 238, 173, 86, 121, 65, 176, 177, 89, 220, 20, 177, 181, 244, 201, 207, 141, 37, 199, 44, 220, 200, 118, 47, 216, 128, 42, 177, 44, 39, 140, 92, 120, 84, 3, 79, 52, 43, 10, 241, 77, 213, 119, 160, 141, 238, 67, 39, 195, 203, 247, 190, 254, 228, 44, 90, 6, 207, 117, 197, 114, 162, 155, 204, 91, 178, 22, 28, 93, 13, 190, 170, 70, 66, 255, 45, 50, 156, 25, 177, 9, 76, 24, 184, 37, 199, 29, 211])
        
        const B = new Uint8Array([26, 95, 154, 110, 150, 48, 231, 163, 203, 17, 15, 136, 250, 11, 197, 105, 91, 77, 134, 236, 127, 7, 177, 154, 72, 5, 126, 138, 244, 122, 238, 34, 184, 147, 6, 127, 242, 74, 245, 26, 179, 198, 131, 94, 237, 56, 31, 181, 86, 199, 218, 5, 174, 133, 2, 133, 189, 22, 56, 195, 178, 183, 197, 230, 17, 224, 173, 24, 41, 75, 109, 186, 209, 59, 50, 24, 195, 214, 34, 120, 61, 59, 251, 141, 44, 14, 129, 198, 230, 137, 186, 10, 209, 245, 239, 190, 214, 84, 55, 21, 128, 182, 169, 131, 138, 242, 18, 207, 53, 166, 189, 84, 151, 176, 92, 79, 128, 70, 243, 199, 158, 213, 103, 85, 98, 113, 22, 170, 244, 55, 150, 3, 103, 127, 181, 46, 54, 221, 60, 204, 122, 145, 52, 192, 165, 149, 196, 29, 118, 245, 70, 173, 145, 180, 188, 115, 159, 201, 195, 124, 142, 210, 108, 7, 239, 62, 211, 169, 160, 158, 145, 248, 47, 243, 255, 100, 86, 194, 207, 151, 97, 62, 2, 240, 253, 108, 100, 235, 96, 209, 170, 167, 197, 116, 120, 20, 112, 246, 99, 222, 207, 118, 180, 101, 196, 122, 249, 190, 215, 165, 101, 175, 217, 53, 63, 123, 91, 78, 14, 226, 107, 130, 217, 17, 77, 252, 67, 224, 65, 142, 37, 81, 181, 125, 250, 239, 38, 111, 113, 196, 181, 166, 199, 195, 28, 111, 130, 142, 176, 74, 107, 17, 175, 114, 50, 180])
        client.setB(B)
        const M1 = client.computeM1()

        expect(Array.from(M1.valueOf())).toStrictEqual([102, 11, 148, 86, 211, 12, 67, 216, 151, 58, 241, 100, 212, 212, 21, 35, 16, 111, 123, 95, 106, 55, 159, 48, 201, 89, 149, 204, 201, 19, 60, 219])


        expect(client.checkM2(new Uint8Array([236, 137, 111, 58, 90, 88, 91, 167, 187, 175, 239, 202, 161, 72, 184, 150, 74, 216, 144, 45, 61, 49, 236, 233, 182, 144, 230, 89, 136, 171, 245, 163]))).toBeTruthy()
    })
})