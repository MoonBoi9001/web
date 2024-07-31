import Link from 'apps/web/node_modules/next/link';

import { ButtonWithLinkAndEventLogging } from 'apps/web/src/components/Button/ButtonWithLinkAndEventLogging';

const communityCards = [
  {
    title: 'Aerodrome',
    href: 'aerodrome.finance',
    description: 'A next-generation DeFi protocol and AMM with friendly user experience',
    tag: 'defi',
  },
  {
    title: 'Doodles',
    href: 'doodles.app',
    description: 'Immersive storytelling through the creation of live and digital experiences',
    tag: 'nft',
  },
  {
    title: 'Morpho',
    href: 'morpho.org',
    description: 'A permissionless and non-custodial lending protocol',
    tag: 'defi',
  },
];

export default async function ActiveCommunityOfBuilders() {
  return (
    <div
      id="communityOfBuilders"
      className="flex flex-col bg-black px-4 pb-6 pt-10 sm:px-8 sm:pb-8 sm:pt-16 lg:px-20 lg:pb-10 lg:pt-20"
    >
      <div className="flex flex-col justify-between lg:flex-row lg:items-center">
        <div className="aspect-[550/320] h-full w-full bg-contain bg-no-repeat bg-[url('../public/images/CommunityOfBuilders.png')]" />
        <div className="flex grow flex-col justify-start space-y-6 lg:mx-8 lg:justify-around xl:mx-20">
          <h2 className="flex flex-row font-display text-3xl sm:text-4xl lg:text-5xl">
            <span>1.</span>
            <span className="ml-4">Join an active community of Onchain Builders</span>
          </h2>
          <span className="text-base text-white sm:text-lg">
            Join a community of thousands builders just like you, building some of the coolest
            projects onchain. Reach out to our Discord support team for help.
          </span>
          <div>
            <ButtonWithLinkAndEventLogging
              href="https://discord.com/invite/buildonbase"
              eventName="join_discord"
              eventContext="why_base"
              target="_blank"
              rel="noreferrer noopener"
              linkClassNames="inline-block"
              buttonClassNames="uppercase"
            >
              Join the Discord
            </ButtonWithLinkAndEventLogging>
          </div>
        </div>
      </div>
      <div className="mt-10 sm:mt-12 lg:mt-16">
        <span className="text-lg sm:text-xl">Community Spotlight</span>
        <div className="mt-4 flex flex-col flex-wrap justify-between gap-4 sm:flex-row">
          {communityCards?.map((card) => (
            <div
              key={card.href}
              className="grid h-[330px] w-full grid-rows-[1fr_1fr] sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-16px)]"
            >
              <Link
                href={`https://${card.href}`}
                target="_blank"
                rel="noreferrer noopener"
                className="flex flex-row justify-end bg-ocsyellow pr-4 pt-6 sm:pr-6 lg:pr-10 lg:pt-8"
              >
                <span className="flex h-6 items-center justify-center rounded-xl bg-black px-2 py-1 text-xs uppercase sm:text-sm">
                  {card.tag}
                </span>
              </Link>
              <div className="bg-gray-90 p-4 sm:p-5 lg:p-6">
                <div className="mb-3 flex flex-col sm:mb-4">
                  <span className="text-sm uppercase sm:text-base">{card.title}</span>
                  <span className="text-xs lowercase text-dark-palette-foregroundMuted sm:text-sm">
                    {card.href}
                  </span>
                </div>
                <span className="text-sm sm:text-base">{card.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
