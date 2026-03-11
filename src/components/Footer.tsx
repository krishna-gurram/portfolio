import { PERSONAL } from '../data/portfolio';

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-lg font-semibold text-white">
          Krishna<span className="text-teal-400">.</span>
        </span>
        <span className="text-sm text-zinc-500">
          Designed &amp; built by Krishna Gurram · {new Date().getFullYear()}
        </span>
        <span className="text-sm text-zinc-500">
          {PERSONAL.location} · Open to Bay Area &amp; Remote
        </span>
      </div>
    </footer>
  );
}
