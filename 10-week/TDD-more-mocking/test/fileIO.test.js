const FileIO = require("../fileIO");
const fs = require("fs");

describe("FileIO", () => {
  describe("read", () => {
    it("should call fs.readFileSync with the passed in 'file' argument", () => {
      // Your code here
      const mock = jest.spyOn(fs, "readFileSync");
      mock.mockImplementation(() => {});
      const fileName = "message.txt";
      const fileIO = new FileIO();
      fileIO.read(fileName);
  
      expect(mock).toBeCalledWith(fileName, "utf8");
    });
  });
  
  describe("write", () => {
    it("should call fs.writeFileSync with the passed in 'path' and 'data' arguments", () => {
      // Your code here
      const mock = jest.spyOn(fs, "writeFileSync");
      mock.mockImplementation(() => {});
      const path = "./message.txt";
      const data = "A stringier string than ever stringed before";
      const fileIO = new FileIO();
      fileIO.write(path, data);
    
      expect(mock).toBeCalledWith(path, data);
    });
  });
});
