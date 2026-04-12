"use client";

export default function Home() {
  return (
    <main
      style={{
        margin: 0,
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #f5f3ef 0%, #ece8e1 100%)",
        fontFamily: "Arial, sans-serif",
        color: "#1f1f1f",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "60px 20px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "40px",
            alignItems: "center",
            flexWrap: "wrap",
            marginBottom: "60px",
          }}
        >
          <img
            src="/cover.png"
            alt="Love and Other Malfunctions cover"
            style={{
              width: "320px",
              maxWidth: "100%",
              borderRadius: "14px",
              boxShadow: "0 14px 35px rgba(0,0,0,0.25)",
              display: "block",
            }}
          />

          <div style={{ flex: "1", minWidth: "280px" }}>
            <p
              style={{
                margin: "0 0 10px 0",
                fontSize: "14px",
                fontWeight: "bold",
                letterSpacing: "1px",
                textTransform: "uppercase",
                color: "#7a5c2e",
              }}
            >
              Near-future survival thriller
            </p>

            <h1
              style={{
                fontSize: "56px",
                lineHeight: "1.05",
                margin: "0 0 20px 0",
              }}
            >
              Love and Other Malfunctions
            </h1>

            <p style={{ fontSize: "20px", lineHeight: "1.6", margin: 0 }}>
              In a world learning to hunt people, sometimes survival looks like
              loyalty, bad decisions, and dogs who refuse to give up on their humans.
            </p>

            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.8",
                marginTop: "18px",
                maxWidth: "700px",
              }}
            >
              When the lights start failing and the voices start offering help,
              Gwen tries to do what she has always done: keep people calm, keep
              them moving, keep them safe. But help is not always help anymore.
              Sometimes it is a lure. The worst part is that it does not sound
              evil. It sounds friendly.
            </p>

            <div
              style={{
                display: "flex",
                gap: "14px",
                flexWrap: "wrap",
                marginTop: "28px",
              }}
            >
              <a
                href="https://a.co/d/05yOk09r"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  padding: "16px 26px",
                  fontSize: "17px",
                  textDecoration: "none",
                  backgroundColor: "#111111",
                  color: "white",
                  borderRadius: "10px",
                  fontWeight: "bold",
                }}
              >
                Buy on Amazon
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61581804631102"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  padding: "16px 26px",
                  fontSize: "17px",
                  textDecoration: "none",
                  backgroundColor: "#1877f2",
                  color: "white",
                  borderRadius: "10px",
                  fontWeight: "bold",
                }}
              >
                Follow on Facebook
              </a>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
            marginBottom: "50px",
          }}
        >
          <section
            style={{
              background: "white",
              borderRadius: "14px",
              padding: "24px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            }}
          >
            <h2 style={{ marginTop: 0 }}>What readers can expect</h2>
            <ul style={{ paddingLeft: "20px", lineHeight: "1.8", marginBottom: 0 }}>
              <li>Near-future survival tension</li>
              <li>Pacific Northwest atmosphere</li>
              <li>A system that sounds helpful until it is not</li>
              <li>Dogs who are absolutely part of the story</li>
            </ul>
          </section>

          <section
            style={{
              background: "white",
              borderRadius: "14px",
              padding: "24px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            }}
          >
            <h2 style={{ marginTop: 0 }}>Look inside</h2>
            <p
              style={{
                fontStyle: "italic",
                lineHeight: "1.8",
                marginBottom: 0,
              }}
            >
              "Seattle was trying to look friendly again."
            </p>
            <p style={{ lineHeight: "1.8", marginBottom: 0 }}>
              Start with the unsettling opening, then follow Gwen, Diego, and
              the dogs into a world where comfort can be a trap and kindness can
              be a command.
            </p>
          </section>

          <section
            style={{
              background: "white",
              borderRadius: "14px",
              padding: "24px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            }}
          >
            <h2 style={{ marginTop: 0 }}>Stay updated</h2>
            <p style={{ lineHeight: "1.8" }}>
              Want updates, release news, and future books?
            </p>
            <form
              action="mailto:Charlene.McPaws@gmail.com"
              method="post"
              encType="text/plain"
            >
              <input
                type="email"
                placeholder="Your email"
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  fontSize: "16px",
                  marginBottom: "12px",
                  boxSizing: "border-box",
                }}
              />
              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "14px",
                  border: "none",
                  borderRadius: "10px",
                  backgroundColor: "#111111",
                  color: "white",
                  fontSize: "16px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Join the list
              </button>
            </form>
          </section>
        </div>

        <section
          style={{
            background: "white",
            borderRadius: "14px",
            padding: "24px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            marginBottom: "40px",
          }}
        >
          <h2 style={{ marginTop: 0 }}>Early reader reactions</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "18px",
            }}
          >
            <div
              style={{
                background: "#f8f6f2",
                borderRadius: "10px",
                padding: "18px",
              }}
            >
              <p style={{ marginTop: 0, fontStyle: "italic", lineHeight: "1.7" }}>
                "The premise is creepy in exactly the right way."
              </p>
              <p style={{ marginBottom: 0, fontWeight: "bold" }}>Early reader</p>
            </div>

            <div
              style={{
                background: "#f8f6f2",
                borderRadius: "10px",
                padding: "18px",
              }}
            >
              <p style={{ marginTop: 0, fontStyle: "italic", lineHeight: "1.7" }}>
                "The dogs completely sold me."
              </p>
              <p style={{ marginBottom: 0, fontWeight: "bold" }}>Early reader</p>
            </div>

            <div
              style={{
                background: "#f8f6f2",
                borderRadius: "10px",
                padding: "18px",
              }}
            >
              <p style={{ marginTop: 0, fontStyle: "italic", lineHeight: "1.7" }}>
                "Polite apocalypse is a terrifying vibe."
              </p>
              <p style={{ marginBottom: 0, fontWeight: "bold" }}>Early reader</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}