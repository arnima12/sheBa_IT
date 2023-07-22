import React from "react";

const Profile = () => {
  return (
    <div className="font-jost">
      <div className="grid grid-cols-1">
        <div class="hero bg-base-200">
          <div class="hero-content flex-col lg:flex-row">
            <img
              src="/images/stock/photo-1635805737707-575885ab0820.jpg"
              class="max-w-sm rounded-lg shadow-2xl"
            />
            <div className="card-body">
              <h2 className="card-title">Himel Biswas</h2>
              <p>Product Designer </p>

              <div className="flex items-center gap-[26px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
                <p className="font-medium text-[14px]">Shewrapara Bus Stand</p>
              </div>
              <div className="flex items-center gap-[26px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
                <p className="font-medium text-[14px]">+8801724877440</p>
              </div>
              <div className="flex items-center gap-[26px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
                <p className="font-medium text-[14px]">himel.bauet@gmail.com</p>
              </div>

              <button
                className="btn"
                style={{
                  background:
                    "linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)",
                  borderRadius: "8px",
                  color: "#FFF",
                  fontSize: "14px",
                  fontWeight: 700,
                }}
              >
                Watch
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="card bg-base-100 shadow-xl rounded-box">
          <div className="card-body">
            <h2 className="card-title font-semibold text-2xl">About Me</h2>
            <p
              style={{
                fontSize: "16px",
                fontWeight: 400,
                color: "#333",
                fontFamily: "Jost",
              }}
            >
              Seeking a position to utilize my skills and abilities in the
              industry that offers professional growth while being resourceful,
              innovative and flexible. To gain utmost competence in the field of
              Computer Science & Engineering sector through enthusiasm, hard
              works, sincerity and brilliance. Moreover I want to develop my
              career in well-established and fast growing IT Industry.{" "}
            </p>
          </div>
        </div>

        <div className="card bg-base-300 shadow-xl rounded-box">
          <div className="card-body">
            <h2 className="card-title font-semibold text-2xl">Experiences</h2>
            <ul className="list-disc text-base">
              <li>
                Chief UI/UX Designer at DevsLeaders July 2020 - December 2021
              </li>
              <li>Intern at Pentester Space Dec 2021 – Jan 2022</li>
              <li>Intern at Lab AR Dec 2021 – Jan 2022</li>
            </ul>
            <div className="card-actions justify-start">
              <button
                className="btn"
                style={{
                  background:
                    "linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)",
                  borderRadius: "8px",
                  color: "#FFF",
                  fontSize: "14px",
                  fontWeight: 700,
                }}
              >
                + Add New{" "}
              </button>
            </div>
          </div>
        </div>

        <div className="card bg-base-300 shadow-xl rounded-box">
          <div className="card-body">
            <h2 className="card-title font-semibold text-2xl">Languages</h2>
            <ul className="list-disc text-base">
              <li>English </li>
              <li>Bnagla</li>
            </ul>
            <div className="card-actions justify-start">
              <button
                className="btn"
                style={{
                  background:
                    "linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)",
                  borderRadius: "8px",
                  color: "#FFF",
                  fontSize: "14px",
                  fontWeight: 700,
                }}
              >
                + Add New{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-300 shadow-xl rounded-box">
          <div className="card-body">
            <h2 className="card-title font-semibold text-2xl">
              Extra curricular activities
            </h2>
            <ul className="list-disc text-base">
              <li>Founder of a Startup (Team The Horsemen)</li>
              <li>
                Blockchain Olympiad Bangladesh 2022: Finalist (Team The
                Horsemen)
              </li>
              <li>
                HULT Regional 2021 (Ho Chi Minh City, Vietnam): Top 6 Finalist
              </li>
              <li>HULT On Campus 2020: 2nd Runner up, BAUET Campus</li>
              <li>BIG 2020-21: Top 20 (Team The Horsemen)</li>
              <li>Unibator 2021-22: Top 250 (Team The Horsemen)</li>
              <li>
                Student to Startup Chapter 2: Runner up (Team The Horsemen)
              </li>
              <li>Campus Director at HULT PRIZE at BAUET</li>
            </ul>

            <div className="card-actions justify-start">
              <button
                className="btn"
                style={{
                  background:
                    "linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)",
                  borderRadius: "8px",
                  color: "#FFF",
                  fontSize: "14px",
                  fontWeight: 700,
                }}
              >
                + Add New{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-300 shadow-xl rounded-box">
          <div className="card-body">
            <h2 className="card-title font-semibold text-2xl">Education</h2>
            <ul className="list-disc text-base">
              <li>
                B.Sc - CSE Bangladesh Army University of Engineering &
                Technology, Natore<br></br>
                Result: 3.17 <br></br>
                Passing Year: 2022{" "}
              </li>
            </ul>
            <div className="card-actions justify-start">
              <button
                className="btn"
                style={{
                  background:
                    "linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)",
                  borderRadius: "8px",
                  color: "#FFF",
                  fontSize: "14px",
                  fontWeight: 700,
                }}
              >
                + Add New{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-300 shadow-xl rounded-box">
          <div className="card-body">
            <h2 className="card-title font-semibold text-2xl">Research</h2>
            <ul className="list-disc text-base">
              <li>
                Title: Bangladesh National Election Voter Real Time Attendance
                and Verification Using Face Recognition. (Ongoing 2021-22)
              </li>
            </ul>
            <div className="card-actions justify-start">
              <button
                className="btn"
                style={{
                  background:
                    "linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)",
                  borderRadius: "8px",
                  color: "#FFF",
                  fontSize: "14px",
                  fontWeight: 700,
                }}
              >
                + Add New{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-300 shadow-xl rounded-box">
          <div className="card-body">
            <h2 className="card-title font-semibold text-2xl">Skills</h2>
            <ul className="list-disc text-base">
              <li>User Research</li>
              <li>UI &amp; UX Design</li>
              <li>Wireframing</li>
              <li>Prototyping</li>
              <li>Usability Testing</li>
              <li>3D Modelling</li>
              <li>2D Designing</li>
            </ul>

            <div className="card-actions justify-start">
              <button
                className="btn"
                style={{
                  background:
                    "linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)",
                  borderRadius: "8px",
                  color: "#FFF",
                  fontSize: "14px",
                  fontWeight: 700,
                }}
              >
                + Add New{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-300 shadow-xl rounded-box">
          <div className="card-body">
            <h2 className="card-title font-semibold text-2xl">References</h2>
            <ul className="list-disc text-base">
              <li>
                Maisha Hasnin <br></br>
                UI Designer <br></br>
                Pathao LTD <br></br>
                Phone: +8801856565601 <br></br>
                maisha.hasnin@pathao.com
              </li>
            </ul>

            <div className="card-actions justify-start">
              <button
                className="btn"
                style={{
                  background:
                    "linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)",
                  borderRadius: "8px",
                  color: "#FFF",
                  fontSize: "14px",
                  fontWeight: 700,
                }}
              >
                + Add New{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-300 shadow-xl rounded-box">
          <div className="card-body">
            <h2 className="card-title font-semibold text-2xl">
              Software Skills
            </h2>
            <ul className="list-disc text-base">
              <li>Figma</li>
              <li>Adobe XD</li>
              <li>Blender</li>
              <li>Adobe Illustrator</li>
              <li>Adobe Photoshop</li>
              <li>Microsoft Office</li>
              <li>Google Suite</li>
            </ul>

            <div className="card-actions justify-start">
              <button
                className="btn"
                style={{
                  background:
                    "linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)",
                  borderRadius: "8px",
                  color: "#FFF",
                  fontSize: "14px",
                  fontWeight: 700,
                }}
              >
                + Add New{" "}
              </button>
            </div>
          </div>
        </div>
        <div>
          <button
            className="btn"
            style={{
              background: "linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)",
              borderRadius: "32px",
              color: "#FFF",
              fontSize: "14px",
              fontWeight: 700,
              padding: "16px 32px",
              gap: "32px",
              alignItems: "flex-start",
            }}
          >
            + Add new section{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
