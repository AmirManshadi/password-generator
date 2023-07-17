class Generator {
	static getRandomLower(): string {
		return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
	}
	static getRandomUpper(): string {
		return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
	}
	static getRandomNumber(): string {
		return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
	}
	static getRandomSymbol(): string {
		const symbols = "!@#$%^&*()<>?/~-_"
		return symbols[Math.floor(Math.random() * symbols.length)]
	}

	static getNecessaryFunctions(options: Generator.optionsProps): (() => string)[] {
    let arr = [this.getRandomLower]
    if(options.upperCase) arr.push(this.getRandomUpper)
    if(options.numbers) arr.push(this.getRandomNumber)
    if(options.symbols) arr.push(this.getRandomSymbol)
    return arr
  }

	static genRandomText(len: number, options: Generator.optionsProps): string {
    let str: string = ''
    const functions: (() => string)[] = this.getNecessaryFunctions(options)
    for (let i = 0; i < len; i++) {
      str += functions[Math.floor(Math.random() * functions.length)]()
    }
    return str
  }
}

namespace Generator {
  export interface optionsProps {
    upperCase: boolean,
    numbers: boolean,
    symbols: boolean
  }
}

export default Generator