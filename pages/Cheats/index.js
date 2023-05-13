import Link from 'next/link';
import Head from 'next/head';
import Layout, { siteTitle } from '/components/layout';

export default function AboutMeditation() {
  return (
    <Layout>
      <Head>
        <title>Meditation</title>
      </Head>
      <main className="flex-col">
        <div class="hero bg-base-100">
          <div class="hero-content text-center">
            <div class="max-w">
              <h1 class="text-5xl font-bold">Meditation</h1>
              <p class="py-4">
                Meditation is invaluable for optimizing skills and performance. It helps improve focus, decision-making, motivation, and offers various health benefits. Regular practice cultivates self-awareness, leading to mindful decision-making. Integrating meditation into your routine can effectively support your goals and enhance overall success.</p>
            </div>
          </div>
          <body data-page="meditation">
          </body>
        </div><div className='container mx-auto p-4'>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href='/Meditation/GettingStarted' class="card bg-base-100 shadow-xl image-full">
              <div class="card-body items-center">
                <h2 class="card-title text-center">Getting Started</h2>
                <p className=' text-center'>Learn the basics of why and how we meditate</p>
              </div>
            </Link>
            <Link href='/Meditation/learnMeditation' class="card bg-base-100 shadow-xl image-full">
              <div class="card-body items-center">
                <h2 class="card-title text-center">Mindfulness Meditation</h2>
                <p className=' text-center'>This practice involves focusing on the present moment, observing thoughts, feelings, and sensations without judgment.</p>
              </div>
            </Link><Link href='/Meditation/learnMeditation' class="card bg-base-100 shadow-xl image-full">
              <div class="card-body items-center">
                <h2 class="card-title text-center">Concentration Meditation</h2>
                <p className=' text-center'>Concentration meditation involves focusing on a single point, such as your breath, a mantra, or an object, to develop deeper concentration.</p>
              </div>
            </Link><Link href='/Meditation/learnMeditation' class="card bg-base-100 shadow-xl image-full">
              <div class="card-body items-center">
                <h2 class="card-title text-center">Metta Meditation</h2>
                <p className=' text-center'>This meditation cultivates feelings of love and compassion towards oneself and others by silently repeating phrases like "May I be happy, may I be healthy, may I be safe, may I be at ease."</p>
              </div>
            </Link><Link href='/Meditation/learnMeditation' class="card bg-base-100 shadow-xl image-full">
              <div class="card-body items-center">
                <h2 class="card-title text-center">Body Scan Meditation</h2>
                <p className=' text-center'>This practice involves systematically focusing on different parts of the body, bringing awareness to sensations, and releasing tension.</p>
              </div>
            </Link><Link href='/Meditation/learnMeditation' class="card bg-base-100 shadow-xl image-full">
              <div class="card-body items-center">
                <h2 class="card-title text-center">Trataka Meditation</h2>
                <p className=' text-center'>In this meditation, the practitioner fixes their gaze on an external object, such as a candle flame, to develop concentration and strengthen the eye muscles.</p>
              </div>
            </Link><Link href='/Meditation/learnMeditation' class="card bg-base-100 shadow-xl image-full">
              <div class="card-body items-center">
                <h2 class="card-title text-center">Vipassana Meditation</h2>
                <p className=' text-center'>Vipassana is an ancient Buddhist meditation practice that aims to develop insight into the true nature of reality through self-observation and mindfulness.</p>
              </div>
            </Link><Link href='/Meditation/learnMeditation' class="card bg-base-100 shadow-xl image-full">
              <div class="card-body items-center">
                <h2 class="card-title text-center">Zazen Meditation</h2>
                <p className=' text-center'>Practiced in Zen Buddhism, Zazen involves sitting in an upright posture, focusing on the breath, and observing thoughts and feelings without judgment.</p>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
