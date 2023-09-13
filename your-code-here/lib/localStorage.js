export const saveLocalStorage = (label, items)=> {
  const moviesToString = JSON.stringify(items)
  localStorage.setItem(label, moviesToString)
}

export const loadLocalStorage = (label)=> {
  const moviesList = localStorage.getItem(label)

  return JSON.parse(moviesList)
}
