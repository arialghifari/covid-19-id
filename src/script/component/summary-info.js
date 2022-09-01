import bendera from '../../assets/flag.svg';
const axios = require('axios').default;

class SummaryInfo extends HTMLElement {
  connectedCallback() {
    this.getSummaryInfo();
  }

  async getSummaryInfo() {
    try {
      const res = await axios.get(
        'https://apicovid19indonesia-v2.vercel.app/api/indonesia'
      );

      if (res.status === 200) {
        this.data = res.data;
        this.render();
      } else {
        this.renderError();
      }
    } catch (e) {
      this.renderError();
    }
  }

  render() {
    this.innerHTML = `
			<section class="summary h-auto sm:h-[430px] p-5 sm:p-0 flex items-center justify-center">
				<section class="text-white bg-zinc-700/40 rounded-sm mb-5">
					<section class="country flex items-center gap-2 justify-center p-6">
						<img src=${bendera} alt="Bendera Indonesia" />
						<h2 class="text-2xl">INDONESIA</h2>
					</section>

					<hr class="border-zinc-700" />

					<section class="info flex flex-col sm:flex-row justify-between text-center gap-6 sm:gap-10 p-5">
						<div>
							<p class="kp">Kasus Positif</p>
							<p class="text-xl mt-1 font-medium">${this.data.positif.toLocaleString('id')}</p>
						</div>
						<div>
							<p>Sedang Dirawat</p>
							<p class="text-xl mt-1 font-medium text-orange-300">${this.data.dirawat.toLocaleString(
                'id'
              )}</p>
						</div>
						<div>
							<p>Sembuh</p>
							<p class="text-xl mt-1 font-medium text-green-300">${this.data.sembuh.toLocaleString(
                'id'
              )}</p>
						</div>
						<div>
							<p>Meninggal</p>
							<p class="text-xl mt-1 font-medium text-red-400">${this.data.meninggal.toLocaleString(
                'id'
              )}</p>
						</div>
					</section>
				</section>
			</section>
		`;
  }

  renderError(error = 'Unable to fetch data, please try again!') {
    this.innerHTML = `
			<section class="summary text-white bg-zinc-700/40 rounded-sm mb-5">
				<div class="flex items-center gap-2 justify-center p-6">
					<h2 class="text-2xl">${error}</h2>
				</div>
			</section>
		`;
  }
}

customElements.define('summary-info', SummaryInfo);
