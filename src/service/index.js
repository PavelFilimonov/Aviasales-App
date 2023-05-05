class Service {
  _Base_url = 'https://aviasales-test-api.kata.academy';
  id = '';

  getTickets = async () => {
    const getIdUrl = `${this._Base_url}/search`;

    if (!this.id) {
      const responseId = await fetch(getIdUrl);
      if (responseId.ok) {
        const res = await responseId.json();
        this.id = res.searchId;
      } else {
        throw new Error(`Could not fetch ${getIdUrl}, received ${responseId.status}`);
      }
    }

    const getStackTickets = `${this._Base_url}/tickets?searchId=${this.id}`;

    const responseTicket = await fetch(getStackTickets);
    if (responseTicket.ok) {
      const tickets = await responseTicket.json();
      return tickets;
    } else {
      throw new Error(`Could not fetch ${getStackTickets}, received ${responseTicket.status}`);
    }
  };
}

const service = new Service();
export default service;
