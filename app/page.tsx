// Packages
import Balancer from 'react-wrap-balancer';
import Link from 'next/link';
import Image from 'next/image';

// Components

export default function Home() {
  return (
    <div className='flex flex-col lg:flex-row mx-auto bg-primary'>
      <div className='bg-white flex flex-col shrink-0 lg:w-[400px] xl:w-[500px] p-8 py-12 lg:p-12'>
        <div className='lg:grow lg:pt-24 space-y-8 lg:space-y-10'>
          <Image src='/images/logo.png' width={300} height={200} alt='logo' className='mx-auto' priority />
          <p className='text-center max-w-lg mx-auto'>
            <Balancer>
              Just 3 Singaporean boys trying to make 60k MMR so they can retire in the mountains of Thailand.
            </Balancer>
          </p>
          <div className='w-full bg-secondary rounded-full translate-y-1/2 p-1'>
            <div className='relative bg-primary text-xs md:text-sm font-semibold text-white text-center p-3 leading-none rounded-full w-[15%]'>
              <Image
                src='/images/fire-drawing.png'
                width={32}
                height={32}
                alt='fire'
                className='absolute right-0 translate-x-1/2 bottom-1/4'
                priority
              />
            </div>
          </div>
          <div className='flex items-center justify-center space-x-12'>
            <Link href={'https://www.tiktok.com/@thejoblessclub?_t=8oeLDQhDjdm'}>
              <svg
                width='97'
                height='97'
                viewBox='0 0 97 97'
                xmlns='http://www.w3.org/2000/svg'
                className='w-12 h-12 fill-muted hover:fill-primary duration-200 hover:scale-[1.02]'>
                <g clipPath='url(#clip0_165_5334)'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M29.2428 75.4237C31.1635 76.4371 33.3026 76.9664 35.4744 76.9655C42.7079 76.9655 48.613 71.2115 48.8796 64.0402L48.9062 0H64.8841C64.8856 1.36019 65.012 2.71737 65.2617 4.05444H53.5627V4.05665H65.2617H69.5428C69.5405 9.41634 71.4832 14.5948 75.0102 18.6304C75.0117 18.6321 75.0132 18.6339 75.0147 18.6356C78.6126 20.9859 82.8181 22.2357 87.1157 22.2317V25.7902C88.6198 26.1123 90.175 26.2839 91.7745 26.2839V42.2662C83.7973 42.2754 76.0195 39.7742 69.5428 35.117V67.5903C69.5428 83.8059 56.3487 97 40.1309 97C36.0922 97.001 32.0968 96.1678 28.3951 94.5526C24.6961 92.9386 21.37 90.5786 18.6251 87.6202C18.623 87.6187 18.6211 87.6173 18.619 87.6159C11.0345 82.2907 6.0625 73.4842 6.0625 63.5359C6.0625 47.3181 19.2567 34.1217 35.4744 34.1217C36.8005 34.1281 38.1247 34.2246 39.4378 34.4105V38.1939C39.4378 38.1939 39.4378 38.1939 39.4378 38.1939L39.4377 50.7238C39.4377 50.7238 39.4377 50.7238 39.4377 50.7238L39.4378 38.1939C39.53 38.1922 39.622 38.189 39.714 38.1858C39.8523 38.181 39.9908 38.1762 40.1309 38.1762C41.457 38.1825 42.7812 38.279 44.0943 38.465V54.7783C42.8413 54.385 41.515 54.1562 40.1309 54.1562C36.5694 54.1603 33.155 55.5771 30.6369 58.0956C28.1188 60.6142 26.7026 64.0288 26.699 67.5903C26.6992 70.4033 27.5883 73.1443 29.2392 75.4219C29.2404 75.4225 29.2416 75.4231 29.2428 75.4237ZM46.3926 79.4682C50.5057 77.2861 53.3535 73.0242 53.5383 68.0924V68.0946C53.3535 73.0249 50.5057 77.2863 46.3926 79.4682ZM35.4756 50.1018C36.2979 50.1019 37.1005 50.1822 37.8802 50.3306C37.0885 50.1812 36.2836 50.1044 35.4756 50.1018ZM25.9812 54.0404C25.9812 54.0404 25.9812 54.0404 25.9812 54.0404ZM12.6591 78.0844C14.0241 81.6408 16.0612 84.8671 18.6126 87.609C16.0092 84.8231 13.999 81.583 12.6591 78.0844ZM35.4744 92.9456C35.4744 92.9456 35.4745 92.9456 35.4744 92.9456ZM64.8841 63.5336V31.0604C64.8841 31.0603 64.8841 31.0604 64.8841 31.0604V63.5336Z'
                  />
                </g>
              </svg>
            </Link>
            <Link href={'https://www.instagram.com/thejoblessclub/'}>
              <svg
                width='99'
                height='99'
                viewBox='0 0 99 99'
                xmlns='http://www.w3.org/2000/svg'
                className='w-12 h-12 fill-muted hover:fill-primary duration-200 hover:scale-[1.02]'>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M49.5 0C22.1619 0 0 22.1619 0 49.5C0 76.8381 22.1619 99 49.5 99C76.8381 99 99 76.8381 99 49.5C99 22.1619 76.8381 0 49.5 0ZM38.6168 23.2595C41.4323 23.1314 42.3323 23.1 49.4984 23.1C56.6666 23.1 57.5634 23.1314 60.3788 23.2595C63.1894 23.3882 65.1089 23.8332 66.7919 24.486C68.5299 25.1598 69.9984 26.0618 71.4669 27.5303C72.9355 28.9977 73.8375 30.4706 74.514 32.207C75.163 33.8856 75.6085 35.804 75.7405 38.6146C75.867 41.4306 75.9 42.3304 75.9 49.5003C75.9 56.6702 75.867 57.5678 75.7405 60.3838C75.6085 63.1932 75.163 65.1122 74.514 66.7914C73.8375 68.5272 72.9355 70.0001 71.4669 71.4675C70.0001 72.936 68.5294 73.8402 66.7936 74.5145C65.1138 75.1674 63.1932 75.6123 60.3827 75.7411C57.5667 75.8692 56.6696 75.9006 49.4992 75.9006C42.3298 75.9006 41.4306 75.8692 38.6146 75.7411C35.8046 75.6123 33.8856 75.1674 32.2059 74.5145C30.4706 73.8402 28.9977 72.936 27.5308 71.4675C26.0629 70.0001 25.1609 68.5272 24.486 66.7908C23.8337 65.1122 23.3888 63.1938 23.2595 60.3832C23.1319 57.5672 23.1 56.6702 23.1 49.5003C23.1 42.3304 23.133 41.43 23.259 38.614C23.3855 35.8046 23.831 33.8856 24.4855 32.2064C25.162 30.4706 26.064 28.9977 27.5325 27.5303C28.9999 26.0623 30.4728 25.1603 32.2092 24.486C33.8878 23.8332 35.8062 23.3882 38.6168 23.2595ZM49.4984 23.1C49.4997 23.1 49.5011 23.1 49.5025 23.1H49.4942C49.4956 23.1 49.497 23.1 49.4984 23.1Z'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M47.1338 27.8576C47.5936 27.8568 48.0883 27.8571 48.6222 27.8573L49.5021 27.8576C56.551 27.8576 57.3864 27.8829 60.17 28.0094C62.744 28.1271 64.1411 28.5572 65.0717 28.9185C66.3037 29.397 67.182 29.969 68.1055 30.893C69.0295 31.817 69.6015 32.6971 70.0811 33.9291C70.4425 34.8586 70.8731 36.2556 70.9903 38.8296C71.1168 41.6126 71.1443 42.4487 71.1443 49.4942C71.1443 56.5398 71.1168 57.3758 70.9903 60.1588C70.8726 62.7329 70.4425 64.1299 70.0811 65.0594C69.6026 66.2914 69.0295 67.1687 68.1055 68.0921C67.1815 69.0161 66.3042 69.5881 65.0717 70.0666C64.1422 70.4296 62.744 70.8587 60.17 70.9764C57.387 71.1029 56.551 71.1304 49.5021 71.1304C42.4527 71.1304 41.6172 71.1029 38.8342 70.9764C36.2602 70.8576 34.8631 70.4274 33.932 70.0661C32.7 69.5876 31.82 69.0156 30.896 68.0916C29.9719 67.1676 29.3999 66.2898 28.9203 65.0572C28.559 64.1277 28.1283 62.7307 28.0112 60.1566C27.8847 57.3736 27.8594 56.5376 27.8594 49.4876C27.8594 42.4377 27.8847 41.606 28.0112 38.823C28.1289 36.249 28.559 34.852 28.9203 33.9214C29.3988 32.6894 29.9719 31.8093 30.896 30.8853C31.82 29.9613 32.7 29.3893 33.932 28.9097C34.8626 28.5467 36.2602 28.1177 38.8342 27.9995C41.2696 27.8895 42.2134 27.8565 47.1338 27.851V27.8576ZM63.5943 32.2411C61.8453 32.2411 60.4263 33.6585 60.4263 35.408C60.4263 37.1571 61.8453 38.5761 63.5943 38.5761C65.3434 38.5761 66.7624 37.1571 66.7624 35.408C66.7624 33.659 65.3434 32.24 63.5943 32.24V32.2411ZM35.9445 49.5003C35.9445 42.0131 42.0149 35.9426 49.5021 35.9426H49.5015C56.9888 35.9426 63.0575 42.0131 63.0575 49.5003C63.0575 56.9875 56.9893 63.0552 49.5021 63.0552C42.0149 63.0552 35.9445 56.9875 35.9445 49.5003Z'
                />
                <path d='M49.5032 40.7002C54.3631 40.7002 58.3033 44.6399 58.3033 49.5003C58.3033 54.3601 54.3631 58.3004 49.5032 58.3004C44.6428 58.3004 40.7031 54.3601 40.7031 49.5003C40.7031 44.6399 44.6428 40.7002 49.5032 40.7002Z' />
              </svg>
            </Link>
            <Link href={'https://www.youtube.com/channel/UCd5Z9G0FitYRP9MSZb7aXXQ'}>
              <svg
                width='97'
                height='98'
                viewBox='0 0 97 98'
                xmlns='http://www.w3.org/2000/svg'
                className='w-12 fill-muted hover:fill-primary duration-200 hover:scale-[1.02]'>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M48.5 0C21.7142 0 0 21.938 0 49C0 76.062 21.7142 98 48.5 98C75.2858 98 97 76.062 97 49C97 21.938 75.2858 0 48.5 0ZM68.7116 32.1549C70.9376 32.772 72.6906 34.5904 73.2856 36.8995C74.3667 41.0845 74.3667 49.8167 74.3667 49.8167C74.3667 49.8167 74.3667 58.5485 73.2856 62.7338C72.6906 65.043 70.9376 66.8613 68.7116 67.4788C64.6775 68.6 48.5 68.6 48.5 68.6C48.5 68.6 32.3225 68.6 28.2881 67.4788C26.0621 66.8613 24.3091 65.043 23.7141 62.7338C22.6333 58.5485 22.6333 49.8167 22.6333 49.8167C22.6333 49.8167 22.6333 41.0845 23.7141 36.8995C24.3091 34.5904 26.0621 32.772 28.2881 32.1549C32.3225 31.0333 48.5 31.0333 48.5 31.0333C48.5 31.0333 64.6775 31.0333 68.7116 32.1549Z'
                />
                <path d='M43.6484 58.8V42.4667L56.5818 50.6337L43.6484 58.8Z' />
              </svg>
            </Link>
          </div>
          <div className='flex items-center justify-center space-x-6 pt-4'>
            <Link href={'https://www.linkedin.com/in/joesurf/'} target='_blank' className='relative text-center'>
              <Image src='/images/joseph.png' width={600} height={1000} alt='logo' className='mb-4' priority />
              <Image
                src='/images/joseph-drawing.png'
                width={40}
                height={40}
                alt='logo'
                className='absolute -right-4 -top-4'
                priority
              />
              <p className='text-sm'>Joseph</p>
            </Link>
            <Link href={'https://www.linkedin.com/in/seantanyurong/'} target='_blank' className='text-center relative'>
              <Image src='/images/sean.png' width={600} height={1000} alt='logo' className='mb-4' priority />
              <Image
                src='/images/sean-drawing.png'
                width={40}
                height={40}
                alt='logo'
                className='absolute -right-4 -top-4'
                priority
              />
              <p className='text-sm'>Sean</p>
            </Link>
            <Link
              href={'https://www.linkedin.com/in/jonas-tan-kah-kai/'}
              target='_blank'
              className='text-center relative'>
              <Image src='/images/jonas.png' width={600} height={1000} alt='logo' className='mb-4' priority />
              <Image
                src='/images/jonas-drawing.png'
                width={40}
                height={40}
                alt='logo'
                className='absolute -right-4 -top-4'
                priority
              />
              <p className='text-sm'>Jonas</p>
            </Link>
          </div>
        </div>
        <div className='text-center mx-auto max-w-xs pt-12 lg:pt-'>
          <p className='font-bold mb-2'>Wanna talk to us?</p>
          <p>
            Send us an email at{' '}
            <a className='underline font-bold text-primary' href='mailto:thejoblessclub@gmail.com'>
              thejoblessclub@gmail.com
            </a>
            !
          </p>
        </div>
      </div>
      <div className='lg:h-screen lg:overflow-scroll no-scrollbar w-full bg-primary relative'>
        <ul className='space-y-4 p-10'>
          <li className='bg-secondary hover:bg-zinc-100 hover:scale-[1.01] duration-200 rounded-lg w-full p-4 lg:p-6 cursor-pointer'>
            <a href='https://the100club.io/' target='_blank'>
              <div className='flex items-center mb-2'>
                <Image
                  src='/images/the100club.png'
                  width={25}
                  height={25}
                  alt='100 club logo'
                  className='block lg:hidden mr-2'
                />
                <Image
                  src='/images/the100club.png'
                  width={50}
                  height={50}
                  alt='100 club logo'
                  className='hidden lg:block mr-4'
                />
                <h3 className='font-black text-base lg:text-3xl'>The 100 Club</h3>
                <div className='bg-white rounded-full px-1 py-1 pl-5 relative block lg:hidden ml-auto'>
                  <Image
                    src='/images/fire-drawing.png'
                    width={15}
                    height={15}
                    alt='fire'
                    className='absolute left-2 top-1/2 -translate-y-1/2'
                  />
                  <p className='text-xs font-semibold w-[65px] text-center'>$920/mo</p>
                </div>
                <div className='bg-white rounded-full px-2 py-1 pl-12 relative hidden lg:block ml-auto'>
                  <Image
                    src='/images/fire-drawing.png'
                    width={35}
                    height={35}
                    alt='fire'
                    className='absolute left-3 top-1/2 -translate-y-1/2'
                  />
                  <p className='text-sm font-semibold w-[80px] text-center'>$920/mo</p>
                </div>
              </div>
              <p className='text-xs lg:text-base'>
                A private mastermind community for founders in Singapore. We run monthly casual events, masterminds, and
                coffee chats for our members.
              </p>
            </a>
          </li>
          <li className='bg-secondary hover:bg-zinc-100 hover:scale-[1.01] duration-200 rounded-lg w-full p-4 lg:p-6 cursor-pointer'>
            <a href='https://www.sharpknifesg.com/' target='_blank'>
              <div className='flex items-center mb-2'>
                <Image
                  src='/images/sharp-knife-club.png'
                  width={25}
                  height={25}
                  alt='100 club logo'
                  className='block lg:hidden mr-2'
                />
                <Image
                  src='/images/sharp-knife-club.png'
                  width={50}
                  height={50}
                  alt='100 club logo'
                  className='hidden lg:block mr-4'
                />
                <h3 className='font-black text-base lg:text-3xl'>Sharp Knife Club</h3>
                <div className='bg-white rounded-full px-1 py-1 pl-5 relative block lg:hidden ml-auto'>
                  <Image
                    src='/images/fire-drawing.png'
                    width={15}
                    height={15}
                    alt='fire'
                    className='absolute left-2 top-1/2 -translate-y-1/2'
                  />
                  <p className='text-xs font-semibold w-[65px] text-center'>$80/mo</p>
                </div>
                <div className='bg-white rounded-full px-2 py-1 pl-12 relative hidden lg:block ml-auto'>
                  <Image
                    src='/images/fire-drawing.png'
                    width={35}
                    height={35}
                    alt='fire'
                    className='absolute left-3 top-1/2 -translate-y-1/2'
                  />
                  <p className='text-sm font-semibold w-[80px] text-center'>$80/mo</p>
                </div>
              </div>
              <p className='text-xs lg:text-base'>
                A professional pick-up knife sharpening service for chefs and homecooks in Singapore.
              </p>
            </a>
          </li>
          <li className='bg-secondary hover:bg-zinc-100 hover:scale-[1.01] duration-200 rounded-lg w-full p-4 lg:p-6 cursor-pointer'>
            <a href='https://www.tehpengclub.com/' target='_blank'>
              <div className='flex items-center mb-2'>
                <Image
                  src='/images/tehpengclub.png'
                  width={25}
                  height={25}
                  alt='100 club logo'
                  className='block lg:hidden mr-2'
                />
                <Image
                  src='/images/tehpengclub.png'
                  width={50}
                  height={50}
                  alt='100 club logo'
                  className='hidden lg:block mr-4'
                />
                <h3 className='font-black text-base lg:text-3xl'>Teh Peng Club</h3>
                <div className='bg-white rounded-full px-1 py-1 pl-5 relative block lg:hidden ml-auto'>
                  <Image
                    src='/images/fire-drawing.png'
                    width={15}
                    height={15}
                    alt='fire'
                    className='absolute left-2 top-1/2 -translate-y-1/2'
                  />
                  <p className='text-xs font-semibold w-[65px] text-center'>Building</p>
                </div>
                <div className='bg-white rounded-full px-2 py-1 pl-12 relative hidden lg:block ml-auto'>
                  <Image
                    src='/images/fire-drawing.png'
                    width={35}
                    height={35}
                    alt='fire'
                    className='absolute left-3 top-1/2 -translate-y-1/2'
                  />
                  <p className='text-sm font-semibold w-[80px] text-center'>Building</p>
                </div>
              </div>
              <p className='text-xs lg:text-base'>
                We help telegram communities engage members by matching them for 1:1 chats every month - no fees.
              </p>
            </a>
          </li>
          <li className='bg-secondary hover:bg-zinc-100 hover:scale-[1.01] duration-200 rounded-lg w-full p-4 lg:p-6 cursor-pointer'>
            <a href='https://t.me/sparkk_social_bot' target='_blank'>
              <div className='flex items-center mb-2'>
                <Image
                  src='/images/sparkk.png'
                  width={25}
                  height={25}
                  alt='100 club logo'
                  className='block lg:hidden mr-2'
                />
                <Image
                  src='/images/sparkk.png'
                  width={50}
                  height={50}
                  alt='100 club logo'
                  className='hidden lg:block mr-4'
                />
                <h3 className='font-black text-base lg:text-3xl'>Sparkk</h3>
                <div className='bg-white rounded-full px-1 py-1 pl-5 relative block lg:hidden ml-auto'>
                  <Image
                    src='/images/fire-drawing.png'
                    width={15}
                    height={15}
                    alt='fire'
                    className='absolute left-2 top-1/2 -translate-y-1/2'
                  />
                  <p className='text-xs font-semibold w-[65px] text-center'>Building</p>
                </div>
                <div className='bg-white rounded-full px-2 py-1 pl-12 relative hidden lg:block ml-auto'>
                  <Image
                    src='/images/fire-drawing.png'
                    width={35}
                    height={35}
                    alt='fire'
                    className='absolute left-3 top-1/2 -translate-y-1/2'
                  />
                  <p className='text-sm font-semibold w-[80px] text-center'>Building</p>
                </div>
              </div>
              <p className='text-xs lg:text-base'>Spark conversation with fun prompts in your Telegram groups!</p>
            </a>
          </li>
          <li className='bg-secondary hover:bg-zinc-100 hover:scale-[1.01] duration-200 rounded-lg w-full p-4 lg:p-6 cursor-pointer'>
            <a href='https://www.meetyourdonna.com/' target='_blank'>
              <div className='flex items-center mb-2'>
                <Image
                  src='/images/donna.png'
                  width={25}
                  height={25}
                  alt='100 club logo'
                  className='block lg:hidden mr-2'
                />
                <Image
                  src='/images/donna.png'
                  width={50}
                  height={50}
                  alt='100 club logo'
                  className='hidden lg:block mr-4'
                />
                <h3 className='font-black text-base lg:text-3xl'>Donna</h3>
                <div className='bg-white rounded-full px-1 py-1 pl-5 relative block lg:hidden ml-auto'>
                  <Image
                    src='/images/grave-drawing.png'
                    width={15}
                    height={15}
                    alt='grave'
                    className='absolute left-2 top-1/2 -translate-y-1/2'
                  />
                  <p className='text-xs font-semibold w-[65px] text-center'>Archived</p>
                </div>
                <div className='bg-white rounded-full px-2 py-1 pl-12 relative hidden lg:block ml-auto'>
                  <Image
                    src='/images/grave-drawing.png'
                    width={35}
                    height={35}
                    alt='grave'
                    className='absolute left-3 top-1/2 -translate-y-1/2'
                  />
                  <p className='text-sm font-semibold w-[80px] text-center'>Archived</p>
                </div>
              </div>
              <p className='text-xs lg:text-base'>
                Donna is a full-stack team of 3 super virtual assistants that will take care of tasks that are stealing
                your energy, leaving you free to focus on what matters.
              </p>
            </a>
          </li>
          <li className='bg-secondary hover:bg-zinc-100 hover:scale-[1.01] duration-200 rounded-lg w-full p-4 lg:p-6 cursor-pointer'>
            <a href='https://100days-eight.vercel.app/' target='_blank'>
              <div className='flex items-center mb-2'>
                <Image
                  src='/images/100days.png'
                  width={25}
                  height={25}
                  alt='100 club logo'
                  className='block lg:hidden mr-2'
                />
                <Image
                  src='/images/100days.png'
                  width={50}
                  height={50}
                  alt='100 club logo'
                  className='hidden lg:block mr-4'
                />
                <h3 className='font-black text-sm lg:text-3xl'>100DAY$ Challenge</h3>
                <div className='bg-white rounded-full px-1 py-1 pl-5 relative block lg:hidden ml-auto'>
                  <Image
                    src='/images/grave-drawing.png'
                    width={15}
                    height={15}
                    alt='grave'
                    className='absolute left-2 top-1/2 -translate-y-1/2'
                  />
                  <p className='text-xs font-semibold w-[65px] text-center'>Archived</p>
                </div>
                <div className='bg-white rounded-full px-2 py-1 pl-12 relative hidden lg:block ml-auto'>
                  <Image
                    src='/images/grave-drawing.png'
                    width={35}
                    height={35}
                    alt='grave'
                    className='absolute left-3 top-1/2 -translate-y-1/2'
                  />
                  <p className='text-sm font-semibold w-[80px] text-center'>Archived</p>
                </div>
              </div>
              <p className='text-xs lg:text-base'>
                An accountability challenge to yourself, alongside like-minded others! Force yourself to start something
                new with the help of a community.
              </p>
            </a>
          </li>
        </ul>
        {/* <Image
          src='/images/team-drawing.png'
          width={400}
          height={400}
          alt='team'
          className='hidden absolute bottom-0 right-0 lg:block z-20'
        />
        <Image
          src='/images/team-drawing.png'
          width={300}
          height={300}
          alt='team'
          className='block lg:hidden ml-auto pt-10'
        /> */}
      </div>
    </div>
  );
}
