import '../styles/Buttons.css'

const Buttons = () => {
  return (
    <>
      <div className="hashiraSelect">
        <button>
          <img className='giyuBtn' src="/images/Giyu.webp" alt="" />
        </button>
        <button>
          <img src="/images/Gyomei.webp" alt="" />
        </button>
        <button>
          <img src="/images/Kyojuro.webp" alt="" />
        </button>
        <button>
          <img src="/images/Mitsuri.webp" alt="" />
        </button>
        <button>
          <img src="/images/Muichiro.webp" alt="" />
        </button>
        <button>
          <img className='obanaiBtn' src="/images/Obanai.webp" alt="" />
        </button>
        <button>
          <img src="/images/Sanemi.webp" alt="" />
        </button>
        <button>
          <img src="/images/Shinobu.webp" alt="" />
        </button>
        <button>
          <img src="/images/Tengen.webp" alt="" />
        </button>
        {/* <button>test</button> */}
      </div>
    </>
  );
};

export default Buttons;
