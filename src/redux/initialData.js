import { v4 } from 'uuid';

const initialData = {
  books: [
    {
      id: v4(),
      title: 'outsider',
      author: 'Stephen King',
      genre: 'Horror',
    },
    {
      id: v4(),
      title: 'Neuromancer',
      author: 'William Gibson',
      genre: 'Sci-fi',
    },
    {
      id: v4(),
      title: 'Watchman',
      author: 'Alan Moore',
      genre: 'HQ',
    },
  ],
  categories: [],
};

export default initialData;
