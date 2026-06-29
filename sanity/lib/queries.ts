import { groq } from "next-sanity"

/* ---------------- HERO ---------------- */
export const HERO_QUERY = groq`
*[_type == "hero"][0]
`

/* ---------------- STATS ---------------- */
export const STATS_QUERY = groq`
*[_type == "stats"][0]
`

/* ---------------- AUTOMATIONS ---------------- */
export const AUTOMATIONS_QUERY = groq`
*[_type == "automations"][0]
`

/* ---------------- CASE STUDIES ---------------- */
export const CASE_STUDIES_QUERY = groq`
*[_type == "caseStudies"][0]
`

/* ---------------- TESTIMONIALS (FIXED - COMMON PATTERN) ---------------- */
/**
 * Supports BOTH common Sanity structures:
 *
 * 1. testimonials document with items[]
 * 2. testimonial document (singular typo case)
 */

export const TESTIMONIALS_QUERY = groq`
*[
  _type == "testimonials" || _type == "testimonial"
][0]{
  heading,
  subtitle,
  items[]{
    name,
    role,
    company,
    message,
    rating,
    "avatar": avatar.asset->url
  }
}
`

/* ---------------- FOOTER ---------------- */
export const FOOTER_QUERY = groq`
*[_type == "footer"][0]{
  brandName,
  footerDescription,
  email,
  cta{
    label,
    href
  },
  social[]{
    label,
    href,
    "logo": logo.asset->url
  },
  nav[]{
    label,
    href
  }
}
`