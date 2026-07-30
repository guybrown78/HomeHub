import { type StaticImageData } from 'next/image'
import digitalResidentEngagementImage from '@/images/insights/digital-resident-engagement.jpeg'
import residentLedRetrofitImage from '@/images/insights/resident-led-retrofit.jpeg'
import dampMouldResidentCommunicationImage from '@/images/insights/damp-mould-resident-communication.jpeg'
import fuelPovertyHousingProvidersImage from '@/images/insights/fuel-poverty-housing-providers.jpeg'

export type InsightCategory = 'Resident Engagement' | 'Retrofit' | 'Repairs and Compliance' | 'Energy'

export type InsightInline = string | { text: string; href: string }

export type InsightBlock =
  | { type: 'heading'; text: string }
  | { type: 'paragraph'; content: InsightInline[] }
  | { type: 'list'; items: string[] }

export type Insight = {
  slug: string
  category: InsightCategory
  title: string
  summary: string
  publishedAt: string
  image: StaticImageData
  imageAlt: string
  featured: boolean
  seoTitle: string
  metaDescription: string
  content: InsightBlock[]
  relatedPlatform: string
  relatedPlatformUrl: string
  relatedLandlordPage: string
  relatedLandlordUrl: string
  ctaHeading: string
  ctaDescription: string
}

export const insights: Insight[] = [
  {
    slug: 'digital-resident-engagement',
    category: 'Resident Engagement',
    title: 'Digital Resident Engagement in UK Social Housing',
    summary:
      'Digital communication gives housing providers more ways to reach residents, but sending more messages does not automatically create stronger engagement. The real opportunity is to make communication more relevant, accessible and useful while giving residents simple ways to respond.',
    publishedAt: '2026-07-01',
    image: digitalResidentEngagementImage,
    imageAlt: 'Residents taking part in a discussion with a housing representative.',
    featured: true,
    seoTitle: 'Digital Resident Engagement in Social Housing | HomeHub',
    metaDescription:
      'Explore what effective digital resident engagement looks like and how housing providers can make communication more relevant, accessible and measurable.',
    relatedPlatform: 'Community',
    relatedPlatformUrl: '/platform/community',
    relatedLandlordPage: 'Resident Engagement',
    relatedLandlordUrl: '/landlords/resident-engagement',
    ctaHeading: 'Build stronger resident relationships',
    ctaDescription:
      'Discover how HomeHub can help your organisation deliver relevant communication, understand engagement and keep residents better informed.',
    content: [
      { type: 'heading', text: 'Digital communication is now part of everyday service delivery' },
      {
        type: 'paragraph',
        content: [
          'Residents use digital services throughout their daily lives. They receive updates, make appointments, find information and communicate with organisations through their phones.',
        ],
      },
      {
        type: 'paragraph',
        content: ['Housing services increasingly need to meet the same basic expectations.'],
      },
      {
        type: 'paragraph',
        content: [
          'Residents want to know what is happening in their home, what action has been taken and what they need to do next. They should not have to search through several channels or repeatedly contact their landlord for an update.',
        ],
      },
      {
        type: 'paragraph',
        content: ['Digital engagement can make that information easier to deliver, but only when it is designed around the resident.'],
      },
      { type: 'heading', text: 'Engagement is more than broadcasting information' },
      {
        type: 'paragraph',
        content: ['A message may have been sent, but that does not mean it was understood or acted upon.'],
      },
      {
        type: 'paragraph',
        content: ['Effective resident engagement should consider:'],
      },
      {
        type: 'list',
        items: [
          'who needs the information',
          'why it is relevant to them',
          'when they need to receive it',
          'whether the message is easy to understand',
          'how the resident can respond',
          'what happens after they respond',
        ],
      },
      {
        type: 'paragraph',
        content: ['This turns communication from a one-way announcement into part of an ongoing relationship.'],
      },
      { type: 'heading', text: 'The right information should reach the right residents' },
      {
        type: 'paragraph',
        content: ['Not every update is relevant to every household.'],
      },
      {
        type: 'paragraph',
        content: [
          'A local community event may only apply to one neighbourhood. Planned work may affect a particular group of homes. Energy guidance may be more useful to residents in properties with specific performance characteristics.',
        ],
      },
      {
        type: 'paragraph',
        content: ['Targeted communication can reduce unnecessary messages while helping residents recognise when information matters to them.'],
      },
      {
        type: 'paragraph',
        content: ['It also allows housing teams to communicate more clearly by property, location, resident group or service need.'],
      },
      { type: 'heading', text: 'Residents need a clear route back' },
      {
        type: 'paragraph',
        content: ['Good engagement gives residents a way to take part.'],
      },
      {
        type: 'paragraph',
        content: ['That might involve:'],
      },
      {
        type: 'list',
        items: [
          'replying to a message',
          'confirming an appointment',
          'answering a question',
          'sharing feedback',
          'registering for an event',
          'reporting a concern',
          'expressing interest in support',
          'contributing to a local decision',
        ],
      },
      {
        type: 'paragraph',
        content: ['These interactions can help housing providers understand what residents need and where additional communication may be required.'],
      },
      { type: 'heading', text: 'Accessibility must be part of the service' },
      {
        type: 'paragraph',
        content: ['Digital engagement should make services easier to access, not create another barrier.'],
      },
      {
        type: 'paragraph',
        content: [
          'Communication should use plain language, clear actions and formats that work across different devices. Housing providers should also recognise that residents have different levels of confidence, access and support needs.',
        ],
      },
      {
        type: 'paragraph',
        content: ['Digital services work best as part of a wider communication approach that gives residents straightforward ways to receive information and ask for help.'],
      },
      { type: 'heading', text: 'Measuring engagement can improve communication' },
      {
        type: 'paragraph',
        content: ['Housing providers need to understand whether communication is reaching people and prompting the intended response.'],
      },
      {
        type: 'paragraph',
        content: ['Useful engagement information may include:'],
      },
      {
        type: 'list',
        items: [
          'whether messages have been opened',
          'whether residents have responded',
          'which subjects receive the most interaction',
          'where reminders may be needed',
          'whether particular groups are being missed',
          'which communication approaches work best',
        ],
      },
      {
        type: 'paragraph',
        content: ['The purpose is not simply to collect more data. It is to improve how information is delivered and make future communication more useful.'],
      },
      { type: 'heading', text: 'Building stronger resident relationships' },
      {
        type: 'paragraph',
        content: ['Digital resident engagement should support trust, transparency and participation.'],
      },
      {
        type: 'paragraph',
        content: [
          'When residents receive relevant information, understand what is happening and have a simple way to respond, they are more likely to feel involved in the service around their home.',
        ],
      },
      {
        type: 'paragraph',
        content: ['For housing providers, this can create clearer communication, better visibility and a stronger understanding of resident needs.'],
      },
      { type: 'heading', text: 'HomeHub and resident engagement' },
      {
        type: 'paragraph',
        content: [
          'HomeHub helps housing providers deliver targeted information and maintain an accessible connection with residents through one joined-up platform.',
        ],
      },
      {
        type: 'paragraph',
        content: [
          'Housing teams can communicate about repairs, energy, local support, community activity and other services while giving residents a clearer route to respond and participate. This builds on the same approach to ',
          { text: 'Resident Engagement', href: '/landlords/resident-engagement' },
          ' used across HomeHub, and connects directly with ',
          { text: 'Community', href: '/platform/community' },
          '.',
        ],
      },
    ],
  },
  {
    slug: 'resident-led-retrofit',
    category: 'Retrofit',
    title: 'Resident-Led Retrofit: Turning Plans into Successful Delivery',
    summary:
      'Retrofit programmes are delivered in people’s homes. Their success therefore depends on resident understanding, trust and participation as much as specifications, funding and installation.',
    publishedAt: '2026-06-01',
    image: residentLedRetrofitImage,
    imageAlt: 'A resident discussing planned home-energy improvements with a retrofit representative.',
    featured: false,
    seoTitle: 'Resident Engagement in Social Housing Retrofit | HomeHub',
    metaDescription:
      'Explore how clear communication, appointments and resident participation can support more effective social housing retrofit delivery.',
    relatedPlatform: 'Energy',
    relatedPlatformUrl: '/platform/energy',
    relatedLandlordPage: 'Retrofit and Funding',
    relatedLandlordUrl: '/landlords/retrofit-funding',
    ctaHeading: 'Put residents at the centre of retrofit delivery',
    ctaDescription:
      'See how HomeHub supports clear communication, resident participation and better coordination throughout home-energy programmes.',
    content: [
      { type: 'heading', text: 'Retrofit starts before work begins' },
      {
        type: 'paragraph',
        content: [
          'For housing providers and delivery partners, a retrofit programme may begin with funding, property assessment and technical planning.',
        ],
      },
      {
        type: 'paragraph',
        content: ['For residents, it begins when they first hear that something may be changing in their home.'],
      },
      {
        type: 'paragraph',
        content: [
          'That first communication matters. Residents need to understand why the work is being proposed, what it may involve and how it could affect them.',
        ],
      },
      {
        type: 'paragraph',
        content: ['Unclear or late information can create uncertainty. Clear communication can help residents prepare, ask questions and understand the purpose of the programme.'],
      },
      { type: 'heading', text: 'Explain the work in everyday language' },
      {
        type: 'paragraph',
        content: ['Retrofit involves terms that may be familiar to housing and energy professionals but less meaningful to residents.'],
      },
      {
        type: 'paragraph',
        content: ['Technical information should be translated into clear explanations covering:'],
      },
      {
        type: 'list',
        items: [
          'what work is being considered',
          'why the property has been selected',
          'how the work may improve the home',
          'whether residents need to prepare',
          'how long appointments may take',
          'who will attend the property',
          'where residents can ask questions',
          'what happens after installation',
        ],
      },
      {
        type: 'paragraph',
        content: ['Residents do not need every technical detail at once. They need the right information at the right point.'],
      },
      { type: 'heading', text: 'Build trust throughout the programme' },
      {
        type: 'paragraph',
        content: ['Trust is not created by a single letter or consultation event.'],
      },
      {
        type: 'paragraph',
        content: ['Residents should receive consistent information before, during and after work. They should also know who is responsible for each stage and how to raise a concern.'],
      },
      {
        type: 'paragraph',
        content: ['Communication can support trust by making sure residents are informed about:'],
      },
      {
        type: 'list',
        items: [
          'surveys and assessments',
          'appointment dates',
          'contractor visits',
          'changes to scheduled work',
          'expected disruption',
          'progress within their home',
          'completion and follow-up',
          'how to use new equipment or improvements',
        ],
      },
      {
        type: 'paragraph',
        content: ['This is particularly important where several organisations are involved in delivery.'],
      },
      { type: 'heading', text: 'Make appointments and access easier' },
      {
        type: 'paragraph',
        content: ['Missed appointments and difficulties gaining access can delay retrofit programmes and create additional cost.'],
      },
      {
        type: 'paragraph',
        content: [
          'Clear reminders and accessible appointment information can make it easier for residents to prepare. Two-way communication also gives residents a route to explain access requirements, rearrange a visit or ask for support.',
        ],
      },
      {
        type: 'paragraph',
        content: ['Housing providers and contractors benefit from better visibility of resident responses before arriving at the property.'],
      },
      { type: 'heading', text: 'Keep residents informed during work' },
      {
        type: 'paragraph',
        content: ['Communication should not stop once an installation begins.'],
      },
      {
        type: 'paragraph',
        content: ['Residents may need updates about progress, delays or additional visits. They may also have questions after contractors leave.'],
      },
      {
        type: 'paragraph',
        content: [
          'A joined-up communication process helps prevent residents from being passed between different teams. It also creates a clearer record of what information has been provided and what concerns have been raised.',
        ],
      },
      { type: 'heading', text: 'Support residents after installation' },
      {
        type: 'paragraph',
        content: ['The benefits of retrofit depend partly on how residents understand and use improvements within their home.'],
      },
      {
        type: 'paragraph',
        content: ['Aftercare may include:'],
      },
      {
        type: 'list',
        items: [
          'explaining new controls',
          'providing practical energy guidance',
          'confirming completed work',
          'answering follow-up questions',
          'collecting resident feedback',
          'recording any unresolved concerns',
          'signposting further support',
        ],
      },
      {
        type: 'paragraph',
        content: ['This helps residents feel more confident while giving housing providers useful information about the delivery experience.'],
      },
      { type: 'heading', text: 'Make resident engagement visible' },
      {
        type: 'paragraph',
        content: ['Retrofit teams need to understand which residents have received information, confirmed appointments or requested help.'],
      },
      {
        type: 'paragraph',
        content: ['Clear engagement records can support programme coordination and provide evidence of resident communication throughout delivery.'],
      },
      {
        type: 'paragraph',
        content: ['This information can help housing providers identify where further contact is needed and improve their approach across future phases.'],
      },
      { type: 'heading', text: 'HomeHub and retrofit engagement' },
      {
        type: 'paragraph',
        content: ['HomeHub helps housing providers and delivery partners keep residents informed throughout planned home-energy improvements.'],
      },
      {
        type: 'paragraph',
        content: [
          'Communication, appointments, responses and practical guidance can be brought together in one accessible platform, helping teams maintain resident engagement from the first conversation through to completion. This connects with the ',
          { text: 'Energy', href: '/platform/energy' },
          ' platform and builds on the same approach to ',
          { text: 'Retrofit and Funding', href: '/landlords/retrofit-funding' },
          ' used across HomeHub.',
        ],
      },
    ],
  },
  {
    slug: 'damp-mould-resident-communication',
    category: 'Repairs and Compliance',
    title: 'Damp and Mould: Why Resident Communication Matters',
    summary:
      'A strong damp and mould response begins with listening to the resident, recording the concern clearly and maintaining communication until the issue has been investigated and resolved.',
    publishedAt: '2026-05-01',
    image: dampMouldResidentCommunicationImage,
    imageAlt: 'Residents discussing damp and mould services with a housing representative.',
    featured: false,
    seoTitle: 'Damp and Mould Resident Communication | HomeHub',
    metaDescription:
      'Explore why clear reporting, status updates and resident follow-up are essential to an effective damp and mould response.',
    relatedPlatform: 'Resolve',
    relatedPlatformUrl: '/platform/resolve',
    relatedLandlordPage: 'Compliance and Regulation',
    relatedLandlordUrl: '/landlords/compliance-regulation',
    ctaHeading: 'Create a clearer route from report to resolution',
    ctaDescription: 'See how HomeHub helps residents report concerns and gives housing teams better visibility throughout the response.',
    content: [
      { type: 'heading', text: 'Residents need a simple way to report concerns' },
      {
        type: 'paragraph',
        content: ['Residents should be able to report damp, mould and related concerns without navigating a complicated process.'],
      },
      {
        type: 'paragraph',
        content: ['The initial report should make it easy to provide useful information, including:'],
      },
      {
        type: 'list',
        items: [
          'where the issue is located',
          'when it was first noticed',
          'whether it is getting worse',
          'photographs of the affected area',
          'any impact on the household',
          'previous reports or repair visits',
          'suitable contact and appointment information',
        ],
      },
      {
        type: 'paragraph',
        content: ['Clear reporting helps housing teams understand the concern and determine the next appropriate action.'],
      },
      { type: 'heading', text: 'Acknowledgement builds confidence' },
      {
        type: 'paragraph',
        content: ['After raising an issue, residents need confirmation that it has been received.'],
      },
      {
        type: 'paragraph',
        content: [
          'Silence can leave people unsure whether anyone is taking responsibility. A clear acknowledgement should explain what will happen next and when the resident should expect another update.',
        ],
      },
      {
        type: 'paragraph',
        content: ['Even when a full assessment cannot happen immediately, timely communication shows that the concern is being taken seriously.'],
      },
      { type: 'heading', text: 'Keep communication connected to the case' },
      {
        type: 'paragraph',
        content: ['Damp and mould cases may involve housing officers, repair teams, surveyors, contractors and other support services.'],
      },
      {
        type: 'paragraph',
        content: ['Residents should not have to repeat the same information every time the case moves between teams.'],
      },
      {
        type: 'paragraph',
        content: ['A connected record can help everyone involved understand:'],
      },
      {
        type: 'list',
        items: [
          'what the resident originally reported',
          'what evidence has been provided',
          'which appointments have taken place',
          'what work has been recommended',
          'which actions remain outstanding',
          'what information has been sent',
          'whether the resident has responded',
          'whether the issue has returned',
        ],
      },
      {
        type: 'paragraph',
        content: ['This supports continuity and makes responsibility clearer.'],
      },
      { type: 'heading', text: 'Status updates reduce uncertainty' },
      {
        type: 'paragraph',
        content: ['Residents should know whether their concern is awaiting review, assigned for inspection, scheduled for work or being monitored after completion.'],
      },
      {
        type: 'paragraph',
        content: ['Regular updates can reduce the need for residents to call for progress and help them understand why a case may require several stages.'],
      },
      {
        type: 'paragraph',
        content: ['Updates should be written in plain language and make the next action clear.'],
      },
      { type: 'heading', text: 'Resolution involves more than completing a repair' },
      {
        type: 'paragraph',
        content: ['Closing a job in a repair system does not always mean the resident considers the problem resolved.'],
      },
      {
        type: 'paragraph',
        content: ['Housing providers may need to confirm:'],
      },
      {
        type: 'list',
        items: [
          'that the planned work has been completed',
          'whether further monitoring is required',
          'whether the resident has ongoing concerns',
          'whether another issue contributed to the problem',
          'whether practical guidance is needed',
          'whether the case should remain open',
        ],
      },
      {
        type: 'paragraph',
        content: ['Resident confirmation and follow-up can help housing teams understand whether the outcome has been effective.'],
      },
      { type: 'heading', text: 'Identify patterns across homes and services' },
      {
        type: 'paragraph',
        content: ['Individual reports also contribute to a wider understanding of property and service performance.'],
      },
      {
        type: 'paragraph',
        content: ['Consistent reporting can help housing providers identify:'],
      },
      {
        type: 'list',
        items: [
          'repeated concerns within a property',
          'recurring issues across similar homes',
          'delays between reporting and attendance',
          'missed appointments',
          'cases requiring repeated visits',
          'gaps in resident communication',
          'areas where earlier intervention may be useful',
        ],
      },
      {
        type: 'paragraph',
        content: ['The purpose is to support better decisions and a more consistent response.'],
      },
      { type: 'heading', text: 'Communication supports accountability' },
      {
        type: 'paragraph',
        content: ['Clear communication records help housing providers demonstrate what action was taken and when.'],
      },
      {
        type: 'paragraph',
        content: ['They also give residents greater visibility of their case and reduce the risk of important information being lost between teams.'],
      },
      {
        type: 'paragraph',
        content: ['A strong response combines effective investigation and repair work with clear ownership, regular updates and resident follow-up.'],
      },
      { type: 'heading', text: 'HomeHub and issue resolution' },
      {
        type: 'paragraph',
        content: [
          'HomeHub ',
          { text: 'Resolve', href: '/platform/resolve' },
          ' gives residents a straightforward way to report concerns, add photographs and follow progress.',
        ],
      },
      {
        type: 'paragraph',
        content: [
          'Housing teams gain a connected view of the issue from first report to final resolution, supporting clearer communication, coordinated action and a complete record of the case. This builds on the same approach to ',
          { text: 'Compliance and Regulation', href: '/landlords/compliance-regulation' },
          ' used across HomeHub.',
        ],
      },
    ],
  },
  {
    slug: 'fuel-poverty-housing-providers',
    category: 'Energy',
    title: 'Fuel Poverty and the Role of Housing Providers',
    summary:
      'Housing providers are well placed to connect residents with useful energy information and relevant support. Clear property data, accessible guidance and targeted communication can help teams identify where assistance may be most valuable.',
    publishedAt: '2026-04-01',
    image: fuelPovertyHousingProvidersImage,
    imageAlt: 'A resident receiving practical home-energy guidance.',
    featured: false,
    seoTitle: 'Fuel Poverty and the Role of Housing Providers | HomeHub',
    metaDescription:
      'Explore how housing providers can use clear property information, practical energy guidance and targeted communication to support residents.',
    relatedPlatform: 'Energy',
    relatedPlatformUrl: '/platform/energy',
    relatedLandlordPage: 'Guides',
    relatedLandlordUrl: '/resources/guides',
    ctaHeading: 'Make home-energy information easier to understand',
    ctaDescription: 'Discover how HomeHub helps housing providers share property insights, practical guidance and relevant support with residents.',
    content: [
      { type: 'heading', text: 'Energy information can be difficult to understand' },
      {
        type: 'paragraph',
        content: [
          'Residents may receive information about energy ratings, bills, tariffs, heating systems and home improvements from several different sources.',
        ],
      },
      {
        type: 'paragraph',
        content: ['The language used is not always clear, and it can be difficult to understand which information is relevant to a particular home.'],
      },
      {
        type: 'paragraph',
        content: ['Housing providers can help by presenting practical guidance in a way that connects directly to the resident and their property.'],
      },
      { type: 'heading', text: 'Start with the home' },
      {
        type: 'paragraph',
        content: ['Property information can provide useful context for resident communication.'],
      },
      {
        type: 'paragraph',
        content: ['This may include:'],
      },
      {
        type: 'list',
        items: [
          'the home’s current energy rating',
          'heating type',
          'insulation information',
          'recommended efficiency improvements',
          'planned retrofit work',
          'relevant local or national support',
          'practical guidance for the property',
        ],
      },
      {
        type: 'paragraph',
        content: ['Presenting this information clearly can help residents understand how their home performs and what changes may be possible.'],
      },
      { type: 'heading', text: 'Make guidance practical' },
      {
        type: 'paragraph',
        content: ['General energy-saving advice is not equally useful in every home.'],
      },
      {
        type: 'paragraph',
        content: [
          'Guidance should be easy to follow and realistic for the resident’s circumstances. It may include small actions, information about heating controls or explanations of improvements already installed in the property.',
        ],
      },
      {
        type: 'paragraph',
        content: ['The aim should be to make energy information more understandable rather than placing responsibility for property performance entirely on the resident.'],
      },
      { type: 'heading', text: 'Target communication where it is most relevant' },
      {
        type: 'paragraph',
        content: ['Housing providers communicate with large numbers of households across different property types and neighbourhoods.'],
      },
      {
        type: 'paragraph',
        content: ['Property and engagement information can help teams direct relevant messages to appropriate residents.'],
      },
      {
        type: 'paragraph',
        content: ['This may include:'],
      },
      {
        type: 'list',
        items: [
          'information about local energy-support events',
          'guidance for residents affected by planned work',
          'reminders about available help',
          'explanations of EPC recommendations',
          'advice connected to a particular heating system',
          'invitations to energy or retrofit consultations',
        ],
      },
      {
        type: 'paragraph',
        content: ['More focused communication can make support easier to find and reduce the number of irrelevant messages residents receive.'],
      },
      { type: 'heading', text: 'Connect energy information with wider support' },
      {
        type: 'paragraph',
        content: ['Energy concerns do not exist in isolation.'],
      },
      {
        type: 'paragraph',
        content: [
          'Residents may also need help understanding bills, accessing local support, reporting problems with heating or finding out whether improvements are planned for their home.',
        ],
      },
      {
        type: 'paragraph',
        content: ['Housing providers can act as an important connection point by bringing together reliable information and signposting appropriate services.'],
      },
      {
        type: 'paragraph',
        content: ['The communication should remain respectful, accessible and easy to act upon.'],
      },
      { type: 'heading', text: 'Listen to resident responses' },
      {
        type: 'paragraph',
        content: ['Two-way communication helps housing teams understand where residents need more information or practical support.'],
      },
      {
        type: 'paragraph',
        content: ['Residents may want to ask questions about:'],
      },
      {
        type: 'list',
        items: [
          'their energy rating',
          'heating controls',
          'high energy use',
          'planned retrofit work',
          'available schemes',
          'problems within the home',
          'where to obtain further advice',
        ],
      },
      {
        type: 'paragraph',
        content: ['Providing a clear route for these questions helps housing providers improve future guidance and identify recurring areas of confusion.'],
      },
      { type: 'heading', text: 'Use energy data to support better decisions' },
      {
        type: 'paragraph',
        content: ['At a portfolio level, housing providers need visibility of home energy performance and planned improvements.'],
      },
      {
        type: 'paragraph',
        content: ['Clear property information can support decisions about:'],
      },
      {
        type: 'list',
        items: [
          'which homes may benefit from further assessment',
          'where communication should be prioritised',
          'how residents are engaging with energy information',
          'which recommendations appear most frequently',
          'where retrofit planning may be required',
          'which neighbourhoods may benefit from local activity',
        ],
      },
      {
        type: 'paragraph',
        content: ['This does not replace direct resident engagement. It helps housing teams make that engagement more informed and relevant.'],
      },
      { type: 'heading', text: 'HomeHub and home energy performance' },
      {
        type: 'paragraph',
        content: ['HomeHub helps housing providers present energy information in a form residents can understand.'],
      },
      {
        type: 'paragraph',
        content: [
          'Property-level insights, EPC information, practical guidance and targeted communication can be brought together in one accessible experience, supporting stronger engagement around energy performance and household support. Explore the ',
          { text: 'Energy', href: '/platform/energy' },
          ' platform, or view our ',
          { text: 'Energy Guides', href: '/resources/guides' },
          '.',
        ],
      },
    ],
  },
]

export const insightCategories: InsightCategory[] = ['Resident Engagement', 'Retrofit', 'Repairs and Compliance', 'Energy']

export function getInsightBySlug(slug: string) {
  return insights.find((insight) => insight.slug === slug)
}

export function getFeaturedInsight() {
  return insights.find((insight) => insight.featured)!
}

export function formatMonthYear(isoDate: string) {
  return new Date(isoDate).toLocaleDateString('en-GB', { month: 'long', year: 'numeric', timeZone: 'UTC' })
}
