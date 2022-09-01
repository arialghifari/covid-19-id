import $ from 'jquery';

const main = () => {
  let data = JSON.parse(localStorage.getItem('covid19Id'));
  const provinceList = document.querySelector('province-list');
  const searchInput = document.querySelector('.searchInput');

  $('.searchInput').on('keyup', (e) => {
    if (!data) data = JSON.parse(localStorage.getItem('covid19Id'));

    const filteredProvince = data.filter((province) =>
      province.provinsi.includes(e.target.value.toUpperCase())
    );

    renderFilter(filteredProvince);
  });

  $('.searchBtn').on('click', () => {
    if (!data) data = JSON.parse(localStorage.getItem('covid19Id'));

    const filteredProvince = data.filter((province) =>
      province.provinsi.includes(searchInput.value.toUpperCase())
    );

    renderFilter(filteredProvince);
  });

  const renderFilter = (data) => {
    provinceList.innerHTML = '';

    if (data.length <= 0) {
      return (provinceList.innerHTML = `
        <section class="province-card rounded-[4px]">
          <h2 class="py-3 px-5 font-bold">Province not found!</h2>
        </section>
      `);
    }

    data.forEach((province) => {
      const provinceCard = document.createElement('province-card');
      provinceCard.province = province;

      provinceList.append(provinceCard);
    });
  };
};

export default main;
