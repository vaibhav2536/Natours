import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe(
  'pk_test_51Pb6YtCwYeDOR9WDZvSqv2zfBytRVkrROURmLKRtG9qEs2f9AeADRBtJbFdUfHNu0w0LNWEVXotBDNdsR1fRHrYF00TXdYoo5G'
);

export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);

    // 2) Create checkout form + charge credit card
    const checkoutPageUrl = session.data.session.url;
    window.location.assign(checkoutPageUrl);
  } catch (error) {
    showAlert('error', error);
  }
};
