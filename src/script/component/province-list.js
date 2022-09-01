const axios = require('axios').default;

class ProvinceList extends HTMLElement {
  connectedCallback() {
    this.getProvinces();
  }

  async getProvinces() {
    try {
      const res = await axios.get(
        'https://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi'
      );

      if (res.status === 200) {
        localStorage.setItem('covid19Id', JSON.stringify(res.data));
        this.render();
      } else {
        this.renderError();
      }
    } catch (e) {
      this.renderError();
    }
  }

  render() {
    const provinces = JSON.parse(localStorage.getItem('covid19Id'));

    provinces.forEach((province) => {
      const provinceCard = document.createElement('province-card');
      provinceCard.province = province;

      this.appendChild(provinceCard);
    });
  }

  renderError() {
    this.innerHTML = `
			<section class="province-card rounded-[4px]">
				<h2 class="py-3 px-5 font-bold">Unable to fetch data, please try again!</h2>
			</section>
		`;
  }
}

customElements.define('province-list', ProvinceList);
