const BASE_URL = "http://localhost:5000/api/users";

export async function signup(values) {
  try {
    const response = await fetch(`${BASE_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const message = await response.json();
    return message;
  } catch (error) {
    console.error(error);
  }
}

export async function signin(values) {
  try {
    const response = await fetch(`${BASE_URL}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
      credentials: "include",
    });
    const newUser = await response.json();
    return newUser;
  } catch (error) {
    console.error(error);
  }
}

export async function forgotPassword(values) {
  console.log(values);
  try {
    const response = await fetch(`${BASE_URL}/forgotpassword`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const newUser = await response.json();
    console.log(newUser);
    return newUser;
  } catch (error) {
    console.error(error);
  }
}


export async function resetPassword(values) {
  console.log(values);
  try {
    const response = await fetch(`${BASE_URL}/resetpassword`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const newUser = await response.json();
    return newUser;
  } catch (error) {
    console.error(error);
  }
}