export const loadState = <T>(itemName: string): T | undefined => {
  try {
    const serializedState = localStorage.getItem(itemName)
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

export const saveState = <T>(state: T, itemName: string): void => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(itemName, serializedState)
  } catch {
    // ignore
  }
}
