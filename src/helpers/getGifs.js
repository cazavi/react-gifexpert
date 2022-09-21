 export const getGifs = async(category) => {     //al poner fuera las funciones es una buena práctica porque así react no debe hacer renderizado innecesario de funciones
  const url = `https://api.giphy.com/v1/gifs/search?api_key=IoYi0eJ0qDBR6layGivYwV2xOYe0UZW2&q=${category}&limit=10`;
  const resp = await fetch(url);
  const {data} = await resp.json();
  const gifs = data.map(img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    })
  )
  console.log(gifs)
  return gifs;
}
