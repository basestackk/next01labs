export default function Contact() {
  return (
    <section id="Contact" className="py-32 bg-background-pure">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl font-light mb-8 text-primary tracking-tight">
            Let's talk
          </h2>
          <div className="w-24 h-px bg-primary-muted mx-auto mb-8"></div>
          <a
            href="mailto:support@next01labs.com"
            className="text-primary text-xl font-light hover:underline"
          >
            support@next01labs.com
          </a>
        </div>
      </div>
    </section>
  );
}

