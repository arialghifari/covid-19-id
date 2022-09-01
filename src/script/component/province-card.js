class ProvinceCard extends HTMLElement {
  set province(province) {
    this.render(province);
  }

  render(province) {
    this.innerHTML = `
      <section class="province-card rounded-[4px] h-full">
        <h2 class="py-3 px-5 font-bold">${province.provinsi}</h2>
        <hr class="border border-zinc-100" />

        <div class="grid grid-cols-2 gap-3 px-5 py-4">
          <div>
            <p class="text-sm">Kasus Positif</p>
            <p class="font-medium mt-0.5">${province.kasus.toLocaleString(
              'id'
            )}</p>
          </div>

          <div>
            <p class="text-sm">Dirawat</p>
            <p class="font-medium mt-0.5">${province.dirawat.toLocaleString(
              'id'
            )}</p>
          </div>

          <div>
            <p class="text-sm">Sembuh</p>
            <p class="font-medium mt-0.5">${province.sembuh.toLocaleString(
              'id'
            )}</p>
          </div>

          <div>
            <p class="text-sm">Meninggal</p>
            <p class="font-medium mt-0.5">${province.meninggal.toLocaleString(
              'id'
            )}</p>
          </div>
        </div>
      </section>
		`;
  }
}

customElements.define('province-card', ProvinceCard);
