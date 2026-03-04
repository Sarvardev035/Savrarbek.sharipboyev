export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="section-container flex flex-col items-center justify-between gap-4 text-sm text-gray-500 sm:flex-row">
        <p>&copy; {new Date().getFullYear()} Sarvarbek. All rights reserved.</p>
        <div className="flex gap-6">
          <a
            href="https://github.com/sarvarbek"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/sarvarbek"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href="mailto:sarvarbek@example.com"
            className="transition-colors hover:text-white"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
