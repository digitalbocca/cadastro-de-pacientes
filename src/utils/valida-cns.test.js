import { describe, expect, it } from 'vitest'
import validaCNS from './valida-cns'

describe('valida-cns', () => {
  it('CNS com menos de 15 posições', () => {
    const validation = validaCNS('123456')

    expect(validation).toBe(false)
  })

  it('CNS com letras ou outros caracteres', () => {
    const validation = validaCNS('123456wertidbdk')

    expect(validation).toBe(false)
  })

  it('CNS iniciado com 0, 3, 4, 5, 6', () => {
    const validationZero = validaCNS('023456789090909')
    const validationThree = validaCNS('323456789090909')
    const validationFour = validaCNS('423456789090909')
    const validationFive = validaCNS('523456789090909')
    const validationSix = validaCNS('623456789090909')

    expect(validationZero).toBe(false)
    expect(validationThree).toBe(false)
    expect(validationFour).toBe(false)
    expect(validationFive).toBe(false)
    expect(validationSix).toBe(false)
  })

  it('CNS inicio 1 ou 2', () => {
    const valid = validaCNS('265550461670006')
    const invalid = validaCNS('265550061670006')

    expect(valid).toBe(true)
    expect(invalid).toBe(false)
  })

  it('CNS inicio 7, 8 ou 9', () => {
    const valid = validaCNS('847962653050004')
    const invalid = validaCNS('847962753050004')

    expect(valid).toBe(true)
    expect(invalid).toBe(false)
  })
})
