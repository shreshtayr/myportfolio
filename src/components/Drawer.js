import React from "react";

function IconWrapper({ children, label, href }) {
  const content = (
    <span
      aria-hidden={!!href}
      style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 44, height: 44 }}
    >
      {children}
    </span>
  );

  if (href) {
    return (
      <a
        href={href}
        aria-label={label}
        target="_blank"
        rel="noreferrer noopener"
        style={styles.iconButton}
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" aria-label={label} style={styles.iconButton}>
      {content}
    </button>
  );
}

function NavItem({ icon, label, href, active = false }) {
  return (
    <a href={href} style={{ ...styles.navItem, ...(active ? styles.navItemActive : undefined) }}>
      <span style={{ ...styles.navIcon, ...(active ? styles.navIconActive : undefined) }}>{icon}</span>
      <span style={{ ...styles.navLabel, ...(active ? styles.navLabelActive : undefined) }}>{label}</span>
    </a>
  );
}

// Inline SVG icons (no external deps)
const Icons = {
  home: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 10.5L12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-10.5z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  user: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5z" stroke="currentColor" strokeWidth="1.7" />
      <path d="M3 21a9 9 0 0 1 18 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  ),
  doc: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="1.7" />
      <path d="M14 3v6h6" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  ),
  grid: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 3h8v8H3zM13 3h8v8h-8zM3 13h8v8H3zM13 13h8v8h-8z" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  ),
  services: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2l3 6 6 .9-4.5 4.4L18.6 20 12 16.8 5.4 20l1.1-5.7L2 8.9 8 8l4-6z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  ),
  mail: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" stroke="currentColor" strokeWidth="1.7" />
      <path d="M21 7l-9 6L3 7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  ),
  twitter: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 0 0 1.87-2.36 8.61 8.61 0 0 1-2.72 1.04A4.26 4.26 0 0 0 12.1 9.1a12.1 12.1 0 0 1-8.79-4.46 4.25 4.25 0 0 0 1.32 5.68 4.22 4.22 0 0 1-1.93-.53v.05a4.26 4.26 0 0 0 3.42 4.18 4.3 4.3 0 0 1-1.92.07 4.26 4.26 0 0 0 3.98 2.96A8.54 8.54 0 0 1 2 19.54a12.07 12.07 0 0 0 6.56 1.92c7.87 0 12.18-6.52 12.18-12.18 0-.19 0-.39-.01-.58A8.68 8.68 0 0 0 24 5.5a8.45 8.45 0 0 1-2.54.7z" />
    </svg>
  ),
  facebook: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 22v-9h3l1-4h-4V7c0-1.03.42-1.7 1.64-1.7H17V2.14C16.41 2.05 15.35 2 14.54 2 12 2 10.3 3.66 10.3 6.7V9H7v4h3v9h3z" />
    </svg>
  ),
  instagram: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm6.5-.75a1.25 1.25 0 1 0 1.25 1.25 1.25 1.25 0 0 0-1.25-1.25z" />
    </svg>
  ),
  github: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.41-1.35-1.79-1.35-1.79-1.1-.76.08-.74.08-.74 1.22.09 1.87 1.25 1.87 1.25 1.08 1.85 2.84 1.32 3.53 1 .11-.78.42-1.32.76-1.62-2.67-.3-5.47-1.33-5.47-5.93a4.65 4.65 0 0 1 1.24-3.23 4.3 4.3 0 0 1 .12-3.19s1-.32 3.3 1.23a11.4 11.4 0 0 1 6 0C16.77 5.4 17.77 5.72 17.77 5.72a4.3 4.3 0 0 1 .12 3.19 4.65 4.65 0 0 1 1.24 3.23c0 4.61-2.81 5.63-5.48 5.93.43.37.81 1.11.81 2.24v3.32c0 .32.22.7.83.58A12 12 0 0 0 12 .5z" />
    </svg>
  ),
  linkedin: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.98 3.5a2.5 2.5 0 1 0 .02 5 2.5 2.5 0 0 0-.02-5zM3 8.98h4v12.02H3zM9 8.98h3.84v1.64h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.65 4.77 6.08v6.35h-4V15.5c0-1.34-.02-3.07-1.87-3.07-1.88 0-2.17 1.46-2.17 2.97v5.6H9z" />
    </svg>
  ),
};

const styles = {
  drawer: {
    width: 320,
    minHeight: "100vh",
    background: "#0b1620",
    color: "#dbe5f3",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "32px 24px",
    boxSizing: "border-box",
  },
  avatarWrapper: {
    width: 140,
    height: 140,
    borderRadius: "50%",
    border: "6px solid #2a3542",
    overflow: "hidden",
    marginTop: 8,
    marginBottom: 18,
    boxShadow: "0 2px 0 0 rgba(0,0,0,0.25)",
  },
  avatar: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  name: {
    fontWeight: 800,
    fontSize: 28,
    letterSpacing: 0.2,
    color: "#f1f5ff",
    marginBottom: 18,
  },
  socials: {
    display: "flex",
    gap: 14,
    marginBottom: 24,
  },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: "50%",
    background: "#152231",
    color: "#c9d5e9",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    transition: "all .2s ease",
    border: "1px solid #243448",
  },
  nav: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 8,
    marginTop: 8,
  },
  navItem: {
    display: "flex",
    alignItems: "center",
    gap: 16,
    padding: "12px 16px",
    borderRadius: 10,
    textDecoration: "none",
    color: "#96a3b8",
    border: "1px solid transparent",
    transition: "all .15s ease",
  },
  navItemActive: {
    background: "#0f2030",
    borderColor: "#2a3b52",
    color: "#e6f0ff",
  },
  navIcon: {
    width: 28,
    height: 28,
    color: "#7f8da3",
    display: "inline-flex",
  },
  navIconActive: {
    color: "#33a7ff",
  },
  navLabel: {
    fontSize: 16,
  },
  navLabelActive: {
    color: "#f1f5ff",
  },
  footer: {
    marginTop: "auto",
    fontSize: 13,
    color: "#a3b1c7",
  },
  footerLink: {
    color: "#4fb1ff",
    textDecoration: "none",
  },
};

export default function Drawer({
  name = "Shreshta Y R",
  avatarUrl = "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=400&q=80&auto=format&fit=crop",
  social = {
    twitter: "#",
    facebook: "#",
    instagram: "#",
    github: "#",
    linkedin: "#",
  },
  current = "home",
}) {
  return (
    <aside style={styles.drawer}>
      <div style={styles.avatarWrapper}>
        <img src={avatarUrl} alt="Profile" style={styles.avatar} />
      </div>

      <div style={styles.name}>{name}</div>

      <div style={styles.socials}>
        <IconWrapper label="Twitter" href={social.twitter}>{Icons.twitter}</IconWrapper>
        <IconWrapper label="Facebook" href={social.facebook}>{Icons.facebook}</IconWrapper>
        <IconWrapper label="Instagram" href={social.instagram}>{Icons.instagram}</IconWrapper>
        <IconWrapper label="GitHub" href={social.github}>{Icons.github}</IconWrapper>
        <IconWrapper label="LinkedIn" href={social.linkedin}>{Icons.linkedin}</IconWrapper>
      </div>

      <nav style={styles.nav} aria-label="Primary">
        <NavItem icon={Icons.home} label="Home" href="#home" active={current === "home"} />
        <NavItem icon={Icons.user} label="About" href="#about" active={current === "about"} />
        <NavItem icon={Icons.doc} label="Resume" href="#resume" active={current === "resume"} />
        <NavItem icon={Icons.grid} label="Portfolio" href="#portfolio" active={current === "portfolio"} />
        <NavItem icon={Icons.services} label="Services" href="#services" active={current === "services"} />
        <NavItem icon={Icons.mail} label="Contact" href="#contact" active={current === "contact"} />
      </nav>

      <p style={styles.footer}>
        Designed by <a href="#" style={styles.footerLink}>Shreshta Y R</a>
      </p>
    </aside>
  );
}


