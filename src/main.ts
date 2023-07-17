import "./style.css"

// DOM elements
const formEl = document.getElementById("password-generator-form") as HTMLFormElement
const resultEl = document.getElementById("password-placeholder") as HTMLInputElement
const clipboardEl = document.getElementById("copy-btn") as HTMLButtonElement
const upperCaseEl = document.getElementById("uppercase-letters") as HTMLInputElement
const numberEl = document.getElementById("numbers") as HTMLInputElement
const specialEl = document.getElementById("special-characters") as HTMLInputElement
const generateEl = document.getElementById("submit-btn") as HTMLButtonElement

// generator class
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
		const symbols = "!@#$%^&*()<>?/~"
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
      str += functions[Math.floor(Math.random() * (functions.length - 1))]()
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