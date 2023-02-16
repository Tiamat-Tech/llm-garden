/* eslint no-unused-vars: "off" */
import { PageContainer, Card, H1, P, InfoHeader } from "./common";
import { Header } from "./header";
import { Markdown } from "../markdown";
import * as icons from "./icons";

const options = {
  "Interactive Fiction": {
    link: "/interactive-fiction/",
    logo: "/assets/icons/interactive-fiction-logo.png",
    status: "alpha",
    description:
      "Run GPT as a _player_ against one of the Zork text adventure games.",
  },
  Chat: {
    link: "/chat/",
    logo: "/assets/icons/chat-logo.png",
    description: "Chat with one of several personalities run by GPT.",
  },
  "Make Your Own Adventure": {
    link: "/myoa/",
    logo: "/assets/icons/myoa-logo.png",
    description: `
A builder/authoring tool for creating a Choose Your Own
Adventure-style story. GPT will suggest topics, choices, and
passages; you can pick and choose, or revise and author.
`.trim(),
  },
  "City Maker": {
    link: "/citymaker/",
    logo: "/assets/icons/citymaker-logo.png",
    description: `
A tool for generating a city, top-down: starting with the city description,
neighborhoods, buildings, objects, and so on.
`.trim(),
  },
  "Tone Changer": {
    link: "/tone-changer/",
    logo: "/assets/icons/tone-changer-logo.png",
    description: `
Act like you are someone else! Have your speech translated to a
different tone (or language).
`.trim(),
  },
  "Voice Composer": {
    link: "/voice-composer/",
    logo: "/assets/icons/voice-composer-logo.png",
    status: "alpha",
    description: `
Voice composer: a voice-centric text composition and editing tool
`.trim(),
  },
  "People Sim": {
    link: "/peoplesim/",
    status: "alpha",
    description: `
Simulate a few people interacting in an environment
`.trim(),
  },
  "Image Generator": {
    link: "/imagegen/",
    status: "alpha",
    description: `
A simple frontend to Replicate's Stable Diffusion API and Dall-E.
Really just a testbed for using those APIs in other experiences.
`.trim(),
  },
  "Infinite AI Array": {
    link: "https://github.com/ianb/infinite-ai-array",
    logo: "/assets/icons/iaia-logo.png",
    description: `
Make your Python lists go forever, make your dictionaries fill just in time,
and make functions appear magically when you call them. As irresponsible as
it is irresistible!
`.trim(),
  },
};

export const Home = () => {
  return (
    <PageContainer>
      <Header title="Large Language Model (GPT-3) Garden" />
      <div class="flex">
        <InfoHeader title="An LLM (GPT) Garden" class="w-1/3">
          <div class="float-left">
            <img src="/assets/icons/llm-garden-logo.png" class="w-32 h-32" />
          </div>
          <P>
            I have a little time on my hands but it's too hard to garden this
            time of year. So I'm building a garden of LLMs instead, GPT
            specifically. (GPT is a specific <em>Large Language Model</em>{" "}
            service.)
          </P>
          <P>
            Each of these is meant to be a way of exploring some idea or aspect
            of these technologies. I'm particularly interested in how each of
            these <em>feel</em>, not just how they perform.
          </P>
        </InfoHeader>
        <div class="w-2/3 grid grid-cols-2 divide-y">
          {Object.entries(options)
            .filter((x) => x[1].status !== "alpha")
            .map(([title, { link, description, logo }]) => (
              <LinkCard
                title={title}
                link={link}
                description={description}
                logo={logo}
              />
            ))}
          {Object.entries(options)
            .filter((x) => x[1].status === "alpha")
            .map(([title, { link, status, description, logo }]) => (
              <LinkCard
                status={status}
                title={title}
                link={link}
                description={description}
                logo={logo}
              />
            ))}
        </div>
      </div>
    </PageContainer>
  );
};

function LinkCard({ title, description, link, status, logo }) {
  return (
    <a href={link}>
      <Card title={title} class="hover:drop-shadow-xl w-full inline-block">
        {logo ? <img src={logo} class="w-32 h-32 float-right" /> : null}
        {status ? (
          <div class="p-2">
            <span class="bg-gray-200 text-black border-magenta border-2 rounded-full p-2">
              <icons.BangTriangle
                class="text-magenta h-4 w-4 inline-block"
                stroke-width="3"
              />{" "}
              {status}
            </span>
          </div>
        ) : null}
        <Markdown text={description} class="p-2" />
      </Card>
    </a>
  );
}

export const NotFound = ({ message }) => {
  return (
    <PageContainer>
      <Header title="Not Found" />
      <InfoHeader title="Not Found">
        <H1>404 Not Found</H1>
        <P>Page not found</P>
        {message ? <div>{message}</div> : null}
      </InfoHeader>
    </PageContainer>
  );
};
