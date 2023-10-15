import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Link from 'next/link';

export default function Home() {

  return (
    <Layout home>
      <Head>
        <title>MINMAX</title>
      </Head>
      <section>
        <div className='flex flex-col'>
          <div class="hero h-min bg-base-100">
            <div class="hero-content text-center">
              <div class="max-w">
              <h1 class="text-5xl font-bold">MINMAX</h1>
                <p className='py-4'>
                  Welcome to Minmax – your ultimate skill-maximizing resource. Catering to athletes, artists, and life enthusiasts, our platform is designed to help you excel.
                  MinMax turns personal growth into a game, enabling you to track progress, set goals, and receive tailored recommendations to unlock your potential.
                  Focusing on meditation and more, Minmax covers nutrition, exercise, productivity, and creativity to help you reach new heights. Join us and level up your life today!</p>
              </div>
            </div>
          </div>
          <div className='container mx-auto p-4'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">

              <Link href='/Meditation' class="card bg-base-100 shadow-xl image-full">
                <div class="card-body items-center">
                  <h2 class="card-title text-center">Meditation</h2>
                  <p className=' text-center'>Develop mindfulness and inner peace through various meditation techniques, such as mindfulness, loving-kindness, and concentration meditation.</p>
                </div>
              </Link>
              <Link href='/Yoga' class="card bg-base-100 shadow-xl image-full">
                <div class="card-body items-center">
                  <h2 class="card-title text-center">Yoga</h2>
                  <p className=' text-center'> Improve flexibility, strength, and balance through the practice of physical postures, breathing exercises, and relaxation techniques.</p>
                </div>
              </Link><Link href='/Fitness' class="card bg-base-100 shadow-xl image-full">
                <div class="card-body items-center">
                  <h2 class="card-title text-center">Fitness</h2>
                  <p className=' text-center'>Boost your physical health and performance with targeted workouts, including strength training, cardio, and functional fitness.</p>
                </div>
              </Link><Link href='/Nutrition' class="card bg-base-100 shadow-xl image-full">
                <div class="card-body items-center">
                  <h2 class="card-title text-center">Nutrition</h2>
                  <p className=' text-center'>Learn how to fuel your body with a balanced diet, make healthier food choices, and manage your weight effectively.</p>
                </div>
              </Link><Link href='/Communication' class="card bg-base-100 shadow-xl image-full">
                <div class="card-body items-center">
                  <h2 class="card-title text-center">Communication</h2>
                  <p className=' text-center'>Enhance your interpersonal skills, such as active listening, empathy, and assertiveness, to build stronger relationships and navigate social situations with ease.</p>
                </div>
              </Link><Link href='/Streangth' class="card bg-base-100 shadow-xl image-full">
                <div class="card-body items-center">
                  <h2 class="card-title text-center">Strength Training</h2>
                  <p className=' text-center'>Increase your muscle strength and endurance through targeted exercises, such as weightlifting, bodyweight exercises, and resistance training.</p>
                </div>
              </Link><Link href='/Sleep' class="card bg-base-100 shadow-xl image-full">
                <div class="card-body items-center">
                  <h2 class="card-title text-center">Sleep Optimization</h2>
                  <p className=' text-center'>Improve your sleep quality and establish healthy sleep habits to boost your overall health, productivity, and well-being.</p>
                </div>
              </Link><Link href='/Cheats' class="card bg-base-100 shadow-xl image-full">
                <div class="card-body items-center">
                  <h2 class="card-title text-center">Cheat Codes</h2>
                  <p className=' text-center'>Unlock shortcuts, tips, and tricks to accelerate your progress in various skills, streamline your learning process, and achieve your goals more efficiently.</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}