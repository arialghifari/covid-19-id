import icSearch from '../../assets/ic_search.svg';

class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
			<section class="search flex items-center justify-center">
				<div class="relative w-1/3 my-10">
					<input
						type="text"
						placeholder="Cari Provinsi"
						class="shadow-sm border border-zinc-200 py-2 px-3 w-full rounded-md"
					/>
					<div class="absolute h-full top-0 right-1.5 flex items-center">
						<button class="bg-white p-1.5">
							<img src=${icSearch} alt="Search button" />
						</button>
					</div>
				</div>
			</section>	
		`;
  }
}

customElements.define('search-bar', SearchBar);
