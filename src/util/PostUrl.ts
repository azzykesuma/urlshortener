const post = async (urlValue: string) => {
    const url = "https://spoo.me/";
    const data = new URLSearchParams();
    data.append("url", urlValue);

    return fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
        "Accept": "application/json",
      },
      body: data,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
      });
};

export default post;