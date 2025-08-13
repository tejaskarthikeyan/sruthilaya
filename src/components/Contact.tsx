import { User, Phone, PlayCircle } from "lucide-react";

const SpotifyIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.47 14.52a.75.75 0 0 1-1.03.23c-2.82-1.73-6.38-2.12-10.59-1.16a.75.75 0 1 1-.32-1.47c4.56-1 8.5-.57 11.6 1.32a.75.75 0 0 1 .23 1.08zm1.47-2.7a.94.94 0 0 1-1.29.29c-3.23-2-8.17-2.59-11.98-1.42a.94.94 0 1 1-.54-1.8c4.23-1.28 9.6-.64 13.23 1.61.44.27.58.85.29 1.32zm.13-2.85C15.2 8.2 8.8 8.01 5.6 9.01a1.13 1.13 0 1 1-.66-2.16c3.7-1.13 10.7-.91 14.25 1.81a1.13 1.13 0 0 1-1.23 1.91z"/>
  </svg>
);

const Contact = () => {
  const teamMembers = [
    { name: "Shobhikha", role: "President", phone: "+91 99529 89309" },
    { name: "Tejas Karthikeyan", role: "Vice President", phone: "+91 98846 60729" },
    { name: "Varshini", role: "Vice President", phone: "+91 93422 79385" },
    { name: "Shabareesh", role: "Marketing Head", phone: "+91 73388 92328" },
    { name: "Irfaan", role: "General Secretary", phone: "+91 88254 48171" }
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-black-card to-background relative"
      style={{ backgroundImage: 'var(--bg-pattern)' }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-gradient-to-r from-gold to-gold-dark rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-2xl text-black-deep">👥</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-oswald text-foreground mb-6 tracking-wide">
            Our Team
          </h2>
        </div>

        <div className="space-y-4 mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-card rounded-xl border border-border hover:border-gold/30 transition-colors"
            >
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-gold to-gold-dark rounded-full flex items-center justify-center mr-4">
                  <User className="w-5 h-5 text-black-deep" />
                </div>
                <div>
                  <h4 className="text-gold font-semibold">{member.name}</h4>
                  <p className="text-muted-foreground text-sm">{member.role}</p>
                </div>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-sm">{member.phone}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Most Recent Release */}
        <div className="bg-gradient-to-r from-gold/10 to-gold-dark/10 border border-gold/20 rounded-xl p-6 mb-12 flex items-center">
          <PlayCircle className="w-10 h-10 text-gold mr-4" />
          <div>
            <h4 className="text-gold font-semibold mb-1">Most Recent Release</h4>
            <a
              href="https://open.spotify.com/artist/6dqGpU6nZkqGtvfrknrF9f?si=rISKONVpRU2GTVQ32H9sJQ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-gold transition-colors font-inter underline"
            >
              Listen on Spotify
            </a>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex space-x-6 justify-center">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/sruthilaya_au/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full flex items-center justify-center bg-gold/10 hover:bg-gold transition-colors"
            aria-label="Instagram"
          >
            <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/@sruthilayaau7025"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full flex items-center justify-center bg-gold/10 hover:bg-gold transition-colors"
            aria-label="YouTube"
          >
            <svg className="w-7 h-7 text-gold" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21.8 8.001a2.75 2.75 0 0 0-1.93-1.94C18.2 6 12 6 12 6s-6.2 0-7.87.06A2.75 2.75 0 0 0 2.2 8.001 28.7 28.7 0 0 0 2 12a28.7 28.7 0 0 0 .2 3.999 2.75 2.75 0 0 0 1.93 1.94C5.8 18 12 18 12 18s6.2 0 7.87-.06a2.75 2.75 0 0 0 1.93-1.94A28.7 28.7 0 0 0 22 12a28.7 28.7 0 0 0-.2-3.999zM10 15.5v-7l6 3.5-6 3.5z"/>
            </svg>
          </a>

          {/* Spotify */}
          <a
            href="https://open.spotify.com/artist/6dqGpU6nZkqGtvfrknrF9f?si=rISKONVpRU2GTVQ32H9sJQ"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full flex items-center justify-center bg-gold/10 hover:bg-gold transition-colors"
            aria-label="Spotify"
          >
            <SpotifyIcon className="w-7 h-7 text-gold" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
