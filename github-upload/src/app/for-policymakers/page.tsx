import { getPostsByAudience } from '@/lib/posts';
import PublicationCard from '@/components/PublicationCard';
import Newsletter from '@/components/Newsletter';
import { VBarChart, CapabilityGapChart } from '@/components/Charts';

export const metadata = {
  title: 'For Policymakers — Security Ireland',
  description: 'Concise, defensible analysis you can cite in briefings and debates.',
};

export default async function ForPolicymakers() {
  const posts = await getPostsByAudience('policymakers');

  return (
    <div className="bg-cream">
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '64px 24px 48px' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--color-terracotta)', marginBottom: '16px' }}>
          For Policymakers
        </div>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', fontWeight: 400, color: 'var(--color-ink)', marginBottom: '16px', maxWidth: '600px' }}>
          Concise, defensible analysis you can cite in briefings and debates
        </h1>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '16px', color: 'var(--color-graphite)', lineHeight: 1.75, maxWidth: '560px', marginBottom: '40px' }}>
          Every policy brief includes actionable recommendations backed by comparative EU data. Designed for TDs, Senators, civil servants, and ministerial advisers who need to move quickly.
        </p>

        {/* Defence Spending Comparison */}
        <div style={{ marginBottom: '48px' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', fontWeight: 400, color: 'var(--color-ink)', marginBottom: '8px' }}>
            Defence Spending as % of GDP
          </h2>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '14px', color: 'var(--color-graphite)', lineHeight: 1.65, marginBottom: '20px', maxWidth: '480px' }}>
            Ireland remains the lowest spender in the EU at 0.2% — less than half the next-lowest member state.
          </p>
          <VBarChart data={[
            { label: 'Ireland', value: 2, color: 'var(--color-terracotta)' },
            { label: 'Austria', value: 8, color: 'var(--color-sage)' },
            { label: 'Belgium', value: 11, color: 'var(--color-sage)' },
            { label: 'Denmark', value: 18, color: 'var(--color-fern)' },
            { label: 'France', value: 20, color: 'var(--color-fern)' },
            { label: 'Poland', value: 41, color: 'var(--color-forest)' },
            { label: 'Greece', value: 38, color: 'var(--color-forest)' },
          ]} height={160} />
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--color-stone)', marginTop: '8px' }}>
            Scale: 10 = 1.0% GDP. Source: SIPRI, 2025
          </p>
        </div>

        {/* Capability Gap Analysis */}
        <div style={{ marginBottom: '48px' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', fontWeight: 400, color: 'var(--color-ink)', marginBottom: '8px' }}>
            Capability Gap: Current vs Required
          </h2>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '14px', color: 'var(--color-graphite)', lineHeight: 1.65, marginBottom: '20px', maxWidth: '480px' }}>
            Even by 2028, government targets reach only 20–50% of what the Commission on the Defence Forces considers minimum for credible self-defence.
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

        <div className="label-caps" style={{ margin: '32px 0 16px' }}>Relevant Analysis</div>
        <div>
          {posts.map((post) => (
            <PublicationCard key={post.slug} post={post} />
          ))}
        </div>

        {posts.length === 0 && (
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '15px', color: 'var(--color-stone)', fontStyle: 'italic', padding: '32px 0' }}>
            Publications coming soon.
          </p>
        )}
      </section>

      <section style={{ borderTop: '1px solid var(--color-rule)' }}>
        <Newsletter />
      </section>
    </div>
  );
}
