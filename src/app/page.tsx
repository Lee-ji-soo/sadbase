import Image from 'next/image';

export default function Home() {
  return (
    <main className='relative flex justify-center items-center w-[100vw] h-[100vh] bg-[#fff]'>
      <div>
        <Image
          className='p-[20px]'
          priority={true}
          src='/bgs/sadness_transparent.png'
          alt='sadbase_ogImage'
          width={400}
          height={400}
        />
      </div>
      <a
        className='absolute bottom-[100px] hover:opacity-80'
        href='https://twitter.com/sadnessonbase'
        target='_blank'
      >
        <Image
          priority={true}
          src='/logos/twitter-x-logo.png'
          alt='twitter_logo'
          width={30}
          height={30}
        />
      </a>
    </main>
  );
}
