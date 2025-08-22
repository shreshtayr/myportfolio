import React from "react";

const styles = {
  section: {
    background: "#0f1115",
    color: "#dbe5f3",
    padding: "48px 40px",
  },
  container: {
    maxWidth: 1100,
    margin: "0 auto",
  },
  title: {
    fontSize: 44,
    fontWeight: 800,
    color: "#d6e6ff",
    margin: 0,
  },
  underline: {
    width: 80,
    height: 6,
    background: "#2aa0ff",
    borderRadius: 3,
    margin: "14px 0 26px 0",
  },
  intro: {
    lineHeight: 1.8,
    fontSize: 18,
    color: "#c7d5ea",
    marginBottom: 28,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 360px",
    gap: 28,
    alignItems: "start",
  },
  left: {},
  right: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  subTitle: {
    color: "#d6e6ff",
    fontSize: 34,
    fontWeight: 800,
    margin: "16px 0 18px",
  },
  infoGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 18,
  },
  item: {
    display: "flex",
    alignItems: "baseline",
    gap: 10,
    fontSize: 18,
    color: "#c7d5ea",
  },
  key: { fontWeight: 700, color: "#dbe7ff" },
  value: { color: "#b9c7db" },
  bullet: { color: "#2aa0ff", marginRight: 2, transform: "translateY(3px)" },
  illus: { width: "100%", maxWidth: 340, height: "auto", opacity: 0.95 },
  responsive: `@media (max-width: 960px)`,
};

function BulletIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={styles.bullet}>
      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function AboutUs({
  heading = "About",
  intro = `As a creative and quick-thinking individual with a penchant for online communication and relationship-building, I possess the ability to apply modern paradigms to construct highly scalable and performant systems. With over two years of industry experience managing client projects and more than four years of freelance experience designing and developing web applications for numerous clients, I bring a comprehensive skill set to the table. Armed with a Bachelor's degree in computer science, my passion for web development and digital marketing runs deep. I pride myself on being highly adaptable and agile, ready to tackle any challenge that comes my way.`,
  roleTitle = "Web Developer & Mobile Developer",
  detailsLeft = [
    { key: "Birthday", value: "25 March 2006" },
    { key: "Phone", value: "+91 63635 81393" },
    { key: "City", value: "Hassan, India" },
  ],
  detailsRight = [
    { key: "Age", value: "18" },
    { key: "Degree", value: "Diploma, CSE" },
    { key: "Freelance", value: "Available" },
  ],
  illustration = "images.png",
}) {
  return (
    <section id="about" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>{heading}</h2>
        <div style={styles.underline} />
        <p style={styles.intro}>{intro}</p>

        <div style={styles.grid}>
          <div style={styles.left}>
            <h3 style={styles.subTitle}>{roleTitle}</h3>

            <div style={styles.infoGrid}>
              <div>
                {detailsLeft.map((item) => (
                  <div key={item.key} style={styles.item}>
                    <BulletIcon />
                    <span style={styles.key}>{item.key}:&nbsp;</span>
                    <span style={styles.value}>{item.value}</span>
                  </div>
                ))}
              </div>
              <div>
                {detailsRight.map((item) => (
                  <div key={item.key} style={styles.item}>
                    <BulletIcon />
                    <span style={styles.key}>{item.key}:&nbsp;</span>
                    <span style={styles.value}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div style={styles.right}>
            <img alt="Developer at desk" src={illustration} style={styles.illus} />
          </div>
        </div>
      </div>
    </section>
  );
}


