'use client'

import epcScreen from '@/images/epc-rating-score.png'
import guideScreen from '@/images/property-guidebook.png'
import supportScreen from '@/images/tenant-support.png'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'
import { type MotionProps, AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { Fragment, useEffect, useRef, useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'

import { Container } from '@/components/Container'
import { PhoneFrame } from '@/components/PhoneFrame'
import { Section } from '@/components/Section'

import { HiBolt, HiBookOpen, HiWrenchScrewdriver } from 'react-icons/hi2'

interface CustomAnimationProps {
  isForwards: boolean
  changeCount: number
}

const features = [
  {
    name: 'Tenant Support & Repairs',
    description:
      'Report issues, track progress, and upload photos — all directly to your housing provider. Tenants get fast, clear updates and landlords reduce time chasing calls and paperwork.',
    icon: HiWrenchScrewdriver,
    screen: InviteScreen,
  },
  {
    name: 'Home Profile & Energy Insights',
    description:
      "Understand your home's energy performance with clear EPC data and improvement tips. Support retrofit outcomes and help tenants cut bills with personalised advice.",
    icon: HiBolt,
    screen: StocksScreen,
  },
  {
    name: 'Property Guidebook',
    description:
      'Give tenants access to simple, trusted information about their home and how to run it. From solar panels to heating controls, everything is explained in plain English.',
    icon: HiBookOpen,
    screen: InvestScreen,
  },
]

// Crossfade with a subtle directional Y drift — forward tabs drift up, backward tabs drift down
const phoneAnimation: MotionProps = {
  initial: 'initial',
  animate: 'animate',
  exit: 'exit',
  variants: {
    initial: ({ isForwards }: CustomAnimationProps) => ({
      opacity: 0,
      y: isForwards ? 18 : -18,
    }),
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
    },
    exit: ({ isForwards }: CustomAnimationProps) => ({
      opacity: 0,
      y: isForwards ? -18 : 18,
      transition: { duration: 0.3, ease: [0.55, 0, 1, 0.45] },
    }),
  },
}

function InviteScreen() {
  return <Image src={supportScreen} alt="Tenant support request screen" />
}

function StocksScreen() {
  return (
    <Image src={epcScreen} alt="Energy performance certificate insights screen" />
  )
}

function InvestScreen() {
  return <Image src={guideScreen} alt="Property guidebook screen" />
}

function usePrevious<T>(value: T) {
  let ref = useRef<T>()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

function FeaturesDesktop() {
  let [changeCount, setChangeCount] = useState(0)
  let [selectedIndex, setSelectedIndex] = useState(0)
  let prevIndex = usePrevious(selectedIndex)
  let isForwards = prevIndex === undefined ? true : selectedIndex > prevIndex

  let onChange = useDebouncedCallback(
    (selectedIndex) => {
      setSelectedIndex(selectedIndex)
      setChangeCount((changeCount) => changeCount + 1)
    },
    100,
    { leading: true },
  )

  return (
    <TabGroup
      className="grid grid-cols-12 items-center gap-8 lg:gap-16 xl:gap-24"
      selectedIndex={selectedIndex}
      onChange={onChange}
      vertical
    >
      <TabList className="relative z-10 order-last col-span-6 space-y-6">
        {features.map((feature, featureIndex) => (
          <div
            key={feature.name}
            className="relative rounded-2xl transition-colors hover:bg-brand-800/30"
          >
            {featureIndex === selectedIndex && (
              <motion.div
                layoutId="activeBackground"
                className="absolute inset-0 bg-brand-800"
                initial={{ borderRadius: 16 }}
              />
            )}
            <div className="relative z-10 p-8">
              <feature.icon className="h-8 w-8 fill-accent-400" />
              <h3 className="mt-6 text-lg font-semibold text-white">
                <Tab className="text-left data-selected:not-data-focus:outline-hidden">
                  <span className="absolute inset-0 rounded-2xl" />
                  {feature.name}
                </Tab>
              </h3>
              <p className="mt-2 text-sm text-gray-50">{feature.description}</p>
            </div>
          </div>
        ))}
      </TabList>

      <div className="relative col-span-6">
        <PhoneFrame className="relative z-10 mx-auto w-full max-w-[366px]">
          <TabPanels as={Fragment}>
            <AnimatePresence initial={false} custom={{ isForwards, changeCount }}>
              {features.map((feature, featureIndex) =>
                selectedIndex === featureIndex ? (
                  <TabPanel
                    static
                    key={feature.name + changeCount}
                    className="col-start-1 row-start-1 flex pt-8 focus:outline-offset-32 data-selected:not-data-focus:outline-hidden"
                  >
                    <motion.div
                      {...phoneAnimation}
                      custom={{ isForwards, changeCount }}
                      className="w-full"
                    >
                      <feature.screen />
                    </motion.div>
                  </TabPanel>
                ) : null,
              )}
            </AnimatePresence>
          </TabPanels>
        </PhoneFrame>
      </div>
    </TabGroup>
  )
}

function FeaturesMobile() {
  let [activeIndex, setActiveIndex] = useState(0)
  let [changeCount, setChangeCount] = useState(0)
  let slideContainerRef = useRef<React.ElementRef<'div'>>(null)
  let slideRefs = useRef<Array<React.ElementRef<'div'>>>([])
  let prevIndex = usePrevious(activeIndex)
  let isForwards = prevIndex === undefined ? true : activeIndex > prevIndex

  useEffect(() => {
    let observer = new window.IntersectionObserver(
      (entries) => {
        for (let entry of entries) {
          if (entry.isIntersecting && entry.target instanceof HTMLDivElement) {
            setActiveIndex(slideRefs.current.indexOf(entry.target))
            setChangeCount((c) => c + 1)
            break
          }
        }
      },
      {
        root: slideContainerRef.current,
        threshold: 0.6,
      },
    )

    for (let slide of slideRefs.current) {
      if (slide) {
        observer.observe(slide)
      }
    }

    return () => {
      observer.disconnect()
    }
  }, [slideContainerRef, slideRefs])

  return (
    <>
      {/* Phone — static, original max-width preserved */}
      <div className="px-4 sm:px-6">
        <PhoneFrame className="relative mx-auto w-full max-w-[366px]">
          <div className="grid w-full">
            <AnimatePresence initial={false} custom={{ isForwards, changeCount }}>
              {features.map((feature, featureIndex) =>
                activeIndex === featureIndex ? (
                  <motion.div
                    key={feature.name + changeCount}
                    {...phoneAnimation}
                    custom={{ isForwards, changeCount }}
                    className="col-start-1 row-start-1 w-full pt-6"
                  >
                    <feature.screen />
                  </motion.div>
                ) : null,
              )}
            </AnimatePresence>
          </div>
        </PhoneFrame>
      </div>

      {/* Info card carousel — negative margin pulls cards up to overlap phone bottom */}
      <div
        ref={slideContainerRef}
        className="relative z-10 -mb-4 -mt-48 flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {features.map((feature, featureIndex) => (
          <div
            key={featureIndex}
            ref={(ref) => ref && (slideRefs.current[featureIndex] = ref)}
            className="w-full flex-none snap-center px-4 sm:px-6"
          >
            <div className="rounded-2xl bg-brand-800/95 p-6 backdrop-blur-sm sm:p-10">
              <feature.icon className="h-8 w-8 fill-accent-400" />
              <h3 className="mt-6 text-sm font-semibold text-white sm:text-lg">
                {feature.name}
              </h3>
              <p className="mt-2 text-sm text-gray-50">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-center gap-3">
        {features.map((_, featureIndex) => (
          <button
            type="button"
            key={featureIndex}
            className={clsx(
              'relative h-0.5 w-4 rounded-full',
              featureIndex === activeIndex ? 'bg-gray-300' : 'bg-gray-500',
            )}
            aria-label={`Go to slide ${featureIndex + 1}`}
            onClick={() => {
              slideRefs.current[featureIndex].scrollIntoView({
                block: 'nearest',
                inline: 'nearest',
              })
            }}
          >
            <span className="absolute -inset-x-1.5 -inset-y-3" />
          </button>
        ))}
      </div>
    </>
  )
}

export function PrimaryFeatures() {
  return (
    <Section
      id="features"
      aria-label="Features for residents and landlords"
      className="bg-brand-950 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-accent-400">
            HomeHub is your go-to guide for everything about your&nbsp;home.
          </h2>
          <p className="mt-2 text-lg text-white">
            It helps tenants save money, manage energy use, and stay on top of
            repairs and responsibilities. Designed to support both residents and
            landlords, HomeHub makes home information easy, accessible, and
            sustainable.
          </p>
        </div>
      </Container>
      <div className="mt-16 md:hidden">
        <FeaturesMobile />
      </div>
      <Container className="hidden md:mt-20 md:block">
        <FeaturesDesktop />
      </Container>
    </Section>
  )
}
