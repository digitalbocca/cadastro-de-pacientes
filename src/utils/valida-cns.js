function defaultCNSValidation (cns) {
  const pis = cns.substring(0, 11).split('')
  const sum = pis.reduce((acc, p, i) => acc + (p * (15 - i)), 0)

  const rest = sum % 11
  const digit = rest === 0 ? 0 : 11 - rest

  const result = digit === 10 ? `${pis.join('')}001${(11 - ((sum + 2) % 11))}` : `${pis.join('')}000${digit}`

  return result === cns
}

function specialCNSValidation (cns) {
  const sum = cns.split('').reduce((acc, c, i) => acc + (c * (15 - i)), 0)

  return sum % 11 === 0
}

export default function preValidation (cns) {
  const defaultCNSStart = firstDigit => firstDigit > 0 && firstDigit < 3
  const specialCNSStart = firstDigit => firstDigit > 6 && firstDigit <= 9

  const trimmedCns = cns.trim()

  if (trimmedCns.length !== 15) {
    return false
  }

  if (Number.isNaN(Number(trimmedCns))) {
    return false
  }

  const firstDigit = parseInt(trimmedCns[0], 10)

  if (!defaultCNSStart(firstDigit) && !specialCNSStart(firstDigit)) {
    return false
  }

  return defaultCNSStart(firstDigit) ? defaultCNSValidation(trimmedCns) : specialCNSValidation(trimmedCns)
}
