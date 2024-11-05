import { useTranslation } from "next-i18next";
import RedDownloadIcon from "../../../components/icons/RedDownloadIcon";

export default function MediatekaPage() {
  const { t } = useTranslation();
  return (
    <section className="mediateka-section">
      <div className="container">
        <a href="#" className="title-downloads">
          <RedDownloadIcon />
          <h4>{t("Yuklab olinganlar")}</h4>
          <svg
            width="28"
            className="arrow"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.667 18.6666L16.3337 13.9999L11.667 9.33325"
              stroke="#69676B"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
        <div className="see-movies">
          <h2>
            <a href="#">{t("Mening ro’yxatim")}</a>
          </h2>
          <div className="slider-list-movies">
            {Array.from({ length: 10 }).map((_, i) => (
              <div className="item-slick" key={`my-list-${i}`}>
                <CarouselItem />
              </div>
            ))}
          </div>
        </div>
        <div className="see-movies">
          <h2>Ko’rishda davom eting</h2>
          <div className="slider-list-movies">
            {/* <div className="item-slick">@@include('parts/video-progress.html')</div>
                <div className="item-slick">@@include('parts/video-progress.html')</div> */}
          </div>
        </div>
        <div className="see-movies">
          <h2>
            <a href="#">Oxirgi ko’rilganlar</a>
          </h2>
          <div className="slider-list-movies">
            {/* <div className="item-slick">@@include('parts/slider-item.html')</div>
                <div className="item-slick">@@include('parts/slider-item.html')</div>
                <div className="item-slick">@@include('parts/slider-item.html')</div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
