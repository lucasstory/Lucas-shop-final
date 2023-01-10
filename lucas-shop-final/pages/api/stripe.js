const Stripe = require('stripe');
const stripe = Stripe('sk_test_51MNESNGoDMJIfJzMn8S48wW9En3Ld5J1wfXoRg6seFREofHWE8Tz4ExD09ViJQevKD8Xid9k1mR7fY4hiOzElYnL00bR9iAKFV');

export default async function handler(req, res) {

  if (req.method === 'POST') {
    try {
      const params = {
        submit_type: 'pay',
        mode: 'payment',
        payment_method_types: ['card'],
        billing_address_collection: 'auto',
        shipping_options: [
          { shipping_rate: 'shr_1MNGxoGoDMJIfJzMz756zJJJ' },
        ],
        line_items: req.body.map((item) => {
          const img = item.image[0].asset._ref;
          const newImage = img.replace('image-', 'https://cdn.sanity.io/images/yv8mr6qa/production/').replace('-webp', '.webp');

          return {
            price_data: { 
              currency: 'sek',
              product_data: { 
                name: item.name,
                images: [newImage],
              },
              unit_amount: item.price * 100,
            },
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
            },
            quantity: item.quantity
          }
        }),
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/canceled`,
      }

      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);

      res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}