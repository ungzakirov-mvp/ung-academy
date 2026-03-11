import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark-blue border-t-2 border-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-gold font-heading text-xl font-bold mb-4">UNG Academy</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Corporate University building capability across technical, digital and leadership domains.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { label: "Programmes", to: "/programmes" },
                { label: "Partners", to: "/partners" },
                { label: "Campus", to: "/campus" },
                { label: "Governance", to: "/governance" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-white/60 hover:text-gold text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contact</h4>
            <div className="space-y-2 text-white/60 text-sm">
              <p>Tashkent, Uzbekistan</p>
              <p>academy@ung.uz</p>
              <p>+998 71 200 00 00</p>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/10 text-center">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} UNG Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
