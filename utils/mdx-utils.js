import { api } from '../services/api';

export const getPosts = async () => {
  try {
    const { data } = await api.get('/posts');
    if (data) {
      return data;
    }
    return [];
  } catch (error) {
    console.error('Erro ao buscar posts:', error);
    return [];
  }
};

export const getPostBySlug = async (id) => {
  try {
    //TODO: BUSCAR UM POST EM ESPECÍFICO.
    const { data } = await api.get(`/posts?id=eq.${id}`);

    if (data && data.length > 0) {
      return data[0]; // Retorna o primeiro post encontrado.
    } else {
      return {};
    }
  } catch (error) {
    console.error('Erro ao buscar o post:', error);
  }
  return {};
};