import Link from 'next/link';
import Head from 'next/head';
import Layout from '/components/layout';

export default function YamaCourse() {
  return (
    <Layout>
      <Head>
        <title>Yama - The Ethical Standards of Yoga</title>
      </Head>
      <main className="flex-col">
        <div className="hero bg-base-100">
          <div className="flex-col hero-content text-center">
            <h1 className="text-5xl font-bold">Yama: The Ethical Foundations</h1>
            <p className="py-4">
              Yama represents the ethical and moral principles in yoga. As the foundation of the 8-fold path, it offers guidelines for how we relate to others and the world around us.
            </p>
          </div>
        </div>
        <div className="container mx-auto p-4 text-center">
          <h2 className="text-3xl font-semibold mb-4 text-center">The Five Yamas</h2>
          <div className="grid gap-4">
            <Link href="/Yama/Ahimsa">
              <div className="card bg-base-100 shadow-xl image-full hover:bg-base-200">
                <div className="card-body items-center">
                  <h3 className="card-title">Ahimsa - Non-Violence</h3>
                  <h4></h4>
                  <p>Embracing kindness, compassion, and abstaining from harm.</p>
                </div>
              </div>
            </Link>
            <Link href="/Yama/Satya">
              <div className="card bg-base-100 shadow-xl image-full hover:bg-base-200">
                <div className="card-body items-center">
                  <h3 className="card-title">Satya - Truthfulness</h3>
                  <p>Committing to truth in thought, speech, and action.</p>
                </div>
              </div>
            </Link>
            <Link href="/Yama/Asteya">
              <div className="card bg-base-100 shadow-xl image-full hover:bg-base-200">
                <div className="card-body items-center">
                  <h3 className="card-title">Asteya - Non-Stealing</h3>
                  <p>Respecting the rights and property of others, cultivating contentment.</p>
                </div>
              </div>
            </Link>

            <Link href="/Yama/Brahmacharya">
              <div className="card bg-base-100 shadow-xl image-full hover:bg-base-200">
                <div className="card-body items-center">
                  <h3 className="card-title">Brahmacharya - Right Use of Energy</h3>
                  <p>Directing our energy wisely, especially in relationships and personal pursuits.</p>
                </div>
              </div>
            </Link>

            <Link href="/Yama/Aparigraha">
              <div className="card bg-base-100 shadow-xl image-full hover:bg-base-200">
                <div className="card-body items-center">
                  <h3 className="card-title">Aparigraha - Non-Possessiveness</h3>
                  <p>Letting go of attachment and understanding the impermanence of possessions.</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
