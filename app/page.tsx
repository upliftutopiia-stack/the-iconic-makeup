"use client";

import { useEffect, useState } from "react";

const instagram = "https://www.instagram.com/theiconicmakeup/";
const email = "mailto:theiconicmakeup6@gmail.com";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className={`header ${menuOpen ? "menu-open" : ""}`}>
        <a className="brand" href="#home" onClick={closeMenu}>
          <span>THE ICONIC</span>
          <small>MAKEUP · MARYAM TOMAS</small>
        </a>

        <nav className="desktop-nav">
          <a href="#artistry">Artistry</a>
          <a href="#looks">Looks</a>
          <a href="#artist">Artist</a>
          <a href="#location">Sydney</a>
          <a href="#contact">Bookings</a>
        </nav>

        <a className="header-book" href={email}>
          BOOK <span>↗</span>
        </a>

        <button
          className={`menu-button ${menuOpen ? "active" : ""}`}
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
          <div className="mobile-top">
            <span>THE ICONIC MAKEUP</span>
            <span>SYDNEY · AU</span>
          </div>

          <nav>
            <a href="#artistry" onClick={closeMenu}>
              <small>01</small>
              Artistry
            </a>
            <a href="#looks" onClick={closeMenu}>
              <small>02</small>
              Looks
            </a>
            <a href="#artist" onClick={closeMenu}>
              <small>03</small>
              Artist
            </a>
            <a href="#location" onClick={closeMenu}>
              <small>04</small>
              Sydney
            </a>
            <a href="#contact" onClick={closeMenu}>
              <small>05</small>
              Bookings
            </a>
          </nav>

          <div className="mobile-actions">
            <a href={email} onClick={closeMenu}>
              EMAIL ↗
            </a>
            <a
              href={instagram}
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              INSTAGRAM ↗
            </a>
          </div>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-meta">
          <span>MARYAM TOMAS</span>
          <span>MAKEUP ARTIST</span>
          <span>SYDNEY · NSW</span>
        </div>

        <div className="hero-title">
          <span className="the">THE</span>
          <h1>ICONIC</h1>
          <span className="makeup">MAKEUP</span>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="chrome-orbit orbit-one" />
          <div className="chrome-orbit orbit-two" />

          <div className="editorial-face">
            <div className="face-shape">
              <div className="brow brow-left" />
              <div className="brow brow-right" />

              <div className="eye eye-left">
                <i />
              </div>

              <div className="eye eye-right">
                <i />
              </div>

              <div className="nose" />

              <div className="mouth">
                <span />
              </div>
            </div>

            <div className="hair hair-left" />
            <div className="hair hair-right" />
          </div>

          <span className="art-number">01</span>
          <span className="vertical-word">BEAUTY / EDITORIAL</span>
        </div>

        <div className="hero-bottom">
          <p>
            Makeup artistry by Maryam Tomas.
            <br />
            Based in Edensor Park, Sydney.
          </p>

          <a href={email} className="arrow-link">
            ENQUIRE ABOUT A BOOKING <span>↗</span>
          </a>
        </div>
      </section>

      <section className="statement" id="artistry">
        <div className="statement-index">
          <span>01</span>
          <p>THE ARTISTRY</p>
        </div>

        <div className="statement-copy">
          <h2>
            YOUR FACE.
            <br />
            YOUR ENERGY.
            <br />
            <em>YOUR LOOK.</em>
          </h2>

          <div className="statement-bottom">
            <p>
              Makeup should feel considered, expressive and completely at home
              on the person wearing it.
            </p>

            <div className="statement-mark" aria-hidden="true">
              M
            </div>
          </div>
        </div>
      </section>

      <section className="looks" id="looks">
        <div className="looks-heading">
          <div>
            <span>02 / BEAUTY DIRECTION</span>
            <h2>
              Choose your
              <br />
              <em>energy.</em>
            </h2>
          </div>

          <p>
            From soft definition to high-impact glam, your makeup can be shaped
            around the mood of the occasion and the way you want to feel.
          </p>
        </div>

        <div className="look-grid">
          <article className="look-card soft">
            <div className="look-number">01</div>

            <div className="eye-art soft-eye" aria-hidden="true">
              <div className="lash-line" />
              <span />
            </div>

            <div className="look-card-copy">
              <small>REFINED / LUMINOUS</small>
              <h3>SOFT</h3>
              <p>
                Polished beauty with a lighter touch and softly defined
                features.
              </p>
            </div>
          </article>

          <article className="look-card glam">
            <div className="look-number">02</div>

            <div className="lip-art" aria-hidden="true">
              <span />
            </div>

            <div className="look-card-copy">
              <small>DEFINED / ELEVATED</small>
              <h3>GLAM</h3>
              <p>
                A stronger beauty statement with definition, dimension and
                presence.
              </p>
            </div>
          </article>

          <article className="look-card iconic">
            <div className="look-number">03</div>

            <div className="star-art" aria-hidden="true">
              ✦
            </div>

            <div className="look-card-copy">
              <small>CONFIDENT / YOURS</small>
              <h3>ICONIC</h3>
              <p>
                A look with personality — created around you rather than a
                formula.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="marquee" aria-hidden="true">
        <div>
          <span>MAKE IT ICONIC</span>
          <i>✦</i>
          <span>MAKE IT ICONIC</span>
          <i>✦</i>
          <span>MAKE IT ICONIC</span>
        </div>
      </section>

      <section className="artist" id="artist">
        <div className="artist-visual" aria-hidden="true">
          <div className="artist-frame">
            <span className="artist-frame-label">MARYAM / MUA</span>

            <div className="profile-art">
              <div className="profile-head" />
              <div className="profile-hair" />
              <div className="profile-neck" />
              <div className="profile-shoulder" />
            </div>

            <span className="profile-script">M</span>
          </div>

          <div className="artist-caption">
            <span>THE ARTIST</span>
            <span>SYDNEY · NSW</span>
          </div>
        </div>

        <div className="artist-copy">
          <p className="section-label">03 / MARYAM TOMAS</p>

          <h2>
            Behind
            <br />
            <em>The Iconic.</em>
          </h2>

          <p className="artist-lead">
            Maryam Tomas is the makeup artist behind The Iconic Makeup, based
            in Edensor Park, Sydney.
          </p>

          <p className="body-copy">
            Each appointment starts with the person in the chair — the
            occasion, the inspiration and the kind of finish that feels right
            for them.
          </p>

          <a
            href={instagram}
            target="_blank"
            rel="noreferrer"
            className="dark-arrow-link"
          >
            SEE MARYAM&apos;S WORK <span>↗</span>
          </a>
        </div>
      </section>

      <section className="detail-section">
        <div className="detail-title">
          <p>04 / THE DETAILS</p>

          <h2>
            Beauty is in
            <br />
            the <em>details.</em>
          </h2>
        </div>

        <div className="detail-list">
          <div>
            <span>01</span>
            <h3>THE MOOD</h3>
            <p>
              Bring your inspiration, your outfit and the feeling you want the
              finished look to have.
            </p>
          </div>

          <div>
            <span>02</span>
            <h3>THE LOOK</h3>
            <p>
              Your makeup is approached as a complete look, with every feature
              working together.
            </p>
          </div>

          <div>
            <span>03</span>
            <h3>THE FINISH</h3>
            <p>
              The goal is a result that feels polished, confident and right for
              your occasion.
            </p>
          </div>
        </div>
      </section>

      <section className="location" id="location">
        <div className="location-copy">
          <p className="light-label">05 / SYDNEY</p>

          <h2>
            EDENSOR
            <br />
            PARK<span>.</span>
          </h2>

          <p>
            The Iconic Makeup is based in Edensor Park, Sydney, NSW.
          </p>

          <div className="location-coordinates">
            <span>SYDNEY</span>
            <span>NSW</span>
            <span>AUSTRALIA</span>
          </div>
        </div>

        <div className="location-art" aria-hidden="true">
          <div className="map-lines line-one" />
          <div className="map-lines line-two" />
          <div className="map-lines line-three" />

          <div className="location-dot">
            <i />
            <span>EDENSOR PARK</span>
          </div>

          <span className="location-letter">S</span>
        </div>
      </section>

      <section className="social">
        <div className="social-heading">
          <p>06 / FOLLOW THE WORK</p>

          <h2>
            SEE WHAT&apos;S
            <br />
            <em>ON THE FACE.</em>
          </h2>
        </div>

        <div className="social-grid" aria-hidden="true">
          <div className="social-tile tile-one">
            <span>01</span>
            <div className="graphic-eye">
              <i />
            </div>
          </div>

          <div className="social-tile tile-two">
            <span>02</span>
            <strong>ICONIC</strong>
          </div>

          <div className="social-tile tile-three">
            <span>03</span>
            <div className="graphic-lips">
              <i />
            </div>
          </div>

          <div className="social-tile tile-four">
            <span>04</span>
            <strong>TM</strong>
          </div>
        </div>

        <a
          href={instagram}
          target="_blank"
          rel="noreferrer"
          className="instagram-link"
        >
          @THEICONICMAKEUP <span>↗</span>
        </a>
      </section>

      <section className="contact" id="contact">
        <div className="contact-top">
          <p>07 / BOOKINGS</p>
          <span>SYDNEY · NSW</span>
        </div>

        <div className="contact-title">
          <span>READY?</span>

          <h2>
            LET&apos;S MAKE
            <br />
            IT <em>ICONIC.</em>
          </h2>
        </div>

        <div className="contact-bottom">
          <p>
            For booking enquiries, contact Maryam by email or send a message
            through Instagram.
          </p>

          <div className="contact-actions">
            <a href={email}>
              EMAIL MARYAM <span>↗</span>
            </a>

            <a href={instagram} target="_blank" rel="noreferrer">
              INSTAGRAM <span>↗</span>
            </a>
          </div>
        </div>

        <a className="contact-email" href={email}>
          theiconicmakeup6@gmail.com
        </a>
      </section>

      <footer>
        <a className="footer-brand" href="#home">
          <strong>THE ICONIC</strong>
          <span>MAKEUP</span>
        </a>

        <p>MARYAM TOMAS · MAKEUP ARTIST · SYDNEY</p>

        <div>
          <a href={email}>EMAIL</a>
          <a href={instagram} target="_blank" rel="noreferrer">
            INSTAGRAM
          </a>
        </div>
      </footer>
    </main>
  );
}