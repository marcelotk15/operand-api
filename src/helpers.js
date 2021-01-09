module.exports = {
  isCep(cep) {
    const regex = new RegExp(/^[0-9]{5}-?[0-9]{3}$/)

    return regex.test(cep)
  }
}