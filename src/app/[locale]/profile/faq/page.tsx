export default function ProfileFaq() {
  return (
    <section className="section-faq">
      <div className="container">
        <div className="wrapper-sm">
          <h1>Tez tez beriladigan savollar</h1>
          <form className="search-faq">
            <input type="text" placeholder="Smart search" />
            <button type="submit">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1246_51567)">
                  <path
                    d="M11.25 17.25C14.5637 17.25 17.25 14.5637 17.25 11.25C17.25 7.93629 14.5637 5.25 11.25 5.25C7.93629 5.25 5.25 7.93629 5.25 11.25C5.25 14.5637 7.93629 17.25 11.25 17.25Z"
                    stroke="#69676B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.7508 18.7498L15.4883 15.4873"
                    stroke="#69676B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1246_51567">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </form>
          <div id="accordion">
            <div className="cardMain">
              <div className="cardHeader" id="headingOne">
                <div
                  className="toggle-title"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Tez tez beriladigan savollar Tez tez beriladigan savollar?
                </div>
              </div>

              <div
                id="collapseOne"
                className="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordion"
              >
                <div className="cardBody">
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Risus varius eu
                    feugiat et pretium ipsum orci mi. Aliquam id nunc tellus
                    facilisis imperdiet malesuada non quam. In egestas felis
                    lorem eget ut quam integer nisl.
                  </p>
                </div>
              </div>
            </div>
            <div className="cardMain">
              <div className="cardHeader" id="headingTwo">
                <div
                  className="toggle-title collapsed"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Tez tez beriladigan savollar
                </div>
              </div>
              <div
                id="collapseTwo"
                className="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordion"
              >
                <div className="cardBody">
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Risus varius eu
                    feugiat et pretium ipsum orci mi. Aliquam id nunc tellus
                    facilisis imperdiet malesuada non quam. In egestas felis
                    lorem eget ut quam integer nisl.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Risus varius eu
                    feugiat et pretium ipsum orci mi. Aliquam id nunc tellus
                    facilisis imperdiet malesuada non quam. In egestas felis
                    lorem eget ut quam integer nisl.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Risus varius eu
                    feugiat et pretium ipsum orci mi. Aliquam id nunc tellus
                    facilisis imperdiet malesuada non quam. In egestas felis
                    lorem eget ut quam integer nisl.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
