import Controller from '@ember/controller';

export default Controller.extend({
  nonceResponse: null,

  actions: {
    handleCardNonceResponse(errors, nonce, cardData, billingContact, shippingContact, shippingOption, verificationToken) {
      this.set('nonceResponse', {
        errors: JSON.stringify(errors, null, '  '),
        nonce,
        cardData: JSON.stringify(cardData, null, '  '),
        billingContact: JSON.stringify(billingContact, null, '  '),
        shippingContact: JSON.stringify(shippingContact, null, '  '),
        shippingOption: JSON.stringify(shippingOption, null, '  '),
        verificationToken
      });
    },
    handleInputEventReceived(eventData) {
      this.set('eventData', eventData);
    }
  }
});
