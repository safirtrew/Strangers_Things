export const cohortName = "2209-ftb-et-web-pt";
export const BASE_URL = `https://strangers-things.herokuapp.com/api/`;

export async function getPosts() {
  try {
    const data = await fetch(`${BASE_URL}${cohortName}/posts`);
    const result = await data.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function addPosts(postDetail, token) {
  const response = await fetch(`${BASE_URL}${cohortName}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      post: {
        title: postDetail.title,
        description: postDetail.description,
        location: postDetail.location,
        price: postDetail.price,
        willDeliver: postDetail.willDeliver,
      },
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    })
    .catch(console.error);
}

export async function loginUser(username, password) {
  try {
    const response = await fetch(`${BASE_URL}${cohortName}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });
    const result = await response.json();
    const token = result.data.token;
    return token;
  } catch (error) {
    throw error;
  }
}

export async function connectProfile(token) {
  const response = await fetch(`${BASE_URL}${cohortName}/users/me`, {
    headers: {
      "Content-Type": "application.json",
      Authorization: `Bearer ${token}`,
    },
  });
  const result = await response.json();
  return result;
}

export async function getUser(authToken) {
  try {
    const userData = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    };
    const response = await fetch(`${BASE_URL}${cohortName}/users/me`, {
      headers: userData,
    });
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function createUser(username, password) {
  try {
    console.log(`${BASE_URL}${cohortName}/users/register`);
    const response = await fetch(`${BASE_URL}${cohortName}/users/Register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });
    return response;
  } catch (error) {
    throw error;
  }
}

export async function deletePosts(token, postid) {
  try {
    const response = await fetch(`${BASE_URL}${cohortName}/posts/${postid}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Isssue deleting Posts", error);
  }
}

export async function sendMessage(token, postid, content) {
  const response = await fetch(
    `${BASE_URL}${cohortName}/posts/${postid}/messages`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        message: {
          content: content,
        },
      }),
    }
  )
    .then((response) => response.json())
    .then((result) => {
      console.log(result, "this is result for sendMessage");
    })
    .catch(console.error);
}
