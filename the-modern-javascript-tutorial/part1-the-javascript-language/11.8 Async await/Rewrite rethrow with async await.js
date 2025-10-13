class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

async function loadJson(url) {
  const response = await fetch(url);
  if (response.status == 200) {
    return response.json();
  }

  throw new HttpError(response);
}

// Ask for a user name until github returns a valid user
async function demoGithubUser() {
  const name = 'iliakanㅗ';

  try {
    const user = await loadJson(`https://api.github.com/users/${name}`);
    console.log(`Full name: ${user.name}.`);
    return user;
  } catch (error) {
    if (error instanceof HttpError && error.response.status == 404) {
      console.log('No such user, please reenter.');
    } else {
      throw error;
    }
  }
}

// When you call an async function like demoGithubUser(), the function starts executing immediately up until the first await.
// The rest of the code after await runs asynchronously as a microtask.
// If you don't use await or .then on the returned Promise, the function still executes, but there's no way to get the return value or handle errors from outside.
// In summary: the async function body always executes, but to get results or catch errors, you should use await or .then.
demoGithubUser(); // To use the return value, you need to use await.
