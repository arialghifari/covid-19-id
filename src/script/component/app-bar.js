class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
			<section class="py-6 text-center">
				<h1>
					<a href="/" class="font-playfair text-2xl text-white">
						Covid<span class="text-red-600 font-playfair text-3xl">19</span>Id
					</a>
				</h1>
			</section>
		`;
  }
}

customElements.define('app-bar', AppBar);
