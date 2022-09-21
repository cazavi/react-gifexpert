import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => { //no llamar funciones dentro de componentes porque sino se llamará cada vez que se renderice

  const {images, isLoading} = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && (<h2>Cargando...</h2>)
      }
      
      <div className='card-grid'>
        {
          images.map((image) => (
            <GifItem 
            key={image.id}
            {...image}    //recibo todas las props del objeto
          />
          ))
        }
      </div>
    </>
  )
}
