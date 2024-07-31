

export const getGifs = async (category) => {
    const apiKey = 'AxXMa0b7mHQ4o79ZcnRSJe9Na00ImXiX';
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=${ apiKey }&q=${category}&limit=10`
    const req = await fetch(URL)
    const {data} = await req.json();

    const gifs = data.map(e=>({
            id: e.id,
            title: e.title,
            url: e.images.downsized_medium.url
    }));

    return gifs;
}
