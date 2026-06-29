import { groq } from 'next-sanity'

/* ---------------- HERO ---------------- */
export const HERO_QUERY = groq`
  *[_type == "hero"][0]{
    badge,
    headline,
    subheadline,
    primaryButtonText,
    primaryButtonLink,
    secondaryButtonText,
    secondaryButtonLink,
    workflowTitle,
    workflowSubtitle
  }
`

/* ---------------- STATS ---------------- */
export const STATS_QUERY = groq`
  *[_type == "stats"][0]{
    heading,
    subtitle,
    items[]{
      icon,
      value,
      prefix,
      suffix,
      label
    }
  }
`

export const AUTOMATIONS_QUERY = groq`
  *[_type == "automations"][0]{
    heading,
    subtitle,
    items[]{
      name,
      icon,
      problem,
      solution,
      apps,
      timeSaved,
      roi
    }
  }
`


export const CASE_STUDIES_QUERY = groq`
  *[_type == "caseStudies"][0]{
    heading,
    subtitle,
    items[]{
      industry,
      problem,
      automation,
      apps,
      hoursSaved,
      moneySaved,
      result,
      icon
    }
  }
`

export const TESTIMONIALS_QUERY = groq`
*[_type == "testimonials"]{
  heading,
  subtitle,
  items[]{
    name,
    role,
    company,
    message,
    avatar,
    rating
  }
}[0]
`

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
