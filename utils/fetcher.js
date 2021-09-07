export const fetcher = (url, data) =>
fetch(location.origin + url,{
    method: data ? "POST" : "GET",
    credentials: "include",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
}).then((res) => {
    return res.json();
})