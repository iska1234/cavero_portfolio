import { locales } from "@/config";
import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
    locales: locales,
    defaultLocale: "es"
})

export type Locale = (typeof routing.locales)[number]
export const {Link, redirect, usePathname, useRouter} = createNavigation(routing)