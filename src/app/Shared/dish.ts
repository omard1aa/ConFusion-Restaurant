export class Dish {
  name: string;
  image: string;
  category: string;
  label: string;
  description: string
  price: string;
}
export const dishes: Dish[] = [{
  name: 'Uthappizza',
  image: '/assets/images/uthappizza.png',
  category: 'mains',
  label: 'Hot',
  price: '4.99',
  description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
},
  {
    name: 'Zucchipakoda',
    image: '/assets/images/zucchipakoda.png',
    category: 'appetizer',
    label: '',
    price: '1.99',
    description: 'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'
  },
  {
    name: 'Vadonut',
    image: '/assets/images/vadonut.png',
    category: 'appetizer',
    label: 'New',
    price: '1.99',
    description: 'A quintessential ConFusion experience, is it a vada or is it a donut?'
  },
  {
    name: 'Elai Cheese Cake',
    image: '/assets/images/elaicheesecake.png',
    category: 'dessert',
    label: '',
    price: '2.99',
    description: 'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'
  }];
