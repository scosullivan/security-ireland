import Link from 'next/link';
import { notFound } from 'next/navigation';
import Newsletter from '@/components/Newsletter';

const briefs: Record<string, {
  num: string;
  title: string;
  subtitle: string;
  summary: string;
  pdf: string;
  color: string;
}> = {
  'presidency-desk-primer': {
    num: '00',
    title: 'Presidency Desk Primer',
    subtitle: 'The Overarching Strategy',
    summary: 'The strategic primer for Ireland\u2019s EU Council Presidency. Defines the three-domain thesis \u2014 maritime surveillance, subsea infrastructure, cyber resilience \u2014 maps the four EU instruments in play, categorises the dossiers Ireland must lead versus shape versus facilitate, and sets out the cost of passive chairing.',
    pdf: '/pdfs/Presidency_Desk_Primer.pdf',
    color: 'var(--color-ink)',
  },
  'rearm-europe': {
    num: '01',
    title: 'ReArm Europe',
    subtitle: 'What Ireland Should Lock In',
    summary: 'The SAFE facility (\u20ac150 billion), EDIP (\u20ac1.5 billion), and the next MFF defence chapter will determine which kinds of defence contribution qualify for European support. If the rules reward only large-scale military procurement, Ireland is excluded. If they recognise domain-specific contribution, Ireland\u2019s geographic assets become fundable.',
    pdf: '/pdfs/ReArm_Europe.pdf',
    color: 'var(--color-terracotta)',
  },
  'pesco-strategic-review': {
    num: '02',
    title: 'PESCO Strategic Review',
    subtitle: 'What Ireland Should Lock In',
    summary: 'The strategic review is rewriting PESCO\u2019s binding commitments, how compliance is assessed, and how PESCO connects to EU funding. Ireland\u2019s 7 projects \u2014 all targeting maritime, subsea, cyber, and logistics \u2014 are the institutional evidence of its contribution. The revised framework either formalises Ireland\u2019s model or penalises it.',
    pdf: '/pdfs/PESCO_Strategic_Review.pdf',
    color: 'var(--color-terracotta)',
  },
  'maritime-surveillance': {
    num: '03',
    title: 'Maritime Surveillance Cooperation',
    subtitle: 'Locking In the Atlantic',
    summary: 'Ireland joined CISE in April 2025. The EUMSS progress report falls due during the Presidency. The EU Cable Action Plan commits \u20ac1 billion for submarine cable security. Ireland, as the Atlantic terminus of the transatlantic cable network, should be leading the Atlantic basin response \u2014 not consuming data others provide.',
    pdf: '/pdfs/Maritime_Surveillance_Cooperation.pdf',
    color: 'var(--color-fern)',
  },
  'hybrid-threats-cyber-defence': {
    num: '04',
    title: 'Hybrid Threats & Cyber Defence',
    subtitle: 'Ireland as EU Cyber Node',
    summary: 'On 16 March 2026, the Council approved conclusions on countering hybrid threats. Ireland will chair implementation from July. Four frameworks are being shaped: the EU Hybrid Toolbox, the Cyber Diplomacy Toolbox, the Cybersecurity Crisis Blueprint, and NIS2 implementation. Ireland\u2019s tech-sector concentration means EU cyber resilience runs through Dublin.',
    pdf: '/pdfs/Hybrid_Threats_and_Cyber_Defence.pdf',
    color: 'var(--color-fern)',
  },
};

export function generateStaticParams() {
  return Object.keys(briefs).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const brief = briefs[params.slug];
  if (!brief) return {};
  return {
    title: `${brief.title} — Presidency Desk Series — Security Ireland`,
    description: brief.summary,
  };
}

export default function BriefPage({ params }: { params: { slug: string } }) {
  const brief = briefs[params.slug];
  if (!brief) notFound();

  const slugs = Object.keys(briefs);
  const currentIndex = slugs.indexOf(params.slug);
  const prevSlug = currentIndex > 0 ? slugs[currentIndex - 1] : null;
  const nextSlug = currentIndex < slugs.length - 1 ? slugs[currentIndex + 1] : null;

  return (
    <div className="bg-cream">
      {/* Header */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '64px 24px 24px' }}>
        <Link
          href="/eu-presidency"
          style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--color-terracotta)', textDecoration: 'none', marginBottom: '24px', display: 'inline-block' }}
        >
          {'\u2190'} EU Presidency 2026
        </Link>

        <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', marginBottom: '8px' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: 700, color: brief.color }}>
            {brief.num}
          </span>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--color-stone)' }}>
            Presidency Desk Series
          </div>
        </div>

        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', fontWeight: 400, color: 'var(--color-ink)', marginBottom: '6px', maxWidth: '640px' }}>
          {brief.title}
        </h1>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.5px', color: 'var(--color-stone)', marginBottom: '16px' }}>
          {brief.subtitle}
        </div>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '15px', color: 'var(--color-graphite)', lineHeight: 1.75, maxWidth: '580px', marginBottom: '24px' }}>
          {brief.summary}
        </p>

        {/* Download button */}
        <a
          href={brief.pdf}
          download
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            color: 'var(--color-cream)',
            backgroundColor: brief.color,
            padding: '12px 24px',
            borderRadius: '2px',
            textDecoration: 'none',
            marginBottom: '32px',
          }}
        >
          Download PDF {'\u2193'}
        </a>
      </section>

      {/* PDF Viewer */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px 48px' }}>
        <div style={{
          border: '1px solid var(--color-rule)',
          borderRadius: '2px',
          overflow: 'hidden',
          backgroundColor: 'var(--color-parchment)',
        }}>
          <iframe
            src={brief.pdf}
            style={{
              width: '100%',
              height: '80vh',
              border: 'none',
              display: 'block',
            }}
            title={`${brief.title} — PDF`}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '12px' }}>
          <a
            href={brief.pdf}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              color: 'var(--color-terracotta)',
              textDecoration: 'none',
              borderBottom: '1px solid var(--color-terracotta)',
              paddingBottom: '1px',
            }}
          >
            Open in new tab {'\u2192'}
          </a>
        </div>
      </section>

      {/* Navigation between briefs */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 48px' }}>
        <hr style={{ border: 'none', borderTop: '1px solid var(--color-rule)', marginBottom: '24px' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {prevSlug ? (
            <Link
              href={`/eu-presidency/briefs/${prevSlug}`}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                color: 'var(--color-forest)',
                textDecoration: 'none',
              }}
            >
              {'\u2190'} Brief {briefs[prevSlug].num}: {briefs[prevSlug].title}
            </Link>
          ) : <div />}
          {nextSlug ? (
            <Link
              href={`/eu-presidency/briefs/${nextSlug}`}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                color: 'var(--color-forest)',
                textDecoration: 'none',
                textAlign: 'right',
              }}
            >
              Brief {briefs[nextSlug].num}: {briefs[nextSlug].title} {'\u2192'}
            </Link>
          ) : <div />}
        </div>
      </section>

      <section style={{ borderTop: '1px solid var(--color-rule)' }}>
        <Newsletter />
      </section>
    </div>
  );
}
