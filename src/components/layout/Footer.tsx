import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import type { Footer as FooterType, SiteSettings } from "@/lib/types";

interface FooterProps {
  data: FooterType;
  settings: SiteSettings;
}

export default function Footer({ data, settings }: FooterProps) {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="text-xl font-semibold">{settings.siteName}</span>
            </Link>
            <p className="text-sm text-gray-500 max-w-xs">
              {data.tagline}
            </p>
          </div>

          {data.columns.map((column) => (
            <div key={column.title}>
              <h4 className="font-medium text-gray-900 mb-3">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            {data.copyright}
          </p>
          <div className="flex gap-4">
            {data.socialLinks.map((social) => (
              <Link key={social.platform} href={social.url} className="text-sm text-gray-500 hover:text-gray-900">
                {social.platform}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
