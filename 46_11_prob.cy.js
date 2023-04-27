describe("Caesar Cipher", () => {
    // Helper function to be used inside tests
    const caesarCipherDecrypt = (message, shift) => {
      const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const messageUpper = message.toUpperCase();
      let decrypted = "";
  
      for (let i = 0; i < messageUpper.length; i++) {
        const char = messageUpper[i];
        if (alphabet.includes(char)) {
          const index = (alphabet.indexOf(char) - shift + 26) % 26;
          decrypted += alphabet[index];
        } else {
          decrypted += char;
        }
      }
  
      return decrypted;
    };
  
    // Test cases for caesarCipherDecrypt function
    it("should decrypt the given message with the specified shift", () => {
      expect(caesarCipherDecrypt("B", 1)).to.equal("A");
      expect(caesarCipherDecrypt("K", 1)).to.equal("J");
      expect(caesarCipherDecrypt("G", 1)).to.equal("F");
      expect(caesarCipherDecrypt("P", 1)).to.equal("O");
    });
  
    it("should return the same message when the shift is 0", () => {
      expect(caesarCipherDecrypt("B", 0)).to.equal("B");
      expect(caesarCipherDecrypt("K", 0)).to.equal("K");
    });
  
    it("should handle non-alphabetic characters", () => {
      expect(caesarCipherDecrypt("B1!", 1)).to.equal("A1!");
    });
  
    // Test case for mergeMessages function
    it("should merge and sort two arrays of messages", () => {
      const messagesA = ["A", "J"];
      const messagesB = ["F", "O"];
      const expectedResult = ["A", "F", "J", "O"];
      expect(mergeMessages(messagesA, messagesB)).to.deep.equal(expectedResult);
    });
  
    // Test cases for decryptAndSortMessages function
    it("should decrypt and sort messages from two arrays", () => {
      const messagesA = ["B", "K"];
      const messagesB = ["G", "P"];
      const shift = 1;
      const expectedResult = ["A", "F", "J", "O"];
      expect(decryptAndSortMessages(messagesA, messagesB, shift)).to.deep.equal(expectedResult);
    });
  
    it("should return an empty array if both input arrays are empty", () => {
      const messagesA = [];
      const messagesB = [];
      const shift = 1;
      expect(decryptAndSortMessages(messagesA, messagesB, shift)).to.deep.equal([]);
    });
  });
