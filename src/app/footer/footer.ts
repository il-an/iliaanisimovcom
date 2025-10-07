import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

interface ContactLink {
  readonly label: string;
  readonly href: string;
  readonly ariaLabel: string;
  readonly icon: 'email' | 'github' | 'telegram';
  readonly openInNewTab: boolean;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  protected readonly contactLinks = signal<ContactLink[]>([
    {
      label: 'hello@iliaanisimov.com',
      href: 'mailto:hello@iliaanisimov.com',
      ariaLabel: 'Email Ilia Anisimov',
      icon: 'email',
      openInNewTab: false
    },
    {
      label: 'github.com/il-an',
      href: 'https://github.com/il-an',
      ariaLabel: 'Visit Ilia Anisimov on GitHub',
      icon: 'github',
      openInNewTab: true
    },
    {
      label: 't.me/ilia_anis',
      href: 'https://t.me/ilia_anis',
      ariaLabel: 'Message Ilia Anisimov on Telegram',
      icon: 'telegram',
      openInNewTab: true
    }
  ]);
}
