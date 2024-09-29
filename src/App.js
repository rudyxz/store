import Css from "./App.module.css";

export default function App() {
  const products = [
    {
      name: "Alight Motion Premium 1 Tahun",
      desc: "Alight Motion Premium adalah aplikasi edit video dan animasi dengan fitur lengkap, seperti efek visual, keyframe animasi, dan ekspor tanpa watermark. Versi premium menawarkan lebih banyak efek, dukungan format ekspor, serta pengalaman editing yang lebih profesional, ideal untuk kreator di berbagai level.",
      type: "Product",
      image: "/scpushkontak.png",
      url: "https://t.me/Nexstoreidn",
    },
    {
      name: "Alight Motion Premium 2 Tahun",
      desc: "Tingkatkan efisiensi dan kinerja bot Node.js Anda dengan layanan sewa panel run bot kami yang menggunakan Pterodactyl Panel. Panel ini memberikan Anda kontrol penuh untuk menjalankan, mengelola, dan memonitor bot Anda dengan mudah melalui antarmuka yang user-friendly dan responsif.",
      type: "Product",
      image: "/sewapanel.png",
      url: "https://t.me/Nexstoreidn",
    },
  ];
  return (
    <div className={Css.container}>
      <header className={Css.header}>
        <div className={Css.logo}>
          <div className={Css.logo__image}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              width="1080px"
              height="2028px"
              viewBox="0 0 1080 2028"
            >
              <path d="M244.04292,1269.8152L304.94766,1097.9193L365.8524,926.02344L468.33466,1072.4344Q432.47052,1171.4117,396.60635,1270.389Q320.32465,1270.1022,244.04292,1269.8152 M834.15955,756.1787L757.3631,756.48175L680.56665,756.7847Q645.0392,853.43744,609.5117,950.09015Q660.8738,1023.84564,712.23584,1097.6011Q773.1977,926.8899,834.15955,756.1787 M377.4876,756.89886L238.85165,895.97107L369.60132,895.7865L631.1912,1269.7006L700.32104,1270.165L836.27905,1134.2373L713.04675,1133.7662L448.88055,756.9276L377.4876,756.89886" />
            </svg>
          </div>
          <h1 className={Css.logo__text}>Rudy store</h1>
        </div>
        <nav className={Css.navbar}>
          <ul className={Css.menu__link}>
            <li className={Css.nav__link}>
              <a
                href={"#"}
                target={"_blank"}
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
                </svg>
              </a>
            </li>
            <li className={Css.nav__link}>
              <a
                href={"https://wa.me/6285142611277"}
                target={"_blank"}
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                  <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                </svg>
              </a>
            </li>
            <li className={Css.nav__link}>
              <a
                href={"https://instagram.com/dy.tgh"}
                target={"_blank"}
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                  <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                  <path d="M16.5 7.5l0 .01" />
                </svg>
              </a>
            </li>
            <li className={Css.nav__link}>
              <a
                href={"https://youtube.com/@rudypreset636"}
                target={"_blank"}
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z" />
                  <path d="M10 9l5 3l-5 3z" />
                </svg>
              </a>
            </li>
            <li className={Css.nav__link}>
              <a href={"/#"} target={"_blank"} rel="noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z" />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <div className={Css.card}>
        <div className={Css.wrapper}>
          <div className={Css.about}>
            <h2>Tentang Rudy store</h2>
            <p>
              Hallo selamat datang, Rudy store menyediakan product aplikasi alight motion premium dengan harga murah.tenang penggunaan ini sangat aman dan ini beberapa keuntungannya,no watermark,unlock all effect,unlock fitur premium,support 5mb,support diatas 5mb,support xml,update dari PlayStore,100% aman.
            </p>
            <p>Temukan product dan layanan digital terbaik di Rudy store</p>
          </div>
          <a
            href={"https://whatsapp.com/channel/0029Vapklma2ZjCktJDTKd3w"}
            target={"_blank"}
            rel={"noreferrer"}
            className={Css.channel}
          >
            Whatsapp Chanel
          </a>
          <a
            href={"https://whatsapp.com/channel/0029Vapklma2ZjCktJDTKd3w"}
            target={"_blank"}
            rel={"noreferrer"}
            className={Css.testimoni}
          >
            Testimoni
          </a>
          <ul className={Css.menu}>
            {products &&
              products.map((product, index) => (
                <li className={Css.list} key={index}>
                  <img src={product.image} alt={product.name} />
                  <div className={Css.content}>
                    <h3 className={Css.title}>{product.name}</h3>
                    <p className={Css.desc}>{product.desc}</p>
                    <a href={product.url} target={"_blank"} rel={"noreferrer"}>
                      Order disni
                    </a>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
