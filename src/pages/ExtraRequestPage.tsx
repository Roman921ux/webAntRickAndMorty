import { useEffect } from 'react';
import styled from 'styled-components';
import api from '../api';
import { Location } from '../types';

function ExtraRequestPage() {

  // здесь прописаны 4 запроса, 3 из которых возвращают 404 ошибку, так как обращение идет на стройний api
  // useEffect(() => {
  //   api.get('location/2')
  //     .then(res => console.log(res.data))
  //     .catch(error => console.log('Ошибка в запросе', error))

  //   async function updateLocation(id: number, updatedData: Partial<Location>) {
  //     try {
  //       const response = await api.put(`https://rickandmortyapi.com/api/location/${id}`, updatedData);
  //       console.log(response.data);
  //       return response.data;
  //     } catch (error) {
  //       console.error(`Ошибка при обновлении местоположения с ID ${id}:`, error);
  //       throw error; 
  //     }
  //   }
  //   updateLocation(1, { name: 'New Name' });

  //   async function patchLocation(id: number, updatedData: Partial<Location>) {
  //     try {
  //       const response = await api.patch(`https://rickandmortyapi.com/api/location/${id}`, updatedData);
  //       console.log(response.data);
  //       return response.data;
  //     } catch (error) {
  //       console.error(`Ошибка при частичном обновлении местоположения с ID ${id}:`, error);
  //       throw error;
  //     }
  //   }
  //   patchLocation(1, { dimension: 'New Dimension' }); 

  //   async function deleteLocation(id: number) {
  //     try {
  //       const response = await api.delete(`https://rickandmortyapi.com/api/location/${id}`);
  //       console.log(response.data);
  //       return response.data;
  //     } catch (error) {
  //       console.error(`Ошибка при удалении местоположения с ID ${id}:`, error);
  //       throw error; 
  //     }
  //   }
  //   deleteLocation(1); 

  // }, [])
  return (
    <Container>
      Extra request page
    </Container>
  );
}

export default ExtraRequestPage;

const Container = styled.div`
  
`;