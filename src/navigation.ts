'use client'
import { locales } from '@/i18n/request'
import { createLocalizedPathnamesNavigation } from 'next-intl/navigation'
import { Pathnames } from 'next-intl/routing'

export const localePrefix = 'always'

export type LocationItem = {
  name: string
  path: string | null
  label: string
  children: LocationItem[]
}

export const locations: LocationItem[] = [
  {
    name: 'about',
    path: '/about',
    label: 'About',
    children: [
      {
        name: 'about',
        path: '/about',
        label: "Umumiy ma'lumot",
        children: []
      },
      {
        name: 'about-acca',
        path: '/about/acca',
        label: 'ACCA haqida',
        children: []
      },
      {
        name: 'about-structure',
        path: '/about/structure',
        label: 'Tuzilma',
        children: [
          {
            name: 'about-structure-rectorate',
            path: '/about/structure/rectorate',
            label: 'Rektorat',
            children: []
          },
          {
            name: 'about-structure-kafedra',
            path: '/about/structure/kafedra',
            label: 'Kafedralar',
            children: []
          },
          {
            name: 'about-structure-faculty',
            path: '/about/structure/faculty',
            label: 'Fakultetlar',
            children: []
          }
          // {
          //   name: 'about-structure-branches',
          //   path: '/about/structure/branches',
          //   label: 'Filiallar',
          //   children: [],
          // },
        ]
      },
      {
        name: 'about-rector-virtual-reception',
        path: '/about/rector-virtual-reception',
        label: 'Rektor virtual qabulxonasi',
        children: []
      },
      {
        name: 'about-applications-consideration-procedure',
        path: '/about/applications-consideration-procedure',
        label: "Murojaatlarni ko'rib chiqish tartibi",
        children: []
      },
      {
        name: 'about-regulatory-documents',
        path: '/about/regulatory-documents',
        label: "Me'yoriy hujjatlar",
        children: [
          {
            name: 'about-regulatory-documents-presidential-laws',
            path: '/about/regulatory-documents/presidential-laws',
            label: 'Prezident qonunlari',
            children: []
          },
          {
            name: 'about-regulatory-documents-presidential-decrees',
            path: '/about/regulatory-documents/presidential-decrees',
            label: 'Prezident qarorlari',
            children: []
          },
          {
            name: 'about-regulatory-documents-cabinet-decisions',
            path: '/about/regulatory-documents/cabinet-decisions',
            label: 'Vazirlar Mahkamasi qarorlari',
            children: []
          },
          {
            name: 'about-regulatory-documents-university-charter',
            path: '/about/regulatory-documents/university-charter',
            label: 'Universitet ustavi',
            children: []
          },
          {
            name: 'about-regulatory-documents-internal-labor-regulations',
            path: '/about/regulatory-documents/internal-labor-regulations',
            label: 'Ichki mehnat tartib qoidalari',
            children: []
          },
          {
            name: 'about-regulatory-documents-employment-regulations',
            path: '/about/regulatory-documents/employment-regulations',
            label: 'Ishga qabul qilish nizomi',
            children: []
          },
          {
            name: 'about-regulatory-documents-recently-announced-documents',
            path: '/about/regulatory-documents/recently-announced-documents',
            label: "E'lon qilinadigan hujjatlar",
            children: []
          }
        ]
      },
      {
        name: 'about-anticorruption',
        path: '/about/anticorruption',
        label: 'Korrupsiyaga qarshi kurashish',
        children: []
      },
      {
        name: 'about-vacancy',
        path: '/about/vacancy',
        label: "Bo'sh ish o'rinlari",
        children: []
      }
    ]
  },
  {
    name: 'activity',
    path: '/activity',
    label: 'Activity',
    children: [
      {
        name: 'activity-scientific',
        // path: '/activity/scientific',
        path: null,
        label: 'Ilmiy faoliyat',
        children: [
          {
            name: 'activity-scientific-research',
            path: '/activity/scientific/research',
            label: 'Tadqiqotlar',
            children: []
          },
          {
            name: 'activity-scientific-journal',
            path: '/activity/scientific/journal',
            label: 'Ilmiy jurnal',
            children: []
          },
          {
            name: 'activity-scientific-conferences',
            path: '/activity/scientific/conferences',
            label: 'Konferensiyalar',
            children: []
            // children: [
            //   {
            //     name: 'activity-scientific-conferences-2024',
            //     path: '/activity/scientific/conferences-2024',
            //     label: '2024 yil',
            //     children: [],
            //   },
            //   {
            //     name: 'activity-scientific-conferences-2023',
            //     path: '/activity/scientific/conferences-2023',
            //     label: '2023 yil',
            //     children: [],
            //   },
            //   {
            //     name: 'activity-scientific-conferences-2022',
            //     path: '/activity/scientific/conferences-2022',
            //     label: '2022 yil',
            //     children: [],
            //   },
            //   {
            //     name: 'activity-scientific-registration',
            //     path: '/activity/scientific/registration',
            //     label: 'Registratsiya',
            //     children: [],
            //   },
            // ],
          },
          {
            name: 'activity-scientific-articles',
            path: '/activity/scientific/articles',
            label: 'Maqolalar',
            children: []
          }
        ]
      },
      {
        name: 'activity-educational',
        path: '/activity/educational',
        label: "O'quv faoliyati",
        children: [
          // {
          //   name: 'activity-educational-plans',
          //   path: '/activity/educational/plans',
          //   label: "O'quv rejalari",
          //   children: [],
          // },
        ]
      },
      {
        name: 'activity-international',
        path: '/activity/international',
        label: 'Xalqaro faoliyat',
        children: [
          // {
          //   name: 'activity-international-partners',
          //   path: '/activity/international/partners',
          //   label: 'Xalqaro hamkor institutlar',
          //   children: [],
          // },
          // {
          //   name: 'activity-international-students',
          //   path: '/activity/international/students',
          //   label: "Chet el fuqarolari uchun ta'lim",
          //   children: [],
          // },
        ]
      },
      {
        name: 'activity-social',
        path: '/activity/social',
        label: 'Ijtimoiy faoliyat',
        children: [
          // {
          //   name: 'activity-social-club',
          //   path: '/activity/social/club',
          //   label: 'Universitet faollar klubi',
          //   children: [],
          // },
          // {
          //   name: 'activity-social-alumni-association',
          //   path: '/activity/social/alumni-association',
          //   label: 'Bitiruvchilar uyushmasi',
          //   children: [],
          // },
        ]
      }
    ]
  },
  {
    name: 'applicants',
    path: '/applicants',
    label: 'Applicants',
    children: [
      {
        name: 'qabul-komissiyasi',
        path: '/applicants',
        label: 'Qabul Komissiyasi',
        children: []
      },
      {
        name: 'bachelor',
        path: null,
        label: 'Bakalavriat',
        children: [
          {
            name: 'full-time',
            path: '/applicants/bachelor',
            label: 'Kunduzgi',
            children: [
              {
                name: 'international-programs',
                path: '/applicants/bachelor/full-time/international-programs',
                label: 'Xalqaro dasturlar',
                children: []
              },
              {
                name: 'humanitarian-programs',
                path: '/applicants/bachelor/full-time/humanitarian-programs',
                label: 'Gumanitar dasturlar',
                children: []
              },
              {
                name: 'financial-economic-programs',
                path: '/applicants/bachelor/full-time/financial-economic-programs',
                label: 'Moliyaviy-iqdisodiy dasturlar',
                children: []
              },
              {
                name: 'information-technology',
                path: '/applicants/bachelor/full-time/information-technology',
                label: 'Axborot texnologiyalari',
                children: []
              }
            ]
          },
          {
            name: 'correspondence',
            path: '/applicants/bachelor/correspondence',
            label: 'Sirtqi',
            children: []
          },
          {
            name: 'distance',
            path: '/applicants/bachelor/distance',
            label: 'Masofaviy',
            children: []
          }
        ]
      },
      {
        name: 'master',
        path: '/applicants/master',
        label: 'Magistratura',
        children: [
          {
            name: 'accounting-finance-programs',
            path: '/applicants/master/accounting-finance-programs',
            label: 'Buxgalteriya hisobi va moliya',
            children: []
          },
          {
            name: 'foreign-language-programs',
            path: '/applicants/master/foreign-language-programs',
            label: 'Xorijiy til va adabiyoti',
            children: []
          },
          {
            name: 'pedagogy-psychology-programs',
            path: '/applicants/master/pedagogy-psychology-programs',
            label: 'Pedagogika va psixologiya',
            children: []
          },
          {
            name: 'financial-audit',
            path: '/applicants/master/financial-audit',
            label: 'Davlat moliya nazorati va auditi',
            children: []
          }
        ]
      },
      {
        name: 'second-higher-education',
        path: '/applicants/second-higher-education',
        label: "Ikkinchi Oliy Ta'lim",
        children: []
      },
      {
        name: 'foreign-citizens-admission',
        path: '/applicants/foreign-citizens-admission',
        label: 'Xorijiy Fuqarolar Qabuli',
        children: []
      },
      {
        name: 'transfer-and-recover',
        path: '/applicants/transfer-and-recover',
        label: "O'qishni Ko'chirish va Tiklash",
        children: []
      },
      {
        name: 'subjects-for-examination',
        path: '/applicants/subjects-for-examination',
        label: 'Test Topshiriladigan Fanlar Majmuasi',
        children: []
      }
    ]
  },
  {
    name: 'students',
    path: '/students',
    label: 'Students',
    children: [
      // {
      //   name: 'iqtidorli-talabalarimiz',
      //   path: '/students/iqtidorli-talabalarimiz',
      //   label: 'Iqtidorli Talabalarimiz',
      //   children: [],
      // },
      // {
      //   name: 'grantlar',
      //   path: '/students/grantlar',
      //   label: 'Grantlar',
      //   children: [],
      // },
      {
        name: 'career-center',
        path: '/students/career-center',
        label: 'ISFT Karyera Markazi',
        children: []
        // children: [
        //   {
        //     name: 'career-center-haqida',
        //     path: '/students/career-center/haqida',
        //     label: 'ISFT Karyera Markazi Haqida',
        //     children: [],
        //   },
        //   {
        //     name: 'yangiliklar',
        //     path: '/students/career-center/yangiliklar',
        //     label: 'Yangiliklar',
        //     children: [],
        //   },
        //   {
        //     name: 'aloqa',
        //     path: '/students/career-center/aloqa',
        //     label: 'Aloqa',
        //     children: [],
        //   },
        // ],
      },
      // {
      //   name: 'talabalar-hayoti',
      //   path: '/students/talabalar-hayoti',
      //   label: 'Talabalar Hayoti',
      //   children: [],
      // },
      {
        name: 'library',
        path: '/students/library',
        label: 'Kutubxona',
        children: []
      }
    ]
  },
  {
    name: 'news',
    path: '/news',
    label: 'News',
    children: []
  },
  {
    name: 'faq',
    path: '/faq',
    label: 'FAQ',
    children: []
  },
  {
    name: 'contacts',
    path: '/contacts',
    label: 'Contacts',
    children: []
  }
]

// @ts-ignore

export const pathnames = locations.reduce((acc, location) => {
  // @ts-ignore
  acc[location.path] = location.path
  location.children.forEach(child => {
    // @ts-ignore
    acc[child.path] = child.path
  })
  return acc
}) as Pathnames<typeof locales>

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames })
