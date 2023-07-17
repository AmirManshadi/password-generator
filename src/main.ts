import Generator from "./Generator"
import "./style.css"

// DOM elements
const formEl = document.getElementById("password-generator-form") as HTMLFormElement
const resultEl = document.getElementById("password-placeholder") as HTMLInputElement
const clipboardEl = document.getElementById("copy-btn") as HTMLButtonElement
const upperCaseEl = document.getElementById("uppercase-letters") as HTMLInputElement
const numberEl = document.getElementById("numbers") as HTMLInputElement
const specialEl = document.getElementById("special-characters") as HTMLInputElement
const generateEl = document.getElementById("submit-btn") as HTMLButtonElement
