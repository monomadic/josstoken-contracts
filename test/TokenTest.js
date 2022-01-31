const { mintToken } = require('../scripts/lib/mintToken');
const { expect } = require("chai");

describe("mintToken", function() {
    it("should deploy", async function() {
        const mintRecipient = "0x41e80D768BC9eB7646Fb63eC9bd38e77331d60e2";

        let jossToken = await mintToken(
            "JossToken",
            "JOSS",
            300000000,
            mintRecipient
        );

        expect(jossToken)
    })
})