import images from './images';

const wines = [
  {
    title: 'Deep Tissue',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Therapeutic',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'Relaxation',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Swedish',
    price: '$31',
    tags: 'CA | 750 ml',
  }
];

const cocktails = [
  {
    title: '60 minutes',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "75 minutes",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: '90 minutes',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  }
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
