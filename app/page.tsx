"use client";

export default function Home() {
  return (
    <main
      style={{
        margin: 0,
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f5f3ef 0%, #ece8e1 100%)",
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
            src="/book-cover.png"
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

            <p style={{ lineHeight: "1.7", marginBottom: "16px", fontSize: "18px" }}>
              In a world learning to hunt people, survival looks a lot like loyalty, bad
              decisions, and dogs who refuse to give up on their humans.
            </p>

            <p style={{ lineHeight: "1.7", marginBottom: "24px", fontSize: "18px" }}>
              When the lights start failing and the voices start offering help, Gwen does
              what she&apos;s always done: keep people calm, keep them moving, keep them safe.
              But help isn&apos;t always help anymore. Sometimes it&apos;s a lure.
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a
                href="https://a.co/d/0cU5yhoe"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  padding: "14px 22px",
                  textDecoration: "none",
                  backgroundColor: "black",
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
                  padding: "14px 22px",
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
            display: "flex",
            gap: "24px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              flex: "1",
              minWidth: "260px",
              background: "white",
              borderRadius: "14px",
              padding: "24px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            }}
          >
            <p style={{ margin: 0, lineHeight: "1.8", fontSize: "16px" }}>
              A near-future survival story about loyalty, bad decisions, and dogs who
              refuse to give up on their humans, as people learn that not every offer of
              help is safe. Author proceeds support Woofington Manor Rescue & Sanctuary
              and the rescue dream behind it.
            </p>
          </div>

          <div
            style={{
              flex: "1",
              minWidth: "260px",
              background: "white",
              borderRadius: "14px",
              padding: "24px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            }}
          >
            <h2 style={{ marginTop: 0 }}>Look inside</h2>
            <p>
              <em>&quot;Seattle was trying to look friendly again.&quot;</em>
            </p>
            <p style={{ lineHeight: "1.8", marginBottom: 0 }}>
              Start with the opening, then follow Gwen, Diego, and the dogs into a world
              where comfort can be a trap and kindness can be a command.
            </p>
          </div>

          <div
            style={{
              flex: "1",
              minWidth: "260px",
              background: "white",
              borderRadius: "14px",
              padding: "24px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            }}
          >
            <h2 style={{ marginTop: 0 }}>Support Woofington</h2>
            <p style={{ lineHeight: "1.8", marginBottom: "16px" }}>
              Want to support the Woofington rescue dream directly?
            </p>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a
                href="https://www.paypal.com/donate/?hosted_button_id=D2MBGHWVN83CC"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  padding: "14px 22px",
                  textDecoration: "none",
                  backgroundColor: "#0070ba",
                  color: "white",
                  borderRadius: "10px",
                  fontWeight: "bold",
                }}
              >
                Give with PayPal
              </a>

              <a
                href="https://preview.mailerlite.io/forms/2263320/184574913455064418/share"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  padding: "14px 22px",
                  textDecoration: "none",
                  backgroundColor: "black",
                  color: "white",
                  borderRadius: "10px",
                  fontWeight: "bold",
                }}
              >
                Join the email list
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}