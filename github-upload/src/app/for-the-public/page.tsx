import { getPostsByAudience } from '@/lib/posts';
import PublicationCard from '@/components/PublicationCard';
import Newsletter from '@/components/Newsletter';
import { DonutChart, Timeline, CapabilityGapChart } from '@/components/Charts';

export const metadata = {
  title: 'For the Public — Security Ireland',
  description: 'Clear, jargon-free explainers on Ireland\'s security landscape.',
};

export default async function ForThePublic() {
  const posts = await getPostsByAudience('public');

  return (
    <div className="bg-cream">
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '64px 24px 48px' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--color-terracotta)', marginBottom: '16px' }}>
          For the Public
        </div>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', fontWeight: 400, color: 'var(--color-ink)', marginBottom: '16px', maxWidth: '600px' }}>
          Security policy explained — clearly, honestly, without jargon
        </h1>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '16px', color: 'var(--color-graphite)', lineHeight: 1.75, maxWidth: '560px', marginBottom: '40px' }}>
          Ireland&apos;s security landscape is changing. These explainers help you understand the decisions being made, the institutions involved, and what it all means for the country.
        </p>

        {/* Public attitudes visualisation */}
        <div style={{ marginBottom: '48px' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', fontWeight: 400, color: 'var(--color-ink)', marginBottom: '8px' }}>
            Public Attitudes to Irish Neutrality
          </h2>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '14px', color: 'var(--color-graphite)', lineHeight: 1.65, marginBottom: '20px', maxWidth: '480px' }}>
            How Irish people view neutrality and EU defence cooperation, based on recent polling.
          </p>
          <DonutChart
            label="46%"
            segments={[
              { value: 46, color: 'var(--color-fern)', label: 'Support deeper EU defence cooperation' },
              { value: 33, color: 'var(--color-sage)', label: 'Prefer current neutrality' },
              { value: 21, color: 'var(--color-parchment)', label: 'Unsure / no opinion' },
            ]}
            size={150}
          />
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--color-stone)', marginTop: '16px' }}>
            Source: Eurobarometer / Red C, 2025 (illustrative)
          </p>
        </div>

        {/* Key dates */}
        <div style={{ marginBottom: '48px' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', fontWeight: 400, color: 'var(--color-ink)', marginBottom: '8px' }}>
            Key Moments in Irish Defence Policy
          </h2>
          <Timeline events={[
            { year: '1949', text: 'Ireland declines to join NATO, citing partition of Northern Ireland.' },
            { year: '1960', text: 'First Irish UN peacekeeping mission — the Congo. Ireland becomes one of the longest-serving peacekeeping nations.' },
            { year: '1999', text: 'Triple Lock established: Irish troops can only deploy abroad with UN, government, and D\u00e1il approval.' },
            { year: '2017', text: 'Ireland joins PESCO — the EU\'s permanent structured cooperation on defence.', highlight: true },
            { year: '2022', text: 'Commission on the Defence Forces recommends significant capability investment.' },
            { year: '2026', text: 'Ireland assumes EU Council Presidency in July — chairing defence policy discussions.', highlight: true },
          ]} />
        </div>

        {/* Capability Gap */}
        <div style={{ marginBottom: '48px' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', fontWeight: 400, color: 'var(--color-ink)', marginBottom: '8px' }}>
            What Ireland Has vs What It Needs
          </h2>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '14px', color: 'var(--color-graphite)', lineHeight: 1.65, marginBottom: '20px', maxWidth: '480px' }}>
            Ireland currently lacks several basic defence capabilities. This chart shows where we are now, where the government aims to be by 2028, and what the Commission on the Defence Forces says is the minimum for credible self-defence.
          </p>
          <CapabilityGapChart data={[
            { domain: 'Primary radar', current: 0, target: 50, selfDefence: 90 },
            { domain: 'Air defence', current: 0, target: 20, selfDefence: 90 },
            { domain: 'Naval armament', current: 5, target: 40, selfDefence: 90 },
            { domain: 'Anti-submarine', current: 0, target: 20, selfDefence: 80 },
            { domain: 'Intelligence', current: 20, target: 50, selfDefence: 90 },
            { domain: 'Cyber defence', current: 30, target: 60, selfDefence: 90 },
            { domain: 'Personnel', current: 50, target: 70, selfDefence: 90 },
          ]} />
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--color-stone)', marginTop: '12px' }}>
            Source: Commission on the Defence Forces (2022), Defence Forces capability reports. Security Ireland estimates.
          </p>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid var(--color-rule)' }} />
        <div className="label-caps" style={{ margin: '32px 0 16px' }}>Explainers &amp; Analysis</div>
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
