import { ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-surface border-t border-neutral-border py-8 pt-16">
      <div className="max-w-6xl mx-auto px-6 text-center text-neutral-text-secondary text-sm">
        <p className="mb-4">&copy; 2026 Player Realms Admin team.</p>
        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="https://playerrealms.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-primary transition-colors"
          >
            Player Realms <ExternalLink size={14} />
          </a>
          <a
            href="https://discord.playerrealms.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-primary transition-colors"
          >
            Player Realms Discord <ExternalLink size={14} />
          </a>
          <a
            href="https://discord.gg/GXsAXGGG95"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-primary transition-colors"
          >
            SDC in PR Discord <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
