import type { NextPage } from 'next'
import { FiArrowRight, FiMail } from 'react-icons/fi'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Home: NextPage<{
}> = () => (
  <>
    <Head>
      <title>HomepageWithAvatar - UI Library - 雨宫奈</title>
    </Head>

    <div className="container flex flex-col mx-auto flex-1 max-w-3xl px-6 justify-center">
      <div className="mb-2">
        <Image
          className="rounded-full transition-all duration-100"
          src="https://cdn.nir.land/image/home.png"
          alt="avatar"
          width={120}
          height={120}
          priority
        />
      </div>
      <h1 className="heading-text my-8 font-serif text-4xl">Username</h1>

      <p className="mb-8 leading-7">
        #Tag1 / #Tag2 / #Tag3 / #Tag4
      </p>

      <p className="mb-8 leading-7">
        There should be a very looooooooooooooooooooooooooong bio.
      </p>

      <p className="mt-8 leading-7">
        You can put a link here:{' '}
        <Link href="#">
          <a className="group inline-flex flex-wrap items-center">
            <span className="hover-links">Jump right in</span>
            <FiArrowRight className="h-4 w-4 transition-all duration-100 group-hover:translate-x-1" />
          </a>
        </Link>
      </p>

      <p className="mt-8 leading-7">
        Feel free to contact me.
      </p>

      <p className="leading-7">
        <FiMail size={15} className="mr-2 inline" />
        <a href="mailto:me@example.com" className="hover-links">
          me@example.com
        </a>
      </p>
    </div>
  </>
)

export default Home
