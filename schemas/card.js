export default {
  name: 'card',
  title: 'Card',
  type: 'document',
  fields: [
    {
      name: 'cardNumber',
      title: 'CardNumber',
      type: 'number',
    },
    {
      name: 'questionNumber',
      title: 'QuestionNumber',
      type: 'number',
    },
    {
      name: 'birdName',
      title: 'BirdName',
      type: 'string',
    },
    {
      name: 'species',
      title: 'Species',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'audio',
      title: 'Audio',
      type: 'file',
    },
  ],
};
