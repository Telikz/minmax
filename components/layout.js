import Link from 'next/link';
import Head from 'next/head';


export default function Layout({ children, home }) {
  return (
    
    <div className="min-h-screen flex flex-col" data-theme="dark">
      <Head>
        <link rel='icon' href='/icon2.png'/>
      </Head>
      <div class="navbar bg-base-200 mb-auto">
        <div class="dropdown dropdown-bottom">
          <label tabindex="0" class="btn m-1 btn-ghost"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></label>
          <ul tabindex="0" class="menu dropdown-content p-2 shadow bg-base-200 rounded-box w-52 mt-3">
            <li><Link href='/Meditation/'>Meditation</Link></li>
            <li><Link href='/Yoga/'>Yoga</Link></li>
            <li><Link href='/Fitness'>Fitness</Link></li>
            <li><Link href='/Nutrition'>Nutrition</Link></li>
            <li><Link href='/Streangth'>Streangth</Link></li>
            <li><Link href='/Sleep'>Sleep</Link></li>
            <li><Link href='/Cheats'>Cheats</Link></li>
            <li><Link href='/Chat'>Chat</Link></li>
          </ul>
        </div>
        <div class="flex-1">
          <Link href='//' class="btn btn-ghost text-primary normal-case text-xl font-extrabold">MINMAX</Link>
        </div>
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost rounded-btn primary"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
          </label>
          <ul tabindex="0" class="menu dropdown-content p-2 shadow bg-base-200 rounded-box w-52 mt-4">
          </ul>
        </div>
      </div>
      <main>{children}</main>

      <footer class="footer bg-cover text-base-content mt-auto font-extralight">
        <div>
          <p className='text-xs'>©2023 Minmax.</p>
        </div>
      </footer>
    </div>
  );
}