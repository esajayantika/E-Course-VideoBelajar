import "../styles/home.css";

import NavHome from "../component/molecule/Navhome.jsx";

function HomePage() {
  return (
    <>
      {/* Header Section */}
      <header>
        <div className="header-container">
          <img src="./public/Logo.svg" alt="logo video belajar" className="logo" />
          <button className="burger-menu" aria-label="Toggle Menu">
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>
          <div className="user-name">Kategori</div>
          <img className="user-icon" src="./public/Avatar.svg" alt="user-icon" />
        </div>
      </header>
      {/* Main Section */}
      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1>Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!</h1>
            <p>Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman anda</p>
            <button className="hero-button">Temukan Video Course Untuk Dipelajari!</button>
          </div>
        </section>
        {/* Courses Section */}
        <section className="courses-section">
          <div className="courses-title">
            <h1>Koleksi Video Pembelajaran Unggulan</h1>
            <h3>Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</h3>
          </div>
          <div className="courses-category">
            <button className="category active">Semua Kelas</button>
            <button className="category">Pemasaran</button>
            <button className="category">Desain</button>
            <button className="category">Pengembangan Diri</button>
            <button className="category">Bisnis</button>
          </div>
          {/* Syarat Mission Cuma HTML & CSS */}
          <div className="courses-grid">
            <article className="courses-content">
              <div className="detail-courses">
                <img src="./public/Hero/auditorcontent1.jpg" alt="detail-courses" />
                <div className="detail-info">
                  <h4>Big 4 Auditor Financial Analyst</h4>
                  <p className="detail-desc">Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...</p>
                  <div className="mentor">
                    <img src="./public/Hero/Avatar.svg" alt="profile-mentor" />
                    <div className="detail-mentor">
                      <h5>Jenna Ortega</h5>
                      <p>
                        Senior Accountant{" "}
                        <span className="mentor-company">
                          di <strong>Gojek</strong>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rate-content">
                <div className="rating">
                  <div className="stars">
                    <img src="./public/Hero/Star.svg" alt="star" />
                    <img src="./public/Hero/Star.svg" alt="star" />
                    <img src="./public/Hero/MaskedStar.svg" alt="star" />
                    <img src="./public/Hero/BlankStar.svg" alt="star" />
                    <img src="./public/Hero/BlankStar.svg" alt="star" />
                  </div>
                  <span className="rating-score">3.5 (86)</span>
                </div>
                <h5 className="price">Rp 300K</h5>
              </div>
            </article>
            <article className="courses-content">
              <div className="detail-courses">
                <img src="./public/Hero/auditorcontent2.jpg" alt="detail-courses" />
                <div className="detail-info">
                  <h4>Big 4 Auditor Financial Analyst</h4>
                  <p className="detail-desc">Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...</p>
                  <div className="mentor">
                    <img src="./public/Hero/Avatar.svg" alt="profile-mentor" />
                    <div className="detail-mentor">
                      <h5>Jenna Ortega</h5>
                      <p>
                        Senior Accountant{" "}
                        <span className="mentor-company">
                          di <strong>Gojek</strong>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rate-content">
                <div className="rating">
                  <div className="stars">
                    <img src="./public/Hero/Star.svg" alt="star" />
                    <img src="./public/Hero/Star.svg" alt="star" />
                    <img src="./public/Hero/MaskedStar.svg" alt="star" />
                    <img src="./public/Hero/BlankStar.svg" alt="star" />
                    <img src="./public/Hero/BlankStar.svg" alt="star" />
                  </div>
                  <span className="rating-score">3.5 (86)</span>
                </div>
                <h5 className="price">Rp 300K</h5>
              </div>
            </article>
            <article className="courses-content">
              <div className="detail-courses">
                <img src="./public/Hero/auditorcontent3.jpg" alt="detail-courses" />
                <div className="detail-info">
                  <h4>Big 4 Auditor Financial Analyst</h4>
                  <p className="detail-desc">Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...</p>
                  <div className="mentor">
                    <img src="./public/Hero/Avatar.svg" alt="profile-mentor" />
                    <div className="detail-mentor">
                      <h5>Jenna Ortega</h5>
                      <p>
                        Senior Accountant{" "}
                        <span className="mentor-company">
                          di <strong>Gojek</strong>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rate-content">
                <div className="rating">
                  <div className="stars">
                    <img src="./public/Hero/Star.svg" alt="star" />
                    <img src="./public/Hero/Star.svg" alt="star" />
                    <img src="./public/Hero/MaskedStar.svg" alt="star" />
                    <img src="./public/Hero/BlankStar.svg" alt="star" />
                    <img src="./public/Hero/BlankStar.svg" alt="star" />
                  </div>
                  <span className="rating-score">3.5 (86)</span>
                </div>
                <h5 className="price">Rp 300K</h5>
              </div>
            </article>
            <article className="courses-content">
              <div className="detail-courses">
                <img src="./public/Hero/auditorcontent4.jpg" alt="detail-courses" />
                <div className="detail-info">
                  <h4>Big 4 Auditor Financial Analyst</h4>
                  <p className="detail-desc">Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...</p>
                  <div className="mentor">
                    <img src="./public/Hero/Avatar.svg" alt="profile-mentor" />
                    <div className="detail-mentor">
                      <h5>Jenna Ortega</h5>
                      <p>
                        Senior Accountant{" "}
                        <span className="mentor-company">
                          di <strong>Gojek</strong>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rate-content">
                <div className="rating">
                  <div className="stars">
                    <img src="./public/Hero/Star.svg" alt="star" />
                    <img src="./public/Hero/Star.svg" alt="star" />
                    <img src="./public/Hero/MaskedStar.svg" alt="star" />
                    <img src="./public/Hero/BlankStar.svg" alt="star" />
                    <img src="./public/Hero/BlankStar.svg" alt="star" />
                  </div>
                  <span className="rating-score">3.5 (86)</span>
                </div>
                <h5 className="price">Rp 300K</h5>
              </div>
            </article>
            <article className="courses-content">
              <div className="detail-courses">
                <img src="./public/Hero/auditorcontent5.jpg" alt="detail-courses" />
                <div className="detail-info">
                  <h4>Big 4 Auditor Financial Analyst</h4>
                  <p className="detail-desc">Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...</p>
                  <div className="mentor">
                    <img src="./public/Hero/Avatar.svg" alt="profile-mentor" />
                    <div className="detail-mentor">
                      <h5>Jenna Ortega</h5>
                      <p>
                        Senior Accountant{" "}
                        <span className="mentor-company">
                          di <strong>Gojek</strong>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rate-content">
                <div className="rating">
                  <div className="stars">
                    <img src="./public/Hero/Star.svg" alt="star" />
                    <img src="./public/Hero/Star.svg" alt="star" />
                    <img src="./public/Hero/MaskedStar.svg" alt="star" />
                    <img src="./public/Hero/BlankStar.svg" alt="star" />
                    <img src="./public/Hero/BlankStar.svg" alt="star" />
                  </div>
                  <span className="rating-score">3.5 (86)</span>
                </div>
                <h5 className="price">Rp 300K</h5>
              </div>
            </article>
            <article className="courses-content">
              <div className="detail-courses">
                <img src="./public/Hero/auditorcontent6.jpg" alt="detail-courses" />
                <div className="detail-info">
                  <h4>Big 4 Auditor Financial Analyst</h4>
                  <p className="detail-desc">Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...</p>
                  <div className="mentor">
                    <img src="./public/Hero/Avatar.svg" alt="profile-mentor" />
                    <div className="detail-mentor">
                      <h5>Jenna Ortega</h5>
                      <p>
                        Senior Accountant{" "}
                        <span className="mentor-company">
                          di <strong>Gojek</strong>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rate-content">
                <div className="rating">
                  <div className="stars">
                    <img src="./public/Hero/Star.svg" alt="star" />
                    <img src="./public/Hero/Star.svg" alt="star" />
                    <img src="./public/Hero/MaskedStar.svg" alt="star" />
                    <img src="./public/Hero/BlankStar.svg" alt="star" />
                    <img src="./public/Hero/BlankStar.svg" alt="star" />
                  </div>
                  <span className="rating-score">3.5 (86)</span>
                </div>
                <h5 className="price">Rp 300K</h5>
              </div>
            </article>
            <article className="courses-content">
              <div className="detail-courses">
                <img src="./public/Hero/auditorcontent7.jpg" alt="detail-courses" />
                <div className="detail-info">
                  <h4>Big 4 Auditor Financial Analyst</h4>
                  <p className="detail-desc">Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...</p>
                  <div className="mentor">
                    <img src="./public/Hero/Avatar.svg" alt="profile-mentor" />
                    <div className="detail-mentor">
                      <h5>Jenna Ortega</h5>
                      <p>
                        Senior Accountant{" "}
                        <span className="mentor-company">
                          di <strong>Gojek</strong>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rate-content">
                <div className="rating">
                  <div className="stars">
                    <img src="./public/Hero/Star.svg" alt="star" />
                    <img src="./public/Hero/Star.svg" alt="star" />
                    <img src="./public/Hero/MaskedStar.svg" alt="star" />
                    <img src="./public/Hero/BlankStar.svg" alt="star" />
                    <img src="./public/Hero/BlankStar.svg" alt="star" />
                  </div>
                  <span className="rating-score">3.5 (86)</span>
                </div>
                <h5 className="price">Rp 300K</h5>
              </div>
            </article>
            <article className="courses-content">
              <div className="detail-courses">
                <img src="./public/Hero/auditorcontent8.jpg" alt="detail-courses" />
                <div className="detail-info">
                  <h4>Big 4 Auditor Financial Analyst</h4>
                  <p className="detail-desc">Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...</p>
                  <div className="mentor">
                    <img src="./public/Hero/Avatar.svg" alt="profile-mentor" />
                    <div className="detail-mentor">
                      <h5>Jenna Ortega</h5>
                      <p>
                        Senior Accountant{" "}
                        <span className="mentor-company">
                          di <strong>Gojek</strong>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rate-content">
                <div className="rating">
                  <div className="stars">
                    <img src="./public/Hero/Star.svg" alt="star" />
                    <img src="./public/Hero/Star.svg" alt="star" />
                    <img src="./public/Hero/MaskedStar.svg" alt="star" />
                    <img src="./public/Hero/BlankStar.svg" alt="star" />
                    <img src="./public/Hero/BlankStar.svg" alt="star" />
                  </div>
                  <span className="rating-score">3.5 (86)</span>
                </div>
                <h5 className="price">Rp 300K</h5>
              </div>
            </article>
            <article className="courses-content">
              <div className="detail-courses">
                <img src="./public/Hero/auditorcontent9.jpg" alt="detail-courses" />
                <div className="detail-info">
                  <h4>Big 4 Auditor Financial Analyst</h4>
                  <p className="detail-desc">Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...</p>
                  <div className="mentor">
                    <img src="./public/Hero/Avatar.svg" alt="profile-mentor" />
                    <div className="detail-mentor">
                      <h5>Jenna Ortega</h5>
                      <p>
                        Senior Accountant{" "}
                        <span className="mentor-company">
                          di <strong>Gojek</strong>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rate-content">
                <div className="rating">
                  <div className="stars">
                    <img src="./public/Hero/Star.svg" alt="star" />
                    <img src="./public/Hero/Star.svg" alt="star" />
                    <img src="./public/Hero/MaskedStar.svg" alt="star" />
                    <img src="./public/Hero/BlankStar.svg" alt="star" />
                    <img src="./public/Hero/BlankStar.svg" alt="star" />
                  </div>
                  <span className="rating-score">3.5 (86)</span>
                </div>
                <h5 className="price">Rp 300K</h5>
              </div>
            </article>
          </div>
        </section>
        {/* Call in Action section */}
        <section className="action-section">
          <div className="action-content">
            <div className="action-desc">
              <p className="action-detail1">NEWSLETTER</p>
              <h3 className="action-detail2">Mau Belajar Lebih Banyak?</h3>
              <p className="action-detail3">Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik harisenin.com</p>
            </div>
            <div className="action-input">
              <input className="action-field" placeholder="Masukkan Emailmu" />
              <button className="action-btn">Subscribe</button>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <section className="about-detail">
          <img src="./public/Logo.svg" alt="Logo" />
          <h5 className="about-outro">Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!</h5>
          <address className="course-address">
            <p className="address">
              Jl. Usman Effendi No.50 Lowokwaru, Malang <br />
              +62-877-7123-1234
            </p>
          </address>
          <div className="about-category">
            <div className="sub-category">
              <h4>Kategori</h4>
              <p>
                Digital &amp; Teknologi
                <br />
                Pemasaran
                <br />
                Manajemen Bisnis
                <br />
                Pengembangan Diri
                <br />
                Desain
              </p>
            </div>
            <div className="sub-category">
              <h4>Perusahaan</h4>
              <p>
                Tentang Kami
                <br />
                FAQ
                <br />
                Kebijakan Privasi
                <br />
                Ketentuan Layanan
                <br />
                Bantuan
              </p>
            </div>
            <div className="sub-category">
              <h4>Komunitas</h4>
              <p>
                Tips Sukses
                <br />
                Blog
              </p>
            </div>
          </div>
        </section>
        <section className="end-content">
          <div className="social-media">
            <img src="./public/linkedin-logo.svg" alt="linkedin" />
            <img src="./public/facebook-logo.svg" alt="facebook" />
            <img src="./public/instagram-logo.svg" alt="instagram" />
            <img src="./public/twitter-logo.svg" alt="twitter" />
          </div>
          <p className="copy-right">© 2026 Hari Kiamat All Rights Reserved</p>
        </section>
      </footer>
    </>
  );
}

export default HomePage;
