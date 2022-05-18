import { getEmailError } from "../validation";

// const email = "fdsfsed";
// const result = getEmailError(email);
// if (result !== "Email is not valid") {
//     throw new Error('test incorrect');
// }

describe("Get email error", () => {

    describe("Invalid", () => {
        const values = [
            "",
            "fdsfsed",
            "dfgds@dsf",
            "dfgds@dsf.",
            "@dsf.edf",
            "fsd.fsd@.edf",
        ];

        values.forEach((email, i) => {
            test(`${i}. Email - ${email}`, () => {
                const result = getEmailError(email);
            
                expect(result).toEqual("Email is not valid");
            });
        });
    });

    describe("Valid", () => {
        const values = [
            "dfgds@dsfsd.dsafs",
            "123dsds@dsfsd.d",
            "1@2.3",
        ];

        values.forEach((email, i) => {
            test(`${i}. Email - ${email}`, () => {
                const result = getEmailError(email);
            
                expect(result).toBeFalsy();
            });
        });
    });
});
