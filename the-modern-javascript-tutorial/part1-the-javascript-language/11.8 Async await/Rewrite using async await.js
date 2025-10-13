async function loadJson(url) {
  const response = await fetch(url);

  if (response.status == 200) {
    return await response.json();
  }

  throw new Error(response.status);
}

try {
  await loadJson('https://javascript.info/no-such-user.json'); // Error: 404
} catch (error) {
  console.log(error.message);
}
