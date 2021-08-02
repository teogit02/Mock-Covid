export const checkLogin = () => {
  const userLogin = localStorage.getItem('userLogin')
  if (userLogin) {
    return true
  }
  return false
}

export const userRegister = (user) => {
  const users = JSON.parse(localStorage.getItem('users'))
  if (users) {
    //users = JSON.parse(users)
    localStorage.setItem('users', JSON.stringify([...users, user]))
  } else {
    localStorage.setItem('users', JSON.stringify([user]))
  }
}

export const userLogin = (user) => {
  const users = JSON.parse(localStorage.getItem('users'))
  let result = false
  if (users) {
    console.log(users)
    users.map(userItem => {
      if (userItem.email === user.email) {
        if (userItem.password === user.password) {
          localStorage.setItem('userLogin', JSON.stringify(user))
          result = true
        }
      }
    })
  }
  return result
}

export const userLogout = () => {
  localStorage.removeItem('userLogin')
}