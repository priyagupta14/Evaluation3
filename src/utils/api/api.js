import axios from 'axios';

const getAllSongs = async () => {
  const headers = {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2MGI0ODMzYy02YmY5LTRkNWItYTgwZS0yYzVkNmE2ZDY5NGIiLCJuYW1lIjoiUHJpeWEiLCJyb2xlIjowLCJzdWJqZWN0IjoiVGVjaCBVbml2IDIwMjEiLCJlYXN0ZXJfZWdnIjoiR29vZCBsdWNrISIsImF1ZCI6Im11c2ljcmVjb3Jkcy50ZWNodW5pdi5jb20iLCJuYmYiOjE2MTU3ODQ1NzcsImV4cCI6MTYxODM3NjU3NywiaWF0IjoxNjE1Nzg0NTc3LCJpc3MiOiJNdXNpYyBSZWNvcmRzIn0.clzbV9GMHGmz5RTObtBP0BvtOTdYrlXNTKh_BtLJYcU',
  };
  console.log('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2MGI0ODMzYy02YmY5LTRkNWItYTgwZS0yYzVkNmE2ZDY5NGIiLCJuYW1lIjoiUHJpeWEiLCJyb2xlIjowLCJzdWJqZWN0IjoiVGVjaCBVbml2IDIwMjEiLCJlYXN0ZXJfZWdnIjoiR29vZCBsdWNrISIsImF1ZCI6Im11c2ljcmVjb3Jkcy50ZWNodW5pdi5jb20iLCJuYmYiOjE2MTU3ODQ1NzcsImV4cCI6MTYxODM3NjU3NywiaWF0IjoxNjE1Nzg0NTc3LCJpc3MiOiJNdXNpYyBSZWNvcmRzIn0.clzbV9GMHGmz5RTObtBP0BvtOTdYrlXNTKh_BtLJYcU');
  const allSongs = await axios.get('/api/records/', { headers });
  return allSongs.data;
};

const getLikeStatus = async (recordId) => {
  const headers = {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2MGI0ODMzYy02YmY5LTRkNWItYTgwZS0yYzVkNmE2ZDY5NGIiLCJuYW1lIjoiUHJpeWEiLCJyb2xlIjowLCJzdWJqZWN0IjoiVGVjaCBVbml2IDIwMjEiLCJlYXN0ZXJfZWdnIjoiR29vZCBsdWNrISIsImF1ZCI6Im11c2ljcmVjb3Jkcy50ZWNodW5pdi5jb20iLCJuYmYiOjE2MTU3ODQ1NzcsImV4cCI6MTYxODM3NjU3NywiaWF0IjoxNjE1Nzg0NTc3LCJpc3MiOiJNdXNpYyBSZWNvcmRzIn0.clzbV9GMHGmz5RTObtBP0BvtOTdYrlXNTKh_BtLJYcU',
  };
  const allSongs = await axios.get(`/api/records/${recordId}/likes`, { headers });
  return allSongs.data;
};
const updateLikeStatus = async (recordId, status) => {
  const headers = {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2MGI0ODMzYy02YmY5LTRkNWItYTgwZS0yYzVkNmE2ZDY5NGIiLCJuYW1lIjoiUHJpeWEiLCJyb2xlIjowLCJzdWJqZWN0IjoiVGVjaCBVbml2IDIwMjEiLCJlYXN0ZXJfZWdnIjoiR29vZCBsdWNrISIsImF1ZCI6Im11c2ljcmVjb3Jkcy50ZWNodW5pdi5jb20iLCJuYmYiOjE2MTU3ODQ1NzcsImV4cCI6MTYxODM3NjU3NywiaWF0IjoxNjE1Nzg0NTc3LCJpc3MiOiJNdXNpYyBSZWNvcmRzIn0.clzbV9GMHGmz5RTObtBP0BvtOTdYrlXNTKh_BtLJYcU',
  };
  const updateStatus = await axios.patch(`/api/records/${recordId}/likes`, {
    like: status,
  }, { headers });
  console.log(updateStatus);
  return updateStatus.data;
};

export default { getAllSongs, getLikeStatus, updateLikeStatus };
