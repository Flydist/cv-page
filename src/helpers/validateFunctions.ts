export const checkExperienceValidity = (value: string): boolean => {
  const convertedValue = Number(value)
  return !Number.isNaN(convertedValue) && convertedValue >= 0
}
