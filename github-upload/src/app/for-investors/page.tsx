import { getPostsByAudience } from '@/lib/posts';
import PublicationCard from '@/components/PublicationCard';
import Newsletter from '@/components/Newsletter';
import { HBarChart, VBarChart } from '@/components/Charts';

export const metadata = {
  title: 'For Investors — Security Ireland',
  description: 'Structural analysis of European defence procurement flows and institutional architecture.',
};

export default async function ForInvestors() {
  const posts = await getPostsByAudience('investors');

  return (
    <div className="bg-cream">
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '64px 24px 48px' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--color-terracotta)', marginBottom: '16px' }}>
          For Investors
        </div>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', fontWeight: 400, color: 'var(--color-ink)', marginBottom: '16px', maxWidth: '600px' }}>
          European defence economics — structural analysis for capital allocators
        </h1>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '16px', color: 'var(--color-graphite)', lineHeight: 1.75, maxWidth: '560px', marginBottom: '40px' }}>
          Defence procurement in Europe is undergoing a generational shift. We analyse the institutional architecture, spending commitments, and industrial policy shaping the sector — from the ReArm Europe plan to PESCO project pipelines.
        </p>

        {/* EU Defence Spending Growth */}
        <div style={{ marginBottom: '48px' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', fontWeight: 400, color: 'var(--color-ink)', marginBottom: '8px' }}>
            EU Defence Spending Growth
          </h2>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '14px', color: 'var(--color-graphite)', lineHeight: 1.65, marginBottom: '20px', maxWidth: '480px' }}>
            Year-on-year defence budget increases across major EU member states — the procurement cycle is accelerating.
          </p>
          <VBarChart data={[
            { label: 'Germany', value: 28, color: 'var(--color-forest)' },
            { label: 'France', value: 12, color: 'var(--color-fern)' },
            { label: 'Italy', value: 15, color: 'var(--color-fern)' },
            { label: 'Poland', value: 42, color: 'var(--color-forest)' },
            { label: 'Spain', value: 10, color: 'var(--color-sage)' },
            { label: 'Netherlands', value: 18, color: 'var(--color-fern)' },
            { label: 'Sweden', value: 22, color: 'var(--color-fern)' },
          ]} height={170} />
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--color-stone)', marginTop: '8px' }}>
            YoY % increase in defence budgets, 2024–25. Source: EDA, SIPRI
          </p>
        </div>

        {/* Procurement Priorities */}
        <div style={{ marginBottom: '48px' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', fontWeight: 400, color: 'var(--color-ink)', marginBottom: '8px' }}>
            EU Procurement Priority Areas
          </h2>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '14px', color: 'var(--color-graphite)', lineHeight: 1.65, marginBottom: '20px', maxWidth: '480px' }}>
            Share of planned procurement spend by capability domain across EU member states.
          </p>
          <HBarChart data={[
            { label: 'Air defence / IAMD', value: 28 },
            { label: 'Cyber & space', value: 22 },
            { label: 'Maritime platforms', value: 18 },
            { label: 'Land systems (MBT, IFV)', value: 16 },
            { label: 'Munitions & stockpiles', value: 12 },
            { label: 'Strategic transport', value: 4 },
          ]} />
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--color-stone)', marginTop: '16px' }}>
            Source: EDA Capability Development Plan, 2025 (illustrative)
          </p>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid var(--color-rule)' }} />
        <div className="label-caps" style={{ margin: '32px 0 16px' }}>Research &amp; Data</div>
        <div>
          {posts.map((post) => (
            <PublicationCard key={post.slug} post={post} />
          ))}
        </div>
        {posts.length === 0 && (
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '15px', color: 'var(--color-stone)', fontStyle: 'italic', padding: '32px 0' }}>Publications coming soon.</p>
        )}
      </section>
      <section style={{ borderTop: '1px solid var(--color-rule)' }}>
        <Newsletter />
      </section>
    </div>
  );
}
