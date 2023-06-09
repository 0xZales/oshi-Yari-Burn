import * as React from "react"
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from "@yaris/config/site"
import { cn } from "@yaris/lib/utils"
import logo from '@yaris/assets/logo.png'
import { Icons } from "./icons";
import { buttonVariants } from "./ui/button";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Image src={logo} alt='yaris' height={40} width={40} className='rounded-xl ' />
          <p className="text-center text-sm leading-loose md:text-left">
          Powered by{" "}
            <a
              href={'https://oshi.fi/'}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              oshi.finance
            </a>
          </p>
        </div>
        <div className="flex items-center justify-end gap-4">
          <Link
            href={siteConfig.links.discord}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={cn(
                buttonVariants({
                  size: "sm",
                  variant: "ghost",
                }),
                "w-9 px-0"
              )}
            >
              <Icons.discord className="h-5 w-5" />
              <span className="sr-only">Discord</span>
            </div>
          </Link>
          <Link
            href={siteConfig.links.telegram}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={cn(
                buttonVariants({
                  size: "sm",
                  variant: "ghost",
                }),
                "w-9 px-0"
              )}
            >
              <Icons.telegram className="h-5 w-5" />
              <span className="sr-only">Telegram</span>
            </div>
          </Link>
          <Link
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={cn(
                buttonVariants({
                  size: "sm",
                  variant: "ghost",
                }),
                "w-9 px-0"
              )}
            >
              <Icons.twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </div>
          </Link>
        </div>
      </div>
    </footer>
  )
}
