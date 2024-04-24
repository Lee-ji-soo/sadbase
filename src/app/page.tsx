import Image from 'next/image';

export default function Home() {
  return (
    <>
      <main className='relative flex justify-center items-center w-[100vw] h-[100svh] bg-[#fff]'>
        <div>
          <Image
            className='p-[40px]'
            priority={true}
            src='/bgs/sd.gif'
            alt='sadbase_ogImage'
            width={400}
            height={400}
          />
        </div>
        <a
          className='absolute bottom-[80px] hover:opacity-80'
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
      <a className='hidden' href='https://raritysniper.com/nft-drops-calendar'>
        NFT Drops
      </a>
    </>
  );
}
