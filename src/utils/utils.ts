export const addZeroBefore = (value: number): string => {
    return `${value > 9 ? '' : '0'}${value}`
}