import "../styles/HashiraSelect.css";

const HashiraSelect = () => {

    const menuClose = () => {
        const menuButton = document.querySelector('.arrowButton');
        const hashiraMenu = document.querySelector('.hashiraMenu');
        menuButton.classList.toggle('close');
        hashiraMenu.classList.toggle('menuShift');
    }

  return (
    <>
      <div className="hashiraMenu menuShift">
        <button className="hashImgContainer giyu">
          <img className="hashImg" src="/images/Giyu.webp" alt="" />
        </button>
        <button className="hashImgContainer gyomei">
          <img className="hashImg" src="/images/Gyomei.webp" alt="" />
        </button>
        <button className="hashImgContainer rengoku">
          <img className="hashImg" src="/images/Kyojuro.webp" alt="" />
        </button>
        <button className="hashImgContainer mit">
          <img className="hashImg" src="/images/Mitsuri.webp" alt="" />
        </button>
        <button className="hashImgContainer mui">
          <img className="hashImg" src="/images/Muichiro.webp" alt="" />
        </button>
        <button className="hashImgContainer obanai">
          <img className="hashImg" src="/images/Obanai.webp" alt="" />
        </button>
        <button className="hashImgContainer sanemi">
          <img className="hashImg" src="/images/Sanemi.webp" alt="" />
        </button>
        <button className="hashImgContainer shinobu">
          <img className="hashImg" src="/images/Shinobu.webp" alt="" />
        </button>
        <button className="hashImgContainer tengen">
          <img className="hashImg" src="/images/Tengen.webp" alt="" />
        </button>

        <button id="test" className="arrowButton" onClick={() => menuClose()}>
          <img src="/images/arrow.svg" alt="" />
        </button>

      </div>
    </>
  );
};

export default HashiraSelect;
