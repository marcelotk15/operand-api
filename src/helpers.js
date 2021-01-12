const fs = require('fs');
const path = require('path')
const readline = require('readline')

module.exports = {
  isCep(cep) {
    const regex = new RegExp(/^[0-9]{5}-?[0-9]{3}$/)

    return regex.test(cep)
  },

  async getCepsBase() {
    const readInterface = await readline.createInterface({
      input: fs.createReadStream(path.resolve(__dirname, '..', 'ceps.txt')),
      output: process.stdout,
      console: false
    });

    const dataFinalJson = [];

    for await (const line of readInterface) {
      const data = line.split('\t');

      const finalData = {
        cep: data[0],
        state: (data[1].split('/'))[1],
        city: (data[1].split('/'))[0],
        neighborhood: data[2],
        street: data[3],
        createdAt: new Date(),
        updatedAt: new Date()
      };

      dataFinalJson.push(finalData);
    }

    return dataFinalJson;
  }
}