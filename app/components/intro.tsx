import LinkedinIcon from "~/assets/icons/linkedin-in.svg?react";
import TwitterIcon from "~/assets/icons/x-twitter.svg?react";
import GithubIcon from "~/assets/icons/github.svg?react";
import MailIcon from "~/assets/icons/envelope-regular.svg?react";

export function Intro() {
  return (
    <div className="grid gap-2 text-base font-medium">
      <section title="introduction" className="grid gap-2">
        <p>
          Hi, I'm Sudhanshu Ranjan. I'm a frontend developer with 5 years of
          experience. I like building applications that are fast, accessible,
          and responsive. I believe that everyone should be able to use the web,
          and accessiblity is a key part of enabling that.
        </p>
        <p>
          I'm currently working as a senior frontend developer at{" "}
          <a
            href="https://fletch.co"
            target="_blank"
            rel="noreferrer noopenner"
            className="text-accent focus:rounded focus:outline-none focus:ring-[1px] focus:ring-accent focus:ring-offset-2"
          >
            Fletch
          </a>
          .
        </p>
        <p>
          I like learning new things and sharing my knowledge with others. When
          I'm not coding, I'm probably playing video games, watching anime or
          reading books.
        </p>
      </section>

      <section title="experience">
        <h2 className="text-xl font-bold">Experience</h2>
        <ul>
          <li>
            <h3 className="text-lg font-semibold">Senior Frontend Developer</h3>
            <p className="text-base">
              <a
                href="https://fletch.co/"
                target="_blank"
                rel="noreferrer"
                className="text-accent focus:rounded focus:outline-none focus:ring-[1px] focus:ring-accent focus:ring-offset-2"
              >
                Fletch
              </a>
              <span className="text-secondary">, Jan 2023 - present</span>
            </p>
          </li>
          <li>
            <h3 className="text-lg font-semibold">Software Engineer</h3>
            <p className="text-base">
              <a
                href="https://interviewkickstart.com/"
                target="_blank"
                rel="noreferrer"
                className="text-accent focus:rounded focus:outline-none focus:ring-[1px] focus:ring-accent focus:ring-offset-2"
              >
                Interview Kickstart
              </a>
              <span className="text-secondary">, Nov 2021 - Nov 2022</span>
            </p>
          </li>
          <li>
            <h3 className="text-lg font-semibold">Software Engineer</h3>
            <p className="text-base">
              <a
                href="https://paytm.com/"
                target="_blank"
                rel="noreferrer"
                className="text-accent hover:underline focus:rounded focus:outline-none focus:ring-[1px] focus:ring-accent focus:ring-offset-2"
              >
                Paytm
              </a>
              <span className="text-secondary">, Aug 2021 - Nov 2021</span>
            </p>
          </li>
          <li>
            <h3 className="text-lg font-semibold">Software Engineer</h3>
            <p className="text-base">
              <a
                href="https://www.aptusdatalabs.com/"
                target="_blank"
                rel="noreferrer"
                className="text-accent hover:underline focus:rounded focus:outline-none focus:ring-[1px] focus:ring-accent focus:ring-offset-2"
              >
                Aptus Data Labs
              </a>
              <span className="text-secondary">, July 2019 - Aug 2021</span>
            </p>
          </li>
        </ul>
      </section>
      <section title="skills">
        <h2 className="text-xl font-bold">Skills</h2>
        <ul className="max-w-lg columns-2 text-secondary">
          <li>React.js</li>
          <li>Next.js</li>
          <li>Remix</li>
          <li>TypeScript</li>
          <li>Tailwind CSS</li>
          <li>Git</li>
          <li>Docker</li>
          <li>Python</li>
          <li>Django</li>
        </ul>
      </section>
      <section title="contact">
        <h2 className="text-xl font-bold">Contact</h2>
        <ul className="flex gap-4 pt-2">
          <li>
            <a
              href="https://www.linkedin.com/in/perfectsudh/"
              target="_blank"
              rel="noreferrer"
              className="text-accent hover:underline focus:outline-offset-2 focus:outline-accent"
            >
              <LinkedinIcon className="size-6 fill-accent" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/tsuki42_"
              target="_blank"
              rel="noreferrer"
              className="text-accent hover:underline focus:outline-offset-2 focus:outline-accent"
            >
              <TwitterIcon className="size-6 fill-accent" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/tometo-dev"
              target="_blank"
              rel="noreferrer"
              className="text-accent hover:underline focus:outline-offset-2 focus:outline-accent"
            >
              <GithubIcon className="size-6 fill-accent" />
            </a>
          </li>
          <li>
            <a
              href="mailto:perfectsudh@gmail.com"
              className="text-accent focus:outline-offset-2 focus:outline-accent"
            >
              <MailIcon className="size-6 fill-accent" />
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
